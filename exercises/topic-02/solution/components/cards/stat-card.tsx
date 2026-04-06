interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

const changeVariantStyles = {
  positive: "text-green-600",
  negative: "text-red-600",
};

function StatCard({ title, value, change }: Readonly<StatCardProps>) {
  const changeVariant = change.startsWith("+") ? "positive" : "negative";

  return (
    <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm w-64'>
      <p className='text-sm font-medium text-gray-500'>{title}</p>
      <p className='mt-2 text-3xl font-bold text-gray-900'>{value}</p>
      <p className={`mt-1 text-sm ${changeVariantStyles[changeVariant]}`}>
        {change}
      </p>
    </div>
  );
}

export default StatCard;
