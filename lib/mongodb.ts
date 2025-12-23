import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "";

// Only throw error at runtime, not during build
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
    // Check if we're in build time (no MONGO_URI needed)
    if (!MONGO_URI) {
        if (process.env.NODE_ENV === 'production') {
            console.warn("MongoDB URI not configured. Database features will be unavailable.");
        }
        return null;
    }

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, {
            bufferCommands: false,
        }).then((mongoose) => mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
