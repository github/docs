---
title: Adding agent skills for {% data variables.product.prodname_copilot %}
shortTitle: Add agent skills
allowTitleToDifferFromFilename: true
intro: 'You can modify {% data variables.product.prodname_copilot_short %}''s behavior and abilities when it works on particular tasks.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Author and optimize with Copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/create-skills
  - /copilot/how-tos/use-copilot-agents/cloud-agent/create-skills
  - /copilot/how-tos/use-copilot-agents/cloud-agent/add-skills
---

> [!NOTE]
> Agent skills work with {% data variables.copilot.copilot_cloud_agent %}, the {% data variables.copilot.copilot_cli %}, and agent mode in {% data variables.product.prodname_vscode %}.

Agent skills are folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. For more information, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

{% data reusables.copilot.creating-adding-skills %}

## Managing skills with {% data variables.product.prodname_cli %}

> [!NOTE]
> `gh skill` is in {% data variables.release-phases.public_preview %} and subject to change. To use it, update {% data variables.product.prodname_cli %} to version 2.90.0 or later.

You can use the `gh skill` command in {% data variables.product.prodname_cli %} to discover, install, update, and publish agent skills from {% data variables.product.github %} repositories.

For the full list of `gh skill` subcommands, run `gh skill --help` or see the [`gh skill`](https://cli.github.com/manual/gh_skill) section of the {% data variables.product.prodname_cli %} manual.

### Installing skills

You can search for skills, preview them, and install them from {% data variables.product.github %} repositories.

> [!WARNING]
> Skills are not verified by {% data variables.product.github %} and may contain prompt injections, hidden instructions, or malicious scripts. Always inspect the content of a skill before installation using `gh skill preview`.

1. Search for skills by topic:

   ```shell
   gh skill search TOPIC
   ```

1. Preview a skill to inspect its contents before installing. This renders the skill's `SKILL.md` and file tree in your terminal without installing anything:

   ```shell
   gh skill preview OWNER/REPOSITORY SKILL
   ```

1. Install a skill. You can run `gh skill install` with no arguments for a fully interactive flow, or specify a repository to browse its skills interactively:

   ```shell
   gh skill install OWNER/REPOSITORY
   ```

   To install a specific skill directly:

   ```shell
   gh skill install OWNER/REPOSITORY SKILL
   ```

   For example, to install a skill from the [`github/awesome-copilot`](https://github.com/github/awesome-copilot) repository:

   ```shell copy
   gh skill install github/awesome-copilot documentation-writer
   ```

   You can install a specific version using `@TAG` or `@SHA`:

   ```shell copy
   gh skill install github/awesome-copilot documentation-writer@v1.2.0
   ```

   To lock a skill to a specific version (or commit SHA) so it is skipped during updates, use `--pin`:

   ```shell copy
   gh skill install github/awesome-copilot documentation-writer --pin v1.2.0
   ```

   > [!NOTE]
   > The `@VERSION` syntax and `--pin` flag are mutually exclusive. Use one or the other, not both.

   To install a skill for a specific agent host, use the `--agent` flag. To control the install scope, use `--scope`:

   ```shell copy
   gh skill install github/awesome-copilot documentation-writer --agent claude-code --scope user
   ```

Skills are automatically installed to the correct directory for your agent host. By default, skills are installed for {% data variables.product.prodname_copilot_short %} at project scope.

### Updating skills

When you install a skill with `gh skill`, provenance metadata is written into the skill's `SKILL.md` frontmatter, including the source repository, ref, and tree SHA. The `gh skill update` command uses this metadata to check for upstream changes.

To check for updates interactively:

```shell
gh skill update
```

To update a specific skill:

```shell
gh skill update SKILL
```

To update all installed skills without prompting:

```shell
gh skill update --all
```

Pinned skills are skipped during updates. To update a pinned skill, reinstall it with a new `--pin` value.

### Publishing skills

If you maintain a skills repository, you can validate and publish your skills using {% data variables.product.prodname_cli %}.

To validate your skills against the [Agent Skills specification](https://agentskills.io/specification) and check remote settings like tag protection, secret scanning, and code scanning, without publishing, use `--dry-run`:

```shell
gh skill publish --dry-run
```

To auto-fix metadata issues in your skill files, use `--fix`. This does not publish your skills:

```shell
gh skill publish --fix
```

To validate and publish your skills:

```shell
gh skill publish
```

## How {% data variables.product.prodname_copilot_short %} uses agent skills

{% data reusables.copilot.skills-using %}
{% data reusables.copilot.skills-compared %}
