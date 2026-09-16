"use client";
import { DatePicker } from "zaman";
import { Controller, useForm } from "react-hook-form";

import { getUniqueByKey } from "core/utils/uniqueFuncions";
import { useEffect, useState } from "react";
import CityDropdown from "./CityDropdown";
import { cityToFa } from "core/utils/cityToFa";
import { useRouter } from "next/navigation";
import useQuery from "core/hooks/query";
import { flattenObject } from "core/utils/helper";
import QueryString from "qs";

function TourSearch({ className, toursData }) {
  const [query, setQuery] = useState();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  const { getQuery } = useQuery();

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({ originId, destinationId });
  }, []);

  const originCities = getUniqueByKey(
    toursData?.map((tour) => tour.origin),
    "id"
  );

  const destinationCities = getUniqueByKey(
    toursData?.map((tour) => tour.destination),
    "id"
  );

  const submitHandler = (data) => {
    const { originId, destinationId } = data;

    const query = QueryString.stringify(
      flattenObject({ originId, destinationId })
    );
    router.push(`/?${query}`);
  };

  return (
    <form
      className={`flex flex-col mb-3 ${className}`}
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="w-full flex gap-2">
        <div className="w-1/2 relative flex justify-center ">
          <input
            placeholder=" "
            {...register("originName")}
            className="w-full peer p-2 border text-[#282828] border-[#00000015] rounded-xl  focus:outline-none focus:border-[#28a746b9] focus:text-[#28a746b9] focus:cursor-[#28a746b9]"
            onClick={() => setIsDropdownOpen("origin")}
          />
          <label
            htmlFor="tourOrigin"
            className="absolute transition-all duration-300 text-[12px] top-0 right-4 -translate-y-1/2 px-1 bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[16px] peer-placeholder-shown:right-auto  peer-focus:top-0 peer-focus:right-4 peer-focus:text-[12px] peer-focus:text-[#28a746b9]"
          >
            مبدا
          </label>
          {isDropdownOpen === "origin" && (
            <CityDropdown
              cities={originCities}
              field="origin"
              setIsDropdownOpen={setIsDropdownOpen}
              setValue={setValue}
            />
          )}
        </div>
        <div className="w-1/2 relative flex justify-center ">
          <input
            id="tourDestination"
            placeholder=" "
            {...register("destinationName")}
            className="w-full peer p-2 border text-[#282828] border-[#00000015] rounded-xl  focus:outline-none focus:border-[#28a746b9] focus:text-[#28a746b9] focus:cursor-[#28a746b9]"
            onClick={() => setIsDropdownOpen("destination")}
          />
          <label
            htmlFor="tourDestination"
            className="absolute transition-all duration-300 text-[12px] top-0 right-4 -translate-y-1/2 px-1 bg-white peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-[16px] peer-placeholder-shown:right-auto  peer-focus:top-0 peer-focus:right-4 peer-focus:text-[12px] peer-focus:text-[#28a746b9]"
          >
            مقصد
          </label>
          {isDropdownOpen === "destination" && (
            <CityDropdown
              cities={destinationCities}
              field="destination"
              setIsDropdownOpen={setIsDropdownOpen}
              setValue={setValue}
            />
          )}
        </div>
      </div>

      <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <DatePicker
            accentColor="#28A745"
            range
            inputClass="w-full mt-3 mb-6 peer p-2 border text-[#282828] border-[#00000015] rounded-xl  focus:outline-none focus:border-[#28a746b9] focus:text-[#28a746b9] focus:cursor-[#28a746b9]"
            round="x2"
            onChange={(e) => onChange({ startDate: e.from, endDate: e.to })}
          />
        )}
      />

      <button
        type="submit"
        className="bg-[#28A745] text-white rounded-2xl p-2 hover:bg-[#218838]"
      >
        جستجو
      </button>
    </form>
  );
}

export default TourSearch;
