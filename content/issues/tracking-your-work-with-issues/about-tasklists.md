---
title: About Tasklists
intro: 'You can use Tasklists to divide your issues into smaller subtasks.'
versions:
  feature: 'projects-v2-tasklists'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
---

{% data reusables.projects.tasklists-release-stage %}

## About Tasklists

Tasklists add support for hierarchies of issues on {% data variables.product.product_name %}, helping you to keep track of your issues, divide your issues into smaller subtasks, and create new relationships between your issues.

Tasklists build upon the previous iteration of [beta task lists](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists), retaining the ability to convert items into issues, display the progress of a Tasklist, and create a "tracks/tracked by" relationship between issues.

The issues you add to your Tasklists will be automatically populated to show their assignees and any labels applied.

![Image showing Tasklists in action](/assets/images/help/issues/tasklist-hero.png)

### About integration with {% data variables.projects.projects_v2 %}

 Your project's side-panel displays an issue's place in the hierarchy on a breadcrumb menu, allowing you to navigate through the issues included in your Tasklists. You can also add the Tracks and Tracked-by fields to your project views to quickly see the relationships between your issues. For information, see "[About tracks and tracked-by fields](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields)."

## Creating Tasklists

To create a Tasklist, you can either use the "Add Tasklist" button or edit the issue Markdown.

### Creating a Tasklist using the "Add Tasklist" button

Click the **{% octicon "checklist" aria-label="The checklist icon" %} Add Tasklist** button at the bottom of any issue description that you can edit to create a task list.

![Screenshot showing the 'Add Tasklist' button](/assets/images/help/issues/tasklist-add-tasklist-button.png)

### Creating a Tasklist using Markdown

You can use Markdown in an issue description to create a Tasklist. Create a fenced code block and include `[tasklist]` next to the opening backticks. Preface each item with `- [ ]` and include links to other issues or text. You can optionally include a title as a Markdown header at the top of your list. 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````

Your Markdown will be rendered by {% data variables.product.product_name %} as a Tasklist. You can then make changes and add issues and draft issues using the UI. If you edit the issue description, you will be able to modify the Markdown directly or copy the Markdown to duplicate the Tasklist in other issues.



## Adding issues to a Tasklist

1. At the bottom of your Tasklist, click **Add item to Tasks**.
   
   ![Screenshot showing "Add item to Tasks" button](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Select the issue to add to your Tasklist.
   
   * To add a recently updated issue from the repository, click the issue in the dropdown, or use your arrow keys to select it and then press <kbd>Enter</kbd>. 
     
     ![Screenshot showing recent issues](/assets/images/help/issues/select-recent-issue.png)
     
   * To search for an issue in the repository, start typing the title of an issue or the issue's number and click on the result, or use your arrow keys to select it and press <kbd>Enter</kbd>.
     
     ![Screenshot showing searching for an issue](/assets/images/help/issues/search-for-issue.png)
     
   * To add an issue directly using its URL, paste the URL of an issue and press <kbd>Enter</kbd>.
        
     ![Screenshot showing a pasted issue URL](/assets/images/help/issues/paste-issue-url.png)
     

## Creating draft issues in a Tasklist

Draft issues are useful to quickly capture ideas that you can later convert into issues. Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your Tasklist.

1. At the bottom of your Tasklist, click **Add item to Tasks**.
   
   ![Screenshot showing "Add item to Tasks" button](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. Type your draft issue title and press <kbd>Enter</kbd>.
   
   ![Screenshot showing a draft issue title](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## Converting draft issues to issues in a Tasklist

You can convert draft issues into issues. Issues are created in the same repository as the Tasklist's parent issue.

1. Next to the draft issue you want to convert, click {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot showing the menu icon](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. In the menu, click **Convert to issue**.
   
   ![Screenshot the "Convert to issue" option](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## Removing an issue or draft issue from a Tasklist

You can remove issues and draft issues from your Tasklist. Issues removed from a Tasklist are not removed from the repository.

1. Next to the draft issue you want to remove, click {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot showing the menu icon](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. In the menu, click **Remove**.
   
   ![Screenshot showing the "Remove" option](/assets/images/help/issues/tasklist-remove.png)
   
## Changing the title of a Tasklist

When you create a new Tasklist, the default title is "Tasks." You can modify the title by editing the issue's markdown.

1. In the top-right of the issue body, click {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot showing the location of the menu icon](/assets/images/help/issues/comment-menu.png)
   
1. In the menu, click **Edit**.
   
   ![Screenshot showing the edit option](/assets/images/help/issues/comment-menu-edit.png)
   
1. Modify the header in the fenced code block to your new title. For example, change `### Tasks` to `### My new title`. 
   
   ![Screenshot showing the edit option](/assets/images/help/issues/edit-tasklist-title.png)
   
1. Click **Update comment**.

## Copying a Tasklist

When you copy your Tasklist using the "Copy Markdown" option, {% data variables.product.product_name %} copies Markdown to your clipboard and includes the Issue's name so you can paste the Tasklist outside of GitHub without losing context. 

1. In the top-right of your Tasklist, click {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}.
   
   ![Screenshot showing the menu icon](/assets/images/help/issues/tasklist-kebab.png)
   
1. In the menu, click **Copy markdown**.
   
   ![Screenshot showing the "Copy markdown" option](/assets/images/help/issues/tasklist-copy-markdown.png)
   