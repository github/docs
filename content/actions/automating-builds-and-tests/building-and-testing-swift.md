---
title: Building and testing Swift
intro: You can create a continuous integration (CI) workflow to build and test your Swift project.
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to build and test a Swift package.

{% ifversion ghae %} To build and test your Swift project on {% data variables.product.prodname_ghe_managed %}, the necessary Swift dependencies are required. {% data reusables.actions.self-hosted-runners-software %}
{% else %}{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, and the Ubuntu and macOS runners include the dependencies for building Swift packages. For a full list of up-to-date software and the preinstalled versions of Swift and Xcode, see "[About GitHub-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software)."{% endif %}

## Prerequisites

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)."

We recommend that you have a basic understanding of Swift packages. For more information, see "[Swift Packages](https://developer.apple.com/documentation/swift_packages)" in the Apple developer documentation.

## Using the Swift starter workflow

{% data variables.product.prodname_dotcom %} provides a Swift starter workflow that should work for most Swift projects, and this guide includes examples that show you how to customize this starter workflow. For more information, see the [Swift starter workflow](https://github.com/actions/starter-workflows/blob/main/ci/swift.yml).

To get started quickly, add the starter workflow to the `.github/workflows` directory of your repository.

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

## Specifying a Swift version

To use a specific preinstalled version of Swift on a {% data variables.product.prodname_dotcom %}-hosted runner, use the `fwal/setup-swift` action. This action finds a specific version of Swift from the tools cache on the runner and adds the necessary binaries to `PATH`. These changes will persist for the remainder of a job. For more information, see the [`fwal/setup-swift`](https://github.com/marketplace/actions/setup-swift) action.

If you are using a self-hosted runner, you must install your desired Swift versions and add them to `PATH`.

The examples below demonstrate using the `fwal/setup-swift` action.

### Using multiple Swift versions

You can configure your job to use multiple versions of Swift in a matrix.

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
      - uses: fwal/setup-swift@2040b795e5c453c3a05fcb8316496afc8a74f192
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Using a single specific Swift version

You can configure your job to use a single specific version of Swift, such as `5.3.3`.

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

## Building and testing your code

You can use the same commands that you use locally to build and test your code using Swift. This example demonstrates how to use `swift build` and `swift test` in a job:

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
