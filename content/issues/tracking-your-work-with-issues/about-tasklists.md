---
title: About Tasklists
intro: You can use Tasklists to divide your issues into smaller subtasks.
versions:
  feature: projects-v2-tasklists
redirect_from:
  - /early-access/issues/about-tasklists
---

{% data reusables.projects.tasklists-release-stage %}

## About Tasklists

Tasklists add support for hierarchies of issues on {% data variables.product.product_name %}, helping you to keep track of your issues, divide your issues into smaller subtasks, and create new relationships between your issues.

Tasklists build upon the previous iteration of [beta task lists](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists), retaining the ability to convert items into issues, display the progress of a Tasklist, and create a "tracks/tracked by" relationship between issues.

The issues you add to your Tasklists will be automatically populated to show their assignees and any labels applied.

![Two views of the same issue. In one, the body is being edited to include the Markdown for Tasklists. In the other, the body includes rendered Tasklists.](/assets/images/help/issues/tasklist-hero.png)

### About integration with {% data variables.projects.projects_v2 %}

 Your project's side-panel displays an issue's place in the hierarchy on a breadcrumb menu, allowing you to navigate through the issues included in your Tasklists. You can also add the Tracks and Tracked by fields to your project views to quickly see the relationships between your issues. For information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)."

## Creating Tasklists with Markdown

You can create a Tasklist using Markdown in the issue description (the opening comment of an issue). You can include links to issues and pull requests or create draft issues.

1. Start creating a new issue or edit the issue description of an existing issue.
1. To begin your Tasklist, type <code>```[tasklist]</code> (triple backticks and <code>tasklist</code> inside square brackets) on a new line in the issue description.
1. Optionally, type `### TITLE` on the next line, replacing `TITLE` with a title for your Tasklist.
1. For each item you want to add to your Tasklist, type `- [ ]` on a new line, followed by a space, and either a link to an issue, a link to a pull request, or some text to create a draft issue.
   * You must provide a full link to an issue or pull request. For example, `https://github.com/octo-org/octo-repo/issues/45`.
   * Tasks can be formatted with Markdown.
   * Tasks must not exceed 256 characters in length.
1. To finish your Tasklist, type <code>```</code> on a new line after the last item.

Your finished Tasklist should look like this:

````
```[tasklist]
### My tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````

Your Tasklist will be rendered by {% data variables.product.product_name %} when you save the issue. You can then make changes and add issues and draft issues using the {% data variables.product.product_name %} UI. If you edit the issue description, you will be able to modify the Markdown directly or copy the Markdown to duplicate the Tasklist in other issues.

{% note %}

**Note:** If {% data variables.product.product_name %} cannot render your Tasklist, make sure it is formatted like the example above and that you do not have any unintended new lines.

{% endnote %}

You can also click {% octicon "checklist" aria-label="Add tasklist" %} in the formatting toolbar to insert a Tasklist when creating a new issue or editing an issue description.

![Screenshot of the new issue form. In the formatting toolbar, a checklist icon is outlined in dark orange.](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## Adding issues to a Tasklist

1. At the bottom of your Tasklist, click **Add item to Tasks**.
1. Select the issue to add to your Tasklist.

   * To add a recently updated issue from the repository, click the issue in the dropdown, or use your arrow keys to select it and then press <kbd>Enter</kbd>.
   * To search for an issue in the repository, start typing the title of an issue or the issue's number and click on the result, or use your arrow keys to select it and press <kbd>Enter</kbd>.
   * To add an issue directly using its URL, paste the URL of an issue and press <kbd>Enter</kbd>.


## Creating draft issues in a Tasklist

Draft issues are useful to quickly capture ideas that you can later convert into issues. Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your Tasklist.

1. At the bottom of your Tasklist, click **Add item to Tasks**.
1. In the "Type to add an item or paste in an issue URL" field, type your draft issue title and press <kbd>Enter</kbd>.

## Converting draft issues to issues in a Tasklist

You can convert draft issues into issues. Issues are created in the same repository as the Tasklist's parent issue.

1. Next to the draft issue you want to convert, click {% octicon "kebab-horizontal" aria-label="tracking block item menu" %}.

   ![Screenshot of a Tasklist. To the right of a task, the tracking block item menu, which is labeled with a horizontal kebab icon, is outlined in dark orange.](/assets/images/help/issues/tasklist-item-kebab.png)

1. In the menu, click **Convert to issue**.

## Removing an issue or draft issue from a Tasklist

You can remove issues and draft issues from your Tasklist. Issues removed from a Tasklist are not removed from the repository.

1. Next to the draft issue you want to remove, select {% octicon "kebab-horizontal" aria-label="tracking block item menu" %}.

   ![Screenshot of a Tasklist. To the right of a task, the tracking block item menu, which is labeled with a horizontal kebab icon, is outlined in dark orange.](/assets/images/help/issues/tasklist-item-kebab.png)

1. In the menu, click **Remove**.

## Changing the title of a Tasklist

When you create a new Tasklist, the default title is "Tasks." You can modify the title by editing the issue's markdown.

1. In the top-right of the issue body, select {% octicon "kebab-horizontal" aria-label="Show options" %} and click **Edit**.

   ![Screenshot of the header of an issue comment. In the right corner, a horizontal kebab icon is outlined in dark orange.](/assets/images/help/issues/comment-menu.png)
1. In the fenced code block that starts with ````[tasklist]`, add a header with your new title, such as `## My new title`.

   ![Screenshot of an issue comment in edit mode. Under the line that says "```tasklist", a line that says "## My new title" is outlined in dark orange.](/assets/images/help/issues/edit-tasklist-title.png)

1. Click **Update comment**.

## Copying a Tasklist

When you copy your Tasklist using the "Copy Markdown" option, {% data variables.product.product_name %} copies Markdown to your clipboard and includes the Issue's name so you can paste the Tasklist outside of GitHub without losing context.

1. In the top-right of your Tasklist, click {% octicon "kebab-horizontal" aria-label="tracking block item menu" %}.

   ![Screenshot of a Tasklist. The tracking block item menu, which is labeled with a horizontal kebab icon, is outlined in dark orange.](/assets/images/help/issues/tasklist-kebab.png)

1. In the menu, click **Copy markdown**.
