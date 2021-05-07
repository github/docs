Install pdftotext under RedHat / RHEL / Fedora / CentOS Linux
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

🐧 Get the latest tutorials on Linux, Open Source & DevOps via RSS feed or Weekly email newsletter.

🐧 9 comments so far... add one ↓
🔎 To search, type & hit enter...

Related Tutorials
HowTo: Linux Convert .OGV Format To .AVI Video Format: '{% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}.com{% endif %} Help Documentation'
featuredLinks:
  gettingStarted:
    - /github/getting-started-with-github/set-up-git
    - /github/authenticating-to-github/connecting-to-github-with-ssh
    - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github
    - /github/writing-on-github/basic-writing-and-formatting-syntax
  popular:
    - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
    - /github/authenticating-to-github
    - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
    - /github/getting-started-with-github/managing-remote-repositories
    - /github/working-with-github-pages
versions: '*'
children:
  - github
  - admin
  - organizations
  - code-security
  - actions
  - packages
  - developers
  - rest
  - graphql
  - insights
  - discussions
  - codespaces
  - sponsors
  - communities
  - pages
  - education
  - desktop
  - early-access
externalProducts:
  cli:
    id: cli
    name: GitHub CLI
    href: 'https://cli.github.com/manual'
    external: true
  atom:
    id: atom
    name: Atom
    href: 'https://atom.io/docs'
    external: true
  electron:
    id: electron
    name: Electron
    href: 'https://electronjs.org/docs'
    external: true
  codeql:
    id: codeql
    name: 'CodeQL'
    href: 'https://codeql.github.com/docs'
    external: true
---
