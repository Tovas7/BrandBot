### BrandBot

## AI-Powered Brand Name Generator with Domain Availability Checking

BrandBot is an intelligent brand name generator that helps entrepreneurs, marketers, and businesses discover unique, industry-specific brand names with available domains. Built with React and Next.js, this tool streamlines the often challenging process of finding the perfect brand name that resonates with your audience and has an available web domain.





## 🚀 Features

- **Industry-Specific Name Generation**: Generate brand names tailored to your specific industry using AI algorithms
- **Customizable Parameters**: Adjust tone (modern, playful, professional, luxurious, technical), name length, and quantity
- **Keyword Integration**: Incorporate your own keywords into generated brand names
- **Domain Availability Checking**: Instantly check domain availability across multiple extensions (.com, .io, .net, etc.)
- **Available Domain Filtering**: Option to show only brand names with available domains
- **Favorites Management**: Save and organize your favorite brand names for later reference
- **One-Click Domain Registration**: Direct links to register available domains
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices


## 💻 Technologies

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Routing**: Next.js App Router
- **Domain Checking**: WhoisXMLAPI integration (simulated in demo)


## 🛠️ Setup and Installation

1. Clone the repository

```plaintext
git clone https://github.com/Tovas7/BrandBot.git
```


2. Install dependencies

```plaintext
cd brandbot
npm install
```


3. Run the development server

```plaintext
npm run dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser


## 🔧 Configuration

In a production environment, you would need to:

1. Set up your own WhoisXMLAPI key for domain checking
2. Implement server-side processing for API calls
3. Configure environment variables for API keys


## 🔮 Future Enhancements

- Export functionality for brand names (CSV, PDF)
- Name scoring system based on memorability and uniqueness
- Social media handle availability checking
- AI-generated brand name meanings and associations
- Domain price estimation across different registrars


## 🤔 Motivation

Finding the perfect brand name with an available domain is one of the most challenging aspects of launching a new business or product. BrandBot was created to simplify this process by combining AI-powered name generation with instant domain availability checking, helping entrepreneurs and businesses quickly find viable brand name options.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Note: This project is a demonstration and uses simulated API responses for domain checking. In a production environment, you would need to implement actual API calls with proper authentication.*
