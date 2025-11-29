"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRouter, useSearchParams } from "next/navigation";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        cnic: "",
        email: "",
        phone: "",
        segment: "",
        code: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [submittedSegment, setSubmittedSegment] = useState("");
    const [hasReferral, setHasReferral] = useState<string>("");
    const [referralCount, setReferralCount] = useState<string>("");

    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    // detect segment from query
    const forcedGameShow = searchParams.get("segment") === "game-show";
    const forcedCompanyRep =
        searchParams.get("segment") === "company-representative";

    useEffect(() => {
        if (forcedGameShow) {
            setFormData((prev) => ({ ...prev, segment: "Game Show" }));
        }
        if (forcedCompanyRep) {
            setFormData((prev) => ({ ...prev, segment: "Company Representative" }));
        }
    }, [forcedGameShow, forcedCompanyRep]);

    const segments = [
        "Company Representative (KPK)",
        "Company Representative (Punjab)",
        "Company Representative (Sindh)",
        "Company Representative (Balochistan)",
        "Company Representative (Dubai)",
        "Company Representative (Middle East)",
        "Company Representative (Europe)",
        "Company Representative (USA)",
        "Game Show",
    ];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target as any;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (
            !formData.fullName ||
            !formData.cnic ||
            !formData.email ||
            !formData.phone ||
            !formData.segment ||
            !formData.code
        ) {
            alert("Please fill all required fields.");
            return;
        }

        // Game Show specific validation
        if (formData.segment === "Game Show") {
            const paid = (formRef.current?.elements.namedItem("paid") as RadioNodeList)
                ?.value;
            const receipt = (
                formRef.current?.elements.namedItem("receipt") as HTMLInputElement
            )?.value;
            if (!paid || !receipt) {
                alert("Please complete Game Show payment fields.");
                return;
            }
            if (!hasReferral) {
                alert("Please confirm if you have referrals.");
                return;
            }
            if (hasReferral === "Yes" && !referralCount) {
                alert("Please select referral count (10, 20, or 30).");
                return;
            }
        }

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_2fcnt5c",
                "template_5swtl32",
                formRef.current,
                "uHJxD71AiMCXgTihs"
            )
            .then(
                () => {
                    setSubmittedSegment(formData.segment);
                    setSubmitted(true);
                    formRef.current?.reset();
                    setFormData({
                        fullName: "",
                        cnic: "",
                        email: "",
                        phone: "",
                        segment: forcedGameShow
                            ? "Game Show"
                            : forcedCompanyRep
                                ? "Company Representative"
                                : "",
                        code: "",
                    });
                    setHasReferral("");
                    setReferralCount("");
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    alert("Failed to send form. Please try again.");
                }
            );
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-yellow-900 text-white min-h-screen flex items-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-xl"
                >
                    Registration Form
                </motion.h2>

                {!submitted ? (
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-10 space-y-4 bg-gray-900/60 border border-yellow-500/30 shadow-lg rounded-2xl p-8"
                    >
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="cnic"
                            placeholder="CNIC / Passport Number"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                            onChange={handleChange}
                            required
                        />

                        {/* Forced segments */}
                        {forcedGameShow ? (
                            <input type="hidden" name="segment" value="Game Show" />
                        ) : forcedCompanyRep ? (
                            <input
                                type="hidden"
                                name="segment"
                                value="Company Representative"
                            />
                        ) : (
                            <select
                                name="segment"
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Segment</option>
                                {segments.map((seg) => (
                                    <option key={seg} value={seg}>
                                        {seg}
                                    </option>
                                ))}
                            </select>
                        )}

                        {/* Game Show extra fields */}
                        {formData.segment === "Game Show" && (
                            <div className="space-y-4">
                                <p className="text-gray-300 font-semibold">
                                    Have you paid the registration fee?
                                </p>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="paid" value="Yes" required /> Yes
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="paid" value="No" required /> No
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="receipt"
                                    placeholder="Receipt Number"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                                    required
                                />

                                {/* Referral Section */}
                                <p className="text-gray-300 font-semibold">
                                    Do you have referrals?
                                </p>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="hasReferral"
                                            value="Yes"
                                            checked={hasReferral === "Yes"}
                                            onChange={() => setHasReferral("Yes")}
                                            required
                                        />
                                        Yes
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="hasReferral"
                                            value="No"
                                            checked={hasReferral === "No"}
                                            onChange={() => setHasReferral("No")}
                                            required
                                        />
                                        No
                                    </label>
                                </div>

                                {hasReferral === "Yes" && (
                                    <select
                                        name="referralCount"
                                        className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                                        value={referralCount}
                                        onChange={(e) => setReferralCount(e.target.value)}
                                        required
                                    >
                                        <option value="">Select Referral Count</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                    </select>
                                )}
                            </div>
                        )}

                        <input
                            type="text"
                            name="code"
                            placeholder="Unique Code"
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-200 outline-none"
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] 
              hover:from-[#F5E0A9]/90 hover:to-[#D4AF37]/90
              shadow-[0_0_15px_rgba(212,175,55,0.7)] 
              duration-200 cursor-pointer text-gray-900 font-semibold py-3 rounded-lg transition"
                        >
                            Complete Registration
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 text-center bg-gray-900/60 border border-green-500/30 p-8 rounded-2xl shadow-lg"
                    >
                        <h2 className="text-lg font-semibold text-green-400">
                            Your response has been submitted
                        </h2>
                        {submittedSegment === "Game Show" ? (
                            <p className="text-gray-300 mt-2">
                                Please send the payment screenshot{" "}
                                {hasReferral === "Yes" &&
                                    `(with referral persons’ names & numbers for ${referralCount} people)`}{" "}
                                to <span className="text-yellow-400">+92XXXXXXXXX</span>
                            </p>
                        ) : (
                            <p className="text-gray-300 mt-2">
                                Thank you for registering as a Company Representative.
                            </p>
                        )}
                        <p className="text-gray-300 mt-2">
                            You will receive a confirmation email shortly.
                        </p>
                        <button
                            onClick={() => router.push("/")}
                            className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5E0A9] to-[#D4AF37] text-gray-900 font-semibold hover:scale-105 transition-transform duration-300"
                        >
                            Back to Home
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
