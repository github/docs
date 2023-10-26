If an action is defined in the same repository where your workflow file uses the action, you can reference the action with either the ‌`{owner}/{repo}@{ref}` or `./path/to/dir` syntax in your workflow file. You must check out your repository before using the action.

In case of `./path/to/dir` syntax, the path is relative (`./`) to the default working directory (`github.workspace`, `$GITHUB_WORKSPACE`), unless the repository is checked out to a different location in the checkout step.

Example repository file structure:

```shell
|-- hello-world (repository)
|   |__ .github
|       └── workflows
|           └── my-first-workflow.yml
|       └── actions
|           |__ hello-world-action
|               └── action.yml
```

Example workflow file:

```yaml
jobs:
  my_first_job:
    runs-on: ubuntu-latest
    steps:
      # This step checks out a copy of your repository.
      - name: My first step - check out repository
        uses: {% data reusables.actions.action-checkout %}
      # This step references the directory that contains the action.
      - name: Use local hello-world-action
        uses: ./.github/actions/hello-world-action
```

The `action.yml` file is used to provide metadata for the action. Learn about the content of this file in "[AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions)."
