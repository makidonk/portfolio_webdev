// media.ts
export type Media = {
  url: string;
  formats?: {
    thumbnail?: {
      url: string;
    };
    small?: {
      url: string;
    };
    medium?: {
      url: string;
    };
    large?: {
      url: string;
    };
  };
};
