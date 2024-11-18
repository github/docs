---
title: 'Adding notes to a {% data variables.product.prodname_project_v1 %}'
intro: 'You can add notes to a {% data variables.projects.projects_v1_board %} to serve as task reminders or to add information related to the {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**Tips:**
* You can format your note using Markdown syntax. For example, you can use headings, links, task lists, or emoji. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)."
* You can drag and drop or use keyboard shortcuts to reorder notes and move them between columns. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
* Your {% data variables.projects.projects_v1_board %} must have at least one column before you can add notes.{% ifversion projects-v1-can-create %} For more information, see "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)."{% endif %}

{% endtip %}

When you add a URL for an issue, pull request, or another {% data variables.projects.projects_v1_board %} to a note, you'll see a preview in a summary card below your text.

## Adding notes to a {% data variables.projects.projects_v1_board %}

1. Navigate to the {% data variables.projects.projects_v1_board %} where you want to add notes.
1. In the column you want to add a note to, click {% octicon "plus" aria-label="Add a note to this column" %}.
   ![Screenshot showing a project column. The 'add a note to this column' button is highlighted with an orange outline.](/assets/images/help/projects/add-note-button.png)
1. Type your note, then click **Add**.

   {% tip %}

   **Tip:** You can reference an issue or pull request in your note by typing its URL in the card.

   {% endtip %}

## Converting a note to an issue

If you've created a note and find that it isn't sufficient for your needs, you can convert it to an issue.

When you convert a note to an issue, the issue is automatically created using the content from the note. The first line of the note will be the issue title and any additional content from the note will be added to the issue description.

{% tip %}

**Tip:** You can add content in the body of your note to @mention someone, link to another issue or pull request, and add emoji. These {% data variables.product.prodname_dotcom %} Flavored Markdown features aren't supported within {% data variables.projects.projects_v1_board %} notes, but once your note is converted to an issue, they'll appear correctly. For more information on using these features, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)."

{% endtip %}

1. Navigate to the note that you want to convert to an issue.
{% data reusables.project-management.project-note-more-options %}
1. Click **Convert to issue**.
1. If the card is on an organization-wide {% data variables.projects.projects_v1_board %}, in the drop-down menu, choose the repository you want to add the issue to.
1. Optionally, edit the pre-filled issue title, and type an issue body.
1. Click **Convert to issue**.
1. The note is automatically converted to an issue. In the {% data variables.projects.projects_v1_board %}, the new issue card will be in the same location as the previous note.

## Editing and removing a note

1. Navigate to the note that you want to edit or remove.
{% data reusables.project-management.project-note-more-options %}
1. To edit the contents of the note, click **Edit note**.
1. To delete the contents of the notes, click **Delete note**.

## Further reading

* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)"
{%- ifversion projects-v1-can-create %}- "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/creating-a-project-board)"{% endif %}
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/managing-project-boards/editing-a-project-board)"
* "[AUTOTITLE](/issues/organizing-your-work-with-project-boards/tracking-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board)"
