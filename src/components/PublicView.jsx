import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

const PublicView = () => {
  const { data, setData } = useContext(TranslationContext);

  const handleLanguageChange = (e) => {
    setData({ ...data, selectedLanguage: e.target.value });
  };

  return (
    <div className="bg-white shadow mx-auto p-4 rounded max-w-xl">
      <h1 className="mb-4 font-bold text-2xl text-center">Public View</h1>

      {/* Language Selector */}
      <div className="mb-4">
        <label className="block mb-1 font-medium text-sm">
          Select Language:
        </label>
        <select
          value={data.selectedLanguage}
          onChange={handleLanguageChange}
          className="p-2 border rounded w-full"
        >
          {data.languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Translations */}
      <div className="space-y-3">
        {data.keywords.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-50 p-3 border rounded"
          >
            <span className="font-medium">{item.key} =</span>
            <span className="text-gray-700">
              {item.translation?.[data.selectedLanguage] || (
                <span className="text-red-500 italic">No translation</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicView;
