---
title: Tratar con caracteres especiales en los nombres de rama y etiqueta
intro: 'Git es muy permisivo cuando se trata de qué caracteres se permiten en los nombres de rama y etiqueta. Cuando utilizas Git desde un shell de línea de comandos, podrías necesitar escapar o citar caracteres especiales.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Special characters in names
ms.openlocfilehash: e03b6ba963cef465f775620d353f14f0f5d92d36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145115978'
---
## Acerca de los nombres de las ramas y etiquetas

La mayoría de los repositorios usan nombres de rama simples, como `main` o `update-icons`. Los nombres de etiqueta también siguen un formato básico, por ejemplo, un número de versión como `v1.2.3`. Tanto los nombres de rama como los nombres de etiqueta pueden usar el separador de ruta de acceso (`/`) para la estructura, por ejemplo, `area/item` o `level-1/level-2/level-3`. Exceptuando un par de casos &mdash; tales como el no iniciar o finalizar un nombre con una barra o colocar barras consecutivas en los nombres &mdash; Git tiene muy pocas restricciones sobre qué caracteres pueden utilizarse en los nombres de etiqueta y de rama. Para obtener más información, "[consulte git-check-ref-format](https://git-scm.com/docs/git-check-ref-format)" en la documentación de Git.

## Por qué necesitas escapar los caracteres especiales

Cuando utilizas un CLI, podrías encontrarte con situaciones en donde el nombre de rama o etiqueta contiene caracteres especiales que tienen un significado especial para tu ambiente de shell. Para utilizar estos caracteres de forma segura en un comando de Git, deben citarse o escaparse, de otra manera, los comandos podrían tener efectos sin atender.

Por ejemplo, muchos shells utilizan el carácter `$` para referirse a una variable. La mayoría de los shells interpretarán un nombre de rama válido como `hello-$USER` equivalente a la palabra "hello", seguido de un guión, seguido del valor actual de la variable `USER`, en lugar de la cadena literal `hello-$USER`. Si un nombre de rama incluye el carácter `$`, entonces el shell no debe expandirlo como una referencia de variable. De forma similar, si un nombre de rama contiene un punto y coma (`;`), la mayoría de los shells lo interpretarán como un separador de comandos, así que necesita estar entre comillas o caracteres de escape.

## Cómo escapar los caracteres especiales en nombres de rama y etiqueta

La mayoría de los nombres de etiquetas y ramas con caracteres especiales se pueden gestionar si incluyen el nombre entre comillas simples, por ejemplo `'hello-$USER'`.

* En el shell [Bash](https://www.gnu.org/software/bash/), al escribir una cadena de caracteres entre comillas simples, se conserva el valor literal de los caracteres entre las comillas.
* [Zsh](https://www.zsh.org/) se comporta de forma similar a Bash, aunque este comportamiento se puede configurar mediante la opción `RC_QUOTES`.
* [PowerShell](https://microsoft.com/powershell) también trata los caracteres de manera literal cuando están entre comillas simples.

Para estos shells, la excepción principal es cuando el nombre de etiqueta o rama mismo contiene una comilla sencilla. En este caso, debes consultar la documentación oficial de tu shell:

* [Documentación de Bash](https://www.gnu.org/software/bash/manual/)
* [Documentación de Zsh](https://zsh.sourceforge.io/Doc/)
* [Documentación de Fish](https://fishshell.com/docs/current/)
* [Documentación de PowerShell](https://docs.microsoft.com/en-gb/powershell/)

## Nombrar las ramas y etiquetas

De ser posible, crea nombres de rama y de etiqueta que no contengan caracteres especiales, ya que necesitarás escaparlos. Un conjunto predeterminado de caracteres seguros a utilizar para los nombres de rama y etiqueta es:

* Alfabeto inglés (`a` a `z` y `A` a `Z`)
* Números (`0` a `9`)
* Un conjunto limitado de caracteres de puntuación:
  * punto (`.`)
  * guion (`-`)
  * guion bajo (`_`)
  * barra diagonal (`/`)

Para evitar la confusión, deberías iniciar los nombres de rama con una letra.
