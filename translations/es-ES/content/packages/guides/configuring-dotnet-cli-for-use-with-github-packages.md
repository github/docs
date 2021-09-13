---
title: Configurar la CLI `dotnet` para usar con paquetes de GitHub
intro: 'Puedes configurar la interfaz de línea de comando (CLI) `dotnet` para publicar paquetes NuGet en {% data variables.product.prodname_registry %} y utilizar paquetes almacenados en {% data variables.product.prodname_registry %} como dependencias en un proyecto de .NET.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-nuget-for-use-with-github-packages
  - /github/managing-packages-with-github-packages/configuring-dotnet-cli-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-dotnet-cli-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**Nota:** Cuando instalas o publicas una imagen de docker, {% data variables.product.prodname_registry %} no es compatible con capas externas, tales como imágenes de Windows.

### Autenticarte en {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Para autenticarte en {% data variables.product.prodname_registry %} con la interfaz de la línea de comando (CLI) `dotnet`, crea un archivo *nuget.config* en el directorio de tu proyecto especificando {% data variables.product.prodname_registry %} como una fuente en `packageSources` para el cliente de la CLI `Dotnet`.

Debes reemplazar:
- `USERNAME` (nombre de usuario) por el nombre de tu cuenta de usuario en {% data variables.product.prodname_dotcom %}.
- `TOKEN` por tu token de acceso personal.
- `OWNER` com el nombre de la cuenta de usuario u organización a la que pertenece el repositorio que contiene tu proyecto.{%if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- `HOSTNAME` con el nombre de host de {% data variables.product.product_location %}.{% endif %}

{%if enterpriseServerVersions contains currentVersion %}Si tu instancia tiene habilitado el aislamiento de subdominio:
{% endif %}

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://{% if currentVersion == "free-pro-team@latest" %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration>
```

{% if enterpriseServerVersions contains currentVersion %}
Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>netcoreapp3.0</TargetFramework>
    <PackageId>OctodogApp</PackageId>
    <Version>1.0.0</Version>
    <Authors>Octodog</Authors>
    <Company>GitHub</Company>
    <PackageDescription>This package adds an Octodog!</PackageDescription>
    <RepositoryUrl>https://github.com/octo-org/octo-cats-and-dogs</RepositoryUrl>
  </PropertyGroup>

</Project>
```
{% endif %}

#### Autenticando con el `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar un paquete

Puedes publicar un paquete en el {% data variables.product.prodname_registry %} si te autenticas con un archivo de *nuget.config*{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest"%}, o si utilizas la opción de línea de comandos `--api-key` con tu token de acceso personal (PAT) de {% data variables.product.prodname_dotcom %}{% endif %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### Publicar un paquete utilizando el PAT de GitHub como tu clave de la API

Si aún no tienes un PAT para utilizar con tu cuenta de {% data variables.product.prodname_dotcom %}, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

1. Crear un proyecto nuevo.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Empaquetar el proyecto.
  ```shell
  dotnet pack--lanzamiento de configuración
  ```

3. Publicar el paquete utilizando tu PAT como la clave de la API.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

{% endif %}

#### Publicar un paquete utilizando un archivo *nuget.config*

Al publicar, debes usar el mismo valor para `OWNER` en tu archivo *csproj* que usas en tu archivo de autenticación *nuget.config*. Especifica o incrementa el número de versión en tu archivo *.csproj* y luego usa el comando `dotnet pack` para crear un archivo *.nuspec* para esa versión. Para obtener más información sobre cómo crear tu paquete, consulta la sección "[Crear y publicar un paquete](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" en la documentación de Microsoft.

{% data reusables.package_registry.authenticate-step %}
2. Crear un proyecto nuevo.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Agrega la información específica de tu proyecto al archivo de tu proyecto, que finaliza en *.csproj*.  Debes reemplazar:
    - `OWNER` por el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene tu proyecto.
    - `REPOSITORY` por el nombre del repositorio que contiene el paquete que deseas publicar.
    - `1.0.0` con el número de versión del paquete.{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
    - `HOSTNAME` con el nombre de host de {% data variables.product.product_location %}.{% endif %}
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
      <RepositoryUrl>https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

  </Project>
  ```
4. Empaquetar el proyecto.
  ```shell
  dotnet pack--lanzamiento de configuración
  ```

5. Publicar el paquete utilizando la `clave` que especificaste en el archivo *nuget.config*.
  ```shell
  dotnet nuget subir "bin/Release/OctocatApp. 1.0.0. nupkg"--Source "GitHub"
  ```

{% data reusables.package_registry.viewing-packages %}

### Publicar varios paquetes en el mismo repositorio

Para publicar varios paquetes en el mismo repositorio, puedes incluir la misma URL del repositorio de {% data variables.product.prodname_dotcom %} en los campos `RepositoryURL` en todos los archivos del proyecto *.csproj*. {% data variables.product.prodname_dotcom %} coincide con el repositorio en base a ese campo.

Por ejemplo, los proyectos *OctodogApp* y *OctocatApp* publicarán en el mismo repositorio:

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
    <RepositoryUrl>https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/octo-org/octo-cats-and-dogs</RepositoryUrl>
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
    <RepositoryUrl>https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/octo-org/octo-cats-and-dogs</RepositoryUrl>
  </PropertyGroup>

</Project>
```

### Instalar un paquete

El uso de paquetes desde {% data variables.product.prodname_dotcom %} en tu proyecto es similar al uso de paquetes desde *nuget.org*. Agrega las dependencias de tu paquete a tu archivo *.csproj*, especificando el nombre del paquete y la versión. Para obtener más información sobre cómo utilizar un archivo *.csproj* en tu proyecto, consulta "[Trabajar con paquetes NuGet](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)"en la documentación de Microsoft.

{% data reusables.package_registry.authenticate-step %}

2. Para usar un paquete, agrega `ItemGroup` y configura el campo `PackageReference` en el archivo de proyecto *.csproj*, reemplaza el paquete `OctokittenApp` por la dependencia de tu paquete y `1.0.0` por la versión que deseas usar:
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
      <RepositoryUrl>https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

    <ItemGroup>
      <PackageReference Include="OctokittenApp" Version="12.0.2" />
    </ItemGroup>

  </Project>
  ```

3. Instalar los paquetes con el comando `restore (restaurar)`.
  ```shell
  restaurar dotnet
  ```

### Leer más

- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[Borrar y restablecer un paquete](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[Borrar un paquete](/packages/learn-github-packages/deleting-a-package){% endif %}"
