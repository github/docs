---
title: Compartir acciones y flujos de trabajo con tu empresa
intro: Puedes compartir una acción o flujo de trabajo con tu empresa sin publicar la acción o el flujo de trabajo públicamente.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Comparte con tu empresa
---

## Acerca del acceso de las {% data variables.product.prodname_actions %} a los repositorios internos

Si tu organización le pertenece a una cuenta empresarial, puedes compartir las acciones y flujos de trabajo dentro de tu empresa, sin publicar la acción o flujo de trabajo al público en general, si permites que los flujos de trabajo de {% data variables.product.prodname_actions %} accedan a un repositorio interno que contenga dicha acción o flujo de trabajo.

Cualquier acción o flujo de trabajo almacenado en el repositorio interno puede utilizarse en los flujos de trabajo que se definen en los repositorios privados o internos que pertenecen a la misma organización o que pertenecen a cualquier organización que pertenezca a la empresa. Las acciones y flujos de trabajo almacenados en los repositorios internos no pueden utilizarse en los públicos.

{% warning %}

**Advertencia**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Compartir acciones y flujos de trabajo con tu empresa

1. Almacena la acción o flujo de trabajo en un repositorio interno. Para obtener más información, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".
1. Configura el repositorio para permitir el acceso a los flujos de trabajo en otros repositorios privados o internos. Para obtener más información, consulta la sección "[Administrar la configuración de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Leer más

- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
- "[Reutilizar los flujos de trabajo](/actions/using-workflows/reusing-workflows)"
