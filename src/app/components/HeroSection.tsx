import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 text-center py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
          The great way to prepare <br /> for interviews with AI
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mt-4">
          The only end-to-end front end interview preparation platform. Brought
          to you by big tech Senior / Staff Front End Engineers.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/get-started" className="bg-black text-white py-2 px-6 rounded-full text-lg">Get Started</Link>
          <Link href="/full-access" className="bg-black text-white py-2 px-6 rounded-full text-lg">Full Access</Link>
        </div>
        <div className="mt-12">
          <div className="flex justify-center space-x-8">
            <Image src="/icon/googleHeroPage.png" alt="Company Logos" width={600} height={100} />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 py-16 mt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white rounded-full p-4">
              <Image src="/icon/code.png" alt="CLI" width={50} height={50} className="invert" />
            </div>
            <h2 className="text-xl font-bold mt-4">Write code with AI, in your own space</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Exercism is primarily built as a CLI-first tool. Download and submit exercises right from your terminal.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white rounded-full p-4">
              <Image src="/icon/codeIcon.png" alt="Browser" width={50} height={50} className="invert" />
            </div>
            <h2 className="text-xl font-bold mt-4">Use the Exercism in-browser editor</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Don't spend hours installing a language locally just to try it out. We support all 70 of our programming languages in our in-browser editor.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white rounded-full p-4">
              <Image src="/icon/ai.png" alt="AI" width={50} height={50} className="invert" />
            </div>
            <h2 className="text-xl font-bold mt-4">Get AI analysis on your code</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Not quite sure how well you've done? We run AI analysis on your solutions to give you quick feedback and points of improvement.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Practice with</p>
        <div className="flex justify-center space-x-8">
          <Image src="/icon/practiceWith.png" alt="Company Logos" width={1000} height={100} />
        </div>
      </div>
      {/* New Section with Circular Icons */}
      <div className="bg-gray-200 dark:bg-gray-800 py-16 mt-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="mt-16 lg:mt-0 bg-gray-100 dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Everything you need, in great quality
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-16">
              Unique depth, unmatched quality.
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Not sure what to prepare? No problem
            </h3>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mt-4">
              Instantly preview your code output
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mt-4 text-left mx-auto max-w-2xl">
              <li className="mb-2">• Instantly preview your code output</li>
              <li className="mb-2">• Enjoy quality of life editor features like syntax highlighting, theming, keyboard shortcuts</li>
              <li className="mb-2">• Learn from solutions by AI</li>
              <li className="mb-2">• Practice in an environment that simulates real interviews</li>
              <li className="mb-2">• Test your code automatically with a single click</li>
              <li className="mb-2">• Gain insights on what your target company might ask</li>
              <li>• Prepare the best you can within any timeline</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image src="/icon/circularLogo.png" alt="Circular Icons" width={600} height={600} />
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 py-16 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Try our questions here</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Deepen your knowledge with AI
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-16">
            Spice up your coding with AI! Explore new solutions by feeding your exercises to AI tools. Immerse yourself in the lingo AI uses for different languages, learning its preferred ways and common approaches.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 items-center">
            <div>
              <Image src="/images/editor1.png" alt="Editor Image 1" width={370} height={493} />
            </div>
            <div className="scale-110">
              <Image src="/images/editor2.png" alt="Editor Image 2" width={370} height={493} />
            </div>
            <div>
              <Image src="/images/editor3.png" alt="Editor Image 3" width={370} height={493} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Large Question Bank</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Practice here
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-16">
          orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
