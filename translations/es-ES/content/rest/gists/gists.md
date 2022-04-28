---
title: Gists
intro: 'The Gists API enables the authorized user to list, create, update and delete the public gists on GitHub.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Gists API

The Gist API lets you view and modify gists. For more information about gists, see "[Editing and sharing content with gists](/get-started/writing-on-github/editing-and-sharing-content-with-gists)."

### Autenticación

Puedes leer gists públicos {% ifversion ghae or ghes %}y crearlos para usuarios anónimos sin un token{% else %} de forma anónima, pero debes haber iniciado sesión en GitHub para crear gists.{% endif %} Para leer o escribir gists en nombre de un usuario, necesitas el alcance de OAuth para gists y un token. Par aobtener más información, consulta la sección "[Alcances para las Apps de OAuth](/developers/apps/scopes-for-oauth-apps)".

<!-- When an OAuth client does not have the gists scope, the API will return a 404 "Not Found" response regardless of the validity of the credentials. The API will return a 401 "Bad credentials" response if the gists scope was given to the application but the credentials are invalid. -->

### Truncamiento

La API de Gist proporciona hasta un megabyte de contenido para cada archivo en el gist. Cada archivo que se devuelve para un gist a través de la API tiene una clave que se llama `truncated`. Si `truncated` aparece como `true`, significa que el archivo es demasiado grande y solo se devolvió una parte de su contenido en `content`.

Si necesitas el contenido completo del archivo, puedes hacer una solicitud de tipo `GET` a la URL que se especifica en `raw_url`. Ten en cuent que, para los archivos mayores a diez megabytes, necesitarás clonar el gist a través de la URL que proprocionó `git_pull_url`.

Adicionalmente a el truncamiento del contenido específico del archivo, la lista de archivos completa podría truncarse si la cantidad total excede los 300 archivos. Si la clave `truncated` de nivel superior aparece como `true`, únicamente se han devuelto los primeros 300 archivos en la lista. Si necesitas recuperar todos los archivos del gist, necesitarás clonarlo a través de la URL que te proporcionó `git_pull_url`.

### Tipos de medios personalizados para los gists

Estos son los tipos de medios compatibles para recuperar el contenido de los gists.

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.base64

Para obtener más información, consulta la sección "[Tipos de medios](/rest/overview/media-types)".
