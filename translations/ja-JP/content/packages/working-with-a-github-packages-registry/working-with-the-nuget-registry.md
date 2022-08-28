---
title: NuGetレジストリの利用
intro: '{% data variables.product.prodname_registry %} にNuGetパッケージを公開し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係として .Net プロジェクトで利用するよう`dotnet`コマンドラインインターフェース（CLI）を設定できます。'
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
shortTitle: NuGetレジストリ
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test`というリポジトリ内の`com.example:test`という名前のパッケージを公開します。

## {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

### {% data variables.product.prodname_actions %}における`GITHUB_TOKEN`での認証

リポジトリ内のnuget.configファイル内のハードコードされたトークンの代わりに`GITHUB_TOKEN`を使って{% data variables.product.prodname_actions %}ワークフロー内で{% data variables.product.prodname_registry %}の認証を受けるには、以下のコマンドを使ってください。

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

`dotnet`コマンドラインインターフェース（CLI）で{% data variables.product.prodname_registry %}に認証を受けるには、プロジェクトディレクトリに*nuget.config*ファイルを作成し、{% data variables.product.prodname_registry %}をソースとして`dotnet` CLIクライアントの`packageSources`の下に指定してください。

以下のように置き換えてください。
- `USERNAME`を{% data variables.product.prodname_dotcom %}上のユーザアカウント名で。
- `TOKEN`を個人アクセストークンで。
- `OWNER` を、プロジェクトを含むリポジトリを所有しているユーザまたはOrganizationアカウント名で。{% ifversion ghes or ghae %}
- `HOSTNAME` を、{% data variables.product.product_location %}インスタンスのホスト名で。{% endif %}

{% ifversion ghes %}インスタンスでSubdomain Isolationが有効化されている場合:
{% endif %}

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://{% ifversion fpt %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json" />
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
たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

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

## パッケージを公開する

*nuget.config*ファイルで認証を受ける{% ifversion fpt or ghes > 2.22 or ghae %}か、コマンドラインオプションの`--api-key`を{% data variables.product.prodname_dotcom %}個人アクセストークン（PAT）を使う{% endif %}ことで、パッケージを{% data variables.product.prodname_registry %}に公開できます。

{% ifversion fpt or ghes > 2.22 or ghae %}
### GitHub PATをAPIキーとして使用してパッケージを公開する

{% data variables.product.prodname_dotcom %}アカウントで使用するPATをまだ持っていない場合は、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

1. 新しいプロジェクトを作成してください。
  ```shell
  dotnet new console --name OctocatApp
  ```
2. プロジェクトをパッケージ化してください。
  ```shell
  dotnet pack --configuration Release
  ```

3. PATをAPIキーとして使用して、パッケージを公開します。
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

{% endif %}

### *nuget.config*ファイルを使用してパッケージを公開する

公開の際には、*nuget.config*認証ファイルで使用する*csproj*ファイル中で、`OWNER`に同じ値を使わなければなりません。 *.csproj*ファイル中でバージョン番号を指定もしくはインクリメントし、`dotnet pack`コマンドを使ってそのバージョンのための*.nuspec*ファイルを作成してください。 パッケージの作成に関する詳しい情報については、Microsoftのドキュメンテーション中の「[クイック スタート: パッケージの作成と公開 (dotnet CLI)](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)」を参照してください。

{% data reusables.package_registry.authenticate-step %}
2. 新しいプロジェクトを作成してください。
  ```shell
  dotnet new console --name OctocatApp
  ```
3. プロジェクト固有の情報をプロジェクトファイルに追加してください。プロジェクトファイルは*.csproj*で終わります。  以下のように置き換えてください。
    - `OWNER`を、プロジェクトを含むリポジトリを所有しているユーザもしくはOrganizationアカウント名で。
    - `REPOSITORY`を、公開したいパッケージを含むリポジトリの名前で。
    - `1.0.0`をパッケージのバージョン番号で。{% ifversion ghes or ghae %}
    - `HOSTNAME` を、{% data variables.product.product_location %}インスタンスのホスト名で。{% endif %}
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
      <RepositoryUrl>https://{% ifversion fpt %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

  </Project>
  ```
4. プロジェクトをパッケージ化してください。
  ```shell
  dotnet pack --configuration Release
  ```

5. *nuget.config*ファイル中で指定した`key`を使ってパッケージを公開してください。
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## 同じリポジトリへの複数パッケージの公開

複数のパッケージを同じリポジトリに公開するには、同じ{% data variables.product.prodname_dotcom %}リポジトリURLをすべての*.csproj*プロジェクトファイル中の`RepositoryURL`フィールドに含めることができます。 {% data variables.product.prodname_dotcom %}は、そのフィールドに基づいてリポジトリをマッチします。

たとえば、以下の*OctodogApp*と*OctocatApp*は同じリポジトリに公開されます。

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
    <RepositoryUrl>https://{% ifversion fpt %}github.com{% else %}HOSTNAME{% endif %}/octo-org/octo-cats-and-dogs</RepositoryUrl>
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
    <RepositoryUrl>https://{% ifversion fpt %}github.com{% else %}HOSTNAME{% endif %}/octo-org/octo-cats-and-dogs</RepositoryUrl>
  </PropertyGroup>

</Project>
```

## パッケージをインストールする

プロジェクトで{% data variables.product.prodname_dotcom %}からパッケージを利用するのは、*nuget.org*からパッケージを使用するのに似ています。 パッケージの依存関係を*.csproj*ファイルに追加し、パッケージ名とバージョンを指定してください。 プロジェクトでの*.csproj*ファイルの利用に関する詳しい情報については、Microsoftのドキュメンテーションの「[パッケージ利用のワークフロー](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)」を参照してください。

{% data reusables.package_registry.authenticate-step %}

2. パッケージを利用するには、*.csproj*プロジェクトファイルに`ItemGroup`を追加し、`PackageReference`フィールドを設定してください。`OctokittenApp`パッケージをパッケージの依存関係で、`1.0.0`を使いたいバージョンで置き換えてください。
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
      <RepositoryUrl>https://{% ifversion fpt %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
    </PropertyGroup>

    <ItemGroup>
      <PackageReference Include="OctokittenApp" Version="12.0.2" />
    </ItemGroup>

  </Project>
  ```

3. `restore`コマンドでパッケージをインストールしてください。
  ```shell
  dotnet restore
  ```

## トラブルシューティング

*.csproj*内の`RepositoryUrl`が期待されるリポジトリに設定されていない場合、NuGetパッケージのプッシュに失敗するかもしれません。

## 参考リンク

- 「{% ifversion fpt or ghes > 3.0 %}[パッケージの削除と復元](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[パッケージの削除](/packages/learn-github-packages/deleting-a-package){% endif %}」
