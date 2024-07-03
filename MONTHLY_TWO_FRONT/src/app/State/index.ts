import { toursInterface } from "../../Models/tourModel";
import { AuthInterface } from "./Reducers/auth.reducers";

export interface AppState{
    auth:AuthInterface
    tour:toursInterface
}