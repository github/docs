---
title: Adminsitrar los debates en tu repositorio
intro: Puedes categorizar, resaltar, transferir o borrar los debates en un repositorio.
permissions: Los administradores de repositorio y las personas con acceso de escritura o superior en un repositorio pueden administrar los debates del mismo.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### Acerca de la administración de los debates

{% data reusables.discussions.about-discussions %} Para obtener más información sobre los debates, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

Los propietarios de la organización pueden elegir los permisos que se requieren para crear un debate en los repositorios que pertenezcan a la organización. Para obtener más información, consulta la sección "[Administrar la creación de debates para los repositorios de tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-discussion-creation-for-repositories-in-your-organization)".

Como mantenedor de debates, puedes crear recursos comunitarios para impulsar los debates que se alinien con la meta general del proyecto y mantener así un foro abierto y amistoso para los colaboradores. El crear un código de conducta o lineamientos de contribución para que los colaboradores los sigan te ayudará a proporcionar un foro colaborativo y productivo. Para obtener más información sobre cómo crear recursos comunitarios, consulta las secciones "[Agregar un código de conducta a tu proyecto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" y "[Configurar los lineamientos para los contribuyentes de un repositorio](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors)".

Para obtener más información sobre cómo proporcionar un debate sano, consulta la sección "[Moderar los comentarios y conversaciones](/communities/moderating-comments-and-conversations)".

### Prerrequisitos

Para administrar los debates de un repositorio, éste deberá habilitar dicha función. Para obtener más información, consulta la sección "[Habilitar o inhabilitar los debates para el repositorio](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)".

### Cambiar la categoría de un debate

Puedes categorizar los debates para ayudar a que los miembros de la comunidad encuentren aquellos que tengan alguna relación. Para obtener más información, consulta la sección "[Administrar las categorías para los debates en tu repositorio](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)".

También puedes migrar un debate a una categoría diferente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, da clic en {% octicon "pencil" aria-label="The pencil icon" %} **Editar debate fijado**. !["Fijar debate" en la barra lateral derecha del debate](/assets/images/help/discussions/click-edit-pinned-discussion.png)

### Fijar un debate

Puedes fijar hasta cuatro debates importantes sobre la lista de debates del repositorio.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, da clic en {% octicon "pin" aria-label="The pin icon" %} **Fijar debate**. !["Fijar debate" en la barra lateral derecha del debate](/assets/images/help/discussions/click-pin-discussion.png)
1. Opcionalmente, personaliza la apariencia del debate que fijaste. ![Opciones de personalización para un debate que se fijó](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Da clic en **Fijar debate**. ![Botón de "Fijar debate" debajo de las opciones de personalización para un debate fijado](/assets/images/help/discussions/click-pin-discussion-button.png)

### Editar un debate que se fijó

Editar un debate que se ha fijado no cambiará la categoría del mismo. Para obtener más información, consulta la sección "[Administrar las categorías para los debates en tu repositorio](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, da clic en {% octicon "pencil" aria-label="The pencil icon" %} **Editar debate fijado**. !["Fijar debate" en la barra lateral derecha del debate](/assets/images/help/discussions/click-edit-pinned-discussion.png)
1. Personaliza la apariencia del debate que fijaste. ![Opciones de personalización para un debate que se fijó](/assets/images/help/discussions/customize-pinned-discussion.png)
1. Da clic en **Fijar debate**. ![Botón de "Fijar debate" debajo de las opciones de personalización para un debate fijado](/assets/images/help/discussions/click-pin-discussion-button.png)

### Dejar de fijar un debate

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral derecha, da clic en {% octicon "pin" aria-label="The pin icon" %} **Dejar de fijar debate**. !["Dejar de fijar debate" en la barra lateral derecha del debate](/assets/images/help/discussions/click-unpin-discussion.png)
1. Lee la advertencia y luego da clic en **Dejar de fijar debate**. ![Botón de "Dejar de fijar debate" bajo advertencia en el modo](/assets/images/help/discussions/click-unpin-discussion-button.png)

### Transferir un debate

Para transferir un debate, debes tener permisos para crear debates en el repositorio a donde quieras trasnferirlo.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra laeral derecha, da clic en {% octicon "arrow-right" aria-label="The right arrow icon" %} **Transferir debate**. !["transferir debate" en la barra lateral derecha del mismo](/assets/images/help/discussions/click-transfer-discussion.png)
1. Selecciona el menú desplegable de **Elige un repositorio** y da clic en aquél al que quieras transferir el debate. ![Menú desplegable de "Elige un repositorio", campo de búsqueda de "Encuentra un repositorio", y repositorio en la lista](/assets/images/help/discussions/use-choose-a-repository-drop-down.png)
1. Da clic en **Transferir debate**. ![Botón de "Transferir debate"](/assets/images/help/discussions/click-transfer-discussion-button.png)

### Borrar un debate

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
{% data reusables.discussions.click-discussion-in-list %}
1. En la barra lateral, da clic en {% octicon "trash" aria-label="The trash arrow icon" %} **Borrar debate**. !["Borrar debate" en la barra lateral derecha del mismo](/assets/images/help/discussions/click-delete-discussion.png)
1. Lee la advertencia y luego da clic en **Borrar este debate**. ![Botón de "Borrar este debate" bajo advertencia en el modo](/assets/images/help/discussions/click-delete-this-discussion-button.png)

### Convertir propuestas con base en las etiquetas

Puedes convertir todas las propuestas con la misma etiqueta en debates, por lote. Las propuestas subsecuentes que tengan esta etiqueta también se convertirán automáticamente en el debate y categoría que configures.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
{% data reusables.project-management.labels %}
1. Junto a la etiqueta que quieras convertir en una propuesta, da clic en **Convertir propuestas**.
1. Selecciona el menú desplegable de **Elige una categoría** y da clic en aquella que quieras para tu debate.
1. Da clic en **Entiendo, convertir esta propuesta en debate**.
