---
title: Convertir un usuario en una organización
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization/
  - /articles/explaining-the-account-transformation-warning/
  - /articles/converting-a-user-into-an-organization
intro: Puedes convertir tu cuenta de usuario en una organización. Esto permite que haya más permisos granulares para repositorios que pertenecen a la organización.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

{% warning %}

**Advertencia**: Antes de convertir un usuario en una organización, ten en cuenta estos puntos:

 - **Ya no** podrás iniciar sesión con la cuenta de usuario convertida.
 - **Ya no** podrás crear o modificar gists que pertenecen a la cuenta de usuario convertida.
 - Una organización **no puede** volver a convertirse en un usuario.
 - Las claves SSH, los tokens de OAuth, las reacciones de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %},{% endif %} y la información del usuario asociado **no** se transferirán a la organización. Esto es solo true para la cuenta de usuario que se convertirá, no para cualquiera de los colaboradores de la cuenta del usuario.
 - Todas las confirmaciones realizadas a la cuenta del usuario convertida **ya no se asociarán** con esa cuenta. Las confirmaciones **permanecerán** intactas.

{% endwarning %}

### Conservar la cuenta de usuario personal y crear una nueva organización manualmente

Si deseas que tu organización tenga el mismo nombre que estás usando actualmente para tu cuenta personal, o si deseas que la información de la cuenta del usuario personal permanezca intacta, debes crear una organización nueva y trasnferirla a tus repositorios en lugar de convertir tu cuenta de usuario en una organización.

1. Para conservar el nombre de la cuenta de usuario para uso personal, [cambia el nombre de tu cuenta de usuario personal](/articles/changing-your-github-username) por uno nuevo y maravilloso.
2. [Crea una nueva organización](/articles/creating-a-new-organization-from-scratch) con el nombre original de tu cuenta de usuario personal.
3. [Transfiere tus repositorios](/articles/transferring-a-repository) a tu nueva cuenta de la organización.

### Convertir tu cuenta personal en una organización automáticamente

Puedes convertir tu cuenta de usuario personal directamente en una organización. Convertir tu cuenta:
 - Preserva los repositorios ya que no tienen la necesidad de ser transferidos a otra cuenta manualmente
 - Invita automáticamente a que los colaboradores se unan a los equipos con permisos equivalentes a los que tenían antes
 {% if currentVersion == "free-pro-team@latest" %}- Para las cuentas de usuario en {% data variables.product.prodname_pro %}, automáticamente traslada la facturación [al {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts) pago sin la necesidad de volver a ingresar la información de pago, ajustar tu ciclo de facturación o duplicar el pago en ningún momento{% endif %}

1. Crea una nueva cuenta personal, que usarás para iniciar sesión en GitHub y acceder a la organización y a tus repositorios después de la conversión.
2.  [Sal de todas las organizaciones](/articles/removing-yourself-from-an-organization) a las que se ha unido la cuenta de usuario que estás convirtiendo.
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
5. En "Transform account" (Transformar cuenta), haz clic en **Turn <username> into an organization** (Convertir en una organización). ![Botón para convertir la organización](/assets/images/help/settings/convert-to-organization.png)
6. En el cuadro de diálogo Account Transformation Warning (Advertencia de transformación de la cuenta), revisa y confirma la confirmación. Ten en cuenta que la información en este cuadro es la misma que la advertencia en la parte superior de este artículo. ![Advertencia de conversión](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. En la página "Transform your user into an organization" (Transformar tu usuario en una organización), debajo de "Choose an organization owner" (Elegir un propietario de la organización), elige la cuenta personal secundaria que creaste en la sección anterior u otro usuario en quien confías para administrar la organización. ![Página Add organization owner (Agregar propietario de la organización)](/assets/images/help/organizations/organization-add-owner.png)
8. Escoge la nueva suscripción de la organización y escribe tu información de facturación si se te solicita.
9. Haz clic en **Create Organization** (Crear organización).
10. Inicia sesión en la nueva cuenta de usuario que creaste en el paso uno, luego usa el cambiador de contexto para acceder a la organización nueva.

{% tip %}

**Sugerencia**: Cuando conviertas una cuenta de usuario en una organización, agregaremos los colaboradores a los repositorios que le pertenecen a la cuenta de la nueva organización como *colaboradores externos*. Luego puedes invitar a los *colaboradores externos* para que se conviertan en miembros de la organización nueva, si así lo deseas. Para obtener más información, consulta "[Niveles de permiso para una organización](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)."

{% endtip %}

### Leer más
- "[Configurar equipos](/articles/setting-up-teams)"
{% if currentVersion == "free-pro-team@latest" %}- "[Invitar usuarios a unirse a tu organización](/articles/inviting-users-to-join-your-organization)"{% endif %}
- "[Acceder a una organización](/articles/accessing-an-organization)"
