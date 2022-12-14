---
title: Modification de votre nom d’utilisateur GitHub
intro: You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.
redirect_from:
- /articles/how-to-change-your-username
- /articles/changing-your-github-user-name
- /articles/renaming-a-user
- /articles/what-happens-when-i-change-my-username
- /articles/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Change your username
ms.openlocfilehash: 30139a0dab508f1e8db0f33174d6e25ec28afef4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086466"
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Remarque** : Les membres d’une {% data variables.product.prodname_emu_enterprise %} ne peuvent pas changer de nom d’utilisateur. L’administrateur du fournisseur d’identité de votre entreprise contrôle votre nom d’utilisateur pour {% data variables.product.product_name %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users) ».

{% elsif ghes %}

**Remarque** : Si vous vous connectez à {% data variables.product.product_location %} avec des informations d’identification LDAP ou l’authentification unique, seul votre administrateur local peut changer votre nom d’utilisateur. Pour plus d’informations sur les méthodes d’authentification pour {% data variables.product.product_name %}, consultez « [Authentification des utilisateurs pour {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance) ».

{% endif %}

{% endnote %}

{% endif %}

## <a name="about-username-changes"></a>À propos des changements de nom d’utilisateur

Vous pouvez remplacer votre nom d’utilisateur par un autre qui n’est pas en cours d’utilisation.{% ifversion fpt or ghec %} Si le nom d’utilisateur souhaité n’est pas disponible, réfléchissez à d’autres noms ou variantes uniques. L’utilisation d’un chiffre, d’un trait d’union ou d’une autre orthographe peut vous aider à trouver un nom d’utilisateur similaire qui est toujours disponible.

Si vous détenez une marque commerciale pour le nom d’utilisateur, vous trouverez plus d’informations sur la façon de soumettre une réclamation sur notre page [Politique concernant les marques commerciales](/free-pro-team@latest/github/site-policy/github-trademark-policy). 

Si vous ne détenez pas de marque commerciale pour le nom, vous pouvez choisir un autre nom d’utilisateur ou conserver votre nom d’utilisateur actuel. {% data variables.contact.github_support %} ne peut pas libérer le nom d’utilisateur indisponible pour vous. Pour plus d’informations, consultez « [Changement de votre nom d’utilisateur](#changing-your-username) ».{% endif %}

Une fois que vous avez changé votre nom d’utilisateur, votre ancien nom d’utilisateur devient disponible et ne peut être revendiqué par aucune autre personne. La plupart des références à vos dépôts sous l’ancien nom d’utilisateur passent automatiquement au nouveau nom d’utilisateur. Toutefois, certains liens vers votre profil ne sont pas redirigés automatiquement.

{% data variables.product.product_name %} ne peut pas configurer les redirections pour :
- Les [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) utilisant votre ancien nom d’utilisateur.
- Les liens vers des [gists](/articles/creating-gists) qui incluent votre ancien nom d’utilisateur.

{% ifversion fpt or ghec %} 

Si vous êtes membre d’une {% data variables.product.prodname_emu_enterprise %}, vous ne pouvez pas apporter de modifications à votre nom d’utilisateur. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## <a name="repository-references"></a>Références de dépôts

Une fois que vous avez changé votre nom d’utilisateur, {% data variables.product.product_name %} redirige automatiquement les références vers vos dépôts.
- Les liens web vers vos dépôts existants continueront à fonctionner. Cette opération peut prendre quelques minutes après la modification.
- Les poussées (push) par ligne de commande à partir de vos clones de dépôt local vers les anciennes URL de suivi à distance continueront à fonctionner.

Si le nouveau propriétaire de votre ancien nom d’utilisateur crée un dépôt portant le même nom que le vôtre, cela remplacera l’entrée de redirection et votre redirection cessera de fonctionner. En raison de cette possibilité, nous vous recommandons de mettre à jour toutes les URL de dépôt distant existantes après avoir changé votre nom d’utilisateur. Pour plus d’informations, consultez « [Gestion des dépôts distants](/github/getting-started-with-github/managing-remote-repositories) ».

## <a name="links-to-your-previous-profile-page"></a>Liens vers votre page de profil précédente

Après un changement de nom d’utilisateur, les liens vers votre page de profil précédente, par exemple `https://{% data variables.command_line.backticks %}/previoususername`, retourneront une erreur 404. Nous vous recommandons de mettre à jour les liens vers votre compte sur {% data variables.product.product_location %} à partir d’un autre emplacement{% ifversion fpt or ghec %}, tel que votre profil LinkedIn ou Twitter{% endif %}.

## <a name="your-git-commits"></a>Vos commits Git

{% ifversion fpt or ghec %}Les commits Git qui étaient associés à votre adresse e-mail `noreply` fournie par {% data variables.product.product_name %} ne seront pas attribués à votre nouveau nom d’utilisateur et n’apparaîtront pas dans votre graphe de contributions.{% endif %} Si vos commits Git sont associés à une autre adresse e-mail que vous avez [ajoutée à votre compte GitHub](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}y compris l’adresse e-mail `noreply` fournie par {% data variables.product.product_name %} et basée sur l’ID, {% endif %}ils continueront à vous être attribués et apparaîtront dans votre graphe de contributions après le changement de nom d’utilisateur. Pour plus d’informations sur la définition de votre adresse e-mail, consultez « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address) ».

## <a name="changing-your-username"></a>Changement de votre nom d’utilisateur

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. Dans la section « Changer le nom d'utilisateur », cliquez sur **Changer le nom d'utilisateur**.
   ![Bouton de changement de nom](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Lisez les avertissements concernant le changement de votre nom d’utilisateur. Si vous souhaitez toujours changer votre nom d’utilisateur, cliquez sur **Je comprends. Changeons mon nom d'utilisateur**.
   ![Bouton d’avertissement de changement de nom d’utilisateur](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Tapez un nouveau nom d’utilisateur.
   ![Champ de nouveau nom d’utilisateur](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Si le nom d’utilisateur que vous avez choisi est disponible, cliquez sur **Changer mon nom d'utilisateur**. Si le nom d’utilisateur que vous avez choisi n’est pas disponible, vous pouvez essayer un autre nom d’utilisateur ou l’une des suggestions affichées.
   ![Bouton d’avertissement de changement de nom d’utilisateur](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## <a name="further-reading"></a>Pour aller plus loin

- « [Pourquoi mes commits sont-ils liés au mauvais utilisateur ?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user) »{% ifversion fpt or ghec %}
- « [Politique relative aux noms d’utilisateur {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/github/site-policy/github-username-policy) »{% endif %}
