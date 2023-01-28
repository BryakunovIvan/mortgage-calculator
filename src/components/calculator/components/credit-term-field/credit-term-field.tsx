import { useCalculatorContext } from '../../context/use-calculator-context';
import { Button, Space } from 'antd';

export const CreditTermField = () => {
    const { terms, creditTerm, changeCreditTerm } = useCalculatorContext();

    return (
        <>
            <Space>
                {terms.map((term) => (
                    <Button
                        type={creditTerm === term ? 'primary' : 'default'}
                        shape="circle"
                        onClick={() => changeCreditTerm(term)}>
                        {term / 12}
                    </Button>
                ))}
            </Space>
        </>
    );
};
