---
title: Administrar el acceso a los proyectos (beta)
intro: Puedes controlar cómo ver, editar o administrar tus proyectos.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 2c50343bfe8e3fd4e65a9a39b798f355cf0f13bb
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135348"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-access"></a>Acerca del acceso a los proyectos

Los administradores de proyectos a nivel de organización pueden administrar el acceso para toda la organización, para los equipos, para los miembros de la organización y para los colaboradores externos. 

Los administradores de los proyectos a nivel de usuario pueden invitar a los colaboradores individuales y administrar su acceso.

Los administradores de proyectos también pueden controlar la visibilidad del proyecto para cualquiera en la internet. Para obtener más información, vea "[Administración de la visibilidad de los proyectos](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)".

## <a name="managing-access-for-organization-level-projects"></a>Administrar el acceso para los proyectos a nivel organizacional

### <a name="managing-access-for-everyone-in-your-organization"></a>Administrar el acceso para todos en tu organización

El rol base predeterminado es `write`, lo que significa que todos en la organización pueden ver y editar su proyecto. Para cambiar el acceso del proyecto para todos en la organización, puedes cambiar el rol base. Los cambios al rol base sólo afectarán a los miembros de la organización que no sean propietarios y a los que no se les haya otorgado acceso individual.

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
2. En **Base role** (Rol base), seleccione el rol predeterminado.
   - **Sin acceso**: solo los propietarios de la organización y los usuarios a los que se les ha otorgado acceso individual pueden ver el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Lectura**: todos los usuarios de la organización pueden ver el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Escritura**: todos los usuarios de la organización pueden ver y editar el proyecto. Los propietarios de las organizaciones que también son administradores del proyecto.
   - **Administrador**: todos los usuarios de la organización son administradores del proyecto.

### <a name="managing-access-for-teams-and-individual-members-of-your-organization"></a>Administrar el acceso para los equipos y miembros individuales de tu organización

También puedes agregar equipos, colaboradores externos y miembros individuales de la organización como colaboradores para un proyecto a nivel organizacional. Para más información, vea "[Acerca de los equipos](/organizations/organizing-members-into-teams/about-teams)".

Solo puedes invitar a un usuario individual para que colabore con tu proyecto a nivel organizacional si ya es miembro de la organización o a un colaborador externo en por lo menos un repositorio de la organización.

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
2. En **Invite collaborators** (Invitar a colaboradores), busque el equipo o el usuario individual que quiere invitar.
3. Selecciona el rola para el colaborador.
   - **Lectura**: el equipo o la persona puede ver el proyecto.
   - **Escritura**: el equipo o la persona puede ver y editar el proyecto.
   - **Administrador**: el equipo o la persona puede ver, editar y agregar nuevos colaboradores al proyecto.
4. Haga clic en **Invitar**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Administrar el acceso de un colaborador externo en tu proyecto

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
1. En **Manage access** (Administrar acceso), busque los colaboradores cuyos permisos quiere modificar.

   Puede usar los menús desplegables **Type** (Tipo) y **Role** (Rol) para filtrar la lista de acceso.

1. Edita el rol para el(los) colaborador(es) o haz clic en{% octicon "trash" aria-label="the trash icon" %} para eliminarlo(s).

## <a name="managing-access-for-user-level-projects"></a>Administrar el acceso para los proyectos a nivel de usuario

### <a name="granting-a-collaborator-access-to-your-project"></a>Otorgar un acceso de colaborador a tu proyecto

{% note %}

Esto solo afecta a los colaboradores para tu proyecto, no a los repositorios de este. Para ver un elemento en el proyecto, alguien debe tener los permisos requeridos para el repositorio al cual pertenece el elemento. Si tu proyecto incluye elementos de un repositorio privado, las personas que no sean colaboradores en el repositorio no podrán ver elementos de este. Para obtener más información, vea "[Configuración de la visibilidad del repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" y "[Administración de equipos y personas con acceso al repositorio](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
2. En **Invite collaborators** (Invitar a colaboradores), busque el usuario al que quiere invitar.
3. Selecciona el rola para el colaborador.
   - **Lectura**: la persona puede ver el proyecto.
   - **Escritura**: la persona puede ver y editar el proyecto.
   - **Administrador**: la persona puede ver, editar y agregar nuevos colaboradores al proyecto.
4. Haga clic en **Invitar**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Administrar el acceso de un colaborador externo en tu proyecto

{% data reusables.projects.project-settings %}
1. Haga clic en **Manage access** (Administrar acceso).
1. En **Manage access** (Administrar acceso), busque los colaboradores cuyos permisos quiere modificar.

   Puede usar el menú desplegable **Role** (Rol) para filtrar la lista de acceso.

1. Edita el rol para el(los) colaborador(es) o haz clic en{% octicon "trash" aria-label="the trash icon" %} para eliminarlo(s).
