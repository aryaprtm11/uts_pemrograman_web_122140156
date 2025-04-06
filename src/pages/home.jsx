const Home = () => {
    return (
        <>
            <div className="bg-[#FDFAF6] min-h-screen font-poppins">
                <nav className="fixed top-0 left-0 w-full z-50 bg-[#E4EFE7] p-4 py-6 shadow-lg rounded-b-xl">
                    <div className="flex justify-between items-center w-full px-6">
                        <div className="flex items-center gap-4">
                            <img src={IteraLogo} alt="Logo Itera" className="h-10 w-auto" />
                            <h1
                            className="navbar-title font-semibold text-xl sm:text-2xl md:text-3xl"
                            style={{ fontFamily: "Times New Roman, Times, serif" }}
                            >
                            Rumah Kayu ITERA
                            </h1>
                        </div>

                        <ul className="hidden md:flex items-center gap-6 text-sm sm:text-base md:text-lg">
                            <li>
                            <a
                                href="/"
                                className="font-medium hover:bg-[#99BC85] rounded-xl hover:text-white px-5 py-2"
                            >
                                Beranda
                            </a>
                            </li>
                            <li>
                            <a
                                href="/order"
                                className="font-medium hover:bg-[#99BC85] rounded-xl hover:text-white px-5 py-2"
                            >
                                Menu
                            </a>
                            </li>
                        </ul>
                        <BurgerMenu toggleCart={toggleCart} />
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Home