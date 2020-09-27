---
title: Gerenciar autoridades certificadas de SSH da organização
intro: Você pode adicionar ou excluir autoridades certificadas de SSH da organização.
product: '{{ site.data.reusables.gated-features.ssh-certificate-authorities }}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

Proprietários da organização podem gerenciar as autoridades certificadas (CA, certificate authorities) de SSH da organização.

Você pode permitir que os integrantes acessem os repositórios da organização com certificados SSH fornecidos por você, adicionando um CA SSH à organização. {{ site.data.reusables.organizations.can-require-ssh-cert }} Para obter mais informações, consulte "[Sobre autoridades certificadas de SSH](/articles/about-ssh-certificate-authorities)".

### Adicionar uma autoridade certificada de SSH

{{ site.data.reusables.organizations.add-extension-to-cert }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.new-ssh-ca }}
{{ site.data.reusables.organizations.require-ssh-cert }}

### Excluir uma autoridade certificada de SSH

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.delete-ssh-ca }}
