import {useEffect, useState} from "react";
import {getVideosInfos} from "./utils/getVideosInfos.ts";
import {VideoInfo} from "./types/video.ts";
import {ChannelInfo} from "./types/channel.ts";
import CardPreview from "./components/CardPreview.tsx";
import CardOptions from "./components/CardOptions.tsx";

function App() {
  const defaultUrlId: string = "G7tn5n_PkLM";
  const [videosInfos, setVideoInfos] = useState<VideoInfo | null>(null);
  const [channelInfos, setChannelInfos] = useState<ChannelInfo | null>(null);
  const [progressValue, setProgressValue] = useState<number>(50);
  const [channelDisplay, setChannelDisplay] = useState<boolean>(true);
  const [statsDisplay, setStatsDisplay] = useState<boolean>(true);
  const [timerDisplay, setTimerDisplay] = useState<boolean>(true);
  const [themeDisplay, setThemeDisplay] = useState<string>("dark");
  const [paddingCardValue, setPaddingCardValue] = useState<number>(0);
  const [fontSizeValue, setFontSizeValue] = useState<number>(1);
  const [radiusValue, setRadiusValue] = useState<number>(0);
  const [thumbnailRadiusValue, setThumbnailRadiusValue] = useState<number>(0);

  useEffect(() => {
    getVideosInfos(defaultUrlId, setVideoInfos, setChannelInfos)
  }, [])

  return (
    <main className="color-white mx-auto max-w-screen-lg">
      <div className="text-center mt-20 px-8">
        <h1 className="mb-10">Youtube Png Generator</h1>
        <p className="text-2xl color-lighter">Youtube Png Generator is a tool for generate a youtube card
          from
          a youtube video
          URL, Idea proposed by&nbsp;
          <a className='underline' href="https://www.youtube.com/@BastiUi">Basti Ui</a> and challenged by <a
            className='underline'
            href="https://www.youtube.com/@BenjaminCode">Benjamin Code</a>.
        </p>
      </div>

      <div className="grid gap-5 lg:flex lg:gap-8 lg:justify-center mt-20 px-8">
        {videosInfos &&
          <span className="thumbnail-background ">
            <CardPreview videosInfos={videosInfos} channelInfos={channelInfos} progressValue={progressValue}
                         channelDisplay={channelDisplay} statsDisplay={statsDisplay} timerDisplay={timerDisplay}
                         themeDisplay={themeDisplay} paddingCardValue={paddingCardValue} fontSizeValue={fontSizeValue}
                         radiusValue={radiusValue} thumbnailRadiusValue={thumbnailRadiusValue}
            />
          </span>
        }
        <div className="max-w-200">
          <CardOptions setVideoInfos={setVideoInfos} setChannelInfos={setChannelInfos}
                       setProgressValue={setProgressValue} progressValue={progressValue} channelDisplay={channelDisplay}
                       setChannelDisplay={setChannelDisplay} setStatsDisplay={setStatsDisplay}
                       statsDisplay={statsDisplay} setTimerDisplay={setTimerDisplay} timerDisplay={timerDisplay}
                       setThemeDisplay={setThemeDisplay} themeDisplay={themeDisplay}
                       setPaddingCardValue={setPaddingCardValue} paddingCardValue={paddingCardValue}
                       setFontSizeValue={setFontSizeValue} fontSizeValue={fontSizeValue} setRadiusValue={setRadiusValue}
                       radiusValue={radiusValue} setThumbnailRadiusValue={setThumbnailRadiusValue}
                       thumbnailRadiusValue={thumbnailRadiusValue}
                       videosTitle={videosInfos?.snippet.title ?? "Videos Youtube Card Generator"}/>
        </div>
      </div>
      <footer className="mt-10 text-center">
        <p className="color-gray-300">Project by&nbsp;
          <a href="https://github.com/Thomas-Martins"
             className="font-bold hover:underline">@ThomasMartins</a>, code available on&nbsp;
          <a href="https://github.com/Thomas-Martins/youtube-png-card-generator"
             className="font-bold hover:underline">Github
          </a>
          .
        </p>
      </footer>
    </main>
  );
}

export default App;
