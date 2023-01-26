import { useCalculatorContext } from '../../context/use-calculator-context';
import { TProps } from './models';

export const FieldValue = ({ fieldName }: TProps) => {
    const context = useCalculatorContext();
    const value = context[fieldName];

    return <>{value}</>;
};
