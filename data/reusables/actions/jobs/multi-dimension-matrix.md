You can specify multiple variables to create a multi-dimensional matrix. A job will run for each possible combination of the variables.

For example, the following workflow specifies two variables:

* Two operating systems specified in the `os` variable
* Three Node.js versions specified in the `version` variable

The workflow will run six jobs, one for each combination of the `os` and `version` variables. Each job will set the `runs-on` value to the current `os` value and will pass the current `version` value to the `actions/setup-node` action.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-22.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```

A variable configuration in a matrix can be an `array` of `object`s.

```yaml
matrix:
  os:
    - ubuntu-latest
    - macos-latest
  node:
    - version: 14
    - version: {% ifversion actions-node20-support %}20{% else %}16{% endif %}
      env: NODE_OPTIONS=--openssl-legacy-provider
```

This matrix produces 4 jobs with corresponding contexts.

```yaml
- matrix.os: ubuntu-latest
  matrix.node.version: 14
- matrix.os: ubuntu-latest
  matrix.node.version: {% ifversion actions-node20-support %}20{% else %}16{% endif %}
  matrix.node.env: NODE_OPTIONS=--openssl-legacy-provider
- matrix.os: macos-latest
  matrix.node.version: 14
- matrix.os: macos-latest
  matrix.node.version: {% ifversion actions-node20-support %}20{% else %}16{% endif %}
  matrix.node.env: NODE_OPTIONS=--openssl-legacy-provider
```
