---
title: GitHub Packagesで利用するために`dotnet` CLIを設定する
intro: '{% data variables.product.prodname_registry %} にNuGetパッケージを公開し、{% data variables.product.prodname_registry %} に保存されたパッケージを依存関係として .Net プロジェクトで利用するよう`dotnet`コマンドラインインターフェース（CLI）を設定できます。'
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

{% data reusables.package_registry.default-name %} たとえば、{% data variables.product.prodname_dotcom %}は`OWNER/test`というリポジトリ内の`com.example:test`という名前のパッケージを公開します。

### {% data variables.product.prodname_registry %} への認証を行う

{% data reusables.package_registry.authenticate-packages %}

#### 個人アクセストークンでの認証

{% data reusables.package_registry.required-scopes %}

`dotnet`コマンドラインインターフェース（CLI）で{% data variables.product.prodname_registry %}に認証を受けるには、プロジェクトディレクトリに*nuget.config*ファイルを作成し、{% data variables.product.prodname_registry %}をソースとして`dotnet` CLIクライアントの`packageSources`の下に指定してください。

以下のように置き換えてください。
- `USERNAME`を{% data variables.product.prodname_dotcom %}上のユーザアカウント名で。
- `TOKEN`を個人アクセストークンで。
- `OWNER` with the name of the user or organization account that owns the repository containing your project.{% if enterpriseServerVersions contains currentVersion %}
- `HOSTNAME`を、{% data variables.product.prodname_ghe_server %}インスタンスのホスト名で。

パッケージの作成に関する詳しい情報については[maven.apache.orgのドキュメンテーション](https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html)を参照してください。
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

#### `GITHUB_TOKEN`での認証

{% data reusables.package_registry.package-registry-with-github-tokens %}

### パッケージを公開する

You can publish a package to {% data variables.product.prodname_registry %} by authenticating with a *nuget.config* file{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}, or by using the `--api-key` command line option with your {% data variables.product.prodname_dotcom %} personal access token (PAT){% endif %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
#### Publishing a package using a GitHub PAT as your API key

If you don't already have a PAT to use for your {% data variables.product.prodname_dotcom %} account, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."

1. 新しいプロジェクトを作成してください。
  ```shell
  dotnet new console --name OctocatApp
  ```
2. プロジェクトをパッケージ化してください。
  ```shell
  dotnet pack --configuration Release
  ```

3. Publish the package using your PAT as the API key.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

{% endif %}

#### Publishing a package using a *nuget.config* file

公開の際には、*nuget.config*認証ファイルで使用する*csproj*ファイル中で、`OWNER`に同じ値を使わなければなりません。 *.csproj*ファイル中でバージョン番号を指定もしくはインクリメントし、`dotnet pack`コマンドを使ってそのバージョンのための*.nuspec*ファイルを作成してください。 For more information on creating your package, see "[Create and publish a package](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)" in the Microsoft documentation.

{% data reusables.package_registry.authenticate-step %}
2. 新しいプロジェクトを作成してください。
  ```shell
  dotnet new console --name OctocatApp
  ```
3. プロジェクト固有の情報をプロジェクトファイルに追加してください。プロジェクトファイルは*.csproj*で終わります。  以下のように置き換えてください。
    - `OWNER`を、プロジェクトを含むリポジトリを所有しているユーザもしくはOrganizationアカウント名で。
    - `REPOSITORY`を、公開したいパッケージを含むリポジトリの名前で。
    - `1.0.0` with the version number of the package.{% if enterpriseServerVersions contains currentVersion %}
    - `HOSTNAME`を、{% data variables.product.prodname_ghe_server %}インスタンスのホスト名で。{% endif %}
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
4. プロジェクトをパッケージ化してください。
  ```shell
  dotnet pack --configuration Release
  ```

5. *nuget.config*ファイル中で指定した`key`を使ってパッケージを公開してください。
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### 同じリポジトリへの複数パッケージの公開

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

### パッケージをインストールする

プロジェクトで{% data variables.product.prodname_dotcom %}からパッケージを利用するのは、*nuget.org*からパッケージを使用するのに似ています。 パッケージの依存関係を*.csproj*ファイルに追加し、パッケージ名とバージョンを指定してください。 For more information on using a *.csproj* file in your project, see "[Working with NuGet packages](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)" in the Microsoft documentation.

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
      <RepositoryUrl>https://{% if currentVersion == "free-pro-team@latest" %}github.com{% else %}HOSTNAME{% endif %}/OWNER/REPOSITORY</RepositoryUrl>
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

### 参考リンク

- [パッケージの削除](/packages/publishing-and-managing-packages/deleting-a-package/)
