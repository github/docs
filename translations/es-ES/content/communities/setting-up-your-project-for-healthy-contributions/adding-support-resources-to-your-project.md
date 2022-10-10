---
title: Agregar recursos de soporte a tu proyecto
intro: Puedes crear un archivo de SOPORTE para permitir que las personas conozcan nueva maneras de obtener ayuda con tu proyecto.
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145092355'
---
Para dirigir a los usuarios a recursos de soporte técnico específicos, puede agregar un archivo SUPPORT a la carpeta raíz `docs` o `.github` del repositorio. Cuando alguien crea una propuesta en tu repositorio, verá un enlace en el archivo de SOPORTE de tu proyecto.

![Lineamientos de soporte](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

Puedes crear recursos de apoyo predeterminados para tu cuenta de organización o personal. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

{% tip %}

**Sugerencia:** Para ayudar a los usuarios a encontrar sus directrices de soporte, puede incluir un vínculo a su archivo SUPPORT desde otros lugares del repositorio, como el [archivo README](/articles/about-readmes/).

{% endtip %}

## Agregar recursos de soporte a tu proyecto

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. En el campo de nombre de archivo, escriba *SUPPORT.md* (todo en mayúsculas).
4. En la pestaña **Edit new file**, agregue información sobre cómo se puede obtener soporte técnico para el proyecto.
5. Para revisar el archivo SUPPORT, haga clic en **Preview**.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
