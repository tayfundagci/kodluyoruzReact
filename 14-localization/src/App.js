import { Form } from "formik";

import { useEffect, useState } from "react";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./App.css";

const messages = {
  "tr-TR": {
    title: "merhaba dunya",
    description: "{count} yeni mesajınız var.",
  },
  "en-US": {
    title: "hello world",
    description: "you have {count} new messages.",
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  console.log(defaultLocale);
  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title"></FormattedMessage>
        <p>
          <FormattedMessage
            id="description"
            values={{ count: 5 }}
          ></FormattedMessage>
        </p>
        <br />
        <br />
        <button onClick={() => setLocale("tr-TR")}>TR</button>
        <button onClick={() => setLocale("en-US")}>EN</button>
      </IntlProvider>
    </div>
  );
}

export default App;
