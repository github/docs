---
title: ¿Puedo crear cuentas para personas en mi organización?
intro: 'While you can add users to an organization you''ve created, you can''t create personal accounts on behalf of another person.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Crear cuentas para las personas
---

## About personal accounts

Because you access an organization by logging in to a personal account, each of your team members needs to create their own personal account. Después de que tengas nombres de usuario para cada una de las personas que quieras agregar a tu organización, podrás agregarlos a los equipos.

{% ifversion fpt or ghec %}
{% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %}{% else %}You{% endif %} can use SAML single sign-on to centrally manage the access that personal accounts have to the organization's resources through an identity provider (IdP). Para obtener más información, consulta la sección "[Acerca de la administración de identidad y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

También puedes considerar los {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Agregar usuarios a tu organización

1. Brinda a cada persona las instrucciones para [crear una cuenta personal](/articles/signing-up-for-a-new-github-account).
2. Preguntar el nombre de usuario a cada persona a la que deseas dar membresía a la organización.
3. [Invitar a las nuevas cuentas personales para que se unan](/articles/inviting-users-to-join-your-organization) a tu organización. Usar [roles de la organización](/articles/permission-levels-for-an-organization) y [permisos de repositorio](/articles/repository-permission-levels-for-an-organization) para limitar el acceso a cada cuenta.
