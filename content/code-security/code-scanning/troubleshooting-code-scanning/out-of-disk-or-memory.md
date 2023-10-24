---
title: 'Error: "Out of disk" or Error: "Out of memory"'
shortTitle: 'Out of disk or memory'
intro: 'If you see one of these errors with {% data variables.product.prodname_actions %}, {% ifversion ghes %}try reviewing the specifications of your self-hosted runners.{% else %}you can try alternative runners.{% endif %}'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

<!-- CodeQL CLI depends on a short URL generated from this article's URL. If this article's URL ever changes, make sure to update the short URL https://gh.io/troubleshooting-code-scanning/out-of-disk-or-memory. https://thehub.github.com/it/how-to/url-shortening -->

{% data reusables.code-scanning.beta %}

{% ifversion ghes %}
On very large projects, you may see `Error: "Out of disk"` or `Error: "Out of memory"` on self-hosted runners when running {% data variables.product.prodname_code_scanning %}. In this case, you may need to increase the memory or disk space available on the runners used for {% data variables.product.prodname_code_scanning %} analysis.

You can review the recommended hardware resources for running {% data variables.product.prodname_codeql %} to make sure your self-hosted runners meet those requirements. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

{% else %}

## Use self-hosted runners

Self-hosted runners offer more control of hardware, operating system, and software tools than {% data variables.product.company_short %}-hosted runners can provide. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)." If you're using {% data variables.product.prodname_codeql %} with advanced setup, you can review the recommended hardware resources for running {% data variables.product.prodname_codeql %} to make sure your self-hosted runners meet those requirements. For more information, see "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/recommended-hardware-resources-for-running-codeql)."

{% ifversion actions-hosted-runners %}

## Use larger runners

You can use larger runners, which are {% data variables.product.company_short %}-hosted runners with more RAM, CPU, and disk space than standard runners. These runners have the runner application and other tools preinstalled. For more information about larger runners and the specifications you can use with them, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners)."{% endif %}
{% endif %}
