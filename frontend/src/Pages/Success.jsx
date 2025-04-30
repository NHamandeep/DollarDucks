// import { CheckCircle } from "lucide-react";
// import { Link } from "react-router-dom";

// const Success = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
//       <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
//       <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
//       <p className="mt-2 text-gray-700">Thank you for choosing DollarDucks. We're excited to work with you!</p>
//       <Link to="/" className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900">
//         Go Back Home
//       </Link>
//     </div>
//   );
// };

// export default Success;

import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-green-700">Payment Successful!</h1>
      <p className="mt-2 text-gray-700">
        Thank you for choosing DollarDucks. We're excited to work with you!
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900"
      >
        Go Back Home
      </Link>

      <a
        href="https://web.whatsapp.com/send?phone=(+1) 818-657-8233&text=Hi%20DollarDucks%2C%20I%20just%20completed%20a%20payment%20and%20would%20like%20to%20discuss%20further."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-3 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
};

export default Success;
