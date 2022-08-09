---
title: Iniciar con los ejecutores auto-hospedados para tu empresa
shortTitle: Ejecutores autoalojados
intro: 'Puedes configurar una máquina ejecutora para tu empresa para que tus desarrolladores puedan comenzar a automatizar flujos de trabajo con {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
---

## Acerca de los ejecutores auto-hospedados para las {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %} Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_actions %} para las empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".

Con {% data variables.product.prodname_actions %}, los desarrolladores pueden escribir y combinar tareas individuales llamadas acciones para crear flujos de trabajo personalizados. {% ifversion ghes or ghae %}Para habilitar las {% data variables.product.prodname_actions %} para {% ifversion ghae %}tu empresa{% elsif ghes %} {% data variables.product.product_location %}{% endif %}, debes hspedar por lo menos una máquina para ejecutar jobs.{% endif %} {% ifversion ghec %}Puedes hospedar tu propia máquina ejecutora para ejecutar jobs y esta{% elsif ghes or ghae %}Esta{% endif %} máquina se denomina como un ejecutor auto-hospedado. {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}Todos los ejecutores{% elsif ghes or ghae %}Los ejecutores auto-hospedados{% endif %} pueden ejecutar Linux, Windows o macOS. Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

{% ifversion ghec %}

Como alternativa, puedes utilizar las máquinas ejecutoras que hospeda {% data variables.product.company_short %}. Los ejecutores hospedados en {% data variables.product.company_short %} están fuera del alcance de esta guía. Para obtener más información, consulta la sección "[Acerca de los ejecutores hospedados en {% data variables.product.company_short %}](/actions/using-github-hosted-runners/about-github-hosted-runners)".

{% endif %}

Esta guía te muestra cómo aplicar un enfoque de administración centralizada para los ejecutores auto-hospedados para {% data variables.product.prodname_actions %} en tu empresa. En la guía, completarás las siguientes tareas.

1. Configurar una política limitada para restringir las acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} que pueden ejecutarse dentro de tu empresa
1. Desplegar un ejecutor auto-hospedado para tu empresa
1. Crear un grupo para administrar el acceso a los ejecutores disponibles para tu empresa
1. Opcionalmente, restringir aún más los repositorios que puede utilizar el ejecutor
{%- ifversion ghec or ghae or ghes > 3.2 %}
1. Opcionalmente, crear herramientas personalizadas para escalar tus ejecutores auto-hospedados automáticamente
{% endif %}

También encontrarás información adicional sobre cómo monitorear y asegurar tus ejecutores auto-hospedados,{% ifversion ghes or ghae %} cómo acceder a las acciones desde {% data variables.product.prodname_dotcom_the_website %},{% endif %} y cómo personalizar el software en tus máquinas ejecutoras.

Después de que termines la guía, {% ifversion ghec or ghae %}los miembros de tu empresa{% elsif ghes %}los usuarios de {% data variables.product.product_location %}{% endif %} podrán ejecutar jobs de flujo de trabajo desde {% data variables.product.prodname_actions %} en una máquina ejecutora auto-hospedada.

## Prerrequisitos

{% data reusables.actions.self-hosted-runners-prerequisites %}

- Tu empresa debe ser dueña de por lo menos una organización. Para obtener más información, consulta las secciones "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)" y "[Crear una organización nueva desde cero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".

## 1. Configurar políticas para las {% data variables.product.prodname_actions %}

Primero, habilita las {% data variables.product.prodname_actions %} para todas las organizaciones y configura una política para restringir las acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} que pueden ejecutarse {% ifversion ghec or ghae%}dentro de tu empresa en {% data variables.product.product_name %}{% elsif ghes %}en {% data variables.product.product_location %}{% endif %}. Opcionalmente, los propietarios de las organizaciones pueden seguir restringiendo estas políticas para cada una de ellas.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Debajo de "Políticas", selecciona **Habilitar para todas las organizaciones**.

   ![Captura de pantalla de la política "Habilitar para todas las organizaciones" para {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. Selecciona {% data reusables.actions.policy-label-for-select-actions-workflows %} y **Permitir las acciones que cree GitHub** para permitir las acciones locales{% ifversion actions-workflow-policy %} y los flujos de trabajo reutilizables{% endif %} y las acciones que cree {% data variables.product.company_short %}.

   {% ifversion actions-workflow-policy %}
   ![Captura de pantalla de "Permitir acciones seleccionadas" y "Permitir acciones creadas por {% data variables.product.company_short %}" para las {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png)
   {%- else %}
   ![Captura de pantalla de "Permitir acciones seleccionadas" y "Permitir acciones creadas por {% data variables.product.company_short %}" para las {% data variables.product.prodname_actions %}](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png)
   {%- endif %}
1. Haz clic en **Save ** (guardar).

Puedes configurar políticas adicionales para restringir las acciones disponibles para {% ifversion ghec or ghae %}los miembros de la empresa{% elsif ghes %}los usuarios de {% data variables.product.product_location %}{% endif %}. Para obtener más información, consulta la sección "[Requerir políticas para las {% data variables.product.prodname_actions %} en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)".

## 2. Despliega el ejecutor auto-hospedado para tu empresa

A continuación, agrega un ejecutor auto-hospedado a tu empresa. {% data variables.product.product_name %} te guiará durante la instalación del software necesario en la máquina ejecutora. Después de que despliegues el ejecutor, puedes verificar la conectividad entre la máquina ejecutora y {%ifversion ghec or ghae %}tu empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}.

### Agregar el ejecutor auto-hospedado

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. Administra el acceso al ejecutor auto-hospedado utilizando un grupo

Puedes crear un grupo de ejecutores para administrar el acceso al ejecutor que agregaste a tu empresa. Utilizarás el grupo para elegir qué organizaciones pueden ejecutar jobs desde {% data variables.product.prodname_actions %} en el ejecutor.

{% data variables.product.product_name %} agrega a todos los ejecutores nuevos a un grupo. Los ejecutores pueden estar en solo un grupo a la vez. Predeterminadamente, {% data variables.product.product_name %} agrega ejecutores nuevos al grupo "Predeterminado".

{% data reusables.actions.self-hosted-runner-groups-add-to-enterprise-first-steps %}
1. Para elegir una política para el acceso de la organización, debajo de "Acceso de la organización", selecciona el menú desplegable **Acceso de la organización** y haz clic en **Organizaciones selectas**.
1. A la derecha del menú desplegable con la política de acceso de la organización, haz clic en {% octicon "gear" aria-label="The Gear icon" %}.
1. Selecciona las organizaciones a las cuales te gustaría otorgar acceso al grupo de ejecutores.
{%- ifversion ghec or ghes %}
1. Opcionalmente, para permitir que los repositorios públicos en las organizaciones seleccionadas utilicen los ejecutores en el grupo, selecciona **Permitir repositorios públicos**.

   {% warning %}

   **Advertencia**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
{%- endif %}
{% data reusables.actions.self-hosted-runner-create-group %}
{%- ifversion ghec or ghes > 3.3 or ghae-issue-5091 %}
1. Haz clic en la pestaña de "Ejecutores".
1. En la lista de ejecutores, haz clic en aquél que hayas desplegado en la sección previa.
1. Da clic en **Editar**.
1. Haz clic en **Grupos de ejecutores {% octicon "gear" aria-label="The Gear icon" %}**.
1. En la lista de grupos de ejecutores, haz clic en el nombre del grupo que hayas creado previamente.
1. Haz clic en **Guardar** para mover el ejecutor al grupo.
{%- elsif ghes < 3.4 or ghae %}
1. A la derecha de "Predeterminado", haz clic en el número de ejecutores del grupo para que se muestren.
1. Selecciona el ejecutor que desplegaste.
1. A la derecha de "Grupos de ejecutores"; selecciona el menú desplegable **Mover a grupo** y haz clic en aquél que hayas creado previamente.
{%- endif %}

Ya desplegaste un ejecutor auto-hospedado que puede ejecutar jobs de {% data variables.product.prodname_actions %} dentro de las organizaciones que especificaste.

## 4. Restringir aún más el acceso al ejecutor auto-hospedado

Opcionalmente, los propietarios de las organizaciones pueden restringir aún más la política de acceso del grupo de ejecutores que creaste. Por ejemplo, los propietarios de las organizaciones podrían permitir que solo ciertos repositorios de la organización utilicen el grupo de ejecutores.

Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)".

{% ifversion ghec or ghae or ghes > 3.2 %}

## 5. Escalar automáticamente tus ejecutores auto-hospedados

Opcionalmente, puedes crear herramientas personalizadas para escalar automáticamente a los ejecutores auto-hospedados para {% ifversion ghec or ghae %}tu empresa{% elsif ghes %}{% data variables.product.product_location %}{% endif %}. Por ejemplo, tus herramientas pueden responder a eventos de webhook de {% data variables.product.product_location %} para escalar automáticamente un clúster de máquinas ejecutoras. Para obtener más información, consulta la sección "[Autoescalar con ejecutores auto-hospedados](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)".

{% endif %}

## Pasos siguientes

- Puedes monitorear los ejecutores auto-hospedados y solucionar problemas comunes. Para obtener más información, consulta la sección "[Monitorear y solucionar problemas de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)".

- {% data variables.product.company_short %} te recomienda revisar las consideraciones de seguridad para las máquinas ejecutoras auto-hospedadas. Para obtener más información, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)".

- {% ifversion ghec %}Si utilizas {% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}, puedes{% elsif ghes or ghae %}Puedes{% endif %} sincronizar manualmente los repositorios de {% data variables.product.prodname_dotcom_the_website %} que contengan acciones hacia tu empresa en {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} o {% data variables.product.prodname_ghe_managed %}{% endif %}. Como alternativa, puedes permitir que los miembros de tu empresa accedan automáticamente a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}. Para obtener más información, consulta lo siguiente.

   {%- ifversion ghes or ghae %}
   - "[Sincronizar manualmente las acciones de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)"
   - "[Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"
   {%- elsif ghec %}
   - "Sincronizar acciones manualmente desde {% data variables.product.prodname_dotcom_the_website %}" en la documentación de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) o de [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - "Habilitar el acceso automático a las acciones de {% data variables.product.prodname_dotcom_the_website %} utilizando {% data variables.product.prodname_github_connect %}" en la documentación de [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) o de [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)
   {%- endif %}

- Puedes personalizar el software disponible en tus máquinas ejecutoras auto-hospedadas o configurar tus ejecutores para que ejecuten software similar a aquellos hospedados en {% data variables.product.company_short %}{% ifversion ghes or ghae %} disponible para los clientes que utilizan {% data variables.product.prodname_dotcom_the_website %}{% endif %}. El software que impulsa las máquinas ejecutoras para {% data variables.product.prodname_actions %} es de código abierto. Para obtener más información, consulta los repositorios [`actions/runner`](https://github.com/actions/runner) y [`actions/virtual-environments`](https://github.com/actions/virtual-environments).

## Leer más

- "[Configurar la aplicación del ejecutor auto-hospedado como un servicio](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)"
- "[Utilizar ejecutores auto-hospedados en un flujo de trabajo](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)"
