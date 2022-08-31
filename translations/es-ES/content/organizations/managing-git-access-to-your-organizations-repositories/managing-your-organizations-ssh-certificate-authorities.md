---
title: Administrar las autoridades de certificación SSH de tu organización
intro: Puedes agregar o eliminar autoridades de certificación SSH desde tu organización.
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar las autoridades de SSH
permissions: Organization owners can manage an organization's SSH certificate authorities (CA).
---

Puedes permitir que los miembros accedan a los repositorios d ela organización mediante certificados SSH que brindas al agregar un CA SSH a tu organización. {% data reusables.organizations.can-require-ssh-cert %}Para obtener más información, consulta "[Acerca de las autoridades de certificados de SSH](/articles/about-ssh-certificate-authorities)".

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## Agregar una autoridad de certificado de SSH

Si requieres certificados SSH para tu empresa, los miembros empresariales deberán utilizar una URL especial para las operaciones de Git por SSH. Para obtener más información, consulta [Acerca de las autoridades de certificación de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

## Eliminar una autoridad de certificado de SSH

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.delete-ssh-ca %}
