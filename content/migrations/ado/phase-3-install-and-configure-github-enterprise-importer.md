---
title: "Phase 3. Install and configure GitHub Enterprise Importer"
shortTitle: "3. Configure GitHub Enterprise Importer"
intro: "Install the {% data variables.product.prodname_ado2gh_cli %} and configure your environment for the migration."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

## Step 1: Install the {% data variables.product.prodname_ado2gh_cli %}

GitHub Enterprise Importer is a collection of extensions for {% data variables.product.prodname_cli %}. If this is your first migration, you'll need to install {% data variables.product.prodname_cli %} and the {% data variables.product.prodname_ado2gh_cli_short %}.

{% data reusables.enterprise-migration-tool.gei-install-and-update %}

{% data reusables.enterprise-migration-tool.ado2gh-help-flag %}

## Step 2: Set environment variables

Before you can use the {% data variables.product.prodname_ado2gh_cli_short %} to migrate to {% data variables.product.prodname_ghe_cloud %}, you must create {% data variables.product.pat_generic %}s that can access the source and destination organizations, then set the {% data variables.product.pat_generic %}s as environment variables.

1. Make sure you have your {% data variables.product.pat_generic %}s for both {% data variables.product.github %} and Azure DevOps ready. See [AUTOTITLE](/migrations/ado/phase-2-manage-access).
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

## Next steps

In the next phase, you'll use {% data variables.product.prodname_ghe_cloud %} to prepare for the migration. See [AUTOTITLE](/migrations/ado/phase-4-prepare-for-your-migration-from-azure-devops-to-github).