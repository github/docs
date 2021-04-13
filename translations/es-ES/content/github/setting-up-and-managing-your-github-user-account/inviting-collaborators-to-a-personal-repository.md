---
title: Invitar colaboradores a un repositorio personal
intro: 'Puedes {% if currentVersion == "free-pro-team@latest" %}Invitar usuarios para que se conviertan en{% else %}agregar usuarios como{% endif %} colaboradores en tu repositorio personal.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator/
  - /articles/adding-collaborators-to-a-personal-repository/
  - /articles/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - cuentas
  - repositories
---

Los repositorios que son propiedad de una organización pueden conceder acceso más pormenorizado. Para obtener más información, consulta "[Permisos de acceso en {% data variables.product.product_name %}](/articles/access-permissions-on-github)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.org-invite-expiration %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Nota:** {% data variables.product.company_short %} limita la cantidad de personas que se pueden invitar a un repositorio dentro de un período de 24 horas. Si excedes este límite, espera 24 horas o crea una organización para colaborar con más personas.

{% endnote %}

{% endif %}

1. Solicita el nombre de usuario de la persona que estás invitando como colaboradora.

{% if currentVersion == "free-pro-team@latest" %} Si no tienen un nombre de usuario aún, pueden registrarse en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Registrarse para obtener una cuenta nueva de {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account)".{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
1. Da clic en **Invitar un colaborador**. ![botón de "invitar un colaborador"](/assets/images/help/repository/invite-a-collaborator-button.png)
2. En el campo de búsqueda, comienza a teclear el nombre de la persona que quieres invitar, luego da clic en un nombre de la lista de resultados. ![Campo de búsqueda para teclear el nombre de una persona e invitarla al repositorio](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Da clic en **Añadir NOMBRE a REPOSITORIO**. ![Botón para añadir un colaborador](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. En la barra lateral izquierda, haz clic en **Collaborators** (Colaboradores). ![Barra lateral de configuraciones del repositorio con Colaboradores resaltados](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. En "Colaboradores", comienza a escribir el nombre de usuario del colaborador.
7. Selecciona el nombre de usuario del colaborador del menú desplegable. ![Menú desplegable de la lista de colaboradores](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Haz clic en **Add collaborator** (Agregar colaborador). ![Botón Add (Agregar)](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
9. El usuario recibirá un correo electrónico invitándolo al repositorio. Una vez que acepte la invitación, tendrá acceso de colaborador a tu repositorio.
{% endif %}

### Leer más

- "[Niveles de permiso para el repositorio de una cuenta de usuario](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account)"
- "[Eliminar un colaborador de un repositorio personal](/articles/removing-a-collaborator-from-a-personal-repository)"
- "[Eliminarte a ti mismo del repositorio de un colaborador](/articles/removing-yourself-from-a-collaborator-s-repository)"
- "[Organizar los miembros en equipos](/organizations/organizing-members-into-teams)"
