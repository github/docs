---
title: NuGet 레지스트리 작업
intro: 'NuGet 패키지를 {% data variables.product.prodname_registry %}에 게시하고 {% data variables.product.prodname_registry %}에 저장된 패키지를 .NET 프로젝트의 종속성으로 사용하도록 `dotnet` CLI(명령줄 인터페이스)를 구성할 수 있습니다.'
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192923'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## {% data variables.product.prodname_registry %} 인증

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-nuget-v2 %} {% data variables.product.prodname_github_codespaces %} 및 {% data variables.product.prodname_actions %}에 대해 패키지에 대한 액세스 권한을 독립적으로 부여하도록 선택할 수 있습니다. 자세한 내용은 "[Codespaces가 패키지에 액세스하도록 보장](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)" 및 "[패키지에 대한 워크플로 액세스 보장"을 참조하세요](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
{% endif %}

### {% data variables.product.prodname_actions %}에서 `GITHUB_TOKEN`으로 인증

다음 명령을 사용하여 리포지토리의 nuget.config 파일에서 {% data variables.product.pat_generic %}를 하드 코딩하는 대신 을 사용하여 `GITHUB_TOKEN` {% data variables.product.prodname_actions %} 워크플로에서 {% data variables.product.prodname_registry %}에 인증합니다.

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### {% data variables.product.pat_generic %}을(를) 사용하여 인증

{% data reusables.package_registry.required-scopes %}

`dotnet` 명령줄 인터페이스(CLI)로 {% data variables.product.prodname_registry %}에 인증하려면 `dotnet` CLI 클라이언트에 대한 `packageSources`에서{% data variables.product.prodname_registry %}를 소스로 지정하여 프로젝트 디렉터리 파일에서 *nuget.config* 파일을 만듭니다.

아래와 같이 바꿔야 합니다.
- `USERNAME`을 {% data variables.product.prodname_dotcom %}에 있는 개인 계정의 이름으로 바꿉니다.
- `TOKEN` {% data variables.product.pat_v1 %}.
- `OWNER` {% ifversion packages-nuget-v2 %}설치하려는 패키지 또는 패키지를 게시하려는 사용자 또는 조직 계정의 이름을 사용하여{% else %}프로젝트가 포함된 리포지토리{% endif %}. {% ifversion ghes or ghae %}
- `HOSTNAME` {% data variables.location.product_location %}의 호스트 이름을 사용합니다. {% endif %}

{% ifversion ghes %}인스턴스에 하위 도메인 격리를 사용 설정한 경우: {% endif %}

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

{% ifversion ghes %}인스턴스에 하위 도메인 격리를 사용하지 않도록 설정한 경우:

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

## 패키지 게시

nuget.config파일로 인증하거나 {% data variables.product.prodname_dotcom %} {% data *variables.product.pat_v1* %}와 함께 명령줄 옵션을 사용하여 `--api-key` {% data variables.product.prodname_registry %}에 패키지를 게시할 수 있습니다.

{% ifversion packages-nuget-v2 %}

NuGet 레지스트리는 조직 또는 개인 계정 내에 패키지를 저장하며 패키지를 리포지토리와 연결할 수 있습니다. 리포지토리에서 사용 권한을 상속할지 또는 리포지토리와 독립적으로 세분화된 권한을 설정할지 선택할 수 있습니다.

{% data reusables.package_registry.publishing-user-scoped-packages %}

파일에서 `nuget.config` 을 `RepositoryURL` 지정하면 게시된 패키지가 지정된 리포지토리에 자동으로 연결됩니다. 자세한 내용은 "[파일을 사용하여 패키지 게시"를 `nuget.config` 참조하세요](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file). 이미 게시된 패키지를 리포지토리에 연결하는 방법에 대한 자세한 내용은 "패키지에 [리포지토리 연결"을 참조하세요](/packages/learn-github-packages/connecting-a-repository-to-a-package).

{% endif %}

### GitHub {% data variables.product.pat_generic %}을(를) 사용하여 패키지를 API 키로 게시

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}에서 계정에 사용할 PAT가 아직 없는 경우 "[{% 데이터 variables.product.pat_generic %} 만들기"를](/github/authenticating-to-github/creating-a-personal-access-token) 참조하세요.

1. 새 프로젝트를 만듭니다.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. 프로젝트를 패키지합니다.
  ```shell
  dotnet pack --configuration Release
  ```

3. {% data variables.product.pat_generic %}을(를) 사용하여 패키지를 API 키로 게시합니다.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### *nuget.config* 파일을 사용하여 패키지 게시

게시할 때 *nuget.config* 인증 파일에서 사용하는 *csproj* 파일에서 `OWNER`에 동일한 값을 사용해야 합니다. *.csproj* 파일에 버전 번호를 지정하거나 증분한 다음 `dotnet pack` 명령을 사용하여 해당 버전에 맞는 *.nuspec* 파일을 만듭니다. 패키지를 만드는 방법에 대한 자세한 내용은 Microsoft 설명서의 “[패키지 만들기 및 게시](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)”를 참조하세요.

{% data reusables.package_registry.authenticate-step %}
2. 새 프로젝트를 만듭니다.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. 프로젝트의 특정 정보를 프로젝트의 파일에 추가합니다. 이 파일은 *.csproj* 로 끝납니다.  아래와 같이 바꿔야 합니다.
    - `OWNER` 패키지에 연결하려는 리포지토리를 소유하는 사용자 또는 조직 계정의 이름입니다.
    - `REPOSITORY` 을 패키지에 연결하려는 리포지토리의 이름으로 을 사용합니다.                      
    - `1.0.0`을 패키지의 버전 번호로 바꿉니다.{% ifversion ghes or ghae %}
    - `HOSTNAME` {% data variables.location.product_location %}의 호스트 이름을 사용합니다. {% endif %}
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
4. 프로젝트를 패키지합니다.
  ```shell
  dotnet pack --configuration Release
  ```

5. `key`를 사용해 *nuget.config* 파일에 지정한 패키지를 게시합니다.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## 동일한 리포지토리에 여러 패키지 게시

여러 패키지를 동일한 리포지토리에 연결하려면 모든 *.csproj* 프로젝트 파일의 필드에 동일한 {% 데이터 variables.product.prodname_dotcom %} 리포지토리 URL `RepositoryURL` 을 포함할 수 있습니다. {% data variables.product.prodname_dotcom %}은 해당 필드를 기반으로 리포지토리와 일치시킵니다.

예를 들어 *OctodogApp* 및 *OctocatApp* 프로젝트는 동일한 리포지토리에 게시됩니다.

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

## 패키지 설치

프로젝트에서 {% data variables.product.prodname_dotcom %}의 패키지를 사용하는 것은 *nuget.org* 패키지를 사용하는 것과 비슷합니다. *.csproj* 파일에 패키지 종속성을 추가하여 패키지 이름과 버전을 지정합니다. 프로젝트에서 *.csproj* 파일을 사용하는 방법에 한 자세한 내용은 Microsoft 설명서의 “[NuGet 패키지 작업](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)”을 참조하세요.

{% data reusables.package_registry.authenticate-step %}

2. 패키지를 사용하려면 `ItemGroup`을 추가하고 *.csproj* 프로젝트 파일에서 `PackageReference` 필드를 구성합니다. `Include="OctokittenApp"`의 `OctokittenApp` 값을 패키지 종속성으로 바꾸고 `Version="12.0.2"`의 `12.0.2` 값을 사용하려는 버전으로 바꿉니다.
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

3. `restore` 명령으로 패키지를 설치합니다.
  ```shell
  dotnet restore
  ```

## 문제 해결

*.csproj* 의 `RepositoryUrl`이 예상된 리포지토리로 설정되지 않은 경우 NuGet 패키지가 푸시되지 않을 수 있습니다.

nuspec 파일을 사용하는 경우 필수 `type` 및 `url` 특성이 있는 `repository` 요소가 있는지 확인합니다.

`GITHUB_TOKEN`을 이용해 {% data variables.product.prodname_actions %} 워크플로에서 {% data variables.product.prodname_registry %} 레지스트리를 인증한다면, 토큰은 워크플로를 실행하는 리포지토리가 아닌 다른 리포지토리에 있는 프라이빗 리포지토리 기반 패키지에는 액세스할 수 없습니다. 다른 리포지토리와 연결된 패키지에 액세스하려면 대신 범위를 사용하여 {% data variables.product.pat_v1 %} `read:packages` 를 생성하고 이 토큰을 비밀로 전달합니다.
 
## 추가 참고 자료

- “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”
