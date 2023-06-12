export interface Transaction {
    id: number;
    operation: string;
    amount: number;
    creditDebit: string;
    params: string;
    response: string;
    date: Date;
}
