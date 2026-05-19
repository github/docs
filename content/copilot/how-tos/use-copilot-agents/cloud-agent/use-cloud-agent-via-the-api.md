---
title: Using Copilot cloud agent via the API
shortTitle: Use cloud agent via the API
intro: 'You can start and manage {% data variables.copilot.copilot_cloud_agent %} tasks programmatically using the REST API.'
product: '{% data reusables.gated-features.copilot-business-and-enterprise %}'
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
---

> [!NOTE]
> The agent tasks API is in {% data variables.release-phases.public_preview %} and subject to change.

You can use the agent tasks API to integrate {% data variables.copilot.copilot_cloud_agent_short %} into your own tools and workflows. For example, you can start a new task, list existing tasks, or check the status of a task.

For the full API reference, see [AUTOTITLE](/rest/agent-tasks/agent-tasks).

## Authentication

The agent tasks API only supports user-to-server tokens. You can authenticate using a {% data variables.product.pat_generic %}, a {% data variables.product.prodname_oauth_app %} token or a {% data variables.product.prodname_github_app %} user-to-server token.

Server-to-server tokens, such as {% data variables.product.prodname_github_app %} installation access tokens, are not supported.

## Starting a task via the API

To start a new {% data variables.copilot.copilot_cloud_agent_short %} task, send a `POST` request to `/agents/repos/{owner}/{repo}/tasks`. The only required parameter is `prompt`, which is the prompt for the agent.

```shell copy
curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: {{ defaultRestApiVersion }}" \
  -H "Authorization: Bearer YOUR-TOKEN" \
  https://api.github.com/agents/repos/OWNER/REPO/tasks \
  -d '{
    "prompt": "Fix the login button on the homepage",
    "base_ref": "main"
  }'
```

Replace the following placeholder values:

* `YOUR-TOKEN`: A {% data variables.product.pat_generic %} or {% data variables.product.prodname_github_app %} user-to-server token.
* `OWNER`: The account owner of the repository.
* `REPO`: The name of the repository.

You can also include the following optional parameters in the request body:

* `base_ref`: The base branch for the new branch and pull request.
* `model`: The AI model to use for the task. If omitted, {% data variables.copilot.copilot_auto_model_selection_short %} is used. For more information about supported models, see [AUTOTITLE](/rest/agent-tasks/agent-tasks).
* `create_pull_request`: A boolean that determines whether to create a pull request for the task.

## Listing tasks

You can list tasks for a specific repository or across all repositories you have access to.

To list tasks for a specific repository:

```shell copy
curl -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: {{ defaultRestApiVersion }}" \
  -H "Authorization: Bearer YOUR-TOKEN" \
  https://api.github.com/agents/repos/OWNER/REPO/tasks
```

To list your tasks across all repositories:

```shell copy
curl -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: {{ defaultRestApiVersion }}" \
  -H "Authorization: Bearer YOUR-TOKEN" \
  https://api.github.com/agents/tasks
```

## Checking the status of a task

To check the status of a specific task, send a `GET` request with the task ID:

```shell copy
curl -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: {{ defaultRestApiVersion }}" \
  -H "Authorization: Bearer YOUR-TOKEN" \
  https://api.github.com/agents/repos/OWNER/REPO/tasks/TASK-ID
```

Replace `TASK-ID` with the ID of the task you want to check. You can get this ID from the response when you create a task or list tasks. The response includes the task's current `state`, which can be one of: `queued`, `in_progress`, `completed`, `failed`, `idle`, `waiting_for_user`, `timed_out`, or `cancelled`.

## Further reading

* [AUTOTITLE](/rest/agent-tasks/agent-tasks)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions)
