import { geteUserClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"

const getEntries = async () => {
    const user = await geteUserClerkId()
    const entries = await prisma.journalEntry.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })
    return entries
}

const JournalPage = async () => {
    const entries = await getEntries()
    return (
        <div>
            {
                entries.map(entry => (
                    <ul>

                    </ul>
                ))
            }
        </div>
    )
}

export default JournalPage
