---
title: Sending enterprise contributions to your GitHub.com profile
intro: 'Sie können Ihre Arbeiten auf {% data variables.product.prodname_enterprise %} hervorheben, indem Sie die Anzahl Ihrer Beiträge an Ihr {% data variables.product.prodname_dotcom_the_website %}-Profil senden.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile/
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: next
topics:
  - Profiles
shortTitle: Send enterprise contributions
---

## About enterprise contributions on your {% data variables.product.prodname_dotcom_the_website %} profile

Your {% data variables.product.prodname_dotcom_the_website %} profile shows {% ifversion fpt %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae-next %}<!-- Remove condition entirely when toggling feature flag --> or {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} contribution counts from the past 90 days. Die {% data reusables.github-connect.sync-frequency %}-Anzahl Ihrer Beiträge aus {% data variables.product.prodname_enterprise %} wird unter Ihren privaten Beiträgen erfasst. The commit details will only show the contribution counts and that these contributions were made in a {% data variables.product.prodname_enterprise %} environment outside of {% data variables.product.prodname_dotcom_the_website %}.

You can decide whether to show counts for private contributions on your profile. Weitere Informationen findest Du unter „[Private Beiträge in Deinem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/).“

Weitere Informationen zur Berechnung der Beitragszahlen findest Du unter „[Beteiligungsdiagramme in Deinem Profil verwalten](/articles/managing-contribution-graphs-on-your-profile/).“

{% note %}

**Hinweise:**
- Für die Verbindung zwischen Deinen Konten gilt die <a href="/articles/github-privacy-statement/" class="dotcom-only">GitHub-Datenschutzerklärung</a>. Benutzer, die diese Verbindung aktivieren, stimmen den <a href="/articles/github-terms-of-service/" class="dotcom-only">Nutzungsbedingungen von GitHub</a> zu.

- Before you can connect your {% ifversion fpt %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae-next %}<!-- Remove condition entirely when toggling feature flag --> or {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} profile to your {% data variables.product.prodname_dotcom_the_website %} profile, your enterprise owner must enable {% data variables.product.prodname_github_connect %} and enable contribution sharing between the environments. For more information, contact your enterprise owner.

{% endnote %}

{% ifversion fpt or ghes or ghae %}

## Sending your enterprise contributions to your {% data variables.product.prodname_dotcom_the_website %} profile

{% ifversion fpt %}

- To send enterprise contributions from {% data variables.product.prodname_ghe_server %} to your {% data variables.product.prodname_dotcom_the_website %} profile, see "[Sending enterprise contributions to your {% data variables.product.prodname_dotcom_the_website %} profile](/enterprise-server/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)" in the {% data variables.product.prodname_ghe_server %} documentation.{% ifversion ghae-next %}<!-- Condition is within an fpt block; remove condition entirely when toggling feature flag -->
- To send enterprise contributions from {% data variables.product.prodname_ghe_managed %} to your {% data variables.product.prodname_dotcom_the_website %} profile, see "[Sending enterprise contributions to your {% data variables.product.prodname_dotcom_the_website %} profile](/github-ae@latest/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)" in the {% data variables.product.prodname_ghe_managed %} documentation.{% endif %}

{% elsif ghes %}

1. Sign in to {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_dotcom_the_website %}.
1. On {% data variables.product.prodname_ghe_server %}, in the upper-right corner of any page, click your profile photo, then click **Settings**. ![Symbol „Settings" (Einstellungen) auf der Benutzerleiste](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
1. Überprüfe die Ressourcen, auf welche {% data variables.product.prodname_ghe_server %} von Deinem {% data variables.product.prodname_dotcom_the_website %}-Konto zugreifen wird, dann klicke **Authorize** (Autorisieren). ![Autorisiere die Verbindung zwischen dem GitHub Enterprise Server und GitHub.com](/assets/images/help/settings/authorize-ghe-to-connect-to-dotcom.png)
{% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% elsif ghae %}

1. Sign in to {% data variables.product.prodname_ghe_managed %} and {% data variables.product.prodname_dotcom_the_website %}.
1. On {% data variables.product.prodname_ghe_managed %}, in the upper-right corner of any page, click your profile photo, then click **Settings**. ![Symbol „Settings" (Einstellungen) auf der Benutzerleiste](/assets/images/help/settings/userbar-account-settings.png)
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
{% data reusables.github-connect.send-contribution-counts-to-githubcom %}

{% endif %}

{% endif %}
