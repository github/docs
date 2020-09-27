---
title: Ein Paket installieren
intro: 'You can install a package from {{ site.data.variables.product.prodname_registry }} and use the package as a dependency in your own project.'
product: '{{ site.data.reusables.gated-features.packages }}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
permissions: Anyone with read permissions for a repository can install a package from that repository.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{{ site.data.reusables.package_registry.packages-ghes-release-stage }}

### About package installation

You can search {{ site.data.variables.product.prodname_dotcom }} to find packages in {{ site.data.variables.product.prodname_registry }} that you can install in your own project. For more information, see "[Searching {{ site.data.variables.product.prodname_registry }} for packages](/github/searching-for-information-on-github/searching-for-packages)."

After you find a package, you can read the package's description and installation and usage instructions on the package page.

### Ein Paket installieren

You can install a package from {{ site.data.variables.product.prodname_registry }} using any supported package client by following the same general guidelines.

1. Authenticate to {{ site.data.variables.product.prodname_registry }} using the instructions for your package client. For more information, see "[About tokens](/packages/publishing-and-managing-packages/about-github-packages#about-tokens)."
2. Install the package using the instructions for your package client.

For instructions specific to your package client, see "[Using {{ site.data.variables.product.prodname_registry }} with your project's ecosystem](/packages/using-github-packages-with-your-projects-ecosystem)."
