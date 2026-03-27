# Smart Irrigation App - Lithium Technology Enterprise

A modern React-based web application showcasing innovative agricultural and technological solutions designed specifically for African communities. This project presents Lithium Technology Enterprise's smart irrigation systems and other cutting-edge products aimed at promoting technological self-reliance and sustainable development.

##  Project Overview

The Smart Irrigation App is a comprehensive web platform developed by Lithium Technology Enterprise to demonstrate and provide access to innovative agricultural technology solutions for African communities. The application serves as both a showcase of our products and a functional tool for farmers to monitor and manage their irrigation systems.

### What the Site Does

The Smart Irrigation App provides:

- **Smart Irrigation Monitoring**: Real-time soil moisture tracking and automated watering systems
- **Product Showcase**: Detailed information about our range of technology solutions including home automation, GPS tracking, and electric vehicles
- **Educational Resources**: Training materials and capacity building programs for emerging technology skills
- **Farmer Testimonials**: Real success stories from farmers who have benefited from our solutions
- **Contact & Support**: Easy access to our team for inquiries and partnerships

### Main Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Modern, intuitive interface with smooth animations
- **Real-Time Metrics**: Live display of soil moisture, temperature, and environmental data
- **User Authentication**: Login and signup functionality with Google integration
- **Multi-Page Navigation**: Seamless routing between Home, Features, About, Pricing, and Contact pages
- **Accessibility**: Fully accessible to all users through the Boafo accessibility widget

### Technologies Used

- **React 18.3.1**: Modern React with hooks and functional components
- **React Router DOM 7.0.1**: Client-side routing and navigation
- **Tailwind CSS 3.4.15**: Utility-first CSS framework for rapid styling
- **Vite 6.0.0**: Fast build tool and development server
- **Boafo Accessibility Widget**: Ensures the site is accessible to all users, including those with disabilities

### Boafo Accessibility Widget

This project integrates the [Boafo Accessibility Widget](https://boafo.co) to make the website accessible to all users, including those with visual, motor, cognitive, and other disabilities. The widget provides features such as:

- Screen reader compatibility
- Keyboard navigation support
- High contrast modes
- Font size adjustments
- Focus indicators
- And much more

This ensures that our technology solutions are truly accessible to everyone in the community.

---

##  How to Get Your Boafo API Key

To use the Boafo Accessibility Widget in your project, you need to obtain an API key:

1. **Visit [boafo.co](https://boafo.co)**
2. **Register for an account** or log in if you already have one
3. **Navigate to your Dashboard**
4. **Generate a new API key** for your project
5. **Copy the API key** - it will look something like `boafo_xxxx`

Keep this API key secure and never commit it directly to version control.

---

##  How to Integrate the Boafo Widget

For detailed integration instructions, please refer to the official Boafo integration guide:

**[Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)**

This comprehensive guide covers:
- Installation methods
- Configuration options
- Customization settings
- Troubleshooting common issues

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/GROW-YAI/smartirrigation.git
   cd smartirrigation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Open the `.env` file and add your Boafo API key:
   ```
   BOAFO_API_KEY=your_actual_api_key_here
   ```
   
   Replace `your_actual_api_key_here` with the API key you obtained from [boafo.co](https://boafo.co).

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- **Development**: `npm run dev` - Starts the development server with hot reload
- **Build**: `npm run build` - Creates optimized production build
- **Preview**: `npm run preview` - Preview the production build locally
- **Lint**: `npm run lint` - Run ESLint to check code quality

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BOAFO_API_KEY` | Your Boafo Accessibility Widget API key | Yes |

**Important**: Never commit your `.env` file to version control. It is already included in `.gitignore`.

---

## 📁 Project Structure

```
smartirrigation/
├── app/
│   ├── components/
│   │   └── BoafoWidgetInitializer.tsx
│   └── layout.tsx
├── public/
│   ├── vite.svg
│   └── _redirects
├── src/
│   ├── assets/
│   │   ├── farmer.jpg
│   │   ├── founder-img.png.webp
│   │   ├── hero-image.png
│   │   ├── logo.png
│   │   ├── si.png
│   │   └── user.png.webp
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── InformationPage.jsx
│   │   └── Navbar.jsx
│   ├── layouts/
│   │   └── RootLayout.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Features.jsx
│   │   ├── Home.jsx
│   │   └── Pricing.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── eslint.config.js
└── postcss.config.js
```

---

##  Mission & Impact

### Our Vision
To inspire and empower African youth to innovate, ensuring technology is accessible and fosters sustainable, community-driven solutions.

### Our Mission
To design, develop, and assemble innovative products that solve real-life challenges, improve the cost of living, and promote technological self-reliance in Africa.

### Impact Metrics
- **85%** Water Savings through smart irrigation
- **1200+** Farmers helped across Africa
- **50%** Higher crop yields achieved
- **100%** Customer satisfaction rate

---

##  Deployment

### Build for Production

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Test production build locally**
   ```bash
   npm run preview
   ```

### Deployment Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Zero-configuration deployment for React applications
- **GitHub Pages**: Free hosting for open-source projects
- **AWS S3**: Scalable cloud hosting solution

---

##  Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow the coding standards**
   ```bash
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

---

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

##  Contact & Support

### Lithium Technology Enterprise
- **Website**: [Coming Soon]
- **Email**: info@lithiumtech.africa
- **Location**: Ghana, West Africa

### Get Involved
- **Training Programs**: Join our capacity building initiatives
- **Partnership Opportunities**: Collaborate on innovative solutions
- **Community**: Connect with fellow innovators and farmers

---

##  Acknowledgments

- African farmers who inspire our innovation
- Youth entrepreneurs driving technological change
- Open-source community for excellent tools and libraries
- [Boafo](https://boafo.co) for providing accessibility solutions
- Everyone supporting sustainable development in Africa

---

**Built with ❤️ for Africa by Lithium Technology Enterprise**

*Empowering communities through accessible technology solutions*