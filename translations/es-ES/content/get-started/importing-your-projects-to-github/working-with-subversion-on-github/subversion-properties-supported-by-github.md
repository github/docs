---
title: Propiedades de Subversion admitidas por GitHub
intro: 'Existen varios flujos de trabajo y propiedades de Subversion que son similares a la funcionalidad existente en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
ms.openlocfilehash: 48c041509100455f6ffcf02d262fd12eafbbffbc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135744'
---
## Archivos ejecutables (`svn:executable`)

Convertimos las propiedades `svn:executable` mediante la actualización del modo de archivo directamente antes de agregarlo al repositorio de Git.

## Tipos MIME (`svn:mime-type`)

{% data variables.product.product_name %} internalmente rastrea las propiedades mime-type de los archivos y las confirmaciones que los agregaron.

## Omisión de elementos sin versión (`svn:ignore`)

Si has configurado que los archivos y los directorios se ignoren en Subversion, {% data variables.product.product_name %} los rastrearemos de manera interna. Los archivos ignorados por los clientes de Subversion son completamente distintos a las entradas de un archivo *.gitignore*.

## Propiedades admitidas actualmente

Actualmente {% data variables.product.product_name %} no admite `svn:externals`, `svn:global-ignores` ni ninguna propiedad que no aparezca anteriormente, incluidas las propiedades personalizadas.
