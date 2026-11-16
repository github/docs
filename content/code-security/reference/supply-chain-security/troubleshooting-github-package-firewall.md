---
title: Troubleshooting GitHub package firewall
shortTitle: Troubleshoot {% data variables.product.prodname_package_firewall %}
intro: 'Check whether cached packages or configuration issues explain unexpected installation results with {% data variables.product.prodname_GH_package_firewall %}.'
versions:
  fpt: '*'
  ghec: '*'
contentType: reference
category:
  - Secure your dependencies
  - Troubleshoot security tools
---

> [!NOTE]
> {% data reusables.code-security.package-firewall-public-preview %}

## A package still installs after a policy change

Package managers and registry proxies can reuse previously downloaded packages from their local caches. If no new request reaches {% data variables.product.prodname_GH_package_firewall %}, the firewall cannot evaluate the package against your updated policy. This can let a package install after you change a policy or remove an exception.

### Check the local npm cache

**Check:** Does the package still install with an empty npm cache, in a separate test environment, through the same firewall endpoint?

1. Note the exact package name, version, and scope, if applicable. Check whether the enterprise's policy or an exception allows that version.
1. In a temporary project outside the original one, configure npm to use the same enterprise's {% data variables.product.prodname_GH_package_firewall %} endpoint and authentication, including default and scope-specific registry settings. Keep the original project and lockfile unchanged, and do not clear a shared npm cache. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-npm).
1. Install the exact version using a new, empty cache directory. Replace `PACKAGE-NAME`, `EXACT-VERSION`, and `EMPTY-CACHE-DIRECTORY` with the package name, version, and cache directory path. The `--ignore-scripts` option prevents package lifecycle scripts from running.

   ```shell
   npm install PACKAGE-NAME@EXACT-VERSION \
     --cache EMPTY-CACHE-DIRECTORY --ignore-scripts
   ```

1. Compare the result with the original project:
   * If the firewall blocks the test, check the original project's installed packages, cache, registry configuration, and lockfile for differences. The blocked test alone does not identify which difference allowed the original installation.
   * If the test succeeds, verify that requests for that version reached the same enterprise's firewall endpoint, then recheck the policy and exceptions. Do not assume npm used cached content.

### Artifactory caching

> [!NOTE]
> This guidance applies only to the experimental Artifactory integration for npm packages. Even with an empty local npm cache, Artifactory can serve cached content without sending a new request through the firewall.

If npm retrieves the package from Artifactory, check whether Artifactory served cached content. Also check that the virtual npm repository uses the firewall-backed remote and does not include a remote that retrieves the package directly from the public npm registry. See [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/protecting-endpoints-with-package-firewall#configuring-artifactory).
