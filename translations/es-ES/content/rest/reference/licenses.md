---
title: Licencias
redirect_from:
  - /v3/licenses
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

La API de licencias devuelve metadatos acerca de las liciencias de código abierto populares y acerca de la información sobre un archivo de licencia específico de un proyecto.

La API de licencias utiliza [el Licenciatario de código abierto de la Gema de Ruby ](https://github.com/benbalter/licensee) para intentar identificar la licencia del proyecto. Este licenciatario empata el contenido del archivo de `LICENSE` de un proyecto (si es que existe) contra una lista corta de licencias conocidas. Como resultado, la API no toma en cuenta las licencias de las dependencias del proyecto u otros medios de documentar la licencia de un proyecto tales como las referencias al nombre de la licencia en la documentación.

Si una licencia empata, la llave de licencia y el nombre devuelto se apegan a la [especificación SPDX](https://spdx.org/).

**Nota:** Estas terminales también devolverán la información de licencia de un repositorio:

- [Obtener un repositorio](/rest/reference/repos#get-a-repository)
- [Listar los repositorios para un usuario](/rest/reference/repos#list-repositories-for-a-user)
- [Listar los repositorios de una organización](/rest/reference/repos#list-organization-repositories)
- [Listar las bifurcaciones](/rest/reference/repos#list-forks)
- [Listar los repositorios que el usuario está observando](/rest/reference/activity#list-repositories-watched-by-a-user)
- [Listar los repositorios de equipo](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub puede ser muchas cosas, pero no es un buró legal. Como tal, GitHub no proporcional consejo legal. Al utilizar la API de licencias o al enviarnos un mensaje de correo electrónico acerca de ellas no estás incurriendo en ningún consejo legal ni creando una relación abogado-cliente. Si tienes cualquier pregunta acerca de lo que puedes o no hacer con una licencia específica, debes acudir a tu propio consejero legal antes de continuar. De hecho, siempre debes consultar con tu propio abogado antes de que decidas tomar cualquier decisión que pudiera tener implicaciones legales o que pudiera impactar tus derechos.

GitHub creó la API de Licencias para ayudar a los usuarios a obtener información acerca de las licencias de código abierto y de los proyectos que las utilizan. Esperamos que te sea útil, pero ten presente que no somos abogados (por lo menos, la mayoría de nosotros no lo son) y que cometemos errores como todo el mundo. Es por esto que GitHub te proporciona una API "tal y como está" y no garantiza nada con respecto a la información o a las licencias que se proporcionan en o a través de ella, y se desllinda de cualquier responsabilidad derivada de los daños que pudiesen resultar de su uso.

{% endwarning %}

{% include rest_operations_at_current_path %}
