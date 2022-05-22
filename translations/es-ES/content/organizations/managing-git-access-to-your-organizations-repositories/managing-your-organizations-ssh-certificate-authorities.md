---
title: Administrar las autoridades de certificación SSH de tu organización
intro: Puedes agregar o eliminar autoridades de certificación SSH desde tu organización.
product: '{% data reusables.gated-features.ssh-certificate-authorities %}'
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Los propietarios de la organización pueden administrar autoridades de certificado (CA) SSH de la organización

Puedes permitir que los miembros accedan a los repositorios d ela organización mediante certificados SSH que brindas al agregar un CA SSH a tu organización. {% data reusables.organizations.can-require-ssh-cert %}Para obtener más información, consulta "[Acerca de las autoridades de certificados de SSH](/articles/about-ssh-certificate-authorities)".

### Agregar una autoridad de certificado de SSH

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### Eliminar una autoridad de certificado de SSH

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
