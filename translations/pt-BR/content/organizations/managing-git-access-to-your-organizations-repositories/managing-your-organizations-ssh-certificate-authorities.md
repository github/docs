---
title: Gerenciar autoridades certificadas de SSH da organização
intro: Você pode adicionar ou excluir autoridades certificadas de SSH da organização.
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
shortTitle: Manage SSH authorities
permissions: Organization owners can manage an organization's SSH certificate authorities (CA).
ms.openlocfilehash: d2f5b946e854accd68a3e6293f8e384996a261d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886835'
---
Você pode permitir que os integrantes acessem os repositórios da organização com certificados SSH fornecidos por você, adicionando um CA SSH à organização. {% data reusables.organizations.can-require-ssh-cert %} Para obter mais informações, confira "[Sobre as autoridades de certificação SSH](/articles/about-ssh-certificate-authorities)".

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## Adicionar uma autoridade certificada de SSH

Se você precisar de certificados SSH para sua empresa, os integrantes da empresa deverão usar um URL especial para operações do Git por meio do SSH. Para obter mais informações, confira "[Sobre as autoridades de certificado SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)".

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

## Excluir uma autoridade certificada de SSH

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.delete-ssh-ca %}
