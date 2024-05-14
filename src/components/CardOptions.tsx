import {AvatarIcon, MoonIcon, PieChartIcon, SunIcon, TimerIcon} from "@radix-ui/react-icons";
import {getVideosInfos} from "../utils/getVideosInfos.ts";
import {downloadCard} from "../utils/downloadCard.ts";
import React, {Dispatch, SetStateAction, useState} from "react";
import {VideoInfo} from "../types/video.ts";
import {ChannelInfo} from "../types/channel.ts";
import {copyCardToClipboard} from "../utils/copyCardToClipboard.ts";

interface CardOptionsProps {
  setVideoInfos: Dispatch<SetStateAction<VideoInfo | null>>;
  setChannelInfos: Dispatch<SetStateAction<ChannelInfo | null>>;
  progressValue: number;
  setProgressValue: Dispatch<SetStateAction<number>>;
  setChannelDisplay: Dispatch<SetStateAction<boolean>>;
  channelDisplay: boolean;
  statsDisplay: boolean;
  setStatsDisplay: Dispatch<SetStateAction<boolean>>;
  timerDisplay: boolean;
  setTimerDisplay: Dispatch<SetStateAction<boolean>>;
  themeDisplay: string;
  setThemeDisplay: Dispatch<SetStateAction<string>>;
  paddingCardValue: number;
  setPaddingCardValue: Dispatch<SetStateAction<number>>;
  fontSizeValue: number;
  setFontSizeValue: Dispatch<SetStateAction<number>>;
  radiusValue: number;
  setRadiusValue: Dispatch<SetStateAction<number>>;
  thumbnailRadiusValue: number;
  setThumbnailRadiusValue: Dispatch<SetStateAction<number>>;
  videosTitle: string
}

function CardOptions({
                       setVideoInfos,
                       setChannelInfos,
                       progressValue,
                       setProgressValue,
                       setChannelDisplay,
                       channelDisplay,
                       statsDisplay,
                       setStatsDisplay,
                       timerDisplay,
                       setTimerDisplay,
                       themeDisplay,
                       setThemeDisplay,
                       paddingCardValue,
                       setPaddingCardValue,
                       fontSizeValue,
                       setFontSizeValue,
                       radiusValue,
                       setRadiusValue,
                       thumbnailRadiusValue,
                       setThumbnailRadiusValue,
                       videosTitle
                     }: CardOptionsProps) {

  const [downloadLabel, setDownloadLabel] = useState<string>("Download")
  const [copyLabel, setCopyLabel] = useState<string>("Copy")
  const handleInputUrl = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    const url = ev.target.value;
    if (url.includes('https://www.youtube.com/watch?v=')) {
      const urlId = url.split("=")[1];
      getVideosInfos(urlId, setVideoInfos, setChannelInfos);
    }
  };

  const handleProgressChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setProgressValue(Number(ev.target.value));
  };

  const handleRadiusChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setRadiusValue(Number(ev.target.value));
  };

  const handleThumbnailRadiusChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setThumbnailRadiusValue(Number(ev.target.value));
  };

  const handleFontSizeChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setFontSizeValue(Number(ev.target.value));
  };

  const handlePaddingChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setPaddingCardValue(Number(ev.target.value));
  };

  const handleChannelDisplay = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
    setChannelDisplay(!channelDisplay);
  };

  const handleStatsDisplay = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
    setStatsDisplay(!statsDisplay);
  };

  const handleTimerDisplay = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
    setTimerDisplay(!timerDisplay);
  };

  const handleThemeDisplay = (theme: string) => {
    setThemeDisplay(theme);
  };

  return (
    <div className=" bg-dark-900 rounded-xl">
      <h4 className="text-center p-2 color-lighter text-sm bg-dark-950 rounded-t-xl">Card Options</h4>
      <div>
        <div className="text-center p-3 border-b-solid border-1 border-dark-300">
          <input className="bg-black w-full p-2 rounded-lg border-solid border-1 border-dark-300 color-white"
                 type="text"
                 onChange={handleInputUrl}/>
        </div>
        <div className="flex gap-20 p-3 justify-between items-center border-b-solid border-1 border-dark-300">
          <p>Display</p>
          <div className="flex gap-3">
            <div
              onClick={handleChannelDisplay}
              className={`px-3 py-1.5 rounded-lg flex items-center hover:bg-dark-300 hover:scale-110 transition duration-500 ${channelDisplay ? `bg-dark-500 border-1 border-solid border-dark-500` : `bg-dark-950 border-1 border-dark-300 border-solid`}`}>
              <AvatarIcon width={20} height={20}/>
            </div>
            <div
              onClick={handleStatsDisplay}
              className={`px-3 py-1.5 rounded-lg flex items-center hover:bg-dark-300 hover:scale-110 transition duration-500 ${statsDisplay ? `bg-dark-500 border-1 border-solid border-dark-500` : `bg-dark-950 border-1 border-dark-300 border-solid`}`}>
              <PieChartIcon width={20} height={20}/>
            </div>
            <div
              onClick={handleTimerDisplay}
              className={`px-3 py-1.5 rounded-lg flex items-center hover:bg-dark-300 hover:scale-110 transition duration-500 ${timerDisplay ? `bg-dark-500 border-1 border-solid border-dark-500` : `bg-dark-950 border-1 border-dark-300 border-solid`}`}>
              <TimerIcon width={20} height={20} className=""/>
            </div>
          </div>
        </div>
        <div className="flex gap-20 p-3 justify-between items-center border-b-solid border-1 border-dark-300">
          <p>Theme</p>
          <div className="flex">
            <div
              onClick={() => {
                handleThemeDisplay("light")
              }}
              className={` px-3 py-1.5 rounded-l-lg flex items-center  transition duration-500 ${themeDisplay === 'light' ? "bg-dark-500 border-1 border-solid border-dark-300" : "bg-dark-950 hover:bg-dark-300"}`}>
              <SunIcon width={20} height={20}/>
            </div>
            <div
              onClick={() => {
                handleThemeDisplay("dark")
              }}
              className={` px-3 py-1.5 rounded-r-lg flex items-center transition duration-500 ${themeDisplay === 'dark' ? "bg-dark-500 border-1 border-solid border-dark-300" : "bg-dark-950 hover:bg-dark-300"}`}>
              <MoonIcon width={20} height={20}/>
            </div>
          </div>
        </div>
        <div
          className="grid grid-cols-2 gap-10 justify-between p-3 items-center border-b-solid border-1 border-dark-300">
          <div className="flex gap-1 items-baseline">
            <p>Progress</p>
            <p
              className="text-xs bg-black px-1.5 py-0.5 rounded-lg border-1 border-solid border-dark-300">{progressValue} %
            </p>
          </div>
          <div>
            <input name="progress" type="range" min="0" max="100" value={progressValue} className="w-full "
                   onChange={handleProgressChange}/>
          </div>
        </div>
        <div className="p-3 border-b-solid border-1 border-dark-300">
          <p className="mb-3">Advance parameters </p>
          <div className="grid grid-cols-2 justify-between gap-8 ml-4">
            <div className="flex gap-1 items-baseline">
              <p> • Corner</p>
              <p
                className="text-xs bg-black px-1.5 py-0.5 rounded-lg border-1 border-solid border-dark-300"
              >
                x{radiusValue}
              </p>
            </div>
            <input name="thumbnail-border" type="range" min="0" max="10" value={radiusValue} className="w-full"
                   onChange={handleRadiusChange}/>
          </div>
          <div className="mt-2 grid grid-cols-2 justify-between gap-8 ml-4">
            <div className="flex gap-1 items-baseline">
              <p> • Thumbnail</p>
              <p
                className="text-xs bg-black px-1.5 py-0.5 rounded-lg border-1 border-solid border-dark-300"
              >
                x{thumbnailRadiusValue}
              </p>
            </div>
            <input name="thumbnail-border" type="range" min="0" max="10" value={thumbnailRadiusValue} className="w-full"
                   onChange={handleThumbnailRadiusChange}/>
          </div>
          <div className="mt-2 grid grid-cols-2 justify-between gap-8 ml-5">
            <div className="flex gap-1 items-baseline">
              <p>• Text Size</p>
              <p
                className="text-xs bg-black px-1.5 py-0.5 rounded-lg border-1 border-solid border-dark-300"
              >
                x{fontSizeValue}
              </p>
            </div>
            <input name="thumbnail-border" type="range" min="0.5" max="1.5" step="0.1" value={fontSizeValue}
                   className="w-full"
                   onChange={handleFontSizeChange}/>
          </div>
          <div className="mt-2 grid grid-cols-2 justify-between gap-8 ml-5">
            <div className="flex gap-1 items-baseline">
              <p> • Padding</p>
              <p
                className="text-xs bg-black px-1.5 py-0.5 rounded-lg border-1 border-solid border-dark-300"
              >
                x{paddingCardValue}
              </p>
            </div>
            <input name="thumbnail-border" type="range" min="0" max="10" value={paddingCardValue} className="w-full"
                   onChange={handlePaddingChange}/>
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center p-3">
          <button
            onClick={() => copyCardToClipboard(setCopyLabel)}
            className="color-white bg-black px-4 py-2 border-solid border-1 border-dark-300 rounded-lg hover:bg-dark-800 transition duration-300">{copyLabel}
          </button>
          <button
            onClick={() => {
              downloadCard(videosTitle, setDownloadLabel)
            }}
            className="color-white bg-black px-4 py-2 border-solid border-1 border-dark-300 rounded-lg hover:bg-dark-800 transition duration-300">{downloadLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardOptions;