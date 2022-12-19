---
title: Acerca de la API de GraphQL
intro: 'La API de GraphQL de {% data variables.product.prodname_dotcom %} ofrece flexibilidad y la capacidad de definir precisamente los datos que quieres recuperar.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 9b447925609425157d5d965370c09fdd12d30b56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069710'
---
## Información general

Aquí tienes algunos enlaces rápidos para ayudarte a iniciar con la API de GraphQL:

* [Autenticación](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Punto de conexión raíz](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Introspección del esquema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Límites de frecuencia](/graphql/overview/resource-limitations)
* [Migrar desde REST](/graphql/guides/migrating-from-rest-to-graphql)

## Acerca de GraphQL

El lenguaje de consulta de datos [GraphQL](https://graphql.github.io/) es:

* **una [especificación](https://graphql.github.io/graphql-spec/June2018/).** La especificación determina la validez del [esquema](/graphql/guides/introduction-to-graphql#schema) en el servidor de API. El modelo determina la validez de las llamadas al cliente.

* **[Establecimiento inflexible de tipos](#about-the-graphql-schema-reference).** El esquema define el sistema de tipos de una API y todas las relaciones de objetos.

* **[Introspectivo](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** Un cliente puede consultar el esquema para obtener más información sobre él.

* **[Jerárquico](/graphql/guides/forming-calls-with-graphql).** La forma de una llamada de GraphQL refleja la forma de los datos JSON que se devuelven. Los [campos anidados](/graphql/guides/migrating-from-rest-to-graphql#example-nesting) permiten consultar y recibir solo los datos que especifique en un solo recorrido de ida y vuelta.

* **Nivel de aplicación.** GraphQL no es un modelo de almacenamiento ni un lenguaje de consulta de base de datos. El _gráfico_ hace referencia a las estructuras de gráficos definidas en el esquema, donde los [nodos](/graphql/guides/introduction-to-graphql#node) definen objetos y los [bordes](/graphql/guides/introduction-to-graphql#edge) definen relaciones entre objetos. La API recorre y recupera datos de la aplicación basándose en las definiciones del modelo, independientemente de cómo se almacenan los datos.

## Por qué GitHub utiliza GraphQL

GitHub eligió a GraphQL porque ofrece significativamente más flexibilidad para nuestros integradores. La capacidad de definir exactamente los datos que desea&mdash; y _solo_ los datos que desea&mdash; es una potente ventaja en comparación con los puntos de conexión de API de REST tradicionales. GraphQL le permite reemplazar varias solicitudes de REST con _una sola llamada_ para obtener los datos que especifique.

Para obtener más información sobre por qué GitHub ha invertido en GraphQL, consulte la [entrada de blog del anuncio](https://github.blog/2016-09-14-the-github-graphql-api/) original.

## Acerca de la referencia del modelo de GraphQL

Los documentos de la barra lateral se generan a partir del [esquema](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) GraphQL de {% data variables.product.prodname_dotcom %}. Todas las llamadas se validan y ejecutan contra el modelo. Utiliza estos documentos para encontrar los datos a los que puedes llamar:

* Operaciones permitidas: [consultas](/graphql/reference/queries) y [mutaciones](/graphql/reference/mutations).

* Tipos definidos por el esquema: [escalares](/graphql/reference/scalars), [objetos](/graphql/reference/objects), [enumeraciones](/graphql/reference/enums), [interfaces](/graphql/reference/interfaces), [uniones](/graphql/reference/unions) y [objetos de entrada](/graphql/reference/input-objects).

Puede acceder a este mismo contenido desde la [barra lateral de Explorer Docs](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Nota que podrías necesitar depender de ambos, los documentos y la validación del modelo, para hacer una llamada a la API de GraphQL.

Para obtener otro tipo de información, como los detalles de autenticación y límite de frecuencia, consulte las [guías](/graphql/guides).

## Solicitar soporte

{% data reusables.support.help_resources %}
