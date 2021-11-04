---
title: Trabalhando com o registro NuGet
intro: 'Você pode configurar a interface de linha de comando `dotnet` (CLI) para publicar pacotes NuGet no {% data variables.product.prodname_registry %} e usar pacotes armazenados no {% data variables.product.prodname_registry %} como dependências em um projeto .NET.'
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
shortTitle: Registro do NuGet
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**Note:** When installing or publishing a docker image, {% data variables.product.prodname_registry %} does not currently support foreign layers, such as Windows images.

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

### Efetuando a autenticação com `GITHUB_TOKEN` em {% data variables.product.prodname_actions %}

Use o comando a seguir para efetuar a autenticação em {% data variables.product.prodname_registry %} em um fluxo de trabalho {% data variables.product.prodname_actions %} usando o `GITHUB_TOKEN` em vez de codificar um token em um arquivo nuget.config no repositório:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Para efetuar a autenticação em {% data variables.product.prodname_registry %} com a interface da linha de comando (CLI) `dotnet`, crie um arquivo *nuget.config* no diretório do seu projeto, especificando {% data variables.product.prodname_registry %} como uma fonte em `packageSources` para o cliente da CLI `Dotnet`.

Você deve substituir:
- `USUÁRIO` pelo o nome da sua conta de usuário em {% data variables.product.prodname_dotcom %}.
- `TOKEN` pelo seu token de acesso pessoal.
- `PROPRIETÁRIO` com o nome da conta do usuário ou da organização que é proprietário do repositório que contém o seu projeto.{% ifversion ghes or ghae %}
- `HOSTNAME` com o nome do host para {% data variables.product.product_location %}.{% endif %}

{% ifversion ghes %}se sua instância tiver o isolamento de subdomínio habilitado:
{% endif %}

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

{% ifversion ghes %}
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

## Publicar um pacote

You can publish a package to {% data variables.product.prodname_registry %} by authenticating with a *nuget.config* file, or by using the `--api-key` command line option with your {% data variables.product.prodname_dotcom %} personal access token (PAT).

### Publicar um pacote usando um o PAT do GitHub como sua chave da API

If you don't already have a PAT to use for your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

1. Criar um novo projeto
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Empacotar o projeto.
  ```shell
  dotnet pack --configuration Release
  ```

3. Publique o pacote usando o seu PAT como a chave da API.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}


### Publicar um pacote usando um arquivo *nuget.config*

Ao fazer a publicação, você precisa usar o mesmo valor para `PROPRIETÁRIO` no seu arquivo *csproj* que você usa no seu arquivo de autenticação *nuget.config*. Especifique ou incremente o número da versão no seu *.csproj* e, em seguida, utilize o comando `dotnet pack` para criar um arquivo *.nuspec* para essa versão. Para obter mais informações sobre como criar seu pacote, consulte "[Criar e publicar um pacote](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" na documentação da Microsoft.

{% data reusables.package_registry.authenticate-step %}
2. Criar um novo projeto
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Adicione informações específicas do seu projeto ao arquivo do seu projeto, que termina em *.csproj*.  Você deve substituir:
    - `PROPRIETÁRIO` com o nome do usuário ou conta da organização proprietária do repositório que contém o seu projeto.
    - `REPOSITÓRIO` pelo nome do repositório que contém o pacote que você deseja publicar.
    - `1.0.0` com o número de versão do pacote.{% ifversion ghes or ghae %}
    - `HOSTNAME` com o nome do host para {% data variables.product.product_location %}.{% endif %}
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
4. Empacotar o projeto.
  ```shell
  dotnet pack --configuration Release
  ```

5. Publique o pacote usando a `chave` que você especificou no arquivo *nuget.config*.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## Publicar vários pacotes no mesmo repositório

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

## Instalar um pacote

Usar pacotes do {% data variables.product.prodname_dotcom %} no seu projeto é semelhante a usar pacotes do *nuget.org*. Adicione suas dependências de pacote ao seu arquivo *.csproj* especificando o nome e a versão do pacote. Para obter mais informações sobre como usar um arquivo *.csproj* no seu projeto, consulte "[Trabalhar com pacotes NuGet](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)" na documentação da Microsoft.

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
      <RepositoryUrl>https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
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

## Solução de Problemas

Seu pacote NuGet pode não conseguir fazer push se o `RepositoryUrl` em *.csproj* não estiver definido como o repositório esperado.

## Leia mais

- "{% ifversion fpt or ghes > 3.0 or ghec %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}"
