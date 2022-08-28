Registramos e exibimos dois números de committers para {% data variables.product.prodname_GH_advanced_security %} em {% data variables.product.product_location %}:

- **Committers** is the number of committers who contributed to at least one {% if currentVersion == "free-pro-team@latest" %}private {% endif %}repository in an organization and who use a seat in your enterprise license. Ou seja, eles também são integrantes da organização, um colaborador externo ou têm um convite pendente para ingressar em uma organização na sua empresa.
- **Único para este repositório/organização** é o número de committers que contribuíram apenas para este repositório ou para repositórios nesta organização. Este número mostra a quantidade de estações de licença que você pode liberar, desabilitando {% data variables.product.prodname_GH_advanced_security %} para esse repositório ou organização.

If there are no unique committers, all active committers also contribute to other repositories or organizations that use {% data variables.product.prodname_GH_advanced_security %}. Desabilitar o recurso para esse repositório ou organização não liberaria nenhuma estação na sua licença.

When you remove a user from your enterprise account, the user's license is freed within 24 hours.

{% note %}

**Note:** Users can contribute to multiple repositories or organizations. Usage is measured across the whole enterprise account to ensure that each member uses one seat regardless of how many repositories or organizations the user contributes to.

{% endnote %}
