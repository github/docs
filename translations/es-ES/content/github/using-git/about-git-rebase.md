---
title: Acerca del cambio de base de Git
redirect_from:
  - /rebase/
  - articles/interactive-rebase/
  - /articles/about-git-rebase
intro: 'El comando `git rebase` te permite cambiar fácilmente una serie de confirmaciones, modificando el historial de tu repositorio. Puedes reordenar, editar o combinar confirmaciones.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



Generalmente, usarás `git rebase` para:

* Editar mensajes de confirmación previos.
* Combinar varias confirmaciones en una.
* Eliminar o revertir confirmaciones que ya no son necesarias.

{% warning %}

**Advertencia**: Como cambiar el historial de tu confirmación puede hacer las cosas difíciles para todos los que usan el repositorio, se considera una mala práctica cambiar de base las confirmaciones cuando ya las subiste a un repositorio. Para aprender cómo cambiar de base de forma segura en {% data variables.product.product_location %}, consulta "[Acerca de las fusiones de solicitud de extracción](/articles/about-pull-request-merges)".

{% endwarning %}

### Cambiar de base las confirmaciones con una rama

Para cambiar de base todas las confirmaciones entre otra rama y el estado de rama actual, puedes ingresar el siguiente comando en tu shell (ya sea el símbolo del sistema para Windows o la terminal para Mac y Linux):

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

### Cambiar de base las confirmaciones en un momento específico

Para cambiar de base las últimas confirmaciones en tu rama actual, puedes ingresar el siguiente comando en tu shell:

```shell
$ git rebase --interactive HEAD~7
```

### Comandos disponibles mientras se cambia de base

Hay seis comandos disponibles mientras se cambia la base:

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> simplemente significa que la confirmación está incluida. Reordenar los comandos <code>pick</code> cambia el orden de las confirmaciones cuando el cambio de base está en progreso. Si eliges no incluir una confirmación, debes eliminar la línea completa. </dd>

<dt><code>reword</code></dt>
<dd>El comando <code>reword</code> es similar a <code>pick</code>, pero después de usarlo, el proceso de cambio de base se pausará y te dará una oportunidad de alterar el mensaje de confirmación. Cualquier cambio hecho por la confirmación no se ve afectado. </dd>

<dt><code>edit</code></dt>
<dd>Si eliges <code>edit</code> una confirmación, se te dará la oportunidad de modificar la confirmación, lo que significa que puedes agregar o cambiar la confirmación por completo. También puedes realizar más confirmaciones antes de continuar con el cambio de base. Esto te permite dividir una confirmación grande en otras más pequeñas o eliminar cambios erróneos hechos en una confirmación. </dd>

<dt><code>squash</code></dt>
<dd>Este comando te permite combinar dos o más confirmaciones en una única confirmación. Una confirmación se combina en la confirmación de arriba. Git te da la oportunidad de escribir un mensaje de confirmación nuevo describiendo ambos cambios.</dd>

<dt><code>fixup</code></dt>
<dd>Esto es similar a <code>squash</code>, pero se descarta el mensaje de la confirmación que se fusiona. La confirmación simplemente se fusiona en la confirmación de arriba y el mensaje de la confirmación anterior se usa para describir ambos cambios.</dd>

<dt><code>exec</code></dt>
<dd>Esto te permite ejecutar comandos shell de forma arbitraria con una confirmación.</dd>
</dl>

### Un ejemplo del uso de `git rebase`

Sin importar qué comando uses, Git iniciará [tu editor de texto predeterminado](/articles/associating-text-editors-with-git) y abrirá un archivo que detalla las confirmaciones en el rango que has elegido. Ese archivo se ve así:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Cambiar de base 41a72e6..7b36971 a 41a72e6
#
# Commandos:
#  p, pick = usar la confirmación
#  r, reword = usar la confirmación, pero editar el mensaje de confirmación
#  e, edit = usar la confirmación, pero detenerse para correcciones
#  s, squash = usar la confirmación, pero unirla con la confirmación anterior
#  f, fixup = como "squash", pero descartar el mensaje de registro de esta confirmación
#  x, exec = ejecutar comando (el resto de la línea) usando shell
#
# Si eliminas una línea aquí, ESA CONFIRMACIÓN SE PERDERÁ.
# Sin embargo, si eliminas todo, este cambio de base será interrumpido.
#
```

Desglosando esta información, de principio a fin, vemos que:

- Se enumeran siete confirmaciones, lo que indica que hubo siete cambios entre nuestro punto de partida y el estado de nuestra rama actual.
- Las confirmaciones que eliges cambiar de base se clasifican en el orden de los cambios más antiguos (arriba) a los cambios más nuevos (abajo).
- Cada línea detalla un comando (por defecto, `pick`), la confirmación SHA y el mensaje de confirmación. Todo el procedimiento `git rebase` se centra en tu manipulación de estas tres columnas. Los cambios que realizas se *rebasan* en tu repositorio.
- Después de las confirmaciones, Git te dice el rango de confirmaciones con las que estamos trabajando (`41a72e6..7b36971`).
- Finalmente, Git te ayuda diciéndote los comandos que están disponibles para ti cuando cambias de base las confirmaciones.

### Leer más

- "[Usar Git rebase](/articles/using-git-rebase)"
- [El capítulo "Ramificación de Git" del libro _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [El capítulo "Rebase interactivo" del libro _Pro Git_](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- "[Combinar confirmaciones con cambio de base](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)"
- "[Sincronizar tu rama](/desktop/contributing-to-projects/syncing-your-branch)" en la documentación de {% data variables.product.prodname_desktop %}
