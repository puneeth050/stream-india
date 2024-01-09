import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const getSelf = async () => {
    const self = await currentUser();

    if(!self || !self.username) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { externalUserId: self.id },
    });

    if(!user) {
        throw new Error("Not found");
    }

    return user;
}


// To load a creator dashboard using the current user
export const getSelfByUsername = async (username: string) => {
    const self = await currentUser();

    if(!self || !self.username) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({ 
        where: { username: username},
    });

    if(!user) {
        throw new Error("User not found");
    }

    if (self.username !== user.username) {
        throw new Error("Unauthorized");
    }

    return user;
};

