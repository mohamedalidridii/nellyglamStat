import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="">
            <nav className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-opacity-90 sticky top-3 lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
                <div className="container flex flex-wrap items-center justify-between mx-auto blur-none">
                    <Link href="/clinique"
                        className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
                        <img src="/mini.png" alt="" className='w-20'/>
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/clinique" className="flex items-center">Acceuil</a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/clinique" className="flex items-center">clinique</a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/cosmetique" className="flex items-center">cosmetiques</a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                <a href="/rendezVous" className="flex items-center">rendez-vous</a>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                        type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </nav>
            <section className="relative min-h-screen bg-black flex flex-col justify-center items-center text-center p-12">

                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-20">
                    <div className="w-[500px] h-[500px] bg-black-800 rounded-full"></div>
                </div>

                <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 relative z-50">
                    Aimez Chaque Partie de Vous
                </h2>
                <p className="text-lg text-white mt-4 relative max-w-2xl z-50">
                    Chez NellyGlam, nous célébrons la beauté unique de chaque individu. Découvrez nos soins
                    conçus pour vous faire rayonner et vous sentir bien dans votre peau.
                </p>

                <Link href="/nosServices" className="border border-[#ffff] text-white z-50 py-3 px-8 rounded-lg mt-8 hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 hover:border-[#FFD700] relative ">
                    Découvrez nos soins
                </Link>

                <div className="grid grid-cols-5 gap-1 mt-16 relative z-10">
                    <img src="https://images.unsplash.com/photo-1598300188904-6287d52746ad?q=80&w=400" alt="Soin 1" className="w-60 h-32 object-cover rounded-lg shadow-lg -translate-y-28" />
                    <img src="https://plus.unsplash.com/premium_photo-1661769358914-1d33c22bd7ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Soin 2" className="w-32 h-full object-cover rounded-lg shadow-lg translate-y-5" />
                    <img src="https://images.unsplash.com/photo-1541715301255-12a4839b424a?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Soin 3" className="h-[350px] w-full object-cover rounded-lg shadow-lg -translate-y-60 scale-125 blur-sm hover:blur-0 duration-500 hover:scale-150" />
                    <img src="https://images.unsplash.com/photo-1731355771317-b2ab72c79124?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-80 object-cover transition duration-300 ease-in-out rounded-lg group-hover:scale-110" alt="Soin 4" />
                    <img src="https://images.unsplash.com/photo-1598300188904-6287d52746ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Soin 5" className="w-full h-32 object-cover rounded-lg shadow-lg -translate-y-28" />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 border border-yellow-200 rounded-lg mt-36">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <p className="text-sm uppercase tracking-widest text-gray-50">Clinique NellyGlam</p>
                    <h1 className="text-xl lg:text-5xl leading-snug mt-4 items-start text-white">
                        Entrez dans un monde  <em className="italic">où chaque détail de votre beauté</em>,
                        est minutieusement étudié, où chaque soin est une œuvre d’art conçue pour révéler l’éclat qui vous appartient.
                    </h1>
                    <div className="mt-8 flex justify-center lg:justify-start gap-4">
                        <Link href="/sign-in" className="border border-[#ffff] text-white z-50 py-3 px-8 rounded-lg mt-8 hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 hover:border-[#FFD700] relative z-10">Se connecter</Link>

                    </div>
                </div>
                <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                    <img src="https://images.unsplash.com/photo-1541715301255-12a4839b424a?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Stylist working on a model" className="w-full rounded-lg shadow-lg" />
                    <div className="blur-sm hover:blur-none duration-500 absolute top-24 -left-6 text-[10rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                        <span className="block">Neila</span>
                        <span className="block">Ba</span>
                        <span className="block text-white">lti</span>
                    </div>
                </div>
            </section>
            <section className="p-8 lg:p-16 bg-black text-center mt-36">
                <h2 className="text-sm uppercase tracking-widest text-white mb-12">Nos Soins Signatures</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b pb-8">
                    <div>
                        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 relative mb-2">01</p>
                        <h3 className="text-2xl font-bold text-white">Éclat Immortel</h3>
                    </div>
                    <div>
                        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 relative mb-2">02</p>
                        <h3 className="text-2xl font-bold text-white">Injections Sublimatrices</h3>
                    </div>
                    <div>
                        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 relative mb-2">03</p>
                        <h3 className="text-2xl font-bold text-white">Épilation Laser</h3>
                    </div>
                    <div>
                        <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 relative mb-2">04</p>
                        <h3 className="text-2xl font-bold text-white">Sculpture Corporelle</h3>
                    </div>
                </div>

                <div className="mt-8">
                    <Link href="/nosServices" className="border border-[#ffff] text-white z-50 py-3 px-8 rounded-lg mt-8 hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 hover:border-[#FFD700] relative z-10">
                        Nos Services
                    </Link>
                </div>
            </section>
            <section className=" text-center section mt-36 flex flex-col justify-center items-center">
                <div className="w-80 border border-yellow-200 rounded-lg">
                    <img src="/nelly.jpg" alt="" className="w-100 h-80  rounded-lg shadow-lg " />
                </div>
                <h1 className="text-6xl font-extrabold text-white">Là où l&apos;Art de la Beauté Rencontre l&apos;Excellence</h1>

            </section>



            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-12">
                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <img src="https://plus.unsplash.com/premium_photo-1661769358914-1d33c22bd7ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Soins du Visage" className="w-full h-80 object-cover transition duration-300 ease-in-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-4">
                        <h2 className="text-white text-2xl font-bold mb-2">Soins du Visage</h2>
                        <p className="text-white text-sm">
                            Offrez à votre peau le soin qu&apos;elle mérite avec nos traitements sur mesure,
                            utilisant des produits haut de gamme pour hydrater, purifier et revitaliser votre teint.
                        </p>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <img src="https://images.unsplash.com/photo-1731355771317-b2ab72c79124?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Massages et Relaxation" className="w-full h-80 object-cover transition duration-300 ease-in-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-4">
                        <h2 className="text-white text-2xl font-bold mb-2">Massages et Relaxation</h2>
                        <p className="text-white text-sm">
                            Plongez dans un univers de sérénité grâce à nos massages personnalisés,
                            conçus pour détendre le corps et l&apos;esprit et éliminer le stress du quotidien.
                        </p>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <img src="https://images.unsplash.com/photo-1737215398603-2ef701df8036?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Esthétique Avancée" className="w-full h-80 object-cover transition duration-300 ease-in-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-4">
                        <h2 className="text-white text-2xl font-bold mb-2">Esthétique Avancée</h2>
                        <p className="text-white text-sm">
                            Découvrez les dernières technologies en soins esthétiques,
                            incluant le rajeunissement de la peau, les traitements anti-âge et plus encore pour sublimer votre beauté.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page