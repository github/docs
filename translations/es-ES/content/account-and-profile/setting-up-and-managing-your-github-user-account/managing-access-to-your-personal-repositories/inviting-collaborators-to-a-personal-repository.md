---
title: Invitar colaboradores a un repositorio personal
intro: You can {% ifversion fpt or ghec %}invite users to become{% else %}add users as{% endif %} collaborators to your personal repository.
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
shortTitle: Invite collaborators
ms.openlocfilehash: 6db661abfc48b87ae7eae2c515be2e14e3717ec4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092283"
---
Los repositorios que son propiedad de una organización pueden conceder acceso más pormenorizado. Para más información, vea "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github)".

{% data reusables.organizations.org-invite-expiration %}

{% ifversion fpt or ghec %}

Si eres un miembro de una {% data variables.product.prodname_emu_enterprise %}, solo puedes invitar a otros miembros de esta a que colaboren contigo. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% note %}

**Nota:** {% data variables.product.company_short %} limita la cantidad de personas a las que se puede invitar a un repositorio en un período de 24 horas. Si excedes este límite, espera 24 horas o crea una organización para colaborar con más personas.

{% endnote %}

{% endif %}

1. Solicite el nombre de usuario de la persona a la que invita como colaborador.{% ifversion fpt or ghec %} Si todavía no tiene un nombre de usuario, puede registrarse para {% data variables.product.prodname_dotcom %} Para más información, vea "[Registro para una cuenta nueva de {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account)".{% endif %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658%} {% data reusables.repositories.click-collaborators-teams %}
1. Haga clic en **Invitar a un colaborador**.
  ![Botón "Invitar a un colaborador"](/assets/images/help/repository/invite-a-collaborator-button.png)
2. Comienza a teclear el nombre de la persona que deseas invitar dentro del campo de búsqueda. Posteriormente, da clic en algún nombre de la lista de coincidencias.
  ![Campo de búsqueda para escribir el nombre de la persona a la que se va a invitar al repositorio](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Haga clic en **Agregar NOMBRE al REPOSITORIO**.
    ![Botón para agregar un colaborador](/assets/images/help/repository/add-collaborator-user-repo.png) {% else %}
5. En la barra lateral de la izquierda, haga clic en **Colaboradores**.
![Barra lateral de configuración del repositorio con Colaboradores resaltado](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. En "Colaboradores", comienza a escribir el nombre de usuario del colaborador.
7. Selecciona el nombre de usuario del colaborador del menú desplegable.
   ![Menú desplegable de la lista de colaboradores](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Haga clic en **Agregar colaborador**.
   ![Botón "Agregar colaborador"](/assets/images/help/repository/repo-settings-collab-add.png) {% endif %} {% ifversion fpt or ghec %}
9. El usuario recibirá un correo electrónico invitándolo al repositorio. Una vez que acepte la invitación, tendrá acceso de colaborador a tu repositorio.
{% endif %}

## <a name="further-reading"></a>Información adicional

- «[Niveles de permisos para un repositorio de una cuenta personal](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account)»
- "[Eliminación de un colaborador de un repositorio personal](/articles/removing-a-collaborator-from-a-personal-repository)"
- "[Eliminarse del repositorio de un colaborador](/articles/removing-yourself-from-a-collaborator-s-repository)"
- "[Organización de los miembros en equipos](/organizations/organizing-members-into-teams)"
