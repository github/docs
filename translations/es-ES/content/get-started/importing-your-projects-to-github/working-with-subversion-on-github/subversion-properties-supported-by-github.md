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
shortTitle: Propiedades compatibles con GitHub
---

## Executable files (`svn:executable`)

Convertimos propiedades `svn:executable` al actualizar el modo archivo directamente antes de agregarlo al repositorio de Git.

## MIME types (`svn:mime-type`)

{% data variables.product.product_name %} internalmente rastrea las propiedades mime-type de los archivos y las confirmaciones que los agregaron.

## Ignoring unversioned items (`svn:ignore`)

Si has configurado que los archivos y los directorios se ignoren en Subversion, {% data variables.product.product_name %} los rastrearemos de manera interna. Los archivos ignorados por los clientes de Subversion son completamente distintos a las entradas en un archivo *.gitignore*.

## Propiedades admitidas actualmente

{% data variables.product.product_name %} no admite actualmente `svn:externals`, `svn:global-ignores`, o culaquier propiedad no enumerada anteriormente, incluidas las propiedades personalizadas.
