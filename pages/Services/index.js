import React from "react";
import Base from "../../layouts/Baseof";
import "swiper/swiper.min.css";
import Link from "next/link";

import Image from "next/image";
const Services = () => {
  return (
    <Base>  
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto cardsstart">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap servicesblocks" >
          <ServiceCard
            title="Strategy Trading"
            href="/strategy_trading"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
    
              <Image className="mx-auto" src="/services/strategy trading.svg" width="100" height="100" alt="Strategy Trading" />
              
            }
          />
          <ServiceCard
            title="Customizable Strategy"
            href="/customizable_strategy"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
            
              <Image className="mx-auto" src="/services/customizabletrading.svg" width="100" height="100" alt="Customizable Strategy Trading" />
            }
          />
          <ServiceCard
            title="Education"
            href="/education"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
<Image className="mx-auto" src="/services/education.svg" width="100" height="100" alt="Strategy Trading" />
            }
          />
        
         
       
        </div>
      </div>
    </section>
    </Base>
  
  );
};

export default Services;

const ServiceCard = ({ icon, title, details ,href}) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 servicecard">
        
    <Link href={href}>
        <div className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">

          <div className="mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-2xl">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      

    </Link>
       </div> 
    </>
  );
};
