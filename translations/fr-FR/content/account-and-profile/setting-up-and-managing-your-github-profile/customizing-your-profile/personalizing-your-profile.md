---
title: Personnalisation de votre profil
intro: 'Vous pouvez partager des informations sur vous-même avec d’autres utilisateurs {% data variables.product.product_name %} en définissant une image de profil et en ajoutant une bio à votre profil.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile
  - /articles/setting-your-profile-picture
  - /articles/how-do-i-set-up-my-profile-picture
  - /articles/gravatar-problems
  - /articles/how-do-i-set-up-my-avatar
  - /articles/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/personalizing-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Personalize
ms.openlocfilehash: c12fccd91144428fe9aad2f01d2c0b0941fdd4d4
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146681052'
---
## Changement de votre image de profil

Votre image de profil vous permet de vous identifier dans {% data variables.product.product_name %} dans les demandes de tirage (pull requests), les commentaires, les pages de contributions et les graphes.

Lorsque vous ouvrez un compte, {% data variables.product.product_name %} vous fournit un « identicon » généré de manière aléatoire. [Votre identicon](https://github.com/blog/1586-identicons) est généré à partir d’un hachage de votre ID d’utilisateur ; il n’existe aucun moyen de contrôler sa couleur ou son modèle. Vous pouvez remplacer votre identicon par une image qui vous représente.

{% note %}

**Remarque{% ifversion ghec %}s{% endif %}**  : {% ifversion ghec %}

* {% endif %}Votre image de profil doit être un fichier PNG, JPG ou GIF, et elle doit être inférieure à 1 Mo de taille et inférieure à 3 000 x 3 000 pixels. Pour un rendu de qualité optimale, nous vous recommandons de choisir une image d’environ 500 x 500 pixels.
{% ifversion ghec %}* Les images de profil Gravatar ne sont pas prises en charge avec {% data variables.product.prodname_emus %}.{% endif %}

{% endnote %}

### Définition d’une image de profil

{% data reusables.user-settings.access_settings %}
2. Sous **Image de profil**, cliquez sur {% octicon "pencil" aria-label="The edit icon" %} **Modifier**.
![Modifier l’image de profil](/assets/images/help/profile/edit-profile-photo.png)
3. Cliquez sur **Charger une photo...** .{% ifversion not ghae %}![ Mettre à jour l’image du profil](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}
3. Rognez votre image. Lorsque vous avez terminé, cliquez sur **Définir une nouvelle image de profil**.
    ![Rogner la photo chargée](/assets/images/help/profile/avatar_crop_and_save.png)

### Réinitialisation de votre image de profil à l’identicon

{% data reusables.user-settings.access_settings %}
2. Sous **Image de profil**, cliquez sur {% octicon "pencil" aria-label="The edit icon" %} **Modifier**.
![Modifier l’image de profil](/assets/images/help/profile/edit-profile-photo.png)
3. Pour revenir à votre identicon, cliquez sur **Supprimer la photo**. {% ifversion not ghae %}Si votre adresse e-mail est associée à un [Gravatar](https://en.gravatar.com/), vous ne pouvez pas revenir à votre identicon. Cliquez sur **Restaurer Gravatar** à la place.
![Mettre à jour l’image du profil](/assets/images/help/profile/edit-profile-picture-options.png){% endif %}

## Modification du nom de votre profil

Vous pouvez modifier le nom affiché sur votre profil. Ce nom peut également être affiché en regard des commentaires que vous apportez dans les dépôts privés appartenant à une organisation. Pour plus d’informations, consultez « [Gestion de l’affichage des noms de membres dans votre organisation](/articles/managing-the-display-of-member-names-in-your-organization) ».

{% ifversion fpt or ghec %} {% note %}

**Remarque :** Si vous êtes membre d’une {% data variables.product.prodname_emu_enterprise %}, toutes les modifications apportées à votre nom de profil doivent être apportées via votre fournisseur d’identité plutôt que par le biais de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %}
2. Sous « Nom », tapez le nom que vous souhaitez afficher sur votre profil.
  ![Champ de nom dans les paramètres de profil](/assets/images/help/profile/name-field.png)

## Ajout d’une bio à votre profil

Ajoutez une bio à votre profil pour partager des informations sur vous-même avec d’autres utilisateurs de {% data variables.product.product_name %}. Avec l’aide de [@mentions](/articles/basic-writing-and-formatting-syntax) et d’emojis, vous pouvez inclure des informations sur les endroits où vous avez déjà travaillé, quel type de travail vous faites, ou même quel type de café vous buvez.

{% ifversion fpt or ghes or ghec %}

Pour avoir un formulaire plus long et présenter davantage d’informations personnalisées sur vous-même, vous pouvez également utiliser un README de profil. Pour plus d’informations, consultez « [Gestion de votre README de profil »](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme).

{% endif %}

{% note %}

**Remarque :** Si la section de vue d’ensemble de l’activité est activée pour votre profil et que vous @mention une organisation dont êtes membre dans votre bio de profil, cette organisation sera proposée en premier dans votre vue d’ensemble de l’activité. Pour plus d’informations, consultez « [Affichage d’une vue d’ensemble de votre activité sur votre profil](/articles/showing-an-overview-of-your-activity-on-your-profile) ».

{% endnote %}

{% data reusables.user-settings.access_settings %}
2. Sous **Bio**, ajoutez le contenu que vous souhaitez afficher sur votre profil. Le champ bio est limité à 160 caractères.
    ![Mettre à jour la bio sur le profil](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Astuce :** Quand vous @mention une organisation, l’autocomplétion est effectuée uniquement pour celles dont vous êtes membre. Vous pouvez toujours @mention des organisations dont vous n’êtes pas membre, comme un employeur précédent, mais le nom de l’organisation ne sera pas automatiquement renseigné pour vous.

  {% endtip %}

3. Cliquez sur **Mettre à jour le profil**.
    ![Bouton de mise à jour du profil](/assets/images/help/profile/update-profile-button.png)

## Définition d’un état

Vous pouvez définir un état pour afficher des informations sur votre disponibilité actuelle sur {% data variables.product.product_name %}. Votre état s’affiche :
- Sur votre page de profil {% data variables.product.product_name %}.
- Lorsque les utilisateurs pointent sur votre nom d’utilisateur ou votre avatar sur {% data variables.product.product_name %}.
- Sur la page d’une équipe dont vous êtes membre. Pour plus d’informations, consultez « [À propos des équipes](/articles/about-teams/#team-pages) ».
- Dans le tableau de bord d’une organisation dont vous êtes membre. Pour plus d’informations, consultez « [À propos du tableau de bord de votre organisation](/articles/about-your-organization-dashboard/) ».

Lorsque vous définissez votre état, vous pouvez également préciser que vous avez une disponibilité limitée sur {% data variables.product.product_name %}.

![Une note « occupé » est affichée en regard du nom d’utilisateur mentionné](/assets/images/help/profile/username-with-limited-availability-text.png)

![Une note « occupé » est affichée en regard du nom d’utilisateur du réviseur demandé](/assets/images/help/profile/request-a-review-limited-availability-status.png)

Si vous sélectionnez l’option « Occupé », lorsque les utilisateurs @mention votre nom d’utilisateur, vous attribuent un problème ou une demande de tirage, ou vous demandent une révision de demande de tirage, une note en regard de votre nom d’utilisateur indique que vous êtes occupé. Vous serez également exclu de l’attribution de révision automatique pour les demandes de tirage attribuées à toutes les équipes dont vous êtes membre. Pour plus d’informations, consultez « [Gestion des paramètres de révision du code pour votre équipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team) ».

1. Dans le coin supérieur droit de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.product.product_name %}{% endif %}, cliquez sur votre photo de profil, puis cliquez sur **Définir votre statut** ou, si vous avez déjà un état défini, cliquez sur votre état actuel.
  ![Bouton sur le profil pour définir votre état](/assets/images/help/profile/set-status-on-profile.png)
2. Pour ajouter du texte personnalisé à votre état, cliquez dans le champ de texte et tapez un message d’état.
  ![Champ où taper un message d’état](/assets/images/help/profile/type-a-status-message.png)
3. Si vous le souhaitez, pour définir un emoji d’état, cliquez sur l’icône de sourire et sélectionnez un emoji dans la liste.
  ![Bouton pour sélectionner un emoji d’état](/assets/images/help/profile/select-emoji-status.png)
4. Si vous souhaitez préciser que votre disponibilité est limitée, sélectionnez « Occupé ».
  ![Option Occupé sélectionnée dans les options de modification d’état](/assets/images/help/profile/limited-availability-status.png)
5. Utilisez le menu déroulant **Effacer le statut**, puis sélectionnez quand vous souhaitez que votre état expire. Si vous ne sélectionnez pas d’expiration d’état, votre état est maintenu jusqu’à ce que vous l’effaciez ou le modifiiez.
  ![Menu déroulant pour choisir quand votre état expire](/assets/images/help/profile/status-expiration.png)
6. Utilisez le menu déroulant et cliquez sur l’organisation pour laquelle vous souhaitez que votre état soit visible. Si vous ne sélectionnez pas d’organisation, votre statut sera public.
  ![Menu déroulant pour choisir qui peut voir votre statut](/assets/images/help/profile/status-visibility.png)
7. Cliquez sur **Définir le statut**.
  ![Bouton pour définir l’état](/assets/images/help/profile/set-status-button.png)

{% ifversion fpt or ghec %}
## Affichage de badges sur votre profil

Lorsque vous participez à certains programmes, {% data variables.product.prodname_dotcom %} affiche automatiquement un badge sur votre profil.

| Badge | Programme | Description |
| --- | --- | --- |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **Developer Program Member** | Si vous êtes inscrit au {% data variables.product.prodname_dotcom %} Developer Program et que vous créez une application avec l’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}, vous recevrez un badge Developer Program Member sur votre profil. Pour plus d’informations sur le programme de développement {% data variables.product.prodname_dotcom %}, consultez [Développeur GitHub](/program/). |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | Si vous utilisez {% data variables.product.prodname_pro %}, vous recevrez un badge PRO sur votre profil. Pour plus d’informations sur {% data variables.product.prodname_pro %}, consultez « [Produits de {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro) ». |
| {% octicon "lock" aria-label="The lock icon" %} | **Security Bug Bounty Hunter** | Si vous avez aidé à détecter des vulnérabilités de sécurité, vous recevrez un badge Security Bug Bounty Hunter sur votre profil. Pour plus d’informations sur le programme de sécurité {% data variables.product.prodname_dotcom %}, consultez [Sécurité {% data variables.product.prodname_dotcom %}](https://bounty.github.com/). |
| {% octicon "mortar-board" aria-label="The mortar-board icon" %} | **{% data variables.product.prodname_dotcom %} Campus Expert** | Si vous participez au {% data variables.product.prodname_campus_program %}, vous recevrez un badge {% data variables.product.prodname_dotcom %} Campus Expert sur votre profil. Pour plus d’informations sur le Campus Experts program, consultez [Campus Experts](https://education.github.com/experts). |
| {% octicon "shield" aria-label="The shield icon" %} | **Crédit d’avis de sécurité** | Si un avis de sécurité que vous soumettez à la [base de données des avis {% data variables.product.prodname_dotcom %}](https://github.com/advisories) est accepté, vous obtiendrez un badge de crédit d’avis de sécurité sur votre profil. Pour plus d’informations sur les avis de sécurité {% data variables.product.prodname_dotcom %}, consultez[Avis de sécurité {% data variables.product.prodname_dotcom %}](/code-security/repository-security-advisories/about-github-security-advisories-for-repositories). |
| {% octicon "check" aria-label="The check icon" %} | **Réponse à la discussion** | Si votre réponse à une discussion est marquée comme réponse, vous obtiendrez un badge de réponse à la discussion sur votre profil. Pour plus d’informations sur les discussions {% data variables.product.prodname_dotcom %}, consultez [À propos des discussions](/discussions/collaborating-with-your-community-using-discussions/about-discussions). |

{% endif %}

{% ifversion fpt or ghec %}

## Gagner des succès digitaux

Les succès digitaux célèbrent des événements et des actions spécifiques qui se produisent sur {% data variables.product.prodname_dotcom %}. Ils apparaissent sous forme de petits badges répertoriés dans la barre latérale de votre profil. Le fait de cliquer ou de pointer la souris sur un succès digital affiche une vue détaillée qui indique comment le succès digital a été acquis, avec une brève description et des liens vers les événements contributeurs. Les liens d’événement ne seront visibles que par les utilisateurs qui ont accès au référentiel ou à l’organisation dans lequel l’événement a eu lieu. Les liens d’événements apparaissent inaccessibles à tous les utilisateurs sans accès.

Pour empêcher les contributions privées de compter vers vos succès digitaux ou de désactiver entièrement les succès digitaux, consultez « [Afficher vos contributions privées et vos succès digitaux sur votre profil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile) ».

{% note %}

**Remarque :** cette fonctionnalité est actuellement en version bêta et est sujette à modification.

{% endnote %}

{% endif %}

## Liste des référentiels éligibles pour le succès digital Mars 2020 Helicopter Contributor

Si vous avez créé une ou plusieurs validations présentes dans l’historique des validations pour l’étiquette répertoriée d’un ou plusieurs des référentiels ci-dessous, vous recevrez le succès digital Mars 2020 Helicopter Contributor sur votre profil. Le commit doit avoir été créé avec une adresse e-mail vérifiée et associée à votre compte au moment où {% data variables.product.prodname_dotcom %} a déterminé les contributions éligibles, afin de vous être attribuée. Vous pouvez être l’auteur original ou [l’un des co-auteurs](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors) du commit. Les modifications ultérieures apportées aux adresses e-mails vérifiées n’auront pas d’effet sur le badge. Nous avons généré la liste sur la base des informations communiquées par le Jet Propulsion Laboratory de la NASA.

| Dépôt {% data variables.product.prodname_dotcom %} | Version | Tag |
|---|---|---|
| [torvalds/linux](https://github.com/torvalds/linux) | 3.4 | [version 3.4](https://github.com/torvalds/linux/releases/tag/v3.4) |
| [python/cpython](https://github.com/python/cpython) | 3.9.2 | [v3.9.2](https://github.com/python/cpython/releases/tag/v3.9.2) |
| [boto/boto3](https://github.com/boto/boto3) | 1.17.17 | [1.17.17](https://github.com/boto/boto3/releases/tag/1.17.17) |
| [boto/botocore](https://github.com/boto/botocore) | 1.20.11 | [1.20.11](https://github.com/boto/botocore/releases/tag/1.20.11) |
| [certifi/python-certifi](https://github.com/certifi/python-certifi) | 2020.12.5 | [2020.12.05](https://github.com/certifi/python-certifi/releases/tag/2020.12.05) |
| [chardet/chardet](https://github.com/chardet/chardet) | 4.0.0 | [4.0.0](https://github.com/chardet/chardet/releases/tag/4.0.0) |
| [matplotlib/cycler](https://github.com/matplotlib/cycler) | 0.10.0 | [v0.10.0](https://github.com/matplotlib/cycler/releases/tag/v0.10.0) |
| [elastic/elasticsearch-py](https://github.com/elastic/elasticsearch-py) | 6.8.1 | [6.8.1](https://github.com/elastic/elasticsearch-py/releases/tag/6.8.1) |
| [ianare/exif-py](https://github.com/ianare/exif-py) | 2.3.2 | [2.3.2](https://github.com/ianare/exif-py/releases/tag/2.3.2) |
| [kjd/idna](https://github.com/kjd/idna) | 2,10 | [v2.10](https://github.com/kjd/idna/releases/tag/v2.10) |
| [jmespath/jmespath.py](https://github.com/jmespath/jmespath.py) | 0.10.0 | [0.10.0](https://github.com/jmespath/jmespath.py/releases/tag/0.10.0) |
| [nucleic/kiwi](https://github.com/nucleic/kiwi) | 1.3.1 | [1.3.1](https://github.com/nucleic/kiwi/releases/tag/1.3.1) |
| [matplotlib/matplotlib](https://github.com/matplotlib/matplotlib) | 3.3.4 | [v3.3.4](https://github.com/matplotlib/matplotlib/releases/tag/v3.3.4) |
| [numpy/numpy](https://github.com/numpy/numpy) | 1.20.1 | [v1.20.1](https://github.com/numpy/numpy/releases/tag/v1.20.1) |
| [opencv/opencv-python](https://github.com/opencv/opencv-python) | 4.5.1.48 | [48](https://github.com/opencv/opencv-python/releases/tag/48) |
| [python-pillow/Pillow](https://github.com/python-pillow/Pillow) | 8.1.0 | [8.1.0](https://github.com/python-pillow/Pillow/releases/tag/8.1.0) |
| [pycurl/pycurl](https://github.com/pycurl/pycurl) | 7.43.0.6 | [REL_7_43_0_6](https://github.com/pycurl/pycurl/releases/tag/REL_7_43_0_6) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.7 | [pyparsing_2.4.7](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.7) |
| [pyserial/pyserial](https://github.com/pyserial/pyserial) | 3,5 | [v3.5](https://github.com/pyserial/pyserial/releases/tag/v3.5) |
| [dateutil/dateutil](https://github.com/dateutil/dateutil) | 2.8.1 | [2.8.1](https://github.com/dateutil/dateutil/releases/tag/2.8.1) |
| [yaml/pyyaml ](https://github.com/yaml/pyyaml) | 5.4.1 | [5.4.1](https://github.com/yaml/pyyaml/releases/tag/5.4.1) |
| [psf/requests](https://github.com/psf/requests) | 2.25.1 | [v2.25.1](https://github.com/psf/requests/releases/tag/v2.25.1) |
| [boto/s3transfer](https://github.com/boto/s3transfer) | 0.3.4 | [0.3.4](https://github.com/boto/s3transfer/releases/tag/0.3.4) |
| [enthought/scimath](https://github.com/enthought/scimath) | 4.2.0 | [4.2.0](https://github.com/enthought/scimath/releases/tag/4.2.0) |
| [scipy/scipy](https://github.com/scipy/scipy) | 1.6.1 | [v1.6.1](https://github.com/scipy/scipy/releases/tag/v1.6.1) |
| [benjaminp/six](https://github.com/benjaminp/six) | 1.15.0 | [1.15.0](https://github.com/benjaminp/six/releases/tag/1.15.0) |
| [enthought/traits](https://github.com/enthought/traits) | 6.2.0 | [6.2.0](https://github.com/enthought/traits/releases/tag/6.2.0) |
| [urllib3/urllib3](https://github.com/urllib3/urllib3) | 1.26.3 | [1.26.3](https://github.com/urllib3/urllib3/releases/tag/1.26.3) |
| [python-attrs/attrs](https://github.com/python-attrs/attrs) | 19.3.0 | [19.3.0](https://github.com/python-attrs/attrs/releases/tag/19.3.0) |
| [CheetahTemplate3/cheetah3](https://github.com/CheetahTemplate3/cheetah3/) | 3.2.4 | [3.2.4](https://github.com/CheetahTemplate3/cheetah3/releases/tag/3.2.4) |
| [pallets/click](https://github.com/pallets/click) | 7.0 | [7.0](https://github.com/pallets/click/releases/tag/7.0) |
| [pallets/flask](https://github.com/pallets/flask) | 1.1.1 | [1.1.1](https://github.com/pallets/flask/releases/tag/1.1.1) |
| [flask-restful/flask-restful](https://github.com/flask-restful/flask-restful) | 0.3.7 | [0.3.7](https://github.com/flask-restful/flask-restful/releases/tag/0.3.7) |
| [pytest-dev/iniconfig](https://github.com/pytest-dev/iniconfig) | 1.0.0 | [v1.0.0](https://github.com/pytest-dev/iniconfig/releases/tag/v1.0.0) |
| [pallets/itsdangerous](https://github.com/pallets/itsdangerous) | 1.1.0 | [1.1.0](https://github.com/pallets/itsdangerous/releases/tag/1.1.0) |
| [pallets/jinja](https://github.com/pallets/jinja) | 2.10.3 | [2.10.3](https://github.com/pallets/jinja/releases/tag/2.10.3) |
| [lxml/lxml](https://github.com/lxml/lxml) | 4.4.1 | [lxml-4.4.1](https://github.com/lxml/lxml/releases/tag/lxml-4.4.1) |
| [Python-Markdown/markdown](https://github.com/Python-Markdown/markdown) | 3.1.1 | [3.1.1](https://github.com/Python-Markdown/markdown/releases/tag/3.1.1) |
| [pallets/markupsafe](https://github.com/pallets/markupsafe) | 1.1.1 | [1.1.1](https://github.com/pallets/markupsafe/releases/tag/1.1.1) |
| [pypa/packaging](https://github.com/pypa/packaging) | 19.2 | [19.2](https://github.com/pypa/packaging/releases/tag/19.2) |
| [pexpect/pexpect](https://github.com/pexpect/pexpect) | 4.7.0 | [4.7.0](https://github.com/pexpect/pexpect/releases/tag/4.7.0) |
| [pytest-dev/pluggy](https://github.com/pytest-dev/pluggy) | 0.13.0 | [0.13.0](https://github.com/pytest-dev/pluggy/releases/tag/0.13.0) |
| [pexpect/ptyprocess](https://github.com/pexpect/ptyprocess) | 0.6.0 | [0.6.0](https://github.com/pexpect/ptyprocess/releases/tag/0.6.0) |
| [pytest-dev/py](https://github.com/pytest-dev/py) | 1.8.0 | [1.8.0](https://github.com/pytest-dev/py/releases/tag/1.8.0) |
| [pyparsing/pyparsing](https://github.com/pyparsing/pyparsing) | 2.4.5 | [pyparsing_2.4.5](https://github.com/pyparsing/pyparsing/releases/tag/pyparsing_2.4.5) |
| [pytest-dev/pytest](https://github.com/pytest-dev/pytest) | 5.3.0 | [5.3.0](https://github.com/pytest-dev/pytest/releases/tag/5.3.0) |
| [stub42/pytz](https://github.com/stub42/pytz) | 2019.3 | [release_2019.3](https://github.com/stub42/pytz/releases/tag/release_2019.3) |
| [uiri/toml](https://github.com/uiri/toml) | 0.10.0 | [0.10.0](https://github.com/uiri/toml/releases/tag/0.10.0) |
| [pallets/werkzeug](https://github.com/pallets/werkzeug) | 0.16.0 | [0.16.0](https://github.com/pallets/werkzeug/releases/tag/0.16.0) |
| [dmnfarrell/tkintertable](https://github.com/dmnfarrell/tkintertable) | 1.2 | [v1.2](https://github.com/dmnfarrell/tkintertable/releases/tag/v1.2) |
| [wxWidgets/wxPython-Classic](https://github.com/wxWidgets/wxPython-Classic) | 2.9.1.1 | [wxPy-2.9.1.1](https://github.com/wxWidgets/wxPython-Classic/releases/tag/wxPy-2.9.1.1) |
| [nasa/fprime](https://github.com/nasa/fprime) | 1.3 | [NASA-v1.3](https://github.com/nasa/fprime/releases/tag/NASA-v1.3) |
| [nucleic/cppy](https://github.com/nucleic/cppy) | 1.1.0 | [1.1.0](https://github.com/nucleic/cppy/releases/tag/1.1.0) |
| [opencv/opencv](https://github.com/opencv/opencv) | 4.5.1 | [4.5.1](https://github.com/opencv/opencv/releases/tag/4.5.1) |
| [curl/curl](https://github.com/curl/curl) | 7.72.0 | [curl-7_72_0](https://github.com/curl/curl/releases/tag/curl-7_72_0) |
| [madler/zlib](https://github.com/madler/zlib) | 1.2.11 | [v1.2.11](https://github.com/madler/zlib/releases/tag/v1.2.11) |
| [apache/lucene](https://github.com/apache/lucene) | 7.7.3 | [releases/lucene-solr/7.7.3](https://github.com/apache/lucene/releases/tag/releases%2Flucene-solr%2F7.7.3) |
| [yaml/libyaml](https://github.com/yaml/libyaml) | 0.2.5 | [0.2.5](https://github.com/yaml/libyaml/releases/tag/0.2.5) |
| [elastic/elasticsearch](https://github.com/elastic/elasticsearch) | 6.8.1 | [v6.8.1](https://github.com/elastic/elasticsearch/releases/tag/v6.8.1) |
| [twbs/bootstrap](https://github.com/twbs/bootstrap) | 4.3.1 | [v4.3.1](https://github.com/twbs/bootstrap/releases/tag/v4.3.1) |
| [vuejs/vue](https://github.com/vuejs/vue) | 2.6.10 | [v2.6.10](https://github.com/vuejs/vue/releases/tag/v2.6.10) |
| [carrotsearch/hppc](https://github.com/carrotsearch/hppc) | 0.7.1 | [0.7.1](https://github.com/carrotsearch/hppc/releases/tag/0.7.1) |
| [JodaOrg/joda-time](https://github.com/JodaOrg/joda-time) | 2.10.1 | [v2.10.1](https://github.com/JodaOrg/joda-time/releases/tag/v2.10.1) |
| [tdunning/t-digest](https://github.com/tdunning/t-digest) | 3.2 | [t-digest-3.2](https://github.com/tdunning/t-digest/releases/tag/t-digest-3.2) |
| [HdrHistogram/HdrHistogram](https://github.com/HdrHistogram/HdrHistogram) | 2.1.9 | [HdrHistogram-2.1.9](https://github.com/HdrHistogram/HdrHistogram/releases/tag/HdrHistogram-2.1.9) |
| [locationtech/spatial4j](https://github.com/locationtech/spatial4j) | 0,7 | [spatial4j-0.7](https://github.com/locationtech/spatial4j/releases/tag/spatial4j-0.7) |
| [locationtech/jts](https://github.com/locationtech/jts) | 1.15.0 | [jts-1.15.0](https://github.com/locationtech/jts/releases/tag/jts-1.15.0) |
| [apache/logging-log4j2](https://github.com/apache/logging-log4j2) | 2,11 | [log4j-2.11.0](https://github.com/apache/logging-log4j2/releases/tag/log4j-2.11.0) |

## Pour aller plus loin

- « [À propos de votre profil](/articles/about-your-profile) »
