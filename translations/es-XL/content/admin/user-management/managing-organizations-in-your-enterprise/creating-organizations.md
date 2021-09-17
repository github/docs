---
title: Crear organizaciones
redirect_from:
  - /enterprise/admin/articles/creating-organizations/
  - /enterprise/admin/user-management/creating-organizations
  - /admin/user-management/creating-organizations
intro: Puedes elegir establecer una nueva organización o convertir una cuenta personal existente en una organización.
versions:
  enterprise-server: '*'
---
Una organización es un conjunto de cuentas de usuario que posee repositorios. Las organizaciones tienen uno o más propietarios, que tienen privilegios administrativos para la organización. Las organizaciones también se pueden usar para un espacio de nombres —por ejemplo, `http(s)://[hostname]/[organization name]/` te lleva al perfil de una organización en el {% data variables.product.prodname_ghe_server %}, mientras que `http(s)://[hostname]/[organization name]/[repository name]/` te lleva al perfil de un repositorio.

Cuando creas una organización, esta no tiene repositorios asociados a ella. En cualquier momento, [los miembros de la organización con el rol de Propietario pueden agregar nuevos repositorios](/enterprise/{{ currentVersion }}/user/articles/permission-levels-for-an-organization) o transferir repositorios existentes. Para obtener más información, consulta "[Transferir un repositorio](/enterprise/{{ currentVersion }}/user/articles/transferring-a-repository)".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
3. En la sección "Organizaciones", haz clic en **New organization** (Nueva organización). ![Botón de la nueva organización](/assets/images/help/settings/new-org-button.png)
4. En "Nombre de la organización", asígnale un nombre a la organización. ![Nombre de la nueva organización](/assets/images/help/organizations/new-org-name.png)
5. En "Correo electrónico de contacto", escribe la dirección de correo electrónico de una persona que pueda ser contactada para obtener más información acerca de la organización.
6. Haz clic en **Create organization** (Crear organización).
