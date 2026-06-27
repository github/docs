---
title: "Install and configure GitHub Enterprise Importer"
shortTitle: "3. Configure GitHub Enterprise Importer"
intro: "Install the {% data variables.product.prodname_ado2gh_cli %} and configure your environment for the migration."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
category:
  - Migrate from Azure DevOps
redirect_from:
  - /migrations/ado/phase-3-install-and-configure-github-enterprise-importer
---

## Step 1: Install the {% data variables.product.prodname_ado2gh_cli %}

GitHub Enterprise Importer is a collection of extensions for {% data variables.product.prodname_cli %}. If this is your first migration, you'll need to install {% data variables.product.prodname_cli %} and the {% data variables.product.prodname_ado2gh_cli_short %}.

{% data reusables.enterprise-migration-tool.gei-install-and-update %}

{% data reusables.enterprise-migration-tool.ado2gh-help-flag %}

## Step 2: Set environment variables

Before you can use the {% data variables.product.prodname_ado2gh_cli_short %} to migrate to {% data variables.product.prodname_ghe_cloud %}, you must create {% data variables.product.pat_generic %}s that can access the source and destination organizations, then set the {% data variables.product.pat_generic %}s as environment variables.

1. Make sure you have your {% data variables.product.pat_generic %}s for both {% data variables.product.github %} and Azure DevOps ready. See [AUTOTITLE](/migrations/ado/phase-2-manage-access?token-backtrack#create-a-personal-access-token-classic-on-github) if you haven't already created a token.
1. Set environment variables for the {% data variables.product.pat_generic %}s, replacing TOKEN in the commands below with the {% data variables.product.pat_generic %}s you previously created. Use `GH_PAT` for the destination organization and `ADO_PAT` for the source organization.

   * If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      export ADO_PAT="TOKEN"
      ```

   * If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      $env:ADO_PAT="TOKEN"
      ```

{% data reusables.enterprise-migration-tool.set-target-api-url %}
