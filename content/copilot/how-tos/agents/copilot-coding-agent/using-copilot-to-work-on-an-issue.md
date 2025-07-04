---
title: Using Copilot to work on an issue
intro: 'Learn how to assign issues to {% data variables.product.prodname_copilot %}, monitor progress as {% data variables.product.prodname_copilot_short %} works on the issue, and then use pull request review comments to prompt {% data variables.product.prodname_copilot_short %} to iterate on its work.'
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_cta=Copilot+plans+signup&ref_loc=using+copilot+to+work+on+an+issue&ref_page=docs" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
type: how_to
redirect_from:
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/using-copilot-to-work-on-an-issue
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/using-copilot-to-work-on-an-issue
  - /early-access/copilot/coding-agent/using-copilot-coding-agent
  - /copilot/using-github-copilot/coding-agent/using-copilot-to-work-on-an-issue
---

> [!NOTE]
> {% data reusables.copilot.coding-agent.preview-note-text %}
>
> For an overview of {% data variables.copilot.copilot_coding_agent %}, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

## Introduction

You can assign a {% data variables.product.github %} issue to {% data variables.product.prodname_copilot_short %}, just like you would with a human software developer. {% data variables.product.prodname_copilot_short %} will start working on the issue, raise a pull request and when it's finished working, request a review from you. For more information, see [AUTOTITLE](/copilot/concepts/about-copilot-coding-agent).

If you haven't used {% data variables.product.prodname_copilot_short %} to work on an issue before, you can find some useful advice for getting good results in [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks).

## Assigning an issue to {% data variables.product.prodname_copilot_short %}

You can ask {% data variables.product.prodname_copilot_short %} to start working on an issue by assigning the issue to {% data variables.product.prodname_copilot_short %}.

You can assign an issue to {% data variables.product.prodname_copilot_short %}:

* On {% data variables.product.prodname_dotcom_the_website %} (see the [next section](#assigning-an-issue-to-copilot-on-githubcom))
* On [{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)
* Via the {% data variables.product.github %} API (see [later in this article](#assigning-an-issue-to-copilot-via-the-github-api))
* Using {% data variables.product.prodname_cli %} (see [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit))

### Assigning an issue to {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %}

You can assign an issue to {% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %} in exactly the same way as you assign another user.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}

1. Open the issue that you want to assign to {% data variables.product.prodname_copilot_short %}.
1. In the right side menu, click **Assignees**.

   ![Screenshot of the right sidebar of an issue. A header, labeled "Assignees", is outlined in dark orange.](/assets/images/help/issues/assignee-menu.png)

1. Click **Copilot** from assignees list.

   ![Screenshot of "Assignees" window on an issue. Copilot is available in the list.](/assets/images/help/copilot/coding-agent/assign-to-copilot.png)

> [!TIP]
> When you assign an issue to {% data variables.product.prodname_copilot_short %}, it gets sent the issue title, description, and any comments that currently exist. After assigning the issue, {% data variables.product.prodname_copilot_short %} will not be aware of, and therefore won't react to, any further comments that are added to the issue. If you have more information, or changes to the original requirement, add this as a comment in the pull request that {% data variables.product.prodname_copilot_short %} raises.

You can also assign issues to {% data variables.product.prodname_copilot_short %} from other places on {% data variables.product.prodname_dotcom_the_website %}:

* From the list of issues on a repository's **{% octicon "issue-opened" aria-hidden="true" aria-label="issue-opened" %} Issues** page.
* When viewing an issue in {% data variables.product.github %} {% data variables.projects.projects_v2_caps %}.

### Assigning an issue to {% data variables.product.prodname_copilot_short %} via the {% data variables.product.github %} API

You can assign an issue to {% data variables.product.prodname_copilot_short %} by making a request to the GraphQL API.

1. Make sure you're authenticating with the API using a user token, for example a {% data variables.product.pat_generic %} or a {% data variables.product.prodname_github_app %} user-to-server token.
1. Verify that {% data variables.copilot.copilot_coding_agent %} is enabled in the repository by checking if the repository's `suggestedActors` in the GraphQL API includes {% data variables.product.prodname_copilot_short %}. Replace `monalisa` with the repository owner, and `octocat` with the name.

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

    If {% data variables.copilot.copilot_coding_agent %} is enabled for the user and in the repository, the first node returned from the query will have the `login` value `copilot-swe-agent`.

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

1. Assign the issue to {% data variables.product.prodname_copilot_short %} using the `replaceActorsForAssignable` GraphQL mutation. Replace `ISSUE_ID` with the ID returned from the previous step, and `BOT_ID` with the ID returned from the step before that.

    ```graphql copy
    mutation {
      replaceActorsForAssignable(input: {assignableId: "ISSUE_ID", assigneeIds: ["BOT_ID"]}) {
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
    }
    ```

## Tracking {% data variables.product.prodname_copilot_short %}'s progress on your issue

Shortly after you assign an issue to {% data variables.product.prodname_copilot_short %}, {% data variables.product.prodname_copilot_short %} will leave an 👀 reaction on the issue.

![Screenshot of an issue assigned to {% data variables.product.prodname_copilot_short %}. {% data variables.product.prodname_copilot_short %} has left an eyes icon reaction.](/assets/images/help/copilot/coding-agent/issue-assigned-to-copilot.png)

A few seconds later, {% data variables.product.prodname_copilot_short %} will open a draft pull request, linked to your original issue. An event will appear in the issue's timeline, linking to the pull request.

![Screenshot of an issue with a timeline event showing that a linked pull request has been opened.](/assets/images/help/copilot/coding-agent/issue-link-to-pr.png)

{% data variables.product.prodname_copilot_short %} will start an **agent session** to work on your issue. A "{% data variables.product.prodname_copilot_short %} started work" event will appear in the pull request timeline, and as {% data variables.product.prodname_copilot_short %} works, it will update the pull request body with regular status updates, and push commits to the branch.

All of your sessions, past and present, can be seen and tracked from the [Agents page](https://github.com/copilot/agents). See [AUTOTITLE](/copilot/how-tos/agents/copilot-coding-agent/tracking-copilots-sessions).

![Screenshot of a pull request with a series of timeline events, including "Copilot started work."](/assets/images/help/copilot/coding-agent/copilot-started-work.png)

If you want to check what {% data variables.product.prodname_copilot_short %} is doing, click **View session**. The session log viewer is displayed, showing you a live log as {% data variables.product.prodname_copilot_short %} works on the issue. If you want to stop {% data variables.product.prodname_copilot_short %} from working on the issue, click **Stop session**. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/using-the-copilot-coding-agent-logs).

Once {% data variables.product.prodname_copilot_short %} has finished, the agent session will end, and {% data variables.product.prodname_copilot_short %} will request a review from you, triggering a notification. In addition, a "{% data variables.product.prodname_copilot_short %} finished work" event will appear in the pull request timeline.

![Screenshot of a pull request timeline with "Copilot requested review" and "Copilot finished work" events.](/assets/images/help/copilot/coding-agent/copilot-finished-work.png)

## Working with {% data variables.product.prodname_copilot_short %} on a pull request

After {% data variables.product.prodname_copilot_short %} has finished working on the issue, you should review the pull request thoroughly and comment on anything that needs changed. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot).

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks)
* [AUTOTITLE](/copilot/using-github-copilot/coding-agent/troubleshooting-copilot-coding-agent)
