import { CalculatorProvider } from "./calculator-provider"
import { CalculatorField } from "./components/calculator-field/calculator-field"

export const Calculator = () => {
    return <CalculatorProvider>
        <CalculatorField fieldName="creditSum" />
    </CalculatorProvider>
}