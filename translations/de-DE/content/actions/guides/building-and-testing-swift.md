---
title: Building and testing Swift
intro: You can create a continuous integration (CI) workflow to build and test your Swift project.
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - CI
  - Swift
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

This guide shows you how to build and test a Swift package.

{% if currentVersion == "github-ae@latest" %} To build and test your Swift project on {% data variables.product.prodname_ghe_managed %}, you will need to create a custom operating system image that includes the necessary Swift dependencies. For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, and the Ubuntu and macOS runners include the dependencies for building Swift packages. For a full list of up-to-date software and the preinstalled versions of Swift and Xcode, see "[About GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)."{% endif %}

### Vorrausetzungen

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)“.

We recommend that you have a basic understanding of Swift packages. For more information, see "[Swift Packages](https://developer.apple.com/documentation/swift_packages)" in the Apple developer documentation.

### Starting with the Swift workflow template

{% data variables.product.prodname_dotcom %} provides a Swift workflow template that should work for most Swift projects, and this guide includes examples that show you how to customize this template. For more information, see the [Swift workflow template](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

Um schnell loszulegen, füge die Vorlage in das Verzeichnis `.github/workflows` Deines Repositorys ein.

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

### Specifying a Swift version

To use a specific preinstalled version of Swift on a {% data variables.product.prodname_dotcom %}-hosted runner, use the `fwal/setup-swift` action. This action finds a specific version of Swift from the tools cache on the runner and adds the necessary binaries to `PATH`. These changes will persist for the remainder of a job. For more information, see the [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift) action.

If you are using a self-hosted runner, you must install your desired Swift versions and add them to `PATH`.

The examples below demonstrate using the `fwal/setup-swift` action.

#### Using multiple Swift versions

You can configure your job to use a multiple versions of Swift in a build matrix.

{% raw %}
```yaml{:copy}
name: Swift

on: [push]

jobs:
  build:
    name: Swift ${{ matrix.swift }} on ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest]
        swift: ["5.2", "5.3"]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: fwal/setup-swift@v1
        with:
          swift-version: ${{ matrix.swift }}
      - uses: actions/checkout@v2
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```
{% endraw %}

#### Using a single specific Swift version

You can configure your job to use a single specific version of Swift, such as `5.3.3`.

{% raw %}
```yaml{:copy}
steps:
  - uses: fwal/setup-swift@v1
    with:
      swift-version: "5.3.3"
  - name: Get swift version
    run: swift --version # Swift 5.3.3
```
{% endraw %}

### Deinen Code bauen und testen

You can use the same commands that you use locally to build and test your code using Swift. This example demonstrates how to use `swift build` and `swift test` in a job:

{% raw %}
```yaml{:copy}
steps:
  - uses: actions/checkout@v2
  - uses: fwal/setup-swift@v1
    with:
      swift-version: "5.3.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```
{% endraw %}
