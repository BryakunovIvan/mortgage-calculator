import { useCalculatorContext } from '../../context/use-calculator-context';
import { TProps } from './models';

export const FieldValue = ({ fieldName, round = false }: TProps) => {
    const context = useCalculatorContext();
    const value = round ? Math.round(context[fieldName]) : context[fieldName];

    return <>{value}</>;
};
