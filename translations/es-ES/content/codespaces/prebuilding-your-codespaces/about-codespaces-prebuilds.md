---
title: About Codespaces prebuilds
shortTitle: About prebuilds
intro: Codespaces prebuilds help to speed up the creation of new codespaces.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
---

{% data reusables.codespaces.prebuilds-beta-note %}

## Resumen

Prebuilding your codespaces allows you to be more productive and access your codespace faster, regardless of the size and complexity of your project. This is because any source code, editor extensions, project dependencies, commands, and configurations have already been downloaded, installed, and applied before you create a codespace for your project. Think of a prebuild as a "ready-to-go" template for a codespace.

By default, whenever you push changes to your repository, {% data variables.product.prodname_codespaces %} uses {% data variables.product.prodname_actions %} to automatically update your prebuilds.

When prebuilds are available for a particular branch of a repository, and for your region, you'll see the "{% octicon "zap" aria-label="The zap icon" %} Prebuild ready" label in the list of machine type options when you create a codespace. Para obtener más información, consulta la sección "[Crear un codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)".

![La caja de diálogo para elegir un tipo de máquina](/assets/images/help/codespaces/choose-custom-machine-type.png)

{% note %}

{% data reusables.codespaces.prebuilds-not-available %}

{% endnote %}

## About billing for {% data variables.product.prodname_codespaces %} prebuilds

{% data reusables.codespaces.billing-for-prebuilds %} For details of {% data variables.product.prodname_codespaces %} storage pricing, see "[About billing for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)."

Use of codespaces created using prebuilds is charged at the same rate as regular codespaces.

## About pushing changes to prebuild-enabled branches

By default, each push to a branch that has a prebuild configuration results in a {% data variables.product.prodname_dotcom %}-managed Actions workflow run to update the prebuild template. The prebuild workflow has a concurrency limit of one workflow run at a time for a given prebuild configuration, unless changes were made that affect the dev container configuration for the associated repository. Para obtener más información, consulta la sección "[Introducción a los contenedores dev](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". If a run is already in progress, the workflow run that was queued most recently queued will run next, after the current run completes.

With the prebuild template set to be updated on each push, it means that if there are very frequent pushes to your repository, prebuild template updates will occur at least as often as it takes to run the prebuild workflow. That is, if your workflow run typically takes one hour to complete, prebuilds will be created for your repository roughly hourly, if the run succeeds, or more often if there were pushes that change the dev container configuration on the branch.

For example, let's imagine 5 pushes are made, in quick succession, against a branch that has a prebuild configuration. In this situation:

* A workflow run is started for the first push, to update the prebuild template.
* If the 4 remaining pushes do not affect the dev container configuration, the workflow runs for these are queued in a "pending" state.

  If any of the remaining 4 pushes change the dev container configuration, then the service will not skip that one and will immediately run the prebuild creation workflow, updating the prebuild accordingly if it succeeds.

* Once the first run completes, workflow runs for pushes 2, 3, and 4 will be canceled, and the last queued workflow (for push 5) will run and update the prebuild template. 
