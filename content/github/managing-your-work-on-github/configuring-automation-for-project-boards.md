---
#'#'" 'const'" '{h.ref1'#'" 'const { get } = require'"
Skip to content
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
Iixixi /
ZachryTylerWood
Template
forked from github/docs

    Code
    Issues
    Pull requests
    Discussions
    Actions
    Projects 5
    Wiki
    Security
    Insights
    Settings
title: Configuring automation for project boards
intro: You can set up automatic workflows to move issues and pull requests to a project board column when a specified event occurs.
redirect_from:
  - /articles/configuring-automation-for-project-boards
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.project-management.automate-project-board-permissions %} For more information, see "[About automation for project boards](/articles/about-automation-for-project-boards)."

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Tip**: To edit columns that already have configured automation, click **Manage** at the bottom of the column.

{% endtip %}

1. Navigate to the project board you want to automate.
2. In the column you want to automate, click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![Edit icon](/assets/images/help/projects/edit-column-button.png)
3. Click **Manage automation**.
![Manage automation button](/assets/images/help/projects/manage-automation-button.png)
4. Using the Preset drop-down menu, select an automation preset.
![Select preset automation from menu](/assets/images/help/projects/select-automation.png)
5. Select the workflow automations you want to configure for the column.
![List of options for automating the column](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Click **Update automation**.

### Further reading
- "[About automation for project boards](/articles/about-automation-for-project-boards)"
