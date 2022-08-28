{% if currentVersion == "github-ae@latest" %}
要允许您的
{% data variables.actions.hosted_runner %} 与 {% data variables.product.prodname_dotcom %} 通信，请将 {% data variables.actions.hosted_runner %} 的 IP 地址或 IP 地址范围添加到 IP 允许列表。 更多信息请参阅“[添加允许的 IP 地址](#adding-an-allowed-ip-address)”。
{% else %}
{% warning %}

**警告**：如果您使用 IP 允许列表，并且还希望使用 {% data variables.product.prodname_actions %}，则必须使用自托管运行器。 更多信息请参阅“[托管您自己的运行器](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)”。

{% endwarning %}
要允许您的自行托管运行器与

{% data variables.product.prodname_dotcom %} 通信，请将自托管运行器的 IP 地址或 IP 地址范围添加到 IP 允许列表。 更多信息请参阅“[添加允许的 IP 地址](#adding-an-allowed-ip-address)”。
{% endif %}
