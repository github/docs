---
title: Utilisation du registre RubyGems
intro: 'Vous pouvez configurer RubyGems pour qu’il publie un package dans {% data variables.product.prodname_registry %} et utilise les packages stockés dans {% data variables.product.prodname_registry %} comme dépendances dans un projet Ruby avec Bundler.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-rubygems-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-rubygems-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-rubygems-for-use-with-github-packages
  - /packages/guides/configuring-rubygems-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: RubyGems registry
ms.openlocfilehash: 514a50358bf8171b3ea8d13b01375306e784e63f
ms.sourcegitcommit: cea091b5171ad05f18b3d35fa063cfea8aea12c4
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/17/2022
ms.locfileid: '148172144'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Prérequis

- Vous devez disposer de RubyGems 2.4.1 ou version ultérieure. Pour trouver votre version de RubyGems :

  ```shell
  $ gem --version
  ```

- Vous devez disposer de Bundler 1.6.4 ou version ultérieure. Pour trouver votre version de Bundler :

  ```shell
  $ bundle --version
  Bundler version 1.13.7
  ```

## Authentification auprès de {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentification avec un {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Pour publier et installer des gemmes, vous pouvez configurer RubyGems ou Bundler pour qu’il s’authentifie auprès de {% data variables.product.prodname_registry %} avec votre {% data variables.product.pat_generic %}.

Pour publier de nouvelles gemmes, vous devez vous authentifier auprès de {% data variables.product.prodname_registry %} avec RubyGems en modifiant votre fichier *~/.gem/credentials* afin d’inclure votre {% data variables.product.pat_v1 %}. Créez un fichier *~/.gem/credentials* si ce fichier n’existe pas.

Par exemple, vous créez ou modifiez un fichier *~/.gem/credentials* pour inclure les éléments suivants, en remplaçant *TOKEN* par votre {% data variables.product.pat_generic %}.

```shell
---
:github: Bearer TOKEN
```

Pour installer des gemmes, vous devez vous authentifier auprès de {% data variables.product.prodname_registry %} en mettant à jour vos sources de gemme pour inclure `https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/`. Vous devez remplacer :
  - `USERNAME` par votre nom d’utilisateur {% data variables.product.prodname_dotcom %}.
  - `TOKEN` par votre {% data variables.product.pat_v1 %}.
  - `OWNER` par le nom du compte d’utilisateur ou d’organisation propriétaire du dépôt contenant votre projet.{% ifversion ghes %}
  - `REGISTRY-URL` par l’URL du registre Rubygems de votre instance. Si l’isolation de sous-domaine est activée pour votre instance, utilisez `rubygems.HOSTNAME`. Si l’isolation de sous-domaine est désactivée pour votre instance, utilisez `HOSTNAME/_registry/rubygems`. Dans les deux cas, remplacez *HOSTNAME* par le nom d’hôte de votre instance {% data variables.product.prodname_ghe_server %}.
{% elsif ghae %}
  - `REGISTRY-URL` par l’URL du registre Rubygems de votre instance, `rubygems.HOSTNAME`. Remplacez *HOSTNAME* par le nom d’hôte de {% data variables.location.product_location %}.
{% endif %}

Si vous souhaitez que votre package soit disponible globalement, vous pouvez exécuter la commande suivante pour ajouter votre registre en tant que source.
```shell
gem sources --add https://USERNAME:TOKEN@{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER/
```

Pour vous authentifier auprès de Bundler, configurez Bundler pour utiliser votre {% data variables.product.pat_v1 %}, en remplaçant *USERNAME* par votre nom d’utilisateur {% data variables.product.prodname_dotcom %}, *TOKEN* par votre {% data variables.product.pat_generic %} et *OWNER* par le nom du compte d’utilisateur ou d’organisation propriétaire du référentiel contenant votre projet.{% ifversion ghes %} Remplacez `REGISTRY-URL` par l’URL du registre RubyGems de votre instance. Si l’isolation de sous-domaine est activée pour votre instance, utilisez `rubygems.HOSTNAME`. Si l’isolation de sous-domaine est désactivée pour votre instance, utilisez `HOSTNAME/_registry/rubygems`. Dans les deux cas, remplacez *HOSTNAME* par le nom d’hôte de votre instance {% data variables.product.prodname_ghe_server %}.{% elsif ghae %}Remplacez `REGISTRY-URL` par l’URL du registre Rubygems de votre instance, `rubygems.HOSTNAME`. Remplacez *HOSTNAME* par le nom d’hôte de {% data variables.location.product_location %}.{% endif %}

```shell
$ bundle config https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER USERNAME:TOKEN
```

## Publication d’un package

{% data reusables.package_registry.default-name %} Par exemple, lorsque vous publiez `<GEM NAME>` dans l’organisation `octo-org`, {% data variables.product.prodname_registry %} publient la gemme dans le dépôt `octo-org/<GEM NAME>`. Pour plus d’informations sur la création de votre gemme, consultez « [Créer votre propre gemme](http://guides.rubygems.org/make-your-own-gem/) » dans la documentation de RubyGems.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Générez le package à partir de *gemspec* pour créer le package *.gem* .
  ```
  gem build <GEM NAME>.gemspec
  ```
3. Publiez un package sur {% data variables.product.prodname_registry %}, en remplaçant `OWNER` par le nom du compte d’utilisateur ou d’organisation propriétaire du dépôt contenant votre projet, et `<GEM NAME>` par le nom de votre package gem.{% ifversion ghes %} Remplacez `REGISTRY-URL` l’URL du registre Rubygems de votre instance. Si l’isolation de sous-domaine est activée pour votre instance, utilisez `rubygems.HOSTNAME`. Si l’isolation de sous-domaine est désactivée pour votre instance, utilisez `HOSTNAME/_registry/rubygems`. Dans les deux cas, remplacez *HOSTNAME* par le nom d’hôte de votre instance {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Remplacez `REGISTRY-URL` par l’URL du registre Rubygems de votre instance, `rubygems.HOSTNAME`. Remplacez *HOSTNAME* par le nom d’hôte de {% data variables.location.product_location %}.{% endif %}

  ```
  $ gem push --key github \
  --host https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER \
  <GEM NAME>-0.0.1.gem
  ```

## Publication de plusieurs packages sur le même dépôt

Pour publier plusieurs gemmes dans le même dépôt, vous pouvez inclure l’URL du dépôt {% data variables.product.prodname_dotcom %} dans le champ `github_repo` dans `gem.metadata`. Si vous incluez ce champ, {% data variables.product.prodname_dotcom %} établit une correspondance avec le référentiel en fonction de cette valeur, au lieu d’utiliser le nom de la gemme.{% ifversion ghes or ghae %} Remplacez *HOSTNAME* par le nom d’hôte de {% data variables.location.product_location %}.{% endif %}

```ruby
gem.metadata = { "github_repo" => "ssh://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY" }
```

## Installation d’un package

Vous pouvez utiliser des gemmes à partir de {% data variables.product.prodname_registry %} de la même façon que vous utilisez des gemmes de *rubygems.org*. Vous devez vous authentifier auprès de {% data variables.product.prodname_registry %} en ajoutant votre utilisateur ou votre organisation {% data variables.product.prodname_dotcom %} en tant que source dans le fichier *~/.gemrc*, ou en utilisant Bundler et en modifiant votre *gemfile*.

{% data reusables.package_registry.authenticate-step %}
1. Pour Bundler, ajoutez votre utilisateur ou organisation {% data variables.product.prodname_dotcom %} en tant que source dans votre *Gemfile* pour extraire des gemmes de cette nouvelle source. Par exemple, vous pouvez ajouter un nouveau bloc `source` à votre *Gemfile*, qui utilise {% data variables.product.prodname_registry %} uniquement pour les packages que vous spécifiez, en remplaçant *GEM NAME* par le package que vous souhaitez installer à partir de {% data variables.product.prodname_registry %}, et *OWNER* par l’utilisateur ou l’organisation propriétaire du dépôt contenant la gemme que vous souhaitez installer.{% ifversion ghes %} Remplacez `REGISTRY-URL` par l’URL du registre Rubygems de votre instance. Si l’isolation de sous-domaine est activée pour votre instance, utilisez `rubygems.HOSTNAME`. Si l’isolation de sous-domaine est désactivée pour votre instance, utilisez `HOSTNAME/_registry/rubygems`. Dans les deux cas, remplacez *HOSTNAME* par le nom d’hôte de votre instance {% data variables.product.prodname_ghe_server %}.{% elsif ghae %} Remplacez `REGISTRY-URL` par l’URL du registre Rubygems de votre instance, `rubygems.HOSTNAME`. Remplacez *HOSTNAME* par le nom d’hôte de {% data variables.location.product_location %}.{% endif %}

  ```ruby
  source "https://rubygems.org"

  gem "rails"

  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER" do
    gem "GEM NAME"
  end
  ```

3. Pour les versions de Bundler antérieures à 1.7.0, vous devez ajouter une nouvelle `source` globale. Pour plus d’informations sur l’utilisation de Bundler, consultez la [documentation de bundler.io](https://bundler.io/gemfile.html).

  ```ruby
  source "https://{% ifversion fpt or ghec %}rubygems.pkg.github.com{% else %}REGISTRY-URL{% endif %}/OWNER"
  source "https://rubygems.org"

  gem "rails"
  gem "GEM NAME"
  ```

4. Installez le package :
  ```
  $ gem install <GEM NAME> --version "0.1.1"
  ```

## Pour aller plus loin

- « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) »

