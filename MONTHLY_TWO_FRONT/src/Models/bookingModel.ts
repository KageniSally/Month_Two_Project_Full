export interface booking {
    id: string;
    user_id: string,
    tour_id: string,
    hotel_id: string,
    startDate: string;
    endDate: string;
    people: number;
    isEmailSent:number;
}