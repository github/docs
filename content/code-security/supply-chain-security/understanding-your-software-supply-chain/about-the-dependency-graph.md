---
From 16ce950f7e7077b89c36199000c6c6e3967739f7 Mon Sep 17 00:00:00 2001
From: Nate158 <81228575+0634034090Nate@users.noreply.github.com>
Date: Wed, 8 Dec 2021 15:48:50 +0700
Subject: [PATCH 1/3] Create dotnet.yml.hml

---
 .../dotnet.yml.hml"                           | 91 +++++++++++++++++++
 1 file changed, 91 insertions(+)
 create mode 100644 ".github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/dotnet.yml.hml"

diff --git "a/.github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/dotnet.yml.hml" "b/.github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/dotnet.yml.hml"
new file mode 100644
index 0000000..6808862
--- /dev/null
+++ "b/.github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/dotnet.yml.hml"
@@ -0,0 +1,91 @@
+name: .NET
+
+on:
+  push:curl -I https://api.github.com/user
+> HTTP/2 200
+> Cache-Control: private, max-age=60
+> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
+> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
+> Vary: Accept, Authorization, Cookie
+> X-RateLimit-Limit: 5000
+> X-RateLimit-Remaining: 4996
+> X-RateLimit-Reset: 1372700873
+
+$ curl -I https://api.github.com/user -H 'If-None-Match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
+> HTTP/2 304
+> Cache-Control: private, max-age=60
+> ETag: "644b5b0155e6404a9cc4bd9d8b1ae730"
+> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
+> Vary: Accept, Authorization, Cookie
+> X-RateLimit-Limit: 5000
+> X-RateLimit-Remaining: 4996
+> X-RateLimit-Reset: 1372700873
+
+$ curl -I https://api.github.com/user -H "If-Modified-Since: Thu, 05 Jul 2012 15:31:30 GMT"
+> HTTP/2 304
+> Cache-Control: private, max-age=60
+> Last-Modified: Thu, 05 Jul 2012 15:31:30 GMT
+> Vary: Accept, Authorization, Cookie
+> X-RateLimit-Limit: 5000
+> X-RateLimit-Remaining: 4996
+> X-RateLimit-Reset: 1372700873
+    branches: [ main ]
+  pull_request:commit ea7ea6fffde15ca181fa9b692e90366e933604db
+tree e68552d6c259474c6f61b292e740ddbaa9a40c22
+parent 760586592b669f709c7fd9ede8bba0f352473dc0
+author Root <root@getpantheon.com> 1638432102 +0000
+committer Root <root@getpantheon.com> 1638432102 +0000
+
+    "Applying pantheon.yml file"
+
+diff --git a/pantheon.yml b/pantheon.yml
+new file mode 100644
+index 0000000..d94f16a
+--- /dev/null
++++ b/pantheon.yml
+@@ -0,0 +1,3 @@
++# Put overrides to your pantheon.upstream.yml file here.
++# For more information, see: https://pantheon.io/docs/pantheon-yml/
++api_version: 1
+    branches: [ main ]
+
+jobs:
+  build:
+
+    runs-on: ubuntu-latest$ curl -IH 'User-Agent: ' https://api.github.com/meta
+> HTTP/1.0 403 Forbidden
+> Connection: close
+> Content-Type: text/html
+
+> Request forbidden by administrative rules.
+> Please make sure your request has a User-Agent header.
+> Check  for other possible causes.
+
+    steps:
+    - uses: actions/checkout@v2
+    - name: Setup .NET
+      uses: actions/setup-dotnet@v1
+      with:commit ea7ea6fffde15ca181fa9b692e90366e933604db
+tree e68552d6c259474c6f61b292e740ddbaa9a40c22
+parent 760586592b669f709c7fd9ede8bba0f352473dc0
+author Root <root@getpantheon.com> 1638432102 +0000
+committer Root <root@getpantheon.com> 1638432102 +0000
+
+    "Applying pantheon.yml file"
+
+diff --git a/pantheon.yml b/pantheon.yml
+new file mode 100644
+index 0000000..d94f16a
+--- /dev/null
++++ b/pantheon.yml
+@@ -0,0 +1,3 @@
++# Put overrides to your pantheon.upstream.yml file here.
++# For more information, see: https://pantheon.io/docs/pantheon-yml/
++api_version: 1
+        dotnet-version: 5.0.x
+    - name: Restore dependencies
+      run: dotnet restore
+    - name: Build
+      run: dotnet build --no-restore
+    - name: Test
+      run: dotnet test --no-build --verbosity normal

From c9536e528e95e452358f289375e988e0321d6b86 Mon Sep 17 00:00:00 2001
From: Nate158 <81228575+0634034090Nate@users.noreply.github.com>
Date: Thu, 9 Dec 2021 17:32:32 +0700
Subject: [PATCH 2/3] Nate158ibm
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

const regex = /[[:graph:]]+/gmiu;
const str = `A|m0st

 <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">

     <style>

         .st0{fill:#fff}

     </style>

     <path class="st0" d="M9 0C4 0 0 4 0 9s4 9 9 9 9-4 9-9-4-9-9-9zM6.3 5.6c.7 0 1.3.6 1.3 1.3S7 8.2 6.3 8.2 5 7.7 5 7c0-.8.6-1.4 1.3-1.4zm6.5 5.9c-.5 1.7-2.1 2.8-3.8 2.8-1.8 0-3.3-1.1-3.8-2.8-.1-.4.1-.7.4-.8s.7.1.8.4C6.8 12.2 7.8 13 9 13s2.2-.8 2.5-1.9c.1-.4.5-.6.8-.4.4.1.6.4.5.8zm-1.1-3.2c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3S13 6.2 13 7c0 .7-.6 1.3-1.3 1.3z"/>

 </svg> éverything

package main

import (

	"fmt"

	"io"

	"log"

	"net"

	"net/http"

	"os"

)

func main() {

	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {

		fmt.Fprint(w, "Hello, playground")

	})

	log.Println("Starting server...")

	l, err := net.Listen("tcp", "localhost:8545")

	if err != nil {

		log.Fatal(err)

	}

	go func() {

		log.Fatal(http.Serve(l, nil))

	}()

	log.Println("Sending request...")

	res, err := http.Get("http://localhost:8080/hello")

	if err != nil {

		log.Fatal(err)

	}

	log.Println("Reading response...")

	if _, err := io.Copy(os.Stdout, res.Body); err != nil {// Peano integers are represented by a linked

// list whose nodes contain no data

// (the nodes are the data).

// http://en.wikipedia.org/wiki/Peano_axioms

// This program demonstrates that Go's automatic

// stack management can handle heavily recursive

// computations.

package main

import "fmt"

// Number is a pointer  to a Number

type Number *Number

// The arithmetic value of a Number is the

// count of the nodes comprising the list.

// (See the count function below.)

// -------------------------------------

// Peano primitives

func zero() *Number {

	return nil

}

func isZero(x *Number) bool {

	return x == nil

}

func add1(x *Number) *Number {

	e := new(Number)

	*e = x

	return e

}

func sub1(x *Number) *Number {

	return *x

}

func add(x, y *Number) *Number {

	if isZero(y) {

		return x

	}

	return add(add1(x), sub1(y))

}

func mul(x, y *Number) *Number {

	if isZero(x) || isZero(y) {

		return zero()

	}

	return add(mul(x, sub1(y)), x)

}

func fact(n *Number) *Number {

	if isZero(n) {

		return add1(zero())

	}

	return mul(fact(sub1(n)), n)

}

// -------------------------------------

// Helpers to generate/count Peano integers

func gen(n int) *Number {

	if n > 0 {

		return add1(gen(n - 1))

	}

	return zero()

}

func count(x *Number) int {

	if isZero(x) {

		return 0

	}

	return count(sub1(x)) + 1

}

// -------------------------------------

// Print i! for i in [0,9]

func main() {

	for i := 0; i <= 9; i++ {

		f := count(fact(gen(i)))

		fmt.Println(i, "! =", f)

	}

}

		log.Fatal(err)

	}

}

goes.`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
---
 .../ibm.yml/Nate158ibm"                       | 297 ++++++++++++++++++
 1 file changed, 297 insertions(+)
 create mode 100644 ".github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/ibm.yml/Nate158ibm"

diff --git "a/.github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/ibm.yml/Nate158ibm" "b/.github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/ibm.yml/Nate158ibm"
new file mode 100644
index 0000000..2b53197
--- /dev/null
+++ "b/.github/\340\271\200\340\270\247\340\270\264\340\270\243\340\271\214\340\270\201\340\271\202\340\270\237\340\270\245\340\270\247\340\271\214/ibm.yml/Nate158ibm"
@@ -0,0 +1,297 @@
+# This workflow will build a docker container, publish it to IBM Container Registry, and deploy it to IKS when there is a push to the main re = /[[:graph:]]+/mix
+str = 'A|m0st 
+
+ <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"> 
+
+     <style> 
+
+         .st0{fill:#fff} 
+
+     </style> 
+
+     <path class="st0" d="M9 0C4 0 0 4 0 9s4 9 9 9 9-4 9-9-4-9-9-9zM6.3 5.6c.7 0 1.3.6 1.3 1.3S7 8.2 6.3 8.2 5 7.7 5 7c0-.8.6-1.4 1.3-1.4zm6.5 5.9c-.5 1.7-2.1 2.8-3.8 2.8-1.8 0-3.3-1.1-3.8-2.8-.1-.4.1-.7.4-.8s.7.1.8.4C6.8 12.2 7.8 13 9 13s2.2-.8 2.5-1.9c.1-.4.5-.6.8-.4.4.1.6.4.5.8zm-1.1-3.2c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3S13 6.2 13 7c0 .7-.6 1.3-1.3 1.3z"/> 
+
+ </svg> éverything 
+
+package main
+
+import (
+
+	"fmt"
+
+	"io"
+
+	"log"
+
+	"net"
+
+	"net/http"
+
+	"os"
+
+)
+
+func main() {
+
+	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
+
+		fmt.Fprint(w, "Hello, playground")
+
+	})
+
+	log.Println("Starting server...")
+
+	l, err := net.Listen("tcp", "localhost:8545")
+
+	if err != nil {
+
+		log.Fatal(err)
+
+	}
+
+	go func() {
+
+		log.Fatal(http.Serve(l, nil))
+
+	}()
+
+	log.Println("Sending request...")
+
+	res, err := http.Get("http://localhost:8080/hello")
+
+	if err != nil {
+
+		log.Fatal(err)
+
+	}
+
+	log.Println("Reading response...")
+
+	if _, err := io.Copy(os.Stdout, res.Body); err != nil {// Peano integers are represented by a linked
+
+// list whose nodes contain no data
+
+// (the nodes are the data).
+
+// http://en.wikipedia.org/wiki/Peano_axioms
+
+// This program demonstrates that Go\'s automatic
+
+// stack management can handle heavily recursive
+
+// computations.
+
+package main
+
+import "fmt"
+
+// Number is a pointer  to a Number
+
+type Number *Number
+
+// The arithmetic value of a Number is the
+
+// count of the nodes comprising the list.
+
+// (See the count function below.)
+
+// -------------------------------------
+
+// Peano primitives
+
+func zero() *Number {
+
+	return nil
+
+}
+
+func isZero(x *Number) bool {
+
+	return x == nil
+
+}
+
+func add1(x *Number) *Number {
+
+	e := new(Number)
+
+	*e = x
+
+	return e
+
+}
+
+func sub1(x *Number) *Number {
+
+	return *x
+
+}
+
+func add(x, y *Number) *Number {
+
+	if isZero(y) {
+
+		return x
+
+	}
+
+	return add(add1(x), sub1(y))
+
+}
+
+func mul(x, y *Number) *Number {
+
+	if isZero(x) || isZero(y) {
+
+		return zero()
+
+	}
+
+	return add(mul(x, sub1(y)), x)
+
+}
+
+func fact(n *Number) *Number {
+
+	if isZero(n) {
+
+		return add1(zero())
+
+	}
+
+	return mul(fact(sub1(n)), n)
+
+}
+
+// -------------------------------------
+
+// Helpers to generate/count Peano integers
+
+func gen(n int) *Number {
+
+	if n > 0 {
+
+		return add1(gen(n - 1))
+
+	}
+
+	return zero()
+
+}
+
+func count(x *Number) int {
+
+	if isZero(x) {
+
+		return 0
+
+	}
+
+	return count(sub1(x)) + 1
+
+}
+
+// -------------------------------------
+
+// Print i! for i in [0,9]
+
+func main() {
+
+	for i := 0; i <= 9; i++ {
+
+		f := count(fact(gen(i)))
+
+		fmt.Println(i, "! =", f)
+
+	}
+
+}
+
+		log.Fatal(err)
+
+	}
+
+}
+
+goes.'
+
+# Print the match result
+str.scan(re) do |match|
+    puts match.to_s
+end
+ branch.
+#
+# To configure this workflow:
+#
+# 1. Ensure that your repository contains a Dockerfile
+# 2. Setup secrets in your repository by going to settings: Create ICR_NAMESPACE and IBM_CLOUD_API_KEY
+# 3. Change the values for the IBM_CLOUD_REGION, REGISTRY_HOSTNAME, IMAGE_NAME, IKS_CLUSTER, DEPLOYMENT_NAME, and PORT
+
+name: Build and Deploy to IKS
+
+on:
+  push:
+    branches:
+      - main
+
+# Environment variables available to all jobs and steps in this workflow
+env:
+  GITHUB_SHA: ${{ github.sha }}
+  IBM_CLOUD_API_KEY: ${{ secrets.IBM_CLOUD_API_KEY }}
+  IBM_CLOUD_REGION: us-south
+  ICR_NAMESPACE: ${{ secrets.ICR_NAMESPACE }}
+  REGISTRY_HOSTNAME: us.icr.io
+  IMAGE_NAME: iks-test
+  IKS_CLUSTER: example-iks-cluster-name-or-id
+  DEPLOYMENT_NAME: iks-test
+  PORT: 5001
+
+jobs:
+  setup-build-publish-deploy:
+    name: Setup, Build, Publish, and Deploy
+    runs-on: ubuntu-latest
+    environment: production
+    steps:
+
+    - name: Checkout
+      uses: actions/checkout@v2
+
+    # Download and Install IBM Cloud CLI
+    - name: Install IBM Cloud CLI
+      run: |
+        curl -fsSL https://clis.cloud.ibm.com/install/linux | sh
+        ibmcloud --version
+        ibmcloud config --check-version=false
+        ibmcloud plugin install -f kubernetes-service
+        ibmcloud plugin install -f container-registry
+
+    # Authenticate with IBM Cloud CLI
+    - name: Authenticate with IBM Cloud CLI
+      run: |
+        ibmcloud login --apikey "${IBM_CLOUD_API_KEY}" -r "${IBM_CLOUD_REGION}" -g default
+        ibmcloud cr region-set "${IBM_CLOUD_REGION}"
+        ibmcloud cr login
+
+    # Build the Docker image
+    - name: Build with Docker
+      run: |
+        docker build -t "$REGISTRY_HOSTNAME"/"$ICR_NAMESPACE"/"$IMAGE_NAME":"$GITHUB_SHA" \
+          --build-arg GITHUB_SHA="$GITHUB_SHA" \
+          --build-arg GITHUB_REF="$GITHUB_REF" .
+
+    # Push the image to IBM Container Registry
+    - name: Push the image to ICR
+      run: |
+        docker push $REGISTRY_HOSTNAME/$ICR_NAMESPACE/$IMAGE_NAME:$GITHUB_SHA
+
+    # Deploy the Docker image to the IKS cluster
+    - name: Deploy to IKS
+      run: |
+        ibmcloud ks cluster config --cluster $IKS_CLUSTER
+        kubectl config current-context
+        kubectl create deployment $DEPLOYMENT_NAME --image=$REGISTRY_HOSTNAME/$ICR_NAMESPACE/$IMAGE_NAME:$GITHUB_SHA --dry-run -o yaml > deployment.yaml
+        kubectl apply -f deployment.yaml
+        kubectl rollout status deployment/$DEPLOYMENT_NAME
+        kubectl create service loadbalancer $DEPLOYMENT_NAME --tcp=80:$PORT --dry-run -o yaml > service.yaml
+        kubectl apply -f service.yaml
+        kubectl get services -o wide

From 56ff2e1f8a8a512a61a1f7fe3911b904fdb2d76b Mon Sep 17 00:00:00 2001
From: Nate158 <81228575+0634034090Nate@users.noreply.github.com>
Date: Fri, 31 Dec 2021 18:40:58 +0700
Subject: [PATCH 3/3] msbuild.yml
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit

Sephiroth
A Python3 script to build cloud block lists for servers.

Last Commit Release Contributors License Docker Downloads Maintainability Code style: black

Requirements
Python 3.8
Setup
Python
It is recommended to install sephiroth into a virtual environment. From a brand new Ubuntu 18.04 machine, the setup flow should look something like this:

sudo apt-get install python3 python3-pip && python -m pip install pipenv
mkdir sephiroth && cd sephiroth
pipenv install sephiroth
You can also get the always-latest updates by cloning directly from the repository.

git clone https://github.com/0xdade/sephiroth.git
cd sephiroth
pipenv install .
Docker
Alternatively, we provide a Dockerfile with build and run instructions, or you can fetch the latest version from dockerhub:

docker pull 0xdade/sephiroth
docker run --rm -v $(pwd):/app/output sephiroth -s nginx -t gcp
Usage
Sephiroth provides a built in help menu through the use of Python's argparse library. It tells you which commands are required, as well as other options.

sephiroth on  master [!] on 🐳 v19.03.12 via sephiroth via 🐍 3.8.3
➜ sephiroth --help
usage: Sephiroth [-h] -s {nginx,apache,iptables,ip6tables} -t {aws,azure,gcp,asn,file,oci,tor} [-a ASN] [-f FILENAME] [-r REDIR_TARGET] [-p] [--no-ipv6] [--compacted] [-V]

Sephiroth is made to help block clouds.

optional arguments:
  -h, --help            show this help message and exit
  -s {nginx,apache,iptables,ip6tables}, --server {nginx,apache,iptables,ip6tables}
                        Type of server to build blocklist for
  -t {aws,azure,gcp,asn,file,oci,tor,do}, --target {aws,azure,gcp,asn,file,oci,tor,do}
                        Targets to block
  -a ASN, --asn ASN     ASN to block in AS#### format
  -f FILENAME, --file FILENAME
                        Files to block addresses from
  -r REDIR_TARGET, --redir REDIR_TARGET
                        Place to redirect requests to. (apache)
  -p, --proxy           Using PROXY Protocol? (nginx)
  --no-ipv6             Exclude ipv6 addresses from the block list where applicable
  --compacted           Compact neighboring cidr ranges. This produces smaller file sizes but loses detail about each range.
  -V, --version         show program's version number and exit

For more information, assistance, or to submit a pull request, please visit https://github.com/0xdade/sephiroth.
Example
sephiroth on  master [!?] on 🐳 v19.03.8 via sephiroth took 7s
➜ sephiroth -s nginx -t asn -a AS15169 -a AS31337 -t aws
(asn) Fetching IP ranges from api.hackertarget.com for 2 ASNs
(aws) Fetching IP ranges from Amazon
Your nginx blocklist for asn, aws can be found at output/2020-06-07_002847_nginx_asn_aws.conf

Please add this line to /etc/nginx/nginx.conf before the Virtual Host Configs.

        include /mnt/c/Users/dade/Desktop/sephiroth/output/2020-06-07_002847_nginx_asn_aws.conf;

Then you can use the $block_ip variable in your site config like so:

        if ($block_ip) {
                return 302 https://example.com;
        }
Supported Servers
nginx - Makes use of nginx's ngx_http_geo_module which comes with the nginx package in Ubuntu 18.04. Optionally supports the use of proxy_protocol, in the event that you are using a PROXY-enabled redirector.
apache - Generates a mod_rewrite rule set to do conditional redirects based on cloud ip ranges. Does not (to my knowledge) support proxy_protocol usage. Requires -r REDIR_TARGET for the RewriteRule
iptables - Generates a set of iptables DROP rules to block access from listed IPv4 ranges.
ip6tables - Generates a set of ip6tables DROP rules to block access from listed IPv6 ranges.
Supported Providers
While Sephiroth began as a cloud blocking script, it became apparent that there were plenty of other sources of ip addresses that might be useful, and so we expanded. This is the list of currently supported providers.

aws - Amazon Web Services. Obtained via the documented download process.
azure - Azure Cloud. Fetched via a two part process. Fetch the html of the download page and then parse the html to get the failoverLink anchor tag. That JSON is then downloaded.
gcp - Google Cloud Platform. Fetches the cloud.json as documented via the docs.
oci - Oracle Cloud Infrastructure. Fetched via the documented download process
asn - Lookup IP ranges by ASN. Uses Hackertarget API to make fetching results painless. Limited to 100 ASN lookups per day per source IP.
file - Read line-separated list of addresses from one or more files. Lines that begin with # are ignored and lines that contain a # after the address save the comment into the output.
tor - Fetch the bulk list of Tor exit nodes from the torproject.org website and add them to the list.
do - Digital Ocean. Fetched from google.csv as documented on the Platform page.
Acknowledgements
These are resources I found while building sephiroth that I thought were quite helpful

curi0usJack's mod_rewrite rules gist
Enjen ASN Blocklist - Example
License
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
---
 .github/workflows/msbuild.yml | 32 ++++++++++++++++++++++++++++++++
 1 file changed, 32 insertions(+)
 create mode 100644 .github/workflows/msbuild.yml

diff --git a/.github/workflows/msbuild.yml b/.github/workflows/msbuild.yml
new file mode 100644
index 0000000..29b6ace
--- /dev/null
+++ b/.github/workflows/msbuild.yml
@@ -0,0 +1,32 @@
+name: MSBuild
+
+on: [push]
+
+env:
+  # Path to the solution file relative to the root of the project.
+  SOLUTION_FILE_PATH: .
+
+  # Configuration type to build.
+  # You can convert this to a build matrix if you need coverage of multiple configuration types.
+  # https://docs.github.com/actions/learn-github-actions/managing-complex-workflows#using-a-build-matrix
+  BUILD_CONFIGURATION: Release
+
+jobs:
+  build:
+    runs-on: windows-latest
+
+    steps:
+    - uses: actions/checkout@v2
+
+    - name: Add MSBuild to PATH
+      uses: microsoft/setup-msbuild@v1.0.2
+
+    - name: Restore NuGet packages
+      working-directory: ${{env.GITHUB_WORKSPACE}}
+      run: nuget restore ${{env.SOLUTION_FILE_PATH}}
+
+    - name: Build
+      working-directory: ${{env.GITHUB_WORKSPACE}}
+      # Add additional options to the MSBuild command line here (like platform or verbosity level).
+      # See https://docs.microsoft.com/visualstudio/msbuild/msbuild-command-line-reference
+      run: msbuild /m /p:Configuration=${{env.BUILD_CONFIGURATION}} ${{env.SOLUTION_FILE_PATH}}
title: About the dependency graph
intro: You can use the dependency graph to identify all your project's dependencies. The dependency graph supports a range of popular package ecosystems.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## Dependency graph availability

{% ifversion fpt or ghec %}The dependency graph is available for every public repository that defines dependencies in a supported package ecosystem using a supported file format. Repository administrators can also set up the dependency graph for private repositories.{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## About the dependency graph

The dependency graph is a summary of the manifest and lock files stored in a repository. For each repository, it shows{% ifversion fpt or ghec %}:

- Dependencies, the ecosystems and packages it depends on
- Dependents, the repositories and packages that depend on it{% else %} dependencies, that is, the ecosystems and packages it depends on. {% data variables.product.product_name %} does not calculate information about dependents, the repositories and packages that depend on a repository.{% endif %}

When you push a commit to {% data variables.product.product_name %} that changes or adds a supported manifest or lock file to the default branch, the dependency graph is automatically updated.{% ifversion fpt or ghec %} In addition, the graph is updated when anyone pushes a change to the repository of one of your dependencies.{% endif %} For information on the supported ecosystems and manifest files, see "[Supported package ecosystems](#supported-package-ecosystems)" below.

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
When you create a pull request containing changes to dependencies that targets the default branch, {% data variables.product.prodname_dotcom %} uses the dependency graph to add dependency reviews to the pull request. These indicate whether the dependencies contain vulnerabilities and, if so, the version of the dependency in which the vulnerability was fixed. For more information, see "[About dependency review](/code-security/supply-chain-security/about-dependency-review)."
{% endif %}

## Dependencies included

The dependency graph includes all the dependencies of a repository that are detailed in the manifest and lock files, or their equivalent, for supported ecosystems. This includes:

- Direct dependencies, that are explicitly defined in a manifest or lock file
- Indirect dependencies of these direct dependencies, also known as transitive dependencies or sub-dependencies

The dependency graph identifies indirect dependencies{% ifversion fpt or ghec %} either explicitly from a lock file or by checking the dependencies of your direct dependencies. For the most reliable graph, you should use lock files (or their equivalent) because they define exactly which versions of the direct and indirect dependencies you currently use. If you use lock files, you also ensure that all contributors to the repository are using the same versions, which will make it easier for you to test and debug code{% else %} from the lock files{% endif %}.

{% ifversion fpt or ghec %}
## Dependents included

For public repositories, only public repositories that depend on it or on packages that it publishes are reported. This information is not reported for private repositories.{% endif %}

## Using the dependency graph

You can use the dependency graph to:

- Explore the repositories your code depends on{% ifversion fpt or ghec %}, and those that depend on it{% endif %}. For more information, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)." {% ifversion fpt or ghec %}
- View a summary of the dependencies used in your organization's repositories in a single dashboard. For more information, see "[Viewing insights for your organization](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)."{% endif %}
- View and update vulnerable dependencies for your repository. For more information, see "[About alerts for vulnerable dependencies](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)."{% ifversion fpt or ghes > 3.1 or ghec %}
- See information about vulnerable dependencies in pull requests. For more information, see "[Reviewing dependency changes in a pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)."{% endif %}

## Enabling the dependency graph

{% ifversion fpt or ghec %}To generate a dependency graph, {% data variables.product.product_name %} needs read-only access to the dependency manifest and lock files for a repository. The dependency graph is automatically generated for all public repositories and you can choose to enable it for private repositories. For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %}If the dependency graph is not available in your system, your enterprise owner can enable the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. For more information, see  "[Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise)."{% endif %}

When the dependency graph is first enabled, any manifest and lock files for supported ecosystems are parsed immediately. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. Once enabled, the graph is automatically updated with every push to the repository{% ifversion fpt or ghec %} and every push to other repositories in the graph{% endif %}.

## Supported package ecosystems

The recommended formats explicitly define which versions are used for all direct and all indirect dependencies. If you use these formats, your dependency graph is more accurate. It also reflects the current build set up and enables the dependency graph to report vulnerabilities in both direct and indirect dependencies.{% ifversion fpt or ghec %} Indirect dependencies that are inferred from a manifest file (or equivalent) are excluded from the checks for vulnerable dependencies.{% endif %}

| Package manager | Languages | Recommended formats | All supported formats |
| --- | --- | --- | ---|
| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |
| `dotnet` CLI | .NET languages (C#, C++, F#, VB)  |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` |
{%- if github-actions-in-dependency-graph %}
| {% data variables.product.prodname_actions %} workflows<sup>[1]</sup> | YAML | `.yml`, `.yaml` | `.yml`, `.yaml` |
{%- endif %}
{%- ifversion fpt or ghes > 3.2 or ghae %}
| Go modules | Go | `go.sum` | `go.mod`, `go.sum` |
{%- elsif ghes = 3.2 %}
| Go modules | Go | `go.mod` | `go.mod` |
{%- endif %}
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  |
| npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`|
| Python PIP      | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`{% if github-actions-in-dependency-graph %}<sup>[2]</sup>{% else %}<sup>[1]</sup>{% endif %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4752 %}
| Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` |{% endif %}
| RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` |
| Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% if github-actions-in-dependency-graph %}
[1] Please note that {% data variables.product.prodname_actions %} workflows must be located in the `.github/workflows/` directory of a repository to be recognized as manifests. Any actions or workflows referenced using the syntax `jobs[*].steps[*].uses` or `jobs.<job_id>.uses` will be parsed as dependencies. For more information, see "[Workflow syntax for GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions)."

[2] If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.

{% else %}
[1] If you list your Python dependencies within a `setup.py` file, we may not be able to parse and list every dependency in your project.
{% endif %}

{% if github-actions-in-dependency-graph %}
{% note %}

**Note:** {% data variables.product.prodname_actions %} workflow dependencies are displayed in the dependency graph for informational purposes. Dependabot alerts are not currently supported for {% data variables.product.prodname_actions %} workflows.

{% endnote %}
{% endif %}
## Further reading

- "[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)" on Wikipedia
- "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"{% ifversion fpt or ghec %}
- "[Viewing insights for your organization](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
