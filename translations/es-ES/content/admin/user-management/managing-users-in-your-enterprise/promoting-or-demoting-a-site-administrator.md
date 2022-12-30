---
title: Promover o degradar a un administrador del sitio
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: 'Los administradores del sitio pueden promover cualquier cuenta de usuarios normales a un administrador del sitio, así como degradar a otros administradores del sitio a usuarios normales.'
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 19daa56cf7d750d69495a6ff52655784411f56ff
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147887581'
---
{% tip %}

**Nota:** Si [Sincronizar LDAP está habilitado](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync) y se establece el atributo `Administrators group` al [configurar el acceso LDAP para los usuarios](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance), esos usuarios tendrán automáticamente acceso de administrador de sitio a la instancia. En este caso, no puedes promover usuarios manualmente con los siguientes pasos, debes agregarlos al grupo de administradores LDAP.

{% endtip %}

Para obtener información sobre cómo promover aun usuario a propietario de la organización, vea la sección `ghe-org-admin-promote` de "[Utilidades de la línea de comandos](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)".

## Promover un usuario desde los parámetros de empresa

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. En la esquina superior derecha de la página, haga clic en **Agregar propietario**.
  ![Botón para agregar un administrador](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. En el campo de búsqueda, escriba el nombre del usuario y haga clic en **Agregar**.
  ![Campo de búsqueda para agregar un administrador](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## Degradar un administrador del sitio desde los parámetros de empresa

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. En la esquina superior izquierda de la página, en el campo de búsqueda "Find an administrator" (Encontrar un administrador), escribe el nombre de usuario de la persona que deseas degradar.
  ![Campo de búsqueda para buscar un administrador](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. En los resultados de la búsqueda, busque el nombre de usuario de la persona a la que quiera bajar de nivel y, después, use el menú desplegable {% octicon "gear" %} y seleccione **Quitar propietario**.
  ![Opción Quitar de la empresa](/assets/images/help/business-accounts/demote-admin-button.png)

## Promover un usuario desde la línea de comandos

1. Acceda al dispositivo mediante [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).
2. Ejecute [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote) con el nombre de usuario que se va a promover.
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

## Degradar un administrador del sitio desde la línea de comandos

1. Acceda al dispositivo mediante [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).
2. Ejecute [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote) con el nombre de usuario que se va a bajar de nivel.
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
