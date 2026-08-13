---
title: "Install and configure GitHub Enterprise Importer"
shortTitle: "4. Configure GitHub Enterprise Importer"
intro: "Install the {% data variables.product.prodname_gl2gh_cli %} and configure your environment for the migration."
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

## Step 1: Install the {% data variables.product.prodname_gl2gh_cli %}

{% data variables.product.prodname_importer_proper_name %} is a collection of extensions for {% data variables.product.prodname_cli %}. If this is your first migration, you'll need to install {% data variables.product.prodname_cli %} and the {% data variables.product.prodname_gl2gh_cli_short %}.

{% data reusables.enterprise-migration-tool.gl2gh-install-and-update %}

## Step 2: Set environment variables

Before you can use the {% data variables.product.prodname_gl2gh_cli_short %} to migrate to {% data variables.product.prodname_ghe_cloud %}, you must create {% data variables.product.pat_generic %}s that can access the source and destination, then set the {% data variables.product.pat_generic %}s as environment variables.

1. Make sure you have your {% data variables.product.pat_generic %}s for both {% data variables.product.github %} and GitLab ready. See [AUTOTITLE](/migrations/using-github-enterprise-importer/migrate-from-gitlab/manage-access) if you haven't already created a token.
1. Set environment variables for the {% data variables.product.pat_generic %}s, replacing TOKEN in the commands below with the {% data variables.product.pat_generic %}s you previously created. Use `GH_PAT` for the destination organization and `GITLAB_PAT` for the source GitLab instance.

   * If you're using Terminal, use the `export` command.

      ```shell copy
      export GH_PAT="TOKEN"
      export GITLAB_PAT="TOKEN"
      ```

   * If you're using PowerShell, use the `$env` command.

      ```shell copy
      $env:GH_PAT="TOKEN"
      $env:GITLAB_PAT="TOKEN"
      ```

{% data reusables.enterprise-migration-tool.set-target-api-url %}
