---
title: Warnungen von „secret scanning" (Durchsuchen nach Geheimnissen) verwalten
intro: Du kannst Warnungen für Geheimnisse, welche in Deinem Repository geprüft wurden, anschauen und schließen.
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}

### Warnungen verwalten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. Klicke in der linken Seitenleiste auf **Detected secrets** (Erkannte Geheimnisse). ![Schaltfläche "Detected secrets" (Erkannte Geheimnisse)](/assets/images/help/repository/sidebar-secrets.png)
4. Klicke unter „Secret scanning" (nach Geheimnissen durchsuchen) auf die Warnung, die Du ansehen willst.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Liste der Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Liste der Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
1. Optionally, use the "Mark as" drop-down menu and click a reason for resolving an alert.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Dropdownmenü für das Auflösen von Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Dropdownmenü für das Auflösen von Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

### Kompromittierte Geheimnisse sichern

Sobald ein Geheimnis an ein Repository übergeben wurde, solltest Du das Geheimnis als kompromittiert betrachten. {% data variables.product.prodname_dotcom %} empfiehlt die folgenden Aktionen für kompromittierte Geheimnisse:

- Bei einem kompromittierten, persönlichen {% data variables.product.prodname_dotcom %}-Zugriffstoken, lösche das kompromittierte Token, erstelle ein neues Token und aktualisiere alle Dienste, die das alte Token verwenden. Weitere Informationen findest Du unter „[Ein persönliches Zugriffstoken für die Befehlszeile erstellen](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).“
- Für alle anderen Geheimnisse überprüfe zuerst, dass das zu {% data variables.product.product_name %} übergebene Geheimnis gültig ist. Falls ja, erstelle ein neues Geheimnis, aktualisiere alle Dienste, die das alte Geheimnis nutzen und lösche dann das alte Geheimnis.
