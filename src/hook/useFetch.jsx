import React, { useEffect, useState } from 'react'
import { getBookData } from '../service/book.service';

const useFetch = (fetchFun,arg) => {

    const [data, setData] = useState({
        loading: true,
        error: null,
        data: null,
      });
      useEffect(() => {
        (async () => {
          try {
            const data = await fetchFun(arg);
            setData((pre) => {
              return {
                loading: false,
                error: null,
                data: data,
              };
            });
          } catch (error) {
            return {
              loading: false,
              error: error.message,
              data: null,
            };
          }
        })();
      }, []);
  return data;
}

export default useFetch