---
title: About labels
intro: 'Labels on {% data variables.product.product_name %} help you organize and prioritize your work. You can apply labels to issues and pull requests to signify priority, category, or any other information you find useful.'
redirect_from:
  - /articles/about-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Labels are tied to the repository they are created in. Once a label exists, you can use it on any issue or pull request within that repository. For more information, see "[Creating a label](/articles/creating-a-label/)."

Anyone with read access to a repository can view and search the repository’s labels. To create, edit, apply, or delete a label, you must have write access to the repository.

### Using default labels

{% data variables.product.product_name %} provides default labels in every new repository. You can use these default labels to help create a standard workflow in a repository:

| Label              | Description                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `bug`              | Indicates an unexpected problem or unintended behavior{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `документация`     | Indicates a need for improvements or additions to documentation{% endif %}
| `duplicate`        | Indicates similar issues or pull requests                                                                             |
| `enhancement`      | Indicates new feature requests                                                                                        |
| `good first issue` | Indicates a good issue for first-time contributors                                                                    |
| `help wanted`      | Indicates that a maintainer wants help on an issue or pull request                                                    |
| `invalid`          | Indicates that an issue or pull request is no longer relevant                                                         |
| `question`         | Indicates that an issue or pull request needs more information                                                        |
| `wontfix`          | Indicates that work won't continue on an issue or pull request                                                        |

Default labels are included in every new repository when the repository is created, but you can edit or delete the labels later. For more information, see "[Deleting a label](/articles/deleting-a-label/)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Organization owners can customize the default labels for repositories in their organization. For more information, see "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Дополнительная литература

- "[Encouraging helpful contributions to your project with labels](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)"
{% endif %}
