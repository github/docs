---
title: Managing labels
intro: 'You can classify issues and pull requests by creating, editing, applying, and deleting labels.'
redirect_from:
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels/
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

### About labels

You can manage your work on {% data variables.product.product_name %} by creating labels to categorize issues and pull requests. You can apply labels in the repository the label was created in. Once a label exists, you can use the label on any issue or pull request within that repository.

Anyone with read access to a repository can view and search the repository’s labels. Anyone with triage access to a repository can apply/dismiss existing labels. To create, edit, apply, or delete a label, you must have write access to the repository.

### About default labels

{% data variables.product.product_name %} provides default labels in every new repository. You can use these default labels to help create a standard workflow in a repository.

| Label              | Description                                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bug`              | Indicates an unexpected problem or unintended behavior{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `документация`     | Indicates a need for improvements or additions to documentation{% endif %}
| `duplicate`        | Indicates similar issues or pull requests                                                                                                                 |
| `enhancement`      | Indicates new feature requests                                                                                                                            |
| `good first issue` | Indicates a good issue for first-time contributors                                                                                                        |
| `help wanted`      | Indicates that a maintainer wants help on an issue or pull request                                                                                        |
| `invalid`          | Indicates that an issue or pull request is no longer relevant                                                                                             |
| `question`         | Indicates that an issue or pull request needs more information                                                                                            |
| `wontfix`          | Indicates that work won't continue on an issue or pull request                                                                                            |

Default labels are included in every new repository when the repository is created, but you can edit or delete the labels later.

Issues with the `good first issue` label are used to populate the repository's `contribute` page. For an example of a `contribute` page, see [github/docs/contribute](https://github.com/github/docs/contribute).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Organization owners can customize the default labels for repositories in their organization. For more information, see "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)."
{% endif %}

### Creating a label


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. To the right of the search field, click **New label**.
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Applying labels to issues and pull requests


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.repositories.select-items-in-issue-or-pr-list %}
4. In the upper-right corner, click **Label**, then start typing the name of an existing label. Click the label's name to associate it with the selected items. ![Issues Milestone assignment drop-down](/assets/images/help/issues/issues_applying_labels_dropdown.png)

### Editing a label

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Deleting a label
Deleting a label will remove the label from issues and pull requests.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Дополнительная литература
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- "[Encouraging helpful contributions to your project with labels](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
