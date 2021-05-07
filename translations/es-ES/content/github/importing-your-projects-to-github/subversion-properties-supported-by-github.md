---
title: Propiedades de Subversion admitidas por GitHub
intro: 'Existen varios flujos de trabajo y propiedades de Subversion que son similares a la funcionalidad existente en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Archivos ejecutables (svn:executable)

Convertimos propiedades `svn:executable` al actualizar el modo archivo directamente antes de agregarlo al repositorio de Git.

### Tipos MIME (svn:mime-type)

{% data variables.product.product_name %} internalmente rastrea las propiedades mime-type de los archivos y las confirmaciones que los agregaron.

### Ignorar elementos sin versión (svn:ignore)

Si has configurado que los archivos y los directorios se ignoren en Subversion, {% data variables.product.product_name %} los rastrearemos de manera interna. Los archivos ignorados por los clientes de Subversion son completamente distintos a las entradas en un archivo *.gitignore*.

### Propiedades admitidas actualmente

{% data variables.product.product_name %} no admite actualmente `svn:externals`, `svn:global-ignores`, o culaquier propiedad no enumerada anteriormente, incluidas las propiedades personalizadas.
