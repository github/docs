GitHub Docs
GitHub Actions/Learn GitHub Actions/Events that trigger workflows
In this article
Configuring workflow events
Example: Using a single event
Example: Using a list of events
Example: Using multiple events with activity types or configuration
Scheduled events
schedule
Manual events
workflow_dispatch
repository_dispatch
Workflow reuse events
workflow_call
Webhook events
branch_protection_rule
check_run
check_suite
create
delete
deployment
deployment_status
discussion
discussion_comment
fork
gollum
issue_comment
issues
label
milestone
page_build
project
project_card
project_column
public
pull_request
pull_request_review
pull_request_review_comment
pull_request_target
push
registry_package
release
status
watch
workflow_run
Triggering new workflows using a personal access token
Events that trigger workflows
You can configure your workflows to run when specific activity on GitHub happens, at a scheduled time, or when an event outside of GitHub occurs.

Configuring workflow events
You can configure workflows to run for one or more events using the on workflow syntax. For more information, see "Workflow syntax for GitHub Actions."

Example: Using a single event
# Triggered when code is pushed to any branch in a repository
on: push
Example: Using a list of events
# Triggers the workflow on push or pull request events
on: [push, pull_request]
Example: Using multiple events with activity types or configuration
If you need to specify activity types or configuration for an event, you must configure each event separately. You must append a colon (:) to all events, including events without configuration.

on:
  # Trigger the workflow on push or pull request,
  # but only for the main branch
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  # Also trigger on page_build, as well as release created events
  page_build:
  release:
    types: # This configuration does not affect the page_build event above
      - created
Note: You cannot trigger new workflow runs using the GITHUB_TOKEN. For more information, see "Triggering new workflows using a personal access token."

The following steps occur to trigger a workflow run:

An event occurs on your repository, and the resulting event has an associated commit SHA and Git ref.

The .github/workflows directory in your repository is searched for workflow files at the associated commit SHA or Git ref. The workflow files must be present in that commit SHA or Git ref to be considered.

For example, if the event occurred on a particular repository branch, then the workflow files must be present in the repository on that branch.

The workflow files for that commit SHA and Git ref are inspected, and a new workflow run is triggered for any workflows that have on: values that match the triggering event.

The workflow runs on your repository's code at the same commit SHA and Git ref that triggered the event. When a workflow runs, GitHub sets the GITHUB_SHA (commit SHA) and GITHUB_REF (Git ref) environment variables in the runner environment. For more information, see "Using environment variables."

Scheduled events
The schedule event allows you to trigger a workflow at a scheduled time.

Note: The schedule event can be delayed during periods of high loads of GitHub Actions workflow runs. High load times include the start of every hour. To decrease the chance of delay, schedule your workflow to run at a different time of the hour.

schedule
Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
n/a	n/a	Last commit on default branch	Default branch
You can schedule a workflow to run at specific UTC times using POSIX cron syntax. Scheduled workflows run on the latest commit on the default or base branch. The shortest interval you can run scheduled workflows is once every 5 minutes.

This example triggers the workflow every day at 5:30 and 17:30 UTC:

on:
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'

Cron syntax has five fields separated by a space, and each field represents a unit of time.

┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
You can use these operators in any of the five fields:

Operator	Description	Example
*	Any value	* * * * * runs every minute of every day.
,	Value list separator	2,10 4,5 * * * runs at minute 2 and 10 of the 4th and 5th hour of every day.
-	Range of values	0 4-6 * * * runs at minute 0 of the 4th, 5th, and 6th hour.
/	Step values	20/15 * * * * runs every 15 minutes starting from minute 20 through 59 (minutes 20, 35, and 50).
Note: GitHub Actions does not support the non-standard syntax @yearly, @monthly, @weekly, @daily, @hourly, and @reboot.

You can use crontab guru to help generate your cron syntax and confirm what time it will run. To help you get started, there is also a list of crontab guru examples.

Notifications for scheduled workflows are sent to the user who last modified the cron syntax in the workflow file. For more information, please see "Notifications for workflow runs."

Manual events
You can manually trigger workflow runs. To trigger specific workflows in a repository, use the workflow_dispatch event. To trigger more than one workflow in a repository and create custom events and event types, use the repository_dispatch event.

workflow_dispatch
Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
workflow_dispatch	n/a	Last commit on the GITHUB_REF branch	Branch that received dispatch
You can configure custom-defined input properties, default input values, and required inputs for the event directly in your workflow. When the workflow runs, you can access the input values in the github.event.inputs context. For more information, see "Contexts."

You can manually trigger a workflow run using the GitHub API and from GitHub. For more information, see "Manually running a workflow."

When you trigger the event on GitHub, you can provide the ref and any inputs directly on GitHub. For more information, see "Using inputs and outputs with an action."

To trigger the custom workflow_dispatch webhook event using the REST API, you must send a POST request to a GitHub API endpoint and provide the ref and any required inputs. For more information, see the "Create a workflow dispatch event" REST API endpoint.

Example
To use the workflow_dispatch event, you need to include it as a trigger in your GitHub Actions workflow file. The example below only runs the workflow when it's manually triggered:

on: workflow_dispatch
Example workflow configuration
This example defines the name and home inputs and prints them using the github.event.inputs.name and github.event.inputs.home contexts. If a home isn't provided, the default value 'The Octoverse' is printed.

name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Hello ${{ github.event.inputs.name }}!"
          echo "- in ${{ github.event.inputs.home }}!"
repository_dispatch
Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
repository_dispatch	n/a	Last commit on default branch	Default branch
Note: This event will only trigger a workflow run if the workflow file is on the default branch.

You can use the GitHub API to trigger a webhook event called repository_dispatch when you want to trigger a workflow for activity that happens outside of GitHub. For more information, see "Create a repository dispatch event."

To trigger the custom repository_dispatch webhook event, you must send a POST request to a GitHub API endpoint and provide an event_type name to describe the activity type. To trigger a workflow run, you must also configure your workflow to use the repository_dispatch event.

Example
By default, all event_types trigger a workflow to run. You can limit your workflow to run when a specific event_type value is sent in the repository_dispatch webhook payload. You define the event types sent in the repository_dispatch payload when you create the repository dispatch event.

on:
  repository_dispatch:
    types: [opened, deleted]
Workflow reuse events
workflow_call is a keyword used as the value of on in a workflow, in the same way as an event. It indicates that a workflow can be called from another workflow. For more information see, "Reusing workflows."

workflow_call
Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
Same as the caller workflow	n/a	Same as the caller workflow	Same as the caller workflow
Example
To make a workflow reusable it must include workflow_call as one of the values of on. The example below only runs the workflow when it's called from another workflow:

on: workflow_call
Webhook events
You can configure your workflow to run when webhook events are generated on GitHub. Some events have more than one activity type that triggers the event. If more than one activity type triggers the event, you can specify which activity types will trigger the workflow to run. For more information, see "Webhooks."

Not all webhook events trigger workflows. For the complete list of available webhook events and their payloads, see "Webhook events and payloads."

branch_protection_rule
Runs your workflow anytime the branch_protection_rule event occurs. More than one activity type triggers this event. For information about the GraphQL API, see "BranchProtectionRule."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
branch_protection_rule	- created
- edited
- deleted	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a branch protection rule has been created or deleted.

on:
  branch_protection_rule:
    types: [created, deleted]
check_run
Runs your workflow anytime the check_run event occurs. More than one activity type triggers this event. For information about the REST API, see "Check runs."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
check_run	- created
- rerequested
- completed	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a check run has been rerequested or completed.

on:
  check_run:
    types: [rerequested, completed]
check_suite
Runs your workflow anytime the check_suite event occurs. More than one activity type triggers this event. For information about the REST API, see "Check suites."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Note: To prevent recursive workflows, this event does not trigger workflows if the check suite was created by GitHub Actions.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
check_suite	- completed
- requested
- rerequested
Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a check suite has been rerequested or completed.

on:
  check_suite:
    types: [rerequested, completed]
create
Runs your workflow anytime someone creates a branch or tag, which triggers the create event. For information about the REST API, see "Create a reference."

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
create	n/a	Last commit on the created branch or tag	Branch or tag created
For example, you can run a workflow when the create event occurs.

on:
  create
delete
Runs your workflow anytime someone deletes a branch or tag, which triggers the delete event. For information about the REST API, see "Delete a reference."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
delete	n/a	Last commit on default branch	Default branch
For example, you can run a workflow when the delete event occurs.

on:
  delete
deployment
Runs your workflow anytime someone creates a deployment, which triggers the deployment event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see "Deployments."

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
deployment	n/a	Commit to be deployed	Branch or tag to be deployed (empty if commit)
For example, you can run a workflow when the deployment event occurs.

on:
  deployment
deployment_status
Runs your workflow anytime a third party provides a deployment status, which triggers the deployment_status event. Deployments created with a commit SHA may not have a Git ref. For information about the REST API, see "Create a deployment status."

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
deployment_status	n/a	Commit to be deployed	Branch or tag to be deployed (empty if commit)
For example, you can run a workflow when the deployment_status event occurs.

on:
  deployment_status
Note: When a deployment status's state is set to inactive, a webhook event will not be created.

discussion
Runs your workflow anytime the discussion event occurs. More than one activity type triggers this event. For information about the GraphQL API, see "Discussions."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
discussion	- created
- edited
- deleted
- transferred
- pinned
- unpinned
- labeled
- unlabeled
- locked
- unlocked
- category_changed
- answered
- unanswered	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a discussion has been created, edited, or answered.

on:
  discussion:
    types: [created, edited, answered]
discussion_comment
Runs your workflow anytime the discussion_comment event occurs. More than one activity type triggers this event. For information about the GraphQL API, see "Discussions."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
discussion_comment	- created
- edited
- deleted
Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when an issue comment has been created or deleted.

on:
  discussion_comment:
    types: [created, deleted]
fork
Runs your workflow anytime when someone forks a repository, which triggers the fork event. For information about the REST API, see "Create a fork."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
fork	n/a	Last commit on default branch	Default branch
For example, you can run a workflow when the fork event occurs.

on:
  fork
gollum
Runs your workflow when someone creates or updates a Wiki page, which triggers the gollum event.

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
gollum	n/a	Last commit on default branch	Default branch
For example, you can run a workflow when the gollum event occurs.

on:
  gollum
issue_comment
Runs your workflow anytime the issue_comment event occurs. More than one activity type triggers this event. For information about the REST API, see "Issue comments."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
issue_comment	- created
- edited
- deleted
Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when an issue comment has been created or deleted.

on:
  issue_comment:
    types: [created, deleted]
The issue_comment event occurs for comments on both issues and pull requests. To determine whether the issue_comment event was triggered from an issue or pull request, you can check the event payload for the issue.pull_request property and use it as a condition to skip a job.

For example, you can choose to run the pr_commented job when comment events occur in a pull request, and the issue_commented job when comment events occur in an issue.

on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: ${{ github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on PR #${{ github.event.issue.number }}"

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: ${{ !github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Comment on issue #${{ github.event.issue.number }}"
issues
Runs your workflow anytime the issues event occurs. More than one activity type triggers this event. For information about the REST API, see "Issues."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
issues	- opened
- edited
- deleted
- transferred
- pinned
- unpinned
- closed
- reopened
- assigned
- unassigned
- labeled
- unlabeled
- locked
- unlocked
- milestoned
- demilestoned	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when an issue has been opened, edited, or milestoned.

on:
  issues:
    types: [opened, edited, milestoned]
label
Runs your workflow anytime the label event occurs. More than one activity type triggers this event. For information about the REST API, see "Labels."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
label	- created
- edited
- deleted
Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a label has been created or deleted.

on:
  label:
    types: [created, deleted]
milestone
Runs your workflow anytime the milestone event occurs. More than one activity type triggers this event. For information about the REST API, see "Milestones."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
milestone	- created
- closed
- opened
- edited
- deleted
Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a milestone has been opened or deleted.

on:
  milestone:
    types: [opened, deleted]
page_build
Runs your workflow anytime someone pushes to a GitHub Pages-enabled branch, which triggers the page_build event. For information about the REST API, see "Pages."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
page_build	n/a	Last commit on default branch	n/a
For example, you can run a workflow when the page_build event occurs.

on:
  page_build
project
Runs your workflow anytime the project event occurs. More than one activity type triggers this event. For information about the REST API, see "Projects."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
project	- created
- updated
- closed
- reopened
- edited
- deleted
Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a project has been created or deleted.

on:
  project:
    types: [created, deleted]
project_card
Runs your workflow anytime the project_card event occurs. More than one activity type triggers this event. For information about the REST API, see "Project cards."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
project_card	- created
- moved
- converted to an issue
- edited
- deleted	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a project card has been opened or deleted.

on:
  project_card:
    types: [created, deleted]
project_column
Runs your workflow anytime the project_column event occurs. More than one activity type triggers this event. For information about the REST API, see "Project columns."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
project_column	- created
- updated
- moved
- deleted	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a project column has been created or deleted.

on:
  project_column:
    types: [created, deleted]
public
Runs your workflow anytime someone makes a private repository public, which triggers the public event. For information about the REST API, see "Edit repositories."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
public	n/a	Last commit on default branch	Default branch
For example, you can run a workflow when the public event occurs.

on:
  public
pull_request
Runs your workflow anytime the pull_request event occurs. More than one activity type triggers this event. For information about the REST API, see "Pull requests."

Notes:

By default, a workflow only runs when a pull_request's activity type is opened, synchronize, or reopened. To trigger workflows for more activity types, use the types keyword.
Workflows will not run on pull_request activity if the pull request has a merge conflict. The merge conflict must be resolved first.
Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
pull_request	- assigned
- unassigned
- labeled
- unlabeled
- opened
- edited
- closed
- reopened
- synchronize
- converted_to_draft
- ready_for_review
- locked
- unlocked
- review_requested
- review_request_removed
- auto_merge_enabled
- auto_merge_disabled	Last merge commit on the GITHUB_REF branch	PR merge branch refs/pull/:prNumber/merge
You extend or limit the default activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a pull request has been assigned, opened, synchronize, or reopened.

on:
  pull_request:
    types: [assigned, opened, synchronize, reopened]
Pull request events for forked repositories
Note: Workflows do not run on private base repositories when you open a pull request from a forked repository.

When you create a pull request from a forked repository to the base repository, GitHub sends the pull_request event to the base repository and no pull request events occur on the forked repository.

Workflows don't run on forked repositories by default. You must enable GitHub Actions in the Actions tab of the forked repository.

When a first-time contributor submits a pull request to a public repository, a maintainer with write access may need to approve running workflows on the pull request. For more information, see "Approving workflow runs from public forks."

With the exception of GITHUB_TOKEN, secrets are not passed to the runner when a workflow is triggered from a forked repository. The permissions for the GITHUB_TOKEN in forked repositories is read-only. For more information, see "Authenticating with the GITHUB_TOKEN."

Note: Workflows triggered by Dependabot pull requests are treated as though they are from a forked repository, and are also subject to these restrictions.

pull_request_review
Runs your workflow anytime the pull_request_review event occurs. More than one activity type triggers this event. For information about the REST API, see "Pull request reviews."

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
pull_request_review	- submitted
- edited
- dismissed	Last merge commit on the GITHUB_REF branch	PR merge branch refs/pull/:prNumber/merge
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a pull request review has been edited or dismissed.

on:
  pull_request_review:
    types: [edited, dismissed]
Pull request events for forked repositories
Note: Workflows do not run on private base repositories when you open a pull request from a forked repository.

When you create a pull request from a forked repository to the base repository, GitHub sends the pull_request event to the base repository and no pull request events occur on the forked repository.

Workflows don't run on forked repositories by default. You must enable GitHub Actions in the Actions tab of the forked repository.

When a first-time contributor submits a pull request to a public repository, a maintainer with write access may need to approve running workflows on the pull request. For more information, see "Approving workflow runs from public forks."

With the exception of GITHUB_TOKEN, secrets are not passed to the runner when a workflow is triggered from a forked repository. The permissions for the GITHUB_TOKEN in forked repositories is read-only. For more information, see "Authenticating with the GITHUB_TOKEN."

Note: Workflows triggered by Dependabot pull requests are treated as though they are from a forked repository, and are also subject to these restrictions.

pull_request_review_comment
Runs your workflow anytime a comment on a pull request's unified diff is modified, which triggers the pull_request_review_comment event. More than one activity type triggers this event. For information about the REST API, see Review comments.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
pull_request_review_comment	- created
- edited
- deleted	Last merge commit on the GITHUB_REF branch	PR merge branch refs/pull/:prNumber/merge
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a pull request review comment has been created or deleted.

on:
  pull_request_review_comment:
    types: [created, deleted]
Pull request events for forked repositories
Note: Workflows do not run on private base repositories when you open a pull request from a forked repository.

When you create a pull request from a forked repository to the base repository, GitHub sends the pull_request event to the base repository and no pull request events occur on the forked repository.

Workflows don't run on forked repositories by default. You must enable GitHub Actions in the Actions tab of the forked repository.

When a first-time contributor submits a pull request to a public repository, a maintainer with write access may need to approve running workflows on the pull request. For more information, see "Approving workflow runs from public forks."

With the exception of GITHUB_TOKEN, secrets are not passed to the runner when a workflow is triggered from a forked repository. The permissions for the GITHUB_TOKEN in forked repositories is read-only. For more information, see "Authenticating with the GITHUB_TOKEN."

Note: Workflows triggered by Dependabot pull requests are treated as though they are from a forked repository, and are also subject to these restrictions.

pull_request_target
This event runs in the context of the base of the pull request, rather than in the merge commit as the pull_request event does. This prevents executing unsafe workflow code from the head of the pull request that could alter your repository or steal any secrets you use in your workflow. This event allows you to do things like create workflows that label and comment on pull requests based on the contents of the event payload.

Warning: The pull_request_target event is granted a read/write repository token and can access secrets, even when it is triggered from a fork. Although the workflow runs in the context of the base of the pull request, you should make sure that you do not check out, build, or run untrusted code from the pull request with this event. Additionally, any caches share the same scope as the base branch, and to help prevent cache poisoning, you should not save the cache if there is a possibility that the cache contents were altered. For more information, see "Keeping your GitHub Actions and workflows secure: Preventing pwn requests" on the GitHub Security Lab website.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
pull_request_target	- assigned
- unassigned
- labeled
- unlabeled
- opened
- edited
- closed
- reopened
- synchronize
- converted_to_draft
- ready_for_review
- locked
- unlocked
- review_requested
- review_request_removed
- auto_merge_enabled
- auto_merge_disabled	Last commit on the PR base branch	PR base branch
By default, a workflow only runs when a pull_request_target's activity type is opened, synchronize, or reopened. To trigger workflows for more activity types, use the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a pull request has been assigned, opened, synchronize, or reopened.

on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
push
Note: The webhook payload available to GitHub Actions does not include the added, removed, and modified attributes in the commit object. You can retrieve the full commit object using the REST API. For more information, see "Get a commit".

Runs your workflow when someone pushes to a repository branch, which triggers the push event.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
push	n/a	Commit pushed, unless deleting a branch (when it's the default branch)	Updated ref
For example, you can run a workflow when the push event occurs.

on:
  push
registry_package
Runs your workflow anytime a package is published or updated. For more information, see "Managing packages with GitHub Packages."

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
registry_package	- published
- updated	Commit of the published package	Branch or tag of the published package
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a package has been published.

on:
  registry_package:
    types: [published]
release
Note: The release event is not triggered for draft releases.

Runs your workflow anytime the release event occurs. More than one activity type triggers this event. For information about the REST API, see "Releases."

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
release	- published
- unpublished
- created
- edited
- deleted
- prereleased
- released	Last commit in the tagged release	Tag of release
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when a release has been published.

on:
  release:
    types: [published]
Note: The prereleased type will not trigger for pre-releases published from draft releases, but the published type will trigger. If you want a workflow to run when stable and pre-releases publish, subscribe to published instead of released and prereleased.

status
Runs your workflow anytime the status of a Git commit changes, which triggers the status event. For information about the REST API, see Statuses.

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
status	n/a	Last commit on default branch	n/a
For example, you can run a workflow when the status event occurs.

on:
  status
watch
Runs your workflow anytime the watch event occurs. More than one activity type triggers this event. For information about the REST API, see "Starring."

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
watch	- started	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

For example, you can run a workflow when someone stars a repository, which is the started activity type that triggers the watch event.

on:
  watch:
    types: [started]
workflow_run
This event occurs when a workflow run is requested or completed, and allows you to execute a workflow based on the finished result of another workflow. A workflow run is triggered regardless of the result of the previous workflow.

For example, if your pull_request workflow generates build artifacts, you can create a new workflow that uses workflow_run to analyze the results and add a comment to the original pull request.

The workflow started by the workflow_run event is able to access secrets and write tokens, even if the previous workflow was not. This is useful in cases where the previous workflow is intentionally not privileged, but you need to take a privileged action in a later workflow.

Note: This event will only trigger a workflow run if the workflow file is on the default branch.

Webhook event payload	Activity types	GITHUB_SHA	GITHUB_REF
workflow_run	- completed
- requested	Last commit on default branch	Default branch
By default, all activity types trigger a workflow to run. You can limit your workflow runs to specific activity types using the types keyword. For more information, see "Workflow syntax for GitHub Actions."

If you need to filter branches from this event, you can use branches or branches-ignore.

In this example, a workflow is configured to run after the separate "Run Tests" workflow completes.

on:
  workflow_run:
    workflows: ["Run Tests"]
    branches: [main]
    types:
      - completed
      - requested
To run a workflow job conditionally based on the result of the previous workflow run, you can use the jobs.<job_id>.if or jobs.<job_id>.steps[*].if conditional combined with the conclusion of the previous run. For example:

on:
  workflow_run:
    workflows: ["Build"]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      ...
  on-failure:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    steps:
      ...
Triggering new workflows using a personal access token
When you use the repository's GITHUB_TOKEN to perform tasks on behalf of the GitHub Actions app, events triggered by the GITHUB_TOKEN will not create a new workflow run. This prevents you from accidentally creating recursive workflow runs. For example, if a workflow run pushes code using the repository's GITHUB_TOKEN, a new workflow will not run even when the repository contains a workflow configured to run when push events occur. For more information, see "Authenticating with the GITHUB_TOKEN."

If you would like to trigger a workflow from a workflow run, you can trigger the event using a personal access token. You'll need to create a personal access token and store it as a secret. To minimize your GitHub Actions usage costs, ensure that you don't create recursive or unintended workflow runs. For more information on storing a personal access token as a secret, see "Creating and storing encrypted secrets."

Did this doc help you?
Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Or, learn how to contribute.

Still need help?
Ask the GitHub community
Contact support
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
Developer API
Training
Blog
About

--
title: Quickstart for GitHub Actions
intro: 'Try out the features of {% data variables.product.prodname_actions %} in 5 minutes or less.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## Introduction

You only need a {% data variables.product.prodname_dotcom %} repository to create and run a {% data variables.product.prodname_actions %} workflow. In this guide, you'll add a workflow that demonstrates some of the essential features of {% data variables.product.prodname_actions %}. 

The following example shows you how {% data variables.product.prodname_actions %} jobs can be automatically triggered, where they run, and how they can interact with the code in your repository.

## Creating your first workflow

1. Create a `.github/workflows` directory in  your repository on {% data variables.product.prodname_dotcom %} if this directory does not already exist.
2. In the `.github/workflows` directory, create a file named `github-actions-demo.yml`. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
3. Copy the following YAML contents into the `github-actions-demo.yml` file:
    {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
          - name: Check out repository code
            uses: actions/checkout@v2
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. Scroll to the bottom of the page and select **Create a new branch for this commit and start a pull request**. Then, to create a pull request, click **Propose new file**.
    ![Commit workflow file](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Committing the workflow file to a branch in your repository triggers the `push` event and runs your workflow.

## Viewing your workflow results

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. In the left sidebar, click the workflow you want to see.

   ![Workflow list in left sidebar](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. From the list of workflow runs, click the name of the run you want to see.

   ![Name of workflow run](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Under **Jobs** , click the **Explore-GitHub-Actions** job.

   ![Locate job](/assets/images/help/repository/actions-quickstart-job.png)
1. The log shows you how each of the steps was processed. Expand any of the steps to view its details.

   ![Example workflow results](/assets/images/help/repository/actions-quickstart-logs.png)
   
   For example, you can see the list of files in your repository:
   ![Example action detail](/assets/images/help/repository/actions-quickstart-log-detail.png)
   
## More workflow templates

{% data reusables.actions.workflow-template-overview %}

## Next steps

The example workflow you just added runs each time code is pushed to the branch, and shows you how {% data variables.product.prodname_actions %} can work with the contents of your repository. But this is only the beginning of what you can do with {% data variables.product.prodname_actions %}:

- Your repository can contain multiple workflows that trigger different jobs based on different events. 
- You can use a workflow to install software testing apps and have them automatically test your code on {% data variables.product.prodname_dotcom %}'s runners. 

{% data variables.product.prodname_actions %} can help you automate nearly every aspect of your application development processes. Ready to get started? Here are some helpful resources for taking your next steps with {% data variables.product.prodname_actions %}:

- "[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" for an in-depth tutorial.
