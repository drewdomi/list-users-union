interface Name {
  title: string;
  first: string;
  last: string;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Result {
  name: Name;
  email: string;
  login: Login;
  dob: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface IGetResponse {
  results: Result[];
  info: Info;
}

export interface IUsersTable {
  login: {
    uuid: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: {
    date: string;
    age: number;
  };
}