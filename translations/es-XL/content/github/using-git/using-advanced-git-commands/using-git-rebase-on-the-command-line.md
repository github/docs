---
title: Utilizar la rebase de Git en la línea de comando
redirect_from:
  - /articles/using-git-rebase/
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
intro: Aquí hay un breve tutorial acerca de usar `git rebase` en la línea de comando.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
En este ejemplo, abordaremos todos los comandos disponibles de `git rebase`, excepto `exec`.

Comenzaremos nuestra rebase ingresando `git rebase --interactive HEAD~7` en el terminal. Nuestro editor de texto preferido mostrará las siguientes líneas:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

En este ejemplo, haremos lo siguiente:

* Combinar la quinta confirmación (`fa39187`) con la confirmación `"Patch A"` (`1fc6c95`), utilizando `squash` (combinar).
* Mover la última confirmación (`7b36971`) hacia arriba antes de la confirmación `"Patch B"` (`6b2481b`) y la conservarla como `pick`.
* Fusionar la confirmación `"A fix for Patch B"` (`c619268`) con la confirmación `"Patch B"` (`6b2481b`) y omitir el mensaje de confirmación utilizando `fixup`.
* Separar la tercera confirmación (`dd1475d`) en dos confirmaciones más pequeñas utilizando `edit` (editar).
* Corregir el mensaje de confirmación de la confirmación mal escrita (`4ca2acc`), utilizando `reword` (otro texto).

¡Uf! Parece mucho trabajo, pero haciendo cada paso por vez, podemos concretar esos cambios fácilmente.

Para comenzar, tendremos que modificar los comandos en el archivo para que luzca como sigue:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Hemos cambiado cada comando de la línea desde `pick` al comando que nos interesa.

Ahora, guarda y cierra el editor; esto comenzará la rebase interactiva.

Git saltea el primer comando de rebase, `pick 1fc6c95`, ya que no necesita hacer nada. Va al siguiente comando, `squash fa39187`. Como esta operación requiere tu entrada, Git vuelve a abrir tu editor de texto. El archivo que abre luce parecido a lo siguiente:

```
# Es una combinación de dos confirmaciones.
# El mensaje de la primera confirmación es:

Patch A

# Este es el mensaje de la 2.a confirmación:

something to add to patch A

# Ingresa el mensaje de confirmación para tus cambios. Las líneas que comienzan con
# con '#' se ignoran, y un mensaje vacío anula la confirmación.
# Actualmente no se encuentra en una rama.
# Cambios por confirmar:
#   (usa "git reset HEAD <file>..." para deshacer)
#
# modificado:   a
#
```

Este archivo es la manera de Git de decir, "Oye, esto es lo que estoy a punto de hacer con esta `squash` (combinación)". Detalla el primer mensaje de confirmación (`"Patch A"`) y el segundo mensaje de confirmación (`"something to add to patch A"`). Si estás satisfecho con estos mensajes de confirmación, puedes guardar el archivo y cerrar el editor. De lo contrario, tienes la opción de cambiar el mensaje de confirmación, simplemente, cambiando el texto.

Cuando el editor esté cerrado, la rebase continúa:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Git procesa los dos comandos `pick` (para `pick 7b36971` y `pick 6b2481b`). *También* procesa el comando `fixup` (`fixup c619268`), ya que este no necesita ninguna interacción. `fixup` fusiona los cambios de `c619268` en la confirmación que tiene ante sí, `6b2481b`. Ambos cambios tendrán el mismo mensaje de confirmación: `"Patch B"`.

Git llega a la operación `edit dd1475d`, se detiene e imprime el siguiente mensaje para el terminal:

```shell
Puedes modificar la confirmación ahora con

        git commit --amend

Una vez que estés satisfecho con tus cambios, ejecuta

        git rebase --continue
```

En este punto, puedes editar cualquiera de los archivos de tu proyecto para hacer más cambios. Para cada cambio que hagas, tendrás que realizar una confirmación nueva. Lo puedes hacer ingresando el comando `git commit --amend`. Cuando termines de hacer todos tus cambios, puedes ejecutar `git rebase --continue`.

Luego Git llega al comando `reword 4ca2acc`.  Este abre tu editor de texto una vez más y presenta la siguiente información:

```
i cant' typ goods

# Ingresa el mensaje de confirmación para tus cambios. Las líneas que comienzan con
# con '#' se ignoran, y un mensaje vacío anula la confirmación.
# Actualmente no se encuentra en una rama.
# Cambios por confirmar:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modificado:   a
#
```

Como antes, Git muestra el mensaje de confirmación para que lo edites. Puedes cambiar el texto (`"i cant' typ goods"`), guardar el archivo y cerrar el editor. Git terminará la rebase y te devolverá al terminal.

### Subir código de rebase a GitHub

Como has modificado el historial de Git, el `git push origin` común **no** funcionará. Tendrás que modificar el comando realizando un "empuje forzado" de tus últimos cambios:

```shell
$ git push origin master --force
```

{% warning %}

El cargar forzadamente tiene implicaciones serias ya que cambia la secuencia del historial de confirmaciones para la rama. Utilízalo con cuidado, especialmente si muchas personas acceden a tu repositorio.

{% endwarning %}

### Leer más

* "[Resolver conflictos de fusión después de una rebase de Git](/articles/resolving-merge-conflicts-after-a-git-rebase)"
