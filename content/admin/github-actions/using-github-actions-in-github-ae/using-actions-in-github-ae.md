---
title: Using actions in GitHub AE
intro: '{% data variables.product.prodname_ghe_managed %} includes most of the {% data variables.product.prodname_dotcom %}-authored actions.'
versions:
  github-ae: '*'
redirect_from:
  - /admin/github-actions/using-actions-in-github-ae
---
{% data reusables.actions.ae-beta %}

{% data variables.product.prodname_actions %} workflows can use _actions_, which are individual tasks that you can combine to create jobs and customize your workflow. You can create your own actions, or use and customize actions shared by the {% data variables.product.prodname_dotcom %} community.

## Official actions bundled with {% data variables.product.prodname_ghe_managed %}

Most official {% data variables.product.prodname_dotcom %}-authored actions are automatically bundled with {% data variables.product.prodname_ghe_managed %}, and are captured at a point in time from {% data variables.product.prodname_marketplace %}. When your {% data variables.product.prodname_ghe_managed %} instance is updated, the bundled official actions are also updated.

The bundled official actions include `actions/checkout`, `actions/upload-artifact`, `actions/download-artifact`, `actions/labeler`, and various `actions/setup-` actions, among others. To see which of the official actions are included, browse to the following organizations on your instance: 
- <code>https://<em>HOSTNAME</em>/actions</code>
- <code>https://<em>HOSTNAME</em>/github</code>

Each action's files are kept in a repository in the `actions` and `github` organizations. Each action repository includes the necessary tags, branches, and commit SHAs that your workflows can use to reference the action.
