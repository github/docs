---
title: Administración de la comprobación de GPG para GitHub Codespaces
intro: 'Puedes permitir que {% data variables.product.company_short %} utilice automáticamente GPG para firmar las confirmaciones que haces en tus codespaces para que otras personas puedan tener la confianza de que los cambios vienen de una fuente confiable.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167105'
---
Después de habilitar la comprobación de GPG, {% data variables.product.company_short %} firmará automáticamente las confirmaciones que hagas en {% data variables.product.prodname_github_codespaces %} y estas tendrán un estado verificado en {% data variables.product.product_name %}. Predeterminadamente, la verificación GPG se encuentra inhabilitada para los codespaces que creas. Puedes elegir permitir la verificación de GPG para todos los repositorios o para repositorios específicos. Habilita la verificación GPG únicamente para los repositorios en los cuales confías. Para más información sobre las confirmaciones firmadas por {% data variables.product.product_name %}, vea "[Acerca de la comprobación de firma de confirmación](/github/authenticating-to-github/about-commit-signature-verification)".

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**Nota:** Si has vinculado un repositorio de dotfiles con {% data variables.product.prodname_github_codespaces %}, la configuración de Git en los dotfiles puede entrar en conflicto con la configuración que {% data variables.product.prodname_github_codespaces %} requiere para firmar confirmaciones. Para más información, consulta: "[Solución de problemas de la comprobación de GPG para {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)."

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Debajo de "verificación GPG", selecciona la configuración que quieras para la verificación de GPG.
  ![Botones de radio para administrar la comprobación de GPG](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Si eliges "Repositorios seleccionados"; selecciona el menú desplegable y luego haz clic en el repositorio para el cual quieras habilitar la verificación de GPG. Repite esto para todos los repositorios en los cuales quieras habilitar la verificación GPG.
  ![Menú desplegable "Repositorios seleccionados"](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


Una vez que hayas habilitado la comprobación de GPG para {% data variables.product.prodname_github_codespaces %}, todas las confirmaciones se firman de forma predeterminada en los espacios de código.
