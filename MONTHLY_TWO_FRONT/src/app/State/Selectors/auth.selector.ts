import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducers";

const authSelectorFeatureSelector=createFeatureSelector<AuthInterface>('auth')


export const errorSelector=createSelector(authSelectorFeatureSelector,(state)=>state.loginErrorMessage)