
Use `jobs.<job_id>.strategy.matrix` to define a matrix of different job configurations. A matrix allows you to create multiple jobs by performing variable substitution in a single job definition. For example, you can use a matrix to create jobs for more than one supported version of a programming language, operating system, or tool. A matrix reuses the job's configuration and creates a job for each matrix you configure.

{% data reusables.github-actions.usage-matrix-limits %}

Each option you define in the `matrix` has a key and value. The keys you define become properties in the `matrix` context and you can reference the property in other areas of your workflow file. For example, if you define the key `os` that contains an array of operating systems, you can use the `matrix.os` property as the value of the `runs-on` keyword to create a job for each operating system. For more information, see "[Contexts](/actions/learn-github-actions/contexts)."

The order that you define a `matrix` matters. The first option you define will be the first job that runs in your workflow.

#### Example: Running multiple versions of Node.js

You can specify a matrix by supplying an array for the configuration options. For example, if the runner supports Node.js versions 10, 12, and 14, you could specify an array of those versions in the `matrix`.

This example creates a matrix of three jobs by setting the `node` key to an array of three Node.js versions. To use the matrix, the example sets the `matrix.node` context property as the value of the `setup-node` action's input parameter `node-version`. As a result, three jobs will run, each using a different Node.js version.

{% raw %}
```yaml
strategy:
  matrix:
    node: [10, 12, 14]
steps:
  # Configures the node version used on GitHub-hosted runners
  - uses: actions/setup-node@v2
    with:
      # The Node.js version to configure
      node-version: ${{ matrix.node }}
```
{% endraw %}

The `setup-node` action is the recommended way to configure a Node.js version when using {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see the [`setup-node`](https://github.com/actions/setup-node) action.

#### Example: Running with multiple operating systems

You can create a matrix to run workflows on more than one runner operating system. You can also specify more than one matrix configuration. This example creates a matrix of 6 jobs:

- 2 operating systems specified in the `os` array
- 3 Node.js versions specified in the `node` array

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-18.04, ubuntu-20.04]
    node: [10, 12, 14]
steps:
  - uses: actions/setup-node@v2
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% ifversion ghae %}
For more information about the configuration of self-hosted runners, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners)."
{% else %}To find supported configuration options for {% data variables.product.prodname_dotcom %}-hosted runners, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
{% endif %}

#### Example: Including additional values in combinations

You can add additional configuration options to a build matrix job that already exists. For example, if you want to use a specific version of `npm` when the job that uses `windows-latest` and version 8 of `node` runs, you can use `include` to specify that additional option.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    include:
      # includes a new variable of npm with a value of 6
      # for the matrix leg matching the os and version
      - os: windows-latest
        node: 8
        npm: 6
```
{% endraw %}

#### Example: Including new combinations

You can use `include` to add new jobs to a build matrix. Any unmatched include configurations are added to the matrix. For example, if you want to use `node` version 14 to build on multiple operating systems, but wanted one extra experimental job using node version 15 on Ubuntu, you can use `include` to specify that additional job.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [14]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 15
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

#### Example: Excluding configurations from a matrix

You can remove a specific configurations defined in the build matrix using the `exclude` option. Using `exclude` removes a job defined by the build matrix. The number of jobs is the cross product of the number of operating systems (`os`) included in the arrays you provide, minus any subtractions (`exclude`).

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [8, 10, 12, 14]
    exclude:
      # excludes node 8 on macOS
      - os: macos-latest
        node: 8
```
{% endraw %}

{% note %}

**Note:** All `include` combinations are processed after `exclude`. This allows you to use `include` to add back combinations that were previously excluded.

{% endnote %}

### Using environment variables in a matrix

You can add custom environment variables for each test combination by using the `include` key. You can then refer to the custom environment variables in a later step.

{% data reusables.github-actions.matrix-variable-example %}
