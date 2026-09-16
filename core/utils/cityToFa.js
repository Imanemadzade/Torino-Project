const cities = {
  tehran: "تهران",
  sanandaj: "سنندج",
  madrid: "مادرید",
  isfahan: "اصفهان",
  sulaymaniyah: "سلیمانیه",
  hewler: "هولر",
  mazandaran: "مازندران",
  gilan: "گیلان",
  italy: "ایتالیا",
  offroad: "تهران",
};

export const cityToFa = (city) => {
  if (city === null || city === undefined) return "";
  const lowerCaseCity = city.toLowerCase();
  if (!cities[lowerCaseCity]) return "_";
  return cities[lowerCaseCity];
};
