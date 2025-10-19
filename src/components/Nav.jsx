export default function Nav({ current, onNavigate, items }) {
return (
<nav className="nav">
{items.map((s) => (
<button
key={s}
className={`nav-link ${current === s ? "active" : ""}`}
onClick={() => onNavigate(s)}
aria-current={current === s ? "page" : undefined}
>
{s.toUpperCase()}
</button>
))}
</nav>
);
}