---
title: Moderar los debates
intro: 'You can promote healthy collaboration by marking comments as answers, locking or unlocking discussions, converting issues to discussions, and editing or deleting comments, discussions, and categories that don''t align with your{% ifversion fpt or ghec %} community''s code of conduct{% elsif ghes > 3.5 %} organization''s contribution guidelines{% endif %}.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
---


## Acerca de moderar los debates

{% data reusables.discussions.about-discussions %} If you have triage permissions for a repository, you can help moderate that repository's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. De forma similar, si tienes permisos de clasificación para el repositorio origen para los debates de la organización, puedes moderarlos en esta.

## Marcar un comentario como una respuesta

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Bloquear debates

Es adecuado bloquear una conversación cuando ésta no sea constructiva o viole el código de conducta de tu comunidad o los [Lineamientos comunitarios](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. También puedes bloquear una conversación para prevenir que se hagan comentarios en un debate que quieres utilizar como un anuncio para la comunidad. Cuando bloqueas una conversación, las personas con acceso de escritura al repositorio o al repositorio origen para los debates de organización aún podrán comentar en este debate.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. En la lista de debates, da clic en aquél que quieras bloquear. ![Bloquear debate](/assets/images/help/discussions/unanswered-discussion.png)
1. En el margen derecho de un debate, da clic en **Bloquear conversación**.
1. Lee la información sobre bloquear los debates y da clic en **Bloquear conversación en este debate**.
1. Cuando estés listo para desbloquear la conversación, da clic en **Desbloquear conversación** y luego en **Desbloquear conversación en este debate**.

## Convertir una propuesta en un debate

Cuando conviertes una propuesta en un debate, ésta se creará automáticamente utilizando el contenido de la propuesta. Las personas con acceso de escritura a un repositorio o repositorio origen para debates de organización pueden convertir las propuestas por lotes con base en las etiquetas. Para obtener más información, consulta la sección "[Administrar los debates](/discussions/managing-discussions-for-your-community/managing-discussions)".

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.repositories.sidebar-issues %}
1. En la lista de propuestas, da clic en aquella que quieras convertir.
1. En el margen derecho de la propuesta, da clic en **Convertir en debate**.
1. Selecciona el menú desplegable de **Elige una categoría** y da clic en aquella que quieras para tu debate.
1. Da clic en **Entiendo, convertir esta propuesta en debate**.
