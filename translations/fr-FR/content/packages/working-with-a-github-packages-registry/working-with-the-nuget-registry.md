---
title: Utilisation du registre NuGet
intro: 'Vous pouvez configurer l’interface de ligne de commande (CLI) `dotnet` pour publier des packages NuGet sur {% data variables.product.prodname_registry %} et utiliser les packages stockés sur {% data variables.product.prodname_registry %} comme dépendances dans un projet .NET.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-nuget-for-use-with-github-packages
  - /github/managing-packages-with-github-packages/configuring-dotnet-cli-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-dotnet-cli-for-use-with-github-packages
  - /packages/guides/configuring-dotnet-cli-for-use-with-github-packages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: NuGet registry
ms.openlocfilehash: cb9e190bb6cfa86ce1bdb31581de6e7d14e9dac8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192920'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Authentification auprès de {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-nuget-v2 %} Vous pouvez choisir d’accorder des autorisations d’accès aux packages indépendamment pour {% data variables.product.prodname_github_codespaces %} et {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Garantie d’accès des codespaces à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) » et « [Garantie de l’accès du workflow à votre package](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package) ».
{% endif %}

### Authentification avec `GITHUB_TOKEN` dans {% data variables.product.prodname_actions %}

Utilisez la commande suivante pour vous authentifier auprès de {% data variables.product.prodname_registry %} dans un workflow {% data variables.product.prodname_actions %} avec `GITHUB_TOKEN` au lieu de coder en dur un {% data variables.product.pat_generic %} dans un fichier nuget.config dans le dépôt :

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentification avec un {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Pour vous authentifier auprès de {% data variables.product.prodname_registry %} avec l’interface de ligne de commande (CLI) `dotnet`, créez un fichier *nuget.config* dans votre répertoire de projet spécifiant {% data variables.product.prodname_registry %} comme source sous `packageSources` pour le client CLI `dotnet`.

Vous devez remplacer :
- `USERNAME` par le nom de votre compte personnel sur {% data variables.product.prodname_dotcom %}.
- `TOKEN` par votre {% data variables.product.pat_v1 %}.
- `OWNER` par le nom du compte d’utilisateur ou d’organisation qui possède {% ifversion packages-nuget-v2 %}le package que vous souhaitez installer, ou sur lequel vous souhaitez publier un package{% else %}le dépôt contenant votre projet{% endif %}.{% ifversion ghes or ghae %}
- `HOSTNAME` par le nom d’hôte pour {% data variables.location.product_location %}.{% endif %}

{% ifversion ghes %}Si l’isolation de sous-domaine est activée pour votre instance : {% endif %}

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
```

{% ifversion ghes %} Si l’isolation de sous-domaine est désactivée pour votre instance :

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://HOSTNAME/_registry/nuget/OWNER/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
```
{% endif %}

## Publication d’un package

Vous pouvez publier un package sur {% data variables.product.prodname_registry %} en vous authentifiant avec un fichier *nuget.config* ou en utilisant l’option de ligne de commande `--api-key` avec votre {% data variables.product.pat_v1 %} {% data variables.product.prodname_dotcom %}.

{% ifversion packages-nuget-v2 %}

Le registre NuGet stocke les packages dans votre compte d’organisation ou personnel et vous autorise à associer les packages à un dépôt. Vous pouvez choisir d’hériter des autorisations d’un dépôt ou de définir des autorisations granulaires indépendamment d’un dépôt.

{% data reusables.package_registry.publishing-user-scoped-packages %}

Si vous spécifiez une `RepositoryURL` dans votre fichier `nuget.config`, le package publié est automatiquement connecté au dépôt spécifié. Pour plus d’informations, consultez « [Publication d’un package avec un fichier `nuget.config`](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file) ». Pour plus d’informations sur la liaison d’un package déjà publié à un dépôt, consultez « [Connexion d’un dépôt à un package](/packages/learn-github-packages/connecting-a-repository-to-a-package) ».

{% endif %}

### Publication d’un package en utilisant un {% data variables.product.pat_generic %} GitHub en tant que clé API

Si vous n’avez pas encore de jeton d’accès personnel à utiliser pour votre compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) ».

1. Créez un projet.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Empaquetez le projet.
  ```shell
  dotnet pack --configuration Release
  ```

3. Publiez le package en utilisant votre {% data variables.product.pat_generic %} comme clé API.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### Publication d’un package à l’aide d’un fichier *nuget.config*

Lors de la publication, vous devez utiliser la même valeur pour `OWNER` dans votre fichier *csproj* que celle que vous utilisez dans votre fichier d’authentification *nuget.config*. Spécifiez ou incrémentez le numéro de version dans votre fichier *.csproj*, puis utilisez la commande `dotnet pack` pour créer un fichier *.nuspec* pour cette version. Pour plus d’informations sur la création de votre package, consultez « [Créer et publier un package](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli) » dans la documentation Microsoft.

{% data reusables.package_registry.authenticate-step %}
2. Créez un projet.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Ajoutez les informations spécifiques de votre projet au fichier de votre projet, qui se termine par *.csproj*.  Vous devez remplacer :
    - `OWNER` par le nom du compte d’utilisateur ou d’organisation propriétaire du dépôt auquel vous souhaitez connecter votre package.
    - `REPOSITORY` par le nom du dépôt auquel vous souhaitez connecter votre package.                      
    - `1.0.0` par le numéro de version du package.{% ifversion ghes or ghae %}
    - `HOSTNAME` par le nom d’hôte pour {% data variables.location.product_location %}.{% endif %}
  ``` xml
  <Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
      <OutputType>Exe</OutputType>
      <TargetFramework>netcoreapp3.0</TargetFramework>
      <PackageId>OctocatApp</PackageId>
      <Version>1.0.0</Version>
      <Authors>Octocat</Authors>
      <Company>GitHub</Company>
      <PackageDescription>This package adds an Octocat!</PackageDescription>
      <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

  </Project>
  ```
4. Empaquetez le projet.
  ```shell
  dotnet pack --configuration Release
  ```

5. Publiez le package avec la `key` que vous avez spécifiée dans le fichier *nuget.config*.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## Publication de plusieurs packages sur le même dépôt

Pour connecter plusieurs packages au même dépôt, vous pouvez inclure la même URL de dépôt {% data variables.product.prodname_dotcom %} dans les champs `RepositoryURL` de tous les fichiers projet *.csproj*. {% data variables.product.prodname_dotcom %} correspond au dépôt en fonction de ce champ.

Par exemple, les projets *OctodogApp* et *OctocatApp* sont publiés sur le même dépôt :

``` xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>OctodogApp</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octodog</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds an Octodog!</PackageDescription>
    <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/octo-org/octo-cats-and-dogs</RepositoryUrl>
  </PropertyGroup>

</Project>
```

``` xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>OctocatApp</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octocat</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds an Octocat!</PackageDescription>
    <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/octo-org/octo-cats-and-dogs</RepositoryUrl>
  </PropertyGroup>

</Project>
```

## Installation d’un package

L’utilisation de packages à partir de {% data variables.product.prodname_dotcom %} dans votre projet est similaire à l’utilisation de packages à partir de *nuget.org*. Ajoutez vos dépendances de package à votre fichier *.csproj*, en spécifiant le nom et la version du package. Pour plus d’informations sur l’utilisation d’un fichier *.csproj* dans votre projet, consultez « [Utilisation des packages NuGet](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow) » dans la documentation Microsoft.

{% data reusables.package_registry.authenticate-step %}

2. Pour utiliser un package, ajoutez `ItemGroup` et configurez le champ `PackageReference` dans le fichier projet *.csproj*. Remplacez la valeur `OctokittenApp` dans `Include="OctokittenApp"` par votre dépendance de package et remplacez la valeur `12.0.2` dans `Version="12.0.2"` par la version que vous voulez utiliser :
  ``` xml
  <Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
      <OutputType>Exe</OutputType>
      <TargetFramework>netcoreapp3.0</TargetFramework>
      <PackageId>OctocatApp</PackageId>
      <Version>1.0.0</Version>
      <Authors>Octocat</Authors>
      <Company>GitHub</Company>
      <PackageDescription>This package adds an Octocat!</PackageDescription>
      <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

    <ItemGroup>
      <PackageReference Include="OctokittenApp" Version="12.0.2" />
    </ItemGroup>

  </Project>
  ```

3. Installez les packages avec la commande `restore`.
  ```shell
  dotnet restore
  ```

## Dépannage

La poussée de votre package NuGet peut échouer si le champ `RepositoryUrl` dans *.csproj* n’est pas défini sur le dépôt attendu.

Si vous utilisez un fichier nuspec, vérifiez qu’il a un élément `repository` avec les attributs `type` et `url` requis.

Si vous utilisez un `GITHUB_TOKEN` pour vous authentifier auprès d’un registre {% data variables.product.prodname_registry %} au sein d’un flux de travail {% data variables.product.prodname_actions %}, le jeton ne peut pas accéder aux packages basés sur un référentiel privé dans un référentiel autre que celui dans lequel le flux de travail s’exécute. Pour accéder aux packages associés à d’autres dépôts, générez plutôt un {% data variables.product.pat_v1 %} avec l’étendue `read:packages` et transmettez ce jeton en tant que secret.
 
## Pour aller plus loin

- « [Suppression et restauration d’un package](/packages/learn-github-packages/deleting-and-restoring-a-package) »
