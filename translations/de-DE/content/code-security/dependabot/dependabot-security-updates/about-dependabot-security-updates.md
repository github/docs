---
title: Informationen zu Dependabot-Sicherheitsupdates
intro: '{% data variables.product.prodname_dependabot %} kann anfällige Abhängigkeiten für dich beheben, indem Pull Requests mit Sicherheitsupdates ausgelöst werden.'
shortTitle: Dependabot security updates
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
  - /code-security/supply-chain-security/about-dependabot-security-updates
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.2'
type: overview
topics:
  - Dependabot
  - Security updates
  - Vulnerabilities
  - Repositories
  - Dependencies
  - Pull requests
ms.openlocfilehash: 4ea3bd49a5d46376129afd2282fe043954a7d653
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181295'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.enterprise-enable-dependabot %}

## Informationen zu {% data variables.product.prodname_dependabot_security_updates %}

Mit {% data variables.product.prodname_dependabot_security_updates %} kannst du anfällige Abhängigkeiten in deinem Repository leichter beheben. Wenn du dieses Feature aktivierst und eine {% data variables.product.prodname_dependabot %}-Warnung für eine anfällige Abhängigkeit im Abhängigkeitsdiagramm deines Repositorys ausgelöst wird, versucht {% data variables.product.prodname_dependabot %} automatisch, diese zu beheben. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies) und unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates).

{% data variables.product.prodname_dotcom %} können {% data variables.product.prodname_dependabot_alerts %} an Repositorys senden, die von einem Sicherheitsrisiko betroffen sind, das durch eine kürzlich veröffentlichte {% data variables.product.prodname_dotcom %}-Sicherheitsempfehlung aufgedeckt wurde. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% data variables.product.prodname_dependabot %} überprüft, ob es möglich ist, ein Upgrade der anfälligen Abhängigkeit auf eine feste Version durchzuführen, ohne das Abhängigkeitsdiagramm für das Repository zu beeinträchtigen. Anschließend löst {% data variables.product.prodname_dependabot %} einen Pull Request aus, um die Abhängigkeit auf die Mindestversion mit dem Patch zu aktualisieren, und verknüpft den Pull Request mit der {% data variables.product.prodname_dependabot %}-Warnung oder meldet einen Fehler für die Warnung. Weitere Informationen findest du unter [Problembehandlung bei {% data variables.product.prodname_dependabot %}-Fehlern](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors).

Das Feature {% data variables.product.prodname_dependabot_security_updates %} ist für Repositorys verfügbar, in denen du das Abhängigkeitsdiagramm und {% data variables.product.prodname_dependabot_alerts %} aktiviert hast. Es wird eine {% data variables.product.prodname_dependabot %}-Warnung für jede anfällige Abhängigkeit angezeigt, die in deinem vollständigen Abhängigkeitsdiagramm identifiziert wird. Sicherheitsupdates werden jedoch nur für Abhängigkeiten ausgelöst, die in einer Manifest- oder Sperrdatei angegeben sind. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included).

{% ifversion dependabot-security-updates-unlock-transitive-dependencies %} 

{% note %}

**Hinweis**: Für npm löst {% data variables.product.prodname_dependabot %} einen Pull Request aus, um eine explizit definierte Abhängigkeit auf eine sichere Version zu aktualisieren, auch wenn dies bedeutet, dass die übergeordnete Abhängigkeit aktualisiert wird bzw. Abhängigkeiten aktualisiert werden{% ifversion dependabot-security-updates-npm %}, oder sogar eine Unterabhängigkeit entfernt wird, die von der übergeordneten Abhängigkeit nicht mehr benötigt wird.{% endif %}. Bei anderen Ökosystemen kann {% data variables.product.prodname_dependabot %} keine indirekte oder transitive Abhängigkeit aktualisieren, wenn dazu auch eine Aktualisierung der übergeordneten Abhängigkeit erforderlich wäre. Weitere Informationen findest du unter [Dependabot versucht, Abhängigkeiten ohne Warnung zu aktualisieren](/en/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors#dependabot-tries-to-update-dependencies-without-an-alert).

{% endnote %}{% endif %} 

Du kannst ein zugehöriges Feature aktivieren, {% data variables.product.prodname_dependabot_version_updates %}, sodass {% data variables.product.prodname_dependabot %} Pull Requests auslöst, um das Manifest auf die neueste Version der Abhängigkeit zu aktualisieren, wenn eine veraltete Abhängigkeit erkannt wird. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot %}-Versionsupdates](/github/administering-a-repository/about-dependabot-version-updates).

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

{% data reusables.dependabot.dependabot-updates-and-actions %}

{% data reusables.dependabot.dependabot-actions-support %}

## Informationen zu Pull Requests für Sicherheitsupdates

Jeder Pull Request enthält alles, was du brauchst, um einen vorgeschlagenen Fix schnell und sicher zu überprüfen und mit deinem Projekt zu mergen. Dazu gehören Informationen zum Sicherheitsrisiko wie Versionshinweise, Änderungsprotokolleinträge und Commitdetails. Details dazu, welches Sicherheitsrisiko durch einen Pull Request behoben wird, sind für alle Benutzer ausgeblendet, die nicht über Zugriff auf {% data variables.product.prodname_dependabot_alerts %}-Warnungen für das Repository verfügen.

Wenn du einen Pull Request mergst, der ein Sicherheitsupdate enthält, wird die entsprechende {% data variables.product.prodname_dependabot %}-Warnung für dein Repository als aufgelöst markiert. Weitere Informationen zu {% data variables.product.prodname_dependabot %}-Pull Requests findest du unter [Verwalten von Pull Requests für Abhängigkeitsupdates](/github/administering-a-repository/managing-pull-requests-for-dependency-updates).

{% data reusables.dependabot.automated-tests-note %}

{% ifversion fpt or ghec %}

## Informationen zu Kompatibilitätsbewertungen

{% data variables.product.prodname_dependabot_security_updates %} können Kompatibilitätsbewertungen enthalten, die dich darüber informieren, ob das Aktualisieren einer Abhängigkeit zu Breaking Changes in deinem Projekt führen kann. Diese werden anhand von CI-Tests in anderen öffentlichen Repositorys berechnet, in denen dasselbe Sicherheitsupdate generiert wurde. Die Kompatibilitätsbewertung des Updates ist der Prozentwert der CI-Ausführungen, die beim Aktualisieren zwischen bestimmten Versionen der Abhängigkeit erfolgt sind.

{% endif %}

## Informationen zum Konfigurieren von {% data variables.product.prodname_dependabot %}-Sicherheitsupdates

Du kannst deine Benachrichtigungen nach {% data variables.product.company_short %} filtern, um {% data variables.product.prodname_dependabot %}-Sicherheitsupdates anzuzeigen. Weitere Informationen findest du unter [Verwalten von Benachrichtigungen aus deinem Posteingang](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters).
