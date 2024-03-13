/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace TODO {
  type GetResponse = void;

  type GetRequest = {
    userName: string;
    login: string;
    password: string;
    _id: number | number;
  }[];

  type PostResponse = {
    userName: string;
    login: string;
    password: string;
    _id: number | number;
  };
  type PostRequest = {
    userName: string;
    login: string;
    password: string;
    _id: number | number;
  }[];
  type PostProductResponse = {
    productName: string;
    quantity: number;
    price: number;
    photoUrl: string;
    _id: number;
  };
  type PostProductRequest = {
    productName: string;
    quantity: number;
    price: number;
    photoUrl: string;
    _id: number;
  }[];

  type GetProductResponse = void;

  type GetProductRequest = {
    productName: string;
    quantity: number;
    price: number;
    photoUrl: string;
    _id: number;
  }[];
}
