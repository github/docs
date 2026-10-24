---
title: Protecting endpoints with GitHub package firewall
shortTitle: 'Protect endpoints with {% data variables.product.prodname_package_firewall %}'
intro: 'Protect dependency installations on developer machines, AI agents, and CI runners with {% data variables.product.prodname_GH_package_firewall %}.'
versions:
  fpt: '*'
  ghec: '*'
allowTitleToDifferFromFilename: true
contentType: how-tos
category:
  - Secure your dependencies
redirect_from:
  - /early-access/security/protecting-endpoints-with-package-firewall
  - /early-access/security
---

> [!NOTE]
> This feature is currently in {% data variables.release-phases.public_preview %} and is subject to change.

## About {% data variables.product.prodname_GH_package_firewall %}

The {% data variables.product.prodname_GH_package_firewall %} sits between your endpoints and package registries. It evaluates package downloads against policies such as minimum package age and malware advisories, and blocks downloads that do not meet those policies. You can use it to protect dependency installations in CI builds, AI agent sessions, and local development.

To use the firewall, configure your enterprise's policy controls, then configure your endpoints to request packages through the firewall instead of directly from a public registry. You can also grant access to manage the policy through a custom role.

## Configuring policy controls

Enterprise security managers and enterprise administrators can configure policy controls.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. In the sidebar, click **{% data variables.product.prodname_package_firewall %}**.
1. Configure the policy controls described in the following sections. These controls apply to all requests that pass through the firewall.

### Block known malware

When enabled, this control checks the {% data variables.product.prodname_advisory_database %} for active malware advisories and blocks packages with a matching advisory. This control defaults to **On**.

### Block vulnerability advisories

This control checks the {% data variables.product.prodname_advisory_database %} for vulnerabilities that affect the requested package version. Select the minimum advisory severity that blocks an installation: **Critical only**, **High or higher**, **Medium or higher**, or **Any severity**. This control defaults to **Critical only**.

### Block attestation downgrades

This control compares attestations for the requested package version with those of earlier versions. If the package previously had SLSA attestations but the requested version does not, the firewall blocks the download. Missing attestations can indicate a compromised publishing process. For more information about attestations, see [AUTOTITLE](/actions/concepts/security/artifact-attestations). This control defaults to **On**.

### Block newly-introduced install scripts

This control checks whether the package recently added scripts that run during installation, such as `preinstall` or `postinstall` scripts. These scripts can run arbitrary commands on your system and can be used to steal credentials. This control defaults to **On**.

### Minimum package age

This control sets a cooldown period for newly published package versions. The firewall blocks versions that are newer than the configured minimum age, allowing time for threats to be discovered before you install them.

Set the minimum age to a value between 1 and 365 days, or set it to 0 to disable the control. The default is 1 day.

## Configuring endpoints to use the {% data variables.product.prodname_package_firewall %}

Configure your package manager to fetch packages from the firewall's URL instead of the default public registry.

### Authentication token

The registry URL is specific to your enterprise. Each request must include an authentication token associated with a user or bot account that is a member of the enterprise. The token does not need any elevated permission beyond **Read-only access to public repositories**. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

### Configuring npm

Use your user-level `.npmrc` file to configure npm. In the examples, replace `ENTERPRISE` with your enterprise slug. Set the `GITHUB_TOKEN` environment variable to a {% data variables.product.github %} token with access to your enterprise. Store the token securely, such as in a CI secret, and do not commit it to a repository.

1. Add the following configuration to your user-level `.npmrc` file:

   ```text
   registry=https://package-firewall.githubapp.com/npm/enterprises/ENTERPRISE
   //package-firewall.githubapp.com/npm/enterprises/ENTERPRISE/:_authToken=${GITHUB_TOKEN}
   ```

Alternatively, configure the same settings from the command line:

```shell
npm config set registry \
  https://package-firewall.githubapp.com/npm/enterprises/ENTERPRISE
npm config set \
  '//package-firewall.githubapp.com/npm/enterprises/ENTERPRISE/:_authToken=${GITHUB_TOKEN}'
```

### Configuring Artifactory

You can configure JFrog Artifactory to retrieve packages through the firewall. Your endpoints continue to use Artifactory, which lets you combine public and private packages while applying firewall policies to packages retrieved through the firewall.

You must have administrator privileges in your Artifactory instance.

> [!NOTE]
> Artifactory support is experimental. To share suggestions or concerns about Artifactory support, see the [community discussion](https://gh.io/package-fw-discussion).

1. In Artifactory, click the **Administration** tab, then click **Create a repository**.
1. Select **Remote** as the repository type, then select **npm** as the package type.
1. In the "Repository key" field, type a name such as `gh-package-firewall`.
1. In the "URL" field, type `https://package-firewall.githubapp.com/npm/enterprises/ENTERPRISE`, replacing `ENTERPRISE` with your enterprise slug.
1. In the "Password / Access Token" field, paste a valid {% data variables.product.pat_generic %}, then select **Enable Token Authentication**.
1. Select the **Stage** where you want to use the firewall, based on your Artifactory configuration.
1. In the "Pattern" field, type `**/*` to include all package paths.
1. Click **Save**.
1. Create or update a virtual npm repository to include this remote and your private npm repositories. Exclude remotes that fetch packages directly from the public npm registry so they cannot bypass the firewall.
1. Follow the virtual repository's **Set me up** instructions to configure your endpoints.

## Fine-grained permissions

By default, enterprise administrators and enterprise security managers can modify the firewall policy. To grant other users access to view and change the policy, add the "Edit enterprise-level package firewall policy" fine-grained permission to a custom role, then assign that role to a team or individual.

## Managing exceptions

If the firewall blocks a package you need, you can request an exception to the policy. For example, a new package version that includes a security fix could be blocked by the minimum package age policy.

### Requesting an exception

When the firewall blocks a package, the npm output or CI/CD log includes a URL for requesting an exception. For example:

```text
npm notice testcontainers: 1 version blocked by package-firewall due to security policies (version cooldown). Request an override: https://github.com/enterprises/octocats/security/bypass-requests/package-firewall/new?ecosystem=npm&package=testcontainers
```

1. Open the URL in your browser.
1. Review the prefilled fields and provide any missing information:

   * "Repository": The repository where the block occurred
   * "Ecosystem": The package ecosystem (currently, only npm is supported)
   * "Package name": The package name, including the `@scope` prefix if applicable
   * "Version": The version you attempted to install
   * "Reason": Why the package should be unblocked
   * "Add a comment": Additional context for reviewers

1. Submit the request.

### Reviewing and approving exception requests

Enterprise administrators and enterprise security managers can review exception requests.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.security-and-code-quality-tab %}
1. In the sidebar, click **{% data variables.product.prodname_package_firewall %} bypass**.
1. In the "Package firewall bypass requests" list, use the search bar to find a request, then click the request.
1. In the "Review package allow override" dialog, review the requested exception.
1. Optionally, to allow all versions of the package, replace the requested version in the "Version or range to allow" field with `*`. This broadens the exception beyond the requested version.
1. Add a comment explaining your decision, then click **Approve request**.

For example, you might allow all versions of an enterprise-owned package rather than require a separate exception each time the minimum package age policy blocks a new version.

### Managing approvals

Approved bypass requests are added to the firewall policy. Enterprise administrators and enterprise security managers can review and remove outdated or unwanted exceptions, including exceptions added manually.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. In the sidebar, click **{% data variables.product.prodname_package_firewall %}**.
1. Under "Overrides", click **Package overrides**.
1. To remove an exception from the policy, next to the exception, click {% octicon "trash" aria-label="Delete exception" %}.

## Further reading

* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/create-custom-roles)
* [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/assign-roles)
* [AUTOTITLE](/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/browse-advisory-database)
