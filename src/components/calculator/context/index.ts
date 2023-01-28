import { createContext } from 'react';

const emptyFn = () => {};

export interface ICalculatorContext {
    rate: number;
    creditSum: number;
    creditTerm: number;
    initialFee: number;
    monthlyPayment: number;
    terms: number[];
    changeInitialFee: React.Dispatch<React.SetStateAction<number>>;
    changeRate: React.Dispatch<React.SetStateAction<number>>;
    changeCreditTerm: React.Dispatch<React.SetStateAction<number>>;
    changeCreditSum: React.Dispatch<React.SetStateAction<number>>;
    changeTerms: React.Dispatch<React.SetStateAction<number[]>>;
}

const defaultValue: ICalculatorContext = {
    rate: 10,
    monthlyPayment: 0,
    creditSum: 2_500_000,
    creditTerm: 15,
    initialFee: 0,
    terms: [12, 24, 48, 60, 72, 84],
    changeRate: emptyFn,
    changeCreditTerm: emptyFn,
    changeCreditSum: emptyFn,
    changeInitialFee: emptyFn,
    changeTerms: emptyFn,
};

export const CalculatorContext =
    createContext<ICalculatorContext>(defaultValue);
