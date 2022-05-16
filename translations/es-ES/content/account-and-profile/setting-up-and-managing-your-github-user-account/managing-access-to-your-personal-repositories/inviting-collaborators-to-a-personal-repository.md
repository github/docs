---
title: Invitar colaboradores a un repositorio personal
intro: 'Puedes {% ifversion fpt or ghec %}invitar usuarios para convertir{% else %}agregar usuarios como{% endif %} colaboradores de tu repositorio personal.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator
  - /articles/adding-collaborators-to-a-personal-repository
  - /articles/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Invita colaboradores
---

Los repositorios que son propiedad de una organización pueden conceder acceso más pormenorizado. Para obtener más información, consulta "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github)".

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt or ghec %}

Si eres un miembro de una {% data variables.product.prodname_emu_enterprise %}, solo puedes invitar a otros miembros de esta a que colaboren contigo. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**Nota:** {% data variables.product.company_short %} limita la cantidad de personas que se pueden invitar a un repositorio dentro de un período de 24 horas. Si excedes este límite, espera 24 horas o crea una organización para colaborar con más personas.

{% endnote %}

{% endif %}

1. Solicita el nombre de usuario de la persona a la que estás invitando como colaborador.{% ifversion fpt or ghec %} Si aún no tiene un nombre de usuario, puede registrarse para {% data variables.product.prodname_dotcom %} Para obtener más información, consulta "[Registrar una cuenta {% data variables.product.prodname_dotcom %} nueva](/articles/signing-up-for-a-new-github-account)".{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658%}
{% data reusables.repositories.click-collaborators-teams %}
1. Da clic en **Invitar un colaborador**. ![botón de "invitar un colaborador"](/assets/images/help/repository/invite-a-collaborator-button.png)
2. En el campo de búsqueda, comienza a teclear el nombre de la persona que quieres invitar, luego da clic en un nombre de la lista de resultados. ![Campo de búsqueda para teclear el nombre de una persona e invitarla al repositorio](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Da clic en **Añadir NOMBRE a REPOSITORIO**. ![Botón para añadir un colaborador](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. En la barra lateral izquierda, haz clic en **Collaborators** (Colaboradores). ![Barra lateral de configuraciones del repositorio con Colaboradores resaltados](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. En "Colaboradores", comienza a escribir el nombre de usuario del colaborador.
7. Selecciona el nombre de usuario del colaborador del menú desplegable. ![Menú desplegable de la lista de colaboradores](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Haz clic en **Add collaborator** (Agregar colaborador). ![Botón de "Agregar colaborador"](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% ifversion fpt or ghec %}
9. El usuario recibirá un correo electrónico invitándolo al repositorio. Una vez que acepte la invitación, tendrá acceso de colaborador a tu repositorio.
{% endif %}

## Leer más

- "[Niveles de permiso para un repositorio de una cuenta personal](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)"
- "[Eliminar un colaborador de un repositorio personal](/articles/removing-a-collaborator-from-a-personal-repository)"
- "[Eliminarte a ti mismo del repositorio de un colaborador](/articles/removing-yourself-from-a-collaborator-s-repository)"
- "[Organizar los miembros en equipos](/organizations/organizing-members-into-teams)"
