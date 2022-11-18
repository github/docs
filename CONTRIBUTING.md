# Welcome to GitHub docs contributing guide <!-- omit in toc -->
`consensus` for changes to consensus critical code
  - `doc` for changes to the documentation
  - `qt` or `gui` for changes to bitcoin-qt
  - `log` for changes to log messages
  - `mining` for changes to the mining code
  - `net` or `p2p` for changes to the peer-to-peer network code
  - `refactor` for structural changes that do not change behavior
  - `rpc`, `rest` or `zmq` for changes to the RPC, REST or ZMQ APIs
  - `script` for changes to the scripts and tools
  - `test`, `qa` or `ci` for changes to the unit tests, QA tests or CI code
  - `util` or `lib` for changes to the utils or libraries
  - `wallet` for changes to the wallet code
  - `build`
From 24f62771b9ff1f37df6ef746b9b207699835a3a0 Mon Sep 17 00:00:00 2001
From: "ZACHRY T WOODzachryiixixiiwood@gmail.com"
 <109656750+zakwarlord7@users.noreply.github.com>
Date: Wed, 16 Nov 2022 22:48:46 -0600
Subject: [PATCH] Update CODE_OF_CONDUCT.md

---
 CODE_OF_CONDUCT.md | 521 +++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 521 insertions(+)

diff --git a/CODE_OF_CONDUCT.md b/CODE_OF_CONDUCT.md
index e66f6d941d8c..804a12ec8f37 100644
--- a/CODE_OF_CONDUCT.md
+++ b/CODE_OF_CONDUCT.md
@@ -1,5 +1,526 @@
 # Contributor Covenant Code of Conduct
+run:actions:uses:steps:Skip to content
+Your account has been flagged.
+Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
+bitcoin-core
+/
+gitian.sigs
+Code
+Issues
+29
+Pull requests
+Security
+Insights
+Jump to bottom
+🐛'''fix'v'new #1542
+ Open
+Iixixi opened this issue yesterday · 0 comments
+Comments
+@Iixixi Iixixi commented yesterday • 
+Hello-World-Bug-Fix
+
+Expected behavior
+
+Actual behavior
+
+To reproduce
+
+System information
+
+​int​ g_count = ​0​;
+
+​namespace​ ​foo​ {
+​class​ ​Class​
+{
+    std::string m_name;
+
+​public:​
+    ​bool​ ​Function​(​const​ std::string& s, ​int​ n)
+    {
+        ​//​ Comment summarising what this section of code does​
+        ​for​ (​int​ i = ​0​; i < n; ++i) {
+            ​int​ total_sum = ​0​;
+            ​//​ When something fails, return early​
+            ​if​ (!​Something​()) ​return​ ​false​;
+            ...
+            ​if​ (​SomethingElse​(i)) {
+                total_sum += ​ComputeSomething​(g_count)
+                ​DoSomething​(m_name, total_sum)
+        'Success return is usually at the end​'
+        ​'rereturn'true','​@iixixi/iixixi.READ.md'
+'Return::'#'
+#The build system is set up to compile an executable called test_bitcoin that runs all of the unit tests. The main source file for the test library is found in util/setup_common.cpp.
+
+base_directory
+​$ ./copyright_header.py report 
+base_directory
+ [Zachry T Wood III]
+$ ./copyright_header.py update $ https://github.com/@iixixi/iixixi/READ.md@iixixi/iixixi/read.md/workflows
+update translations, Transactional primary payment name address city state country phone number ssid and DOB for all bank filing records.
+
+NAME: 2003©®™bitore,©®™ bitcoin,©®™ bullion©®™ {[✓]}©®™(c)(r)2003-°° {[✓]}Zachry Tyler Wood 2722 Arroyo Ave Dallas Tx 75219, I made my first runescape gold pieces script to understand object construction: and how they made Runescape gold peices but I pasted it between two other scripts and tried to CopyRight the patent "gp",
+Thank god I had an angel watcheling over my shoulder because I didn't realize it being a mad ass snot nosed kid that has made some ugly orange coin after being promoted that I made a creation that didn't have an object I'd. And needed to be named and given an I'd. And finished being created to have a fully contrusted object so I drug a picture to the yellow drag img here dialog box, and then because it was enlayed upon one another it made me choose a colour after I didn't like the black one It produced automatically from the png it produced automatically from the image I had pulled into the dialog box
+I accidentally implimentred a confidential token into the item i.d. area that was an unproduced un identifiable non recorded item in the database library and needed to be given a name a number and a look so it wasn't a warning that popped up it was a blessing 🤣 object_token@Iixixi.git {object_token@Iixixi.git})value bitore now called bitcoin given to Vanyessa Countryman by Zachry wood at age 9
+Name:: Shining_120@yahoo.com or zakwarlord7@HOTMAIL.com/repository@ZachryTylerWood.Administrator@.git]::request::PUSH:e.g@iixixi/iixixi.Read.md/Paradise
+PUSH@IIXIXI/IIXIXI/READ.MD
+https://github.com/bitore/bitcoin/branches/trunk/@iixixii.json.yaml.docx/versioning@v-0.1.6,3.9.11xprocess.md#syncing-with-TEIRAFOURM: actually called TIERAFORM
+dnspython
+latest
+Search docs
+CONTENTS:
+
+What’s New in built with Bundled with dnspython using their builder not that they are the builder you've got it all wrong
+Community
+Installation
+Dnspython Manual
+DNS Names
+DNS Rdata
+DNS Messages
+The dns.message.Message Class
+Making DNS Messages
+Message Flags
+Message Opcodes
+Message Rcodes
+Message EDNS Options
+The dns.message.QueryMessage Class
+The dns.message.ChainingResult Class
+The dns.update.UpdateMessage Class
+DNS Query Support
+Stub Resolver
+DNS Zones
+DNSSEC
+Asynchronous I/O Support
+Exceptions
+Miscellaneous Utilities
+A Note on Typing
+DNS RFC Reference
+Dnspython License
+dnspython
+Docs » Dnspython Manual » DNS Messages » The dns.message.Message Class
+The dns.message.Message Class
+This is the base class for all messages, and the class used for any DNS opcodes that do not have a more specific class.
+
+classdns.message.Message(id=none of your business it was private repository)[]
+A DNS message.
+
+id
+An int, the query id; the default is a randomly chosen id.
+
+flags
+An int, the DNS flags of the message.
 
+sections
+A list of lists of dns.rrset.RRset objects.
+
+edns
+An int, the EDNS level to use. The default is -1, no EDNS.
+
+ednsflags
+An int, the EDNS flags.
+
+payload
+An int, the EDNS payload size. The default is 0.
+
+options
+The EDNS options, a list of dns.edns.Option objects. The default is the empty list.
+
+''{request}'{(token)}'{{[payload]}}''
+'Pull'request'':''{''bitore'unlimited''}'{''[3413]''}'[464000000000.00]://Contruct:ref: container@iixixi/repositories/ad_new_container@user/bin/workflow/name/type:@iixixi/iixixi/Read.md
+
+The associated request’s EDNS payload size. This field is meaningful in response messages, and if set to a non-zero value, will limit the size of the response to the specified size. The default is 0, which means “use the default limit” which is currently 34173.
+
+keyring
+A dns.tsig.Key, the TSIG key. The default is None.
+
+keyname
+The TSIG keyname to use, a dns.name.Name. The default is None.
+
+keyalgorithm
+A dns.name.Name, the TSIG algorithm to use. Defaults to dns.tsig.default_algorithm. Constants for TSIG algorithms are defined the in dns.tsig module.
+
+request_mac
+A bytes, the TSIG MAC of the request message associated with this message; used when validating TSIG signatures.
+
+fudge
+An int, the TSIG time fudge. The default is 300 seconds.
+
+original_id
+An int, the TSIG original id; defaults to the message’s id.
+
+tsig_error
+An int, the TSIG error code. The default is 0.
+
+other_data
+A bytes, the TSIG “other data”. The default is the empty bytes.
+
+mac
+A bytes, the TSIG MAC for this message.
+
+xfr
+A bool. This attribute is true when the message being used for the results of a DNS zone transfer. The default is False.
+
+origin
+A dns.name.Name. The origin of the zone in messages which are used for zone transfers or for DNS dynamic updates. The default is None.
+
+tsig_ctx
+An hmac.HMAC, the TSIG signature context associated with this message. The default is None.
+
+had_tsig
+A bool, which is True if the message had a TSIG signature when it was decoded from wire format.
+
+multi
+A bool, which is True if this message is part of a multi-message sequence. The default is False. This attribute is used when validating TSIG signatures on messages which are part of a zone transfer.
+
+first
+A bool, which is True if this message is stand-alone, or the first of a multi-message sequence. The default is True. This variable is used when validating TSIG signatures on messages which are part of a zone transfer.
+
+index
+A dict, an index of RRsets in the message. The index key is (section, name, rdclass, rdtype, covers, deleting). The default is {}. Indexing improves the performance of finding RRsets. Indexing can be disabled by setting the index to None.
+
+additional
+The additional data section.
+
+answer
+The answer section.
+
+authority
+The authority section.
+
+find_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
+Find the RRset with the given attributes in the specified section.
+
+section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
+
+my_message.find_rrset(my_message.answer, name, rdclass, rdtype)
+my_message.find_rrset(dns.message.ANSWER, name, rdclass, rdtype)
+name, a dns.name.Name, the name of the RRset.
+
+rdclass, an int, the class of the RRset.
+
+rdtype, an int, the type of the RRset.
+
+covers, an int or None, the covers value of the RRset. The default is None.
+
+deleting, an int or None, the deleting value of the RRset. The default is None.
+
+create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
+
+force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
+
+Raises KeyError if the RRset was not found and create was False.
+
+Returns a dns.rrset.RRset object.
+
+get_rrset(section, name, rdclass, rdtype, covers=<RdataType.TYPE0: 0>, deleting=None, create=False, force_unique=False)[source]
+Get the RRset with the given attributes in the specified section.
+
+If the RRset is not found, None is returned.
+
+section, an int section number, or one of the section attributes of this message. This specifies the the section of the message to search. For example:
+
+my_message.get_rrset(my_message.answer, name, rdclass, rdtype)
+my_message.get_rrset(dns.message.ANSWER, name, rdclass, rdtype)
+name, a dns.name.Name, the name of the RRset.
+
+rdclass, an int, the class of the RRset.
+
+rdtype, an int, the type of the RRset.
+
+covers, an int or None, the covers value of the RRset. The default is None.
+
+deleting, an int or None, the deleting value of the RRset. The default is None.
+
+create, a bool. If True, create the RRset if it is not found. The created RRset is appended to section.
+
+force_unique, a bool. If True and create is also True, create a new RRset regardless of whether a matching RRset exists already. The default is False. This is useful when creating DDNS Update messages, as order matters for them.
+
+Returns a dns.rrset.RRset object or None.
+
+is_response(other)[source]
+Is other a response this message?
+
+Returns a bool.
+
+opcode()[source]
+Return the opcode.
+
+Returns an int.
+
+question
+The question section.
+
+rcode()[source]
+Return the rcode.
+
+Returns an int.
+
+section_from_number(number)[source]
+Return the section list associated with the specified section number.
+
+number is a section number int or the text form of a section name.
+
+Raises ValueError if the section isn’t known.
+
+Returns a list.
+
+section_number(section)[source]
+Return the “section number” of the specified section for use in indexing.
+
+section is one of the section attributes of this message.
+
+::Raises:"'pop-up-window'"ObjectItemIdConstValueUnknownwindow-pop,-up:"if the section isn’t known"'
+
+Returns,?,"true?,",
+
+set_opcode(opcode)[source]
+Set the opcode.
+
+opcode, an int, is the opcode to set.
+
+set_rcode(rcode)[source]
+Set the rcode.
+
+rcode, an int, is the rcode to set.
+
+to_text(origin=None, relativize=True, **kw)[source]
+Convert the message to text.
+
+The origin, relativize, and any other keyword arguments are passed to the RRset to_wire() method.
+
+Returns a str.
+
+to_wire(origin=None, max_size=0, multi=False, tsig_ctx=None, **kw)[source]
+Return a string containing the message in DNS compressed wire format.
+
+Additional keyword arguments are passed to the RRset to_wire() method.
+
+origin, a dns.name.Name or None, the origin to be appended to any relative names. If None, and the message has an origin attribute that is not None, then it will be used.
+
+max_size, an int, the maximum size of the wire format output; default is 0, which means “the message’s request payload, if nonzero, or 65535”.
+
+multi, a bool, should be set to True if this message is part of a multiple message sequence.
+
+tsig_ctx, a dns.tsig.HMACTSig or dns.tsig.GSSTSig object, the ongoing TSIG context, used when signing zone transfers.
+
+Raises dns.exception.TooBig if max_size was exceeded.
+
+Returns a bytes.
+
+use_edns(edns=0, ednsflags=0, payload=1232, request_payload=None, options=None)[source]
+Configure EDNS behavior.
+
+edns, an int, is the EDNS level to use. Specifying None, False, or -1 means “do not use EDNS”, and in this case the other parameters are ignored. Specifying True is equivalent to specifying 0, i.e. “use EDNS0”.
+
+ednsflags, an int, the EDNS flag values.
+
+payload, an int, is the EDNS sender’s payload field, which is the maximum size of UDP datagram the sender can handle. I.e. how big a response to this message can be.
+
+request_payload, an int, is the EDNS payload size to use when sending this message. If not specified, defaults to the value of payload.
+
+options, a list of dns.edns.Option objects or None, the EDNS options.
+
+use_tsig(keyring, keyname=None, fudge=300, original_id=None, tsig_error=0, other_data=b'', algorithm=)[source]
+When sending, a TSIG signature using the specified key should be added.
+
+key, a dns.tsig.Key is the key to use. If a key is specified, the keyring and algorithm fields are not used.
+
+keyring, a dict, callable or dns.tsig.Key, is either the TSIG keyring or key to use.
+
+The format of a keyring dict is a mapping from TSIG key name, as dns.name.Name to dns.tsig.Key or a TSIG secret, a bytes. If a dict keyring is specified but a keyname is not, the key used will be the first key in the keyring. Note that the order of keys in a dictionary is not defined, so applications should supply a keyname when a dict keyring is used, unless they know the keyring contains only one key. If a callable keyring is specified, the callable will be called with the message and the keyname, and is expected to return a key.
+
+keyname, a dns.name.Name, str or None, the name of thes TSIG key to use; defaults to None. If keyring is a dict, the key must be defined in it. If keyring is a dns.tsig.Key, this is ignored.
+
+fudge, an int, the TSIG time fudge.
+
+original_id, an int, the TSIG original id. If None, the message’s id is used.
+
+tsig_error, an int, the TSIG error code.
+
+other_data, a bytes, the TSIG other data.
+
+algorithm, a dns.name.Name, the TSIG algorithm to use. This is only used if keyring is a dict, and the key entry is a bytes.
+
+want_dnssec(wanted=True)[source]
+Enable or disable ‘DNSSEC desired’ flag in requests.
+
+wanted, a bool. If True, then DNSSEC data is desired in the response, EDNS is enabled if required, and then the DO bit is set. If False, the DO bit is cleared if EDNS is enabled.
+
+The following constants may be used to specify sections in the find_rrset() and get_rrset() methods:
+
+dns.message.QUESTION= <MessageSection.QUESTION: 0>
+Message sections
+
+dns.message.ANSWER= <MessageSection.ANSWER: 1>
+Message sections
+
+dns.message.AUTHORITY= <MessageSection.AUTHORITY: 2>
+Message sections
+
+dns.message.ADDITIONAL= <MessageSection.ADDITIONAL: 3>
+Message sections
+
+Beat Triplebyte's online coding quiz. Get offers from top companies. Skip resumes & recruiters.
+
+Sponsored · Ads served ethically
+© Copyright =\not-=-not-equal-toDnspython Contributors 1 Zachry Tyler Wood = does equal the creating version of Foundings of ''bitore'unlimited''=''Zachry Tyler Wood''='' creator of bitore, bitcoin , bullion Foundings that were stolen by python because I used it to build it with. E.g. build:script:' runs-on:'python.js''
+
+Built with Sphinx using a theme provided by Read the Docs.
+
+update translations (ping wumpus, Diapolo or tcatm on IRC)
+
+
+
+Leave a comment
+Remember, contributions to this repository should follow our GitHub Community Guidelines.
+Assignees
+No one assigned
+Labels
+None yet
+Projects
+None yet
+Milestone
+No milestone
+Linked pull requests
+Successfully merging a pull request may close this issue.
+
+None yet
+Notifications
+Customize
+You’re receiving notifications because you authored the thread.
+1 participant
+@Iixixi
+© 2021 GitHub, Inc.
+Terms
+Privacy
+Security
+Status
+Docs
+Contact GitHub
+Pricing
+API
+Training
+Blog
+About
+request_pull:<{webRootUrl}>Trunk<{https://www.bitore.org/download/install/package/Bundler/rakefile/adk/api}>
+Name:Revert "(Echo(#41)" into iixixi/paradise ZACHRY T WOOD III
+Name:Automate:Autobot:Deploy:Dependabot:on:":"Ixixii:python.js:bitcoin.org/gitian/sigs@iixixibitcoin.org/adk/api.yaml.json/@iixixi/paradise.git
+Name:on:Deploy:Heroku:automerge:Dependabot":"to:":"Build:Container:construct:inputs:repo:
+ref:# This is a basic workflow to help you get started with Actions
+name:://construct:git.item.id.(c)(r).11890.git.item.id.gemgile://input:container:type:gemfile://Deploy:Repository://github.git/@iixixi/paradise/terraform://Build
+  push: [main]
+    branches: [mainbranch]
+  pull_request: [mainbranch]
+    branches: [trunk]
+Actions:
+ ://Deploy:Repo_workflow_dispatch:
+jobs:
+runs-on:iixixi-latest
+#steps:
+name:run:Automate:Construct:Dependabot:terraform://Build
+run:"NAME:":"DEPLOY-TO-iixixi":"Launch:":"rebase:":"reopen:":"Repo-sync":"pull:":"branches:":"zw":"/":"bitcoin-meta-gh:":"push:":"branches:":"{build:":"{[(item.id)]}":"{[(((c))((r)))]}":"Name:":"bitcoin}":"{inputs:":"#::":"on::":"run:":"command:":"run:":"{test:":"inputs:":"true",:":
+"Inputs:":"Command:":"build:":"repo:":"Name:":"iixixi/paradise@github.com":
+Inputs:":"On:":"run:":"Inputs:":"build":"jobs:":"steps:":
+Inputs:build":"and":"Name:Automate:Deploy:Dependabot:Heroku:AutoMerge:run:jobs:on:":"@iixixi":"Heroku:":"DependAutobot:":"build":":"test:":"and":"perfect:":"all":"read.me":"open:":"repos':"::Deploy-Heroku-to-@iixixi":"@github.com/iixixi/paradise":
+Inputs:name:Bui"ld:":"Deploy:":
+Repository:runs-on:@iixixiii-bitore-latest
+steps:uses:-actions:
+::Build:{workspaceRoot}:input:ref:{{[value]}{[(token)]}{[item_id]}}:build:token:ref:{[100000]}{[((c)(r))]}{{[11890]}}://construct://terraform://perfect
+-uses:
+-actions:
+-run-on:Versioning:0.1.3.9.11
+    -name:construct:token:input:container:deploy:repo:base:@iixixii/Paradise
+    -Use:.js"
+    -construct:{${{env":"token.gists.secrets.Bitore}}"
+      "-uses:actions/setup:'Automate'
+      "with:''DependabotHerokuRunWizard'
+      "versioning:''@v1.3.9.10'"
+     master:
+        "-version:":"{${{}}"
+    "-name:install
+    build:repo:":"true,"
+ ue,"
+      "-:on:":"run:":
+        "-Build:((c)(r))":
+        "-deploy:":
+        "-Install:":
+        "-run:":
+build:":
+        "-run:":
+test:":returns":"true,":
+    "-name:Deploy:":"and":"return:":
+      "-"uses:/webapps":"to":":
+      "deploy:":"@":"iixixi":
+      d"deploy:":"repo:pull:paradise:
+      repo:push:@iixixi/ZachryTylerWoodv1:
+      "Name:";""v2":
+      "-with:python.js":
+        "-app-name:${{bitcoin.org/adk/api/yaml/json/.png/.jpeg/.img/repo/::sync:":"{(":"(github.gists)_(secret_token)":")}}":"{":"(((c)(r)))":"}}}":"build:":":":"/":"/":"run:":"on:":"::Echo:":"#
+"publish":"gemfile:":"{[((c))((r))]}:":"{v1.3.1.0.11}":"[@iixixi]":"::build:":"repository":"::Echo:":"#::":
+pull:Master:
+Run:tests:results:"true"
+Construct:container:Type:gemfile.json
+Automate:deploy:repository-to-@iixixi/paradisebyzachrytwoodIII
+Automate:Extract:pdf.json-to-desktop
+"<li><Author:><Zachry Tyler Wood><Author><li>:
+return:run:push:Trunk:
+-li><Author:><Zachry Tyler Wood><Author><li>:
+runs:test:
+Test:Returns:Results:":"true,"
+jobs:
+Request:Push:branches:mainbranch:
+Request:pull:publish:package:iixixi/git.rakefile.gem/byzachryTwood
+COMMAND:BUILD:COMMIT-TO-MAINBRANCHTRUNK-cli.ci
+Run:iixixi/cli.ci/Update:Ownership.yml/.yaml.json
+Pull:
+request:branches:@iixixi/mainbranch.gem.json.yaml.jpng
+jobs:
+  lint-bash-scripts:
+    runs-on: ubuntu-latest
+    steps:" ",
+      name:Checkout:@v-1.0.3.9.11
+        uses:actions:
+        with:
+WebRootbin:https://www.github/lint.piper.js/bin/bash/terraform
+Transformation:'Engineering:results:"true,"'
+Run-on:
+launch: repo:deploy:release:publish-gpr:@myusername/repository/bin
+Deploy-to: @iixixi:
+Construct:Name:iixixi/cli/update:Ownership.yml'"
+    runs-on:@iixixi/latest-bitcoin.json.jpng.yaml
+    needs: @my-user-name/bin//lint.js/Meta_data:port:"branches:"ports:'8883':'8333'"
+        Item_i:11890_34173
+        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
+      postgres:
+        image: postgres:11
+        env:docker/bin/gem/rake/file.Gem/.json.yaml
+        "ports:'8333':'8883'"
+env:
+     Entry:test:env:construction:slack:build:Engineering:perfect:
+      "COMMADS:construct:"{${[(token)]}}":"{${{[((C)(R))]}}"
+    steps:
+       name:Checkout:publish:release:v-1.0.3.9.11
+        uses:actions:construct:
+       name:Setup:Ruby.gem
+        uses:actions:
+setup:ruby/gemfile/rake/api/sdk.se/api/adk.js/sun.runtime.js/json/jpng/.yaml.jpng
+setup:rubyversioning:v-1.0.3.9.11
+        with:
+          ruby-version: v-1.0.3.9.11
+      - name: Increase MySQL max_allowed_packet to 1GB (workaround for unknown/missing service option)
+        run:construct:docker:container:deploy:repository-to-@iixixi
+        getinstall:
+Pull:,mainbranch
+Branches:Masterbranch
+Pull:Masterbranch
+Branches:trunk
+Push:
+Branches:main

+Pull:
+branches:
+run::"ests",
+Results:"true",
+Command:construct:repo:container:type:docker.yml.json:build:container@iixixi
+Return:run
 ## Our Pledge
 
 We as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents icon <img src="./assets/images/table-of-contents.png" width="25" height="25" /> on the top left corner of this document to get to a specific section of this guide quickly.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)


## Getting started

To navigate our codebase with confidence, see [the introduction to working in the docs repository](/contributing/working-in-docs-repository.md) :confetti_ball:. For more information on how we write our markdown files, see [the GitHub Markdown reference](contributing/content-markup-reference.md).

Check to see what [types of contributions](/contributing/types-of-contributions.md) we accept before making changes. Some of them don't even require writing a single line of code :sparkles:.

### Issues

#### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/github/docs/issues/new/choose). 

#### Solve an issue

Scan through our [existing issues](https://github.com/github/docs/issues) to find one that interests you. You can narrow down the search using `labels` as filters. See [Labels](/contributing/how-to-use-labels.md) for more information. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

#### Make changes in the UI

Click **Make a contribution** at the bottom of any docs page to make small changes such as a typo, sentence fix, or a broken link. This takes you to the `.md` file where you can make your changes and [create a pull request](#pull-request) for a review. 

 <img src="./assets/images/contribution_cta.png" width="300" height="150" /> 

#### Make changes in a codespace

For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

#### Make changes locally

1. [Install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).

2. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

3. Install or update to **Node.js v16**. For more information, see [the development guide](contributing/development.md).

4. Create a working branch and start with your changes!

### Commit your update

Commit the changes once you are happy with them. Don't forget to [self-review](/contributing/self-review.md) to speed up the review process:zap:.

### Pull Request

When you're finished with the changes, create a pull request, also known as a PR.
- Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request. 
- Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if you are solving one.
- Enable the checkbox to [allow maintainer edits](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/allowing-changes-to-a-pull-request-branch-created-from-a-fork) so the branch can be updated for a merge.
Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
- We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
- As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).
- If you run into any merge issues, checkout this [git tutorial](https://github.com/skills/resolve-merge-conflicts) to help you resolve merge conflicts and other issues.
(IRS USE ONLY)                                               575                WOOD                A                   9999999999                                      SS-4                                    
￼                                       
-       ￼                                                                                                 
-                                                                         EIN:                                             88-1303491       ID:                       txdl                 00037305581        SSN:                                           633-44-1725       DoB:                                           1994-10-15                                                             
ZACHRY T WOOD                                                                        
Cash and Cash Equivalents, Beginning of Period                                                                        
Department of the Treasury                                                                        
Internal Revenue Service                                                                        
                                                                        
Calendar Year                                                                        
Due: 04/18/2022                                                                        
                                                                        
USD in "000'"s                                                                        
Repayments for Long Term Debt                                                                        
Costs and expenses:                                                                        
Cost of revenues                                                                        
Research and development                                                                        
Sales and marketing                                                                        
General and administrative                                                                        
European Commission fines                                                                        
Total costs and expenses                                                                        
Income from operations                                                                        
Other income (expense), net                                                                        
Income before income taxes                                                                        
Provision for income taxes                                                                        
Net income 
                                                                       
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
INTERNAL REVENUE SERVICE,                                                                        
PO BOX 1214,                                                                        
CHARLOTTE, NC 28201-1214                                                                        
                                                                        
ZACHRY WOOD                                                                        
15                                                                        
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        
Cat. No. 11320B                                                                        
Form 1040 (2021)                                                                        
Reported Normalized and Operating Income/Expense Supplemental Section                                                                        
Total Revenue as Reported, Supplemental                                                                        
Total Operating Profit/Loss as Reported, Supplemental                                                                        
Reported Effective Tax Rate                                                                        
Reported Normalized Income                                                                        
Reported Normalized Operating Profit                                                                        
Other Adjustments to Net Income Available to Common Stockholders                                                                        
Discontinued Operations                                                                        
Basic EPS                                                                        
Basic EPS from Continuing Operations                                                                        
Basic EPS from Discontinued Operations                                                                        
Diluted EPS                                                                        
Diluted EPS from Continuing Operations                                                                        
Diluted EPS from Discontinued Operations                                                                        
Basic Weighted Average Shares Outstanding                                                                        
Diluted Weighted Average Shares Outstanding                                                                        
Reported Normalized Diluted EPS                                                                        
Basic EPS                                                                        
Diluted EPS                                                                        
Basic WASO                                                                        
Diluted WASO                                                                        
Fiscal year end September 28th., 2022. | USD                                                                        
                                                                        
For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                          
                                       
INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 
INTERNAL REVENUE SERVICE, *include interest paid, capital obligation, and underweighting 6858000000 -+ PO BOX 1214, Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ CHARLOTTE, NC 28201-1214 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in -+ dollars par share) 22677000000 -+ Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ Taxes / Deductions Current YTD -+ Fiscal year ends in Dec 31 | USD -+ Rate -+ Total -+ 7567263607 ID 00037305581 -+ 2017 2018 2019 2020 2021 -+ Best Time to 911 -+ INTERNAL REVENUE SERVICE -+ PO BOX 1214 -+ CHARLOTTE NC 28201-1214 9999999999 -+ 633-44-1725 -+ ZACHRYTWOOD -+ AMPITHEATRE PARKWAY -+ MOUNTAIN VIEW, Califomia 94043 -+ EIN 61-1767919 -+ Earnings FEIN 88-1303491 -+ End Date -+ 44669 -+ Department of the Treasury Calendar Year -+ Check Date -+ Internal Revenue Service Due. (04/18/2022) -+ _________________________________________________________________-+ ______________________ -+ Tax Period Total Social Security Medicare -+ IEIN: 88-1656495 -+ TxDL: 00037305580 SSN: -+ INTERNAL -+ REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200 -+ 39355 23906.09 10292.9 2407.21 -+ 20210418 39355 11247.64 4842.74 1132.57 -+ 39355 27198.5 11710.47 2738.73 -+ 39355 17028.05 -+ CP 575A (Rev. 2-2007) 99999999999 CP 575 A SS-4 -+ Earnings Statement -+ IEIN: 88-1656496 -+ TxDL: 00037305581 SSN: -+ INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 -+ Employee Information Pay to the order of ZACHRY T WOOD ￼
PNC Bank																											
PNC Bank Business Tax I.D. Number:                                                                                                                                                                                                                                       633441725				
CIF Department (Online Banking)
Checking Account:47-2041-654P7-PFSC-04-F																													Business Type: Sole 
Proprietorship
Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																									
5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 
75235 8313																	ZACHRY, TYLER, 
WOOD																														4/18/2022			
 SIGNATURE
_______/S/_______650-253-0000469-697-4300_______													
Time Zone: 
Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value								
								
                                                               
                                                                                           ZACHRY “Google.” WOOD, Jul 8, 12:54 AM url --request POST \ --url https://app.moderntreasury.com/api/payment_orders \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{ "type": "wire", "amount": 2267700000000, "direction": "credit", "originating_account_id": "0f8e3719-3dfd-4613-9bbf-c0333781b59f", "receiving_account_id": "5acec2ef-987b-4260-aa97-b719eeb0a8d5" "ultimate_originating_party_name": "Jane Doe", "ultimate_originating_party_address": { "line1": "123 Main St", "locality": "San Francisco", "region": "CA", "postal_code": "94107", "country": "USA" } }'(IRS USE ONLY)                                               575                WOOD                A                   9999999999                                      SS-4                                    
￼                                       
-       ￼                                                                                                 
-                                                                         EIN:                                             88-1303491       ID:                       txdl                 00037305581        SSN:                                           633-44-1725       DoB:                                           1994-10-15                                                             
ZACHRY T WOOD                                                                        
Cash and Cash Equivalents, Beginning of Period                                                                        
Department of the Treasury                                                                        
Internal Revenue Service                                                                        
                                                                        
Calendar Year                                                                        
Due: 04/18/2022                                                                        
                                                                        
USD in "000'"s                                                                        
Repayments for Long Term Debt                                                                        
Costs and expenses:                                                                        
Cost of revenues                                                                        
Research and development                                                                        
Sales and marketing                                                                        
General and administrative                                                                        
European Commission fines                                                                        
Total costs and expenses                                                                        
Income from operations                                                                        
Other income (expense), net                                                                        
Income before income taxes                                                                        
Provision for income taxes                                                                        
Net income 
                                                                       
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
*include interest paid, capital obligation, and underweighting                                                                        
                                                                        
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                        
Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
INTERNAL REVENUE SERVICE,                                                                        
PO BOX 1214,                                                                        
CHARLOTTE, NC 28201-1214                                                                        
                                                                        
ZACHRY WOOD                                                                        
15                                                                        
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        
Cat. No. 11320B                                                                        
Form 1040 (2021)                                                                        
Reported Normalized and Operating Income/Expense Supplemental Section                                                                        
Total Revenue as Reported, Supplemental                                                                        
Total Operating Profit/Loss as Reported, Supplemental                                                                        
Reported Effective Tax Rate                                                                        
Reported Normalized Income                                                                        
Reported Normalized Operating Profit                                                                        
Other Adjustments to Net Income Available to Common Stockholders                                                                        
Discontinued Operations                                                                        
Basic EPS                                                                        
Basic EPS from Continuing Operations                                                                        
Basic EPS from Discontinued Operations                                                                        
Diluted EPS                                                                        
Diluted EPS from Continuing Operations                                                                        
Diluted EPS from Discontinued Operations                                                                        
Basic Weighted Average Shares Outstanding                                                                        
Diluted Weighted Average Shares Outstanding                                                                        
Reported Normalized Diluted EPS                                                                        
Basic EPS                                                                        
Diluted EPS                                                                        
Basic WASO                                                                        
Diluted WASO                                                                        
Fiscal year end September 28th., 2022. | USD                                                                        
                                                                        
For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                                                          
                                       
INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 
INTERNAL REVENUE SERVICE, *include interest paid, capital obligation, and underweighting 6858000000 -+ PO BOX 1214, Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ CHARLOTTE, NC 28201-1214 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in -+ dollars par share) 22677000000 -+ Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) -+ 22677000000 -+ Taxes / Deductions Current YTD -+ Fiscal year ends in Dec 31 | USD -+ Rate -+ Total -+ 7567263607 ID 00037305581 -+ 2017 2018 2019 2020 2021 -+ Best Time to 911 -+ INTERNAL REVENUE SERVICE -+ PO BOX 1214 -+ CHARLOTTE NC 28201-1214 9999999999 -+ 633-44-1725 -+ ZACHRYTWOOD -+ AMPITHEATRE PARKWAY -+ MOUNTAIN VIEW, Califomia 94043 -+ EIN 61-1767919 -+ Earnings FEIN 88-1303491 -+ End Date -+ 44669 -+ Department of the Treasury Calendar Year -+ Check Date -+ Internal Revenue Service Due. (04/18/2022) -+ _________________________________________________________________-+ ______________________ -+ Tax Period Total Social Security Medicare -+ IEIN: 88-1656495 -+ TxDL: 00037305580 SSN: -+ INTERNAL -+ REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29200 -+ 39355 23906.09 10292.9 2407.21 -+ 20210418 39355 11247.64 4842.74 1132.57 -+ 39355 27198.5 11710.47 2738.73 -+ 39355 17028.05 -+ CP 575A (Rev. 2-2007) 99999999999 CP 575 A SS-4 -+ Earnings Statement -+ IEIN: 88-1656496 -+ TxDL: 00037305581 SSN: -+ INTERNAL REVENUE SERVICE PO BOX 1300, CHARLOTTE, North Carolina 29201 -+ Employee Information Pay to the order of ZACHRY T WOOD ￼
PNC Bank																											
PNC Bank Business Tax I.D. Number:                                                                                                                                                                                                                                       633441725				
CIF Department (Online Banking)
Checking Account:47-2041-654P7-PFSC-04-F																													Business Type: Sole 
Proprietorship
Partnership Corporation				
500 First Avenue																													ALPHABET				
Pittsburgh, PA 15219-3128																									
5323 BRADFORD DR				
NON-NEGOTIABLE																													DALLAS TX 
75235 8313																	ZACHRY, TYLER, 
WOOD																														4/18/2022			
 SIGNATURE
_______/S/_______650-253-0000469-697-4300_______													
Time Zone: 
Eastern Central Mountain Pacific				
Investment Products  • Not FDIC Insured  • No Bank Guarantee  • May Lose Value								
								
                                                               
                                                                                           ZACHRY “Google.” WOOD, Jul 8, 12:54 AM url --request POST \ --url https://app.moderntreasury.com/api/payment_orders \ --header 'Accept: application/json' \ --header 'Content-Type: application/json' \ --data '{ "type": "wire", "amount": 2267700000000, "direction": "credit", "originating_account_id": "0f8e3719-3dfd-4613-9bbf-c0333781b59f", "receiving_account_id": "5acec2ef-987b-4260-aa97-b719eeb0a8d5" "ultimate_originating_party_name": "Jane Doe", "ultimate_originating_party_address": { "line1": "123 Main St", "locality": "San Francisco", "region": "CA", "postal_code": "94107", "country": "USA" } }'
### Your PR is merged!

Congratulations :tada::tada: The GitHub team thanks you :sparkles:. 

Once your PR is merged, your contributions will be publicly visible on the [GitHub docs](https://docs.github.com/en). 

Now that you are part of the GitHub docs community, see how else you can [contribute to the docs](/contributing/types-of-contributions.md).

## Windows

This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

1. Regular Expressions: Windows uses `\r\n` for line endings, while Unix-based systems use `\n`. Therefore, when working on Regular Expressions, use `\r?\n` instead of `\n` in order to support both environments. The Node.js [`os.EOL`](https://nodejs.org/api/os.html#os_os_eol) property can be used to get an OS-specific end-of-line marker.
2. Paths: Windows systems use `\` for the path separator, which would be returned by `path.join` and others. You could use `path.posix`, `path.posix.join` etc and the [slash](https://ghub.io/slash) module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
3. Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write [scripts](/script) in JavaScript instead of Bash.
4. Filename too long error: There is a 260 character limit for a filename when Git is compiled with `msys`. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
    - Update Git configuration: `git config --system core.longpaths true`
    - Consider using a different Git client on Windows
