---
title: ユーザを検索する
intro: '{% data variables.product.product_name %} 上のユーザを検索できます。また、これらのユーザの検索修飾子の組み合わせを使って、結果を絞り込むことができます。'
redirect_from:
  - /articles/searching-users
  - /github/searching-for-information-on-github/searching-users
  - /github/searching-for-information-on-github/searching-on-github/searching-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: cf3af1837e398226bee7d926e5dae0fd437879c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139491'
---
{% data variables.product.product_name %} のユーザを幅広くグローバルに検索できます。 詳細については、「[{% data variables.product.company_short %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github)」を参照してください。

{% data reusables.search.syntax_tips %}

## ユーザまたは Organization に限られた検索

初期設定では、ユーザ検索は、個人および Organization の両方を表示します。 ただし、`type` 修飾子を使って、個人アカウントまたは Organization に限定して検索できます。

| 修飾子        | 例
| ------------- | -------------
| `type:user` | [**mike in:name created:&lt;2011-01-01 type:user**](https://github.com/search?q=mike+in:name+created%3A%3C2011-01-01+type%3Auser&type=Users) は、2011 年より前に作成された "mike" という名前の個人アカウントと一致します。
| `type:org` | [**data in:email type:org**](https://github.com/search?q=data+in%3Aemail+type%3Aorg&type=Users) は、Organization のメールの "data" という単語が一致します。

## アカウント名、フルネームやパブリックメールで検索

`user` や `org` 修飾子を使って、個人ユーザーや Organization のアカウント名で検索をフィルター処理できます。

`in` 修飾子によって、ユーザー名 (`login`)、フルネーム、パブリック メールやこれらの組み合わせに限定した検索ができます。 この修飾子を削除した場合、ユーザ名およびメールアドレスのみが検索されます。 プライバシー保護のため、メールアドレスのドメイン名では検索できないようになっています。

| 修飾子        | 例
| ------------- | -------------
| `user:name` | [**user:octocat**](https://github.com/search?q=user%3Aoctocat&type=Users) はユーザー名 "octocat" と一致します。
| `org:name` | [**org:electron type:users**](https://github.com/search?q=org%3Aelectron+type%3Ausers&type=Users) は Electron という Organization のアカウント名と一致します。
| `in:login` | [**kenya in:login**](https://github.com/search?q=kenya+in%3Alogin&type=Users) は、ユーザー名に "kenya" という単語が含まれるユーザーと一致します。
| `in:name` | [**bolton in:name**](https://github.com/search?q=bolton+in%3Afullname&type=Users) は、本名に "bolton" という単語が含まれているユーザーと一致します。
| `fullname:firstname lastname` | [**fullname:nat friedman**](https://github.com/search?q=fullname%3Anat+friedman&type=Users) は、完全な名前が "Nat Friedman" であるユーザーと一致します。 メモ: この修飾子は、スペース文字の有無を区別します。
| `in:email` | [**data in:email**](https://github.com/search?q=data+in%3Aemail&type=Users&utf8=%E2%9C%93) は、メールに "data" という単語が含まれるユーザーに一致します。

## ユーザが保有するリポジトリの数で検索

所有するリポジトリの数に基づいて、`repos` 修飾子と、[より大きい、より小さい、および範囲を指定する修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)を使ってユーザーをフィルター処理することができます。

| 修飾子        | 例
| ------------- | -------------
| <code>repos:<em>n</em></code> | [**repos:>9000**](https://github.com/search?q=repos%3A%3E%3D9000&type=Users) は、リポジトリ数が 9,000 を越えるユーザーに一致します。
| | [**bert repos:10..30**](https://github.com/search?q=bert+repos%3A10..30&type=Users) は、10 から 30 個のリポジトリを持ち、ユーザー名または本名に "bert" という単語が含まれているユーザーと一致します。

## 場所で検索

プロフィールに表示されている場所でユーザを検索できます。

| 修飾子        | 例
| ------------- | -------------
| <code>location:<em>LOCATION</em></code> | [**repos:1 location:iceland**](https://github.com/search?q=repos%3A1+location%3Aiceland&type=Users) は、アイスランドに住むリポジトリを 1 つだけ持つユーザーと一致します。

## リポジトリの言語で検索

`language` 修飾子を使うと所有しているリポジトリの言語に基づいてユーザーを検索できます。

| 修飾子        | 例
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:javascript location:russia**](https://github.com/search?q=language%3Ajavascript+location%3Arussia&type=Users) は、ロシアに住んでいて、大部分が JavaScript で記述されているリポジトリを所有しているユーザーに一致します。
| | [**jenny language:javascript in:fullname**](https://github.com/search?q=jenny+language%3Ajavascript+in%3Afullname&type=Users) は、完全な名前に "jenny" という単語が含まれていて、JavaScript のリポジトリを持つユーザーと一致します。

## ユーザー アカウントの作成時期で検索する

`created` 修飾子を使うと、{% data variables.product.product_name %} に参加した時期でユーザーをフィルター処理できます。 パラメータとして日付を採用しています。 {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 修飾子        | 例
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:<2011-01-01**](https://github.com/search?q=created%3A%3C2011-01-01&type=Users) は、2011 年より前に参加したユーザーと一致します。
| | [**created:>=2013-05-11**](https://github.com/search?q=created%3A%3E%3D2013-05-11&type=Users) は、2013 年 5 月 11 日以降に参加したユーザーと一致します。
| | [**created:2013-03-06 location:london**](https://github.com/search?q=created%3A2013-03-06+location%3Alondon&type=Users) は、2013 年 3 月 6 日に参加していて、その場所をロンドンと記入しているユーザーに一致します。
| | [**created:2010-01-01..2011-01-01 john in:login**](https://github.com/search?q=created%3A2010-01-01..2011-01-01+john+in%3Ausername&type=Users) は、2010 年から 2011 年の間に参加していて、ユーザー名に "john" という単語を含むユーザーに一致します。

## フォロワーの数の検索

フォロワーの数に基づいて、`followers` 修飾子と、[より大きい、より小さい、および範囲を指定する修飾子](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)を使ってユーザーをフィルター処理することができます。

| 修飾子        | 例
| ------------- | -------------
| <code>followers:<em>n</em></code> | [**followers:>=1000**](https://github.com/search?q=followers%3A%3E%3D1000&type=Users) は、1,000 人以上のフォロワーを持つユーザーと一致します。
| | [**sparkle followers:1..10**](https://github.com/search?q=sparkle+followers%3A1..10&type=Users) は、フォロワーの数が 1 から 10人で、名前に "sparkle"という名前を含むユーザーに一致します。

{% ifversion fpt or ghec %}

## スポンサーの能力に基づいて検索する

`is:sponsorable` 修飾子を使うと、{% data variables.product.prodname_sponsors %} でスポンサーになれるユーザーと Organization を検索できます。 詳細については、「[{% data variables.product.prodname_sponsors %} について](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)」を参照してください。

| 修飾子  | 例
| ------------- | -------------
| `is:sponsorable` | [**is:sponsorable**](https://github.com/search?q=is%3Asponsorable&type=Users) は、{% data variables.product.prodname_sponsors %} プロファイルを持つユーザーおよび Organization とマッチします。

{% endif %}

## 参考資料

- 「[検索結果をソートする](/search-github/getting-started-with-searching-on-github/sorting-search-results/)」
