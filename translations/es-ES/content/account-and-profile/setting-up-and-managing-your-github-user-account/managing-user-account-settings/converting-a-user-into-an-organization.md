---
title: Convertir un usuario en una organización
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: You can convert your personal account into an organization. Esto permite que haya más permisos granulares para repositorios que pertenecen a la organización.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Un usuario en una organización
---

{% warning %}

**Advertencia**: Antes de convertir un usuario en una organización, ten en cuenta estos puntos:

 - You will **no longer** be able to sign into the converted personal account.
 - You will **no longer** be able to create or modify gists owned by the converted personal account.
 - Una organización **no puede** volver a convertirse en un usuario.
 - Las llaves SSH, tokens de OAuth, perfiles de trabajo, reacciones, y el resto de la información asociada con el usuario, **no** se transferirán a la organización. This is only true for the personal account that's being converted, not any of the personal account's collaborators.
 - Any commits made with the converted personal account **will no longer be linked** to that account. Las confirmaciones **permanecerán** intactas.
 - Any forks of private repositories made with the converted personal account will be deleted.

{% endwarning %}

## Keep your personal account and create a new organization manually

If you want your organization to have the same name that you are currently using for your personal account, or if you want to keep your personal account's information intact, then you must create a new organization and transfer your repositories to it instead of converting your personal account into an organization.

1. To retain your current personal account name for your personal use, [change the name of your personal account](/articles/changing-your-github-username) to something new and wonderful.
2. [Create a new organization](/articles/creating-a-new-organization-from-scratch) with the original name of your personal account.
3. [Transfiere tus repositorios](/articles/transferring-a-repository) a tu nueva cuenta de la organización.

## Convertir tu cuenta personal en una organización automáticamente

You can also convert your personal account directly into an organization. Convertir tu cuenta:
 - Preserva los repositorios ya que no tienen la necesidad de ser transferidos a otra cuenta manualmente
 - Invita automáticamente a que los colaboradores se unan a los equipos con permisos equivalentes a los que tenían antes
 {% ifversion fpt or ghec %}- For personal accounts on {% data variables.product.prodname_pro %}, automatically transitions billing to [the paid {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) without the need to re-enter payment information, adjust your billing cycle, or double pay at any time{% endif %}

1. Crea una nueva cuenta personal, que usarás para iniciar sesión en GitHub y acceder a la organización y a tus repositorios después de la conversión.
2.  [Leave any organizations](/articles/removing-yourself-from-an-organization) the personal account you're converting has joined.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
5. En "Transform account" (Transformar cuenta), haz clic en **Turn <username> into an organization** (Convertir en una organización). ![Botón para convertir la organización](/assets/images/help/settings/convert-to-organization.png)
6. En el cuadro de diálogo Account Transformation Warning (Advertencia de transformación de la cuenta), revisa y confirma la confirmación. Ten en cuenta que la información en este cuadro es la misma que la advertencia en la parte superior de este artículo. ![Advertencia de conversión](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. En la página "Transform your user into an organization" (Transformar tu usuario en una organización), debajo de "Choose an organization owner" (Elegir un propietario de la organización), elige la cuenta personal secundaria que creaste en la sección anterior u otro usuario en quien confías para administrar la organización. ![Página Add organization owner (Agregar propietario de la organización)](/assets/images/help/organizations/organization-add-owner.png)
8. Escoge la nueva suscripción de la organización y escribe tu información de facturación si se te solicita.
9. Haz clic en **Create Organization** (Crear organización).
10. Sign in to the new personal account you created in step one, then use the context switcher to access your new organization.

{% tip %}

**Tip**: When you convert a personal account into an organization, we'll add collaborators on repositories that belong to the account to the new organization as *outside collaborators*. Luego puedes invitar a los *colaboradores externos* para que se conviertan en miembros de la organización nueva, si así lo deseas. Para obtener más información, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% endtip %}

## Leer más
- "[Configurar equipos](/articles/setting-up-teams)"
{% ifversion fpt or ghec %}- "[Invitar usuarios a unirse a tu organización](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Acceder a una organización](/articles/accessing-an-organization)"
