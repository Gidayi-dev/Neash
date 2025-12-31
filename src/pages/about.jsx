import React from 'react';
import { Heart, Leaf, Shield, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Made with Love',
      description: 'Every product is crafted with passion and attention to detail',
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Natural Ingredients',
      description: 'Only the finest natural and vegan ingredients',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cruelty Free',
      description: 'Never tested on animals, always ethical',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Sustainable',
      description: 'Eco-friendly packaging and practices',
    },
  ];

  return (
    <section id="about" className="py-16 bg-baby-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Story: More Than Just Lipgloss
            </h2>
            
            <p className="text-gray-600 mb-6">
              Neash began with a simple idea: to create lipgloss that not only 
              makes you look beautiful but feels incredible too. Founded by a 
              team of beauty enthusiasts and chemists, we set out to revolutionize 
              the lipgloss industry.
            </p>
            
            <p className="text-gray-600 mb-8">
              We believe beauty should be kind—to you, to animals, and to our 
              planet. That's why every Neash lipgloss is vegan, cruelty-free, 
              and packaged sustainably. Our formulas are carefully developed 
              to provide maximum hydration, shine, and longevity without 
              compromising on ethics.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-baby-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-baby-pink-600" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Our Promise</h4>
                  <p className="text-gray-600 text-sm">
                    "To deliver exceptional quality lipgloss that enhances 
                    your natural beauty while respecting our planet and all 
                    its inhabitants."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-baby-pink-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-baby-pink-600">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 bg-gradient-to-r from-baby-pink-500 to-pink-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredient Spotlight */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            Featured Ingredients
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-amber-600 font-bold">J</span>
              </div>
              <h4 className="font-bold text-black mb-2">Jojoba Oil</h4>
              <p className="text-gray-600 text-sm">Deep hydration & nourishment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 font-bold">S</span>
              </div>
              <h4 className="font-bold text-black mb-2">Shea Butter</h4>
              <p className="text-gray-600 text-sm">Rich moisture & protection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold">V</span>
              </div>
              <h4 className="font-bold text-black mb-2">Vitamin E</h4>
              <p className="text-gray-600 text-sm">Antioxidant & healing</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-rose-600 font-bold">R</span>
              </div>
              <h4 className="font-bold text-black mb-2">Rose Extract</h4>
              <p className="text-gray-600 text-sm">Soothing & fragrant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;