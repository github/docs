---
title: Fehlerbehebung bei Verbindungsproblemen
intro: 'Wenn Du mit {% data variables.product.prodname_dotcom %} Verbindungsprobleme hast, solltest Du zunächst versuchen, das Problem zu beheben, indem Du den typischen Fehlerursachen auf den Grund gehst. Danach kannst Du das Problem mit dem {% data variables.product.prodname_debug %}-Tool diagnostizieren und dem Support einen Bericht senden.'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
versions:
  free-pro-team: '*'
---


Häufig treten Verbindungsprobleme auf, weil eine Firewall, ein Proxyserver, das Unternehmensnetzwerk oder ein anderes Netzwerk so konfiguriert ist, dass {% data variables.product.prodname_dotcom %} blockiert wird.

### Allowing {% data variables.product.prodname_dotcom %}'s IP addresses

Make sure your network is configured to allow {% data variables.product.prodname_dotcom %}'s IP addresses. Weitere Informationen findest Du unter „[Informationen zu den IP-Adressen von {% data variables.product.prodname_dotcom %}](/articles/about-github-s-ip-addresses).“

### Unternehmens- oder Organisationsnetzwerk benutzen

Wenn Du Verbindungsprobleme auf Deinem Unternehmens- oder Organisationsnetzwerk hast, frage Deinen Netzwerkadministrator, ob Netzwerkregeln bestimmten Datenverkehr blockieren. If there are rules in place, ask your network administrator to allow traffic to {% data variables.product.prodname_dotcom %}.

### Fehlerbehebung des Captcha

Wenn die Verifizierung mit dem Captcha Probleme bereitet:
- Stelle sicher, dass in Deinem Browser JavaScript aktiviert ist.
- Stelle sicher, dass Dein Browser unterstützt wird. Wenn Dein Browser nicht unterstützt wird, aktualisiere ihn oder installiere einen unterstützten Browser. Eine Liste der unterstützten Browser findest Du unter „[Unterstützte Browser](/articles/supported-browsers).“
- Stelle sicher, dass Deine Netzwerkkonfiguration weder „https://octocaptcha.com/“ noch „https://arkoselabs.com/“ blockiert. If you're behind a corporate firewall, contact your IT administrator to allow those domains. To verify access to these domains, visit https://octocaptcha.com/test and ensure the text "Connection successfully made!" is displayed, then visit https://client-demo.arkoselabs.com/github and ensure you are able to load the captcha.
- Stelle sicher, dass Dein Browser keine Plug-ins oder Erweiterungen verwendet, die mit GitHub in Konflikt stehen. Falls es solche Plug-ins oder Erweiterungen gibt, deaktiviere diese vorübergehend während der Captcha-Verifizierung.

### Klonmethode ändern

Eventuell lässt sich die Konnektivität durch einen Wechsel des Klonverfahrens von SSH zu HTTPS (oder umgekehrt) verbessern. Weitere Informationen findest Du unter „[Repository von {% data variables.product.prodname_dotcom %} klonen](/articles/cloning-a-repository-from-github).“

Bei Zeitüberschreitungen bei der Verwendung von SSH findest Du Details unter „[Error: „Bad file number“ ](/articles/error-bad-file-number)“ (Fehler: „Ungültige Dateinummer").

### Fehlerbehebung bei langsamen Downloads und gelegentlich langsamen Verbindungen

{% data variables.product.prodname_dotcom %} drosselt die Bandbreite nicht für einzelne Benutzer.

Wenn sich die Verbindung nur zu gewissen Tageszeiten verlangsamt, wird dies ziemlich sicher durch Netzwerk-Überlastung verursacht. Da {% data variables.product.prodname_dotcom %} Netzwerk-Überlastung nicht beheben kann, solltest Du dieses Problem bei Deinem Internet-Serviceprovider eskalieren.

### Fehlerbehebung mit {% data variables.product.prodname_debug %}

Wenn Du alle oben genannten Empfehlungen zur Fehlerbehebung befolgt hast, Dein Verbindungsproblem aber weiterhin besteht, folge den Anweisungen auf der {% data variables.product.prodname_debug %}-Website, um Tests durchzuführen und dem {% data variables.product.prodname_dotcom %}-Support einen Problembericht zu senden. Weitere Informationen findest Du unter „[{% data variables.product.prodname_debug %}](https://github-debug.com/)“.
