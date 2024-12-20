import { Album } from "~/interfaces/album";
import Card from "./_primitives/card";
import Link from "next/link";

export default function AlbumCard({ album }: { album: Album }) {
  return (
    <div>
      <Card>
        <Link
          className="tooltip tooltip-bottom tooltip-primary"
          data-tip={album.title}
          target="_blank"
          href={album.link}
        >
          <img
            src={album.cover}
            style={{ width: "300px", height: "300px" }}
          ></img>
        </Link>
      </Card>
    </div>
  );
}
