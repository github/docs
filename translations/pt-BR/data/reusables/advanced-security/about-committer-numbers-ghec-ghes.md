Registramos e exibimos dois números de committers para {% data variables.product.prodname_GH_advanced_security %} em {% data variables.product.product_location %}:

- **Commiters** é o número de committers que contribuíram com pelo menos um {% ifversion fpt %}repositório privado {% endif %}em uma organização e que usam uma estação na licença corporativa. Ou seja, eles também são integrantes da organização, um colaborador externo ou têm um convite pendente para ingressar em uma organização na sua empresa.
- **Único para este repositório/organização** é o número de committers que contribuíram apenas para este repositório ou para repositórios nesta organização. Este número mostra a quantidade de estações de licença que você pode liberar, desabilitando {% data variables.product.prodname_GH_advanced_security %} para esse repositório ou organização.

Se não houver committers exclusivos, todos os committers ativos também contribuem para outros repositórios ou organizações que usam {% data variables.product.prodname_GH_advanced_security %}. Desabilitar o recurso para esse repositório ou organização não liberaria nenhuma estação na sua licença.

Ao remover um usuário da sua conta corporativa, a licença do usuário é liberada dentro de 24 horas.

{% note %}

**Observação:** Os usuários podem contribuir para vários repositórios ou organizações. O uso é medido em toda a conta corporativa para garantir que cada integrante utilize uma estação, independentemente da quantidade de repositórios ou organizações para as quais o usuário contribui.

{% endnote %}
