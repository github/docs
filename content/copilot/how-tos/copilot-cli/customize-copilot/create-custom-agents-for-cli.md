---
title: Creating and using custom agents for {% data variables.copilot.copilot_cli %}
shortTitle: Create custom agents
allowTitleToDifferFromFilename: true
intro: 'Create specialized agents with tailored expertise for specific development tasks.'
versions:
  feature: copilot
category:
  - Configure Copilot # Copilot discovery page
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: how-tos
---

## Introduction

{% data variables.copilot.custom_agents_caps_short %} allow you to tailor {% data variables.product.prodname_copilot_short %}'s expertise for specific tasks.

When you prompt {% data variables.product.prodname_copilot_short %} to carry out a task it may choose to use one of your {% data variables.copilot.custom_agents_short %}, if {% data variables.product.prodname_copilot_short %} determines that the agent's expertise is a good fit for the task.

Work performed by a {% data variables.copilot.copilot_custom_agent_short %} is carried out using a subagent, which is a temporary agent spun up to complete the task. The subagent has its own context window, which can be populated by information that is not relevant to the main agent. In this way, especially for larger tasks, parts of the work can be offloaded to {% data variables.copilot.custom_agents_short %}, without cluttering the main agent's context window. The main agent can then focus on higher-level planning and coordination.

For more information, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

## Creating a {% data variables.copilot.copilot_custom_agent_short %}

Each {% data variables.copilot.copilot_custom_agent_short %} is defined by a Markdown file with an `.agent.md` extension. You can create these files yourself, or you can add them from within the CLI, as described in the following steps.

1. In interactive mode, enter `/agent`.
1. Select **Create new agent** from the list of options.
1. Choose between the options to create the {% data variables.copilot.copilot_custom_agent_short %} in the repository or in your home directory:

   * **Project** (`.github/agents/`)
   * **User** (`~/.config/copilot/agents/`)

   > [!NOTE]
   > If you have {% data variables.copilot.custom_agents_short %} with the same name in both locations, the one in your home directory will be used, rather than the one in the repository.

1. Choose whether to get {% data variables.product.prodname_copilot_short %} to create the {% data variables.copilot.copilot_custom_agent_short %} file, or create it yourself.

   **Option 1: Use {% data variables.product.prodname_copilot_short %}**

   Enter details of the agent you want to create. Describe the agent's expertise and when the agent should be used. {% data variables.product.prodname_copilot_short %} will take the description you enter and use it to write an agent profile for you.

   For example, you could enter:

   ```text
   I am a security expert. I check code files thoroughly for potential security issues. Use me whenever a security review/check/audit is requested for one or more code files, or when the word "seccheck" is used in a prompt in reference to code files.

   I will identify potential problems, such as code that:

   - Exposes secrets or credentials
   - Allows cross-site scripting
   - Allows SQL injection
   - Contains vulnerable dependencies
   - Allows authentication to be bypassed

   If any problems are identified, create a single GitHub issue in this repository on GitHub.com with details of problems, giving full details of each issue, including, but not limited to, risk level and recommended fix.
   ```

   After {% data variables.product.prodname_copilot_short %} finishes generating the initial agent profile it displays the following options:

   * Continue
   * Review content
   * Try again
   * Quit

   If you choose to review the content, the agent file is opened in your default editor. You can review and make changes, if required, before continuing the agent creation process in the CLI.

   To complete the creation process, choose **Continue**.

   **Option 2: Create the agent profile manually**

   When you choose to create the agent file yourself, you'll be guided through a series of prompts to fill in the necessary information to create the agent profile.

   1. Enter a name for the agent. The name you enter is the name that's displayed when you list the available agents. A version of this will be used as the name of the agent file—for example, if you enter "Security expert", the agent file will be named `security-expert.agent.md`.

      > [!TIP]
      > For ease of use when using a {% data variables.copilot.copilot_custom_agent_short %} programmatically, it's recommended that you choose a name consisting only of lowercase letters and hyphens.

   1. Enter a description that states what expertise this agent has and when it should be used.
   1. Enter instructions for how the agent should behave, including any specific guidelines, actions it should take or constraints it should follow.

1. Choose which tools your {% data variables.copilot.copilot_custom_agent_short %} should have access to.

   By default, {% data variables.copilot.custom_agents_short %} have access to all tools. If you restrict an agent's access, a `tools` specification is added to the agent file.

1. Restart the CLI to load your new {% data variables.copilot.copilot_custom_agent_short %}.

## Using a {% data variables.copilot.copilot_custom_agent_short %}

{% data variables.copilot.custom_agents_caps_short %} can be used in the following ways:

* **Slash command**

  Enter `/agent` in interactive mode and choose from the list of available {% data variables.copilot.custom_agents_short %}. Then enter a prompt that will be passed to the selected agent.

  > [!NOTE]
  > The CLI's default agents are not included in this list. For more information about the default agents, see [AUTOTITLE](/copilot/how-tos/copilot-cli/use-copilot-cli#use-custom-agents).

* **Explicit instruction**

  Tell {% data variables.product.prodname_copilot_short %} to use a specific agent. For example:

  ```copilot
  Use the security-auditor agent on all files in the /src/app directory
  ```

* **By inference**

  Use a prompt that will trigger the use of a particular agent based on the description in the agent file. For example:

  ```copilot
  Check all TypeScript files in or under the src directory for potential security problems
  ```

  or (where "seccheck" is defined as a trigger word in the agent profile):

  ```copilot
  seccheck /src/app/validator.go
  ```

  {% data variables.product.prodname_copilot_short %} will automatically infer the agent you want to use.

* **Programmatically**

  Specify the {% data variables.copilot.copilot_custom_agent_short %} you want to use with the command-line option. For example:

  ```shell
  copilot --agent security-auditor --prompt "Check /src/app/validator.go"
  ```

  Where `security-auditor` is the file name of the {% data variables.copilot.copilot_custom_agent_short %} profile, without the `.agent.md` extension. Typically, but not necessarily, this is the same as the `name` value in the agent profile.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/comparing-cli-features)
* [AUTOTITLE](/copilot/reference/custom-agents-configuration)
* [AUTOTITLE](/copilot/tutorials/customization-library/custom-agents)—a curated collection of examples
