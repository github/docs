Once your runner type has been defined, you can update your workflow YAML files to send jobs to your newly created runner instances for processing. You can use runner groups or labels to define where your jobs run.

{% note %}

**Note:** {% data variables.actions.hosted_runner_caps %}s are automatically assigned a default label that corresponds to the runner name. You cannot add custom labels to {% data variables.actions.hosted_runner %}s, but you can use the default labels or the runner's group to send jobs to specific types of runners.

{% endnote %}

Only owner or administrator accounts can see the runner settings. Non-administrative users can contact the organization owner to find out which runners are enabled. Your organization owner can create new runners and runner groups, as well as configure permissions to specify which repositories can access a runner group. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#allowing-repositories-to-access-a-runner-group)."
