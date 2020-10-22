const fetchDataStart = () => {
  return {
    type: 'FETCH_DATA_START'
  };
}

const fetchDataSuccess = items => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: items
  };
}

const fetchDataError = error => {
  return {
    type: 'FETCH_DATA_ERROR',
    payload: error
  };
}

const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataStart());
    return fetch('https://private-anon-2f4c3867ca-technicaltaskapi.apiary-mock.com/feed?page=1&sport=football')
      .then(handleErrors)
      .then(res => res.json())
      .then(result => {
        dispatch(fetchDataSuccess(result.map(item => ({
          ...item,
          votes: Math.floor(Math.random() * 101),
        }))));
      })
      .catch(error => dispatch(fetchDataError(error)));
  };
}

const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataError,
  fetchData,
  handleErrors
}