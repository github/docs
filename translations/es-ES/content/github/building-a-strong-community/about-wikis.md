---
title: Acerca de las wikis
intro: 'Puedes alojar documentación para tu repositorio en una wiki, para que otros puedan usar y colaborar con tu proyecto.'
redirect_from:
  - /articles/about-github-wikis/
  - /articles/about-wikis
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidad
---

Cada repositorio de {% data variables.product.product_name %} viene equipado con una sección para alojar documentación, llamada una wiki. Puedes usar la wiki de tu repositorio para compartir contenido en forma completa acerca de tu proyecto, como por ejemplo cómo usarlo, cómo lo diseñaste o sus principios básicos. Un archivo README rápidamente dice lo que puede hacer tu proyecto, mientras que puedes usar una wiki para proporcionar documentación adicional. Para obtener más información, consulta "[Acerca de los archivos README](/articles/about-readmes/)".

Con las wikis, puedes escribir contenido como en cualquier otro lado en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Iniciar con la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/getting-started-with-writing-and-formatting-on-github)". Usamos [nuestra biblioteca Markup de código abierto](https://github.com/github/markup) para convertir diferentes formatos en HTML, para que puedas elegir escribir en Markdown o en cualquier otro formato admitido.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Si creas un wiki en un repositorio público, éste estará disponible para {% if enterpriseServerVersions contains currentVersion %}cualquiera con acceso a {% data variables.product.product_location %}{% else %}el público en general{% endif %}. {% endif %}Si creas un wiki en un repositorio interno o privado, {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}las personas{% elsif currentVersion == "github-ae@latest" %}los miembros de la empresa{% endif %} con acceso al repositorio también podrán acceder al wiki. Para obtener más información, consulta "[Configurar la visibilidad de un repositorio](/articles/setting-repository-visibility)".

Puedes editar las wikis directamente en {% data variables.product.product_name %} o puedes editar los archivos wiki localmente. Predeterminadamente, solo las personas con acceso a tu repositorio podrán hacer cambios a los wikis, aunque podrás permitir que cualquiera en {% data variables.product.product_location %} colabore con un wiki en {% if currentVersion == "github-ae@latest" %}un repositorio interno{% else %}un repositorio público{% endif %}. Para obtener más información, consulta "[Cambiar permisos de acceso para wikis](/articles/changing-access-permissions-for-wikis)".

### Leer más

- "[Agregar o eliminar páginas wiki](/articles/adding-or-editing-wiki-pages)"
- "[Crear un pie de página o barra lateral para tu wiki](/articles/creating-a-footer-or-sidebar-for-your-wiki)"
- "[Editar el contenido de una wiki](/articles/editing-wiki-content)"
- "[Ver el historial de cambios de una wiki](/articles/viewing-a-wiki-s-history-of-changes)"
- "[Buscar wikis](/articles/searching-wikis)"
