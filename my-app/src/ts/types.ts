export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca3: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  population: string;
  flags: {
    png: string;
    svg: string;
  };
  borders: string[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
}
