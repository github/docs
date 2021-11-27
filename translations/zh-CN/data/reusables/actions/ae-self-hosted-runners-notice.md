{% ifversion ghae %}

{% warning %}

{% ifversion ghae-next %} <!-- Remove elsif condition below when toggling -->

**Warning:** Self-hosted runners are enabled by default for {% data variables.product.prodname_ghe_managed %}. 自托管运行器运行时间长，对主机的任何威胁都可能泄露机密或凭据或启用其他攻击。 如果您想要对企业禁用自托管运行器，可以联系 {% data variables.product.prodname_dotcom %} 支持。 有关使用自托管运行器的风险的更多信息，请参阅“[{% data variables.product.prodname_actions %} 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)”。

{% elsif ghae %} <!-- Remove this condition when toggling above flag -->

**警告：**自托管运行器目前对 {% data variables.product.prodname_ghe_managed %} 禁用。 这是因为 {% data variables.product.prodname_ghe_managed %} 为安全边界提供了不符合自托管运行器工作方式的保证。 但是，如果您确实需要使用具有 {% data variables.product.prodname_ghe_managed %} 的自托管运行器并了解安全的意义，可以联系 {% data variables.product.prodname_dotcom %} 支持以了解将会启用自托管运行器的安全异常。

如果您不需要自托管的运行器，则可使用 {% data variables.actions.hosted_runner %} 来运行您的工作流程。 更多信息请参阅“[关于 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)”。

{% endif %}

{% endwarning %}

{% endif %}
