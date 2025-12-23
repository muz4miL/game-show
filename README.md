# ADH Associates - Game Show Platform

A comprehensive platform for career opportunities, events, and lucky draw participation built with Next.js 15 and MongoDB.

## 🚀 Features

- ✨ Modern, responsive UI with glassmorphism design
- 📱 Mobile-first approach
- 🎯 Lucky draw registration system
- 💼 Job opportunities and career segments
- 📧 Contact form integration with EmailJS
- 🗄️ MongoDB database for participant management
- 🎨 Premium gold and black color scheme

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.2
- **UI Library:** React 19.1.0
- **Styling:** Tailwind CSS 4
- **Database:** MongoDB with Mongoose ODM
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons
- **Email:** EmailJS
- **Language:** TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/muz4miL/game-show.git
cd game-show
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub (already done!)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import `muz4miL/game-show` repository
5. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
6. Click "Deploy"

### Environment Variables Required

- **MONGO_URI**: MongoDB connection string from MongoDB Atlas

## 📊 API Endpoints

- `POST /api/cards` - Create participant card
- `POST /api/discount` - Record discount usage
- `GET /api/hospital?uniqueCode=XXX` - Lookup participant by unique code

## 🗄️ Database Models

### Card Model
- name
- cnic
- mobile
- email
- receiptNumber
- uniqueCode (unique)
- timestamps

### Discount Model
- uniqueCode
- chalanNumber
- discountAmount
- hospitalName
- timestamps

## 📝 Contact Information

**ADH Associates**
- Address: Suit # 01, First Floor, Burj Al Bilal Plaza, Jinnah Avenue, Margallah Enclave DHA/CDA, Main Double Road, Islamabad
- Phone: +92 300 5885527, +92 305 5833371
- Email: aamrae2022@gmail.com

## 📄 License

All Rights Reserved © 2025 ADH Associates

## 🤝 Contributing

This is a private client project. Contact ADH Associates for any inquiries.

---

Built with ❤️ in Islamabad
