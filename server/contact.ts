"use server";

import { prisma } from "@/lib/prisma";

export async function createContactMessage(data: {
    name: string;
    email: string;
    phone?: string;
    country?: string;
    message: string;
}) {
    const contact = await prisma.contactMessage.create({
        data,
    });
    return contact;
}   