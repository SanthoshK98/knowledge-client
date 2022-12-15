import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    tagTypes: ['Product','Cart','Orders'],
    endpoints: (builder)=>({
        products: builder.query<void, void>({
            query: ()=>'products',
            providesTags: ['Product']
        }),
        product: builder.query<string, void>({
            query: (id)=>`product/${id}`,
            providesTags: ['Product']
        }),
        cart: builder.query<void, void>({
            query: ()=>'cart',
            providesTags: ['Cart']
        }),
        addCart: builder.mutation({
            query: (cart)=>({
                url: 'cart',
                method: 'POST',
                body: cart
            }),
            invalidatesTags: ['Cart']
        }),
        orders: builder.query<void, void>({
            query: ()=>'orders',
            providesTags: ['Orders']
        }),
        addOrder: builder.mutation({
            query: (order)=>({
                url: 'orders',
                method: 'POST',
                body: order
            }),
            invalidatesTags: ['Orders']
        })
    })
})

export const { 
    useProductsQuery, 
    useProductQuery,
    useCartQuery,
    useAddCartMutation,
    useOrdersQuery,
    useAddOrderMutation
} = productsApi