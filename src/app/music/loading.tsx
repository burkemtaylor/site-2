import Skeleton from "~/_components/_primitives/skeleton";

function SkeletonAlbum() {
  return (
    <div className="skeleton" style={{ width: "300px", height: "300px" }}></div>
  );
}

export default function Loading() {
  return (
    <main className="flex flex-1 flex-col mobile:overflow-y-scroll mobile:px-8 mobile:pb-40 mobile:pt-24 desktop:p-8">
      <h1 className="text-2xl font-bold" style={{ paddingBottom: "1rem" }}>
        my band, luminism
      </h1>
      <div className="flex justify-center py-4 mobile:px-2 desktop:px-8">
        <div
          className="skeleton"
          style={{ height: "352px", borderRadius: "12px", width: "100%" }}
        ></div>
      </div>
      <div className="flex flex-1 flex-wrap justify-center gap-4">
        <SkeletonAlbum />
        <SkeletonAlbum />
        <SkeletonAlbum />
        <SkeletonAlbum />
        <SkeletonAlbum />
        <SkeletonAlbum />
        <SkeletonAlbum />
        <SkeletonAlbum />
      </div>
    </main>
  );
}
