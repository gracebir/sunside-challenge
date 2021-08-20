import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../interface/IProduct';



export const productApi = createApi({
    reducerPath:'product',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://fakestoreapi.com'
    }),
    tagTypes:['IProduct'],
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], string | void>({
            query(){
                return{
                    url:'/products'
                }
            },
            providesTags:(result, error,arg)=>  result ? [...result.map(({id})=> ({type:'IProduct' as const, id})),'IProduct']: ['IProduct'],
        })
    })
});


export const { useGetProductsQuery } = productApi;

