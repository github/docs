---
title: Compilar y probar Swift
intro: Puedes crear un flujo de trabajo de integración continua (CI) para crear y probar tu proyecto de Swift.
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Build & test Swift
ms.openlocfilehash: 5717f9c7a939d2347ea5a49458002185c3ec07eb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147408999'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear y probar un paquete de Swift.

{% ifversion ghae %} Para compilar y probar tu proyecto de Swift en {% data variables.product.prodname_ghe_managed %}, se requieren las dependencias necesarias de Swift. Los ejecutores hospedados en {% data reusables.actions.self-hosted-runners-software %} {% else %}{% data variables.product.prodname_dotcom %} tienen una caché de herramientas con software preinstalado y los ejecutores de Ubuntu y macOS incluyen las dependencias para crear paquetes de Swift. Para obtener una lista completa de software actualizado y las versiones preinstaladas de Swift y Xcode, vea "[Acerca de los ejecutores hospedados en GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".{% endif %}

## Prerrequisitos

Ya debes estar familiarizado con la sintaxis de YAML y con cómo se utiliza con {% data variables.product.prodname_actions %}. Para más información, vea "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

Te recomendamos que tengas un entendimiento básico de los paquetes de Swift. Para más información, vea "[Paquetes de Swift](https://developer.apple.com/documentation/swift_packages)" en la documentación para desarrolladores de Apple.

## Utilizar el flujo de trabajo inicial de Swift

{% data variables.product.prodname_dotcom %} proporciona un flujo de trabajo inicial de Swift que debería funcionar par ala mayoría de los proyectos de Swift y esta guía incluye ejemplos que te muestran cómo personalizarlo. Para más información, vea el [flujo de trabajo de inicio de Swift](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Para comenzar rápidamente, agregue el flujo de trabajo de inicio al directorio `.github/workflows` del repositorio.

```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Especificar una versión de Swift

Para usar una versión preinstalada concreta de Swift en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, use la acción `fwal/setup-swift`. Esta acción busca una versión específica de Swift en la caché de herramientas en el ejecutor y agrega los binarios necesarios a `PATH`. Estos cambios persistirán durante el resto de un job. Para más información, vea la acción [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift).

Si usa un ejecutor autohospedado, debe instalar las versiones de Swift deseadas y agregarlas a `PATH`.

En los ejemplos siguientes se muestra cómo usar la acción `fwal/setup-swift`.

### Utilizar versiones múltiples de Swift

Puedes configurar el trabajo para que use múltiples versiones de Swift en una matriz.

```yaml{:copy}

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}


name: Swift

on: [push]

jobs:
  build:
    name: {% raw %}Swift ${{ matrix.swift }} on ${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Utilizar solo una versión específica de Swift

Puede configurar el trabajo para que use una versión concreta de Swift, por ejemplo, `5.3.3`.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## Construir y probar tu código

Puedes utilizar los mismos comandos que usas localmente para compilar y probar tu código utilizando Swift. En este ejemplo se muestra cómo usar `swift build` y `swift test` en un trabajo:

```yaml{:copy}
steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
