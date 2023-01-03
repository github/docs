---
title: Weitere Informationen zu GitHub Codespaces-Prebuilds
shortTitle: About prebuilds
intro: '{% data variables.product.prodname_github_codespaces %}-Prebuilds beschleunigen die Erstellung neuer Codespaces für große oder komplexe Repositorys.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/prebuilding-your-codespaces/about-codespaces-prebuilds
ms.openlocfilehash: eecb77b541cc735fcf788fbc5da6960cabad899d
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191918'
---
## Übersicht

{% data reusables.codespaces.prebuilds-definition %}

Wenn es derzeit mehr als 2 Minuten dauert, einen Codespace für ein Repository zu erstellen, profitierst du wahrscheinlich von der Verwendung von Prebuilds. Dies liegt daran, dass bei Verwendung von Prebuilds sämtlicher Quellcode, alle Editorerweiterungen, Projektabhängigkeiten, Befehle und Konfigurationen bereits heruntergeladen, installiert und angewendet wurden, bevor du einen Codespace erstellst. 

Wenn du Änderungen in dein Repository pushst, verwendet {% data variables.product.prodname_github_codespaces %} standardmäßig {% data variables.product.prodname_actions %}, um deine Prebuilds automatisch zu aktualisieren.

Wenn Prebuilds für einen bestimmten Branch eines Repositorys, eine bestimmte Dev-Containerkonfigurationsdatei und für deine Region verfügbar sind, wird die Bezeichnung {% octicon "zap" aria-label="The zap icon" %} „Prebuild bereit“ in der Liste mit den Computertypoptionen angezeigt, wenn du einen Codespace erstellst. Wenn noch ein Prebuild erstellt wird, wird „{% octicon "history" aria-label="The history icon" %}-Prebuild wird ausgeführt“ angezeigt. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

![Das Dialogfeld zum Auswählen eines Computertyps](/assets/images/help/codespaces/choose-custom-machine-type.png)

Wenn du einen Codespace aus einer Vorlage auf der Seite „Deine Codespaces“ erstellst, kann {% data variables.product.prodname_dotcom %} automatisch einen Prebuild verwenden, um die Erstellungszeit zu beschleunigen. Weitere Informationen zu Vorlagen findest du unter [Erstellen eines Codespaces aus einer Vorlage](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

## Der Prebuildprozess

Zum Erstellen eines Prebuilds richtest du eine Prebuildkonfiguration ein. Wenn du die Konfiguration speicherst, wird ein {% data variables.product.prodname_actions %}-Workflow ausgeführt, um jeden der erforderlichen Prebuilds zu erstellen: ein Workflow pro Prebuild. Workflows werden auch ausgeführt, wenn die Prebuilds für deine Konfiguration aktualisiert werden müssen. Dies kann in geplanten Abständen erfolgen, bei Pushs in ein Repository mit Prebuildunterstützung oder wenn du die Dev-Containerkonfiguration änderst. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds).  

Wenn ein Prebuildkonfigurationsworkflow ausgeführt wird, erstellt {% data variables.product.prodname_dotcom %} einen temporären Codespace, wobei Setupvorgänge bis zu den Befehlen `onCreateCommand` und `updateContentCommand` in der `devcontainer.json` Datei ausgeführt werden. Während der Erstellung eines Prebuilds werden keine `postCreateCommand`-Befehle ausgeführt. Weitere Informationen zu diesen Befehlen findest du in der [`devcontainer.json`-Referenz](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation. Eine Momentaufnahme des generierten Containers wird dann aufgezeichnet und gespeichert.

Genau wie bei anderen {% data variables.product.prodname_actions %}-Workflows werden beim Ausführen eines Prebuildkonfigurationsworkflows entweder einige der in deinem Konto ggf. enthaltenen {% data variables.product.prodname_actions %}-Minuten verbraucht, oder es fallen Gebühren für {% data variables.product.prodname_actions %} Minuten an. Die Speicherung von Codespace-Prebuilds wird auf die gleiche Weise abgerechnet wie die Speicherung von aktiven oder beendeten Codespaces. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#billing-for-codespaces-prebuilds).

Wenn du einen Codespace aus einem Prebuild erstellst, lädt {% data variables.product.prodname_dotcom %} die vorhandene Containermomentaufnahme aus dem Speicher herunter und stellt sie auf einer neuen VM bereit, wobei die verbleibenden in der Dev-Containerkonfiguration angegebenen Befehle ausgeführt werden. Da viele Vorgänge bereits ausgeführt wurden, z. B. das Klonen des Repositorys, kann das Erstellen eines Codespaces aus einem Prebuild erheblich schneller gehen als ohne Prebuild. Dies gilt, wenn das Repository groß ist und/oder die Ausführung von `onCreateCommand`-Befehlen lange dauert.

## Informationen zum Pushen von Änderungen an Branches mit Prebuildunterstützung

Jeder Push in einen Branch mit einer Prebuildkonfiguration führt standardmäßig zur Ausführung eines von {% data variables.product.prodname_dotcom %} verwalteten {% data variables.product.prodname_actions %}-Workflows, um den Prebuild zu aktualisieren. Für den Prebuildworkflow gilt, dass parallel zur Ausführung eines Workflows für eine bestimmte Prebuildkonfiguration keine weitere Ausführung stattfinden kann, sofern keine Änderungen vorgenommen wurden, die sich auf die Entwicklungscontainerkonfiguration für das zugehörige Repository auswirken. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers). Wenn bereits eine Ausführung durchgeführt wird, wird die zuletzt in die Warteschlange eingereihte Workflowausführung nach Abschluss der aktuellen Ausführung gestartet. 

Wenn du den Prebuild so festlegst, dass er bei jedem Push aktualisiert wird, bedeutet das, dass bei sehr häufigen Pushes in dein Repositorys der Prebuild mindestens so oft aktualisiert wird, wie es dauert, den Prebuildworkflow auszuführen. Das heißt, wenn deine Workflowausführung in der Regel eine Stunde dauert, werden Prebuilds für dein Repository ungefähr stündlich erstellt, falls die Ausführung erfolgreich ist, oder häufiger, wenn Pushes erfolgt sind, die die Konfiguration des Entwicklungscontainers im Branch geändert haben.

Stellen wir uns beispielsweise vor, dass in schneller Folge 5 Pushs auf einen Branch durchgeführt werden, der eine Prebuildkonfiguration aufweist. In dieser Situation gilt:

* Eine Workflowausführung wird für den ersten Push gestartet, um den Prebuild zu aktualisieren.
* Wenn die 4 verbleibenden Pushs keine Auswirkungen auf die Entwicklungscontainerkonfiguration haben, werden die Workflowausführungen für diese in einem „ausstehenden“ Zustand in die Warteschlange gestellt. 
  
  Wenn einer der restlichen 4 Pushs die Entwicklungscontainerkonfiguration ändert, wird der Dienst diesen nicht überspringen, und wird sofort den Prebuilderstellungsworkflow ausführen und bei erfolgreicher Ausführung den Prebuild entsprechend aktualisieren. 

* Sobald die erste Ausführung abgeschlossen ist, werden die Workflowausführungen für Push 2, 3 und 4 abgebrochen, und der letzte Workflow in der Warteschlange (für Push 5) führt den Prebuild aus und aktualisiert ihn. 
