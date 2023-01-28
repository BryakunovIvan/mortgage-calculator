import { useEffect, useState } from 'react';
import { ICalculatorContext } from '../context';
import { getMontlyPayment } from '../helpers';

export const useCalculator = (): ICalculatorContext => {
    const [rate, setRate] = useState(12.49);
    const [creditTerm, setCreditTerm] = useState(48);
    const [creditSum, setCreditSum] = useState(5_000_000);
    const [initialFee, setInitialFee] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [terms, setTerms] = useState([12, 24, 48, 60, 72, 84]);

    useEffect(() => {
        const loanSum = creditSum - initialFee;
        const montlyRate = rate / (100 * 12);

        const montlyPayment = getMontlyPayment(loanSum, montlyRate, creditTerm);

        setMonthlyPayment(montlyPayment);
    }, [rate, creditTerm, creditSum, initialFee]);

    return {
        rate,
        creditTerm,
        creditSum,
        initialFee,
        monthlyPayment,
        terms,
        changeInitialFee: setInitialFee,
        changeRate: setRate,
        changeCreditTerm: setCreditTerm,
        changeCreditSum: setCreditSum,
        changeTerms: setTerms,
    };
};
