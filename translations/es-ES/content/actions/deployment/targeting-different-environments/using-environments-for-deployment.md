---
title: Utilizar ambientes para el despliegue
shortTitle: Utilizar ambientes para el despliegue
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
---


## Acerca de los ambientes

Los ambientes se utilizan para describir un objetivo de despliegue general como `production`, `staging` o `development`. Cuando se despliega un flujo de trabajo de {% data variables.product.prodname_actions %} en un ambiente, dicho ambiente se desplegará en la página principal del repositorio. Para obtener más información sobre cómo visualizar los despliegues hacia los ambientes, consulta la sección "[Ver el historial de despliegue](/developers/overview/viewing-deployment-history)".

Puedes configurr ambientes con reglas de protección y secretos. Cuando un job de un flujo de trabajo referencia un ambiente, el job no comenzará hasta que todas las reglas de protección del ambiente pasen. Un job tampoco puede acceder a los secretos que se definen en un ambiente sino hasta que todas las reglas de protección de dicho ambiente pasen.

{% ifversion fpt %}
{% note %}

**Nota:** Solo puedes configurar ambientes para repositorios públicos. Si conviertes un repositorio de público a privado, cualquier regla de protección o secretos de ambiente que hubieses configurado se ingorarán y no podrás configurar ningún ambiente. Si conviertes tu repositorio en público nuevamente, tendrás acceso a cualquier regla de protección y secreto de ambiente que hubieras configurado previamente.

Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden configurar ambientes para los repositorios privados. Para obtener más información, consulta la sección [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/deployment/targeting-different-environments/using-environments-for-deployment). {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

## Reglas de protección de ambiente

Las reglas de protección de ambiente requieren que pasen condiciones específicas antes de que un job que referencia al ambiente pueda proceder. {% ifversion fpt or ghae or ghes > 3.1 or ghec %}Puedes utilizar las reglas de protección de ambiente para requerir una aprobación manual, retrasar un job, o restringir el ambiente a ramas específicas.{% else %}Puedes utilizar la protección de ambiente para requerir una aprobación manual o retrasar un job.{% endif %}

### Revisores requeridos

Utiliza los revisores requeridos para requerir que una persona o equipo específicos aprueben los jobs del flujo de trabajo que referencian el ambiente. Puedes listar hasta seis usuarios o equipos como revisores. Los revisores deben tener acceso de lectura en el repositorio como mínimo. Solo uno de los revisores requeridos necesita aprobar el job para que éste pueda proceder.

Para obtener más información sobre cómo revisar jobs que referencian un ambiente con revisores requeridos, consulta la sección "[revisar los despliegues](/actions/managing-workflow-runs/reviewing-deployments)".

### Temporizador de espera

Utiliza un temporizador de espera para retrasar un job durante una cantidad de tiempo específica después de que el job se active inicialmente. El tiempo (en minutos) debe ser un número entero entre 0 y 43,200 (30 días).

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
### Ramas de despliegue

Utiliza ramas de despliegue para restringir las ramas que pueden hacer despliegues en el ambiente. A continuación encnotrarás las opciones para las ramas de despliegue de un ambiente:

* **Todas las ramas**: Todas las ramas del repositorio pueden hacer despliegues en el ambiente.
* **Ramas protegidas**: Solo las ramas que tengan reglas de protección de rama habilitadas podrán hacer despliegues en el ambiente. Si no se han definido reglas de protección de ramas en ninguna de las ramas del repositorio, entonces todas las ramas podrán hacer despliegues. Para obtener más iformación acerca de las reglas de protección de rama, consulta la sección "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".
* **Ramas selectas**: Solo las ramas que coincidan con tus patrones específicos de nombre podrán hacer despliegues en el ambiente.

  Por ejemplo, si especificas `releases/*` como una regla de rama de despliegue, solo aquellas ramas cuyo nombre inicie con `releases/` podrán hacer despliegues en el ambiente. (Los caracteres de comodín no coincidirán con `/`. Para hacer coincidir las ramas que inicien con `release/` y contengan una diagonal sencilla adicional utiliza `release/*/*`.) Si agregas `main` como regla de rama de despliegue, la rama que se llame `main` también podrá hacer despliegues en el ambiente. Para obtener más información sobre las opciones de sintaxis para las ramas de despliegue, consulta la [documentación de File.fnmatch de Ruby](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
{% endif %}
## Secretos de ambiente

Los secretos que se almacenan en un ambiente sólo se encuentran disponibles para los jobs de flujo de trabajo que referencien el ambiente. Si el ambiente requiere aprobación, un job no puede acceder a secretos de ambiente hasta que uno de los revisores requeridos lo apruebe. Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets)".

{% note %}

**Nota:** Los flujos de trabajo que se ejecutan en ejecutores auto-hospedados no se ejecutan en un contenedor aislado, incluso si utilizan ambientes. Los secretos de ambiente deberían tratarse con el mismo nivel de seguridad que los secretos de repositorio y de organización. Para obtener más información, consulta la sección "[Fortalecimiento de la seguridad para las GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

{% endnote %}

## Crear un ambiente

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %}
{% note %}

**Note:** To create an environment in a private repository, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
{% data reusables.actions.name-environment %}
1. Opcionalmente, personas o equipos específicos deben aprobar los jobs de flujo de trabajo que utilicen este ambiente.
   1. Selecciona **Revisores requeridos**.
   1. Ingresa hasta 6 personas o equipos. Solo uno de los revisores requeridos necesita aprobar el job para que éste pueda proceder.
   1. Haz clic en **Guardar reglas de protección**.
2. Opcionalmente, especifica la cantidad de tiempo a esperar antes de permitir los jobs de flujo de trabajo que utilizan este ambiente para proceder.
   1. Selecciona **Cronómetro de espera**.
   1. Ingresa la cantidad de minutos a esperar.
   1. Haz clic en **Guardar reglas de protección**.
3. Opcionalmente, especifica qué ramas pueden desplegarse en este ambiente. Para obtener más información sobre los valores posibles, consulta la sección "[Ramas de despliegue](#deployment-branches)".
   1. Selecciona la opción deseada en el menú desplegable de **Ramas de despliegue**.
   1. Si eliges **Ramas seleccionadas**, ingresa los patrones de nombre de rama que quieras permitir.
4. Opcionalmente, agrega secretos de ambiente. Estos secretos solo están disponibles para los jobs de flujos de trabajo que utilicen el ambiente. Adicionalmente, los jobs de flujo de trabajo que utilicen este ambiente solo pueden acceder a estos secretos después de que pase cualquier regla configurada (por ejemplo, los revisores requeridos). Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets)".
   1. Debajo de **Secretos de ambiente**, haz clic en **Agregar secreto**.
   1. Ingresa el nombre del secreto.
   1. Ingresa el valor del secreto.
   1. Haz clic en **Agregar secreto** (Agregar secreto).

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}También puedes crear y configurar ambientes a través de la API de REST. Para obtener más información, consulta las secciones de "[Ambientes](/rest/reference/repos#environments)" y "[Secretos](/rest/reference/actions#secrets)".{% endif %}

El ejecutar un flujo de trabajo que referencie un ambiente que no existe creará un ambiente con el nombre referenciado. El ambiente recién creado no tendrá configurada ninguna regla de protección o secreto. Cualquiera que pueda editar flujos de trabajo en el repositorio podrá crear ambientes a través de un archivo de flujo de trabajo, pero solo los administradoresd e repositorio pueden configurar el ambiente.

## Utilizar un ambiente

Cad job en un flujo de trabajo puede referenciar un solo ambiente. Cualquier regla de protección que se configure para el ambiente debe pasar antes de que un job que referencia al ambiente se envíe a un ejecutor. El job puede acceder a los secretos de ambiente únicamente después de que se envía a un ejecutor.

Cuando un flujo de trabajo referencia un ambiente, éste aparecerá en los despliegues del repositorio. Para obtener más información acerca de visualizar los despliegues actuales y previos, consulta la sección "[Visualizar el historial de despliegues](/developers/overview/viewing-deployment-history)".

{% data reusables.actions.environment-example %}

## Borrar un ambiente

{% data reusables.actions.permissions-statement-environment %}

El borrar un ambiente borrará todos los secretos y reglas de protección asociadas con éste. Cualquier job que esté actualmente en espera porque depende de las reglas de protección del ambiente que se borró, fallará automáticamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Junto al ambiente que quieres borrar, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
2. Da clic en **Entiendo, borra este ambiente**.

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}También puedes borrar los ambientes a través de la API de REST Para obtener más información, consulta la sección "[Ambientes](/rest/reference/repos#environments)".{% endif %}

## Cómo se relacionan los ambientes con los desplilegues

{% data reusables.actions.environment-deployment-event %}

Puedes acceder a estos objetos a través de la API de REST o la API de GraphQL. También puedes suscribirte a estos eventos de webhook. Para obtener más información, consulta las secciones "[Repositorios](/rest/reference/repos#deployments)" (API de REST), "[Objetos]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/reference/objects#deployment)"(API de GraphQL) o "[Cargas útiles y eventos de Webhook](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)".

## Pasos siguientes

{% data variables.product.prodname_actions %} proporciona varias características para administrar tus despliegues. Para obtener más información, consulta la sección "[Desplegar con GitHub Actions](/actions/deployment/deploying-with-github-actions)".
