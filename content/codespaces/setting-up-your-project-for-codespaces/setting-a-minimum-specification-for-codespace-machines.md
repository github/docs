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
product: '{% data reusables.gated-features.codespaces %}'
---

## Overview

Each codespace that you create is hosted on a separate virtual machine, and you can usually choose from different types of virtual machines. Each machine type has different resources (CPUs, memory, storage) and, by default, the machine type with the least resources is used. For more information, see "[Changing the machine type for your codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)."

If your project needs a certain level of compute power, you can configure {% data variables.product.prodname_github_codespaces %} so that only machine types that meet these requirements can be used by default, or selected by users. You configure this in a `devcontainer.json` file.

{% note %}

**Important:** Access to some machine types may be restricted at the organization level. Typically this is done to prevent people choosing higher resourced machines that are billed at a higher rate. If your repository is affected by an organization-level policy for machine types you should make sure you don't set a minimum specification that would leave no available machine types for people to choose. For more information, see "[Restricting access to machine types](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)."

{% endnote %}

## Setting a minimum machine specification

1. {% data variables.product.prodname_github_codespaces %} for your repository are configured in a `devcontainer.json` file. If your repository does not already contain a `devcontainer.json` file, add one now. See "[Add a dev container configuration to your repository](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)."
1. Edit the `devcontainer.json` file, adding a `hostRequirements` property such as this:

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   You can specify any or all of the options: `cpus`, `memory`, and `storage`.
   
   To check the specifications of the {% data variables.product.prodname_github_codespaces %} machine types that are currently available for your repository, step through the process of creating a codespace until you see the choice of machine types. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)."
   
1. Save the file and commit your changes to the required branch of the repository.

   Now when you create a codespace for that branch of the repository, and you go to the creation configuration options, you will only be able to select machine types that match or exceed the resources you've specified.

   ![Dialog box showing a limited choice of machine types](/assets/images/help/codespaces/machine-types-limited-choice.png)

## Further reading

- "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
