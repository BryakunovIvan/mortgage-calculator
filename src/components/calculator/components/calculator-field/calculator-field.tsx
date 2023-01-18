import { useCalculatorContext } from "../../context/use-calculator-context";
import { Slider, InputNumber } from 'antd';

export const CalculatorField = ({ }) => {
    const { creditSum, changeCreditSum } = useCalculatorContext();

    const onChange = (value: number | null) => {
        changeCreditSum(Number(value));
    }

    return <>
        <InputNumber
            style={{ width: '100%' }}
            value={creditSum}
            onChange={onChange}
            min={300_000}
            max={70_000_000}
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        />
        <Slider onChange={onChange} value={creditSum} min={300_000} max={70_000_000} step={10_000}></Slider>
    </>
}