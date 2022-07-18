---
title: Enforcing policies for GitHub Actions in your enterprise
intro: 'You can enforce policies for {% data variables.product.prodname_actions %} within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
---

{% data reusables.actions.enterprise-beta %}

## About policies for {% data variables.product.prodname_actions %} in your enterprise

{% data variables.product.prodname_actions %} helps members of your enterprise automate software development workflows on {% data variables.product.product_name %}. For more information, see "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)."

{% ifversion ghes %}If you enable {% data variables.product.prodname_actions %}, any{% else %}Any{% endif %} organization on {% data variables.product.product_location %} can use {% data variables.product.prodname_actions %}. You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} use {% data variables.product.prodname_actions %}. By default, organization owners can manage how members use {% data variables.product.prodname_actions %}. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)."

## Enforcing a policy to restrict the use of {% data variables.product.prodname_actions %} in your enterprise

Enterprise 内のすべての Organization に対して {% data variables.product.prodname_actions %} を無効化するか、特定の Organization のみを許可するかを選択できます。 You can also limit the use of public actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %}, so that people can only use local actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} that exist in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. "Policies（ポリシー）"の下で、オプションを選択してください。

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %}
   {% note %}

   **Note:** To enable access to public actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}, you must first configure {% data variables.product.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}. 詳しい情報については「[GitHub Connectを使用したGitHub.comのアクションへの自動アクセスの有効化](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。

   {% endnote %}
   {%- endif %}
   {% ifversion actions-workflow-policy %}
   ![この Enterprise アカウントについてアクションを無効化、無効化、または制限](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png)
   {%- else %}
   ![この Enterprise アカウントについてアクションを無効化、無効化、または制限](/assets/images/help/organizations/enterprise-actions-policy.png)
   {%- endif %}
1. [**Save**] をクリックします。

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. "Policies（ポリシー）"の下で、{% data reusables.actions.policy-label-for-select-actions-workflows %}を選択し、必要なアクション{% ifversion actions-workflow-policy %}と再利用可能なワークフロー{% endif %}をリストに追加してください。
   {% ifversion actions-workflow-policy %}
   ![許可リストへのアクションと再利用可能なワークフローの追加](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes or ghae %}
   ![許可リストへのアクションの追加](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![許可リストへのアクションの追加](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}

## Enforcing a policy for artifact and log retention in your enterprise

{% data variables.product.prodname_actions %} can store artifact and log files. For more information, see "[Downloading workflow artifacts](/actions/managing-workflow-runs/downloading-workflow-artifacts)."

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Enforcing a policy for fork pull requests in your enterprise

You can enforce policies to control how {% data variables.product.prodname_actions %} behaves for {% data variables.product.product_location %} when members of your enterprise{% ifversion ghec %} or outside collaborators{% endif %} run workflows from forks.

{% ifversion ghec %}

### Enforcing a policy for approval of pull requests from outside collaborators

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Enforcing a policy for fork pull requests in private repositories

{% data reusables.actions.private-repository-forks-overview %}

If a policy is enabled for an enterprise, the policy can be selectively disabled in individual organizations or repositories. If a policy is disabled for an enterprise, individual organizations or repositories cannot enable it.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Enforcing a policy for workflow permissions in your enterprise

{% data reusables.actions.workflow-permissions-intro %}

You can set the default permissions for the `GITHUB_TOKEN` in the settings for your enterprise, organizations, or repositories. If you choose a restricted option as the default in your enterprise settings, this prevents the more permissive setting being chosen in the organization or repository settings.

{% data reusables.actions.workflow-permissions-modifying %}

### デフォルトの`GITHUB_TOKEN`権限の設定

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
By default, when you create a new enterprise, `GITHUB_TOKEN` only has read access for the `contents` scope.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. [Workflow permissions]の下で、`GITHUB_TOKEN`にすべてのスコープに対する読み書きアクセスを持たせたいか、あるいは`contents`スコープに対する読み取りアクセスだけを持たせたいかを選択してください。

   ![Set GITHUB_TOKEN permissions for this enterprise](/assets/images/help/settings/actions-workflow-permissions-enterprise{% ifversion allow-actions-to-approve-pr-with-ent-repo %}-with-pr-approval{% endif %}.png)
1. **Save（保存）**をクリックして、設定を適用してください。

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### {% data variables.product.prodname_actions %}がPull Requestの作成もしくは承認をできないようにする

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

By default, when you create a new enterprise, workflows are not allowed to create or approve pull requests.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Workflow permissions", use the **Allow GitHub Actions to create and approve pull requests** setting to configure whether `GITHUB_TOKEN` can create and approve pull requests.

   ![Set GITHUB_TOKEN permissions for this enterprise](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. **Save（保存）**をクリックして、設定を適用してください。

{% endif %}
{% endif %}

{% ifversion actions-cache-policy-apis %}

## Enforcing a policy for cache storage in your enterprise

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

However, you can set an enterprise policy to customize both the default total cache size for each repository, as well as the maximum total cache size allowed for a repository. For example, you might want the default total cache size for each repository to be 5 GB, but also allow repository administrators to configure a total cache size up to 15 GB if necessary.

People with admin access to a repository can set a total cache size for their repository up to the maximum cache size allowed by the enterprise policy setting.

The policy settings for {% data variables.product.prodname_actions %} cache storage can currently only be modified using the REST API:

* To view the current enterprise policy settings, see "[Get GitHub Actions cache usage policy for an enterprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)."
* To change the enterprise policy settings, see "[Set GitHub Actions cache usage policy for an enterprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)."

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
