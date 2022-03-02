import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const APIKEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
  const [translationResult, setTranslationResult] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 800);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: APIKEY,
          },
        }
      );
      setTranslationResult(data.data.translations[0].translatedText);
    };
    doTranslateText();
  }, [language, debouncedText]);

  return (
    <div>
      <h5 className="ui header">Translation: {translationResult}</h5>
    </div>
  );
};
export default Convert;
