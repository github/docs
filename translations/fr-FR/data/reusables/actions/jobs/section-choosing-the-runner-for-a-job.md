---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120913"
---
Utilisez `jobs.<job_id>.runs-on` pour définir le type de machine sur laquelle le travail doit être exécuté. 

{% ifversion fpt or ghec %}- la machine de destination peut être un [exécuteur hébergé par {% data variables.product.prodname_dotcom %}](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group) ou un [exécuteur auto-hébergé](#choosing-self-hosted-runners).{% else %}
- La machine de destination peut être un [exécuteur auto-hébergé](#choosing-self-hosted-runners).{% endif %} {% ifversion target-runner-groups %}- Vous pouvez cibler des exécuteurs en fonction des étiquettes qui leur sont affectées et/ou de leur appartenance au groupe.{% else %}
- Vous pouvez cibler les exécuteurs en fonction des étiquettes qui leur sont affectées.{% endif %}
- Vous pouvez fournir `runs-on` sous la forme d’une chaîne unique ou d’un tableau de chaînes. 
- Si vous spécifiez un tableau de chaînes, votre workflow s’exécute sur n’importe quel exécuteur qui correspond à toutes les valeurs `runs-on` spécifiées. 
- Si vous souhaitez exécuter votre workflow sur plusieurs machines, utilisez [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy).

{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### Choix des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}

Si vous utilisez un exécuteur hébergé par {% data variables.product.prodname_dotcom %}, chaque travail s’exécute sur une nouvelle instance d’une image d’exécuteur spécifiée par `runs-on`.

Les types d’exécuteurs hébergés par {% data variables.product.prodname_dotcom %} disponibles sont les suivants :

{% data reusables.actions.supported-github-runners %}

#### Exemple : Spécification d’un système d’exploitation

```yaml
runs-on: ubuntu-latest
```

Pour plus d’informations, consultez « [À propos des exécuteurs hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners) ».
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Choix des exécuteurs auto-hébergés
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Exemple : Utilisation d’étiquettes pour la sélection des exécuteurs

```yaml
runs-on: [self-hosted, linux]
```

Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners) et « [Utilisation d’exécuteurs auto-hébergés dans un workflow](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow) ».

{% ifversion target-runner-groups %}

### Choix des exécuteurs dans un groupe

Vous pouvez utiliser `runs-on` pour cibler des groupes d’exécuteurs, afin que le travail s’exécute sur n’importe quel exécuteur membre de ce groupe. Pour un contrôle plus précis, vous pouvez également combiner des groupes d’exécuteurs avec des étiquettes.

Les groupes d’exécuteurs peuvent uniquement avoir des [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners) ou [des exécuteurs auto-hébergés](/actions/hosting-your-own-runners) comme.

#### Exemple : utilisation de groupes pour contrôler où les travaux sont exécutés

{% data reusables.actions.jobs.example-runs-on-groups %}

#### Exemple : combinaison de groupes et d’étiquettes

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}