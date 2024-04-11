//dogs
export type DogsResponse = {
  message: Dogs;
  status: string;
};

export type Dogs = string | string[];
