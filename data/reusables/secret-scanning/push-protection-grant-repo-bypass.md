> [!NOTE]
> If an organization or enterprise owner configures delegated bypass at the organization or enterprise level, the repository-level settings are disabled.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}
1. Under "{% data variables.product.prodname_secret_protection %}," ensure that push protection is enabled for the repository.{% else %}
{% data reusables.repositories.navigate-to-ghas-settings %}{% endif %}
1. Under "Push protection," to the right of "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}," select the dropdown menu, then click **Specific roles or teams**.
1. Under "Bypass list," click **Add role or team**.
1. In the dialog box, select the roles and teams that you want to add to the bypass list, then click **Add selected**.

   > [!NOTE]
   > You can't add secret teams to the bypass list.
