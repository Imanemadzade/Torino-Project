"use client";
import { useState, useCallback } from "react";
import AuthForm from "../AuthForm";
import { useGetUserData } from "@/service/queries";
import UserAccountMenu from "./HeaderLeftMenus/UserAccountMenu";
import Image from "next/image";

function HeaderLeftMenu() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data: user, isLoading } = useGetUserData();

  const openAuthModal = useCallback(() => setIsOpenModal(true), []);

  if (isLoading) return null; // or a skeleton
  if (user?.data) return <UserAccountMenu data={user} />;

  return (
    <div className="select-none">
      <button
        type="button"
        className="cursor-pointer md:hidden"
        onClick={openAuthModal}
        aria-label="Sign in"
      >
        <Image
          src="/svg/sign-in.svg"
          alt=""
          width={1000}
          height={1000}
          className="size-6"
        />
      </button>

      <div className="px-3.5 py-1 flex place-content-center gap-1.25 max-md:hidden text-brand-success border-3 rounded-md border-solid border-brand-success">
        <div className="flex flex-row-reverse">
          <button
            type="button"
            className="hover:text-green-400"
            onClick={openAuthModal}
          >
            {t("auth.signIn")}
          </button>
          <img src="/svg/profile-icon.svg" alt="" width={20} height={20} />
        </div>
        <div className="cursor-auto" aria-hidden="true">
          |
        </div>
        <button
          type="button"
          className="hover:text-green-400"
          onClick={openAuthModal}
        >
          {t("auth.register")}
        </button>
      </div>

      <AuthForm isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
}

export default HeaderLeftMenu;
