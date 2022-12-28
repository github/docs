---
ms.openlocfilehash: 3b7f24930d60e05c5e2b42cf7610a2b4efe70a14
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109772"
---
{% data variables.product.prodname_actions %} verwendet externen Speicher zum Speichern von Workflowartefakten und Protokollen. Diese Daten werden bei deinem externen Anbieter gespeichert, z. B. Azure Blob Storage, Amazon S3{% ifversion actions-ghes-gcp-storage %}, Google Cloud Storage{% endif %} oder MinIO. Folglich werden die in einem externen Speicher gespeicherten Daten nicht durch {% data variables.product.prodname_ghe_server %}-Sicherungen und {% data variables.product.prodname_ghe_server %}-Hochverfügbarkeitskonfigurationen geschützt, sondern hängen stattdessen von der Datensicherung und -replikation des externen Speicheranbieters wie Azure{% ifversion actions-ghes-gcp-storage %}, Google Cloud{% endif %} oder AWS ab.
