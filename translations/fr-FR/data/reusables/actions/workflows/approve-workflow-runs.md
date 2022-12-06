---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163815"
---
Les responsables de maintenance disposant d’un accès en écriture à un dépôt peuvent utiliser la procédure suivante pour examiner et exécuter des workflows sur des demandes de tirage émanant de contributeurs qui nécessitent une approbation.

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. Inspectez les modifications proposées dans la demande de tirage et assurez-vous que vous êtes à l’aise pour exécuter vos workflows sur la branche de la demande de tirage. Vous devez être particulièrement averti des modifications proposées dans le `.github/workflows/` répertoire qui affectent les fichiers de flux de travail.
1. Si vous êtes à l’aise avec l’exécution de workflows sur la branche de demande de tirage, revenez à l’onglet {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation**, puis, sous « Workflow(s) en attente d’approbation », cliquez sur **Approuver et exécuter**.

   ![Approuver et exécuter des workflows](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)