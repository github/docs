---
title: Installing a package
intro: 'You can install a package from {% data variables.product.prodname_registry %} and use the package as a dependency in your own project.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
permissions: Anyone with read permissions for a repository can install a package from that repository.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}

### About package installation

You can search {% data variables.product.product_name %} to find packages in {% data variables.product.prodname_registry %} that you can install in your own project. For more information, see "[Searching {% data variables.product.prodname_registry %} for packages](/github/searching-for-information-on-github/searching-for-packages)."

After you find a package, you can read the package's description and installation and usage instructions on the package page.

### Installing a package

You can install a package from {% data variables.product.prodname_registry %} using any {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}supported package client{% else %}package type enabled for your instance{% endif %} by following the same general guidelines.

1. Authenticate to {% data variables.product.prodname_registry %} using the instructions for your package client. For more information, see "[About tokens](/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages)."
2. Install the package using the instructions for your package client.

For instructions specific to your package client, see "[Using {% data variables.product.prodname_registry %} with your project's ecosystem](/packages/using-github-packages-with-your-projects-ecosystem)."
