---
title: Administrar la política de bifurcación para tu organización
intro: 'Puedes permitir o prevenir la bifurcación de cualquier repositorio privado {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e interno{% endif %}que pertenezca a tu organización.'
redirect_from:
  - /articles/allowing-people-to-fork-private-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/allowing-people-to-fork-private-repositories-in-your-organization
permissions: Los propietarios de la organización pueden administrar la política de bifurcación para la misma.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Predeterminadamente, las organizaciones nuevas se configuran para impedir la bifurcación de repositorios privados{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e internos{% endif %}.

Si permites la bifurcación de repositorios privados {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} e internos{% endif %} a nivel organizacional, también puedes configurar la capacidad para bifurcar repositorios privados {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} o internos{% endif %} específicos. Para obtener más información, consulta la sección "[Administrar la política de bifurcación para tu repositorio](/github/administering-a-repository/managing-the-forking-policy-for-your-repository)".

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Bifurcación de repositorios", selecciona **Permitir la bifurcación de repositorios privados** o **Permitir la bifurcación de repositorios privados e internos**. ![Casilla de verificación para permitir o prohibir la bifurcación en la organización](/assets/images/help/repository/allow-disable-forking-organization.png)
6. Haz clic en **Save (Guardar)**.

### Leer más

- "[Acerca de las bifurcaciones](/articles/about-forks)"
- "[Niveles de permiso del repositorio para una organización](/articles/repository-permission-levels-for-an-organization)"
