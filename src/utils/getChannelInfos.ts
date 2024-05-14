import React from "react";
import {ChannelInfo} from "../types/channel.ts";

export const getChannelInfos = (channelId: string, setChannelInfos: React.Dispatch<React.SetStateAction<ChannelInfo | null>>) => {
  fetch(
    `api/channels?id=${channelId}&key=${import.meta.env.VITE_API_KEY}&part=snippet`,
    {
      method: "GET",
      mode: "cors"

    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((response) => {
      setChannelInfos(response.items[0].snippet)
    })
    .catch((e) => {
      console.error("Error", e);
    });
};
