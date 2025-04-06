---
title: Running CodeQL code scanning in a container
shortTitle: '{% data variables.product.prodname_code_scanning_caps %} in a container'
intro: 'You can run {% data variables.product.prodname_code_scanning %} in a container by ensuring that all processes run in the same container.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - Containers
  - Java
---

## About {% data variables.product.prodname_code_scanning %} with a containerized build

If you're configuring {% data variables.product.prodname_code_scanning %} for a compiled language, and you're building the code in a containerized environment, the analysis may fail with the error message "No source code was seen during the build." This indicates that {% data variables.product.prodname_codeql %} was unable to monitor your code as it was compiled.

You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_cli %} or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_cli %}, see "[AUTOTITLE](/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system)" for more information. If you're using {% data variables.product.prodname_actions %}, configure your workflow to run all the actions in the same container. For more information, see "[Example workflow](#example-workflow)."

{% note %}

**Note:** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## Dependencies for {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}

You may have difficulty running {% data variables.product.prodname_code_scanning %} if the container you're using is missing certain dependencies (for example, Git must be installed and added to the PATH variable). If you encounter dependency issues, review the list of software typically included on {% data variables.product.prodname_dotcom %}'s runner images. For more information, see the version-specific `readme` files in these locations:

* Linux: https://github.com/actions/runner-images/tree/main/images/ubuntu
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/windows

## Example workflow

{% data reusables.code-scanning.codeql-action-version-ghes %}

This sample workflow uses {% data variables.product.prodname_actions %} to run {% data variables.product.prodname_codeql %} analysis in a containerized environment. The value of `container.image` identifies the container to use. In this example the image is named `codeql-container`, with a tag of `f0f91db`. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontainer)."

```yaml
name: "{% data variables.product.prodname_codeql %}"

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [{% ifversion codeql-language-identifiers-311 %}java-kotlin{% else %}java{% endif %}]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: {% data reusables.actions.action-codeql-action-analyze %}
```
