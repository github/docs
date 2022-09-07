{%- ifversion restrict-groups-to-workflows %}
1. Asigna una política para el acceso del flujo de trabajo.

   Puedes configurar un grupo de ejecutores para que una lista de flujos de trabajo específica o todos ellos puedan acceder a este. Este ajuste no se puede anular si estás configurando un grupo de ejecutores de una organización que haya compartido una empresa. Si especificas qué flujo de trabajo puede acceder al grupo de ejecutores, debes utilizar la ruta completa al flujo de trabajo, incluyendo el nombre y propietario del repositorio y debes fijar el flujo de trabajo a una rama, etiqueta o SHA completo. Por ejemplo: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Solo los jobs que se definen directamente dentro de los flujos de trabajo seleccionados tendrán acceso al grupo de ejecutores.{%- endif %}
