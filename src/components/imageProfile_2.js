import Image from "next/image"
import IMG_2 from "../../public/IMG_2.jpg"
import Insta from "../components/svg/Insta"
import Link from "next/link"
import Linkedin from "../components/svg/Linkendin"
import Github from "../components/svg/Github"

const ImageProfile_2 = ({fill}) => {
    return (
        <div className="col-12  d-flex justify-content-start image_About ">
            <div className="image_3 m-1 ">
                <div className="bar"></div>

                <Image
                    src={IMG_2}
                    alt=''
                    layout='intrinsic'
                    objectFit='contain'
                    width={500}
                    height={600}/>
            </div>
            <div className="image_4 m-1 d-flex flex-column justify-content-around mx-3">
                <Link passHref href="https://www.instagram.com/karhamba/">
                    <a>
                        <Insta/>
                    </a>
                </Link>
                <Link passHref href="https://github.com/joelkarh">
                    <a>
                        <Github/>
                    </a>
                </Link>
                <Link passHref href="https://be.linkedin.com/in/jo%C3%ABl-karhamba">
                    <a>
                        <Linkedin/>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default ImageProfile_2
