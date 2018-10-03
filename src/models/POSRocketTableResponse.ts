export interface POSRocketTableResponse<T> {
    count: number;
    next?: any;
    previous?: any;
    data: T[];
}
