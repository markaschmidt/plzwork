import { useState } from 'react';
import { ShoppingCart, Star, Leaf, Zap } from 'lucide-react';

const cigaretteBrands = [
  {
    name: "Vektral Gold",
    description: "Premium blend with smooth finish",
    price: 9.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1590080875548-5d37d38a562e?w=300&h=400&fit=crop",
    strength: 3,
    flavor: "Rich tobacco"
  },
  {
    name: "Vektral Menthol",
    description: "Cool refreshing taste",
    price: 10.49,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300&h=400&fit=crop",
    strength: 4,
    flavor: "Mint"
  },
  {
    name: "Vektral Lights",
    description: "Milder option for discerning smokers",
    price: 9.49,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1590080875548-5d37d38a562e?w=300&h=400&fit=crop&sat=-50",
    strength: 2,
    flavor: "Light tobacco"
  },
  {
    name: "Vektral Black",
    description: "Full-bodied intense experience",
    price: 10.99,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=300&h=400&fit=crop&sat=50",
    strength: 5,
    flavor: "Dark tobacco"
  }
];

const features = [
  { icon: <Leaf className="h-6 w-6" />, text: "Premium tobacco blend" },
  { icon: <Zap className="h-6 w-6" />, text: "Long-lasting flavor" },
  { icon: <Star className="h-6 w-6" />, text: "Trusted by millions" }
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(cigaretteBrands[0]);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black bg-opacity-50 backdrop-blur-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="text-xl font-bold">VEKTRAL</span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 hover:text-red-400 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                PREMIUM TOBACCO<br />
                EXPERIENCE
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover our exclusive collection of premium cigarettes crafted for the discerning smoker.
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Shop Now
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590080875548-5d37d38a562e?w=600&h=400&fit=crop"
                alt="Premium cigarettes"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gray-800 bg-opacity-90 p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">4.8/5 Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="text-red-400">{feature.icon}</div>
                <span className="text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">OUR COLLECTION</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cigaretteBrands.map((brand, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg cursor-pointer ${
                  selectedProduct.name === brand.name ? 'ring-2 ring-red-500' : ''
                }`}
                onClick={() => setSelectedProduct(brand)}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{brand.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{brand.description}</p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-red-400 font-bold">${brand.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">{brand.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Strength: {'★'.repeat(brand.strength)}</span>
                    <span>{brand.flavor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-16 bg-black bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4">{selectedProduct.name}</h2>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(Math.floor(selectedProduct.rating))}
                  {selectedProduct.rating % 1 > 0 && '½'}
                </div>
                <span className="text-gray-400 ml-2">({selectedProduct.rating} rating)</span>
              </div>
              <p className="text-xl text-gray-300 mb-6">{selectedProduct.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <span className="text-gray-400 text-sm">Strength</span>
                  <div className="text-red-400 text-lg">
                    {'★'.repeat(selectedProduct.strength)}
                  </div>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Flavor Profile</span>
                  <div className="text-lg">{selectedProduct.flavor}</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-bold">${selectedProduct.price}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCartCount(Math.max(0, cartCount - 1))}
                    className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-8 text-center">{cartCount}</span>
                  <button
                    onClick={() => setCartCount(cartCount + 1)}
                    className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-lg flex items-center justify-center transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={addToCart}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold">VEKTRAL</span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium tobacco products crafted for the modern smoker.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {cigaretteBrands.map((brand, index) => (
                  <li key={index}>{brand.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Tobacco Products</li>
                <li>For Adults Only (21+)</li>
                <li>Smoking Causes Health Risks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>support@vektral.com</li>
                <li>1-800-VEKTRAL</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Vektral Tobacco Co. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}