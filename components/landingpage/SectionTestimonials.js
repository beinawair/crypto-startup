import Flickity from "react-flickity-component";

const flickOptions = {
    initialIndexl: 1,
    cellSelector: '.carousel-cell',
    wrapAround: true,
    autoPlay: true,
}

const SectionTestimonials = ({ children}) => {
    return (
        <div className="testimonial-wrapper">
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickOptions}
                static
            >
                {children}
            </Flickity>
        </div>
    )
}

export default SectionTestimonials;