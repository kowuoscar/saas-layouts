import { JSX } from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  description: string;
  features: string[];
  type?: "standard" | "highlighted";
}

const variantStyles = {
  standard: "bg-white border border-gray-200 shadow-sm",
  highlighted: "bg-blue-600 border-2 border-blue-600 shadow-xl",
};

const textVariantStyles = {
  standard: {
    plan: "text-gray-500",
    price: "text-gray-900",
    description: "text-gray-400",
    feature: {
      text: "text-gray-700",
      checkMark: "text-blue-600",
    },
    unit: "text-gray-500",
  },
  highlighted: {
    plan: "text-blue-100",
    price: "text-white",
    description: "text-blue-100",
    feature: {
      text: "text-white",
      checkMark: "text-white",
    },
    unit: "text-blue-200",
  },
};

const buttonVariantStyles = {
  standard: "border border-gray-300 text-gray-900 hover:bg-gray-50",
  highlighted: "bg-white text-blue-600 hover:bg-blue-50",
};

function PricingCard({
  plan,
  price,
  description,
  features,
  type = "standard",
}: Readonly<PricingCardProps>): JSX.Element {
  return (
    <div
      className={`w-64 rounded-2xl p-8 flex flex-col ${variantStyles[type]}`}
    >
      <div className='flex flex-col items-center gap-2 text-center'>
        <p
          className={`uppercase tracking-widest text-sm font-bold ${textVariantStyles[type].plan}`}
        >
          {plan}
        </p>
        <div className='flex items-baseline gap-1'>
          <span
            className={`text-4xl font-bold tracking-tight ${textVariantStyles[type].price}`}
          >
            {`$${price}`}
          </span>
          <span className={`text-sm ${textVariantStyles[type].unit}`}>
            /month
          </span>
        </div>
        <p className={`text-lg ${textVariantStyles[type].description}`}>
          {description}
        </p>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <ul className='flex flex-col gap-3 mt-6'>
          {features.map((feature) => (
            <li key={feature} className='flex items-center gap-3'>
              <svg
                className={`h-4 w-4 shrink-0 ${textVariantStyles[type].feature.checkMark}`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
              <span
                className={`text-sm leading-relaxed ${textVariantStyles[type].feature.text}`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className={`w-full mt-8 rounded-lg px-4 py-3 text-sm font-semibold ${buttonVariantStyles[type]}`}
        >
          Get started
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
