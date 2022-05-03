---
title: Guía de inicio rápido para los debates de GitHub
intro: 'Habilita los {% data variables.product.prodname_discussions %} en un repositorio u organización e inicia conversaciones con tu comunidad.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Inicio Rápido
---


## Introducción

{% data variables.product.prodname_discussions %} es un foro de comunicación colaborativa para la comunidad que circunda un proyecto de código abierto. Los debates existen para las conversaciones que necesitan ser transparentes y accesibles pero no necesitan rastrearse en un tablero de proyecto y no se relacionan con el código, a diferencia de los {% data variables.product.prodname_github_issues %}. Los debates habilitan las conversaciones abiertas y fluídas en un foro público.

Los debates proporcionan un espacio para que existan conversaciones colaborativas al conectar y asignar un área más centralizada para conectarse y encontrar información.

## Habilitar los {% data variables.product.prodname_discussions %} en tu repositorio

Los propietarios de los repositorios y las personas con acceso de escritura pueden habilitar los {% data variables.product.prodname_discussions %} para una comunidad en sus repositorios privados o públicos.

Cuando habilitas los {% data variables.product.prodname_discussions %} por primera vez, se te invitará a configurar una publicación de bienvenida.

{% data reusables.repositories.navigate-to-repo %}
1. Debajo de tu nombre de repositorio, da clic en {% octicon "gear" aria-label="The gear icon" %} **Configuración**. ![Botón de configuración pública](/assets/images/help/discussions/public-repo-settings.png)
1. Debajo de "Características", da clic en **Configurar debates**. ![Configurar un botón de debate debajo de las "Características" para habilitar o inhabilitar los debates de GitHub en un repositorio](/assets/images/help/discussions/setup-discussions-button.png)
1. Debajo de "Iniciar un debate nuevo" edita la plantilla para que se apegue con los recursos y el tono que quieras configurar para tu comunidad.
1. Da clic en **Iniciar debate**. ![Botón de "Iniciar debate"](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Habilitar los {% data variables.product.prodname_discussions %} en tu organización

Los propietarios de las organizaciones pueden habilitar los {% data variables.product.prodname_discussions %} para su organización.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Aceptar contribuyentes en tus debates

Puedes darles la bienvenida a tu comunidad y presentarles una forma nueva de comunicarse en un repositorio u organización si creas una publicación de bienvenida y la anclas a tu página de {% data variables.product.prodname_discussions %}. El fijar y bloquear los debates ayuda a que las personas sepan si una publicación se hizo a manera de anuncio. Puedes utilizar los anuncios como una forma de vincular a las personas con más recursos y ofrecerles orientación para abrir debates en tu comunidad. Para obtener más información sobre cómo fijar un debate, consulta la sección "[Administrar los debates](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)".


## Configurar los lineamientos comunitarios para los contribuyentes

En el caso de los debates de repositorio, puedes configurar lineamientos de contribución para fomentar que los colaboradores tengan conversaciones útiles y significativas que sean relevantes para el repositorio. También puedes actualizar el archivo de README del repositorio para comunicar tus expectativas de cuándo deberían los colaboradores abrir una propuesta o un debate. Para obtener más información sobre proporcionar lineamientos para tu proyecto, consulta las secciones "[Agregar un código de conducta a tu proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y "[Configurar tu proyecto para que tegan contribuciones sanas](/communities/setting-up-your-project-for-healthy-contributions)".

Para el caso de los debates, puedes compartir información sobre cómo participar en tu organización al crear un README de perfil para ella. Para obtener más información, consulta la sección "[Personalizar el perfil de tu organización ](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".

## Crear un debate nuevo

Cualquier usuario sin autenticar que pueda ver el repositorio podrá crear un debate en este. De la misma manera, ya que los debates de las organizaciones se basan en un repositorio origen, cualquier usuario autenticado que pueda ver dicho repositorio podrá crear un debate en esta organización.

{% data reusables.discussions.starting-a-discussion %}

## Crear una encuesta nueva

Cualquier usuario no autenticado que pueda ver un repositorio podrá crear una encuesta. De la misma manera, ya que los debates de las organizaciones se basan en un repositorio origen, cualquier usuario autenticado que pueda ver dicho repositorio podrá crear una encuesta en esta organización.

{% data reusables.discussions.starting-a-poll %}

## Organizar debates

Los propietarios de los repositorios y las personas con acceso de escritura en estos pueden crear categorías nuevas para mantener los debates organizados. De la misma manera, ya que los debates de las organizaciones se basan en un repositorio origen, los propietarios de los repositorios y las personas con acceso de escritura con acceso de escritura en el repositorio origen pueden crear categorías nuevas para estos debates.

Los colaboradores que participen y creen debates nuevos pueden agruparlos en las categorías existentes más relevantes. Los debates también pueden volver a categorizarse después de su creación. Para obtener más información, consulta la sección "[Administrar las categorías de los debates](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

{% data reusables.discussions.you-can-label-discussions %}

## Promover las conversaciones sanas

Las personas con permisos de escritura en el repositorio o en el repositorio origen para los debates de las organizaciones pueden ayudar a que se noten las conversaciones importantes si las fijan, borran las que ya no son útiles o que dañan a la comunidad y las transfieren a los repositorios más relevantes que le pertenezcan a la organización. Para obtener más información, consulta la sección "[Administrar los debates](/discussions/managing-discussions-for-your-community/managing-discussions)".

Las personas con permiso de clasificación en el repositorio o en el repositorio origen de los debates de la organización pueden ayudar a moderar los debates de un proyecto al marcar los comentarios como respuestas, fijar los debates que ya no son útiles o que dañan a la comunidad y convertir las propuestas en debates cuando una idea aún está en las primeras etapas de desarrollo. Para obtener más información, consulta la sección "[Moderar los debates](/discussions/managing-discussions-for-your-community/moderating-discussions)".

## Pasos siguientes

Una vez que exista una ruta clara para ampliar el alcance del trabajo y migrar una idea desde un concepto hacia la realidad, puedes crear una propuesta y comenzar a rastrear tu progreso. Para obtener más información sobre cómo crear una propuesta a partir de un debate, consulta la sección "[Moderar debates](/discussions/managing-discussions-for-your-community/moderating-discussions)".
