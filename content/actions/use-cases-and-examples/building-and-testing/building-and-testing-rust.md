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
<!-- {% data reusables.actions.enterprise-github-hosted-runners %}-->

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

At the time of writing, the default rust compiler version is 1.83.0 rustup is available and can be used to install additional toolchains.

```yaml copy
      - name: Temporarily modify the rust toolchain version
        run: rustup override set nightly
      - name: Ouput rust version for educational purposes
        run: rustup --version
```

### Caching dependencies

You can cache and restore dependencies using the following example below. Note that you will need to have Cargo.lock in your repository to cache dependencies.

```yaml copy
      - name: ⚡ Cache
      - uses: {% data reusables.actions.action-cache %}
        with:
          path: |
            ~/.cargo/registry
            ~/.cargo/git
            target
          key: {% raw %}${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}{% endraw %}
```

If you have a custom requirement or need finer controls for caching, you can take a look at the [`cache` action](https://github.com/marketplace/actions/cache). For more information, see [AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows).

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
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build binaries in "${{ matrix.BUILD_TARGET }}" mode
        run: cargo build --profile ${{ matrix.BUILD_TARGET }}
      - name: Run tests in "${{ matrix.BUILD_TARGET }}" mode
        run: cargo test --profile ${{ matrix.BUILD_TARGET }}
```

Note that the `release` keyword used above, corresponds to a cargo profile. You can use any [profile](https://doc.rust-lang.org/cargo/reference/profiles.html) you have defined in your `Cargo.toml` file.

## Upload artifacts

In case publishing artifacts is needed, but not to crates.io, the following example demonstrates how to upload artifacts to the workflow run:

```yaml copy
      - name: Upload hello app
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: cndk8-hello
          path: target/${{ matrix.BUILD_TARGET }}/cndk8
```

And to use them on a different job, i.e publishing:

```yaml copy
      - name: Download hello app
        uses: {% data reusables.actions.action-download-artifact %}
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
