---
title: Building and testing Go
intro: You can create a continuous integration (CI) workflow to build and test your Go project.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Go
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to build, test, and publish a Go package.

{% ifversion ghae %}
{% data reusables.actions.self-hosted-runners-software %}
{% else %} {% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, which includes the dependencies for Go. For a full list of up-to-date software and the preinstalled versions of Go, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)."
{% endif %}

## Prerequisites

You should already be familiar with YAML syntax and how it's used with {% data variables.product.prodname_actions %}. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions)."

We recommend that you have a basic understanding of the Go language. For more information, see [Getting started with Go](https://golang.org/doc/tutorial/getting-started).

## Using a Go starter workflow

{% data reusables.actions.starter-workflow-get-started %}

{% data variables.product.prodname_dotcom %} provides a Go starter workflow that should work for most Go projects. The subsequent sections of this guide give examples of how you can customize this starter workflow.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.actions.new-starter-workflow %}
1. The "{% ifversion actions-starter-template-ui %}Choose a workflow{% else %}Choose a workflow template{% endif %}" page shows a selection of recommended starter workflows. Search for "go".
1. Filter the selection of workflows by clicking **Continuous integration**.
1. On the "Go - by {% data variables.product.prodname_actions %}" workflow, click {% ifversion actions-starter-template-ui %}**Configure**{% else %}**Set up this workflow**{% endif %}.

   ![Screenshot of the "Choose a workflow" page. The "Configure" button on the "Go" workflow is highlighted with an orange outline.](/assets/images/help/actions/starter-workflow-go.png)

{%- ifversion ghes or ghae %}
   If you don't find the "Go - by {% data variables.product.prodname_actions %}" starter workflow, copy the following workflow code to a new file called `go.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Go

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

   jobs:
     build:

       runs-on: self-hosted
       steps:
         - uses: {% data reusables.actions.action-checkout %}

         - name: Set up Go
           uses: {% data reusables.actions.action-setup-go %}
           with:
             go-version: '1.20'

         - name: Build
           run: go build -v ./...

         - name: Test
           run: go test -v ./...
   ```

{%- endif %}

1. Edit the workflow as required. For example, change the version of Go.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `go.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

## Specifying a Go version

The easiest way to specify a Go version is by using the `setup-go` action provided by {% data variables.product.prodname_dotcom %}. For more information see, the [`setup-go` action](https://github.com/actions/setup-go/).

To use a preinstalled version of Go on a {% data variables.product.prodname_dotcom %}-hosted runner, pass the relevant version to the `go-version` property of the `setup-go` action. This action finds a specific version of Go from the tools cache on each runner, and adds the necessary binaries to `PATH`. These changes will persist for the remainder of the job.

The `setup-go` action is the recommended way of using Go with {% data variables.product.prodname_actions %}, because it helps ensure consistent behavior across different runners and different versions of Go. If you are using a self-hosted runner, you must install Go and add it to `PATH`.

### Using multiple versions of Go

```yaml copy
name: Go

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.19', '1.20', '1.21.x' ]

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

{% ifversion actions-caching %}

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

If you have a custom requirement or need finer controls for caching, you can use the [`cache` action](https://github.com/marketplace/actions/cache). For more information, see "[AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)."

{% endif %}

## Building and testing your code

You can use the same commands that you use locally to build and test your code. This example workflow demonstrates how to use `go build` and `go test` in a job:

```yaml copy
name: Go
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: '1.21.x'
      - name: Install dependencies
        run: go get .
      - name: Build
        run: go build -v ./...
      - name: Test with the Go CLI
        run: go test
```

## Packaging workflow data as artifacts

After a workflow completes, you can upload the resulting artifacts for analysis. For example, you may need to save log files, core dumps, test results, or screenshots. The following example demonstrates how you can use the `upload-artifact` action to upload test results.

For more information, see "[AUTOTITLE](/actions/using-workflows/storing-workflow-data-as-artifacts)."

```yaml copy
name: Upload Go test results

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        go-version: [ '1.19', '1.20', '1.21.x' ]

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Setup Go
        uses: {% data reusables.actions.action-setup-go %}
        with:
          go-version: {% raw %}${{ matrix.go-version }}{% endraw %}
      - name: Install dependencies
        run: go get .
      - name: Test with Go
        run: go test -json > TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
      - name: Upload Go test results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Go-results-{% raw %}${{ matrix.go-version }}{% endraw %}
          path: TestResults-{% raw %}${{ matrix.go-version }}{% endraw %}.json
```
