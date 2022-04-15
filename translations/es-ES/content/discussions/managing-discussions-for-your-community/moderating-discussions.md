---
title: Moderar los debates
intro: 'Puedes promover una colaboración sana si marcas los comentarios como respuestas, bloqueando y desbloqueando debates, convirtiendo propuestas en debates y editando o borrando los comentarios, debates y categorías que no se alineen con el código de conducta de tu comunidad.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  fpt: '*'
  ghec: '*'
---


## Acerca de moderar los debates

{% data reusables.discussions.about-discussions %} If you have triage permissions for a repository, you can help moderate a repository's discussions by marking comments as answers, locking discussions that are not longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. Similarly, if you have triage permission for the source repository for organization discussions, you can moderate discussions for that organization.

## Marcar un comentario como una respuesta

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Bloquear debates

Es adecuado bloquear una conversación cuando ésta no sea constructiva o viole el código de conducta de tu comunidad o los [Lineamientos comunitarios](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. También puedes bloquear una conversación para prevenir que se hagan comentarios en un debate que quieres utilizar como un anuncio para la comunidad. When you lock a conversation, people with write access to the repository, or source repository for organization discussions, will still be able to comment on the discussion.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. En la lista de debates, da clic en aquél que quieras bloquear. ![Bloquear debate](/assets/images/help/discussions/unanswered-discussion.png)
1. En el margen derecho de un debate, da clic en **Bloquear conversación**.
1. Lee la información sobre bloquear los debates y da clic en **Bloquear conversación en este debate**.
1. Cuando estés listo para desbloquear la conversación, da clic en **Desbloquear conversación** y luego en **Desbloquear conversación en este debate**.

## Convertir una propuesta en un debate

Cuando conviertes una propuesta en un debate, ésta se creará automáticamente utilizando el contenido de la propuesta. People with write access to a repository, or source repository for organization discussions, can bulk convert issues based on labels. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.repositories.sidebar-issues %}
1. En la lista de propuestas, da clic en aquella que quieras convertir.
1. En el margen derecho de la propuesta, da clic en **Convertir en debate**.
1. Selecciona el menú desplegable de **Elige una categoría** y da clic en aquella que quieras para tu debate.
1. Da clic en **Entiendo, convertir esta propuesta en debate**.
