import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// Import components
import ChatMessage from './ChatMessage';
import LeadForm from './LeadForm';

const Chatbot = ({ isOpen, toggleChat }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('english'); // Default language
  const messagesEndRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 1,
          type: 'bot',
          text: 'Ready to make some noise online? How can we help?',
          options: [
            'Services offered',
            'Pricing details',
            'Book an appointment',
            'Contact support',
            'Upload a file'
          ]
        }
      ]);
    }
  }, [isOpen]);

  // Auto scroll to bottom of chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle option selection
  const handleOptionSelect = async (option) => {
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: option }]);
    setLoading(true);

    // Simulate API response timing
    setTimeout(() => {
      setLoading(false);
      
      switch (option.toLowerCase()) {
        case 'services offered':
          setMessages(prev => [
            ...prev, 
            { 
              id: Date.now(), 
              type: 'bot', 
              text: 'We offer the following services:',
              list: [
                'SEO',
                'Social Media Marketing',
                'Google Ads Management',
                'Website Development',
                'Content Marketing',
                'Shopify Design & Development'
              ],
              options: ['Pricing details', 'Book an appointment']
            }
          ]);
          break;
          
        // case 'pricing details':
        //   setMessages(prev => [
        //     ...prev, 
        //     { 
        //       id: Date.now(), 
        //       type: 'bot', 
        //       text: 'Here are our pricing plans:',
        //       table: [
        //         { service: 'SEO', price: 'Starting from $500/month' },
        //         { service: 'Social Media Marketing', price: 'Starting from $300/month' },
        //         { service: 'Google Ads', price: 'Starting from $250/month + ad spend' },
        //         { service: 'Website Development', price: 'Starting from $1000' },
        //         { service: 'Content Marketing', price: 'Starting from $400/month' },
        //         { service: 'Shopify Design', price: 'Starting from $800' }
        //       ],
        //       options: ['Book an appointment', 'Contact support']
        //     }
        //   ]);
        //   break;
          
        case 'book an appointment':
          setShowLeadForm(true);
          break;
          
        case 'contact support':
          setMessages(prev => [
            ...prev, 
            { 
              id: Date.now(), 
              type: 'bot', 
              text: 'Please fill in the form below to create a support ticket:',
              form: 'ticket'
            }
          ]);
          setShowLeadForm(true);
          break;
          
        case 'upload a file':
          setMessages(prev => [
            ...prev, 
            { 
              id: Date.now(), 
              type: 'bot', 
              text: 'Please upload your file below:',
              upload: true
            }
          ]);
          break;
          
        default:
          setMessages(prev => [
            ...prev, 
            { 
              id: Date.now(), 
              type: 'bot', 
              text: "I'm sorry, I didn't understand that. How else can I help you?",
              options: ['Services offered', 'Pricing details', 'Book an appointment']
            }
          ]);
      }
    }, 1000);
  };

  // Handle user input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text: input }]);
    setInput('');
    setLoading(true);
    
    // Simulated NLP response (placeholder)
    setTimeout(() => {
      setLoading(false);
      // Simple keyword detection for demo
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes('service') || lowerInput.includes('offer')) {
        handleOptionSelect('Services offered');
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
        handleOptionSelect('Pricing details');
      } else if (lowerInput.includes('appointment') || lowerInput.includes('book') || lowerInput.includes('schedule')) {
        handleOptionSelect('Book an appointment');
      } else if (lowerInput.includes('help') || lowerInput.includes('support') || lowerInput.includes('issue')) {
        handleOptionSelect('Contact support');
      } else if (lowerInput.includes('file') || lowerInput.includes('upload') || lowerInput.includes('document')) {
        handleOptionSelect('Upload a file');
      } else {
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            type: 'bot', 
            text: "I'm not sure I understand. Can you please select one of these options?",
            options: ['Services offered', 'Pricing details', 'Book an appointment', 'Contact support', 'Upload a file']
          }
        ]);
      }
    }, 1000);
  };

  // Handle lead form submission
  const handleLeadSubmit = async (formData) => {
    setLoading(true);
    try {
      // Placeholder API call (would connect to backend)
      // const response = await axios.post('http://localhost:5000/api/lead', formData);
      
      // For now, just simulate success
      setTimeout(() => {
        setLoading(false);
        setShowLeadForm(false);
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            type: 'bot', 
            text: "Thank you! Your information has been submitted. Our team will contact you shortly.",
            options: ['Services offered', 'Pricing details']
          }
        ]);
      }, 1500);
    } catch (error) {
      console.error('Error submitting lead:', error);
      setLoading(false);
      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now(), 
          type: 'bot', 
          text: "There was an error submitting your information. Please try again later.",
          options: ['Services offered', 'Pricing details']
        }
      ]);
    }
  };

  // Handle file upload
  const handleFileUpload = async (file) => {
    setLoading(true);
    try {
      // Placeholder for file upload API
      // const formData = new FormData();
      // formData.append('file', file);
      // const response = await axios.post('http://localhost:5000/api/upload', formData);
      
      // Simulate success
      setTimeout(() => {
        setLoading(false);
        setMessages(prev => [
          ...prev, 
          { 
            id: Date.now(), 
            type: 'bot', 
            text: `File "${file.name}" uploaded successfully! Our team will review it and get back to you.`,
            options: ['Book an appointment', 'Contact support']
          }
        ]);
      }, 1500);
    } catch (error) {
      console.error('Error uploading file:', error);
      setLoading(false);
      setMessages(prev => [
        ...prev, 
        { 
          id: Date.now(), 
          type: 'bot', 
          text: "There was an error uploading your file. Please try again later.",
          options: ['Services offered', 'Contact support']
        }
      ]);
    }
  };

  // Change language
  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'hindi' : 'english');
    // In a real implementation, this would trigger translation of all messages
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        type: 'bot',
        text: language === 'english' 
          ? "Idioma cambiado a inglés. (Language changed to spanish)" 
          : "Language changed to English.",
        options: ['Services offered', 'Pricing details']
      }
    ]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed bottom-24 right-8 w-80 md:w-96 bg-white  text-black rounded-lg shadow-xl z-40 overflow-hidden flex flex-col"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
          style={{ maxHeight: "70vh" }}
        >
          {/* Chat Header */}
          <div className="bg-yellow-400 text-white p-4 flex justify-between items-center">
            <h3 className=" text-black">Quack-quack! You’re at Dollar Ducks.</h3>
            <div className="flex gap-2">
              <button 
                onClick={toggleLanguage} 
                className="p-1 hover:bg-yellow-500 rounded"
                title={language === 'english' ? "Switch to spanish" : "Switch to English"}
              >
                {language === 'english' ? "🇪🇸" : "🇬🇧"}
              </button>
              <button 
                onClick={toggleChat}
                className="p-1 hover:bg-black-700 rounded"
              >
                ✕
              </button>
            </div>
          </div>
          
          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message} 
                onOptionSelect={handleOptionSelect}
                onFileUpload={handleFileUpload}
              />
            ))}
            
            {loading && (
              <div className="flex justify-center my-2">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            
            {/* Lead Form */}
            {showLeadForm && (
              <LeadForm onSubmit={handleLeadSubmit} />
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input Area */}
          {!showLeadForm && (
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 py-2 px-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  disabled={loading}
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-4 rounded-r-md hover:bg-yellow-700 transition-colors"
                  disabled={loading}
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Chatbot; 





