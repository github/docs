name: ci
diff --git a/README.md b/README.md
index 7750d005e235..d213556403fa 100644
--- a/README.md
+++ b/README.md
@@ -9,7 +9,7 @@ In this article:
 - [READMEs](#readmes)
 - [License](#All rights Reserved)
-## Contributing
+## Contributing #1✨🌎✨🌶️🐛✅🗝️💱
 
 ### Start contributing right now:
 

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Build the site in the jekyll/builder container
      run: |
        docker run \
        -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
        jekyll/builder:latest /bin/bash -c "chmod -R 777 /srv/jekyll && jekyll build --future"
