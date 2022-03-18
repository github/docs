---
title: Compartir acciones y flujos de trabajo con tu empresa
intro: You can share an action or workflow with your enterprise without publishing the action or workflow publicly.
versions:
  feature: internal-actions
type: tutorial
topics:
  - Actions
  - Action development
shortTitle: Share with your enterprise
---

## About {% data variables.product.prodname_actions %} access to internal repositories

Si tu organización le pertenece a una cuenta empresarial, puedes compartir las acciones y flujos de trabajo dentro de tu empresa, sin publicar la acción o flujo de trabajo al público en general, si permites que los flujos de trabajo de {% data variables.product.prodname_actions %} accedan a un repositorio interno que contenga dicha acción o flujo de trabajo.

Any actions or workflows stored in the internal repository can be used in workflows defined in other private and internal repositories owned by the same organization, or by any organization owned by the enterprise. Actions and workflows stored in internal repositories cannot be used in public repositories.

{% warning %}

**Advertencia**: {% data reusables.actions.outside-collaborators-internal-actions %}

{% endwarning %}

## Compartir acciones y flujos de trabajo con tu empresa

1. Store the action or workflow in an internal repository. Para obtener más información, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories)".
1. Configure the repository to allow access to workflows in other private and internal repositories. Para obtener más información, consulta la sección "[Administrar la configuración de {% data variables.product.prodname_actions %} en un repositorio](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)".

## Leer más

- "[Acerca de las cuentas de empresa](/admin/overview/about-enterprise-accounts)"
- "[Reusing workflows](/actions/using-workflows/reusing-workflows)"
