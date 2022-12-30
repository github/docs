---
title: Создание и тестирование приложений Xamarin
intro: Рабочий процесс непрерывной интеграции (CI) можно создать в GitHub Actions для сборки и тестирования приложения Xamarin.
redirect_from:
  - /actions/guides/building-and-testing-xamarin-applications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Xamarin
  - Xamarin.iOS
  - Xamarin.Android
  - Android
  - iOS
shortTitle: Build & test Xamarin apps
ms.openlocfilehash: 2e4e9a8eb73cd9dc2ef054c6c3ac48a9beadd9d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147518931'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Введение

В этом руководстве показано, как создать рабочий процесс, который выполняет непрерывную интеграцию (CI) для вашего проекта Xamarin. Создаваемый рабочий процесс позволит увидеть, когда фиксации в запросе на вытягивание вызывают сбои в сборке или тестировании ветви по умолчанию; этот подход поможет убедиться, что ваш код всегда работоспособен.

Полный список доступных версий пакета SDK для Xamarin в средствах выполнения macOS, размещенных в {% data variables.product.prodname_actions %}, см. в следующей документации:

* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md#xamarin-bundles)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md#xamarin-bundles)

{% data reusables.actions.macos-runner-preview %}

## Предварительные требования

Рекомендуется иметь базовое представление о Xamarin, пакете SDK для .NET Core, YAML, параметрах конфигурации рабочих процессов, а также о том, как создавать файл рабочего процесса. Дополнительные сведения см. в разделе:

- [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [Начало работы с .NET](https://dotnet.microsoft.com/learn)
- [Изучение Xamarin](https://dotnet.microsoft.com/learn/xamarin)

## Создание приложений Xamarin.iOS

В приведенном ниже примере показано, как изменить версии пакета SDK для Xamarin по умолчанию и создать приложение Xamarin.iOS.

```yaml
name: Build Xamarin.iOS app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Set default Xamarin SDK versions
      run: |
        $VM_ASSETS/select-xamarin-sdk-v2.sh --mono=6.12 --ios=14.10
    
    - name: Set default Xcode 12.3
      run: |
        XCODE_ROOT=/Applications/Xcode_12.3.0.app
        echo "MD_APPLE_SDK_ROOT=$XCODE_ROOT" >> $GITHUB_ENV
        sudo xcode-select -s $XCODE_ROOT

    - name: Setup .NET Core SDK 5.0.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        dotnet-version: '5.0.x'

    - name: Install dependencies
      run: nuget restore <sln_file_path>

    - name: Build
      run: msbuild <csproj_file_path> /p:Configuration=Debug /p:Platform=iPhoneSimulator /t:Rebuild
```

## Создание приложения Xamarin.Android

В приведенном ниже примере показано, как изменить версии пакета SDK для Xamarin по умолчанию и создать приложение Xamarin.Android.

```yaml
name: Build Xamarin.Android app

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Set default Xamarin SDK versions
      run: |
        $VM_ASSETS/select-xamarin-sdk-v2.sh --mono=6.10 --android=10.2

    - name: Setup .NET Core SDK 5.0.x
      uses: {% data reusables.actions.action-setup-dotnet %}
      with:
        dotnet-version: '5.0.x'

    - name: Install dependencies
      run: nuget restore <sln_file_path>

    - name: Build
      run: msbuild <csproj_file_path> /t:PackageForAndroid /p:Configuration=Debug
```

## Указание версии .NET

Чтобы использовать предустановленную версию пакета SDK для .NET Core в размещенном в {% data variables.product.prodname_dotcom %} средстве выполнения, используйте действие `setup-dotnet`. Это действие находит определенную версию .NET из кэша инструментов в средстве выполнения и добавляет необходимые двоичные файлы в переменную `PATH`. Эти изменения будут сохранены для остальной части задания.
 
Действие `setup-dotnet` представляет собой рекомендуемый способ использования .NET с {% data variables.product.prodname_actions %}, так как он обеспечивает согласованное поведение в разных средствах выполнения и различных версиях .NET. При использовании локального средства выполнения необходимо установить .NET и добавить его в `PATH`. Дополнительные сведения см. в описании действия [`setup-dotnet`](https://github.com/marketplace/actions/setup-net-core-sdk).
