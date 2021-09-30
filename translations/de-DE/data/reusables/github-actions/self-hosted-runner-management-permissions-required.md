A self-hosted runner can be located in either your repository, organization, or {% ifversion fpt %}enterprise account settings on {% data variables.product.prodname_dotcom %}{% elsif ghes or ghae %} enterprise settings on {% data variables.product.product_location %}{% endif %}. Um einen selbst-gehosteten Läufer zu verwalten, musst Du über die folgenden Berechtigungen verfügen, abhängig davon, wo der selbst-gehostete Läufer hinzugefügt wurde:
- **User repository**: You must be the repository owner.
- **Organization**: You must be an organization owner.
- **Organization repository**: You must be an organization owner, or have admin access to the repository.
{% ifversion fpt %}
- **Enterprise account**: You must be an enterprise owner.
{% elsif ghes or ghae %}
- **Enterprise**: You must be a {% data variables.product.prodname_enterprise %} site administrator.
{% endif %}
