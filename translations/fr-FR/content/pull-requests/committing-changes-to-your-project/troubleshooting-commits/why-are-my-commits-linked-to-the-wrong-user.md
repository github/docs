---
title: "Pourquoi mes validations sont-elles liées au mauvais utilisateur\_?"
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} utilise l’adresse e-mail dans l’en-tête de validation pour lier la validation à un utilisateur GitHub. Si vos validations sont liées à un autre utilisateur ou qu’elles ne sont pas liées à un utilisateur du tout, vous devrez peut-être modifier vos paramètres de configuration Git locaux{% ifversion not ghae %}, ajouter une adresse e-mail à vos paramètres d’e-mail de compte ou effectuer les deux{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
ms.openlocfilehash: 80a871c85aca151f06ca04d1d48d016bd14ed47f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883034'
---
{% tip %}

**Remarque** : si vos validations sont liées à un autre utilisateur, cela ne signifie pas que l’utilisateur peut accéder à votre référentiel. Un utilisateur ne peut accéder à un référentiel que vous possédez que si vous les ajoutez en tant que collaborateur ou à une équipe qui a accès au référentiel.

{% endtip %}

## Les validations sont liées à un autre utilisateur

Si vos validations sont liées à un autre utilisateur, cela signifie que l’adresse e-mail dans les paramètres de votre configuration Git locale est connectée au compte de cet utilisateur sur {% data variables.product.product_name %}. Dans ce cas, vous pouvez modifier l’e-mail dans les paramètres de votre configuration Git locale{% ifversion ghae %} à l’adresse associée à votre compte sur {% data variables.product.product_name %} pour lier vos validations futures. Les anciennes validations ne sont pas liées. Pour plus d’informations, consultez « [Définition de votre adresse e-mail de validation](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git) ».{% else %} et ajoutez la nouvelle adresse e-mail à votre compte sur le compte {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} pour lier les validations futures à votre compte.

1. Pour modifier l’adresse e-mail dans votre configuration Git locale, suivez les étapes décrites dans « [Définition de votre adresse e-mail de validation](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git) ». Si vous travaillez sur plusieurs machines, vous devez modifier ce paramètre sur chacune d’elles.
2. Ajoutez l’adresse e-mail de l’étape 2 à vos paramètres de compte en suivant les étapes décrites dans « [Ajout d’une adresse e-mail à votre compte GitHub](/articles/adding-an-email-address-to-your-github-account) ».{% endif %}

Les validations que vous effectuez à partir de ce point seront liées à votre compte.

## Les validations ne sont liées à aucun utilisateur

Si vos validations ne sont liées à aucun utilisateur, le nom de l’auteur de la validation ne sera pas affiché en tant que lien vers un profil utilisateur.

Pour vérifier l’adresse e-mail utilisée pour ces validations et connecter des validations à votre compte, procédez comme suit :

1. Accédez à l’évaluation en cliquant sur le lien du message d’évaluation.
![Lien du message d’évaluation](/assets/images/help/commits/commit-msg-link.png)
2. Pour lire un message indiquant la raison pour laquelle la validation n’est pas liée, pointez la souris sur le {% octicon "question" aria-label="Question mark" %} bleu, à droite du nom d’utilisateur.
![Message de pointage de la validation](/assets/images/help/commits/commit-hover-msg.png)

  - **Auteur non reconnu (avec adresse e-mail)** Si vous voyez ce message avec une adresse e-mail, l’adresse que vous avez utilisée pour créer la validation n’est pas connectée à votre compte sur {% data variables.product.product_name %}. {% ifversion not ghae %}Pour lier vos validations, [ajoutez l’adresse e-mail à vos paramètres d’e-mail GitHub](/articles/adding-an-email-address-to-your-github-account).{% endif %}{% ifversion not ghae %} Si l’adresse e-mail a un Gravatar associé, le Gravatar s’affiche en regard de la validation, plutôt que l’octocat gris par défaut.{% endif %}
  - **Auteur non reconnu (aucune adresse e-mail)** Si vous voyez ce message sans adresse e-mail, vous avez utilisé une adresse e-mail générique qui ne peut pas être connectée à votre compte sur {% data variables.product.product_name %}.{% ifversion not ghae %} Vous devez [définir votre adresse e-mail de validation dans Git](/articles/setting-your-commit-email-address), puis [ajouter la nouvelle adresse à vos paramètres de messagerie GitHub](/articles/adding-an-email-address-to-your-github-account) pour lier vos validations futures. Les anciennes validations ne sont pas liées.{% endif %}
  - **E-mail non valide** L’adresse e-mail de vos paramètres de configuration Git local est vide ou non mise en forme comme adresse e-mail.{% ifversion not ghae %} Vous devez [définir votre adresse e-mail de validation dans Git](/articles/setting-your-commit-email-address), puis [ajouter la nouvelle adresse à vos paramètres de messagerie GitHub](/articles/adding-an-email-address-to-your-github-account) pour lier vos validations futures. Les anciennes validations ne sont pas liées.{% endif %}

{% ifversion ghae %} Vous pouvez modifier l’e-mail dans vos paramètres de configuration Git locale à l’adresse associée à votre compte pour lier vos validations futures. Les anciennes validations ne sont pas liées. Pour plus d’informations, consultez « [Définition de votre adresse e-mail de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git) ».
{% endif %}

{% warning %}

Si votre configuration Git locale contenait une adresse e-mail générique ou une adresse e-mail déjà attachée au compte d’un autre utilisateur, vos validations précédentes ne seront pas liées à votre compte. Bien que Git vous permette de modifier l’adresse e-mail utilisée pour les validations précédentes, nous vous déconseillons fortement de le faire, en particulier dans un référentiel partagé.

{% endwarning %}

## Pour aller plus loin

* « [Recherche de validations](/search-github/searching-on-github/searching-commits) »
