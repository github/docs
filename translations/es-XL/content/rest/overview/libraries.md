---
title: Bibliotecas
intro: 'Puedes utilizar la biblioteca oficial de Octokit y otras bibliotecas de terceros para extender y simplificar cómo utilizas la API de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /libraries/
  - /v3/libraries
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

<div class="jumbotron libraries-jumbotron">
  <img src="/assets/images/gundamcat.png" class="gundamcat" alt="El Gundamcat" />
  <h1>Octokit tiene <br />
  muchos sabores</h1>
  <p class="lead">Utiliza la biblioteca oficial de Octokit, o elige entre cualquiera de las bibliotecas de terceros disponibles.</p>
  <div class="octokit-links">
    <div class="octokit-language"><span>Ruby</span> <a href="https://github.com/octokit/octokit.rb">octokit.rb</a></div>
    <div class="octokit-language"><span>.NET</span> <a href="https://github.com/octokit/octokit.net">octokit.net</a></div>
    <div class="octokit-language"><span>JavaScript</span> <a href="https://github.com/octokit/rest.js">octokit/rest.js</a></div>
  </div>
</div>

# Bibliotecas de terceros

### Clojure

* [Tentacles][tentacles]

### Dart

* [github.dart][github.dart]

### Emacs Lisp

* [gh.el][gh.el]

### Erlang

* [octo.erl][octo-erl]

### Go

* [go-github][]

### Haskell

* [github][haskell-github]

### Java

* La biblioteca de la [API de Java de GitHub (org.eclipse.egit.github.core)](https://github.com/eclipse/egit-github/tree/master/org.eclipse.egit.github.core) es parte del [Conector Mylyn de GitHub](https://github.com/eclipse/egit-github) y pretende ser compatible integralmente para la API v3 de GitHub.  Las compilaciones se encuentran disponibles en la [Central Maven](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22org.eclipse.egit.github.core%22).
* La [API de GitHub para Java (org.koshuke.github)](http://github-api.kohsuke.org/) define una representación orientada a objetos de la API de GitHub.
* La [API de GitHub JCabi](http://github.jcabi.com) se basa en la API de JSON para Java7 (JSR-353) y simplifica las pruebas con un talón de GitHub para el tiempo de ejecución, y abarca toda la API.

### JavaScript

* [Biblioteca de NodeJS de GitHub][octonode]
* [programa de seguridad gh3 de la API v3 de lado del cliente][gh3]
* [Programa de seguridad de GitHub.js al rededor de la API de GitHub][github]
* [Biblioteca de CoffeeScript basada en promesas para el buscador o para NodeJS][github-client]

### Julia

* [GitHub.jl][github.jl]

### OCaml

* [ocaml-github][ocaml-github]

### Perl

* [Pithub][pithub-github] ([CPAN][pithub-cpan])
* [Net::GitHub][net-github-github] ([CPAN][net-github-cpan])

### PHP

* [GitHub PHP Client][github-php-client]
* [PHP GitHub API][php-github-api]
* [GitHub API][github-api]
* [Paquete de Joomla! Package][joomla]
* [Extensión de Github Nette][kdyby-github]
* [GitHub API Easy Access][milo-github-api]
* [Puente de GitHub para Laravel][github-laravel]
* [Programa de seguridad PHP5.6|PHP7 para Cliente & Webhook][flexyproject-githubapi]

### Python

* [PyGithub][jacquev6_pygithub]
* [libsaas][libsaas]
* [github3.py][github3py]
* [sanction][sanction]
* [agithub][agithub]
* [octohub][octohub]
* [Github-Flask][github-flask]
* [torngithub][torngithub]

### Ruby

* [Gema de la API de GitHub][ghapi]
* [Ghee][ghee]

### Scala

* [Hubcat][hubcat]
* [Github4s][github4s]

### Shell

* [ok.sh][ok.sh]

[tentacles]: https://github.com/Raynes/tentacles

[github.dart]: https://github.com/DirectMyFile/github.dart

[gh.el]: https://github.com/sigma/gh.el

[octo-erl]: https://github.com/sdepold/octo.erl

[go-github]: https://github.com/google/go-github

[haskell-github]: https://github.com/fpco/GitHub

[octonode]: https://github.com/pksunkara/octonode
[gh3]: https://github.com/k33g/gh3
[github]: https://github.com/michael/github
[github-client]: https://github.com/philschatz/github-client

[github.jl]: https://github.com/WestleyArgentum/GitHub.jl

[ocaml-github]: https://github.com/mirage/ocaml-github

[net-github-github]: https://github.com/fayland/perl-net-github
[net-github-cpan]: https://metacpan.org/pod/Net::GitHub
[pithub-github]: https://github.com/plu/Pithub
[pithub-cpan]: http://metacpan.org/module/Pithub

[github-php-client]: https://github.com/tan-tan-kanarek/github-php-client
[php-github-api]: https://github.com/KnpLabs/php-github-api
[github-api]: https://github.com/yiiext/github-api
[joomla]: https://github.com/joomla-framework/github-api
[kdyby-github]: https://github.com/kdyby/github
[milo-github-api]: https://github.com/milo/github-api
[github-laravel]: https://github.com/GrahamCampbell/Laravel-GitHub
[flexyproject-githubapi]: https://github.com/FlexyProject/GitHubAPI

[jacquev6_pygithub]: https://github.com/PyGithub/PyGithub
[libsaas]: https://github.com/ducksboard/libsaas
[github3py]: https://github.com/sigmavirus24/github3.py
[sanction]: https://github.com/demianbrecht/sanction
[agithub]: https://github.com/jpaugh/agithub "Agnostic GitHub"
[octohub]: https://github.com/turnkeylinux/octohub
[github-flask]: http://github-flask.readthedocs.org
[torngithub]: https://github.com/jkeylu/torngithub

[ghapi]: https://github.com/peter-murach/github
[ghee]: https://github.com/rauhryan/ghee

[hubcat]: https://github.com/softprops/hubcat
[github4s]: https://github.com/47deg/github4s

[ok.sh]: https://github.com/whiteinge/ok.sh
