---
title: Renomear um repositório
intro: Você poderá renomear um repositório se for proprietário da organização ou tiver permissões de administrador no repositório.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: d0067d96dce2f2cf9fe8bb2dd519668780d861ff
ms.sourcegitcommit: bd8b3e152f17d90acf222a0d50ba9595184c1f5f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111670'
---
Quando você renomear um repositório, todas as informações existentes, com exceção das URLs do site do projeto, serão automaticamente redirecionadas para o novo nome, incluindo:

* Problemas
* Wikis
* Estrelas
* Seguidores

Para obter mais informações sobre sites de projeto, confira "[Sobre o {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Além de redirecionar o tráfego da Web, todas as operações `git clone`, `git fetch` ou `git push` direcionadas ao local anterior continuarão funcionando como se fossem feitas no novo local. No entanto, para reduzir a confusão, recomendamos que a atualização de quaisquer clones locais existentes apontem para a nova URL do repositório. Faça isso usando `git remote` na linha de comando:

```shell
$ git remote set-url origin NEW_URL
```

Para obter mais informações, confira "[Como gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

{% ifversion fpt or ghec %}

Se você planeja renomear um repositório que tenha um site do {% data variables.product.prodname_pages %} , recomendamos usar um domínio personalizado para o seu site. Isso garante que a URL do site não seja impactada pela renomeação do repositório. Para obter mais informações, confira "[Sobre os domínios personalizados e o site do {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)". 

{% endif %}

{% note %}

**Observação:** o {% data variables.product.prodname_dotcom %} não redirecionará chamadas a uma ação hospedada por um repositório renomeado. Qualquer fluxo de trabalho que usa essa ação falhará com o erro `repository not found`. Em vez disso, crie um repositório e uma ação com o novo nome e arquive o repositório antigo. Para obter mais informações, confira "[Como arquivar repositórios](/repositories/archiving-a-github-repository/archiving-repositories)".

{% endnote %}

{% warning %}

**Aviso**: se você criar um repositório na sua conta no futuro, não reutilize o nome original do repositório renomeado. Se você reutilizar, redirecionamentos para o repositório renomeado não funcionarão mais.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sob o título **Nome do Repositório**, digite o novo nome do repositório.
   ![Renomeação do repositório](/assets/images/help/repository/repository-name-change.png)
4. Clique em **Renomear**. Pronto!
