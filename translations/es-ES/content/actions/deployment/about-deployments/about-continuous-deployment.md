---
title: Acerca del despliegue contínuo
intro: 'Puedes crear flujos de trabajo de despliegue continuo (DC) personalizados directamente en tu repositorio de {% data variables.product.prodname_dotcom %} con {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: Acerca del despliegue contínuo
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## Acerca del despliegue contínuo

_Despliegue continuo_ (DC) es la práctica de utilizar la automatización para publicar y desplegar actualizaciones de software. Como parte del proceso habitual de DC, el código se compila y prueba automáticamente antes del despliegue.

El despliegue continuo a menudo se empareja con una integración continua. Para obtener más información acerca de la integración contínua, consulta la sección "[Acerca de la Integración Contínua](/actions/guides/about-continuous-integration)".

## Acerca del despliegue continuo utilizando {% data variables.product.prodname_actions %}

Puedes configurar un flujo de trabajo de {% data variables.product.prodname_actions %} para desplegar tu producto de software. Para verificar que tu producto funcione conforme lo esperado, este puede compilar el código en tu repositorio y ejecutar tus pruebas antes del despliegue.

Puedes configurar tu flujo de trabajo de DC para que se ejecute cuando ocurra un evento de {% data variables.product.product_name %} (por ejemplo, cuando se sube código nuevo a la rama predeterminada de tu repositorio), en un horario establecido o cuando ocurre un evento externo que utilice el webhook de despacho. Para obtener más información sobre cuándo puede ejecutarse tu flujo de trabajo, consulta la sección "[Eventos que activan flujos de trabajo](/actions/reference/events-that-trigger-workflows)".

{% data variables.product.prodname_actions %} Proporciona características que te dan más control sobre los despliegues. Por ejemplo, puedes utilizar ambientes para requerir aprobaciones para que proceda un job, restringir que ramas pueden activar un flujo de trabajo o limitar el acceso a los secretos. You can use concurrency to limit your CD pipeline to a maximum of one in-progress deployment and one pending deployment. For more information about these features, see "[Deploying with GitHub Actions](/actions/deployment/deploying-with-github-actions)" and "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)."

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Utilizar OpenID Connect para acceder a los recursos en la nube

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Flujos de trabajo iniciales y acciones de terceros

{% data reusables.actions.cd-templates-actions %}

## Leer más

- [Desplegar con GitHub Actions](/actions/deployment/deploying-with-github-actions)
- [Utilizar ambientes para desplegue](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- "[Administrar la facturación para las {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions)"{% endif %}

