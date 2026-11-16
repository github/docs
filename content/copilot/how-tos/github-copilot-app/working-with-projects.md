---
title: Working with projects in the GitHub Copilot app
shortTitle: Projects
allowTitleToDifferFromFilename: true
intro: 'Use a project to give {% data variables.product.prodname_copilot_short %} an ongoing goal and let it coordinate the work across repositories, sessions, and recurring tasks.'
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

Projects in the {% data variables.copilot.github_copilot_app %} are in {% data variables.release-phases.public_preview %} and subject to change.


## About projects

A project brings together related work with {% data variables.product.prodname_copilot_short %} over time. Give {% data variables.product.prodname_copilot_short %} a goal, and it coordinates the work. Projects can span one or more repositories or focus on tasks that don't require a repository. Depending on the task, this can involve starting sessions, setting up recurring automations, or creating artifacts.

For example, you could use a project to investigate customer feedback and decide what to improve, or track urgent work and in-progress tasks across repositories. You can follow progress, provide direction, and return to the project as the work evolves.

To tackle a task in a specific repository, you can start a session directly from that repository. Use a project when you want {% data variables.product.prodname_copilot_short %} to coordinate work toward a broader goal.

## Creating a project and assigning work

Give each project a focused goal so you can keep related tasks and results together.

1. In the sidebar of the {% data variables.copilot.github_copilot_app %}, next to **Projects**, click {% octicon "plus" aria-label="Create a project" %}. The **New project** page opens.
1. Optionally, choose repositories for the project to use. Under **Which repositories should this Project use?**, select suggested repositories or search by repository owner and name, then click **Add repositories**. You can start a project without adding a repository.
1. In the prompt box, describe what you want to use the project for and the initial tasks you want {% data variables.product.prodname_copilot_short %} to carry out. Include the results you want and any constraints. For example, to investigate customer feedback about a feature:

   ```copilot copy
   I want to use this project to investigate customer
   feedback about our new search feature and decide
   what to improve.

   First, review the feedback document in this project's
   library. Group the feedback by theme and summarize
   the main problems customers describe.
   For each theme, include supporting examples from the
   document and suggest questions we should investigate.
   Use only the provided feedback. Do not make code changes.
   ```

1. Optionally, add supporting material before sending the prompt. Click the **Library** tab at the top of the right-hand panel, click **Add**, then choose **Add file…** or **Add folder…** and select a file or folder.
1. Send the prompt to start the work.

{% data variables.product.prodname_copilot_short %} coordinates the work toward your goal. You can follow overall progress in the project rather than directing each session separately.

## Tracking and steering work

Click **Overview** at the top of the right-hand panel to review the project's work, grouped by status:

* **Needs input**: Decisions, reviews, and permission requests that need your attention.
* **Open**: Work with an open pull request. Each item shows the session's status, the associated pull request, and the number of lines added and deleted.
* **Working**: Sessions currently working.
* **Done**: Completed work.

Review items under **Needs input** to see where your response is needed.

To inspect an individual session, click the session in the **Overview** tab. You can review the conversation, changes, pull request, and plan, or send a message in **Steer this session** to give further direction.

Continue the work by giving {% data variables.product.prodname_copilot_short %} a follow-up task. For example, after reviewing the feedback summary:

```copilot copy
Compare the two most common feedback themes. Recommend
which one to investigate first and explain your reasoning.
Identify any gaps in the feedback that could change
the recommendation.
```

Return to the same project when you want to continue working on the goal. For example, you can add a new batch of feedback and ask {% data variables.product.prodname_copilot_short %} to compare it with previous findings.

For information about working directly in an individual session, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions).

## Sharing context and reviewing artifacts

Use **Library** to share supporting material with {% data variables.product.prodname_copilot_short %} and find artifacts it has created during sessions for the project. Keep material relevant to the project's goal, and tell {% data variables.product.prodname_copilot_short %} which sources to use when assigning a task.

Click the **Library** tab at the top of the right-hand panel, then click a file to open it. Under **All Files**, **Agent** contains generated artifacts and **User** contains material you added. To add supporting material, click **Add**, then choose **Add file…** or **Add folder…**.

For example, if you were investigating customer feedback about a new feature, you could add the feature specification and a document containing customer feedback to **Library**. You could then ask {% data variables.product.prodname_copilot_short %} to use the specification to understand how the feature is intended to work and the feedback to identify problems customers encounter.

## Setting up recurring work

To set up recurring work, ask {% data variables.product.prodname_copilot_short %} in the project's conversation. Describe the task and when you want it to run.

1. In the project's prompt box, describe the recurring task, including its schedule and expected result. For example, if you add customer feedback to the project's Library throughout the week, ask for a summary every Monday:

   ```copilot copy
   Every Monday at 9 AM in my local time zone, review the
   customer feedback in this project's library and create
   a summary grouped by theme. Include supporting examples
   and questions we should investigate.
   Use only the provided material.
   ```

1. Send the prompt and respond to any questions from {% data variables.product.prodname_copilot_short %} about the task or schedule.
1. Click **Automations** at the top of the right-hand panel to check the task's schedule and next run time.

To change a recurring task, ask {% data variables.product.prodname_copilot_short %} in the project's conversation. For example: "Update the weekly feedback summary to focus on search performance and run every Friday at 10 AM."

You can also edit the schedule manually, pause the task, or delete it from the **Automations** tab. Next to the task, click {% octicon "kebab-horizontal" aria-label="More options" %}:

* Click **Pause** to stop the task from running until you resume it.
* Click **Edit schedule…** to change when the task runs.
* Click **Delete…** to remove the recurring task.

For information about creating scheduled tasks from the app's standalone automations page, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/using-automations).
