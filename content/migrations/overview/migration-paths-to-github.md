---
title: Migration paths to GitHub
shortTitle: Migration paths
intro: 'See an overview of the paths available for migration to {% data variables.product.prodname_dotcom %} from other products, or between {% data variables.product.prodname_dotcom %} products.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## About migration paths to {% data variables.product.prodname_dotcom %}

{% data reusables.migrations.about-migrations %}

{% data reusables.migrations.about-migration-paths %} For some migration paths, we offer specialist tools that allow you to migrate source, history, and metadata. For others, you'll need to perform a simpler "source and history" or "source snapshot" migration.

Some migration paths require tools that are only available with expert-led migrations. For more information, contact your account manager on {% data variables.contact.contact_enterprise_sales %} or see the [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website.

In our recommendations, we'll assume that you want the highest level of fidelity if possible, which includes source, history, and metadata.

## Migrations to {% data variables.product.prodname_dotcom_the_website %}

You can review the scope and tooling for your migration to {% data variables.product.prodname_dotcom_the_website %}, which includes migrations to {% data variables.product.prodname_ghe_cloud %}. You can also review any additional information or caveats.

* [{% data variables.product.prodname_ghe_server %} 3.4.1 or newer to {% data variables.product.prodname_dotcom_the_website %}](#github-enterprise-server-341-or-newer-to-githubcom)
* [{% data variables.product.prodname_ghe_server %} 3.4.0 or older to {% data variables.product.prodname_dotcom_the_website %}](#github-enterprise-server-340-or-older-to-githubcom)
* [{% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_dotcom_the_website %}](#githubcom-to-githubcom)
* [Azure DevOps Services (Azure DevOps Cloud) to {% data variables.product.prodname_dotcom_the_website %}](#azure-devops-services-azure-devops-cloud-to-githubcom)
* [Azure DevOps Server to {% data variables.product.prodname_dotcom_the_website %}](#azure-devops-server-to-githubcom)
* [Bitbucket Cloud (Bitbucket.org) to {% data variables.product.prodname_dotcom_the_website %}](#bitbucket-cloud-bitbucketorg-to-githubcom)
* [Bitbucket Server or Bitbucket Data Center to {% data variables.product.prodname_dotcom_the_website %}](#bitbucket-server-or-bitbucket-data-center-to-githubcom)
* [GitLab to {% data variables.product.prodname_dotcom_the_website %}](#gitlab-to-githubcom)
* [Any Git repository to {% data variables.product.prodname_dotcom_the_website %}](#any-git-repository-to-githubcom)
* [Any Mercurial repository to {% data variables.product.prodname_dotcom_the_website %}](#any-mercurial-repository-to-githubcom)
* [Any Subversion (SVN) repository to {% data variables.product.prodname_dotcom_the_website %}](#any-subversion-svn-repository-to-githubcom)
* [Any Team Foundation Version Control (TFVC) repository to {% data variables.product.prodname_dotcom_the_website %}](#any-team-foundation-version-control-tfvc-repository-to-githubcom)
* [Any Perforce repository to {% data variables.product.prodname_dotcom_the_website %}](#any-perforce-repository-to-githubcom)
* [Any other repository to {% data variables.product.prodname_dotcom_the_website %}](#any-other-repository-to-githubcom)

### {% data variables.product.prodname_ghe_server %} 3.4.1 or newer to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source, history, and metadata
* **Tooling**: {% data variables.product.prodname_importer_proper_name %}
* **More information**:
  * "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  * [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website
* **Caveats**:
  * {% data reusables.migrations.large-repositories-require-expert-services %}
  * {% data reusables.migrations.migration-instructions-for-any-git-repository-to-githubcom %}

### {% data variables.product.prodname_ghe_server %} 3.4.0 or older to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source, history, and metadata
* **Tooling**: {% data variables.product.prodname_importer_proper_name %}
* **More information**:
  * "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  * [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website
* **Caveats**:
  * {% data reusables.migrations.large-repositories-require-expert-services %}
  * {% data reusables.migrations.migration-instructions-for-any-git-repository-to-githubcom %}

### {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_dotcom_the_website %}

Migrations from {% data variables.product.prodname_dotcom_the_website %} include {% data variables.product.prodname_ghe_cloud %}. This path includes adoption of {% data variables.product.prodname_emus %} or a move between managed enterprises.

* **Scope**: Source, history, and metadata
* **Tooling**: {% data variables.product.prodname_importer_proper_name %} or {% data variables.product.prodname_expert_services %}
* **More information**:
  * "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  * [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website
* **Caveats**:
  * {% data reusables.migrations.large-repositories-require-expert-services %}
  * {% data reusables.migrations.migration-instructions-for-any-git-repository-to-githubcom %}

### Azure DevOps Services (Azure DevOps Cloud) to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source, history, and metadata
* **Tooling**: {% data variables.product.prodname_importer_proper_name %}
* **More information**: "[AUTOTITLE](/migrations/using-github-enterprise-importer)"

### Azure DevOps Server to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source, history, and metadata
* **Tooling**: Migration to Azure DevOps Services, then {% data variables.product.prodname_importer_proper_name %}
* **More information**:
  * [Migrate data from Azure DevOps Server to Azure DevOps Services](https://learn.microsoft.com/en-us/azure/devops/migrate/migration-overview?view=azure-devops) in the Microsoft Docs
  * "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
* **Caveats**: If you can't migrate to Azure DevOps Services first, you must  perform a "source and history" migration instead. For more information, "[Migrations from any Git repository to {% data variables.product.prodname_dotcom_the_website %}](#any-git-repository-to-githubcom)."

### Bitbucket Cloud (Bitbucket.org) to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source and history
* **Tooling**: Git CLI or {% data variables.product.prodname_importer %}
* **More information**:
  * "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"
  * "[AUTOTITLE]({% ifversion ghes %}/free-pro-team@latest{% endif %}/migrations/importing-source-code/using-github-importer/about-github-importer)"

### Bitbucket Server or Bitbucket Data Center to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source, history, and metadata
* **Tooling**: {% data variables.product.prodname_importer_proper_name %}
* **More information**:
  * "[AUTOTITLE](/migrations/using-github-enterprise-importer)"
  * [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website
* **Caveats**:
  * For complex repositories larger than around 5 GB, you may need to use `bbs-exporter` and Enterprise Cloud Importer instead. Enterprise Cloud Importer is only available for expert-led migrations.
  * {% data reusables.migrations.migration-instructions-for-any-git-repository-to-githubcom %}

### GitLab to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source, history, and metadata
* **Tooling**: `gl-exporter`, then Enterprise Cloud Importer (expert-led migrations only)
* **More information**: [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website
* **Caveats**:
  * Enterprise Cloud Importer is only available for expert-led migrations.
  * {% data reusables.migrations.migration-instructions-for-any-git-repository-to-githubcom %}

### Any Git repository to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source and history
* **Tooling**: Git CLI or {% data variables.product.prodname_importer %} if the repository is accessible over the public internet
* **More information**:
  * "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"
  * "[AUTOTITLE]({% ifversion ghes %}/free-pro-team@latest{% endif %}/migrations/importing-source-code/using-github-importer/about-github-importer)"

### Any Mercurial repository to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source and history
* **Tooling**: Mercurial, Git CLI, and Python
* **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)"

### Any Subversion (SVN) repository to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source and history
* **Tooling**: Subversion and Git CLI
* **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)"

### Any Team Foundation Version Control (TFVC) repository to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source and history
* **Tooling**: Azure Repos, then Git CLI
* **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-team-foundation-version-control-repository)"

### Any Perforce repository to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source and history
* **Tooling**: `git-p4`, then Git CLI
* **More information**:
  * [git-p4](https://git-scm.com/docs/git-p4) in the Git documentation
  * "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#importing-a-git-repository-with-the-command-line)"

### Any other repository to {% data variables.product.prodname_dotcom_the_website %}

* **Scope**: Source snapshot
* **Tooling**: {% data variables.product.prodname_cli %} or Git CLI
* **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)"

## Migrations to {% data variables.product.prodname_ghe_server %}

You can review the scope and tooling for your migration to {% data variables.product.prodname_ghe_server %}, including any additional information or caveats.

* [{% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_server %}](#githubcom-to-github-enterprise-server)
* [{% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_server %}](#github-enterprise-server-to-github-enterprise-server)
* [Azure DevOps to {% data variables.product.prodname_ghe_server %}](#azure-devops-to-github-enterprise-server)
* [Bitbucket Cloud (Bitbucket.org) to {% data variables.product.prodname_ghe_server %}](#bitbucket-cloud-bitbucketorg-to-github-enterprise-server)
* [Bitbucket Server or Bitbucket Data Center to {% data variables.product.prodname_ghe_server %}](#bitbucket-server-or-bitbucket-data-center-to-github-enterprise-server)
* [GitLab to {% data variables.product.prodname_ghe_server %}](#gitlab-to-github-enterprise-server)
* [Any Git repository to {% data variables.product.prodname_ghe_server %}](#any-git-repository-to-github-enterprise-server)
* [Any Mercurial repository to {% data variables.product.prodname_ghe_server %}](#any-mercurial-repository-to-github-enterprise-server)
* [Any Subversion (SVN) repository to {% data variables.product.prodname_ghe_server %}](#any-subversion-svn-repository-to-github-enterprise-server)
* [Any Team Foundation Version Control (TFVC) repository to {% data variables.product.prodname_ghe_server %}](#any-team-foundation-version-control-tfvc-repository-to-github-enterprise-server)
* [Any Perforce repository to {% data variables.product.prodname_ghe_server %}](#any-perforce-repository-to-github-enterprise-server)
* [Any other repository to {% data variables.product.prodname_ghe_server %}](#any-other-repository-to-github-enterprise-server)

### {% data variables.product.prodname_dotcom_the_website %} to {% data variables.product.prodname_ghe_server %}

Migrations from {% data variables.product.prodname_dotcom_the_website %} include {% data variables.product.prodname_ghe_cloud %}.

* **Scope**: Source, history, and metadata
* **Tooling**: Organization migrations API, then `ghe-migrator`
* **More information**:
  * "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/exporting-migration-data-from-githubcom)"
  * "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"

### {% data variables.product.prodname_ghe_server %} to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source, history, and metadata
* **Tooling**: Organization migrations API, then `ghe-migrator`
* **More information**:
  * "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/exporting-migration-data-from-github-enterprise-server)"
  * "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"

### Azure DevOps to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source and history
* **Tooling**: Git CLI
* **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"

### Bitbucket Cloud (Bitbucket.org) to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source and history
* **Tooling**: Git CLI
* **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"

### Bitbucket Server or Bitbucket Data Center to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source, history, and metadata
* **Tooling**: `bbs-exporter` (expert-led migrations only), then `ghe-migrator`
* **More information**:
  * [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website
  * "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"
* **Caveats**: {% data reusables.migrations.migration-instructions-for-any-git-repository-to-ghes %}

### GitLab to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source, history, and metadata
* **Tooling**: `gl-exporter` (expert-led migrations only), then `ghe-migrator`
* **More information**:
  * [{% data variables.product.prodname_expert_services %}](https://github.com/services/) website
  * "[AUTOTITLE](/enterprise-server/migrations/using-ghe-migrator/migrating-data-to-github-enterprise-server)"
* **Caveats**: {% data reusables.migrations.migration-instructions-for-any-git-repository-to-ghes %}

### Any Git repository to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source and history
* **Tooling**: Git CLI
* **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-an-external-git-repository-using-the-command-line)"

### Any Mercurial repository to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source and history
* **Tooling**: Mercurial, Git CLI, and Python
* **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-mercurial-repository)"

### Any Subversion (SVN) repository to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source and history
* **Tooling**: Subversion and Git CLI
* **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-subversion-repository)"

### Any Team Foundation Version Control (TFVC) repository to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source and history
* **Tooling**: Azure Repos, then Git CLI
* **More information**: "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/importing-a-team-foundation-version-control-repository)"

### Any Perforce repository to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source and history
* **Tooling**: `git-p4`, then Git CLI
* **More information**:
  * [git-p4](https://git-scm.com/docs/git-p4) in the Git documentation
  * "[AUTOTITLE](/enterprise-server/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#importing-a-git-repository-with-the-command-line)"

### Any other repository to {% data variables.product.prodname_ghe_server %}

* **Scope**: Source snapshot
* **Tooling**: {% data variables.product.prodname_cli %} or Git CLI
* **More information**: "[AUTOTITLE](/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)"
