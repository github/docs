---
title: Gestion des autorités de certification SSH de votre organisation
intro: Vous pouvez ajouter ou supprimer des autorités de certification SSH de votre organisation.
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128483'
---
Vous pouvez autoriser des membres à accéder aux dépôts de votre organisation avec des certificats SSH que vous fournissez, en ajoutant une autorité de certification SSH à votre organisation. {% data reusables.organizations.can-require-ssh-cert %} Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/articles/about-ssh-certificate-authorities) ».

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## Ajout d’une autorité de certification SSH

Si vous avez besoin de certificats SSH pour votre entreprise, les membres de l’entreprise doivent utiliser une URL spéciale pour les opérations Git sur SSH. Pour plus d’informations, consultez « [À propos des autorités de certification SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates) ».

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

## Suppression d’une autorité de certification SSH

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.delete-ssh-ca %}
