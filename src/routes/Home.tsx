import { useState } from 'react';
import { ShoppingCart, Moon, Sun, Menu } from 'lucide-react';

const products = [
  { id: 1, name: 'Classic Red', price: 8.99, description: 'Smooth full-flavor cigarettes', strength: 'Full', image: 'https://images.unsplash.com/photo-1590080875548-5d3a5c9a42b1?w=400&h=300&fit=crop' },
  { id: 2, name: 'Menthol Fresh', price: 9.49, description: 'Cool menthol experience', strength: 'Medium', image: 'https://images.unsplash.com/photo-1621955359239-e825145947e3?w=400&h=300&fit=crop' },
  { id: 3, name: 'Gold Lights', price: 8.79, description: 'Milder tobacco blend', strength: 'Light', image: 'https://images.unsplash.com/photo-1579303349424-c1923a78c452?w=400&h=300&fit=crop' },
  { id: 4, name: 'Silver Ultra', price: 9.29, description: 'Ultra-light satisfaction', strength: 'Ultra-Light', image: 'https://images.unsplash.com/photo-1590080875548-5d3a5c9a42b1?w=400&h=300&fit=crop&sat=-100' },
  { id: 5, name: 'Black Label', price: 10.99, description: 'Premium dark tobacco', strength: 'Full', image: 'https://images.unsplash.com/photo-1606890749939-65e633921f16?w=400&h=300&fit=crop' },
  { id: 6, name: 'Cherry Burst', price: 9.99, description: 'Flavored with natural cherry', strength: 'Medium', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <h1 className="text-xl font-bold">VEKTRAL</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-red-400 transition-colors">Home</a>
            <a href="#products" className="hover:text-red-400 transition-colors">Products</a>
            <a href="#about" className="hover:text-red-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-700 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative">
              <ShoppingCart size={20} className="cursor-pointer hover:text-red-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
              <a href="#" className="py-2 hover:text-red-400 transition-colors">Home</a>
              <a href="#products" className="py-2 hover:text-red-400 transition-colors">Products</a>
              <a href="#about" className="py-2 hover:text-red-400 transition-colors">About</a>
              <a href="#contact" className="py-2 hover:text-red-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1579303349424-c1923a78c452?w=1920&h=1080&fit=crop"
          alt="Cigarette background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Premium Tobacco Experience</h2>
          <p className="text-xl md:text-2xl mb-8">Discover our exclusive collection of fine cigarettes</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-red-500/20 transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <span className="text-red-400 font-semibold">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">{product.strength}</span>
                    <button
                      onClick={addToCart}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Vektral</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Vektral has been crafting premium tobacco products since 1995. Our commitment to quality and innovation has made us a leader in the industry.
            </p>
            <p className="text-lg mb-6">
              We source only the finest tobacco leaves from around the world, ensuring each cigarette delivers a consistent, satisfying experience.
            </p>
            <p className="text-lg">
              Our state-of-the-art manufacturing facilities combine traditional craftsmanship with modern technology to create products you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">&copy; 2023 Vektral. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Age Verification</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}