---
ms.openlocfilehash: a314a101135f5b47bfd573b1be6d7867db4ac26d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: "147886830"
---
#### Workflows in geforkten Repositorys

Workflows werden standardmäßig nicht in geforkten Repositorys ausgeführt. Du musst GitHub Actions auf der Registerkarte **Aktionen** des geforkten Repositorys aktivieren.

{% data reusables.actions.forked-secrets %} Das `GITHUB_TOKEN` verfügt in geforkten Repositorys über schreibgeschützte Berechtigungen. Weitere Informationen findest du unter [Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) („Authentifizieren mit dem GITHUB_TOKEN“).

#### Pull-Request-Ereignisse für geforkte Repositorys

Für Pull Requests von einem geforkten Repository an das Basisrepository sendet {% data variables.product.product_name %} die Ereignisse `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review` und `pull_request_target` an das Basisrepository. Im geforkten Repository treten keine Pull Request-Ereignisse ein.

{% ifversion fpt or ghec %} Wenn ein Mitwirkender zum ersten Mal einen Pull Request an ein öffentliches Repository sendet, muss ein Verwalter mit Schreibzugriff möglicherweise die Ausführung von Workflows im Pull Request genehmigen. Weitere Informationen findest du unter [Genehmigen von Workflowausführungen aus öffentlichen Forks](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks).
{% endif %}

{% note %}

**Hinweis:** Workflows werden nicht für private Basisrepositorys ausgeführt, wenn du einen Pull Request aus einem geforkten Repository heraus öffnest.

{% endnote %}

{% note %}

**Hinweis:** Workflows, die von {% data variables.product.prodname_dependabot %}-Pull Requests ausgelöst wurden, werden behandelt, als wenn sie aus einem geforkten Repository stammen, sodass auch für sie diese Einschränkungen gelten.

{% endnote %}
