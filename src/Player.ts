export enum Sex {
    MAN = "MAN",
    WOMAN = "WOMAN",
  }
type Picture = {
  url: string;
};

type Country = {
  picture: Picture;
  code: string;
};

type Stats = {
  rank?: number;
  points?: number;
  weight?: number;
  height?: number;
  age?: number;
};

export type Player = {
  id: string;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: Sex;
  picture: Picture;
  country: Country;
  stats: Stats;
};
