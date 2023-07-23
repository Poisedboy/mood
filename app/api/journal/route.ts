import { getUserClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async () => {
    const user = await getUserClerkId()
    const entry = await prisma.journalEntry.create({
        data: {
            userId: user.id,
            content: 'Write about your day!',
        }
    })

    revalidatePath('/journal')

    return NextResponse.json({ data: entry })
}

// export const DELETE = async () => {
//     await prisma.journalEntry.delete({
//         where: {
//             id: ''
//         }
//     })

//     return NextResponse.json({ data: 'Entry is deleted!' })
// }
