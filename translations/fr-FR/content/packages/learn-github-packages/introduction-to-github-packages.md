---
title: Présentation de GitHub Packages
intro: '{% data variables.product.prodname_registry %} est un service d’hébergement de packages logiciels qui vous permet d’héberger vos packages logiciels en privé {% ifversion ghae %} pour des utilisateurs spécifiques ou en interne pour votre entreprise{% else %} ou publiquement{% endif %} et d’utiliser les packages logiciels comme dépendances dans vos projets.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introduction
ms.openlocfilehash: 1ad319ead16f10186b330f876ccaa83bc44bdbcd
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193024'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## À propos de {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} est une plateforme pour l’hébergement et la gestion des packages, y compris les conteneurs et d’autres dépendances. {% data variables.product.prodname_registry %} combine votre code source et vos packages à un emplacement unique pour intégrer la gestion des autorisations{% ifversion fpt or ghec %} et la facturation{% endif %}, et ainsi vous permettre de centraliser votre développement logiciel sur {% data variables.product.product_name %}.

Vous pouvez intégrer {% data variables.product.prodname_registry %} aux API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, à {% data variables.product.prodname_actions %} et aux webhooks pour créer un workflow DevOps de bout en bout qui inclut vos code, CI et solutions de déploiement.

{% data variables.product.prodname_registry %} offre différents registres de packages pour les gestionnaires de packages couramment utilisés, comme npm, RubyGems, Apache Maven, Gradle, Docker et NuGet. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}'s {% data variables.product.prodname_container_registry %} est optimisé pour les conteneurs et prend en charge les images Docker et OCI.{% endif %} Pour plus d’informations sur les différents registres de packages pris en charge par {% data variables.product.prodname_registry %}, consultez « [Utilisation d’un registre {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry) ».

{% ifversion fpt or ghec %}

![Diagramme montrant la prise en charge des packages pour Container Registry, RubyGems, npm, Apache Maven, NuGet et Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Diagramme montrant la prise en charge des packages pour le registre Docker, RubyGems, npm, Apache Maven, Gradle, NuGet et Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

Vous pouvez afficher le fichier LISEZMOI d’un package ainsi que les métadonnées telles que les licences, les statistiques de téléchargement, l’historique des versions, etc. sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Affichage de packages](/packages/manage-packages/viewing-packages) ».

{% ifversion ghes %}

Pour plus d’informations sur la configuration de {% data variables.product.prodname_registry %} sur {% data variables.product.product_name %}, consultez « [Bien démarrer avec {% data variables.product.prodname_registry %} pour votre entreprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise) ».

{% endif %}

### Vue d’ensemble des autorisations et de la visibilité de package

|                    |        |
|--------------------|--------------------|
| Autorisations        | {% ifversion packages-registries-v2 %}Les autorisations d’un package sont héritées du dépôt dans lequel le package est hébergé, ou peuvent être définies pour des comptes d’utilisateur ou d’organisation spécifiques. Certains registres prennent uniquement en charge les autorisations héritées d’un dépôt. Pour obtenir la liste de ces registres, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages) ». Pour plus d’informations sur l’accès aux packages, consultez « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility) ». {% else %}Chaque package hérite des autorisations du dépôt où le package est hébergé. <br> <br> Par exemple, toute personne disposant d’autorisations de lecture pour un dépôt peut installer un package en tant que dépendance dans un projet, et toute personne disposant d’autorisations d’écriture peut publier une nouvelle version de package.{% endif %} |
| Visibilité         | {% data reusables.package_registry.public-or-private-packages %} |

{% ifversion fpt or ghec %}
## À propos de la facturation pour {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages) ».

{% endif %}

## Clients et formats pris en charge
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %} utilise les commandes d’outils de package natif que vous connaissez déjà pour publier et installer des versions de package.
### Prise en charge des registres de packages

| Langage | Description | Format du package | Client de package |
| --- | --- | --- | --- |
| JavaScript | Gestionnaire de package de nœud | `package.json`  | `npm` |
| Ruby |  Gestionnaire de package RubyGems | `Gemfile` |  `gem` |
| Java | Outil de gestion de projets et d’inclusion Apache Maven | `pom.xml` |  `mvn` |
| Java | Outil d’automatisation de génération Gradle pour Java | `build.gradle` ou `build.gradle.kts`  | `gradle`  |
| .NET | Gestion des packages NuGet pour .NET | `nupkg`  |  `dotnet` CLI |
| N/A | Gestion des conteneurs Docker | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

**Remarque :** Lorsque vous activez le registre Docker, nous vous recommandons vivement d’activer également l’isolation des sous-domaines. Pour plus d’informations, consultez « [Activation de l’isolation de sous-domaine](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation) ».

{% endnote %}

{% endif %}

Pour plus d’informations sur la configuration de votre client de package à utiliser avec {% data variables.product.prodname_registry %}, consultez « [Utilisation d’un registre {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry) ».

{% ifversion fpt or ghec %} Pour plus d’informations sur Docker et {% data variables.product.prodname_container_registry %}, consultez « [Utilisation de Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) ».
{% endif %}
## Authentification auprès de {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## Gérer les packages

Vous pouvez supprimer un package dans l’interface utilisateur {% data variables.product.product_name %}{% ifversion fpt or ghec %} ou en utilisant l’API REST. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) » et « l’[API {% data variables.product.prodname_registry %}](/rest/reference/packages) ».{% else %}.{% endif %} {% data reusables.package_registry.about-graphql-support %}

Lorsque vous utilisez l’API GraphQL pour interroger et supprimer des packages privés, vous devez utiliser le même {% data variables.product.pat_v1 %} que celui que vous utilisez pour vous authentifier auprès de {% data variables.product.prodname_registry %}.

Pour plus d’informations, consultez {% ifversion ghes or ghae %}« [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) » et {% endif %}« [Formation d’appels avec GraphQL](/graphql/guides/forming-calls-with-graphql) ».

Vous pouvez configurer des webhooks pour vous abonner à des événements liés à un package, par exemple lorsqu’un package est publié ou mis à jour. Pour plus d’informations, consultez l’« [événement de webhook `package`](/webhooks/event-payloads/#package) ».

## Contact du support

{% ifversion fpt or ghec %} Si vous avez des commentaires ou des demandes de fonctionnalités pour {% data variables.product.prodname_registry %}, utilisez une [discussion {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/actions-and-packages).

Contactez le {% data variables.contact.github_support %} au sujet de {% data variables.product.prodname_registry %} à l’aide de [notre formulaire de contact](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si :

* Vous rencontrez un élément qui contredit la documentation
* Vous rencontrez des erreurs vagues ou peu claires
* Votre package publié contient des données sensibles, telles que des violations du RGPD, des clés API ou des informations d’identification personnelle

{% else %} Si vous avez besoin de support pour {% data variables.product.prodname_registry %}, contactez les administrateurs de votre site.

{% endif %}
