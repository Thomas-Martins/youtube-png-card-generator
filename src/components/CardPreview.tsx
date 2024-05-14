import {VideoInfo} from "../types/video.ts";
import {ChannelInfo} from "../types/channel.ts";
import {formatDate, formatDuration, formatViews} from "../utils/utils.ts";
import {useEffect, useState} from "react";
import {getImage} from "../utils/getImage.ts";

interface CardPreviewProps {
  videosInfos: VideoInfo | null
  channelInfos: ChannelInfo | null
  progressValue: number
  channelDisplay: boolean
  statsDisplay: boolean
  timerDisplay: boolean
  themeDisplay: string
  paddingCardValue: number
  fontSizeValue: number
  radiusValue: number
  thumbnailRadiusValue: number
}

function CardPreview({
                       videosInfos,
                       channelInfos,
                       progressValue,
                       channelDisplay,
                       statsDisplay,
                       timerDisplay,
                       themeDisplay,
                       paddingCardValue,
                       fontSizeValue,
                       radiusValue,
                       thumbnailRadiusValue,
                     }: CardPreviewProps) {
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState<string>("");
  const [channelImageUrl, setChannelImageUrl] = useState<string>("");


  useEffect(() => {
    const fetchImages = async () => {
      const thumbnailUrl = await getImage(videosInfos?.snippet.thumbnails.maxres.url || "");
      setThumbnailImageUrl(thumbnailUrl);

      const channelUrl = await getImage(channelInfos?.thumbnails.default.url || "");
      setChannelImageUrl(channelUrl);
    };
    fetchImages();
  }, [videosInfos, channelInfos]);


  return (
    <div id='youtube-card'
         className={`corner-${radiusValue} overflow-hidden min-w-90 max-w-100 transition duration-500 padding-${paddingCardValue} ${themeDisplay === 'dark' ? 'bg-black' : 'bg-white'} `}>
      {videosInfos && (
        <div>
          <div className={`relative overflow-hidden flex radius-${thumbnailRadiusValue}`}>
            <img id="test" src={thumbnailImageUrl} alt="video-thumbnail"
                 className="w-full"/>
            {progressValue && progressValue > 0 && (
              <div className="progress-bar h-1 w-full border-none absolute bottom-0 right-0">
                <div className="progress" style={{width: `${progressValue}%`}}></div>
              </div>
            )}
            {timerDisplay && (
              <p
                className="absolute bottom-0 right-0 bg-dark-950 bg-opacity-80 rounded-sm mx-2 my-3 px-1 py-0.25 text-xs font-semibold">{formatDuration(videosInfos.contentDetails.duration)}
              </p>
            )}
          </div>
          <div className="flex gap-3 mt-3">
            {channelInfos && (
              <div>
                {channelDisplay && (
                  <img
                    src={channelImageUrl}
                    alt="channel-picture"
                    className="rounded-full w-12 h-12"
                  />
                )}
              </div>
            )}
            <div className="flex flex-col gap-1 mb-1">
              <p
                className={`font-bold title-${Math.round(fontSizeValue * 10)} transition duration-500 ${themeDisplay === 'dark' ? 'color-white' : 'color-black'}`}>{videosInfos.snippet.title}</p>
              {channelInfos && (
                <div>
                  {channelDisplay && (
                    <div>
                      <p
                        className={`font-regular text-${Math.round(fontSizeValue * 10)} ${themeDisplay === 'dark' ? 'color-lighter' : 'color-darker'}`}>{channelInfos.title}</p>
                    </div>
                  )}
                </div>
              )}
              {statsDisplay && (
                <div>
                  <p
                    className={`text-${Math.round(fontSizeValue * 10)} ${themeDisplay === 'dark' ? 'color-lighter' : 'color-darker'} `}>{formatViews(videosInfos.statistics.viewCount)} vues
                    • Il y a {formatDate(videosInfos.snippet.publishedAt)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default CardPreview;