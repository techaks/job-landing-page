"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])
    if (!mounted) {
        return null;
    }
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <button onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} className='p-2 transition-all duration-300 w-10 h-10 bg-blue-800 flex flex-col items-center justify-center  dark:bg-white rounded-full'>
            {
                currentTheme === "dark" ? (
                    <BiSun className='w-6 h-6 text- text-white dark:text-black   cursor-pointer' />
                ) : (<BiMoon className='w-6 h-6 text- text-white dark:text-black  cursor-pointer' />)
            }

        </button>
    )
}

export default ThemeToggle
