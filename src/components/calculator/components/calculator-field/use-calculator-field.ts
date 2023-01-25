import { useCalculatorContext } from "../../context/use-calculator-context";
import { DEFAULT_MAX_FIELD_VALUE, DEFAULT_MIN_FIELD_VALUE } from "./constants";
import { getContextActionName } from "./helpers";
import { TFieldName } from "./models";

export const useCalculatorField = (fieldName: TFieldName) => {
    const context = useCalculatorContext();

    const value = context[fieldName];
    const onChangeContextValue = context[getContextActionName(fieldName)];

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