import { getUserClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"

export const PATCH = async (request: Request, { params }) => {
    const { content } = await request.json()

    const user = await getUserClerkId()
    const updatedEntry = await prisma.journalEntry.update({
        where: {
            userId: user.id,
            id: params.id
        },
        data: {
            content,
        }
    })
    return NextResponse.json({ data: updatedEntry })
}