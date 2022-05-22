Registramos y mostramos dos números de confirmantes para la {% data variables.product.prodname_GH_advanced_security %} en {% data variables.product.product_location %}:

- **Committers** is the number of committers who contributed to at least one {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository in an organization and who use a seat in your enterprise license. Es decir, también son un miembro de la organización, un colaborador externo, o tienen una invitación pendiente para unirse a una organización en tu empresa.
- **Únicos para este repositorio/organización** es la cantidad de confirmantes que contribuyen únicamente a este repositorio o a los repositorios en esta organización. Esta cantidad muestra cuántas plazas de la licencia puedes liberar si inhabilitas la {% data variables.product.prodname_GH_advanced_security %} para este repositorio u organización.

If there are no unique committers, all active committers also contribute to other repositories or organizations that use {% data variables.product.prodname_GH_advanced_security %}. Inhabilitar la característica para este repositorio u organización no liberará plazas en tu licencia.

When you remove a user from your enterprise account, the user's license is freed within 24 hours.

{% note %}

**Note:** Users can contribute to multiple repositories or organizations. Usage is measured across the whole enterprise account to ensure that each member uses one seat regardless of how many repositories or organizations the user contributes to.

{% endnote %}
