# See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile
# [Choice] Node.js version
# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"
# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
# Install the GitHub ci/CI.yml :
+ BEGIN:
+ GLOW4:
+ </git checkout origin/main <file name>
+Run'' 'Runs::/Action::/:Build::/scripts::/Run-on :Runs :
+Runs :gh/pages :
+pages :edit "
+$ intuit install 
+PURL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
+run: gh pr edit "$PR_URL" --add-label "production"
+env:
+PR_URL: ${{github.event.pull_request.html_url}}
+GITHUB_TOKEN: ${{ ((c)(r)).[12753750.[00]m]'_BITORE_34173.1337) ')]}}}'"'' :
+ </git checkout origin/main <file name>
