import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { TourResponse, tourRequest, toursInterface } from "../../../Models/tourModel";

export const TourActions = createActionGroup({
    source: "TOUR API",
    events: {
        'add tour': props<{ tour: tourRequest }>(),
        'add tour success': props<{ response: TourResponse }>(),
        'add tour failure': props<{ message: string }>(),


        'get tours': emptyProps,
        'get tours success': props<{ tours: toursInterface[] }>(),
        'get tours failure': props<{ message: string }>()
    }
})