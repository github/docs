---
title: Grupos externos
intro: A API de grupos externos permite que você visualize os grupos de provedores de identidade externos que estão disponíveis para sua organização e gerencie a conexão entre grupos externos e equipes na sua organização.
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de grupos externos

Para usar esta API, o usuário autenticado deve ser um mantenedor de equipe ou um proprietário da organização associada à equipe.

{% ifversion ghec %}
{% note %}

**Notas:**

- A API de grupos externos está disponível apenas para organizações que fazem parte de uma empresa que usa {% data variables.product.prodname_emus %}. Para obter mais informações, consulte[Sobre usuários gerenciados pela empresa](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- Se sua organização usar a sincronização de equipe, você poderá usar a API de sincronização de equipe. Para obter mais informações, consulte "[API de sincronização de equipe](#team-synchronization)".

{% endnote %}
{% endif %}
