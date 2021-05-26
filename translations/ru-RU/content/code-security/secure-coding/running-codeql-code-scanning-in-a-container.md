---
title: Running CodeQL code scanning in a container
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
intro: 'You can run {% data variables.product.prodname_code_scanning %} in a container by ensuring that all processes run in the same container.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

### About {% data variables.product.prodname_code_scanning %} with a containerized build

If you're setting up {% data variables.product.prodname_code_scanning %} for a compiled language, and you're building the code in a containerized environment, the analysis may fail with the error message "No source code was seen during the build." This indicates that {% data variables.product.prodname_codeql %} was unable to monitor your code as it was compiled.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_cli %}, the {% data variables.product.prodname_codeql_runner %}, or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_cli %} or the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)" or "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" for more information. If you're using {% data variables.product.prodname_actions %}, configure your workflow to run all the actions in the same container. For more information, see "[Example workflow](#example-workflow)."
{% else %}
You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_runner %} or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" for more information. If you're using {% data variables.product.prodname_actions %}, configure your workflow to run all the actions in the same container. For more information, see "[Example workflow](#example-workflow)."
{% endif %}

### Dependencies

You may have difficulty running {% data variables.product.prodname_code_scanning %} if the container you're using is missing certain dependencies (for example, Git must be installed and added to the PATH variable). If you encounter dependency issues, review the list of software typically included on {% data variables.product.prodname_dotcom %}'s virtual environments. For more information, see the version-specific `readme` files in these locations:

* Linux: https://github.com/actions/virtual-environments/tree/main/images/linux
* macOS: https://github.com/actions/virtual-environments/tree/main/images/macos
* Windows: https://github.com/actions/virtual-environments/tree/main/images/win

### Example workflow

This sample workflow uses {% data variables.product.prodname_actions %} to run {% data variables.product.prodname_codeql %} analysis in a containerized environment. The value of `container.image` identifies the container to use. In this example the image is named `codeql-container`, with a tag of `f0f91db`. For more information, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)."

``` yaml
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
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      security-events: write
      actions: read{% endif %}

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: github/codeql-action/analyze@v1
```
