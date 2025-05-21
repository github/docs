---
title: 'Making retired namespaces available on GHE.com'
shortTitle: Retired namespaces on GHE.com
intro: 'Allow people to use namespaces that match actions you have used from {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghec: '*'
type: how_to
permissions: Enterprise owners
---

## About retirement of namespaces

If you use {% data variables.enterprise.data_residency %}, members of your enterprise can create {% data variables.product.prodname_actions %} workflows that use actions directly from {% data variables.product.prodname_dotcom_the_website %} or [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions).

{% data variables.product.prodname_actions %} searches your enterprise on {% data variables.enterprise.data_residency_site %} for each action before falling back to {% data variables.product.prodname_dotcom_the_website %}. This ensures that custom versions of actions in your enterprise are used in preference to their counterparts on {% data variables.product.prodname_dotcom_the_website %}.

To ensure workflows use their intended actions and to block the potential for abuse, once an action on {% data variables.product.prodname_dotcom_the_website %} is used for the first time, the namespace associated with that action is retired in your enterprise. This blocks users from creating an organization and repository in your enterprise that match the action's namespace on {% data variables.product.prodname_dotcom_the_website %}.

## Making a retired namespace available

After using an action from {% data variables.product.prodname_dotcom_the_website %}, if you want to create an action in your enterprise with the same name, you need to make the namespace for that organization and repository available.

{% data reusables.enterprise-accounts.access-enterprise-emu %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Under **{% octicon "gear" aria-hidden="true" %} Settings**, click **Retired namespaces**.
1. To the right of the namespace that you want use in your enterprise, click **Unretire**.
1. Go to the relevant organization and create a new repository.

### Tips for ensuring you can create a new repository

* When you unretire a namespace, always create the new repository with that name as soon as possible. If a workflow calls the associated action on {% data variables.product.prodname_dotcom_the_website %} before you create the local repository, the namespace will be retired again.
* For actions used in workflows that run frequently, you may find that a namespace is retired again before you have time to create the local repository. In this case, you can temporarily disable the relevant workflows until you have created the new repository.
