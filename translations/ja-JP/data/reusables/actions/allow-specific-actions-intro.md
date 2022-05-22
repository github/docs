**Allow select actions（アクションの選択を許可）**を選択すると、ローカルアクションが許可され、他の特定のアクションを許可するための追加のオプションがあります。

- **Allow actions created by {% data variables.product.prodname_dotcom %}（{% data variables.product.prodname_dotcom %}が作成したアクションのを許可）:** {% data variables.product.prodname_dotcom %}が作成したすべてのアクションをワークフローから使うことを許可できます。 {% data variables.product.prodname_dotcom %}が作成したアクションは、`actions`及び`github` Organizationにあります。 詳しい情報については[`actions`](https://github.com/actions)及び[`github`](https://github.com/github) Organizationを参照してください。
- **Allow Marketplace actions by verified creators（検証済み作者によるMarketplaceのアクションを許可）:**検証済みの作者によるすべての{% data variables.product.prodname_marketplace %}アクションをワークフローから使用することを許可できます。 GitHubがアクションの作者をパートナーOrganizationとして検証すると、{% data variables.product.prodname_marketplace %}でアクションの隣に{% octicon "verified" aria-label="The verified badge" %}バッジが表示されるようになります。
- **Allow specified actions（指定したアクションの許可）:** ワークフローから利用できるのを特定のOrganizationやリポジトリ内のアクションに限定できます。

  アクションの特定のタグあるいはコミットSHAにアクセスを制限するには、アクションを選択するためにワークフローで使われる野と同じ`<OWNER>/<REPO>@<TAG OR SHA>`構文を使ってください。 たとえばタグを選択するために`actions/javascript-action@v1.0.1`、あるいはSHAを選択するために`actions/javascript-action@172239021f7ba04fe7327647b213799853a9eb89`というようにします。 詳しい情報については「[アクションの発見とカスタマイズ](/actions/learn-github-actions/finding-and-customizing-actions#using-release-management-for-your-custom-actions)」を参照してください。

  パターンのマッチには、ワイルドカードキャラクタの`*`が使えます。 たとえば、`space-org`で始まるOrganization内のすべてのアクションを許可したいなら、`space-org*/*`と指定できます。 octocatで始まるリポジトリ内のすべてのアクションを許可したいなら、`*/octocat*@*`が使えます。 ワイルドカードの`*`の利用に関する詳しい情報については「[GitHub Actionsのためのワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)」を参照してください。

  {% if currentVersion == "free-pro-team@latest" %}
  {% note %}

  **ノート:****Allow specified actions**オプションが使えるのは、{% data variables.product.prodname_free_user %}、{% data variables.product.prodname_pro %}、Organizationの{% data variables.product.prodname_free_team %}、{% data variables.product.prodname_team %}プランのパブリックリポジトリでのみです。

  {% endnote %}
  {% endif %}

この手順は、特定のアクションを許可リストに追加する方法を示しています。
