
import { menus } from "core/utils/headerMenus";
import Link from "next/link";

function HeaderRightMenu() {
  return (
    <div>
      <div className="lg:hidden">
        <span className="w-7.5">
          <img src="/svg/hamburger-menu.svg" alt="hamburger picture" />
        </span>
      </div>
      <div className="flex items-center space-between gap-7.5 max-lg:hidden">
        <span>
          <img src="/images/torino-logo.webp" alt="torino logo" />
        </span>
        <ul className="flex space-between gap-5 font-medium  ">
          {menus.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.href}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderRightMenu;
