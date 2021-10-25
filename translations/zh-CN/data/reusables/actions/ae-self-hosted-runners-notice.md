{% ifversion ghae %}

{% warning %}

{% ifversion ghae-next %} <!-- Remove elsif condition below when toggling -->

**Warning:** Self-hosted runners are enabled by default for {% data variables.product.prodname_ghe_managed %}. Self-hosted runners are long-lived, and any compromise to the host machine could leak secrets or credentials or enable other attacks. If you'd like to disable self-hosted runners for your enterprise, you can contact {% data variables.product.prodname_dotcom %} support. For more information about the risks of using self-hosted runners, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

{% elsif ghae %} <!-- Remove this condition when toggling above flag -->

**Warning:** Self-hosted runners are currently disabled for {% data variables.product.prodname_ghe_managed %}. 这是因为 {% data variables.product.prodname_ghe_managed %} 为安全边界提供了不符合自托管运行器工作方式的保证。 但是，如果您确实需要使用具有 {% data variables.product.prodname_ghe_managed %} 的自托管运行器并了解安全的意义，可以联系 {% data variables.product.prodname_dotcom %} 支持以了解将会启用自托管运行器的安全异常。

如果您不需要自托管的运行器，则可使用 {% data variables.actions.hosted_runner %} 来运行您的工作流程。 更多信息请参阅“[关于 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)”。

{% endif %}

{% endwarning %}

{% endif %}
