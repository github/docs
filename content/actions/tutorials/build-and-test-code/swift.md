---
title: Building and testing Swift
intro: Learn how to create a continuous integration (CI) workflow to build and test your Swift project.
redirect_from:
  - /actions/guides/building-and-testing-swift
  - /actions/automating-builds-and-tests/building-and-testing-swift
  - /actions/use-cases-and-examples/building-and-testing/building-and-testing-swift
  - /actions/how-tos/use-cases-and-examples/building-and-testing/building-and-testing-swift
  - /actions/how-tos/writing-workflows/building-and-testing/building-and-testing-swift
  - /actions/tutorials/build-and-test-code/building-and-testing-swift
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Swift
category:
  - Build and test code
contentType: tutorials
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to build and test a Swift package.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, and the Ubuntu and macOS runners include the dependencies for building Swift packages. For a full list of up-to-date software and the preinstalled versions of Swift and Xcode, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software).

## Prerequisites

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).

We recommend that you have a basic understanding of Swift packages. For more information, see [Swift Packages](https://developer.apple.com/documentation/xcode/swift-packages) in the Apple developer documentation.

## Using a Swift workflow template

{% data reusables.actions.workflow-templates-get-started %}

{% data variables.product.prodname_dotcom %} provides a workflow template for Swift that should work for most Swift projects. The subsequent sections of this guide give examples of how you can customize this workflow template.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "Choose a workflow" page shows a selection of recommended workflow templates. Search for "swift".
1. Filter the selection of workflows by clicking **Continuous integration**.
1. On the "Swift" workflow, click **Configure**.

{%- ifversion ghes %}

   If you don't find the "Swift" workflow template, copy the following workflow code to a new file called `swift.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Swift

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

   jobs:
     build:
       runs-on: macos-latest

       steps:
       - uses: {% data reusables.actions.action-checkout %}
       - name: Build
         run: swift build -v
       - name: Run tests
         run: swift test -v
   ```

{%- endif %}

1. Edit the workflow as required. For example, change the branch on which the workflow will run.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `swift.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

## Specifying a Swift version

To use a specific preinstalled version of Swift on a {% data variables.product.prodname_dotcom %}-hosted runner, use the `swift-actions/setup-swift` action. This action finds a specific version of Swift from the tools cache on the runner and adds the necessary binaries to `PATH`. These changes will persist for the remainder of a job. For more information, see the [`swift-actions/setup-swift`](https://github.com/marketplace/actions/setup-swift) action.

If you are using a self-hosted runner, you must install your desired Swift versions and add them to `PATH`.

The examples below demonstrate using the `swift-actions/setup-swift` action.

### Using multiple Swift versions

You can configure your job to use multiple versions of Swift in a matrix.

```yaml copy

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
        swift: ["6.1", "6.2", "6.3"]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: swift-actions/setup-swift@7ca6abe6b3b0e8b5421b88be48feee39cbf52c6a # v2.4.0
        with:
          swift-version: {% raw %}${{ matrix.swift }}{% endraw %}
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

### Using a single specific Swift version

You can configure your job to use a single specific version of Swift, such as `6.3`.

```yaml copy
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

steps:
  - uses: swift-actions/setup-swift@7ca6abe6b3b0e8b5421b88be48feee39cbf52c6a # v2.4.0
    with:
      swift-version: "6.3"
  - name: Get swift version
    run: swift --version # Swift 6.3
```

## Building and testing your code

You can use the same commands that you use locally to build and test your code using Swift. This example demonstrates how to use `swift build` and `swift test` in a job:

```yaml copy
{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

steps:
  - uses: {% data reusables.actions.action-checkout %}
  - uses: swift-actions/setup-swift@7ca6abe6b3b0e8b5421b88be48feee39cbf52c6a # v2.4.0
    with:
      swift-version: "6.3"
  - name: Build
    run: swift build
  - name: Run tests
    run: swift test
```

## Building and testing on Linux with a container

On {% data variables.product.prodname_dotcom %}-hosted Linux runners, you can run your job inside an official Swift container image, which already includes the Swift toolchain. This means you don't need a separate step to install Swift.

Released Swift versions are published as the [`swift`](https://hub.docker.com/_/swift) official images on Docker Hub (for example, `swift:6.3` or `swift:6.3-noble`). To test against unreleased toolchains, use the nightly snapshot images published as [`swiftlang/swift`](https://hub.docker.com/r/swiftlang/swift) (for example, `swiftlang/swift:nightly-main` or `swiftlang/swift:nightly-6.2-noble`). For more information, see [Swift on Docker](https://www.swift.org/documentation/docker/) on Swift.org.

```yaml copy
name: Swift

on: [push]

jobs:
  linux:
    runs-on: ubuntu-latest
    container: swift:6.3
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

To test against a nightly toolchain, use a `swiftlang/swift` snapshot image instead.

```yaml copy
name: Swift

on: [push]

jobs:
  nightly:
    runs-on: ubuntu-latest
    container: swiftlang/swift:nightly-main
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Building and testing for Apple platforms with Xcode

To build and test for a specific Apple platform such as iOS, watchOS, tvOS, or visionOS, use `xcodebuild` on a macOS runner and select a simulator with the `-destination` option. {% data variables.product.prodname_dotcom %}-hosted macOS runners come with Xcode and Apple platform simulators preinstalled. To check which Xcode versions, platform SDKs, OS versions, and simulators are available on each macOS runner, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software), or open the README for the macOS version you want in the [{% data variables.product.prodname_actions %} Runner Images repository](https://github.com/actions/runner-images/tree/main/images/macos). For the runner labels you can use with `runs-on` (for example, `macos-15`, `macos-14`, or `macos-13`), see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories).

```yaml copy
name: Swift

on: [push]

jobs:
  ios:
    runs-on: macos-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build and test for iOS
        run: |
          xcodebuild test \
            -scheme MyPackage \
            -destination 'platform=iOS Simulator,name=iPhone 15,OS=17.5'
```

To target a different platform, change the `-destination` value. For example, use `platform=watchOS Simulator,name=Apple Watch Series 9 (45mm)`, `platform=tvOS Simulator,name=Apple TV`, `platform=visionOS Simulator,name=Apple Vision Pro`, or `platform=macOS` for native macOS. To select a specific installed Xcode version, run `sudo xcode-select -s /Applications/Xcode_16.4.app` before building.

If you target a platform whose simulator runtime is not preinstalled on the runner, the build fails until the runtime is available. Download it first with `xcodebuild -downloadPlatform iOS` (replacing `iOS` with the platform you need), or choose a simulator and OS version that the runner already provides.

## Building and testing on Windows

To build and test on Windows, install the Swift toolchain with the [`compnerd/gha-setup-swift`](https://github.com/compnerd/gha-setup-swift) action, then run `swift build` and `swift test`.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  windows:
    runs-on: windows-latest
    steps:
      - uses: compnerd/gha-setup-swift@eeda069c5bc95ac8a9ac5cea7d4f588ae5420ca5 # v0.4.0
        with:
          swift-version: swift-6.3-release
          swift-build: 6.3-RELEASE
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

## Building and testing on Android

To build and test on Android, use the [`skiptools/swift-android-action`](https://github.com/skiptools/swift-android-action) action, which installs the Swift SDK for Android and can run your tests on an emulator.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  android:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: skiptools/swift-android-action@2044b79660f201ccef8cbce62877e4ec5409f9c8 # v2.9.5
        with:
          swift-version: "6.3"
          android-api-level: 28
```

## Building and testing across multiple platforms with one action

If you want to build and test across several of the platforms above from a single workflow, you can use a community action that wraps the platform-specific setup. For example, the [`brightdigit/swift-build`](https://github.com/brightdigit/swift-build) action can target macOS, Linux, Windows, Apple devices (iOS, watchOS, tvOS, and visionOS), Android, and WebAssembly, selected with its `type` input. It uses `xcodebuild` for Apple platforms, [`compnerd/gha-setup-swift`](https://github.com/compnerd/gha-setup-swift) for Windows, and [`skiptools/swift-android-action`](https://github.com/skiptools/swift-android-action) for Android.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  test:
    runs-on: macos-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: brightdigit/swift-build@b0a63a89ea85b47a8b43dff122e12856ad661f33 # v1.5.7
        with:
          scheme: MyPackage
```

### Apple platforms

To target a specific Apple platform, set the `type` input (`ios`, `watchos`, `tvos`, `visionos`, or `macos`) and, for simulator-based platforms, the `deviceName` and `osVersion`. To check which simulators and OS versions are preinstalled on each macOS runner, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-software), or open the README for the macOS version you want in the [{% data variables.product.prodname_actions %} Runner Images repository](https://github.com/actions/runner-images/tree/main/images/macos). If the simulator runtime you request is not already installed on the runner, set `download-platform: true` so the action downloads it before testing.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  ios:
    runs-on: macos-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: brightdigit/swift-build@b0a63a89ea85b47a8b43dff122e12856ad661f33 # v1.5.7
        with:
          scheme: MyPackage
          type: ios
          deviceName: iPhone 15
          osVersion: "17.5"
          download-platform: true
```

### Linux

On Linux, run the action inside an official Swift container image.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  linux:
    runs-on: ubuntu-latest
    container: swift:6.3
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: brightdigit/swift-build@b0a63a89ea85b47a8b43dff122e12856ad661f33 # v1.5.7
        with:
          scheme: MyPackage
```

### Windows

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  windows:
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: brightdigit/swift-build@b0a63a89ea85b47a8b43dff122e12856ad661f33 # v1.5.7
        with:
          windows-swift-version: swift-6.3-release
          windows-swift-build: 6.3-RELEASE
```

### Android

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  android:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: brightdigit/swift-build@b0a63a89ea85b47a8b43dff122e12856ad661f33 # v1.5.7
        with:
          scheme: MyPackage
          type: android
          android-swift-version: "6.3"
          android-api-level: "28"
```

### WebAssembly

WebAssembly builds require Swift 6.2.3 or later. Run the action inside a Swift container image and set `type` to `wasm`.

```yaml copy

{% data reusables.actions.actions-not-certified-by-github-comment %}

{% data reusables.actions.actions-use-sha-pinning-comment %}

name: Swift

on: [push]

jobs:
  wasm:
    runs-on: ubuntu-latest
    container: swift:6.3-jammy
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: brightdigit/swift-build@b0a63a89ea85b47a8b43dff122e12856ad661f33 # v1.5.7
        with:
          scheme: MyPackage
          type: wasm
```
