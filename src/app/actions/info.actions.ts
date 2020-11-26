import { createAction, props } from '@ngrx/store';
import { Info } from '../models/info.model';

export const getInfo = createAction(
    '[Info Page] GET INFO',
    props<{ query: string, limit: number }>()
);
export const setInfo = createAction(
    '[Info Page] SET INFO',
    props<{ linfo: Info[] }>()
);

export const setSkee = createAction(
    '[Info Page] SET SKEE'
);

export const removeSkee = createAction(
    '[Info Page] REMOVE SKEE'
);

export const setLimit = createAction(
    '[Info Page] setLimit',
    props<{limit: number}>()
);