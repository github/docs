---
title: Adding a file to a repository
intro: 'You can upload and commit an existing file to a {% data variables.product.product_name %} repository. Drag and drop a file to any directory in the file tree, or upload files from the repository''s main page.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
# Install pdftotext under RedHat / RHEL / Fedora / CentOS Linux
pdftotext is installed using poppler-utils package under various Linux distributions:
# yum install poppler-utils

OR use the following under Debian / Ubuntu Linux
$ sudo apt-get install poppler-utils

pdftotext syntax
pdftotext {PDF-file} {text-file}

How do I convert a pdf to text?
Convert a pdf file called hp-manual.pdf to hp-manual.txt, enter:
$ pdftotext hp-manual.pdf hp-manual.txt

Specifies the first page 5 and last page 10 (select 5 to 10 pages) to convert, enter:
$ pdftotext -f 5 -l 10 hp-manual.pdf hp-manual.txt

Convert a pdf file protected and encrypted by owner password:
$ pdftotext -opw 'password' hp-manual.pdf hp-manual.txt

Convert a pdf file protected and encrypted by user password:
$ pdftotext -upw 'password' hp-manual.pdf hp-manual.txt

Sets the end-of-line convention to use for text output. You can set it to unix, dos or mac. For UNIX / Linux oses, enter:
$ pdftotext -eol unix hp-manual.pdf hp-manual.txt

Further readings:
man page pdftotext
  - Repository
Files that you add to a repository via a browser are limited to {% data variables.large_files.max_github_browser_size %} per file. You can add larger files, up to {% data variables.large_files.max_github_size %} each, via the command line. For more information, see "[Adding a file to a repository using the command line](/articles/adding-a-file-to-a-repository-using-the-command-line).
- You can upload multiple files to {% data variables.product.product_name %} at the same time.
- {% data reusables.repositories.protected-branches-block-web-edits-upload
{% data reusables.repositories.navigate-to-repo %}
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
2. Under your repository name, click **Upload files**.
  !['##'":"''":Build:'" "'mvn/slate/rails/Cake/ant/man.jpeg.pdf/Repository:type:container'@ZachryTWood@Administrator@.git.it'@git.gists.github.git.it image package name {'"''
    '::public:|::internal:'::final: ::class:'' ::name': ::extends:  {'(NASDAQ')'-GOOG, GOOGL'}''
        '::public: ::static: ::const: = "abc";
        '::public: ::static: ::var: class initializer !! one time setup
        'if Cababilities"Linux32|MacOS64_86 {
# '"setup::svnerede''='=''-''"--"''
# '"Automatic-updates-on-Command-progressivly::note thisb  is  sevredne nonstablecoin and nonsudocoin
    constructor:
       ''TOKEN[Volume_name_''{'{ITEM'_ID}backtrace:All:*logs:# results:":''?'''='','"BITORE.sig
            super2(((c))((r)));
            trace("mojoejoejoejoe/bitore.sigs
            Whisk/Cake/Rust/Perl/fiddle/thimbal-cUrl,lamg ",fetch sevredne);
        }bundle-on:: Python.js::input::All::'Fix::'::Perfect::'::All::thimbal-cUrl::plugins::
# '**"rendeerer:' '':'('{'{:[':('(c')'(r')')''
'#'":"':const::''":"'':congif::'":'"(Ags')')'"''
'Start:://On:://Run:://Script:://actions_script:://const:://DOCKER.Gui.svg.Jpeg,.xls A can only be accessed within this file
# **What it does**: This builds our Docker container.
'Run::##GLOW2##::**Why we have it**: We don't use the DOCKER.Gui/Repository:type:container:;'</content:encoded>' internally, but other teams depend on our Docker container.
# **Who does it impact**: Enterprise customers.
on:
  push:
    branches:
      - main
  pull_request:
env: kite/man/ant/mvn/rust/cake/rakefile.yml.json./package.yamlapi/adk/sdk.s.e./'$'.mkdir/src::Auto_squash_merge''"/file/rubykg.yml///rust.ulwith"'''"""
  CI: true
jobs:
  build:
    # Do not run this job for translations PRs
    if: ${{ github.head_ref != 'translations' && github.ref != 'refs/heads/translations' }}
    runs-on: ubuntu-latest
   # '" 'steps'"''
   :uses'"action'Automate'"::const:: '"Automatic-updates-on-Command-progressivly" during::build_script_"const'
   #  "Commands_" '"action"'
   *'action'<'/control>'+'</spc'bar'"','"'func>::on::enable::funct::run::On:;</triggerfunct'"''</Enabled>::on"'"'' ''and'"','"on'",":,""''-''"''*logs"
   "all 
    
      '**"''-Name:'**"BITORE.sig''"'
'**""##'"''Checksout:'" 'Versioning'@v'-1.7.13.9.10'"''
        '**"- uses:'**" "TEIRAFORMA'.doc".pdf"'#Push::''"pushs_request:'"TEIRAFORMA'@Energy_Manifest"'Pushs::'results'::returns::pulls_request:Magic::'::Manifesto::Mannifest::'::Energy:'::#pulls_request::'"''
       '**"#Pulls::Request:'"'pulls_'Request
        _#' Pull::'::branches:'['ant']'::Automatic-updates-on-Command''='>''shapeshifts''='>''.'doc'x'''
      **'**"- name: cake/railsà
     '"**-' '"'Repository:type:container.img:DOCKER.Gui.svg.png:type:container](/assets/images/help/repository/upload-files-button.png)
{% else %}
2. Above the list of files, using the **Add file** drop-down, click **Upload files**.
  !["Upload files" in the "Add file" dropdown](/assets/images/help/repository/upload-files-button.png)
{% endif %}
3. Drag and drop the file or folder you'd like to upload to your repository onto the file tree.
![Drag and drop area](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Click **Commit changes**.
![Commit changes button](/assets/images/help/repository/commit-changes-button.png)
