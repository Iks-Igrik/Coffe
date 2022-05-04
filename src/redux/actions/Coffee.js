import axios from 'axios';


export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload: payload,
});
export const fetchCoffe = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
      });
    
    //setLoading(false);
    
    axios.get(
        `http://localhost:3001/db.json?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,)
    .then(({data}) => {
       dispatch(setCoffe(data.coffe));
          });

}

export const setCoffe = (items) => ({
    type: 'SET_COFFEE',
    payload: items,
});

export const setLoading = (payload) => ({
    type: 'SET_LOADED',
    payload: payload,
});

