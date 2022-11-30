---
title: Notfallwiederherstellung für GitHub Codespaces
intro: 'Dieser Artikel bietet einen Leitfaden für ein Szenario der Notfallwiederherstellung, bei dem eine ganze Region aufgrund einer schwerwiegenden Naturkatastrophe oder einer umfangreichen Dienstunterbrechung von einem Ausfall betroffen ist.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
shortTitle: Disaster recovery
redirect_from:
  - /codespaces/codespaces-reference/disaster-recovery-for-codespaces
ms.openlocfilehash: 9b892d6a24332e01174c819e2e88a91d1cdf9d65
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158813'
---
Wir arbeiten daran sicherzustellen, dass {% data variables.product.prodname_github_codespaces %} stets für dich verfügbar ist. Allerdings wirken sich Kräfte, die sich unserer Kontrolle entziehen, manchmal so auf den Dienst aus, dass es zu ungeplanten Unterbrechungen kommen kann.

Obwohl Notfallwiederherstellungsszenarien selten vorkommen, empfehlen wir Ihnen, sich auf die Möglichkeit eines Ausfalls einer ganzen Region vorzubereiten. Wenn eine ganze Region von einer Dienstunterbrechung betroffen ist, sind die lokal redundanten Kopien deiner Daten vorübergehend nicht verfügbar.

In der folgenden Anleitung findest du Optionen für den Umgang mit Dienstunterbrechungen in der gesamten Region, in der dein Codespace bereitgestellt ist.

{% note %}

**Hinweis**: Du kannst die potenziellen Auswirkungen von Ausfällen des gesamten Diensts verringern, indem du häufig in Remoterepositorys pushst.

{% endnote %}

## Option 1: Erstellen eines neuen Codespaces in einer anderen Region

Im Falle eines regionalen Ausfalls wird empfohlen, deinen Codespace in einer nicht betroffenen Region neu zu erstellen, um weiterarbeiten zu können. Dieser neue Codespace enthält alle Änderungen, die beim letzten Push an {% data variables.product.prodname_dotcom %} vorgenommen wurden. Weitere Informationen zum Einrichten in einer anderen Region findest du unter [Einrichten deiner Standardregion für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces).

Du kannst die Wiederherstellungszeit optimieren, indem du eine Datei `devcontainer.json` im Projektrepository konfigurierst, mit der du die Tools, Runtimes, Frameworks, Editor-Einstellungen, Erweiterungen und andere Konfigurationen festlegen kannst, die zur automatischen Wiederherstellung der Entwicklungsumgebung erforderlich sind. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project).

## Option 2: Warten auf die Wiederherstellung

In diesem Fall ist keine weitere Aktion erforderlich. Wir arbeiten intensiv daran, die Verfügbarkeit des Diensts wiederherzustellen. 

Du kannst den aktuellen Dienststatus auf dem [Statusdashboard](https://www.githubstatus.com/) überprüfen.

## Option 3: Lokales Klonen des Repositorys oder Bearbeiten im Browser

Auch wenn {% data variables.product.prodname_github_codespaces %} den Vorteil einer vorkonfigurierten Entwicklungsumgebung bietet, sollte immer über das auf {% data variables.product.prodname_dotcom_the_website %} gehostete Repository auf deinen Quellcode zugegriffen werden können. Im Falle eines {% data variables.product.prodname_github_codespaces %}-Ausfalls kannst du das Repository immer noch lokal klonen oder Dateien im Browser-Editor von {% data variables.product.company_short %} bearbeiten. Weitere Informationen findest du unter [Bearbeiten von Dateien](/repositories/working-with-files/managing-files/editing-files).

Mit dieser Option wird zwar keine Entwicklungsumgebung für dich konfiguriert, aber du kannst bei Bedarf Änderungen an deinem Quellcode vornehmen, während du darauf wartest, dass die Dienstunterbrechung behoben wird.

## Option 4: Verwenden der Erweiterung „Dev Containers“ und von Docker für eine lokale containerisierte Umgebung

Wenn dein Repository eine Datei `devcontainer.json` aufweist, solltest du die [Erweiterung „Dev Containers“](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) in {% data variables.product.prodname_vscode %} verwenden, um einen lokalen Entwicklungscontainer für dein Repository zu erstellen und anzufügen. Die Einrichtungszeit für diese Option variiert je nach den lokalen Spezifikationen und der Komplexität deines Entwicklungscontainersetups. Weitere Informationen findest du unter [Entwickeln innerhalb eines Containers](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

{% note %}

**Hinweis:** Stelle sicher, dass dein lokales Setup die [Mindestanforderungen](https://code.visualstudio.com/docs/remote/containers#_system-requirements) erfüllt, bevor du diese Option anwendest.

{% endnote %}
