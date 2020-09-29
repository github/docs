---
title: Acciones
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /v3/actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

La API de {% data variables.product.prodname_actions %} te permite administrar las {% data variables.product.prodname_actions %} utilizando la API de REST. La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_app %} necesitan los mismos permisos que se mencionan en cada terminal. Para obtener más información, consulta la sección "[Documentación de {% data variables.product.prodname_actions %}](/actions)".

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Artefactos

La API de Artefactos te permite descargar, borrar y recuperar información acerca de los artefactos de los flujos de trabajo. {% data reusables.actions.about-artifacts %} Para obtener más información, consulta la sección "[Conservar datos de flujo de trabajo mediante artefactos](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'artifacts' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Secretos

La API de Secretos te permite crear, actualizar, borrar y recuperar información acerca de los secretos cifrados. {% data reusables.actions.about-secrets %} Para obtener más información, consulta la sección "[Crear y utilizar secretos cifrados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_app %} debe contar con el permiso de `secrets` para utilizar esta API. Los usuarios autenticados deben tener acceso de colaborador en el repositorio para crear, actualizar o leer los secretos.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'secrets' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Ejecutores autoalojados

La API de Ejecutores auto-hospedados te permite registrar, ver, y borrar estos ejecutores. {% data reusables.actions.about-self-hosted-runners %} Para obtener más información, consulta "[Alojar tus propios ejecutores](/actions/hosting-your-own-runners)".

La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_app %} debe contar con el permiso de `administration` para los repositorios o aquél de `organization_self_hosted_runners` para las organizaciones. Los usuarios autenticados deben tener acceso administrativo al repositorio o a la organización para utilizar esta API.

Puedes administrar los ejecutores auto-programados para una empresa. Para obtener más información, consulta la API de REST para la "[ Administración de {% data variables.product.prodname_dotcom %} Enterprise](/rest/reference/enterprise-admin#actions)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runners' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Grupos de ejecutores auto-hospedados

La API de Grupos de Ejecutores Auto-Hospedados te permite administrar grupos para los ejecutores auto-hospedados. Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_app %} debe contar con el permiso de `administration` para los repositorios o aquél de `organization_self_hosted_runners` para las organizaciones. Los usuarios autenticados deben tener acceso administrativo al repositorio o a la organización para utilizar esta API.

Puedes administrar los grupos de ejecutores auto-hospedados para una empresa. Para obtener más información, consulta la API de REST para la "[ Administración de {% data variables.product.prodname_dotcom %} Enterprise](/rest/reference/enterprise-admin#actions)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'self-hosted-runner-groups' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Flujos de trabajo

La API de flujos de trabajo te permite ver los flujos de trabajo de un repositorio. {% data reusables.actions.about-workflows %} Para obtener más información, consulta la sección "[Automatizar tu flujo de trabajo con GitHub Actions](/actions/automating-your-workflow-with-github-actions)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflows' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Jobs de los flujos de trabajo

La API de Jobs de Flujos de Trabajo te permite ver las bitácoras y los jobs de un flujo de trabajo. {% data reusables.actions.about-workflow-jobs %} Para obtener más información, consulta la sección "[Sintaxis de flujode trabajo para GitHub Actions](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-jobs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Ejecuciones de flujo de trabajo

La API de Ejecuciones de Flujo de Trabajo te permite ver, re-ejecutar, cancelar y ver las bitácoras de las ejecuciones de los flujos de trabajo. {% data reusables.actions.about-workflow-runs %} Para obtener más información, consulta la sección "[Administrar una ejecución de flujo de trabajo](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)".

{% data reusables.actions.actions-authentication %} {% data reusables.actions.actions-app-actions-permissions-api %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'workflow-runs' %}{% include rest_operation %}{% endif %}
{% endfor %}
