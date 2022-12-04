---
title: Administrar el acceso de los codespaces de tu organización a los repositorios
shortTitle: Repository access
intro: 'Puedes administrar los repositorios de tu organización a los cuales pueden acceder a {% data variables.product.prodname_github_codespaces %}.'
permissions: 'To manage access and security for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Security
  - Administrator
redirect_from:
  - /codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces
  - /github/developing-online-with-codespaces/managing-access-and-security-for-codespaces
  - /codespaces/working-with-your-codespace/managing-access-and-security-for-codespaces
ms.openlocfilehash: 9fdec24104a61170977053195446db0b4cf0a62f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160344'
---
{% warning %}

**Nota de desuso**: La configuración de acceso y seguridad que se describe a continuación está en desuso y se documentada aquí solo como referencia. Para habilitar el acceso expandido a otros repositorios, agrega los permisos solicitados al archivo de configuración `devcontainer.json`. Para obtener más información, consulta "[Administración del acceso a otros repositorios del codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

{% endwarning %}

Predeterminadamente, un codespace solo puede acceer al repositorio en donde se creó. Cuando habilitas el acceso y la seguridad de un repositorio que pertenece a tu organización, cualquier codespace que se cree para dicho repositorio también tendrá permisos de lectura en el resto de los repositorios que pertenezcan a esa misma organización y a los cuales pueda acceder el creador de dicho codespace. Si quieres restringir los repositorios a los cuales puede acceder un codespace, puedes limitarlos a ya sea el repositorio en donde se creó el codespace o a algunos repositorios específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

Para administrar qué usuarios de tu organización pueden usar {% data variables.product.prodname_github_codespaces %}, consulta "[Habilitación de {% data variables.product.prodname_github_codespaces %} en la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#enable-codespaces-for-users-in-your-organization)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.click-codespaces %}
1. Debajo de "Acceso y seguridad", selecciona la configuración que quieras para tu organización.
  ![Botones de radio para administrar los repositorios de confianza](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Si eliges "Repositorios seleccionados", selecciona el menú desplegable y haz clic en un repositorio para permitir que los codespaces de este accedan al resto de los repositorios que pertenecen a la organización. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de los repositorios.
    ![Menú desplegable "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Información adicional

- "[Administración del acceso a los repositorios para los codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)"
