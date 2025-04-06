---
title: Setting a minimum specification for codespace machines
shortTitle: Set a minimum machine spec
intro: 'You can avoid under-resourced machine types being used for {% data variables.product.prodname_github_codespaces %} for your repository.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
redirect_from:
  - /codespaces/setting-up-your-project-for-codespaces/setting-a-minimum-specification-for-codespace-machines
---

## Overview

Each codespace that you create is hosted on a separate virtual machine. When you create a codespace from a repository, you can usually choose from different types of virtual machines. Each machine type has different resources (processor cores, memory, storage) and, by default, the machine type with the least resources is used. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."

If your project needs a certain level of compute power, you can configure {% data variables.product.prodname_github_codespaces %} so that only machine types that meet these requirements can be used by default, or selected by users. You configure this in a `devcontainer.json` file.

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %}

{% note %}

**Important:** Access to some machine types may be restricted at the organization level. Typically this is done to prevent people choosing higher resourced machines that are billed at a higher rate. If your repository is affected by an organization-level policy for machine types you should make sure you don't set a minimum specification that would leave no available machine types for people to choose. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

{% endnote %}

## Setting a minimum machine specification

{% data reusables.codespaces.edit-devcontainer-json %}
1. Edit the `devcontainer.json` file, adding the `hostRequirements` property at the top level of the file, within the enclosing JSON object. For example:

   ```json copy
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb"
   }
   ```

   You can specify any or all of the options: `cpus`, `memory`, and `storage`.

   To check the specifications of the {% data variables.product.prodname_github_codespaces %} machine types that are currently available for your repository, step through the process of creating a codespace until you see the choice of machine types. For more information, see "[AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)."

1. Save the file and commit your changes to the required branch of the repository.

   Now when you create a codespace for that branch of the repository, and you go to the creation configuration options, you will only be able to select machine types that match or exceed the resources you've specified.

   ![Screenshot of a list of machine types. The 2- and 4-core options are labeled "Below dev container requirements."](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Further reading

* "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)"
