---
title: Mejores prácticas para abandonar la empresa
intro: 'Si utilizas tu cuenta en {% data variables.product.product_name %} tanto para propósitos personales como para trabajo, hay algunas cosas que debes considerar cuando salgas de tu empresa u organización.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Dejar tu compañía
---

Antes de que salgas de tu empresa, asegúrate de actualizar la siguiente información en tu cuenta personal:

- Quitar la marca de verificación de la dirección de correo electrónico de la empresa al [eliminarla de los parámetros de Correo electrónico](/articles/changing-your-primary-email-address). Puedes volver a agregarla sin verificar para conservar todas las confirmaciones asociadas vinculadas con tu cuenta.
- [Cambiar tu dirección principal de correo electrónico](/articles/changing-your-primary-email-address) del correo electrónico de tu empresa a tu correo electrónico personal.
- [Verificar tu nueva dirección principal de correo electrónico](/articles/verifying-your-email-address).
- [Cambiar tu nombre de usuario de GitHub](/articles/changing-your-github-username) para eliminar cualquier referencia a tu empresa u organización, si es necesario.
- If you've enabled two-factor (2FA) authentication for your personl account, make sure that you (not your company) control the 2FA authentication method you have configured. Para obtener más información, consulta "[Configurar autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

## Abandonar las organizaciones

Si has estado trabajando con repositorios que pertenecen a una organización, deberás [eliminarte como miembro de la organización](/articles/removing-yourself-from-an-organization). Ten en cuenta que si eres el propietario de la organización, primero deberías [transferir tu pertenencia a la organización](/articles/transferring-organization-ownership) a otra persona.

Unless you're using a {% data variables.product.prodname_managed_user %}, you'll still be able to access your personal account, even after leaving the organization. Para obtener más información sobre {% data variables.product.prodname_emus %}, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}

## Eliminar asociaciones profesionales con repositorios personales.

Si has estado colaborando de forma profesional con otra persona en los repositorios que le pertenecen a tu cuenta personal, necesitarás [eliminarte como colaborador](/articles/removing-yourself-from-a-collaborator-s-repository) de estos repositorios.

- [Deja de mirar repositorios](https://github.com/watching) relacionados con tu trabajo. No desearás volver a ver esas notificaciones.
- [Transfiere los repositorios que posees](/articles/how-to-transfer-a-repository) a otros que deben seguir trabajando con ellos una vez que te marches.
- [Elimina bifurcaciones que te pertenecen](/articles/deleting-a-repository) y que están relacionadas con el trabajo que estabas haciendo. No te preocupes, si eliminas una bifurcación no eliminarás el repositorio ascendente.
- Elimina copias locales de las bifurcaciones que pueden existir en tu computadora.

```shell
$ rm -rf <em>work_directory</em>
```
