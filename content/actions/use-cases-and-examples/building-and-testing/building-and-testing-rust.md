[---
title: Building and testing Rust
intro: You can create a continuous integration (CI) workflow to build and test your Rust project.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Rust
redirect_from:
  - /actions/automating-builds-and-tests/building-and-testing-rust
---

~~{% data reusables.actions.enterprise-github-hosted-runners %}~~

## Introduction

This guide shows you how to build, test, and publish a Rust package.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, which includes the dependencies for Rust. For a full list of up-to-date software and the preinstalled versions of Rust, see [AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software).

## Prerequisites

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions).

We recommend that you have a basic understanding of the Rust language. For more information, see [Getting started with Rust](https://www.rust-lang.org/learn).

## Using a Rust workflow template

{% data reusables.actions.workflow-templates-get-started %}

{% data variables.product.prodname_dotcom %} provides a Rust workflow template that should work for most basic Rust projects. The subsequent sections of this guide give examples of how you can customize this workflow template.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "Choose a workflow" page shows a selection of recommended workflow templates. Search for "Rust".
1. Filter the selection of workflows by clicking **Continuous integration**.
1. On the "Rust - by {% data variables.product.prodname_actions %}" workflow, click **Configure**.

   ![Screenshot of the "Choose a workflow" page. The "Configure" button on the "Rust" workflow is highlighted with an orange outline.](/assets/images/help/actions/starter-workflow-rust.png)

1. Edit the workflow as required. For example, change the version of Rust.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `rust.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

## Specifying a Rust version

~~The easiest way to specify a Rust version is by using the `rustup` action provided by {% data variables.product.prodname_dotcom %}. For more information see, the [`setup-rust` action](https://github.com/actions/setup-rust/).~~

To use a preinstalled version of Rust on a {% data variables.product.prodname_dotcom %}-hosted runner, pass the relevant version to the `rust-version` property of the `setup-rust` action. This action finds a specific version of Rust from the tools cache on each runner, and adds the necessary binaries to `PATH`. These changes will persist for the remainder of the job.

The `setup-rust` action is the recommended way of using rust with {% data variables.product.prodname_actions %}, because it helps ensure consistent behavior across different runners and different versions of Rust. If you are using a self-hosted runner, you must install rust and add it to your self-hosted runner's `PATH`.

### Using multiple versions of rust

```yaml copy
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        rust-version: [ '1.8', '1.20', '1.21.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go {% raw %}${{ matrix.go-version }}{% endraw %}
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      # You can test your matrix by printing the current Go version
      - name: Display Go version
        run: go version
```

### Using a specific Go version

You can configure your job to use a specific version of Go, such as `1.20.8`. Alternatively, you can use semantic version syntax to get the latest minor release. This example uses the latest patch release of Go 1.21:

```yaml copy
      - name: Setup Go 1.21.x
        uses: {% data reusables.actions.action-setup-go %}
        with:
          # Semantic version range syntax or exact version of Go
          go-version: '1.21.x'
```

## Installing dependencies

You can use `go get` to install dependencies:

```yaml copy
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.21.x'
      - name: Install dependencies
        run: |
          go get .
          go get example.com/octo-examplemodule
          go get example.com/octo-examplemodule@v1.3.4
```

### Caching dependencies

You can cache and restore dependencies using the [`setup-go` action](https://github.com/actions/setup-go). By default, caching is {% ifversion actions-setup-go-default-cache-enabled %}enabled when using the `setup-go` action.{% else %}disabled, but you can set the `cache` parameter to `true` to enable it.{% endif %}

{% ifversion actions-setup-go-default-cache-enabled %}
The `setup-go` action searches for the dependency file, `go.sum`, in the repository root and uses the hash of the dependency file as a part of the cache key.

You can use the `cache-dependency-path` parameter for cases when multiple dependency files are used, or when they are located in different subdirectories.

```yaml copy
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache-dependency-path: subdir/go.sum
```

{% else %}

When caching is enabled, the `setup-go` action searches for the dependency file, `go.sum`, in the repository root and uses the hash of the dependency file as a part of the cache key.

```yaml copy
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.21.x'
          cache: true
```

Alternatively, you can use the `cache-dependency-path` parameter for cases when multiple dependency files are used, or when they are located in different subdirectories.

```yaml copy
      - uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.17'
          cache: true
          cache-dependency-path: subdir/go.sum
```

{% endif %}

If you have a custom requirement or need finer controls for caching, you can use the [`cache` action](https://github.com/marketplace/actions/cache). For more information, see [AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

## Building and testing your code

You can use the same commands that you use locally to build and test your code. This example workflow demonstrates how to use `cargo build` and `cargo test` in a job:

```yaml copy
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-rust %}
        with:
          rust-version: '1.8.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```
