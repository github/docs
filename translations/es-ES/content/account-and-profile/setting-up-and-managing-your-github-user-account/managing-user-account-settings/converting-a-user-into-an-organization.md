---
title: Convertir un usuario en una organización
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization
  - /articles/explaining-the-account-transformation-warning
  - /articles/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/converting-a-user-into-an-organization
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/converting-a-user-into-an-organization
intro: Puedes convertir tu cuenta personal en una organización. Esto permite que haya más permisos granulares para repositorios que pertenecen a la organización.
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

 - **Ya no** podrás iniciar sesión en la cuenta personal convertida.
 - **Ya no** podrás crear o modificar gists que pertenecen a la cuenta personal convertida.
 - Una organización **no puede** volver a convertirse en un usuario.
 - Las llaves SSH, tokens de OAuth, perfiles de trabajo, reacciones, y el resto de la información asociada con el usuario, **no** se transferirán a la organización. Esto es solo verdadero para la cuenta personal que se está convirtiendo y no para cualquiera de los colaboradores de la cuenta personal.
 - Cualquier confirmación que se haga con la cuenta personal convertida **ya no estará vinculada** a ella. Las confirmaciones **permanecerán** intactas.
 - Se borrará cualquier bifurcación o repositorio privado que se haga con la cuenta personal convertida.

{% endwarning %}

## Mantener tu cuenta personal y crear una organización nueva manualmente

Si quieres que tu organización tenga el mismo nombre que estás usando actualmente para tu cuenta personal o si quieres mantener intacta la información en ella, entonces debes crear una organización nueva y transferir tus repositorios a esta en vez de convertir tu cuenta personal en una organización.

1. Para retener el nombre de tu cuenta personal y usarlo individualmente, [cambia su nombre](/articles/changing-your-github-username) a algo nuevo y maravilloso.
2. [Crea una organización nueva](/articles/creating-a-new-organization-from-scratch) con el nombre original de tu cuenta personal.
3. [Transfiere tus repositorios](/articles/transferring-a-repository) a tu nueva cuenta de la organización.

## Convertir tu cuenta personal en una organización automáticamente

También puedes convertir tu cuenta personal directamente en una organización. Convertir tu cuenta:
 - Preserva los repositorios ya que no tienen la necesidad de ser transferidos a otra cuenta manualmente
 - Invita automáticamente a que los colaboradores se unan a los equipos con permisos equivalentes a los que tenían antes
 {% ifversion fpt or ghec %}- Para las cuentas personales de {% data variables.product.prodname_pro %}, se transiciona automáticamente la facturación a [el {% data variables.product.prodname_team %} de pago](/articles/about-billing-for-github-accounts) sin la necesidad de volver a ingresar la información de pago, ajustar tu ciclo de facturación o pagar doble en cualquier momento{% endif %}

1. Crea una nueva cuenta personal, que usarás para iniciar sesión en GitHub y acceder a la organización y a tus repositorios después de la conversión.
2.  [Sal de cualquier organización](/articles/removing-yourself-from-an-organization) a la cual se haya unido la cuenta personal que vas a convertir.
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.organizations %}
5. En "Transform account" (Transformar cuenta), haz clic en **Turn <username> into an organization** (Convertir en una organización). ![Botón para convertir la organización](/assets/images/help/settings/convert-to-organization.png)
6. En el cuadro de diálogo Account Transformation Warning (Advertencia de transformación de la cuenta), revisa y confirma la confirmación. Ten en cuenta que la información en este cuadro es la misma que la advertencia en la parte superior de este artículo. ![Advertencia de conversión](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. En la página "Transform your user into an organization" (Transformar tu usuario en una organización), debajo de "Choose an organization owner" (Elegir un propietario de la organización), elige la cuenta personal secundaria que creaste en la sección anterior u otro usuario en quien confías para administrar la organización. ![Página Add organization owner (Agregar propietario de la organización)](/assets/images/help/organizations/organization-add-owner.png)
8. Escoge la nueva suscripción de la organización y escribe tu información de facturación si se te solicita.
9. Haz clic en **Create Organization** (Crear organización).
10. Inicia sesión en la cuenta personal nueva que creaste en el paso uno y luego utiliza el alternador de contexto para acceder a tu organización nueva.

{% tip %}

**Tip**: Cuando conviertas una cuenta personal en organización, agregaremos colaboradores en los repositorios que le pertenecen a esta a la organización nueva como *colaboradores externos*. Luego puedes invitar a los *colaboradores externos* para que se conviertan en miembros de la organización nueva, si así lo deseas. Para obtener más información, consulta la sección "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)".

{% endtip %}

## Leer más
- "[Configurar equipos](/articles/setting-up-teams)"
{% ifversion fpt or ghec %}- "[Invitar usuarios a unirse a tu organización](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Acceder a una organización](/articles/accessing-an-organization)"
