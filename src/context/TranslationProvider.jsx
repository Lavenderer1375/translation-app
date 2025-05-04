import { useState, useEffect } from "react";
import { TranslationContext } from "./TranslationContext";

const defaultData = {
  languages: ["en", "fa", "de"],
  selectedLanguage: "fa",
  keywords: [
    { key: "hello", translation: { fa: "سلام", de: "Hallo" } },
    { key: "world", translation: { fa: "جهان", de: "Welt" } },
    { key: "apple", translation: { de: "Apfel" } },
    { key: "book", translation: {} },
  ],
};

export const TranslationProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const local = localStorage.getItem("translation-Data");
    const parsed = local ? JSON.parse(local) : defaultData;

    const normalizedKeywords = parsed.keywords.map((k) => ({
      ...k,
      translations: k.translations || {},
    }));

    return { ...parsed, keywords: normalizedKeywords };
  });

  useEffect(() => {
    localStorage.setItem("translation-Data", JSON.stringify(data));
  }, [data]);

  return (
    <TranslationContext.Provider value={{ data, setData }}>
      {children}
    </TranslationContext.Provider>
  );
};
