---
title: Trabalhando com o registro NuGet
intro: 'Você pode configurar a CLI (interface de linha de comando) `dotnet` para publicar pacotes NuGet no {% data variables.product.prodname_registry %} e usar pacotes armazenados no {% data variables.product.prodname_registry %} como dependências em um projeto .NET.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580508'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

### Autenticação com o `GITHUB_TOKEN` no {% data variables.product.prodname_actions %}

Use o comando a seguir para se autenticar no {% data variables.product.prodname_registry %} em um fluxo de trabalho do {% data variables.product.prodname_actions %} usando o `GITHUB_TOKEN`, em vez de embutir um token em código em um arquivo nuget.config no repositório:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Efetuando a autenticação com um token de acesso pessoal

{% data reusables.package_registry.required-scopes %}

Para se autenticar no {% data variables.product.prodname_registry %} com a CLI (interface de linha de comando) do `dotnet`, crie um arquivo *nuget.config* no diretório do projeto especificando o {% data variables.product.prodname_registry %} como uma fonte em `packageSources` para o cliente da CLI do `dotnet`.

Você deve substituir:
- `USERNAME` com o nome de sua conta de usuário em {% data variables.product.prodname_dotcom %}.
- `TOKEN` pelo seu token de acesso pessoal.
- `OWNER` pelo nome da conta de usuário ou de organização que é o proprietário do repositório que contém o projeto.{% ifversion ghes or ghae %}
- `HOSTNAME` pelo nome do host do {% data variables.product.product_location %}.{% endif %}

{% ifversion ghes %}Se a sua instância tiver o isolamento de subdomínio habilitado: {% endif %}

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

{% ifversion ghes %} Se a sua instância tiver o isolamento de subdomínio desabilitado:

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

## Publicando um pacote

Publique um pacote no {% data variables.product.prodname_registry %} autenticando-se com um arquivo *nuget.config* ou usando a opção `--api-key` de linha de comando com seu PAT (token de acesso pessoal) do {% data variables.product.prodname_dotcom %}.

### Publicar um pacote usando um o PAT do GitHub como sua chave da API

Se você ainda não tem um PAT para uso na sua conta no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, confira "[Como criar um token de acesso pessoal](/github/authenticating-to-github/creating-a-personal-access-token)".

1. Criar um novo projeto.
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

### Como publicar um pacote usando um arquivo *nuget.config*

Para a publicação, você precisa usar o mesmo valor para `OWNER` no arquivo *csproj* usado no arquivo de autenticação *nuget.config*. Especifique ou incremente o número de versão no arquivo *.csproj* e use o comando `dotnet pack` para criar um arquivo *.nuspec* para essa versão. Para obter mais informações sobre como criar seu pacote, confira "[Criar e publicar um pacote](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" na documentação da Microsoft.

{% data reusables.package_registry.authenticate-step %}
2. Criar um novo projeto.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Adicione informações específicas do seu projeto ao arquivo do projeto, que termina com *.csproj*.  Você deve substituir:
    - `OWNER` pelo nome da conta de usuário ou de organização que é o proprietário do repositório que contém o projeto.
    - `REPOSITORY` pelo nome do repositório que contém o pacote que você deseja publicar.                      
    - `1.0.0` pelo número de versão do pacote.{% ifversion ghes or ghae %}
    - `HOSTNAME` pelo nome do host do {% data variables.product.product_location %}.{% endif %}
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

5. Publique o pacote usando a `key` que você especificou no arquivo *nuget.config*.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## Publicar vários pacotes no mesmo repositório

Para publicar vários pacotes no mesmo repositório, você pode incluir a mesma URL do repositório do {% data variables.product.prodname_dotcom %} nos campos `RepositoryURL` em todos os arquivos de projeto *.csproj*. O {% data variables.product.prodname_dotcom %} corresponde ao repositório baseado nesse campo.

Por exemplo, os projetos *OctodogApp* e *OctocatApp* serão publicados no mesmo repositório:

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

## Instalando um pacote

O uso de pacotes do {% data variables.product.prodname_dotcom %} no projeto é semelhante ao uso de pacotes de *nuget.org*. Adicione as dependências do pacote ao arquivo *.csproj* especificando o nome e a versão do pacote. Para obter mais informações sobre como usar um arquivo *.csproj* no seu projeto, confira "[Como trabalhar com pacotes NuGet](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)" na documentação da Microsoft.

{% data reusables.package_registry.authenticate-step %}

2. Para usar um pacote, adicione `ItemGroup` e configure o campo `PackageReference` no arquivo de projeto *.csproj*. Substitua o valor `OctokittenApp` em `Include="OctokittenApp"` por sua dependência de pacote e o valor `12.0.2` em `Version="12.0.2"` pela versão que você deseja usar:
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

3. Instale os pacotes com o comando `restore`.
  ```shell
  dotnet restore
  ```

## Solução de problemas

Talvez o pacote NuGet não consiga efetuar push se a `RepositoryUrl` no *.csproj* não está definida como o repositório esperado.

Se você estiver usando um arquivo nuspec, verifique se ele tem um elemento `repository` com os atributos `type` e `url` obrigatórios.

Se você estiver usando um `GITHUB_TOKEN` para autenticação em um registro {% data variables.product.prodname_registry %} em um fluxo de trabalho {% data variables.product.prodname_actions %}, o token não poderá acessar pacotes baseados em repositório privado em um repositório diferente de onde o fluxo de trabalho está sendo executado. Alternativamente, para acessar pacotes associados a outros repositórios, gere um PAT com o escopo `read:packages` e passe esse token como um segredo.
 
## Leitura adicional

- "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"
