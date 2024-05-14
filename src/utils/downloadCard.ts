import React from "react";
import {toPng} from "html-to-image";

export async function downloadCard(title: string, setDownloadLabel: React.Dispatch<string>) {
  setDownloadLabel("Downloading")
  const cardToDownload = document.getElementById("youtube-card");

  if (cardToDownload) {
    toPng(cardToDownload)
      .then(function (dataUrl) {
        const a = document.createElement('a');
        a.href = dataUrl;
        const cleanedTitle = title.trim().replace(/\s+/g, '-').toLowerCase();
        a.download = `ytb-${cleanedTitle}.png`;
        a.click();
        setDownloadLabel("Downloaded!");
        setTimeout(() => {
          setDownloadLabel("Download");
        }, 2000);
      })
      .catch(function (error) {
        console.error('Error downloading card:', error);
        setDownloadLabel("Try again");
      });
  }

}
