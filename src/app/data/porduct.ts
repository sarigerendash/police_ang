import {Product} from '../models/product'


const products : Product [] = [
    { name: 'a' , price:1},
    { name: 'b' , price:2},
    { name: 'c' , price:3}
]

export const getAllProducts =() =>{
  return products;
}

export const getProducts =(index:number) =>{
    return products[index];
  }