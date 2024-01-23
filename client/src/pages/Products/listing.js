import React from "react";

import ProductCard from "./productCard";

const medicalEquipmentData = [
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$99.99",
    discount: "10%",
    finalPrice: "$89.99",
    stock: 25,
    originalURL: "https://example.com/medical-product-1",
    incart: false,
    title: "Digital Thermometer",
    desc: "Accurate and quick temperature measurement for home and clinical use.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$49.95",
    discount: "5%",
    finalPrice: "$47.45",
    stock: 50,
    originalURL: "https://example.com/medical-product-2",
    incart: false,
    title: "Disposable Face Masks (Pack of 50)",
    desc: "3-ply protection against dust, allergens, and airborne pollutants.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$199.99",
    discount: "15%",
    finalPrice: "$169.99",
    stock: 15,
    originalURL: "https://example.com/medical-product-3",
    incart: false,
    title: "Blood Pressure Monitor",
    desc: "Automatic blood pressure monitor with large display and memory function.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$29.99",
    discount: "8%",
    finalPrice: "$27.59",
    stock: 30,
    originalURL: "https://example.com/medical-product-4",
    incart: false,
    title: "Hand Sanitizer (500ml)",
    desc: "Kills 99.9% of germs and bacteria, suitable for frequent use.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$79.99",
    discount: "12%",
    finalPrice: "$70.39",
    stock: 20,
    originalURL: "https://example.com/medical-product-5",
    incart: false,
    title: "Pulse Oximeter",
    desc: "Measures oxygen saturation and pulse rate, ideal for home monitoring.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$39.95",
    discount: "7%",
    finalPrice: "$37.15",
    stock: 40,
    originalURL: "https://example.com/medical-product-6",
    incart: false,
    title: "Disposable Gloves (Pack of 100)",
    desc: "Latex-free, powder-free gloves for protection against contaminants.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$149.99",
    discount: "20%",
    finalPrice: "$119.99",
    stock: 10,
    originalURL: "https://example.com/medical-product-7",
    incart: false,
    title: "Electric Heating Pad",
    desc: "Relieves muscle pain and discomfort with adjustable heat settings.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$59.99",
    discount: "9%",
    finalPrice: "$54.59",
    stock: 35,
    originalURL: "https://example.com/medical-product-8",
    incart: false,
    title: "Nebulizer Machine",
    desc: "Compact and portable nebulizer for respiratory therapy at home.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$129.95",
    discount: "18%",
    finalPrice: "$106.36",
    stock: 12,
    originalURL: "https://example.com/medical-product-9",
    incart: false,
    title: "Orthopedic Knee Brace",
    desc: "Provides support and stability for injured or weak knees.",
  },
  {
    coverImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$19.99",
    discount: "6%",
    finalPrice: "$18.79",
    stock: 60,
    originalURL: "https://example.com/medical-product-10",
    incart: false,
    title: "Medical Face Shield (Pack of 5)",
    desc: "Clear face shield for eye and face protection against splashes.",
  },
];

export default function Listing() {
  return (
    <div className="blade-top-padding-sm blade-bottom-padding-lg w-container ">
      <h5 className="text-2xl font-semibold text-center blade-bottom-padding-sm">
        Select from our collection of products
      </h5>
      <div className="grid grid-cols-2 gap-8  px-1 lg:mx-2">
        {medicalEquipmentData.map((elem, index) => {
          return <ProductCard data={elem} key={index} />;
        })}
      </div>
    </div>
  );
}
