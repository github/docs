---
title: Passing information between jobs
shortTitle: Pass job outputs
intro: You can define outputs to pass information from one job to another.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/defining-outputs-for-jobs
  - /actions/writing-workflows/choosing-what-your-workflow-does/defining-outputs-for-jobs
  - /actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs
---

## Defining and using job outputs

1. Open the workflow file containing the job you want to get outputs from.
1. Use the `jobs.<job_id>.outputs` syntax to define the outputs for the job. For example, the following job defines the `output1` and `output2` outputs, which are mapped to the results of `step1` and `step2` respectively:

   ```yaml
   jobs:
     job1:
       runs-on: ubuntu-latest
       outputs:
         output1: {% raw %}${{ steps.step1.outputs.test }}{% endraw %}
         output2: {% raw %}${{ steps.step2.outputs.test }}{% endraw %}
       steps:
         - id: step1
           run: echo "test=hello" >> "$GITHUB_OUTPUT"
         - id: step2
           run: echo "test=world" >> "$GITHUB_OUTPUT"
   ```

1. In a separate job where you want to access those outputs, use the `jobs.<job_id>.needs` syntax to make it dependent on the original job. For example, the following job checks that `job1` is complete before running:

    ```yaml
    jobs:
      # Assume job1 is defined as above
      job2:
        runs-on: ubuntu-latest
        needs: job1
    ```

1. To access the outputs in the dependent job, use the `needs.<job_id>.outputs.<output_name>` syntax. For example, the following job accesses the `output1` and `output2` outputs defined in `job1`:

    ```yaml
    jobs:
      # Assume job1 is defined as above
      job2:
        runs-on: ubuntu-latest
        needs: job1
        steps:
          - env:
              OUTPUT1: {% raw %}${{needs.job1.outputs.output1}}{% endraw %}
              OUTPUT2: {% raw %}${{needs.job1.outputs.output2}}{% endraw %}
            run: echo "$OUTPUT1 $OUTPUT2"
    ```

## Next steps

To learn more about job outputs and the `needs` context, see the following sections of [AUTOTITLE](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs):
* [`jobs.<job_id>.outputs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idoutputs)
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
