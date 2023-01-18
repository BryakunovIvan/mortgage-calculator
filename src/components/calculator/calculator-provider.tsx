import { FC, PropsWithChildren } from "react";
import { CalculatorContext } from "./context";
import { useCalculatorContext } from "./context/use-calculator-context";
import { ICalculatorPublicProps } from "./model";

export const CalculatorProvider: FC<PropsWithChildren<ICalculatorPublicProps>> = ({ children }) => {
    const context = useCalculatorContext();

    return <CalculatorContext.Provider value={context}>{children}</CalculatorContext.Provider>
};