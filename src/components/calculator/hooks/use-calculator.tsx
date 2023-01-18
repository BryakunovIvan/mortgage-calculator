import { useState } from "react"

export const useCalculator = () => {
    const [rate, setRate] = useState(10);
    const [creditTerm, setCreditTerm] = useState(30);
    const [creditSum, setCreditSum] = useState(5_000_000);

    return {
        rate,
        creditTerm,
        creditSum,
        setRate,
        setCreditTerm,
        setCreditSum,
    }
}