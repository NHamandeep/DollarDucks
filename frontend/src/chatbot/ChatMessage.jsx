import { motion } from 'framer-motion';
import { useState } from 'react';

const ChatMessage = ({ message, onOptionSelect, onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <motion.div
      className={`my-2 ${message.type === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
      initial="hidden"
      animate="visible"
      variants={messageVariants}
    >
      <div 
        className={`max-w-[80%] rounded-lg p-3 ${
          message.type === 'user' 
            ? 'bg-yellow-400 text-black rounded-br-none' 
            : 'bg-white shadow border border-gray-200 rounded-bl-none'
        }`}
      >
        {/* Regular text message */}
        <p className="mb-1">{message.text}</p>
        
        {/* List items if present */}
        {message.list && (
          <ul className="list-disc pl-5 my-2">
            {message.list.map((item, index) => (
              <li key={index} className="my-1">{item}</li>
            ))}
          </ul>
        )}
        
        {/* Table if present */}
        {message.table && (
          <div className="overflow-x-auto my-2">
            <table className="min-w-full bg-white border border-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-1 px-2 border text-left">Service</th>
                  <th className="py-1 px-2 border text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {message.table.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="py-1 px-2 border">{row.service}</td>
                    <td className="py-1 px-2 border">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* File upload if present */}
        {message.upload && (
          <form onSubmit={handleFileSubmit} className="mt-2">
            <div className="flex flex-col">
              <input 
                type="file"
                onChange={handleFileChange}
                className="text-sm text-gray-700 mb-2"
              />
              {selectedFile && (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
                >
                  Upload
                </button>
              )}
            </div>
          </form>
        )}
        
        {/* Quick reply options */}
        {message.options && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onOptionSelect(option)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage; 