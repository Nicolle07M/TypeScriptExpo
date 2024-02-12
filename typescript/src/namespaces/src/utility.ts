namespace Utility {
    export namespace Taxes {
        export function calcularteIva(prince: number): number{
            return(prince * 0.21) + prince;
        }
        export function calculartePenaltyIva(prince: number): number {
            return (prince * 0.30) + prince;
        }

    }
}