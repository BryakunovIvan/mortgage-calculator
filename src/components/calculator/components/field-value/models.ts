export type TFieldName = 'rate' | 'creditTerm' | 'creditSum' | 'monthlyPayment';

export type TProps = {
    fieldName: TFieldName;
    round?: boolean;
};
