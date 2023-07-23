import { auth, currentUser } from "@clerk/nextjs"
import { prisma } from "./db"

export const getUserClerkId = async () => {
    const { userId } = await auth()
    const user = await prisma.user.findUniqueOrThrow({
        where: {
            clerkId: userId,
        }
    })
    return user
}
