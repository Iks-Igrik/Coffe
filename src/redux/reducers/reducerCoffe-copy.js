import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload: payload,
});
export const fetchCoffe = (sortBy, category) => (dispatch) => {
//    setLoading(false);
    axios.get(`http://localhost:3000/db.json/$coffe?category=${
        category !== null ? `category=${category}` : '' }
        &_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data}) => {
       dispatch(setCoffe(data));
       setLoading(true);
    });
}

export const setCoffe = (items) => ({
    type: 'SET_COFFEE',
    payload: items,
});

export const setLoading = (value) => ({
    type: 'SET_LOADED',
    playload: value,
});