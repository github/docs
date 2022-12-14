---
title: Creación de formularios de categoría de discusión
shortTitle: Create discussion category forms
intro: Puedes personalizar las plantillas disponibles para los miembros de la comunidad para que las utilicen cuando abran una discusión nueva en tu repositorio.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: f87bd6369bcb4f1b6e2e47fe11cd61626b1fbe7d
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193482'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Acerca de los formularios de categoría de discusión

Puedes animar a los miembros de la comunidad para que incluyan información estructurada específica en sus discusiones usando formularios de discusión en tu repositorio. Con los formularios de categoría de discusión, puedes crear plantillas de discusión que contengan campos de formulario web personalizables. Los formularios de discusión se escriben en YAML mediante el esquema de formulario de {% data variables.product.prodname_dotcom %}. Para más información, vea "[Sintaxis del esquema de formulario para {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)". 

{% data reusables.actions.learn-more-about-yaml %}

Para usar un formulario de categoría de discusión en tu repositorio, debes crear un archivo y agregarlo a la carpeta `/.github/DISCUSSION_TEMPLATE/` del repositorio. 

También puedes crear formularios de categoría de discusión para tu organización. Para más información, vea "[Creación de un archivo de estado de la comunidad predeterminado](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

No se pueden usar formularios de categoría de discusión en sondeos. Para obtener más información sobre los sondeos, consulta [Acerca de los sondeos](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls).

Aquí está la versión interpretada de un formato de propuesta.

  ![Captura de pantalla de un formulario de categoría de discusión representado](/assets/images/help/discussions/discussion-category-form-sample.png)

## Creación de formularios de categoría de discusión

Los usuarios con acceso de escritura a un repositorio pueden crear un formulario de categoría de discusión. 

1. Ve al repositorio donde quieras crear un formulario de categoría de discusión. 
2. En el repositorio, crea un archivo denominado `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml` y reemplaza `FORM-NAME` por el nombre del formulario de categoría de discusión. {% data reusables.discussions.discussion-category-forms-name %} Para obtener más información sobre cómo crear archivos en GitHub, consulta [Creación de archivos](/github/managing-files-in-a-repository/creating-new-files).
3. Escribe el contenido del formulario de categoría de discusión en el cuerpo del nuevo archivo. Para obtener más información, consulta [Sintaxis de los formularios de categoría de discusión](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms).
4. Confirma tu archivo en la rama predeterminada de tu repositorio. Para más información, vea "[Creación de archivos](/github/managing-files-in-a-repository/creating-new-files)".
