export const dispatchFetchApi = (data) => {
  return {
    type: 'FETCH_API',
    searchPhrase: data
  }
}

export const fetchApiSuccess = (data) => {
  return {
    type: 'FETCH_API_SUCCESS',
    data,
    searchPhrase: ''
  }
}

export const fetchApiFailure = (data) => {
  return {
    type: 'FETCH_API_FAILURE',
    data,
    searchPhrase: ''
  }
}