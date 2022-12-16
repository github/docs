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
ms.openlocfilehash: cb9e190bb6cfa86ce1bdb31581de6e7d14e9dac8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192921'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Bei {% data variables.product.prodname_registry %} authentifizieren

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-nuget-v2 %} Du kannst auswählen, ob du den Paketen unabhängig voneinander Zugriffsrechte für {% data variables.product.prodname_github_codespaces %} und {% data variables.product.prodname_actions %} erteilen möchtest. Weitere Informationen findest du unter [Sicherstellen des Codespaces-Zugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) sowie unter [Sicherstellen des Workflowzugriffs auf dein Paket](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
{% endif %}

### Authentifizieren mit `GITHUB_TOKEN` bei {% data variables.product.prodname_actions %}

Verwende den folgenden Befehl, um dich bei {% data variables.product.prodname_registry %} in einem {% data variables.product.prodname_actions %}-Workflow mit dem `GITHUB_TOKEN` zu authentifizieren, anstatt ein hartcodiertes {% data variables.product.pat_generic %} in einer Datei vom Typ „nuget.config“ im Repository zu verwenden:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Authentifizieren mit einem {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Zum Authentifizieren bei {% data variables.product.prodname_registry %} mit der `dotnet`-Befehlszeilenschnittstelle (CLI) erstellst du eine Datei *nuget.config* in deinem Projektverzeichnis und gibst unter `packageSources` {% data variables.product.prodname_registry %} als Quelle für den `dotnet` CLI-Client an.

Dabei musst du Folgendes ersetzen:
- `USERNAME` durch den Namen deines persönlichen Kontos auf {% data variables.product.prodname_dotcom %}.
- `TOKEN` durch dein {% data variables.product.pat_v1 %}
- `OWNER` durch den Namen des Benutzer- oder Organisationskontos, das {% ifversion packages-nuget-v2 %}das Paket besitzt, das du installieren möchtest, oder für das du ein Paket veröffentlichen möchtest{% else %}das Repository besitzt, in dem sich dein Projekt befindet{% endif %}{% ifversion ghes or ghae %}
- `HOSTNAME` durch den Hostnamen für {% data variables.location.product_location %}{% endif %}

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

Du kannst ein Paket in {% data variables.product.prodname_registry %} veröffentlichen, indem du dich mit einer Datei vom Typ *nuget.config* authentifizierst oder indem du die Befehlszeilenoption `--api-key` mit deinem {% data variables.product.pat_v1 %} für {% data variables.product.prodname_dotcom %} verwendest.

{% ifversion packages-nuget-v2 %}

Die NuGet-Registrierung speichert Pakete in deinem Organisationskonto oder in deinem persönlichen Konto und ermöglicht die Zuordnung von Paketen zu einem Repository. Du kannst wählen, ob Berechtigungen von einem Repository geerbt oder präzise Berechtigungen unabhängig von einem Repository festgelegt werden sollen.

{% data reusables.package_registry.publishing-user-scoped-packages %}

Wenn du in der Datei `nuget.config` eine Repository-URL (`RepositoryURL`) angibst, wird das veröffentlichte Paket automatisch mit dem angegebenen Repository verbunden. Weitere Informationen findest du unter [Veröffentlichen eines Pakets mithilfe einer Datei `nuget.config`](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file). Informationen zum Verknüpfen eines bereits veröffentlichten Pakets mit einem Repository findest du unter [Verbinden eines Repositorys mit einem Paket](/packages/learn-github-packages/connecting-a-repository-to-a-package).

{% endif %}

### Veröffentlichen eines Pakets unter Verwendung eines {% data variables.product.pat_generic %} für GitHub als API-Schlüssel

Falls du noch nicht über ein PAT verfügst, das du für dein Konto in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} verwenden kannst, findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) weitere Informationen.

1. Erstelle ein neues Projekt.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Packe das Projekt.
  ```shell
  dotnet pack --configuration Release
  ```

3. Veröffentliche das Paket, und verwende dabei dein {% data variables.product.pat_generic %} als API-Schlüssel.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
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
    - `OWNER` durch den Namen des Benutzer- oder Organisationskontos, das das Repository besitzt, mit dem du dein Paket verbinden möchtest.
    - `REPOSITORY` durch den Namen des Repositorys, mit dem du dein Paket verbinden möchtest.                      
    - `1.0.0` durch die Versionsnummer des Pakets{% ifversion ghes or ghae %}
    - `HOSTNAME` durch den Hostnamen für {% data variables.location.product_location %}{% endif %}
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

Um mehrere Pakete mit dem gleichen Repository zu verbinden, kannst du die gleiche {% data variables.product.prodname_dotcom %}-Repository-URL in den Feldern vom Typ `RepositoryURL` in allen *CSPROJ-Projektdateien* einfügen. {% data variables.product.prodname_dotcom %} ermittelt das Repository anhand dieses Felds.

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

Wenn du `GITHUB_TOKEN` verwendest, um dich bei einer {% data variables.product.prodname_registry %}-Registrierung in einem {% data variables.product.prodname_actions %}-Workflow zu authentifizieren, kann das Token nicht auf Pakete in privaten Repositorys zugreifen, wenn es sich um ein anderes Repository aus dasjenige handelt, in dem der Workflow ausgeführt wird. Um auf Pakete zuzugreifen, die anderen Repositorys zugeordnet sind, musst du stattdessen ein {% data variables.product.pat_v1 %} mit dem Geltungsbereich `read:packages` definieren und dieses Token als Geheimnis übergeben.
 
## Weitere Informationsquellen

- [Löschen und Wiederherstellen eines Pakets](/packages/learn-github-packages/deleting-and-restoring-a-package)
