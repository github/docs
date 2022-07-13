---
title: ライブラリ
intro: '公式のOctokitライブラリや、その他のサードパーティライブラリを使い、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIの使い方を拡張し、シンプルにすることができます。'
redirect_from:
  - /libraries
  - /v3/libraries
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
---

<div class="jumbotron libraries-jumbotron">
  <img src="/assets/images/gundamcat.png" class="gundamcat" alt="The Gundamcat" />
  <h1>Octokit にはいくつかの種類があります</h1>
  <p class="lead">公式の Octokit ライブラリを使用するか、利用可能なサードパーティライブラリのいずれかを選択します。</p>
  <div class="octokit-links"><br/>
     <div class="octokit-language"><span>Ruby → </span><a href="https://github.com/octokit/octokit.rb">octokit.rb</a></div><br/>
     <div class="octokit-language"><span>.NET → </span> <a href="https://github.com/octokit/octokit.net">octokit.net</a></div><br/>
     <div class="octokit-language"><span>JavaScript → </span> <a href="https://github.com/octokit/octokit.js">octokit/octokit.js</a></div><br/>
  </div>
</div>

# サードパーティライブラリ

### Clojure

| ライブラリ名        | リポジトリ                                                   |
| ------------- | ------------------------------------------------------- |
| **Tentacles** | [Raynes/tentacles](https://github.com/Raynes/tentacles) |

### Dart

| ライブラリ名          | リポジトリ                                                                   |
| --------------- | ----------------------------------------------------------------------- |
| **github.dart** | [SpinlockLabs/github.dart](https://github.com/SpinlockLabs/github.dart) |

### Emacs Lisp

| ライブラリ名    | リポジトリ                                         |
| --------- | --------------------------------------------- |
| **gh.el** | [sigma/gh.el](https://github.com/sigma/gh.el) |

### Erlang

| ライブラリ名       | リポジトリ                                                   |
| ------------ | ------------------------------------------------------- |
| **octo-erl** | [sdepold/octo.erl](https://github.com/sdepold/octo.erl) |

### Go

| ライブラリ名        | リポジトリ                                                   |
| ------------- | ------------------------------------------------------- |
| **go-github** | [google/go-github](https://github.com/google/go-github) |

### Haskell

| ライブラリ名             | リポジトリ                                         |
| ------------------ | --------------------------------------------- |
| **haskell-github** | [fpco/Github](https://github.com/fpco/GitHub) |

### Java

| ライブラリ名                  | リポジトリ                                                               | 詳細情報                                                               |
| ----------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **GitHub API for Java** | [org.kohsuke.github (github-apiより)](http://github-api.kohsuke.org/) | GitHub APIのオブジェクト指向の表現を定義。                                         |
| **JCabi GitHub API**    | [github.jcabi.com (個人Webサイト)](http://github.jcabi.com)              | Java7 JSON API (JSR-353)に基づき、ランタイムのGitHubスタブでテストをシンプルにし、API全体をカバー。 |

### JavaScript

| ライブラリ名                                                           | リポジトリ                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **NodeJS GitHub library**                                        | [pksunkara/octonode](https://github.com/pksunkara/octonode)             |
| **gh3 client-side API wrapper**                                  | [k33g/gh3](https://github.com/k33g/gh3)                                 |
| **Github.js wrapper around the GitHub API**                      | [michael/github](https://github.com/michael/github)                     |
| **Promise-Based CoffeeScript library for the Browser or NodeJS** | [philschatz/github-client](https://github.com/philschatz/github-client) |

### Julia

| ライブラリ名        | リポジトリ                                                       |
| ------------- | ----------------------------------------------------------- |
| **GitHub.jl** | [JuliaWeb/GitHub.jl](https://github.com/JuliaWeb/GitHub.jl) |

### OCaml

| ライブラリ名           | リポジトリ                                                         |
| ---------------- | ------------------------------------------------------------- |
| **ocaml-github** | [mirage/ocaml-github](https://github.com/mirage/ocaml-github) |

### Perl

| ライブラリ名          | リポジトリ                                                                 | ライブラリのmetacpan Webサイト                                   |
| --------------- | --------------------------------------------------------------------- | ------------------------------------------------------- |
| **Pithub**      | [plu/Pithub](https://github.com/plu/Pithub)                           | [Pithub CPAN](http://metacpan.org/module/Pithub)        |
| **Net::GitHub** | [fayland/perl-net-github](https://github.com/fayland/perl-net-github) | [Net:GitHub CPAN](https://metacpan.org/pod/Net::GitHub) |

### PHP

| ライブラリ名                        | リポジトリ                                                                             |
| ----------------------------- | --------------------------------------------------------------------------------- |
| **PHP GitHub API**            | [KnpLabs/php-github-api](https://github.com/KnpLabs/php-github-api)               |
| **GitHub Joomla! Package**    | [joomla-framework/github-api](https://github.com/joomla-framework/github-api)     |
| **GitHub bridge for Laravel** | [GrahamCampbell/Laravel-GitHub](https://github.com/GrahamCampbell/Laravel-GitHub) |

### PowerShell

| ライブラリ名                  | リポジトリ                                                                             |
| ----------------------- | --------------------------------------------------------------------------------- |
| **PowerShellForGitHub** | [microsoft/PowerShellForGitHub](https://github.com/microsoft/PowerShellForGitHub) |

### Python

| ライブラリ名           | リポジトリ                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| **gidgethub**    | [brettcannon/gidgethub](https://github.com/brettcannon/gidgethub)     |
| **ghapi**        | [fastai/ghapi](https://github.com/fastai/ghapi)                       |
| **PyGithub**     | [PyGithub/PyGithub](https://github.com/PyGithub/PyGithub)             |
| **libsaas**      | [duckboard/libsaas](https://github.com/ducksboard/libsaas)            |
| **github3.py**   | [sigmavirus24/github3.py](https://github.com/sigmavirus24/github3.py) |
| **sanction**     | [demianbrecht/sanction](https://github.com/demianbrecht/sanction)     |
| **agithub**      | [jpaugh/agithub](https://github.com/jpaugh/agithub)                   |
| **octohub**      | [turnkeylinux/octohub](https://github.com/turnkeylinux/octohub)       |
| **github-flask** | [github-flask (公式Webサイト)](http://github-flask.readthedocs.org)        |
| **torngithub**   | [jkeylu/torngithub](https://github.com/jkeylu/torngithub)             |

### Ruby

| ライブラリ名             | リポジトリ                                                         |
| ------------------ | ------------------------------------------------------------- |
| **GitHub API Gem** | [peter-murach/github](https://github.com/peter-murach/github) |
| **Ghee**           | [rauhryan/ghee](https://github.com/rauhryan/ghee)             |

### Rust

| ライブラリ名       | リポジトリ                                                             |
| ------------ | ----------------------------------------------------------------- |
| **Octocrab** | [XAMPPRocky/octocrab](https://github.com/XAMPPRocky/octocrab)     |
| **Octocat**  | [octocat-rs/octocat-rs](https://github.com/octocat-rs/octocat-rs) |

### Scala

| ライブラリ名       | リポジトリ                                                   |
| ------------ | ------------------------------------------------------- |
| **Hubcat**   | [softprops/hubcat](https://github.com/softprops/hubcat) |
| **Github4s** | [47deg/github4s](https://github.com/47deg/github4s)     |

### Shell

| ライブラリ名    | リポジトリ                                                 |
| --------- | ----------------------------------------------------- |
| **ok.sh** | [whiteinge/ok.sh](https://github.com/whiteinge/ok.sh) |
