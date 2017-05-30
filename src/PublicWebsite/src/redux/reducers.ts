import { combineReducers, Reducer } from 'redux';
import { IStore } from './IStore';
import { roomContentReducer} from '../modules/marketing/room-content.reducer'



export const rootReducer: Reducer<IStore> = combineReducers<IStore>({
    roomContent: roomContentReducer
});