interface CardProps {
  title: string;
  description?: string;
  logo?: React.JSX.Element;
}

export default function Card({ title, description, logo }: CardProps) {
  return (
    <div className="bg-gray-800/[.75] hover:bg-slate-700/[.75] shadow-sm hover:shadow-xl hover:cursor-pointer rounded-lg p-3 hover:scale-105 duration-500">
      <div className="justify-center items-center flex flex-col space-y-1">
        {logo}

        <div className="text-xl text-slate-50">{title}</div>
        {description && (
          <div className="text-md text-slate-200">{description}</div>
        )}
      </div>
    </div>
  );
}
