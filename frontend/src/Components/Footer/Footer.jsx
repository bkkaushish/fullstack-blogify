import { Link } from "react-router-dom";

export default function Footer(){
return(
    <footer className=" border-y relative z-20">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8  ">
            <div className="md:flex md:justify-between text-white bottom-0">
            <ul>
                <li>
                    <Link>
                    Home
                    </Link>
                </li>
                <li>
                    <Link>
                    Contact us
                    </Link>
                </li>
                <li>
                    <Link>
                    Follow github
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    </footer>
)
}