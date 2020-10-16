---
title: Abgelaufenen GPG-Schlüssel aktualisieren
intro: 'Bei der Verifizierung einer Signatur überprüft {% data variables.product.product_name %}, ob der Schlüssel widerrufen wurde oder abgelaufen ist. Bei Widerruf oder Ablauf des Signaturschlüssels kann {% data variables.product.product_name %} Ihre Signaturen nicht verifizieren. Wenn Dein Schlüssel widerrufen wurde, verwende den primären Schlüssel oder einen anderen, nicht widerrufenen Schlüssel zum signieren Deiner Commits.'
redirect_from:
  - /articles/updating-an-expired-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bei Ablauf Deines Schlüssels musst Du die [Gültigkeit des Schlüssels verlängern](https://www.gnupg.org/gph/en/manual/c235.html#AEN328), den daraufhin generierten, neuen Schlüssel exportieren, den abgelaufenen Schlüssel in Deinem GitHub-Konto löschen und den [neuen Schlüssel auf GitHub hochladen](/articles/adding-a-new-gpg-key-to-your-github-account/). Deine bisherigen Commits und Tags werden als verifiziert angezeigt, sofern der Schlüssel alle anderen Verifizierungsanforderungen erfüllt.

Wenn Dein Schlüssel ungültig ist und Du keinen anderen gültigen Schlüssel Deines Schlüsselsatzes verwendest, sondern stattdessen einen neuen GPG-Schlüssel mit einem neuen Satz an Anmeldeinformationen generierst, werden Commits, die Du mit dem widerrufenen oder abgelaufenen Schlüssel durchgeführt hast, weiterhin als nicht verifiziert angezeigt. Auch kannst Du mit den neuen Anmeldeinformationen die alten Commits und Tags weder neu signieren noch verifizieren.

### Weiterführende Informationen

- „[Informationen zur Verifizierung einer Commit-Signatur](/articles/about-commit-signature-verification)“
