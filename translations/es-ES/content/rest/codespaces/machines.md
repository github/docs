---
title: Codespaces machines
allowTitleToDifferFromFilename: true
shortTitle: Máquinas
intro: 'The Codespaces machines API allows a user to determine which machine types are available to create a codespace, either on a given repository or as an authenticated user.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## About the Codespaces machines API

La API de máquinas de codespaces permite que un usuario determine qué tipos de máquina están disponibles para crear un codespace, ya sea en un repositorio específico o como un usuario autenticado. Para obtener más información, consulta la sección "[Acerca de los tipos de máquina](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace#about-machine-types)".

También puedes utilizar esta información cuando cambies la máquina de un codespace existente actualizando su propiedad de `machine`. La actualización de la máquina tomará lugar la siguiente vez que el codespace se reinicie. Para obtener más información, consulta la sección "[Cambiar el tipo de máquina de tu codespace](/codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace)".
