{% comment %}

Always include a security admonition above this procedure. This is either one of the following, depending on whether the context is self-hosted runners or larger runners.

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. Click {% octicon "gear" aria-label="the gear icon" %}.
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. For example: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. Click **Save**.
