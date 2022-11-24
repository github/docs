You can use `jobs.<job_id>.outputs` to create a `map` of outputs for a job. Job outputs are available to all downstream jobs that depend on this job. For more information on defining job dependencies, see [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

Job outputs containing expressions are evaluated on the runner at the end of each job. Outputs containing secrets are redacted on the runner and not sent to {% data variables.product.prodname_actions %}.

To use job outputs in a dependent job, you can use the `needs` context. For more information, see "[Contexts](/actions/learn-github-actions/contexts#needs-context)."

### Example: Defining outputs for a job

Depending on the runner host you are saving output variables on, the command to store environment variables will need to be adapted:

#### Example: Running a script using bash

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
        run: echo "test=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=test::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "test=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=test::world"
{%- endif %}{% raw %}
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}

#### Example: Running a script using PowerShell Core

{% raw %}
```yaml
jobs:
  job1:
    runs-on: windows-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "test=hello" >> $env:GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=test::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "test=world" >> $env:GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=test::world"
{%- endif %}{% raw %}
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}

> **Note** the additional "$env:" prefix for the ```$env:GITHUB_OUTPUT``` variable.

#### Example: Running a python script

{% raw %}
```yaml
jobs:
  job1:
    runs-on: windows-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: |
          import os
          with open(os.environ.get('GITHUB_OUTPUT'), "a") as f:
            f.write("test=hello")
        shell: python{%- else %}
        run: echo "::set-output name=test::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: |
          import os
          with open(os.environ.get('GITHUB_OUTPUT'), "a") as f:
            f.write("test=world")
        shell: python
{%- else %}
        run: echo "::set-output name=test::world"
{%- endif %}{% raw %}
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}