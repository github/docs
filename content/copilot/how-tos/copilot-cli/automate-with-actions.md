---
title: Automating tasks with Copilot CLI and GitHub Actions
shortTitle: Automate with Actions
intro: Integrate {% data variables.copilot.copilot_cli %} into your {% data variables.product.prodname_actions %} workflows.
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: how-tos
category: 
  - Build with Copilot CLI
  - Author and optimize with Copilot
---

You can run {% data variables.copilot.copilot_cli %} in a {% data variables.product.prodname_actions %} workflow to automate AI-powered tasks as part of your CI/CD process. For example, you can summarize recent repository activity, generate reports, or scaffold project content. {% data variables.copilot.copilot_cli %} runs on the Actions runner like any other CLI tool, so you can install it during a job and invoke it from workflow steps.

## Understanding the workflow

You can define a job in a {% data variables.product.prodname_actions %} workflow that: installs {% data variables.copilot.copilot_cli_short %} on the runner, authenticates it, runs it in programmatic mode, and then handles the results. Programmatic mode is designed for scripts and automation and lets you pass a prompt non-interactively.

Workflows can follow this pattern:  
1. **Trigger**: Start the workflow on a schedule, in response to repository events, or manually.
1. **Setup**: Checkout code, set up environment.
1. **Install**: Install {% data variables.copilot.copilot_cli %} on the runner.
1. **Authenticate**: Ensure the CLI has the necessary permissions to access the repository and make changes.
1. **Run {% data variables.copilot.copilot_cli_short %}**: Invoke {% data variables.copilot.copilot_cli_short %} with a prompt describing the task you want to automate.

The following workflow generates a daily summary of repository changes and prints the summary to the workflow logs.

```yaml copy
name: Daily summary
on:
  workflow_dispatch:
  # Daily at 8:25 UTC
  schedule:
    - cron: '25 8 * * *'
permissions:
  contents: read
jobs:
  daily-summary:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
        
      - name: Set up Node.js environment
        uses: {% data reusables.actions.action-setup-node %}

      - name: Install Copilot CLI
        run: npm install -g @github/copilot

      - name: Run Copilot CLI
        env:
          {% raw %}COPILOT_GITHUB_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
        run: |
          TODAY=$(date +%Y-%m-%d)
          copilot -p "Review the git log for this repository and write a bullet point summary of all code changes that were made today ($TODAY). Include a brief description of what was changed."
```

## Trigger

In this example, the workflow runs on a daily schedule and can also be triggered manually. 

`The workflow_dispatch` trigger lets you run the workflow manually from the Actions tab, which is useful when testing changes to your prompt or workflow configuration. 

The `schedule` trigger runs the workflow automatically at a specified time using cron syntax.

```yaml copy
on:
  # Allows manual triggering of this workflow.
  workflow_dispatch:
  # Daily at 8:30 UTC
  schedule:
    - cron: '30 8 * * *'
```

## Setup

Set up the job so {% data variables.copilot.copilot_cli_short %} can access your repository and run on the runner. This allows {% data variables.copilot.copilot_cli_short %} to analyze the repository context, when generating the daily summary.

The `permissions` block defines the scope granted to the built-in `GITHUB_TOKEN`. Because this workflow reads repository data and prints a summary to the logs, it requires `contents: read`.

```yaml copy
permissions:
  contents: read
jobs:
  daily-summary:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
```

## Install

Install {% data variables.copilot.copilot_cli_short %} on the runner so your workflow can invoke it as a command. You can install {% data variables.copilot.copilot_cli %} using any supported installation method. For a full list of installation options, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli). 

In this example, the workflow installs {% data variables.copilot.copilot_cli %} globally with npm.

```yaml copy
- name: Set up Node.js environment
  uses: {% data reusables.actions.action-setup-node %}

- name: Install Copilot CLI
  run: npm install -g @github/copilot
```

## Authenticate

To authenticate {% data variables.copilot.copilot_cli_short %} in a workflow, create a {% data variables.product.pat_v2 %} (PAT) with the **Copilot Requests** permission. Store the PAT as a repository secret, then pass it to the CLI using an environment variable. For more information on creating a PAT for the CLI, see [Authenticating with a {% data variables.product.pat_generic %}](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli#authenticating-with-a-personal-access-token).

{% data variables.copilot.copilot_cli_short %} supports multiple authentication environment variables. In this example, the workflow uses `COPILOT_GITHUB_TOKEN`, which is specific to {% data variables.copilot.copilot_cli_short %} and avoids confusion for the built-in `GITHUB_TOKEN` environment variable. 

```yaml copy
- name: Run Copilot CLI
  env:
   {% raw %}COPILOT_GITHUB_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
```


## Run {% data variables.copilot.copilot_cli_short %} 

Run {% data variables.copilot.copilot_cli_short %} in programmatic mode when you want to use it in automation. 
`copilot -p PROMPT` executes a prompt programmatically and exits when the command completes. 

In this workflow, {% data variables.copilot.copilot_cli_short %} references the repository content that is available in the job workspace. The command prints its response to standard output and the summary appears in the workflow logs. 

```yaml copy
- name: Run Copilot CLI
  env:
    {% raw %}COPILOT_GITHUB_TOKEN: ${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
  run: |
    TODAY=$(date +%Y-%m-%d)
    copilot -p "Review the git log for this repository and write a bullet point summary of all code changes that were made today ($TODAY). Include a brief description of what was changed."
```

## Next steps

After you confirm the workflow prints a summary to the logs, you can adapt the same pattern to other automation tasks. Start by changing the prompt you pass to `copilot -p PROMPT`, then decide what you want to do with the output.

* Write the summary to a file so later steps can use it as input.
* Post the summary as a comment on an issue or a message in a team chat.
* Summarize requests and output a draft changelog.

## Further reading

* [AUTOTITLE](/copilot/reference/cli-command-reference)
* [AUTOTITLE](/copilot/reference/cli-plugin-reference)

