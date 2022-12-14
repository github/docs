---
ms.openlocfilehash: c9d2391a85dd42db8eb3914b9c3495e0441e0fd0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "147061274"
---
Standardmäßig wird jedes Mal ein {% data variables.product.prodname_actions %}-Workflow ausgelöst, wenn du eine Prebuildvorlage erstellst oder aktualisierst oder in einen Branch mit aktiviertem Prebuild pushst. Wie bei anderen Workflows auch, beanspruchen Prebuildworkflows entweder einen Teil der in deinem Konto enthaltenen GitHub Actions-Minuten, sofern vorhanden, oder verursachen Gebühren für GitHub Actions-Minuten. Weitere Informationen zu den Kosten von GitHub Actions-Minuten findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions). 

Neben den {% data variables.product.prodname_actions %}-Minuten wird dir auch die Speicherung von Prebuildvorlagen in Rechnung gestellt, die mit jeder Prebuildkonfiguration für ein bestimmtes Repository und eine bestimmte Region verbunden sind. Die Speicherung von Prebuildvorlagen wird mit der gleichen Rate wie die Speicherung von Codespaces berechnet. Weitere Informationen findest du unter [Berechnen der Speichernutzung](#calculating-storage-usage).

Um den Verbrauch von Github Actions-Minuten zu reduzieren, kannst du eine Prebuildvorlage so festlegen, dass sie nur bei Änderungen an den Konfigurationsdateien des Entwicklungscontainers oder nur nach einem benutzerdefinierten Zeitplan aktualisiert wird. Du kannst deine Speichernutzung auch verwalten, indem du die Anzahl der Vorlagenversionen anpasst, die für deine Prebuildkonfigurationen beibehalten werden sollen. Weitere Informationen findest du unter [Konfigurieren von Prebuilds](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild).

Wenn du ein Organisationsbesitzer bist, kannst du die Nutzung von Prebuildworkflows und Speicher nachverfolgen, indem du einen {% data variables.product.prodname_actions %}-Nutzungsbericht für deine Organisation herunterlädst. Du kannst Workflowausführungen für Prebuilds ermitteln, indem du die CSV-Ausgabe so filterst, dass sie nur den Workflow „Codespacesprebuilds erstellen" enthält. Weitere Informationen findest du unter [Anzeigen der {% data variables.product.prodname_actions %}-Nutzung](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization).
