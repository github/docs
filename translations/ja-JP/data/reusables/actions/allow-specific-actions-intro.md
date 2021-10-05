**Allow select actions（アクションの選択を許可）**を選択すると、ローカルアクションが許可され、他の特定のアクションを許可するための追加のオプションがあります。

- **Allow actions created by {% data variables.product.prodname_dotcom %}（{% data variables.product.prodname_dotcom %}が作成したアクションのを許可）:** {% data variables.product.prodname_dotcom %}が作成したすべてのアクションをワークフローから使うことを許可できます。 {% data variables.product.prodname_dotcom %}が作成したアクションは、`actions`及び`github` Organizationにあります。 For more information, see the [`actions`](https://github.com/actions) and [`github`](https://github.com/github) organizations.{% ifversion fpt or ghes > 3.0 %}
- **Allow Marketplace actions by verified creators:** {% ifversion ghes > 3.0 %}This option is available if you have {% data variables.product.prodname_github_connect %} enabled and configured with {% data variables.product.prodname_actions %}. For more information, see "[Enabling automatic access to GitHub.com actions using GitHub Connect](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %} You can allow all {% data variables.product.prodname_marketplace %} actions created by verified creators to be used by workflows. When GitHub has verified the creator of the action as a partner organization, the {% octicon "verified" aria-label="The verified badge" %} badge is displayed next to the action in {% data variables.product.prodname_marketplace %}.{% endif %}
- **Allow specified actions（指定したアクションの許可）:** ワークフローから利用できるのを特定のOrganizationやリポジトリ内のアクションに限定できます。

  アクションの特定のタグあるいはコミットSHAにアクセスを制限するには、アクションを選択するためにワークフローで使われる野と同じ`<OWNER>/<REPO>@<TAG OR SHA>`構文を使ってください。 たとえばタグを選択するために`actions/javascript-action@v1.0.1`、あるいはSHAを選択するために`actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89`というようにします。 詳しい情報については「[アクションの発見とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)」を参照してください。

  パターンのマッチには、ワイルドカードキャラクタの`*`が使えます。 たとえば、`space-org`で始まるOrganization内のすべてのアクションを許可したいなら、`space-org*/*`と指定できます。 octocatで始まるリポジトリ内のすべてのアクションを許可したいなら、`*/octocat*@*`が使えます。 ワイルドカードの`*`の利用に関する詳しい情報については「[GitHub Actionsのためのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

  {% ifversion fpt %}
  {% note %}

  **ノート:****Allow specified actions**オプションが使えるのは、{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、Organizationの{% data variables.product.prodname_free_team %}、{% data variables.product.prodname_team %}プランのパブリックリポジトリでのみです。

  {% endnote %}
  {% endif %}

この手順は、特定のアクションを許可リストに追加する方法を示しています。
