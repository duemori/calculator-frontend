export interface Transaction {
    id: number;
    userId: number;
    operation: string;
    amount: number;
    creditDebit: string;
    params: string;
    response: string;
    date: Date;
}
