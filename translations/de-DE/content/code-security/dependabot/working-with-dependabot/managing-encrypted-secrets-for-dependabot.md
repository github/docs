---
title: Verwalten verschlüsselter Geheimnisse für Dependabot
intro: "Du kannst vertrauliche Informationen, z.\_B. Kennwörter und Zugriffstoken, als verschlüsselte Geheimnisse speichern und dann in der {% data variables.product.prodname_dependabot %}-Konfigurationsdatei darauf verweisen."
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
ms.openlocfilehash: 94b9e4c1945385ee9abca9cc548b159231e212c3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106373'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## Informationen zu verschlüsselten Geheimnissen für {% data variables.product.prodname_dependabot %}

Bei {% data variables.product.prodname_dependabot %}-Schlüsseln handelt es sich um verschlüsselte Anmeldeinformationen, die du entweder auf Organisationsebene oder auf Repositoryebene erstellst.
Wenn du auf Organisationsebene ein Geheimnis hinzufügst, kannst du angeben, welche Repositorys darauf zugreifen kannst. Du kannst Geheimnisse verwenden, um {% data variables.product.prodname_dependabot %} zu erlauben, Abhängigkeiten in privaten Paketregistrierungen zu aktualisieren. Wenn du ein Geheimnis hinzufügst, wird es verschlüsselt, bevor es {% data variables.product.prodname_dotcom %} erreicht, und bleibt verschlüsselt, bis es von {% data variables.product.prodname_dependabot %} zum Zugreifen auf eine private Paketregistrierung verwendet wird.

Nachdem du ein {% data variables.product.prodname_dependabot %}-Geheimnis hinzugefügt hast, kannst du darauf wie folgt in der Konfigurationsdatei _dependabot.yml_ verweisen: {% raw %}`${{secrets.NAME}}`{% endraw %}, wobei „NAME“ der Name ist, den du für das Geheimnis ausgewählt hast. Beispiel: 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries).

### Benennen deiner Geheimnisse

Der Name eines {% data variables.product.prodname_dependabot %}-Geheimnisses:
* darf nur alphanumerische Zeichen (`[A-Z]`, `[0-9]`) oder Unterstriche (`_`) enthalten. Leerzeichen sind nicht zulässig. Wenn du Kleinbuchstaben eingibst, werden diese in Großbuchstaben geändert.
* darf nicht mit dem `GITHUB_`-Präfix beginnen.
* darf nicht mit einer Zahl beginnen.

## Hinzufügen eines Repositorygeheimnisses für {% data variables.product.prodname_dependabot %}

{% data reusables.actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.dependabot.sidebar-secret %}
1. Klicke auf **Neues Repositorygeheimnis**.
1. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
1. Gib den Wert für das Geheimnis ein.
1. Klicke auf **Geheimnis hinzufügen**.

   Der Name des Geheimnisses wird auf der Geheimnisseite von Dependabot aufgeführt. Du kannst auf **Aktualisieren** klicken, um den Wert des Geheimnisses zu ändern. Du kannst auf **Entfernen** klicken, um das Geheimnis zu löschen.

   ![Aktualisieren oder Entfernen eines Repositorygeheimnisses](/assets/images/help/dependabot/update-remove-repo-secret.png)

## Hinzufügen eines Organisationsgeheimnisses für {% data variables.product.prodname_dependabot %}

Beim Erstellen eines Geheimnisses in einer Organisation kannst du eine Richtlinie verwenden, um einzuschränken, welche Repositorys darauf zugreifen können. Du kannst beispielsweise allen Repositorys Zugriff gewähren oder nur private Repositorys oder eine angegebene Liste von Repositorys zulassen.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.dependabot.sidebar-secret %}
1. Klicke auf **Neues Organisationsgeheimnis**.
1. Gib einen Namen für dein Geheimnis in das Eingabefeld **Name** ein.
1. Gib den **Wert** für das Geheimnis ein.
1. Wähle in der Dropdownliste **Repositoryzugriff** eine Zugriffsrichtlinie aus.
1. Wenn du **Ausgewählte Repositorys** ausgewählt hast:

   * klicke auf {% octicon "gear" aria-label="The Gear icon" %}.
   * wähle die Repositorys aus, die auf dieses Geheimnis zugreifen können. 
     ![Auswählen von Repositorys für dieses Geheimnis](/assets/images/help/dependabot/secret-repository-access.png)
   * Klicke auf **Auswahl aktualisieren**.

1. Klicke auf **Geheimnis hinzufügen**.

   Der Name des Geheimnisses wird auf der Geheimnisseite von Dependabot aufgeführt. Du kannst auf **Aktualisieren** klicken, um den Geheimniswert oder die Zugriffsrichtlinie zu ändern. Du kannst auf **Entfernen** klicken, um das Geheimnis zu löschen.

   ![Aktualisieren oder Entfernen eines Organisationsgeheimnisses](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## Hinzufügen von {% data variables.product.prodname_dependabot %} zur IP-Zulassungsliste deiner Registrierungen

Wenn deine private Registrierung mit einer IP-Zulassungsliste konfiguriert ist, findest du die IP-Adressen, die von {% data variables.product.prodname_dependabot %} zum Zugreifen auf die Registrierung im Meta-API-Endpunkt verwendet werden, unter dem `dependabot`-Schlüssel. Weitere Informationen findest du unter [Meta](/rest/reference/meta).
