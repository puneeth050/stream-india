"use client";
import { useParticipants } from "@livekit/components-react";
import { useState } from "react";

 

interface ChatCommunityProps {
    viewerName: string;
    hostName: string;
    isHidden: boolean;
}

export const ChatCommunity = ({
    viewerName,
    hostName,
    isHidden,
}: ChatCommunityProps) => {
    const [value, setValue] = useState("")
    const participants = useParticipants();

  return (
    <div>
        {participants.map((participant) => (
            <div key={Math.random()}>
                {JSON.stringify(participant.name)}
            </div>
        ))}
    </div>
  )
}
