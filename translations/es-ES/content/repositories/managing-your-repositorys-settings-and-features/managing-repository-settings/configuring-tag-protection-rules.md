---
title: Configuración de reglas de protección de etiquetas
shortTitle: Tag protection rules
intro: Puedes configurar reglas de protección de etiquetas para el repositorio para evitar que los colaboradores creen o eliminen etiquetas.
product: '{% data reusables.gated-features.tag-protection-rules %}'
versions:
  fpt: '*'
  ghae: '>= 3.5'
  ghec: '*'
  ghes: '>3.4'
ms.openlocfilehash: 3b7b84cb26d8994c89222b2e4f642592fd45b72f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063206'
---
{% note %}

**Nota:** Las reglas de protección de etiquetas se encuentran actualmente en versión beta y están sujetas a cambios.

{% endnote %}

Al agregar una regla de protección de etiquetas, se protegerán todas las etiquetas que coincidan con el patrón proporcionado. Solo los usuarios con permisos de administración o mantenimiento en el repositorio podrán crear etiquetas protegidas y solo los usuarios con permisos de administración en el repositorio podrán eliminar etiquetas protegidas. Para más información, vea "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#permissions-for-each-role)". {% data variables.product.prodname_github_apps %} necesitan el permiso `Repository administration: write` para modificar una etiqueta protegida.

{% ifversion custom-repository-roles %} Además, puedes crear roles de repositorio personalizados para permitir que otros grupos de usuarios creen o eliminen etiquetas que coincidan con las reglas de protección de etiquetas. Para obtener más información, consulte "[Administración de roles de repositorio personalizados para una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".{% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. En la sección "Código y automatización" de la barra lateral, haga clic en **{% octicon "tag" aria-label="The tag icon" %} Etiquetas**.
1. Haga clic en **Nueva regla**.
![Nueva regla de protección de etiquetas](/assets/images/help/repository/new-tag-protection-rule.png)
1. En "Patrón de nombre de etiqueta", escriba el patrón de las etiquetas que quiera proteger. En este ejemplo, al escribir "\*" se protegen todas las etiquetas. 
![Establecimiento del patrón de protección de etiquetas](/assets/images/help/repository/set-tag-protection-pattern.png)
1. Haga clic en **Agregar regla**.
![Agregar regla de protección de etiquetas](/assets/images/help/repository/add-tag-protection-rule.png)
