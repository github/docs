---
title: Using GitHub Copilot coding agent to improve a project
shortTitle: Improve a project
allowTitleToDifferFromFilename: true
intro: 'Find and fix problems in a project with {% data variables.copilot.copilot_coding_agent %}.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
contentType: tutorials
category:
  - Author and optimize with Copilot
  - Improve quality and maintainability
  - Burn down tech debt
---

> [!NOTE]
> For an introduction to {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

Modern development often starts with good intentions: a quick script, a prototype, maybe an action to automate one small thing. But as projects evolve, those early efforts can become brittle.

This tutorial shows how you can use {% data variables.copilot.copilot_coding_agent %} to improve a mature project, without slowing down your momentum.

In the following sections we'll:

* Make sure that the project contains custom instructions that {% data variables.product.prodname_copilot_short %} can use to tailor its responses to your project.
* Make sure there's an environment setup file for {% data variables.copilot.copilot_coding_agent %}, so that it can get started on tasks more quickly by pre-installing your project’s dependencies.
* Get {% data variables.product.prodname_copilot_short %} to look for improvements that could be made to the code, and then create issues for that work.
* Delegate the coding work to {% data variables.product.prodname_copilot_short %} by assigning it to an issue.

## 1. Check for custom instructions

1. Go to your repository on {% data variables.product.github %}.
1. Check that at least one of the following custom instructions files exists:

   * `.github/copilot-instructions.md`
   * `.github/instructions/**/*-instructions.md`
   * `AGENTS.md`

1. If any of these files exists, view the file and check that the instructions are adequate and up to date.

   For more information, see the section "Writing effective custom instructions" in [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui#writing-effective-custom-instructions), and the library of examples at [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).

1. If there are no custom instructions files in the repository, use {% data variables.copilot.copilot_coding_agent %} to create a `.github/copilot-instructions.md` file, by following the instructions in [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions#asking-copilot-coding-agent-to-generate-a-copilot-instructionsmd-file).
1. Review the pull request that {% data variables.copilot.copilot_coding_agent %} creates. Check that the `.github/copilot-instructions.md` file provides {% data variables.product.prodname_copilot_short %} with all of the information it needs to know to work on this project.

   The file should include:

   * A clear summary of the codebase and what the software does.
   * A project structure overview.
   * Contribution guidelines. For example, how to build, format, lint, and test the codebase, and requirements that must be met before pull requests can be merged.
   * Key technical principles.

1. Edit the file as required.
1. Click **Ready for review** at the bottom of the "Conversation" tab of the pull request, then complete your usual process for merging a pull request.

## 2. Check for an environment setup file

A `copilot-setup-steps.yml` {% data variables.product.prodname_actions %} workflow file can help {% data variables.copilot.copilot_coding_agent %} to get started on tasks more quickly by pre-installing the dependencies that are used by the project.

Creating this file is optional but is a good idea if you use {% data variables.copilot.copilot_coding_agent %} regularly in the repository.

1. In your repository on {% data variables.product.github %}, check that the following file exists:

   ```text copy
   .github/workflows/copilot-setup-steps.yml
   ```

   > [!TIP]
   > A quick way to do this is to copy the above path, go to the main page of your repository and paste the path into the "Go to file" field.

1. If the file exists, open it and check that the steps in the workflow install the correct dependencies for your project. After verifying this, you can skip the remaining steps in this section.
1. If you don't already have a `copilot-setup-steps.yml` file, use the following steps to get {% data variables.copilot.copilot_coding_agent %} to create it for you.
1. At the top of any page of your repository on the {% data variables.product.github %} website, click **{% octicon "agent" aria-label="Open agents panel" %}**.
1. Copy and paste the following prompt into the Agents dialog:

   <!-- markdownlint-disable -->
   ```text copy
   Analyze this repository to understand the dependencies that need to be installed on the development environment to work on the code in this repository. Using this information, and the details about the `copilot-setup-steps.yml` file that are given in https://docs.github.com/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment, add a `.github/workflows/copilot-setup-steps.yml` to this repository. This Actions workflow file should install, in the development environment for {% data variables.copilot.copilot_coding_agent %}, all of the dependencies necessary to work on the code in this repository. Make sure that the workflow job is named `copilot-setup-steps`.
   ```
   <!-- markdownlint-enable -->

1. Click **{% octicon "paper-airplane" aria-label="Start task" %}** or press <kbd>Enter</kbd>.
1. In the "Recent agent sessions" list, click the new agent session that has started.

   This displays an activity log, as {% data variables.product.prodname_copilot_short %} works on the task. When {% data variables.product.prodname_copilot_short %} finishes it will generate a summary of what it did.

1. Read the summary, then click **{% octicon "git-pull-request" aria-hidden="true" aria-label="Pull request" %} View pull request**.
1. Optionally, add {% data variables.product.prodname_copilot_short %} as a reviewer. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review?tool=webui). Wait for {% data variables.product.prodname_copilot_short %} to add review comments, then make any changes you think are necessary in response to the comments.
1. Review the pull request yourself, making sure that the setup steps in the new `copilot-setup-steps.yml` file are correct.

   The workflow file that {% data variables.product.prodname_copilot_short %} has created should include an `on: workflow_dispatch` trigger, to allow you to run the workflow manually, and the job must be named `copilot-setup-steps` as shown in this extract:

   ```yaml
   on:
     workflow_dispatch:
     push:
       paths:
         - .github/workflows/copilot-setup-steps.yml
     pull_request:
       paths:
         - .github/workflows/copilot-setup-steps.yml

   jobs:
     copilot-setup-steps:
       runs-on: ubuntu-latest
   ```

1. Make any required changes to the `copilot-setup-steps.yml` file in the pull request.

   You can ask {% data variables.product.prodname_copilot_short %} to make changes for you by using `@copilot` in a review comment. For example:

   `@copilot - comment the file more thoroughly`

1. Click **Ready for review** at the bottom of the "Conversation" tab of the pull request, then complete your usual process for merging a pull request.
1. Open the newly added `.github/workflows/copilot-setup-steps.yml` file in your repository on {% data variables.product.github %}.
1. Click **View Runs** near the top right of the page.
1. Click **Run workflow** and then **Run workflow** in the dialog, to test the new workflow.
1. Check that the workflow runs correctly and installs the dependencies. Fix any failures by editing the `.github/workflows/copilot-setup-steps.yml` file.

## 3. Let {% data variables.product.prodname_copilot_short %} find technical debt

Now that {% data variables.product.prodname_copilot_short %} has the right context and (optionally) a ready-to-use environment, you can use it to surface and prioritize technical debt in your repository.
1. Click the **{% octicon "copilot" aria-label="Run this prompt in Copilot Chat" %}** button in the following prompt box to send this prompt to {% data variables.copilot.copilot_chat_short %} on {% data variables.product.prodname_dotcom_the_website %}.

   ```copilot copy prompt
   What technical debt exists in this project? Give me a prioritized list of up to 5 areas we need to focus on. For each, describe the problem and its consequences.
   ```

1. Make sure that **{% octicon "comment" aria-hidden="true" aria-label="comment" %} Ask** mode is selected.
1. Use the **{% octicon "globe" aria-hidden="true" aria-label="globe" %}  All repositories** dropdown to select your repository.
1. Click **{% octicon "paper-airplane" aria-label="Start task" %}** or press <kbd>Enter</kbd>.
1. Review the details in {% data variables.product.prodname_copilot_short %}'s response.
1. Assuming {% data variables.product.prodname_copilot_short %} identified at least one area for improvement, copy the following prompt into the same conversation:

   ```copilot copy
   /create-issue

   Create a GitHub issue to address the first of the problem areas that you identified.

   If the problem area requires substantial work, create one main issue for the entire problem area and then sub-issues that allow the work to be split up into manageable chunks, which will be tackled in separate pull requests that can be easily reviewed. For a large body of work, do not create a single issue that attempts to address the entire problem.

   The issue, or each sub-issue if these are created, must include a description of the problem, a set of acceptance criteria, and pointers on what files need to be added/updated.
   ```

1. Edit this prompt as required. For example, depending on the response that {% data variables.product.prodname_copilot_short %} produced, you may want to work on another of the problem areas that {% data variables.product.prodname_copilot_short %} identified, rather than the first.
1. Make sure that Ask mode is still selected (**{% octicon "comment" aria-label="comment icon" %}**).
1. Click **{% octicon "paper-airplane" aria-label="Start task" %}** or press <kbd>Enter</kbd>.
1. Review the draft issue that {% data variables.product.prodname_copilot_short %} generates, editing it as required.
1. If {% data variables.product.prodname_copilot_short %} creates a single draft issue that indicates that sub-issues should be created, prompt {% data variables.product.prodname_copilot_short %} to do this for you:

   ```copilot copy
   Go ahead and create sub-issues that chunk this work into manageable pieces.
   ```

1. Click **Create**, or **Review and Create**, depending on how many issues were drafted.

   {% data variables.product.prodname_copilot_short %} creates one or more new issues on your behalf. You will be shown as the issue author.

## 4. Get {% data variables.product.prodname_copilot_short %} to fix an issue

Now that you have created issues, the next step is to delegate an issue to {% data variables.product.prodname_copilot_short %} and review the resulting pull request.
1. Open one of the issues that {% data variables.product.prodname_copilot_short %} created for you in the previous section.
1. Check that the issue contains acceptance criteria that {% data variables.product.prodname_copilot_short %} can use to verify it has completed the task.
1. Make any changes you feel are necessary to accurately describe the problem that needs to be fixed, and the expected outcome of the work on this issue.
1. Click **{% octicon "agent" aria-label="Open agents panel" %} Assign to {% data variables.product.prodname_copilot_short %}**.
1. In the "Assign Copilot to issue", click **Assign**.

   {% data variables.product.prodname_copilot_short %} will start working on the issue. After a few moments a link to a draft pull request will be added to the issue.

1. Click the link to the draft pull request.

   Once {% data variables.product.prodname_copilot_short %} has finished working on the pull request it will remove "[WIP]" from the pull request title and will add you as a reviewer.

   You can leave {% data variables.product.prodname_copilot_short %} to work on the pull request asynchronously, and come back to review the pull request once you are added as a reviewer.

1. Optionally, after {% data variables.product.prodname_copilot_short %} has been working for a couple of minutes, you can click **View session** on the pull request to see a log of what {% data variables.product.prodname_copilot_short %} is doing.
1. Optionally, on the "Conversation" tab of the pull request, add {% data variables.product.prodname_copilot_short %} as a reviewer.
1. After you have been added as a reviewer, review the changes yourself and make any required changes.

   You can ask {% data variables.product.prodname_copilot_short %} to make changes for you by using `@copilot` in a review comment.

1. Click **Ready for review** at the bottom of the "Conversation" tab of the pull request, then complete your usual process for merging a pull request.

## 5. Iterate on this process

1. If {% data variables.product.prodname_copilot_short %} created multiple issues, repeat section 4, assigning {% data variables.product.prodname_copilot_short %} to one of the other issues.
1. After closing all of the issues that {% data variables.product.prodname_copilot_short %} created, repeat section 3, choosing another problem area and iterating on section 4 to assign issues to {% data variables.product.prodname_copilot_short %} and review and merge its changes.

## Conclusion

{% data variables.copilot.copilot_coding_agent %} can help you to improve the quality of code in any project, but it's particularly useful for reducing technical debt in a project that has grown organically over many months or years. By using {% data variables.copilot.copilot_coding_agent %}, you can make improvements that you might have struggled to find time for without an AI assistant working on your behalf.

{% data variables.product.prodname_copilot_short %} doesn't replace you as a developer—you still need to be involved at every step of this process, specifying what you want {% data variables.product.prodname_copilot_short %} to do and carefully reviewing the code it changes or adds—but it does allow you to implement improvements at the same time as you work on other important tasks.

## Next steps

Read this case study on the {% data variables.product.github %} blog: [How the {% data variables.product.github %} billing team uses the coding agent in {% data variables.product.prodname_copilot %} to continuously burn down technical debt](https://github.blog/ai-and-ml/github-copilot/how-the-github-billing-team-uses-the-coding-agent-in-github-copilot-to-continuously-burn-down-technical-debt/).
