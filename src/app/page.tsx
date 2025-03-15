import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex flex-row w-full h-screen">
        {/* Left Image */}
        <div className="group relative w-1/2 h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1571256750339-12bbebc768f3?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Left Image"
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-2xl"
          />
          <Link href='/clinique' className="absolute inset-0 flex items-center justify-center text-white text-lg  bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-ou px-4 py-2 rounded-md">
            Clinique Esthétique Médicale
          </Link>
        </div>
        {/* Right Image */}
        <div className="group relative w-1/2 h-full overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1674739375749-7efe56fc8bbb?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Right Image"
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-2xl"
          />
          
          <Link href="/about"className="absolute inset-0 flex items-center justify-center text-white text-lg  bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-ou px-4 py-2 rounded-md">
            Cosmétiques
          </Link>
        </div>
      </section>
    </div>
  );
}
