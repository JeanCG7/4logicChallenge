export interface IEvaluation{
    id: string,
    evalDate: string,
    evals:{
        grade: number,
        idCustomer: string,
        reason: string
    },
    avg?: number
}