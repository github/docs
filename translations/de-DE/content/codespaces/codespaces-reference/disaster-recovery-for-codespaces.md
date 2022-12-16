---
title: Notfallwiederherstellung für Codespaces
intro: Dieser Artikel bietet einen Leitfaden für ein Szenario der Notfallwiederherstellung, bei dem eine ganze Region aufgrund einer schwerwiegenden Naturkatastrophe oder einer umfangreichen Dienstunterbrechung von einem Ausfall betroffen ist.
versions:
  fpt: '*'
  ghec: '*'
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
shortTitle: Disaster recovery
ms.openlocfilehash: d33c9e5f1af8775ae5f8f097ba3911edd348dd1a
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149348"
---
Wir arbeiten daran sicherzustellen, dass {% data variables.product.prodname_codespaces %} stets für dich verfügbar ist. Allerdings wirken sich Kräfte, die sich unserer Kontrolle entziehen, manchmal so auf den Dienst aus, dass es zu ungeplanten Unterbrechungen kommen kann.

Obwohl Notfallwiederherstellungsszenarien selten vorkommen, empfehlen wir Ihnen, sich auf die Möglichkeit eines Ausfalls einer ganzen Region vorzubereiten. Wenn eine ganze Region von einer Dienstunterbrechung betroffen ist, sind die lokal redundanten Kopien deiner Daten vorübergehend nicht verfügbar.

In der folgenden Anleitung findest du Optionen für den Umgang mit Dienstunterbrechungen in der gesamten Region, in der dein Codespace bereitgestellt ist.

{% note %}

**Hinweis**: Du kannst die potenziellen Auswirkungen von Ausfällen des gesamten Diensts verringern, indem du häufig in Remoterepositorys pushst.

{% endnote %}

## <a name="option-1-create-a-new-codespace-in-another-region"></a>Option 1: Erstellen eines neuen Codespaces in einer anderen Region

Im Falle eines regionalen Ausfalls wird empfohlen, deinen Codespace in einer nicht betroffenen Region neu zu erstellen, um weiterarbeiten zu können. Dieser neue Codespace enthält alle Änderungen, die beim letzten Push an {% data variables.product.prodname_dotcom %} vorgenommen wurden. Informationen zum manuellen Festlegen einer anderen Region findest du unter [Festlegen der Standardregion für Codespaces](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).

Du kannst die Wiederherstellungszeit optimieren, indem du eine Datei `devcontainer.json` im Projektrepository konfigurierst, mit der du die Tools, Runtimes, Frameworks, Editor-Einstellungen, Erweiterungen und andere Konfigurationen festlegen kannst, die zur automatischen Wiederherstellung der Entwicklungsumgebung erforderlich sind. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project).

## <a name="option-2-wait-for-recovery"></a>Option 2: Warten auf die Wiederherstellung

In diesem Fall ist keine weitere Aktion erforderlich. Wir arbeiten intensiv daran, die Verfügbarkeit des Diensts wiederherzustellen. 

Du kannst den aktuellen Dienststatus auf dem [Statusdashboard](https://www.githubstatus.com/) überprüfen.

## <a name="option-3-clone-the-repository-locally-or-edit-in-the-browser"></a>Option 3: Lokales Klonen des Repositorys oder Bearbeiten im Browser

Auch wenn {% data variables.product.prodname_codespaces %} den Vorteil einer vorkonfigurierten Entwicklungsumgebung bietet, sollte immer über das auf {% data variables.product.prodname_dotcom_the_website %} gehostete Repository auf deinen Quellcode zugegriffen werden können. Im Falle eines {% data variables.product.prodname_codespaces %}-Ausfalls können Sie das Repository immer noch lokal klonen oder Dateien im Browser-Editor von {% data variables.product.company_short %} bearbeiten. Weitere Informationen findest du unter [Bearbeiten von Dateien](/repositories/working-with-files/managing-files/editing-files).

Mit dieser Option wird zwar keine Entwicklungsumgebung für dich konfiguriert, aber du kannst bei Bedarf Änderungen an deinem Quellcode vornehmen, während du darauf wartest, dass die Dienstunterbrechung behoben wird.

## <a name="option-4-use-remote-containers-and-docker-for-a-local-containerized-environment"></a>Option 4: Verwenden von Remotecontainern und Docker für eine lokale containerisierte Umgebung

Wenn dein Repository eine Datei `devcontainer.json` aufweist, solltest du die [Erweiterung „Remotecontainer“](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-a-git-repository-or-github-pr-in-an-isolated-container-volume) in {% data variables.product.prodname_vscode %} verwenden, um einen lokalen Entwicklungscontainer für dein Repository zu erstellen und anzufügen. Die Einrichtungszeit für diese Option variiert je nach den lokalen Spezifikationen und der Komplexität deines Entwicklungscontainers.

{% note %}

**Hinweis:** Stelle sicher, dass dein lokales Setup die [Mindestanforderungen](https://code.visualstudio.com/docs/remote/containers#_system-requirements) erfüllt, bevor du diese Option anwendest.

{% endnote %}
