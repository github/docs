---
ms.openlocfilehash: abb4b47406958c1933c5c2bdf7d7e2e2c1091907
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184033"
---
1. Opcionalmente, para exigir que os membros usem certificados SSH, selecione **Exigir Certificados SSH** e clique em **Salvar**.
    ![Caixa de seleção Solicitar Certificado SSH e botão Salvar](/assets/images/help/organizations/require-ssh-cert.png)

   {% note %}

   **Nota:** quando você precisa de certificados SSH, o requisito não se aplica a integrações autorizadas de terceiros ou a recursos do {% data variables.product.prodname_dotcom %}, como {% data variables.product.prodname_actions %}{% ifversion fpt or ghec %} e {% data variables.product.prodname_codespaces %}{% endif %}, que são ambientes confiáveis dentro do ecossistema do {% data variables.product.prodname_dotcom %}.

   {% endnote %}
