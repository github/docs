{% ifversion repo-policy-rules %}

> [!NOTE] Repository policy delegated bypass is in {% data variables.release-phases.public_preview %} and subject to change.

Delegated bypass for repository policies lets you control who can bypass repository policies for repository deletions and visibility changes.

With delegated bypass, repository administrators must submit a request to change the visibility of the repository or delete the repository. The request is sent to a designated group of reviewers, who either approve or deny the request to bypass repository policies.

If the request to bypass repository policies is approved, the request change is completed immediately. If the request is denied, the requested change will not be made but may be re-requested.

To configure delegated bypass, enterprise owners or organization owners first create a "bypass list". The bypass list includes specific roles and teams, such as team or repository administrators, who oversee requests to bypass repository policies.

{% endif %}
