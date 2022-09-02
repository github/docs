---
title: Running CodeQL code scanning in a container
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
intro: 'You can run {% data variables.product.prodname_code_scanning %} in a container by ensuring that all processes run in the same container.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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


{% data reusables.code-scanning.beta %}

## About {% data variables.product.prodname_code_scanning %} with a containerized build

If you're setting up {% data variables.product.prodname_code_scanning %} for a compiled language, and you're building the code in a containerized environment, the analysis may fail with the error message "No source code was seen during the build." This indicates that {% data variables.product.prodname_codeql %} was unable to monitor your code as it was compiled.

You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}, the {% data variables.product.prodname_codeql_runner %},{% endif %} or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}or the {% data variables.product.prodname_codeql_runner %}{% endif %}, see "[Installing {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)"{% ifversion codeql-runner-supported %} or "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)"{% endif %} for more information. If you're using {% data variables.product.prodname_actions %}, configure your workflow to run all the actions in the same container. For more information, see "[Example workflow](#example-workflow)."

{% note %}

**Note:** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## Dependencies

You may have difficulty running {% data variables.product.prodname_code_scanning %} if the container you're using is missing certain dependencies (for example, Git must be installed and added to the PATH variable). If you encounter dependency issues, review the list of software typically included on {% data variables.product.prodname_dotcom %}'s runner images. For more information, see the version-specific `readme` files in these locations:

* Linux: https://github.com/actions/runner-images/tree/main/images/linux
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/win

## Example workflow

{% ifversion ghes or ghae %}
{% note %}

**Note:** This article describes the features available with the version of the CodeQL action and associated CodeQL CLI bundle included in the initial release of this version of {% data variables.product.product_name %}. If your enterprise uses a more recent version of the CodeQL action, see the [{% data variables.product.prodname_ghe_cloud %} article](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container) for information on the latest features.{% ifversion not ghae %} For information on using the latest version, see "[Configuring code scanning for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)."{% endif %}

{% endnote %}
{% endif %}

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
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java]

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
