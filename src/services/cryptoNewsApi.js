import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const newsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4ed09190d2msh03c4040177e2d4ap1f292cjsn15a1bde8e89d',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}


const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) =>({
    url,
    headers: newsApiHeaders
})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
