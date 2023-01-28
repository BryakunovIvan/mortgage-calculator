import { CalculatorProvider } from './calculator-provider';
import { CalculatorField } from './components/calculator-field';
import { CreditTermField } from './components/credit-term-field/credit-term-field';
import { FieldValue } from './components/field-value';

export const Calculator = () => {
    return (
        <CalculatorProvider>
            <h2>Сумма кредита</h2>
            <CalculatorField fieldName="creditSum" />
            <h2>Первоначальный взнос</h2>
            <CalculatorField fieldName="initialFee" />
            <h2>Срок кредита</h2>
            <CreditTermField />
            <h2>Ежемесячный платеж</h2>
            <h2>
                <FieldValue fieldName="monthlyPayment" round /> ₽
            </h2>
        </CalculatorProvider>
    );
};
