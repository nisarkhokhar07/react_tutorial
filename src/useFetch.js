import { useEffect, useReducer } from "react";

const useFetch = (url) => {

  const INITIAL_STATE = {
    data: null,
    isPending: true,
    error: null
  }

  const postReducer = (state, action) => {
    switch (action.type){
      case 'fetch-success':
        return {
          isPending: false,
          data: action.responseData
        }
      case 'abort-error':
        return {
          isPending: false,
          error: action.responseError
        }
      default:
        return state
    }

  }

  // const [data, setData] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  const [state, dispatch] = useReducer (postReducer, INITIAL_STATE);


  useEffect(() => {
    const abortCont = new AbortController();

      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from resource");
          }
          return res.json();
        })
        .then((data) => {
          dispatch({type: 'fetch-success', responseData: data})
          // setData(data);
          // setIsPending(false);
        })
        .catch((err) => {
           if (!err.name === "AbortError") {
            dispatch({type: 'abort-error', responseError: err.message})
        //     setIsPending(false);
        //     setError(err.message);
           }
         })

    return () => abortCont.abort();
  }, [url]);

  return { data: state.data, isPending: state.isPending, error: state.error };
};

export default useFetch;
