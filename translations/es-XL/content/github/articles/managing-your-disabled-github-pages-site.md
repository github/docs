---
title: Administrar tu sitio de Páginas de GitHub deshabilitadas
intro: 'Los repositorios privados en {{ site.data.variables.product.prodname_free_user }} no admiten {{ site.data.variables.product.prodname_pages }}, sin embargo, una cantidad limitada de sitios {{ site.data.variables.product.prodname_pages }} conectados a repositorios privados gratuitos fueron dejados activos por error. Estos sitios ya no se actualizan y se dejarán de publicar por parte de {{ site.data.variables.product.prodname_dotcom }} el 10 de mayo de 2019.'
hidden: true
redirect_from:
  - /articles/managing-your-disabled-github-pages-site
versions:
  free-pro-team: '*'
---

{% note %}

{{ site.data.variables.product.prodname_pages }} está únicamente disponible en repositorios públicos con {{ site.data.variables.product.prodname_free_user }}, y en repositorios públicos y privados con {{ site.data.variables.product.prodname_pro }}, {{ site.data.variables.product.prodname_team }}, {{ site.data.variables.product.prodname_ghe_cloud }}, y {{ site.data.variables.product.prodname_ghe_server }}. {{ site.data.reusables.gated-features.more-info }}

{% endnote %}

Si tienes un sitio publicado {{ site.data.variables.product.prodname_pages }} en un repositorio privado gratuito, tienes unas cuantas opciones para continuar publicando y actualizando tu sitio, o para despublicar tu sitio de forma manual. Si no tomas ninguna medida, {{ site.data.variables.product.prodname_dotcom }} dejará de publicar tu sitio el 10 de mayo de 2019.

- **Para continuar publicando y actualizando tu sitio {{ site.data.variables.product.prodname_pages }} **, puedes convertir el repositorio en público o actualizar tu cuenta a {{ site.data.variables.product.prodname_pro }}. Para obtener más información sobre cómo convertir tu repositorio privado en público, consulta "[Configurar la visibilidad del repositorio](/articles/setting-repository-visibility#making-a-private-repository-public)." Para obtener más información sobre actualizar tu cuenta, consulta "[Actualizar tu suscripción de GitHub](/articles/upgrading-your-github-subscription)."

- **Para detener la publicación de tu sitio {{ site.data.variables.product.prodname_pages }} **, puedes [despublicar de forma manual](#manually-unpublishing-your-github-pages-site), o no hacer nada y {{ site.data.variables.product.prodname_dotcom }} dejará de publicar tu sitio el 10 de mayo de 2019. Si tu sitio {{ site.data.variables.product.prodname_pages }} tiene un dominio personalizado configurado, deberías actualizar o eliminar tus registros de DNS con tu proveedor de DNS tan pronto como sea posible para evitar el riesgo de adquisición del dominio. La configuración de tu dominio personalizado con tu proveedor DNS mientras tu sitio {{ site.data.variables.product.prodname_pages }} está inhabilitado, podría hacer que alguien más aloje un sitio en uno de tus subdominios. Para obtener más información, consulta "[Usar un dominio personalizado con {{ site.data.variables.product.prodname_pages }}](/articles/using-a-custom-domain-with-github-pages)".

### Despublicar de forma manual tu sitio {{ site.data.variables.product.prodname_pages }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
3. En la barra lateral izquierda, haz clic en **Unpublish (Despublicar) {{ site.data.variables.product.prodname_pages }}**. ![Configuraciones del repositorio para despublicar el sitio {{ site.data.variables.product.prodname_pages }}](/assets/images/help/pages/unpublish-pages-button-sidebar.png)
4. Haz clic en **Unpublish this site (Despublicar este sitio)**. ![Botón para despublicar el sitio {{ site.data.variables.product.prodname_pages }}](/assets/images/help/pages/unpublish-pages-button.png)

### Leer más

- "[Despublicar un sitio de páginas de usuario](articles/unpublishing-a-user-pages-site)"
- "[Despublicar un sitio de páginas de proyecto](/articles/unpublishing-a-project-pages-site)"
- "[Transferir un repositorio](/articles/transferring-a-repository)"
- [Acerca de Archivar repositorios](/articles/about-archiving-repositories)"
- "[Borrar un repositorio](/articles/deleting-a-repository)"
