---
title: Acerca de Importador GitHub
intro: 'Si tienes código fuente en Subversion, Mercurial, Team Foundation Version Control (TFVC) u otro repositorio de Git, puedes moverlo a GitHub utilizando el Importador de GitHub.'
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 86fa3129982afcdf99da7879792881c522d4a6fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135798'
---
Importador GitHub es una herramienta que importa de forma rápida repositorios de código fuente, incluido el historial de revisiones y confirmaciones de cambios, a GitHub para tí.

![Importar un gif de repositorio](/assets/images/help/importer/github-importer.gif)

Durante una importación, dependiendo del sistema de control de la versión del que estás importando, puedes autenticar con tu repositorio remoto, actualizar la atribución del autor de la confirmación e importar repositorios con archivos grandes (o eliminar archivos grandes si no quieres usar Large File Storage de Git).

| Acción de importación | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| Autenticar con repositorio remoto | **X** | **X** | **X** | **X** |
| [Actualizar la atribución del autor de la confirmación con Importador GitHub](/articles/updating-commit-author-attribution-with-github-importer) | **X** | **X** | **X** | |
| Transferencia de archivos grandes a [Large File Storage de Git](/articles/about-git-large-file-storage) | **X** | **X** | **X** | |
| Eliminar archivos grandes de tu repositorio | **X** | **X** | **X** | |

## Lecturas adicionales

- "[Importar un repositorio con el Importador GitHub](/articles/importing-a-repository-with-github-importer)"
- "[Actualizar la atribución del autor de la confirmación con Importador GitHub](/articles/updating-commit-author-attribution-with-github-importer)"
- "[Importar un repositorio de Git usando la línea de comando](/articles/importing-a-git-repository-using-the-command-line)"
- "[Herramientas de migración de código fuente](/articles/source-code-migration-tools)"
