---
title: Administrar las autoridades de certificación SSH de tu organización
intro: Puedes agregar o eliminar autoridades de certificación SSH desde tu organización.
product: '{{ site.data.reusables.gated-features.ssh-certificate-authorities }}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.19'
---

Los propietarios de la organización pueden administrar autoridades de certificado (CA) SSH de la organización

Puedes permitir que los miembros accedan a los repositorios d ela organización mediante certificados SSH que brindas al agregar un CA SSH a tu organización. {{ site.data.reusables.organizations.can-require-ssh-cert }}Para obtener más información, consulta "[Acerca de las autoridades de certificados de SSH](/articles/about-ssh-certificate-authorities)".

### Agregar una autoridad de certificado de SSH

{{ site.data.reusables.organizations.add-extension-to-cert }}

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.new-ssh-ca }}
{{ site.data.reusables.organizations.require-ssh-cert }}

### Eliminar una autoridad de certificado de SSH

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.org_settings }}
{{ site.data.reusables.organizations.security }}
{{ site.data.reusables.organizations.delete-ssh-ca }}
