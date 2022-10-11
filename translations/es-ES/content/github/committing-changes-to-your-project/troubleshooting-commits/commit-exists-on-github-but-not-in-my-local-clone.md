---
title: La confirmación existe en GitHub pero no en mi clon local
intro: 'Algunas veces una confirmación estará visible en {% data variables.product.product_name %}, pero no existirá en tu clon local del repositorio.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Cuando usas `git show` para ver una confirmación específica en la línea de comando, puedes obtener un error fatal.

Por ejemplo, puedes recibir un error `bad object` localmente:

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

Sin embargo, cuando ves la confirmación en {% data variables.product.product_location %}, podrás verla sin problemas:

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

Existen varias explicaciones posibles:

* El repositorio local está desactualizado.
* La rama que contiene la contiene la confirmación fue eliminada, por lo que ya no se hace referencia a la confirmación.
* Alguien realizó un empuje forzado sobre la confirmación.

### El repositorio local está desactualizado

Es posible que tu repositorio local aún no esté confirmado. Para obtener información desde tu repositorio remoto hasta tu clon local, usa `git fetch`:

```shell
$ git fetch <em>remote</em>
```

Esto copia información de manera segura desde el repositorio remoto hasta tu clon local sin hacer cambios a los archivos que has revisado. Puedes usar `git fetch upstream` para obtener información desde un repositorio que has bifurcado o `git fetch origin` para obtener información desde un repositorio que solo has clonado.

{% tip %}

**Sugerencia**: Para obtener información, lee sobre [cómo administrar remotos y extraer datos](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) en el libro [Pro Git](https://git-scm.com/book).

{% endtip %}

### La rama que contenía la confirmación fue eliminada

Si un colaborador del repositorio ha eliminado la rama que contiene la confirmación o ha realizado un empuje forzado sobre la rama, es posible que la confirmación faltante haya quedado huérfana (es decir, no puede ser alcanzado desde cualquier referencia) y, por lo tanto, no se extraerá en tu clon local.

Afortunadamente, si un colaborador tiene un clon local del repositorio con la confirmación faltante, puede volver a forzarla en {% data variables.product.product_name %}.  Necesitan asegurarse de que la confirmación sea utilizada como referencia por parte de una rama local y que luego la suban como una rama nueva a {% data variables.product.product_name %}.

Digamos que la persona todavía tiene una rama local (llamémosla `B`) que contiene la confirmación.  Esto puede realizar el seguimiento de la rama que tuvo un empuje forzado o eliminado y que simplemente todavía no han actualizado.  Para preservar la confirmación, pueden subir esa rama local a una rama nueva (llamémosla `recover-B`) en {% data variables.product.product_name %}.  Para este ejemplo, supongamos que tienen un remoto denominado `ascendente` mediante el cual tienen acceso de escritura a `github.com/$account/$repository`.

La otra persona ejecuta:

```shell
$ git branch recover-B B
# Crea una nueva rama local que hace referencia a la confirmación
$ git push upstream B:recover-B
# Sube la B local a la nueva rama ascendente, creando una nueva referencia a la confirmación
```

Ahora, *tú* puedes ejecutar:

```shell
$ git fetch upstream recover-B
# Crea la confirmación en tu repositorio local.
```

### Evitar empujes forzados

Evita los empujes forzados a un repositorio a menos que sea absolutamente necesario. Esto es especialmente cierto si más de una persona puede subir al repositorio.

### Leer más

- ["Working with Remotes" (Trabajar con remotos) desde el libro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- ["Recuperación de datos" sde el libro _Pro Git_](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
