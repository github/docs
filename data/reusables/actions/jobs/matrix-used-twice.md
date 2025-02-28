You can use the output from one job to define matrices for multiple jobs.

For example, the following workflow demonstrates how to define a matrix of values in one job, use that matrix in a second jobs to produce artifacts, and then consume those artifacts in a third job. Each artifact is associated with a value from the matrix.

```yaml copy
name: shared matrix
on:
  push:
  workflow_dispatch:

jobs:
  define-matrix:
    runs-on: ubuntu-latest

    outputs:
      colors: {% raw %}${{ steps.colors.outputs.colors }}{% endraw %}

    steps:
      - name: Define Colors
        id: colors
        run: |
          echo 'colors=["red", "green", "blue"]' >> "$GITHUB_OUTPUT"

  produce-artifacts:
    runs-on: ubuntu-latest
    needs: define-matrix
    strategy:
      matrix:
        color: {% raw %}${{ fromJSON(needs.define-matrix.outputs.colors) }}{% endraw %}

    steps:
      - name: Define Color
        env:
          color: {% raw %}${{ matrix.color }}{% endraw %}
        run: |
          echo "$color" > color
      - name: Produce Artifact
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: {% raw %}${{ matrix.color }}{% endraw %}
          path: color

  consume-artifacts:
    runs-on: ubuntu-latest
    needs:
    - define-matrix
    - produce-artifacts
    strategy:
      matrix:
        color: {% raw %}${{ fromJSON(needs.define-matrix.outputs.colors) }}{% endraw %}

    steps:
    - name: Retrieve Artifact
      uses: {% data reusables.actions.action-download-artifact %}
      with:
        name: {% raw %}${{ matrix.color }}{% endraw %}

    - name: Report Color
      run: |
        cat color
```
