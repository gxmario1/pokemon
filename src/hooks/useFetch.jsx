import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const getData = useCallback(async (url) => {
    setLoading(true);
    try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    } catch (error) {
        setError(error);
    } finally {
        setLoading(false);
    }
}, [url]);

useEffect(() => {
    getData(url);
}, [url, getData]);

return { data, loading, error };
};

export default useFetch;

