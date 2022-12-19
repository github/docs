---
title: Работа с реестром NuGet
intro: 'В интерфейсе командной строки (CLI) `dotnet` можно настроить публикацию пакетов NuGet в {% data variables.product.prodname_registry %} и использование пакетов, хранящихся в {% data variables.product.prodname_registry %}, в качестве зависимостей в проекте .NET.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192924'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

{% data reusables.package_registry.admins-can-configure-package-types %}

## Проверка подлинности в {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% ifversion packages-nuget-v2 %} Вы можете предоставить пакеты независимо друг от друга разрешения на доступ для {% data variables.product.prodname_github_codespaces %} и {% data variables.product.prodname_actions %}. Дополнительные сведения см. в [разделах Обеспечение доступа Codespaces к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package) и [Обеспечение доступа рабочего процесса к пакету](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
{% endif %}

### Проверка подлинности с помощью `GITHUB_TOKEN` в {% data variables.product.prodname_actions %}

Используйте следующую команду для проверки подлинности в {% data variables.product.prodname_registry %} в рабочем процессе {% data variables.product.prodname_actions %}, используя `GITHUB_TOKEN` вместо жесткого кодирования {% data variables.product.pat_generic %} в nuget.config файле в репозитории:

```shell
dotnet nuget add source --username USERNAME --password {%raw%}${{ secrets.GITHUB_TOKEN }}{% endraw %} --store-password-in-clear-text --name github "https://{% ifversion fpt or ghec %}nuget.pkg.github.com{% else %}nuget.HOSTNAME{% endif %}/OWNER/index.json"
```

{% data reusables.package_registry.authenticate-packages-github-token %}

### Проверка подлинности с помощью {% data variables.product.pat_generic %}

{% data reusables.package_registry.required-scopes %}

Для проверки подлинности в {% data variables.product.prodname_registry %} с помощью интерфейса командной строки (CLI) `dotnet` создайте файл *nuget.config* в каталоге проекта, указав {% data variables.product.prodname_registry %} в качестве источника в разделе `packageSources` для клиента CLI `dotnet`.

Необходимо заменить:
- `USERNAME` на имя вашей личной учетной записи в {% data variables.product.prodname_dotcom %}
- `TOKEN` с {% data variables.product.pat_v1 %}.
- `OWNER` на имя учетной записи пользователя или организации, которой принадлежит {% ifversion packages-nuget-v2 %}пакет, который требуется установить, или для которого требуется опубликовать пакет{% else %}репозиторий, содержащий ваш проект{% endif %}. {% ifversion ghes or ghae %}
- `HOSTNAME` с именем узла для {% data variables.location.product_location %}. {% endif %}

{% ifversion ghes %}Если в вашем экземпляре включена изоляция поддоменов: {% endif %}

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

{% ifversion ghes %} Если в вашем экземпляре выключена изоляция поддоменов:

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

## Публикация пакета

Вы можете опубликовать пакет в {% data variables.product.prodname_registry %} путем проверки подлинности с помощью *файлаnuget.config* или с помощью `--api-key` параметра командной строки с {% data variables.product.prodname_dotcom %} {% data variables.product.pat_v1 %}.

{% ifversion packages-nuget-v2 %}

Реестр NuGet хранит пакеты в вашей организации или личной учетной записи и позволяет связывать пакеты с репозиторием. Можно указать, нужно ли наследовать разрешения из репозитория или задавать детализированные разрешения независимо от репозитория.

{% data reusables.package_registry.publishing-user-scoped-packages %}

Если указать в `nuget.config` файле , опубликованный `RepositoryURL` пакет будет автоматически подключен к указанному репозиторию. Дополнительные сведения см. в разделе [Публикация пакета с помощью `nuget.config` файла](/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#publishing-a-package-using-a-nugetconfig-file). Сведения о связывании уже опубликованного пакета с репозиторием см. в разделе [Подключение репозитория к пакету](/packages/learn-github-packages/connecting-a-repository-to-a-package).

{% endif %}

### Публикация пакета с помощью {% data variables.product.pat_generic %} GitHub в качестве ключа API

Если у вас еще нет pat для вашей учетной записи в {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, см. раздел Создание [{% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).

1. Создайте новый проект.
  ```shell
  dotnet new console --name OctocatApp
  ```
2. Упакуйте проект.
  ```shell
  dotnet pack --configuration Release
  ```

3. Опубликуйте пакет, используя {% data variables.product.pat_generic %} в качестве ключа API.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg"  --api-key YOUR_GITHUB_PAT --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

### Публикация пакета с помощью файла *nuget.config*

При публикации необходимо использовать в *CSPROJ-файле* то же значение `OWNER`, что и в файле проверки подлинности *nuget.config*. Укажите или увеличьте номер версии в *CSPROJ-файле*, а затем используйте команду `dotnet pack`, чтобы создать *NUSPEC-файл* для этой версии. Дополнительные сведения о создании пакета см. в разделе [Создание и публикация пакета](https://docs.microsoft.com/nuget/quickstart/create-and-publish-a-package-using-the-dotnet-cli) в документации Майкрософт.

{% data reusables.package_registry.authenticate-step %}
2. Создайте новый проект.
  ```shell
  dotnet new console --name OctocatApp
  ```
3. Добавьте сведения о вашем проекте в файл проекта, который имеет расширение *CSPROJ*.  Необходимо заменить:
    - `OWNER` — имя учетной записи пользователя или организации, которой принадлежит репозиторий, к которому требуется подключить пакет.
    - `REPOSITORY` — имя репозитория, к которому требуется подключить пакет.                      
    - `1.0.0` на номер версии пакета{% ifversion ghes or ghae %}
    - `HOSTNAME` с именем узла для {% data variables.location.product_location %}. {% endif %}
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
4. Упакуйте проект.
  ```shell
  dotnet pack --configuration Release
  ```

5. Опубликуйте пакет, используя `key`, указанный в файле *nuget.config*.
  ```shell
  dotnet nuget push "bin/Release/OctocatApp.1.0.0.nupkg" --source "github"
  ```

{% data reusables.package_registry.viewing-packages %}

## Публикация нескольких пакетов в одном репозитории

Чтобы подключить несколько пакетов к одному репозиторию, можно включить один и тот же URL-адрес репозитория {% data variables.product.prodname_dotcom %} в `RepositoryURL` поля во всех *CSPROJ-файлах* проекта. {% data variables.product.prodname_dotcom %} сопоставляет репозиторий на основе этого поля.

Например, проекты *OctodogApp* и *OctocatApp* будут опубликованы в одном репозитории:

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

## Установка пакета

Использование в вашем проекте пакетов из {% data variables.product.prodname_dotcom %} аналогично использованию пакетов из *nuget.org*. Добавьте зависимости пакета в *CSPROJ-файл*, указав имя пакета и версию. Дополнительные сведения об использовании *CSPROJ-файла* в проекте см. в разделе [Работа с пакетами NuGet](https://docs.microsoft.com/nuget/consume-packages/overview-and-workflow) в документации Майкрософт.

{% data reusables.package_registry.authenticate-step %}

2. Чтобы использовать пакет, добавьте `ItemGroup` и настройте поле `PackageReference` в файле проекта *.csproj*. Замените значение `OctokittenApp` в `Include="OctokittenApp"` на свою зависимость пакета, а также замените значение `12.0.2` в `Version="12.0.2"` на необходимую версию:
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

3. Установите пакеты с помощью команды `restore`.
  ```shell
  dotnet restore
  ```

## Устранение неполадок

Отправка пакета NuGet может завершиться неудачно, если в `RepositoryUrl` в *CSPROJ-файле* не задан ожидаемый репозиторий.

Если вы используете NUSPEC-файл, убедитесь, что в нем присутствует элемент `repository` с обязательными атрибутами `type` и `url`.

Если вы используете `GITHUB_TOKEN` для аутентификации в реестре {% data variables.product.prodname_registry %} в рабочем процессе {% data variables.product.prodname_actions %}, токен не сможет получить доступ к пакетам на основе частного репозитория в другом репозитории, отличном от того, где выполняется рабочий процесс. Чтобы получить доступ к пакетам, связанным с другими репозиториями, создайте {% data variables.product.pat_v1 %} с областью `read:packages` и передайте этот маркер в качестве секрета.
 
## Дополнительные материалы

- "[Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package)"
