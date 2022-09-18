---
title: Trabajar con el registro de NuGet
intro: 'Puedes configurar la interfaz de línea de comando (CLI) `dotnet` para publicar paquetes NuGet en {% data variables.product.prodname_registry %} y usar paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto de .NET.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580515'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

### Autenticación con `GITHUB_TOKEN` en {% data variables.product.prodname_actions %}

Utilice el siguiente comando para autenticarse en {% data variables.product.prodname_registry %} en un flujo de trabajo de {% data variables.product.prodname_actions %} utilizando `GITHUB_TOKEN` en vez de codificar un token en un archivo nuget.config en el repositorio:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Para autenticarse en {% data variables.product.prodname_registry %} con la interfaz de la línea de comandos (CLI) `dotnet`, cree un archivo *nuget.config* en el directorio del proyecto que especifique que {% data variables.product.prodname_registry %} es el origen en `packageSources` para el cliente de la CLI `dotnet`.

Debes reemplazar:
- `USERNAME` por el nombre de tu cuenta personal en {% data variables.product.prodname_dotcom %}.
- `TOKEN` por el token de acceso personal.
- `OWNER` por el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene el proyecto.{% ifversion ghes or ghae %}
- `HOSTNAME` por el nombre de host de {% data variables.product.product_location %}.{% endif %}

{% ifversion ghes %}Si en la instancia se ha habilitado el aislamiento de subdominios: {% endif %}

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

{% ifversion ghes %}Si en la instancia se ha deshabilitado el aislamiento de subdominios:

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

## Publicación de un paquete

Puede publicar un paquete de {% data variables.product.prodname_registry %} si se autentica con un archivo *nuget.config* o utiliza la opción de línea de comandos `--api-key` con su token de acceso personal (PAT) de {% data variables.product.prodname_dotcom %}.

### Publicar un paquete utilizando el PAT de GitHub como tu clave de la API

Si aún no tiene un PAT que pueda usar para su cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, consulte "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

1. Cree un nuevo proyecto.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Empaquetar el proyecto.
  ```shell
  dotnet pack --configuration Release
  ```

3. Publicar el paquete utilizando tu PAT como la clave de la API.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### Publicación de un paquete mediante un archivo *nuget.config*

Al publicar, debe usar el mismo valor para `OWNER` en el archivo *csproj* que usa en el archivo de autenticación *nuget.config*. Especifique o incremente el número de versión en el archivo *.csproj* y, a continuación, use el comando `dotnet pack` para crear un archivo *.nuspec* para esa versión. Para obtener más información sobre cómo crear el paquete, consulte "[Creación y publicación de un paquete](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" en la documentación de Microsoft.

{% data reusables.package_registry.authenticate-step %}
2. Cree un nuevo proyecto.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Agregue la información específica del proyecto en su archivo, que finaliza en *.csproj*.  Debes reemplazar:
    - `OWNER` por el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene el proyecto.
    - `REPOSITORY` por el nombre del repositorio que contiene el paquete que desea publicar.                      
    - `1.0.0` por el número de versión del paquete.{% ifversion ghes or ghae %}
    - `HOSTNAME` por el nombre de host de {% data variables.product.product_location %}.{% endif %}
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
4. Empaquetar el proyecto.
  ```shell
  dotnet pack --configuration Release
  ```

5. Publique el paquete con el `key` que especificó en el archivo *nuget.config*.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## Publicar múltiples paquetes en el mismo repositorio

Para publicar varios paquetes en el mismo repositorio, puede incluir la misma dirección URL del repositorio de {% data variables.product.prodname_dotcom %} en los campos `RepositoryURL` de todos los archivos del proyecto *.csproj*. {% data variables.product.prodname_dotcom %} coincide con el repositorio en base a ese campo.

Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* se publicarán en el mismo repositorio:

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

## Instalación de un paquete

El uso de paquetes de {% data variables.product.prodname_dotcom %} en el proyecto es similar al uso de paquetes de *nuget.org*. Agregue las dependencias del paquete al archivo *.csproj* y especifique el nombre y la versión del paquete. Para obtener más información sobre el uso de un archivo *.csproj* en el proyecto, consulte "[Trabajar con paquetes de NuGet](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)" en la documentación de Microsoft.

{% data reusables.package_registry.authenticate-step %}

2. Para usar un paquete, agrega `ItemGroup` y configura el campo `PackageReference` en el archivo del proyecto *.csproj*. Reemplaza el valor `OctokittenApp` en `Include="OctokittenApp"` por la dependencia del paquete y reemplaza el valor `12.0.2` en`Version="12.0.2"` por la versión que deseas usar:
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

3. Instale los paquetes con el comando `restore`.
  ```shell
  dotnet restore
  ```

## Solución de problemas

Es posible que el paquete de NuGet no se inserte si `RepositoryUrl` en *.csproj* no está establecido en el repositorio previsto.

Si usa un archivo nuspec, asegúrese de que tiene un elemento `repository` con los atributos `type` y `url` necesarios.

Si usas un `GITHUB_TOKEN` para autenticarte en un registro {% data variables.product.prodname_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, el token no puede acceder a paquetes privados basados en repositorios en un repositorio distinto del lugar en el que se ejecuta el flujo de trabajo. Para acceder a los paquetes asociados a otros repositorios, genera un PAT con el ámbito `read:packages` y pasa este token como secreto.
 
## Información adicional

- "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"
