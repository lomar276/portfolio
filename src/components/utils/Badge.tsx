export default function Badge({ title }: { title: string }) {
  return (
    <span className="bg-secondary-hover-500 text-white text-xs font-medium shadow-sm me-2 px-2.5 py-0.5 rounded-full">
      {title}
    </span>
  );
}
