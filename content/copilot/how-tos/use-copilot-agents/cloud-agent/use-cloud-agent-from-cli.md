---
title: Using Copilot cloud agent from the GitHub CLI
shortTitle: Use cloud agent from the GitHub CLI
intro: 'Start and track {% data variables.copilot.copilot_cloud_agent %} sessions from the {% data variables.product.prodname_cli %}.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
category:
  - Author and optimize with Copilot
---

> [!NOTE]
> The `agent-task` command set is only available in v2.80.0 or later of the {% data variables.product.prodname_cli %}. This command set is a {% data variables.release-phases.public_preview %} and is subject to change.

## Starting a session

You can start a new {% data variables.copilot.copilot_cloud_agent %} session with the `gh agent-task create` command.

When you run the command without any arguments, you are asked to enter a prompt. {% data variables.copilot.copilot_cloud_agent %} acts on the prompt and opens a pull request in the current repository.

You can use command line options to:

* Provide the prompt (`gh agent-task create "Example prompt"`)
* Choose a base branch, instead of using the repository's default branch (`--base`)
* Select a repository, instead of targeting the current repository (`--repo`)
* Follow the session log in real time (`--follow`)

To see all of the available options, run `gh agent-task create --help`.

## Tracking your sessions

You can see a list of your running and past agent sessions with the `gh agent-task list` command. The output will show a list of your recent sessions.

To see more information on a specific session, use the `gh agent-task view` command. For example, to view information about the session associated with pull request #123 in the `monalisa/bookstore` repository, run `gh agent-task view --repo monalisa/bookstore 123`.

To view the session logs, add the `--log` option. Optionally, use the `--follow` option to stream live logs as the agent works.

To see all of the available options, run `gh agent-task list --help` or `gh agent-task view --help`.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
