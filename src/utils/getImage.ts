export const getImage = async (imgUrl: string) => {
  let url = '';

  if (imgUrl.includes('i.ytimg.com')) {
    const imgId = imgUrl.split('vi/').pop();
    url = `/image/${imgId}`;
  } else if (imgUrl.includes('yt3.ggpht.com')) {
    const imgId = imgUrl.split('.com/').pop();
    url = `/channelImage/${imgId}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    mode: "cors"
  });
  const blob = await response.blob();
  return window.URL.createObjectURL(blob);
};
