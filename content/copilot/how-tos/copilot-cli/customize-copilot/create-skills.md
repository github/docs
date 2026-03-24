---
title: Creating agent skills for {% data variables.copilot.copilot_cli %}
shortTitle: Create agent skills
allowTitleToDifferFromFilename: true
intro: 'Modify {% data variables.product.prodname_copilot_short %}''s behavior and abilities when it works on particular tasks.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot # Copilot discovery page
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
---

Agent skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. For more information, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

{% data reusables.copilot.creating-adding-skills %}

## Using agent skills

{% data reusables.copilot.skills-using %}

To tell {% data variables.product.prodname_copilot_short %} to use a specific skill, include the skill name in your prompt, preceded by a forward slash. For example, if you have a skill named "frontend-design" you could use a prompt such as:

```copilot
Use the /frontend-design skill to create a responsive navigation bar in React.
```

### Skills commands in the CLI

* **List the currently available skills:** use the command `/skills list` or the prompt:

  ```copilot
  What skills do you have?
  ```

* **Enable or disable specific skills:** use the command `/skills` and then use the up and down keys on your keyboard, and the space bar, to toggle skills on or off.

* **Find out more about a skill** (including its location): use the command `/skills info`.

* **Add a skills location:** to add an alternative location in which to store skills, use the command `/skills add`.

* **Reload skills:** if you have added a skill during a CLI session, you can add it using the command `/skills reload` to avoid having to restart the CLI to use it.

* **Remove skills:** to remove a skill that you have added directly—not via a plugin—use the command `/skills remove SKILL-DIRECTORY`. To remove skills added as part of a plugin you must manage the plugin itself. Use the `info` subcommand to find out which plugin a skill came from.

{% data reusables.copilot.skills-compared %}

To learn more about how skills differ from other customization features, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/comparing-cli-features).
