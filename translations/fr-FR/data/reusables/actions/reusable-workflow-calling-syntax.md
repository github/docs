---
ms.openlocfilehash: 9b1f61261d2e59fe30703a3bebfdaed7a25667e6
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086262"
---
* `{owner}/{repo}/.github/workflows/{filename}@{ref}`{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %} pour des workflows réutilisables dans des dépôts {% ifversion ghes or ghec or ghae %}or internal{% endif %} publics.
* `./.github/workflows/{filename}` pour des flux de travail réutilisables dans le même dépôt. {% endif %}

`{ref}` peut être un SHA, une étiquette de mise en production ou un nom de branche. Le SHA de validation est le plus sûr pour la stabilité et la sécurité. Pour plus d’informations, consultez « [Renforcement de la sécurité pour GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#reusing-third-party-workflows) ». {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6000 %}Si vous utilisez la deuxième option de syntaxe (sans `{owner}/{repo}` et `@{ref}`), le workflow appelé provient de la même validation que le workflow l’appelant.{% endif %}
