{% data variables.product.prodname_dotcom %}は事前設定されたスターターワークフローを提供します。これは、カスタマイズして独自の継続的インテグレーションワークフローを作成できます。 {% data variables.product.product_name %}はコードを分析し、リポジトリで役に立つであろうCIスターターワークフローを提示します。 たとえばリポジトリにNode.jsのコードが含まれているなら、Node.jsプロジェクトのためのサジェッションが提示されます。 スターターワークフローは、カスタムワークフローを構築するための出発点として使うことも、あるいはそのまま使うこともできます。

スターターワークフローの完全なリストは、{% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows)リポジトリ{% else %}{% data variables.product.product_location %}上の`actions/starter-workflows`リポジトリ{% endif %}で閲覧できます。
