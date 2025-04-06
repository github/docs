> If a user in your organization attempts to change the enablement status of a feature in an enforced configuration using the REST API, the API call will appear to succeed, but no enablement statuses will change.
>
> Some situations can break the enforcement of {% data variables.product.prodname_security_configurations %} for a repository. For example, the enablement of {% data variables.product.prodname_code_scanning %} will not apply to a repository if:
> * {% data variables.product.prodname_actions %} is initially enabled on the repository, but is then disabled in the repository.
> * {% data variables.product.prodname_actions %} required by {% data variables.product.prodname_code_scanning %} configurations are not available in the repository.{% ifversion ghes %}
> * Self-hosted runners with the label `code-scanning` are not available.{% endif %}
> * The definition for which languages should not be analyzed using {% data variables.product.prodname_code_scanning %} default setup is changed.
