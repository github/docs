---
title: Understand migrations from GitLab to GitHub
allowTitleToDifferFromFilename: true
shortTitle: 1. Understand migrations
intro: '{% data variables.product.prodname_importer_proper_name %} automates migrations from GitLab.'
versions:
  fpt: '*'
  ghec: '*'
contentType: other
---

## About migrations from GitLab

You can use {% data variables.product.prodname_importer_proper_name %} to migrate repositories from GitLab to {% data variables.product.prodname_ghe_cloud %} ({% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %}).

Migrations are performed with the {% data variables.product.prodname_gl2gh_cli %}, a cross-platform command-line wrapper around the {% data variables.product.prodname_dotcom %} migration APIs. For each repository, the {% data variables.product.prodname_gl2gh_cli_short %}:

1. **Exports** the GitLab project to a `.tar.gz` archive containing the Git repository plus project metadata (such as issues, merge requests, labels, milestones, and releases).
1. **Stages** the archive locally on the machine where you run the command.
1. **Uploads** the archive to blob storage that {% data variables.product.prodname_dotcom %} can read from (either {% data variables.product.prodname_ghos %} or a storage account you own in AWS S3 or Azure Blob Storage).
1. **Imports** the archive into the destination organization, transforming GitLab entities into their {% data variables.product.prodname_dotcom %} equivalents.

Before you create your enterprise account on {% data variables.product.prodname_dotcom %}, decide whether your enterprise will use {% data variables.product.prodname_emus %}. This affects how your members authenticate and how you manage identities and access. See [AUTOTITLE](/enterprise-cloud@latest/admin/concepts/enterprise-fundamentals/choose-an-enterprise-type).

## Supported GitLab versions

You can migrate from both GitLab.com and self-managed GitLab instances.

{% data variables.product.prodname_importer_proper_name %} supports currently maintained (non-end-of-life) versions of GitLab. For the list of maintained versions, see [Statement of support](https://docs.gitlab.com/policy/maintenance/) in the GitLab documentation. Older versions have not been tested or evaluated.

## Data that is migrated

When the data is present in the GitLab export archive, {% data variables.product.prodname_importer_proper_name %} migrates the following data from GitLab to {% data variables.product.prodname_ghe_cloud %}.

* Git source (including commit history) and the repository wiki
* Commit comments
* Project configuration that maps cleanly, such as the default branch
* Issues and issue comments, including issue state and milestone events
  * Threaded discussions are migrated as flat comments with context of the original thread
* Merge requests, which are converted to pull requests, including:
  * Comments (migrated as review comments only when diff data is present, otherwise as flat issue comments; only the latest diff is present in the export)
  * Reviewers and approvers
  * Merge request state events
* Milestones
* Timeline events
* Emoji reactions
* Uploads (attachments)
* Releases and release assets
* Project members (migrated as mannequins)

## Data that is not migrated

The following data is not migrated.

* {% data variables.large_files.product_name_short %} objects: Pointer files travel with the Git history, but the binary objects must be pushed to your migration destination separately as a follow-up task. For more information, see [AUTOTITLE](/repositories/creating-and-managing-repositories/duplicating-a-repository#mirroring-a-repository-that-contains-git-large-file-storage-objects).
* Repository policies, including merge trains, pipeline gates, required approvals, topics, avatars, and mirroring
* Group settings and group membership
* Snippets, issue boards, time-tracking data, and design-management data
* CI/CD pipelines and pipeline schedules (`.gitlab-ci.yml` has no automatic {% data variables.product.prodname_actions %} equivalent)
* Vulnerability reports
* Data that GitLab does not include in the export at all, such as webhooks, CI/CD variables, job traces and artifacts, child-pipeline history, and pipeline triggers

{% data reusables.enterprise-migration-tool.migration-data-limitations %}

### Limitations of GitLab

* **40 GB limit for the GitLab export archive:** GitLab's project export API will not produce an archive larger than 40 GB on GitLab.com. Unlike the {% data variables.product.prodname_dotcom %} source-size limit, this applies to the entire export archive, including project metadata as well as the Git source. This limit is set by GitLab and may differ on self-managed instances.
