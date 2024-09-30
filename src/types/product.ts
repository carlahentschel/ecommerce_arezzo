interface IImage {
  url: string;
}

interface IPrice {
  formattedValue: string;
}

export interface IProduct {
  name: string;
  images: IImage[];
  price: IPrice;
}
