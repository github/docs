Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on.

{% ifversion fpt or ghec %}- The destination machine can be either a [{% data variables.product.prodname_dotcom %}-hosted runner](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group), or a [self-hosted runner](#choosing-self-hosted-runners).{% else %}
* The destination machine can be a [self-hosted runner](#choosing-self-hosted-runners).{% endif %}
{% ifversion target-runner-groups %}- You can target runners based on the labels assigned to them, or their group membership, or a combination of these.{% else %}
* You can target runners based on the labels assigned to them.{% endif %}
* You can provide `runs-on` as:
  * A single string
  * A single variable containing a string
  * An array of strings, variables containing strings, or a combination of both
  * A `key: value` pair using the `group` or `labels` keys
* If you specify an array of strings or variables, your workflow will execute on any runner that matches all of the specified `runs-on` values. For example, here the job will only run on a self-hosted runner that has the labels `linux`, `x64`, and `gpu`:

  ```yaml
  runs-on: [self-hosted, linux, x64, gpu]
  ```

  For more information, see "[Choosing self-hosted runners](#choosing-self-hosted-runners)."
* You can mix strings and variables in an array. For example:

  {% raw %}

  ```yaml
  on:
    workflow_dispatch:
      inputs:
        chosen-os:
          required: true
          type: choice
          options:
          - Ubuntu
          - macOS

  jobs:
    test:
      runs-on: [self-hosted, "${{ inputs.chosen-os }}"]
      steps:
      - run: echo Hello world!
  ```

  {% endraw %}

* If you would like to run your workflow on multiple machines, use [`jobs.<job_id>.strategy`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategy).

{% note %}

**Note:** Quotation marks are not required around simple strings like `self-hosted`, but they are required for expressions like {% raw %} `"${{ inputs.chosen-os }}"`{% endraw %}.

{% endnote %}
