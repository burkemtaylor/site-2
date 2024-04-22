import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside>
        <img
          src="https://utfs.io/f/c263448d-067a-4604-998d-162cf09c57f3-q13inh.jpg"
          height="50"
          width="50"
          alt="Image of a character from Katsuhiro Otomo's Akira manga series gripping his head in agony."
        />
        <p>
          Burke Taylor
          <br />
          Bumbling around since 1998
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link
            aria-label="Twitter"
            href="https://twitter.com/vejadeja"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-current"
              height="24"
              width="24"
              role="img"
              viewBox="0 0 1200 1227"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
            </svg>
          </Link>
          <Link
            aria-label="GitHub"
            href="https://github.com/burkemtaylor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-current"
              height="24"
              width="24"
              role="img"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/burke-taylor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-current"
              height="24"
              width="24"
              role="img"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Link>
        </div>
      </nav>
    </footer>
  );
}
