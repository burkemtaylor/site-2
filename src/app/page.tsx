export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-white">
      <div
        className="hero flex-1"
        style={{
          backgroundImage:
            "url(https://utfs.io/f/cd44ea80-8375-4a67-a9cc-549eaf23e16d-1xdpe9.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hi, I'm Burke</h1>
            <p className="mb-5">
              I've been building & maintaining web apps for 5 years.
            </p>
            <button className="btn btn-primary">Get to know me</button>
          </div>
        </div>
      </div>
    </main>
  );
}
