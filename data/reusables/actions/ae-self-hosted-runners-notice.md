{% ifversion ghae %}

{% warning %}

**Warning:** Self-hosted runners are long-lived, and any compromise to the host machine could leak secrets or credentials or enable other attacks. For more information about the risks of using self-hosted runners, see "[Security hardening for {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)." For more information about the management of access to {% data variables.product.prodname_actions %} for {% data variables.product.product_location %}, see "[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endwarning %}

{% endif %}
