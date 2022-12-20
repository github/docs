---
ms.openlocfilehash: efb9f234573525d8f24d4f0798379d38a8d8299e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881876"
---
Um den Verbrauch von Github Actions-Minuten zu reduzieren, kannst du einen Prebuild so festlegen, dass er nur bei Änderungen an den Konfigurationsdateien des Entwicklungscontainers oder nur nach einem benutzerdefinierten Zeitplan aktualisiert wird. Du kannst deine Speichernutzung auch verwalten, indem du die Anzahl der Vorlagenversionen anpasst, die für deine Prebuildkonfigurationen beibehalten werden sollen. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild).

Wenn du ein Organisationsbesitzer bist, kannst du die Nutzung von Prebuildworkflows und Speicher nachverfolgen, indem du einen {% data variables.product.prodname_actions %}-Nutzungsbericht für deine Organisation herunterlädst. Du kannst Workflowausführungen für Prebuilds ermitteln, indem du die CSV-Ausgabe so filterst, dass sie nur den Workflow „{% data variables.product.prodname_codespaces %}-Prebuilds erstellen“ enthält. Weitere Informationen findest du unter [Anzeigen der {% data variables.product.prodname_actions %}-Nutzung](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization).
