import React from 'react';

const Greeting = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">


      <div className="relative z-10 text-center px-4">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 text-transparent bg-clip-text animate-gradient">
          Hi
        </h1>
        <p className="mt-6 text-3xl font-semibold text-gray-300">
          I am{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-300 text-transparent bg-clip-text">
              Youssef Ayman
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-teal-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </p>

        {/* Optional subtitle */}
        <p className="mt-4 text-lg text-gray-400 opacity-0 transform translate-y-4 animate-fadeIn">
          Welcome to my portfolio
        </p>
      </div>
    </div>
  );
};



export default Greeting;