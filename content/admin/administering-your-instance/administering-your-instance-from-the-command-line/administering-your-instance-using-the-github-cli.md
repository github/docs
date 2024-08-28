---
title: Administering your instance using the GitHub CLI
intro: 'You can administer your {% data variables.product.prodname_ghe_server %} instance using the {% data variables.product.prodname_cli %} extension for GHES Manage API.'
versions:
  feature: ghes-manage-api-cli-extension
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Using the GitHub CLI
---
## About the `gh es` extension for {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} For more information about the {% data variables.product.prodname_cli %}, see "[AUTOTITLE](/github-cli/github-cli/about-github-cli)".

`gh es` is a {% data variables.product.prodname_cli %} extension that allows you to perform administrative tasks on {% data variables.location.product_location %} by using the instance's REST API endpoints. For more information about GitHub CLI extensions, see "[AUTOTITLE](/github-cli/github-cli/using-github-cli-extensions)".

You can use the `gh es` extension to manage the root site administrator password, configure maintenance mode, view metadata and status information for your instance's nodes, and more. For installation and usage instructions, see the [github/gh-es repository](https://github.com/github/gh-es) on {% data variables.product.prodname_dotcom_the_website %}.

## Further reading

* "[AUTOTITLE](/rest/enterprise-admin/manage-ghes)"
