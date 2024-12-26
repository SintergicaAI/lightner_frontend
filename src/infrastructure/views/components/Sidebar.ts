export function Sidebar(): HTMLElement {
    const sidebar = document.createElement("aside");
    sidebar.classList.add("sidebar");
    sidebar.innerHTML = `
        <nav class="sidebar__nav">
            <ul class="sidebar__menu">
                <li class="sidebar__item"><a class="sidebar__link" href="/register">Register</a></li>
                <li class="sidebar__item"><a class="sidebar__link" href="/packages">Packages</a></li>
                <li class="sidebar__item"><a class="sidebar__link" href="/">Home</a></li>
            </ul>
        </nav>
    `
    return sidebar;
}