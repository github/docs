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
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Nota:** Cuando instalas o publicas una imagen de docker, {% data variables.product.prodname_registry %} no es compatible con capas externas, tales como imágenes de Windows.

### Autenticarte en {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Autenticarte con un token de acceso personal

{% data reusables.package_registry.required-scopes %}

Para autenticarte en {% data variables.product.prodname_registry %} con la interfaz de la línea de comando (CLI) `dotnet`, crea un archivo *nuget.config* en el directorio de tu proyecto especificando {% data variables.product.prodname_registry %} como una fuente en `packageSources` para el cliente de la CLI `Dotnet`.

Debes reemplazar:
- `USERNAME` (nombre de usuario) por el nombre de tu cuenta de usuario en {% data variables.product.prodname_dotcom %}.
- `TOKEN` por tu token de acceso personal.
- `OWNER` con el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene tu proyecto.{% if enterpriseServerVersions contains currentVersion %}
- `HOSTNAME` con el nombre de host para tu instancia de {% data variables.product.prodname_ghe_server %}.

Para obtener más información acerca de cómo crear un paquete, consulta la [documentación maven.apache.org](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html).
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

You can publish a package to {% data variables.product.prodname_registry %} by authenticating with a *nuget.config* file{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}, or by using the `--api-key` command line option with your {% data variables.product.prodname_dotcom %} personal access token (PAT){% endif %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
#### Publishing a package using a GitHub PAT as your API key

If you don't already have a PAT to use for your {% data variables.product.prodname_dotcom %} account, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

1. Crear un proyecto nuevo.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Empaquetar el proyecto.
  ```shell
  dotnet pack--lanzamiento de configuración
  ```

3. Publish the package using your PAT as the API key.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

{% endif %}

#### Publishing a package using a *nuget.config* file

Al publicar, debes usar el mismo valor para `OWNER` en tu archivo *csproj* que usas en tu archivo de autenticación *nuget.config*. Especifica o incrementa el número de versión en tu archivo *.csproj* y luego usa el comando `dotnet pack` para crear un archivo *.nuspec* para esa versión. Para obtener más información sobre cómo crear tu paquete, consulta la sección "[Crear y publicar un paquete](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" en la documentación de Microsoft.

{% data reusables.package_registry.authenticate-step %}
2. Crear un proyecto nuevo.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Agrega la información específica de tu proyecto al archivo de tu proyecto, que finaliza en *.csproj*.  Debes reemplazar:
    - `OWNER` por el nombre de la cuenta de usuario o de organización a la que pertenece el repositorio que contiene tu proyecto.
    - `REPOSITORY` por el nombre del repositorio que contiene el paquete que deseas publicar.
    - `1.0.0` con el número de versión del paquete.{% if enterpriseServerVersions contains currentVersion %}
    - `HOSTNAME` con el nombre de host para tu instancia de {% data variables.product.prodname_ghe_server %}.{% endif %}
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

### Further reading

- "[Eliminar un paquete](/packages/publishing-and-managing-packages/deleting-a-package/)"
