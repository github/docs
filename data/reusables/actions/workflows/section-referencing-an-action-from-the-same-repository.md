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

The path is relative (`./`) to the default working directory (`github.workspace`, `$GITHUB_WORKSPACE`), unless the repository is checked out to a different location in the checkout step.

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
