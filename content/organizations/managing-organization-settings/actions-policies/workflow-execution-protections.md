---
title: Workflow execution protections
shortTitle: Workflow execution protections
intro: 'Workflow execution protections let you control who can trigger {% data variables.product.prodname_actions %} workflows and which events are permitted to run them across your organization.'
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

{% data reusables.actions.workflow-execution-protections-preview-note %}

{% data reusables.actions.workflow-execution-protections-body %}

## Configuring workflow execution protections

You configure workflow execution protections in the new **Policies** section of your {% data variables.product.prodname_actions %} settings. This **Policies** section is separate from your existing **General** settings.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the left sidebar, under **Actions**, click **Policies**.
1. Create a ruleset, then add your event and actor rules.
1. Choose whether the ruleset is active or in evaluate mode, then save your changes.
