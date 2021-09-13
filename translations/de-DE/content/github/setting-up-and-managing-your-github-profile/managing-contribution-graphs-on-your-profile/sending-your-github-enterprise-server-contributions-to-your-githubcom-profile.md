---
title: GitHub Enterprise Server-Beiträge an Dein GitHub.com-Profil senden
intro: 'Sie können Ihre Arbeiten auf {% data variables.product.prodname_ghe_server %} hervorheben, indem Sie die Anzahl Ihrer Beiträge an Ihr {% data variables.product.prodname_dotcom_the_website %}-Profil senden.'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile/
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Profiles
---

{% note %}

**Hinweise:**
- Für die Verbindung zwischen Deinen Konten gilt die <a href="/articles/github-privacy-statement/" class="dotcom-only">GitHub-Datenschutzerklärung</a>. Benutzer, die diese Verbindung aktivieren, stimmen den <a href="/articles/github-terms-of-service/" class="dotcom-only">Nutzungsbedingungen von GitHub</a> zu.

- Um Ihr {% data variables.product.prodname_ghe_server %}-Profil mit Ihrem {% data variables.product.prodname_dotcom_the_website %}-Profil verbinden zu können, muss ein Websiteadministrator {% data variables.product.prodname_github_connect %} und den Beitragsaustausch zwischen den Umgebungen aktivieren. Weitere Informationen erhältst Du von Deinem {% data variables.product.prodname_ghe_server %}-Websiteadministrator.

{% endnote %}

Ihr {% data variables.product.prodname_dotcom_the_website %}-Profil zeigt die Anzahl Ihrer {% data variables.product.prodname_ghe_server %}-Beiträge der letzten 90 Tage an. Die {% data reusables.github-connect.sync-frequency %}-Anzahl Ihrer Beiträge aus {% data variables.product.prodname_ghe_server %} wird unter Ihren privaten Beiträgen erfasst. Die Commit-Details enthalten nur die Beitragszähler und die Information, dass diese Beiträge auf {% data variables.product.prodname_ghe_server %} erfolgt sind.

Endbenutzer von {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_dotcom_the_website %} können ihre privaten Beitragszahlen veröffentlichen. Weitere Informationen findest Du unter „[Private Beiträge in Deinem Profil veröffentlichen oder verbergen](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/).“

Weitere Informationen zur Berechnung der Beitragszahlen findest Du unter „[Beteiligungsdiagramme in Deinem Profil verwalten](/articles/managing-contribution-graphs-on-your-profile/).“

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.github-connect.access-profile-settings %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
6. Aktivieren Sie unter „Contributions“ (Beiträge) das Kontrollkästchen **Send my contribution counts to {% data variables.product.prodname_dotcom_the_website %}** (Anzahl meiner Beiträge an {% data variables.product.prodname_dotcom_the_website %} senden), und klicken Sie auf **Update contributions** (Beiträge aktualisieren). ![Kontrollkästchen „Send my contribution counts...“ (Anzahl meiner Beiträge senden) und Schaltfläche „Update contributions“ (Beiträge aktualisieren)](/assets/images/help/settings/send-and-update-contributions.png)
