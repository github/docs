From 1ad82b77baca0d60a02e2c776f9f070469803ff9 Mon Sep 17 00:00:00 2001
From: GitHub Actions <action@github.com>
Date: Thu, 31 Mar 2022 02:57:43 +0000
Subject: [PATCH] update search indexes

---
 lib/search/indexes/github-docs-3.1-cn-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.1-cn.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.1-en-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.1-en.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.1-es-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.1-es.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.1-ja-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.1-ja.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.1-pt-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.1-pt.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.2-cn-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.2-cn.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.2-en-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.2-en.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.2-es-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.2-es.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.2-ja-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.2-ja.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.2-pt-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.2-pt.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.3-cn-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.3-cn.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.3-en-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.3-en.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.3-es-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.3-es.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.3-ja-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.3-ja.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.3-pt-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.3-pt.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.4-cn-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.4-cn.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.4-en-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.4-en.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.4-es-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.4-es.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.4-ja-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.4-ja.json.br            | 4 ++--
 lib/search/indexes/github-docs-3.4-pt-records.json.br    | 4 ++--
 lib/search/indexes/github-docs-3.4-pt.json.br            | 4 ++--
 lib/search/indexes/github-docs-dotcom-cn-records.json.br | 4 ++--
 lib/search/indexes/github-docs-dotcom-cn.json.br         | 4 ++--
 lib/search/indexes/github-docs-dotcom-en-records.json.br | 4 ++--
 lib/search/indexes/github-docs-dotcom-en.json.br         | 4 ++--
 lib/search/indexes/github-docs-dotcom-es-records.json.br | 4 ++--
 lib/search/indexes/github-docs-dotcom-es.json.br         | 4 ++--
 lib/search/indexes/github-docs-dotcom-ja-records.json.br | 4 ++--
 lib/search/indexes/github-docs-dotcom-ja.json.br         | 4 ++--
 lib/search/indexes/github-docs-dotcom-pt-records.json.br | 4 ++--
 lib/search/indexes/github-docs-dotcom-pt.json.br         | 4 ++--
 lib/search/indexes/github-docs-ghae-cn-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghae-cn.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghae-en-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghae-en.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghae-es-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghae-es.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghae-ja-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghae-ja.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghae-pt-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghae-pt.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghec-cn-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghec-cn.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghec-en-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghec-en.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghec-es-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghec-es.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghec-ja-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghec-ja.json.br           | 4 ++--
 lib/search/indexes/github-docs-ghec-pt-records.json.br   | 4 ++--
 lib/search/indexes/github-docs-ghec-pt.json.br           | 4 ++--
 70 files changed, 140 insertions(+), 140 deletions(-)

diff --git a/lib/search/indexes/github-docs-3.1-cn-records.json.br b/lib/search/indexes/github-docs-3.1-cn-records.json.br
index f94135e40147..7dc33e67fc57 100644
--- a/lib/search/indexes/github-docs-3.1-cn-records.json.br
+++ b/lib/search/indexes/github-docs-3.1-cn-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:4950d31714cdd952b53313fbcba0bf9a3dc2dca1d9aec04aca96d397fc71a117
-size 659364
+oid sha256:b0df2b45970397045dd0370e01d6ee9057ba41a3ceff67905e6f8867f009cd28
+size 659598
diff --git a/lib/search/indexes/github-docs-3.1-cn.json.br b/lib/search/indexes/github-docs-3.1-cn.json.br
index e3493f59a566..3eb4555ce093 100644
--- a/lib/search/indexes/github-docs-3.1-cn.json.br
+++ b/lib/search/indexes/github-docs-3.1-cn.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:214c591d384e4107765f5f1f6e952206a26fb60aadbeaeb7aa5926e31e117228
-size 1338448
+oid sha256:ebf760191e57d05ebc9b570fa73f5fe7ffb5da99365190228951b47f7bebef90
+size 1322198
diff --git a/lib/search/indexes/github-docs-3.1-en-records.json.br b/lib/search/indexes/github-docs-3.1-en-records.json.br
index 83b5d4c8a707..14c31cc60b73 100644
--- a/lib/search/indexes/github-docs-3.1-en-records.json.br
+++ b/lib/search/indexes/github-docs-3.1-en-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:3ab20bbfb27c20548fc067ce0020e522a492eefe7b7eff5805c23781504a9efc
-size 881353
+oid sha256:7950d3e22ff3ddd412a09953854e7a3c01c153b890714a5b439fc15f83b007ab
+size 881376
diff --git a/lib/search/indexes/github-docs-3.1-en.json.br b/lib/search/indexes/github-docs-3.1-en.json.br
index fcdb8064b040..46c2d6130da0 100644
--- a/lib/search/indexes/github-docs-3.1-en.json.br
+++ b/lib/search/indexes/github-docs-3.1-en.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:159be2facd7f6150742059044707214ffdfdd32de13765ddbe04b0980408ec2e
-size 3386906
+oid sha256:79ef5eac8993ef84c8e6cde63a0ce6a66bd3ba0a6c5e08812a438a06b15b1ef4
+size 3388952
diff --git a/lib/search/indexes/github-docs-3.1-es-records.json.br b/lib/search/indexes/github-docs-3.1-es-records.json.br
index 95ebc6a1e40a..dfde6cb6d801 100644
--- a/lib/search/indexes/github-docs-3.1-es-records.json.br
+++ b/lib/search/indexes/github-docs-3.1-es-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:df5f422ca31f62ab443dddea8c73ef495e1d4815580c6046bf3041b257d33607
-size 608469
+oid sha256:24f33ad1f4645ea49708c7ae464621e695fc55b1b92ff42c51dc8655a68b4ddc
+size 608491
diff --git a/lib/search/indexes/github-docs-3.1-es.json.br b/lib/search/indexes/github-docs-3.1-es.json.br
index fc1700e2cc51..33a4ef89014f 100644
--- a/lib/search/indexes/github-docs-3.1-es.json.br
+++ b/lib/search/indexes/github-docs-3.1-es.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:ceffffec9d6badb70b2c4c9228e7eaa192fc302d3154e012cf04baf7cb2bf0e2
-size 2562308
+oid sha256:6da9ae138e741b5e707e344150c3e974dbad46fd1105dd7c15cc0e89df5d6a72
+size 2543497
diff --git a/lib/search/indexes/github-docs-3.1-ja-records.json.br b/lib/search/indexes/github-docs-3.1-ja-records.json.br
index 7ff3ca5bf20a..11aeeb5fdd61 100644
--- a/lib/search/indexes/github-docs-3.1-ja-records.json.br
+++ b/lib/search/indexes/github-docs-3.1-ja-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:26bf54b34822c22b77c3f978f0af063207a23d354072d8d7fa2afb8c3a5e4527
-size 673482
+oid sha256:ba561984059240ff3d9ccb9bdaf7669970f1b8b27d70290b0fe08a5f5ca6c19e
+size 672852
diff --git a/lib/search/indexes/github-docs-3.1-ja.json.br b/lib/search/indexes/github-docs-3.1-ja.json.br
index a907bfd92ff1..f48a942c3bf7 100644
--- a/lib/search/indexes/github-docs-3.1-ja.json.br
+++ b/lib/search/indexes/github-docs-3.1-ja.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:9299d09a13d6cf4bd995eec1810aa7c636b0e145421a502f65d06fac71bbdf04
-size 3577628
+oid sha256:4ce7f106320b27720d119bed3c3a59cf28ac4d29d78f13dadb724eb2a335aa89
+size 3574089
diff --git a/lib/search/indexes/github-docs-3.1-pt-records.json.br b/lib/search/indexes/github-docs-3.1-pt-records.json.br
index 26f7fcc00320..f10096ac4b50 100644
--- a/lib/search/indexes/github-docs-3.1-pt-records.json.br
+++ b/lib/search/indexes/github-docs-3.1-pt-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:9332554544bf394b0cb7d1c72c2657e244c6ecd7b8985612e3a2112ec8e326c0
-size 599602
+oid sha256:3d046af79a2bedaa6737499e31482f86ea77b2226ef85d7183be0c2be2066b97
+size 599168
diff --git a/lib/search/indexes/github-docs-3.1-pt.json.br b/lib/search/indexes/github-docs-3.1-pt.json.br
index 355717f87ece..2b6ab8fb129c 100644
--- a/lib/search/indexes/github-docs-3.1-pt.json.br
+++ b/lib/search/indexes/github-docs-3.1-pt.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:be4ea2c68981b4cd2aa439a859e8c04c78d759f6fdc9bb1b04f9690df8ac9bf3
-size 2445328
+oid sha256:a12d5883d8eca16ef1e6b5395bfa59cc26714073a3e0a8261ee6a08b4985f6fc
+size 2448703
diff --git a/lib/search/indexes/github-docs-3.2-cn-records.json.br b/lib/search/indexes/github-docs-3.2-cn-records.json.br
index 2cd89d1f823a..94c901227058 100644
--- a/lib/search/indexes/github-docs-3.2-cn-records.json.br
+++ b/lib/search/indexes/github-docs-3.2-cn-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:7e1a0d01cce471eb387bce524a8a539f36a7920065b61109bb8c82301408068e
-size 676759
+oid sha256:6713c2612d8a41f284adcb2100684b26af6f493041233694e8e0d1ef9b7bfc7a
+size 677901
diff --git a/lib/search/indexes/github-docs-3.2-cn.json.br b/lib/search/indexes/github-docs-3.2-cn.json.br
index 4aad89b0cbac..16fcf412812f 100644
--- a/lib/search/indexes/github-docs-3.2-cn.json.br
+++ b/lib/search/indexes/github-docs-3.2-cn.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:d2f5e67f3d4137762882ba45b703d2069f3542138e5f5d36fed692cc642e1c31
-size 1368621
+oid sha256:e7ffaf3a5d0f3b9adf26b2d3a4767f4631639f3cae7dcebecc49cfa59d60a2c3
+size 1352369
diff --git a/lib/search/indexes/github-docs-3.2-en-records.json.br b/lib/search/indexes/github-docs-3.2-en-records.json.br
index dac7b3125332..c43cd31be186 100644
--- a/lib/search/indexes/github-docs-3.2-en-records.json.br
+++ b/lib/search/indexes/github-docs-3.2-en-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:8be3a44b17ff7a024eff1c0bc41594cd807921d9008e7f7b3070f8447e0093a9
-size 911111
+oid sha256:60e56847291d422463c012164e1358ac5e600652649751cbf7c580f2cdbd363b
+size 910292
diff --git a/lib/search/indexes/github-docs-3.2-en.json.br b/lib/search/indexes/github-docs-3.2-en.json.br
index 7d7fa39cfda6..8aa482f0f6cd 100644
--- a/lib/search/indexes/github-docs-3.2-en.json.br
+++ b/lib/search/indexes/github-docs-3.2-en.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:96feff0cddc5285b778c68e3747f7ead6d7e68547a21b24e32cf282dc5ec4dc7
-size 3505405
+oid sha256:dbc896f59f461af0dc1c295764d369546179c2804da2012a435696f200d492ac
+size 3503311
diff --git a/lib/search/indexes/github-docs-3.2-es-records.json.br b/lib/search/indexes/github-docs-3.2-es-records.json.br
index 69550c904bb2..b5922bb1b0fe 100644
--- a/lib/search/indexes/github-docs-3.2-es-records.json.br
+++ b/lib/search/indexes/github-docs-3.2-es-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:f5d62aae6b0fa322e20fca29891ad378e11a76d894dbd00618bd5e9ebe3a0c55
-size 624623
+oid sha256:97ccaf077abdd6c2b0b4fcc64cc4badac9efb769041fc5b1b227bbb342c35af5
+size 625162
diff --git a/lib/search/indexes/github-docs-3.2-es.json.br b/lib/search/indexes/github-docs-3.2-es.json.br
index 7b8cea5b67c9..b61c57d35f0c 100644
--- a/lib/search/indexes/github-docs-3.2-es.json.br
+++ b/lib/search/indexes/github-docs-3.2-es.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:0e534c8541029acbede44777cd7698438cbf9ae02d029955dfa6ed36c25ad4a3
-size 2631152
+oid sha256:a36ccdec25ff0c97b9075c69d947e476c3086fe91956fedba561748464d6d527
+size 2613268
diff --git a/lib/search/indexes/github-docs-3.2-ja-records.json.br b/lib/search/indexes/github-docs-3.2-ja-records.json.br
index 9bca87900ce8..1c0229cb1a2b 100644
--- a/lib/search/indexes/github-docs-3.2-ja-records.json.br
+++ b/lib/search/indexes/github-docs-3.2-ja-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:fe11d61bdaec50d2f84026898f29201cf795dedf62f7625b4073a1bc8d4f9ca1
-size 690375
+oid sha256:9b9ee00a7bf397c7601e5063c9ec0ac4215e47b35aff1bb55c6a69ca9c1818b0
+size 688896
diff --git a/lib/search/indexes/github-docs-3.2-ja.json.br b/lib/search/indexes/github-docs-3.2-ja.json.br
index 371502b10b38..ecd00d1d104d 100644
--- a/lib/search/indexes/github-docs-3.2-ja.json.br
+++ b/lib/search/indexes/github-docs-3.2-ja.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:437fb24cdfeb211b351b25172b1b594101a9985583a7a61311e787db376fa0bc
-size 3668731
+oid sha256:d6e6016f1a3c5ad938068a594b7273b5bae96c5276106b9386b11003a47341a5
+size 3664106
diff --git a/lib/search/indexes/github-docs-3.2-pt-records.json.br b/lib/search/indexes/github-docs-3.2-pt-records.json.br
index 9fea839af744..40d06bd19d0a 100644
--- a/lib/search/indexes/github-docs-3.2-pt-records.json.br
+++ b/lib/search/indexes/github-docs-3.2-pt-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:f371a0af23392f3df6f97095ffd5ed71026c207f02e633ba67b67912d892f65c
-size 614367
+oid sha256:1073f0a876ef15cdfc64cc33f8143b20edf9fff64631a88675e078d4b9effde0
+size 614828
diff --git a/lib/search/indexes/github-docs-3.2-pt.json.br b/lib/search/indexes/github-docs-3.2-pt.json.br
index 76cc036c5b30..e4400f2925f2 100644
--- a/lib/search/indexes/github-docs-3.2-pt.json.br
+++ b/lib/search/indexes/github-docs-3.2-pt.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:82508597b895cb043a79c3dece4332c57d38691648a5e36092e632a977d6b3cd
-size 2503259
+oid sha256:c15c619b5eb0e85ac3ac43028c49a406eb96bbe6b4c1873b208abdfb3e4f27cd
+size 2506442
diff --git a/lib/search/indexes/github-docs-3.3-cn-records.json.br b/lib/search/indexes/github-docs-3.3-cn-records.json.br
index 53a5cfc6bdf1..8170c6fe6ea6 100644
--- a/lib/search/indexes/github-docs-3.3-cn-records.json.br
+++ b/lib/search/indexes/github-docs-3.3-cn-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:2432b5cf566525d31ca4feeba2ccf2f564cd92b6d6f420b2943e01507a5db73e
-size 700637
+oid sha256:b56387fcbf887f41b3594eaea5c338ae91bdd503130752fe029b14d81f0e31fe
+size 699840
diff --git a/lib/search/indexes/github-docs-3.3-cn.json.br b/lib/search/indexes/github-docs-3.3-cn.json.br
index aaa42785b2d1..16a1580c633a 100644
--- a/lib/search/indexes/github-docs-3.3-cn.json.br
+++ b/lib/search/indexes/github-docs-3.3-cn.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:312c8e2eaf49266a4501747144f4fd9602e19f89e19577d930561d3e332f99b1
-size 1422065
+oid sha256:fa693e87827988fa9743bcedc61a29add90a580f8506b116801e4b91251a1009
+size 1400160
diff --git a/lib/search/indexes/github-docs-3.3-en-records.json.br b/lib/search/indexes/github-docs-3.3-en-records.json.br
index 4e28566f8eba..fc7e32cc0399 100644
--- a/lib/search/indexes/github-docs-3.3-en-records.json.br
+++ b/lib/search/indexes/github-docs-3.3-en-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:d02dc66d97462c54f728c1ddec1a494106f43d2fd6ad74bcda75e4d6f2c19f33
-size 942545
+oid sha256:17b4ef0d23ae0ac93b41d035752e5f3bbf28d757ec4893a460841367b5f39eca
+size 944744
diff --git a/lib/search/indexes/github-docs-3.3-en.json.br b/lib/search/indexes/github-docs-3.3-en.json.br
index 45b015549946..b1eee3340b87 100644
--- a/lib/search/indexes/github-docs-3.3-en.json.br
+++ b/lib/search/indexes/github-docs-3.3-en.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:acb3bc74013ec7662e51bf82de80b2b880384d48673d7b0c6aa3e74b0dd4890e
-size 3621967
+oid sha256:6dc3c81b3ba7a8dc83a7490fd004e5b7cc5d20c4b168546cc1e37305edd8f291
+size 3620706
diff --git a/lib/search/indexes/github-docs-3.3-es-records.json.br b/lib/search/indexes/github-docs-3.3-es-records.json.br
index 354817f6d58e..49e6c2a1aed4 100644
--- a/lib/search/indexes/github-docs-3.3-es-records.json.br
+++ b/lib/search/indexes/github-docs-3.3-es-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:edbf36d129364c3c675c18962a3490ee2071bedaaa8e7072f99de55246730f5f
-size 644407
+oid sha256:164df3579f184cf73e69c31ba7736d153f5a481966de21fcbe85d11d671fd098
+size 644856
diff --git a/lib/search/indexes/github-docs-3.3-es.json.br b/lib/search/indexes/github-docs-3.3-es.json.br
index d0c0d2412630..ae39d5e7911d 100644
--- a/lib/search/indexes/github-docs-3.3-es.json.br
+++ b/lib/search/indexes/github-docs-3.3-es.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:09a62acc22011e270d879c1ead55b8ad1150e838a374e18d0f624343a6ed8f8a
-size 2716728
+oid sha256:3dac8154937139eea464e80c077a2029b595cab017f3925a2edacf1edc904bc4
+size 2700791
diff --git a/lib/search/indexes/github-docs-3.3-ja-records.json.br b/lib/search/indexes/github-docs-3.3-ja-records.json.br
index 413c7289808d..827769078be2 100644
--- a/lib/search/indexes/github-docs-3.3-ja-records.json.br
+++ b/lib/search/indexes/github-docs-3.3-ja-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:5c3f39f9e628c9cbd187d549eca2d1c061bf53c97d1b522fa301d08361b6df2d
-size 713861
+oid sha256:6f4629563b933e8265bce0ae60a53fa38283eff35b4e8e16f6b6c363526f9e60
+size 713201
diff --git a/lib/search/indexes/github-docs-3.3-ja.json.br b/lib/search/indexes/github-docs-3.3-ja.json.br
index 3f3ea1360747..a570edb68637 100644
--- a/lib/search/indexes/github-docs-3.3-ja.json.br
+++ b/lib/search/indexes/github-docs-3.3-ja.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:69b9b61c8ddcdd7c8255130fb1bee84aa0a1e64c7f48792073000f98b73c74b4
-size 3789107
+oid sha256:b8693db1db385f9cbc82f230990e1adc73a8d31b5014ea67ed8a0e948ac79530
+size 3788425
diff --git a/lib/search/indexes/github-docs-3.3-pt-records.json.br b/lib/search/indexes/github-docs-3.3-pt-records.json.br
index 4513d5032ec4..b85cdb9d202a 100644
--- a/lib/search/indexes/github-docs-3.3-pt-records.json.br
+++ b/lib/search/indexes/github-docs-3.3-pt-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:ceac7013fa33ac5a079ce672a05af92d5ffe2a4a2865ffaa0a1e583e5db0f4b2
-size 633386
+oid sha256:ee359147bec3b3e7099cc81464b7e3bd7f54a5b4f0a1102319009abfdd5ee4e9
+size 634196
diff --git a/lib/search/indexes/github-docs-3.3-pt.json.br b/lib/search/indexes/github-docs-3.3-pt.json.br
index 6677beb959d4..01609c1cac12 100644
--- a/lib/search/indexes/github-docs-3.3-pt.json.br
+++ b/lib/search/indexes/github-docs-3.3-pt.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:960152755d32bb3770c8d7c546da3a2d61a572065f63efd3c062cc55e25c90d4
-size 2583462
+oid sha256:51b169c189e27d41b2ff1a739b81a7c2ad0b230e1eaa1b065819df3c34cc6580
+size 2589013
diff --git a/lib/search/indexes/github-docs-3.4-cn-records.json.br b/lib/search/indexes/github-docs-3.4-cn-records.json.br
index 19d433564427..e3f6b5890be2 100644
--- a/lib/search/indexes/github-docs-3.4-cn-records.json.br
+++ b/lib/search/indexes/github-docs-3.4-cn-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:212259530db09eb012bfe6293fed4d8d1adf9f8ba8afb151385c5a3fe343b13c
-size 702322
+oid sha256:010f1c0252001148812d710f17c8b6169a0b9d7c448a863bc47184b5b676206a
+size 703073
diff --git a/lib/search/indexes/github-docs-3.4-cn.json.br b/lib/search/indexes/github-docs-3.4-cn.json.br
index 251e39c8d6d0..c299310a8ef2 100644
--- a/lib/search/indexes/github-docs-3.4-cn.json.br
+++ b/lib/search/indexes/github-docs-3.4-cn.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:f6b621feea07c7904737b232d5fa036e166f7d4f591927357f9c3867a3ebcaaa
-size 1430956
+oid sha256:ccc2c41bc7b3fb20324d1606af666728df3d9eb86c68dfa7cb72257a184eaa5f
+size 1410112
diff --git a/lib/search/indexes/github-docs-3.4-en-records.json.br b/lib/search/indexes/github-docs-3.4-en-records.json.br
index 166ef92a6faa..0a6ab68d646a 100644
--- a/lib/search/indexes/github-docs-3.4-en-records.json.br
+++ b/lib/search/indexes/github-docs-3.4-en-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:503fa7d853e47347f229fa0a20a0af646b2b793caaf18b18c6ff3f1416a8237e
-size 956679
+oid sha256:d9525a15f09ba08567089fb36dc1654bf0314c44d6ce2bf9fce2abe5a5939cff
+size 955466
diff --git a/lib/search/indexes/github-docs-3.4-en.json.br b/lib/search/indexes/github-docs-3.4-en.json.br
index ed23d169e87c..a92cf3e062c5 100644
--- a/lib/search/indexes/github-docs-3.4-en.json.br
+++ b/lib/search/indexes/github-docs-3.4-en.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:6b0cabbaaa45fbd9988f8b22d5150d2f53554cdb886c7a2f3fc2c8b7f785fc42
-size 3660177
+oid sha256:cb9b05beb97d2a9f85fb5df389df128769d54a0b19d701bf24675993a56913f3
+size 3657892
diff --git a/lib/search/indexes/github-docs-3.4-es-records.json.br b/lib/search/indexes/github-docs-3.4-es-records.json.br
index fc943572a15e..23fd815428e8 100644
--- a/lib/search/indexes/github-docs-3.4-es-records.json.br
+++ b/lib/search/indexes/github-docs-3.4-es-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:3eedc31668c13b8a86503110a5938528e8177f6b02cd60aca61cb083d586a061
-size 648358
+oid sha256:c95a34d95d52d530708d920b8d3b8dac6e87a601c099cd9ea37c11ebc8042241
+size 647415
diff --git a/lib/search/indexes/github-docs-3.4-es.json.br b/lib/search/indexes/github-docs-3.4-es.json.br
index dbaa69200ce9..df9760088d93 100644
--- a/lib/search/indexes/github-docs-3.4-es.json.br
+++ b/lib/search/indexes/github-docs-3.4-es.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:3bae0e20cba7c376811a7b0f42d40f857810e2347e1f39b45ab49bc0b79fe37c
-size 2734003
+oid sha256:2fac7d4c911c47a074f217aa57c508c79c11f6ae9e60d71c703bd6c71b9fc6a1
+size 2715263
diff --git a/lib/search/indexes/github-docs-3.4-ja-records.json.br b/lib/search/indexes/github-docs-3.4-ja-records.json.br
index 19dc22139a8e..fcd8ab47377f 100644
--- a/lib/search/indexes/github-docs-3.4-ja-records.json.br
+++ b/lib/search/indexes/github-docs-3.4-ja-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:b54111ebb0606bdad12d181c4b808877c8e8d059f7081fe2c3487cf99beca3bf
-size 716743
+oid sha256:11d49ee301b60dace8b40daf8d355d1563647b0522bbf7341c67018f9d92c762
+size 716022
diff --git a/lib/search/indexes/github-docs-3.4-ja.json.br b/lib/search/indexes/github-docs-3.4-ja.json.br
index b80946494507..f3a90225dbe8 100644
--- a/lib/search/indexes/github-docs-3.4-ja.json.br
+++ b/lib/search/indexes/github-docs-3.4-ja.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:961eae1503aabecfd8507075133b6774f240256a89b9bdb515b9db2d3fd70782
-size 3810073
+oid sha256:82a9b24c34cc4f93adf6faa9b8164558f33d11efbcc7c9f339db8fa3eee5314e
+size 3808632
diff --git a/lib/search/indexes/github-docs-3.4-pt-records.json.br b/lib/search/indexes/github-docs-3.4-pt-records.json.br
index 8abe477bf484..dde49c5c4d25 100644
--- a/lib/search/indexes/github-docs-3.4-pt-records.json.br
+++ b/lib/search/indexes/github-docs-3.4-pt-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:167d254436ef80c2cd61d2e2b87feacf43b8b984fe9db606d128c7df78d4023b
-size 638198
+oid sha256:d926b6f3428069bdf0b8ad8f136b5d27f59f67f14a75b7ac522e849efd8f5495
+size 637937
diff --git a/lib/search/indexes/github-docs-3.4-pt.json.br b/lib/search/indexes/github-docs-3.4-pt.json.br
index 2311af48492b..4768910c7d17 100644
--- a/lib/search/indexes/github-docs-3.4-pt.json.br
+++ b/lib/search/indexes/github-docs-3.4-pt.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:879e97494b273486124542fa94574bcc3a4617668498eb6414c6831815a26a46
-size 2600747
+oid sha256:d5351e9095c63baf5de810fde3a662931a452c4b67d86651ebe30e3b51bdc715
+size 2604816
diff --git a/lib/search/indexes/github-docs-dotcom-cn-records.json.br b/lib/search/indexes/github-docs-dotcom-cn-records.json.br
index 9c6837839dad..093e437dd81d 100644
--- a/lib/search/indexes/github-docs-dotcom-cn-records.json.br
+++ b/lib/search/indexes/github-docs-dotcom-cn-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:c766cb4ea7d489caaa5102d5e9ca524770beeb2434c9a2fa2212cf6555c12451
-size 908320
+oid sha256:d5bea3f5c6b7cf8b9b39f8297454ae62e794812ef19d09db576891bb1a70f54b
+size 908746
diff --git a/lib/search/indexes/github-docs-dotcom-cn.json.br b/lib/search/indexes/github-docs-dotcom-cn.json.br
index 865d4b0e483e..16621fee7d0e 100644
--- a/lib/search/indexes/github-docs-dotcom-cn.json.br
+++ b/lib/search/indexes/github-docs-dotcom-cn.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:9d615851e08b92b30191710bec6593f2271943d0c88932693d80d4e0bab3e433
-size 1563639
+oid sha256:39977a0b2d0d4af0e29f16acbb1db6fa0fa61db0781692ddb96bceeb935190ae
+size 1534293
diff --git a/lib/search/indexes/github-docs-dotcom-en-records.json.br b/lib/search/indexes/github-docs-dotcom-en-records.json.br
index 7d73fa6fff2c..71ca245b13b2 100644
--- a/lib/search/indexes/github-docs-dotcom-en-records.json.br
+++ b/lib/search/indexes/github-docs-dotcom-en-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:c4949127d0396357075210ce49ba4039b1df4378bffbfadf8feb4a66a4c78135
-size 1225803
+oid sha256:05af1dad6f4c9073ed8603c20cb282395aeb5a98ac757ca933a7cd58fda4fdef
+size 1227122
diff --git a/lib/search/indexes/github-docs-dotcom-en.json.br b/lib/search/indexes/github-docs-dotcom-en.json.br
index 81ed1472ce9e..07d54c38c5bf 100644
--- a/lib/search/indexes/github-docs-dotcom-en.json.br
+++ b/lib/search/indexes/github-docs-dotcom-en.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:a7f3a9d6e99858e06ebb16bc3fecb170f74b7c1d48a7f28a2653c7fc3483e497
-size 4423799
+oid sha256:81b6809190abd4566d292f781d20a3e5877f505355346b3991c29f4dd3f541af
+size 4425950
diff --git a/lib/search/indexes/github-docs-dotcom-es-records.json.br b/lib/search/indexes/github-docs-dotcom-es-records.json.br
index e529a5fd68ba..ff7c61a02660 100644
--- a/lib/search/indexes/github-docs-dotcom-es-records.json.br
+++ b/lib/search/indexes/github-docs-dotcom-es-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:58d8a1b35694ab5df1c8a80147ee0b287e95a44431352b4e4ffe735a2dbb04ed
-size 819575
+oid sha256:665dcc71d92f3e65fa1466cc2f40779ed35546cb2402d10ed9684cefe875dc3c
+size 820399
diff --git a/lib/search/indexes/github-docs-dotcom-es.json.br b/lib/search/indexes/github-docs-dotcom-es.json.br
index d6cb2e170902..3bdd244250c4 100644
--- a/lib/search/indexes/github-docs-dotcom-es.json.br
+++ b/lib/search/indexes/github-docs-dotcom-es.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:0ce5c06b0192a83edd7aa4ea1e87cda0928d5157d26cf73d08769a05d0bc094d
-size 3274766
+oid sha256:f120cd4b7c01da400062d812f8449ce2d1775a13fb7742916f9e46f051bfe51b
+size 3262255
diff --git a/lib/search/indexes/github-docs-dotcom-ja-records.json.br b/lib/search/indexes/github-docs-dotcom-ja-records.json.br
index 1ab31f1e57c1..ff28c686768f 100644
--- a/lib/search/indexes/github-docs-dotcom-ja-records.json.br
+++ b/lib/search/indexes/github-docs-dotcom-ja-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:f44d7c3dddeaa3cd431e2f01f67ef95bce59c83edf746164f5d7885b8f1eb162
-size 920627
+oid sha256:b3697f6a7741dd385b42f88b030d46d8ea4ee579892cfed749cab208c9f6b2d7
+size 920307
diff --git a/lib/search/indexes/github-docs-dotcom-ja.json.br b/lib/search/indexes/github-docs-dotcom-ja.json.br
index 06c895860297..b678009a0e8a 100644
--- a/lib/search/indexes/github-docs-dotcom-ja.json.br
+++ b/lib/search/indexes/github-docs-dotcom-ja.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:b4dad1779e37f47b831d09996a453381ca8adf7bd1f6cbd17e792e35da5eedfd
-size 4666571
+oid sha256:8d50b9cf2978d20b7c3b1831906556a16d8c9445cecb3a46538badcddba95309
+size 4666954
diff --git a/lib/search/indexes/github-docs-dotcom-pt-records.json.br b/lib/search/indexes/github-docs-dotcom-pt-records.json.br
index e186eb4d7507..e087012fd225 100644
--- a/lib/search/indexes/github-docs-dotcom-pt-records.json.br
+++ b/lib/search/indexes/github-docs-dotcom-pt-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:69a3964fdc57dd47a51bebf4d7991d915ae870aad68eee55f2057b91aca1a8df
-size 806618
+oid sha256:72d1a475e594948296d5b48536fd440c95940d31b2ff2fcf2585f89d3e4ccab1
+size 808720
diff --git a/lib/search/indexes/github-docs-dotcom-pt.json.br b/lib/search/indexes/github-docs-dotcom-pt.json.br
index 0ed7d9b253be..dee9a9472431 100644
--- a/lib/search/indexes/github-docs-dotcom-pt.json.br
+++ b/lib/search/indexes/github-docs-dotcom-pt.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:1329e96194e5344815f32f3b032f86b677e26ea6d2f9ef76d384e2de695c1d2d
-size 3123625
+oid sha256:7394c996184b6bff2b03ae1a78504a01728b1ec0e92260bc929fd43579fccff7
+size 3132507
diff --git a/lib/search/indexes/github-docs-ghae-cn-records.json.br b/lib/search/indexes/github-docs-ghae-cn-records.json.br
index e90cfae49a1e..81d7f2c7d518 100644
--- a/lib/search/indexes/github-docs-ghae-cn-records.json.br
+++ b/lib/search/indexes/github-docs-ghae-cn-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:eff6ccd653f7a0a4394996d900b8c92239016f9232027b055509baee59fe8491
-size 537445
+oid sha256:55d8480e377d64aa03b31e9bef93769c1979e0434e3481ac2f1d6593c11ebfc9
+size 537712
diff --git a/lib/search/indexes/github-docs-ghae-cn.json.br b/lib/search/indexes/github-docs-ghae-cn.json.br
index b95ff274f7cf..170b747f118d 100644
--- a/lib/search/indexes/github-docs-ghae-cn.json.br
+++ b/lib/search/indexes/github-docs-ghae-cn.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:02e3db58fb9e0b6d4edf55e8f5426779504cccf51f9eb5b0bc95e3da1781e1ac
-size 1012260
+oid sha256:ddf033c076f3bd9b3cfed1fb959e87ebd531b1b0b5da887870af0e6154909c04
+size 994710
diff --git a/lib/search/indexes/github-docs-ghae-en-records.json.br b/lib/search/indexes/github-docs-ghae-en-records.json.br
index e9c715c6bbd4..200c4ff0d3d9 100644
--- a/lib/search/indexes/github-docs-ghae-en-records.json.br
+++ b/lib/search/indexes/github-docs-ghae-en-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:723a7d2dce993005f379611ebb05f8f9e39501d26d0431fa4c16729c17177b12
-size 738584
+oid sha256:83cdcfb0019d9243a8260798a62b8544084151a302ca7aef4065b36cb1f4b871
+size 739598
diff --git a/lib/search/indexes/github-docs-ghae-en.json.br b/lib/search/indexes/github-docs-ghae-en.json.br
index de965c29fa5a..019846d3e38d 100644
--- a/lib/search/indexes/github-docs-ghae-en.json.br
+++ b/lib/search/indexes/github-docs-ghae-en.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:4cece600d6be84384feaff8426576a70f76144df8e7f6eb62e820071ba3a885b
-size 2792121
+oid sha256:3a193856755d0fabc42dba5b24ad27ac82f0d3a30a7bf85ca6bdb599c2d2a492
+size 2793481
diff --git a/lib/search/indexes/github-docs-ghae-es-records.json.br b/lib/search/indexes/github-docs-ghae-es-records.json.br
index dc8a3edac51c..7223362ee8f0 100644
--- a/lib/search/indexes/github-docs-ghae-es-records.json.br
+++ b/lib/search/indexes/github-docs-ghae-es-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:584b57034322956c0cdebfb973df47947609360a8acc66ce1403751a43ac0ac8
-size 495926
+oid sha256:2f68f0dbdf0799c486c6a27a8491ac81842e8b676e612a43fc056839e3ad0c87
+size 495641
diff --git a/lib/search/indexes/github-docs-ghae-es.json.br b/lib/search/indexes/github-docs-ghae-es.json.br
index 43e4f335c867..0de781f92e9b 100644
--- a/lib/search/indexes/github-docs-ghae-es.json.br
+++ b/lib/search/indexes/github-docs-ghae-es.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:cf38abaf5af51627852f8ed7067b8b7a7782168d9388b14841471faf10bb08b5
-size 2010935
+oid sha256:962280bc09862ce0242dffb3292df53b87c52b06f5ec596932384671ed882bb2
+size 1995157
diff --git a/lib/search/indexes/github-docs-ghae-ja-records.json.br b/lib/search/indexes/github-docs-ghae-ja-records.json.br
index 96abff619786..e5b2be8fd4a8 100644
--- a/lib/search/indexes/github-docs-ghae-ja-records.json.br
+++ b/lib/search/indexes/github-docs-ghae-ja-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:e06930050f8c0170fc06cf83616fbabd45b858998f5b79d9716ff2b477721cfe
-size 546804
+oid sha256:13cf638103fd304e0a3fe5ec9abc69f646088ac947590b18454c1bbbd98c7f58
+size 547842
diff --git a/lib/search/indexes/github-docs-ghae-ja.json.br b/lib/search/indexes/github-docs-ghae-ja.json.br
index 5b50274f585b..33ed2583459e 100644
--- a/lib/search/indexes/github-docs-ghae-ja.json.br
+++ b/lib/search/indexes/github-docs-ghae-ja.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:cd53f8c58f87bb5c27c47429c92ffacb52e0e21ec67740ee00ff7cbc6637f364
-size 2782391
+oid sha256:b150a4e469ffe44e7b17775cccbdb276d201de82fc5a44c3173099a7989bb078
+size 2782588
diff --git a/lib/search/indexes/github-docs-ghae-pt-records.json.br b/lib/search/indexes/github-docs-ghae-pt-records.json.br
index a9b92907d9a9..9dfd8705af62 100644
--- a/lib/search/indexes/github-docs-ghae-pt-records.json.br
+++ b/lib/search/indexes/github-docs-ghae-pt-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:89e0f2b367fdc303c21815f8799a099bcef2828a2078e748069e2d9b18adf84b
-size 487898
+oid sha256:36d0ec2d51c9cb6ab5d5c697a997327815c69ca6e1bd1d85524201033cc4139a
+size 488677
diff --git a/lib/search/indexes/github-docs-ghae-pt.json.br b/lib/search/indexes/github-docs-ghae-pt.json.br
index 32fd0b6f4e80..bc8a0094f440 100644
--- a/lib/search/indexes/github-docs-ghae-pt.json.br
+++ b/lib/search/indexes/github-docs-ghae-pt.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:cc25a4bb5e48dfdcb1b583aa7d77eacbd1495a57f2a1d51f3ef668fdc9bfd918
-size 1895053
+oid sha256:90f2ff9b71b19924d52e9ca0c8820847a183114c057a0f84eb5b56256b4a336a
+size 1898898
diff --git a/lib/search/indexes/github-docs-ghec-cn-records.json.br b/lib/search/indexes/github-docs-ghec-cn-records.json.br
index 94b22e1dfdc8..d71e2824c0ca 100644
--- a/lib/search/indexes/github-docs-ghec-cn-records.json.br
+++ b/lib/search/indexes/github-docs-ghec-cn-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:2cefecc0a6c7454674a04f7729b54f39342f65c1fc0a5d689dc2e93f0b7cfba5
-size 840313
+oid sha256:2b7c03c833a8f52f19ff06536dd707d9d6b8a8c2df36c77861f856688221511b
+size 841243
diff --git a/lib/search/indexes/github-docs-ghec-cn.json.br b/lib/search/indexes/github-docs-ghec-cn.json.br
index d3d4b2264ae0..7b5aa7491ab5 100644
--- a/lib/search/indexes/github-docs-ghec-cn.json.br
+++ b/lib/search/indexes/github-docs-ghec-cn.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:f28c289b75253e32d39f9d808f4788a69bf0d6c2bfc5ea2d02b4bcabef8557eb
-size 1623357
+oid sha256:dba28146d29723b85c6bb7f9a3fcf56b52bc5b5c9b08c130c0dde07e2f4b31c7
+size 1587552
diff --git a/lib/search/indexes/github-docs-ghec-en-records.json.br b/lib/search/indexes/github-docs-ghec-en-records.json.br
index 0e088f1c05ab..6140655917e5 100644
--- a/lib/search/indexes/github-docs-ghec-en-records.json.br
+++ b/lib/search/indexes/github-docs-ghec-en-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:c2a0b0acc4e6a73d2969f6154b3016423381df1d87d30d2e5dc345156e2f8a18
-size 1106245
+oid sha256:041dee5e030d4add972ef2c9b25ca9a43144116f8757b2e80623de306d0d83ed
+size 1105514
diff --git a/lib/search/indexes/github-docs-ghec-en.json.br b/lib/search/indexes/github-docs-ghec-en.json.br
index cb4b2ec75de1..14276089ef46 100644
--- a/lib/search/indexes/github-docs-ghec-en.json.br
+++ b/lib/search/indexes/github-docs-ghec-en.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:5d29878a839b93f4fb0450d4a619f39db1e48b4e78201de4bc4d846dc6873f00
-size 4217242
+oid sha256:0dbd7ed50dcb854db9ed83e1ca95430adf3ce0f3b6f6e661f8bcae1a819f7df2
+size 4217310
diff --git a/lib/search/indexes/github-docs-ghec-es-records.json.br b/lib/search/indexes/github-docs-ghec-es-records.json.br
index fc54ff600e2b..6aa5feadcf0d 100644
--- a/lib/search/indexes/github-docs-ghec-es-records.json.br
+++ b/lib/search/indexes/github-docs-ghec-es-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:508f2b83840705bea3a726ead4d5bc16b301b06337d4babf42bdcd6340731a49
-size 777955
+oid sha256:c1730c1636633868a3372e27f58621bbb7c1abb7d3eb0a4a0bf0efc82731c237
+size 778529
diff --git a/lib/search/indexes/github-docs-ghec-es.json.br b/lib/search/indexes/github-docs-ghec-es.json.br
index 7803be4b3312..0601daad10b5 100644
--- a/lib/search/indexes/github-docs-ghec-es.json.br
+++ b/lib/search/indexes/github-docs-ghec-es.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:d34ca266656b0aab0f21dc66a51a552bc2ef75b37aba5290d39a8541aa000653
-size 3262422
+oid sha256:619bd34fa469f9c9a2d7a7838615654f132d2aea7af45381a4bc7dd1cf7fc3ca
+size 3241475
diff --git a/lib/search/indexes/github-docs-ghec-ja-records.json.br b/lib/search/indexes/github-docs-ghec-ja-records.json.br
index 7f717f800fff..15580c0dc71b 100644
--- a/lib/search/indexes/github-docs-ghec-ja-records.json.br
+++ b/lib/search/indexes/github-docs-ghec-ja-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:c7ba0d3c2a2b5381c1ca42f6489c86d8c5a0aa1cb562f546a45727bf7f64fcd8
-size 854638
+oid sha256:3611aa4429a891858e5ff7cc6a6cfaa9d7dafda49d2229c2f8c67d18ace315fd
+size 855370
diff --git a/lib/search/indexes/github-docs-ghec-ja.json.br b/lib/search/indexes/github-docs-ghec-ja.json.br
index 8ddcd8aaf546..10b3e7f0138a 100644
--- a/lib/search/indexes/github-docs-ghec-ja.json.br
+++ b/lib/search/indexes/github-docs-ghec-ja.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:7713c564d31cc748106c0874eafa15552812b3bc9587d8711043a733585495f4
-size 4558367
+oid sha256:5bfca9959f457e8a7817bcd1d72891bbb3a991986d9ead96603631648f2ec19f
+size 4557635
diff --git a/lib/search/indexes/github-docs-ghec-pt-records.json.br b/lib/search/indexes/github-docs-ghec-pt-records.json.br
index 9647f3d63279..c89455320b62 100644
--- a/lib/search/indexes/github-docs-ghec-pt-records.json.br
+++ b/lib/search/indexes/github-docs-ghec-pt-records.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:32c4c48e53b1741f9613056374436f1c3dd673ae17f34b29958b4394a9f8c781
-size 765636
+oid sha256:8f2b654f1e5472ecd4b6188d7a25ba30ca92746a2fe24f289eeca9ec88b622b3
+size 766848
diff --git a/lib/search/indexes/github-docs-ghec-pt.json.br b/lib/search/indexes/github-docs-ghec-pt.json.br
index d225293e646e..49dc70cd4d48 100644
--- a/lib/search/indexes/github-docs-ghec-pt.json.br
+++ b/lib/search/indexes/github-docs-ghec-pt.json.br
@@ -1,3 +1,3 @@
 version https://git-lfs.github.com/spec/v1
-oid sha256:d4c49aaa8c05e01e5799d4d89b6fcd475f945d87b09de2d13b6ced7c3a912067
-size 3102917
+oid sha256:9f16d78fe0943290c53d2940c8591eab1ce43d641e009afa73b8f70d4231f7d7
+size 3113535---
title: Managing team synchronization for your organization
intro: 'You can enable and disable team synchronization between your identity provider (IdP) and your organization on {% data variables.product.product_name %}.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team synchronization
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## About team synchronization

You can enable team synchronization between your IdP and {% data variables.product.product_name %} to allow organization owners and team maintainers to connect teams in your organization with IdP groups.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

You can also enable team synchronization for organizations owned by an enterprise account. For more information, see "[Managing team synchronization for organizations in your enterprise](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)."

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Enabling team synchronization

The steps to enable team synchronization depend on the IdP you want to use. There are prerequisites to enable team synchronization that apply to every IdP. Each individual IdP has additional prerequisites.

### Prerequisites

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

You must enable SAML single sign-on for your organization and your supported IdP. For more information, see "[Enforcing SAML single sign-on for your organization](/articles/enforcing-saml-single-sign-on-for-your-organization)."

You must have a linked SAML identity. To create a linked identity, you must authenticate to your organization using SAML SSO and the supported IdP at least once. For more information, see "[Authenticating with SAML single sign-on](/articles/authenticating-with-saml-single-sign-on)."

Your SAML settings **must** contain a valid IdP URL for the **Issuer** field. 

![SAML Issuer field](/assets/images/help/saml/saml_issuer.png)



### Enabling team synchronization for Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Review the identity provider tenant information you want to connect to your organization, then click **Approve**.
  ![Pending request to enable team synchronization to a specific IdP tenant with option to approve or cancel request](/assets/images/help/teams/approve-team-synchronization.png)

### Enabling team synchronization for Okta

Okta team synchronization requires that SAML and SCIM with Okta have already been set up for your organization.

To avoid potential team synchronization errors with Okta, we recommend that you confirm that SCIM linked identities are correctly set up for all organization members who are members of your chosen Okta groups, before enabling team synchronization on {% data variables.product.prodname_dotcom %}. 

If an organization member does not have a linked SCIM identity, then team synchronization will not work as expected and the user may not be added or removed from teams as expected. If any of these users are missing a SCIM linked identity, you will need to re-provision them.

For help on provisioning users that have missing a missing SCIM linked identity, see "[Troubleshooting identity and access management](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management)."

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. Consider enforcing SAML in your organization to ensure that organization members link their SAML and SCIM identities. For more information, see "[Enforcing SAML single sign-on for your organization](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)."
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Under your organization's name, type a valid SSWS token and the URL to your Okta instance.
  ![Enable team synchronization Okta organization form](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Review the identity provider tenant information you want to connect to your organization, then click **Create**.
  ![Enable team synchronization create button](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Disabling team synchronization

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. Under "Team synchronization", click **Disable team synchronization**.
  ![Disable team synchronization](/assets/images/help/teams/disable-team-synchronization.png)
