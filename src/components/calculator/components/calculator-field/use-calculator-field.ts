import { useCalculatorContext } from "../../context/use-calculator-context";
import { DEFAULT_MAX_FIELD_VALUE, DEFAULT_MIN_FIELD_VALUE } from "./constants";

export const useCalculatorField = () => {
    const { creditSum, changeCreditSum } = useCalculatorContext();

    const onChange = (value: number | null) => {
        changeCreditSum(Number(value));
    }

    const minFieldValue = DEFAULT_MIN_FIELD_VALUE;
    const maxFiedlValue = DEFAULT_MAX_FIELD_VALUE;

    return {
        onChange,
        creditSum,
        minFieldValue,
        maxFiedlValue
    }
}