---
title: Planning a project with GitHub Copilot
shortTitle: Plan a project
intro: 'Plan your next project by using {% data variables.product.prodname_copilot %} to turn your ideas into issues.'
permissions: 'Anyone with a {% data variables.product.prodname_copilot_short %} license can use {% data variables.product.prodname_copilot_short %} to create issues. <br> <a href="https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=button&ref_plan=free" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Try {% data variables.product.prodname_copilot_short %} for free</span> {% octicon "link-external" height:16 %}</a>'
topics:
  - Copilot
  - Issues
  - Project management
versions:
  feature: copilot
contentType: tutorials
category:
  - Unblock complex work
  - Author and optimize with Copilot
---

> [!NOTE]
> * This feature is in {% data variables.release-phases.public_preview %} and subject to change.
> * The responses shown in this article are examples. {% data variables.copilot.copilot_chat_short %} responses are non-deterministic, so you may get different responses from the ones shown here.

Manage your project with {% data variables.product.prodname_github_issues %} using {% data variables.product.prodname_copilot_short %}. In this tutorial, you’ll use {% data variables.product.prodname_copilot_short %}’s agentic issue creation features to turn your product idea into epics, features, and tasks. Epics represent large bodies of work, while features and tasks break the work into smaller, actionable pieces. By the end, you’ll have a structured backlog ready to share with your team.

## Project overview

It’s important to define what you want your product to do. In the planning phase of the software development lifecycle (SDLC), you turn ideas into actionable tasks by breaking down your project into epics, features, and smaller pieces of work. This helps you organize your thoughts, set priorities, and prepare your team for development.

When you use {% data variables.product.prodname_copilot_short %}, you drive this process. {% data variables.product.prodname_copilot_short %} can suggest a structure and fill in details, but the best results come when you have a sense of how you want the work to be organized. {% data variables.product.prodname_copilot_short %} works with your input to help you refine, expand, and document your plan.

In this scenario you’ll plan a new shopping website that will allow users to:
* Browse a product catalog with categories and search
* Add items to a shopping cart
* Complete secure checkouts

Your goal is to use {% data variables.product.prodname_copilot_short %} to quickly turn this vision into a structured project plan, creating epics and detailed issues that capture each part of your site.

## Set up repository

Set up a repository with {% data variables.product.prodname_github_issues %} enabled. See [AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository).

By default, issues are enabled for new repositories. If you would like to use an existing repository but don’t see the **Issues** tab, follow these steps to enable issues:
1. From the repository, select **Settings**.
1. Under "Features", check the **Issues** box.

## Generate project issues

With the repository set up, you can use {% data variables.product.prodname_copilot_short %} to turn your project vision into a set of actionable issues.

### Start in the {% data variables.product.prodname_copilot_short %} immersive view

{% data reusables.copilot.immersive-mode-instructions %}
1. Using the chat panel, attach the repository for the shopping website. This allows {% data variables.product.prodname_copilot_short %} to access the repository and create issues directly within it.

### Create an epic issue

1. Enter a detailed project description as your prompt. For example:  
   ```I’m planning to create a shopping website in React and Node.js. The site should allow users to browse products by category, search for items, add products to a cart, and complete checkout. Please help me plan the project by creating issues and breaking it down into epics, features, and tasks.```
1. Submit your prompt. {% data variables.product.prodname_copilot_short %} will generate an issue tree, typically with an epic at the top and sub-issues for each main feature or task

![Screenshot of Copilot Chat in immersive mode. Copilot chat displays a list of issues with an epic at the top and several sub-issues beneath it.](/assets/images/help/copilot/copilot-creates-sub-issues.png)

## Navigate the issue tree

1. Click the epic to view its details in the workbench. Navigate through the workbench to explore the issue tree.
1. Each issue typically includes a title and description. Additional metadata such as labels or assignees, can be edited directly in the workbench.  
1. You can expand or collapse sub-issues to focus on specific parts of the project.

   The issue tree provides a clear overview of your project structure, making it easy to navigate between epics, features, and tasks.

1. In this first iteration of the draft, {% data variables.product.prodname_copilot_short %} may generate only high-level issues. You can refine these issues further by breaking them down into smaller tasks or features. Let's refine the issue "Feature: UI Skeleton and Navigation".

    Prompt {% data variables.product.prodname_copilot_short %} with:  
   ```Can you break down the issue "Feature: UI Skeleton and Navigation" into smaller tasks?```

   {% data variables.product.prodname_copilot_short %} will generate multiple new sub-issues such as:
    * Task: Set up React project structure and initial files
    * Task: Create placeholder pages for main routes
    * Task: Implement site-wide navigation bar component
    * Task: Integrate navigation with routing
    * Task: Add basic responsive layout

1. Repeat this process for the remaining feature issues in the epic.  

![Screenshot of the Copilot Chat workbench. The workbench displays an issue tree with an epic at the top and several sub-issues beneath it.](/assets/images/help/copilot/copilot-creates-sub-issues-workbench.png)

### Improve issue descriptions

After you finish generating the issue tree you may notice that {% data variables.product.prodname_copilot_short %}’s issue descriptions may be brief or unclear. To make them actionable, refine each issue as needed.

1. Start with the newly generated issue such as "Task: Create placeholder pages for main routes".  

   Prompt {% data variables.product.prodname_copilot_short %} with:  
  ```Can you improve the description for “Task: Create placeholder pages for main routes”? Please provide a detailed technical summary, list the main routes to be included, outline the steps for implementation, and specify what should be delivered for this task. Please add any relevant code snippets.```

1. {% data variables.product.prodname_copilot_short %} will generate a new version of the draft issue "Task: Create placeholder pages for main routes."  

    At the top-left of the issue, click the versioning drop-down and select **Version 2** to review the new changes.
1. Review and decide whether to keep {% data variables.product.prodname_copilot_short %}’s revised version, edit further, or prompt again for more detail. {% data variables.product.prodname_copilot_short %} can add code snippets into the draft to improve clarity and provide immediate context for these issues.
1. Repeat this process for other issues in the epic, refining descriptions and breaking down tasks as needed.
1. Once you’re satisfied with the issue descriptions, click **Create all** to create the issues in your repository.

## Unlink issues

If {% data variables.product.prodname_copilot_short %} generates a sub-issue that doesn't belong to the issue tree, you can unlink it from the issue tree.

1. In the workbench issue tree, click {% octicon "kebab-horizontal" aria-label="More options" %} next to the sub-issue, then click **Unlink sub-issue**.
1. The issue will be unlinked from its parent and will no longer appear under that epic in the tree.

## Next steps

Now that you’ve generated and refined your project issues, you can assign them to the right team members or even to {% data variables.product.prodname_copilot_short %} itself for further assistance. To learn more about how to assign {% data variables.product.prodname_copilot_short %} or contributors to issues, and how to continue planning and implementing your project with {% data variables.product.prodname_copilot_short %}’s agentic features, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/assign-copilot-to-an-issue).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-for-common-tasks/use-copilot-to-create-issues)
* [AUTOTITLE](/copilot/tutorials/coding-agent/pilot-coding-agent)
* [AUTOTITLE](/copilot/tutorials/coding-agent/get-the-best-results)
* [AUTOTITLE](/copilot/tutorials/speed-up-development-work)
