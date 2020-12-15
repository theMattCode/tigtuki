import React from "react";
import "./App.scss";
import { Button, Intent } from "@blueprintjs/core";
import { FormattedMessage, IntlProvider } from "react-intl";
import { DEFAULT_LOCALE, selectMessages } from "./i18n/i18n";

function App() {
  return (
    <IntlProvider
      locale={DEFAULT_LOCALE}
      messages={selectMessages(DEFAULT_LOCALE)}
    >
      <div className="bp3-dark">
        <Button
          intent={Intent.PRIMARY}
          text={<FormattedMessage id="example.button" />}
          data-testid="example-button"
        />
      </div>
    </IntlProvider>
  );
}

export default App;
