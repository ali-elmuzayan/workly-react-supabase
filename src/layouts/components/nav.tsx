import { NavLink } from "react-router";
const navLinks = [
  { to: "/dashboard", label: "Dashboard", end: true },
  { to: "/dashboard/notes", label: "Notes" },
  { to: "/dashboard/tasks", label: "Tasks" },
  { to: "/dashboard/projects", label: "Projects" },
  { to: "/dashboard/pomodoro", label: "Pomodoro" },
];

const Nav = () => {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-lg text-sm font-medium no-underline transition-colors ${
              isActive
                ? "bg-secondary text-secondary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
