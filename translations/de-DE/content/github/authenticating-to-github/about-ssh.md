---
title: Informationen zu SSH
intro: 'Mithilfe des SSH-Protokolls kannst Du eine Verbindung herstellen und Dich bei Remote-Servern und -Diensten authentifizieren. Mit SSH-Schlüsseln kannst Du Dich mit {% data variables.product.product_name %} verbinden, ohne jedes Mal Deinen Benutzernamen oder Dein Passwort angeben zu müssen.'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du SSH einrichtest, wirst Du [einen SSH-Schlüssel generieren und ihn dem SSH-Agenten hinzufügen](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). Danach [füge den Schlüssel zu Deinem {% data variables.product.product_name %}-Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account). Durch das Hinzufügen des SSH-Schlüssels zum SSH-Agenten wird sichergestellt, dass Dein SSH-Schlüssel durch die Verwendung einer Passphrase eine zusätzliche Sicherheitsebene hat. Weitere Informationen findest Du unter „[SSH-Schlüssel-Passphrasen verwenden](/articles/working-with-ssh-key-passphrases).“

{% if currentVersion == "free-pro-team@latest" %}Um Deinen SSH-Schlüssel in einem Repository zu verwenden, das sich im Besitz einer SAML Single Sign-On verwendenden Organisation befindet, musst Du ihn zuerst autorisieren. Weitere Informationen findest Du unter „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“.{% endif %}

Du solltest regelmäßig [Deine Liste mit SSH-Schlüsseln überprüfen](/articles/reviewing-your-ssh-keys) und ungültige oder kompromittierte Schlüssel widerrufen.

{% if currentVersion == "free-pro-team@latest" %}
Wenn Du Deinen SSH-Schlüssel seit einem Jahr nicht mehr verwendet hast, löscht {% data variables.product.prodname_dotcom %} aus Sicherheitsgründen automatisch Deinen inaktiven SSH-Schlüssel. Weitere Informationen findest Du unter „[Gelöschte oder fehlende SSH-Schlüssel](/articles/deleted-or-missing-ssh-keys).“
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Wenn Du Mitglied einer Organisation bist, die SSH-Zertifikate bereitstellt, kannst Du mit Deinem Zertifikat auf die Repositorys dieser Organisation zugreifen, ohne das Zertifikat zu Deinem {% data variables.product.product_name %}-Konto hinzuzufügen. Weitere Informationen findest Du unter „[Informationen zu SSH-Zertifizierungsstellen](/articles/about-ssh-certificate-authorities).“
{% endif %}

### Weiterführende Informationen

- „[Nach vorhandenen SSH-Schlüsseln suchen](/articles/checking-for-existing-ssh-keys)“
- „[SSH-Verbindung testen](/articles/testing-your-ssh-connection)“
- „[Mit SSH-Schlüssel-Passphrasen arbeiten](/articles/working-with-ssh-key-passphrases)“
- „[Fehlerbehebung bei SSH](/articles/troubleshooting-ssh)“
{%- if currentVersion == "free-pro-team@latest" %}
- „[Einen SSH-Schlüssel für die Verwendung in einer Organisation mit SAML Single-Sign-On autorisieren](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)“
{%- endif %}
