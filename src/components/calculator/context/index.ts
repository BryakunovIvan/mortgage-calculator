import { createContext } from "react";

interface ICalculatorContext {
    rate: number;
    creditSum: number;
    creditTerm: number;
};

const defaultValue: ICalculatorContext = {
    rate: 10,
    creditSum: 2_500_000,
    creditTerm: 15,
};

export const CalculatorContext = createContext<ICalculatorContext>(defaultValue)