---
title: Using Copilot cloud agent via the API
shortTitle: Use cloud agent via the API
intro: 'You can start and manage {% data variables.copilot.copilot_cloud_agent %} tasks programmatically using the REST API.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Integrate Copilot with your tools
---

You can use the agent tasks API to integrate {% data variables.copilot.copilot_cloud_agent_short %} into your own tools and workflows. For example, you can start a new task, list existing tasks, or check the status of a task.

In addition, you can use the REST and GraphQL APIs for issues to assign issues to {% data variables.product.prodname_copilot_short %}.

## Using the agent tasks API

> [!NOTE]
> The agent tasks API is in {% data variables.release-phases.public_preview %} and subject to change.

### Authentication

The agent tasks API only supports user-to-server tokens. You can authenticate using a {% data variables.product.pat_generic %}, a {% data variables.product.prodname_oauth_app %} token or a {% data variables.product.prodname_github_app %} user-to-server token.

Server-to-server tokens, such as {% data variables.product.prodname_github_app %} installation access tokens, are not supported.

### Starting a task via the API

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

### Listing tasks

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

### Checking the status of a task

To check the status of a specific task, send a `GET` request with the task ID:

```shell copy
curl -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: {{ defaultRestApiVersion }}" \
  -H "Authorization: Bearer YOUR-TOKEN" \
  https://api.github.com/agents/repos/OWNER/REPO/tasks/TASK-ID
```

Replace `TASK-ID` with the ID of the task you want to check. You can get this ID from the response when you create a task or list tasks. The response includes the task's current `state`, which can be one of: `queued`, `in_progress`, `completed`, `failed`, `idle`, `waiting_for_user`, `timed_out`, or `cancelled`.


## Using the issues API

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

You can assign issues to {% data variables.product.prodname_copilot_short %} using either the GraphQL API or the REST API. Both APIs support an optional Agent Assignment input to customize the task:

| GraphQL parameter | REST parameter | Description |
| --- | --- | --- |
| `targetRepositoryId` | `target_repo` | The repository where {% data variables.product.prodname_copilot_short %} will work |
| `baseRef` | `base_branch` | The branch that {% data variables.product.prodname_copilot_short %} will branch from |
| `customInstructions` | `custom_instructions` | Additional instructions for {% data variables.product.prodname_copilot_short %} |
| `customAgent` | `custom_agent` | A {% data variables.copilot.copilot_custom_agent_short %} to use for the task |
| `model` | `model` | The model for {% data variables.product.prodname_copilot_short %} to use |

### Using the GraphQL API

> [!NOTE]
> You must include the `GraphQL-Features` header with the values `issues_copilot_assignment_api_support` and `coding_agent_model_selection`.

You can use the following GraphQL mutations to assign issues to {% data variables.product.prodname_copilot_short %}:

* [`updateIssue`](/graphql/reference/issues#mutation-updateissue)
* [`createIssue`](/graphql/reference/issues#mutation-createissue)
* [`addAssigneesToAssignable`](/graphql/reference/issues#mutation-addassigneestoassignable)
* [`replaceActorsForAssignable`](/graphql/reference/issues#mutation-replaceactorsforassignable)

#### Creating and assigning a new issue

1. Make sure you're authenticating with the API using a user token, for example a {% data variables.product.pat_generic %} or a {% data variables.product.prodname_github_app %} user-to-server token.

   > [!NOTE]
   > If using a {% data variables.product.pat_v2 %}, it needs the following permissions to assign {% data variables.product.prodname_copilot_short %} to an issue:
   > * Read access to metadata
   > * Read and write access to actions, contents, issues and pull requests
   >
   > If using a {% data variables.product.pat_v1 %}, it needs the `repo` scope to assign {% data variables.product.prodname_copilot_short %} to an issue.

1. Verify that {% data variables.copilot.copilot_cloud_agent %} is enabled in the repository by checking if the repository's `suggestedActors` in the GraphQL API includes {% data variables.product.prodname_copilot_short %}. Replace `octo-org` with the repository owner, and `octo-repo` with the repository name.

    ```graphql copy
    query {
      repository(owner: "octo-org", name: "octo-repo") {
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            __typename

            ... on Bot {
              id
            }

            ... on User {
              id
            }
          }
        }
      }
    }
    ```

    If {% data variables.copilot.copilot_cloud_agent %} is enabled for the user and in the repository, the first node returned from the query will have the `login` value `copilot-swe-agent`.

1. Make a note of the `id` value of this login.

1. Fetch the GraphQL global ID of the repository you want to create the issue in, replacing `octo-org` with the repository owner, and `octo-repo` with the repository name.

    ```graphql copy
    query {
      repository(owner: "octo-org", name: "octo-repo") {
        id
      }
    }
    ```

1. Create the issue with the `createIssue` mutation. Replace `REPOSITORY_ID` with the ID returned from the previous step, and `BOT_ID` with the ID returned from the step before that. You can optionally include the `agentAssignment` input to customize the task.

    ```shell copy
    gh api graphql -f query='mutation {
      createIssue(input: {
        repositoryId: "REPOSITORY_ID",
        title: "Implement comprehensive unit tests",
        body: "DETAILS",
        assigneeIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Add comprehensive test coverage",
          customAgent: "",
          model: ""
        }
      }) {
        issue {
          id
          title
          assignees(first: 10) {
            nodes {
              login
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```

#### Assigning an existing issue

1. Make sure you're authenticating with the API using a user token, for example a {% data variables.product.pat_generic %} or a {% data variables.product.prodname_github_app %} user-to-server token.
1. Verify that {% data variables.copilot.copilot_cloud_agent %} is enabled in the repository by checking if the repository's `suggestedActors` in the GraphQL API includes {% data variables.product.prodname_copilot_short %}. Replace `octo-org` with the repository owner, and `octo-repo` with the repository name.

    ```graphql copy
    query {
      repository(owner: "monalisa", name: "octocat") {
        suggestedActors(capabilities: [CAN_BE_ASSIGNED], first: 100) {
          nodes {
            login
            __typename

            ... on Bot {
              id
            }

            ... on User {
              id
            }
          }
        }
      }
    }
    ```

    If {% data variables.copilot.copilot_cloud_agent %} is enabled for the user and in the repository, the first node returned from the query will have the `login` value `copilot-swe-agent`.

1. Fetch the GraphQL global ID of the issue you want to assign to {% data variables.product.prodname_copilot_short %}, replacing `monalisa` with the repository owner, `octocat` with the name and `9000` with the issue number.

    ```graphql copy
    query {
      repository(owner: "monalisa", name: "octocat") {
        issue(number: 9000) {
          id
          title
        }
      }
    }
    ```

1. Assign the existing issue to {% data variables.product.prodname_copilot_short %} using the `replaceActorsForAssignable` mutation. Replace `ISSUE_ID` with the ID returned from the previous step, `BOT_ID` with the ID returned from the step before that, and `REPOSITORY_ID` with the repository ID. You can optionally include the `agentAssignment` input to customize the task.

    ```shell copy
    gh api graphql -f query='mutation {
      replaceActorsForAssignable(input: {
        assignableId: "ISSUE_ID",
        actorIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Fix the reported bug",
          customAgent: "",
          model: ""
        }
      }) {
        assignable {
          ... on Issue {
            id
            title
            assignees(first: 10) {
              nodes {
                login
              }
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```

1. Alternatively, you can use the `updateIssue` mutation to update an existing issue and assign it to {% data variables.product.prodname_copilot_short %}. Replace `ISSUE_ID` with the issue ID and `BOT_ID` with the bot ID.

    ```shell copy
    gh api graphql -f query='mutation {
      updateIssue(input: {
        id: "ISSUE_ID",
        assigneeIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Update feature implementation",
          customAgent: "",
          model: ""
        }
      }) {
        issue {
          id
          title
          assignees(first: 10) {
            nodes {
              login
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```

1. You can also use the `addAssigneesToAssignable` mutation to add {% data variables.product.prodname_copilot_short %} to an existing issue while keeping other assignees. Replace `ISSUE_ID` with the issue ID and `BOT_ID` with the bot ID.

    ```shell copy
    gh api graphql -f query='mutation {
      addAssigneesToAssignable(input: {
        assignableId: "ISSUE_ID",
        assigneeIds: ["BOT_ID"],
        agentAssignment: {
          targetRepositoryId: "REPOSITORY_ID",
          baseRef: "main",
          customInstructions: "Collaborate on this task",
          customAgent: "",
          model: ""
        }
      }) {
        assignable {
          ... on Issue {
            id
            title
            assignees(first: 10) {
              nodes {
                login
              }
            }
          }
        }
      }
    }' -H 'GraphQL-Features: issues_copilot_assignment_api_support,coding_agent_model_selection'
    ```

### Using the REST API

You can use the following REST API endpoints to assign issues to {% data variables.product.prodname_copilot_short %}:

* [Add assignees to an issue](/rest/issues/assignees#add-assignees-to-an-issue)
* [Create an issue](/rest/issues/issues#create-an-issue)
* [Update an issue](/rest/issues/issues#update-an-issue)

#### Adding assignees to an existing issue

```shell copy
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/issues/ISSUE_NUMBER/assignees \
  --input - <<< '{
  "assignees": ["copilot-swe-agent[bot]"],
  "agent_assignment": {
    "target_repo": "OWNER/REPO",
    "base_branch": "main",
    "custom_instructions": "",
    "custom_agent": "",
    "model": ""
  }
}'
```

#### Creating a new issue

```shell copy
gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/issues \
  --input - <<< '{
  "title": "Issue title",
  "body": "Issue description.",
  "assignees": ["copilot-swe-agent[bot]"],
  "agent_assignment": {
    "target_repo": "OWNER/REPO",
    "base_branch": "main",
    "custom_instructions": "",
    "custom_agent": "",
    "model": ""
  }
}'
```

#### Updating an existing issue

```shell copy
gh api \
  --method PATCH \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/issues/ISSUE_NUMBER \
  --input - <<< '{
  "assignees": ["copilot-swe-agent[bot]"],
  "agent_assignment": {
    "target_repo": "OWNER/REPO",
    "base_branch": "main",
    "custom_instructions": "",
    "custom_agent": "",
    "model": ""
  }
}'
```


## Further reading

* [AUTOTITLE](/rest/agent-tasks/agent-tasks)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions)
