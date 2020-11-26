import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  ActionReducer,
} from '@ngrx/store';


import { infoState, infoReducer } from './info.reducer';

export interface appState {
    info: infoState;
}

export const reducers: ActionReducerMap<appState> = {
    info: infoReducer,
}

export const selectinfo = (state: appState) => state.info;

export const selectInfo = createSelector(
    selectinfo,
    (state: infoState) => state.linfo
);

export const selectSkee = createSelector(
    selectinfo,
    (state: infoState) => state.isSkeeletons
);

export const selectLimit = createSelector(
    selectinfo,
    (state: infoState) => state.limit
);