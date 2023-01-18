import { FC, PropsWithChildren } from "react";
import { CalculatorContext } from "./context";
import { useCalculator } from "./hooks/use-calculator";
import { ICalculatorPublicProps } from "./model";

export const CalculatorProvider: FC<PropsWithChildren<ICalculatorPublicProps>> = ({ children }) => {
    const context = useCalculator();

    return <CalculatorContext.Provider value={context}>{children}</CalculatorContext.Provider>
};