function SkeletonBook() {
  return (
    <div className="skeleton" style={{ width: "100px", height: "154px" }}></div>
  );
}

export default function Loading() {
  const skeletonBooks = Array.from({ length: 10 }).map((_, i) => (
    <div className="flex flex-col" key={i}>
      <SkeletonBook />
    </div>
  ));

  return (
    <main className="flex flex-1 flex-col mobile:overflow-y-scroll mobile:px-8 mobile:pb-40 mobile:pt-24 desktop:p-8">
      <h1 className="text-2xl font-bold" style={{ paddingBottom: "1rem" }}>
        reading
      </h1>
      <div className="flex flex-1 flex-wrap items-start gap-4 mobile:justify-center desktop:justify-start">
        {skeletonBooks}
      </div>
      <h1 className="text-2xl font-bold" style={{ paddingBottom: "1rem" }}>
        read
      </h1>
      <div className="flex flex-1 flex-wrap items-start gap-4 mobile:justify-center desktop:justify-start">
        s{skeletonBooks}
        {skeletonBooks}
      </div>
    </main>
  );
}
