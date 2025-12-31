import React from 'react';
import { ArrowRight, Droplets } from 'lucide-react';
import Bg from '../assets/hero-image.jpg';

const Hero = () => {
  const backgroundImage = Bg;

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image with dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <img 
          src={backgroundImage}
          alt="Lipgloss background"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Dark Gradient Overlay - Multiple directions for best coverage */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />
        
        {/* Subtle pink tint for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-r from-baby-pink-900/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[90vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <div className="text-left">
            {/* New Collection Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm text-baby-pink-700 px-4 py-2 rounded-full mb-6 border border-white/30 shadow-lg">
              <Droplets className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">New Collection</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Gloss That</span>
              <span className="block text-pink-300 drop-shadow-lg">Lasts All Day</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg text-white/90 mb-8 max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              Experience the perfect blend of shine and hydration with Neash lipgloss. 
              Made with natural ingredients for that perfect pout you've been dreaming of.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-baby-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-baby-pink-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center shadow-lg hover:shadow-xl backdrop-blur-sm">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/10">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-baby-pink-300">10K+</div>
                <div className="text-sm text-white/90">Happy Customers</div>
              </div>
              <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-baby-pink-300">50+</div>
                <div className="text-sm text-white/90">Products</div>
              </div>
              <div className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-baby-pink-300">100%</div>
                <div className="text-sm text-white/90">Natural Ingredients</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Product Visual */}
          <div className="relative hidden md:block">
            <div className="relative h-[500px]">
              {/* Floating Lipgloss Product */}
              {/* <div className="absolute inset-0 flex items-center justify-center"> */}
                {/* Main gloss effect */}
                {/* <div className="relative w-96 h-96"> */}
                  {/* Outer glow */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-baby-pink-400/40 to-pink-500/40 rounded-full blur-2xl"></div> */}
                  
                  {/* Glass container */}
                  {/* <div className="relative w-96 h-96 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-full border-2 border-white/50 shadow-2xl flex items-center justify-center"> */}
                    {/* Gloss content */}
                    {/* <div className="w-80 h-80 bg-gradient-to-br from-baby-pink-300/70 to-pink-400/70 rounded-full flex items-center justify-center">
                      <div className="w-64 h-64 bg-gradient-to-br from-baby-pink-400/90 to-pink-500/90 rounded-full relative overflow-hidden"> */}
                        {/* Shine reflection */}
                        {/* <div className="absolute top-4 left-4 w-48 h-48 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm"></div>
                        <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-tl from-white/40 to-transparent rounded-full"></div>
                         */}
                        {/* Lipgloss tube effect */}
                        {/* <div className="absolute inset-8 bg-gradient-to-b from-baby-pink-500 to-pink-600 rounded-2xl">
                          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-b from-gray-100 to-gray-300 rounded-t-lg"></div>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-t from-gray-800/40 to-transparent rounded-b-lg"></div>
                        </div> */}
                      {/* </div>
                    </div>
                  </div> */}
                  
                  {/* Floating elements */}
                  {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400/60 to-rose-500/60 rounded-full blur-lg"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-baby-pink-300/60 to-pink-400/60 rounded-full blur-lg"></div> */}
                {/* </div>
              </div> */}
              
              {/* Floating text */}
              {/* <div className="absolute bottom-12 left-0 right-0 text-center">
                <div className="inline-block bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl border border-white/60">
                  <p className="font-bold text-black text-lg">Berry Blush</p>
                  <p className="text-sm text-gray-600">Limited Edition</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Optional: Add subtle animation to gradient */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.9; }
        }
        .gradient-animate {
          animation: gradientShift 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;