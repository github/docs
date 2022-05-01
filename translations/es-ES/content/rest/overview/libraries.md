---
title: Bibliotecas
intro: 'Puedes utilizar la librería oficial de Octokit y otras librerías de terceros para extender y simplificar la forma en que usas la API de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}.'
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
  <img src="/assets/images/gundamcat.png" class="gundamcat" alt="El Gundamcat" />
  <h1>El Octokit tiene muchos sabores</h1>
  <p class="lead">Utiliza la biblioteca oficial de Octokit, o elige entre cualquiera de las bibliotecas de terceros disponibles.</p>
  <div class="octokit-links"><br/>
     <div class="octokit-language"><span>Ruby → </span><a href="https://github.com/octokit/octokit.rb">octokit.rb</a></div><br/>
     <div class="octokit-language"><span>.NET → </span> <a href="https://github.com/octokit/octokit.net">octokit.net</a></div><br/>
     <div class="octokit-language"><span>JavaScript → </span> <a href="https://github.com/octokit/octokit.js">octokit/octokit.js</a></div><br/>
  </div>
</div>

{% warning %}

Advertencia: Desde la segunda mitad de octubre del 2021, ya no se están manteniendo las librerías oficiales de Octokit. Para obtener más información, consulta [este debate en el repositorio de octokit.js](https://github.com/octokit/octokit.js/discussions/620).

{% endwarning %}

# Librería de terceros

### Clojure

| Nombre de la librería | Repositorio                                             |
| --------------------- | ------------------------------------------------------- |
| **Tentacles**         | [Raynes/tentacles](https://github.com/Raynes/tentacles) |

### Dart

| Nombre de la librería | Repositorio                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| **github.dart**       | [DirectMyFile/github.dart](https://github.com/DirectMyFile/github.dart) |

### Emacs Lisp

| Nombre de la librería | Repositorio                                   |
| --------------------- | --------------------------------------------- |
| **gh.el**             | [sigma/gh.el](https://github.com/sigma/gh.el) |

### Erlang

| Nombre de la librería | Repositorio                                             |
| --------------------- | ------------------------------------------------------- |
| **octo-erl**          | [sdepold/octo.erl](https://github.com/sdepold/octo.erl) |

### Go

| Nombre de la librería | Repositorio                                             |
| --------------------- | ------------------------------------------------------- |
| **go-github**         | [google/go-github](https://github.com/google/go-github) |

### Haskell

| Nombre de la librería | Repositorio                                   |
| --------------------- | --------------------------------------------- |
| **haskell-github**    | [fpco/Github](https://github.com/fpco/GitHub) |

### Java

| Nombre de la librería        | Repositorio                                                             | Más información                                                                                                                           |
| ---------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **API de GitHub para Java**  | [org.kohsuke.github (Desde github-api)](http://github-api.kohsuke.org/) | define una representación orientada a objetos de la API de GitHub.                                                                        |
| **API de GitHub para JCabi** | [github.jcabi.com (Sitio web personal)](http://github.jcabi.com)        | se basa en la API de JSON para Java7 (HSR-353), simplifica pruebas con una muestra del tiempo de ejecución de GitHub y cubre toda la API. |

### JavaScript

| Nombre de la librería                                                     | Repositorio                                                             |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| **Biblioteca de NodeJS de GitHub**                                        | [pksunkara/octonode](https://github.com/pksunkara/octonode)             |
| **programa de seguridad gh3 de la API v3 de lado del cliente**            | [k33g/gh3](https://github.com/k33g/gh3)                                 |
| **El wrapper de Github.js sobre la API de GitHub**                        | [michael/github](https://github.com/michael/github)                     |
| **Librería de CoffeeScript basada en Promise para el buscador de NodeJS** | [philschatz/github-client](https://github.com/philschatz/github-client) |

### Julia

| Nombre de la librería | Repositorio                                                 |
| --------------------- | ----------------------------------------------------------- |
| **GitHub.jl**         | [JuliaWeb/GitHub.jl](https://github.com/JuliaWeb/GitHub.jl) |

### OCaml

| Nombre de la librería | Repositorio                                                   |
| --------------------- | ------------------------------------------------------------- |
| **ocaml-github**      | [mirage/ocaml-github](https://github.com/mirage/ocaml-github) |

### Perl

| Nombre de la librería | Repositorio                                                           | sitio web de metacpan para la librería                  |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------- |
| **Pithub**            | [plu/Pithub](https://github.com/plu/Pithub)                           | [Pithub CPAN](http://metacpan.org/module/Pithub)        |
| **Net::GitHub**       | [fayland/perl-net-github](https://github.com/fayland/perl-net-github) | [Net:GitHub CPAN](https://metacpan.org/pod/Net::GitHub) |

### PHP

| Nombre de la librería              | Repositorio                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------- |
| **PHP GitHub API**                 | [KnpLabs/php-github-api](https://github.com/KnpLabs/php-github-api)               |
| **Paquete de Joomla! Para GitHub** | [joomla-framework/github-api](https://github.com/joomla-framework/github-api)     |
| **Puente de GitHub para Laravel**  | [GrahamCampbell/Laravel-GitHub](https://github.com/GrahamCampbell/Laravel-GitHub) |

### PowerShell

| Nombre de la librería   | Repositorio                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| **PowerShellForGitHub** | [microsoft/PowerShellForGitHub](https://github.com/microsoft/PowerShellForGitHub) |

### Python

| Nombre de la librería | Repositorio                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| **gidgethub**         | [brettcannon/gidgethub](https://github.com/brettcannon/gidgethub)      |
| **ghapi**             | [fastai/ghapi](https://github.com/fastai/ghapi)                        |
| **PyGithub**          | [PyGithub/PyGithub](https://github.com/PyGithub/PyGithub)              |
| **libsaas**           | [duckboard/libsaas](https://github.com/ducksboard/libsaas)             |
| **github3.py**        | [sigmavirus24/github3.py](https://github.com/sigmavirus24/github3.py)  |
| **sanction**          | [demianbrecht/sanction](https://github.com/demianbrecht/sanction)      |
| **agithub**           | [jpaugh/agithub](https://github.com/jpaugh/agithub)                    |
| **octohub**           | [turnkeylinux/octohub](https://github.com/turnkeylinux/octohub)        |
| **github-flask**      | [github-flask (Official Website)](http://github-flask.readthedocs.org) |
| **torngithub**        | [jkeylu/torngithub](https://github.com/jkeylu/torngithub)              |

### Ruby

| Nombre de la librería        | Repositorio                                                   |
| ---------------------------- | ------------------------------------------------------------- |
| **Gema de la API de GitHub** | [peter-murach/github](https://github.com/peter-murach/github) |
| **Ghee**                     | [rauhryan/ghee](https://github.com/rauhryan/ghee)             |

### Rust

| Nombre de la librería | Repositorio                                                   |
| --------------------- | ------------------------------------------------------------- |
| **Octocrab**          | [XAMPPRocky/octocrab](https://github.com/XAMPPRocky/octocrab) |

### Scala

| Nombre de la librería | Repositorio                                             |
| --------------------- | ------------------------------------------------------- |
| **Hubcat**            | [softprops/hubcat](https://github.com/softprops/hubcat) |
| **Github4s**          | [47deg/github4s](https://github.com/47deg/github4s)     |

### Shell

| Nombre de la librería | Repositorio                                           |
| --------------------- | ----------------------------------------------------- |
| **ok.sh**             | [whiteinge/ok.sh](https://github.com/whiteinge/ok.sh) |
