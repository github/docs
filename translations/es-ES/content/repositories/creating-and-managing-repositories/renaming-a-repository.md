---
title: Renombrar un repositorio
intro: Puedes renombrar un repositorio si eres propietario de la organización o tienes permisos de administrador para el repositorio.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: d0067d96dce2f2cf9fe8bb2dd519668780d861ff
ms.sourcegitcommit: bd8b3e152f17d90acf222a0d50ba9595184c1f5f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111677'
---
Cuando cambias el nombre de un repositorio, toda la información existente, a excepción de las URL del sitio del proyecto, se redirige automáticamente al nuevo nombre, incluyendo:

* Issues
* Wikis
* Estrellas
* Seguidores

Para obtener más información acerca de los sitios del proyecto, consulte "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Además de redirigir el tráfico web, todas las operaciones de `git clone`, `git fetch` o `git push` dirigidas a la ubicación anterior seguirán funcionando como si se realizara en la nueva ubicación. Sin embargo, para evitar la confusión, recomendamos ampliamente actualizar cualquier clon local para que lleve a la URL del nuevo repositorio. Puede hacerlo con `git remote` en la línea de comandos:

```shell
$ git remote set-url origin NEW_URL
```

Para obtener más información, consulte "[Administración de repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)".

{% ifversion fpt or ghec %}

Si planeas renombrar un repositorio que tenga un sitio {% data variables.product.prodname_pages %}, recomendamos utilizar un dominio personalizado para el mismo. Esto garantiza que la URL del sitio no se vea impactada cuando se renombre el repositorio. Para obtener más información, consulte el sitio "[Acerca de los dominios personalizados y {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)". 

{% endif %}

{% note %}

**Nota:** {% data variables.product.prodname_dotcom %} no redireccionará las llamadas a una acción hospedada en un repositorio cuyo nombre haya cambiado. Se producirá un error de tipo `repository not found` en cualquier flujo de trabajo que use esa acción. En vez de esto, crea un repositorio y acción nuevos con el nombre nuevo y archiva el repositorio antiguo. Para obtener más información, consulte "[Archivado de repositorios](/repositories/archiving-a-github-repository/archiving-repositories)".

{% endnote %}

{% warning %}

**Advertencia**: Si en el futuro crea un nuevo repositorio en su cuenta, no reutilice el nombre original del repositorio cuyo nombre ha cambiado Si lo hace, los redireccionamientos al repositorio renombrado fallarán.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. En el encabezado **Repository Name**, escriba el nuevo nombre del repositorio.
   ![Repository rename](/assets/images/help/repository/repository-name-change.png)
4. Haga clic en **Rename**. ¡Y ya está!
