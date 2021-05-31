---
title: Managing access and security for your codespaces
intro: 'You can manage the repositories that {% data variables.product.prodname_codespaces %} can access.'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

When you enable access and security for a repository owned by your user account, any codespaces that are created for that repository will have read and write permissions to all other repositories you own. If you want to restrict the repositories a codespace can access, you can limit to it to either the repository the codespace was opened for or specific repositories. Solo debes habilitar el acceso y la seguridad para los repositorios en los cuales confíes.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Debajo de "Acceso y seguridad"; selecciona la configuración que quieras para tu cuenta de usurio. ![Botones radiales para adminsitrar los repositorios confiables](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)
1. Si eliges "Repositorios seleccionados", selecciona el menú desplegable y luego da clic en un repositorio para permitir que los codespaces de éste accedan al resto de los repositorios que te pertenecen. Repite esto para todos los repositorios cuyos codespaces quieras que accedan al resto de tus repositorios. ![Menú desplegable de "Repositorios seleccionados"](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
