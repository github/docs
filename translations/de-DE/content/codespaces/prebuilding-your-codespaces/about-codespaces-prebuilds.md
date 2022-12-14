---
title: Informationen zu Codespacesprebuilds
shortTitle: About prebuilds
intro: Codespaces-Prebuilds beschleunigen die Erstellung neuer Codespaces für große oder komplexe Repositorys.
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
product: '{% data reusables.gated-features.codespaces %}'
ms.openlocfilehash: 4653ead4a97ff1ff87ac8029fb215fdc8ae56566
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381187"
---
## <a name="overview"></a>Übersicht

Mit Prebuilds deiner Codespaces kannst du produktiver sein und schneller auf deinen Codespace zugreifen, insbesondere wenn dein Repository groß oder komplex ist, und der Start neuer Codespaces derzeit mehr als 2 Minuten dauert. Dies liegt daran, dass sämtlcher Quellcode, alle Editorerweiterungen, Projektabhängigkeiten, Befehle und Konfigurationen bereits heruntergeladen, installiert und angewendet wurden, bevor du einen Codespace für dein Projekt erstellst. Stelle dir einen Prebuild als einsatzbereite Vorlage für einen Codespace vor. 

Wenn du Änderungen in dein Repository pushst, verwendet {% data variables.product.prodname_codespaces %} standardmäßig {% data variables.product.prodname_actions %}, um deine Prebuilds automatisch zu aktualisieren.

Wenn Prebuilds für einen bestimmten Branch eines Repositorys und für deine Region verfügbar sind, wird die Bezeichnung {% octicon "zap" aria-label="The zap icon" %} „Prebuild bereit“ in der Liste mit den Computertypoptionen angezeigt, wenn du einen Codespace erstellst. Wenn ein Prebuild sich in der Erstellung befindet, wird die Bezeichnung „{% octicon "history" aria-label="The history icon" %} Prebuild wird ausgeführt“ angezeigt. Weitere Informationen findest du unter [Erstellen eines Codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace).

![Das Dialogfeld zum Auswählen eines Computertyps](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## <a name="about-billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>Informationen zur Abrechnung für {% data variables.product.prodname_codespaces %}-Prebuilds

{% data reusables.codespaces.billing-for-prebuilds %} Details zu {% data variables.product.prodname_codespaces %}-Speicherpreisen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces). 

Die Verwendung mithilfe von Prebuilds erstellter Codespaces wird zum gleichen Satz wie reguläre Codespaces berechnet.

## <a name="about-pushing-changes-to-prebuild-enabled-branches"></a>Informationen zum Pushen von Änderungen an Branches mit Prebuildunterstützung

Jeder Push in einen Branch mit einer Prebuildkonfiguration führt standardmäßig zu einem von {% data variables.product.prodname_dotcom %} verwalteten Aktionsworkflow, der erfolgt, um die Prebuildvorlage zu aktualisieren. Für den Prebuildworkflow gilt, dass parallel zur Ausführung eines Workflows für eine bestimmte Prebuildkonfiguration keine weitere Ausführung stattfinden kann, sofern keine Änderungen vorgenommen wurden, die sich auf die Entwicklungscontainerkonfiguration für das zugehörige Repository auswirken. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers). Wenn bereits eine Ausführung läuft, findet die zuletzt in die Warteschlange gesetzte Workflowausführung nach Abschluss der aktuellen Ausführung statt. 

Wenn du die Prebuildvorlage so festlegst, dass sie bei jedem Push aktualisiert wird, bedeutet das, dass bei sehr häufigen Pushes in dein Repositorys die Prebuildvorlage mindestens so oft aktualisiert wird, wie es dauert, den Prebuildworkflow auszuführen. Das heißt, wenn deine Workflowausführung in der Regel eine Stunde dauert, werden Prebuilds für dein Repository ungefähr stündlich erstellt, falls die Ausführung erfolgreich ist, oder häufiger, wenn Pushes erfolgt sind, die die Konfiguration des Entwicklungscontainers im Branch geändert haben.

Stellen wir uns beispielsweise vor, dass in schneller Folge 5 Pushs auf einen Branch durchgeführt werden, der eine Prebuildkonfiguration aufweist. In dieser Situation gilt:

* Eine Workflowausführung wird für den ersten Push gestartet, um die Prebuildvorlage zu aktualisieren.
* Wenn die 4 verbleibenden Pushs keine Auswirkungen auf die Entwicklungscontainerkonfiguration haben, werden die Workflowausführungen für diese in einem „ausstehenden“ Zustand in die Warteschlange gestellt. 
  
  Wenn einer der restlichen 4 Pushs die Entwicklungscontainerkonfiguration ändert, wird der Dienst diesen nicht überspringen, und wird sofort den Prebuilderstellungsworkflow ausführen und bei erfolgreicher Ausführung den Prebuild entsprechend aktualisieren. 

* Sobald die erste Ausführung abgeschlossen ist, werden die Workflowausführungen für Push 2, 3 und 4 abgebrochen, und der letzte Workflow in der Warteschlange (für Push 5) führt die Prebuildvorlage aus und aktualisiert sie. 
