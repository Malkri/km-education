import { Placeholder } from "./Placeholder";

export function Gallery() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-2xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
            Learning Experience
          </span>
          <h2 className="text-4xl lg:text-5xl font-extralight mt-4">
            A glimpse inside our classes.
          </h2>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="col-span-2 row-span-2">
            <Placeholder label="Online class screenshot" />
          </div>
          <div className="col-span-2 row-span-1">
            <Placeholder label="Teacher explaining concept" />
          </div>
          <div className="col-span-1 row-span-1">
            <Placeholder label="Student studying" />
          </div>
          <div className="col-span-1 row-span-1">
            <Placeholder label="Class resources" />
          </div>
        </div>
      </div>
    </section>
  );
}
