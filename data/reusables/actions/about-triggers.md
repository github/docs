Workflow triggers are events that cause a workflow to run. These events can be:

* Events that occur in your workflow's repository
* Events that occur outside of {% data variables.product.github %} and trigger a `repository_dispatch` event on {% data variables.product.github %}
* Scheduled times
* Manual

For example, you can configure your workflow to run when a push is made to the default branch of your repository, when a release is created, or when an issue is opened.

Workflow triggers are defined with the `on` key. For more information, see [AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#on).

The following steps occur to trigger a workflow run:

1. An event occurs on your repository. The event has an associated commit SHA and Git ref.
1. {% data variables.product.github %} searches the `.github/workflows` directory in the root of your repository for workflow files that are present in the associated commit SHA or Git ref of the event.
1. A workflow run is triggered for any workflows that have `on:` values that match the triggering event. Some events also require the workflow file to be present on the default branch of the repository in order to run.

Each workflow run will use the version of the workflow that is present in the associated commit SHA or Git ref of the event. When a workflow runs, {% data variables.product.github %} sets the `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) environment variables in the runner environment. For more information, see [AUTOTITLE](/actions/learn-github-actions/variables).
