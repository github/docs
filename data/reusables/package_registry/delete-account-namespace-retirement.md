If the account namespace includes any packages or container images stored in a {% data variables.product.prodname_registry %} registry, {% data variables.product.company_short %} deletes the packages and container images when you delete your account. By deleting your account, you may break projects that depend on these packages and images.

{% ifversion fpt or ghec %}
If the account namespace includes any public container images with more than 5,000 downloads, the full name of these container images (`NAMESPACE/IMAGE-NAME`) is permanently retired when you delete the account to ensure the container image name cannot be reused in the future.
{% endif %}
