import { useState } from 'react';
import { ICalculatorContext } from '../context';

export const useCalculator = (): ICalculatorContext => {
    const [rate, setRate] = useState(10);
    const [creditTerm, setCreditTerm] = useState(30);
    const [creditSum, setCreditSum] = useState(5_000_000);
    const [initialFee, setInitialFee] = useState(0);

    return {
        rate,
        creditTerm,
        creditSum,
        initialFee,
        changeInitialFee: setInitialFee,
        changeRate: setRate,
        changeCreditTerm: setCreditTerm,
        changeCreditSum: setCreditSum,
    };
};
