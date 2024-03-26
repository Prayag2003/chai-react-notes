import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    // ** fetching the currency data
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((jsonResp) => setData(jsonResp[currency]))

        console.log(data);
    }, [currency])

    return data
}

export default useCurrencyInfo 