---
title: Sobre o perfil da sua organização
intro: A página de perfil da sua organização mostra informações básicas sobre a sua organização.
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Perfil da organização
---

Opcionalmente, é possível escolher adicionar uma descrição, localização, site e endereço de e-mail da sua organização e fixar repositórios importantes.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} Você pode personalizar o perfil público da sua organização adicionando um arquivo README.md. Para obter mais informações, consulte "[Personalizando o perfil da sua organização](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."{% endif %}

{% ifversion fpt %}
As organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem confirmar a identidade da sua organização e exibir um selo "Verificado" na página de perfil da organização, verificando os domínios da organização com {% data variables.product.product_name %}. Para obter mais informações, consulte "[verificando ou aprovando um domínio para sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" na documentação de {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec or ghes %}
Para confirmar a identidade da sua organização e exibir um selo "Verificado" na página de perfil da organização, você pode verificar os domínios da sua organização com {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Verificar ou aprovar um domínio para a sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![Exemplo de página de perfil da organização](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![Exemplo de página de perfil da organização](/assets/images/help/profile/org_profile.png)
{% endif %}

## Leia mais

- "[Sobre organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
