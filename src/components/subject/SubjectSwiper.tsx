'use client';
import React, { useRef, useState } from 'react';
import { Subject } from '@/utils/types.dt';
import SubjectDetails from './SubjectDetails';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper';
type Props = {
    subjects?: Subject[];
};

export default function SubjectSwiper({ subjects }: Props) {
    return (
        <>
            <Swiper
                effect={'fade'}
                grabCursor={true}
                pagination={{ clickable: true, dynamicBullets: false }}
                autoplay={{ delay: 5000 }}
                modules={[Autoplay, Pagination, EffectFade]}
                className='task-swiper'
            >
                <div className='overflow-y-auto '>
                    {subjects?.map((subject) => (
                        <div key={subject.id}>
                            <SwiperSlide>
                                <SubjectDetails key={subject.id} subject={subject} />
                            </SwiperSlide>
                        </div>
                    ))}
                </div>
            </Swiper>
        </>
    );
}
