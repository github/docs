---
title: Informationen zu SSH
intro: 'Mithilfe des SSH-Protokolls kannst Du eine Verbindung herstellen und Dich bei Remote-Servern und -Diensten authentifizieren. With SSH keys, you can connect to {% data variables.product.product_name %} without supplying your username and personal access token at each visit.'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Wenn Sie die SSH einrichten, [generieren Sie einen SSH-Schlüssel und fügen ihn zu ssh-agent hinzu](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Dann [fügen Sie den Schlüssel zu Ihrem {% data variables.product.product_name %}-Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account). Durch das Hinzufügen des SSH-Schlüssels zum SSH-Agenten wird sichergestellt, dass Dein SSH-Schlüssel durch die Verwendung einer Passphrase eine zusätzliche Sicherheitsebene hat. Weitere Informationen findest Du unter „[SSH-Schlüssel-Passphrasen verwenden](/articles/working-with-ssh-key-passphrases).“

{% if currentVersion == "free-pro-team@latest" %}To use your SSH key with a repository owned by an organization that uses SAML single sign-on, you'll need to authorize it first. Weitere Informationen findest Du unter „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“.{% endif %}

Du solltest regelmäßig [Deine Liste mit SSH-Schlüsseln überprüfen](/articles/reviewing-your-ssh-keys) und ungültige oder kompromittierte Schlüssel widerrufen.

{% if currentVersion == "free-pro-team@latest" %}
If you haven't used your SSH key for a year, then
{% data variables.product.prodname_dotcom %} will automatically delete your inactive SSH key as a security precaution. Weitere Informationen findest Du unter „[Gelöschte oder fehlende SSH-Schlüssel](/articles/deleted-or-missing-ssh-keys).“
{% endif %}

Wenn Sie Mitglied einer Organisation sind, die SSH-Zertifikate bereitstellt, können Sie mit Ihrem Zertifikat auf die Repositorys dieser Organisation zugreifen, ohne das Zertifikat zu Ihrem {% data variables.product.product_name %}-Konto hinzuzufügen. Weitere Informationen findest Du unter „[Informationen zu SSH-Zertifizierungsstellen](/articles/about-ssh-certificate-authorities).“

### Weiterführende Informationen

- „[Nach vorhandenen SSH-Schlüsseln suchen](/articles/checking-for-existing-ssh-keys)“
- „[SSH-Verbindung testen](/articles/testing-your-ssh-connection)“
- „[Mit SSH-Schlüssel-Passphrasen arbeiten](/articles/working-with-ssh-key-passphrases)“
- „[Fehlerbehebung bei SSH](/articles/troubleshooting-ssh)“
{%- if currentVersion == "free-pro-team@latest" %}
- „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single-Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“
{%- endif %}
