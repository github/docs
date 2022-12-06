---
title: Guía de inicio rápido para los debates de GitHub
intro: 'Habilita {% data variables.product.prodname_discussions %} en un repositorio u organización existente e inicia conversaciones con tu comunidad.'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: Quickstart
ms.openlocfilehash: 0b43d9ce559e31c93002cc8cccef51b8284672c1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410215'
---
## Introducción

{% data variables.product.prodname_discussions %} es un foro de comunicación colaborativa para la comunidad que circunda un proyecto interno o de código abierto. Los debates existen para las conversaciones que necesitan ser transparentes y accesibles pero no necesitan rastrearse en un tablero de proyecto y no se relacionan con el código, a diferencia de los {% data variables.product.prodname_github_issues %}. Los debates habilitan las conversaciones abiertas y fluídas en un foro público.

Los debates proporcionan un espacio para que existan conversaciones colaborativas al conectar y asignar un área más centralizada para conectarse y encontrar información.

## Habilitar los {% data variables.product.prodname_discussions %} en tu repositorio

Los propietarios de los repositorios y las personas con acceso de escritura pueden habilitar los {% data variables.product.prodname_discussions %} para una comunidad en sus repositorios públicos{% ifversion ghes > 3.5 %}, internos{% endif %} y privados. La visibilidad de un debate se hereda del repositorio en el que se crea el debate.

Cuando habilitas los {% data variables.product.prodname_discussions %} por primera vez, se te invitará a configurar una publicación de bienvenida.

{% data reusables.repositories.navigate-to-repo %}
1. Debajo del nombre del repositorio, haga clic en {% octicon "gear" aria-label="The gear icon" %} **Settings** (Configuración).
![Botón de configuración pública](/assets/images/help/discussions/public-repo-settings.png)
1. En "Features" (Características), haga clic en **Set up discussions** (Configurar debates).
  ![Botón "Set up discussions" (Configurar debates) en "Features" (Características) para habilitar o deshabilitar los debates de GitHub en un repositorio](/assets/images/help/discussions/setup-discussions-button.png)
1. Debajo de "Iniciar un debate nuevo" edita la plantilla para que se apegue con los recursos y el tono que quieras configurar para tu comunidad.
1. Haga clic en **Start discussion** (Iniciar debate).
  ![Botón "Start discussion" (Iniciar debate)](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Habilitación de {% data variables.product.prodname_discussions %} en tu organización

Los propietarios de las organizaciones pueden habilitar {% data variables.product.prodname_discussions %} para su organización.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Aceptar contribuyentes en tus debates

Puedes dar la bienvenida a tu comunidad y presentar una forma nueva de comunicarse en un repositorio o una organización si creas una publicación de bienvenida y anclas la publicación a tu página de {% data variables.product.prodname_discussions %}. El fijar y bloquear los debates ayuda a que las personas sepan si una publicación se hizo a manera de anuncio. Puedes utilizar los anuncios como una forma de vincular a las personas con más recursos y ofrecerles orientación para abrir debates en tu comunidad. Para más información sobre cómo anclar un debate, consulta "[Administración de debates](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)".


## Configurar los lineamientos comunitarios para los contribuyentes

En el caso de los debates de un repositorio, puedes configurar lineamientos de contribución para motivar a los colaboradores para que tengan conversaciones significativas y útiles que sean relevantes para el repositorio. También puedes actualizar el archivo de README del repositorio para comunicar tus expectativas de cuándo deberían los colaboradores abrir una propuesta o un debate. Para obtener más información sobre cómo proporcionar instrucciones para el proyecto, consulta{% ifversion fpt or ghec %} "[Adición de un código de conducta al proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y{% endif %} "[Configuración del proyecto para colaboraciones correctas](/communities/setting-up-your-project-for-healthy-contributions)".

En el caso de los debates de una organización, compartes información sobre como participar con tu organización si creas un archivo LÉAME de perfil de esta. Para más información, consulta "[Personalización del perfil de la organización](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".

## Crear un debate nuevo

Cualquier usuario autenticado que pueda ver un repositorio puede crear un debate en dicho repositorio. Del mismo modo, dado que los debates de una organización se basan en un repositorio de origen, cualquier usuario autenticado que pueda ver el repositorio de origen puede crear un debate en esa organización.

{% data reusables.discussions.starting-a-discussion %}

## Creación de un sondeo

Cualquier usuario autenticado que pueda ver un repositorio puede crear un sondeo. Del mismo modo, dado que los debates de una organización se basan en un repositorio de origen, cualquier usuario autenticado que pueda ver el repositorio de origen puede crear un sondeo en esa organización.

{% data reusables.discussions.starting-a-poll %}

## Organizar debates

Los propietarios de un repositorio y las personas que tienen acceso de escritura al mismo pueden crear categorías nuevas para mantener los debates organizados. Del mismo modo, dado que los debates de una organización se basan en un repositorio de origen, los propietarios del repositorio y las personas que tienen acceso de escritura al repositorio de origen pueden crear categorías para los debates de una organización.

Los colaboradores que participen y creen debates nuevos pueden agruparlos en las categorías existentes más relevantes. Los debates también pueden volver a categorizarse después de su creación. Para más información, consulta "[Administración de categorías para debates](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

{% data reusables.discussions.you-can-label-discussions %}

## Promover las conversaciones sanas

Las personas que tienen permisos de escritura en el repositorio, o bien en el repositorio de origen para los debates de una organización, pueden ayudar a que las conversaciones importantes emerjan si anclan los debates, borran aquellos que ya no son útiles o que dañan a la comunidad, y transfieren aquellos a repositorios más pertinentes que pertenezcan a la organización. Para más información, consulta "[Administración de debates](/discussions/managing-discussions-for-your-community/managing-discussions)".

Las personas con permisos de evaluación de prioridades en el repositorio, o bien en el repositorio de origen para los debates de una organización, pueden ayudar a moderar los debates de un proyecto si marcan los comentarios como respuestas, bloquean los debates que ya no son útiles o que dañan a la comunidad, y convierten las incidencias en debates cuando una idea aún se encuentra en una etapa de desarrollo temprana. Para más información, vea "[Moderación de debates](/discussions/managing-discussions-for-your-community/moderating-discussions)".

## Pasos siguientes

Una vez que exista una ruta clara para ampliar el alcance del trabajo y migrar una idea desde un concepto hacia la realidad, puedes crear una propuesta y comenzar a rastrear tu progreso. Para obtener más información sobre cómo crear una incidencia a partir de un debate, vea "[Moderación de debates](/discussions/managing-discussions-for-your-community/moderating-discussions)".
