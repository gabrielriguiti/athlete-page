import bgImage from '../assets/bg-homepage.jpeg';

export default function HomePage() {

    return (
        <div
            className="bg-cover bg-center h-screen flex"
            style={{backgroundImage: `url(${bgImage})`}}
        >
            <div className={"flex-grow border-l-[0.01rem] flex flex-col justify-end"}>
                <p className={"font-montserrat font-bold text-white"}>SOBRE MIM</p>

                <p className={"font-montserrat text-white"}>Saiba mais aqui</p>
            </div>

            <div className={"flex-grow border-l-[0.01rem] flex flex-col justify-end"}>
                <p className={"font-montserrat font-bold text-white"}>CONTATO</p>

                <p className={"font-montserrat text-white"}>Entre em contato</p>
            </div>

            <div className={"flex-grow border-l-[0.01rem]"}>

            </div>

            <div className={"flex-grow border-l-[0.01rem]"}>

            </div>
        </div>
    );
}