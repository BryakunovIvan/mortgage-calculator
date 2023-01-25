import { Slider, InputNumber } from 'antd';

import { DEFAULT_FIELD_STEP, REG_EXP_FOR_FORMAT_MONEY_RANK } from "./constants";
import { TProps } from './models';
import { useCalculatorField } from './use-calculator-field';

/** Компонент для отображения/изменения сумм калькулятора. Суммы кредита и первоначального взноса*/
export const CalculatorField = ({ fieldName = 'creditSum' }: TProps) => {
    const { value, onChange, minFieldValue, maxFiedlValue } = useCalculatorField(fieldName)

    return <>
        <InputNumber
            style={{ width: '100%' }}
            value={value}
            onChange={onChange}
            min={minFieldValue}
            max={maxFiedlValue}
            formatter={(value) => `${value}`.replace(REG_EXP_FOR_FORMAT_MONEY_RANK, ' ')}
        />
        <Slider onChange={onChange} value={value} min={minFieldValue} max={maxFiedlValue} step={DEFAULT_FIELD_STEP}></Slider>
    </>
}