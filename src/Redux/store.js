import { legacy_createStore } from "redux";

import { reducer } from './AuthRed/reducer';

export const store = legacy_createStore(reducer);
