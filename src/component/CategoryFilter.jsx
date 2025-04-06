const CategoryFilter = ({ categories, selected, onSelect }) => (
    <div className="flex flex-wrap gap-2">
        {categories.map((cat, index) => (
            <button
            key={index}
            onClick={() => onSelect(cat)}
            className={`px-4 py-2 rounded-md border ${
                selected === cat ? 'bg-green-500 text-white' : 'bg-white text-gray-700'
            } hover:bg-green-100 transition`}
            >
            {cat}
            </button>
        ))}
    </div>
  )
  
export default CategoryFilter  