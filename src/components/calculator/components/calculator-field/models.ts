import { ICalculatorMainValues } from "../../context";

// TODO: Сузить типы fieldName до суммы кредита и первоначального взноса
export type TProps = { fieldName: keyof ICalculatorMainValues };
