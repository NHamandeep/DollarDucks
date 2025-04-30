// import React from "react";

// const products = [
//   {
//     id: 1,
//     name: "T-Shirt",
//     description: "High-quality cotton t-shirt with our logo",
//     price: "$799",
//     image:
//       "https://image.hm.com/assets/hm/79/cd/79cd6a5e2deaa4794f3f5dca287759db636d749c.jpg?imwidth=1536",
//   },
//   {
//     id: 2,
//     name: "Hoodie",
//     description: "Cozy hoodie to keep you warm and stylish",
//     price: "$1,499",
//     image:
//       "https://static.zara.net/assets/public/33be/8e5c/f1d54e40b133/5329e6b4f2c0/04393350251-e1/04393350251-e1.jpg?ts=1739197190724",
//   },
//   {
//     id: 3,
//     name: "Bag",
//     description: "Durable bag perfect for everyday use",
//     price: "$999",
//     image:
//       "https://static.zarahome.net/8/photos4/2024/V/4/1/p/7613/019/250/7613019250_1_1_3.jpg",
//   },
//   {
//     id: 4,
//     name: "Cap",
//     description: "Comfortable cotton cap with adjustable strap",
//     price: "$399",
//     image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzxdjm0_Ioh2qyJZTWPRL2TDEIs2KZMZGJ8vXd6dKnglkvmBc3ctLQ4BJLikxdMFw4GmgtnvUaX54Nv_bItfOIVRPCAg2V&usqp=CAY",
//   },
//   {
//     id: 5,
//     name: "Sweatshirt",
//     description: "Warm and stylish sweatshirt with bold branding",
//     price: "$1,299",
//     image:
//       "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh5cZ718ZdgjiT-arqGXj0uapsRYedw-2ddyTXyDQJVevlq2T1PAy0fa6OyQ5PIu8AKrroq-rd92fGjPEva0yMt-rlJchlNtpqhcCcusk5tOheJMo9uI8wQQg",
//   },
//   {
//     id: 6,
//     name: "Laptop Sleeve",
//     description: "Padded sleeve to keep your laptop safe and stylish",
//     price: "₹699",
//     image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3tvn3aRW-ElA-WUFQZ1cKLlDeJxSQeCjGb5mWQn3i-iGIjAw6fjw8c8smmjd1LADE-kOZH4mCngGWNoKsVYQxq473Fb0DtTSYRomM9I_V1WfrqNbs4Q58Zjo",
//   },
// ];

// const Merchandise = () => {
//   return (
//     <div className="container mx-auto px-6 py-12">
//       <h1 className="text-4xl font-bold text-center mb-10 mt-5">
//         Our Merchandise
//       </h1>
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="border rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-70 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
//             <p className="mb-2">{item.description}</p>
//             <p className="text-lg font-bold mb-4 flex items-center justify-center gap-x-4">
//               {item.price}
//               <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
//                 Buy Now
//               </button>
//             </p>
//             {/* <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
//               Buy Now
//             </button> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Merchandise;





import React from "react";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    description: "High-quality cotton t-shirt with our logo",
    price: "$799",
    image:
      "https://image.hm.com/assets/hm/79/cd/79cd6a5e2deaa4794f3f5dca287759db636d749c.jpg?imwidth=1536",
  },
  {
    id: 2,
    name: "Hoodie",
    description: "Cozy hoodie to keep you warm and stylish",
    price: "$1,499",
    image:
      "https://static.zara.net/assets/public/33be/8e5c/f1d54e40b133/5329e6b4f2c0/04393350251-e1/04393350251-e1.jpg?ts=1739197190724",
  },
  {
    id: 3,
    name: "Bag",
    description: "Durable bag perfect for everyday use",
    price: "$999",
    image:
      "https://static.zarahome.net/8/photos4/2024/V/4/1/p/7613/019/250/7613019250_1_1_3.jpg",
  },
  {
    id: 4,
    name: "Cap",
    description: "Comfortable cotton cap with adjustable strap",
    price: "$399",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzxdjm0_Ioh2qyJZTWPRL2TDEIs2KZMZGJ8vXd6dKnglkvmBc3ctLQ4BJLikxdMFw4GmgtnvUaX54Nv_bItfOIVRPCAg2V&usqp=CAY",
  },
  {
    id: 5,
    name: "Sweatshirt",
    description: "Warm and stylish sweatshirt with bold branding",
    price: "$1,299",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQh5cZ718ZdgjiT-arqGXj0uapsRYedw-2ddyTXyDQJVevlq2T1PAy0fa6OyQ5PIu8AKrroq-rd92fGjPEva0yMt-rlJchlNtpqhcCcusk5tOheJMo9uI8wQQg",
  },
  {
    id: 6,
    name: "Laptop Sleeve",
    description: "Padded sleeve to keep your laptop safe and stylish",
    price: "₹699",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR3tvn3aRW-ElA-WUFQZ1cKLlDeJxSQeCjGb5mWQn3i-iGIjAw6fjw8c8smmjd1LADE-kOZH4mCngGWNoKsVYQxq473Fb0DtTSYRomM9I_V1WfrqNbs4Q58Zjo",
  },
];

const Merchandise = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 mt-5">
        Our Merchandise
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-70 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="mb-4">{item.description}</p>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition text-sm font-medium">
              Buy Now for {item.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
