---
title: Exploration des dépendances d’un dépôt
intro: 'Vous pouvez utiliser le graphique de dépendances pour afficher les packages dont dépend votre projet{% ifversion fpt or ghec %} et les référentiels qui dépendent de celui-ci{% endif %}. En outre, vous pouvez voir l’ensemble des vulnérabilités détectées dans ses dépendances.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882730'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## Affichage du graphe de dépendances

Le graphe de dépendances affiche les dépendances{% ifversion fpt or ghec %} et les éléments dépendants{% endif %} de votre dépôt. Pour plus d’informations sur la détection des dépendances et sur les écosystèmes pris en charge, consultez « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. Si vous le souhaitez, sous « Graphe de dépendances », cliquez sur **Éléments dépendants**.
![Onglet Éléments dépendants dans la page Graphe de dépendances](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %} Les propriétaires d’entreprise peuvent configurer le graphe de dépendances au niveau de l’entreprise. Pour plus d’informations, consultez « [Activation du graphe de dépendances pour votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise) ».
{% endif %}

### Affichage des dépendances

{% ifversion fpt or ghec %} Les dépendances sont regroupées par écosystème. Vous pouvez développer une dépendance pour afficher ses dépendances.  Les dépendances sur les dépôts privés, les packages privés ou les fichiers non reconnus sont affichées en texte brut. Si le gestionnaire de package pour la dépendance se trouve dans un dépôt public, {% data variables.product.product_name %} affiche un lien vers ce dépôt.

{% ifversion dependency-submission-api %} Les dépendances envoyées à un projet à l’aide de l’API de soumission de dépendances (bêta), bien qu’elles soient également regroupées par écosystème, sont affichées séparément des dépendances identifiées via le manifeste ou les fichiers de verrouillage dans le référentiel. Ces dépendances envoyées apparaissent dans le graphique de dépendances en tant que « Dépendances d’instantanés », car elles sont envoyées en tant qu’instantané, ou groupe, de dépendances. Pour plus d’informations sur l’utilisation de l’API de soumission de dépendances, consultez « [Utilisation de l’API de soumission de dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api) ».
{% endif %}

Si des vulnérabilités ont été détectées dans le dépôt, celles-ci apparaissent en haut de l’affichage pour les utilisateurs ayant accès aux {% data variables.product.prodname_dependabot_alerts %}.

![Graphe de dépendances](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %} Toutes les dépendances directes et indirectes spécifiées dans les fichiers manifeste ou de verrouillage du dépôt sont listées, regroupées par écosystème. Si des vulnérabilités ont été détectées dans le dépôt, celles-ci apparaissent en haut de l’affichage pour les utilisateurs ayant accès aux {% data variables.product.prodname_dependabot_alerts %}.

![Graphe de dépendances](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Remarque :** {% data variables.product.product_name %} ne remplit pas l’affichage **Éléments dépendants**.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### Affichage des éléments dépendants

Pour les dépôts publics, l’affichage des éléments dépendants montre comment le dépôt est utilisé par les autres dépôts. Pour afficher uniquement les dépôts qui contiennent une bibliothèque dans un gestionnaire de package, cliquez sur **<nombre> packages** juste au-dessus de la liste des dépôts dépendants. Les nombres d’éléments dépendants sont approximatifs et peuvent ne pas toujours correspondre aux dépendants listés.

![Graphe des éléments dépendants](/assets/images/help/graphs/dependents_graph.png)

## Activation et désactivation du graphe de dépendances pour un dépôt privé

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Modification du package « Utilisé par »

Vous remarquerez peut-être que certains dépôts ont une section « Utilisé par » dans la barre latérale de l’onglet **Code**. Votre dépôt a une section « Utilisé par » si :
  * Le graphe de dépendances est activé pour le dépôt (consultez la section ci-dessus pour plus d’informations).
  * Votre dépôt contient un package publié sur un [écosystème de packages pris en charge](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).
  * Dans l’écosystème, votre package a un lien vers un dépôt _public_ où la source est stockée.

La section « Utilisé par » indique le nombre de références publiques au package qui ont été trouvées et affiche les avatars de certains des propriétaires des projets dépendants.

![Section « Utilisé par » dans la barre latérale](/assets/images/help/repository/used-by-section.png)

Si vous cliquez sur un élément de cette section, vous accédez à l’onglet **Éléments dépendants** du graphe de dépendances.

La section « Utilisé par » représente un package unique du dépôt. Si vous disposez d’autorisations d’administrateur sur un dépôt qui contient plusieurs packages, vous pouvez choisir quel package est représenté par la section « Utilisé par ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Sous « Sécurité et analyse du code », cliquez sur le menu déroulant de la section « Utilisé par compteur » et choisissez un package.
  ![Choisir un package « Utilisé par »](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## Résolution des problèmes liés au graphe de dépendances

Si votre graphe de dépendances est vide, il peut y avoir un problème avec le fichier contenant vos dépendances. Vérifiez que le fichier est correctement mis en forme pour son type.

{% ifversion fpt or ghec %} Si le fichier est correctement mis en forme, vérifiez sa taille. Le graphe de dépendances ignore les fichiers manifeste et de verrouillage individuels qui dépassent 1,5 Mo, sauf si vous êtes utilisateur {% data variables.product.prodname_enterprise %}. Il traite par défaut jusqu’à 20 fichiers manifestes ou de verrouillage par dépôt. Vous pouvez donc diviser les dépendances en fichiers plus petits dans les sous-répertoires du dépôt.{% endif %}

Si un fichier manifeste ou de verrouillage n’est pas traité, ses dépendances sont omises dans le graphique de dépendances et il est impossible d’y vérifier la présence de dépendances non sécurisées.

## Pour aller plus loin

- « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) »
- « [Affichage et mise à jour des {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts) »{% ifversion ghec %}
- « [Affichage des insights pour votre organisation](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization) »{% endif %}{% ifversion fpt or ghec %}
- « [Comprendre comment {% data variables.product.prodname_dotcom %} utilise et protège vos données](/get-started/privacy-on-github) » {% endif %}
