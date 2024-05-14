export const getImage = async (imgUrl: string) => {
  let url = '';

  if (imgUrl.includes('i.ytimg.com')) {
    const imgId = imgUrl.split('vi/').pop();
    url = `/api/image/${imgId}`;
  } else if (imgUrl.includes('yt3.ggpht.com')) {
    const imgId = imgUrl.split('.com/').pop();
    url = `/api/channelImage/${imgId}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    mode: "cors"
  });
  const blob = await response.blob();
  const urlObject = window.URL.createObjectURL(blob);
  return urlObject;
};
