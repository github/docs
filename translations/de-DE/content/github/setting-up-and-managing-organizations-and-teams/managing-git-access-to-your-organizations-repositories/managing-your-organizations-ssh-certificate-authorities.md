---
title: SSH-Zertifizierungsstellen Deiner Organisation verwalten
intro: Du kannst SSH-Zertifizierungsstellen zu Deiner Organisation hinzufügen oder aus dieser entfernen.
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---
Organisationsinhaber können die SSH-Zertifizierungsstellen (CA) einer Organisation verwalten.

Du kannst festlegen, dass Mitglieder mithilfe der von Dir bereitgestellten SSH-Zertifikate auf die Repositorys Deiner Organisation zugreifen können, indem Du Deiner Organisation eine SSH-Zertifizierungsstelle hinzufügst. {% data reusables.organizations.can-require-ssh-cert %} Weitere Informationen findest Du unter „[Informationen zu SSH-Zertifizierungsstellen](/articles/about-ssh-certificate-authorities).“

### Eine SSH-Zertifizierungsstelle hinzufügen

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### Eine SSH-Zertifizierungsstelle löschen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
