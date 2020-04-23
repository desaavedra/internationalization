import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import JobsList from "./components/jobsList";

console.log(navigator.language)
const locale = navigator.language;
var messages = localeEnMessages
if (locale === "es-ES") {
	messages = localeEsMessages
}
ReactDOM.render(
	<IntlProvider locale={locale} messages={messages}>
		<JobsList />
	</IntlProvider>, document.getElementById("root")
);