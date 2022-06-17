---
title: Using the Dependency submission API
intro: 'You can use the Dependency submission API to submit dependencies for projects, such as the dependencies resolved when a project is built or compiled.'
shortTitle: Dependency submission API
topics:
  - API
  - Dependency graph
  - Dependencies
  - REST
versions:
  feature: dependency-submission-api
---

{% data reusables.dependency-submission.dependency-submission-api-beta %}

## About the Dependency submission API

{% data reusables.dependency-submission.about-dependency-submission %}

Dependencies are submitted to the dependency submission API in the form of a snapshot. A snapshot is a set of dependencies associated with a commit SHA and other metadata, that reflects the current state of your repository for a commit. For more information about the Dependency submission API, see the [Dependency submission REST API documentation](/rest/dependency-graph/dependency-submission).

## Submitting dependencies at build-time

You can use the Dependency submission API in a {% data variables.product.prodname_actions %} workflow to submit dependencies for your project when your project is built. 

### Using pre-made actions

The simplest way to use the Dependency submission API is by adding a pre-made action to your repository that will gather and convert the list of dependencies to the required snapshot format and submit the list to the API. Actions that complete these steps for various ecosystems are available on {% data variables.product.prodname_marketplace %} and more actions will be created during the course of the beta and beyond. You can find links to the currently available actions in the table below:

Ecosystem | Action |
--- | --- |
Go | [Go Dependency Submission](https://github.com/actions/go-dependency-submission)

For example, the following [Go Dependency Submission](https://github.com/actions/go-dependency-submission) workflow calculates the dependencies for a Go build-target (a Go file with a `main` function) and submits the list to the Dependency Submission API. 

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
        uses: @actions/go-dependency-submission@v1
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
### Creating your own action

Alternatively, you can write your own action to submit dependencies for your project at build-time. Your workflow should:

  1. Generate a list of dependencies for your project.
  2. Translate the list of dependencies into the snapshot format accepted by the Dependency submission API. For more information about the format, see the body parameters for the "Create a repository snapshot" API operation in the [Dependency submission REST API documentation](/rest/dependency-graph/dependency-submission).
  3. Submit the formatted list of dependencies to the Dependency submission API.

{% data variables.product.product_name %} maintains the [Dependency Submission Toolkit](https://github.com/github/dependency-submission-toolkit), a TypeScript library to help you build your own GitHub Action for submitting dependencies to the Dependency submission API. For more information about writing an action, see "[Creating actions](/actions/creating-actions)".
