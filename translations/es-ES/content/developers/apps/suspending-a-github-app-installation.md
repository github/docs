---
title: Suspender la instalación de una GitHub App
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% note %}

**Nota:**{% data reusables.pre-release-program.suspend-installation-beta %}

{% endnote %}

### Suspender una GitHub App

El integrador que mantiene y al que le pertenece la GitHub app, también llamado propietario de la GitHub App, puede suspender o dejar de suspender una instalación de la GitHub App utilizando las terminales de la API de REST con JWT. Para obtener más información, consulta la [API de REST para las GitHub Apps](/rest/reference/apps).

Las personas que han instalado una GitHub App, también llamadas propietarias de la instalación, solo podrán suspender o dejar de suspendar una GitHub App a través de la configuración de instalación de la app. Los propietarios de la instalación no pueden usar la API para suspender o dejar de suspender su instalación de la app. Antes de que las personas puedan suspender la instalación de una GitHub app, el propietario de la misma debe participar en el lanzamiento del beta. Para obtener más información, consulta la sección "[Suspender la instalación de una GitHub App](/apps/managing-github-apps/suspending-a-github-app-installation/)".

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Selecciona la
La {% data variables.product.prodname_github_app %} que quieres suspender.
![Seleccion de apps](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. Junto a la configuración de suspensión para la instalación, da clic en **Suspender** o en **Dejar de suspender**. ![Suspender una GitHub App](/assets/images/github-apps/suspend-a-github-app.png)
