type AboutCardProps = {
  title: string;
  children: React.ReactNode;
};

export function AboutCard({ title, children }: AboutCardProps) {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-6 max-sm:px-[18px]">
      <div className="relative w-full rounded-lg  border-slate-200 py-10 px-6">
        <h2 className=" text-2xl font-bold rounded-2xl bg-[#2f4996] px-2 py-1 text-white w-fit">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
