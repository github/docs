---
title: 'Error: "Out of disk" or Error: "Out of memory"'
shortTitle: 'Out of disk or memory'
intro: 'If you see one of these errors, try these steps.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

<!-- CodeQL CLI depends on a short URL generated from this article's URL. If this article's URL ever changes, make sure to update the short URL https://gh.io/troubleshooting-code-scanning/out-of-disk-or-memory. https://thehub.github.com/it/how-to/url-shortening -->

{% data reusables.code-scanning.beta %}

On very large projects, {% data variables.product.prodname_codeql %}, you may see `Error: "Out of disk"` or `Error: "Out of memory"` on the runner.

{% ifversion fpt or ghec %}If you encounter this issue on a hosted {% data variables.product.prodname_actions %} runner, contact {% data variables.contact.contact_support %} so that we can investigate the problem. {% else %}If you encounter this issue, try increasing the memory on the runner.{% endif %}