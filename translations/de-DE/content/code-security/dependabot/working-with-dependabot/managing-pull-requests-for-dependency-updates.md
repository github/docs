---
title: Verwalten von Pull Requests für Abhängigkeitsupdates
intro: 'Du verwaltest von {% data variables.product.prodname_dependabot %} ausgelöste Pull Requests im wesentlichen wie andere Pull Requests, aber es gibt einige zusätzliche Optionen.'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/managing-pull-requests-for-dependency-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: how_to
topics:
  - Repositories
  - Version updates
  - Security updates
  - Pull requests
  - Dependencies
  - Vulnerabilities
shortTitle: Manage Dependabot PRs
ms.openlocfilehash: e33b176ced7d10ed70f4c521ce2c18be776a7f8e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147112318'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zu {% data variables.product.prodname_dependabot %}-Pull Requests

{% data reusables.dependabot.pull-request-introduction %}

Wenn {% data variables.product.prodname_dependabot %} einen Pull Request auslöst, wirst du von deiner für das Repository ausgewählten Methode benachrichtigt. Jeder Pull Request enthält detaillierte Informationen zu der vorgeschlagenen Änderung, die vom Paket-Manager abgeleitet werden. Diese Pull Requests folgen den normalen Prüfungen und Tests, die in deinem Repository definiert sind. {% ifversion fpt or ghec %}Darüber hinaus wird eine Kompatibilitätsbewertung angezeigt, wo genügend Informationen verfügbar sind. Dies kann dir auch helfen, zu entscheiden, ob die Änderung gemergt werden soll. Weitere Informationen zu dieser Bewertung findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).{% endif %}

Wenn du viele Abhängigkeiten verwalten musst, solltest du möglicherweise die Konfiguration für jeden Paket-Manager anpassen, sodass Pull Requests bestimmte Prüfer, Zuweisungen und Bezeichnungen haben. Weitere Informationen findest du unter [Anpassen von Abhängigkeitsupdates](/github/administering-a-repository/customizing-dependency-updates).

## Anzeigen von {% data variables.product.prodname_dependabot %}-Pull Requests

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Alle Pull Requests für Sicherheits- oder Versionsupdates sind einfach zu identifizieren.
    - Der Autor ist {% ifversion fpt or ghec %}[dependabot](https://github.com/dependabot){% else %}dependabot{% endif %}, das von {% data variables.product.prodname_dependabot %} verwendete Bot-Konto.
    - Standardmäßig haben sie die Bezeichnung `dependencies`.

## Ändern der Rebase-Strategie für {% data variables.product.prodname_dependabot %}-Pull Requests

Standardmäßig führt {% data variables.product.prodname_dependabot %} automatisch Rebases für Pull Requests aus, um Konflikte zu lösen. Wenn du Mergekonflikte manuell behandeln möchtest, kannst du dies mithilfe der `rebase-strategy`-Option deaktivieren. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy).

## Ermöglichen, dass {% data variables.product.prodname_dependabot %} ein Rebase ausführt und einen Push über zusätzliche Commits erzwingt

Standardmäßig beendet {% data variables.product.prodname_dependabot %} ein Rebase eines Pull Requests, sobald zusätzliche Commits daran gesendet wurden. Um {% data variables.product.prodname_dependabot %} zu erlauben, einen Push über Commits zu erzwingen, die seinen Branches hinzugefügt wurden, füge eine der folgenden Zeichenfolgen ein: `[dependabot skip]`, `[skip dependabot]`, `[dependabot-skip]`, oder `[skip-dependabot]`, entweder in Klein- oder Großbuchstaben in die Commitnachricht ein.

## Verwalten von {% data variables.product.prodname_dependabot %}-Pull Requests mit Kommentarbefehlen

{% data variables.product.prodname_dependabot %} reagiert auf einfache Befehle in Kommentaren. Jeder Pull Request enthält Details der Befehle, die du verwenden könntest, um den Pull Request zu verarbeiten (z. B. Mergen, Squashen, erneutes Öffnen, Schließen des Pull Requests oder Ausführen eines Rebase für den Pull Request) unter dem Abschnitt „{% data variables.product.prodname_dependabot %}-Befehle und -Optionen“. Du sollst diese automatisch generierten Pull Requests so einfach wie möglich selektieren können.

Jeden der folgenden Befehle kannst du in einem {% data variables.product.prodname_dependabot %}-Pull Request verwenden.

- `@dependabot cancel merge` bricht einen zuvor angeforderten Merge ab.
- `@dependabot close` schließt den Pull Request und verhindert, dass {% data variables.product.prodname_dependabot %} diesen Pull Request erneut erstellt. Du kannst das gleiche Ergebnis erreichen, indem du den Pull Request manuell schließt.
- `@dependabot ignore this dependency` schließt den Pull Request und verhindert, dass {% data variables.product.prodname_dependabot %} weitere Pull Requests für diese Abhängigkeit erstellt (es sei denn, du öffnest den Pull Request erneut oder aktualisierst selbst auf die vorgeschlagene Version der Abhängigkeit).
- `@dependabot ignore this major version` schließt den Pull Request und verhindert, dass {% data variables.product.prodname_dependabot %} weitere Pull Requests für diese Hauptversion erstellt (es sei denn, du öffnest den Pull Request erneut oder aktualisierst selbst auf diese Hauptversion).
- `@dependabot ignore this minor version` schließt den Pull Request und verhindert, dass {% data variables.product.prodname_dependabot %} weitere Pull Requests für diese Hauptversion erstellt (es sei denn, du öffnest den Pull Request erneut oder aktualisierst selbst auf diese Nebenversion).
- `@dependabot merge` mergt den Pull Request, sobald deine CI-Tests bestanden sind.
- `@dependabot rebase` führt ein Rebase für den Pull Request aus.
- `@dependabot recreate` erstellt den Pull Request neu und überschreibt dabei alle Änderungen, die an dem Pull Request vorgenommen wurden.
- `@dependabot reopen` öffnet den Pull Request erneut, wenn der Pull Request geschlossen ist.
- `@dependabot squash and merge` squasht und mergt den Pull Request, sobald deine CI-Tests bestanden sind.

{% data variables.product.prodname_dependabot %} reagiert mit einem „Daumen nach oben“-Emoji, um den Befehl zu bestätigen, und kann mit einem Kommentar auf den Pull Request antworten. Während {% data variables.product.prodname_dependabot %} in der Regel schnell reagiert, können einige Befehle mehrere Minuten dauern, wenn {% data variables.product.prodname_dependabot %} andere Updates oder Befehle verarbeitet.

Wenn du einen der Befehle zum Ignorieren von Abhängigkeiten oder Versionen ausführst, speichert {% data variables.product.prodname_dependabot %} die Einstellungen für das Repository zentral. Dies ist zwar eine schnelle Lösung, aber für Repositorys mit mehr als einem Mitwirkenden ist es besser, die zu ignorierenden Abhängigkeiten und Versionen explizit in der Konfigurationsdatei zu definieren. So können alle Mitwirkenden leicht erkennen, warum eine bestimmte Abhängigkeit nicht automatisch aktualisiert wird. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore).
