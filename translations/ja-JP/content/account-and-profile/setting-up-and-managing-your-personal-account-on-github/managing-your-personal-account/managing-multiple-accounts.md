---
title: 複数のアカウントの管理
intro: '1 つのワークステーションを使用して {% data variables.product.product_location %} 上の複数のアカウントのプロジェクトにコントリビュートする場合は、Git 構成を変更してコントリビューション プロセスを簡略化できます。'
versions:
  feature: multiple-accounts-one-workstation
topics:
  - Accounts
  - Git
  - GitHub
shortTitle: Manage multiple accounts
ms.openlocfilehash: 3d1c31cb645d9f592121e955e07e8bf9ee473a82
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687245'
---
## 複数アカウントの管理について

場合によっては、{% data variables.product.product_location %} で複数のアカウントを使用する必要があります。 たとえば、オープン ソース コントリビューションの個人アカウントがあり、雇用主が Enterprise 内でユーザー アカウントを作成および管理することもできます。 

{% data variables.product.prodname_managed_user %} を使用して {% data variables.product.product_location %} のパブリック プロジェクトにコントリビュートすることはできません。そのため、個人アカウントを使用して、それらのリソースにコントリビュートする必要があります。 詳しくは、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% elsif ghec %}{% endif %}「[{% data variables.product.prodname_emus %} について]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#abilities-and-restrictions-of-managed-user-accounts)」を参照してください。

1 つのワークステーションを使用して両方のアカウントからコントリビュートする場合は、プロトコルの組み合わせを使用してリポジトリ データにアクセスするか、リポジトリごとに資格情報を使用することで、Git でのコントリビューションを簡略化できます。

{% warning %}

**警告**: 1 つのワークステーションを使用して 2 つの個別のアカウントにコントリビュートする場合は注意してください。 2 つ以上のアカウントを管理すると、内部コードを誤って一般に漏洩させる可能性が高くなる場合があります。

{% endwarning %}

{% data variables.product.prodname_managed_user %} を使用する必要がない場合、{% data variables.product.company_short %} では、{% data variables.product.product_location %} のすべての作業に 1 つの個人アカウントを使用することが推奨されます。 1 つの個人アカウントで、1 つの ID を使用して、個人、オープン ソース、または専門的なプロジェクトの組み合わせにコントリビュートできます。 他のユーザーは、個々のリポジトリと Organization で所有されるリポジトリの両方にコントリビュートするようにアカウントを招待でき、そのアカウントは複数の Organization または Enterprise のメンバーにすることができます。

## HTTPS と SSH を使用する 2 つのアカウントへのコントリビューション

1 つのワークステーションから 2 つのアカウントでコントリビュートする場合は、アカウントごとに異なるプロトコルと資格情報を使用してリポジトリにアクセスできます。 

Git では、HTTPS または SSH プロトコルのいずれかを使用して、{% data variables.product.product_location %} のリポジトリ内のデータにアクセスして更新できます。 リポジトリのクローンに使用するプロトコルによって、そのリポジトリにアクセスするときにワークステーションで認証に使用される資格情報が決まります。 アカウント管理に対するこのアプローチでは、HTTPS 接続に使用するために 1 つのアカウントの資格情報を格納し、SSH 接続に使用するために他のアカウントに SSH キーをアップロードします。

{% data variables.product.product_name %} でリポジトリをクローンするための HTTPS と SSH URL の両方を見つけることができます。 詳細については、「[リポジトリをクローンする](/repositories/creating-and-managing-repositories/cloning-a-repository)」を参照してください。

{% data variables.product.product_name %} のリポジトリにアクセスするための SSH の使用について詳しくは、「[SSH を使用した {% data variables.product.prodname_dotcom %} への接続](/authentication/connecting-to-github-with-ssh)」を参照してください。

## HTTPS と PAT を使用する複数のアカウントへのコントリビューション

両方のアカウントに HTTPS プロトコルを使用する場合は、リポジトリごとに異なる資格情報を格納するように Git を構成することで、アカウントごとに異なる個人用アクセス トークン (PAT) を使用することもできます。

{% mac %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %}
   - 出力が `osxkeychain` の場合、macOS キーチェーンを使用しています。 資格情報をクリアするには、次のコマンドを入力します。

     ```shell{:copy}
     git credential-osxkeychain erase https://github.com
     ```
   {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endmac %}

{% windows %}

1. Git Bash を開きます。
{% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %}
   - 出力が `wincred` の場合は、Windows Credential Manager を使用しています。 資格情報をクリアするには、次のコマンドを入力します。

     ```shell{:copy}
     cmdkey /delete:LegacyGeneric:target=git:https://github.com
     ```
{% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endwindows %}

{% linux %}

{% data reusables.git.open-terminal %} {% data reusables.git.confirm-credential-manager %} {% data reusables.git.clear-the-stored-credentials %} {% data reusables.git.no-credential-manager %} {% data reusables.git.clear-stored-gcm-credentials %} {% data reusables.git.cache-on-repository-path %} {% data reusables.accounts.create-personal-access-tokens %} {% data reusables.git.provide-credentials %}

{% endlinux %}

## SSH と `GIT_SSH_COMMAND` を使用する複数のアカウントへのコントリビューション

両方のアカウントに SSH プロトコルを使用する場合は、アカウントごとに異なる SSH キーを使用できます。 SSH の使用について詳しくは、「[SSH を使用した {% data variables.product.prodname_dotcom %} への接続](/authentication/connecting-to-github-with-ssh)」を参照してください。

ワークステーションにクローンする異なるリポジトリに別の SSH キーを使用するには、Git 操作用のシェル ラッパー関数を記述する必要があります。 この関数で以下の手順を行う必要があります。
1. `git config --get remote.origin.url` などのコマンドを使用して、所有者を含むリポジトリのフル ネームを特定します。
2. 認証用の正しい SSH キーを選びます。
3. 適宜、`GIT_SSH_COMMAND` を変更します。 `GIT_SSH_COMMAND` について詳しくは、Git ドキュメントの「[環境変数](https://git-scm.com/docs/git#Documentation/git.txt-codeGITSSHCOMMANDcode)」を参照してください。

たとえば、次のコマンドでは、{% data variables.product.product_location %} の **_OWNER_**/**_REPOSITORY_** という名前のリポジトリをクローンするために、認証に **_PATH/TO/KEY/FILE_** にある秘密キー ファイルを使用する SSH コマンドを指定するように `GIT_SSH_COMMAND` 環境変数を設定します。

<pre>
GIT_SSH_COMMAND='ssh -i <em>PATH/TO/KEY/FILE</em> -o IdentitiesOnly=yes' git clone git@github.com:<em>OWNER</em>/<em>REPOSITORY</em>
</pre>
