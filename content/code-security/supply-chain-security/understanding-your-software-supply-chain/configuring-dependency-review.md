---
title: Configuring dependency review
intro: You can use dependency review to catch vulnerabilities before they are added to your project.
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
---

## About dependency review

{% data reusables.dependency-review.feature-overview %}

For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" and "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)."

{% ifversion fpt or ghec or ghes %}

## About configuring dependency review

{% endif %}

{% ifversion fpt %}
Dependency review is available in all public repositories in all products and cannot be disabled. Dependency review is available in private repositories owned by organizations that use GitHub Enterprise Cloud and have a license for [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %}
Dependency review is included in {% data variables.product.product_name %} for public repositories. To use dependency review in private repositories owned by organizations, you must have a license for [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) and have the dependency graph enabled.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Scroll down the page and if "{% data variables.product.prodname_GH_advanced_security %}" is not enabled, click **Enable** next to the feature.

{% elsif ghes %}

Dependency review is available when dependency graph is enabled for {% data variables.location.product_location %} and {% data variables.product.prodname_advanced_security %} is enabled for the organization or repository.{% ifversion ghes %} For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise)."{% endif %}

### Checking if the dependency graph is enabled

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Configure security and analysis features", check if the dependency graph is enabled.
1. If dependency graph is enabled, click **Enable** next to "{% data variables.product.prodname_GH_advanced_security %}" to enable {% data variables.product.prodname_advanced_security %}, including dependency review. The enable button is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% ifversion ghes %}
    ![Screenshot of "Code security and analysis features".](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}

## About configuring the {% data variables.dependency-review.action_name %}

{% data reusables.dependency-review.dependency-review-action-overview %}

The following configuration options are available.

| Option | Required | Usage |
|------------------|-------------------------------|--------|
| `fail-on-severity` | {% octicon "x" aria-label="Optional" %} | Defines the threshold for level of severity (`low`, `moderate`, `high`, `critical`).</br>The action will fail on any pull requests that introduce vulnerabilities of the specified severity level or higher. |
{%- ifversion dependency-review-action-licenses %}
| `allow-licenses` | {% octicon "x" aria-label="Optional" %} | Contains a list of allowed licenses. You can find the possible values for this parameter in the [Licenses](/rest/licenses) page of the API documentation.</br>The action will fail on pull requests that introduce dependencies with licenses that do not match the list.|{% endif %}
{%- ifversion dependency-review-action-licenses %}
| `deny-licenses` | {% octicon "x" aria-label="Optional" %} | Contains a list of prohibited licenses. You can find the possible values for this parameter in the [Licenses](/rest/licenses) page of the API documentation.</br>The action will fail on pull requests that introduce dependencies with licenses that match the list.|{% endif %}{% ifversion dependency-review-action-fail-on-scopes %}
| `fail-on-scopes` | {% octicon "x" aria-label="Optional" %} | Contains a list of strings representing the build environments you want to support (`development`, `runtime`, `unknown`). </br>The action will fail on pull requests that introduce vulnerabilities in the scopes that match the list.|{% endif %}
| `allow-ghsas` | {% octicon "x" aria-label="Optional" %} | Contains a list of {% data variables.product.prodname_advisory_database %} IDs that can be skipped during detection. You can find the possible values for this parameter in the [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories). |
| `config-file` | {% octicon "x" aria-label="Optional" %} | Specifies a path to a configuration file. The configuration file can be local to the repository or a file located in an external repository.|
| `external-repo-token` | {% octicon "x" aria-label="Optional" %} | Specifies a token for fetching the configuration file, if the file resides in a private external repository. The token must have read access to the repository.|

{% ifversion dependency-review-action-licenses %}
{% tip %}

**Tip:** The  `allow-licenses` and  `deny-licenses` options are mutually exclusive.

{% endtip %}
{% endif %}

## Configuring the {% data variables.dependency-review.action_name %}

There are two methods of configuring the {% data variables.dependency-review.action_name %}:
- Inlining the configuration options in your workflow file.
- Referencing a configuration file in your workflow file.

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
      {% ifversion ghes %}runs-on: self-hosted
        {% else %}runs-on: ubuntu-latest
        {% endif %}steps:
        - name: 'Checkout Repository'
          uses: {% data reusables.actions.action-checkout %}
        - name: Dependency Review
          uses: actions/dependency-review-action@v3
   ```

1. Specify your settings.

   This {% data variables.dependency-review.action_name %} example file illustrates how you can use the available configuration options.

   ```yaml copy
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
       - name: 'Checkout Repository'
         uses: {% data reusables.actions.action-checkout %}
       - name: Dependency Review
         uses: actions/dependency-review-action@v3
         with:
         # Possible values: "critical", "high", "moderate", "low" 
         fail-on-severity: critical

           {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licenses`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses
           deny-licenses: LGPL-2.0, BSD-2-Clause
           {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
           {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
           {% endif %}
   ```

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
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
       - name: 'Checkout Repository'
         uses: {% data reusables.actions.action-checkout %}
       - name: Dependency Review
         uses: actions/dependency-review-action@v3
         with:
          # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
          # Possible values: An absolute path to a local file or an external file.
          config-file: './.github/dependency-review-config.yml'   
          # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
          config-file: 'github/octorepo/dependency-review-config.yml@main'

          # ([Token]) Use if your configuration file resides in a private external repository.
          # Possible values: Any GitHub token with read access to the private external repository.  
          external-repo-token: 'ghp_123456789abcde'
   ```

1. Create the configuration file in the path you have specified.

   This YAML example file illustrates how you can use the available configuration options.

   ```yaml copy
     # Possible values: "critical", "high", "moderate", "low"
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licenses`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses
     allow-licenses:
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses
     deny-licenses:
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories
     allow-ghsas:
       - GHSA-abcd-1234-5679
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes:
       - development
       - runtime
   {% endif %}
   ```

For further details about the configuration options, see [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
