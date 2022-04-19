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

Opcionalmente, é possível escolher adicionar uma descrição, localização, site e endereço de e-mail da sua organização e fixar repositórios importantes.{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4749 %} Você pode personalizar o perfil da sua organização adicionando um arquivo README.md. Para obter mais informações, consulte "[Personalizando o perfil da sua organização](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."{% endif %}

{% ifversion fpt %}
Organizations that use {% data variables.product.prodname_ghe_cloud %} can confirm their organization's identity and display a "Verified" badge on their organization's profile page by verifying the organization's domains with {% data variables.product.product_name %}. For more information, see "[Verifying or approving a domain for your organization](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)" in the {% data variables.product.prodname_ghe_cloud %} documenatation.
{% elsif ghec or ghes > 3.1 %}
To confirm your organization's identity and display a "Verified" badge on your organization profile page, you can verify your organization's domains with {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Verificar ou aprovar um domínio para a sua organização](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![Exemplo de página de perfil da organização](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![Exemplo de página de perfil da organização](/assets/images/help/profile/org_profile.png)
{% endif %}

## Leia mais

- "[Sobre organizações](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
