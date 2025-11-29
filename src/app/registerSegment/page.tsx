"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SegmentOption = "Stylish" | "Jobs" | "Professional";
type CheckboxOption = string;

type Referral = {
  name: string;
  fatherName: string;
  contact: string;
};

type FormData = {
  name: string;
  fatherName: string;
  phone: string;
  education: string;
  domicile: string;
  segment: SegmentOption | "";
  selectedOptions: CheckboxOption[];
  registrationFee: "Yes" | "No" | "";
  receiptFile: File | null;
  cvFile: File | null;
  reason: string;
  referrals: Referral[];
};

export default function AdvancedRegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    fatherName: "",
    phone: "",
    education: "",
    domicile: "",
    segment: "",
    selectedOptions: [],
    registrationFee: "",
    receiptFile: null,
    cvFile: null,
    reason: "",
    referrals: [
      { name: "", fatherName: "", contact: "" },
      { name: "", fatherName: "", contact: "" },
    ],
  });

  const segmentOptions: SegmentOption[] = ["Stylish", "Jobs", "Professional"];
  const domicileOptions = ["KPK", "Punjab", "Sindh", "Balochistan", "Other"];

  const segmentCheckboxes: Record<SegmentOption, string[]> = {
    Stylish: ["Fashion", "Drama", "Singing", "Theatre Show", "Lucky Draw"],
    Jobs: ["General Managers", "Managers", "Executives", "Broakership", "Lucky Draw"],
    Professional: [
      "Entrepreneurship",
      "Networking",
      "Financial Services",
      "Advisories and Trainings",
      "Lucky Draw",
    ],
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (name.startsWith("referral")) {
      const [_, idxStr, field] = name.split("-"); // e.g., referral-0-name
      const idx = parseInt(idxStr);
      setFormData((prev) => {
        const updatedReferrals = [...prev.referrals];
        (updatedReferrals[idx] as any)[field as keyof Referral] = value;
        return { ...prev, referrals: updatedReferrals };
      });
    } else if (name === "receiptFile" && type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, receiptFile: file }));
    } else if (name === "cvFile" && type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData((prev) => ({ ...prev, cvFile: file }));
    } else if (name === "selectedOptions") {
      const checked = (e.target as HTMLInputElement).checked;
      const option = value;
      setFormData((prev) => {
        let updated = [...prev.selectedOptions];
        if (checked) {
          if (!updated.includes(option)) updated.push(option);
        } else {
          updated = updated.filter((o) => o !== option && o !== "Lucky Draw");
        }
        // always include Lucky Draw
        if (prev.segment) {
          if (!updated.includes("Lucky Draw")) updated.push("Lucky Draw");
        }
        return { ...prev, selectedOptions: updated };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation for required fields
    const requiredFields: (keyof FormData)[] = [
      "name",
      "fatherName",
      "phone",
      "education",
      "domicile",
      "segment",
      "reason",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill the field: ${field}`);
        return;
      }
    }

    if (formData.registrationFee === "Yes" && !formData.receiptFile) {
      alert("Please upload your payment receipt.");
      return;
    }

    if (!formData.cvFile) {
      alert("Please upload your CV.");
      return;
    }

    for (const [i, ref] of formData.referrals.entries()) {
      if (!ref.name || !ref.fatherName || !ref.contact) {
        alert(`Please fill all fields for referral ${i + 1}`);
        return;
      }
    }

    console.log("Form submitted", formData);
    alert("Form submitted successfully!");
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10 max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
        >
          Registration Form
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 bg-gray-900/60 border border-yellow-500/30 shadow-lg rounded-2xl p-8"
        >
          {/* Name, Father, Phone, Education */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
  name="education"
  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
  value={formData.education}
  onChange={handleChange}
  required
>
  <option value="" disabled hidden>
    Select Education
  </option>
  <option value="Matriculation or Equivalent">Matriculation or Equivalent</option>
  <option value="Intermediate or Equivalent">Intermediate or Equivalent</option>
  <option value="Bachelors or Equivalent">Bachelors or Equivalent</option>
  <option value="MS or PhD or Equivalent">MS or PhD or Equivalent</option>
</select>


          {/* Domicile */}
          <select
            name="domicile"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
            onChange={handleChange}
            value={formData.domicile}
            required
          >
            <option value="" disabled hidden>
              Select Domicile Province
            </option>
            {domicileOptions.map((dom) => (
              <option key={dom} value={dom}>
                {dom}
              </option>
            ))}
          </select>

          {/* Segment */}
          <select
            name="segment"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
            onChange={handleChange}
            value={formData.segment}
            required
          >
            <option value="" disabled hidden>
              Select Segment
            </option>
            {segmentOptions.map((seg) => (
              <option key={seg} value={seg}>
                {seg}
              </option>
            ))}
          </select>

          {/* Dynamic Checkboxes */}
          {formData.segment && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {segmentCheckboxes[formData.segment as SegmentOption].map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="selectedOptions"
                    value={opt}
                    checked={formData.selectedOptions.includes(opt)}
                    onChange={handleChange}
                    disabled={opt === "Lucky Draw"}
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}

          {/* Reason */}
          <textarea
            name="reason"
            placeholder="Why do you want to join?"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none resize-none"
            value={formData.reason}
            onChange={handleChange}
            required
          />

          {/* Registration Fee */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Have you paid the registration fee?</p>
            <div className="flex gap-4">
              {["Yes", "No"].map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="registrationFee"
                    value={opt}
                    checked={formData.registrationFee === opt}
                    onChange={handleChange}
                    required
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Receipt Upload */}
          {formData.registrationFee === "Yes" && (
            <label className="block">
              <span className="inline-block mb-2 font-semibold">Upload Receipt</span>
              <input
                type="file"
                name="receiptFile"
                accept="image/*"
                onChange={handleChange}
                required
                className="hidden"
                id="receiptFile"
              />
              <button
                type="button"
                onClick={() => document.getElementById("receiptFile")?.click()}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg transition"
              >
                Choose Receipt
              </button>
            </label>
          )}

          {/* Referrals */}
          {formData.referrals.map((ref, idx) => (
            <div key={idx} className="space-y-2 border border-yellow-500/30 p-4 rounded-xl">
              <p className="font-semibold">Referral {idx + 1}</p>
              <input
                type="text"
                name={`referral-${idx}-name`}
                placeholder="Name"
                value={ref.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 outline-none"
                required
              />
              <input
                type="text"
                name={`referral-${idx}-fatherName`}
                placeholder="Father Name"
                value={ref.fatherName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 outline-none"
                required
              />
              <input
                type="tel"
                name={`referral-${idx}-contact`}
                placeholder="Contact"
                value={ref.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 outline-none"
                required
              />
            </div>
          ))}

          {/* CV Upload */}
          <label className="block">
            <span className="inline-block mb-2 font-semibold">Upload CV</span>
            <input
              type="file"
              name="cvFile"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="hidden"
              id="cvFile"
            />
            <button
              type="button"
              onClick={() => document.getElementById("cvFile")?.click()}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-lg transition"
            >
              Choose CV
            </button>
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Complete Registration
          </button>
        </motion.form>
      </div>
    </section>
  );
}
