---
title: Gists
intro: 'La API de Gists habilita al usuario autorizado para enumerar, crear, actualizar y borrar los gists públicos en GitHub.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: c51d9275950bbf303caa1a03344ba8402618d65b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136021'
---
## Acerca de la API de Gists

La API de Gists permite ver y modificar gists. Para obtener más información sobre los gists, consulta "[Edición y uso compartido de contenido con gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists)".

### Authentication

Puede leer gists públicos {% ifversion ghae or ghes %}y crearlos para usuarios anónimos sin un token.{% else %} de forma anónima, pero debe haber iniciado sesión en GitHub para crear gists.{% endif %} Para leer o escribir gists en nombre de un usuario, necesita el ámbito OAuth para gists y un token. Para más información, vea "[Ámbitos para aplicaciones de OAuth](/developers/apps/scopes-for-oauth-apps)".

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Truncamiento

La API de Gist proporciona hasta un megabyte de contenido para cada archivo en el gist. Cada archivo que se devuelve para un gist mediante la API tiene una clave denominada `truncated`. Si `truncated` es `true`, el archivo es demasiado grande y solo se devuelve una parte del contenido en `content`.

Si necesita el contenido completo del archivo, puede realizar una solicitud `GET` a la URL que se especifica en `raw_url`. Tenga en cuenta que, para los archivos mayores de 10 GB, tendrá que clonar el gist por medio de la URL que ha proporcionado `git_pull_url`.

Adicionalmente a el truncamiento del contenido específico del archivo, la lista de archivos completa podría truncarse si la cantidad total excede los 300 archivos. Si la clave `truncated` de nivel superior es `true`, solo se han devuelto los primeros 300 archivos de la lista de archivos. Si tiene que recuperar todos los archivos del gist, tendrá que clonarlo por medio de la URL proporcionada por `git_pull_url`.

### Tipos de medios personalizados para los gists

Estos son los tipos de medios compatibles para recuperar el contenido de los gists.

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".
