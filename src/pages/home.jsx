import React from 'react';
import { ArrowRight, Home, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-baby-pink-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center bg-baby-pink-100 text-baby-pink-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">New Collection</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Gloss That
              <span className="block text-baby-pink-600">Lasts All Day</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Experience the perfect blend of shine and hydration with Neash lipgloss. 
              Made with natural ingredients for that perfect pout you've been dreaming of.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-baby-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-baby-pink-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center shadow-lg hover:shadow-xl">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-baby-pink-600">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-baby-pink-600">50+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-baby-pink-600">100%</div>
                <div className="text-sm text-gray-600">Natural Ingredients</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {/* This would be your lipgloss image */}
              <div className="w-full h-full bg-gradient-to-br from-baby-pink-200 to-baby-pink-300 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-pink-300 to-rose-300 rounded-full shadow-2xl flex items-center justify-center mb-8">
                    <div className="w-48 h-48 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-inner"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-2">Neash Lip Gloss</h3>
                  <p className="text-gray-700">Shine that speaks volumes</p>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-black">Berry Blush</p>
                    <p className="text-sm text-gray-600">Best Seller</p>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-baby-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-baby-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
};

export default Hero;