---
title: Arbeiten mit der NuGet-Registrierung
intro: 'Du kannst die `dotnet`-Befehlszeilenschnittstelle (command-line interface, CLI) so konfigurieren, dass NuGet-Pakete in der {% data variables.product.prodname_registry %} veröffentlicht werden und in der {% data variables.product.prodname_registry %} gespeicherte Pakete als Abhängigkeiten in einem .NET-Projekt verwendet werden.'
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
ms.openlocfilehash: d97a5645a3d945bb79cf6d3b9e8e09eb6b5d7a42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580511'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

### Authentifizieren mit `GITHUB_TOKEN` bei {% data variables.product.prodname_actions %}

Verwende den folgenden Befehl, um dich bei {% data variables.product.prodname_registry %} in einem {% data variables.product.prodname_actions %}-Workflow mit einem `GITHUB_TOKEN` zu authentifizieren, anstatt ein Token in einer Datei „nuget.config“ Datei im Repository hart zu codieren:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentifizieren mit einem persönlichen Zugriffstoken

{% data reusables.package_registry.required-scopes %}

Zum Authentifizieren bei {% data variables.product.prodname_registry %} mit der `dotnet`-Befehlszeilenschnittstelle (CLI) erstellst du eine Datei *nuget.config* in deinem Projektverzeichnis und gibst unter `packageSources` {% data variables.product.prodname_registry %} als Quelle für den `dotnet` CLI-Client an.

Dabei musst du Folgendes ersetzen:
- `USERNAME` durch den Namen deines persönlichen Kontos auf {% data variables.product.prodname_dotcom %}.
- `TOKEN` durch dein persönliches Zugriffstoken
- `OWNER` durch den Namen des Benutzer- oder Organisationskontos, das Besitzer des Repositorys ist, in dem sich dein Projekt befindet.{% ifversion ghes or ghae %}
- `HOSTNAME` durch den Hostnamen für {% data variables.product.product_location %}.{% endif %}

{% ifversion ghes %}Wenn die Unterdomänenisolation für deine Instanz aktiviert ist: {% endif %}

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

{% ifversion ghes %} Wenn die Unterdomänenisolation für deine Instanz deaktiviert ist:

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

## Veröffentlichen eines Pakets

Du kannst ein Paket in {% data variables.product.prodname_registry %} veröffentlichen, indem du dich mit einer Datei *nuget.config* authentifizierst oder indem du die Befehlszeilenoption `--api-key` mit deinem persönlichen Zugriffstoken (PAT) für {% data variables.product.prodname_dotcom %} verwendest.

### Veröffentlichen eines Pakets mit einem GitHub-PAT als API-Schlüssel

Wenn du nicht bereits über ein PAT verfügst, das du für dein Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} verwenden kannst, findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token) weitere Informationen.

1. Erstelle ein neues Projekt.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Packe das Projekt.
  ```shell
  dotnet pack --configuration Release
  ```

3. Veröffentliche das Paket mit deinem PAT als API-Schlüssel.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### Veröffentlichen eines Pakets mithilfe einer Datei *nuget.config*

Bei der Veröffentlichung musst du in deiner *CSPROJ*-Datei denselben Wert für `OWNER` verwenden wie in deiner Authentifizierungsdatei *nuget.config*. Gib die Versionsnummer in deiner *CSPROJ*-Datei an, oder erhöhe sie, und erstelle dann mit dem Befehl `dotnet pack` eine *NUSPEC*-Datei für diese Version. Weitere Informationen zum Erstellen deines Pakets findest du in der Microsoft-Dokumentation unter [Erstellen und Veröffentlichen eines Pakets](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli).

{% data reusables.package_registry.authenticate-step %}
2. Erstelle ein neues Projekt.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Füge die spezifischen Informationen deines Projekts in der Datei deines Projekts hinzu, die auf *.csproj* endet.  Dabei musst du Folgendes ersetzen:
    - `OWNER` durch den Namen des Benutzer- oder Organisationskontos, das Besitzer des Repositorys ist, in dem sich dein Projekt befindet
    - `REPOSITORY` durch den Namen des Repositorys mit dem Paket, das du veröffentlichen möchtest                      
    - `1.0.0` durch die Versionsnummer des Pakets{% ifversion ghes or ghae %}
    - `HOSTNAME` durch den Hostnamen für {% data variables.product.product_location %}.{% endif %}
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
4. Packe das Projekt.
  ```shell
  dotnet pack --configuration Release
  ```

5. Veröffentliche das Paket mit dem `key`, den du in der Datei *nuget.config* angegeben hast.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## Veröffentlichen mehrerer Pakete im gleichen Repository

Um mehrere Pakete im selben Repository zu veröffentlichen, kannst die gleiche {% data variables.product.prodname_dotcom %}-Repository-URL in den Feldern `RepositoryURL` in allen *CSPROJ*-Projektdateien einfügen. {% data variables.product.prodname_dotcom %} ermittelt das Repository anhand dieses Felds.

Beispielsweise werden die Projekte *OctodogApp* und *OctocatApp* im gleichen Repository veröffentlicht:

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

## Installieren eines Pakets

Das Verwenden von Paketen von {% data variables.product.prodname_dotcom %} in deinem Projekt ähnelt dem Verwenden von Paketen von *nuget.org*. Füge deine Paketabhängigkeiten in der *CSPROJ*-Datei hinzu, und gib dabei den Paketnamen und die Version an. Weitere Informationen zum Verwenden einer *CSPROJ*-Datei in deinem Projekt findest du in der Microsoft-Dokumentation unter [Arbeiten mit NuGet-Paketen](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow).

{% data reusables.package_registry.authenticate-step %}

2. Um ein Paket zu verwenden, füge `ItemGroup` hinzu, und konfiguriere das Feld `PackageReference` in der *CSPROJ*-Projektdatei. Ersetze den `OctokittenApp`-Wert in `Include="OctokittenApp"` durch deine Paketabhängigkeit, und ersetze den `12.0.2`-Wert in `Version="12.0.2"` durch die Version, die du verwenden möchtest:
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

3. Du installierst die Pakete mit dem Befehl `restore`.
  ```shell
  dotnet restore
  ```

## Problembehandlung

Dein NuGet-Paket wird möglicherweise nicht gepusht, wenn das `RepositoryUrl` in der *CSPROJ*-Datei nicht auf das erwartete Repository festgelegt ist.

Wenn du eine NUSPEC-Datei verwendest, musst du sicherstellen, dass sie ein `repository`-Element mit den erforderlichen Attributen `type` und `url` enthält.

Wenn du `GITHUB_TOKEN` verwendest, um dich bei einer {% data variables.product.prodname_registry %}-Registrierung in einem {% data variables.product.prodname_actions %}-Workflow zu authentifizieren, kann das Token nicht auf Pakete in privaten Repositorys zugreifen, wenn es sich um ein anderes Repository aus dasjenige handelt, in dem der Workflow ausgeführt wird. Um auf Pakete zuzugreifen, die anderen Repositorys zugeordnet sind, musst du stattdessen ein PAT mit dem Geltungsbereich `read:packages` definieren und dieses Token als Geheimnis übergeben.
 
## Weiterführende Themen

- [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package)
