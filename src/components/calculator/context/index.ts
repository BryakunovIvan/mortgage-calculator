import { createContext } from 'react';

const emptyFn = () => {};

export interface ICalculatorContext {
    rate: number;
    creditSum: number;
    creditTerm: number;
    initialFee: number;
    changeInitialFee: React.Dispatch<React.SetStateAction<number>>;
    changeRate: React.Dispatch<React.SetStateAction<number>>;
    changeCreditTerm: React.Dispatch<React.SetStateAction<number>>;
    changeCreditSum: React.Dispatch<React.SetStateAction<number>>;
}

const defaultValue: ICalculatorContext = {
    rate: 10,
    creditSum: 2_500_000,
    creditTerm: 15,
    initialFee: 0,
    changeRate: emptyFn,
    changeCreditTerm: emptyFn,
    changeCreditSum: emptyFn,
    changeInitialFee: emptyFn,
};

export const CalculatorContext =
    createContext<ICalculatorContext>(defaultValue);
