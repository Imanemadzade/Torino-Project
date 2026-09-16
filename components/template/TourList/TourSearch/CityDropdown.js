import LocationIcon from "@/icons/LocationIcon";
import { cityToFa } from "core/utils/cityToFa";


function CityDropdown({
  className,
  cities,
  setIsDropdownOpen,
  setValue,
  field,
}) {
  return (
    <div
      className={`z-10 bg-white border border-[#00000020] rounded-xl overflow-hidden w-full absolute top-full flex flex-col ${className}`}
    >
      <p className="bg-[#F8F8F8] py-2 pr-3 text-[#282828B2] text-[13px] font-light">
        پرتردد
      </p>
      {cities?.map((city) => (
        <div
          key={city.id}
          onClick={() => {
            
            setValue(`${field}Id`, city.id);
            setValue(`${field}Name`, cityToFa(city.name));
            setIsDropdownOpen(null);
          }}
          className="pr-2 py-3 text-[#282828] flex gap-2 items-center border-b border-b-[#0000001F] hover:text-white hover:bg-[#aaaaaa]"
        >
          <LocationIcon className="size-5" />
          <p>{cityToFa(city.name)}</p>
        </div>
      ))}
    </div>
  );
}

export default CityDropdown;
