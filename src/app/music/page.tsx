import prisma from "../lib/prisma";
import { Album } from "~/interfaces/album";
import AlbumCard from "~/_components/AlbumCard";

async function getLuminismReleases(): Promise<Album[]> {
  return await prisma.album.findMany({
    where: { artist: "luminism" },
    orderBy: { releaseDate: "desc" },
  });
}

export default async function MusicPage() {
  const luminismReleases = await getLuminismReleases();

  return (
    <main className="flex flex-1 flex-col p-8">
      <h1 className="text-2xl font-bold" style={{ paddingBottom: "1rem" }}>
        my band, luminism
      </h1>
      <div className="flex flex-1 flex-wrap justify-center gap-4">
        {luminismReleases.map((release) => {
          return (
            <div key={release.id} className="flex flex-col">
              <AlbumCard album={release} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
