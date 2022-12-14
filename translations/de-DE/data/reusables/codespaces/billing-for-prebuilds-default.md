---
ms.openlocfilehash: 0036dd5cf979531479a7ddf523c7475391b29c0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147548008"
---
Standardmäßig wird jedes Mal ein {% data variables.product.prodname_actions %}-Workflow ausgelöst, wenn du ein Prebuild erstellst oder aktualisierst oder einen Push in einen Branch mit Prebuildunterstützung ausführst. Wie bei anderen Workflows auch, beanspruchen Prebuildworkflows entweder einen Teil der in deinem Konto enthaltenen GitHub Actions-Minuten, sofern vorhanden, oder verursachen Gebühren für GitHub Actions-Minuten. Weitere Informationen zu den Kosten von GitHub Actions-Minuten findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions). 

Neben den {% data variables.product.prodname_actions %}-Minuten wird dir auch die Speicherung von Prebuilds in Rechnung gestellt, die mit jeder Prebuildkonfiguration für ein bestimmtes Repository und eine bestimmte Region verbunden sind. Die Speicherung von Prebuilds wird mit der gleichen Rate wie die Speicherung von Codespaces berechnet.