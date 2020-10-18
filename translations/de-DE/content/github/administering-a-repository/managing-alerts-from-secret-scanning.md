---
title: Warnungen von „secret scanning" (Durchsuchen nach Geheimnissen) verwalten
intro: Du kannst Warnungen für Geheimnisse, welche in Deinem Repository geprüft wurden, anschauen und schließen.
versions:
  free-pro-team: '*'
---

{% data reusables.secret-scanning.beta %}

### Warnungen verwalten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. Klicke in der linken Seitenleiste auf **Detected secrets** (Erkannte Geheimnisse). ![Schaltfläche "Detected secrets" (Erkannte Geheimnisse)](/assets/images/help/repository/sidebar-secrets.png)
4. Klicke unter „Secret scanning" (nach Geheimnissen durchsuchen) auf die Warnung, die Du ansehen willst. ![Liste der Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-click-alert.png)
5. Benutze optional das Dropdownmenü „Resolve" (Auflösen) und klicke auf den Grund für die Auflösung der Warnung. ![Dropdownmenü für das Auflösen von Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-resolve-alert.png)

### Kompromittierte Geheimnisse sichern

Sobald ein Geheimnis an ein Repository übergeben wurde, solltest Du das Geheimnis als kompromittiert betrachten. {% data variables.product.prodname_dotcom %} empfiehlt die folgenden Aktionen für kompromittierte Geheimnisse:

- Bei einem kompromittierten, persönlichen {% data variables.product.prodname_dotcom %}-Zugriffstoken, lösche das kompromittierte Token, erstelle ein neues Token und aktualisiere alle Dienste, die das alte Token verwenden. Weitere Informationen findest Du unter „[Ein persönliches Zugriffstoken für die Befehlszeile erstellen](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).“
- Für alle anderen Geheimnisse überprüfe zuerst, dass das zu {% data variables.product.prodname_dotcom %} übergebene Geheimnis gültig ist. Falls ja, erstelle ein neues Geheimnis, aktualisiere alle Dienste, die das alte Geheimnis nutzen und lösche dann das alte Geheimnis.
