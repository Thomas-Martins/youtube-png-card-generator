import {ChannelInfo} from "../types/channel.ts";
import {VideoInfo} from "../types/video.ts";
import {getChannelInfos} from "./getChannelInfos.ts";
import React from "react";

export const getVideosInfos = (videoId: string,
                               setVideoInfos: React.Dispatch<React.SetStateAction<VideoInfo | null>>,
                               setChannelInfos: React.Dispatch<React.SetStateAction<ChannelInfo | null>>,
) => {
  fetch(
    `/videos?id=${videoId}&key=${import.meta.env.VITE_API_KEY}&part=snippet,contentDetails,statistics`,
    {
      method: "GET",
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching video");
      }
      return response.json();

    })
    .then((response) => {
      setVideoInfos(response.items[0])
      getChannelInfos(response.items[0].snippet.channelId, setChannelInfos)
    })
    .catch((e) => {
      console.error("Error", e);
    });
};



