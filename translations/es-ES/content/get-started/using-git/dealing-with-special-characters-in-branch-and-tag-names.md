---
title: Tratar con caracteres especiales en los nombres de rama y etiqueta
intro: 'Git es muy permisivo cuando se trata de qué caracteres se permiten en los nombres de rama y etiqueta. Cuando utilizas Git desde un shell de línea de comandos, podrías necesitar escapar o citar caracteres especiales.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Caracteres especiales en los nombres
---

## Acerca de los nombres de las ramas y etiquetas

La mayoría de los repositorios utilizan nombres de rama simples, tales como `main` o `update-icons`. Los nombres de etiqueta también siguen un formato básico, tal como un número de versión como `v1.2.3`. Tanto los nombres de rama como los de etiqueta podrían utilizar el separador de ruta (`/`) para dar estructura, por ejemplo `area/item` o `level-1/level-2/level-3`. Exceptuando un par de casos &mdash; tales como el no iniciar o finalizar un nombre con una diagonal o tener diagonales consecutivas en los nombres &mdash; Git tiene muy pocas restricciones sobre qué caracteres pueden utilizarse en los nombres de etiqueta y de rama. Para obtener más información, consulta "[git-check-ref-format](https://git-scm.com/docs/git-check-ref-format) en la documentación de Git.

## Por qué necesitas escapar los caracteres especiales

Cuando utilizas un CLI, podrías encontrarte con situaciones en donde el nombre de rama o etiqueta contiene caracteres especiales que tienen un significado especial para tu ambiente de shell. Para utilizar estos caracteres de forma segura en un comando de Git, deben citarse o escaparse, de otra manera, los comandos podrían tener efectos sin atender.

Por ejemplo, muchos shells utilizan el caracter `$` para referirse a una variable. La mayoría de los shells interpretarían un nombre de rama válido como `hello-$USER` como un equivalente de la palabra "hellO", seguida de un guion, seguida del valor actual de la variable `USER`, en vez de la secuencia literal `hello-$USER`. Si un nombre de rama incluye el caracter `$`, entonces el shell no debe expandirlo como una referencia de variable. De forma similar, si un nombre de rama contiene un punto y coma (`;`), la mayoría de los shells lo interpretarán como un separador de comandos, así que necesita citarse o escaparse.

## Cómo escapar los caracteres especiales en nombres de rama y etiqueta

La mayoría de los nombres de etiquetas y ramas con caracteres especiales se pueden manejar si incluyen el nombre entre comillas sencillas, por ejemplo `'hello-$USER'`.

* En el shell de [Bas](https://www.gnu.org/software/bash/), el encerrar una secuencia de caracteres entre comillas simples preserva el valor literal de estos dentro de dichas comillas sencillas.
* [Zsh](https://www.zsh.org/) se comporta de forma similar a Bash, sin embargo, este comportamiento se puede configurar utilizando la opción `RC_QUOTES`.
* [PowerShell](https://microsoft.com/powershell) también trata a los caracteres literalmente cuando están entre comillas sencillas.

Para estos shells, la excepción principal es cuando el nombre de etiqueta o rama mismo contiene una comilla sencilla. En este caso, debes consultar la documentación oficial de tu shell:

* [Documentación de Bash](https://www.gnu.org/software/bash/manual/)
* [Documentación de Zsh](https://zsh.sourceforge.io/Doc/)
* [Documentación de Fish](https://fishshell.com/docs/current/)
* [Documentación de PowerShell](https://docs.microsoft.com/en-gb/powershell/)

## Nombrar las ramas y etiquetas

De ser posible, crea nombres de rama y de etiqueta que no contengan caracteres especiales, ya que necesitarás escaparlos. Un conjunto predeterminado de caracteres seguros a utilizar para los nombres de rama y etiqueta es:

* El alfabeto inglés (de la `a` a la `z` y de la `A` a la `Z`)
* Números (`0` to `9`)
* Un conjunto limitado de caracteres de puntuación:
  * punto (`.`)
  * guion (`-`)
  * guion bajo (`_`)
  * diagonal (`/`)

Para evitar la confusión, deberías iniciar los nombres de rama con una letra.
