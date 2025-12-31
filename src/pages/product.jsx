import React from 'react';
import { Star, ShoppingBag, Heart, Sparkles } from 'lucide-react';

const Products = () => {
  const lipglossProducts = [
    {
      id: 1,
      name: 'Berry Blush',
      description: 'Sweet berry tint with hydrating shine',
      price: '$24.99',
      originalPrice: '$29.99',
      rating: 4.8,
      reviews: 128,
      tags: ['Bestseller', 'Vegan'],
      color: 'bg-gradient-to-br from-rose-400 to-pink-500',
      imageColor: 'from-rose-300 to-pink-400',
    },
    {
      id: 2,
      name: 'Peach Glow',
      description: 'Warm peach with golden shimmer',
      price: '$22.99',
      originalPrice: '$27.99',
      rating: 4.6,
      reviews: 96,
      tags: ['New', 'Shimmer'],
      color: 'bg-gradient-to-br from-orange-300 to-yellow-200',
      imageColor: 'from-orange-200 to-yellow-100',
    },
    {
      id: 3,
      name: 'Rose Quartz',
      description: 'Muted rose with pearl finish',
      price: '$26.99',
      originalPrice: '$32.99',
      rating: 4.9,
      reviews: 154,
      tags: ['Premium', 'Pearl'],
      color: 'bg-gradient-to-br from-pink-300 to-purple-300',
      imageColor: 'from-pink-200 to-purple-200',
    },
    {
      id: 4,
      name: 'Coral Kiss',
      description: 'Vibrant coral with high shine',
      price: '$21.99',
      originalPrice: '$26.99',
      rating: 4.5,
      reviews: 87,
      tags: ['Limited', 'Glossy'],
      color: 'bg-gradient-to-br from-red-300 to-orange-300',
      imageColor: 'from-red-200 to-orange-200',
    },
    {
      id: 5,
      name: 'Lavender Mist',
      description: 'Soft lavender with subtle glitter',
      price: '$23.99',
      originalPrice: '$28.99',
      rating: 4.7,
      reviews: 112,
      tags: ['Vegan', 'Glitter'],
      color: 'bg-gradient-to-br from-purple-300 to-indigo-300',
      imageColor: 'from-purple-200 to-indigo-200',
    },
    {
      id: 6,
      name: 'Nude Shine',
      description: 'Natural nude with creamy finish',
      price: '$20.99',
      originalPrice: '$25.99',
      rating: 4.4,
      reviews: 76,
      tags: ['Essential', 'Cream'],
      color: 'bg-gradient-to-br from-amber-200 to-rose-200',
      imageColor: 'from-amber-100 to-rose-100',
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-baby-pink-50 text-baby-pink-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Our Collection</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Discover Your Perfect Shade
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Each lipgloss is crafted with care, featuring natural ingredients and 
            long-lasting formulas that keep your lips hydrated and beautiful.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300">
            All Products
          </button>
          <button className="bg-baby-pink-50 text-baby-pink-700 px-6 py-2 rounded-full font-medium hover:bg-baby-pink-100 transition-colors duration-300">
            Bestsellers
          </button>
          <button className="bg-baby-pink-50 text-baby-pink-700 px-6 py-2 rounded-full font-medium hover:bg-baby-pink-100 transition-colors duration-300">
            New Arrivals
          </button>
          <button className="bg-baby-pink-50 text-baby-pink-700 px-6 py-2 rounded-full font-medium hover:bg-baby-pink-100 transition-colors duration-300">
            Vegan
          </button>
          <button className="bg-baby-pink-50 text-baby-pink-700 px-6 py-2 rounded-full font-medium hover:bg-baby-pink-100 transition-colors duration-300">
            Limited Edition
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lipglossProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-baby-pink-100"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`w-full h-full ${product.color} flex items-center justify-center relative`}>
                  {/* Lipgloss Tube Illustration */}
                  <div className="relative w-32 h-48">
                    {/* Tube */}
                    <div className="absolute w-20 h-40 bg-gradient-to-b from-white/30 to-transparent rounded-lg left-6 top-4"></div>
                    <div className="absolute w-24 h-44 bg-gradient-to-b from-white/20 to-white/5 rounded-xl left-4 top-2 border border-white/30 backdrop-blur-sm"></div>
                    
                    {/* Lipgloss inside */}
                    <div className={`absolute w-16 h-36 ${product.imageColor} rounded-lg left-8 top-6`}>
                      <div className="absolute top-0 w-16 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg"></div>
                      <div className="absolute bottom-0 w-16 h-2 bg-gradient-to-t from-black/20 to-transparent rounded-b-lg"></div>
                    </div>
                    
                    {/* Cap */}
                    <div className="absolute w-28 h-8 bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg left-2 top-0 shadow-lg"></div>
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/90 backdrop-blur-sm text-black text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Wishlist Button */}
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300">
                    <Heart className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-black">{product.name}</h3>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-current'
                              : 'stroke-current'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-black">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>

                  <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group-hover:scale-105">
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
            View All Products
          </button>
        </div>

        {/* Features Banner */}
        <div className="mt-16 bg-gradient-to-r from-baby-pink-50 to-pink-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-baby-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-baby-pink-600" />
              </div>
              <h4 className="font-bold text-black mb-2">Cruelty Free</h4>
              <p className="text-sm text-gray-600">Never tested on animals</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-baby-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-baby-pink-600" />
              </div>
              <h4 className="font-bold text-black mb-2">Vegan Formula</h4>
              <p className="text-sm text-gray-600">100% plant-based ingredients</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-baby-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-baby-pink-600" />
              </div>
              <h4 className="font-bold text-black mb-2">24H Hydration</h4>
              <p className="text-sm text-gray-600">Long-lasting moisture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;