---
title: Participar en un debate
intro: 'Puedes conversar con la comunidad y con los mantenedores en un foro dentro del repositorio de un proyecto en {% data variables.product.product_name %}.'
permissions: 'People with read access to a repository can participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can participate in discussions and polls in that organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
shortTitle: Participate in discussion
ms.openlocfilehash: 07db8d3583c218e592ca1b68171292e52fcfc12f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410239'
---
## Acerca de la perticipación en un debate

{% data reusables.discussions.about-discussions %} Para obtener más información, consulte "[Acerca de las debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

Además de iniciar o visualizar debates y sondeos, puedes comentar como respuesta al comentario original del autor del debate. También puedes crear un hilo de comentarios si respondes a un comentario individual que otro miembro de la comunidad haya hecho dentro del debate, y reaccionar a los comentarios con emojis.

{% ifversion fpt or ghec %}Puedes bloquear usuarios y reportar el contenido perjudicial para mantener un ambiente agradable y seguro en {% data variables.product.product_name %}. Para obtener más información, consulta "[Mantenimiento de la seguridad en {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)".{% endif %}

## Prerrequisitos

Los {% data variables.product.prodname_discussions %} deben estar habilitados en el repositorio o la organización para que puedas participar en ellos. Para obtener más información, consulta "[Habilitación o deshabilitación de {% data variables.product.prodname_discussions %} para un repositorio](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)" y "[Habilitación o deshabilitación de debates de GitHub para una organización](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)."

## Crear un debate

{% data reusables.discussions.starting-a-discussion %}

## Creación de un sondeo

{% data reusables.discussions.starting-a-poll %}

## Marcar un comentario como una respuesta

Los autores de los debates y los usuarios con el rol de clasificación o superior dentro del repositorio pueden marcar un comentario como la respuesta a un debate dentro de dicho repositorio.
De forma similar, los autores y los usuarios de debates con el rol de evaluación de prioridades o superior en el repositorio de origen de los debates de la organización pueden marcar un comentario como respuesta a un debate de la organización.

{% data reusables.discussions.marking-a-comment-as-an-answer %}
