export const apiReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_API':
    return {
      movie: action.data,
      failedToRetrieve: false,
      fetching: true
    }

    case 'FETCH_API_SUCCESS':
      return {
        movie: action.data,
        failedToRetrieve: false,
        fetching: false
      }

    case 'FETCH_API_FAILURE':
      return {
        failedToRetrieve: true,
        fetching: false
      }

    default:
      return state;
  }
}