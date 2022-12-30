---
title: Использование API отправки зависимостей
intro: 'API отправки зависимостей можно использовать для отправки зависимостей для проектов, например зависимостей, разрешенных при сборке или компиляции проекта.'
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
ms.openlocfilehash: 4ebf367a083010bc9177a2c67bce28cf99078a5f
ms.sourcegitcommit: c45cc7325ed19e69ddd7506e46fcafd0b5182b3f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/12/2022
ms.locfileid: '148019593'
---
{% data reusables.dependency-submission.dependency-submission-api-beta %}

## Сведения об API отправки зависимостей

{% data reusables.dependency-submission.about-dependency-submission %}

Зависимости отправляются в API отправки зависимостей в виде моментального снимка. Моментальный снимок — это набор зависимостей, связанных с SHA фиксации и другими метаданными, которые отражают текущее состояние репозитория для фиксации. Дополнительные сведения об API отправки зависимостей см. в [документации по REST API отправки зависимостей](/rest/dependency-graph/dependency-submission).

## Отправка зависимостей во время сборки

API отправки зависимостей можно использовать в рабочем процессе {% data variables.product.prodname_actions %} для отправки зависимостей для проекта при создании проекта. 

### Использование готовых действий

Самый простой способ использовать API отправки зависимостей — добавить в репозиторий готовое действие, которое будет собирать и преобразовывать список зависимостей в требуемый формат моментальных снимков и отправлять список в API. Действия, которые выполняют эти шаги для различных экосистем, доступны на {% data variables.product.prodname_marketplace %}. В бета-версии и последующих версиях будет создано больше действий. Ссылки на доступные в настоящее время действия можно найти в таблице ниже:

Экосистема | Действие |
--- | --- |
Go | [Отправка зависимостей Go](https://github.com/actions/go-dependency-submission)

Например, следующий рабочий процесс [отправки зависимостей Go](https://github.com/actions/go-dependency-submission) вычисляет зависимости для целевого объекта сборки Go (файл Go с функцией `main`) и отправляет список в API отправки зависимостей. 

```yaml

name: Go Dependency Submission
on:
  push:
    branches:
      - main
      
# The API requires write permission on the repository to submit dependencies
permissions:
  contents: write

# Envionment variables to configure Go and Go modules. Customize as necessary
env:
  GOPROXY: '' # A Go Proxy server to be used
  GOPRIVATE: '' # A list of modules are considered private and not requested from GOPROXY
jobs:
  go-action-detection:
    runs-on: ubuntu-latest
    steps:
      - name: 'Checkout Repository'
        uses: {% data reusables.actions.action-checkout %}
        
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: ">=1.18.0"
          
      - name: Run snapshot action
        uses: actions/go-dependency-submission@v1
        with:
            # Required: Define the repo path to the go.mod file used by the
            # build target
            go-mod-path: go-example/go.mod
            #
            # Optional. Define the repo path of a build target,
            # a file with a `main()` function.
            # If undefined, this action will collect all dependencies
            # used by all build targets for the module. This may
            # include Go dependencies used by tests and tooling.
            go-build-target: go-example/cmd/octocat.go

```
### Создание собственного действия

Кроме того, можно написать собственное действие для отправки зависимостей для проекта во время сборки. Рабочий процесс должен делать следующее:

  1. Создать список зависимостей для проекта.
  2. Преобразовать список зависимостей в формат моментального снимка, принятый API отправки зависимостей. Дополнительные сведения о формате см. в основных параметрах операции API "Создание моментального снимка репозитория" в [документации по REST API отправки зависимостей](/rest/dependency-graph/dependency-submission).
  3. Отправьте форматированный список зависимостей в API отправки зависимостей.

{% data variables.product.product_name %} поддерживает [набор средств отправки зависимостей](https://github.com/github/dependency-submission-toolkit), библиотеку TypeScript, помогающую создавать собственные действия GitHub Actions для отправки зависимостей в API отправки зависимостей. Дополнительные сведения о написании действия см. в разделе [Создание действий](/actions/creating-actions).
