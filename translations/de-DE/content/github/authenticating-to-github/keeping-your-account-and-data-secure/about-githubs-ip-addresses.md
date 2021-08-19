---
title: Informationen zu den IP-Adressen von GitHub
intro: '{% data variables.product.product_name %} versorgt Anwendungen aus mehreren IP-Adressbereichen, die über die API verfügbar sind.'
redirect_from:
  - /articles/what-ip-addresses-does-github-use-that-i-should-whitelist/
  - /categories/73/articles/
  - /categories/administration/
  - /articles/github-s-ip-addresses/
  - /articles/about-github-s-ip-addresses
  - /articles/about-githubs-ip-addresses
  - /github/authenticating-to-github/about-githubs-ip-addresses
versions:
  free-pro-team: '*'
topics:
  - Identity
  - Access management
---

Sie können eine Liste der IP-Adressen von {% data variables.product.prodname_dotcom %} über den [meta](https://api.github.com/meta)-API-Endpunkt abrufen. For more information, see "[Meta](/rest/reference/meta)."

Diese Bereiche sind in [CIDR-Notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_notation). Mit einem Online-Konvertierungstool wie zum Beispiel [CIDR/VLSM Supernet Calculator](http://www.subnet-calculator.com/cidr.php) kannst Du eine Konvertierung von CIDR-Notation in IP-Adressbereiche durchführen.

Wir nehmen von Zeit zu Zeit Änderungen an unseren IP-Adressen vor und halten diese API auf dem neuesten Stand. We do not recommend allowing by IP address, however if you use these IP ranges we strongly encourage regular monitoring of our API.

Um die Funktionstüchtigkeit von Anwendungen zu gewährleisten, musst Du die TCP-Ports 22, 80, 443 und 9418 über unsere IP-Bereiche für `github.com` freigeben.

### Weiterführende Informationen

- „[Verbindungsprobleme beheben](/articles/troubleshooting-connectivity-problems)“
