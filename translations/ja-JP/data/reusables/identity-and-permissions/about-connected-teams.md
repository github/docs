いったん {% data variables.product.prodname_dotcom %} Team が IdP グループに接続されると、IdP 管理者はアイデンティティプロバイダを通して Team メンバーシップの変更を行う必要があります。 TeamがIdPグループに接続されると、Teamのメンバーシップは{% data variables.product.product_name %}やAPIを通じて管理することはできません。

IdPグループに接続されたTeamを含む任意の{% data variables.product.prodname_dotcom %}のTeamによるリポジトリへのアクセスを管理するには、{% data variables.product.product_name %}上で変更を行わなければなりません。 詳細は「[Team について](/articles/about-teams)」および「[Organization リポジトリへの Team のアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)」を参照してください。

デフォルトでTeamのメンバーがアクセスできるようにしたいリポジトリを選択できます。 接続されたIdPグループは、自動的にそれらのリポジトリにアクセスできるようになります。 詳しい情報については「[OrganizationリポジトリへのTeamのアクセス管理](/articles/managing-team-access-to-an-organization-repository)」を参照してください。

IdP を通じた Team メンバーシップ変更はすべて、Team 同期ボットによる変更として {% data variables.product.product_name %} の Audit log に記載されます。 IdP は、Team メンバーシップのデータを 1 時間に 1 回 {% data variables.product.prodname_dotcom %} に送信します。