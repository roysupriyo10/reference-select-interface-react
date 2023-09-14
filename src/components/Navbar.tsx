import { ApplicationState } from "@/@types"
import { NavLink } from "react-router-dom"
import { navLinks } from "@/constants"

interface NavbarProps {
  state: ApplicationState
}

const Navbar: React.FC<NavbarProps> = ({ state }) => {
  return (
    <nav className="flex justify-start items-center gap-4 bg-blue-100">
      {navLinks.map(link => (
        <NavLink
          key={link.name}
          className={({ isActive }) => {
            return `
              rounded-full
              py-2
              px-3
              ${isActive ? 'bg-zinc-400' : 'bg-rose-300'}
            `
          }}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
      <NavLink
        className={({ isActive }) => {
          return `
            rounded-full
            py-2
            px-3
            ${isActive ? 'bg-zinc-400' : 'bg-rose-300'}
          `
        }}
        to={"/" + state.selectedMonth}
      >
        {"placeholder"}
      </NavLink>
    </nav>
  )
}

export default Navbar
