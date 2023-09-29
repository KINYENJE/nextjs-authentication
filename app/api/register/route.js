import User from "@/models/user";
import { NextResponse } from "next/server";

import connectMongoDB from "@/lib/mongodb";

import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password


        await connectMongoDB(); // Connect to MongoDB
        await User.create({name, email, password: hashedPassword }); // Create a new user

        // console.log("Name: ", name)
        // console.log("Email: ", email)
        // console.log("Password: ", password)

        return NextResponse.json({message: "User created"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: error.message}, {status: 500})
    }
}