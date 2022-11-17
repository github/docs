---
ms.openlocfilehash: 1c0fc320bbd41add7105a53f1ed85a10c39fb021
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883496"
---
<a name="allowing-select-actions-to-run"></a>
<a name="allowing-specific-actions-to-run"></a>
### Autorisation de l’exécution des actions sélectionnées{% ifversion actions-workflow-policy %} et des workflows réutilisables{% endif %}

Si vous choisissez {% data reusables.actions.policy-label-for-select-actions-workflows %}, les actions locales{% ifversion actions-workflow-policy %} et les workflows réutilisables{% endif %} sont autorisés. Il existe d’autres options pour autoriser d’autres actions spécifiques{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %} :

- **Autoriser les actions créées par {% data variables.product.prodname_dotcom %} :** vous pouvez autoriser l’utilisation de toutes les actions créées par {% data variables.product.prodname_dotcom %} par les workflows. Les actions créées par {% data variables.product.prodname_dotcom %} se trouvent dans les organisations `actions` et `github`. Pour plus d’informations, consultez les organisations [`actions`](https://github.com/actions) et [`github`](https://github.com/github).
- **Autoriser les actions de la Place de marché par les créateurs vérifiés :** {% ifversion ghes or ghae %}Cette option est disponible si vous avez activé et configuré {% data variables.product.prodname_github_connect %} avec {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Activation de l’accès automatique aux actions GitHub.com à l’aide de GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) ».{% endif %} Vous pouvez autoriser toutes les actions {% data variables.product.prodname_marketplace %} créées par les créateurs vérifiés à utiliser par les workflows. Lorsque GitHub a vérifié le créateur de l’action en tant qu’organisation partenaire, le badge {% octicon "verified" aria-label="The verified badge" %} s’affiche en regard de l’action dans {% data variables.product.prodname_marketplace %}.
- **Autoriser les actions spécifiées{% ifversion actions-workflow-policy %} et les workflows réutilisables{% endif %} :** vous pouvez limiter les workflows à l’utilisation d’actions{% ifversion actions-workflow-policy %} et de workflows réutilisables{% endif %} dans des organisations et des dépôts spécifiques.

  Pour limiter l’accès à des étiquettes spécifiques ou valider des SHA d’une action{% ifversion actions-workflow-policy %} ou un workflow réutilisable{% endif %}, utilisez la même syntaxe que celle utilisée dans le workflow pour sélectionner l’action{% ifversion actions-workflow-policy %} ou un workflow réutilisable{% endif %}.
  
  - Pour une action, la syntaxe est `<OWNER>/<REPO>@<TAG OR SHA>`. Par exemple, utilisez `actions/javascript-action@v1.0.1` pour sélectionner une étiquette ou `actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89` pour sélectionner un SHA. Pour plus d’informations, consultez « [Recherche et personnalisation d’actions](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions) ».
  {%- ifversion actions-workflow-policy %}
  - Pour un workflow réutilisable, la syntaxe est `<OWNER>/<REPO>/<PATH>/<FILENAME>@<TAG OR SHA>`. Par exemple : `octo-org/another-repo/.github/workflows/workflow.yml@v1`. Pour plus d’informations, consultez « [Réutilisation de workflows](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow) ».
  {%- endif %}

  Vous pouvez utiliser le caractère générique `*`pour faire correspondre les modèles. Par exemple, pour autoriser toutes les actions{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %} dans les organisations qui commencent par `space-org`, vous pouvez spécifier `space-org*/*`. Pour autoriser toutes les actions{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %} dans les dépôts qui commencent par octocat, vous pouvez utiliser `*/octocat**@*`. Pour plus d’informations sur l’utilisation du caractère générique `*`, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) ».

  {% ifversion fpt or ghec %} {% note %}

  **Remarque :** L’option **Autoriser les actions spécifiées{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %}** est disponible uniquement dans les dépôts publics avec les plans {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_free_team %} pour les organisations ou {% data variables.product.prodname_team %}.

  {% endnote %} {% endif %}

Cette procédure montre comment ajouter des actions spécifiques{% ifversion actions-workflow-policy %} et workflows réutilisables{% endif %} à la liste d’autorisations.
