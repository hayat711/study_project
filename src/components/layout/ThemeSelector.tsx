'use client'
import { useTheme } from 'next-themes';
import React, { useState } from 'react';

type Props = {
    style?: string;
};

const ThemeSelector: React.FC = ({ style }: Props) => {
    const { theme, setTheme } = useTheme();

    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme);
    };

    return (
        <div>
            <div className='flex-none ml-2'>
                <div>
                    <p className='text-sm font-semibold py-1'>Theme</p>
                </div>
                <div className='ml-2 grid grid-cols-1 space-y-2 z-50 w-full p-2  border-t-0 text-xs font-light '>
                    <label className='radio-label flex items-center'>
                        <input
                            type='radio'
                            name='theme'
                            className='radio radio-xs radio-primary-content mr-2'
                            checked={theme === 'night'}
                            onChange={() => handleThemeChange('night')}
                        />
                        Night
                    </label>
                    <label className='radio-label flex items-center'>
                        <input
                            type='radio'
                            name='theme'
                            className='radio radio-xs radio-primary-content mr-2'
                            checked={theme === 'acid'}
                            onChange={() => handleThemeChange('acid')}
                        />
                        Acid
                    </label>
                    <label className='radio-label flex items-center'>
                        <input
                            type='radio'
                            name='theme'
                            className='radio radio-xs radio-primary-content mr-2'
                            checked={theme === 'luxury'}
                            onChange={() => handleThemeChange('luxury')}
                        />
                        Luxury
                    </label>
                    <label className='radio-label flex items-center'>
                        <input
                            type='radio'
                            name='theme'
                            className='radio radio-xs radio-primary-content mr-2'
                            checked={theme === 'pastel'}
                            onChange={() => handleThemeChange('pastel')}
                        />
                        Pastel
                    </label>
                    
                </div>
            </div>
        </div>
    );
};

export default ThemeSelector;
