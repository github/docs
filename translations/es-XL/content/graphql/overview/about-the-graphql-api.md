---
title: Acerca de la API de GraphQL
intro: 'La API de GraphQL de {% data variables.product.prodname_dotcom %} ofrece flexibilidad y la capacidad de definir precisamente los datos que quieres recuperar.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Resumen

Aquí hay algunos enlaces rápidos para ponerte en marcha con la API de GraphQL v4:

* [Autenticación](/v4/guides/forming-calls/#authenticating-with-graphql)
* [Terminal raíz](/v4/guides/forming-calls/#the-graphql-endpoint)
* [Introspección del modelo](/v4/guides/intro-to-graphql/#discovering-the-graphql-api)
* [Límites de tasa](/v4/guides/resource-limitations/)
* [Migrar desde REST](/v4/guides/migrating-from-rest)

### Acerca de GraphQL

El lenguaje de consulta de [GraphQL](https://graphql.github.io/) es:

* **Una [especificación](https://graphql.github.io/graphql-spec/June2018/).** La especificación determina la validez del [modelo](/v4/guides/intro-to-graphql#schema) en el servidor de la API. El modelo determina la validez de las llamadas al cliente.

* **[Lenguaje inflexible](#about-the-graphql-schema-reference).** El modelo define el sistema de tipos de la API y todas las relaciones con objetos.

* **[Introspectivo](/v4/guides/intro-to-graphql#discovering-the-graphql-api).** Un cliente puede consultar el modelo para obtener detalles del mismo.

* **[Jerárquico](/v4/guides/forming-calls).** La forma de un llamado de GraphQL imita la forma de los datos JSON que recupera. Los [Campos anidados](/v4/guides/migrating-from-rest/#example-nesting) te permiten consultar y recibir únicamente los dtos que especificas en una sola transacción.

* **Una capa de aplicación.** GraphQL no es un modelo de almacenamiento o un lenguaje de consulta de bases de datos. _graph_ se refiere a estructuras gráficas definidas en el modelo, en donde los [nodos](/v4/guides/intro-to-graphql#node) definen objetos y los [bordes](/v4/guides/intro-to-graphql#edge) definen relaciones entre objetos. La API recorre y recupera datos de la aplicación basándose en las definiciones del modelo, independientemente de cómo se almacenan los datos.

### Por qué GitHub utiliza GraphQL

GitHub eligió GraphQL para la API v4 porque ofrece significativamente más flexibilidad para nuestros intregradores. La capacidad de definir precisamente los datos que quieres &mdash;y _únicamente_ estos&mdash; es una ventaja poderosa sobre las terminales de la API de REST v3. GraphQL te permite reemplazar varias solicitudes de REST con _una sola llamada_ para agregar los datos que especifiques.

Para obtener más detalles acerca de por qué GitHub se ha migrado a GraphQL, consulta la[publicación de anuncios del blog](https://githubengineering.com/the-github-graphql-api/).

### Acerca de la referencia del modelo de GraphQL

Los documentos en la barra lateral se generan del [modelo](/v4/guides/intro-to-graphql/#discovering-the-graphql-api) de GraphQL de {% data variables.product.prodname_dotcom %}. Todas las llamadas se validan y ejecutan contra el modelo. Utiliza estos documentos para encontrar los datos a los que puedes llamar:

* Operaciones permitidas: [consultas](/v4/query) y [mutaciones](/v4/mutation).

* Tipos definidos por el modelo: [escalares](/v4/scalar), [objetos](/v4/object), [enumeradores](/v4/enum), [interfaces](/v4/interface), [uniones](/v4/union), y [objetos de entrada](/v4/input_object).

Puedes acceder a este mismo contenido a través de la [Barra lateral de documentos del explorador](/v4/guides/using-the-explorer#accessing-the-sidebar-docs). Nota que podrías necesitar depender de ambos, los documentos y la validación del modelo, para hacer una llamada a la API de GraphQL.

Para obtener otro tipo de información, tal como los detalles de autenticación y el límite de tasas, revisa las [guías](/v4/guides).

### Solicitar soporte

{% data reusables.support.help_resources %}
