You can use `runs-on` to target runner groups, so that the job will execute on any runner that is a member of that group. For more granular control, you can also combine runner groups with labels.

{% ifversion fpt or ghec %}

Runner groups can only have [{% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners) or [self-hosted runners](/actions/hosting-your-own-runners) as members.

{% endif %}

#### Example: Using groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-groups %}

#### Example: Combining groups and labels

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% ifversion ghec or ghes %}

#### Example: using prefixes to differentiate runner groups

{% data reusables.actions.using-prefixes-to-differentiate-runner-groups %}

{% endif %}
