---
title: Grupos externos
intro: The External groups API allows you to view the external identity provider groups that are available to your organization and manage the connection between external groups and teams in your organization.
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the External groups API

Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe.

{% ifversion ghec %}
{% note %}

**Notas:**

- A API de grupos externos está disponível apenas para organizações que fazem parte de uma empresa que usa {% data variables.product.prodname_emus %}. Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- Se sua organização usar a sincronização de equipe, você poderá usar a API de sincronização de equipe. Para obter mais informações, consulte "[API de sincronização de equipe](#team-synchronization)".

{% endnote %}
{% endif %}
