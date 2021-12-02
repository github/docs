---
title: Acerca del perfil de tu organización
intro: La página del perfil de tu organización muestra la información básica acerca de tu organización.
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
shortTitle: Perfil de la organización
---

You can optionally choose to add a description, location, website, and email address for your organization, and pin important repositories.{% ifversion not ghes and not ghae %} You can customize your organization's profile by adding a README.md file. For more information, see "[Customizing your organization's profile](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)."{% endif %}

{% ifversion fpt or ghec %}Para confirmar la identidad de tu organización y mostrar el distintivo "Verificada" en la página del perfil de tu organización, debes verificar los dominios de tu organización con {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Verificar o aprobar un dominio para tu organización](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)".{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec %}
![Muestra de la página de perfil de una organización](/assets/images/help/organizations/org_profile_with_overview.png)
{% else %}
![Muestra de la página de perfil de una organización](/assets/images/help/profile/org_profile.png)
{% endif %}

## Leer más

- "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)"
