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
ms.openlocfilehash: cb9e190bb6cfa86ce1bdb31581de6e7d14e9dac8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192925'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar a {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-nuget-v2 %} Puedes optar por conceder permisos de acceso a paquetes de forma independiente para {% data variables.product.prodname_github_codespaces %} y {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Garantizar el acceso de Codespaces al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)" y "[Garantizar el acceso al flujo de trabajo para tu paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".
{% endif %}

### Autenticación con `GITHUB_TOKEN` en {% data variables.product.prodname_actions %}

Utilice el siguiente comando para autenticarse en {% data variables.product.prodname_registry %} en un flujo de trabajo de {% data variables.product.prodname_actions %} utilizando `GITHUB_TOKEN` en vez de codificar de forma rígida un {% data variables.product.pat_generic %} en un archivo nuget.config en el repositorio:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticación con un {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Para autenticarse en {% data variables.product.prodname_registry %} con la interfaz de la línea de comandos (CLI) `dotnet`, cree un archivo *nuget.config* en el directorio del proyecto que especifique que {% data variables.product.prodname_registry %} es el origen en `packageSources` para el cliente de la CLI `dotnet`.

Debes reemplazar:
- `USERNAME` por el nombre de tu cuenta personal en {% data variables.product.prodname_dotcom %}.
- `TOKEN` por tu {% data variables.product.pat_v1 %}.
- `OWNER` con el nombre de la cuenta de usuario u organización que posee {% ifversion packages-nuget-v2 %}el paquete que quieres instalar o en el que quieres publicar un paquete{% else %}el repositorio que contiene el proyecto{% endif %}.{% ifversion ghes or ghae %}
- `HOSTNAME` por el nombre de host de {% data variables.location.product_location %}.{% endif %}

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

Puede publicar un paquete de {% data variables.product.prodname_registry %} si se autentica con un archivo *nuget.config* o utiliza la opción de línea de comandos `--api-key` con su {% data variables.product.pat_v1 %} de {% data variables.product.prodname_dotcom %}.

{% ifversion packages-nuget-v2 %}

El registro de NuGet almacena paquetes en tu cuenta personal o de la organización y te permite asociar los paquetes a un repositorio. Puedes elegir si quieres heredar permisos desde un repositorio o si quieres configurar permisos granulares independientemente de un repositorio.

{% data reusables.package_registry.publishing-user-scoped-packages %}

Si especificas un elemento `RepositoryURL` en el archivo `nuget.config`, el paquete publicado se conectará automáticamente al repositorio especificado. Para obtener más información, consulta "[Publicación de un paquete mediante un archivo `nuget.config`](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file)". Para obtener información sobre cómo vincular un paquete ya publicado a un repositorio, consulta "[Conexión de un repositorio a un paquete](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

{% endif %}

### Publicación de un paquete utilizando un {% data variables.product.pat_generic %} de GitHub como clave de API

Si aún no tienes un PAT que puedas usar para tu cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

1. Cree un nuevo proyecto.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Empaquetar el proyecto.
  ```shell
  dotnet pack --configuration Release
  ```

3. Publica el paquete utilizando tu {% data variables.product.pat_generic %} como clave de API.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
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
    - `OWNER` con el nombre de la cuenta de usuario u organización que posee el repositorio al que quieres conectar el paquete.
    - `REPOSITORY` con el nombre del repositorio al que quieres conectar el paquete.                      
    - `1.0.0` por el número de versión del paquete.{% ifversion ghes or ghae %}
    - `HOSTNAME` por el nombre de host de {% data variables.location.product_location %}.{% endif %}
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

Para conectar varios paquetes al mismo repositorio, puedes incluir la misma dirección URL del repositorio de {% data variables.product.prodname_dotcom %} en los campos `RepositoryURL` de todos los archivos del proyecto *.csproj*. {% data variables.product.prodname_dotcom %} coincide con el repositorio en base a ese campo.

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

Si usas un `GITHUB_TOKEN` para autenticarte en un registro {% data variables.product.prodname_registry %} dentro de un flujo de trabajo de {% data variables.product.prodname_actions %}, el token no puede acceder a paquetes privados basados en repositorios en un repositorio distinto del lugar en el que se ejecuta el flujo de trabajo. Para acceder a los paquetes asociados a otros repositorios, genera un {% data variables.product.pat_v1 %} con el ámbito `read:packages` y pasa este token como secreto.
 
## Información adicional

- "[Eliminación y restauración de un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package)"
