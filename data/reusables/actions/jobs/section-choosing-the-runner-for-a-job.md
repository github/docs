Use `jobs.<job_id>.runs-on` to define the type of machine to run the job on. 

{% ifversion fpt or ghec %}- The destination machine can be either a [{% data variables.product.prodname_dotcom %}-hosted runner](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group), or a [self-hosted runner](#choosing-self-hosted-runners).{% else %}
- The destination machine can be a [self-hosted runner](#choosing-self-hosted-runners).{% endif %} 
{% ifversion target-runner-groups %}- You can target runners based on the labels assigned to them, or their group membership, or a combination of these.{% else %}
- You can target runners based on the labels assigned to them.{% endif %}
- You can provide `runs-on` as a single string or as an array of strings. 
- If you specify an array of strings, your workflow will execute on any runner that matches all of the specified `runs-on` values. 
- If you would like to run your workflow on multiple machines, use [`jobs.<job_id>.strategy`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategy).

{% ifversion fpt or ghec or ghes %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Choosing {% data variables.product.prodname_dotcom %}-hosted runners

If you use a {% data variables.product.prodname_dotcom %}-hosted runner, each job runs in a fresh instance of a runner image specified by `runs-on`.

Available {% data variables.product.prodname_dotcom %}-hosted runner types are:

{% data reusables.actions.supported-github-runners %}

#### Example: Specifying an operating system

```yaml
runs-on: ubuntu-latest
```

For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners)."
{% endif %}

{% ifversion fpt or ghec or ghes %}
### Choosing self-hosted runners
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### Example: Using labels for runner selection

```yaml
runs-on: [self-hosted, linux]
```

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/about-self-hosted-runners)" and "[AUTOTITLE](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)."

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

{% endif %}
