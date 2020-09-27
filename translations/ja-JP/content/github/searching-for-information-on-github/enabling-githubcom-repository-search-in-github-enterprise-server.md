---
title: GitHub Enterprise Server で GitHub.com リポジトリの検索を有効化する
intro: '{{ site.data.variables.product.prodname_dotcom_the_website }} および {{ site.data.variables.product.prodname_ghe_server }} の個人アカウントに接続し、特定のプライベートな {{ site.data.variables.product.prodname_dotcom_the_website }} のリポジトリ内のコンテンツを {{ site.data.variables.product.prodname_ghe_server }} から検索できます。'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account/
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account/
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account/
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.variables.product.prodname_ghe_server }} および {{ site.data.variables.product.prodname_dotcom_the_website }} を使用しており、{{ site.data.variables.product.prodname_ghe_server }} のサイト管理者が {{ site.data.variables.product.prodname_github_connect }} および {{ site.data.variables.product.prodname_unified_search }} をプライベートリポジトリ向けに有効化している場合、接続された Organization で指定のプライベートリポジトリを検索できます。

検索結果でプライベートリポジトリを表示するには、それらのリポジトリへのアクセス権をすでに持っており、{{ site.data.variables.product.prodname_ghe_server }} および {{ site.data.variables.product.prodname_dotcom_the_website }} のアカウントを接続する必要があります。 検索できるリポジトリの詳細については、「[{{ site.data.variables.product.prodname_ghe_server }}と {{ site.data.variables.product.prodname_dotcom_the_website }}で同時に検索する](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)」を参照してください。

{{ site.data.reusables.github-connect.access-dotcom-and-enterprise }}
{{ site.data.reusables.github-connect.access-profile-settings }}
{{ site.data.reusables.github-connect.github-connect-tab-user-settings }}
{{ site.data.reusables.github-connect.connect-dotcom-and-enterprise }}
{{ site.data.reusables.github-connect.authorize-connection }}
