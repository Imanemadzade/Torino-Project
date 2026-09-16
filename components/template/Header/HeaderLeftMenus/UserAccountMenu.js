// import { getCookie, setCookie } from "core/utils/cookie";
import Image from "next/image";
import { e2p } from "core/utils/replaceNumber";
import Link from "next/link";
import { useState } from "react";

function UserAccountMenu({
  data: {
    data: { mobile },
  },
}) {
  const [isOpenDash, setIsOpenDash] = useState(false);

  const exitHandler = () => {
    setIsOpenDash(false);
  };

  return (
    <>
      <div className="w-36.5 h-9.5 relative flex justify-center items-center place-items-center gap-1 p-2 text-[#28A745] text-sm font-medium select-none md:w-45 md:h-11  ">
        <Image
          width={300}
          height={300}
          src="/svg/profile-icon.svg"
          alt="Profile Icon"
          className="size-3.5"
        />
        <span> {e2p(mobile)}</span>
        <img
          src="/svg/arrow-down.svg"
          alt="arrow-down"
          className="w-4 h-4 hover:bg-green-200 hover:rounded-full cursor-pointer"
          onClick={() => setIsOpenDash(!isOpenDash)}
        />

        {isOpenDash && (
          <div className="z-10 absolute top-13 -left-[5.5px]  w-39.25 h-28.5 text-[12px] rounded-[11px] bg-[#ffffff] md:w-61.5 md:h-37.75 md:text-[14px] md:font-normal md:gap-2 md:-left-8.25 shadow-[0_1px_4px_#00000016]">
            <div className="bg-[#F4F4F4] text-[14px] rounded-t-[11px] h-11 flex justify-center  items-center gap-3 md:justify-start md:pr-4.5 md:text-[16px] md:font-semibold  ">
              <span className="w-7 h-7  bg-[#D9D9D9] rounded-full flex justify-center items-center ">
                <img
                  className="w-4 h-4"
                  src="/svg/profile-icon.svg"
                  alt="profile "
                />
              </span>
              <span className="text-[#10411B] font-[14px]">{e2p(mobile)}</span>
            </div>

            <div className="h-9.25 flex gap-2 justify-center items-center md:h-13.75 md:pr-5.5 md:justify-start text-[#282828] hover:text-[#28A745]">
              <img
                className="w-4 h-4 md:w-5 md:h-5"
                src="/svg/profile-hollow-icon.svg"
                alt="profile-hollow-icon"
              />
              <Link href="/profile" onClick={() => setIsOpenDash(false)}>
                اطلاعات حساب کاربری
              </Link>
            </div>

            <div className="h-9.25 gap-2 text-[#D40000] flex justify-center  items-center border-t border-[#0000001F] hover:text-red-400 md:pr-5.5 md:justify-start">
              <img
                className="w-4 h-4 md:w-5 md:h-5"
                src="/svg/logout.svg"
                alt="logout"
              />
              <Link href="/" onClick={exitHandler}>
                خروج از حساب کاربری
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserAccountMenu;
