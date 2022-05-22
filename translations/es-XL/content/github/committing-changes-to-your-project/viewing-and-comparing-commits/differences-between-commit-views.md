---
title: Diferencias entre las vistas de las confirmaciones
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
En {% data variables.product.product_name %}, puedes ver el historial de confirmaciones de un repositorio al:

- Navegar directamente hasta [la página de confirmaciones](https://github.com/mozilla/rust/commits/master) de un repositorio
- Hacer clic en un archivo y luego hacer clic en **History** (Historial), para ir al [historial de confirmaciones para un archivo específico](https://github.com/mozilla/rust/commits/master/README.md)

Es posible que estas dos vistas de confirmación muestren información _diferente_ ocasionalmente. El historial de un archivo único puede omitir confirmaciones que se encuentran en el historial de confirmaciones del repositorio.

Git tiene diferentes maneras de mostrar el historial de un repositorio. Cuando Git muestra el historial de un archivo único, lo "simplifica" omitiendo las confirmaciones que no generaron cambios en el archivo. En lugar de analizar todas las confirmaciones para decidir si afectaron el archivo o no, Git omitirá la rama completa en caso de que esta, cuando se fusionó, no haya tenido impacto en el contenido final del archivo. No se muestra ninguna confirmación en la rama que haya afectado el archivo.

Para el historial de confirmaciones de un archivo, {% data variables.product.product_name %} sigue explícitamente esta estrategia simple. Simplifica el historial al eliminar las confirmaciones que en realidad no contribuyen al resultado final. Por ejemplo, si una rama lateral ha realizado un cambio y luego lo ha revertido, esa confirmación no se mostrará en el historial de la rama. Esto permite que la revisión de las ramas sea más eficiente, dado que solo ves las confirmaciones que afectan al archivo.

Ws posible que esta vista truncada no contenga la información que estás buscando. Si deseas ver el historial completo, {% data variables.product.product_name %} proporciona una vista con más información acerca de la página de confirmaciones de un repositorio.

Para obtener más información acerca de cómo Git considera el historial de confirmaciones, consulta la sección [ "Simplificación del historial"](https://git-scm.com/docs/git-log#_history_simplification) del artículo de ayuda de `git log`.

### Leer más

- "[Firmar confirmaciones](/articles/signing-commits)"
- "[Buscar confirmaciones](/articles/searching-commits)"
