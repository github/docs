---
title: Clasificar tu repositorio con temas
intro: 'Para ayudar a otras personas a buscar y contribuir en tu proyecto, puedes agregar temas a tu repositorio relacionados con el fin previsto de tu proyecto, área temática, grupos de afinidad u otras cualidades importantes.'
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 26f51423140c086bbea019666b8d569419da3b38
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109843'
---
## Acerca de los temas

En el caso de los temas, puedes explorar repositorios en un área temática particular, buscar proyectos a los cuales contribuir y descubrir nuevas soluciones para un problema específico. Los temas aparecen en la página principal de un repositorio. Puede hacer clic en el nombre de un tema para {% ifversion fpt or ghec %}ver temas relacionados y una lista de otros repositorios clasificados con ese tema{% else %}buscar otros repositorios con ese tema{% endif %}.

![Página principal del repositorio de prueba que muestra temas](/assets/images/help/repository/os-repo-with-topics.png)

Para examinar los temas más usados, vaya a https://github.com/topics/.

{% ifversion fpt or ghec %}Puede contribuir al conjunto de temas destacados de {% data variables.product.product_name %} en el repositorio [github/explore](https://github.com/github/explore). {% endif %}

Los administradores del repositorio pueden agregar los temas que deseen a un repositorio. Entre los temas útiles para clasificar un repositorio se incluyen los fines previstos, áreas temáticas, comunidad o idioma.{% ifversion fpt or ghec %} Además, {% data variables.product.product_name %} analiza el contenido de los repositorios públicos y genera temas sugeridos que los administradores del repositorio pueden aceptar o rechazar. El contenido del repositorio privado no se analiza y no recibe sugerencias de tema.{% endif %}

{% ifversion fpt %}Los repositorios públicos y privados{% elsif ghec or ghes %}Los repositorios públicos, privados e internos{% elsif ghae %}Los repositorios públicos e internos{% endif %} pueden tener temas, aunque solo verás los repositorios privados a los que puedes acceder en los resultados de búsqueda de temas.

Puedes buscar los repositorios que están asociados con un tema en particular. Para más información, vea "[Búsqueda de repositorios](/search-github/searching-on-github/searching-for-repositories#search-by-topic)". También puedes buscar un listado de temas en {% data variables.product.product_name %}. Para más información, vea "[Búsqueda de temas](/search-github/searching-on-github/searching-topics)".

## Agregar temas a tu repositorio

{% note %}

**Nota**: Los nombres de los temas siempre son públicos, aunque el tema se cree desde un repositorio privado.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. A la derecha de "Acerca de", haga clic en {% octicon "gear" aria-label="The Gear icon" %}.
  ![Icono de engranaje en la página principal del repositorio](/assets/images/help/repository/edit-repository-details-gear.png)
3. Debajo de "Temas", teclea el tema que quieras agregar a tu repositorio y después teclea un espacio.
  ![Formulario para escribir temas](/assets/images/help/repository/add-topic-form.png)
4. Cuando haya terminado de agregar temas, haga clic en **Guardar cambios**.
  ![Botón "Guardar cambios" en "Editar detalles del repositorio"](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
