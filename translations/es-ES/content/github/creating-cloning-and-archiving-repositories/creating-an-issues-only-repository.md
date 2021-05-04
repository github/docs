---
title: Crear un repositorio solo para propuestas
intro: '{% data variables.product.product_name %} no otorga permisos de acceso solo para propuestas, pero puedes cumplir con este requisito usando un segundo repositorio que contenga solo las propuestas.'
redirect_from:
  - /articles/issues-only-access-permissions/
  - /articles/is-there-issues-only-access-to-organization-repositories/
  - /articles/creating-an-issues-only-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

1. Crea un repositorio **privado** para alojar el código fuente de tu proyecto.
2. Crea un segundo repositorio con los permisos que deseas alojar para el usuario a cargo del seguimiento de la propuesta.
3. Agrega un archivo README al repositorio de propuestas que explique el propósito de este repositorio y establezca un enlace con la sección de las propuestas.
4. Indica a tus colaboradores o equipos que den acceso a los repositorios que desees.

Los usuarios con acceso de escritura a ambos pueden referenciar y cerrar las propuestas a través de los repositorios, pero los usuarios que no tengan los permisos requeridos verán referencias que contienen información mínima.

Por ejemplo, si subiste una confirmación a la rama predeterminada del repositorio privado con un mensaje que dice `Fixes organization/public-repo#12`, la propuesta se cerrará, pero solo los usuarios con los permisos adecuados verán la referencia entre los repositorios que indica la confirmación que determinó que se cerrara la propuesta. Sin los permisos sigue apareciendo una referencia, pero se omiten los detalles.
