---
title: Affichage d’insights pour votre organisation
intro: 'Les insights d’organisation fournissent des données sur l’activité, les contributions et les dépendances de votre organisation.'
redirect_from:
  - /articles/viewing-insights-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: View organization insights
permissions: Organization members can view organization insights.
ms.openlocfilehash: 5398d60f6a937c35e188dc97e44bf25b01b6d676
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128590'
---
## À propos des insights d’organisation

Vous pouvez utiliser des insights sur l’activité de votre organisation pour mieux comprendre comment ses membres utilisent {% data variables.product.product_name %} pour collaborer et travailler sur du code. Des insights sur les dépendances peuvent vous aider à suivre l’utilisation de l’open source par votre organisation, à rendre compte de cette utilisation, ainsi qu’à agir dessus.

{% note %}

**Remarque :** pour afficher les insights, votre organisation doit utiliser {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}

## Affichage des insights sur l’activité de l’organisation

{% note %}

**Remarque :** les insights sur l’activité de l’organisation sont actuellement en version bêta publique et sujets à modification.

{% endnote %}

Les insights sur l’activité de l’organisation vous permettent d’afficher des visualisations de données hebdomadaires, mensuelles et annuelles pour l’ensemble de votre organisation ou des dépôts spécifiques, notamment l’activité liée aux demandes de tirage et aux problèmes, les principales langues utilisées et des informations cumulatives sur les endroits où les membres de votre organisation passent leur temps.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Sous le nom de votre organisation, cliquez sur {% octicon "graph" aria-label="The bar graph icon" %} **Insights**.
  ![Cliquez sur l’onglet Insights de l’organisation](/assets/images/help/organizations/org-nav-insights-tab.png)
4. En option, dans l’angle supérieur droit de la page, vous pouvez afficher les données pour les dernières périodes de **1 semaine**, de **1 mois** ou de **1 an**.
  ![Choisir une période pour afficher des insights sur l’organisation](/assets/images/help/organizations/org-insights-time-period.png)
5. En option, dans l’angle supérieur droit de la page, vous pouvez afficher des données pour jusqu’à trois dépôts, puis cliquer sur **Appliquer**.
  ![Choisir des dépôts pour afficher des insights sur l’organisation](/assets/images/help/organizations/org-insights-repos.png)

## Affichage d’insights sur les dépendances de l’organisation

{% note %}

**Remarque :** vérifiez que vous avez activé le [Graphique de dépendance](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph). 

{% endnote %}

Les insights sur les dépendances vous permettent d’afficher les vulnérabilités, les licences et d’autres informations importantes pour les projets open source dont votre organisation dépend.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %}
3. Sous le nom de votre organisation, cliquez sur {% octicon "graph" aria-label="The bar graph icon" %} **Insights**.
  ![Onglet Insights dans la barre de navigation principale de l’organisation](/assets/images/help/organizations/org-nav-insights-tab.png)
4. Pour afficher les dépendances pour cette organisation, cliquez sur **Dépendances**.
  ![Onglet Dépendances sous la barre de navigation principale de l’organisation](/assets/images/help/organizations/org-insights-dependencies-tab.png)
5. Pour afficher les insights sur les dépendances pour toutes vos organisations {% data variables.product.prodname_ghe_cloud %}, cliquez sur **Mes organisations**.
  ![Bouton Mes organisations sous l’onglet Dépendances](/assets/images/help/organizations/org-insights-dependencies-my-orgs-button.png)
6. Vous pouvez cliquer sur les résultats dans les graphiques **Avertissements de sécurité ouverts** et **Licences** pour filtrer par état de vulnérabilité, licence ou une combinaison des deux.
  ![Graphiques Vulnérabilités de mes organisations et Licences](/assets/images/help/organizations/org-insights-dependencies-graphs.png)
7. Vous pouvez cliquer sur {% octicon "package" aria-label="The package icon" %}**dépendants** en regard de chaque vulnérabilité pour voir quels dépendants au sein de votre organisation utilisent chaque bibliothèque.
  ![Dépendants vulnérables de mes organisations](/assets/images/help/organizations/org-insights-dependencies-vulnerable-item.png)

## Pour aller plus loin
 - « [À propos des organisations](/organizations/collaborating-with-groups-in-organizations/about-organizations) »
 - « [Exploration des dépendances d’un dépôt](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository) »
 - « [Modification de la visibilité des insights sur les dépendances de votre organisation](/organizations/managing-organization-settings/changing-the-visibility-of-your-organizations-dependency-insights) »{% ifversion ghec %}
- « [Application de stratégies pour les insights sur les dépendances dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-dependency-insights-in-your-enterprise) »{% endif %}
