import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const IdeasPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const ideaCategories = [
    { id: 'all', name: 'All Ideas' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'saas', name: 'SaaS' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'fintech', name: 'FinTech' },
    { id: 'livestock', name: 'Livestock Farming' },
    { id: 'factory', name: 'Factory' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'beverage', name: 'Beverage Production' },
    { id: 'foodprocessing', name: 'Food Processing' }
  ];

  // Deduplicated business ideas array (each idea appears only once)
  const businessIdeas = useMemo(() => [
    // E-Commerce
    {
      id: 'afrocentric-fashion',
      title: "Afrocentric Fashion Marketplace",
      description: "Online platform for African designers to sell authentic African prints and designs globally",
      category: 'ecommerce',
      revenue: "₦4.5M-₦21M ($10K-$50K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f"
    },
    {
      id: 'farmers-produce',
      title: "Farmers' Produce Aggregator",
      description: "Connects smallholder farmers directly to markets, reducing middlemen in the food chain",
      category: 'ecommerce',
      revenue: "₦3M-₦15M ($7K-$35K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'african-art',
      title: "African Art & Crafts Export Platform",
      description: "Showcases authentic African art to global buyers with secure shipping",
      category: 'ecommerce',
      revenue: "₦6M-₦24M ($14K-$57K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1584735422186-97e9d1af8f1a"
    },
    {
      id: 'used-electronics',
      title: "Used Electronics Marketplace",
      description: "Specialized platform for quality-checked secondhand phones, laptops and gadgets",
      category: 'ecommerce',
      revenue: "₦9M-₦30M ($21K-$71K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
    },
    {
      id: 'bulk-foodstuff',
      title: "Bulk Foodstuff Delivery Service",
      description: "Wholesale platform for restaurants and caterers to order ingredients in bulk",
      category: 'ecommerce',
      revenue: "₦7.5M-₦27M ($18K-$64K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
    },

    // FinTech
    {
      id: 'mobile-pos',
      title: "Mobile POS for Informal Markets",
      description: "Affordable POS solutions tailored for market traders and roadside businesses",
      category: 'fintech',
      revenue: "₦15M-₦60M ($36K-$143K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1613243555988-441166d4d6fd"
    },
    {
      id: 'agric-crowdfunding',
      title: "Agric Crowdfunding Platform",
      description: "Connects small farmers with investors for farm financing with profit sharing",
      category: 'fintech',
      revenue: "₦9M-₦45M ($21K-$107K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      id: 'cross-border',
      title: "Cross-Border Remittance Solution",
      description: "Low-cost money transfer service for African diaspora sending money home",
      category: 'fintech',
      revenue: "₦30M-₦150M ($71K-$357K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040"
    },
    {
      id: 'micro-insurance',
      title: "Micro-Insurance Platform",
      description: "Pay-as-you-go insurance for low-income earners via mobile money",
      category: 'fintech',
      revenue: "₦12M-₦54M ($29K-$129K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29"
    },
    {
      id: 'savings-club',
      title: "Savings Club Digital Platform",
      description: 'Digitizes traditional "ajo" and "esusu" savings systems with added security',
      category: 'fintech',
      revenue: "₦7.5M-₦36M ($18K-$86K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f"
    },

    // Livestock Farming
    {
      id: 'snail-farming',
      title: "Snail Farming (Heliculture)",
      description: "High-demand export business with low startup costs and high profit margins",
      category: 'livestock',
      revenue: "₦1.5M-₦9M ($3.6K-$21K)/month",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1584735422186-97e9d1af8f1a"
    },
    {
      id: 'grasscutter',
      title: "Grasscutter (Cane Rat) Farming",
      description: "Meat production for high-end restaurants and export markets",
      category: 'livestock',
      revenue: "₦2.4M-₦12M ($5.7K-$29K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1584735422186-97e9d1af8f1a"
    },
    {
      id: 'poultry-feed',
      title: "Poultry Feed Production",
      description: "Affordable, high-quality feed for Nigeria's booming poultry industry",
      category: 'livestock',
      revenue: "₦4.5M-₦18M ($11K-$43K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1584735422186-97e9d1af8f1a"
    },
    {
      id: 'catfish',
      title: "Catfish Hatchery & Farm",
      description: "Year-round production of catfish fingerlings and mature fish",
      category: 'livestock',
      revenue: "₦3M-₦15M ($7K-$36K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1584735422186-97e9d1af8f1a"
    },
    {
      id: 'goat-sheep',
      title: "Goat & Sheep Breeding Farm",
      description: "Premium breeding stock for religious festivals and meat markets",
      category: 'livestock',
      revenue: "₦2.1M-₦10.5M ($5K-$25K)/month",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1550482787-7f9c0b7a9c0a"
    },
    {
      id: 'bee-farming',
      title: "Bee Farming & Honey Production",
      description: "Organic honey production with byproducts like beeswax and propolis",
      category: 'livestock',
      revenue: "₦1.8M-₦7.5M ($4.3K-$18K)/month",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924"
    },

    // Factory
    {
      id: 'sachet-water',
      title: "Sachet Water Production",
      description: "Pure water factory serving local communities with affordable drinking water",
      category: 'factory',
      revenue: "₦9M-₦45M ($21K-$107K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      id: 'palm-oil',
      title: "Palm Oil Processing Plant",
      description: "Small-scale mechanized processing of red palm oil from local farms",
      category: 'factory',
      revenue: "₦15M-₦60M ($36K-$143K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'plastic-recycling',
      title: "Plastic Recycling Factory",
      description: "Transforms waste plastic into useful products like chairs, tiles and bins",
      category: 'factory',
      revenue: "₦12M-₦54M ($29K-$129K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
    },
    {
      id: 'cassava',
      title: "Cassava Processing Plant",
      description: "Produces garri, flour, starch and other cassava derivatives",
      category: 'factory',
      revenue: "₦18M-₦75M ($43K-$179K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'cement-blocks',
      title: "Cement Block Industry",
      description: "Produces concrete blocks for Nigeria's booming construction sector",
      category: 'factory',
      revenue: "₦7.5M-₦36M ($18K-$86K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    },
    {
      id: 'tomato-paste',
      title: "Tomato Paste Production",
      description: "Processes fresh tomatoes into paste, reducing post-harvest losses",
      category: 'factory',
      revenue: "₦13.5M-₦60M ($32K-$143K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },

    // Beverage Production
    {
      id: 'premium-sachet',
      title: "Premium Sachet Water Factory",
      description: "High-quality purified water with mineral additives in various pack sizes",
      category: 'beverage',
      revenue: "₦15M-₦75M ($36K-$178K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      id: 'tigernut-milk',
      title: "Tigernut Milk (Kunun Aya) Production",
      description: "Processes tigernuts into nutritious dairy-free milk drink",
      category: 'beverage',
      revenue: "₦6M-₦27M ($14K-$64K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      id: 'zobo-drink',
      title: "Zobo Drink Factory",
      description: "Industrial-scale production of hibiscus-based healthy drinks",
      category: 'beverage',
      revenue: "₦4.5M-₦18M ($11K-$43K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      id: 'bottled-spring',
      title: "Bottled Spring Water",
      description: "Sources and packages natural spring water for premium market",
      category: 'beverage',
      revenue: "₦24M-₦120M ($57K-$285K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      id: 'fruit-concentrate',
      title: "Fruit Juice Concentrate Plant",
      description: "Processes local fruits into concentrates for juice companies",
      category: 'beverage',
      revenue: "₦18M-₦90M ($43K-$214K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      id: 'coconut-water',
      title: "Coconut Water Processing",
      description: "Packages fresh coconut water with extended shelf life",
      category: 'beverage',
      revenue: "₦7.5M-₦36M ($18K-$86K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },

    // AI
    {
      id: 'agric-ai',
      title: "Agricultural AI Solutions",
      description: "AI-powered tools for crop monitoring, yield prediction and farm management",
      category: 'ai',
      revenue: "₦12M-₦60M ($29K-$143K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
    },
    {
      id: 'voice-ai',
      title: "Voice AI for Local Languages",
      description: "Voice recognition and synthesis technology for African languages",
      category: 'ai',
      revenue: "₦18M-₦90M ($43K-$214K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
    },

    // Mobile
    {
      id: 'agrimarket',
      title: "AgriMarket Mobile App",
      description: "Connects farmers directly with buyers via mobile platform",
      category: 'mobile',
      revenue: "₦9M-₦45M ($21K-$107K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'language-app',
      title: "Local Language Learning App",
      description: "Interactive platform for learning African languages",
      category: 'mobile',
      revenue: "₦6M-₦30M ($14K-$71K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'transport-nav',
      title: "Transport Navigation App",
      description: "Route planning for public transport in African cities",
      category: 'mobile',
      revenue: "₦7.5M-₦36M ($18K-$86K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },

    // Restaurant
    {
      id: 'amala-joint',
      title: "Amala Joint Franchise",
      description: "Specialty restaurant serving authentic Yoruba cuisine",
      category: 'restaurant',
      revenue: "₦3M-₦15M ($7K-$36K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'bukka-franchise',
      title: "Bukka Franchise",
      description: "Affordable local food restaurant chain",
      category: 'restaurant',
      revenue: "₦4.5M-₦21M ($11K-$50K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'jollof-express',
      title: "Jollof Express",
      description: "Quick-service restaurant specializing in jollof rice variants",
      category: 'restaurant',
      revenue: "₦3.6M-₦18M ($8.6K-$43K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'small-chops',
      title: "Small Chops Business",
      description: "Specialty in Nigerian finger foods and appetizers",
      category: 'restaurant',
      revenue: "₦2.4M-₦12M ($5.7K-$29K)/month",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'soup-kitchen',
      title: "Soup Kitchen",
      description: "Specialty restaurant serving variety of Nigerian soups",
      category: 'restaurant',
      revenue: "₦3M-₦15M ($7K-$36K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'suya-spot',
      title: "Suya Spot Franchise",
      description: "Specialty grilled meat restaurant with standardized operations",
      category: 'restaurant',
      revenue: "₦4.5M-₦21M ($11K-$50K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },

    // SaaS
    {
      id: 'school-management',
      title: "School Management SaaS",
      description: "Cloud-based school administration software for African schools",
      category: 'saas',
      revenue: "₦15M-₦75M ($36K-$178K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'inventory-saas',
      title: "Inventory Management SaaS",
      description: "Cloud inventory solutions for small African businesses",
      category: 'saas',
      revenue: "₦12M-₦60M ($29K-$143K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },

    // Food Processing
    {
      id: 'curry-powder',
      title: "Curry Powder Production",
      description: "Processes and packages high-quality curry powder blends",
      category: 'foodprocessing',
      revenue: "₦4.5M-₦18M ($11K-$43K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'dried-fish',
      title: "Dried Fish Processing",
      description: "Preserves and packages dried fish for local and export markets",
      category: 'foodprocessing',
      revenue: "₦3M-₦15M ($7K-$36K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'fruit-drying',
      title: "Fruit Drying Business",
      description: "Processes fresh fruits into dried snacks with extended shelf life",
      category: 'foodprocessing',
      revenue: "₦2.4M-₦12M ($5.7K-$29K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'garri-plant',
      title: "Garri Processing Plant",
      description: "Industrial-scale production of premium garri from cassava",
      category: 'foodprocessing',
      revenue: "₦7.5M-₦36M ($18K-$86K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'onion-powder',
      title: "Onion Powder Production",
      description: "Processes fresh onions into powder for extended shelf life",
      category: 'foodprocessing',
      revenue: "₦3.6M-₦18M ($8.6K-$43K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'peanut-butter',
      title: "Peanut Butter Production",
      description: "Processes groundnuts into various peanut butter products",
      category: 'foodprocessing',
      revenue: "₦4.5M-₦21M ($11K-$50K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'pepper-grinding',
      title: "Pepper Grinding Business",
      description: "Processes fresh peppers into packaged ground pepper",
      category: 'foodprocessing',
      revenue: "₦2.1M-₦10.5M ($5K-$25K)/month",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'plantain-chips',
      title: "Plantain Chips Production",
      description: "Processes plantains into crispy packaged snacks",
      category: 'foodprocessing',
      revenue: "₦3M-₦15M ($7K-$36K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'seasoning-cubes',
      title: "Seasoning Cubes Production",
      description: "Manufactures affordable seasoning cubes for local markets",
      category: 'foodprocessing',
      revenue: "₦6M-₦30M ($14K-$71K)/month",
      difficulty: "Advanced",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'soup-mix',
      title: "Soup Mix Production",
      description: "Packages pre-mixed dry ingredients for popular local soups",
      category: 'foodprocessing',
      revenue: "₦3.6M-₦18M ($8.6K-$43K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'soy-milk',
      title: "Soy Milk Production",
      description: "Processes soybeans into nutritious milk alternative",
      category: 'foodprocessing',
      revenue: "₦4.5M-₦21M ($11K-$50K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'spice-blends',
      title: "Spice Blends Production",
      description: "Creates and packages authentic African spice blends",
      category: 'foodprocessing',
      revenue: "₦3M-₦15M ($7K-$36K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    },
    {
      id: 'yam-flour',
      title: "Yam Flour Production",
      description: "Processes yam into flour for extended shelf life and export",
      category: 'foodprocessing',
      revenue: "₦6M-₦30M ($14K-$71K)/month",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
    }
  ], []);

  // Optimized filtering with memoization
  const filteredIdeas = useMemo(() => {
    return businessIdeas.filter(idea => {
      const matchesCategory = activeFilter === 'all' || idea.category === activeFilter;
      const matchesSearch = searchQuery === '' ||
        idea.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        idea.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery, businessIdeas]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-900 to-purple-800 py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Business Ideas Marketplace</h1>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Discover proven business models and ready-to-launch concepts curated for success
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ideas..."
                className="w-full md:w-64 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {ideaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  console.log('Setting filter to:', category.id); // Debug
                  setActiveFilter(category.id);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIdeas.map((idea) => (
            <div key={idea.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-xs font-semibold rounded-full">
                    {idea.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{idea.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    idea.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    idea.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {idea.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{idea.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-semibold">{idea.revenue}</span>
                  <Link
                    to={`/ideas/${idea.category}/${idea.id}`}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    View Details
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No ideas found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to launch your business?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get started with our proven templates and expert guidance to turn ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/consult"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Book a Consultation
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-50 border border-indigo-600 transition-colors font-medium"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeasPage;