---
title: Contrôle de l’accès aux exécuteurs plus grands
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: 'Vous pouvez utiliser des stratégies pour limiter l’accès aux {% data variables.actions.hosted_runner %} qui ont été ajoutés à une organisation ou à une entreprise.'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189904'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos des groupes d’exécuteurs

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners).{% endif %}

### Groupe par défaut pour les {% data variables.actions.hosted_runner %}

Les organisations et les entreprises ayant accès aux {% data variables.actions.hosted_runner %} reçoivent automatiquement un groupe d’exécuteurs par défaut appelé « Exécuteurs plus grands par défaut » qui comprend 4 exécuteurs de tailles variables. Les exécuteurs de ce groupe sont préconfigurés et prêts à être utilisés tout de suite. Pour utiliser les exécuteurs de ce groupe, vous devez ajouter l’étiquette correspondant à l’exécuteur de votre choix à votre fichier de workflow. Consultez le tableau ci-dessous pour les étiquettes. Pour plus d’informations sur l’utilisation des étiquettes, consultez « [Exécution de travaux sur votre exécuteur](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner) ».


#### Exécuteurs par défaut

|Description | Étiquette | Image |
| ------- | ------- | ------ |
| Exécuteur Ubuntu 4 cœurs | `ubuntu-latest-4-cores` | Ubuntu - Le plus récent |
| Exécuteur Ubuntu 8 cœurs | `ubuntu-latest-8-cores` | Ubuntu - Le plus récent |
| Exécuteur Ubuntu 16 cœurs | `ubuntu-latest-16-cores` | Ubuntu - Le plus récent |
| Exécuteur Windows 8 cœurs | `windows-latest-8-cores` | Windows Server - Le plus récent |

Le groupe d’{% data variables.actions.hosted_runner %} par défaut est créé au niveau de l’entité de facturation. Si votre organisation fait partie d’un compte d’entreprise, le groupe est géré au niveau de l’entreprise. Si votre organisation ne relève pas d’une entreprise, le groupe est géré au niveau de l’organisation. 

Vous n’êtes pas facturé pour ces exécuteurs tant que vous ne les utilisez pas dans vos workflows. Une fois ces exécuteurs utilisés, la facturation fonctionne comme d’habitude. Pour plus d’informations sur la facturation, consultez « [Utilisation des {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing) ».

L’accès par défaut à un groupe d’{% data variables.actions.hosted_runner %} au niveau de l’entreprise est défini pour être partagé automatiquement avec toutes les organisations de l’entreprise, mais pas avec tous les dépôts. Les administrateurs de l’organisation doivent partager le groupe d’{% data variables.actions.hosted_runner %} par défaut avec chaque dépôt séparément. Pour les groupes d’{% data variables.actions.hosted_runner %} au niveau de l’organisation, l’accès par défaut est défini pour partager automatiquement le groupe avec tous les dépôts. Pour plus d’informations sur le changement des stratégies d’accès et sur l’endroit où voir le groupe d’{% data variables.actions.hosted_runner %} par défaut, consultez « [Modification de la stratégie d’accès d’un groupe d’exécuteurs](#changing-the-access-policy-of-a-runner-group) ».

{% ifversion ghec or ghes or ghae %}

## Création d’un groupe d’exécuteurs pour une organisation

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Création d’un groupe d’exécuteurs pour une entreprise

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## Modification de la stratégie d’accès d’un groupe d’exécuteurs

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Modification du nom d’un groupe d’exécuteurs

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Déplacement d’un exécuteur vers un groupe

{% data reusables.actions.moving-a-runner-to-a-group %}

## Suppression d’un groupe d’exécuteurs

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
