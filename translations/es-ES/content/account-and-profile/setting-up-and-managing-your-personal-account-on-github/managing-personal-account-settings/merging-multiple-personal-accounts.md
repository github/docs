---
title: Merging multiple personal accounts
intro: 'Si tienes cuentas separadas para uso laboral y personal, puedes fusionar las cuentas.'
redirect_from:
  - /articles/can-i-merge-two-accounts
  - /articles/keeping-work-and-personal-repositories-separate
  - /articles/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/merging-multiple-user-accounts
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/merging-multiple-user-accounts
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Fusionar cuentas personales múltiples
---

{% tip %}

{% ifversion ghec %}

**Tip:** {% data variables.product.prodname_emus %} permite que una empresa aprovisione cuentas personales únicas para sus miembros mediante un proveedor de identidad (IdP). Para obtener más información, consulta la sección "[Acerca de los Usuarios Empresariales Administrados](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)". Para otros casos de uso, te recomendamos utilizar solo una cuenta personal para administrar los repositorios tanto profesionales como personales.

{% else %}

**Tip:** Te recomendamos utilizar solo una cuenta personal para administrar tanto los repositorios profesionales como personales.

{% endif %}

{% endtip %}

{% warning %}

**Advertencia:**
- No se pueden transferir los permisos a repositorios y organizaciones entre cuentas. Si la cuenta que quieres borrar tiene un permiso de acceso existente, un propietario de organización o administrador de repositorio necesitará invitar a la cuenta que quieras mantener.
- Cualquier confirmación que se haya creado con una dirección de correo electrónico de tipo `no-reply` que haya proporcionado GitHub no se podrá transferir de una cuenta a otra. Si la cuenta que quieres borrar utilizó la opción de **Mantener mi dirección de correo electrónico como privada**, no será posible transferir las confirmaciones que haya creado la cuenta que vas a borrar a la cuenta que vas a mantener.

{% endwarning %}

1. [Transfiere cualquier repositorio](/articles/how-to-transfer-a-repository) desde la cuenta que deseas eliminar a la cuenta que deseas mantener. También se transfieren propuestas, solicitudes de extracción y wikis. Verifica que los repositorios existan en la cuenta que deseas mantener.
2. [Actualiza las URL remotas](/github/getting-started-with-github/managing-remote-repositories) en cualquier clon local de los repositorios que se movieron.
3. [Elimina la cuenta](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/deleting-your-personal-account) que ya no deseas utilizar.
4. Para atribuir las confirmaciones pasadas a la cuenta nueva, agrega la dirección de correo electrónico que utilizaste para crear dichas confirmaciones a la cuenta que vas a conservar. Para obtener más información, consulta"[¿Por qué mis contribuciones no se muestran en mi perfil?](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

## Leer más

- [Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/articles/types-of-github-accounts)"
