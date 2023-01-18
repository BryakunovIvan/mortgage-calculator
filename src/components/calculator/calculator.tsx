import { CalculatorProvider } from "./calculator-provider"
import { CalculatorField } from "./components/calculator-field/calculator-field"

export const Calculator = () => {
    return <CalculatorProvider>
        <div>Тест</div>
        <CalculatorField />
    </CalculatorProvider>
}