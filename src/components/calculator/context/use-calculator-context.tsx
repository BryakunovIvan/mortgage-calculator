import { useContext } from "react";
import { CalculatorContext } from "./";

export const useCalculatorContext = () => {
    const context = useContext(CalculatorContext);

    if (!context) {
        throw Error('Компонет должен исползоваться в контектсе CalculatorContext')
    }

    return context;
};
