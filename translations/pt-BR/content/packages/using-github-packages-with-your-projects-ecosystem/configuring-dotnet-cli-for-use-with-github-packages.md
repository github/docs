---
title: Configurar a CLI `dotnet` para uso com o GitHub Packages
intro: 'Você pode configurar a interface de linha de comando `dotnet` (CLI) para publicar pacotes NuGet no {% data variables.product.prodname_registry %} e usar pacotes armazenados no {% data variables.product.prodname_registry %} como dependências em um projeto .NET.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-nuget-for-use-with-github-packages
  - /github/managing-packages-with-github-packages/configuring-dotnet-cli-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

### Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

#### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Para efetuar a autenticação em {% data variables.product.prodname_registry %} com a interface da linha de comando (CLI) `dotnet`, crie um arquivo *nuget.config* no diretório do seu projeto, especificando {% data variables.product.prodname_registry %} como uma fonte em `packageSources` para o cliente da CLI `Dotnet`.

Você deve substituir:
- `USUÁRIO` pelo o nome da sua conta de usuário em {% data variables.product.prodname_dotcom %}.
- `TOKEN` pelo seu token de acesso pessoal.
- `OWNER` with the name of the user or organization account that owns the repository containing your project.{% if enterpriseServerVersions contains currentVersion %}
- `HOSTNAME` com o nome de host para sua instância de {% data variables.product.prodname_ghe_server %}.

Se sua instância tem o isolamento de subdomínio habilitado:
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
Se sua instância tem o isolamento de subdomínio desabilitado:

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

#### Efetuando a autenticação com o `GITHUB_TOKEN`

{% data reusables.package_registry.package-registry-with-github-tokens %}

### Publicar um pacote

Você pode publicar um pacote no {% data variables.product.prodname_registry %}, efetuando a autenticação com um arquivo *nuget.config*. Ao fazer a publicação, você precisa usar o mesmo valor para `PROPRIETÁRIO` no seu arquivo *csproj* que você usa no seu arquivo de autenticação *nuget.config*. Especifique ou incremente o número da versão no seu *.csproj* e, em seguida, utilize o comando `dotnet pack` para criar um arquivo *.nuspec* para essa versão. Para obter mais informações sobre como criar seu pacote, consulte "[Criar e publicar um pacote](https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" na documentação da Microsoft.

{% data reusables.package_registry.viewing-packages %}

{% data reusables.package_registry.authenticate-step %}
2. Criar um novo projeto
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Adicione informações específicas do seu projeto ao arquivo do seu projeto, que termina em *.csproj*.  Você deve substituir:
    - `PROPRIETÁRIO` com o nome do usuário ou conta da organização proprietária do repositório que contém o seu projeto.
    - `REPOSITÓRIO` pelo nome do repositório que contém o pacote que você deseja publicar.
    - `1.0.0` with the version number of the package.{% if enterpriseServerVersions contains currentVersion %}
    - `HOSTNAME` com o nome de host para sua instância de {% data variables.product.prodname_ghe_server %} .{% endif %}
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
4. Empacotar o projeto.
  ```shell
  dotnet pack --configuration Release
  ```

5. Publique o pacote usando a `chave` que você especificou no arquivo *nuget.config*.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

### Publicar vários pacotes no mesmo repositório

Para publicar vários pacotes no mesmo repositório, você pode incluir a mesma URL do repositório do {% data variables.product.prodname_dotcom %} nos campos de `ReposityURL` em todos os arquivos de projeto *.csproj*. O {% data variables.product.prodname_dotcom %} corresponde ao repositório baseado nesse campo.

Por exemplo, os projetos *OctodogApp* e *OctocatApp* irão publicar no mesmo repositório:

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

### Instalar um pacote

Usar pacotes do {% data variables.product.prodname_dotcom %} no seu projeto é semelhante a usar pacotes do *nuget.org*. Adicione suas dependências de pacote ao seu arquivo *.csproj* especificando o nome e a versão do pacote. Para obter mais informações sobre como usar um arquivo *.csproj* no seu projeto, consulte "[Trabalhar com pacotes NuGet](https://docs.microsoft.com/en-us/nuget/consume-packages/overview-and-workflow)" na documentação da Microsoft.

{% data reusables.package_registry.authenticate-step %}

2. Para usar um pacote, adicione `ItemGroup` e configure o campo `PackageReference` no arquivo de projeto *.csproj*, substituindo o pacote `OctokittenApp` pelo seu pacote de dependência e `1.0.0` pela versão que você deseja usar:
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

3. Instale os pacotes com o comando `restaurar`.
  ```shell
  restaurar dotnet
  ```

### Leia mais

- "[Excluir um pacote](/packages/publishing-and-managing-packages/deleting-a-package/)"
