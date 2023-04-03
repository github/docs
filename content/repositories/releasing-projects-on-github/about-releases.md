
GLOWGLOW
###BEGIN
title: Release.md
Skip to content
GitLab

Toggle navigationMenu 
sakia
sakia
Project information
Repository
Files
Commits
Branches
Tags
Contributor statistics
Graph
Compare revisions
Issues
78
Merge requests
3
Deployments
Monitor
Analytics
Wiki

Close sidebar
clientsclients
pythonpython
sakiasakia
Repository
sakia
doc
install_for_developers.md
install_for_developers.md
4.40 KiB
# Install Sakia for developpers
### Windows install
 * Download and install [vcredist2015](https://www.microsoft.com/fr-FR/download/details.aspx?id=48145)
 * Download and install [Miniconda](http://conda.pydata.org/miniconda.html).
 * Download and install [Git](https://git-scm.com/) and add the binaries path to your `PATH` variable
 * Download and install [Qt 5.6](http://download.qt.io/development_releases/qt/5.6/) for your architecture (msvc2015_64 for 64 bits, msvc2015 for 32 bits)
 * Open Conda console then : `conda update --yes conda`
 * Restart Conda console then : 
```
conda config --add channels inso/channel/sakia
conda create -n sakia-env python=3.5 pyqt5 libsodium=1.0.3
activate sakia-env
pip install -r requirements.txt
pip install pyinstaller
```
 * To run sakia, you have to export the following variable in your conda console : 
```
SET PYTHONPATH=[Path to sakia dir]\\src;%PYTHONPATH%
```
 * Then : 
```batch
python gen_resources.py 
python gen_translations.py
python src/sakia/main.py
```
### Linux & Macos (Pyenv install)
#### Linux System dependencies
##### Fedora
    sudo dnf install libsodium qt5-qtsvg python3-qt5 qt5-qttools \
    qt5-qttools-devel python3-qt5-devel qtchooser openssl-devel zfstream-devel \
    readline-devel sqlite-devel gcc-c++ \
    qt5-qtbase-devel qt5-qtsvg-devel
    sudo ln -s /usr/bin/lrelease-qt5 /usr/bin/lrelease
##### Ubuntu 14.04+ install
    sudo apt-get install curl qt5-qmake qtbase5-dev qttools5-dev-tools libqt5svg5-dev libdbus-1-dev libdbus-glib-1-dev autoconf automake libtool
64 bits:
      wget http://archive.ubuntu.com/ubuntu/pool/universe/libs/libsodium/libsodium13_1.0.1-1_amd64.deb
      sudo dpkg -i libsodium13_1.0.1-1_amd64.deb
32 bits:
     wget http://archive.ubuntu.com/ubuntu/pool/universe/libs/libsodium/libsodium13_1.0.1-1_i386.deb
     sudo dpkg -i libsodium13_1.0.1-1_i386.deb
##### Install pyenv on your home:
* Linux : 
```bash
curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
```
Add in `~/.bash_profile`, in `~/.bashrc` on Fedora:
```bash
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv virtualenv-init -)"
eval "$(pyenv init -)"
export PYENV_ROOT="$HOME/.pyenv"
```
Restart your terminal.
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140

#### MacOS system dependencies

Install the following brew packages : 
```bash
brew install wget
brew install libsodium
## Ensure your brew QT version is up to date. (brew install qt -> qt 4.8)
brew install qt5
brew link --force qt5
## Install pyenv
brew install pyenv
brew install pyenv-virtualenv
```

After installation, you'll need to add :  
```bash
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```
to your profile (as stated in the caveats displayed by Homebrew — to display them again, use brew info pyenv). You only need to add that to your profile once.

If you are running El Capitan (MacOS 10.10), you'll need to run `xcode-select --install`

#### Pyenv environment 

##### Build python 3.5.4

Building python 3.5.4 requires libraries of `openssl` and `sqlite3`. On Ubuntu, install it using the following commands : 

```
apt-get update
apt-get install libssl-dev
apt-get install libsqlite3-dev
```

Restart your shell then prepare your virtualenv: 

On GNU/Linux: `PYTHON_CONFIGURE_OPTS="--enable-shared" pyenv install 3.5.4`  
On MacOS: `env PYTHON_CONFIGURE_OPTS="--enable-framework" pyenv install 3.5.4`

Run:
```bash
pyenv shell 3.5.4
pyenv virtualenv sakia-env
```

#### Build Sakia: 

##### Download Sakia

    git clone https://github.com/duniter/sakia

##### Go to dev branch
```bash
cd sakia && git checkout dev
```

##### Configure your PYTHONPATH environment variable
```bash
export PYTHONPATH=${PYTHONPATH}:/YOUR_SAKIA_INSTALL_PATH/src
```

On Linux, you'll need buildable python-dbus and notify2 :  
```bash
pyenv local sakia-env
pip install PyQt5
pip install -U git+https://github.com/posborne/dbus-python.git
pip install notify2
```


To build sakia dependencies, go in sakia directory then : 
```bash
pip install -r requirements.txt --upgrade
pip install pyinstaller
pyenv rehash
```

##### Run Sakia ressources generator

    python gen_resources.py 

##### Run Sakia translations generator

    python gen_translations.py

##### Build Sakia as a binary
```sh
pyinstaller sakia.spec
```

##### Run Sakia build
```sh
./dist/sakia/sakia
```

##### Run Sakia from sources

    cd src && python sakia/main.py
#### Tips
You could find cache repositories on Unix at `~/.conf/sakia` and on Windows at `%APPDATA%\sakia`.

intro: 'You can create a release to package software, along with release notes and links to binary files, for other people to use.'
redirect_from:
  - /articles/downloading-files-from-the-command-line
  - /articles/downloading-files-with-curl
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

Releases are deployable software iterations you can package and make available for a wider audience to download and use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[AUTOTITLE](/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags)."

You can receive notifications when new releases are published in a repository without receiving notifications about other updates to the repository. For more information, see "[AUTOTITLE](/account-and-profile/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions)."

Anyone with read access to a repository can view and compare releases, but only people with write permissions to a repository can manage releases. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository)."

You can manually create release notes while managing a release. Alternatively, you can automatically generate release notes from a default template, or customize your own release notes template. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/automatically-generated-release-notes)."

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.6 %}
When viewing the details for a release, the creation date for each release asset is shown next to the release asset.
{% endif %}

{% ifversion fpt or ghec %}
People with admin permissions to a repository can choose whether {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}) objects are included in the ZIP files and tarballs that {% data variables.product.product_name %} creates for each release. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-git-lfs-objects-in-archives-of-your-repository)."

If a release fixes a security vulnerability, you should publish a security advisory in your repository. {% data variables.product.prodname_dotcom %} reviews each published security advisory and may use it to send {% data variables.product.prodname_dependabot_alerts %} to affected repositories. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)."

You can view the **Dependents** tab of the dependency graph to see which repositories and packages depend on code in your repository, and may therefore be affected by a new release. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."
{% endif %}

You can also use the Releases API to gather information, such as the number of times people download a release asset. For more information, see "[AUTOTITLE](/rest/releases)."

{% ifversion fpt or ghec %}
## Storage and bandwidth quotas

 Each file included in a release must be under {% data variables.large_files.max_file_size %}. There is no limit on the total size of a release, nor bandwidth usage.

{% endif %}
