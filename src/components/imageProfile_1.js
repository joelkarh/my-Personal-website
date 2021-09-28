import Image from 'next/image'
import frame from '../../public/rectangle.png'
import ProfileImage from '../../public/IMG_1.jpg'
const ImageProfile_1 = () => {
    return (
        <div className="profile__image_1 col-12 d-flex justify-content-center position-relative">
            <div className="image_1 ">
            <Image 
            alt='image of a frame' 
            src={frame} 
            width={341.33}
            height={330.35} 
            objectFit='contain'/>
            </div>
            <div className="image_2 mt-5 mt-lg-0 position-absolute">
                <Image  
                src={ProfileImage}
                alt=''
                width={250}
                height={353}
                />
                </div>
        </div>
    )
}

export default ImageProfile_1
