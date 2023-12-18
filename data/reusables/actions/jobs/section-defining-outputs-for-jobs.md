You can use `jobs.<job_id>.outputs` to create a `map` of outputs for a job. Job outputs are available to all downstream jobs that depend on this job. For more information on defining job dependencies, see [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

Job outputs containing expressions are evaluated on the runner at the end of each job. Outputs containing secrets are redacted on the runner and not sent to {% data variables.product.prodname_actions %}.

To use job outputs in a dependent job, you can use the `needs` context. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#needs-context)."

{% note %}

**Note:** `$GITHUB_OUTPUT` is shared between all steps in a job. If you use the same output name in multiple steps, the last step to write to the output will override the value. If your job uses a matrix and writes to `$GITHUB_OUTPUT`, the content will be overwritten for each matrix combination. You can use the `matrix` context to create unique output names for each job configuration. For more information, see "[AUTOTITLE](/actions/learn-github-actions/contexts#matrix-context)."

{% endnote %}

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
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "test=hello" >> "$GITHUB_OUTPUT"
{%- else %}
        run: echo "::set-output name=test::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "test=world" >> "$GITHUB_OUTPUT"
{%- else %}
        run: echo "::set-output name=test::world"
{%- endif %}{% raw %}
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
