import {ChannelInfo} from "../types/channel.ts";
import {VideoInfo} from "../types/video.ts";
import {getChannelInfos} from "./getChannelInfos.ts";
import React from "react";

export const getVideosInfos = (videoId: string,
                               setVideoInfos: React.Dispatch<React.SetStateAction<VideoInfo | null>>,
                               setChannelInfos: React.Dispatch<React.SetStateAction<ChannelInfo | null>>,
) => {
  fetch(
    `/api/videos?id=${videoId}&key=${import.meta.env.VITE_API_KEY}&part=snippet,contentDetails,statistics`,
    {
      method: "GET",
      mode: "no-cors"
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      // return response.json();
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

// async function getImg(url: string) {
//   const imgId = url.split('vi/')[1]
//   try {
//     const response = await fetch(`/api/image/${imgId}`, {
//       method: 'GET',
//       mode: "same-origin"
//     });
//     if (!response.ok) {
//       throw new Error("Error fetching image");
//     }
//     const blob = await response.blob();
//     console.log(blob)
//     const imageUrl = URL.createObjectURL(blob);
//     return imageUrl;
//
//   } catch (error) {
//     console.error("Error fetching image:", error);
//     throw error;
//   }
// }


