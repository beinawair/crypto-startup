import SEOHead from '../components/landingpage/SEO/SEOHead';
import Image from 'next/image';
import globalMeta from '../components/landingpage/SEO/globalMeta';
import NavbarSection from '../components/landingpage/NavbarSection';
import FooterSection from '../components/landingpage/FooterSection';
import GradientMesh from '../components/landingpage/Animation/GradientMeshAnimation';
import GradientMeshPassive from '../components/landingpage/Animation/GradientMeshAnimationPassive';

import { useEffect, useState } from "react";
import SectionPartnerLogo from '../components/landingpage/SectionPartnerLogo';
import SectionMarket from '../components/landingpage/SectionMarket';
import SectionCoreValue from '../components/landingpage/SectionCoreValue';
import SectionTestimonials from '../components/landingpage/SectionTestimonials';
import Testimonials from '../components/landingpage/Testimonials';
import { testimonialsData } from '../config/testimonialsData';
import SectionArticle from '../components/landingpage/SectionArticle';
import { dummyArticle } from '../config/dummyArticle';
import { GetDataMarket } from './api/GetDataMarket';
import axios from 'axios';

const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

export default function Home() {
  const [headerColor, setHeaderColor] = useState(0);
  const [coins, setCoins] = useState([]);

  const structuredLd = JSON.stringify({
      "@context": globalMeta.canonicalUrl,
      "description": "Buy, sell & Swap Cryptocurrentcy in minutes"
  });

  useEffect(() => {
      const yAxis = () => {
        setHeaderColor(window.pageYOffset);
      }

      window.addEventListener('scroll', yAxis);

      yAxis();

      return () => window.removeEventListener('scroll', yAxis);
  }, []);

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        if (res.status == 200) {
          setCoins(res.data);
        } else {
          return null;
        }
      }).catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div>
      <SEOHead
        canonicalUrl={globalMeta.siteUrl}
        structuredData={structuredLd}
        title="Wiki | Cryptocurrentcy"
        description="Buy, sell and Swap Cryptocurrentcy in minutes"
        ogType="website"
      />
      
      <header className={headerColor ? "header-wrapper header-bg backdrop-blur-xl opacity-95" : "header-wrapper"}>
        <NavbarSection/>
      </header>

      <section className="hero w-full h-100">
        <div className="relative container mx-auto h-[100vh]">
          <div className="headline-text absolute z-20">
            <h1 className='title-head items-center flex flex-col'>
              Buy, Sell & Swap
              <br />
              Cryptocurrentcy
              <span className='stroke-text'>in minutes</span>
            </h1>
            <p className='text-paragraph text-md mt-8'>Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset exchange</p>
            <div className="cta-section mt-10 mx-auto">
              <input type="email" placeholder='Enter your email...' className='email-text'/>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
          <div className="desktop-view-bg">
            <GradientMesh />
          </div>
          <div className="mobile-view-bg">
            <GradientMeshPassive />
          </div>
        </div>
      </section>

      <main>
        <div className="container">
          <div className="image-element -mt-24 relative hide-mobile">
            <Image src="/image/Dashboard.png"
              alt='image'
              width={732}
              height={524}
              className="image-dashboard"
            />
          </div>

          <div className="-mt-24 relative mobile">
            <img src="/image/Dashboard.png" alt="dashboard" className='image-mobile'/>
          </div>

          <div className="relative partner-section">
            <SectionPartnerLogo/>
            <div className="gradient-left">
              <GradientMeshPassive/>
            </div>
          </div>

          <div className="container relative mt-20">
            <SectionMarket data={coins}/>
            <div className="gradient-right">
              <GradientMeshPassive/>
            </div>
          </div>

          <div className="container relative mt-20">
            <div className="value-wrapper">
              <div className="mobile-view-layout flex justify-between items-center">
                <h2 className="title-head-sub text-center-mobile">
                  <span className='text-purple-300'>The Most Trusted</span>
                  <br />
                  Crptocurrentcy Platform
                </h2>
                <p className="text-paragraph mt-8 max-w-sm text-md">Here are few reasons why you should choose Wiki as your partner</p>
              </div>
              <div className="core-value mt-2">
                <SectionCoreValue img="/image/illustration/secured_storage.svg"
                  title="Secure Storage"
                  description="We store the vast majority of the digital assets in secure offline storage."
                />
                <SectionCoreValue img="/image/illustration/protected_by_insurance.svg"
                  title="Secure Storage"
                  description="We store the vast majority of the digital assets in secure offline storage."
                  extraClass="reverse"
                />
                <SectionCoreValue img="/image/illustration/secured_transaction.svg"
                  title="Secure Storage"
                  description="We store the vast majority of the digital assets in secure offline storage."
                />
              </div>
            </div>
            <div className="gradient-left">
              <GradientMeshPassive/>
            </div>
          </div>

          <div className="container relative mt-20">
            <div className="achievement-wrapper">
              <div className="achievement-item">
                <h3 className='title-head-sub'>$483B</h3>
                <p className='text-sm xs'>Quarterly <br/> Volume Traded</p>
              </div>
              <div className="achievement-item">
                <h3 className='title-head-sub'>120+</h3>
                <p className='text-sm xs'>Countries <br/> Supported</p>
              </div>
              <div className="achievement-item">
                <h3 className='title-head-sub'>+25M</h3>
                <p className='text-sm xs'>Verified <br/> Users</p>
              </div>
            </div>
            <div className="gradient-right">
              <GradientMeshPassive/>
            </div>
          </div>

          <div className="container relative mt-20 h-[80vh]">
            <SectionTestimonials>
              <Testimonials data={testimonialsData}/>
            </SectionTestimonials>
            <div className="gradient-left">
              <GradientMeshPassive/>
            </div>
          </div>

          <div className="container relative mt-20 lg:mt-0">
            <div className="outer-wrapper">
              <h1 className='title-head-sub'>
                Learn Crypto
              </h1>
            </div>
            <SectionArticle data={dummyArticle}/>
            <div className="gradient-right">
              <GradientMeshPassive/>
            </div>
          </div>

          <div className="container relative mt-20">
            <div className="cta-section-footer">
              <h2 className="title-head-sub">Let&apos;s start your crypto investment now!</h2>
              <button className="btn-secondary mt-12">Explore Now!</button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <FooterSection/>
      </footer>
    </div>
  )
}
