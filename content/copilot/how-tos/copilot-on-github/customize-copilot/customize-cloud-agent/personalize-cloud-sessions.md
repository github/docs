---
title: Personalizing your cloud sessions
shortTitle: Personalize cloud sessions
intro: 'Bring your personal instructions, skills, and custom agents to your sessions with {% data variables.copilot.copilot_in_the_cloud_short %} using a dotfiles repository.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Author and optimize with Copilot
---

## About personalizing cloud sessions

You can use a dotfiles repository to give {% data variables.copilot.copilot_in_the_cloud_short %} your preferred instructions, reusable skills, and specialized agents across repositories. You can also use personal custom instructions to apply to every conversation you have on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_mobile %}. These personal customizations apply to your sessions, rather than configuring a repository for everyone who works in it.

Dotfiles personalization works only in **cloud sandboxes**. It does not apply to sessions that run on {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_copilot_short %} uses the same dotfiles setting as {% data variables.product.prodname_github_codespaces %}. You can configure it in either your personal **{% data variables.product.prodname_copilot_short %}** > **Cloud** settings or your {% data variables.product.prodname_codespaces %} settings. You do not need to create a codespace to use dotfiles with {% data variables.product.prodname_copilot_short %}.

Personal custom instructions apply to every conversation you have with {% data variables.copilot.copilot_in_the_cloud_short %}, so {% data variables.product.prodname_copilot_short %} always responds in your preferred language, tone, and style.

Examples of custom instructions you can add:

* `Always respond in Spanish.`
* `Use a helpful, collegial tone. Keep explanations brief, but provide enough context to understand the code.`
* `Always provide examples in TypeScript.`

{% data reusables.copilot.custom-instructions-chat-precedence %}

{% data reusables.copilot.custom-instructions-conflict %}

## Preparing your dotfiles repository

Your dotfiles repository must contain a `.copilot` directory at its root. If this directory is not present, {% data variables.product.prodname_copilot_short %} does not install the repository's dotfiles.

Add the personal customizations you want to use to this directory. For example:

```text
.copilot/
  copilot-instructions.md
  skills/
    release-notes/
      SKILL.md
  agents/
    reviewer.agent.md
```

These files use the same formats and home-directory locations as personal customizations for {% data variables.copilot.copilot_cli %}. Use the following guides to write their contents:

| Customization | Location in your dotfiles repository | Guidance |
| --- | --- | --- |
| Personal instructions | `.copilot/copilot-instructions.md` | Write guidance to apply across repositories, such as your preferred coding conventions or response style. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-custom-instructions). |
| Personal skills | `.copilot/skills/SKILL-NAME/SKILL.md` | Define repeatable workflows with instructions, scripts, and resources. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/add-skills). |
| Personal custom agents | `.copilot/agents/AGENT-NAME.agent.md` | Define specialist agents with their own instructions and tools. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/create-custom-agents-for-cli). |

Replace `SKILL-NAME` and `AGENT-NAME` with descriptive names for your skill and agent. The linked guides also describe CLI-specific commands, which are not required to set up your dotfiles repository.

Do not commit secrets or credentials to your dotfiles repository.

## Enabling dotfiles for your cloud sessions

1. Create a dotfiles repository that you own on {% data variables.product.github %}, or use an existing one.
1. Add a `.copilot` directory at the root of the repository, with your personal customization files as described above.
1. Commit and push your changes to the repository.
1. In your personal {% data variables.product.github %} settings, under **{% data variables.product.prodname_copilot_short %}**, click **Cloud**. Enable dotfiles and select your repository.

   Alternatively, configure dotfiles in your [{% data variables.product.prodname_codespaces %} settings](https://github.com/settings/codespaces?utm_source=personalize-cloud-sessions-codespaces-dotfiles&utm_medium=docs&utm_campaign=universe-2026). Both settings pages share the same selection, so changing it also changes the dotfiles repository used for your codespaces.

1. Start a session in a cloud sandbox, or resume an existing cloud sandbox session. Where you can choose an environment, select **Cloud**, not **Actions**. For more information, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes).

When the cloud sandbox is created or resumed, {% data variables.product.prodname_copilot_short %} copies the contents of your dotfiles repository into the sandbox's home directory, making your personal customizations available under `~/.copilot`.

## How dotfiles are applied

If your dotfiles repository contains a root `.copilot` directory, {% data variables.product.prodname_copilot_short %} copies the entire repository's contents, not just `.copilot`.

Unlike {% data variables.product.prodname_github_codespaces %}, {% data variables.product.prodname_copilot_short %} does not run dotfiles installation scripts such as `install.sh` or `bootstrap.sh`. Include your customization files directly in the repository rather than relying on a script to create them.

Changes to your dotfiles repository take effect the next time a cloud sandbox is created or resumed. They are not applied to a sandbox while it is running.

## Adding personal custom instructions

To add personal custom instructions for {% data variables.copilot.copilot_in_the_cloud_short %} on {% data variables.product.github %}:

1. Open a [{% data variables.product.prodname_copilot_short %}](https://github.com/copilot?ref_product=copilot&ref_type=engagement&ref_style=text&utm_source=personalize-cloud-sessions-start-session-cta&utm_medium=docs&utm_campaign=universe-2026) session.
1. In the bottom left menu, click **{% octicon "gear" aria-label="The Gear icon" %}**.
1. Add natural language instructions to the text box.

   Use any format. For example, a single block of text, each instruction on a new line, or instructions separated by blank lines.

1. Click **Save**.

Your instructions are now active and remain active until you change or remove them.

For a curated collection of examples of personal custom instructions, see [AUTOTITLE](/copilot/tutorials/customization-library/custom-instructions).

<div class="border rounded-2 p-3">

Did you successfully personalize your cloud sessions?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

</div>
