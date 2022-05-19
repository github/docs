---
title: LDAP
intro: 'Puedes utilizar la API de LDAP para actualizar las relaciones de cuenta entre un usuario de {% data variables.product.product_name %} o un equipo y su entrada enlazada de LDAP o poner en cola una sincronización nueva.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Con las terminales de mapeo de LDAP, puedes actualizar el Nombre Distintivo (DN, por sus siglas en inglés) al cual mapea un usuario o equipo. Toma en cuenta que las terminales de LDAP generalmente solo son efectivas si tu aplicativo de {% data variables.product.product_name %} [habilitó la sincronización con LDAP](/enterprise/admin/authentication/using-ldap). La terminal de [mapeo de LDAP para actualización para un usuario](#update-ldap-mapping-for-a-user) puede utilizarse cuando se habilita LDAP, aún si la sincronización con LDAP está inhabilitada.
