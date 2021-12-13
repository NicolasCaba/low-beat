export interface TrackInterface {
  artist:   Artist;
  duration: Duration;
  name:     string;
  album:    string;
  coverImg: string;
  url:      string;
  genre?:   string;
}

export interface Artist {
  name:        string;
  nickname:    string;
  nationality: string;
}

export interface Duration {
  start: number;
  end:   number;
}
