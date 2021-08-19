---
title: Administrar el acceso y la seguridad de tus codespaces
intro: 'Puedes administrar los repositorios a los cuales pueden acceder los {% data variables.product.prodname_codespaces %}.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

Cuando habilitas el acceso y la seguridad de un repositorio que pertenezca a tu cuenta de usuario, cualquier codespace que se cree para este tendrá permisos de escritura en el resto de los repositorios que te pertenezcan. Si quieres restringir los repositorios a los que puede acceder un codespace, puedes limitarlos a ya sea el repositorio para el cual se abrió el codespace o a repositorios específicos. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Debajo de "Acceso y seguridad"; selecciona la configuración que quieras para tu cuenta de usurio. ![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Si eliges "Repositorios seleccionados", selecciona el menú desplegable y luego da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que te pertenecen. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de tus repositorios. ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
