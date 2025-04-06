import { useState, useEffect } from "react"
import Card from "../component/card"
import { FaShoppingCart } from "react-icons/fa"
import { useCart } from "./cart"
import IteraLogo from "../assets/itera.png"
import BurgerMenu from "../component/BurgerMenu"
import SearchInput from "../component/SearchInput"
import CategoryFilter from "../component/CategoryFilter"

const OrderMenu = () => {
    const [menuItems, setMenuItems] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [categoryFilter, setCategoryFilter] = useState("Semua")
    const { toggleCart } = useCart()

    useEffect(() => {
        const fetchMenu = async () => {
        try {
            const response = await fetch("https://67f024472a80b06b88970dab.mockapi.io/Popular")
            const data = await response.json()
            setMenuItems(data)
        } catch (error) {
            console.error("Error fetching menu:", error)
        }
    }

    fetchMenu()
    }, [])

    const filteredItems = menuItems.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = categoryFilter === "Semua" || item.category === categoryFilter
        return matchesSearch && matchesCategory
    })

    const categories = ["Semua", ...new Set(menuItems.map((item) => item.category))]

    return (
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

            <section className="pt-[180px] px-4 py-8 sm:px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                    <button
                        onClick={toggleCart}
                        className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition w-max"
                    >
                        <FaShoppingCart />
                        Keranjang
                    </button>

                    <SearchInput value={searchTerm} onChange={setSearchTerm} />

                    <CategoryFilter
                        categories={categories}
                        selected={categoryFilter}
                        onSelect={setCategoryFilter}
                    />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
                    {filteredItems.length === 0 ? (
                        <p className="text-center text-gray-500 col-span-full">Menu tidak ditemukan.</p>
                    ) : (
                        filteredItems.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            desc={item.desc}
                            price={item.price}
                        />
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}

export default OrderMenu