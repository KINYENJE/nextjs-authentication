import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(req) {
    try {
        await connectMongoDB();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id");
        console.log("Email: ", email)
        console.log("User: ", user)
        return NextResponse.json({user}, {status: 200})
    } catch (error) {
        console.log("Error: ", error.message)
    }
}