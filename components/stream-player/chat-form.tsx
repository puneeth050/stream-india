"use client";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { ChatInfo } from "./chat-info";

interface ChatFormProps {
    onSubmit: () => void;
    value: string;
    onChange: (value: string) => void;
    isHidden: boolean;
    isFollowing: boolean;
    isChatEnabled: boolean;
    isDelayed: boolean;
    isFollowersOnly: boolean;
}


export const ChatForm = ({
    onSubmit,
    value,
    onChange,
    isHidden,
    isFollowing,
    isChatEnabled,
    isDelayed,
    isFollowersOnly,
}:ChatFormProps) => {
    const [isDelayBlocked, setIsDelayBlocked] = useState(false);

    const isFollowersOnlyAndNotFollowing = isFollowersOnly && !isFollowing;
    const isDisabled = isHidden || isDelayBlocked || isFollowersOnlyAndNotFollowing;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if(!value || isDisabled) return;

        if(isDelayed && !isDelayBlocked) {
            setIsDelayBlocked(true);
            setTimeout(() => {
                setIsDelayBlocked(false);
                onSubmit();
            }, 3000);
        } else {
            onSubmit();
        }
    }

    if(isHidden) {
        return null;
    }

  return (
    <form 
    onSubmit={handleSubmit} 
    className="flex flex-col items-center gap-y-4 p-3">
       <div className="w-full">
        <ChatInfo 
        isDelayed={isDelayed}
        isFollowersOnly={isFollowersOnly}
        />
       <Input 
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={isDisabled}
        placeholder="Send a message"
        className={cn(
            "border-white/10",
            (isFollowersOnly || isDelayed) && "rounded-t-none border-t-0"
        )}
        />
       </div>
       <div className="ml-auto">
        <Button 
            variant="primary"
            type="submit"
            size="sm"
            disabled={isDisabled}
        > 
        <Send className="h-4 w-4" />
        </Button>
       </div>
    </form>
  )
}


export const ChatFormSkeleton = () => {
    return (
        <div className="flex flex-col items-center gap-y-4 p-3">
            <Skeleton className="w-full h-10" />
            <div className="flex items-center gap-x-2 ml-auto">
                <Skeleton className="w-7 h-7" />
                <Skeleton className="w-12 h-7" />
            </div>
        </div>
    );
};