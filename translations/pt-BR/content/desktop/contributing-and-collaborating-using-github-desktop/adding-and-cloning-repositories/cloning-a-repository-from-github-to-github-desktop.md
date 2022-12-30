---
title: Clonar um repositório do GitHub para o GitHub Desktop
intro: 'É possível usar o {% data variables.product.prodname_dotcom %} a fim de clonar repositórios remote para o {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-a-repository-from-github-to-github-desktop
versions:
  fpt: '*'
shortTitle: Clone a GitHub repo
ms.openlocfilehash: ba4ddcc8c3d95454ab06cac0293162e2fe01fe32
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095190'
---
{% tip %}

**Dica:** use também o {% data variables.product.prodname_desktop %} para clonar repositórios existentes no {% data variables.product.prodname_dotcom %}.  Para obter mais informações, confira "[Como clonar um repositório do {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)".

{% endtip %}

{% mac %}

1. Entre no {% data variables.product.product_location %} e no {% data variables.product.prodname_desktop %} antes de começar a clonar.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Clique em **Escolher…** e, usando a janela Localizador, procure um caminho local em que deseja clonar o repositório.
![Botão Escolher na guia URL](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **Observação:** se o repositório estiver configurado para usar o LFS, você precisará inicializar o {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Clique em **Clonar**.
![Botão Clonar na guia URL](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Entre no {% data variables.product.product_location %} e no {% data variables.product.prodname_desktop %} antes de começar a clonar.
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.open-with-github-desktop %}
5. Clique em **Escolher…** e, usando o Windows Explorer, procure um caminho local em que deseja clonar o repositório.
![Botão Escolher](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **Observação:** se o repositório estiver configurado para usar o LFS, você precisará inicializar o {% data variables.large_files.product_name_short %}.

  {% endnote %}

5. Clique em **Clonar**.
![Botão Clonar](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
