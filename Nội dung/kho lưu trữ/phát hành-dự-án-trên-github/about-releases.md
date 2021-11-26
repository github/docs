---
title: About releases
intro: 'You can create a release to package software, along with release notes and links to binary files, for other people to use.'
redirect_from:
  - /articles/downloading-files-from-the-command-line/
  - /articles/downloading-files-with-curl/
  - /articles/about-releases
  - /articles/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/getting-the-download-count-for-your-releases
  - /github/administering-a-repository/about-releases
  - /github/administering-a-repository/releasing-projects-on-github/about-releases
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About releases

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-4974 %}
![An overview of releases](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png)
{% elsif ghes > 3.3 or ghae-issue-4972 %}
![An overview of releases](/assets/images/help/releases/releases-overview-with-contributors.png)
{% else %}
![An overview of releases](/assets/images/help/releases/releases-overview.png)
{% endif %}

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see {% ifversion fpt or ghae or ghes or ghec %}"[Viewing your subscriptions](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions){% else %}"[Watching and unwatching releases for a repository](/github/receiving-notifications-about-activity-on-github/watching-and-unwatching-releases-for-a-repository){% endif %}."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[Managing releases in a repository](/github/administering-a-repository/managing-releases-in-a-repository)."

{% ifversion fpt or ghec %}

You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[Automatically generated release notes](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."

People with admin permissions to a repository can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[Managing {% data variables.large_files.product_name_short %} objects in archives of your repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository)."
{% endif %}

{% ifversion fpt or ghec %}
If a release fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[About GitHub Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
{% endif %}

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[Releases](/rest/reference/repos#releases)."

{% ifversion fpt or ghec %}
## Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.
#include <iostream>
using namespace std;

int main(){

    int number;
    cout << "Hello World!" << endl;

    return 0;
}
/ code :              3X3O:Tomo.electro.intrgity/'hcore.hinpatsword/___________     ______
             -----  /¤¤¤¤¤\||`\\  | /____\
            //^^^^  |/"¤"\|||||\\ |¤|
            "/      ||   |||||||\\|!|
            "|      ||   |||---------------
            |\___ _-|\___/||||||/ """":""""
             '----'-\_____/||||/ /|||
                          |||_|/  |¿|_____
                                  |_\____/
    20S20S20S20S20S2OS2OS2OS2OS2OS
    os__z___₩___T___N___A___ç__20
    2o       | |__||\/||__|     0s
    2s      Electro.LTD\øJTH✔  o2
    ZS    --------------------  OZ
    ZSOZSOZSOZSOZSOZSOZSOZSOZSOZSO
 



 # THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.(TOMO.ELECTRO.LTD)# yarn lockfile v1"@ampproject/toolbox-core@^2.2.0", "@ampproject/toolbox-core@^2.5.0":  version "2.5.0"  resolved "https://registry.yarnpkg.com/@ampproject/toolbox-core/-/toolbox-core-2.5.0.tgz#8ea4575f1c0d0048e73f64bf7e5cfc8a8e5bd6ef"  integrity sha512-aQjE8wORKXJ2tLWHuevdSL31zhQdUhC+skyEhESBV/8eOzd7ROaOzR/F43bS7uAhnYta1G0Zd/HqofgN7LRSfw==  dependencies:    cross-fetch "3.0.4"    lru-cache "5.1.1""@ampproject/toolbox-optimizer@2.2.0":  version "2.2.0"  resolved "https://registry.yarnpkg.com/@ampproject/toolbox-optimizer/-/toolbox-optimizer-2.2.0.tgz#2438d7102beb1a74bae8d20926e038c5f724a8ae"  integrity sha512-lEujArv6jyl/mEab0uBZ25oMkf+kf8cpTuHPcy8k3+jtomNyVtd94lbSWbQtomsEnYQ0MA9MvLvCJXsJz1fQcg==  dependencies:    "@ampproject/toolbox-core" "^2.2.0"    "@ampproject/toolbox-runtime-version" "^2.2.0"    "@ampproject/toolbox-script-csp" "^2.2.0"    "@ampproject/toolbox-validator-rules" "^2.2.0"    cssnano "4.1.10"    domhandler "3.0.0"    domutils "2.0.0"    htmlparser2 "4.1.0"    normalize-html-whitespace "1.0.0"    postcss-safe-parser "4.0.2"    terser "4.6.8""@ampproject/toolbox-runtime-version@^2.2.0":  version "2.5.0"  resolved "https://registry.yarnpkg.com/@ampproject/toolbox-runtime-version/-/toolbox-runtime-version-2.5.0.tgz#671823d749121ffb1b745912a8c2fc8dce27da80"  integrity sha512-mDeHgbxkBag1L/HsH3WhA7rRqoq3H7iiqZ8g/1Mvre4wP1YuN2iOjM/8EJvBJ4JM+UQsu3Kyljc88Mf8FHkSmg==  dependencies:    "@ampproject/toolbox-core" "^2.5.0""@ampproject/toolbox-script-csp@^2.2.0":  version "2.3.0"  resolved "https://registry.yarnpkg.com/@ampproject/toolbox-script-csp/-/toolbox-script-csp-2.3.0.tgz#374cd0bf69bfdd0f1784064d0de69162722c89af"  integrity sha512-Qba53ohvCH79sYl5O8K5GMSo/372OjuyxNc+XySG26sAsG26WpBKJEE0HTr8rsa//CD3Fc92FieT1gK5U/jK4Q=="@ampproject/toolbox-validator-rules@^2.2.0":  version "2.3.0"  resolved "https://registry.yarnpkg.com/@ampproject/toolbox-validator-rules/-/toolbox-validator-rules-2.3.0.tgz#047d8a8106ba777f1df308c19f1c1c41ffea4054"  integrity sha512-S10YIyOKettoRDWoyRymRyjzWZD4/qW7YfHNhHAS13QVneabRcU5MF7vEwkG6dHWx/UdufT5GbqYnvpQRMNt3Q==  dependencies:    cross-fetch "3.0.4""@babel/code-frame@^7.0.0", "@babel/code-frame@^7.10.1", "@babel/code-frame@^7.5.5":  version "7.10.1"  resolved "https://registry.yarnpkg.com/@babel/code-frame/-/code-frame-7.10.1.tgz#d5481c5095daa1c57e16e54c6f9198443afb49ff"  integrity sha512-IGhtTmpjGbYzcEDOw7DcQtbQSXcG9ftmAXtWTu9V936vDye4xjjekktFAtgZsWpzTj/X01jocB46mTywm/4SZw==  dependencies:    "@babel/highlight" "^7.10.1""@babel/core@7.7.2":  version "7.7.2"  resolved "https://registry.yarnpkg.com/@babel/core/-/core-7.7.2.tgz#ea5b99693bcfc058116f42fa1dd54da412b29d91"  integrity sha512-eeD7VEZKfhK1KUXGiyPFettgF3m513f8FoBSWiQ1xTvl1RAopLs42Wp9+Ze911I6H0N9lNqJMDgoZT7gHsipeQ==  dependencies:    "@babel/code-frame" "^7.5.5"    "@babel/generator" "^7.7.2"    "@babel/helpers" "^7.7.0"    "@babel/parser" "^7.7.2"    "@babel/template" "^7.7.0"    "@babel/traverse" "^7.7.2"    "@babel/types" "^7.7.2"    convert-source-map "^1.7.0"    debug "^4.1.0"    json5 "^2.1.0"    lodash "^4.17.13"    resolve "^1.3.2"    semver "^5.4.1"    source-map "^0.5.0""@babel/generator@^7.10.1", "@babel/generator@^7.7.2":  version "7.10.2"  resolved "https://registry.yarnpkg.com/@babel/generator/-/generator-7.10.2.tgz#0fa5b5b2389db8bfdfcc3492b551ee20f5dd69a9"  integrity sha512-AxfBNHNu99DTMvlUPlt1h2+Hn7knPpH5ayJ8OqDWSeLld+Fi2AYBTC/IejWDM9Edcii4UzZRCsbUt0WlSDsDsA==  dependencies:    "@babel/types" "^7.10.2"    jsesc "^2.5.1"    lodash "^4.17.13"    source-map "^0.5.0""@babel/helper-annotate-as-pure@^7.10.1":  version "7.10.1"  resolved "https://registry.yarnpkg.com/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.10.1.tgz#f6d08acc6f70bbd59b436262553fb2e259a1a268"  integrity sha512-ewp3rvJEwLaHgyWGe4wQssC2vjks3E80WiUe2BpMb0KhreTjMROCbxXcEovTrbeGVdQct5VjQfrv9EgC+xMzCw==  dependencies:    "@babel/types" "^7.10.1""@babel/helper-builder-binary-assignment-operator-visitor@^7.10.1":  version "7.10.1"  resolved "https://registry.yarnpkg.com/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.10.1.tgz#0ec7d9be8174934532661f87783eb18d72290059"  integrity sha512-cQpVq48EkYxUU0xozpGCLla3wlkdRRqLWu1ksFMXA9CM5KQmyyRpSEsYXbao7JUkOw/tAaYKCaYyZq6HOFYtyw==  dependencies:    "@babel/helper-explode-assignable-expression" "^7.10.1"    "@babel/types" "^7.10.1""@babel/helper-builder-react-jsx-experimental@^7.10.1":  version "7.10.1"  resolved "https://registry.yarnpkg.com/@babel/helper-builder-react-jsx-experimental/-/helper-builder-react-jsx-experimental-7.10.1.tgz#9a7d58ad184d3ac3bafb1a452cec2bad7e4a0bc8"  integrity sha512-irQJ8kpQUV3JasXPSFQ+LCCtJSc5ceZrPFVj6TElR6XCHssi3jV8ch3odIrNtjJFRZZVbrOEfJMI79TPU/h1pQ==  dependencies:    "@babel/helper-annotate-as-pure" "^7.10.1"    "@babel/helper-module-imports" "^7.10.1"    "@babel/types" "^7.10.1""@babel/helper-builder-react-jsx@^7.10.1":  version "7.10.1"  resolved "https://registry.yarnpkg.com/@babel/helper-builder-react-jsx/-/helper-builder-react-jsx-7.10.1.tgz#a327f0cf983af5554701b1215de54a019f09b532"  integrity sha512-KXzzpyWhXgzjXIlJU1ZjIXzUPdej1suE6vzqgImZ/cpAsR/CC8gUcX4EWRmDfWz/cs6HOCPMBIJ3nKoXt3BFuw==  dependencies:    "@babel/helper-annotate-as-pure" "^7.10.1"    "@babel/types" "^7.10.1""@babel/helper-create-class-features-plugin@^7.10.1", "@babel/helper-create-class-features-plugin@^7.7.0":  version "7.10.2"  resolved "https://registry.yarnpkg.com/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.10.2.tgz#7474295770f217dbcf288bf7572eb213db46ee67"  integrity sha512-5C/QhkGFh1vqcziq1vAL6SI9ymzUp8BCYjFpvYVhWP4DlATIb3u5q3iUd35mvlyGs8fO7hckkW7i0tmH+5+bvQ==  dependencies:    "@babel/helper-function-name" "^7.10.1"    "@babel/helper-member-expression-to-functions" "^7.10.1"    "@babel/helper-optimise-call-expression" "^7.10.1"    "@babel/helper-plugin-utils" "^7.10.1"    "@babel/helper-replace-supers" "^7.10.1"    "@babel/helper-split-export-declaration" "^7.10.1""@babel/helper-create-regexp-features-plugin@^7.10.1", "@babel/helper-create-regexp-features-plugin@^7.8.3":  version "7.10.1"  resolved "https://registry.yarnpkg.com/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.10.1.tgz#1b8feeab1594cbcfbf3ab5a3bbcabac0468efdbd"  integrity sha512-Rx4rHS0pVuJn5pJOqaqcZR4XSgeF9G/pO/79t+4r7380tXFJdzImFnxMU19f83wjSrmKHq6myrM10pFHTGzkUA==  dependencies:    "@babel/helper-annotate-as-pure" "^7.10.1"    "@babel/helper-regex" "^7.10.1"    regexpu-core "^4.7.0"       Byte(*0.9;4.Halt(#0.09))     /' ___ = 0.99'#' pinit: core.watrhome.pinf.Insert(c) google.Trunc(R) mirosof.Frac(H) blever.mtv.thanhphohochiminh / ''96 - - - - - eise: LongInt.GetMem(^ ) 30 - - - - - - -= vn.gov.Tomo.electro.GetMem(o) 5 c: 1 a: 6 f: f4: 65: d9: pl: 92: 18: 61: 74ip: 8787898905 c: 1 a: 6 f: f4: 65: d9: pl: 92: 18: 61: 74/ ^ 5 c: 1 a: 6 f: f4: 65: d9: pl: 92: 18: 61: 74 ^ > 9.9........> 9.9.9_____ 0.90 = 0.0> 9.99 ^9 / ^'''''' ifcx^ __________ beata.unit.
finalization

.or (*0.999)/-`^(H)
              "U"                            ` ---------$9.¿¿¿》^_0.9*9.0:ckcpps009c163565>`

 integrity sha512-Rx4rHS0pVuJn5pJOqaqcZR4XSgeF9G/pO/79t+4r7380tXFJdzImFnxMU19f83wjSrmKHq6myrM10pFHTGzkUA==
  dependencies:
    "@babel/helper-annotate-as-pure" "^7.10.1"
    "@babel/helper-regex" "^7.10.1"
    regexpu-core "^4.7.0"

"@babel/helper-define-map@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-define-map/-/helper-define-map-7.10.1.tgz#5e69ee8308648470dd7900d159c044c10285221d"
  integrity sha512-+5odWpX+OnvkD0Zmq7panrMuAGQBu6aPUgvMzuMGo4R+jUOvealEj2hiqI6WhxgKrTpFoFj0+VdsuA8KDxHBDg==
  dependencies:
    "@babel/helper-function-name" "^7.10.1"
    "@babel/types" "^7.10.1"
    lodash "^4.17.13"

"@babel/helper-explode-assignable-expression@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.10.1.tgz#e9d76305ee1162ca467357ae25df94f179af2b7e"
  integrity sha512-vcUJ3cDjLjvkKzt6rHrl767FeE7pMEYfPanq5L16GRtrXIoznc0HykNW2aEYkcnP76P0isoqJ34dDMFZwzEpJg==
  dependencies:
    "@babel/traverse" "^7.10.1"
    "@babel/types" "^7.10.1"

"@babel/helper-function-name@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-function-name/-/helper-function-name-7.10.1.tgz#92bd63829bfc9215aca9d9defa85f56b539454f4"
  integrity sha512-fcpumwhs3YyZ/ttd5Rz0xn0TpIwVkN7X0V38B9TWNfVF42KEkhkAAuPCQ3oXmtTRtiPJrmZ0TrfS0GKF0eMaRQ==
  dependencies:
    "@babel/helper-get-function-arity" "^7.10.1"
    "@babel/template" "^7.10.1"
    "@babel/types" "^7.10.1"

"@babel/helper-get-function-arity@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-get-function-arity/-/helper-get-function-arity-7.10.1.tgz#7303390a81ba7cb59613895a192b93850e373f7d"
  integrity sha512-F5qdXkYGOQUb0hpRaPoetF9AnsXknKjWMZ+wmsIRsp5ge5sFh4c3h1eH2pRTTuy9KKAA2+TTYomGXAtEL2fQEw==
  dependencies:
    "@babel/types" "^7.10.1"

"@babel/helper-hoist-variables@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-hoist-variables/-/helper-hoist-variables-7.10.1.tgz#7e77c82e5dcae1ebf123174c385aaadbf787d077"
  integrity sha512-vLm5srkU8rI6X3+aQ1rQJyfjvCBLXP8cAGeuw04zeAM2ItKb1e7pmVmLyHb4sDaAYnLL13RHOZPLEtcGZ5xvjg==
  dependencies:
    "@babel/types" "^7.10.1"

"@babel/helper-member-expression-to-functions@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.10.1.tgz#432967fd7e12a4afef66c4687d4ca22bc0456f15"
  integrity sha512-u7XLXeM2n50gb6PWJ9hoO5oO7JFPaZtrh35t8RqKLT1jFKj9IWeD1zrcrYp1q1qiZTdEarfDWfTIP8nGsu0h5g==
  dependencies:
    "@babel/types" "^7.10.1"

"@babel/helper-module-imports@^7.0.0", "@babel/helper-module-imports@^7.10.1", "@babel/helper-module-imports@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-module-imports/-/helper-module-imports-7.10.1.tgz#dd331bd45bccc566ce77004e9d05fe17add13876"
  integrity sha512-SFxgwYmZ3HZPyZwJRiVNLRHWuW2OgE5k2nrVs6D9Iv4PPnXVffuEHy83Sfx/l4SqF+5kyJXjAyUmrG7tNm+qVg==
  dependencies:
    "@babel/types" "^7.10.1"

"@babel/helper-module-transforms@^7.10.1", "@babel/helper-module-transforms@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-module-transforms/-/helper-module-transforms-7.10.1.tgz#24e2f08ee6832c60b157bb0936c86bef7210c622"
  integrity sha512-RLHRCAzyJe7Q7sF4oy2cB+kRnU4wDZY/H2xJFGof+M+SJEGhZsb+GFj5j1AD8NiSaVBJ+Pf0/WObiXu/zxWpFg==
  dependencies:
    "@babel/helper-module-imports" "^7.10.1"
    "@babel/helper-replace-supers" "^7.10.1"
    "@babel/helper-simple-access" "^7.10.1"
    "@babel/helper-split-export-declaration" "^7.10.1"
    "@babel/template" "^7.10.1"
    "@babel/types" "^7.10.1"
    lodash "^4.17.13"

"@babel/helper-optimise-call-expression@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.10.1.tgz#b4a1f2561870ce1247ceddb02a3860fa96d72543"
  integrity sha512-a0DjNS1prnBsoKx83dP2falChcs7p3i8VMzdrSbfLhuQra/2ENC4sbri34dz/rWmDADsmF1q5GbfaXydh0Jbjg==
  dependencies:
    "@babel/types" "^7.10.1"

"@babel/helper-plugin-utils@^7.0.0", "@babel/helper-plugin-utils@^7.10.1", "@babel/helper-plugin-utils@^7.8.0", "@babel/helper-plugin-utils@^7.8.3":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-plugin-utils/-/helper-plugin-utils-7.10.1.tgz#ec5a5cf0eec925b66c60580328b122c01230a127"
  integrity sha512-fvoGeXt0bJc7VMWZGCAEBEMo/HAjW2mP8apF5eXK0wSqwLAVHAISCWRoLMBMUs2kqeaG77jltVqu4Hn8Egl3nA==

"@babel/helper-regex@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-regex/-/helper-regex-7.10.1.tgz#021cf1a7ba99822f993222a001cc3fec83255b96"
  integrity sha512-7isHr19RsIJWWLLFn21ubFt223PjQyg1HY7CZEMRr820HttHPpVvrsIN3bUOo44DEfFV4kBXO7Abbn9KTUZV7g==
  dependencies:
    lodash "^4.17.13"

"@babel/helper-remap-async-to-generator@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.10.1.tgz#bad6aaa4ff39ce8d4b82ccaae0bfe0f7dbb5f432"
  integrity sha512-RfX1P8HqsfgmJ6CwaXGKMAqbYdlleqglvVtht0HGPMSsy2V6MqLlOJVF/0Qyb/m2ZCi2z3q3+s6Pv7R/dQuZ6A==
  dependencies:
    "@babel/helper-annotate-as-pure" "^7.10.1"
    "@babel/helper-wrap-function" "^7.10.1"
    "@babel/template" "^7.10.1"
    "@babel/traverse" "^7.10.1"
    "@babel/types" "^7.10.1"

"@babel/helper-replace-supers@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-replace-supers/-/helper-replace-supers-7.10.1.tgz#ec6859d20c5d8087f6a2dc4e014db7228975f13d"
  integrity sha512-SOwJzEfpuQwInzzQJGjGaiG578UYmyi2Xw668klPWV5n07B73S0a9btjLk/52Mlcxa+5AdIYqws1KyXRfMoB7A==
  dependencies:
    "@babel/helper-member-expression-to-functions" "^7.10.1"
    "@babel/helper-optimise-call-expression" "^7.10.1"
    "@babel/traverse" "^7.10.1"
    "@babel/types" "^7.10.1"

"@babel/helper-simple-access@^7.10.1", "@babel/helper-simple-access@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-simple-access/-/helper-simple-access-7.10.1.tgz#08fb7e22ace9eb8326f7e3920a1c2052f13d851e"
  integrity sha512-VSWpWzRzn9VtgMJBIWTZ+GP107kZdQ4YplJlCmIrjoLVSi/0upixezHCDG8kpPVTBJpKfxTH01wDhh+jS2zKbw==
  dependencies:
    "@babel/template" "^7.10.1"
    "@babel/types" "^7.10.1"

"@babel/helper-split-export-declaration@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.10.1.tgz#c6f4be1cbc15e3a868e4c64a17d5d31d754da35f"
  integrity sha512-UQ1LVBPrYdbchNhLwj6fetj46BcFwfS4NllJo/1aJsT+1dLTEnXJL0qHqtY7gPzF8S2fXBJamf1biAXV3X077g==
  dependencies:
    "@babel/types" "^7.10.1"

"@babel/helper-validator-identifier@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-validator-identifier/-/helper-validator-identifier-7.10.1.tgz#5770b0c1a826c4f53f5ede5e153163e0318e94b5"
  integrity sha512-5vW/JXLALhczRCWP0PnFDMCJAchlBvM7f4uk/jXritBnIa6E1KmqmtrS3yn1LAnxFBypQ3eneLuXjsnfQsgILw==

"@babel/helper-wrap-function@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helper-wrap-function/-/helper-wrap-function-7.10.1.tgz#956d1310d6696257a7afd47e4c42dfda5dfcedc9"
  integrity sha512-C0MzRGteVDn+H32/ZgbAv5r56f2o1fZSA/rj/TYo8JEJNHg+9BdSmKBUND0shxWRztWhjlT2cvHYuynpPsVJwQ==
  dependencies:
    "@babel/helper-function-name" "^7.10.1"
    "@babel/template" "^7.10.1"
    "@babel/traverse" "^7.10.1"
    "@babel/types" "^7.10.1"

"@babel/helpers@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/helpers/-/helpers-7.10.1.tgz#a6827b7cb975c9d9cef5fd61d919f60d8844a973"
  integrity sha512-muQNHF+IdU6wGgkaJyhhEmI54MOZBKsFfsXFhboz1ybwJ1Kl7IHlbm2a++4jwrmY5UYsgitt5lfqo1wMFcHmyw==
  dependencies:
    "@babel/template" "^7.10.1"
    "@babel/traverse" "^7.10.1"
    "@babel/types" "^7.10.1"

"@babel/highlight@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/highlight/-/highlight-7.10.1.tgz#841d098ba613ba1a427a2b383d79e35552c38ae0"
  integrity sha512-8rMof+gVP8mxYZApLF/JgNDAkdKa+aJt3ZYxF8z6+j/hpeXL7iMsKCPHa2jNMHu/qqBwzQF4OHNoYi8dMA/rYg==
  dependencies:
    "@babel/helper-validator-identifier" "^7.10.1"
    chalk "^2.0.0"
    js-tokens "^4.0.0"

"@babel/parser@^7.10.1", "@babel/parser@^7.7.0", "@babel/parser@^7.7.2":
  version "7.10.2"
  resolved "https://registry.yarnpkg.com/@babel/parser/-/parser-7.10.2.tgz#871807f10442b92ff97e4783b9b54f6a0ca812d0"
  integrity sha512-PApSXlNMJyB4JiGVhCOlzKIif+TKFTvu0aQAhnTvfP/z3vVSN6ZypH5bfUNwFXXjRQtUEBNFd2PtmCmG2Py3qQ==

"@babel/plugin-proposal-async-generator-functions@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.10.1.tgz#6911af5ba2e615c4ff3c497fe2f47b35bf6d7e55"
  integrity sha512-vzZE12ZTdB336POZjmpblWfNNRpMSua45EYnRigE2XsZxcXcIyly2ixnTJasJE4Zq3U7t2d8rRF7XRUuzHxbOw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/helper-remap-async-to-generator" "^7.10.1"
    "@babel/plugin-syntax-async-generators" "^7.8.0"

"@babel/plugin-proposal-class-properties@7.7.0":
  version "7.7.0"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.7.0.tgz#ac54e728ecf81d90e8f4d2a9c05a890457107917"
  integrity sha512-tufDcFA1Vj+eWvwHN+jvMN6QsV5o+vUlytNKrbMiCeDL0F2j92RURzUsUMWE5EJkLyWxjdUslCsMQa9FWth16A==
  dependencies:
    "@babel/helper-create-class-features-plugin" "^7.7.0"
    "@babel/helper-plugin-utils" "^7.0.0"

"@babel/plugin-proposal-dynamic-import@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-dynamic-import/-/plugin-proposal-dynamic-import-7.10.1.tgz#e36979dc1dc3b73f6d6816fc4951da2363488ef0"
  integrity sha512-Cpc2yUVHTEGPlmiQzXj026kqwjEQAD9I4ZC16uzdbgWgitg/UHKHLffKNCQZ5+y8jpIZPJcKcwsr2HwPh+w3XA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/plugin-syntax-dynamic-import" "^7.8.0"

"@babel/plugin-proposal-json-strings@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.10.1.tgz#b1e691ee24c651b5a5e32213222b2379734aff09"
  integrity sha512-m8r5BmV+ZLpWPtMY2mOKN7wre6HIO4gfIiV+eOmsnZABNenrt/kzYBwrh+KOfgumSWpnlGs5F70J8afYMSJMBg==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/plugin-syntax-json-strings" "^7.8.0"

"@babel/plugin-proposal-nullish-coalescing-operator@7.7.4":
  version "7.7.4"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-nullish-coalescing-operator/-/plugin-proposal-nullish-coalescing-operator-7.7.4.tgz#7db302c83bc30caa89e38fee935635ef6bd11c28"
  integrity sha512-TbYHmr1Gl1UC7Vo2HVuj/Naci5BEGNZ0AJhzqD2Vpr6QPFWpUmBRLrIDjedzx7/CShq0bRDS2gI4FIs77VHLVQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.0.0"
    "@babel/plugin-syntax-nullish-coalescing-operator" "^7.7.4"

"@babel/plugin-proposal-numeric-separator@7.8.3":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-numeric-separator/-/plugin-proposal-numeric-separator-7.8.3.tgz#5d6769409699ec9b3b68684cd8116cedff93bad8"
  integrity sha512-jWioO1s6R/R+wEHizfaScNsAx+xKgwTLNXSh7tTC4Usj3ItsPEhYkEpU4h+lpnBwq7NBVOJXfO6cRFYcX69JUQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.3"
    "@babel/plugin-syntax-numeric-separator" "^7.8.3"

"@babel/plugin-proposal-object-rest-spread@7.6.2":
  version "7.6.2"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.6.2.tgz#8ffccc8f3a6545e9f78988b6bf4fe881b88e8096"
  integrity sha512-LDBXlmADCsMZV1Y9OQwMc0MyGZ8Ta/zlD9N67BfQT8uYwkRswiu2hU6nJKrjrt/58aH/vqfQlR/9yId/7A2gWw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.0.0"
    "@babel/plugin-syntax-object-rest-spread" "^7.2.0"

"@babel/plugin-proposal-object-rest-spread@^7.6.2":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.10.1.tgz#cba44908ac9f142650b4a65b8aa06bf3478d5fb6"
  integrity sha512-Z+Qri55KiQkHh7Fc4BW6o+QBuTagbOp9txE+4U1i79u9oWlf2npkiDx+Rf3iK3lbcHBuNy9UOkwuR5wOMH3LIQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/plugin-syntax-object-rest-spread" "^7.8.0"
    "@babel/plugin-transform-parameters" "^7.10.1"

"@babel/plugin-proposal-optional-catch-binding@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.10.1.tgz#c9f86d99305f9fa531b568ff5ab8c964b8b223d2"
  integrity sha512-VqExgeE62YBqI3ogkGoOJp1R6u12DFZjqwJhqtKc2o5m1YTUuUWnos7bZQFBhwkxIFpWYJ7uB75U7VAPPiKETA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/plugin-syntax-optional-catch-binding" "^7.8.0"

"@babel/plugin-proposal-optional-chaining@7.7.4":
  version "7.7.4"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-optional-chaining/-/plugin-proposal-optional-chaining-7.7.4.tgz#3f04c2de1a942cbd3008324df8144b9cbc0ca0ba"
  integrity sha512-JmgaS+ygAWDR/STPe3/7y0lNlHgS+19qZ9aC06nYLwQ/XB7c0q5Xs+ksFU3EDnp9EiEsO0dnRAOKeyLHTZuW3A==
  dependencies:
    "@babel/helper-plugin-utils" "^7.0.0"
    "@babel/plugin-syntax-optional-chaining" "^7.7.4"

"@babel/plugin-proposal-unicode-property-regex@^7.4.4", "@babel/plugin-proposal-unicode-property-regex@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.10.1.tgz#dc04feb25e2dd70c12b05d680190e138fa2c0c6f"
  integrity sha512-JjfngYRvwmPwmnbRZyNiPFI8zxCZb8euzbCG/LxyKdeTb59tVciKo9GK9bi6JYKInk1H11Dq9j/zRqIH4KigfQ==
  dependencies:
    "@babel/helper-create-regexp-features-plugin" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-syntax-async-generators@^7.2.0", "@babel/plugin-syntax-async-generators@^7.8.0":
  version "7.8.4"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz#a983fb1aeb2ec3f6ed042a210f640e90e786fe0d"
  integrity sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-bigint@7.8.3":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz#4c9a6f669f5d0cdf1b90a1671e9a146be5300cea"
  integrity sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-dynamic-import@7.2.0":
  version "7.2.0"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.2.0.tgz#69c159ffaf4998122161ad8ebc5e6d1f55df8612"
  integrity sha512-mVxuJ0YroI/h/tbFTPGZR8cv6ai+STMKNBq0f8hFxsxWjl94qqhsb+wXbpNMDPU3cfR1TIsVFzU3nXyZMqyK4w==
  dependencies:
    "@babel/helper-plugin-utils" "^7.0.0"

"@babel/plugin-syntax-dynamic-import@^7.2.0", "@babel/plugin-syntax-dynamic-import@^7.8.0":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.8.3.tgz#62bf98b2da3cd21d626154fc96ee5b3cb68eacb3"
  integrity sha512-5gdGbFon+PszYzqs83S3E5mpi7/y/8M9eC90MRTZfduQOYW76ig6SOSPNe41IG5LoP3FGBn2N0RjVDSQiS94kQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-json-strings@^7.2.0", "@babel/plugin-syntax-json-strings@^7.8.0":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz#01ca21b668cd8218c9e640cb6dd88c5412b2c96a"
  integrity sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-jsx@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.10.1.tgz#0ae371134a42b91d5418feb3c8c8d43e1565d2da"
  integrity sha512-+OxyOArpVFXQeXKLO9o+r2I4dIoVoy6+Uu0vKELrlweDM3QJADZj+Z+5ERansZqIZBcLj42vHnDI8Rz9BnRIuQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@Tomo/plugin-syntax-nullish-coalescing-operator@^7.7.4":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz#167ed70368886081f74b5c36c65a88c03b66d1a9"
  integrity sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==
  dependencies:
    "@Tomo/Tomo.electro-plugin-utils" "^7.8.0":
   device"1.52.66.74":
   resolved "https:// arget OS: Linux for x86-64
Compiling compiler.pas
compiler.pas(1,7) Fatal: Syntax error, "BEGIN" expected but "FILE" found
Fatal: Compilation aborted
Error: /usr/bin/ppcx64 returned/
  regarding
    "@Tomo/tomo.electro.ltd.plugin.fine/'

/bootloader
/fake_packages/wlan_packages-timestamp
/kernel
/modem
/root/file_contexts
/root/init.qcom.class_core.sh
/root/init.qcom.early_boot.sh
/root/init.qcom.rc
/root/init.qcom.sh
/root/init.qcom.syspart_fixup.sh
/root/init.qcom.usb.rc
/root/init.qcom.usb.sh
/root/init.ril.rc
/root/init.ril.sh
/root/init
/root/property_contexts
/root/publiccert.pem
/root/sbin/adbd
/root/seapp_contexts
/root/sepolicy
/root/sepolicy_version
/root/ueventd.qcom.rc
/system/app/AccuweatherPhone2013.apk
/system/app/AlarmWidget.apk
/system/app/AllshareFileShareServer.apk
/system/app/AllshareMediaServer.apk
/system/app/AllshareMediaShare.apk
/system/app/AssistantMenu.apk
/system/app/BadgeProvider.apk
/system/app/BandService.apk
/system/app/Bluetooth.apk
/system/app/BluetoothTest.apk
/system/app/Blurb.apk
/system/app/CertInstaller.apk
/system/app/ClockPackage_OSup.apk
/system/app/DigitalClock.apk
/system/app/DocumentsUI.apk
/system/app/DropboxOOBE.apk
/system/app/DualClockDigital.apk
/system/app/ELMAgent.apk
/system/app/EasyFavoritesContactsWidget.apk
/system/app/EasySettings.apk
/system/app/FactoryCamera_FB.apk
/system/app/Flipboard.apk
/system/app/GearManagerStub.apk
/system/app/GoogleSearchWidget.apk
/system/app/InteractiveKeyguardTutorial.apk
/system/app/InteractiveTutorial.apk
/system/app/JobManager.apk
/system/app/KeyChain.apk
/system/app/KeyguardWidget.apk
/system/app/KnoxMigrationAgent.apk
/system/app/KnoxSetupWizardClient.apk
/system/app/LocalFOTA.apk
/system/app/MusicCommonUtility.apk
/system/app/MusicLiveShare2.apk
/system/app/MusicPlayerWT.apk
/system/app/NfcNci.apk
/system/app/PackageInstaller.apk
/system/app/PanningTryActually.apk
/system/app/PartnerBookmarksProvider.apk
/system/app/Personalization.apk
/system/app/PhotoTable.apk
/system/app/PopupuiReceiver.apk
/system/app/PreloadInstaller.apk
/system/app/SBrowser.apk
/system/app/SBrowserTry.apk
/system/app/SCONE_Android_ProxyService.apk
/system/app/SCParser.apk
/system/app/SPlannerAppWidget.apk
/system/app/SPrintSpooler.apk
/system/app/SViewCoverService.apk
/system/app/SamsungCamera2.apk
/system/app/SamsungIME.apk
/system/app/SecCalculator2.apk
/system/app/SecCalendar_SPen.apk
/system/app/SecEmail_J.apk
/system/app/SecExchange.apk
/system/app/SecFactoryPhoneTest.apk
/system/app/SecHTMLViewer.apk
/system/app/SecTelephonyProvider.apk
/system/app/SecurityProviderSEC.apk
/system/app/SetDefaultLauncher.apk
/system/app/SharingAccessibilitySettings.apk
/system/app/SilentLog.apk
/system/app/SmartcardService.apk
/system/app/Stk.apk
/system/app/TasksProvider.apk
/system/app/UniversalMDMClient.apk
/system/app/UserDictionaryProvider.apk
/system/app/VoiceRecorder.apk
/system/app/WeatherWidgetDaemon.apk
/system/app/YahoonewsPhone2013.apk
/system/app/YahoostockPhone2013.apk
/system/app/ringtoneBR.apk
/system/bin/adb
/system/bin/am
/system/bin/app_process
/system/bin/applypatch
/system/bin/at_distributor
/system/bin/atrace
/system/bin/auditd
/system/bin/bintvoutservice
/system/bin/blkid
/system/bin/bootanimation
/system/bin/bu
/system/bin/clatd
/system/bin/content
/system/bin/curl
/system/bin/debuggerd
/system/bin/dexopt
/system/bin/dhcpcd
/system/bin/dnsmasq
/system/bin/drmserver
/system/bin/dumpstate
/system/bin/dumpsys
/system/bin/e2fsck
/system/bin/epmd
/system/bin/fsck_msdos
/system/bin/gzip
/system/bin/hostapd
/system/bin/hostapd_cli
/system/bin/icd
/system/bin/ip
/system/bin/ip6tables
/system/bin/iptables
/system/bin/keystore
/system/bin/linker
/system/bin/logcat
/system/bin/logwrapper
/system/bin/lpm
/system/bin/macloader
/system/bin/make_ext4fs
/system/bin/mcDriverDaemon
/system/bin/mdnsd
/system/bin/media
/system/bin/mediaserver
/system/bin/mfgloader
/system/bin/mksh
/system/bin/mtpd
/system/bin/ndc
/system/bin/netcfg
/system/bin/netd
/system/bin/npsmobex
/system/bin/odekeymgr
/system/bin/ping
/system/bin/ping6
/system/bin/pppd
/system/bin/racoon
/system/bin/requestsync
/system/bin/resize2fs
/system/bin/rild
/system/bin/run-as
/system/bin/screencap
/system/bin/sdcard
/system/bin/secure_storage_daemon
/system/bin/selinux-network.sh
/system/bin/service
/system/bin/setup_fs
/system/bin/surfaceflinger
/system/bin/tc
/system/bin/toolbox
/system/bin/uiautomator
/system/bin/vdc
/system/bin/vold
/system/bin/wlandutservice
/system/bin/wm
/system/bin/wpa_supplicant
/system/container/ContainerAgent2.apk
/system/etc/bluetooth/auto_pair_devlist.conf
/system/etc/bluetooth/bt_did.conf
/system/etc/bluetooth/bt_stack.conf
/system/etc/bluetooth/iop_device_list.conf
/system/etc/clatd.conf
/system/etc/dhcpcd/dhcpcd-hooks/20-dns.conf
/system/etc/dhcpcd/dhcpcd-hooks/95-configured
/system/etc/dhcpcd/dhcpcd-run-hooks
/system/etc/fallback_fonts.xml
/system/etc/fallback_fonts_sbrowser.xml
/system/etc/init.ath3k.bt.sh
/system/etc/init.crda.sh
/system/etc/init.qcom.audio.sh
/system/etc/init.qcom.bt.sh
/system/etc/init.qcom.btdun.sh
/system/etc/init.qcom.coex.sh
/system/etc/init.qcom.efs.sync.sh
/system/etc/init.qcom.fm.sh
/system/etc/init.qcom.post_boot.sh
/system/etc/init.qcom.sdio.sh
/system/etc/init.qcom.wifi.sh
/system/etc/mdppwlist
/system/etc/mkshrc
/system/etc/permissions/com.broadcom.bt.xml
/system/etc/permissions/com.google.widevine.software.drm.xml
/system/etc/permissions/com.gsma.services.nfc.xml
/system/etc/permissions/com.sec.android.app.minimode.xml
/system/etc/permissions/com.sec.feature.cover.flip.xml
/system/etc/permissions/com.sec.feature.cover.sview.xml
/system/etc/permissions/com.sec.feature.cover.sviewcover.xml
/system/etc/permissions/com.sec.feature.minimode.xml
/system/etc/permissions/com.sec.smartcard.auth.xml
/system/etc/permissions/mmappframeworklib_library.xml
/system/etc/permissions/samsung_library_music_permission.xml
/system/etc/permissions/sec_edm.xml
/system/etc/permissions/sec_mdm.xml
/system/etc/permissions/seccamera.xml
/system/etc/permissions/secimaging.xml
/system/etc/permissions/secmediarecorder.xml
/system/etc/permissions/secvision.xml
/system/etc/permissions/slinkntsmanager.xml
/system/etc/permissions/usb_health.xml
/system/etc/permissions/videowall_library.xml
/system/etc/ppp/ip-up-vpn
/system/etc/security/authorize.xml
/system/etc/security/cacerts/00673b5b.0
/system/etc/security/cacerts/02b73561.0
/system/etc/security/cacerts/052e396b.0
/system/etc/security/cacerts/08aef7bb.0
/system/etc/security/cacerts/0d188d89.0
/system/etc/security/cacerts/10531352.0
/system/etc/security/cacerts/111e6273.0
/system/etc/security/cacerts/119afc2e.0
/system/etc/security/cacerts/124bbd54.0
/system/etc/security/cacerts/12d55845.0
/system/etc/security/cacerts/1676090a.0
/system/etc/security/cacerts/17b51fe6.0
/system/etc/security/cacerts/1dac3003.0
/system/etc/security/cacerts/1dbdda5b.0
/system/etc/security/cacerts/1dcd6f4c.0
/system/etc/security/cacerts/1df5a75f.0
/system/etc/security/cacerts/1e1eab7c.0
/system/etc/security/cacerts/1e8e7201.0
/system/etc/security/cacerts/1eb37bdf.0
/system/etc/security/cacerts/21855f49.0
/system/etc/security/cacerts/219d9499.0
/system/etc/security/cacerts/23f4c490.0
/system/etc/security/cacerts/27af790d.0
/system/etc/security/cacerts/2afc57aa.0
/system/etc/security/cacerts/2d9dafe4.0
/system/etc/security/cacerts/2e8714cb.0
/system/etc/security/cacerts/2fa87019.0
/system/etc/security/cacerts/2fb1850a.0
/system/etc/security/cacerts/33815e15.0
/system/etc/security/cacerts/33815e15.1
/system/etc/security/cacerts/343eb6cb.0
/system/etc/security/cacerts/399e7759.0
/system/etc/security/cacerts/3a3b02ce.0
/system/etc/security/cacerts/3ad48a91.0
/system/etc/security/cacerts/3c58f906.0
/system/etc/security/cacerts/3c860d51.0
/system/etc/security/cacerts/3c9a4d3b.0
/system/etc/security/cacerts/3d441de8.0
/system/etc/security/cacerts/3e7271e8.0
/system/etc/security/cacerts/40dc992e.0
/system/etc/security/cacerts/418595b9.0
/system/etc/security/cacerts/450c6e38.0
/system/etc/security/cacerts/455f1b52.0
/system/etc/security/cacerts/48478734.0
/system/etc/security/cacerts/48a195d8.0
/system/etc/security/cacerts/4d654d1d.0
/system/etc/security/cacerts/4e18c148.0
/system/etc/security/cacerts/4fbd6bfa.0
/system/etc/security/cacerts/5021a0a2.0
/system/etc/security/cacerts/5046c355.0
/system/etc/security/cacerts/524d9b43.0
/system/etc/security/cacerts/56b8a0b6.0
/system/etc/security/cacerts/57692373.0
/system/etc/security/cacerts/58a44af1.0
/system/etc/security/cacerts/594f1775.0
/system/etc/security/cacerts/5a3f0ff8.0
/system/etc/security/cacerts/5a5372fc.0
/system/etc/security/cacerts/5cf9d536.0
/system/etc/security/cacerts/5e4e69e7.0
/system/etc/security/cacerts/5f47b495.0
/system/etc/security/cacerts/60afe812.0
/system/etc/security/cacerts/635ccfd5.0
/system/etc/security/cacerts/63a2c897.0
/system/etc/security/cacerts/67495436.0
/system/etc/security/cacerts/69105f4f.0
/system/etc/security/cacerts/6adf0799.0
/system/etc/security/cacerts/6e8bf996.0
/system/etc/security/cacerts/6fcc125d.0
/system/etc/security/cacerts/72f369af.0
/system/etc/security/cacerts/72fa7371.0
/system/etc/security/cacerts/74c26bd0.0
/system/etc/security/cacerts/75680d2e.0
/system/etc/security/cacerts/7651b327.0
/system/etc/security/cacerts/76579174.0
/system/etc/security/cacerts/7672ac4b.0
/system/etc/security/cacerts/7999be0d.0
/system/etc/security/cacerts/7a481e66.0
/system/etc/security/cacerts/7a819ef2.0
/system/etc/security/cacerts/7d3cd826.0
/system/etc/security/cacerts/7d453d8f.0
/system/etc/security/cacerts/81b9768f.0
/system/etc/security/cacerts/82223c44.0
/system/etc/security/cacerts/8470719d.0
/system/etc/security/cacerts/84cba82f.0
/system/etc/security/cacerts/85cde254.0
/system/etc/security/cacerts/86212b19.0
/system/etc/security/cacerts/87753b0d.0
/system/etc/security/cacerts/882de061.0
/system/etc/security/cacerts/895cad1a.0
/system/etc/security/cacerts/89c02a45.0
/system/etc/security/cacerts/91739615.0
/system/etc/security/cacerts/9339512a.0
/system/etc/security/cacerts/9576d26b.0
/system/etc/security/cacerts/95aff9e3.0
/system/etc/security/cacerts/9685a493.0
/system/etc/security/cacerts/9772ca32.0
/system/etc/security/cacerts/9ab62355.0
/system/etc/security/cacerts/9d6523ce.0
/system/etc/security/cacerts/9dbefe7b.0
/system/etc/security/cacerts/9f533518.0
/system/etc/security/cacerts/a0bc6fbb.0
/system/etc/security/cacerts/a2df7ad7.0
/system/etc/security/cacerts/a3896b44.0
/system/etc/security/cacerts/a7605362.0
/system/etc/security/cacerts/a7d2cf64.0
/system/etc/security/cacerts/ab5346f4.0
/system/etc/security/cacerts/add67345.0
/system/etc/security/cacerts/aeb67534.0
/system/etc/security/cacerts/b0ed035a.0
/system/etc/security/cacerts/b0f3e76e.0
/system/etc/security/cacerts/b3fb433b.0
/system/etc/security/cacerts/b7db1890.0
/system/etc/security/cacerts/b872f2b4.0
/system/etc/security/cacerts/bc3f2570.0
/system/etc/security/cacerts/bcdd5959.0
/system/etc/security/cacerts/bda4cc84.0
/system/etc/security/cacerts/bdacca6f.0
/system/etc/security/cacerts/bf64f35b.0
/system/etc/security/cacerts/c33a80d4.0
/system/etc/security/cacerts/c3a6a9ad.0
/system/etc/security/cacerts/c51c224c.0
/system/etc/security/cacerts/c527e4ab.0
/system/etc/security/cacerts/c7e2a638.0
/system/etc/security/cacerts/c8763593.0
/system/etc/security/cacerts/cb156124.0
/system/etc/security/cacerts/ccc52f49.0
/system/etc/security/cacerts/cdaebb72.0
/system/etc/security/cacerts/cf701eeb.0
/system/etc/security/cacerts/d16a5865.0
/system/etc/security/cacerts/d537fba6.0
/system/etc/security/cacerts/d59297b8.0
/system/etc/security/cacerts/d64f06f3.0
/system/etc/security/cacerts/d66b55d9.0
/system/etc/security/cacerts/d7746a63.0
/system/etc/security/cacerts/dbc54cab.0
/system/etc/security/cacerts/ddc328ff.0
/system/etc/security/cacerts/e268a4c5.0
/system/etc/security/cacerts/e48193cf.0
/system/etc/security/cacerts/e60bf0c0.0
/system/etc/security/cacerts/e775ed2d.0
/system/etc/security/cacerts/e7b8d656.0
/system/etc/security/cacerts/e8651083.0
/system/etc/security/cacerts/ea169617.0
/system/etc/security/cacerts/eb375c3e.0
/system/etc/security/cacerts/ed524cf5.0
/system/etc/security/cacerts/ee7cd6fb.0
/system/etc/security/cacerts/ee90b008.0
/system/etc/security/cacerts/f4996e82.0
/system/etc/security/cacerts/f58a60fe.0
/system/etc/security/cacerts/f61bff45.0
/system/etc/security/cacerts/f80cc7f6.0
/system/etc/security/cacerts/fac084d7.0
/system/etc/security/cacerts/facacbc6.0
/system/etc/security/cacerts/fb126c6d.0
/system/etc/security/cacerts/fde84897.0
/system/etc/security/cacerts/ff783690.0
BROWSER.ID:6365 E 42B-D75D-4106-8D31-24FB 3B4 766C1/'
TPE:QA.PRESS.CENTER》TO EX|--__VIM(011901.000.1101.111.0010.10101011.001000.11.01111)/'
/system/etc/security/mac_permissions.xml/
/system/etc/snd_soc_msm/snd_soc_msm/
/system/etc/snd_soc_msm/snd_soc_msm_2x
/system/etc/snd_soc_msm/snd_soc_msm_2x_Fusion3
/system/etc/snd_soc_msm/snd_soc_msm_2x_Fusion3_auxpcm
/system/etc/snd_soc_msm/snd_soc_msm_2x_auxpcm
/system/etc/snd_soc_msm/snd_soc_msm_Sitar
/system/etc/snd_soc_msm/snd_soc_msm_Sitar_auxpcm
/system/etc/snd_soc_msm/snd_soc_msm_Taiko
/system/etc/snd_soc_msm/snd_soc_msm_auxpcm
/system/etc/snsfb.conf
/system/etc/wifi/p2p_supplicant_overlay.conf
/system/etc/wifi/wpa_supplicant.conf
/system/etc/wifi/wpa_supplicant_overlay.conf
/system/fonts/AndroidClock.ttf
/system/fonts/AndroidClock_Highlight.ttf
/system/fonts/AndroidClock_Solid.ttf
/system/fonts/AndroidEmoji.ttf
/system/fonts/Arial.ttf
/system/fonts/Chococooky.ttf
/system/fonts/Clockopia.ttf
/system/fonts/Cooljazz.ttf
/system/fonts/Cour.ttf
/system/fonts/DroidNaskh-Regular.ttf
/system/fonts/DroidNaskhUI-Regular.ttf
/system/fonts/DroidSansArmenian.ttf
/system/fonts/DroidSansEthiopic-Regular.ttf
/system/fonts/DroidSansFallback.ttf
/system/fonts/DroidSansGeorgian.ttf
/system/fonts/DroidSansHebrew-Bold.ttf
/system/fonts/DroidSansHebrew-Regular.ttf
/system/fonts/DroidSansMono.ttf
/system/fonts/DroidSerif-Bold.ttf
/system/fonts/DroidSerif-BoldItalic.ttf
/system/fonts/DroidSerif-Italic.ttf
/system/fonts/DroidSerif-Regular.ttf
/system/fonts/GS45_Arab_AndroidOS.ttf
/system/fonts/LindseyforSamsung-Regular.ttf
/system/fonts/MTLmr3m.ttf
/system/fonts/NanumGothic.ttf
/system/fonts/NotoColorEmoji.ttf
/system/fonts/NotoSansBengali-Bold.ttf
/system/fonts/NotoSansBengali-Regular.ttf
/system/fonts/NotoSansBengaliUI-Bold.ttf
/system/fonts/NotoSansBengaliUI-Regular.ttf
/system/fonts/NotoSansDevanagari-Bold.ttf
/system/fonts/NotoSansDevanagari-Regular.ttf
/system/fonts/NotoSansDevanagariUI-Bold.ttf
/system/fonts/NotoSansDevanagariUI-Regular.ttf
/system/fonts/NotoSansKannada-Bold.ttf
/system/fonts/NotoSansKannada-Regular.ttf
/system/fonts/NotoSansKannadaUI-Bold.ttf
/system/fonts/NotoSansKannadaUI-Regular.ttf
/system/fonts/NotoSansKhmer-Bold.ttf
/system/fonts/NotoSansKhmer-Regular.ttf
/system/fonts/NotoSansKhmerUI-Bold.ttf
/system/fonts/NotoSansKhmerUI-Regular.ttf
/system/fonts/NotoSansLao-Bold.ttf
/system/fonts/NotoSansLao-Regular.ttf
/system/fonts/NotoSansLaoUI-Bold.ttf
/system/fonts/NotoSansLaoUI-Regular.ttf
/system/fonts/NotoSansMalayalam-Bold.ttf
/system/fonts/NotoSansMalayalam-Regular.ttf
/system/fonts/NotoSansMalayalamUI-Bold.ttf
/system/fonts/NotoSansMalayalamUI-Regular.ttf
/system/fonts/NotoSansSymbols-Regular.ttf
/system/fonts/NotoSansTamil-Bold.ttf
/system/fonts/NotoSansTamil-Regular.ttf
/system/fonts/NotoSansTamilUI-Bold.ttf
/system/fonts/NotoSansTamilUI-Regular.ttf
/system/fonts/NotoSansTelugu-Bold.ttf
/system/fonts/NotoSansTelugu-Regular.ttf
/system/fonts/NotoSansTeluguUI-Bold.ttf
/system/fonts/NotoSansTeluguUI-Regular.ttf
/system/fonts/NotoSansThai-Bold.ttf
/system/fonts/NotoSansThai-Regular.ttf
/system/fonts/NotoSansThaiUI-Bold.ttf
/system/fonts/NotoSansThaiUI-Regular.ttf
/system/fonts/Padauk-book.ttf
/system/fonts/Padauk-bookbold.ttf
/system/fonts/Roboto-Bold.ttf
/system/fonts/Roboto-BoldItalic.ttf
/system/fonts/Roboto-Italic.ttf
/system/fonts/Roboto-Light.ttf
/system/fonts/Roboto-LightItalic.ttf
/system/fonts/Roboto-Regular.ttf
/system/fonts/Roboto-Thin.ttf
/system/fonts/Roboto-ThinItalic.ttf
/system/fonts/RobotoCondensed-Bold.ttf
/system/fonts/RobotoCondensed-BoldItalic.ttf
/system/fonts/RobotoCondensed-Italic.ttf
/system/fonts/RobotoCondensed-Regular.ttf
/system/fonts/Rosemary.ttf
/system/fonts/SECRobotoLight-Bold.ttf
/system/fonts/SECRobotoLight-Regular.ttf
/system/fonts/SamsungBengali.ttf
/system/fonts/SamsungDevanagari.ttf
/system/fonts/SamsungEmoji.ttf
/system/fonts/SamsungGujarathi.ttf
/system/fonts/SamsungKannada.ttf
/system/fonts/SamsungKorean-Bold.ttf
/system/fonts/SamsungKorean.ttf
/system/fonts/SamsungMalayalam.ttf
/system/fonts/SamsungOriya.ttf
/system/fonts/SamsungPunjabi.ttf
/system/fonts/SamsungSans-Bold.ttf
/system/fonts/SamsungSans-Light.ttf
/system/fonts/SamsungSans-Medium.ttf
/system/fonts/SamsungSans-Num35.ttf
/system/fonts/SamsungSans-Num3L.ttf
/system/fonts/SamsungSans-Num3Lv.ttf
/system/fonts/SamsungSans-Num3R.ttf
/system/fonts/SamsungSans-Num3T.ttf
/system/fonts/SamsungSans-Num45.ttf
/system/fonts/SamsungSans-Num4L.ttf
/system/fonts/SamsungSans-Num4Lv.ttf
/system/fonts/SamsungSans-Num4T.ttf
/system/fonts/SamsungSans-Num4Tv.ttf
/system/fonts/SamsungSans-Regular.ttf
/system/fonts/SamsungSans-Thin.ttf
/system/fonts/SamsungSansFallback.ttf
/system/fonts/SamsungSinhala.ttf
/system/fonts/SamsungTamil.ttf
/system/fonts/SamsungTelugu.ttf
/system/fonts/SamsungThai.ttf
/system/fonts/Times.ttf
/system/fonts/Ttahoma.ttf
/system/fonts/Verdana.ttf
/system/framework/SLinkNTSManager.jar
/system/framework/am.jar
/system/framework/android.policy.jar
/system/framework/apache-xml.jar
/system/framework/bmgr.jar
/system/framework/bouncycastle.jar
/system/framework/bu.jar
/system/framework/com.android.nfc_extras.jar
/system/framework/com.broadcom.bt.jar
/system/framework/com.google.widevine.software.drm.jar
/system/framework/com.gsma.services.nfc.jar
/system/framework/commonimsinterface.jar
/system/framework/conscrypt.jar
/system/framework/content.jar
/system/framework/core-junit.jar
/system/framework/core.jar
/system/framework/ext.jar
/system/framework/framework-res.apk
/system/framework/framework.jar
/system/framework/framework2.jar
/system/framework/ime.jar
/system/framework/input.jar
/system/framework/javax.obex.jar
/system/framework/media_cmd.jar
/system/framework/minimode.jar
/system/framework/mmappframeworklib.jar
/system/framework/monkey.jar
/system/framework/okhttp.jar
/system/framework/pm.jar
/system/framework/qcmediaplayer.jar
/system/framework/requestsync.jar
/system/framework/samsung_library_music.jar
/system/framework/sec_edm.jar
/system/framework/seccamera.jar
/system/framework/secimaging.jar
/system/framework/secmediarecorder.jar
/system/framework/secsmartcard.jar
/system/framework/secvision.jar
/system/framework/services.jar
/system/framework/svc.jar
/system/framework/sws.jar
/system/framework/telephony-common.jar
/system/framework/twframework.jar
/system/framework/uiautomator.jar
/system/framework/videowall.jar
/system/framework/wm.jar
/system/lib/dmg_fp.a
/system/lib/drm/libfwdlockengine.so
/system/lib/hw/alsa.msm8960.so
/system/lib/hw/audio.a2dp.default.so
/system/lib/hw/audio.primary.msm8960.so
/system/lib/hw/audio.tms.default.so
/system/lib/hw/audio.usb.default.so
/system/lib/hw/audio_policy.msm8960.so
/system/lib/hw/bluetooth.default.so
/system/lib/hw/copybit.msm8960.so
/system/lib/hw/gps.default.so
/system/lib/hw/gralloc.msm8960.so
/system/lib/hw/keystore.msm8960.so
/system/lib/hw/nfc_nci.MSM8960.so
/system/lib/hw/sensors.msm8960.so
/system/lib/hw/sensors_native_hal.so
/system/lib/libESR_Portable.a
/system/lib/libFFTEm.so
/system/lib/libFLAC.a
/system/lib/libFraunhoferAAC.a
/system/lib/libLLVM.so
/system/lib/libLLVMAnalysis.a
/system/lib/libMcClient.so
/system/lib/libMcRegistry.so
/system/lib/libMusicSquareLib.so
/system/lib/libOmxCore.so
/system/lib/libOmxVdec.so
/system/lib/libOmxVenc.so
/system/lib/libOpensslReg.so
/system/lib/libPaApi.so
/system/lib/libRS.so
/system/lib/libRSCpuRef.so
/system/lib/libRSDriver.so
/system/lib/libRScpp.so
/system/lib/libSR_AudioIn.so
/system/lib/libSamsungPkcs11Wrapper.so
/system/lib/libSecurityManagerNative.so
/system/lib/libSmartVolumeLib.so
/system/lib/libXIVGallery2013.so
/system/lib/lib_SA_GoogleFX_ver119k.so
/system/lib/lib_Samsung_Resampler.so
/system/lib/lib_SoundAlive_SRC192_ver205.so
/system/lib/lib_driver_cmd_qcwcn.a
/system/lib/lib_soundaliveresampler.so
/system/lib/libac_fp.so
/system/lib/libac_rx.so
/system/lib/libac_tx.so
/system/lib/libalsa-intf.so
/system/lib/libandroid_runtime.so
/system/lib/libandroid_servers.so
/system/lib/libandroid_ssrm.so
/system/lib/libandroidfw.so
/system/lib/libapplypatch.a
/system/lib/libasf_fileshareserver.so
/system/lib/libasf_mediaserver.so
/system/lib/libasf_mediashare.so
/system/lib/libasffilesharecp.a
/system/lib/libasffilesharedevice.a
/system/lib/libasfjniutil.a
/system/lib/libasfmediaserver.a
/system/lib/libasfmediasharecp.a
/system/lib/libaudioflinger.so
/system/lib/libaudiohw_sec.a
/system/lib/libaudioparameter.so
/system/lib/libaudiopolicy_sec.so
/system/lib/libaudiosa.so
/system/lib/libbcc.sha1.so
/system/lib/libbcc.so
/system/lib/libbinder.a
/system/lib/libbinder.so
/system/lib/libbt-brcm_bta.a
/system/lib/libbt-brcm_gki.a
/system/lib/libbt-brcm_stack.a
/system/lib/libbt-hci.so
/system/lib/libbt-utils.so
/system/lib/libbz.a
/system/lib/libc.a
/system/lib/libc.so
/system/lib/libc2dcolorconvert.so
/system/lib/libc_common.a
/system/lib/libc_nomalloc.a
/system/lib/libcamera_client.so
/system/lib/libcameraservice.so
/system/lib/libchord-v1.5.so
/system/lib/libchromium_net.so
/system/lib/libcnefeatureconfig.so
/system/lib/libcommon_time_client.so
/system/lib/libcompiler_rt-extras.a
/system/lib/libcompiler_rt.so
/system/lib/libcorkscrew.so
/system/lib/libcrypto-nofips_static.a
/system/lib/libcrypto.so
/system/lib/libctest.so
/system/lib/libcurl.so
/system/lib/libcutils.a
/system/lib/libcutils.so
/system/lib/libdashplayer.so
/system/lib/libdex.a
/system/lib/libdirencryption.so
/system/lib/libdiskconfig.so
/system/lib/libdiskusage.a
/system/lib/libdivxdrm.so
/system/lib/libdl.so
/system/lib/libdprw.so
/system/lib/libdrawglfunction.so
/system/lib/libdrmframework.so
/system/lib/libdrmframework_jni.so
/system/lib/libdrmframeworkcommon.a
/system/lib/libdrmutility.a
/system/lib/libdrmwvmcommon.a
/system/lib/libdumpstate.default.a
/system/lib/libdvm.so
/system/lib/libeffects.so
/system/lib/libepm.so
/system/lib/libevent.a
/system/lib/libexif.so
/system/lib/libexif_jni.so
/system/lib/libexifa.so
/system/lib/libexpat.so
/system/lib/libext.a
/system/lib/libext2_blkid.so
/system/lib/libext2_com_err.so
/system/lib/libext2_e2p.so
/system/lib/libext2_profile.so
/system/lib/libext2_quota.so
/system/lib/libext2_uuid.so
/system/lib/libext2fs.so
/system/lib/libext4.a
/system/lib/libext4_utils.so
/system/lib/libext4_utils_static.a
/system/lib/libext6.a
/system/lib/libfacerecognition.so
/system/lib/libfdlibm.a
/system/lib/libfs_mgr.a
/system/lib/libft2.so
/system/lib/libfwdlock-common.a
/system/lib/libgabi++.so
/system/lib/libgccdemangle.so
/system/lib/libgif.a
/system/lib/libgps.utils.so
/system/lib/libgsm.a
/system/lib/libgui.so
/system/lib/libhardware.so
/system/lib/libhardware_legacy.so
/system/lib/libharfbuzz.so
/system/lib/libharfbuzz_ng.so
/system/lib/libhealth_jni.so
/system/lib/libhwui.so
/system/lib/libhyphenation.a
/system/lib/libicui18n.so
/system/lib/libicuuc.so
/system/lib/libip4tc.a
/system/lib/libip6tc.a
/system/lib/libiprouteutil.so
/system/lib/libipsec.a
/system/lib/libjavacore.so
/system/lib/libjavacrypto.so
/system/lib/libjni_emailspellcheck.so
/system/lib/libjpeg.so
/system/lib/libjpeg_static.a
/system/lib/libjpega.so
/system/lib/libkeystore_binder.so
/system/lib/libkeyutils.so
/system/lib/libkikin.so
/system/lib/liblifevibes_mediashare_sw_jni.so
/system/lib/libloc_api_v02.so
/system/lib/libloc_core.so
/system/lib/libloc_eng.so
/system/lib/liblog.a
/system/lib/liblog.so
/system/lib/liblogwrap.a
/system/lib/liblogwrap.so
/system/lib/liblzf.a
/system/lib/libm.a
/system/lib/libm.so
/system/lib/libmasterless_common.so
/system/lib/libmasterless_controller.so
/system/lib/libmasterless_player.so
/system/lib/libmdnssd.so
/system/lib/libmedia.so
/system/lib/libmedia_helper.a
/system/lib/libmedia_jni.so
/system/lib/libmediaplayerservice.so
/system/lib/libmemalloc.so
/system/lib/libmincrypt.a
/system/lib/libmm-omxcore.so
/system/lib/libmtp.so
/system/lib/libmtp_samsung.so
/system/lib/libmtp_samsung_jni.so
/system/lib/libmusicbundle.a
/system/lib/libnativehelper.so
/system/lib/libnbaio.so
/system/lib/libnetlink.so
/system/lib/libnetutils.so
/system/lib/libnfc-nci-broadcom.a
/system/lib/libnfc-nci-protodisp.a
/system/lib/libnfc-nci.so
/system/lib/libnfc_nci_jni.so
/system/lib/libomadrm.so
/system/lib/liboverlay.so
/system/lib/libpac.so
/system/lib/libpcap.a
/system/lib/libphysicsmsc.so
/system/lib/libpixelflinger.so
/system/lib/libplayready_v2.0.so
/system/lib/libpng.a
/system/lib/libpng.so
/system/lib/libportable.so
/system/lib/libpower.so
/system/lib/libprotobuf-cpp-2.3.0-full.a
/system/lib/libprotobuf-cpp-2.3.0-lite.a
/system/lib/libquramagifencoder.so
/system/lib/libreference-ril.so
/system/lib/libregistermsext.a
/system/lib/libreverb.a
/system/lib/libril.so
/system/lib/librsloader.a
/system/lib/libsavsmeta.so
/system/lib/libsbrowser.so
/system/lib/libscheduling_policy.a
/system/lib/libscrypt_static.a
/system/lib/libsec-ril.so
/system/lib/libsec_cryptfs.a
/system/lib/libsec_devenc.so
/system/lib/libsec_ecryptfs.so
/system/lib/libsec_km.so
/system/lib/libsec_ode_km.so
/system/lib/libseccamera_jni.so
/system/lib/libseccameracore.so
/system/lib/libsecfips.so
/system/lib/libsecimaging.so
/system/lib/libsecmediarecorder_jni.so
/system/lib/libsecpkcs11_engine.so
/system/lib/libsecril-client.so
/system/lib/libsecure_storage.so
/system/lib/libsecure_storage_jni.so
/system/lib/libselinux.a
/system/lib/libselinux.so
/system/lib/libsfntly.a
/system/lib/libsharevia.so
/system/lib/libsharevia_jni.so
/system/lib/libsig.so
/system/lib/libskia.so
/system/lib/libskmipc.a
/system/lib/libskmm.so
/system/lib/libsmte.so
/system/lib/libsnote_core.so
/system/lib/libsonivox.so
/system/lib/libsoundpool.so
/system/lib/libspeexresampler.so
/system/lib/libsqlite.so
/system/lib/libsqlite3_android.a
/system/lib/libsqlite_jni.so
/system/lib/libssl.so
/system/lib/libstagefright.so
/system/lib/libstagefright_aacenc.a
/system/lib/libstagefright_amrnb_common.so
/system/lib/libstagefright_amrnbdec.a
/system/lib/libstagefright_amrnbenc.a
/system/lib/libstagefright_amrwbdec.a
/system/lib/libstagefright_amrwbenc.a
/system/lib/libstagefright_avc_common.so
/system/lib/libstagefright_avcenc.a
/system/lib/libstagefright_color_conversion.a
/system/lib/libstagefright_dash.a
/system/lib/libstagefright_enc_common.so
/system/lib/libstagefright_foundation.so
/system/lib/libstagefright_httplive.so
/system/lib/libstagefright_id3.a
/system/lib/libstagefright_m4vh263dec.a
/system/lib/libstagefright_m4vh263enc.a
/system/lib/libstagefright_matroska.a
/system/lib/libstagefright_mp3dec.a
/system/lib/libstagefright_mpeg2ts.a
/system/lib/libstagefright_nuplayer.a
/system/lib/libstagefright_omx.so
/system/lib/libstagefright_piffss.a
/system/lib/libstagefright_rtsp.a
/system/lib/libstagefright_soft_aacdec.so
/system/lib/libstagefright_soft_aacenc.so
/system/lib/libstagefright_soft_amrdec.so
/system/lib/libstagefright_soft_amrnbenc.so
/system/lib/libstagefright_soft_amrwbenc.so
/system/lib/libstagefright_soft_flacenc.so
/system/lib/libstagefright_soft_g711dec.so
/system/lib/libstagefright_soft_gsmdec.so
/system/lib/libstagefright_soft_h264dec.so
/system/lib/libstagefright_soft_h264enc.so
/system/lib/libstagefright_soft_mp3dec.so
/system/lib/libstagefright_soft_mpeg4dec.so
/system/lib/libstagefright_soft_mpeg4enc.so
/system/lib/libstagefright_soft_rawdec.so
/system/lib/libstagefright_soft_vorbisdec.so
/system/lib/libstagefright_soft_vpxdec.so
/system/lib/libstagefright_soft_vpxenc.so
/system/lib/libstagefright_timedtext.a
/system/lib/libstagefright_yuv.so
/system/lib/libstagefrighthw.so
/system/lib/libstagefrightwfdsink.a
/system/lib/libstdc++.a
/system/lib/libstdc++.so
/system/lib/libstlport.so
/system/lib/libstorage.a
/system/lib/libsurfaceflinger.so
/system/lib/libsurfaceflinger_ddmconnection.so
/system/lib/libsuspend.so
/system/lib/libswiftkeysdk-java.so
/system/lib/libsysutils.so
/system/lib/libthread_db.a
/system/lib/libthread_db.so
/system/lib/libtinyalsa.so
/system/lib/libtinyxml.so
/system/lib/libtranscoder_client.so
/system/lib/libtranscoder_converter.so
/system/lib/libtranscoder_engine.so
/system/lib/libtranscoder_service.so
/system/lib/libtscalendar.so
/system/lib/libui.so
/system/lib/libunz.a
/system/lib/libusbhost.so
/system/lib/libutils.a
/system/lib/libutils.so
/system/lib/libvideoeditor_3gpwriter.a
/system/lib/libvideoeditor_core.so
/system/lib/libvideoeditor_jni.so
/system/lib/libvideoeditor_mcs.a
/system/lib/libvideoeditor_osal.so
/system/lib/libvideoeditor_stagefrightshells.a
/system/lib/libvideoeditor_videofilters.so
/system/lib/libvideoeditorplayer.so
/system/lib/libvorbisidec.so
/system/lib/libvpx.a
/system/lib/libvwengine.so
/system/lib/libwebcore.a
/system/lib/libwebcore.so
/system/lib/libwebm.a
/system/lib/libwebp-decode.a
/system/lib/libwebp-encode.a
/system/lib/libwpa_client.so
/system/lib/libwvdecryptcommon.a
/system/lib/libwvmcommon.a
/system/lib/libxml2.a
/system/lib/libxml2.so
/system/lib/libxslt.a
/system/lib/libxtables.a
/system/lib/libz.a
/system/lib/libz.so
/system/lib/libzipfile.a
/system/lib/lights.msm8960.a
/system/lib/modp_b64.a
/system/lib/npsmobexlib.a
/system/lib/power.misc.a
/system/lib/soundfx/libaudiopreprocessing.so
/system/lib/soundfx/libbundlewrapper.so
/system/lib/soundfx/libdownmix.so
/system/lib/soundfx/libeffectproxy.so
/system/lib/soundfx/libldnhncr.so
/system/lib/soundfx/libreverbwrapper.so
/system/lib/soundfx/libvisualizer.so
/system/lib/ss_dalvik_lib.a
/system/lib/ssl/engines/libkeystore.so
/system/priv-app/AutomationTest_FB.apk
/system/priv-app/CSC.apk
/system/priv-app/CloudAgent.apk
/system/priv-app/ContextProvider.apk
/system/priv-app/DSMForwarding.apk
/system/priv-app/DSMLawmo.apk
/system/priv-app/DefaultContainerService.apk
/system/priv-app/DeviceKeystring.apk
/system/priv-app/DeviceTest.apk
/system/priv-app/DirectShareManager.apk
/system/priv-app/EasyLauncher.apk
/system/priv-app/FmmDM.apk
/system/priv-app/FmmDS.apk
/system/priv-app/FotaClient.apk
/system/priv-app/FusedLocation.apk
/system/priv-app/HwModuleTest.apk
/system/priv-app/HybridRadio2013.apk
/system/priv-app/InputDevices.apk
/system/priv-app/KLMSAgent.apk
/system/priv-app/Keyguard.apk
/system/priv-app/Kies.apk
/system/priv-app/LogsProvider.apk
/system/priv-app/NoiseField.apk
/system/priv-app/OmaCP.apk
/system/priv-app/PhaseBeam.apk
/system/priv-app/PhoneErrService.apk
/system/priv-app/SMemo2.apk
/system/priv-app/SNS.apk
/system/priv-app/SPDClient.apk
/system/priv-app/SecCalendarProvider.apk
/system/priv-app/SecContactsProvider.apk
/system/priv-app/SecContacts_OSup.apk
/system/priv-app/SecDownloadProvider.apk
/system/priv-app/SecGallery2013.apk
/system/priv-app/SecLauncher3.apk
/system/priv-app/SecLiveWallpapersPicker.apk
/system/priv-app/SecMediaProvider.apk
/system/priv-app/SecMms.apk
/system/priv-app/SecNoteMyFiles.apk
/system/priv-app/SecPhone.apk
/system/priv-app/SecSafetyAssurance.apk
/system/priv-app/SecSettings.apk
/system/priv-app/SecSettingsProvider.apk
/system/priv-app/SecVideoListUpg.apk
/system/priv-app/SecVideoPlayerUpg.apk
/system/priv-app/SecWallpaperChooser.apk
/system/priv-app/SensorService2_5.apk
/system/priv-app/ServiceModeApp_RIL.apk
/system/priv-app/SimpleWidget.apk
/system/priv-app/StoryAlbumWidget.apk
/system/priv-app/SyncmlDM.apk
/system/priv-app/SyncmlDS.apk
/system/priv-app/SystemUI.apk
/system/priv-app/Tag.apk
/system/priv-app/TrimApp_phone_J.apk
/system/priv-app/VpnDialogs.apk
/system/priv-app/WallpaperCropper.apk
/system/priv-app/sCloudBackupApp.apk
/system/priv-app/sCloudDataRelay.apk
/system/priv-app/sCloudDataSync.apk
/system/priv-app/sCloudQuotaApp.apk
/system/priv-app/sCloudSyncCalendar.apk
/system/priv-app/sCloudSyncContacts.apk
/system/priv-app/sCloudSyncSBrowser.apk
/system/priv-app/sCloudSyncSNote.apk
/system/priv-app/serviceModeApp_FB.apk
/system/priv-app/wssyncmlnps.apk
/system/usr/icu/icudt51l.dat
/system/vendor/lib/hw/lights.msm8960.so
/system/vendor/lib/libbt-vendor.so
/system/vendor/lib/liblocationservice.so
/system/xbin/dexdump
Notices for "https://registry.yarnpkg.com/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz#167ed70368886081f74b5c36c65a88c03b66d1a9"
  integrity sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-numeric-separator@^7.8.3":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.1.tgz#25761ee7410bc8cf97327ba741ee94e4a61b7d99"
  integrity sha512-uTd0OsHrpe3tH5gRPTxG8Voh99/WCU78vIm5NMRYPAqC8lR4vajt6KkCAknCHrx24vkPdd/05yfdGSB4EIY2mg==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-syntax-object-rest-spread@^7.2.0", "@babel/plugin-syntax-object-rest-spread@^7.8.0":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz#60e225edcbd98a640332a2e72dd3e66f1af55871"
  integrity sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-optional-catch-binding@^7.2.0", "@babel/plugin-syntax-optional-catch-binding@^7.8.0":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz#6111a265bcfb020eb9efd0fdfd7d26402b9ed6c1"
  integrity sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-optional-chaining@^7.7.4":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz#4f69c2ab95167e0180cd5336613f8c5788f7d48a"
  integrity sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==
  dependencies:
    "@babel/helper-plugin-utils" "^7.8.0"

"@babel/plugin-syntax-top-level-await@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.10.1.tgz#8b8733f8c57397b3eaa47ddba8841586dcaef362"
  integrity sha512-hgA5RYkmZm8FTFT3yu2N9Bx7yVVOKYT6yEdXXo6j2JTm0wNxgqaGeQVaSHRjhfnQbX91DtjFB6McRFSlcJH3xQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-syntax-typescript@^7.10.1":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.10.1.tgz#5e82bc27bb4202b93b949b029e699db536733810"
  integrity sha512-X/d8glkrAtra7CaQGMiGs/OGa6XgUzqPcBXCIGFCpCqnfGlT0Wfbzo/B89xHhnInTaItPK8LALblVXcUOEh95Q==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-arrow-functions@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.10.1.tgz#cb5ee3a36f0863c06ead0b409b4cc43a889b295b"
  integrity sha512-6AZHgFJKP3DJX0eCNJj01RpytUa3SOGawIxweHkNX2L6PYikOZmoh5B0d7hIHaIgveMjX990IAa/xK7jRTN8OA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-async-to-generator@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.10.1.tgz#e5153eb1a3e028f79194ed8a7a4bf55f862b2062"
  integrity sha512-XCgYjJ8TY2slj6SReBUyamJn3k2JLUIiiR5b6t1mNCMSvv7yx+jJpaewakikp0uWFQSF7ChPPoe3dHmXLpISkg==
  dependencies:
    "@babel/helper-module-imports" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/helper-remap-async-to-generator" "^7.10.1"

"@babel/plugin-transform-block-scoped-functions@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.10.1.tgz#146856e756d54b20fff14b819456b3e01820b85d"
  integrity sha512-B7K15Xp8lv0sOJrdVAoukKlxP9N59HS48V1J3U/JGj+Ad+MHq+am6xJVs85AgXrQn4LV8vaYFOB+pr/yIuzW8Q==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-block-scoping@^7.6.3":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.10.1.tgz#47092d89ca345811451cd0dc5d91605982705d5e"
  integrity sha512-8bpWG6TtF5akdhIm/uWTyjHqENpy13Fx8chg7pFH875aNLwX8JxIxqm08gmAT+Whe6AOmaTeLPe7dpLbXt+xUw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    lodash "^4.17.13"

"@babel/plugin-transform-classes@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-classes/-/plugin-transform-classes-7.10.1.tgz#6e11dd6c4dfae70f540480a4702477ed766d733f"
  integrity sha512-P9V0YIh+ln/B3RStPoXpEQ/CoAxQIhRSUn7aXqQ+FZJ2u8+oCtjIXR3+X0vsSD8zv+mb56K7wZW1XiDTDGiDRQ==
  dependencies:
    "@babel/helper-annotate-as-pure" "^7.10.1"
    "@babel/helper-define-map" "^7.10.1"
    "@babel/helper-function-name" "^7.10.1"
    "@babel/helper-optimise-call-expression" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/helper-replace-supers" "^7.10.1"
    "@babel/helper-split-export-declaration" "^7.10.1"
    globals "^11.1.0"

"@babel/plugin-transform-computed-properties@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.10.1.tgz#59aa399064429d64dce5cf76ef9b90b7245ebd07"
  integrity sha512-mqSrGjp3IefMsXIenBfGcPXxJxweQe2hEIwMQvjtiDQ9b1IBvDUjkAtV/HMXX47/vXf14qDNedXsIiNd1FmkaQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-destructuring@^7.6.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.10.1.tgz#abd58e51337815ca3a22a336b85f62b998e71907"
  integrity sha512-V/nUc4yGWG71OhaTH705pU8ZSdM6c1KmmLP8ys59oOYbT7RpMYAR3MsVOt6OHL0WzG7BlTU076va9fjJyYzJMA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-dotall-regex@^7.4.4", "@babel/plugin-transform-dotall-regex@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.10.1.tgz#920b9fec2d78bb57ebb64a644d5c2ba67cc104ee"
  integrity sha512-19VIMsD1dp02RvduFUmfzj8uknaO3uiHHF0s3E1OHnVsNj8oge8EQ5RzHRbJjGSetRnkEuBYO7TG1M5kKjGLOA==
  dependencies:
    "@babel/helper-create-regexp-features-plugin" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-duplicate-keys@^7.5.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.10.1.tgz#c900a793beb096bc9d4d0a9d0cde19518ffc83b9"
  integrity sha512-wIEpkX4QvX8Mo9W6XF3EdGttrIPZWozHfEaDTU0WJD/TDnXMvdDh30mzUl/9qWhnf7naicYartcEfUghTCSNpA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-exponentiation-operator@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.10.1.tgz#279c3116756a60dd6e6f5e488ba7957db9c59eb3"
  integrity sha512-lr/przdAbpEA2BUzRvjXdEDLrArGRRPwbaF9rvayuHRvdQ7lUTTkZnhZrJ4LE2jvgMRFF4f0YuPQ20vhiPYxtA==
  dependencies:
    "@babel/helper-builder-binary-assignment-operator-visitor" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-for-of@^7.4.4":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.10.1.tgz#ff01119784eb0ee32258e8646157ba2501fcfda5"
  integrity sha512-US8KCuxfQcn0LwSCMWMma8M2R5mAjJGsmoCBVwlMygvmDUMkTCykc84IqN1M7t+agSfOmLYTInLCHJM+RUoz+w==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-function-name@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.10.1.tgz#4ed46fd6e1d8fde2a2ec7b03c66d853d2c92427d"
  integrity sha512-//bsKsKFBJfGd65qSNNh1exBy5Y9gD9ZN+DvrJ8f7HXr4avE5POW6zB7Rj6VnqHV33+0vXWUwJT0wSHubiAQkw==
  dependencies:
    "@babel/helper-function-name" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-literals@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-literals/-/plugin-transform-literals-7.10.1.tgz#5794f8da82846b22e4e6631ea1658bce708eb46a"
  integrity sha512-qi0+5qgevz1NHLZroObRm5A+8JJtibb7vdcPQF1KQE12+Y/xxl8coJ+TpPW9iRq+Mhw/NKLjm+5SHtAHCC7lAw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-member-expression-literals@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-member-expression-literals/-/plugin-transform-member-expression-literals-7.10.1.tgz#90347cba31bca6f394b3f7bd95d2bbfd9fce2f39"
  integrity sha512-UmaWhDokOFT2GcgU6MkHC11i0NQcL63iqeufXWfRy6pUOGYeCGEKhvfFO6Vz70UfYJYHwveg62GS83Rvpxn+NA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-modules-amd@^7.5.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.10.1.tgz#65950e8e05797ebd2fe532b96e19fc5482a1d52a"
  integrity sha512-31+hnWSFRI4/ACFr1qkboBbrTxoBIzj7qA69qlq8HY8p7+YCzkCT6/TvQ1a4B0z27VeWtAeJd6pr5G04dc1iHw==
  dependencies:
    "@babel/helper-module-transforms" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"
    babel-plugin-dynamic-import-node "^2.3.3"

"@babel/plugin-transform-modules-commonjs@7.7.0":
  version "7.7.0"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.7.0.tgz#3e5ffb4fd8c947feede69cbe24c9554ab4113fe3"
  integrity sha512-KEMyWNNWnjOom8vR/1+d+Ocz/mILZG/eyHHO06OuBQ2aNhxT62fr4y6fGOplRx+CxCSp3IFwesL8WdINfY/3kg==
  dependencies:
    "@babel/helper-module-transforms" "^7.7.0"
    "@babel/helper-plugin-utils" "^7.0.0"
    "@babel/helper-simple-access" "^7.7.0"
    babel-plugin-dynamic-import-node "^2.3.0"

"@babel/plugin-transform-modules-commonjs@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.10.1.tgz#d5ff4b4413ed97ffded99961056e1fb980fb9301"
  integrity sha512-AQG4fc3KOah0vdITwt7Gi6hD9BtQP/8bhem7OjbaMoRNCH5Djx42O2vYMfau7QnAzQCa+RJnhJBmFFMGpQEzrg==
  dependencies:
    "@babel/helper-module-transforms" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/helper-simple-access" "^7.10.1"
    babel-plugin-dynamic-import-node "^2.3.3"

"@babel/plugin-transform-modules-systemjs@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.10.1.tgz#9962e4b0ac6aaf2e20431ada3d8ec72082cbffb6"
  integrity sha512-ewNKcj1TQZDL3YnO85qh9zo1YF1CHgmSTlRQgHqe63oTrMI85cthKtZjAiZSsSNjPQ5NCaYo5QkbYqEw1ZBgZA==
  dependencies:
    "@babel/helper-hoist-variables" "^7.10.1"
    "@babel/helper-module-transforms" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"
    babel-plugin-dynamic-import-node "^2.3.3"

"@babel/plugin-transform-modules-umd@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.10.1.tgz#ea080911ffc6eb21840a5197a39ede4ee67b1595"
  integrity sha512-EIuiRNMd6GB6ulcYlETnYYfgv4AxqrswghmBRQbWLHZxN4s7mupxzglnHqk9ZiUpDI4eRWewedJJNj67PWOXKA==
  dependencies:
    "@babel/helper-module-transforms" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-named-capturing-groups-regex@^7.7.0":
  version "7.8.3"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.8.3.tgz#a2a72bffa202ac0e2d0506afd0939c5ecbc48c6c"
  integrity sha512-f+tF/8UVPU86TrCb06JoPWIdDpTNSGGcAtaD9mLP0aYGA0OS0j7j7DHJR0GTFrUZPUU6loZhbsVZgTh0N+Qdnw==
  dependencies:
    "@babel/helper-create-regexp-features-plugin" "^7.8.3"

"@babel/plugin-transform-new-target@^7.4.4":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.10.1.tgz#6ee41a5e648da7632e22b6fb54012e87f612f324"
  integrity sha512-MBlzPc1nJvbmO9rPr1fQwXOM2iGut+JC92ku6PbiJMMK7SnQc1rytgpopveE3Evn47gzvGYeCdgfCDbZo0ecUw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-object-super@^7.5.5":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.10.1.tgz#2e3016b0adbf262983bf0d5121d676a5ed9c4fde"
  integrity sha512-WnnStUDN5GL+wGQrJylrnnVlFhFmeArINIR9gjhSeYyvroGhBrSAXYg/RHsnfzmsa+onJrTJrEClPzgNmmQ4Gw==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/helper-replace-supers" "^7.10.1"

"@babel/plugin-transform-parameters@^7.10.1", "@babel/plugin-transform-parameters@^7.4.4":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.10.1.tgz#b25938a3c5fae0354144a720b07b32766f683ddd"
  integrity sha512-tJ1T0n6g4dXMsL45YsSzzSDZCxiHXAQp/qHrucOq5gEHncTA3xDxnd5+sZcoQp+N1ZbieAaB8r/VUCG0gqseOg==
  dependencies:
    "@babel/helper-get-function-arity" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-property-literals@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-property-literals/-/plugin-transform-property-literals-7.10.1.tgz#cffc7315219230ed81dc53e4625bf86815b6050d"
  integrity sha512-Kr6+mgag8auNrgEpbfIWzdXYOvqDHZOF0+Bx2xh4H2EDNwcbRb9lY6nkZg8oSjsX+DH9Ebxm9hOqtKW+gRDeNA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-react-display-name@^7.0.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.10.1.tgz#e6a33f6d48dfb213dda5e007d0c7ff82b6a3d8ef"
  integrity sha512-rBjKcVwjk26H3VX8pavMxGf33LNlbocMHdSeldIEswtQ/hrjyTG8fKKILW1cSkODyRovckN/uZlGb2+sAV9JUQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-react-jsx-self@^7.0.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.10.1.tgz#22143e14388d72eb88649606bb9e46f421bc3821"
  integrity sha512-4p+RBw9d1qV4S749J42ZooeQaBomFPrSxa9JONLHJ1TxCBo3TzJ79vtmG2S2erUT8PDDrPdw4ZbXGr2/1+dILA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/plugin-syntax-jsx" "^7.10.1"

"@babel/plugin-transform-react-jsx-source@^7.0.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.10.1.tgz#30db3d4ee3cdebbb26a82a9703673714777a4273"
  integrity sha512-neAbaKkoiL+LXYbGDvh6PjPG+YeA67OsZlE78u50xbWh2L1/C81uHiNP5d1fw+uqUIoiNdCC8ZB+G4Zh3hShJA==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/plugin-syntax-jsx" "^7.10.1"

"@babel/plugin-transform-react-jsx@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.10.1.tgz#91f544248ba131486decb5d9806da6a6e19a2896"
  integrity sha512-MBVworWiSRBap3Vs39eHt+6pJuLUAaK4oxGc8g+wY+vuSJvLiEQjW1LSTqKb8OUPtDvHCkdPhk7d6sjC19xyFw==
  dependencies:
    "@babel/helper-builder-react-jsx" "^7.10.1"
    "@babel/helper-builder-react-jsx-experimental" "^7.10.1"
    "@babel/helper-plugin-utils" "^7.10.1"
    "@babel/plugin-syntax-jsx" "^7.10.1"

"@babel/plugin-transform-regenerator@^7.7.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.10.1.tgz#10e175cbe7bdb63cc9b39f9b3f823c5c7c5c5490"
  integrity sha512-B3+Y2prScgJ2Bh/2l9LJxKbb8C8kRfsG4AdPT+n7ixBHIxJaIG8bi8tgjxUMege1+WqSJ+7gu1YeoMVO3gPWzw==
  dependencies:
    regenerator-transform "^0.14.2"

"@babel/plugin-transform-reserved-words@^7.2.0":
  version "7.10.1"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-reserved-words/-/plugin-transform-reserved-words-7.10.1.tgz#0fc1027312b4d1c3276a57890c8ae3bcc0b64a86"
  integrity sha512-qN1OMoE2nuqSPmpTqEM7OvJ1FkMEV+BjVeZZm9V9mq/x1JLKQ4pcv8riZJMNN3u2AUGl0ouOMjRr2siecvHqUQ==
  dependencies:
    "@babel/helper-plugin-utils" "^7.10.1"

"@babel/plugin-transform-runtime@7.6.2":
  version "7.6.2"
  resolved "https://registry.yarnpkg.com/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.6.2.tgz#2669f67c1fae0ae8d8bf696e4263ad52cb98b6f8"
  integrity sha512-cqULw/QB4yl73cS5Y0TZlQSjDvNkzDbu0FurTZyHlJpWE5T3PCMdnyV+xXoH1opr1ldyHODe3QAX3OMAii5NxA==
  dependencies:Tomo.electro!6z!0l!7<|!/-`/-'!ZX!3O/''
    "@babel/helper-module-imports" "^7.0.0
                   /-|\\ /
       ||  \||
       ||  | aiai.dockep.pittock/ 
     ||||||  #8642
       ||| \||   $0.9
       -|- ;;;;;;;;;*13690"
       |_|           
                          | ÅÏÆĪ 
   ___________                       |
  :|||||          | ÅÏÆĪ 
                          |                   |      |
      |                    |
    |||                      | 
   ||||       ÅÏÆĪ      :|||||          | 
                          |                   |      |
    ÅÏÆĪ  |                    | ÅÏÆĪ 
    |||                      | 
   ||||                   ÅÏÆĪ     |                   |   |||
      |              |                   |   |||
      |                    |
       |                   | 
         ÅÏÆĪ    :|||||          | 
                          |                   |      |
      |             ÅÏÆĪ       |
    |||                      | 
   ||||                        |                   |   ||| ÅÏÆĪ 
      |                |   ÅÏÆĪ                |
                          |
                          | 
               :|||||          | 
                  ÅÏÆĪ        |                   |      |
      |                    | ÅÏÆĪ 
 ÅÏÆĪ   |||                      | 
   ||||                        |                   |   |||
      |              |                   |
                          |
                          | 
                 :|||||          | 
                          |   ÅÏÆĪ                |      |
    ÅÏÆĪ  |                    |
    |||                      | 
   ||||               ÅÏÆĪ         |                   |   |||
      |            |                   |
                          |
                          | ÅÏÆĪ 
      ÅÏÆĪ                    |                   |
                          |  :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |   
                          | 
 ÅÏÆĪ ÅÏÆĪ   ÅÏÆĪ                     |                   |_______________
                          |
                          |
                          |
                          | 
                        :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |     |
                          |
                          |
                          |
                          | 
                          |  3X3O:Tomo.electro.intrgity/'hcore.hinpatsword/___________     ______
             -----  /¤¤¤¤¤\||`\\  | /____\
            //^^^^  |/"¤"\|||||\\ |¤|
            "/      ||   |||||||\\|!|
            "|      ||   |||---------------
            |\___ _-|\___/||||||/ """":""""
             '----'-\_____/||||/ /|||
                          |||_|/  |¿|_____
                                  |_\____/
    20S20S20S20S20S2OS2OS2OS2OS2OS
    os__z___₩___T___N___A___ç__20
    2o       | |__||\/||__|     0s
    2s      Electro.LTD\øJTH✔  o2
    ZS    --------------------  OZ
    ZSOZSOZSOZSOZSOZSOZSOZSOZSOZSO
                           3X3O:Tomo.electro.intrgity/'hcore.hinpatsword/___________     ______
             -----  /¤¤¤¤¤\||`\\  | /____\
            //^^^^  |/"¤"\|||||\\ |¤|
            "/      ||   |||||||\\|!|
            "|      ||   |||---------------
            |\___ _-|\___/||||||/ """":""""
             '----'-\_____/||||/ /|||
                          |||_|/  |¿|_____
                                  |_\____/
    20S20S20S20S20S2OS2OS2OS2OS2OS
    os__z___₩___T___N___A___ç__20
    2o       | |__||\/||__|     0s
    2s      Electro.LTD\øJTH✔  o2
    ZS    --------------------  OZ
    ZSOZSOZSOZSOZSOZSOZSOZSOZSOZSO
 



                3X3O:Tomo.electro.intrgity/'hcore.hinpatsword/___________     ______
             -----  /¤¤¤¤¤\||`\\  | /____\
            //^^^^  |/"¤"\|||||\\ |¤|
            "/      ||   |||||||\\|!|
            "|      ||   |||---------------
            |\___ _-|\___/||||||/ """":""""
             '----'-\_____/||||/ /|||
                          |||_|/  |¿|_____
                                  |_\____/
    20S20S20S20S20S2OS2OS2OS2OS2OS
    os__z___₩___T___N___A___ç__20
    2o       | |__||\/||__|     0s
    2s      Electro.LTD\øJTH✔  o2
    ZS    --------------------  OZ
    ZSOZSOZSOZSOZSOZSOZSOZSOZSOZSO
 
                       3X3O:Tomo.electro.intrgity/'hcore.hinpatsword/___________     ______
             -----  /¤¤¤¤¤\||`\\  | /____\
            //^^^^  |/"¤"\|||||\\ |¤|
            "/      ||   |||||||\\|!|
            "|      ||   |||---------------
            |\___ _-|\___/||||||/ """":""""
             '----'-\_____/||||/ /|||
                          |||_|/  |¿|_____
                                  |_\____/
    20S20S20S20S20S2OS2OS2OS2OS2OS
    os__z___₩___T___N___A___ç__20
    2o       | |__||\/||__|     0s
    2s      Electro.LTD\øJTH✔  o2
    ZS    --------------------  OZ
    ZSOZSOZSOZSOZSOZSOZSOZSOZSOZSO
 




              3X3O:Tomo.electro.intrgity/'hcore.hinpatsword/___________     ______
             -----  /¤¤¤¤¤\||`\\  | /____\
            //^^^^  |/"¤"\|||||\\ |¤|
            "/      ||   |||||||\\|!|
            "|      ||   |||---------------
            |\___ _-|\___/||||||/ """":""""
             '----'-\_____/||||/ /|||
                          |||_|/  |¿|_____
                                  |_\____/
    20S20S20S20S20S2OS2OS2OS2OS2OS
    os__z___₩___T___N___A___ç__20
    2o       | |__||\/||__|     0s
    2s      Electro.LTD\øJTH✔  o2
    ZS    --------------------  OZ
    ZSOZSOZSOZSOZSOZSOZSOZSOZSOZSO
 -------------------------------------'
---------------------------''''''''''''''' NhàHiểu rồiDocsMở rộng
SPHINX
mục lụcmô-đun |trước đó |Nhà nhân sư  |Tài liệu »Các dự án sử dụng Sphinx
Mục lục
Các dự án sử dụng Sphinx
Tài liệu sử dụng chủ đề alabaster
Tài liệu sử dụng chủ đề cổ điển
Tài liệu sử dụng chủ đề sphinxdoc
Tài liệu sử dụng chủ đề thiên nhiên
Tài liệu sử dụng chủ đề nội trang khác
Tài liệu sử dụng sphinx_rtd_theme
Tài liệu sử dụng sphinx_bootstrap_theme
Tài liệu sử dụng chủ đề tùy chỉnh hoặc được tích hợp trong một trang web
Trang chủ và các trang web không phải tài liệu khác
Sách được sản xuất bằng Sphinx
Các luận văn được sản xuất bằng Sphinx
Các dự án tích hợp chức năng Sphinx
Chủ đề trước
Changelog

Trang này
Hiển thị nguồn This XML file does not appear to have any style information associated with it. The document tree is shown below.
<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
<channel>
<title>TechSoup Blog</title>
<link>https://blog.techsoup.org/posts</link>
<description>
TechSoup supports nonprofits, charities and libraries by providing access to donations and discount rates on software, hardware and services from major brands
</description>
<language>en-us</language>
<pubDate>Wed, 24 Nov 2021 21:56:08 GMT</pubDate>
<dc:date>2021-11-24T21:56:08Z</dc:date>
<dc:language>en-us</dc:language>
<item>
<title>
Know Your Audience: Writing Content That Reaches the Right People
</title>
<link>
https://blog.techsoup.org/posts/know-your-audience-writing-content-that-reaches-the-right-people
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/know-your-audience-writing-content-that-reaches-the-right-people" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.24-contentcal-webinar-recap-thumbnail.jpg" alt="Know Your Audience: Writing Content That Reaches the Right People" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>In this blog post, we'll walk through six simple steps to consider when developing a content strategy and calendar at your nonprofit. When people research a cause they are interested in, the two main channels they use are Internet searches and social media. These areas are great opportunities for content marketing, and learning how to harness them is essential to your nonprofit's growth.</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/know-your-audience-writing-content-that-reaches-the-right-people" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.24-contentcal-webinar-recap-thumbnail.jpg" alt="Know Your Audience: Writing Content That Reaches the Right People" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>In this blog post, we'll walk through six simple steps to consider when developing a content strategy and calendar at your nonprofit. When people research a cause they are interested in, the two main channels they use are Internet searches and social media. These areas are great opportunities for content marketing, and learning how to harness them is essential to your nonprofit's growth.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Fknow-your-audience-writing-content-that-reaches-the-right-people&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Social Media</category>
<category>Marketing and Communications</category>
<pubDate>Wed, 24 Nov 2021 21:56:08 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/know-your-audience-writing-content-that-reaches-the-right-people
</guid>
<dc:date>2021-11-24T21:56:08Z</dc:date>
<dc:creator>Andy Lambert</dc:creator>
</item>
<item>
<title>
Best Practices in Sending Year-End Statements to Donors
</title>
<link>
https://blog.techsoup.org/posts/best-practices-in-sending-year-end-statements-to-donors
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/best-practices-in-sending-year-end-statements-to-donors" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.23-year-end-donor-statements-thumbnail.jpg" alt="Best Practices in Sending Year-End Statements to Donors" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>Year-end tax statements provide donors with a convenient summary of their charitable contributions. They also offer your organization an additional opportunity to express its appreciation. We know how busy fundraisers are at the end of the year, so we've put together these simple guidelines for you. And to make things even simpler, we included an example to help you create effective year-end tax statements.</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/best-practices-in-sending-year-end-statements-to-donors" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.23-year-end-donor-statements-thumbnail.jpg" alt="Best Practices in Sending Year-End Statements to Donors" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>Year-end tax statements provide donors with a convenient summary of their charitable contributions. They also offer your organization an additional opportunity to express its appreciation. We know how busy fundraisers are at the end of the year, so we've put together these simple guidelines for you. And to make things even simpler, we included an example to help you create effective year-end tax statements.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Fbest-practices-in-sending-year-end-statements-to-donors&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Marketing and Communications</category>
<category>Donor Management</category>
<pubDate>Tue, 23 Nov 2021 19:25:35 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/best-practices-in-sending-year-end-statements-to-donors
</guid>
<dc:date>2021-11-23T19:25:35Z</dc:date>
<dc:creator>Virginia Davidson</dc:creator>
</item>
<item>
<title>How to Collect Online Donations in 8 Steps</title>
<link>
https://blog.techsoup.org/posts/how-to-collect-online-donations-in-8-steps
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-collect-online-donations-in-8-steps" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.17-how-to-collect-online-donations-thumbnail.jpg" alt="How to Collect Online Donations in 8 Steps" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p><span style="font-style: italic;">Note: This blog post is republished with permission from </span><a href="https://www.techsoup.org/keela" style="font-style: italic;">Keela</a><span style="font-style: italic;">.</span></p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-collect-online-donations-in-8-steps" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.17-how-to-collect-online-donations-thumbnail.jpg" alt="How to Collect Online Donations in 8 Steps" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p><span style="font-style: italic;">Note: This blog post is republished with permission from </span><a href="https://www.techsoup.org/keela" style="font-style: italic;">Keela</a><span style="font-style: italic;">.</span></p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Fhow-to-collect-online-donations-in-8-steps&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Donor Management</category>
<pubDate>Wed, 17 Nov 2021 19:37:42 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/how-to-collect-online-donations-in-8    /-|\\ /
       ||  \||
       ||  | aiai.dockep.pittock/ 
     ||||||  #8642
       ||| \||   $0.9
       -|- ;;;;;;;;;*13690"
       |_|           
                          | ÅÏÆĪ 
   ___________                       |
  :|||||          | ÅÏÆĪ 
                          |                   |      |
      |                    |
    |||                      | 
   ||||       ÅÏÆĪ      :|||||          | 
                          |                   |      |
    ÅÏÆĪ  |                    | ÅÏÆĪ 
    |||                      | 
   ||||                   ÅÏÆĪ     |                   |   |||
      |              |                   |   |||
      |                    |
       |                   | 
         ÅÏÆĪ    :|||||          | 
                          |                   |      |
      |             ÅÏÆĪ       |
    |||                      | 
   ||||                        |                   |   ||| ÅÏÆĪ 
      |                |   ÅÏÆĪ                |
                          |
                          | 
               :|||||          | 
                  ÅÏÆĪ        |                   |      |
      |                    | ÅÏÆĪ 
 ÅÏÆĪ   |||                      | 
   ||||                        |                   |   |||
      |              |                   |
                          |
                          | 
                 :|||||          | 
                          |   ÅÏÆĪ                |      |
    ÅÏÆĪ  |                    |
    |||                      | 
   ||||               ÅÏÆĪ         |                   |   |||
      |            |                   |
                          |
                          | ÅÏÆĪ 
      ÅÏÆĪ                    |                   |
                          |  :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |   
                          | 
 ÅÏÆĪ ÅÏÆĪ   ÅÏÆĪ                     |                   |_______________
                          |
                          |
                          |
                          | 
                        :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |     |
                          |
                          |
                          |
                          | 
                          |  -steps
</guid>
<dc:date>2021-11-17T19:37:42Z</dc:date>
<dc:creator>Ines Alvergne</dc:creator>
</item>
<item>
<title>How to Leverage E-Commerce to Raise Funds</title>
<link>
https://blog.techsoup.org/posts/how-to-leverage-e-commerce-to-raise-funds
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-leverage-e-commerce-to-raise-funds" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.15-how-to-leverage-ecommerce-thumbnail.jpg" alt="How to Leverage E-Commerce to Raise Funds" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>With the pandemic have come many hard lessons in the world of nonprofits and businesses everywhere. One of those lessons is the absolute necessity of growing diverse income streams to maintain stability in otherwise uncertain times. Many organizations that have relied on events, galas, community events, or other in-person fundraisers have had to face the tough reality that those cornerstone events might not always be a staple in their larger fundraising strategy.</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-leverage-e-commerce-to-raise-funds" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.15-how-to-leverage-ecommerce-thumbnail.jpg" alt="How to Leverage E-Commerce to Raise Funds" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>With the pandemic have come many hard lessons in the world of nonprofits and businesses everywhere. One of those lessons is the absolute necessity of growing diverse income streams to maintain stability in otherwise uncertain times. Many organizations that have relied on events, galas, community events, or other in-person fundraisers have had to face the tough reality that those cornerstone events might not always be a staple in their larger fundraising strategy.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Fhow-to-leverage-e-commerce-to-raise-funds&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>E-Commerce</category>
<category>Marketing and Communications</category>
<category>Donor Management</category>
<pubDate>Mon, 15 Nov 2021 22:52:30 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/how-to-leverage-e-commerce-to-raise-funds
</guid>
<dc:date>2021-11-15T22:52:30Z</dc:date>
<dc:creator>
Janelle Levesque, Director of Digital Growth, Tapp Network
</dc:creator>
</item>
<item>
<title>
How to Accept Cryptocurrency Donations at Your Nonprofit
</title>
<link>
https://blog.techsoup.org/posts/how-to-accept-cryptocurrency-donations-at-your-nonprofit
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-accept-cryptocurrency-donations-at-your-nonprofit" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.10-how-to-accept-crypto-this-giving-season-thumbnail.jpg" alt="How to Accept Cryptocurrency Donations at Your Nonprofit" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>Cryptocurrency is surging in popularity, with the market cap reaching <a href="https://coinmarketcap.com/">over $2 trillion</a> in 2021. Many donors are now holding appreciated Bitcoin, Ethereum, and other coins and donating them to nonprofits that are equipped to accept them.</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-accept-cryptocurrency-donations-at-your-nonprofit" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.10-how-to-accept-crypto-this-giving-season-thumbnail.jpg" alt="How to Accept Cryptocurrency Donations at Your Nonprofit" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>Cryptocurrency is surging in popularity, with the market cap reaching <a href="https://coinmarketcap.com/">over $2 trillion</a> in 2021. Many donors are now holding appreciated Bitcoin, Ethereum, and other coins and donating them to nonprofits that are equipped to accept them.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Fhow-to-accept-cryptocurrency-donations-at-your-nonprofit&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Operations</category>
<category>Donor Management</category>
<pubDate>Thu, 11 Nov 2021 22:02:26 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/how-to-accept-cryptocurrency-donations-at-your-nonprofit
</guid>
<dc:date>2021-11-11T22:02:26Z</dc:date>
<dc:creator>Tina Roh</dc:creator>
</item>
<item>
<title>
8 GivingTuesday Resources to Encourage Generosity and Social Change
</title>
<link>
https://blog.techsoup.org/posts/8-givingtuesday-resources-to-encourage-generosity-and-social-change
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/8-givingtuesday-resources-to-encourage-generosity-and-social-change" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.09-giving-tuesday-2021-thumbnail.jpg" alt="8 GivingTuesday Resources to Encourage Generosity and Social Change" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p><a href="https://www.givingtuesday.org/about/">GivingTuesday</a> is "a global movement that reimagines a world built upon shared humanity and radical generosity." In 2020, <a href="https://www.givingtuesday.org/blog/after-year-of-global-crisis-millions-respond-with-massive-swell-of-generosity-and-shared-humanity-on-givingtuesday-2020/">34.8 million people participated</a>, a 29 percent increase over 2019. The next GivingTuesday takes place on November 30, 2021, and although the movement has a reputation for bringing in a high number of donations, there are many other ways to encourage social change. With the obvious highlight of fundraising success, how else can we leverage the movement to promote and demonstrate generosity in our communities?</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/8-givingtuesday-resources-to-encourage-generosity-and-social-change" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.09-giving-tuesday-2021-thumbnail.jpg" alt="8 GivingTuesday Resources to Encourage Generosity and Social Change" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p><a href="https://www.givingtuesday.org/about/">GivingTuesday</a> is "a global movement that reimagines a world built upon shared humanity and radical generosity." In 2020, <a href="https://www.givingtuesday.org/blog/after-year-of-global-crisis-millions-respond-with-massive-swell-of-generosity-and-shared-humanity-on-givingtuesday-2020/">34.8 million people participated</a>, a 29 percent increase over 2019. The next GivingTuesday takes place on November 30, 2021, and although the movement has a reputation for bringing in a high number of donations, there are many other ways to encourage social change. With the obvious highlight of fundraising success, how else can we leverage the movement to promote and demonstrate generosity in our communities?</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2F8-givingtuesday-resources-to-encourage-generosity-and-social-change&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Marketing and Communications</category>
<category>Donor Management</category>
<pubDate>Tue, 09 Nov 2021 23:22:42 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/8-givingtuesday-resources-to-encourage-generosity-and-social-change
</guid>
<dc:date>2021-11-09T23:22:42Z</dc:date>
<dc:creator>Steven Davidson</dc:creator>
</item>
<item>
<title>
Utilization Requirements for Donated Microsoft Cloud Licenses
</title>
<link>
https://blog.techsoup.org/posts/utilization-requirements-for-donated-microsoft-cloud-licenses
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/utilization-requirements-for-donated-microsoft-cloud-licenses" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.05-msft-utilization-thumbnail.jpg" alt="Utilization Requirements for Donated Microsoft Cloud Licenses" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>A recent policy change that Microsoft put into place will impact nonprofits that have acquired donated Microsoft 365 or Office 365 licenses. In this blog post, we'll outline all the details your nonprofit needs to know and point you toward a helpful resource we've developed in order to help you manage these changes.</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/utilization-requirements-for-donated-microsoft-cloud-licenses" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.05-msft-utilization-thumbnail.jpg" alt="Utilization Requirements for Donated Microsoft Cloud Licenses" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>A recent policy change that Microsoft put into place will impact nonprofits that have acquired donated Microsoft 365 or Office 365 licenses. In this blog post, we'll outline all the details your nonprofit needs to know and point you toward a helpful resource we've developed in order to help you manage these changes.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Futilization-requirements-for-donated-microsoft-cloud-licenses&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Operations</category>
<category>The Cloud</category>
<category>Tech Planning</category>
<pubDate>Fri, 05 Nov 2021 13:00:00 GMT</pubDate>
<author>blog@techsoup.org (TechSoup Staff)</author>
<guid>
https://blog.techsoup.org/posts/utilization-requirements-for-donated-microsoft-cloud-licenses
</guid>
<dc:date>2021-11-05T13:00:00Z</dc:date>
</item>
<item>
<title>
Food Charities Create Networks of Resiliency with the Tackle Hunger Map
</title>
<link>
https://blog.techsoup.org/posts/food-charities-create-networks-of-resiliency-with-the-tackle-hunger-map
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/food-charities-create-networks-of-resiliency-with-the-tackle-hunger-map" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.04-hunger-map-blog-thumbnail.jpg" alt="Food Charities Create Networks of Resiliency with the Tackle Hunger Map" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>In 2020, one in five U.S. residents sought out food assistance. That was an increase of 50 percent from the year before, <a href="https://www.feedingamerica.org/about-us/press-room/60-million-turned-to-charitable-food-2020">according to Feeding America</a>. The increased need continues to be seen across the country as families contend with rising costs of living. But it's not that there isn't enough food to provide for those in need; it's a matter of getting the right food to where it is needed at food charities when the needs arise.</p>    /-|\\ /
       ||  \||
       ||  | aiai.dockep.pittock/ 
     ||||||  #8642
       ||| \||   $0.9
       -|- ;;;;;;;;;*13690"
       |_|           
                          | ÅÏÆĪ 
   ___________                       |
  :|||||          | ÅÏÆĪ 
                          |                   |      |
      |                    |
    |||                      | 
   ||||       ÅÏÆĪ      :|||||          | 
                          |                   |      |
    ÅÏÆĪ  |                    | ÅÏÆĪ 
    |||                      | 
   ||||                   ÅÏÆĪ     |                   |   |||
      |              |                   |   |||
      |                    |
       |                   | 
         ÅÏÆĪ    :|||||          | 
                          |                   |      |
      |             ÅÏÆĪ       |
    |||                      | 
   ||||                        |                   |   ||| ÅÏÆĪ 
      |                |   ÅÏÆĪ                |
                          |
                          | 
               :|||||          | 
                  ÅÏÆĪ        |                   |      |
      |                    | ÅÏÆĪ 
 ÅÏÆĪ   |||                      | 
   ||||                        |                   |   |||
      |              |                   |
                          |
                          | 
                 :|||||          | 
                          |   ÅÏÆĪ                |      |
    ÅÏÆĪ  |                    |
    |||                      | 
   ||||               ÅÏÆĪ         |                   |   |||
      |            |                   |
                          |
                          | ÅÏÆĪ 
      ÅÏÆĪ                    |                   |
                          |  :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |   
                          | 
 ÅÏÆĪ ÅÏÆĪ   ÅÏÆĪ                     |                   |_______________
                          |
                          |
                          |
                          | 
                        :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |     |
                          |
                          |
                          |
                          | 
                          |  
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/food-charities-create-networks-of-resiliency-with-the-tackle-hunger-map" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.04-hunger-map-blog-thumbnail.jpg" alt="Food Charities Create Networks of Resiliency with the Tackle Hunger Map" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>In 2020, one in five U.S. residents sought out food assistance. That was an increase of 50 percent from the year before, <a href="https://www.feedingamerica.org/about-us/press-room/60-million-turned-to-charitable-food-2020">according to Feeding America</a>. The increased need continues to be seen across the country as families contend with rising costs of living. But it's not that there isn't enough food to provide for those in need; it's a matter of getting the right food to where it is needed at food charities when the needs arise.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Ffood-charities-create-networks-of-resiliency-with-the-tackle-hunger-map&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Web Development</category>
<category>Data Management</category>
<pubDate>Thu, 04 Nov 2021 17:05:17 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/food-charities-create-networks-of-resiliency-with-the-tackle-hunger-map
</guid>
<dc:date>2021-11-04T17:05:17Z</dc:date>
<dc:creator>
Alison Reese, Executive Director, Souper Bowl of Caring and the Tackle Hunger Movement
</dc:creator>
</item>
<item>
<title>
How to Prepare Your Website for the 2021 Giving Season
</title>
<link>
https://blog.techsoup.org/posts/how-to-prepare-your-website-for-the-2021-giving-season
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-prepare-your-website-for-the-2021-giving-season" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.01-how-to-prepare-your-website-for-giving-season-thumbnail.jpg" alt="How to Prepare Your Website for the 2021 Giving Season" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>With nearly <a href="https://neonone.com/resources/blog/year-end-giving-statistics/">30 percent</a> of annual giving occurring in December, all nonprofit organizations should already be preparing for a successful end-of-year fundraising initiative.</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/how-to-prepare-your-website-for-the-2021-giving-season" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202111/blog-2.0-21.11.01-how-to-prepare-your-website-for-giving-season-thumbnail.jpg" alt="How to Prepare Your Website for the 2021 Giving Season" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>With nearly <a href="https://neonone.com/resources/blog/year-end-giving-statistics/">30 percent</a> of annual giving occurring in December, all nonprofit organizations should already be preparing for a successful end-of-year fundraising initiative.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Fhow-to-prepare-your-website-for-the-2021-giving-season&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Social Media</category>
<category>Web Development</category>
<category>Marketing and Communications</category>
<pubDate>Mon, 01 Nov 2021 18:08:07 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/how-to-prepare-your-website-for-the-2021-giving-season
</guid>
<dc:date>2021-11-01T18:08:07Z</dc:date>
<dc:creator>
Janelle Levesque, Director of Digital Growth, Tapp Network
</dc:creator>
</item>
<item>
<title>
Fall 2021 Fundraising Strategies to Help Your Nonprofit Succeed
</title>
<link>
https://blog.techsoup.org/posts/fall-2021-fundraising-strategies-to-help-your-nonprofit-succeed
</link>
<description>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/fall-2021-fundraising-strategies-to-help-your-nonprofit-succeed" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202110/blog-2.0-21.10.29-causevox-fundraising-blog-thumbnail.jpg" alt="Fall 2021 Fundraising Strategies to Help Your Nonprofit Succeed" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>Now that we're well into the final quarter of 2021, many nonprofit fundraisers are working to find a fundraising strategy that is flexible enough to respond to COVID and the delta variant while also drawing in donors who are feeling some major Zoom fatigue.</p>
</description>
<content:encoded>
<div class="hs-featured-image-wrapper"> <a href="https://blog.techsoup.org/posts/fall-2021-fundraising-strategies-to-help-your-nonprofit-succeed" title="" class="hs-featured-image-link"> <img src="https://blog.techsoup.org/hubfs/Blog%20Images/202110/blog-2.0-21.10.29-causevox-fundraising-blog-thumbnail.jpg" alt="Fall 2021 Fundraising Strategies to Help Your Nonprofit Succeed" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> </div> <p>Now that we're well into the final quarter of 2021, many nonprofit fundraisers are working to find a fundraising strategy that is flexible enough to respond to COVID and the delta variant while also drawing in donors who are feeling some major Zoom fatigue.</p> <img src="https://track.hubspot.com/__ptq.gif?a=2980581&amp;k=14&amp;r=https%3A%2F%2Fblog.techsoup.org%2Fposts%2Ffall-2021-fundraising-strategies-to-help-your-nonprofit-succeed&amp;bu=https%253A%252F%252Fblog.techsoup.org%252Fposts&amp;bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">
</content:encoded>
<category>Marketing and Communications</category>
<category>Donor Management</category>
<pubDate>Fri, 29 Oct 2021 13:00:00 GMT</pubDate>
<guid>
https://blog.techsoup.org/posts/fall-2021-fundraising-strategies-to-help-your-nonprofit-succeed
</guid>
<dc:date>2021-10-29T13:00:00Z</dc:date>
<dc:creator>
Candace Cody, Manager of Content and Education, CauseVox
</dc:creator>
</item>
</channel>
</rss>
Tìm kiếm nhanh
Các dự án sử dụng Sphinx
This is an (incomplete) alphabetic list of projects that use Sphinx or are experimenting with using it for their documentation. If you like to be included, please mail to the Google group.

I’ve grouped the list into sections to make it easier to find interesting examples.

Documentation using the alabaster theme
Alabaster

Blinker

Calibre

CherryPy

Click (customized)

coala (customized)

CodePy

Django Q

Eve (Python REST API framework)

Fabric

Fityk

Flask

Flask-OpenID

Invoke

Jinja

Lino (customized)

marbl

MDAnalysis (customized)

MeshPy

Molecule

Momotor LTI

Podman

PyCUDA

PyOpenCL

PyLangAcq

pytest (customized)

python-apt

PyVisfile

Requests

searx

Spyder (customized)

Tablib

urllib3 (customized)

Werkzeug

Write the Docs
    /-|\\ /
       ||  \||
       ||  | aiai.dockep.pittock/ 
     ||||||  #8642
       ||| \||   $0.9
       -|- ;;;;;;;;;*13690"
       |_|           
                          | ÅÏÆĪ 
   ___________                       |
  :|||||          | ÅÏÆĪ 
                          |                   |      |
      |                    |
    |||                      | 
   ||||       ÅÏÆĪ      :|||||          | 
                          |                   |      |
    ÅÏÆĪ  |                    | ÅÏÆĪ 
    |||                      | 
   ||||                   ÅÏÆĪ     |                   |   |||
      |              |                   |   |||
      |                    |
       |                   | 
         ÅÏÆĪ    :|||||          | 
                          |                   |      |
      |             ÅÏÆĪ       |
    |||                      | 
   ||||                        |                   |   ||| ÅÏÆĪ 
      |                |   ÅÏÆĪ                |
                          |
                          | 
               :|||||          | 
                  ÅÏÆĪ        |                   |      |
      |                    | ÅÏÆĪ 
 ÅÏÆĪ   |||                      | 
   ||||                        |                   |   |||
      |              |                   |
                          |
                          | 
                 :|||||          | 
                          |   ÅÏÆĪ                |      |
    ÅÏÆĪ  |                    |
    |||                      | 
   ||||               ÅÏÆĪ         |                   |   |||
      |            |                   |
                          |
                          | ÅÏÆĪ 
      ÅÏÆĪ                    |                   |
                          |  :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |   
                          | 
 ÅÏÆĪ ÅÏÆĪ   ÅÏÆĪ                     |                   |_______________
                          |
                          |
                          |
                          | 
                        :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |     |
                          |
                          |
                          |
                          | 
                          |  
Documentation using the classic theme
Advanced Generic Widgets (customized)

Apache CouchDB (customized)

APSW

Arb

Bazaar (customized)

Beautiful Soup

Blender API

Bugzilla

Buildbot

CMake (customized)

Chaco (customized)

Cormoran

DEAP (customized)

Director

EZ-Draw (customized)

F2py

Generic Mapping Tools (GMT) (customized)

Genomedata

GetFEM++ (customized)

Glasgow Haskell Compiler (customized)

Grok (customized)

GROMACS

GSL Shell

Hands-on Python Tutorial

Kaa (customized)

Leo (customized)

Mayavi (customized)

MediaGoblin (customized)

mpmath

OpenCV (customized)

OpenEXR

OpenGDA

phpDocumentor (customized)

Plone (customized)

PyEMD

Pyevolve

Pygame (customized)

PyMQI

PyQt4 (customized)

PyQt5 (customized)

Python 2

Python 3 (customized)

Python Packaging Authority (customized)

Ring programming language (customized)

SageMath (customized)

Segway

simuPOP (customized)

Sprox (customized)

SymPy

TurboGears (customized)

tvtk

Varnish (customized, alabaster for index)

Waf

wxPython Phoenix (customized)

Yum

z3c

zc.async (customized)

Zope (customized)

Documentation using the sphinxdoc theme
ABRT

cartopy

Jython

LLVM

Matplotlib

MDAnalysis Tutorial

NetworkX

PyCantonese

PyRe

Pyre

pySPACE

Pysparse

PyTango

Python Wild Magic (customized)

RDKit

Reteisi (customized)

Sqlkit (customized)

Turbulenz

Documentation using the nature theme
Alembic

Cython

easybuild

libLAS (customized)

Lmod

MapServer (customized)

Pandas

pyglet (customized)

PyWavelets

Setuptools

Spring Python

StatsModels (customized)

Sylli

Documentation using another builtin theme
Breathe (haiku)

MPipe (sphinx13)

NLTK (agogo)

PyPubSub (bizstyle)

Pylons (pyramid)

Pyramid web framework (pyramid)

RxDock

Sphinx (sphinx13) :-)

Valence (haiku, customized)

Documentation using sphinx_rtd_theme
Annotator

Ansible (customized)

Arcade

aria2

ASE

asvin

Autofac

BigchainDB

Blender Reference Manual

Blocks

bootstrap-datepicker

Certbot

CKAN

Copr Buildsystem (customized)

Coreboot

Chainer (customized)

citeproc-js

cloud-init

CodeIgniter

Conda

Corda

Dask

Databricks (customized)

Dataiku DSS

DNF

Distro Tracker

Django-cas-ng

dj-stripe

edX

Electrum

Elemental

ESWP3

Ethereum Homestead

Exhale

Faker

Fidimag

Flake8

Flatpak

FluidDyn

Fluidsim

Gallium

GeoNode

Glances

Godot

Graylog

GPAW (customized)

HDF5 for Python (h5py)

HyperKitty

Hyperledger Fabric

Hyperledger Sawtooth

IdentityServer

Idris

Inkscape (customized)

javasphinx

Jupyter Notebook

Kanboard

Lasagne

latexindent.pl

Learning Apache Spark with Python

LibCEED

Linguistica

Linux kernel

Mailman

MathJax

MDTraj (customized)

Mesa 3D

micca - MICrobial Community Analysis

MicroPython

Mink

Mockery

mod_wsgi

MoinMoin

Mopidy

mpi4py

MyHDL

Mypy
    /-|\\ /
       ||  \||
       ||  | aiai.dockep.pittock/ 
     ||||||  #8642
       ||| \||   $0.9
       -|- ;;;;;;;;;*13690"
       |_|           
                          | ÅÏÆĪ 
   ___________                       |
  :|||||          | ÅÏÆĪ 
                          |                   |      |
      |                    |
    |||                      | 
   ||||       ÅÏÆĪ      :|||||          | 
                          |                   |      |
    ÅÏÆĪ  |                    | ÅÏÆĪ 
    |||                      | 
   ||||                   ÅÏÆĪ     |                   |   |||
      |              |                   |   |||
      |                    |
       |                   | 
         ÅÏÆĪ    :|||||          | 
                          |                   |      |
      |             ÅÏÆĪ       |
    |||                      | 
   ||||                        |                   |   ||| ÅÏÆĪ 
      |                |   ÅÏÆĪ                |
                          |
                          | 
               :|||||          | 
                  ÅÏÆĪ        |                   |      |
      |                    | ÅÏÆĪ 
 ÅÏÆĪ   |||                      | 
   ||||                        |                   |   |||
      |              |                   |
                          |
                          | 
                 :|||||          | 
                          |   ÅÏÆĪ                |      |
    ÅÏÆĪ  |                    |
    |||                      | 
   ||||               ÅÏÆĪ         |                   |   |||
      |            |                   |
                          |
                          | ÅÏÆĪ 
      ÅÏÆĪ                    |                   |
                          |  :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |   
                          | 
 ÅÏÆĪ ÅÏÆĪ   ÅÏÆĪ                     |                   |_______________
                          |
                          |
                          |
                          | 
                        :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |     |
                          |
                          |
                          |
                          | 
                          |  
Netgate Docs

Nextcloud Server

Nextflow

nghttp2

NICOS (customized)

OpenFAST

Panda3D (customized)

Pelican

picamera

Pillow

pip

Paver

peewee

Phinx

phpMyAdmin

PHPUnit

PHPWord

PROS (customized)

Pushkin

Pweave

pyca/cryptograhpy

PyNaCl

pyOpenSSL

PyPy

python-sqlparse

PyVISA

pyvista

Read The Docs

RenderDoc

ROCm Platform

Free your information from their silos (French) (customized)

Releases Sphinx extension

Qtile

Quex

QuTiP

Satchmo

Scapy

SimGrid

SimPy

six

SlamData

Solidity

Sonos Controller (SoCo)

Sphinx AutoAPI

sphinx-argparse

sphinx-tabs

Sphinx-Gallery (customized)

Sphinx with Github Webpages

SpotBugs

StarUML

Sublime Text Unofficial Documentation

SunPy

Sylius

Syncthing

Tango Controls (customized)

Topshelf

Theano

ThreatConnect

TrueNAS (customized)

Tuleap

TYPO3 (customized)

Veyon

Ubiquity

uWSGI

virtualenv

Wagtail

Web Application Attack and Audit Framework (w3af)

Weblate

x265

Zeek

Zulip

Documentation using sphinx_bootstrap_theme
Bootstrap Theme

C/C++ Software Development with Eclipse

Dataverse

e-cidadania

Hangfire

Hedge

ObsPy

Open Dylan

OPNFV

Pootle

PyUblas

seaborn

Documentation using a custom theme or integrated in a website
AIOHTTP

Apache Cassandra

Astropy

Bokeh

Boto 3

CakePHP

Ceph

Chef

CKAN

Confluent Platform

Django

django CMS

Doctrine

Enterprise Toolkit for Acrobat products

FreeFEM

fmt

Gameduino

gensim

GeoServer

gevent

GHC - Glasgow Haskell Compiler

Guzzle

H2O.ai

Heka

Istihza (Turkish Python documentation project)

JupyterHub

Kombu

Lasso

Mako

MirrorBrain

Mitiq

MongoDB

Music21

MyHDL

ndnSIM

nose

ns-3

NumPy

ObjectListView

OpenERP

OpenCV

OpenLayers

OpenTURNS

Open vSwitch

PlatformIO

Psycopg

PyEphem

Pygments

Plone User Manual (German)

PSI4
    /-|\\ /
       ||  \||
       ||  | aiai.dockep.pittock/ 
     ||||||  #8642
       ||| \||   $0.9
       -|- ;;;;;;;;;*13690"
       |_|           
                          | ÅÏÆĪ 
   ___________                       |
  :|||||          | ÅÏÆĪ 
                          |                   |      |
      |                    |
    |||                      | 
   ||||       ÅÏÆĪ      :|||||          | 
                          |                   |      |
    ÅÏÆĪ  |                    | ÅÏÆĪ 
    |||                      | 
   ||||                   ÅÏÆĪ     |                   |   |||
      |              |                   |   |||
      |                    |
       |                   | 
         ÅÏÆĪ    :|||||          | 
                          |                   |      |
      |             ÅÏÆĪ       |
    |||                      | 
   ||||                        |                   |   ||| ÅÏÆĪ 
      |                |   ÅÏÆĪ                |
                          |
                          | 
               :|||||          | 
                  ÅÏÆĪ        |                   |      |
      |                    | ÅÏÆĪ 
 ÅÏÆĪ   |||                      | 
   ||||                        |                   |   |||
      |              |                   |
                          |
                          | 
                 :|||||          | 
                          |   ÅÏÆĪ                |      |
    ÅÏÆĪ  |                    |
    |||                      | 
   ||||               ÅÏÆĪ         |                   |   |||
      |            |                   |
                          |
                          | ÅÏÆĪ 
      ÅÏÆĪ                    |                   |
                          |  :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |   
                          | 
 ÅÏÆĪ ÅÏÆĪ   ÅÏÆĪ                     |                   |_______________
                          |
                          |
                          |
                          | 
                        :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |     |
                          |
                          |
                          |
                          | 
                          |  
PyMOTW

python-aspectlib (sphinx_py3doc_enhanced_theme)

QGIS

qooxdoo

Roundup

SaltStack

scikit-learn

SciPy

Scrapy

Seaborn

Selenium

Self

Substance D

Sulu

SQLAlchemy

tinyTiM

Twisted

Ubuntu Packaging Guide

WebFaction

WTForms

Homepages and other non-documentation sites
Alan Crosswell’s Using the Django REST Framework and DRF-JSONAPI

Arizona State University PHY494/PHY598/CHM598 Simulation approaches to Bio-and Nanophysics (classic)

Benoit Boissinot (classic, customized)

EBI Cloud Consultancy Team (sphinx_rtd_theme)

Eric Holscher (alabaster)

Florian Diesch

Institute for the Design of Advanced Energy Systems (IDAES) (sphinx_rtd_theme)

IDAES Examples (sphinx_rtd_theme)

Lei Ma’s Statistical Mechanics lecture notes (sphinx_bootstrap_theme)

Loyola University Chicago CS Academic Programs (sphinx_rtd_theme, customized)

PyXLL (sphinx_bootstrap_theme, customized)

SciPy Cookbook (sphinx_rtd_theme)

Tech writer at work blog (custom theme)

The Wine Cellar Book (sphinxdoc)

Thomas Cokelaer’s Python, Sphinx and reStructuredText tutorials (standard)

UC Berkeley ME233 Advanced Control Systems II course (sphinxdoc)

Željko Svedružić’s Biomolecular Structure and Function Laboratory (BioSFLab) (sphinx_bootstrap_theme)

Books produced using Sphinx
“The Art of Community” (Japanese translation)

“Die Wahrheit des Sehens. Der DEKALOG von Krzysztof Kieślowski”

“Expert Python Programming”

“Expert Python Programming” (Japanese translation)

“Expert Python Programming 2nd Edition” (Japanese translation)

“The Hitchhiker’s Guide to Python”

“LassoGuide”

“Learning Sphinx” (in Japanese)

“Learning System Programming with Go (Japanese)”

“Mercurial: the definitive guide (Second edition)”

“Mithril – The fastest clientside MVC (Japanese)”

“Pioneers and Prominent Men of Utah”

“Pomodoro Technique Illustrated” (Japanese translation)

“Professional Software Development”

“Python Professional Programming” (in Japanese)

“Python Professional Programming 2nd Edition” (in Japanese)

“Python Professional Programming 3rd Edition” (in Japanese)

Python Course by Yuri Petrov (Russian)

“Real World HTTP – Learning The Internet and Web Technology via its history and code (Japanese)”

“Redmine Primer 5th Edition (in Japanese)”

“The repoze.bfg Web Application Framework”

“The Self-Taught Programmer” (Japanese translation)

“Simple and Steady Way of Learning for Software Engineering” (in Japanese)

“Software-Dokumentation mit Sphinx”

“Theoretical Physics Reference”

“The Varnish Book”

Theses produced using Sphinx
“A Web-Based System for Comparative Analysis of OpenStreetMap Data by the Use of CouchDB”

“Content Conditioning and Distribution for Dynamic Virtual Worlds”

“The Sphinx Thesis Resource”

Projects integrating Sphinx functionality
Read the Docs, a software-as-a-service documentation hosting platform, uses Sphinx to automatically build documentation updates that are pushed to GitHub.

Spyder, the Scientific Python Development Environment, uses Sphinx in its help pane to render rich documentation for functions, classes and methods automatically or on-demand.

indexmodules |previous |Sphinx home |Documentation »Projects using Sphinx
© Copyright 2007-2021, Georg Brandl and the Sphinx team. Created using Sphinx 5.0.0+.
  v: mas_ter  
       /-|\\ /
       ||  \||
       ||  | aiai.dockep.pittock/ 
     ||||||  #8642
       ||| \||   $0.9
       -|- ;;;;;;;;;*13690"
       |_|           
                          | ÅÏÆĪ 
   ___________                       |
  :|||||          | ÅÏÆĪ 
                          |                   |      |
      |                    |
    |||                      | 
   ||||       ÅÏÆĪ      :|||||          | 
                          |                   |      |
    ÅÏÆĪ  |                    | ÅÏÆĪ 
    |||                      | 
   ||||                   ÅÏÆĪ     |                   |   |||
      |              |                   |   |||
      |                    |
       |                   | 
         ÅÏÆĪ    :|||||          | 
                          |                   |      |
      |             ÅÏÆĪ       |
    |||                      | 
   ||||                        |                   |   ||| ÅÏÆĪ 
      |                |   ÅÏÆĪ                |
                          |
                          | 
               :|||||          | 
                  ÅÏÆĪ        |                   |      |
      |                    | ÅÏÆĪ 
 ÅÏÆĪ   |||                      | 
   ||||                        |                   |   |||
      |              |                   |
                          |
                          | 
                 :|||||          | 
                          |   ÅÏÆĪ                |      |
    ÅÏÆĪ  |                    |
    |||                      | 
   ||||               ÅÏÆĪ         |                   |   |||
      |            |                   |
                          |
                          | ÅÏÆĪ 
      ÅÏÆĪ                    |                   |
                          |  :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |   
                          | 
 ÅÏÆĪ ÅÏÆĪ   ÅÏÆĪ                     |                   |_______________
                          |
                          |
                          |
                          | 
                        :|||||          | 
                          |                   |      |
      |                    |
    |||                      | 
   ||||                        |                   |   |||
      |     |
                          |
                          |
                          |
                          | 
                          |  
tocdepth: 2

.. _examples:

.. include:: ..Tomo.electro/EXAMPLES















{%0.1 end 100%)Tomo.electro.ltd&blever.magic.deveradmkn.com/'
