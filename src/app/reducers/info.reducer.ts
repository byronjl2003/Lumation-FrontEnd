import { createReducer, on } from '@ngrx/store';
import { getInfo, setInfo, setSkee, removeSkee, setLimit } from '../actions/info.actions';
import { Info } from '../models/info.model';

export interface infoState {
    isSkeeletons: boolean;
    linfo: Info[];
    limit: number;
}

export const initialState: infoState = {
    isSkeeletons: false,
    linfo: [],
    limit: 5,
};

const _infoReducer = createReducer(
    initialState,
    on(getInfo, (state) => ({ ...state })),
    on(setInfo, (state, { linfo }) => ({ ...state, linfo })),
    on(setSkee, (state) => ({ ...state, isSkeeletons: true })),
    on(removeSkee, (state) => ({ ...state, isSkeeletons: false })),
    on(setLimit, (state, { limit }) => ({ ...state, limit }))
);

export function infoReducer(state, action) {
    return _infoReducer(state, action);
 }