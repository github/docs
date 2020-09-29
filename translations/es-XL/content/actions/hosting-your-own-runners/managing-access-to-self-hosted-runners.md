---
title: Administrar el acceso a los ejecutores auto-hopsedados
intro: Puedes controlar qué repositorios pueden mandar jobs a los ejecutores auto-hospedados de una organización.
versions:
  free-pro-team: '*'
---

Los ejecutores auto-hospedados que se agreguen a nivel organizacional pueden procesar jobs para todos los repositorios en la misma. Si necesitas limitar el acceso a tus ejecutores auto-hospedados, puedes configurar la política para procesar únicamente los jobs para repositorios privados, o puedes definir un listado de repositorios permitidos.

### Controlar qué repositorios tienen acceso a los ejecutores de una organización

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. Junto a "Ejecutores auto-hospedados", da clic en **Administrar permisos del repositorio**. ![Administrar permisos del repositorio](/assets/images/help/settings/actions-runner-manage-permissions.png)

1. Desde el menú desplegable, escoge alguna de las siguientes opciones:

   * **Todos los repositorios** - Todos los repositorios públicos y privados en la organización pueden mandar jobs a los ejecutores auto-hospedados de la misma.
   * **Repositorios privados** - Solo los repositorios privados en la organización pueden mandar jobs a los ejecutores auto-hospedados.
   * **Repositorios seleccionados** - Utiliza el menú de selección de repositorios para escoger aquellos repositorios de la organización que pueden enviar jobs a los ejecutores auto-hospedados de la misma.
