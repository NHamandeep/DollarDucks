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

      {/* <a
        href="https://web.whatsapp.com/send?phone=(+1) 818-657-8233&text=Hi%20DollarDucks%2C%20I%20just%20completed%20a%20payment%20and%20would%20like%20to%20discuss%20further."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 px-3 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Chat on WhatsApp
      </a> */}

<a
  href="https://web.whatsapp.com/send?phone=18186578233&text=Hi%20DollarDucks%2C%20I%20tried%20to%20make%20a%20payment%20but%20it%20failed.%20Can%20you%20please%20assist%20me%20with%20this%20issue%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 px-3 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Chat on WhatsApp
</a>

    </div>
  );
};

export default Cancel;
