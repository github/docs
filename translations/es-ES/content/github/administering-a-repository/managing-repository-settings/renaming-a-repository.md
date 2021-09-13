---
title: Renombrar un repositorio
intro: Puedes renombrar un repositorio si eres propietario de la organización o tienes permisos de administrador para el repositorio.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Cuando cambias el nombre de un repositorio, toda la información existente, a excepción de las URL del sitio del proyecto, se redirige automáticamente al nuevo nombre, incluyendo:

* Problemas
* Wikis
* Estrellas
* Seguidores

Para obtener más información sobre los sitios de proyecto, consulta la sección "[Acerca de las {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Adicionalmente a redirigir el tráfico web, todas las operaciones de `git clone`, `git fetch`, o`git push` que apunten a la ubicación anterior seguirán funcionando como si se hubieran hecho en la nueva. Sin embargo, para evitar la confusión, recomendamos ampliamente actualizar cualquier clon local para que lleve a la URL del nuevo repositorio. Puedes hacer esto utilizando `git remote` en la línea de comandos:

```shell
$ git remote set-url origin <em>new_url</em>
```

Para obtener más información, consulta "[Administrar repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)."

{% if currentVersion == "free-pro-team@latest" %}

Si planeas renombrar un repositorio que tenga un sitio {% data variables.product.prodname_pages %}, recomendamos utilizar un dominio personalizado para el mismo. Esto garantiza que la URL del sitio no se vea impactada cuando se renombre el repositorio. Para obtener más información, consulta "[Acerca de los dominios personalizados y sitio de {% data variables.product.prodname_pages %} ](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)."

{% endif %}

{% tip %}

**Sugerencia:** {% data reusables.organizations.owners-and-admins-can %} renombra un repositorio. {% data reusables.organizations.new-repo-permissions-more-info %}

{% endtip %}

{% warning %}

**Advertencia**: Si en el futuro creas un nuevo repositorio bajo tu cuenta, no reutilices el nombre original del repositorio renombrado. Si lo haces, los redireccionamientos al repositorio renombrado fallarán.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En **Repository Name** (Nombre del repositorio), escribe el nombre nuevo de tu repositorio. ![Renombrar repositorio](/assets/images/help/repository/repository-name-change.png)
4. Haz clic en **Rename** (Renombrar). ¡Lo has hecho!
