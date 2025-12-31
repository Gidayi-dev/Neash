function Navbar() {
  return (
    <nav className="w-full bg-babyPink">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-wide">
          Neash
        </h1>

        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:opacity-70">Home</li>
          <li className="cursor-pointer hover:opacity-70">Shop</li>
          <li className="cursor-pointer hover:opacity-70">Cart</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar