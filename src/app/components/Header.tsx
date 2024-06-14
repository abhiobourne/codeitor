"use client";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showPracticeDropdown, setShowPracticeDropdown] = useState(false);
  const [showGuideDropdown, setShowGuideDropdown] = useState(false);

  useEffect(() => {
    // Check for saved user preference, if any, on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown((prevShow) => !prevShow);
  };

  const handleLanguageChange = (lang : any) => {
    // Implement your language change logic here
    console.log('Language changed to:', lang);
    setShowLanguageDropdown(false);
  };

  const togglePracticeDropdown = () => {
    setShowPracticeDropdown((prevShow) => !prevShow);
  };

  const toggleGuideDropdown = () => {
    setShowGuideDropdown((prevShow) => !prevShow);
  };

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Logo */}
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" className="h-12" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={togglePracticeDropdown}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              Practice Questions
              <Image
                src={showPracticeDropdown ? "/icon/chevron-up.png" : "/icon/chevron-down.png"}
                alt="Toggle Dropdown"
                width={20}
                height={20}
                className={`ml-2 transform ${showPracticeDropdown ? 'rotate-180' : ''}`}
              />
            </button>
            {showPracticeDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                    <Link href="/practice/question1">Question 1</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                    <Link href="/practice/question2">Question 2</Link>
                  </li>
                  {/* Add more practice questions as needed */}
                </ul>
              </div>
            )}
          </li>
          <li className="relative">
            <button
              onClick={toggleGuideDropdown}
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              Guide
              <Image
                src={showGuideDropdown ? "/icon/chevron-up.png" : "/icon/chevron-down.png"}
                alt="Toggle Dropdown"
                width={20}
                height={20}
                className={`ml-2 transform ${showGuideDropdown ? 'rotate-180' : ''}`}
              />
            </button>
            {showGuideDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
                <ul>
                  <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                    <Link href="/guide/step1">Step 1</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                    <Link href="/guide/step2">Step 2</Link>
                  </li>
                  {/* Add more guide steps as needed */}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>

      {/* User Links */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            <Image
              src="/icon/languages.png"
              alt="Translate"
              width={24}
              height={24}
            />
          </button>
          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md z-10">
              <ul>
                <li
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleLanguageChange('en')}
                >
                  English
                </li>
                <li
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleLanguageChange('es')}
                >
                  Spanish
                </li>
                {/* Add more languages as needed */}
              </ul>
            </div>
          )}
        </div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 focus:outline-none"
        >
          <Image
            src="/icon/moon.png"
            alt="Dark Mode Toggle"
            width={24}
            height={24}
            className={`transition-transform transform ${darkMode ? 'fill-current text-black' : 'stroke-current text-white'}`}
          />
        </button>
        <Button asChild className='rounded-full pl-6 pr-6'>
          <Link href="/login">Sign In/Up</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
