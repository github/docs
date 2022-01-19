---
title: Colaboradores
intro: 'The collaborators API allows you to add, invite, and remove collaborators from a repository.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Invitaciones

La API de Invitaciones al Repositorio permite a los usuarios o a los servicios externos invitar a otros usuarios para colaborar en un repositorio. Los usuarios invitados (o los servicios externos en nombre de estos) pueden elegir aceptar o rechazar la invitación.

Toma en cuenta que el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` otorga un acceso dirigido a las invitaciones **sin** otorgar también el acceso al código del repositorio, mientras que el alcance `repo` otorga permisos para el código así como para las invitaciones.

### Invitar a un usuario a un repositorio

Utiliza la terminal de la API para agregar un colaborador. Para obtener más información, consulta la sección "[Agregar un colaborador del repositorio](/rest/reference/collaborators#add-a-repository-collaborator)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}
