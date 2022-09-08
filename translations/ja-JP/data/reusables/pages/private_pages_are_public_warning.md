---
ms.openlocfilehash: c3e82ab5103e82750cfec55553865b4f874d4f8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145121598"
---
{% warning %}

{% ifversion fpt %} **警告**: {% data variables.product.prodname_pages %} サイトは、そのリポジトリがプライベートであってもインターネットからのアクセスに対して公開されます。 サイトのリポジトリにセンシティブなデータがあるなら、公開前にそのデータを取り除くのが良いでしょう。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)に関する説明を参照してください。
{% elsif ghec %} **警告**: エンタープライズが {% data variables.product.prodname_emus %} を使用しない限り、サイトのリポジトリがプライベートまたは内部であっても、{% data variables.product.prodname_pages %} サイトは既定でインターネット上で一般公開されます。 サイトのアクセス制御を管理することで、サイトをプライベートで公開できます。 それ以外の場合、サイトのリポジトリにセンシティブなデータがあるなら、公開前にそのデータを取り除くのが良いでしょう。 詳細については、「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」および「[{% data variables.product.prodname_pages %} サイトの可視性の変更](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)」を参照してください。
{% elsif ghae %} **警告**: {% data variables.product.prodname_pages %} サイトは、サイトのリポジトリがプライベートであっても、すべてのエンタープライズ メンバーに表示されます。 サイトのリポジトリにセンシティブなデータがあるなら、公開前にそのデータを取り除くのが良いでしょう。 詳細については、[リポジトリ](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)に関する説明を参照してください。
{% elsif ghes %} **警告**: サイト管理者がパブリック ページを有効にしている場合、サイトのリポジトリがプライベートまたは内部であっても、{% data variables.product.prodname_pages %} サイトはインターネット上で一般公開されます。 サイトのリポジトリにセンシティブなデータがあるなら、公開前にそのデータを取り除くのが良いでしょう。 詳細については、「[エンタープライズで {% data variables.product.prodname_pages %} を構成する](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)」および「[リポジトリについて](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)」を参照してください。
{% endif %}

{% endwarning %}
