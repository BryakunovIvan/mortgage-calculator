import { createContext } from "react";

const emptyFn = () => { };

export interface ICalculatorMainValues {
    rate: number;
    creditSum: number;
    creditTerm: number;
}

export interface ICalculatorMainAction {
    changeRate: React.Dispatch<React.SetStateAction<number>>,
    changeCreditTerm: React.Dispatch<React.SetStateAction<number>>,
    changeCreditSum: React.Dispatch<React.SetStateAction<number>>,
}

export interface ICalculatorContext extends ICalculatorMainValues, ICalculatorMainAction { };

const defaultValue: ICalculatorContext = {
    rate: 10,
    creditSum: 2_500_000,
    creditTerm: 15,
    changeRate: emptyFn,
    changeCreditTerm: emptyFn,
    changeCreditSum: emptyFn,
};

export const CalculatorContext = createContext<ICalculatorContext>(defaultValue)