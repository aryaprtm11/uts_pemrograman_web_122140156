import { useState } from "react"
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"

const BurgerMenu = ({ toggleCart }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="md:hidden">
        <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-gray-700"
        >
            {open ? <FaTimes /> : <FaBars />}
        </button>

        {open && (
            <div className="mt-4">
            <ul className="flex flex-col gap-4 bg-white rounded-xl p-4 shadow-lg text-sm sm:text-base">
                <li>
                <a href="/" className="block hover:bg-[#99BC85] rounded-lg hover:text-white px-4 py-2">
                    Beranda
                </a>
                </li>
                <li>
                <a href="/order" className="block hover:bg-[#99BC85] rounded-lg hover:text-white px-4 py-2">
                    Menu
                </a>
                </li>
                <li>
                <button
                    onClick={() => {
                    toggleCart()
                    setOpen(false)
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                    <FaShoppingCart />
                    Cart
                </button>
                </li>
            </ul>
            </div>
        )}
        </div>
    )
}

export default BurgerMenu