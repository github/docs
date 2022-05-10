---
title: Intruducir las GitHub Actions a tu empresa
shortTitle: Intrudcir las acciones
intro: 'Puedes planear cómo implementar las {% data variables.product.prodname_actions %} en tu empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## Acerca de {% data variables.product.prodname_actions %} para empresas

{% data reusables.actions.about-actions %} Con {% data variables.product.prodname_actions %}, tu empresa puede automatizar, personalizar y ejecutar tus flujos de trabajo de desarrollo de software como las pruebas y despliegues. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".

![Diagrama de los jobs que se ejecutan en los ejecutores auto-hospedados](/assets/images/help/images/actions-enterprise-overview.png)

{% data reusables.enterprise.upgrade-ghes-for-actions %}

Antes de que incluyas las {% data variables.product.prodname_actions %} en una empresa grande, primero necesitas planear tu adopción y tomar las decisiones de cómo tu empresa utilizará {% data variables.product.prodname_actions %} para apoyar de la mejor forma a tus necesidades únicas.

## Normatividad y cumplimiento

Deberías crear un plan que rija el uso de las {% data variables.product.prodname_actions %} en tu empersa y logre tus obligaciones de cumplimiento.

Determine which actions {% if actions-workflow-policy %}and reusable workflows{% endif %} your developers will be allowed to use. {% ifversion ghes %}First, decide whether you'll enable access to actions {% if actions-workflow-policy %}and reusable workflows{% endif %} from outside your instance. {% data reusables.actions.access-actions-on-dotcom %} Para obtener más información, consulta la sección "[Acerca de utilizar acciones en tu empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".

Then,{% else %}First,{% endif %} decide whether you'll allow third-party actions {% if actions-workflow-policy %}and reusable workflows{% endif %} that were not created by {% data variables.product.company_short %}. You can configure the actions {% if actions-workflow-policy %}and reusable workflows{% endif %} that are allowed to run at the repository, organization, and enterprise levels and can choose to only allow actions that are created by {% data variables.product.company_short %}. If you do allow third-party actions{% if actions-workflow-policy %} and reusable workflows{% endif %}, you can limit allowed actions to those created by verified creators or a list of specific actions{% if actions-workflow-policy %} and reusable workflows{% endif %}. Para obtener más información, consulta las secciones "[Administrar los ajustes de {% data variables.product.prodname_actions %} para un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)", "[Inhabilitar o limitar las {% data variables.product.prodname_actions %} para tu organización](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)" y "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise)".

{% if actions-workflow-policy %}
![Captura de pantalla de las políticas de {% data variables.product.prodname_actions %}](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png)
{%- else %}
![Captura de pantalla de las políticas de {% data variables.product.prodname_actions %}](/assets/images/help/organizations/enterprise-actions-policy.png)
{%- endif %}

{% ifversion ghec or ghae-issue-4757 %}
Considera combinar OpenID Connect (OIDC) con los flujos de trabajo reutilizables para requerir despliegues continuos a lo largo de tu repositorio, organización o empresa. Puedes hacerlo si defines las condiciones de confianza en los roles de la nube con base en los flujos reutilizables. Para obtener más información, consulta la sección "[Utilizar OpenID Connect con flujos de trabajo reutilizables](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)".
{% endif %}

Puedes acceder a la información sobre la actividad relacionada con las {% data variables.product.prodname_actions %} en las bitácoras de auditoría de tu empresa. Si tus necesidades de negocio requieren que retengas bitácoras de auditoría por más de seis meses, planea cómo exportarás y almacenarás estos datos fuera de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta las secciones {% ifversion ghec %}"[Transmitir la bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)" y "[Exportar la actividad de tu bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)".{% else %}"[Reenvío de bitácoras](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)".{% endif %}

![Entradas de la bitácora de auditoría](/assets/images/help/repository/audit-log-entries.png)

## Seguridad

Deberías planear tu enfoque sobre el fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}.

### Fortalecer la seguridad de los flujos de trabajo y repositorios individuales

Haz un plan para requerir buenas prácticas de seguridad para las personas que utilizan las características de {% data variables.product.prodname_actions %} dentro de tu empresa. Para obtener más información sobre estas prácticas, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions)".

También puedes fomentar la reutilización de flujos de trabajo que ya se hayan evaluado en su seguridad. Para obtener más información, consulta la sección de "[Innersourcing](#innersourcing)".

### Asegurar el acceso a los secretos y recursos de despliegue

Deberías planear dónde almacenarás tus secretos. Te recomendamos almacenar secretos en {% data variables.product.prodname_dotcom %}, pero podrías elegir almacenarlos en un proveedor de servicios en la nube.

En {% data variables.product.prodname_dotcom %}, puedes almacenar secretos a nivel de repositorio u organización. Los secretos a nivel de repositorio pueden limitarse a los flujos de trabajo en ciertos ambientes, tales como los de producción o de pruebas. Para obtener más información, consulta la sección "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".

![Captura de pantalla de una lista de secretos](/assets/images/help/settings/actions-org-secrets-list.png) Deberías considerar agregar protección manual para las aprobaciones en el caso de los ambientes sensibles para que los flujos de trabajo deban aprobarse antes de obtener acceso a los secretos de los ambientes. Para obtener más información, consulta la sección "[Utilizar ambientes para despliegues](/actions/deployment/targeting-different-environments/using-environments-for-deployment)".

### Consideraciones de seguridad para las acciones de terceros

Existe un riesgo significativo en suministrar acciones desde repositorios de terceros en {% data variables.product.prodname_dotcom %}. Si permites cualquier acción de terceros, deberías crear lineamientos internos que motiven a tu equipo a seguir las mejores prácticas, tales como fijar acciones al SHA de confirmación completo. Para obtener más información, consulta la sección "[Utilizar acciones de terceros](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)".

## Innersourcing

Piensa cómo tu empresa puede utilizar características de {% data variables.product.prodname_actions %} para la automatización de innersource. El innersourcing es una forma de incorporar los beneficios de las metodologías de código abierto en tu ciclo de desarrollo de software interno. Para obtener más información, consulta la sección [Una introducción al innersource](https://resources.github.com/whitepapers/introduction-to-innersource/) en los recursos de {% data variables.product.company_short %}.

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-4757 %}
{% data reusables.actions.reusable-workflows-ghes-beta %}
Con flujos de trabajo reutilizables, tu equipo puede llamar a un flujo de trabajo desde otro flujo de trabajo, evitando la duplicación exacta. Los flujos de trabajo reutilizables promueven las mejores prácticas, ayudando a tu equipo a utilizar flujos de trabajo que estén bien diseñados y ya se hayan probado. Para obtener más información, consulta la sección "[Reutilizar flujos de trabajo](/actions/learn-github-actions/reusing-workflows)".
{% endif %}

Para proporcionar un lugar inicial para que los desarrolladores creen flujos de trabajo nuevos, puedes utilizar flujos de trabajo inicial. Esto no solo ahorra tiempo a tus desarrolladores, sino que también promueve la consistencia y las mejores prácticas a lo largo de tu empresa. Para obtener más información, consulta la sección "[Crear flujos de trabajo iniciales para tu organización](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)".

{% if not internal-actions %}
Cada vez que tus desarrolladores de flujos de trabajo quieran utilizar una acción que se almacene en un repositorio privado, deben configurar dicho flujo de trabajo para que primero clone el repositorio. Para reducir la cantidad de repositorios que deben clonarse, considera agrupar las acciones que se utilizan más comúnmente en un solo repositorio. Para obtener más información, consulta la sección "[Acerca de las acciones personalizadas](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action)".
{% endif %}

## Administrar recursos

Debes planear cómo administrarás los recursos requeridos para utilizar las {% data variables.product.prodname_actions %}.

{% ifversion ghes %}
### Requisitos de hardware

Podrías necesitar mejorar los recursos de CPU y de memoria para que {% data variables.product.product_location %} maneje la carga desde {% data variables.product.prodname_actions %} sin causar una pérdida de rendimiento. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)".
{% endif %}

### Ejecutores

Los flujos de trabajo de las {% data variables.product.prodname_actions %} requieren ejecutores.{% ifversion ghec %} Puedes eleigr utilizar ejecutores hospedados en {% data variables.product.prodname_dotcom %} o ejecutores auto-hospedados. Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} son convenientes porque los administra {% data variables.product.company_short %}, quien maneja el mantenimiento y mejoras por ti. Sin embargo, podrías querer considerar los ejecutores auto-hospedados si necesitas ejecutar un flujo de trabajo que accederá a los recursos tras tu cortafuegos o si quieres tener más control sobre los recursos, configuración o ubicación geográfica de tus máquinas de ejecutores. Para obtener más información, consulta las secciones "[Acerca de los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" y "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".{% else %} Necesitarás hospedar tus propios ejecutores instalando la aplicación de ejecutores auto-hospedados de {% data variables.product.prodname_actions %} en tus propias máquinas. Para obtener más información, consulta la sección "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".{% endif %}

{% ifversion ghec %}Si estás utilizando ejecutores auto-hospedados, tienes que decidir si quieres utilizar máquinas físicas, virtuales o contenedores.{% else %}Decide si quieres utilizar máquinas físicas, virtuales o contenedores para tus ejecutores auto-hospedados.{% endif %} Las máquinas físicas conservarán los restos de los jobs anteriores, así como las máquinas virtuales, a menos de que utilices una imagen nueva para cada job o que limpies las máquinas después de cada ejecución de un job. Si eliges los contenedores, debes estar consciente de que la actualización automática del ejecutor apagará al contenedor, lo cual puede ocasionar que los flujos de trabajo fallen. Deberías idear una solución para esto al prevenir las actualizaciones automáticas u omitir el comando para eliminar al contenedor.

También tienes que decidir dónde agregar cada ejecutor. Puedes agregar un ejecutor auto-hospedado a un repositorio individual o puedes hacerlo disponible para toda una organización en toda tu empresa. El agregar ejecutores a nivel de empresa u organización permite compartir ejecutores, lo cual podría reducir el tamaño de tu infraestructura para ejecutores. Puedes utilizar políticas para limitar el acceso a los ejecutores auto-hospedados a nivel de empresa y organización si asignas grupos de ejecutores a los repositorios u organizaciones específicas. Para obtener más información, consulta las secciones "[Agregar ejecutores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)" y "[Administrar el acceso a los ejecutores auto-hospedados utilizando grupos](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

{% ifversion ghec or ghes > 3.2 %}
Debes considerar utilizar el autoescalamiento para incrementar o decrementar automáticamente la cantidad de ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Autoescalar con ejecutores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".
{% endif %}

Finalmente, deberías considerar el fortalecimiento de seguridad para los ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

### Almacenamiento

{% data reusables.actions.about-artifacts %} Para obtener más información, consulta la sección "[Almacenar datos de flujo de trabajo como artefactos](/actions/advanced-guides/storing-workflow-data-as-artifacts)".

![Captura de pantalla del artefacto](/assets/images/help/repository/passing-data-between-jobs-in-a-workflow-updated.png)

{% ifversion ghes %}
Debes configurar un almacenamiento externo de blobs para estos artefactos. Decide qué proveedor de almacenamiento compatible utilizará tu empresa. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)".
{% endif %}

{% ifversion ghec or ghes %}

{% data reusables.actions.artifact-log-retention-statement %}

{% endif %}

Si quieres retener bitácoras y artefactos por más tiempo que el límite superior que puedes configurar en {% data variables.product.product_name %}, necesitarás planear cómo exportar y almacenar los datos.

{% ifversion ghec %}
Tu suscripción incluye un poco de almacenamiento, pero el agregar almacenamiento adicional afectará tu factura. Deberías hacer planes para estos costos. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".
{% endif %}

## Rastrear el uso

Debes considerar hacer un plan para rastrear el uso que tu empresa tiene para las {% data variables.product.prodname_actions %}, tal como qué tan a menudo se ejecutan los flujos de trabajo, cuántas de estas ejecuciones están pasando y fallando y qué repositorios están utilizando cuáles flujos de trabajo.

{% ifversion ghec %}
Puedes ver los detalles de almacenamiento básicos y el uso de transferencia de datos de las {% data variables.product.prodname_actions %} para cada organización en tu empresa a través de tus ajustes de facturación. Para obtener más información, consulta la sección "[Visualizar tu uso de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account)".

Para obtener datos de uso más detallados, puedes{% else %}Puedes{% endif %} utilizar webhooks para suscribirte a la información sobre los jobs y las ejecuciones de los flujos de trabajo. Para obtener más información, consulta la sección "[Acerca de los webhooks](/developers/webhooks-and-events/webhooks/about-webhooks)".

Haz un plan de cómo tu empresa podrá pasar la información de estos webhooks a un sistema para archivar datos. Puedes considerar utilizar "CEDAR.GitHub.Collector", una herramienta de código abierto que recolecta y procesa datos de webhook desde {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta el [repositorio `Microsoft/CEDAR.GitHub.Collector`](https://github.com/microsoft/CEDAR.GitHub.Collector/).

También deberías planear cómo habilitarás a tus equipos para obtener los datos que necesitan desde tu sistema de archivado.
