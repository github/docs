---
title: Comenzar con la API de la Base de Datos de Git
intro: 'La API de la Base de datos de Git te da acceso de escritura y lectora para los objetos sin procesar de Git que se encuentran en tu base de datos de Git en {% data variables.product.product_name %} y para listar y actualizar tus referencias (cabezas de rama y etiquetas).'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Git Database API
ms.openlocfilehash: b7044e299602de42a2c880df8da4a6f19ef9334b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135919'
---
## Información general 

Básicamente, esto te permite volver a implementar muchas de las funcionalidades de Git sobre nuestra API mediante la creación de objetos sin procesar (raw) directamente en la base de datos y actualizando las referencias de rama que técnicamente podrían hacer todo lo que pueda hacer Git sin que se éste se instale.

Las funciones de la API de la base de datos de Git devolverán un elemento `409 Conflict` si el repositorio de Git está vacío o no está disponible.  Que un repositorio se muestre como no disponible habitualmente significa que {% data variables.product.product_name %} está en el proceso de crearlo. Para un repositorio vacío, puede usar el punto de conexión de "[Creación o actualización del contenido del archivo](/rest/reference/repos#create-or-update-file-contents)" para crear contenido e inicializar el repositorio, de modo que pueda usar la API de la base de datos de Git. Contacta a {% data variables.contact.contact_support %} si este estado de respuesta persiste.

![resumen de la base de datos de git](/assets/images/git-database-overview.png)

Para obtener más información sobre la base de datos de objetos de Git, lea el capítulo [Información interna de Git](http://git-scm.com/book/en/v1/Git-Internals) del libro Pro Git.

Como ejemplo, si quisiera confirmar un cambio en un archivo de su repositorio, haría lo siguiente:

* Obtener el objeto de la confirmación actual
* Recuperar el árbol al cual apunta
* Recuperar el contenido del objeto del blob que tiene el árbol para esa ruta de archivo en particular
* Cambiar el contenido de alguna manera y publicar un objeto de blob nuevo con este contenido nuevo, obteniendo el SHA del blob a cambio
* Publicar un nuevo objeto de árbol con ese indicador de la ruta del archivo reemplazándolo con el SHA de tu blob nuevo y obteniendo a cambio el SHA del árbol
* Crear un objeo de confirmación nuevo con el SHA de la confirmación actual como el padre y el SHA del árbol nuevo, obteniendo a cambio el SHA de la confirmación
* Actualizar la referencia de tu rama para apuntar al nuevo SHA de la confirmación

Puede que parezca complejo, pero en realidad es bastante sencillo cuando entiende el modelo y proporciona la oportunidad de hacer un sin fin de cosas cuando lo hace potencialmente con la API.

## Verificar la capacidad de fusión de las solicitudes de extracción

{% warning %}

**Advertencia** No dependa del uso de Git directamente o de [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) de las actualizaciones en las referencias `merge` de Git, ya que este contenido queda obsoleto sin previo aviso.

{% endwarning %}

Una API consumible debe solicitar explícitamente una solicitud de incorporación de cambios para crear una confirmación de combinación de _prueba_. Se crea una confirmación de combinación de _prueba_ cuando ve la solicitud de incorporación de cambios en la interfaz de usuario y se muestra el botón "Merge" (Combinar), o cuando [obtiene](/rest/reference/pulls#get-a-pull-request), [crea](/rest/reference/pulls#create-a-pull-request) o [edita](/rest/reference/pulls#update-a-pull-request) una solicitud de incorporación de cambios mediante la API REST. Sin esta solicitud, las referencias `merge` de Git quedarán obsoletas hasta la próxima vez que alguien vea la solicitud de incorporación de cambios.

Si actualmente utiliza métodos de sondeo que producen referencias `merge` de Git obsoletas, GitHub le recomienda utilizar los pasos siguientes para obtener los cambios más recientes de la rama predeterminada:

1. Recibir el webhook de la solicitud de extracción.
2. Llame a [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) para iniciar un trabajo en segundo plano a fin de crear el candidato de confirmación de combinación.
3. Sondee el repositorio mediante [`GET /repos/{owner}/{repo}/pulls/{pull_number}`](/rest/reference/pulls#get-a-pull-request) para ver si el atributo `mergeable` es `true` o `false`. Puede usar Git directamente o [`GET /repos/{owner}/{repo}/git/refs/{ref}`](/rest/reference/git#get-a-reference) para las actualizaciones de las referencias `merge` de Git solo después de realizar los pasos anteriores.
