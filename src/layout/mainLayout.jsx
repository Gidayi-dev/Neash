import Navbar from "../components/navbar"

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout