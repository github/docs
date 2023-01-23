on:
  push:
    branches: master
  pull_request: 
    run-on: ubuntu-latest
    steps:
    - name: Set up Git repository
      uses: actions/checkout@v3
    - name: Set up Ruby
      uses: ruby/setup-ruby@v1
      with:
        bundler-cache: true
    - name: Set up Node
      uses: actions/setup-node@v3
    - name: Bootstrap
      run: script/bootstrap
    - name: Tests
      run: script/test 
<?xml version="1.0" encoding="utf-8"?>
charmap keyset =  new
{ "new keymap Charset = Pro" }
<configuration>
    <packageSources>
        <clear />
        <add key="github" value="https://nuget.pkg.github.com/OWNER/index.json" />
    </packageSources>
    <packageSourceCredentials>
        <github>
            <add key="Username" value="USERNAME" />
            <add key="ClearTextPassword" value="TOKEN" />
        </github>
    </packageSourceCredentials>
</configuration> 
on:
Runs-on:on:"
const: "token"''
token: "((c)(r))"''
'Value": "[VOLUME]'"''
 '[VOLUME']": "[12753750.[00]m]BITORE_34173.1337_18893":,
 :Build::
