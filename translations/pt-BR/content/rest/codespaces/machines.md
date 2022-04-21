---
title: Machines
intro: 'The Machines API allows a user to determine which machine types are available to create a codespace, either on a given repository or as an authenticated user.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

For more information, see "[About machine types](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)."

You can also use this information when changing the machine of an existing codespace by updating its `machine` property. The machine update will take place the next time the codespace is restarted. For more information, see "[Changing the machine type for your codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)."