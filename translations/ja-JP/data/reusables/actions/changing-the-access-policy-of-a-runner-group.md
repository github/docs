{% comment %}

この手順の上には、必ずセキュリティの警告を含めてください。 これは、コンテキストがセルフホストランナーなのか、大きなランナーなのかによって、以下のいずれかになります。

{% data reusables.actions.self-hosted-runner-security-admonition %}
{% data reusables.actions.hosted-runner-security-admonition %}

{% endcomment %}

Enterprise内のランナーグループに対しては、Enterprise内のどのOrganizationがランナーグループにアクセスできるか{% ifversion restrict-groups-to-workflows %}、あるいはランナーグループが実行できるワークフローの制限{% endif %}を変更できます。 Organization内のランナーグループに対しては、Organization内のどのリポジトリがランナーグループにアクセスできるか{% ifversion restrict-groups-to-workflows %}、あるいはランナーグループが実行できるワークフローの制限{% endif %}を変更できます。

### ランナーグループにアクセスできるOrganizationあるいはリポジトリの変更

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5091 %}
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Enterprise内のランアーグループについては、**Organization access（Organizationのアクセス）**の下で、ランナーグループにアクセスできるOrganizationを変更してください。 Organization内のランナーグループについては、**Repository access（リポジトリアクセス）**の下で、ランナーグループにアクセスできるリポジトリを変更してください。

{% elsif ghae or ghes < 3.4 %}
{% data reusables.actions.configure-runner-group-access %}
{% endif %}

{% ifversion restrict-groups-to-workflows %}
### Changing what workflows can access a runner group
You can configure a runner group to run either selected workflows or all workflows. For example, you might use this setting to protect secrets that are stored on runners or to standardize deployment workflows by restricting a runner group to run only a specific reusable workflow. This setting cannot be overridden if you are configuring an organization's runner group that was shared by an enterprise.
{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Under **Workflow access**, select the dropdown menu and click **Selected workflows**.
1. {% octicon "gear" aria-label="the gear icon" %} をクリックします。
1. Enter a comma separated list of the workflows that can access the runner group. Use the full path, including the repository name and owner. Pin the workflow to a branch, tag, or full SHA. 例: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`

   Only jobs directly defined within the selected workflows will have access to the runner group.

   Organization-owned runner groups cannot access workflows from a different organization in the enterprise; instead, you must create an enterprise-owned runner group.

1. [**Save**] をクリックします。

{% endif %}