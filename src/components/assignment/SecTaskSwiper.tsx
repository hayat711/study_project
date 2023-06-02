//@ts-nocheck
'use client';
import React, { useRef, useState } from 'react';
import AssignmentDetail from './AssignmentDetail';
import { assignments } from '../../constants/assignments';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, EffectFade } from 'swiper';

export default function TaskSwiper() {
    return (
        <>
            <Swiper
                // effect={'fade'}
                grabCursor={true}
                pagination={{ clickable: true, dynamicBullets: false }}
                autoplay={{ delay: 5000 }}
                modules={[Autoplay, Pagination, ]}
                className='task-swiper'
            >
                <div className='overflow-y-auto '>
                    {assignments.map((assignment) => (
                        <div key={assignment.id}>
                            <SwiperSlide>
                                <AssignmentDetail key={assignment.id} assignment={assignment} />
                            </SwiperSlide>
                        </div>
                    ))}
                </div>
            </Swiper>
        </>
    );
}
