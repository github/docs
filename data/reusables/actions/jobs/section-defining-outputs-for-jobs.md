You can use `jobs.<job_id>.outputs` to create a `map` of outputs for a job. Job outputs are available to all downstream jobs that depend on this job. For more information on defining job dependencies, see [`jobs.<job_id>.needs`](/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

Job outputs containing expressions are evaluated on the runner at the end of each job. Outputs containing secrets are redacted on the runner and not sent to {% data variables.product.prodname_actions %}.

If an output is skipped because it may contain a secret, you will see this warning message, where OUTPUT-NAME is the name of the output: `Skip output 'OUTPUT-NAME' since it may contain secret`. For more information on how to handle secrets, see [AUTOTITLE](/actions/reference/workflows-and-actions/workflow-commands#example-masking-and-passing-a-secret-between-jobs-or-workflows).

If an output evaluates to an empty string, the output is not set. If step debug logging is enabled, the job log shows this debug message, where OUTPUT-NAME is the name of the output: `Skip output 'OUTPUT-NAME' since it's empty`. For more information, see [AUTOTITLE](/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-step-debug-logging).

To use job outputs in a dependent job, you can use the `needs` context. For more information, see [AUTOTITLE](/actions/reference/workflows-and-actions/contexts#needs-context).

### Example: Defining outputs for a job

{% raw %}

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "test=hello" >> "$GITHUB_OUTPUT"
      - id: step2
        run: echo "test=world" >> "$GITHUB_OUTPUT"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - env:
          OUTPUT1: ${{needs.job1.outputs.output1}}
          OUTPUT2: ${{needs.job1.outputs.output2}}
        run: echo "$OUTPUT1 $OUTPUT2"
```

{% endraw %}

### Using Job Outputs in a Matrix Job

Matrices can be used to generate multiple outputs of different names. When using a matrix, job outputs will be combined from all jobs inside the matrix.

{% raw %}

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    outputs:
      output_1: ${{ steps.gen_output.outputs.output_1 }}
      output_2: ${{ steps.gen_output.outputs.output_2 }}
      output_3: ${{ steps.gen_output.outputs.output_3 }}
    strategy:
      matrix:
        version: [1, 2, 3]
    steps:
      - name: Generate output
        id: gen_output
        run: |
          version="${{ matrix.version }}"
          echo "output_${version}=${version}" >> "$GITHUB_OUTPUT"
  job2:
    runs-on: ubuntu-latest
    needs: [job1]
    steps:
      # Will show
      # {
      #   "output_1": "1",
      #   "output_2": "2",
      #   "output_3": "3"
      # }
      - run: echo '${{ toJSON(needs.job1.outputs) }}'
```

{% endraw %}

> [!WARNING]
> {% data variables.product.prodname_actions %} does not guarantee the order that matrix jobs will run in. Ensure that the output name is unique, otherwise the last matrix job that runs and sets the output will override the output value. An output with an empty value is not set, so it does not override a value set by another matrix job.
