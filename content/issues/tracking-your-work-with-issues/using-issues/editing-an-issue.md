---
title: Editing an issue
intro: Learn how to make changes to an existing issue.
permissions: Issue authors, people with write access or higher in repositories owned by an organization, and collaborators in repositories owned by a personal account can make changes to issues. {% data reusables.enterprise-accounts.emu-permission-repo %}
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
category:
  - Create and work with issues
---

## Editing an issue title

You can edit an issue's title. The change to the title is added to the issue's timeline.

1. Navigate to the issue you want to edit.
1. To the right of the issue title, click **Edit**.

   ![Screenshot of an issue header, the "Edit" button is highlighted with an orange outline.](/assets/images/help/issues/issue-edit-title.png)

1. Type your new title.
1. Click **Save**.

## Editing an issue description

You can also make changes to the issue description. The edit history is available unless the author or a person with write access removes it. See [AUTOTITLE](/communities/moderating-comments-and-conversations/tracking-changes-in-a-comment).

1. Navigate to the issue you want to edit.
1. At the top right of the issue description, click {% octicon "kebab-horizontal" aria-label="Issue body actions" %}.

   ![Screenshot of an issue description. The "Issue body actions" button is highlighted with an orange outline.](/assets/images/help/issues/issue-edit-description.png)

1. In the menu, click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit**.
1. Type your changes to the issue description.
1. Click **Save**.

{% ifversion issue-types %}

## Adding or changing the issue type

You can add an issue type or make changes to an existing issue type.

1. Navigate to the issue you want to edit.
1. To the right of the issue, in the sidebar, click **Type**.

   ![Screenshot of an issue sidebar. The "Add issue type" button is highlighted with an orange outline.](/assets/images/help/issues/issue-add-type.png)

1. In the list, select a new issue type.
1. Click **Save**.

{% endif %}

## Editing an issue with {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} To learn more about {% data variables.product.prodname_cli %}, see [AUTOTITLE](/github-cli/github-cli/about-github-cli).

### Editing a single issue

To edit an issue, use the `gh issue edit` subcommand with the issue number or URL.

```shell
gh issue edit ISSUE-NUMBER --title "TITLE" --body "ISSUE-DESCRIPTION"
```

### Editing multiple issues

You can pass multiple issue numbers to apply the same change to several issues at once.

```shell
gh issue edit ISSUE-NUMBER-1 ISSUE-NUMBER-2 --add-label "LABEL"
```

{% ifversion issue-types %}

### Editing the issue type

To set or remove the issue type, use the `--type` or `--remove-type` flag.

```shell
gh issue edit ISSUE-NUMBER --type "ISSUE-TYPE"
gh issue edit ISSUE-NUMBER --remove-type
```

{% endif %}

{% ifversion sub-issues %}

### Editing the parent issue

To set or remove the parent issue, use the `--parent` or `--remove-parent` flag. The parent can be specified by issue number or URL.

```shell
gh issue edit ISSUE-NUMBER --parent PARENT-ISSUE-NUMBER
gh issue edit ISSUE-NUMBER --remove-parent
```

### Editing sub-issues

To add or remove sub-issues, use the `--add-sub-issue` or `--remove-sub-issue` flag with a comma-separated list of issue numbers or URLs.

```shell
gh issue edit PARENT-ISSUE-NUMBER --add-sub-issue SUB-ISSUE-NUMBER
gh issue edit PARENT-ISSUE-NUMBER --remove-sub-issue SUB-ISSUE-NUMBER
```

{% endif %}

{% ifversion fpt or ghec %}

### Editing dependencies

To manage dependencies, use the `--add-blocked-by`, `--remove-blocked-by`, `--add-blocking`, and `--remove-blocking` flags. Each accepts a comma-separated list of issue numbers or URLs.

```shell
gh issue edit ISSUE-NUMBER --add-blocked-by BLOCKED-BY-ISSUE-NUMBER --add-blocking BLOCKING-ISSUE-NUMBER
```

{% endif %}

## Further reading

* [AUTOTITLE](/issues/tracking-your-work-with-issues/administering-issues/closing-an-issue)
* [AUTOTITLE](/issues/tracking-your-work-with-issues/administering-issues/deleting-an-issue)
