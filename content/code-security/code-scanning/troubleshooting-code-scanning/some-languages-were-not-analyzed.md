---
title: 'Some languages were not analyzed with CodeQL advanced setup'
shortTitle: 'Some languages not analyzed'
allowTitleToDifferFromFilename: true
intro: 'If some languages were not analyzed, you can modify your {% data variables.product.prodname_code_scanning %} workflow to add a matrix specifying the languages you want to analyze.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.codeql-action-version-ghes %}

If you're using advanced setup and your workflow doesn't explicitly specify the languages to analyze, {% data variables.product.prodname_codeql %} implicitly detects the supported languages in your code base. In this configuration, out of the compiled languages {% data variables.code-scanning.compiled_languages %}, {% data variables.product.prodname_codeql %} only analyzes the language with the most source files. Edit the workflow and add a matrix specifying the languages you want to analyze. The default {% data variables.product.prodname_codeql %} analysis workflow uses such a matrix.

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
        matrix: {% ifversion codeql-language-identifiers-311 %}
          language: ['csharp', 'c-cpp', 'javascript-typescript'] {% else %}
          language: ['csharp', 'cpp', 'javascript'] {% endif %}

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  For more information about editing the workflow, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning)."
