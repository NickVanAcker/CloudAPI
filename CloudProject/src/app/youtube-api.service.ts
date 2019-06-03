import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {
 

  constructor(private http : HttpClient) { }

  GetChannelData(username = "PewDiePie")
  {
    let channelurl =`https://www.googleapis.com/youtube/v3/channels?key=AIzaSyA8SEvFbqrgyntikrjo66cWwZka_GRR7e4&part=statistics,snippet&forUsername=${username}`
    return this.http.get<IYoutubeInfo>(channelurl)
  }

  GetCommentData(maxresult=5){
    let channelurl = `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyA8SEvFbqrgyntikrjo66cWwZka_GRR7e4&part=snippet&maxResults=${maxresult}&videoId=BRcbqBjdk4U&order=time`
    return this.http.get<IYoutubeComment>(channelurl)
  }
 
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: Date;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
}

export interface Statistics {
  viewCount: string;
  commentCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface IYoutubeInfo {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}



export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface AuthorChannelId {
  value: string;
}

export interface Snippet2 {
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelId;
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: Date;
  updatedAt: Date;
}

export interface TopLevelComment {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet2;
}

export interface Snippet {
  videoId: string;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface IYoutubeComment {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: Item[];
}

