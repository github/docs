{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

For runner groups in an enterprise, you can change what organizations in the enterprise can access a runner group{% ifversion restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}. For runner groups in an organization, you can change what repositories in the organization can access a runner group{% ifversion restrict-groups-to-workflows %} or restrict what workflows a runner group can run{% endif %}.

### Changing what organizations or repositories can access a runner group

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. For runner groups in an enterprise, under **Organization access**, modify what organizations can access the runner group. For runner groups in an organization, under **Repository access**, modify what repositories can access the runner group.

{% data reusables.actions.configure-runner-group-access %}

{% ifversion restrict-groups-to-workflows %}
### Changing what workflows can access a runner group
You can configure a runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. This setting cannot be overridden if you are configuring an organization's runner group that was shared by an enterprise.
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. Click {% octicon "gear" aria-label="the gear icon" %}.
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. Click **Save**.

{% endif %}
