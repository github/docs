---
title: Working with the NuGet registry
intro: '您可以配置 `dotnet` 命令行接口 (CLI) 以将 NuGet 包发布到 {% data variables.product.prodname_registry %} 并将存储在 {% data variables.product.prodname_registry %} 上的包用作 .NET 项目中的依赖项。'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-package-registry/configuring-nuget-for-use-with-github-package-registry
  - /github/managing-packages-with-github-packages/configuring-nuget-for-use-with-github-packages
  - /github/managing-packages-with-github-packages/configuring-dotnet-cli-for-use-with-github-packages
  - /packages/using-github-packages-with-your-projects-ecosystem/configuring-dotnet-cli-for-use-with-github-packages
  - /packages/guides/configuring-dotnet-cli-for-use-with-github-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

**注：**安装或发布 Docker 映像时，{% data variables.product.prodname_registry %} 当前不支持外部图层，如 Windows 映像。

### 向 {% data variables.product.prodname_registry %} 验证

{% data reusables.package_registry.authenticate-packages %}

#### Authenticating with `GITHUB_TOKEN` in {% data variables.product.prodname_actions %}

Use the following command to authenticate to {% data variables.product.prodname_registry %} in a {% data variables.product.prodname_actions %} workflow using the `GITHUB_TOKEN` instead of hardcoding a token in a nuget.config file in the repository:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% if currentVersion == "free-pro-team@latest" %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

#### 使用个人访问令牌进行身份验证

{% data reusables.package_registry.required-scopes %}

要使用 `dotnet` 命令行接口 (CLI) 向 {% data variables.product.prodname_registry %} 验证，请在项目目录中创建一个 *nuget.config* 文件，将 {% data variables.product.prodname_registry %} 指定为 `dotnet` CLI 客户端的 `packageSources` 下的源。

必须：
- 将 `USERNAME` 替换为您在 {% data variables.product.prodname_dotcom %} 上的用户帐户的名称。
- 将 `TOKEN` 替换为您的个人访问令牌。
- 将 `OWNER` 替换为拥有项目所在仓库的用户或组织帐户的名称。{%if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- 将 `HOSTNAME` 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}

{%if enterpriseServerVersions contains currentVersion %}如果您的实例启用了子域隔离：
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
例如，*OctodogApp* 和 *OctocatApp* 项目将发布到同一个仓库：

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

### 发布包

您可以通过使用 *nuget.config* 文件进行身份验证{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest"%}或使用包含 {% data variables.product.prodname_dotcom %} 个人访问令牌 (PAT) 的 `--api-key` 命令行选项，向 {% data variables.product.prodname_registry %} 发布包{% endif %}。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
#### 使用 GitHub PAT 作为 API 密钥发布包

如果您还没有用于 {% data variables.product.prodname_dotcom %} 帐户的 PAT，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

1. 创建一个新项目。
  ```shell
  dotnet new console --name OctocatApp
  ```
2. 打包项目。
  ```shell
  dotnet pack --configuration Release
  ```

3. 使用您的 PAT 作为 API 密钥发布包。
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key <em>YOUR_GITHUB_PAT</em> --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

{% endif %}

#### 使用 *nuget.config* 文件发布包

发布时，您需要将 *csproj* 文件中的 `OWNER` 值用于您的 *nuget.config* 身份验证文件。 在 *.csproj* 文件中指定或增加版本号，然后使用 `dotnet pack` 命令创建该版本的 *.nuspec* 文件。 有关创建包的更多信息，请参阅 Microsoft 文档中的“[创建和发布包](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli)”。

{% data reusables.package_registry.authenticate-step %}
2. 创建一个新项目。
  ```shell
  dotnet new console --name OctocatApp
  ```
3. 将项目的特定信息添加到以 *.csproj* 结尾的项目文件中。  必须：
    - 将 `OWNER` 替换为拥有项目所在仓库的用户或组织帐户的名称。
    - 将 `REPOSITORY` 替换为要发布的包所在仓库的名称。
    - `1.0.0` 替换为包的版本号。{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
    - 将 `HOSTNAME` 替换为 {% data variables.product.product_location %} 的主机名。{% endif %}
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
4. 打包项目。
  ```shell
  dotnet pack --configuration Release
  ```

5. 使用您在 *nuget.config* 文件中指定的 `key` 发布包。
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### 将多个包发布到同一个仓库

要将多个包发布到同一个仓库，您可以在所有 *.csproj* 项目文件的 `RepositoryURL` 字段中包含相同的 {% data variables.product.prodname_dotcom %} 仓库 URL。 {% data variables.product.prodname_dotcom %} 根据该字段匹配仓库。

例如，*OctodogApp* 和 *OctocatApp* 项目将发布到同一个仓库：

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

### 安装包

在项目中使用来自 {% data variables.product.prodname_dotcom %} 的包类似于使用来自 *nuget.org* 的包。 将包依赖项添加到 *.csproj* 文件以指定包名称和版本。 有关在项目中使用 *.csproj* 文件的更多信息，请参阅 Microsoft 文档中的“[使用 NuGet 包](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow)”。

{% data reusables.package_registry.authenticate-step %}

2. 要使用包，请添加 `ItemGroup` 并配置 *.csproj* 项目文件中的 `PackageReference` 字段，将 `OctokittenApp` 包替换为您的包依赖项，将 `1.0.0` 替换为您要使用的版本：
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

3. 使用 `restore` 命令安装包。
  ```shell
  dotnet restore
  ```

### 疑难解答

Your NuGet package may fail to push if the `RepositoryUrl` in *.csproj* is not set to the expected repository .

### 延伸阅读

- "{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}[删除和恢复包](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif currentVersion ver_lt "enterprise-server@3.1" or currentVersion == "github-ae@latest" %}[删除包](/packages/learn-github-packages/deleting-a-package){% endif %}"
