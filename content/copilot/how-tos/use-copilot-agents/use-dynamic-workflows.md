---
title: Using dynamic workflows
shortTitle: Dynamic workflows
allowTitleToDifferFromFilename: true
intro: 'Find, run, monitor, and resume dynamic workflows in {% data variables.copilot.copilot_cli %} and the {% data variables.copilot.github_copilot_app %}.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.public-preview.public-preview %}

This article explains how to create, use, and share dynamic workflows in {% data variables.copilot.copilot_cli %} and the {% data variables.copilot.github_copilot_app %}.

For an overview of what dynamic workflows are and how they work, see [AUTOTITLE](/copilot/concepts/agents/dynamic-workflows).

## Prerequisite

To use dynamic workflows in {% data variables.copilot.copilot_cli_short %}, you must enable experimental features by running the CLI with the `--experimental` command-line option, or by using `/experimental on` in an interactive session.

## Finding out about available dynamic workflows

You may already have access to one or more dynamic workflows in your session—for example, through a personal extension or an extension in the repository you are working in. If so, you can use one by mentioning it by name in a prompt.

To find out whether any dynamic workflows are available, just ask {% data variables.product.prodname_copilot_short %}. For example:

```copilot copy
What dynamic workflows are available?
```

If dynamic workflows are available, you can ask {% data variables.product.prodname_copilot_short %} to describe one. For example:

```copilot copy
Tell me more about the java-security-checks dynamic workflow.
```

If you don't have any dynamic workflows yet, you can create one. See [Creating a dynamic workflow](#creating-a-dynamic-workflow).

## Running a dynamic workflow

1. In a {% data variables.product.prodname_copilot_short %} session, enter a natural language prompt to ask {% data variables.product.prodname_copilot_short %} to run a dynamic workflow.

   Use the workflow's registered name, and supply any required inputs. For example, a dynamic workflow that performs a security review will typically require you to specify the files it should be run against. In this case you might enter a prompt such as:

   ```copilot copy
   Run the java-security-checks dynamic workflow on the java files in the current directory, with an {% data variables.product.prodname_ai_credit_singular %} limit of 500.
   ```

   > [!IMPORTANT]
   > Setting limits on a dynamic workflow is optional but recommended, as it helps control resource usage and prevent excessive consumption of {% data variables.product.prodname_ai_credits_short %}. For more information about the limits you can set, see [AUTOTITLE](/copilot/concepts/agents/dynamic-workflows#limiting-a-dynamic-workflow).

1. Depending on your current permission approval settings, {% data variables.product.prodname_copilot_short %} asks you to approve the dynamic workflow run before it starts. Choose **Yes**.

If the extension provides another way to start its workflow, such as a slash command or a canvas control in the {% data variables.copilot.github_copilot_app_short %}, follow that extension's instructions.

## Running a dynamic workflow from the command line

1. In a terminal, use the {% data variables.copilot.copilot_cli_short %} command `copilot workflow run WORKFLOW-NAME [OPTIONS]` to run an existing dynamic workflow.

   The workflow must be available through a personal extension, a project extension, or an installed plugin. If you created the workflow in a chat session, first make its extension available outside that session. See [Reusing and sharing dynamic workflows](#reusing-and-sharing-dynamic-workflows).

   Use `--args` to supply inputs for the workflow as JSON.

   > [!IMPORTANT]
   > This command does not display permission approval prompts, even when you run it in a terminal. Grant the permissions the workflow's agents need before starting, for example with `--allow-tool` or `--allow-url`. Requests that cannot be approved automatically are denied. For more information, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-programmatic-reference#tools-for-the---allow-tool-option).

   For example, suppose you have a workflow named `java-security-checks` that accepts a `directory` input and needs permission to read files:

   ```shell copy
   copilot workflow run java-security-checks \
      --args '{"directories":["java/src","java/tests"]}' \
      --allow-tool=read
   ```

   Replace the workflow name, input fields, and permissions to match your workflow. If the workflow needs no inputs, omit `--args`.

   Alternatively, put the JSON inputs in a file and prefix its path with `@`:

   ```shell copy
   copilot workflow run java-security-checks \
      --args @workflow-input.json \
      --allow-tool=read
   ```

1. Watch the phases and progress messages reported by the workflow. When it completes, the command prints its result, if it returns one, and exits. If it pauses or stops without completing, the command reports the run's status and run ID. To interrupt a run, press <kbd>Ctrl</kbd>+<kbd>C</kbd>.

The workflow's configured limits and your personal default limits still apply. See [AUTOTITLE](/copilot/concepts/agents/dynamic-workflows#limiting-a-dynamic-workflow).

### Saving the result to a file

Add `--result-file` to write the workflow's returned value to a JSON file instead of printing it in the terminal. Progress messages are still displayed.

```shell copy
copilot workflow run java-security-checks \
   --args @workflow-input.json \
   --result-file security-results.json \
   --allow-tool=read
```

The file contains only the returned value, not the progress messages or run details. Relative paths are resolved from the directory where you started the command.

The file is written only when the workflow completes successfully and returns a result. An existing file is replaced only after the new result has been written successfully. A paused, failed, or interrupted run leaves any existing file unchanged.

### Running a workflow in a script

For scripts and CI/CD pipelines, configure authentication and permissions before running the command. You can use an authentication environment variable such as `COPILOT_GITHUB_TOKEN`. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#copilot-login-options).

To load a project extension when the working directory has not already been trusted, set `GITHUB_COPILOT_PROMPT_MODE_EXTENSIONS=true` for that invocation. This allows repository extension code to run. Only use it for code you trust. You must still grant the tool permissions the workflow's agents need.

Use `--silent` to suppress progress output. Add `--output-format json` to receive a JSON record containing the workflow name, run ID, status, and any returned result:

```shell copy
copilot --allow-tool=read workflow run java-security-checks \
   --args @workflow-input.json \
   --silent --output-format json
```

## Creating a dynamic workflow

By default, {% data variables.product.prodname_copilot_short %} creates a workflow in an extension for your current session. You can instead ask it to create the workflow in a personal or project extension.

1. Describe what you want the workflow to accomplish, any required order of steps, which parts should use an agent, and any limits. For example:

   ```copilot copy
   Create a dynamic workflow named review-changed that lists changed files, asks an agent to review them, and summarizes the findings.
   ```

   > [!NOTE]
   > If you don't supply a name for the workflow, {% data variables.product.prodname_copilot_short %} chooses one during authoring.

1. Depending on your current permission approval settings, you will be asked to allow {% data variables.product.prodname_copilot_short %} to author a new dynamic workflow. Choose **Yes**.

   {% data variables.product.prodname_copilot_short %} may ask for other approvals as it works on creating and registering the dynamic workflow.

1. After the authoring process completes, check that the workflow was successfully created and registered. To do this, ask {% data variables.product.prodname_copilot_short %} what dynamic workflows are available.

Creating and registering a workflow does not start a run. To use it, see [Running a dynamic workflow](#running-a-dynamic-workflow).

You can also write the extension yourself, with guidance from {% data variables.product.prodname_copilot_short %}. To read the built-in guidance, ask:

```copilot copy
Show me the guidance for writing dynamic workflows.
```

## Reusing and sharing dynamic workflows

Dynamic workflows are implemented as {% data variables.product.prodname_copilot_short %} extensions. By default, when you ask {% data variables.product.prodname_copilot_short %} to create a workflow, its extension is only available in that session. A workflow can also already be stored in a personal or project extension.

To reuse or share a workflow that you created in the current session, copy its extension to either your personal extensions directory or your repository's extensions directory. This copies the definition, not its run history or saved progress.

1. Ask {% data variables.product.prodname_copilot_short %} to tell you the path to the dynamic workflow you want to share. For example:

   ```copilot copy
   Tell me the path to the java-security-checks dynamic workflow.
   ```

   {% data variables.product.prodname_copilot_short %} will respond with a path such as: `/Users/yourname/.copilot/session-state/d58ba0bf-78fa-4172-b277-c18ba400e7c6/extensions/java-security-checks/extension.mjs`

1. To make this dynamic workflow available in all your sessions, copy the directory containing the `extension.mjs` file into your `~/.copilot/extensions/` directory.

   You can ask {% data variables.product.prodname_copilot_short %} to do this for you. For example:

   ```copilot copy
   Copy the java-security-checks workflow to my personal extensions directory.
   ```

1. Alternatively, to share the dynamic workflow with everyone working in a repository, copy the directory containing the `extension.mjs` file into the `.github/extensions/` directory of your local copy of the repository.

   Again, you can ask {% data variables.product.prodname_copilot_short %} to do this for you. For example, if you are currently working in the repository in which you want to make the dynamic workflow available:

   ```copilot copy
   Copy the java-security-checks workflow to the current repository's extensions directory.
   ```

   Once this change is merged into the repository, teammates can use the workflow after updating their local copy and loading the extension.

1. Start a new session, or restart an existing session. When the session finishes loading, ask {% data variables.product.prodname_copilot_short %} to list the available dynamic workflows to verify that your workflow is now available.

### Distributing dynamic workflows in a plugin

Plugins provide a way to distribute custom {% data variables.product.prodname_copilot_short %} functionality. You can use a plugin to add dynamic workflows to {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %}.

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).

After creating a plugin containing your dynamic workflow, and publishing it on a plugin marketplace, people will be able to discover and install it. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing#installing-plugins).

## Monitoring and managing dynamic workflow runs

You can monitor a run's progress and {% data variables.product.prodname_ai_credits_short %} usage, along with any phases and subagents the workflow reports. You can also check completed runs, pause or cancel an active run, and resume a run that you paused or was stopped when a limit was reached.

**In {% data variables.copilot.copilot_cli_short %}:**

1. In an interactive session, enter `/workflows`.

   The currently running and recently completed dynamic workflow runs are listed.

1. Use the arrow keys to move the selection, then press <kbd>Enter</kbd> to open a run's details.

   The details include the length of time a run has been active, any current phase reported by the workflow, the number of currently active subagents, the total number of subagents spawned, and the number of {% data variables.product.prodname_ai_credits_short %} used so far.

1. In an active run, press <kbd>P</kbd> to pause, <kbd>X</kbd> to cancel the run.

**In the {% data variables.copilot.github_copilot_app_short %}:**

> [!NOTE]
> Run monitoring is only available for local sessions.

If you are running, or have run, a dynamic workflow in the current session, a **Workflows** button is displayed above the prompt box.

1. Click the **Workflows** button.

   A popup is displayed listing active runs, runs ready to resume, and recently finished runs.

1. Click a workflow run in the popup.

   A panel is displayed showing the details of the selected workflow run.

   The details include the length of time a run has been active, any current phase reported by the workflow, the number of currently active subagents, the total number of subagents spawned, and the number of {% data variables.product.prodname_ai_credits_short %} used so far.

1. To stop an active run, click **Cancel**. To pause it, so that it can be resumed later, click **Pause**.

### Monitoring dynamic workflows with OTel

If you have enabled OpenTelemetry (OTel), you can inspect workflow activity in your traces. A workflow creates an `invoke_workflow` span each time it runs or resumes, with its agents' activity linked to it.

For configuration in {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#opentelemetry-monitoring).

### Resuming a run

You can resume a paused run or one that stopped at a limit when it is listed as resumable. The workflow can reuse saved results from completed steps and subagents, rather than starting a new run. Work that was not saved may need to run again.

When resuming a run that reached a limit, set a higher total for that limit. Usage before the run stopped still counts toward the new total.

Canceled runs cannot be resumed.

**In {% data variables.copilot.copilot_cli_short %}:**

1. In an interactive session, enter `/workflows`.
1. Use the arrow keys to move the selection to the paused or stopped run that you want to resume.
1. Press <kbd>R</kbd> to resume the run.
1. If prompted, increase the limit that was reached and confirm the new total.

**In the {% data variables.copilot.github_copilot_app_short %}:**

1. In a session that contains paused or stopped dynamic workflow runs, click the **Workflows** button, just above the prompt box.

   Any resumable runs are listed in a "Ready to resume" section.

1. Click the run you want to resume.
1. In the side panel, click **Resume**. If the run reached a limit, click **Resume with limit…** instead, then follow the prompts to set a higher total and resume.

## Scheduling a dynamic workflow run

You can schedule a dynamic workflow run in your current {% data variables.copilot.copilot_cli_short %} session, just like any other prompt, by using the `/every` or `/after` commands. For example:

```copilot copy
/every 1d run the changed-files-report dynamic workflow on the 'main' branch, limiting it to 200 {% data variables.product.prodname_ai_credits_short %}
```

For more information, see [AUTOTITLE](/copilot/how-tos/copilot-cli/automate-copilot-cli/schedule-prompts).
