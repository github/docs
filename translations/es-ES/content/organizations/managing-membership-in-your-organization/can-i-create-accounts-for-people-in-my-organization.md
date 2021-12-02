---
title: ¿Puedo crear cuentas para personas en mi organización?
intro: 'Si bien puedes agregar usuarios a una organización que has creado, no puedes crear cuentas de usuario personales en nombre de otra persona.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization/
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

## About user accounts

Because you access an organization by logging in to a user account, each of your team members needs to create their own user account. After you have usernames for each person you'd like to add to your organization, you can add the users to teams.

{% ifversion fpt or ghec %}
If you need greater control over the user accounts of your organization members, consider {% data variables.product.prodname_emus %}. {% data reusables.enterprise-accounts.emu-short-summary %}
{% endif %}

## Agregar usuarios a tu organización

1. Provide each person instructions to [create a user account](/articles/signing-up-for-a-new-github-account).
2. Preguntar el nombre de usuario a cada persona a la que deseas dar membresía a la organización.
3. [Invitar a las nuevas cuentas personales para que se unan](/articles/inviting-users-to-join-your-organization) a tu organización. Usar [roles de la organización](/articles/permission-levels-for-an-organization) y [permisos de repositorio](/articles/repository-permission-levels-for-an-organization) para limitar el acceso a cada cuenta.
