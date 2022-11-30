---
title: Informationen zur SSH
intro: 'Mithilfe des SSH-Protokolls kannst du eine Verbindung herstellen und dich bei Remoteservern und -diensten authentifizieren. Mit SSH-Schlüsseln kannst du dich mit {% data variables.product.product_name %} verbinden, ohne bei jedem Besuch deinen Benutzernamen und {% data variables.product.pat_generic %} eingeben zu müssen.{% ifversion ssh-commit-verification %} Du kannst einen SSH-Schlüssel auch zum Signieren von Commits verwenden.{% endif %}'
redirect_from:
  - /articles/about-ssh
  - /github/authenticating-to-github/about-ssh
  - /github/authenticating-to-github/connecting-to-github-with-ssh/about-ssh
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: 51a72821217e5d47092ed77e923b38f4cf248010
ms.sourcegitcommit: a0ad3bfe2a99c3092e76ca9b3d476cf30988ca55
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118979'
---
{% data reusables.ssh.about-ssh %} Weitere Informationen zu SSH findest du unter [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell) in Wikipedia.

Wenn du SSH einrichtest, musst du einen neuen privaten SSH-Schlüssel generieren und dem SSH-Agent hinzufügen. Du musst den öffentlichen SSH-Schlüssel außerdem deinem Konto auf {% data variables.product.product_name %} hinzufügen, bevor du den Schlüssel zur Authentifizierung{% ifversion ssh-commit-verification %} oder zum Signieren von Commits{% endif %} verwenden kannst. Weitere Informationen findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen zum SSH-Agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent){% ifversion ssh-commit-verification %}, {% else %} und{% endif %} [Hinzufügen eines neuen SSH-Schlüssels zu deinem {% data variables.product.prodname_dotcom %}-Konto](/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account){% ifversion ssh-commit-verification %} und [Informationen zur Verifizierung einer Commitsignatur](/articles/about-commit-signature-verification){% endif %}.

Du kannst deinen SSH-Schlüssel weiter sichern, indem du einen Hardwaresicherheitsschlüssel verwendest, der den physischen Hardwaresicherheitsschlüssel erfordert, der an deinen Computer angefügt werden muss, wenn das Schlüsselpaar zur Authentifizierung mit SSH verwendet wird. Du kannst deinen SSH-Schlüssel auch sichern, indem du den SSH-Agent hinzufügst und eine Passphrase verwendest. Weitere Informationen findest du unter [Verwenden von Passphrasen für SSH-Schlüssel](/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases).

{% ifversion fpt or ghec %}Um deinen SSH-Schlüssel mit einem Repository zu verwenden, das im Besitz einer Organisation ist, die SAML SSO verwendet, musst du den Schlüssel zuerst autorisieren. Weitere Informationen findest du unter „[Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML SSO](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}“ in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}{% endif %}

Um die Kontosicherheit aufrechtzuerhalten, kannst du ihre SSH-Schlüsselliste regelmäßig überprüfen und alle Schlüssel sperren, die ungültig sind oder kompromittiert wurden. Weitere Informationen findest du unter [Überprüfen deiner SSH-Schlüssel](/github/authenticating-to-github/reviewing-your-ssh-keys).

{% ifversion fpt or ghec %} Wenn du deinen SSH-Schlüssel ein Jahr lang nicht benutzt hast, wird {% data variables.product.prodname_dotcom %} deinen inaktiven SSH-Schlüssel aus Sicherheitsgründen automatisch löschen. Weitere Informationen findest du unter „[Gelöschte oder fehlende SSH-Schlüssel](/articles/deleted-or-missing-ssh-keys)“.
{% endif %}

{% ifversion fpt %} Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können SSH-Zertifikate bereitstellen, die Mitglieder verwenden können, um auf die Repositorys dieser Organisation zuzugreifen, ohne das Zertifikat zu ihrem Konto in {% data variables.product.product_name %} hinzuzufügen. Wenn du ein SSH-Zertifikat verwendest, kannst du das Zertifikat nicht verwenden, um auf Forks der Repositorys der Organisation zuzugreifen, wenn die Fork im Besitz deines persönlichen Kontos ist. Weitere Informationen findest du unter „[Informationen zu SSH-Zertifikats-Autorisierungsstellen](/enterprise-cloud@latest/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)“ in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.
{% else ghec or ghes or ghae %} Wenn du Mitglied einer Organisation bist, die SSH-Zertifikate bereitstellt, kannst du mit deinem Zertifikat auf die Repositorys dieser Organisation zugreifen, ohne das Zertifikat zu deinem Konto in {% data variables.product.product_name %} hinzuzufügen. Du kannst dein Zertifikat nicht verwenden, um auf Forks der Repositorys der Organisation zuzugreifen, wenn die Forks im Besitz deines persönlichen Kontos sind. Weitere Informationen findest du unter [Informationen zu SSH-Zertifizierungsstellen](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities).
{% endif %}
## Weitere Informationsquellen

- „[Fehlerbehebung bei der SSH](/articles/troubleshooting-ssh)“
