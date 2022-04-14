---
title: Organizationのプロフィールのカスタマイズ
intro: Organizationのプロフィールをカスタマイズすれば、Organizationの情報を共有できます。
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: Organizationのプロフィールのカスタマイズ
---

## OrganizationのプロフィールのREADMEについて

OrganizationのプロフィールのREADMEを作成することで、Organizationとの関わり方に関する情報を共有できます。 {% data variables.product.prodname_dotcom %}は、OrganizationのプロフィールのREADMEをOrgaizationの”Overview（概要）"タブに表示します。

OrganizationのプロフィールのREADMEにどういった情報を含めるかは選択できます。 以下は、OrganizationのプロフィールのREADMEにあると役立つかもしれない情報の例です。

- Organizationについて説明する"About"セクション
- Organization内で支援を受けるためのガイダンス

{% data variables.product.company_short %}フレーバーのMarkdownを使って、OrganizationのプロフィールのREADME内のテキストをフォーマットし、絵文字や画像、GIFを含めることができます。 詳細は「[{% data variables.product.prodname_dotcom %} で書き、フォーマットしてみる](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)」を参照してください。

## OrganizationプロフィールのREADMEの追加

1. Organizationがまだパブリックな`.github`リポジトリを持っていないなら、パブリックな`.github`リポジトリを作成してください。
2. Organizationの`.github`リポジトリ内で、`profile`フォルダに`README.md`ファイルを作成してください。
3. `README.md`ファイルへの変更をコミットしてください。 `README.md`の内容は、Organizationのプロフィールに表示されるようになります。
