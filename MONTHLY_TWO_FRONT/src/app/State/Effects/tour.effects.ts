import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToursService } from "../../../Services/tours.service";
import { TourActions } from "../Actions/tour.action";
import { catchError, concatMap, map, of } from "rxjs";

@Injectable()


export class TourEffects {
    constructor(private action$: Actions, private tour: ToursService) {

    }



    addTour$ = createEffect(() => {
        return this.action$.pipe(
            ofType(TourActions.addTour),
            concatMap(req => this.tour.addTour(req.tour).pipe(
                map(res => {

                    return TourActions.addTourSuccess({ response: res })
                }
                ),
                catchError(error => of(TourActions.addTourFailure({ message: error.error.message })))
            ))
        )
    })



    getTours$=createEffect(()=>{
        return this.action$.pipe(
            ofType(TourActions.getTours),
            concatMap(()=>this.tour.getTours().pipe(
                map(res=>{
                    return TourActions.getToursSuccess({tours:res})
                })
            )),
            catchError(error=>of(TourActions.getToursFailure({message:error})))
        )
    })
}