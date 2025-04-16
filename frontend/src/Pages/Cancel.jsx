import { XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <XCircle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-3xl font-bold text-red-700">Payment Cancelled</h1>
      <p className="mt-2 text-gray-700">No worries! You can try again anytime.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900">
        Go Back Home
      </Link>
    </div>
  );
};

export default Cancel;
