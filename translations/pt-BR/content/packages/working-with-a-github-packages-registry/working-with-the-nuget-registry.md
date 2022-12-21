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
ms.openlocfilehash: cb9e190bb6cfa86ce1bdb31581de6e7d14e9dac8
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192918'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Autenticar-se no {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-nuget-v2 %} Você pode optar por dar permissões de acesso aos pacotes de forma independente para o {% data variables.product.prodname_github_codespaces %} e o {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como garantir que os codespaces acessem seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)" e "[Como garantir o acesso do fluxo de trabalho ao seu pacote](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)".
{% endif %}

### Autenticação com o `GITHUB_TOKEN` no {% data variables.product.prodname_actions %}

Use o seguinte comando para autenticar o {% data variables.product.prodname_registry %} em um fluxo de trabalho do {% data variables.product.prodname_actions %} usando o `GITHUB_TOKEN` em vez de codificar um {% data variables.product.pat_generic %} em um arquivo nuget.config no repositório:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Autenticar com um {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Para se autenticar no {% data variables.product.prodname_registry %} com a CLI (interface de linha de comando) do `dotnet`, crie um arquivo *nuget.config* no diretório do projeto especificando o {% data variables.product.prodname_registry %} como uma fonte em `packageSources` para o cliente da CLI do `dotnet`.

Você deve substituir:
- `USERNAME` com o nome de sua conta de usuário em {% data variables.product.prodname_dotcom %}.
- `TOKEN` com seu {% data variables.product.pat_v1 %}.
- `OWNER` com o nome do usuário ou conta da organização que possui {% ifversion packages-nuget-v2 %}o pacote que deseja instalar ou no qual deseja publicar um pacote{% else %}o repositório que contém seu projeto{% endif %}.{% ifversion ghes or ghae %}
- `HOSTNAME` com o nome do host para {% data variables.location.product_location %}.{% endif %}

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

Você pode publicar um pacote no {% data variables.product.prodname_registry %} autenticando com um arquivo *nuget.config* ou usando a opção de linha de comando `--api-key` com seu {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}.

{% ifversion packages-nuget-v2 %}

O registro do NuGet armazena pacotes em sua organização ou conta pessoal e permite que você associe pacotes a um repositório. Você pode escolher se deve herdar permissões de um repositório ou definir permissões granulares, independentemente de um repositório.

{% data reusables.package_registry.publishing-user-scoped-packages %}

Se você especificar `RepositoryURL` em seu arquivo `nuget.config`, o pacote publicado será automaticamente conectado ao repositório especificado. Para obter mais informações, confira "[Como publicar um pacote usando um arquivo `nuget.config`](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file)". Para obter informações sobre como vincular um pacote já publicado a um repositório, confira "[Como conectar um repositório a um pacote](/packages/learn-github-packages/connecting-a-repository-to-a-package)".

{% endif %}

### Como publicar um pacote usando um GitHub {% data variables.product.pat_generic %} como sua chave de API

Se você ainda não tem um PAT para usar em sua conta no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, confira "[Como criar um {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

1. Criar um novo projeto.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Empacotar o projeto.
  ```shell
  dotnet pack --configuration Release
  ```

3. Publicar o pacote usando seu {% data variables.product.pat_generic %} como a chave de API.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
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
    - `OWNER` com o nome da conta de usuário ou da organização que possui o repositório ao qual você deseja conectar seu pacote.
    - `REPOSITORY` com o nome do repositório ao qual você deseja conectar seu pacote.                      
    - `1.0.0` pelo número de versão do pacote.{% ifversion ghes or ghae %}
    - `HOSTNAME` com o nome do host para {% data variables.location.product_location %}.{% endif %}
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

Para conectar vários pacotes ao mesmo repositório, você pode incluir o mesmo URL de repositório do {% data variables.product.prodname_dotcom %} nos campos `RepositoryURL` em todos os arquivos de projeto *.csproj*. O {% data variables.product.prodname_dotcom %} corresponde ao repositório baseado nesse campo.

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

Se você estiver usando um `GITHUB_TOKEN` para autenticação em um registro {% data variables.product.prodname_registry %} em um fluxo de trabalho {% data variables.product.prodname_actions %}, o token não poderá acessar pacotes baseados em repositório privado em um repositório diferente de onde o fluxo de trabalho está sendo executado. Para acessar pacotes associados a outros repositórios, em vez disso, gere um {% data variables.product.pat_v1 %} com o escopo `read:packages` e passe esse token como um segredo.
 
## Leitura adicional

- "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package)"
