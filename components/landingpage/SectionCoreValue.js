import Image from "next/image";

const SectionCoreValue = ({ img, title, description, extraClass }) => {
    return (
        <div className={"inner-wrapper " + extraClass || ""}>
            <Image src={img}
                alt={title}
                width={400}
                height={400}
                objectFit="cover"
            />
            <div className="detail-wrapper max-w-md">
                <h3 className="title-sub text-lg uppercase">{title}</h3>
                <p className="text-paragraph text-md">{description}</p>
                <button className="btn-secondary mt-4">Learn More</button>
            </div>
        </div>
    )
}

export default SectionCoreValue;