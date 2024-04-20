export default function Tracker({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 pt-2 max-w-fit">
      <span className="font-base text-neutral-600 font-semibold">{title}</span>

      <div className="grid grid-rows-7 grid-flow-col gap-0.5 auto-cols-min mt-1">
        {Array.from({ length: 7 * 52 }).map((_, i) => (
          <div key={i} className="bg-gray-200 w-2.5 aspect-square rounded" />
        ))}
      </div>
    </div>
  );
}
