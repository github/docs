---
title: Compilar y probar Swift
intro: Puedes crear un flujo de trabajo de integración continua (CI) para crear y probar tu proyecto de Swift.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/guides/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - CI
  - Swift
shortTitle: Compilar & probar en Swift
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introducción

Esta guía te muestra cómo crear y probar un paquete de Swift.

{% ifversion ghae %} Para compilar y probar tu proyecto de Swift en {% data variables.product.prodname_ghe_managed %}, necesitarás crear una imagen de sistema operativo personalizada que incluya las dependencias necesarias de Swift. Para obtener las instrucciones de cómo asegurarte de que tu {% data variables.actions.hosted_runner %} tenga instalado el software necesario, consulta la sección "[Crear imágenes personalizadas](/actions/using-github-hosted-runners/creating-custom-images)".
{% else %}Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} tienen un caché de herramientas con software preinstalado y los ejecutores de Ubuntu y macOS incluyen las dependencias para crear paquetes de Swift. Para encontrar una lista completa de software actualizado y las versiones preinstaladas de Swift y Xcode, consulta la sección "[Acerca de los ejecutores hospedados en GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)".{% endif %}

## Prerrequisitos

Ya debes estar familiarizado con la sintaxis de YAML y con cómo se utiliza con {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

Te recomendamos que tengas un entendimiento básico de los paquetes de Swift. Para obtener más información, consulta la sección "[Paquetes de Swift](https://developer.apple.com/documentation/swift_packages)" en la documentación de desarrollador de Apple.

## Comenzar con la plantilla de flujo de trabajo de Swift

{% data variables.product.prodname_dotcom %} proporciona una plantilla de flujo de trabajo de Swift que debería funcionar con la mayoría de los proyectos de Swift y esta guía incluye ejemplos que te muestran cómo personalizar dicha plantilla. Para obtener más información, consulta la [Plantilla de flujo de trabajo de Swift](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Para comenzar rápidamente, agrega la plantilla al directorio `.github/workflows` de tu repositorio.

{% raw %}
```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:

    runs-on: macos-latest

    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```
{% endraw %}

## Especificar una versión de Swift

Para utilizar una versión preinstalada de Swift en un ejecutor hospedado en {% data variables.product.prodname_dotcom %}, utiliza la acción `fwal/setup-swift`. Esta acción encuentra una versión específica de Swift desde el caché de herramientas en el ejecutor y agrega los binarios necesarios al `PATH`. Estos cambios persistirán durante el resto de un job. Para obtener más información, consulta la acción [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift).

Si estás utilizando un ejecutor auto-hospedado, debes instalar tus versiones de Swift deseadas y agregarlas al `PATH`.

Los siguientes ejemplos demuestran el uso de la acción `fwal/setup-swift`.

### Utilizar versiones múltiples de Swift

Puedes configurar tu job para que utilice versiones múltiples de Swift en una matriz de compilación.

```yaml{:copy}
{% data reusables.actions.actions-not-certified-by-github-comment %}

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
      - uses: fwal/setup-swift@d43a564349d1341cd990cfbd70d94d63b8899475
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: actions/checkout@
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Utilizar solo una versión específica de Swift

Puedes configurar tu job para que utilice una sola versión específica de Swift, tal como la `5.3.3`.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@d43a564349d1341cd990cfbd70d94d63b8899475
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

## Construir y probar tu código

Puedes utilizar los mismos comandos que usas localmente para compilar y probar tu código utilizando Swift. Este ejemplo demuestra cómo utilizar `swift build` y `swift test` en un job:

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: fwal/setup-swift@d43a564349d1341cd990cfbd70d94d63b8899475
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
{% endraw %}
