---
title: Résolution des problèmes liés à la connectivité
intro: 'Si vous rencontrez des problèmes pour vous connecter à {% data variables.product.prodname_dotcom %}, vous pouvez les résoudre en utilisant l’outil {% data variables.product.prodname_debug %} pour diagnostiquer les problèmes.'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/using-github/troubleshooting-connectivity-problems
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Connectivity problems
ms.openlocfilehash: 77e88f4721c5dfa9cdde22ddee23a9188785e994
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066813'
---
Le plus souvent, les problèmes de connexion se produisent parce qu’un pare-feu, un serveur proxy, un réseau d’entreprise ou un autre réseau est configuré de manière à bloquer {% data variables.product.prodname_dotcom %}.

## Autorisation des adresses IP de {% data variables.product.prodname_dotcom %}

Vérifiez que votre réseau est configuré pour autoriser les adresses IP de {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [À propos des adresses IP de {% data variables.product.prodname_dotcom %}](/articles/about-github-s-ip-addresses) ».

## Utilisation du réseau d’une entreprise ou d’une organisation

Si vous rencontrez des problèmes de connectivité sur le réseau de votre entreprise ou organisation, contactez votre administrateur réseau pour savoir si le réseau a des règles en place pour bloquer certains trafics. S’il existe des règles en place, demandez à votre administrateur réseau d’autoriser le trafic vers {% data variables.product.prodname_dotcom %}.

## Résolution des problèmes de captcha

Si vous ne parvenez pas à vérifier le captcha :
- Vérifiez que JavaScript est activé sur votre navigateur.
- Assurez-vous que votre navigateur est pris en charge. Si votre navigateur n’est pas pris en charge, mettez à niveau votre navigateur ou installez un navigateur pris en charge. Pour obtenir la liste des navigateurs pris en charge, consultez « [Navigateurs pris en charge](/articles/supported-browsers) ».
- Vérifiez que votre configuration réseau ne bloque pas https://octocaptcha.com/ ou https://arkoselabs.com/. Si vous êtes derrière un pare-feu d’entreprise, contactez votre administrateur informatique pour autoriser ces domaines. Pour vérifier l’accès à ces domaines, visitez https://octocaptcha.com/test et vérifiez que le texte « Connexion établie avec succès ! » s’affiche, puis visitez https://client-demo.arkoselabs.com/github et assurez-vous que vous êtes en mesure de charger le captcha.
- Vérifiez que votre navigateur n’a pas de plug-ins ou d’extensions susceptibles d’interférer avec GitHub. Si c’est le cas, désactivez temporairement les plug-ins ou extensions pendant la vérification du captcha.

## Changement de méthodes de clonage

Le passage du clonage via SSH au clonage via HTTPS, ou vice versa, peut améliorer la connectivité. Pour plus d’informations, consultez « [Résolution des erreurs de clonage](/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors) ».

Si vous rencontrez des délais d’expiration avec SSH, consultez « [Erreur : Numéro de fichier incorrect](/articles/error-bad-file-number) ».

## Résolution des problèmes liés aux téléchargements lents et aux connexions lentes intermittentes

{% data variables.product.prodname_dotcom %} ne limite pas la bande passante par utilisateur.

Si vous rencontrez des connexions lentes à certains moments de la journée, mais pas d’autres, les vitesses lentes sont probablement dues à la congestion du réseau. Étant donné que {% data variables.product.prodname_dotcom %} ne peut pas résoudre la congestion du réseau, vous devez faire remonter le problème à votre fournisseur de services Internet.

## Résolution des problèmes avec {% data variables.product.prodname_debug %}

Si vous avez suivi toutes les suggestions de résolution des problèmes ci-dessus et que vous rencontrez toujours des problèmes de connexion, vous pouvez suivre les instructions sur le site {% data variables.product.prodname_debug %} pour exécuter des tests et envoyer un rapport au support {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez [{% data variables.product.prodname_debug %}](https://github-debug.com/).
