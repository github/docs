---
title: NuGetレジストリの利用
intro: '{% data variables.product.prodname_registry %} に NuGet パッケージを公開し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係として .NET プロジェクトで利用するよう `dotnet` コマンドライン インターフェイス (CLI) を構成できます。'
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
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192922'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-nuget-v2 %} {% data variables.product.prodname_github_codespaces %} と {% data variables.product.prodname_actions %} に対して、パッケージに権限を個別に付与することもできます。 詳しくは、「[パッケージへの Codespaces のアクセスの確保](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)」と、「[パッケージへのワークフロー アクセスの確認](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package)」をご覧ください。
{% endif %}

### {% data variables.product.prodname_actions %} における `GITHUB_TOKEN` での認証

リポジトリ内の nuget.config ファイルで{% data variables.product.pat_generic %}をハードコーディングするのでなく、`GITHUB_TOKEN` を使用して {% data variables.product.prodname_actions %} ワークフローで {% data variables.product.prodname_registry %} に対して認証を行うには、以下のコマンドを使用してください。

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### {% data variables.product.pat_generic %} で認証を行う

{% data reusables.package_registry.required-scopes %}

`dotnet` コマンド ライン インターフェイス (CLI) で {% data variables.product.prodname_registry %} に対して認証を行うには、`dotnet` CLI クライアントの `packageSources` に {% data variables.product.prodname_registry %} をソースとして指定して、プロジェクト ディレクトリに *nuget.config* ファイルを作成してください。

以下のように置き換えてください。
- `USERNAME` を {% data variables.product.prodname_dotcom %} の個人アカウントの名前に。
- `TOKEN` を{% data variables.product.pat_v1 %} に。
- `OWNER` を、インストールする{% ifversion packages-nuget-v2 %}パッケージを所有するユーザーまたは Organization のアカウントの名前、パッケージの公開先とするユーザーまたは Organization のアカウントの名前、{% else %}ご利用のプロジェクトを含むリポジトリの名前に{% endif %}。{% ifversion ghes or ghae %}
- `HOSTNAME` を {% data variables.location.product_location %} のホスト名に。{% endif %}

{% ifversion ghes %}インスタンスで Subdomain Isolation が有効になっている場合:{% endif %}

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

{% ifversion ghes %}インスタンスで Subdomain Isolation が無効になっている場合:

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

## パッケージの公開

*nuget.config* ファイルを使用して認証を行うか、コマンド ライン オプションの `--api-key` と {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %} を使うことで、パッケージを {% data variables.product.prodname_registry %} に公開できます。

{% ifversion packages-nuget-v2 %}

NuGet レジストリを使用すると、Organization または個人のアカウント内にパッケージを格納し、パッケージをリポジトリに関連付けることができます。 権限をリポジトリから継承するか、リポジトリとは別に細かい権限を設定するかを選ぶことができます。

{% data reusables.package_registry.publishing-user-scoped-packages %}

`nuget.config` ファイルで `RepositoryURL` を指定すると、公開されたパッケージは指定されたリポジトリに自動的に接続されます。 詳しくは、「[`nuget.config` ファイルを使用してパッケージを公開する](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file)」をご覧ください。 既に公開されているパッケージをリポジトリにリンクする方法については、「[パッケージへのリポジトリの接続](/packages/learn-github-packages/connecting-a-repository-to-a-package)」を参照してください。

{% endif %}

### GitHub {% data variables.product.pat_generic %} を API キーとして使用してパッケージを公開する

{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} のアカウントで使う PAT がまだない場合は、「[{% data variables.product.pat_generic %}を作成する](/github/authenticating-to-github/creating-a-personal-access-token)」をご覧ください。

1. 新しいプロジェクトを作成します。
  ```shell
  dotnet new console --name OctocatApp
  ```
2. プロジェクトをパッケージ化してください。
  ```shell
  dotnet pack --configuration Release
  ```

3. {% data variables.product.pat_generic %} を API キーとして使用してパッケージを発行します。
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### *nuget.config* ファイルを使用してパッケージを公開する

公開の際には、*nuget.config* 認証ファイルで使う *csproj* ファイルで、`OWNER` に同じ値を使う必要があります。 *.csproj* ファイルでバージョン番号を指定もしくはインクリメントし、`dotnet pack` コマンドを使用してそのバージョンのための *.nuspec* ファイルを作成してください。 パッケージの作成について詳しくは、Microsoft のドキュメントの「[パッケージの作成と公開](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)」をご覧ください。

{% data reusables.package_registry.authenticate-step %}
2. 新しいプロジェクトを作成します。
  ```shell
  dotnet new console --name OctocatApp
  ```
3. プロジェクト固有の情報をプロジェクト ファイル (末尾が *.csproj* のファイル) に追加します。  以下のように置き換えてください。
    - `OWNER` を、パッケージを接続するリポジトリを所有するユーザーまたは Organization アカウントの名前に。
    - `REPOSITORY` を、パッケージを接続するリポジトリの名前に。                      
    - `1.0.0` をパッケージのバージョン番号に。{% ifversion ghes or ghae %}
    - `HOSTNAME` を {% data variables.location.product_location %} のホスト名に。{% endif %}
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
4. プロジェクトをパッケージ化してください。
  ```shell
  dotnet pack --configuration Release
  ```

5. *nuget.config* ファイルで指定した `key` を使用してパッケージを公開します。
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## 同じリポジトリへの複数パッケージの公開

複数のパッケージを同じリポジトリに接続するには、同じ {% data variables.product.prodname_dotcom %} リポジトリの URL をすべての *.csproj* プロジェクト ファイルの `RepositoryURL` フィールドに含めることができます。 {% data variables.product.prodname_dotcom %}は、そのフィールドに基づいてリポジトリをマッチします。

たとえば、以下の *OctodogApp* と *OctocatApp* プロジェクトは同じリポジトリに公開されます。

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

## パッケージのインストール

プロジェクトで {% data variables.product.prodname_dotcom %} のパッケージを使うことは、*nuget.org* のパッケージを使うことと似ています。パッケージの名前とバージョンを指定して、パッケージの依存関係を *.csproj* ファイルに追加してください。 プロジェクトで *.csproj* ファイルを使う方法について詳しくは、[NuGet パッケージの利用](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)に関する Microsoft のドキュメントをご覧ください。

{% data reusables.package_registry.authenticate-step %}

2. パッケージを使用するには、 *.csproj* プロジェクト ファイルで `ItemGroup` を追加し、`PackageReference` フィールドを構成します。 `Include="OctokittenApp"` の `OctokittenApp` の値をパッケージの依存関係に置き換え、`Version="12.0.2"` の `12.0.2` の値を使用するバージョンに置き換えます。
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

3. `restore` コマンドを使用してパッケージをインストールします。
  ```shell
  dotnet restore
  ```

## トラブルシューティング

*.csproj* 内の `RepositoryUrl` が想定されているリポジトリに設定されていない場合、NuGet パッケージのプッシュに失敗する可能性があります。

nuspec ファイルを使用している場合は、`repository` 要素と必須の `type` および `url` 属性が含まれていることを確認してください。

`GITHUB_TOKEN` を使って {% data variables.product.prodname_actions %} ワークフロー内の {% data variables.product.prodname_registry %} レジストリの認証を受けている場合、そのトークンからは、ワークフローの実行場所とは異なるリポジトリ内にあるプライベート リポジトリベースのパッケージにアクセスできません。 他のリポジトリに関連付けられたパッケージにアクセスするには、代わりにスコープが `read:packages` の {% data variables.product.pat_v1 %} を生成し、このトークンをシークレットとして渡します。
 
## 参考資料

- 「[パッケージを削除および復元する](/packages/learn-github-packages/deleting-and-restoring-a-package)」
