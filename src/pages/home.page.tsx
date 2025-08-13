import bgHome1 from '../assets/bg-homepage-1.jpg';
import bgHome2 from '../assets/bg-homepage-2.jpg';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate();

    const [bgImageSrc, setBgImageSrc] = useState(bgHome1);
    const [idxTabFocus, setIdxTabFocus] = useState<number>(-1);

    return (
        <div
            className="bg-cover bg-center h-screen flex"
            style={{backgroundImage: `url(${bgImageSrc})`, filter: "brightness(0.7)"}}
        >
            <div
                className={"flex-grow border-l-[0.01rem] flex flex-col justify-end pl-6"}
                onMouseEnter={() => {
                    setBgImageSrc(bgHome1);
                    setIdxTabFocus(0);
                }}
                onClick={() => navigate("/about-me")}
            >
                <p className={"font-montserrat font-bold text-white text-2xl"}>SOBRE MIM</p>

                <p className={`font-montserrat text-white ${idxTabFocus == 0 ? "mb-16" : "mb-5"}`}>Saiba mais aqui</p>
            </div>

            <div
                className={"flex-grow border-l-[0.01rem] flex flex-col justify-end pl-6"}
                onMouseEnter={() => {
                    setBgImageSrc(bgHome2);
                    setIdxTabFocus(1);
                }}
            >
                <p className={"font-montserrat font-bold text-white text-2xl"}>CONTATO</p>

                <p className={`font-montserrat text-white ${idxTabFocus == 1 ? "mb-16" : "mb-5"}`}>Entre em contato</p>
            </div>

            <div className={"flex-grow border-l-[0.01rem]"}>

            </div>

            <div className={"flex-grow border-l-[0.01rem]"}>

            </div>
        </div>
    );
}