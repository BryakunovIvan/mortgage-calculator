export const getMontlyPayment = (
    loanSum: number,
    montlyRate: number,
    creditTerm: number,
) => {
    return (
        loanSum * (montlyRate / (1 - Math.pow(1 + montlyRate, 0 - creditTerm)))
    );
};
