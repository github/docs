---
title: Configuring the dependency review action
shortTitle: Configure dependency review action
intro: You can use the {% data variables.dependency-review.action_name %} to catch vulnerabilities before they are added to your project.
permissions: '{% data reusables.permissions.security-repo-enable %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review
  - /code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-review-action
contentType: how-tos
category:
  - Secure your dependencies
---

The "{% data variables.dependency-review.action_name %}" refers to the specific action that can report on differences in a pull request within the {% data variables.product.prodname_actions %} context. It can also add enforcement mechanisms to the {% data variables.product.prodname_actions %} workflow. For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/about-dependency-review#about-the-dependency-review-action).

For a list of common configuration options, see [Dependency review](https://github.com/marketplace/actions/dependency-review#configuration-options) on the {% data variables.product.prodname_marketplace %}.
 
## Configuring the {% data variables.dependency-review.action_name %}

There are two methods of configuring the {% data variables.dependency-review.action_name %}:
* Inlining the configuration options in your workflow file.
* Referencing a configuration file in your workflow file.

Notice that all of the examples use a short version number for the action (`v3`) instead of a semver release number (for example, `v3.0.8`). This ensures that you use the most recent minor version of the action.

### Using inline configuration to set up the {% data variables.dependency-review.action_name %}

1. Add a new YAML workflow to your `.github/workflows` folder.

   {% ifversion ghes %}For `runs-on`, the default label is `self-hosted`. You can replace the default label with the label of any of your runners.{% endif %}

   ```yaml copy
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
       runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
       steps:
        - name: 'Checkout Repository'
          uses: {% data reusables.actions.action-checkout %}
        - name: Dependency Review
          uses: actions/dependency-review-action@v4
   ```

1. Specify your settings.

   This {% data variables.dependency-review.action_name %} example file illustrates how you can use the available configuration options.

   <!-- markdownlint-disable search-replace -->

   ```yaml copy
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
       runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
       steps:
       - name: 'Checkout Repository'
         uses: {% data reusables.actions.action-checkout %}
       - name: Dependency Review
         uses: actions/dependency-review-action@v4
         with:
           # Possible values: "critical", "high", "moderate", "low"
           fail-on-severity: critical

           {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licenses`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
           deny-licenses: LGPL-2.0, BSD-2-Clause
           {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
   ```

   <!-- markdownlint-enable search-replace -->

### Using a configuration file to set up {% data variables.dependency-review.action_name %}

1. Add a new YAML workflow to your `.github/workflows` folder and use `config-file` to specify that you are using a configuration file.

   {% ifversion ghes %}For `runs-on`, the default label is `self-hosted`. You can replace the default label with the label of any of your runners.{% endif %}

   ```yaml copy
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       runs-on: {% ifversion ghes %}[self-hosted]{% else %}ubuntu-latest{% endif %}
       steps:
       - name: 'Checkout Repository'
         uses: {% data reusables.actions.action-checkout %}
       - name: Dependency Review
         uses: actions/dependency-review-action@v4
         with:
          # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
          # Possible values: An absolute path to a local file or an external file.
          config-file: './.github/dependency-review-config.yml'
          # Optional alternative syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH (uncomment if preferred)
          # config-file: 'github/octorepo/dependency-review-config.yml@main'

          # ([Token]) Use if your configuration file resides in a private external repository.
          # Possible values: Any GitHub token with read access to the private external repository.
          external-repo-token: 'ghp_123456789abcde'
   ```

1. Create the configuration file in the path you have specified.

   This YAML example file illustrates how you can use the available configuration options.

   <!-- markdownlint-disable search-replace -->

   ```yaml copy
     # Possible values: "critical", "high", "moderate", "low"
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licenses`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
     allow-licenses:
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any SPDX-compliant license identifiers or expressions from https://spdx.org/licenses/
     deny-licenses:
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories
     allow-ghsas:
       - GHSA-abcd-1234-5679
       - GHSA-efgh-1234-5679
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes:
       - development
       - runtime
   ```

   <!-- markdownlint-enable search-replace -->

For further details about the configuration options, see [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).

## Further reading

* [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/customizing-your-dependency-review-action-configuration)
