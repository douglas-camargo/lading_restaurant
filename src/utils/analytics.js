// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Reemplazar con tu ID real

// Inicializar Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track menu interactions
export const trackMenuInteraction = (action, itemName) => {
  trackEvent(action, 'menu', itemName);
};

// Track reservation attempts
export const trackReservation = (method) => {
  trackEvent('reservation_attempt', 'conversion', method);
};

// Track contact form submissions
export const trackContactForm = (formType) => {
  trackEvent('form_submit', 'contact', formType);
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll_depth', 'engagement', depth);
};

// Track time on page
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', 'engagement', seconds);
};
