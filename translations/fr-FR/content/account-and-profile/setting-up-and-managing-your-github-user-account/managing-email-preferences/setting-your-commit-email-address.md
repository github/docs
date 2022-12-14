---
title: Définition de votre adresse e-mail de commit
intro: You can set the email address that is used to author commits on {% data variables.product.product_location %} and on your computer.
redirect_from:
- /articles/keeping-your-email-address-private
- /articles/setting-your-commit-email-address-on-github
- /articles/about-commit-email-addresses
- /articles/git-email-settings
- /articles/setting-your-email-in-git
- /articles/set-your-user-name-email-and-github-token
- /articles/setting-your-commit-email-address-in-git
- /articles/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Set commit email address
ms.openlocfilehash: da47c240cc53e18d5f5537f20dd8c1eb2f4127bf
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145086468"
---
## <a name="about-commit-email-addresses"></a>À propos des adresses e-mail de commit

{% data variables.product.prodname_dotcom %} utilise votre adresse e-mail de commit pour associer des commits à votre compte sur {% data variables.product.product_location %}. Vous pouvez choisir l’adresse e-mail qui sera associée aux commits que vous poussez (push) à partir de la ligne de commande, ainsi qu’aux opérations Git basées sur le web que vous effectuez.

Pour les opérations Git basées sur le web, vous pouvez définir votre adresse e-mail de commit sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Pour les commits que vous poussez à partir de la ligne de commande, vous pouvez définir votre adresse e-mail de commit dans Git.

{% ifversion fpt or ghec %}Les commits que vous avez effectués avant de changer votre adresse e-mail de commit sont toujours associés à votre adresse e-mail précédente.{% else %}Une fois votre adresse e-mail de commit changée sur {% data variables.product.product_name %}, la nouvelle adresse e-mail sera visible dans toutes vos futures opérations Git basées sur le web par défaut. Les commits que vous avez effectués avant de changer votre adresse e-mail de commit sont toujours associés à votre adresse e-mail précédente.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Remarque** : {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}Si vous souhaitez que votre adresse e-mail personnelle reste privée, vous pouvez utiliser une adresse e-mail `no-reply` fournie par {% data variables.product.product_name %} comme adresse e-mail de commit. Pour utiliser votre adresse e-mail `noreply` pour les commits que vous poussez à partir de la ligne de commande, utilisez cette adresse e-mail lorsque vous définissez votre adresse e-mail de commit dans Git. Pour utiliser votre adresse `noreply` pour les opérations Git basées sur le web, définissez votre adresse e-mail de commit sur GitHub et choisissez l’option **Laisser mon adresse e-mail privée**.

Vous pouvez également choisir de bloquer les commits poussés à partir de la ligne de commande qui exposent votre adresse e-mail personnelle. Pour plus d’informations, consultez « [Blocage des poussées à partir de la ligne de commande qui exposent votre adresse e-mail personnelle](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address) ».{% endif %}

Pour être sûr que les commits vous sont attribués et qu’ils apparaissent dans votre graphe de contributions, utilisez une adresse e-mail connectée à votre compte sur {% data variables.product.product_location %}{% ifversion fpt or ghec %}, ou l’adresse e-mail `noreply` fournie dans vos paramètres de messagerie{% endif %}. {% ifversion not ghae %}Pour plus d’informations, consultez « [Ajout d’une adresse e-mail à votre compte {% data variables.product.prodname_dotcom %}](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account) ».{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Remarque :** Si vous avez créé votre compte sur {% data variables.product.product_location %} _après_ le 18 juillet 2017, votre adresse e-mail `no-reply` pour {% data variables.product.product_name %} est un numéro d’ID à sept chiffres et votre nom d’utilisateur au format <code><em>ID+username</em>@users.noreply.github.com</code>. Si vous avez créé votre compte sur {% data variables.product.product_location %} _avant_ le 18 juillet 2017, votre adresse e-mail `no-reply` fournie par {% data variables.product.product_name %} est <code><em>username</em>@users.noreply.github.com</code>. Vous pouvez obtenir une adresse e-mail `no-reply` basée sur l’ID pour {% data variables.product.product_name %} en sélectionnant (ou en désélectionnant puis resélectionnant) **Laisser mon adresse e-mail privée** dans vos paramètres de messagerie.

{% endnote %}

Si vous utilisez votre adresse e-mail `noreply` pour {% data variables.product.product_name %} pour effectuer des commits, et qu’ensuite vous [modifiez votre nom d’utilisateur](/articles/changing-your-github-username), ces commits ne seront pas associés à votre compte sur {% data variables.product.product_location %}. Cela ne s’applique pas si vous utilisez l’adresse `noreply` basée sur l’ID fournie par {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Modification de votre nom d’utilisateur {% data variables.product.prodname_dotcom %}](/articles/changing-your-github-username) ».{% endif %}

## <a name="setting-your-commit-email-address-on--data-variablesproductprodname_dotcom-"></a>Définition de votre adresse e-mail de commit sur {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %} {% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## <a name="setting-your-commit-email-address-in-git"></a>Définition de votre adresse e-mail de commit dans Git

Vous pouvez utiliser la commande `git config` pour changer l’adresse e-mail que vous associez à vos commits Git. La nouvelle adresse e-mail que vous définissez sera visible dans les commits ultérieurs que vous pousserez à {% data variables.product.product_location %} à partir de la ligne de commande. Les commits que vous avez effectués avant de changer votre adresse e-mail de commit sont toujours associés à votre adresse e-mail précédente.

### <a name="setting-your-email-address-for-every-repository-on-your-computer"></a>Définition de votre adresse e-mail pour chaque dépôt sur votre ordinateur

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### <a name="setting-your-email-address-for-a-single-repository"></a>Définition de votre adresse e-mail pour un dépôt unique

{% data variables.product.product_name %} utilise l’adresse e-mail définie dans votre configuration Git locale pour associer les commits poussés à partir de la ligne de commande à votre compte sur {% data variables.product.product_location %}.

Vous pouvez changer l’adresse e-mail associée aux commits que vous effectuez dans un dépôt unique. Cela remplacera vos paramètres de configuration Git globaux dans ce dépôt, mais n’affectera aucun autre dépôt.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Remplacez le répertoire de travail actuel par le dépôt local dans lequel vous souhaitez configurer l’adresse e-mail que vous associez à vos commits Git.
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
