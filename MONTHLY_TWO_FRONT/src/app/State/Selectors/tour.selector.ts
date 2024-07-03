import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToursInterface } from "../Reducers/tour.reducer";

const tourSelectorFeature = createFeatureSelector<ToursInterface>('tours')

export const successMessageSelector = createSelector(tourSelectorFeature,
    (state) =>
        state.tourAddSuccessMessage)


export const errorMessageSelector = createSelector(tourSelectorFeature,
    (state) =>
        state.tourAddErrorMessage)



export const toursArraySelector=createSelector(
    tourSelectorFeature,(state)=>
        state.tourGetSuccessMessage
)