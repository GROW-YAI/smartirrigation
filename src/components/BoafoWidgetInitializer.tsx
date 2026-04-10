import React, { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

const BoafoWidgetInitializer: React.FC = () => {
  useEffect(() => {
    const BOAFO_API_KEY = import.meta.env.VITE_BOAFO_API_KEY;
    if (!BOAFO_API_KEY) {
      console.warn('VITE_BOAFO_API_KEY not set in .env. Widget may not initialize.');
      return;
    }
    console.log('Initializing Boafo Widget with API key:', BOAFO_API_KEY ? 'set' : 'missing');
    initializeBoafoWidget(BOAFO_API_KEY);
  }, []);

  return null; // nothing to render
};

export default BoafoWidgetInitializer;
