---
title: Utilizar ambientes para el despliegue
shortTitle: Use environments for deployment
intro: Puedes configurr ambientes con reglas de protección y secretos. Un job de flujo de trabajo que referencie a un ambiente debe seguir cualquier regla de protección para el ambiente antes de ejecutar o acceder a los secretos de dicho ambiente.
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 21163a759cfd7eab3b197aeb4bb9283e1ccb90a2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147572307'
---
## Acerca de los ambientes

Los entornos se usan para describir un destino de implementación general como `production`, `staging` o `development`. Cuando se despliega un flujo de trabajo de {% data variables.product.prodname_actions %} en un ambiente, dicho ambiente se desplegará en la página principal del repositorio. Para más información sobre cómo ver las implementaciones en los entornos, vea "[Visualización del historial de implementación](/developers/overview/viewing-deployment-history)".

Puedes configurr ambientes con reglas de protección y secretos. Cuando un job de un flujo de trabajo referencia un ambiente, el job no comenzará hasta que todas las reglas de protección del ambiente pasen. Un job tampoco puede acceder a los secretos que se definen en un ambiente sino hasta que todas las reglas de protección de dicho ambiente pasen.

{% ifversion fpt %} {% note %}

**Nota:** Solo puede configurar entornos para repositorios públicos. Si conviertes un repositorio de público a privado, cualquier regla de protección o secretos de ambiente que hubieses configurado se ingorarán y no podrás configurar ningún ambiente. Si conviertes tu repositorio en público nuevamente, tendrás acceso a cualquier regla de protección y secreto de ambiente que hubieras configurado previamente.

Las organizaciones con datos {% data variables.product.prodname_team %} y los usuarios con {% data variables.product.prodname_pro %} pueden configurar entornos para repositorios privados. Para más información, vea "[Productos de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/githubs-products)".

{% endnote %} {% endif %}

## Reglas de protección del entorno

Las reglas de protección de ambiente requieren que pasen condiciones específicas antes de que un job que referencia al ambiente pueda proceder. Puedes utilizar reglas de protección de ambiente para requerir una aprobación manual, retrasar un job o restringir el ambiente a ramas específicas.

### Revisores requeridos

Utiliza los revisores requeridos para requerir que una persona o equipo específicos aprueben los jobs del flujo de trabajo que referencian el ambiente. Puedes listar hasta seis usuarios o equipos como revisores. Los revisores deben tener acceso de lectura en el repositorio como mínimo. Solo uno de los revisores requeridos necesita aprobar el job para que éste pueda proceder.

Para obtener más información sobre cómo revisar los trabajos que hacen referencia a un entorno con los revisores necesarios, consulte "[Revisión de implementaciones](/actions/managing-workflow-runs/reviewing-deployments)".

### Temporizador de espera

Utiliza un temporizador de espera para retrasar un job durante una cantidad de tiempo específica después de que el job se active inicialmente. El tiempo (en minutos) debe ser un número entero entre 0 y 43,200 (30 días).

### Ramas de despliegue

Utiliza ramas de despliegue para restringir las ramas que pueden hacer despliegues en el ambiente. A continuación encnotrarás las opciones para las ramas de despliegue de un ambiente:

* **All branches**: todas las ramas del repositorio pueden implementarse en el entorno.
* **Protected branches**: solo las ramas con reglas de protección de rama habilitadas pueden implementarse en el entorno. Si no se han definido reglas de protección de ramas en ninguna de las ramas del repositorio, entonces todas las ramas podrán hacer despliegues. Para obtener más información sobre las reglas de protección de ramas, consulte "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".
* **Selected branches**: solo las ramas que coinciden con los patrones de nombre especificados se pueden implementar en el entorno.

  Por ejemplo, si especifica `releases/*` como una regla de rama de implementación, solo las ramas cuyo nombre comience por `releases/` podrán implementarse en el entorno. (Los caracteres comodín no coincidirán con `/`. Para buscar coincidencias con ramas que comienzan por `release/` y contienen una barra diagonal única adicional, use `release/*/*`). Si agrega `main` como regla de rama de implementación, una rama denominada `main` también se podrá implementar en el entorno. Para obtener más información sobre las opciones de sintaxis para las ramas de implementación, consulte la [documentación de Ruby File.fnmatch](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
## Secretos de entorno

Los secretos que se almacenan en un ambiente sólo se encuentran disponibles para los jobs de flujo de trabajo que referencien el ambiente. Si el ambiente requiere aprobación, un job no puede acceder a secretos de ambiente hasta que uno de los revisores requeridos lo apruebe. Para obtener más información sobre los secretos, consulte "[Secretos cifrados](/actions/reference/encrypted-secrets)".

{% note %}

**Nota:** Los flujos de trabajo que se ejecutan en ejecutores autohospedados no lo hacen en un contenedor aislado, aunque se utilicen entornos. Los secretos de ambiente deberían tratarse con el mismo nivel de seguridad que los secretos de repositorio y de organización. Para obtener más información, consulte [Fortalecimiento de seguridad para GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

{% endnote %}

## Creación de un entorno

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %} {% note %}

**Nota:** La creación de un entorno en un repositorio privado está disponible para las organizaciones con datos {% data variables.product.prodname_team %} y usuarios con datos {% data variables.product.prodname_pro %}.

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %} {% data reusables.actions.new-environment %} {% data reusables.actions.name-environment %}
1. Opcionalmente, personas o equipos específicos deben aprobar los jobs de flujo de trabajo que utilicen este ambiente.
   1. Seleccione **Revisores obligatorios**.
   1. Ingresa hasta 6 personas o equipos. Solo uno de los revisores requeridos necesita aprobar el job para que éste pueda proceder.
   1. Haga clic en **Save protection rules**.
2. Opcionalmente, especifica la cantidad de tiempo a esperar antes de permitir los jobs de flujo de trabajo que utilizan este ambiente para proceder.
   1. Seleccione **Wait timer**.
   1. Ingresa la cantidad de minutos a esperar.
   1. Haga clic en **Save protection rules**.
3. Opcionalmente, especifica qué ramas pueden desplegarse en este ambiente. Para obtener más información sobre los posibles valores, consulte "[Ramas de implementación](#deployment-branches)".
   1. Seleccione la opción deseada en la lista desplegable **Deployment branches**.
   1. Si eligió **Selected branches**, escriba los patrones de nombre de rama que desea permitir.
4. Opcionalmente, agrega secretos de ambiente. Estos secretos solo están disponibles para los jobs de flujos de trabajo que utilicen el ambiente. Adicionalmente, los jobs de flujo de trabajo que utilicen este ambiente solo pueden acceder a estos secretos después de que pase cualquier regla configurada (por ejemplo, los revisores requeridos). Para obtener más información sobre los secretos, consulte "[Secretos cifrados](/actions/reference/encrypted-secrets)".
   1. En **Environment secrets**, haga clic en **Add Secret**.
   1. Ingresa el nombre del secreto.
   1. Ingresa el valor del secreto.
   1. Haga clic en **Add Secret**.

También puedes crear y configurar ambientes a través de la API de REST. Para obtener más información, consulta «[Entornos de implementación](/rest/deployments/environments)», «[Secretos de Acciones de GitHub](/rest/actions/secrets)» y «[Directivas de rama de implementación](/rest/deployments/branch-policies)».

El ejecutar un flujo de trabajo que referencie un ambiente que no existe creará un ambiente con el nombre referenciado. El ambiente recién creado no tendrá configurada ninguna regla de protección o secreto. Cualquiera que pueda editar flujos de trabajo en el repositorio podrá crear ambientes a través de un archivo de flujo de trabajo, pero solo los administradoresd e repositorio pueden configurar el ambiente.

## Utilizar un ambiente

Cad job en un flujo de trabajo puede referenciar un solo ambiente. Cualquier regla de protección que se configure para el ambiente debe pasar antes de que un job que referencia al ambiente se envíe a un ejecutor. El job puede acceder a los secretos de ambiente únicamente después de que se envía a un ejecutor.

Cuando un flujo de trabajo referencia un ambiente, éste aparecerá en los despliegues del repositorio. Para obtener más información sobre cómo ver las implementaciones actuales y anteriores, consulte "[Visualización del historial de implementación](/developers/overview/viewing-deployment-history)".

{% data reusables.actions.environment-example %}

## Borrar un ambiente

{% data reusables.actions.permissions-statement-environment %}

El borrar un ambiente borrará todos los secretos y reglas de protección asociadas con éste. Cualquier job que esté actualmente en espera porque depende de las reglas de protección del ambiente que se borró, fallará automáticamente.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Junto al ambiente que quieres borrar, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
2. Haga clic en **I understand, delete this environment**.

También puyedes borrar ambientes a través de la API de REST. Para más información, consulta la sección sobre los "[Entornos](/rest/reference/repos#environments)".

## Cómo se relacionan los ambientes con los desplilegues

{% data reusables.actions.environment-deployment-event %}

Puedes acceder a estos objetos a través de la API de REST o la API de GraphQL. También puedes suscribirte a estos eventos de webhook. Para obtener más información, consulte "[Repositorios](/rest/reference/repos#deployments)" (API de REST), "[Objetos](/graphql/reference/objects#deployment)" (GraphQL API) o "[Eventos y cargas de webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)".

## Pasos siguientes

{% data variables.product.prodname_actions %} proporciona varias características para administrar tus despliegues. Para obtener más información, consulte "[Implementación con Acciones de GitHub](/actions/deployment/deploying-with-github-actions)".
