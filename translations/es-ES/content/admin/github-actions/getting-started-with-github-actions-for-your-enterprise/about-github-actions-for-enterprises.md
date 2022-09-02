---
title: Acerca de las GitHub Actions para las empresas
shortTitle: Acerca de Acciones de GitHub
intro: 'Las {% data variables.product.prodname_actions %} pueden mejorar la productividad de los desarrolladores al automatizar el ciclo de desarrollo de software de tu empresa.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
---

{% ifversion ghes < 3.3 %}
{% note %}

**Nota:**{% data reusables.enterprise.upgrade-ghes-for-actions %}

{% endnote %}
{% endif %}

## Acerca de {% data variables.product.prodname_actions %} para empresas

{% data reusables.actions.about-actions-for-enterprises %}

| Tarea                                                                   | Más información                                                                                                                                                                            |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Prueba y crea tu aplicación automáticamente                             | "[Acerca de la integración continua](/actions/automating-builds-and-tests/about-continuous-integration)"                                                                                   |
| Desplegar tu aplicación                                                 | "[Acerca del despliegue continuo](/actions/deployment/about-deployments/about-continuous-deployment)"                                                                                      |
| Empaca código segura y automáticamente en los artefactos y contenedores | "[Acerca de crear paquetes con {% data variables.product.prodname_actions %}](/actions/publishing-packages/about-packaging-with-github-actions)"                                           |
| Automatiza tus tareas de administración de proyectos                    | "[Utilizar las {% data variables.product.prodname_actions %} para la administración de proyectos](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)" |

Las {% data variables.product.prodname_actions %} ayudan a que tu equipo trabaje más rápido a escala. Cuando los repositorios grandes comienzan a utilizar {% data variables.product.prodname_actions %}, los equipos fusionan significativamente más solicitudes de cambios por día y estas también se fusionan significativamente más rápido. Para obtener más información, consulta la sección "[Escribir y enviar código más rápidamente](https://octoverse.github.com/writing-code-faster/#scale-through-automation)" en el estado del Octoverse.

Puedes crear tus propias automatizaciones únicas o puedes utilizar y adaptar flujos de trabajo desde nuestro ecosistema de más de 10,000 acciones creadas por los líderes de la industria y por la comunidad de código abierto. {% ifversion ghec %}Para obtener más información, consulta la sección "[.{% else %}Encontrar y personalizar acciones".](/actions/learn-github-actions/finding-and-customizing-actions)Puedes restringir a tus desarrolladores para que utilicen acciones que existen en {% data variables.product.product_location %} o puedes permitirles acceder a aquellas en {% data variables.product.prodname_dotcom_the_website %}. Para obtener más información, consulta la sección "[Acerca de utilizar acciones en tu empresa](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)".{% endif %}

{% data variables.product.prodname_actions %} es amigable para los desarrolladores, ya que se integra directamente en la experiencia familiar de {% data variables.product.product_name %}.

{% ifversion ghec %}Puedes disfrutar la convivencia de los ejecutores hospedados en {% data variables.product.company_short %}, los cuales mantiene y mejora {% data variables.product.company_short %}, o puedes{% else %}Puedes{% endif %} controlar tu propia infraestructura de IC/DC utilizando ejecutores auto-hospedados. Los ejecutores auto-hospedados te permiten determinar el ambiente y recursos exactos que completan tus compilaciones, pruebas y despliegues sin exponer tu ciclo de desarrollo de software a la internet. Para obtener más información, consulta las secciones {% ifversion ghec %}"[Acerca de los ejecutores hospedados por {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners)" y{% endif %} "[Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)".

Las {% data variables.product.prodname_actions %} proprocionan un control mayor sobre los despliegues. Por ejemplo, puedes utilizar ambientes para requerir aprobaciones para que un job pueda proceder, restringir qué ramas pueden activar un flujo de trabajo o limitar el acceso a los secretos.{% ifversion ghec or ghae-issue-4856 or ghes > 3.4 %} Si tus flujos de trabajo necesitan acceder a los recursos desde un proveedor de servicios en la nube que sea compatible con OpenID Conect (OIDC), puedes configurar tus flujos de trabajo para que se autentiquen directamente con dicho proveedor. OIDC proporciona beneficios de seguridad tales como el eliminar la necesidad de almacenar credenciales como secretos de larga duración. Para obtener más información, consulta la sección "[Acerca del fortalecimiento de seguridad con OpenID Connect](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)".{% endif %}

Las {% data variables.product.prodname_actions %} también incluyen herramientas para regir el ciclo de desarrollo de software de tu empresa y satisfacer las obligaciones de cumplimiento. Para obtener más información, consulta la sección "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)".

## Acerca de comenzar con las {% data variables.product.prodname_actions %}

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %}
{% data reusables.actions.ghes-actions-not-enabled-by-default %} Después de que termines de planear, puedes seguir las instrucciones para habilitar las {% data variables.product.prodname_actions %}. Por ejemplo, podrías necesitar mejorar los recursos de CPU y memoria para {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".

{% else %}
Después de que termines de planear, puedes seguir las instrucciones para iniciar con {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección {% ifversion ghec %}"[Iniciar con {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_cloud %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud)".{% elsif ghae %}"[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)".{% endif %}
{% endif %}


## Leer más

- "[Entender las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)"{% ifversion ghec %}
- "[Acerca de la facturación para las {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)"{% endif %}
