import { CalculatorProvider } from './calculator-provider';
import { CalculatorField } from './components/calculator-field';
import { FieldValue } from './components/field-value';

export const Calculator = () => {
    return (
        <CalculatorProvider>
            <CalculatorField fieldName="creditSum" />
            <CalculatorField fieldName="initialFee" />
            <FieldValue fieldName="monthlyPayment" round />
        </CalculatorProvider>
    );
};
