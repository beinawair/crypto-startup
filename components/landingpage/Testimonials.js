import Image from "next/image";

const Testimonials = ({ data }) => {
    return (
        <>
            {
                data?.map((item) => (
                    <div key={item.id} className="carousel-cell relative">
                        <div className="testimonials-text">
                            <h4 className="testi-text">{item.testimonials}</h4>
                            <h5 className="testi-name mt-10 text-3xl">{item.name}</h5>
                            <p className="testi-occupancy text-sm text-gray-400">{item.occupancy}</p>
                        </div>
                        <div className="testimonials-image">
                            <Image src={item.img}
                                alt="jhon"
                                width={300}
                                height={400}
                                // objectFit='cover'
                                // objectPosition='top center'
                            />
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Testimonials;