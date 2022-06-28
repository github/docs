---
title: Administrar el acceso de los codespaces de tu organización a los repositorios
shortTitle: Acceso a los repositorios
intro: 'Puedes administrar los repositorios de tu organización a los cuales pueden acceder los {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'To manage access and security for Codespaces for an organization, you must be an organization owner.'
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
---

{% warning %}

**Aviso de obsolesencia**: El acceso y ajustes de seguridad ahora son obsoletos. Para habilitar un acceso expandido a otros repositorios, agrega los permisos solicitados a tu definición de contenedor dev. Si necesitas más información, consulta la sección "[Administrar el acceso a otros repositorios dentro de tu codespace](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)".

{% endwarning %}

Predeterminadamente, un codespace solo puede acceer al repositorio en donde se creó. Cuando habilitas el acceso y la seguridad de un repositorio que pertenece a tu organización, cualquier codespace que se cree para dicho repositorio también tendrá permisos de lectura en el resto de los repositorios que pertenezcan a esa misma organización y a los cuales pueda acceder el creador de dicho codespace. Si quieres restringir los repositorios a los cuales puede acceder un codespace, puedes limitarlos a ya sea el repositorio en donde se creó el codespace o a algunos repositorios específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

Para administrar qué usuarios de tu organización pueden utilizar {% data variables.product.prodname_codespaces %}, consulta la sección "[Administrar permisos de usuarios para tu organización](/codespaces/managing-codespaces-for-your-organization/managing-user-permissions-for-your-organization)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.click-codespaces %}
1. Debajo de "Acceso y seguridad", selecciona la configuración que quieras para tu organización.![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-org-access-and-security-radio-buttons.png)
1. Si eliges "Repositorios seleccionados"; entonces selecciona el menú desplegable y da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que pertenecen a tu organización. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de los repositorios. ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)

## Leer más

- "[Administrar el acceso a los repositorios para tus codespaces](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)"
