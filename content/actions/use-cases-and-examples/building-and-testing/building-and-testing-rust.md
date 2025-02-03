---
title: Building and testing Rust
intro: You can create a continuous integration (CI) workflow to build and test your Rust project.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - CI
shortTitle: Build & test Rust
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

This guide shows you how to build, test, and publish a Rust package.

{% data variables.product.prodname_dotcom %}-hosted runners have a tools cache with preinstalled software, which includes the dependencies for Rust. For a full list of up-to-date software and the preinstalled versions of Rust, see [AUTOTITLE](/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software).

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

{%- ifversion ghes %}
   If you don't find the "Rust - by {% data variables.product.prodname_actions %}" workflow template, copy the following workflow code to a new file called `rust.yml` in the `.github/workflows` directory of your repository.

   ```yaml copy
   name: Rust

   on:
     push:
       branches: [ "main" ]
     pull_request:
       branches: [ "main" ]

   env:
     CARGO_TERM_COLOR: never

   jobs:
     build:

       runs-on: ubuntu-latest

       steps:
       - uses: {% data reusables.actions.action-checkout %}
       - name: Build
         run: cargo build --verbose
       - name: Run tests
         run: cargo test --verbose
   ```

{%- endif %}

1. Edit the workflow as required. For example, change the version of Rust.
1. Click **Commit changes**.

{% ifversion fpt or ghec %}
   The `rust.yml` workflow file is added to the `.github/workflows` directory of your repository.
{% endif %}

## Specifying a Rust version

{% data variables.product.prodname_dotcom %}-hosted runners include a recent version of the Rust toolchain. You can use rustup to report on the version installed on a runner, override the version, and to install different toolchains. For more information, see [The rustup book](https://rust-lang.github.io/rustup/).

This example shows steps you could use to setup your runner environment to use the nightly build of rust and to report the version.

```yaml copy
      - name: Temporarily modify the rust toolchain version
        run: rustup override set nightly
      - name: Output rust version for educational purposes
        run: rustup --version
```

### Caching dependencies

You can cache and restore dependencies using the Cache action. This example assumes that your repository contains a `Cargo.lock` file.

```yaml copy
      - name: Cache
      - uses: {% data reusables.actions.action-cache %}
        with:
          path: |
            ~/.cargo/registry
            ~/.cargo/git
            target
          key: {% raw %}${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}{% endraw %}
```

If you have custom requirements or need finer controls for caching, you should explore other configuration options for the [`cache` action](https://github.com/marketplace/actions/cache). For more information, see [AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

## Building and testing your code

You can use the same commands that you use locally to build and test your code. This example workflow demonstrates how to use `cargo build` and `cargo test` in a job:

```yaml copy
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        BUILD_TARGET: [release] # refers to a cargo profile
    outputs:
      release_built: {% raw %}${{ steps.set-output.outputs.release_built }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build binaries in "{% raw %}${{ matrix.BUILD_TARGET }}{% endraw %}" mode
        run: cargo build --profile ${% raw %}{{ matrix.BUILD_TARGET }}{% endraw %}
      - name: Run tests in "${% raw %}{{ matrix.BUILD_TARGET }}{% endraw %}" mode
        run: cargo test --profile ${% raw %}{{ matrix.BUILD_TARGET }}{% endraw %}
```

The `release` keyword used in this example corresponds to a cargo profile. You can use any [profile](https://doc.rust-lang.org/cargo/reference/profiles.html) you have defined in your `Cargo.toml` file.

## Publishing your package or library to crates.io

Once you have setup your workflow to build and test your code, you can use a secret to login to [crates.io](https://crates.io/) and publish your package.

```yaml copy
      - name: Login into crates.io
        run: cargo login {% raw %}${{ secrets.CRATES_IO }}{% endraw %}
      - name: Build binaries in "release" mode
        run: cargo build -r
      - name: "Package for crates.io"
        run: cargo package # publishes a package as a tarball
      - name: "Publish to crates.io"
        run: cargo publish # publishes your crate as a library that can be added as a dependency
```

If there are any errors building and packaging the crate, check the metadata in your manifest, `Cargo.toml` file, see [The Manifest Format](https://doc.rust-lang.org/cargo/reference/manifest.html). You should also check your `Cargo.lock` file, see [Cargo.toml vs Cargo.lock](https://doc.rust-lang.org/cargo/guide/cargo-toml-vs-cargo-lock.html).

## Packaging workflow data as artifacts

After a workflow completes, you can upload the resulting artifacts for analysis or to use in another workflow. You could add these example steps to the workflow to upload an application for use by another workflow.

```yaml copy
      - name: Upload release artifact
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: {% raw %}<my-app>{% endraw %}
          path: {% raw %}target/${{ matrix.BUILD_TARGET }}/<my-app>{% endraw %}
```

To use the uploaded artifact in a different job, ensure your workflows have the right permissions for the repository, see [AUTOTITLE](/actions/security-for-github-actions/security-guides/automatic-token-authentication). You could use these example steps to download the app created in the previous workflow and publish it on {% data variables.product.github %}.

```yaml copy
      - uses: {% data reusables.actions.action-checkout %}
      - name: Download release artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: {% raw %}<my-app>{% endraw %}
          path: ./{% raw %}<my-app>{% endraw %}
      - name: Publish built binary to {% data variables.product.github %} releases
      - run: |
          gh release create --generate-notes ./{% raw %}<my-app>/<my-project>#<my-app>{% endraw %}
