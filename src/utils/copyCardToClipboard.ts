import {toBlob} from "html-to-image/es";
import React from "react";

export async function copyCardToClipboard(setCopyLabel: React.Dispatch<string>) {
  setCopyLabel("Copying...");
  const cardToCopy = document.getElementById("youtube-card")

  if (cardToCopy) {
    toBlob(cardToCopy)
      .then(function (blob) {
        if (blob) {
          const items = [new ClipboardItem({'image/png': blob})];

          navigator.clipboard.write(items)
            .then(() => {
              setCopyLabel("Copied to clipboard !")
              setTimeout(() => {
                setCopyLabel("Copy")
              }, 2000)
            })
            .catch(() => {
              setCopyLabel("Error, please retry...")
              setTimeout(() => {
                setCopyLabel("Copy")
              }, 2000)
            });
        }
      })
      .catch(function () {
        setCopyLabel("Error, please retry...")
        setTimeout(() => {
          setCopyLabel("Copy")
        }, 2000)
      });

  }
}