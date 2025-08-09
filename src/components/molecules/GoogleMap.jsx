import { contactInfo } from '../../data/contactData';

const GoogleMap = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={contactInfo.map.url}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={contactInfo.map.title}
      ></iframe>
    </div>
  );
};

export default GoogleMap;

