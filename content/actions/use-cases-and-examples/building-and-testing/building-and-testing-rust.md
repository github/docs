---
title: Building and testing Rust
intro: You can create a continuous integration (CI) workflow to build and test your Rust project.
versions:
  ghec: '*'
type: tutorial
topics:
  - CI
shortTitle: Build, test & Publish with Rust
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

To use a preinstalled version of Rust on a {% data variables.product.prodname_dotcom %}-hosted runner, pass the relevant version to the `rust-version` property of the `setup-rust` action. This action finds a specific version of Rust from the tools cache on each runner, and adds the necessary binaries to `PATH`. These changes will persist for the remainder of the job.

The `setup-rust` action is the recommended way of using rust with {% data variables.product.prodname_actions %}, because it helps ensure consistent behavior across different runners and different versions of Rust. If you are using a self-hosted runner, you must install rust and add it to your self-hosted runner's `PATH`.

### Caching dependencies

You can cache and restore dependencies using the following example below.

```yaml copy
      - name: ⚡ Cache
        uses: actions/cache@v2
        with:
          path: |
            ~/.cargo/registry
            ~/.cargo/git
            target
          key: ${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}
```
If you have a custom requirement or need finer controls for caching, you can use the [`cache` action](https://github.com/marketplace/actions/cache). For more information, see [AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

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
      release_built: ${{ steps.set-output.outputs.release_built }}
    steps:
      - uses: actions/checkout@v4
      - name: Build binaries in "${{ matrix.BUILD_TARGET }}" mode
        run: cargo build --profile ${{ matrix.BUILD_TARGET }}
      - name: Run tests in "${{ matrix.BUILD_TARGET }}" mode
        run: cargo test --profile ${{ matrix.BUILD_TARGET }}
```
Note that the `release` keyword used above, corresponds to a cargo profile. You can use any [profile](https://doc.rust-lang.org/cargo/reference/profiles.html) you have defined in your `Cargo.toml` file.

## Upload artifacts

In case publishing artifacts is needed, but not to crates.io, the following example demonstrates how to upload artifacts to the workflow run:
```yaml copy
      - name: Upload Telegram Bot
        uses: actions/upload-artifact@v4
        with:
          name: cndk8-telegram-bot
          path: target/${{ matrix.BUILD_TARGET }}/telegram
      - name: Upload hello app
        uses: actions/upload-artifact@v4
        with:
          name: cndk8-hello
          path: target/${{ matrix.BUILD_TARGET }}/cndk8
```

And to use them on a different job, i.e publishing:


```yaml copy
      - name: Download hello app
        uses: actions/download-artifact@v4
        with:
          name: cndk8-hello
          path: ./cndk8-hello
      - name: Publish hello app to GitHub Packages
        run: |
          curl -u "${{ github.actor }}:${{ secrets.GH_TOKEN }}" \
            -X POST "https://uploads.github.com/repos/${{ github.repository }}/releases/assets?name=cndk8-hello.tar.gz" \
            --header "Content-Type: application/gzip" \
            --data-binary @./cndk8-hello/cndk8
```

## Publishing your package or library to crates.io

Once you have setup your workflow to build and test your code, you can alternatively use a secret to login to crates.io and publish your package.

```yaml copy
      - uses: actions/checkout@v4
      - name: login into crates.io
        run: cargo login ${{ secrets.CRATES_IO }}
      - name: Build binaries in "release" mode
        run: cargo build -r
      - name: "Package for crates.io"
        run: cargo package # publishes a package as a tarball
      - name: "Publish to crates.io"
        run: cargo publish # publishes your crate as a library that can be added as a dependency
```
As an example of how packages are published, see the [cndk8 0.1.0](https://crates.io/crates/cndk8/0.1.0). In the case that there are errors with Metadata check
your [manifest](https://doc.rust-lang.org/cargo/reference/manifest.html) Cargo.toml, when its about dirty directory check your Cargo.lock, and read the corresponding documentation.
