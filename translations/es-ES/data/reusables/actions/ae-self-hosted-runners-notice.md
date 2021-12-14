{% ifversion ghae %}

{% warning %}

**Warning:** Self-hosted runners are long-lived, and any compromise to the host machine could leak secrets or credentials or enable other attacks. Para obtener más información sobre los riesgos de utilizar ejecutores auto-hospedados, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions#potential-impact-of-a-compromised-runner)". For more information about the management of access to {% data variables.product.prodname_actions %} for {% data variables.product.product_location %}, see "[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise)."

{% endwarning %}

{% endif %}
