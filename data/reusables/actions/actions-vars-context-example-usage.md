If a configuration variable has not been set, the return value of a context referencing the variable will be an empty string.

The following example shows using configuration variables with the `vars` context across a workflow. Each of the following configuration variables have been defined at the repository, organization, or environment levels.


{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
env:
  # Setting an environment variable with the value of a configuration variable
  env_var: ${{ vars.ENV_CONTEXT_VAR }}

jobs:
  display-variables:
    name: ${{ vars.JOB_NAME }}
    # You can use configuration variables with the `vars` context for dynamic jobs
    if: ${{ vars.USE_VARIABLES == 'true' }}
    runs-on: ${{ vars.RUNNER }}
    environment: ${{ vars.ENVIRONMENT_STAGE }}
    steps:
    - name: Use variables
      run: |
        echo "repository variable : ${{ vars.REPOSITORY_VAR }}"
        echo "organization variable : ${{ vars.ORGANIZATION_VAR }}"
        echo "overridden variable : ${{ vars.OVERRIDE_VAR }}"
        echo "variable from shell environment : $env_var"

    - name: ${{ vars.HELLO_WORLD_STEP }}
      if: ${{ vars.HELLO_WORLD_ENABLED == 'true' }}
      uses: actions/hello-world-javascript-action@main
      with:
        who-to-greet: ${{ vars.GREET_NAME }}

```
{% endraw %}
