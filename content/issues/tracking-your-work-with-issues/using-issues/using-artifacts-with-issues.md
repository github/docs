---
title: Using artifacts with issues
intro: Keep plans, research, links, and interactive HTML alongside the issue they support.
versions:
  fpt: '*'
  ghec: '*'
permissions: Issue artifacts are available on {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_cloud %}.
contentType: how-tos
category:
  - Create and work with issues
---

{% data reusables.public-preview.public-preview %}

Issue artifacts are named pieces of content attached to an issue. They provide a durable place to keep plans, research, decisions, prototypes, and reference material as context alongside your work.

You can share artifacts with others via a URL, and if you update an artifact, {% data variables.product.github %} will keep a record of changes so you can go back and see how an artifact has evolved over the course of a project.

## Supported artifact types

Issue artifacts support the following types:

* **Markdown document (`generic`)**: General-purpose content, such as research, investigation notes, or a design document.
* **Plan (`plan`)**: A Markdown implementation plan.
* **Link (`link`)**: A named link to content elsewhere, such as a discussion, prototype, or Slack or Teams thread.
* **HTML file (`embedded_html`)**: A self-contained HTML document, such as an interactive prototype, visualization, flowchart, or diagram.

## Creating an artifact

You can create artifacts on {% data variables.product.prodname_dotcom_the_website %}, or ask an agent or developer tool to create one using the built-in {% data variables.product.github %} MCP server, {% data variables.product.prodname_cli %}, or the issue artifacts REST API. For example, you can ask the {% data variables.copilot.github_copilot_app_short %} to create an implementation plan, root cause analysis, or research summary and attach it to the issue.

### Creating an artifact on {% data variables.product.prodname_dotcom_the_website %}

1. Navigate to the issue where you want to create an artifact.
1. In the **Artifacts** section, click {% octicon "plus" aria-label="Add artifact" %}.
1. Select an artifact type:
   * To add a named URL, click **Add link**.
   * To create a Markdown document, click **Create artifact**.
   * To create an HTML document, click **Create HTML artifact**.
1. Follow the prompts to name and create the artifact.

## Viewing and sharing an artifact

1. Navigate to the issue containing the artifact.
1. In the **Artifacts** section, click the artifact name.
1. The artifact will open and display in a side panel on the issue.
1. To copy the URL to share the artifact with others, click {% octicon "link" aria-label="the link" %}.

## Editing an artifact

1. Open the artifact.
1. In the artifact panel, click {% octicon "pencil" aria-label="Edit artifact" %}.
1. Update the artifact name or content.
1. Save your changes.

Editing an artifact creates a version in its history.

## Viewing an artifact's version history

1. Open the artifact.
1. In the artifact panel, click {% octicon "history" aria-label="Edit history" %}.
1. Select a version to view its name, content, author, and creation time.

You cannot restore a version in the web interface. To restore an earlier version, use `gh issue artifact edit --restore-version`. Restoring saves the earlier name and content as a new version, preserving the complete history.

## Reordering artifacts

You can reorder artifacts by dragging them within the **Artifacts** section. You can also click {% octicon "kebab-horizontal" aria-label="Artifact actions" %} next to an artifact, click **Move**, then choose a position.

## Deleting an artifact

> [!WARNING]
> Deleting an artifact is permanent and also deletes its version history.

1. In the **Artifacts** section of the issue, click {% octicon "kebab-horizontal" aria-label="Artifact actions" %} next to the artifact.
1. Click **Delete**.

## Safely previewing an HTML artifact

On {% data variables.product.prodname_dotcom_the_website %}, HTML artifacts open in **Source** view so you can inspect the code before running it. To render the HTML, select **Preview**. {% data variables.product.github %} renders the preview in a restricted sandbox. The interface warns that previewing runs user-provided code that may send its contents to external sites. Review the source and only preview HTML from sources you trust. To return to the source, select **Source**.

## Using artifacts with agents

When you use the {% data variables.copilot.github_copilot_app_short %} to work on an issue, artifacts created during the session are automatically attached to the issue. You can also ask {% data variables.product.prodname_copilot_short %} to create a specific artifact, such as an implementation plan, root cause analysis, or summary of historical context.

Agents and developer tools can also use the built-in {% data variables.product.github %} MCP server, the REST API, or {% data variables.product.prodname_cli %} to read and manage artifacts. 

## Managing artifacts with {% data variables.product.prodname_cli %}

Issue artifact commands require {% data variables.product.prodname_cli %} 2.103.0 or later. 

For more information about issue artifact commands, see the [`gh issue artifact` reference](https://cli.github.com/manual/gh_issue_artifact).

## Further reading

* [AUTOTITLE](/rest/issues/artifacts) in the REST API documentation
* [AUTOTITLE](/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
