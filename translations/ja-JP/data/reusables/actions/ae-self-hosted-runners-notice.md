{% if currentVersion == "github-ae@latest" %}
{% warning %}

** 警告:** セルフホストランナーは、現在{% data variables.product.prodname_ghe_managed %}で無効になっています。 これは、{% data variables.product.prodname_ghe_managed %}がセルフホストランナーの動作と互換性のないセキュリティ境界を保証しているためです。 ただし、{% data variables.product.prodname_ghe_managed %}でセルフホストランナーを使う必要があり、セキュリティへの影響を理解しているなら、セルフホストランナーを有効化するセキュリティ例外について{% data variables.product.prodname_dotcom %}サポートに連絡できます。

セルフホストランナーが必要ないなら、ワークフローの実行には{% data variables.actions.hosted_runner %}が利用できます。 詳しい情報については「[{% data variables.actions.hosted_runner %}について](/actions/using-github-hosted-runners/about-ae-hosted-runners)」を参照してください。

{% endwarning %}
{% endif %}
