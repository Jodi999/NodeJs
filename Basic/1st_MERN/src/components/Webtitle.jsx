import { useState } from 'react'

const Webtitle = (props) => {
    const [title, setTitle] = useState("Netlix Clone")
    function ubahJudul() {
        setTitle("Netflix nya Hafiyyan")
    }

    return (
        <div className="flex flex-row justify-center">
            <h1 className="ml-2 mr-4 text-4xl text-red-600">{title}</h1>
            <button className= {`rounded-md p-1 ${props.warnaUbahButton}`} onClick={ubahJudul}>Ubah Judul</button>
        </div>
    )
}

export default Webtitle;