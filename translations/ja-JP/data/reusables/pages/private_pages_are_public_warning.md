{% warning %}

**警告**: {% ifversion ghes or ghae %}サイト管理者がPublic Pagesを有効化したなら、{% endif %}{% data variables.product.prodname_pages %}サイトは{% ifversion fpt %}デフォルトで{% endif %}、サイトのリポジトリがプライベートもしくはインターナルであっても、インターネット上で公開利用できます。{% ifversion fpt %}{% data reusables.pages.about-private-publishing %}そうでない場合は、もし{% else %}もし{% endif %}センシティブなデータがサイトのリポジトリにあるなら、公開前にそのデータを削除しておくとよいでしょう。 For more information, see{% ifversion ghes or ghae %} "[Configuring {% data variables.product.prodname_pages %} for your enterprise](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" and{% endif %} "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility){% ifversion fpt %}" and "[Changing the visibility of your {% data variables.product.prodname_pages %} site](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."{% else %}."{% endif %}

{% endwarning %}
