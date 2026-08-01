---
title: Creating issues with the GitHub integration in Teams
shortTitle: Create issues
intro: Learn how to create issues with the {% data variables.product.github %} integration in Teams.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: tutorials
category:
  - Use integrations
---

## Creating issues with the {% data variables.product.github %} integration in Teams

With the {% data variables.product.github %} integration in Microsoft Teams, you can create issues in any repository that you have access to directly from Teams. This enables you to quickly capture and track tasks, bugs, or feature requests as they arise during conversations in Teams. You must be signed in to your {% data variables.product.github %} account in Teams and have the necessary permissions to create issues in the target repository.

1. In any channel or personal app, click the three dots (**...**) at the top right corner of a message.
1. From the **More actions** list, select **Create an Issue**. This launches the create issue dialog.
1. In the **Create an Issue** dialog, update the information to reflect the issue you want to create.

   * The content of the message will be automatically filled into the description to help you get started. A link to the Teams conversation will also be added to the description, giving you a reference when you want to track the issue later. You can edit the entire description if needed.
   * Teams pre-fills the "Repository" field with the last repository used in the channel, and you can choose a different repository.
   * Optionally, add labels, assignees, and milestones.

1. Click **Create** to create the issue. You will receive a confirmation card in the channel from where you initiated the issue creation.

Alternatively, you can create an issue by invoking `@GitHub Notifications` from the chat in your channel or personal app.
