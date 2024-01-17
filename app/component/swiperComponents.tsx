"use client"

import React from 'react';
import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const SwiperComponents = ({ }) => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
                modules={[Navigation]}
                className="mySwiper my-14 bg-white"
            >
                <SwiperSlide className='overflow-hidden'>
                    <div className="max-w-sm p-6 bg-hijau3 rounded-lg shadow flex flex-col items-center justify-center hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/cupcakes.svg" alt="" style={{ width: '47px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">CupCake</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">22 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-tosca2 rounded-lg shadow flex flex-col items-center justify-center hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/pizza.svg" alt="" style={{ width: '47px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Pizza</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">25 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-biru2 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/kebab.svg" alt="" style={{ width: '47px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Kebab</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">12 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-pink2 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/salmon.svg" alt="" style={{ width: '60px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Salmon</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">25 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-hijau4 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/donat.svg" alt="" style={{ width: '60px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Donat</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">25 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-hijau3 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/cupcakes.svg" alt="" style={{ width: '47px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">CupCake</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">22 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-tosca2 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/pizza.svg" alt="" style={{ width: '47px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Pizza</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">25 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-biru2 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/kebab.svg" alt="" style={{ width: '47px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Kebab</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">12 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-pink2 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/salmon.svg" alt="" style={{ width: '60px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Salmon</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">25 Items</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-sm p-6 bg-hijau4 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center  hover:h-48">
                        <img className="w-2 h-2 text-gray-500 mb-5" src="/donat.svg" alt="" style={{ width: '60px', height: '52px' }} />
                        <p className=" text-gray-900 font-semibold text-sm ">Donat</p>
                        <p className="mb-3 font-small text-sm text-gray-500 ">25 Items</p>
                    </div>
                </SwiperSlide>
                {/* Your SwiperSlides go here */}

                <div className="swiper-next hidden md:block absolute top-1/2 right-24 w-7 h-7 mt-10 z-10 cursor-pointer bg-cover bg-center bg-no-repeat">
                    <a href="#" className=" text-white rounded-full  my-10  bg-hijau2 inline-flex items-center justify-center px-5 py-3 mr-3 max-w-sm">
                        NEXT
                        <svg className='ms-2' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="33" height="33" rx="16.5" fill="white" />
                            <g clip-path="url(#clip0_307_4301)">
                                <path d="M21.2314 15.8522L13.0695 7.69298C12.7113 7.33574 12.1311 7.33574 11.772 7.69298C11.4139 8.05021 11.4139 8.63046 11.772 8.9877L19.2866 16.4996L11.7729 24.0114C11.4148 24.3687 11.4148 24.9489 11.7729 25.307C12.1311 25.6643 12.7122 25.6643 13.0704 25.307L21.2323 17.1478C21.585 16.7942 21.585 16.2049 21.2314 15.8522Z" fill="#8BAC3E" />
                            </g>
                            <defs>
                                <clipPath id="clip0_307_4301">
                                    <rect width="18.15" height="18.15" fill="white" transform="translate(7.42505 7.42505)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className="swiper-prev hidden md:block absolute top-1/2 right-56 w-7 h-7 mt-10 z-10 cursor-pointer bg-cover bg-center bg-no-repeat">
                    <a href="#" className=" text-white  rounded-full  my-10 bg-hijau2 inline-flex items-center justify-center px-5 py-3 mr-3 max-w-sm">
                        <svg className='me-2' width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="33" height="33" rx="16.5" fill="white" />
                            <path d="M9.0257 15.8218L18.4693 7.28048C18.8837 6.90651 19.555 6.90651 19.9705 7.28048C20.3848 7.65444 20.3848 8.26186 19.9705 8.63583L11.2759 16.4995L19.9694 24.3631C20.3838 24.7371 20.3838 25.3445 19.9694 25.7194C19.555 26.0934 18.8826 26.0934 18.4683 25.7194L9.02465 17.1781C8.61655 16.808 8.61655 16.191 9.0257 15.8218Z" fill="#8BAC3E" />
                        </svg>
                        PREV
                    </a>

                </div>
            </Swiper>


        </>
    );
};

export default SwiperComponents;
