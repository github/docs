Use `jobs.<job_id>.strategy.matrix` to define a matrix of different job configurations. Within your matrix, define one or more variables followed by an array of values. For example, the following matrix has a veriable called `version` with the value `[10, 12, 14]` and a variable called `os` with the value `[ubuntu-latest, windows-latest]`:

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

A job will run for each possible combination of the variables. In this example, the workflow will run six jobs, one for each combination of the `os` and `version` variables. 

By default, {% data variables.product.product_name %} will maximize the number of jobs run in parallel depending on runner availability. The order of the variables in the matrix determines the order in which the jobs are created. The first variable you define will be the first job that is created in your workflow run. For example, the above matrix will create the jobs in the following order:

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

A matrix will generate a maximum of 256 jobs per workflow run. This limit applies to both {% data variables.product.product_name %}-hosted and self-hosted runners.

The variables that you define become properties in the `matrix` context, and you can reference the property in other areas of your workflow file. In this example, you can use `matrix.version` and `matrix.os` to access the current value of `version` and `os` that the job is using. For more information, see "[Contexts](/actions/learn-github-actions/contexts)."
