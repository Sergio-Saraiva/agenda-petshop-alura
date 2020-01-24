import axios from 'axios'
import ApolloClient from 'apollo-boost'

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  }
})

export const fetchOptions = query => ({
  method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      query
    })
})

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000'
})