---
title: Customizing GitHub-hosted runners
intro: You can install additional software on GitHub-hosted runners as a part of your workflow.
product: '{% data reusables.gated-features.actions %}'
versions:
  fpt: '*'
  ghes: '>=2.22'
type: tutorial
topics:
  - Workflows
shortTitle: Customize runners
---

{% data reusables.actions.enterprise-github-hosted-runners %}

If you require additional software packages on {% data variables.product.prodname_dotcom %}-hosted runners, you can create a job that installs the packages as part of your workflow. 

To see which packages are already installed by default, see "[Preinstalled software](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)."

This guide demonstrates how to create a job that installs additional software on a {% data variables.product.prodname_dotcom %}-hosted runner.

## Installing software on Ubuntu runners

The following example demonstrates how to install an `apt` package as part of a job.

{% raw %}
```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```
{% endraw %}

{% note %}

**Note:** Always run `sudo apt-get update` before installing a package. In case the `apt` index is stale, this command fetches and re-indexes any available packages, which helps prevent package installation failures. 

{% endnote %}

## Installing software on macOS runners

The following example demonstrates how to install Brew packages and casks as part of a job.

{% raw %}
```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```
{% endraw %}

## Installing software on Windows runners

The following example demonstrates how to use [Chocolatey](https://community.chocolatey.org/packages) to install the {% data variables.product.prodname_dotcom %} CLI as part of a job.

{% raw %}
```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
{% endraw %}
