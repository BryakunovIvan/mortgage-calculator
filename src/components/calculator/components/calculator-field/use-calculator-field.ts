import { ICalculatorMainAction, ICalculatorMainValues } from "../../context";
import { useCalculatorContext } from "../../context/use-calculator-context";
import { DEFAULT_MAX_FIELD_VALUE, DEFAULT_MIN_FIELD_VALUE } from "./constants";

export const useCalculatorField = (fieldName: keyof ICalculatorMainValues) => {
    const context = useCalculatorContext();

    const value = context[fieldName];
    const onChangeContextValue = context[(`change${fieldName[0].toUpperCase() + fieldName.slice(1)}`) as keyof ICalculatorMainAction];

    const onChange = (value: number | null) => {
        onChangeContextValue(Number(value));
    }

    const minFieldValue = DEFAULT_MIN_FIELD_VALUE;
    const maxFiedlValue = DEFAULT_MAX_FIELD_VALUE;

    return {
        onChange,
        value,
        minFieldValue,
        maxFiedlValue
    }
}