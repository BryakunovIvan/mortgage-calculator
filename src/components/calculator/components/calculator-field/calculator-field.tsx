import { Slider, InputNumber } from 'antd';

import { DEFAULT_FIELD_STEP, REG_EXP_FOR_FORMAT_MONEY_RANK } from "./constants";
import { useCalculatorField } from './use-calculator-field';

export const CalculatorField = ({ }) => {
    const { creditSum, onChange, minFieldValue, maxFiedlValue } = useCalculatorField()

    return <>
        <InputNumber
            style={{ width: '100%' }}
            value={creditSum}
            onChange={onChange}
            min={minFieldValue}
            max={maxFiedlValue}
            formatter={(value) => `${value}`.replace(REG_EXP_FOR_FORMAT_MONEY_RANK, ' ')}
        />
        <Slider onChange={onChange} value={creditSum} min={minFieldValue} max={maxFiedlValue} step={DEFAULT_FIELD_STEP}></Slider>
    </>
}