import { createReducer, on } from "@ngrx/store"
import { TourActions } from "../Actions/tour.action"
import {  toursInterface } from "../../../Models/tourModel";

export interface ToursInterface {
    tourAddSuccessMessage: string,
    tourAddErrorMessage: string,
    tourAddLoading: boolean,
    tourGetSuccessMessage:toursInterface [],
    tourGetErrorMessage: string,
    tourGetLoading: boolean
}



const initialState: ToursInterface = {
    tourAddSuccessMessage: '',
    tourAddErrorMessage: '',
    tourAddLoading: false,
    tourGetSuccessMessage: [],
    tourGetErrorMessage: '',
    tourGetLoading: false
}



export const tourReducer = createReducer(
    initialState,
    on(TourActions.addTour, (state) => {
        return {
            ...state,
            tourAddSuccessMessage: '',
            tourAddErrorMessage: '',
            tourAddLoading: true
        }
    }),


    on(TourActions.addTourSuccess, (state, action) => {
        return {
            ...state,
            tourAddSuccessMessage: action.response.message,
            tourAddErrorMessage: '',
            tourAddLoading: false
        }
    }),


    on(TourActions.addTourFailure, (state, { message }) => {
        return {
            ...state,
            tourAddSuccessMessage: '',
            tourAddErrorMessage: message,
            tourAddLoading: false
        }
    }),


    on(TourActions.getTours, (state) => {
        return {
            ...state,
            tourGetSuccessMessage: [],
            tourGetErrorMessage: '',
            tourGetLoading: true
        }
    }),


    on(TourActions.getToursSuccess, (state,{tours}) => {
        return {
            ...state,
            tourGetSuccessMessage: tours,
            tourGetErrorMessage: '',
            tourGetLoading: false
        }
    }),


    on(TourActions.getToursFailure, (state,action) => {
        return {
            ...state,
            tourGetSuccessMessage: [],
            tourGetErrorMessage: action.message,
            tourGetLoading: false
        }
    })


)
