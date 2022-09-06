import { async } from '@firebase/util';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {API_BASE_URL} from '/Users/nikolaj/Desktop/geksagon/geksagon-app/src/config'

export const createShortLink = createAsyncThunk(
    'links/createShortLink',
    async (url) => {
        const response = await fetch(API_BASE_URL + url, {method: 'POST'})
        return await response.json()
    }
)
const initialState = {
    items: [],
    loading: 'idle',
};
const linkSlice = createSlice({
    name: 'links',
    initialState,
    //reducers:{},
    extraReducers:{
        [createShortLink.rejected]: (state) =>{
            state.loading = 'reject'
        },
        [createShortLink.pending]: (state) =>{
            state.loading = 'loading'
        },
        [createShortLink.fulfilled]: (state, action) =>{
            const {ok, result} = action.payload;
            if(ok){
                state.items.push(result)
                state.loading = 'idle'
            }else{
                state.loading = 'error'
            }
            
        },
    },
})
export const selectLoading = state => state.links.loading;
export const selectLinks = state => state.links.items;
export default linkSlice.reducer