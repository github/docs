---
title: Pushen eines durch Pushschutz blockierten Branches
intro: 'Der Pushschutz von {% data variables.product.prodname_secret_scanning %} schützt dich proaktiv davor, dass Geheimnisse aus deinen Repositorys offengelegt werden. Du kannst die Probleme in blockierten Pushes beheben. Sobald das erkannte Geheimnis entfernt wurde, kannst du die Änderungen über die Befehlszeile oder die Webbenutzeroberfläche an den Arbeitsbranch pushen.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push a blocked branch
ms.openlocfilehash: 743cdc094acfd2465d4bb97f1ae7ec0a7f8b86f0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147683787'
---
## Pushschutz für {% data variables.product.prodname_secret_scanning %}

Der Pushschutz von {% data variables.product.prodname_secret_scanning %} verhindert Sicherheitslecks, indem der Code auf Geheimnisse gescannt wird, bevor du Änderungen an dein Repository pushst. {% data reusables.secret-scanning.push-protection-overview %} Weitere Informationen zu Geheimnissen und Dienstanbietern, für die der Pushschutz unterstützt wird, findest du unter [{% data variables.product.prodname_secret_scanning_caps %}-Muster](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection).

{% data reusables.secret-scanning.push-protection-remove-secret %}

{% tip %}

**Tipp:** Wenn {% data variables.product.prodname_dotcom %} ein Geheimnis blockiert, von dem du denkst, dass es sicher gepusht werden kann, kannst du das Geheimnis zulassen und den Grund angeben, warum es zugelassen werden soll. Weitere Informationen zum Umgehen des Pushschutzes für Geheimnisse findest du unter [Zulassen, dass ein blockiertes Geheimnis gepusht wird](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#allowing-a-blocked-secret-to-be-pushed) und [Umgehen des Pushschutzes für ein Geheimnis](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret) (jeweils für die Befehlszeile und die Webbenutzeroberfläche). 

{% endtip %}

{% ifversion push-protection-custom-link-orgs %} 

Organisationsadministratoren können einen benutzerdefinierten Link bereitstellen, der in der Nachricht von {% data variables.product.product_name %} enthalten ist, wenn dein Push blockiert wird. Dieser benutzerdefinierte Link kann spezifische Ressourcen und Ratschläge für deine Organisation und ihre Richtlinien enthalten.

{% ifversion push-protection-custom-link-orgs-beta %}{% data reusables.advanced-security.custom-link-beta %}{% endif %}

{% endif %}

## Korrigieren eines blockierten Pushes über die Befehlszeile

{% data reusables.secret-scanning.push-protection-command-line-choice %}

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

Wenn das blockierte Geheimnisse mit dem letzten Commit in deinen Branch gelangt ist, befolge diese Schritte:

1. Entferne das Geheimnis aus deinem Code.
1. Committe die Änderungen mit `git commit --amend`.
1. Pushe die Änderungen mit `git push`.

Du kannst das Geheimnis auch entfernen, wenn es in einem früheren Commit im Git-Verlauf vorkommt.

1. Mithilfe von `git log` kannst du feststellen, welcher im Pushfehler hervorgehobene Commit im Verlauf zuerst vorhanden war.
1. Starte ein interaktives Rebasing mit `git rebase -i <commit-id>~1`. <commit-id> entspricht dem Commit aus Schritt 1.
1. Ermittle den zu ändernden Commit, indem du `pick` in der ersten Textzeile im Editor in `edit` änderst.
1. Entferne das Geheimnis aus deinem Code.
1. Committe die Änderung mit `git commit --amend`.
1. Führe `git rebase --continue` aus, um das Rebasing fertigzustellen.

## Korrigieren eines blockierten Pushes über die Webbenutzeroberfläche

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

Um einen blockierten Commit über die Webbenutzeroberfläche zu korrigieren, musst du das Geheimnis aus der Datei entfernen oder das Dropdownmenü **Schutz umgehen** verwenden, um das Geheimnis zuzulassen. Weitere Informationen zum Umgehen des Pushschutzes über die Webbenutzeroberfläche findest du unter [Schützen von Pushes mit Geheimnisscans](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#bypassing-push-protection-for-a-secret).

Wenn es sich wirklich um ein Geheimnis handelt, muss es aus der Datei entfernt werden. Sobald du das Geheimnis entfernt hast, ändert sich das Banner oben auf der Seite und teilt dir mit, dass du deine Änderungen jetzt committen kannst.
