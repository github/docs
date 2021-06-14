---
title: Ambientes
intro: Puedes configurr ambientes con reglas de protección y secretos. Un job de un flujo de trabajo puede referenciar un ambiente para utilizar las reglas de protección y secretos de dicho ambiente.
product: '{% data reusables.gated-features.environments %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
---

{% data reusables.actions.environments-beta %}
{% data reusables.actions.ae-beta %}

### Acerca de los ambientes

Puedes configurr ambientes con reglas de protección y secretos. Cuando un job de un flujo de trabajo referencia un ambiente, el job no comenzará hasta que todas las reglas de protección del ambiente pasen. Un job tampoco puede acceder a los secretos que se definen en un ambiente sino hasta que todas las reglas de protección de dicho ambiente pasen.

{% if currentVersion == "free-pro-team@latest" %}
Las reglas de protección de ambiente y los secretos de ambiente solo están disponibles en los repositorios públicos y privados de un plan empresarial. Si conviertes a un repositorio de público a privado en un plan no empresarial, cualquier regla de protección o secretos de ambiente configurados se ignorarán y no podrás configurar ningún ambiente. Si conviertes tu repositorio en público nuevamente, tendrás acceso a cualquier regla de protección y secreto de ambiente que hubieras configurado previamente.
{% endif %}

#### Reglas de protección de ambiente

Las reglas de protección de ambiente requieren que pasen condiciones específicas antes de que un job que referencia al ambiente pueda proceder. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}Puedes utilizar las reglas de protección de ambiente para requerir una aprobación manual, retrasar un job, o restringir el ambiente a ramas específicas.{% else %}Puedes utilizar la protección de ambiente para requerir una aprobación manual o retrasar un job.{% endif %}

##### Revisores requeridos

Utiliza los revisores requeridos para requerir que una persona o equipo específicos aprueben los jobs del flujo de trabajo que referencian el ambiente. Puedes listar hasta seis usuarios o equipos como revisores. Los revisores deben tener acceso de lectura en el repositorio como mínimo. Solo uno de los revisores requeridos necesita aprobar el job para que éste pueda proceder.

Para obtener más información sobre cómo revisar jobs que referencian un ambiente con revisores requeridos, consulta la sección "[revisar los despliegues](/actions/managing-workflow-runs/reviewing-deployments)".

##### Temporizador de espera

Utiliza un temporizador de espera para retrasar un job durante una cantidad de tiempo específica después de que el job se active inicialmente. El tiempo (en minutos) debe ser un número entero entre 0 y 43,200 (30 días).

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}
##### Ramas de despliegue

Utiliza ramas de despliegue para restringir las ramas que pueden hacer despliegues en el ambiente. A continuación encnotrarás las opciones para las ramas de despliegue de un ambiente:

* **Todas las ramas**: Todas las ramas del repositorio pueden hacer despliegues en el ambiente.
* **Ramas protegidas**: Solo las ramas que tengan reglas de protección de rama habilitadas podrán hacer despliegues en el ambiente. Si no se han definido reglas de protección de ramas en ninguna de las ramas del repositorio, entonces todas las ramas podrán hacer despliegues. Para obtener más iformación acerca de las reglas de protección de rama, consulta la sección "[Acerca de las ramas protegidas](/github/administering-a-repository/about-protected-branches)".
* **Ramas selectas**: Solo las ramas que coincidan con tus patrones específicos de nombre podrán hacer despliegues en el ambiente.

  Por ejemplo, si especificas `releases/*` como una regla de rama de despliegue, solo aquellas ramas cuyo nombre inicie con `releases/` podrán hacer despliegues en el ambiente. (Los caracteres de comodín no coincidirán con `/`. Para hacer coincidir las ramas que inicien con `release/` y contengan una diagonal sencilla adicional utiliza `release/*/*`.) Si agregas `main` como regla de rama de despliegue, la rama que se llame `main` también podrá hacer despliegues en el ambiente. Para obtener más información sobre las opciones de sintaxis para las ramas de despliegue, consulta la [documentación de File.fnmatch de Ruby](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
{% endif %}
#### Secretos de ambiente

Los secretos que se almacenan en un ambiente sólo se encuentran disponibles para los jobs de flujo de trabajo que referencien el ambiente. Si el ambiente requiere aprobación, un job no puede acceder a secretos de ambiente hasta que uno de los revisores requeridos lo apruebe. Para obtener más información sobre los secretos, consulta la sección "[Secretos cifrados](/actions/reference/encrypted-secrets)".

{% note %}

**Nota:** Los flujos de trabajo que se ejecutan en ejecutores auto-hospedados no se ejecutan en un contenedor aislado, incluso si utilizan ambientes. Los secretos de ambiente deben tratarse con el mismo nivel de seguridad que un secreto de repositorio u organización. Para obtener más información, consulta la sección "[Fortalecimiento de la seguridad para las GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

{% endnote %}

### Crear un ambiente

{% data reusables.github-actions.permissions-statement-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Da clic en **Ambiente nuevo**.
1. Ingresa un nombre para el ambiente y luego da clic en **Configurar ambiente**. Los nombres de ambiente no distinguen entre mayúsculas y minúsculas. Un nombre de ambiente no deberá exceder los 255 caracteres y deberá ser único dentro del repositorio.
1. Configura cualquier regla de protección o secreto de ambiente.

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}También puedes crear y configurar ambientes a través de la API de REST. Para obtener más información, consulta las secciones de "[Ambientes](/rest/reference/repos#environments)" y "[Secretos](/rest/reference/actions#secrets)".{% endif %}

El ejecutar un flujo de trabajo que referencie un ambiente que no existe creará un ambiente con el nombre referenciado. El ambiente recién creado no tendrá configurada ninguna regla de protección o secreto. Cualquiera que pueda editar flujos de trabajo en el repositorio podrá crear ambientes a través de un archivo de flujo de trabajo, pero solo los administradoresd e repositorio pueden configurar el ambiente.

### Referenciar un ambiente

Cad job en un flujo de trabajo puede referenciar un solo ambiente. Cualquier regla de protección que se configure para el ambiente debe pasar antes de que un job que referencia al ambiente se envíe a un ejecutor. Cuando el job se envía al ejecutor, éste puede acceder a los secretos del ambiente.

Para obtener más información sobre la sintaxis para referenciar ambientes en los flujos de trabajo, consulta la sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment)". Para obtener más información sobre cómo revisar jobs que referencian un ambiente con revisores requeridos, consulta la sección "[revisar los despliegues](/actions/managing-workflow-runs/reviewing-deployments)".

Cuando un flujo de trabajo referencia un ambiente, éste aparecerá en los despliegues del repositorio. Para obtener más información acerca de visualizar los despliegues actuales y previos, consulta la sección "[Visualizar el historial de despliegues](/developers/overview/viewing-deployment-history)".

### Utilizar la concurrencia para serializar los despliegues en un ambiente
Puedes utilizar la concurrencia para que un ambiente tenga un máximo de un despliegue en progreso y un despliegue pendiente a la vez. Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#concurrency)".

### Borrar un ambiente

{% data reusables.github-actions.permissions-statement-environment %}

El borrar un ambiente borrará todos los secretos y reglas de protección asociadas con éste. Cualquier job que esté actualmente en espera porque depende de las reglas de protección del ambiente que se borró, fallará automáticamente.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Junto al ambiente que quieres borrar, haz clic en {% octicon "trash" aria-label="The trash icon" %}.
2. Da clic en **Entiendo, borra este ambiente**.

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}También puedes borrar los ambientes a través de la API de REST Para obtener más información, consulta la sección "[Ambientes](/rest/reference/repos#environments)".{% endif %}
