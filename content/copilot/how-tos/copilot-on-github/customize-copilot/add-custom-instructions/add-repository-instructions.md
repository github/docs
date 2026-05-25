---
title: Adding repository custom instructions for GitHub Copilot
shortTitle: Add repository instructions
intro: 'Create repository custom instructions files that give {% data variables.product.prodname_copilot_short %} additional context on how to understand your project and how to build, test and validate its changes.'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/customizing-copilot/adding-custom-instructions-for-github-copilot
  - /copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot
  - /copilot/how-tos/custom-instructions/add-repository-instructions
  - /copilot/how-tos/use-copilot-agents/request-a-code-review/configure-coding-guidelines
  - /copilot/how-tos/configure-custom-instructions/add-repository-instructions
category:
  - Configure Copilot
---

## Introduction

Repository custom instructions let you provide {% data variables.product.prodname_copilot_short %} with repository-specific guidance and preferences on {% data variables.product.github %}. To find out how to set up custom instructions in an IDE, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide). For more information about custom instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization).

{% data reusables.copilot.repository-custom-instructions-prerequisites %}

* For {% data variables.copilot.copilot_code-review_short %}, your personal choice of whether to use custom instructions must be set to enabled. This is enabled by default. See [Enabling or disabling repository custom instructions](#enabling-or-disabling-custom-instructions-for-copilot-code-review) later in this article.

## Creating custom instructions

{% data variables.product.prodname_copilot_short %} on {% data variables.product.github %} supports three types of repository custom instructions. For details of which {% data variables.product.prodname_copilot %} features support these types of instructions, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui#support-for-repository-custom-instructions).

* **Repository-wide custom instructions** apply to all requests made in the context of a repository.

  These are specified in a `copilot-instructions.md` file in the `.github` directory of the repository. See [Creating repository-wide custom instructions](#creating-repository-wide-custom-instructions).

* **Path-specific custom instructions** apply to requests made in the context of files that match a specified path.

  These are specified in one or more `NAME.instructions.md` files within or below the `.github/instructions` directory in the repository. See [Creating path-specific custom instructions](#creating-path-specific-custom-instructions).

  If the path you specify matches a file that {% data variables.product.prodname_copilot_short %} is working on, and a repository-wide custom instructions file also exists, then the instructions from both files are used.

* **Agent instructions** are used by AI agents.

  {% data reusables.copilot.custom-instructions-agents %}

  Alternatively, you can use a single `CLAUDE.md` or `GEMINI.md` file stored in the root of the repository.

## Creating repository-wide custom instructions

You can create your own custom instructions file from scratch. See [Writing your own copilot-instructions.md file](#writing-your-own-copilot-instructionsmd-file). Alternatively, you can ask {% data variables.copilot.copilot_cloud_agent %} to generate one for you.

### Asking {% data variables.copilot.copilot_cloud_agent %} to generate a `copilot-instructions.md` file

1. Go to the agents tab at [github.com/copilot/agents](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text).

    You can also reach this page by clicking the **{% octicon "copilot" aria-label="Copilot icon" %}** button next to the search bar on any page on {% data variables.product.github %}, then selecting **Agents** from the sidebar.

1. In the prompt field dropdown, select the repository you want {% data variables.product.prodname_copilot_short %} to generate custom instructions for.
1. Copy the following prompt and paste it into the prompt field, customizing it if needed:

   ```markdown copy
   Your task is to "onboard" this repository to Copilot cloud agent by adding a .github/copilot-instructions.md file in the repository that contains information describing how a cloud agent seeing it for the first time can work most efficiently.

   You will do this task only one time per repository and doing a good job can SIGNIFICANTLY improve the quality of the agent's work, so take your time, think carefully, and search thoroughly before writing the instructions.

   <Goals>
   - Reduce the likelihood of a cloud agent pull request getting rejected by the user due to
   generating code that fails the continuous integration build, fails a validation pipeline, or
   having misbehavior.
   - Minimize bash command and build failures.
   - Allow the agent to complete its task more quickly by minimizing the need for exploration using grep, find, str_replace_editor, and code search tools.
   </Goals>

   <Limitations>
   - Instructions must be no longer than 2 pages.
   - Instructions must not be task specific.
   </Limitations>

   <WhatToAdd>

   Add the following high level details about the codebase to reduce the amount of searching the agent has to do to understand the codebase each time:
   <HighLevelDetails>

   - A summary of what the repository does.
   - High level repository information, such as the size of the repo, the type of the project, the languages, frameworks, or target runtimes in use.
   </HighLevelDetails>

   Add information about how to build and validate changes so the agent does not need to search and find it each time.
   <BuildInstructions>

   - For each of bootstrap, build, test, run, lint, and any other scripted step, document the sequence of steps to take to run it successfully as well as the versions of any runtime or build tools used.
   - Each command should be validated by running it to ensure that it works correctly as well as any preconditions and postconditions.
   - Try cleaning the repo and environment and running commands in different orders and document errors and misbehavior observed as well as any steps used to mitigate the problem.
   - Run the tests and document the order of steps required to run the tests.
   - Make a change to the codebase. Document any unexpected build issues as well as the workarounds.
   - Document environment setup steps that seem optional but that you have validated are actually required.
   - Document the time required for commands that failed due to timing out.
   - When you find a sequence of commands that work for a particular purpose, document them in detail.
   - Use language to indicate when something should always be done. For example: "always run npm install before building".
   - Record any validation steps from documentation.
   </BuildInstructions>

   List key facts about the layout and architecture of the codebase to help the agent find where to make changes with minimal searching.
   <ProjectLayout>

   - A description of the major architectural elements of the project, including the relative paths to the main project files, the location
   of configuration files for linting, compilation, testing, and preferences.
   - A description of the checks run prior to check in, including any GitHub workflows, continuous integration builds, or other validation pipelines.
   - Document the steps so that the agent can replicate these itself.
   - Any explicit validation steps that the agent can consider to have further confidence in its changes.
   - Dependencies that aren't obvious from the layout or file structure.
   - Finally, fill in any remaining space with detailed lists of the following, in order of priority: the list of files in the repo root, the
   contents of the README, the contents of any key source files, the list of files in the next level down of directories, giving priority to the more structurally important and snippets of code from key source files, such as the one containing the main method.
   </ProjectLayout>
   </WhatToAdd>

   <StepsToFollow>
   - Perform a comprehensive inventory of the codebase. Search for and view:
   - README.md, CONTRIBUTING.md, and all other documentation files.
   - Search the codebase for build steps and indications of workarounds like 'HACK', 'TODO', etc.
   - All scripts, particularly those pertaining to build and repo or environment setup.
   - All build and actions pipelines.
   - All project files.
   - All configuration and linting files.
   - For each file:
   - think: are the contents or the existence of the file information that the cloud agent will need to implement, build, test, validate, or demo a code change?
   - If yes:
      - Document the command or information in detail.
      - Explicitly indicate which commands work and which do not and the order in which commands should be run.
      - Document any errors encountered as well as the steps taken to workaround them.
   - Document any other steps or information that the agent can use to reduce time spent exploring or trying and failing to run bash commands.
   - Finally, explicitly instruct the agent to trust the instructions and only perform a search if the information in the instructions is incomplete or found to be in error.
   </StepsToFollow>
      - Document any errors encountered as well as the steps taken to work-around them.

1. Click **{% octicon "paper-airplane" aria-label="Start task" %}** or press <kbd>Enter</kbd>.

{% data variables.product.prodname_copilot_short %} will start a new session, which will appear in the list below the prompt box. {% data variables.product.prodname_copilot_short %} will create a draft pull request, write your custom instructions, push them to the branch, then add you as a reviewer when finished, triggering a notification.

### Writing your own `copilot-instructions.md` file

1. In the root of your repository, create a file named `.github/copilot-instructions.md`.

   Create the `.github` directory if it does not already exist.

1. Add natural language instructions to the file, in Markdown format.

   Whitespace between instructions is ignored, so the instructions can be written as a single paragraph, each on a new line, or separated by blank lines for legibility.

> [!TIP]
> The first time you create a pull request in a given repository with {% data variables.copilot.copilot_cloud_agent %}, {% data variables.product.prodname_copilot_short %} will leave a comment with a link to automatically generate custom instructions for the repository.

## Creating path-specific custom instructions

> [!NOTE]
> Currently, on {% data variables.product.prodname_dotcom_the_website %}, path-specific custom instructions are only supported for {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_code-review_short %}.

{% data reusables.copilot.custom-instructions-path %}

{% data reusables.copilot.custom-instructions-note %}

In {% data variables.copilot.copilot_chat_short %} ([github.com/copilot](https://github.com/copilot)), you can start a conversation that uses repository custom instructions by adding, as an attachment, the repository that contains the instructions file.

Whenever repository custom instructions are used by {% data variables.copilot.copilot_chat_short %}, the instructions file is added as a reference for the response that's generated. To find out whether repository custom instructions were used, expand the list of references at the top of a chat response in the Chat panel and check whether the `.github/copilot-instructions.md` file is listed.

![Screenshot of an expanded References list, showing the 'copilot-instructions.md' file highlighted with a dark orange outline.](/assets/images/help/copilot/custom-instructions-ref-in-github.png)

You can click the reference to open the file.

> [!NOTE]
> * {% data reusables.copilot.custom-instructions-chat-precedence %}
> * {% data reusables.copilot.custom-instructions-conflict %}

## Enabling or disabling custom instructions for {% data variables.copilot.copilot_code-review_short %}

Custom instructions are enabled for {% data variables.copilot.copilot_code-review_short %} by default but you can disable, or re-enable, them in the repository settings on {% data variables.product.prodname_dotcom_the_website %}. This applies to {% data variables.product.prodname_copilot_short %}'s use of custom instructions for all code reviews it performs in this repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Code & automation" section of the sidebar, click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, then **Code review**.
1. Toggle the “Use custom instructions when reviewing pull requests” option on or off.

> [!NOTE]
> {% data reusables.copilot.code-review.custom-instructions-branch %}

## Further reading

* [AUTOTITLE](/copilot/reference/custom-instructions-support)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions)—a curated collection of examples
* [AUTOTITLE](/copilot/tutorials/use-custom-instructions)
