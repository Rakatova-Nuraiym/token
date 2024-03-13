/* eslint-disable @typescript-eslint/no-unused-vars */
export namespace TODO {
  type GetResponse = void;

  type GetRequest = {
    userName: string;
    email: string;
    password: string;
    _id: number | number;
  }[];
 
  type PostResponse = {
    token: string;
    // userName: string;
    // email: string;
    // password: string;
    // _id: number | number;
  };
  type PostRequest = {
    email: string;
    password: string;
  }[];
  type PostProductResponse = {
    productName: string;
    quantity: string;
    price: string;
    photoUrl: string;
  };
  type PostProductRequest = {
    productName: string;
    quantity: string;
    price: string;
    photoUrl: string;
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
