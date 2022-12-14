---
title: Informationen zu Updates von Dependabot-Versionen
intro: 'Du kannst mithilfe von {% data variables.product.prodname_dependabot %} deine verwendeten Pakete immer auf die neuesten Version zu aktualisieren.'
redirect_from:
  - /github/administering-a-repository/about-dependabot
  - /github/administering-a-repository/about-github-dependabot
  - /github/administering-a-repository/about-github-dependabot-version-updates
  - /github/administering-a-repository/about-dependabot-version-updates
  - /code-security/supply-chain-security/about-dependabot-version-updates
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/upgrading-from-dependabotcom-to-github-native-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Version updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Dependabot version updates
ms.openlocfilehash: 56bac2fbf2fb42a418cffbd478aa526803b124d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145186084'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zu {% data variables.product.prodname_dependabot_version_updates %}

Mit {% data variables.product.prodname_dependabot %} ist das Verwalten von Abhängigkeiten so leicht wie noch nie. Mit dem Programm kannst du sicherstellen, dass dein Repository automatisch auf die neuesten Releases der Pakete und Anwendungen aktualisiert wird, von denen es abhängig ist.

Du aktivierst {% data variables.product.prodname_dependabot_version_updates %}, indem du eine `dependabot.yml`-Konfigurationsdatei in das Verzeichnis deines Repositorys einchecken. Die Konfigurationsdatei gibt den Speicherort des Manifests oder anderer Paketdefinitionsdateien an, die im Repository gespeichert sind. {% data variables.product.prodname_dependabot %} verwendet diese Informationen, um nach veralteten Paketen und Anwendungen zu suchen. {% data variables.product.prodname_dependabot %} bestimmt, ob eine neue Version einer Abhängigkeit vorhanden ist, indem du dir die semantische Versionierung ([SemVer](https://semver.org/)) der Abhängigkeit ansiehst, um zu entscheiden, ob sie auf diese Version aktualisiert werden soll. Für bestimmte Paketmanager unterstützt {% data variables.product.prodname_dependabot_version_updates %} auch die Anbietererstellung. Gelieferte (oder zwischengespeicherte) Abhängigkeiten sind Abhängigkeiten, die in ein bestimmtes Verzeichnis in einem Repository eingecheckt werden, statt dass auf sie in einem Manifest verwiesen wird. Gelieferte Abhängigkeiten sind zur Build-Zeit verfügbar, auch wenn Paketserver nicht verfügbar sind. {% data variables.product.prodname_dependabot_version_updates %} können so konfiguriert werden, dass gelieferte Abhängigkeiten für neue Versionen überprüft und bei Bedarf aktualisiert werden. 

Wenn {% data variables.product.prodname_dependabot %} eine veraltete Abhängigkeit identifiziert, löst sie eine Pull Request aus, um das Manifest auf die neueste Version der Abhängigkeit zu aktualisieren. Bei gelieferten Abhängigkeiten löst {% data variables.product.prodname_dependabot %} eine Pull Request aus, um die veraltete Abhängigkeit direkt durch die neue Version zu ersetzen. du überprüfst, ob deine Tests übergeben werden, überprüfe die Änderungsprotokoll- und Release-Notizen, die in der Pull-Request-Zusammenfassung enthalten sind, und führe sie dann zusammen. Weitere Informationen findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot %}-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates).

Wenn du _Sicherheits-Updates_ aktivierst, löst {% data variables.product.prodname_dependabot %} auch Pull Requests aus, um anfällige Abhängigkeiten zu aktualisieren. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates).

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-tos %}

## Häufigkeit von {% data variables.product.prodname_dependabot %}-Pull Requests

Du gibst an, wie oft jedes Ökosystem auf neue Versionen in der Konfigurationsdatei überprüft werden soll: täglich, wöchentlich oder monatlich.

{% data reusables.dependabot.initial-updates %}

Wenn du Sicherheits-Updates aktiviert hast, werden manchmal zusätzliche Pull Requests für Sicherheits-Updates angezeigt. Diese werden durch eine {% data variables.product.prodname_dependabot %}-Warnung zu einer Abhängigkeit von deinem Standardbranch ausgelöst. {% data variables.product.prodname_dependabot %} löst automatisch eine Pull Request aus, um die anfällige Abhängigkeit zu aktualisieren.

## Unterstützte Repositorys und Ökosysteme
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

Du kannst Versionsupdates für Repositorys konfigurieren, die ein Abhängigkeitsmanifest oder eine Sperrdatei für einen der unterstützten Paketmanager enthalten. Für einige Paketmanager kannst du auch Vendoring für Abhängigkeiten konfigurieren. Weitere Informationen findest du unter [Konfigurationsoptionen für die Datei „dependabot.yml“](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#vendor).
{% note %}

{% data reusables.dependabot.private-dependencies-note %} 

{% data variables.product.prodname_dependabot %} unterstützt keine privaten {% data variables.product.prodname_dotcom %}-Abhängigkeiten für alle Paketmanager. Weitere Informationen findest du in der folgenden Tabelle.

{% endnote %}

{% data reusables.dependabot.supported-package-managers %}

Wenn dein Repository bereits eine Integration für die Abhängigkeitsverwaltung verwendet, musst du dies deaktivieren, bevor du {% data variables.product.prodname_dependabot %} aktivierst. {% ifversion fpt or ghec %}Weitere Informationen findest du unter [Informationen zu Integrationen](/github/customizing-your-github-workflow/about-integrations). {% endif %}

## Informationen zum Konfigurieren von {% data variables.product.prodname_dependabot %}-Sicherheits-Updates

Du kannst deine Benachrichtigungen nach {% data variables.product.company_short %} filtern, um Benachrichtigungen für Pull Requests anzuzeigen, die mit {% data variables.product.prodname_dependabot %} erstellt wurden. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox).
