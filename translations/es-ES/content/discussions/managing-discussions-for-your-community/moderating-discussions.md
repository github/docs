---
title: Moderar los debates
intro: 'Puedes promover una colaboración sana si marcas los comentarios como respuestas, bloqueas o desbloqueas debates, y conviertes propuestas en debates. y editar o borrar comentarios, debates y categorías que no concuerden con el código de conducta de tu comunidad para los debates.'
permissions: People with triage access to a repository can moderate discussions in the repository.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### Acerca de moderar los debates

{% data reusables.discussions.about-discussions %} Si tienes permisos de clasificación en un repositorio, puedes ayudar a moderar el debate de un proyecto si marcas los comentarios como respuestas, bloqueas debates que ya no sean útiles o que dañen a la comunidad, y conviertes propuestas en debates cuando una idea aún se encuentre en una etapa temprana de desarrollo.

### Marcar un comentario como una respuesta

{% data reusables.discussions.marking-a-comment-as-an-answer %}

### Bloquear debates

Es adecuado bloquear una conversación cuando ésta no sea constructiva o viole el código de conducta de tu comunidad o los [Lineamientos comunitarios](/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. También puedes bloquear una conversación para prevenir que se hagan comentarios en un debate que quieres utilizar como un anuncio para la comunidad. Cuando bloqueas una conversación, las personas con acceso de escritura en el repositorio aún podrán comentar sobre el debate.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. En la lista de debates, da clic en aquél que quieras bloquear. ![Bloquear debate](/assets/images/help/discussions/unanswered-discussion.png)
1. En el margen derecho de un debate, da clic en **Bloquear conversación**.
1. Lee la información sobre bloquear los debates y da clic en **Bloquear conversación en este debate**.
1. Cuando estés listo para desbloquear la conversación, da clic en **Desbloquear conversación** y luego en **Desbloquear conversación en este debate**.

### Convertir una propuesta en un debate

Cuando conviertes una propuesta en un debate, ésta se creará automáticamente utilizando el contenido de la propuesta. Las personas con acceso de escritura en un repositorio pueden convertir propeustas por lote con base en las etiquetas. Para obtener más información, consulta la sección "[Administrar los debates en tu repositorio](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. En la lista de propuestas, da clic en aquella que quieras convertir.
1. En el margen derecho de la propuesta, da clic en **Convertir en debate**.
1. Selecciona el menú desplegable de **Elige una categoría** y da clic en aquella que quieras para tu debate.
1. Da clic en **Entiendo, convertir esta propuesta en debate**.
