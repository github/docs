{% ifversion required-workflows-deprecation %}

You should not use path or branch filtering to skip workflow runs if the workflow is required. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/skipping-workflow-runs){% ifversion required-workflows %}" and "[AUTOTITLE](/actions/using-workflows/required-workflows){% endif %}."

{% endif %}

{% ifversion repo-rules-required-workflows %}

You should not use path or branch filtering to skip workflow runs if the workflow is required to pass before merging. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/skipping-workflow-runs)" and "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-workflows-to-pass-before-merging)."

{% endif %}
