export interface VideoInfo {
  snippet: {
    thumbnails: {
      maxres: {
        url: string;
      };
    };
    publishedAt: string;
    title: string;
    channelId: string;
  };
  contentDetails: {
    duration: string;
  };
  statistics: {
    viewCount: number;
  };
}