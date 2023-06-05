export interface Pageable<T> {
    content: T[];
    last: boolean;
    size: number;
    totalElements: number;
    totalPages: number;
}
