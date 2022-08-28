{% if currentVersion == "github-ae@latest" %}
{% data variables.actions.hosted_runner %}に
{% data variables.product.prodname_dotcom %}との通信を許可するには、{% data variables.actions.hosted_runner %}のIPアドレスもしくはIPアドレスの範囲をIP許可リストに追加してください。 詳しい情報については「[許可されたIPアドレスの追加](#adding-an-allowed-ip-address)」を参照してください。
{% else %}
{% warning %}

**警告**: IP許可リストを使い、{% data variables.product.prodname_actions %}も使いたい場合には、セルフホストランナーを使わなければなりません。 詳しい情報については「[自分のランナーをホストする](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)」を参照してください。

{% endwarning %}
セルフホストランナーに

{% data variables.product.prodname_dotcom %}との通信を許可するには、セルフホストランナーのIPアドレスもしくはIPアドレスの範囲をIP許可リストに追加してください。 詳しい情報については「[許可されたIPアドレスの追加](#adding-an-allowed-ip-address)」を参照してください。
{% endif %}
