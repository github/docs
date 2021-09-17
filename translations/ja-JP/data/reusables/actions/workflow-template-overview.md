{% data variables.product.prodname_dotcom %}は、カスタマイズして独自の継続的インテグレーションワークフローを作成できる、事前設定されたワークフローテンプレートを提供します。 {% data variables.product.product_name %}はコードを分析し、そのリポジトリで役に立つであろうCIテンプレートを提示します。 たとえばリポジトリにNode.jsのコードが含まれているなら、Node.jsプロジェクトのためのサジェッションが提示されます。 ワークフローテンプレートは、カスタムワークフローの構築の出発点として利用することも、そのまま利用することもできます。

{% if currentVersion == "free-pro-team@latest" %}[actions/starter-workflows](https://github.com/actions/starter-workflows) リポジトリ{% else %} {% data variables.product.product_location %} の `actions/starter-workflows` リポジトリで、ワークフローテンプレートの完全なリストを閲覧できます{% endif %}。
