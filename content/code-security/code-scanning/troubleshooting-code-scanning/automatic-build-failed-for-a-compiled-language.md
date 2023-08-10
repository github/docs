---
title: 'Automatic build failed for a compiled language'
shortTitle: 'Automatic build failed'
allowTitleToDifferFromFilename: true
intro: 'If automatic build fails, you can configure {% data variables.product.prodname_code_scanning %} to use specific build steps for compiled languages.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

If an automatic build of code for a compiled language within your project fails, try removing the `autobuild` step from your {% data variables.product.prodname_code_scanning %} workflow and adding specific build steps. For more information about replacing the `autobuild` step, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/codeql-code-scanning-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

If your workflow doesn't explicitly specify the languages to analyze, {% data variables.product.prodname_codeql %} implicitly detects the supported languages in your code base. In this configuration, out of the compiled languages {% data variables.code-scanning.compiled_languages %}, {% data variables.product.prodname_codeql %} only analyzes the language with the most source files. Edit the workflow and add a matrix specifying the languages you want to analyze. The default {% data variables.product.prodname_codeql %} analysis workflow uses such a matrix.

  The following extracts from a workflow show how you can use a matrix within the job strategy to specify languages, and then reference each language within the "Initialize {% data variables.product.prodname_codeql %}" step:

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  For more information about editing the workflow, see "[AUTOTITLE](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/customizing-code-scanning)."