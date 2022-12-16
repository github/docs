---
title: Gestion des caractères spéciaux dans les noms de branche et de balise
intro: 'Git est très permissif sur les caractères autorisés dans les noms de branche et d’étiquette. Lorsque vous utilisez Git à partir d’un interpréteur de commandes, vous devrez peut-être échapper des caractères spéciaux ou les mettre entre guillemets.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Special characters in names
ms.openlocfilehash: e03b6ba963cef465f775620d353f14f0f5d92d36
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145104585'
---
## À propos des noms de branche et de balise

La plupart des dépôts utilisent des noms de branche simples, tels que `main` ou `update-icons`. Les noms de balise suivent aussi généralement un format de base, tel qu’un numéro de version comme `v1.2.3`. Les noms de branche et les noms de balise peuvent également utiliser le séparateur de chemin (`/`) pour la structure, par exemple `area/item` ou `level-1/level-2/level-3`. En dehors de certaines exceptions &mdash; comme ne pas commencer ni terminer un nom par une barre oblique, ou avoir des barres obliques consécutives dans le nom &mdash; Git a très peu de restrictions sur les caractères qui peuvent être utilisés dans les noms de branche et de balise. Pour plus d’informations, consultez « [git-check-ref-format](https://git-scm.com/docs/git-check-ref-format) » dans la documentation Git.

## Pourquoi vous devez placer les caractères spéciaux dans une séquence d’échappement

Lorsque vous utilisez une interface CLI, vous pouvez avoir des situations où un nom de branche ou de balise contient des caractères spéciaux qui ont une signification particulière pour votre environnement shell. Pour utiliser ces caractères en toute sécurité dans une commande Git, ils doivent être placés entre guillemets ou dans une séquence d’échappement, sinon la commande peut avoir des effets inattendus.

Par exemple, le caractère `$` est utilisé par de nombreux shells pour faire référence à une variable. La plupart des shells interprètent un nom de branche valide tel que `hello-$USER` comme équivalent du mot « hello », suivi d’un trait d’union et de la valeur actuelle de la variable `USER`, plutôt que comme la chaîne littérale `hello-$USER`. Si un nom de branche inclut le caractère `$`, le shell ne doit pas le développer en tant que référence de variable. De même, si un nom de branche contient un point-virgule (`;`), la plupart des shells l’interprètent comme un séparateur de commandes ; il doit donc être placé entre guillemets ou dans une séquence d’échappement.

## Comment placer les caractères spéciaux dans une séquence d’échappement dans les noms de branche et de balise

La plupart des noms de branche et de balise avec des caractères spéciaux peuvent être gérés en incluant le nom entre guillemets simples, par exemple `'hello-$USER'`.

* Dans le shell [Bash](https://www.gnu.org/software/bash/), l’insertion d’une chaîne de caractères entre guillemets simples conserve la valeur littérale des caractères entre guillemets simples.
* [Zsh](https://www.zsh.org/) se comporte comme Bash, mais ce comportement est configurable à l’aide de l’option `RC_QUOTES`.
* [PowerShell](https://microsoft.com/powershell) traite également les caractères de manière littérale à l’intérieur de guillemets simples.

Pour ces shells, l’exception principale est lorsque le nom de la branche ou balise lui-même contient un guillemet simple. Dans ce cas, vous devez consulter la documentation officielle de votre shell :

* [Documentation Bash](https://www.gnu.org/software/bash/manual/)
* [Documentation Zsh](https://zsh.sourceforge.io/Doc/)
* [Documentation Fish](https://fishshell.com/docs/current/)
* [Documentation PowerShell](https://docs.microsoft.com/en-gb/powershell/)

## Nommage de branches et de balises

Si possible, créez des noms de branche et de balise qui ne contiennent pas de caractères spéciaux, car ils doivent alors être placés dans une séquence d’échappement. Un jeu de caractères par défaut sécurisé à utiliser pour les noms de branche et les noms de balise est :

* L’alphabet anglais (`a` à `z` et `A` à `Z`)
* Les chiffres (`0` à `9`)
* Un ensemble limité de caractères de ponctuation :
  * point (`.`)
  * trait d’union (`-`)
  * trait de soulignement (`_`)
  * barre oblique (`/`)

Pour éviter toute confusion, vous devez commencer les noms de branche par une lettre.
