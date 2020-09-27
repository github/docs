---
title: SSH-Zertifizierungsstellen Deiner Organisation verwalten
intro: Du kannst SSH-Zertifizierungsstellen zu Deiner Organisation hinzufügen oder aus dieser entfernen.
product: '{{ site.data.reusables.gated-features.ssh-certificate-authorities }}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

Organisationsinhaber können die SSH-Zertifizierungsstellen (CA) einer Organisation verwalten.

Du kannst festlegen, dass Mitglieder mithilfe der von Dir bereitgestellten SSH-Zertifikate auf die Repositorys Deiner Organisation zugreifen können, indem Du Deiner Organisation eine SSH-Zertifizierungsstelle hinzufügst. {{ site.data.reusables.organizations.can-require-ssh-cert }} Weitere Informationen findest Du unter „[Informationen zu SSH-Zertifizierungsstellen](/articles/about-ssh-certificate-authorities).“

### Eine SSH-Zertifizierungsstelle hinzufügen

{{ site.data.reusables.organizations.add-extension-to-cert }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.new-ssh-ca }}
{{ site.data.reusables.organizations.require-ssh-cert }}

### Eine SSH-Zertifizierungsstelle löschen

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.delete-ssh-ca }}
