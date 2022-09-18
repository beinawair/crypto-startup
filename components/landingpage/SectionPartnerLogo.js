import Image from 'next/image';

const SectionPartnerLogo = () => {
    return (
        <div className="container flex justify-around my-14">
            <Image src="/image/partner/Binance.png"
            alt='binance'
            width={150}
            height={70.31}
            />
            <Image src="/image/partner/coinbase.png"
            alt='binance'
            width={150}
            height={70.31}
            />
            <Image src="/image/partner/exmo.png"
            alt='binance'
            width={150}
            height={70.31}
            />
            <Image src="/image/partner/gemini.png"
            alt='binance'
            width={150}
            height={70.31}
            />
        <Image src="/image/partner/kraken.png"
          alt='binance'
          width={150}
          height={70.31}
        />
      </div>
    )
}

export default SectionPartnerLogo;