import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

const Payment = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800 text-center py-16">
      <div className="container mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Pricing Plans</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Practice here
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle>Monthly plan</CardTitle>
              <CardDescription>Perfect for short term job hunts.</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="line-through text-gray-500">₹2,900 /month</p>
              <p className="text-3xl font-bold">₹1,500 /month</p>
              <p className="text-gray-600 dark:text-gray-300">₹1,500 billed per month. Cancel anytime.</p>
            </CardContent>
            <CardFooter className="mt-6">
              <Button className="w-full">Buy now →</Button>
            </CardFooter>
            <ul className="mt-6 text-left text-gray-600 dark:text-gray-300">
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
            </ul>
          </Card>
          <Card className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle>Monthly plan</CardTitle>
              <CardDescription>Perfect for short term job hunts.</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="line-through text-gray-500">₹2,900 /month</p>
              <p className="text-3xl font-bold">₹1,500 /month</p>
              <p className="text-gray-600 dark:text-gray-300">₹1,500 billed per month. Cancel anytime.</p>
            </CardContent>
            <CardFooter className="mt-6">
              <Button className="w-full">Buy now →</Button>
            </CardFooter>
            <ul className="mt-6 text-left text-gray-600 dark:text-gray-300">
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
            </ul>
          </Card>
          <Card className="bg-gray-300 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <CardHeader>
              <CardTitle>Monthly plan</CardTitle>
              <CardDescription>Perfect for short term job hunts.</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="line-through text-gray-500">₹2,900 /month</p>
              <p className="text-3xl font-bold">₹1,500 /month</p>
              <p className="text-gray-600 dark:text-gray-300">₹1,500 billed per month. Cancel anytime.</p>
            </CardContent>
            <CardFooter className="mt-6">
              <Button className="w-full">Buy now →</Button>
            </CardFooter>
            <ul className="mt-6 text-left text-gray-600 dark:text-gray-300">
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
              <li className="flex items-center mb-2">
                <span className="mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              </li>
            </ul>
          </Card>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 dark:text-white  pb-6 pt-16">
          Join us and level up your <br /> skills with AI
        </h2>
        <Button className="bg-black text-white py-2 px-10 rounded-full text-lg">Get Full Access</Button>
      </div>
    </section>
  );
};

export default Payment;
