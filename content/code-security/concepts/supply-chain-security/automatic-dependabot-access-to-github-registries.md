---
title:  Automatic Dependabot access to {% data variables.product.github %}-hosted registries
intro: 'Keep your private dependencies up to date reliably by granting {% data variables.product.prodname_dependabot %} automatic access to {% data variables.product.prodname_registry %} and {% data variables.product.prodname_container_registry %}, so you never need to create or rotate credentials for these registries.'
versions:
  feature: org-automatic-registry-access
shortTitle: Automatic registry access
allowTitleToDifferFromFilename: true
contentType: concepts
category:
  - Secure your dependencies
---

## About automatic access to {% data variables.product.github %}-hosted registries
 
{% data variables.product.prodname_dependabot %} can authenticate to private {% data variables.product.prodname_registry %} and {% data variables.product.prodname_container_registry %} packages using the same access grants that {% data variables.product.prodname_actions %} workflows use. If a package has granted your repository **Read** access in the package settings on {% data variables.product.github %}, {% data variables.product.prodname_dependabot %} can access that package automatically.
 
This eliminates the need to:
 
* Create and manage {% data variables.product.pat_generic_plural %} for registry access
* Manually configure access to {% data variables.product.github %}-hosted registries in your `dependabot.yml` file 
* Rotate credentials when tokens expire
 
## How automatic access works
 
{% data variables.product.prodname_dependabot %} uses its `GITHUB_TOKEN` to request `packages: read` permission when pulling from `*.pkg.github.com` and {% data variables.product.prodname_container_registry_namespace %}. Any package that has granted your repository access through "Manage Actions access" accepts this token, the same way it would for a regular {% data variables.product.prodname_actions %} workflow. See [AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).git s
 
This works for every {% data variables.product.prodname_registry %} ecosystem that {% data variables.product.prodname_dependabot %} supports.
 
## When to use automatic access
 
Use automatic access to {% data variables.product.github %}-hosted registries when:
 
* Your repositories depend on private packages stored in {% data variables.product.prodname_registry %} or {% data variables.product.prodname_container_registry %}.
* You want to reduce credential management overhead.
* You want to avoid silent update failures caused by expired {% data variables.product.pat_generic_plural %}.
 
For third-party registries (such as Artifactory, Azure Artifacts, or Nexus), you can only use the `dependabot.yml` registry configuration or organization-level private registry settings. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries).
 
## How to enable automatic access
 
For each package that {% data variables.product.prodname_dependabot %} needs to read, you need to go to the package's settings page and add the repository that runs {% data variables.product.prodname_dependabot %} with **Read** access. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-access-to-private-registries#configuring-private-github-hosted-registries).
 
Once the repository has been granted access, {% data variables.product.prodname_dependabot %} can pull from that package automatically. You do not need to configure the `dependabot.yml` file, and you can remove any existing {% data variables.product.pat_generic %}-based registry entries you previously added for these packages.
 
For more information about configuring package access, see [AUTOTITLE](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-workflow-access-to-your-package).
