---
title: 'Error: "Out of disk" or Error: "Out of memory"'
shortTitle: 'Out of disk or memory'
intro: 'If you see one of these errors with {% data variables.product.prodname_actions %}, {% ifversion ghes %}try reviewing the specifications of your self-hosted runners.{% else %}you can try alternative runners.{% endif %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

<!-- CodeQL CLI depends on a short URL generated from this article's URL. If this article's URL ever changes, make sure to update the short URL https://gh.io/troubleshooting-code-scanning/out-of-disk-or-memory. https://thehub.github.com/it/how-to/url-shortening -->

## About these errors

```text
Out of disk
```

```text
Out of memory
```

You may see these errors when running {% data variables.product.prodname_code_scanning %}.

## Confirming the cause of the problem

You can review the recommended hardware resources for running {% data variables.product.prodname_codeql %} to make sure the runners that you use for {% data variables.product.prodname_code_scanning %} meet those requirements. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

## Fixing the problem

{% ifversion ghes %}

You may need to increase the memory or disk space available on the runners used for {% data variables.product.prodname_code_scanning %} analysis.

{% else %}

If the runners you're using don't meet the recommended hardware requirements, consider using either {% data variables.actions.hosted_runners %} or self-hosted runners.

{% data variables.actions.hosted_runner_caps %}s are {% data variables.product.company_short %}-hosted runners with more RAM, CPU, and disk space than standard runners. These runners have the runner application and other tools preinstalled. For more information about {% data variables.actions.hosted_runners %} and {% data variables.product.prodname_code_scanning %}, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners)" and "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/configuring-larger-runners-for-default-setup)."

Self-hosted runners offer more control of hardware, operating system, and software tools than {% data variables.product.company_short %}-hosted runners can provide. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."
{% endif %}
