import Webtitle from '../components/Webtitle';
import Buttons from '../components/Buttons';
import LimitArticle from '../components/LimitArticle';
import Layout from '../components/Layout';
import CardLayout from '../layouts/CardLayout';
import Judul from '../components/Judul';
import Navbar from '../components/Navbar';

import useArticle from '../hooks/useArticle';
import { useAtom } from 'jotai';
import { languageAtom } from '../jotai/atoms';
import { useEffect, useState } from 'react';
import { apiInstance } from '../utilities/apiInstance';


function Home() {
  // const [ kalimat, setKalimat] = useState("Kalimat 1");

  // function ubahTombol () {
  //   setKalimat("Kalimat 2")
  // };

  const { dataFilm, counterClick, nextPages, prevPages } = useArticle();
  const [language,] = useAtom(languageAtom);

  const [movies, setMovies] = useState(null)

  const fetchMyMovies = async () => {
    const response = await apiInstance.get("my-movies");
    setMovies(response.data)
  }

  useEffect(() => {
    fetchMyMovies()
  }, [])

  // console.log(movies?.data)

  return (
    <Layout>

      <Webtitle warnaUbahButton="bg-violet-600"></Webtitle>
      <div className="flex justify-center">
        <Buttons varian="bg-blue-600">Login</Buttons>
        <Buttons varian="bg-red-600">Register</Buttons>
      </div>


      <br /> <br />
      <div>
        <Navbar />
        <div className="flex justify-center">
          <p className="text-4xl mt-8">{language == "en" ? "Watch Netflix For Free !!" : "Tonton Netlix Gratis !!"}</p>
        </div>
      </div>
      <br /><br />

      <div className="flex flex-col m-5 max-w-md bg-blue-600 mx-auto rounded-lg hover:bg-blue-700">
        <p className="m-2">Message from API : {movies?.message}</p>
        <p className="m-2">Title : {movies?.data.title}</p>
        <p className="m-2">Years : { movies?.data.years }</p>
      </div>


      <CardLayout>
        <Judul title={dataFilm.title} body={dataFilm.body}></Judul>
        <br />
      </CardLayout>

      {counterClick == 5 && <p className="m-2">5x lagi anda mencapai limit</p>}
      {counterClick > 9 ? (<LimitArticle></LimitArticle>) : (
        <div className="flex w-fit mx-auto ">
          <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={prevPages} type="button">Previous</button>
          <span>{counterClick}</span>
          <button className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={nextPages} type="button">Next</button>
        </div>

        // {/* <div>{kalimat}</div>
        // <button onClick={ubahTombol} type="button"> Ubah</button> */}

      )}


    </Layout>
  )
}

export default Home
