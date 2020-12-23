---
title: How to Compile the iOS Version
versions: '*'
---

1. Install XCode (not BETA!)

2. Install command-line tools: `<xmp>$ xcode-select --install</xmp>`

3. [Install cmake](https://github.com/Kitware/CMake/releases/download/v3.11.2/cmake-3.11.2-Darwin-x86_64.dmg) (exactly this version!)

   Add this line to your .zshrc file: `PATH="/Applications/CMake.app/Contents/bin":"$PATH"`

   Reload your .zshrc file: `source ~/.zshrc`

   Verify everything works: `cmake --version`

4. [Install brew](https://brew.sh)

   Run: `/usr/bin/ruby -e "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/master/install](https://raw.githubusercontent.com/Homebrew/install/master/install))"`

5. Install imagemagick with librsvg

   <shell>
   brew install
   [https://github.com/Homebrew/homebrew-core/raw/46a2ef7c9f0380b8e19f8dfe37270caa27581353/Formula/imagemagick.rb](https://github.com/Homebrew/homebrew-core/raw/46a2ef7c9f0380b8e19f8dfe37270caa27581353/Formula/imagemagick.rb) --with-librsvg
   </shell>
   
6. `mkdir OsmAnd` && `cd OsmAnd`

7. Clone manually or via google repo tool: `[https://github.com/osmandapp/OsmAnd-manifest/blob/master/jenkins_ios.xml](https://github.com/osmandapp/OsmAnd-manifest/blob/master/jenkins_ios.xml) --with-librsvg`

   `$ mkdir ~/bin`

   `$ PATH=~/bin:$PATH`

   `$ curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo`

   `$ chmod a+x ~/bin/repo`

   `$ repo init -u [https://github.com/osmandapp/OsmAnd-manifest/blob/master/jenkins_ios.xml](https://github.com/osmandapp/OsmAnd-manifest/blob/master/jenkins_ios.xml)`

   **after doing this, the repo is installed, but "google repo tool couldn’t obtain manifest"**

   If cloned manually, in some cases a “revision” is specified. You should use `git clone -b` (ex: `< project path="core-legacy" name="osmandapp/OsmAnd-core.git" revision="legacy_core" />`)

   must be: `git clone https://github.com/osmandapp/OsmAnd-core.git -b legacy_core core-legacy )`

8. Run `./ios/prepare.sh`

9. Open `osmand.xcworkspace` in XCode and build (the target should be -> OsmAnd Maps)
