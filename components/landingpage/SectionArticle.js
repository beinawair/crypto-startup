import Image from "next/image";

const SectionArticle = ({ data }) => {
    return (
        <div className="article-lists">
            {
                data?.map(item => (
                    <div key={item.id} className="article-wrapper mt-10">
                        <div className="article-image">
                            <Image src={item.img}
                                alt={item.title}
                                width={300}
                                height={200}
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                        <div className="detail-articles relative">
                            <span className="flex justify-between items-center">
                                <p className="tags">{item.tags}</p>
                                <p className="date text-sm text-gray-400">{item.date}</p>
                            </span>
                            <div className="devider"></div>
                            <h3 className="text-xl">{item.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default SectionArticle;