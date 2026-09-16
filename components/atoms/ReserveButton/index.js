"use client";
import { useAddToBasket } from "@/service/mutations";
import Loader from "components/common/Loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function ReserveButton({ id }) {
  const { isPending, mutate } = useAddToBasket();
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: () => {
        router.push("/checkout");
      },

      onError: (error) => {
        if (error.message === "Access token required") {
          toast.error("ابتدا ثبت نام کنید .");
        } else {
          toast.error(error.message);
        }
      },
    });
  };

  return (
    <div>
      <button
        onClick={cartHandler}
        className="w-38.5 flex items-center p-2  justify-center  bg-[#28A745] text-white rounded-sm text-[15px] font-normal md:w-30  lg:w-40 cursor-pointer hover:bg-[#218838] "
      >
        {isPending ? (
          <Loader width={30} height={30} color="white" />
        ) : (
          "رزرو و خرید"
        )}
      </button>
    </div>
  );
}

export default ReserveButton;
