---
title: À propos des autorisations pour les packages GitHub
intro: Découvrez comment gérer les autorisations pour vos packages.
product: '{% data reusables.gated-features.packages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About permissions
ms.openlocfilehash: 0159cee64d6faaeffe6257c9dc589f9fcda7a0ba
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193080'
---
{% ifversion packages-registries-v2 %} Les autorisations pour les packages peuvent être limitées à un utilisateur, à une organisation ou à un dépôt.

## Autorisations granulaires pour les packages limités à l’utilisateur/l’organisation

Les packages avec des autorisations précises sont limités à un compte d’utilisateur ou d’organisation personnel. Vous pouvez modifier le contrôle d’accès et la visibilité d’un package séparément d’un référentiel connecté (ou lié) à un package.

Les registres {% data variables.product.prodname_registry %} suivants prennent en charge les autorisations granulaires.

- {% data variables.product.prodname_container_registry %} {% ifversion packages-npm-v2 %}- Registre npm{% endif %} {% ifversion packages-nuget-v2 %}- Registre NuGet{% endif %}

{% endif %}

## Autorisations pour les packages {% ifversion packages-registries-v2 %}limités au dépôt {% endif %}

Un package {% ifversion packages-registries-v2 %} limité au dépôt {% endif %}hérite des autorisations et de la visibilité du dépôt auquel il appartient. Vous pouvez trouver un package limité à un référentiel en accédant à la page principale du référentiel et en cliquant sur le lien **Packages** à droite de la page. {% ifversion fpt or ghec %}Pour plus d’informations, consultez « [Connexion d’un référentiel à un package](/packages/learn-github-packages/connecting-a-repository-to-a-package) ». {% endif %}

{% ifversion packages-registries-v2 %} Les registres {% data variables.product.prodname_registry %} suivants prennent **uniquement** en charge les autorisations limitées au dépôt.

{% ifversion not fpt or ghec %}– Registre Docker (`docker.pkg.github.com`){% endif %} {% ifversion packages-npm-v2 %}{% else %}– Registre npm{% endif %}
- registre RubyGems
- registre Apache Maven
- Registre Gradle {% ifversion packages-nuget-v2 %}{% else %}- Registre NuGet{% endif %}

Pour {% ifversion ghes %}les {% data variables.product.prodname_container_registry %}{% else %}autres registres{% endif %}, vous pouvez choisir d’autoriser que les packages soient limités à un utilisateur ou à une organisation, ou liés à un dépôt. {% ifversion docker-ghcr-enterprise-migration %}Pour obtenir des informations sur la migration vers le {% data variables.product.prodname_container_registry %}, consultez « [Migration vers le {% data variables.product.prodname_container_registry %} à partir du registre Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry) ».{% endif %}

{% endif %}

{% ifversion packages-registries-v2 %}
## Visibilité et autorisations d’accès pour les images conteneur

{% data reusables.package_registry.visibility-and-access-permissions %}

Pour plus d’informations, consultez « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility) ».

{% endif %}

## À propos des étendues et des autorisations des registres de packages

{% data reusables.package_registry.packages-classic-pat-only %}

Pour utiliser ou gérer un package hébergé par un registre de packages, vous devez utiliser un {% data variables.product.pat_v1 %} avec l’étendue appropriée et votre compte personnel doit avoir les autorisations appropriées.

Par exemple :
-  Pour télécharger et installer des packages à partir d’un dépôt, votre {% data variables.product.pat_v1 %} doit avoir l’étendue `read:packages` et votre compte d’utilisateur doit avoir une autorisation en lecture.
- {% ifversion fpt or ghes or ghec %}Pour supprimer un package sur {% data variables.product.product_name %}, votre {% data variables.product.pat_v1 %} doit au moins avoir l’étendue `delete:packages` et `read:packages`. L’étendue `repo` est également requise pour les packages limités au référentiel. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».{% elsif ghae %}Pour supprimer une version spécifiée d’un package sur {% data variables.product.product_name %}, votre {% data variables.product.pat_v1 %} doit avoir l’étendue `delete:packages` et `repo`. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) ».{% endif %}

| Étendue | Description | Autorisation requise |
| --- | --- | --- |
|`read:packages`| Télécharger et installer des packages de {% data variables.product.prodname_registry %} | lire |
|`write:packages`| Charger et publier des packages sur {% data variables.product.prodname_registry %} | écrire |
| `delete:packages` | {% ifversion fpt or ghes or ghec %} Supprimer les packages de {% data variables.product.prodname_registry %} {% elsif ghae %} Supprimer les versions de packages spécifiées de {% data variables.product.prodname_registry %} {% endif %} | admin |
| `repo` | Charger et supprimer des packages (avec `write:packages` ou `delete:packages`) | écriture ou administrateur |

Lorsque vous créez un workflow {% data variables.product.prodname_actions %}, vous pouvez utiliser `GITHUB_TOKEN` pour publier et installer des packages dans {% data variables.product.prodname_registry %} sans avoir à stocker ni à gérer un {% data variables.product.pat_generic %}.

Pour plus d’informations, consultez :{% ifversion fpt or ghec %}
- « [Configuration du contrôle d’accès et de la visibilité d’un package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility) »{% endif %}
- « [Publication et installation d’un package avec {% data variables.product.prodname_actions %}](/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions) »
- « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token/) »
- « [Étendues disponibles](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes) »

## Gestion de l’accès aux packages dans les workflows {% data variables.product.prodname_actions %}

Pour garantir que vos workflows conservent l’accès à vos packages, assurez-vous que vous utilisez le jeton d’accès approprié à votre workflow et que vous avez activé l’accès {% data variables.product.prodname_actions %} à votre package.

Pour plus d’informations conceptuelles sur {% data variables.product.prodname_actions %} ou des exemples d’utilisation de packages dans les workflows, consultez « [Gestion des packages GitHub à l’aide de workflows GitHub Actions](/packages/managing-github-packages-using-github-actions-workflows) ».

### Jetons d’accès  

- Pour publier des packages associés au référentiel de workflow, utilisez `GITHUB_TOKEN`.
- Pour installer des packages associés à d’autres dépôts privés auxquels `GITHUB_TOKEN` ne peut pas accéder, utilisez un {% data variables.product.pat_v1 %}.

Pour plus d’informations sur `GITHUB_TOKEN` utilisé dans les workflows {% data variables.product.prodname_actions %}, consultez « [Authentification dans un workflow](/actions/reference/authentication-in-a-workflow#using-the-github_token-in-a-workflow) ».

{% ifversion fpt or ghec %}
### Accès à {% data variables.product.prodname_actions %} pour des images conteneurs

Pour vous assurer que vos workflows ont accès à votre image conteneur, vous devez activer l’accès {% data variables.product.prodname_actions %} aux référentiels sur lesquels votre workflow est exécuté. Vous trouverez ce paramètre dans la page des paramètres de votre package. Pour plus d’informations, consultez « [Garantir l’accès du workflow à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package) ».

{% endif %}
