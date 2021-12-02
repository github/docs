{% ifversion ghae %}

{% warning %}

{% ifversion ghae-next %} <!-- Remove elsif condition below when toggling -->

**Warning:** Self-hosted runners are enabled by default for {% data variables.product.prodname_ghe_managed %}. Self-hosted runners are long-lived, and any compromise to the host machine could leak secrets or credentials or enable other attacks. If you'd like to disable self-hosted runners for your enterprise, you can contact {% data variables.product.prodname_dotcom %} support. For more information about the risks of using self-hosted runners, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

{% elsif ghae %} <!-- Remove this condition when toggling above flag -->

**Warning:** Self-hosted runners are currently disabled for {% data variables.product.prodname_ghe_managed %}. これは、{% data variables.product.prodname_ghe_managed %}がセルフホストランナーの動作と互換性のないセキュリティ境界を保証しているためです。 ただし、{% data variables.product.prodname_ghe_managed %}でセルフホストランナーを使う必要があり、セキュリティへの影響を理解しているなら、セルフホストランナーを有効化するセキュリティ例外について{% data variables.product.prodname_dotcom %}サポートに連絡できます。

セルフホストランナーが必要ないなら、ワークフローの実行には{% data variables.actions.hosted_runner %}が利用できます。 詳しい情報については「[{% data variables.actions.hosted_runner %}について](/actions/using-github-hosted-runners/about-ae-hosted-runners)」を参照してください。

{% endif %}

{% endwarning %}

{% endif %}
