import { useEffect, useState } from "react";

function useArticle() {
    const [dataFilm, setDataFilm] = useState("");
    const [counterClick, setCounterClick] = useState(1);

    function getArticle(counterClick) {
        return (fetch(`https://dummyjson.com/posts/${counterClick}`).then(dataFilm => dataFilm.json()))
    }

    useEffect(() => {
        getArticle(counterClick).then(dataFilm => setDataFilm(dataFilm))
    }, [counterClick])



    function nextPages() {
        setCounterClick(counterClick + 1)
        // console.log(counterClick)
    }

    function prevPages() {
        setCounterClick(counterClick - 1)
    }

    return {
        dataFilm,
        counterClick,
        nextPages,
        prevPages
    }
}

export default useArticle