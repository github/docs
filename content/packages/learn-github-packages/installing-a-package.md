---
title: Installing a package
intro: 'You can install a package from {% data variables.product.prodname_registry %} and use the package as a dependency in your own project.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

## About package installation

You can search on {% data variables.location.product_location %} to find packages in {% data variables.product.prodname_registry %} that you can install in your own project. For more information, see "[AUTOTITLE](/search-github/searching-on-github/searching-for-packages)."

After you find a package, you can read the package's description and installation and usage instructions on the package page.

## Installing a package

You can install a package from {% data variables.product.prodname_registry %} using any {% ifversion fpt or ghec %}supported package client{% else %}package type enabled for your instance{% endif %} by following the same general guidelines.

1. Authenticate to {% data variables.product.prodname_registry %} using the instructions for your package client. For more information, see "[AUTOTITLE](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages)."
1. Install the package using the instructions for your package client.

For instructions specific to your package client, see "[AUTOTITLE](/packages/working-with-a-github-packages-registry)."
