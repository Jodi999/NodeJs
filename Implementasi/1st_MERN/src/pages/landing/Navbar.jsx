import { useAtom } from "jotai"
import { languageAtom } from "../jotai/atoms"

const Navbar = () => {

const [language, setLanguage] = useAtom(languageAtom)

console.log(language)

    return(
        <div className="flex justify-between border-2 border-solid border-gray-600 m-5 px-3 py-7 rounded-md">
            <h1 className="ml-5 mb-2 text-2xl">Netflix Clone</h1>
            <div>
                <button className="p-2 rounded-md bg-gray-600 mx-2"
                        onClick={() => {setLanguage("id")}}>Indonesia</button>

                <button className="p-2 rounded-md bg-gray-600 mx-2"
                        onClick={() => {setLanguage("en")}}>English</button>
            </div>
        </div>
    )
}

export default Navbar