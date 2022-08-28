{% ifversion ghae %}

{% warning %}

{% ifversion ghae-next %} <!-- Remove elsif condition below when toggling -->

**Warning:** Self-hosted runners are enabled by default for {% data variables.product.prodname_ghe_managed %}. Self-hosted runners are long-lived, and any compromise to the host machine could leak secrets or credentials or enable other attacks. If you'd like to disable self-hosted runners for your enterprise, you can contact {% data variables.product.prodname_dotcom %} support. For more information about the risks of using self-hosted runners, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)."

{% elsif ghae %} <!-- Remove this condition when toggling above flag -->

**Warning:** Self-hosted runners are currently disabled for {% data variables.product.prodname_ghe_managed %}. This is because {% data variables.product.prodname_ghe_managed %} offers guarantees for security boundaries which are incompatible with how self-hosted runners work. However, if you do need to use self-hosted runners with {% data variables.product.prodname_ghe_managed %} and understand the security implications, you can contact {% data variables.product.prodname_dotcom %} support for a security exception that will enable self-hosted runners.

If you don't need self-hosted runners, then you can use {% data variables.actions.hosted_runner %}s to run your workflows. For more information, see "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."

{% endif %}

{% endwarning %}

{% endif %}
