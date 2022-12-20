---
title: Utilisation des exécuteurs plus grands
shortTitle: Larger runners
intro: "{% data variables.product.prodname_dotcom %} propose des exécuteurs disposant d’une plus grande mémoire\_RAM et d’une plus grande puissance de processeur."
miniTocMaxHeadingLevel: 3
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
ms.openlocfilehash: bbae77f1f027dd4a238de6ba636eb3cb842790b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106434'
---
## Présentation des {% data variables.actions.hosted_runner %}

En plus des [exécuteurs standard hébergés par {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources), {% data variables.product.prodname_dotcom %} propose également aux utilisateurs des plans {% data variables.product.prodname_team %} et {% data variables.product.prodname_ghe_cloud %} une gamme de {% data variables.actions.hosted_runner %} disposant d’une plus grande mémoire RAM et de processeurs plus puissants. Ces exécuteurs sont hébergés par {% data variables.product.prodname_dotcom %}, et l’application exécuteur ainsi que d’autres outils y sont préinstallés.

Quand des {% data variables.actions.hosted_runner %} sont activés pour votre organisation, un groupe d’exécuteurs par défaut est automatiquement créé pour vous avec un ensemble de quatre {% data variables.actions.hosted_runner %} préconfigurés.

Lorsque vous ajoutez un {% data variables.actions.hosted_runner %} à une organisation, vous définissez un type d’ordinateur à partir d’une sélection de spécifications matérielles et d’images de systèmes d’exploitation. {% data variables.product.prodname_dotcom %} crée ensuite plusieurs instances de cet exécuteur qui font l’objet d’un scale-up ou d’un scale-down afin de répondre aux besoins de votre organisation, en fonction des limites de mise à l’échelle automatique que vous définissez.

## Specs des ordinateurs pour les {% data variables.actions.hosted_runner %} 

|Taille (vcpu) | Mémoire (Go) | Stockage (SSD) |
| ------------- | ------------- | ------------- |
|4 cœurs | 16 RAM  | 150 Go|
| 8 cœurs | 32 RAM | 300 Go |
|16 cœurs| 64 RAM | 600 Go |
|32 cœurs| 128 RAM| 1200 Go|
|64 cœurs| 256 RAM | 2 040 Go|

## Présentation de l’architecture des {% data variables.actions.hosted_runner %}

Les {% data variables.actions.hosted_runner %} sont gérés au niveau de l’organisation, où ils sont organisés en groupes pouvant contenir plusieurs instances d’exécuteur. Ils peuvent également être créés au niveau de l’entreprise et partagés avec les organisations de la hiérarchie. Une fois que vous avez créé un groupe, vous pouvez y ajouter un exécuteur et mettre à jour vos workflows afin de cibler l’étiquette affectée au {% data variables.actions.hosted_runner %}. Vous pouvez également contrôler quels dépôts sont autorisés à envoyer des travaux au groupe à des fins de traitement. Pour plus d’informations sur les groupes, consultez « [Contrôle de l’accès aux {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners) ».

Dans le schéma suivant, une classe d’exécuteur hébergé nommée `ubuntu-20.04-16core` a été définie avec une configuration personnalisée concernant le matériel et le système d’exploitation.

![Schéma détaillant un {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner.png)

1. Les instances de cet exécuteur sont automatiquement créées et ajoutées à un groupe appelé `ubuntu-20.04-16core`. 
2. Les exécuteurs ont reçu l’étiquette `ubuntu-20.04-16core`. 
3. Les travaux de workflow utilisent l’étiquette `ubuntu-20.04-16core` dans leur clé `runs-on` pour indiquer le type d’exécuteur dont ils ont besoin pour s’exécuter.
4. {% data variables.product.prodname_actions %} vérifie le groupe d’exécuteurs pour voir si votre dépôt est autorisé à envoyer des travaux à l’exécuteur.
5. Le travail s’exécute sur la prochaine instance disponible de l’exécuteur `ubuntu-20.04-16core`.

## Mise à l’échelle automatique des {% data variables.actions.hosted_runner %}

Vos {% data variables.actions.hosted_runner %} peuvent être configurés pour être mis à l’échelle automatiquement en fonction de vos besoins. Lorsque des travaux sont envoyés en vue de leur traitement, d’autres ordinateurs peuvent être automatiquement provisionnés pour exécuter les travaux, jusqu’à atteindre la limite maximale prédéfinie. Chaque machine ne gère qu’un seul travail à la fois. Ces paramètres déterminent donc le nombre de travaux qui peuvent être exécutés simultanément. 

Pendant le processus de déploiement de l’exécuteur, vous pouvez configurer l’option _Max_, qui vous permet de contrôler vos coûts en définissant le nombre maximal de machines créées dans cet ensemble. Une valeur élevée peut vous permettre d’éviter que les workflows ne soient bloqués en raison du parallélisme.

## Réseaux des {% data variables.actions.hosted_runner %}

Par défaut, les {% data variables.actions.hosted_runner %} reçoivent une adresse IP dynamique qui change à chaque exécution du travail. Les clients {% data variables.product.prodname_ghe_cloud %} ont la possibilité de configurer leurs {% data variables.actions.hosted_runner %} pour recevoir une adresse IP statique provenant du pool d’adresses IP de {% data variables.product.prodname_dotcom %}. Lorsque cette option est activée, les instances du {% data variables.actions.hosted_runner %} reçoivent une adresse provenant d’une plage qui est propre à l’exécuteur, ce qui vous permet d’utiliser cette plage pour configurer une liste d’autorisation de pare-feu. {% ifversion fpt %} Vous pouvez utiliser jusqu’à 10 plages d’adresses IP statiques au total sur tous vos {% data variables.actions.hosted_runner %}{% endif %}{% ifversion ghec %}Vous pouvez utiliser jusqu’à 10 plages d’adresses IP statiques pour les {% data variables.actions.hosted_runner %} créées au niveau de l’entreprise. De plus, vous pouvez utiliser jusqu’à 10 plages d’adresses IP statiques pour les {% data variables.actions.hosted_runner %} créés au niveau de l’organisation, pour chaque organisation de votre entreprise{% endif %}.

{% note %}

**Remarque** : Si les exécuteurs ne sont pas utilisés pendant plus de 30 jours, leurs plages d’adresses IP sont automatiquement supprimées sans récupération possible.

{% endnote %}

## Planification des {% data variables.actions.hosted_runner %}

### Créer un groupe d’exécuteurs

Les groupes d’exécuteurs sont utilisés pour collecter des ensembles de machines virtuelles et créer une limite de sécurité autour d’elles. Vous pouvez ensuite décider quelles organisations ou dépôts sont autorisés à exécuter des travaux sur ces ensembles de machines. Pendant le processus de déploiement du {% data variables.actions.hosted_runner %}, l’exécuteur peut être ajouté à un groupe existant. Sinon, il rejoint un groupe par défaut. Vous pouvez créer un groupe en suivant les étapes décrites dans « [Contrôle de l’accès aux {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners) ».

### Présentation de la facturation

{% note %}

**Remarque** : Les {% data variables.actions.hosted_runner %} ne se servent pas des minutes de droits d’utilisation comprises et ne sont pas gratuits pour les dépôts publics.

{% endnote %}

Les {% data variables.actions.hosted_runner %} sont facturés différemment des exécuteurs standard hébergés dans {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Tarifs à la minute](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates) ».

## Ajout d’un {% data variables.actions.hosted_runner %} à une entreprise

Vous pouvez ajouter des {% data variables.actions.hosted_runner %} à une entreprise, où ils pourront être affectés à plusieurs organisations. Les administrateurs des organisations peuvent ensuite contrôler quels dépôts peuvent utiliser les exécuteurs. Pour ajouter un {% data variables.actions.hosted_runner %} à une entreprise, vous devez être propriétaire de l’entreprise.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.add-hosted-runner %}
1. Pour permettre aux organisations d’accéder à vos {% data variables.actions.hosted_runner %}, spécifiez la liste des organisations qui peuvent les utiliser. Pour plus d’informations, consultez « [Gestion de l’accès à vos exécuteurs](#managing-access-to-your-runners) ».

## Ajout d’un {% data variables.actions.hosted_runner %} à une organisation

Vous pouvez ajouter un {% data variables.actions.hosted_runner %} à une organisation. Les administrateurs de l’organisation pourront contrôler quels dépôts peuvent l’utiliser. 

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.add-hosted-runner %}
1. Pour autoriser les dépôts à accéder à vos {% data variables.actions.hosted_runner %}, ajoutez-les à la liste des dépôts qui peuvent les utiliser. Pour plus d’informations, consultez « [Gestion de l’accès à vos exécuteurs](#managing-access-to-your-runners) ».

## Exécution de travaux sur votre exécuteur

Une fois que votre type d’exécuteur a été défini, vous pouvez mettre à jour vos fichiers YAML de workflow pour envoyer des travaux aux instances de l’exécuteur qui viennent d’être créées afin de les traiter. Dans cet exemple, un groupe d’exécuteurs est rempli avec des exécuteurs Ubuntu 16 cœurs, qui ont reçu l’étiquette `ubuntu-20.04-16core`. Si vous avez un exécuteur qui correspond à cette étiquette, le travail `check-bats-version` utilise la clé `runs-on` pour cibler cet exécuteur chaque fois que le travail est exécuté :

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

Pour savoir quels exécuteurs sont activés pour votre dépôt et votre organisation, vous devez contacter l’administrateur de votre organisation. L’administrateur de votre organisation peut créer des exécuteurs et des groupes d’exécuteurs, ainsi que configurer des autorisations pour spécifier quels dépôts peuvent accéder à un groupe d’exécuteurs.

## Gestion de l’accès aux exécuteurs

{% note %}

**Remarque** : Avant que vos workflows ne puissent envoyer des travaux aux {% data variables.actions.hosted_runner %}, vous devez d’abord configurer des autorisations pour le groupe d’exécuteurs. Pour plus d’informations, consultez les sections suivantes.

{% endnote %}

Les groupes d’exécuteurs sont utilisés pour contrôler les dépôts qui peuvent exécuter des travaux sur vos {% data variables.actions.hosted_runner %}. Vous devez accorder l’accès au groupe à partir de chaque niveau de la hiérarchie de gestion, selon l’emplacement où vous avez défini le {% data variables.actions.hosted_runner %} :

- **Exécuteurs au niveau de l’entreprise** : configurez le groupe d’exécuteurs pour accorder l’accès à toutes les organisations nécessaires. En outre, pour chaque organisation, vous devez configurer le groupe afin de spécifier les dépôts qui sont autorisés à y accéder.
- **Exécuteurs au niveau de l’organisation** : configurez le groupe d’exécuteurs en spécifiant les dépôts qui sont autorisés à y accéder.

Par exemple, le schéma suivant comporte un groupe d’exécuteurs nommé `grp-ubuntu-20.04-16core` au niveau de l’entreprise. Avant que le dépôt nommé `octo-repo` puisse utiliser les exécuteurs du groupe, vous devez d’abord configurer le groupe au niveau de l’entreprise pour autoriser l’accès à partir de l’organisation `octo-org`. Vous devez ensuite configurer le groupe au niveau de l’organisation pour autoriser l’accès à partir de `octo-repo` :

![Schéma détaillant des groupes de {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner-mgmt.png)

### Autoriser les dépôts à accéder à un groupe d’exécuteurs

Cette procédure montre comment configurer des autorisations de groupe aux niveaux de l’entreprise et de l’organisation :

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - Pour les groupes d’exécuteurs d’une entreprise, sous **Accès des organisations**, modifiez la liste des organisations qui peuvent accéder au groupe d’exécuteurs.
  - Pour les groupes d’exécuteurs d’une organisation, sous **Accès au dépôt**, modifiez les dépôts qui peuvent accéder au groupe d’exécuteurs.

{% warning %}

**Avertissement** :

{% data reusables.actions.hosted-runner-security %}

Pour plus d’informations, consultez « [Contrôle de l’accès aux {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners) ».

{% endwarning %}
