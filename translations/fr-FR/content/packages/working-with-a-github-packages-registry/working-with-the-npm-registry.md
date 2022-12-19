---
title: Utilisation du registre npm
intro: 'Vous pouvez configurer npm pour qu’il publie des packages dans {% data variables.product.prodname_registry %} et utilise les packages stockés dans {% data variables.product.prodname_registry %} comme dépendances dans un projet npm.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-npm-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages
  - /packages/guides/configuring-npm-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: npm registry
ms.openlocfilehash: 11b1ab58cd57c6cecdeb2366b83696166cdc6245
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193128'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

{% ifversion packages-npm-v2 %} {% else %}
## Limites pour les versions de npm publiées

Si vous publiez plus de 1 000 versions d’un package npm sur {% data variables.product.prodname_registry %}, vous pourriez constater des problèmes de performances et des dépassements de délai d’expiration lors de l’utilisation.

À l’avenir, pour améliorer les performances du service, vous ne pourrez pas publier plus de 1 000 versions d’un package sur {% data variables.product.prodname_dotcom %}. Toutes les versions publiées avant d’atteindre cette limite seront toujours lisibles.

Si vous atteignez cette limite, envisagez de supprimer des versions du package ou contactez le support technique pour obtenir de l’aide. Une fois cette limite appliquée, notre documentation sera mise à jour avec un moyen de contourner cette limite. Pour plus d’informations, consultez « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) » ou « [Contact du support](/packages/learn-github-packages/about-github-packages#contacting-support) ».
{% endif %}

## Authentification auprès de {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-npm-v2 %} {% data reusables.package_registry.authenticate_with_pat_for_v2_registry %}

Vous pouvez également choisir d’accorder des autorisations d’accès aux packages indépendamment pour {% data variables.product.prodname_codespaces %} et {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Garantie d’accès des codespaces à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) » et « [Garantie de l’accès du workflow à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package) ».
{% endif %}

### Authentification avec un {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Vous pouvez vous authentifier auprès de {% data variables.product.prodname_registry %} avec npm en modifiant votre fichier *~/.npmrc* spécifique à l’utilisateur pour y inclure votre {% data variables.product.pat_v1 %}, ou en vous connectant à npm sur la ligne de commande en utilisant votre nom d’utilisateur et {% data variables.product.pat_generic %}.

Pour vous authentifier en ajoutant votre {% data variables.product.pat_v1 %} à votre fichier *~/.npmrc* , modifiez le fichier *~/.npmrc* pour votre projet afin d’y inclure la ligne suivante, en remplaçant {% ifversion ghes or ghae %}*HOSTNAME* par le nom d’hôte de {% data variables.location.product_location %} et {% endif %}*TOKEN* par votre {% data variables.product.pat_generic %}. Créez un fichier *~/.npmrc* s’il n’en existe pas.

{% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}

```shell
//{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}/:_authToken=TOKEN
```

{% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :

```shell
//HOSTNAME/_registry/npm/:_authToken=TOKEN
```
{% endif %}

Pour vous authentifier en vous connectant à npm, utilisez la commande `npm login`, en remplaçant *USERNAME* par votre nom d’utilisateur{% data variables.product.prodname_dotcom %}, *TOKEN* par votre {% data variables.product.pat_v1 %} et *PUBLIC-EMAIL-ADDRESS* par votre adresse e-mail.

Si {% data variables.product.prodname_registry %} n’est pas votre registre de packages par défaut pour l’utilisation de npm et que vous voulez utiliser la commande `npm audit`, nous vous recommandons d’utiliser l’indicateur `--scope` avec le propriétaire du package quand vous vous authentifiez auprès de {% data variables.product.prodname_registry %}.

{% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}

```shell
$ npm login --scope=@OWNER --registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

{% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :

```shell
$ npm login --scope=@OWNER --registry=https://HOSTNAME/_registry/npm/
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
{% endif %}

## Publication d’un package

{% note %}

**Remarque :** Les noms et les étendues des packages doivent utiliser seulement des lettres minuscules.

{% endnote %}

{% ifversion packages-npm-v2 %} Le registre {% data variables.product.prodname_registry %} stocke les packages npm au sein de votre compte d’organisation ou personnel, et vous permet d’associer un package à un dépôt. Vous pouvez choisir d’hériter des autorisations d’un dépôt ou de définir des autorisations granulaires indépendamment d’un dépôt.

{% data reusables.package_registry.publishing-user-scoped-packages %} {% endif %}

Par défaut, {% data variables.product.prodname_registry %} publie un package sur le dépôt {% data variables.product.prodname_dotcom %} que vous spécifiez dans le champ name du fichier *package.json*. Par exemple, vous allez publier un package nommé `@my-org/test` sur le dépôt {% data variables.product.prodname_dotcom %} `my-org/test`. Si vous exécutez [npm v8.5.3](https://github.com/npm/cli/releases/tag/v8.5.3) ou une version ultérieure, vous pouvez ajouter un résumé de la liste des packages en incluant un fichier *README.md* dans le répertoire de votre package. Pour plus d’informations, consultez « [Utilisation de package.json](https://docs.npmjs.com/getting-started/using-a-package.json) » et « [Comment créer des modules Node.js](https://docs.npmjs.com/getting-started/creating-node-modules) » dans la documentation npm.

Vous pouvez publier plusieurs packages sur le même dépôt {% data variables.product.prodname_dotcom %} en incluant un champ `URL` dans le fichier *package.json*. Pour plus d’informations, consultez « [Publication de plusieurs packages sur le même dépôt](#publishing-multiple-packages-to-the-same-repository) ».

Vous pouvez configurer le mappage d’étendue pour votre projet en utilisant un fichier *.npmrc* local dans le projet ou en utilisant l’option `publishConfig` dans le fichier *package.json*. {% data variables.product.prodname_registry %} prend en charge seulement les packages npm délimités. Les packages délimités ont des noms au format `@owner/name`. Les packages délimités commencent toujours par un symbole `@`. Il peut être nécessaire de mettre à jour le nom dans votre *package.json* pour utiliser le nom délimité. Par exemple : `"name": "@codertocat/hello-world-npm"`.

{% data reusables.package_registry.viewing-packages %}

### Publication d’un package en utilisant un fichier *.npmrc* local

Vous pouvez utiliser un fichier *.npmrc* pour configurer le mappage d’étendue pour votre projet. Dans le fichier *.npmrc*, utilisez l’URL et le propriétaire du compte {% data variables.product.prodname_registry %} pour permettre à {% data variables.product.prodname_registry %} de savoir où router les demandes de package. L’utilisation d’un fichier *.npmrc* empêche d’autres développeurs de publier accidentellement le package sur npmjs.org au lieu de le faire sur {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Vérifiez le nom de votre package dans le fichier *package.json* de votre projet. Le champ `name` doit contenir l’étendue et le nom du package. Par exemple, si votre package est appelé « test » et que vous publiez sur l’organisation {% data variables.product.prodname_dotcom %} « My-org », le champ `name` de votre fichier *package.json* doit être `@my-org/test`.
{% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

### Publication d’un package en utilisant `publishConfig` dans le fichier *package.json*

Vous pouvez utiliser l’élément `publishConfig` dans le fichier *package.json* pour spécifier le registre où vous voulez que le package soit publié. Pour plus d’informations, consultez « [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig) » dans la documentation npm.

1. Éditez le fichier *package.json* pour votre package et incluez-y une entrée `publishConfig`.
  {% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}
  ```shell
  "publishConfig": {
    "registry": "https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME/{% endif %}"
  },
  ```
  {% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :
   ```shell
   "publishConfig": {
     "registry": "https://HOSTNAME/_registry/npm/"
   },
  ```
  {% endif %} {% data reusables.package_registry.verify_repository_field %} {% data reusables.package_registry.publish_package %}

## Publication de plusieurs packages sur le même dépôt

Pour publier plusieurs packages sur le même dépôt, vous pouvez inclure l’URL du dépôt {% data variables.product.prodname_dotcom %} dans le champ `repository` du fichier *package.json* pour chaque package.

Pour garantir que l’URL du dépôt est correcte, remplacez REPOSITORY par le nom du dépôt contenant le package que vous voulez publier, et OWNER par le nom de l’utilisateur ou du compte d’organisation sur {% data variables.product.prodname_dotcom %} qui est propriétaire du dépôt.

{% data variables.product.prodname_registry %} établira une correspondance avec le dépôt en fonction de l’URL au lieu de se baser sur le nom du package.

```shell
"repository":"https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY",
```

## Installation d’un package

Vous pouvez installer des packages depuis {% data variables.product.prodname_registry %} en ajoutant les packages en tant que dépendances dans le fichier *package.json* pour votre projet. Pour plus d’informations sur l’utilisation d’un fichier *package.json* dans votre projet, consultez « [Utilisation de package.json](https://docs.npmjs.com/getting-started/using-a-package.json) » dans la documentation npm.

Par défaut, vous pouvez ajouter des packages provenant d’une seule organisation. Pour plus d’informations, consultez « [Installation de packages provenant d’autres organisations](#installing-packages-from-other-organizations) ».

Vous devez aussi ajouter le fichier *.npmrc* à votre projet afin que toutes les demandes d’installation de packages {% ifversion ghae %}soient routées vers{% else %}passent par{% endif %} {% data variables.product.prodname_registry %}. {% ifversion fpt or ghes or ghec %}Quand vous routez toutes les demandes de package via {% data variables.product.prodname_registry %}, vous pouvez utiliser à la fois des packages délimités et des packages non délimités provenant de *npmjs.org*. Pour plus d’informations, consultez « [npm-scope](https://docs.npmjs.com/misc/scope) » dans la documentation npm.{% endif %}

{% ifversion ghae %} Par défaut, vous pouvez utiliser seulement des packages npm hébergés sur votre entreprise, et vous ne pouvez pas utiliser de packages non délimités. Pour plus d’informations sur la délimitation de l’étendue des packages, consultez « [npm-scope](https://docs.npmjs.com/misc/scope) » dans la documentation npm. Si nécessaire, le support de {% data variables.product.prodname_dotcom %} peut activer un proxy en amont sur npmjs.org. Une fois qu’un proxy en amont est activé, si un package demandé n’est pas trouvé sur votre entreprise, {% data variables.product.prodname_registry %} effectue une demande de proxy à npmjs.org.  
{% endif %}

{% data reusables.package_registry.authenticate-step %} {% data reusables.package_registry.create-npmrc-owner-step %} {% data reusables.package_registry.add-npmrc-to-repo-step %}
1. Configurez *package.json* dans votre projet afin d’utiliser le package que vous installez. Pour ajouter vos dépendances de package au fichier *package.json* pour {% data variables.product.prodname_registry %}, spécifiez le nom du package entièrement délimité, comme `@my-org/server`. Pour les packages provenant de *npmjs.com*, spécifiez le nom complet, comme `@babel/core` ou `@lodash`. Remplacez `<organization_name>/<package_name>` par votre dépendance de package.

  ```json
  {
    "name": "@my-org/server",
    "version": "1.0.0",
    "description": "Server app that uses the <organization_name>/<package_name> package",
    "main": "index.js",
    "author": "",
    "license": "MIT",
    "dependencies": {
      "<organization_name>/<package_name>": "1.0.0"
    }
  }
  ```
5. Installez le package.

  ```shell
  $ npm install
  ```

### Installation de packages provenant d’autres organisations

Par défaut, vous pouvez seulement utiliser des packages {% data variables.product.prodname_registry %} provenant d’une seule organisation. Si vous souhaitez acheminer les demandes de package vers plusieurs organisations et utilisateurs, vous pouvez ajouter des lignes supplémentaires à votre fichier *.npmrc*, en remplaçant {% ifversion ghes or ghae %}*HOSTNAME* par le nom d’hôte de {% data variables.location.product_location %} et {% endif %}*OWNER* par le nom de l’utilisateur ou du compte d’organisation qui est propriétaire du référentiel contenant votre projet.

{% ifversion ghes %} Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}

```shell
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
@OWNER:registry=https://{% ifversion fpt or ghec %}npm.pkg.github.com{% else %}npm.HOSTNAME{% endif %}
```

{% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :

```shell
@OWNER:registry=https://HOSTNAME/_registry/npm
@OWNER:registry=https://HOSTNAME/_registry/npm
```
{% endif %}

{% ifversion ghes %}
## Utilisation du registre NPM officiel

{% data variables.product.prodname_registry %} vous permet d’accéder au registre NPM officiel sur `registry.npmjs.com` si votre administrateur {% data variables.product.prodname_ghe_server %} a activé cette fonctionnalité. Pour plus d’informations, consultez [Connexion au registre NPM officiel](/admin/packages/configuring-packages-support-for-your-enterprise#connecting-to-the-official-npm-registry).
{% endif %}
