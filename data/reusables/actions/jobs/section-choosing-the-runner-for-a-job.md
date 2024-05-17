Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on.

{% ifversion fpt or ghec %}- The destination machine can be either a [{% data variables.product.prodname_dotcom %}-hosted runner](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group), or a [self-hosted runner](#choosing-self-hosted-runners).{% else %}
- The destination machine can be a [self-hosted runner](#choosing-self-hosted-runners).{% endif %}
{% ifversion target-runner-groups %}- You can target runners based on the labels assigned to them, or their group membership, or a combination of these.{% else %}
- You can target runners based on the labels assigned to them.{% endif %}
- You can provide `runs-on` as:
  - a single string
  - a single variable containing a string
  - an array of strings, variables containing strings, or a combination of both
  - a `key: value` pair using the `group` or `labels` keys
- If you specify an array of strings or variables, your workflow will execute on any runner that matches all of the specified `runs-on` values. For example, here the job will only run on a self-hosted runner that has the labels `linux`, `x64`, and `gpu`:

  ```yaml
  runs-on: [self-hosted, linux, x64, gpu]
  ```

  For more information, see "[Choosing self-hosted runners](#choosing-self-hosted-runners)."
- You can mix strings and variables in an array. For example:

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

- If you would like to run your workflow on multiple machines, use [`jobs.<job_id>.strategy`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategy).

{% note %}

**Note:** Quotation marks are not required around simple strings like `self-hosted`, but they are required for expressions like {% raw %} `"${{ inputs.chosen-os }}"`{% endraw %}.

{% endnote %}

{% data reusables.actions.enterprise-github-hosted-runners %}

### Choosing {% data variables.product.prodname_dotcom %}-hosted runners

If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`.

Available {% data variables.product.prodname_dotcom %}-hosted runner labels are:

<table style="width:100%">
<thead>
  <tr>
    <th scope="col"><b>OS (YAML workflow label)</b></th>
    <th scope="col"><b>Notes</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>
<code>ubuntu-latest</code>,<code>ubuntu-24.04</code> [Beta], <code>ubuntu-22.04</code>, <code>ubuntu-20.04</code>
</td>
<td>
The <code>ubuntu-latest</code> label currently uses the Ubuntu 22.04 runner image.
</td>
</tr>
<tr>
<td>
<code>windows-latest</code>, <code>windows-2022</code>, <code>windows-2019</code>
</td>
<td>
The <code>windows-latest</code> label currently uses the Windows 2022 runner image.
</td>
</tr>
<tr>
<td>
<code>macos-latest</code>, <code>macos-14</code>, <code>macos-13</code>, <code>macos-12</code>, <code>macos-11</code>
</td>
<td>
The <code>macos-latest</code> workflow label currently uses the macOS 14 runner image.
</td>
</tr>
</tbody>
</table>

For more information about {% data variables.product.prodname_dotcom %}-hosted runner specifications, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."

{% note %}

**Note:** The `-latest` runner images are the latest stable images that {% data variables.product.prodname_dotcom %} provides, and might not be the most recent version of the operating system available from the operating system vendor.

{% endnote %}

{% warning %}

**Warning:** Beta and Deprecated Images are provided "as-is", "with all faults" and "as available" and are excluded from the service level agreement and warranty. Beta Images may not be covered by customer support.

{% endwarning %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners)."

### Choosing self-hosted runners

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow)."

{% ifversion target-runner-groups %}

### Choosing runners in a group

You can use `runs-on` to target runner groups, so that the job will execute on any runner that is a member of that group. For more granular control, you can also combine runner groups with labels.

{% ifversion fpt or ghec %}
Runner groups can only have [{% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners) or [self-hosted runners](/actions/hosting-your-own-runners) as members.
{% endif %}

#### Example: Using groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-groups %}

#### Example: Combining groups and labels

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% ifversion ghec or ghes %}

#### Example: using prefixes to differentiate runner groups

{% data reusables.actions.using-prefixes-to-differentiate-runner-groups %}

{% endif %}

{% endif %}
