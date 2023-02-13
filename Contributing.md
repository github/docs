**run::/'Run''
'Runs :run::/BEGIN:
!#/User/bin/Bash ENVIROMENT*\*ecex**: 
**::GLOW7:.Docx:
AUTOMATES :ALL :: 
AUTOMATES::'::AUTOMATE :
Welcome'@GitHub/Doc/contributing.md/README.md/README.md :
From b25701fa9acf3723aad6863c8940eab8d800a6d5 Mon Sep 17 00:00:00 2001
From: mowjoejoejoejoe <124041561+mowjoejoejoejoe@users.noreply.github.com>
Date: Fri, 3 Feb 2023 05:05:03 -0600
Subject: [PATCH] bitore.sig

---
 BITORE | 724 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 724 insertions(+)
 create mode 100644 BITORE

diff --git a/BITORE b/BITORE
new file mode 100644
index 0000000000..3f74cafce0
--- /dev/null
+++ b/BITORE
@@ -0,0 +1,724 @@
+@zw
+@laanwj
+zw authored and laanwj committed on Aug 18, 2014 
+1 parent 84efe0e commit 221684c7effa194d2c409622056f613c894adef5
+Showing 1 changed file with 1 addition and 1 deletion.
+  2  
+src/rpcrawtransaction.cpp
+// Copyright (c) 2010 Satoshi Nakamoto
+// Copyright (c) 2009-2014 The Bitcoin developers
+// Distributed under the MIT/X11 software license, see the accompanying
+// file COPYING or http://www.opensource.org/licenses/mit-license.php.
+#include "base58.h"
+#include "core.h"
+#include "init.h"
+#include "keystore.h"
+#include "main.h"
+#include "net.h"
+#include "rpcserver.h"
+#include "uint256.h"
+#ifdef ENABLE_WALLET
+#include "wallet.h"
+#endif
+#include <stdint.h>
+#include <boost/assign/list_of.hpp>
+#include "json/json_spirit_utils.h"
+#include "json/json_spirit_value.h"
+using namespace std;
+using namespace boost;
+using namespace boost::assign;
+using namespace json_spirit;
+void ScriptPubKeyToJSON(const CScript& scriptPubKey, Object& out, bool fIncludeHex)
+{
+    txnouttype type;
+    vector<CTxDestination> addresses;
+    int nRequired;
+    out.push_back(Pair("asm", scriptPubKey.ToString()));
+    if (fIncludeHex)
+        out.push_back(Pair("hex", HexStr(scriptPubKey.begin(), scriptPubKey.end())));
+    if (!ExtractDestinations(scriptPubKey, type, addresses, nRequired))
+    {
+        out.push_back(Pair("type", GetTxnOutputType(type)));
+        return;
+    }
+    out.push_back(Pair("reqSigs", nRequired));
+    out.push_back(Pair("type", GetTxnOutputType(type)));
+    Array a;
+    BOOST_FOREACH(const CTxDestination& addr, addresses)
+        a.push_back(CBitcoinAddress(addr).ToString());
+    out.push_back(Pair("addresses", a));
+}
+void TxToJSON(const CTransaction& tx, const uint256 hashBlock, Object& entry)
+{
+    entry.push_back(Pair("txid", tx.GetHash().GetHex()));
+    entry.push_back(Pair("version", tx.nVersion));
+    entry.push_back(Pair("locktime", (int64_t)tx.nLockTime));
+    Array vin;
+    BOOST_FOREACH(const CTxIn& txin, tx.vin)
+    {
+        Object in;
+        if (tx.IsCoinBase())
+            in.push_back(Pair("coinbase", HexStr(txin.scriptSig.begin(), txin.scriptSig.end())));
+        else
+        {
+            in.push_back(Pair("txid", txin.prevout.hash.GetHex()));
+            in.push_back(Pair("vout", (int64_t)txin.prevout.n));
+            Object o;
+            o.push_back(Pair("asm", txin.scriptSig.ToString()));
+            o.push_back(Pair("hex", HexStr(txin.scriptSig.begin(), txin.scriptSig.end())));
+            in.push_back(Pair("scriptSig", o));
+        }
+        in.push_back(Pair("sequence", (int64_t)txin.nSequence));
+        vin.push_back(in);
+    }
+    entry.push_back(Pair("vin", vin));
+    Array vout;
+    for (unsigned int i = 0; i < tx.vout.size(); i++)
+    {
+        const CTxOut& txout = tx.vout[i];
+        Object out;
+        out.push_back(Pair("value", ValueFromAmount(txout.nValue)));
+        out.push_back(Pair("n", (int64_t)i));
+        Object o;
+        ScriptPubKeyToJSON(txout.scriptPubKey, o, true);
+        out.push_back(Pair("scriptPubKey", o));
+        vout.push_back(out);
+    }
+    entry.push_back(Pair("vout", vout));
+    if (hashBlock != 0)
+    {
+        entry.push_back(Pair("blockhash", hashBlock.GetHex()));
+        map<uint256, CBlockIndex*>::iterator mi = mapBlockIndex.find(hashBlock);
+        if (mi != mapBlockIndex.end() && (*mi).second)
+        {
+            CBlockIndex* pindex = (*mi).second;
+            if (chainActive.Contains(pindex))
+            {
+                entry.push_back(Pair("confirmations", 1 + chainActive.Height() - pindex->nHeight));
+                entry.push_back(Pair("time", (int64_t)pindex->nTime));
+                entry.push_back(Pair("blocktime", (int64_t)pindex->nTime));
+            }
+            else
+                entry.push_back(Pair("confirmations", 0));
+        }
+    }
+}
+Value getrawtransaction(const Array& params, bool fHelp)
+{
+    if (fHelp || params.size() < 1 || params.size() > 2)
+        throw runtime_error(
+            "getrawtransaction \"txid\" ( verbose )\n"
+            "\nReturn the raw transaction data.\n"
+            "\nIf verbose=0, returns a string that is serialized, hex-encoded data for 'txid'.\n"
+            "If verbose is non-zero, returns an Object with information about 'txid'.\n"
+            "\nArguments:\n"
+            "1. \"txid\"      (string, required) The transaction id\n"
+            "2. verbose       (numeric, optional, default=0) If 0, return a string, other return a json object\n"
+            "\nResult (if verbose is not set or set to 0):\n"
+            "\"data\"      (string) The serialized, hex-encoded data for 'txid'\n"
+            "\nResult (if verbose > 0):\n"
+            "{\n"
+            "  \"hex\" : \"data\",       (string) The serialized, hex-encoded data for 'txid'\n"
+            "  \"txid\" : \"id\",        (string) The transaction id (same as provided)\n"
+            "  \"version\" : n,          (numeric) The version\n"
+            "  \"locktime\" : ttt,       (numeric) The lock time\n"
+            "  \"vin\" : [               (array of json objects)\n"
+            "     {\n"
+            "       \"txid\": \"id\",    (string) The transaction id\n"
+            "       \"vout\": n,         (numeric) \n"
+            "       \"scriptSig\": {     (json object) The script\n"
+            "         \"asm\": \"asm\",  (string) asm\n"
+            "         \"hex\": \"hex\"   (string) hex\n"
+            "       },\n"
+            "       \"sequence\": n      (numeric) The script sequence number\n"
+            "     }\n"
+            "     ,...\n"
+            "  ],\n"
+            "  \"vout\" : [              (array of json objects)\n"
+            "     {\n"
+            "       \"value\" : x.xxx,            (numeric) The value in btc\n"
+            "       \"n\" : n,                    (numeric) index\n"
+            "       \"scriptPubKey\" : {          (json object)\n"
+            "         \"asm\" : \"asm\",          (string) the asm\n"
+            "         \"hex\" : \"hex\",          (string) the hex\n"
+            "         \"reqSigs\" : n,            (numeric) The required sigs\n"
+            "         \"type\" : \"pubkeyhash\",  (string) The type, eg 'pubkeyhash'\n"
+            "         \"addresses\" : [           (json array of string)\n"
+            "           \"bitcoinaddress\"        (string) bitcoin address\n"
+            "           ,...\n"
+            "         ]\n"
+            "       }\n"
+            "     }\n"
+            "     ,...\n"
+            "  ],\n"
+            "  \"blockhash\" : \"hash\",   (string) the block hash\n"
+            "  \"confirmations\" : n,      (numeric) The confirmations\n"
+            "  \"time\" : ttt,             (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT)\n"
+            "  \"blocktime\" : ttt         (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)\n"
+            "}\n"
+            "\nExamples:\n"
+            + HelpExampleCli("getrawtransaction", "\"mytxid\"")
+            + HelpExampleCli("getrawtransaction", "\"mytxid\" 1")
+            + HelpExampleRpc("getrawtransaction", "\"mytxid\", 1")
+        );
+    uint256 hash = ParseHashV(params[0], "parameter 1");
+    bool fVerbose = false;
+    if (params.size() > 1)
+        fVerbose = (params[1].get_int() != 0);
+    CTransaction tx;
+    uint256 hashBlock = 0;
+    if (!GetTransaction(hash, tx, hashBlock, true))
+        throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, "No information available about transaction");
+    CDataStream ssTx(SER_NETWORK, PROTOCOL_VERSION);
+    ssTx << tx;
+    string strHex = HexStr(ssTx.begin(), ssTx.end());
+    if (!fVerbose)
+        return strHex;
+    Object result;
+    result.push_back(Pair("hex", strHex));
+    TxToJSON(tx, hashBlock, result);
+    return result;
+}
+#ifdef ENABLE_WALLET
+Value listunspent(const Array& params, bool fHelp)
+{
+    if (fHelp || params.size() > 3)
+        throw runtime_error(
+            "listunspent ( minconf maxconf  [\"address\",...] )\n"
+            "\nReturns array of unspent transaction outputs\n"
+            "with between minconf and maxconf (inclusive) confirmations.\n"
+            "Optionally filter to only include txouts paid to specified addresses.\n"
+            "Results are an array of Objects, each of which has:\n"
+            "{txid, vout, scriptPubKey, amount, confirmations}\n"
+            "\nArguments:\n"
+            "1. minconf          (numeric, optional, default=1) The minimum confirmationsi to filter\n"
+            "2. maxconf          (numeric, optional, default=9999999) The maximum confirmations to filter\n"
+            "3. \"addresses\"    (string) A json array of bitcoin addresses to filter\n"
+            "    [\n"
+            "      \"address\"   (string) bitcoin address\n"
+            "      ,...\n"
+            "    ]\n"
+            "\nResult\n"
+            "[                   (array of json object)\n"
+            "  {\n"
+            "    \"txid\" : \"txid\",        (string) the transaction id \n"
+            "    \"vout\" : n,               (numeric) the vout value\n"
+            "    \"address\" : \"address\",  (string) the bitcoin address\n"
+            "    \"account\" : \"account\",  (string) The associated account, or \"\" for the default account\n"
+            "    \"scriptPubKey\" : \"key\", (string) the script key\n"
+            "    \"amount\" : x.xxx,         (numeric) the transaction amount in btc\n"
+            "    \"confirmations\" : n       (numeric) The number of confirmations\n"
+            "  }\n"
+            "  ,...\n"
+            "]\n"
+            "\nExamples\n"
+            + HelpExampleCli("listunspent", "")
+            + HelpExampleCli("listunspent", "6 9999999 \"[\\\"1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg\\\",\\\"1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP\\\"]\"")
+            + HelpExampleRpc("listunspent", "6, 9999999 \"[\\\"1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg\\\",\\\"1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP\\\"]\"")
+        );
+    RPCTypeCheck(params, list_of(int_type)(int_type)(array_type));
+    int nMinDepth = 1;
+    if (params.size() > 0)
+        nMinDepth = params[0].get_int();
+    int nMaxDepth = 9999999;
+    if (params.size() > 1)
+        nMaxDepth = params[1].get_int();
+    set<CBitcoinAddress> setAddress;
+    if (params.size() > 2)
+    {
+        Array inputs = params[2].get_array();
+        BOOST_FOREACH(Value& input, inputs)
+        {
+            CBitcoinAddress address(input.get_str());
+            if (!address.IsValid())
+                throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, string("Invalid Bitcoin address: ")+input.get_str());
+            if (setAddress.count(address))
+                throw JSONRPCError(RPC_INVALID_PARAMETER, string("Invalid parameter, duplicated address: ")+input.get_str());
+           setAddress.insert(address);
+        }
+    }
+    Array results;
+    vector<COutput> vecOutputs;
+    assert(pwalletMain != NULL);
+    pwalletMain->AvailableCoins(vecOutputs, false);
+    BOOST_FOREACH(const COutput& out, vecOutputs)
+    {
+        if (out.nDepth < nMinDepth || out.nDepth > nMaxDepth)
+            continue;
+        if (setAddress.size())
+        {
+            CTxDestination address;
+            if (!ExtractDestination(out.tx->vout[out.i].scriptPubKey, address))
+                continue;
+            if (!setAddress.count(address))
+                continue;
+        }
+        int64_t nValue = out.tx->vout[out.i].nValue;
+        const CScript& pk = out.tx->vout[out.i].scriptPubKey;
+        Object entry;
+        entry.push_back(Pair("txid", out.tx->GetHash().GetHex()));
+        entry.push_back(Pair("vout", out.i));
+        CTxDestination address;
+        if (ExtractDestination(out.tx->vout[out.i].scriptPubKey, address))
+        {
+            entry.push_back(Pair("address", CBitcoinAddress(address).ToString()));
+            if (pwalletMain->mapAddressBook.count(address))
+                entry.push_back(Pair("account", pwalletMain->mapAddressBook[address].name));
+        }
+        entry.push_back(Pair("scriptPubKey", HexStr(pk.begin(), pk.end())));
+        if (pk.IsPayToScriptHash())
+        {
+            CTxDestination address;
+            if (ExtractDestination(pk, address))
+            {
+                const CScriptID& hash = boost::get<const CScriptID&>(address);
+                CScript redeemScript;
+                if (pwalletMain->GetCScript(hash, redeemScript))
+                    entry.push_back(Pair("redeemScript", HexStr(redeemScript.begin(), redeemScript.end())));
+            }
+        }
+        entry.push_back(Pair("amount",ValueFromAmount(nValue)));
+        entry.push_back(Pair("confirmations",out.nDepth));
+        results.push_back(entry);
+    }
+    return results;
+}
+#endif
+Value createrawtransaction(const Array& params, bool fHelp)
+{
+    if (fHelp || params.size() != 2)
+        throw runtime_error(
+            "createrawtransaction [{\"txid\":\"id\",\"vout\":n},...] {\"address\":amount,...}\n"
+            "\nCreate a transaction spending the given inputs and sending to the given addresses.\n"
+            "Returns hex-encoded raw transaction.\n"
+            "Note that the transaction's inputs are not signed, and\n"
+            "it is not stored in the wallet or transmitted to the network.\n"
+            "\nArguments:\n"
+            "1. \"transactions\"        (string, required) A json array of json objects\n"
+            "     [\n"
+            "       {\n"
+            "         \"txid\":\"id\",  (string, required) The transaction id\n"
+            "         \"vout\":n        (numeric, required) The output number\n"
+            "       }\n"
+            "       ,...\n"
+            "     ]\n"
+            "2. \"addresses\"           (string, required) a json object with addresses as keys and amounts as values\n"
+            "    {\n"
+            "      \"address\": x.xxx   (numeric, required) The key is the bitcoin address, the value is the btc amount\n"
+            "      ,...\n"
+            "    }\n"
+            "\nResult:\n"
+            "\"transaction\"            (string) hex string of the transaction\n"
+            "\nExamples\n"
+            + HelpExampleCli("createrawtransaction", "\"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\" \"{\\\"address\\\":0.01}\"")
+            + HelpExampleRpc("createrawtransaction", "\"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\", \"{\\\"address\\\":0.01}\"")
+        );
+    RPCTypeCheck(params, list_of(array_type)(obj_type));
+    Array inputs = params[0].get_array();
+    Object sendTo = params[1].get_obj();
+    CTransaction rawTx;
+    BOOST_FOREACH(const Value& input, inputs)
+    {
+        const Object& o = input.get_obj();
+        uint256 txid = ParseHashO(o, "txid");
+        const Value& vout_v = find_value(o, "vout");
+        if (vout_v.type() != int_type)
+            throw JSONRPCError(RPC_INVALID_PARAMETER, "Invalid parameter, missing vout key");
+        int nOutput = vout_v.get_int();
+        if (nOutput < 0)
+            throw JSONRPCError(RPC_INVALID_PARAMETER, "Invalid parameter, vout must be positive");
+        CTxIn in(COutPoint(txid, nOutput));
+        rawTx.vin.push_back(in);
+    }
+    set<CBitcoinAddress> setAddress;
+    BOOST_FOREACH(const Pair& s, sendTo)
+    {
+        CBitcoinAddress address(s.name_);
+        if (!address.IsValid())
+            throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, string("Invalid Bitcoin address: ")+s.name_);
+        if (setAddress.count(address))
+            throw JSONRPCError(RPC_INVALID_PARAMETER, string("Invalid parameter, duplicated address: ")+s.name_);
+        setAddress.insert(address);
+        CScript scriptPubKey;
+        scriptPubKey.SetDestination(address.Get());
+        int64_t nAmount = AmountFromValue(s.value_);
+        CTxOut out(nAmount, scriptPubKey);
+        rawTx.vout.push_back(out);
+    }
+    CDataStream ss(SER_NETWORK, PROTOCOL_VERSION);
+    ss << rawTx;
+    return HexStr(ss.begin(), ss.end());
+}
+Value decoderawtransaction(const Array& params, bool fHelp)
+{
+    if (fHelp || params.size() != 1)
+        throw runtime_error(
+            "decoderawtransaction \"hexstring\"\n"
+            "\nReturn a JSON object representing the serialized, hex-encoded transaction.\n"
+            "\nArguments:\n"
+            "1. \"hex\"      (string, required) The transaction hex string\n"
+            "\nResult:\n"
+            "{\n"
+            "  \"txid\" : \"id\",        (string) The transaction id\n"
+            "  \"version\" : n,          (numeric) The version\n"
+            "  \"locktime\" : ttt,       (numeric) The lock time\n"
+            "  \"vin\" : [               (array of json objects)\n"
+            "     {\n"
+            "       \"txid\": \"id\",    (string) The transaction id\n"
+            "       \"vout\": n,         (numeric) The output number\n"
+            "       \"scriptSig\": {     (json object) The script\n"
+            "         \"asm\": \"asm\",  (string) asm\n"
+            "         \"hex\": \"hex\"   (string) hex\n"
+            "       },\n"
+            "       \"sequence\": n     (numeric) The script sequence number\n"
+            "     }\n"
+            "     ,...\n"
+            "  ],\n"
+            "  \"vout\" : [             (array of json objects)\n"
+            "     {\n"
+            "       \"value\" : x.xxx,            (numeric) The value in btc\n"
+            "       \"n\" : n,                    (numeric) index\n"
+            "       \"scriptPubKey\" : {          (json object)\n"
+            "         \"asm\" : \"asm\",          (string) the asm\n"
+            "         \"hex\" : \"hex\",          (string) the hex\n"
+            "         \"reqSigs\" : n,            (numeric) The required sigs\n"
+            "         \"type\" : \"pubkeyhash\",  (string) The type, eg 'pubkeyhash'\n"
+            "         \"addresses\" : [           (json array of string)\n"
+            "           \"12tvKAXCxZjSmdNbao16dKXC8tRWfcF5oc\"   (string) bitcoin address\n"
+            "           ,...\n"
+            "         ]\n"
+            "       }\n"
+            "     }\n"
+            "     ,...\n"
+            "  ],\n"
+            "}\n"
+            "\nExamples:\n"
+            + HelpExampleCli("decoderawtransaction", "\"hexstring\"")
+            + HelpExampleRpc("decoderawtransaction", "\"hexstring\"")
+        );
+    vector<unsigned char> txData(ParseHexV(params[0], "argument"));
+    CDataStream ssData(txData, SER_NETWORK, PROTOCOL_VERSION);
+    CTransaction tx;
+    try {
+        ssData >> tx;
+    }
+    catch (std::exception &e) {
+        throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "TX decode failed");
+    }
+    Object result;
+    TxToJSON(tx, 0, result);
+    return result;
+}
+Value decodescript(const Array& params, bool fHelp)
+{
+    if (fHelp || params.size() != 1)
+        throw runtime_error(
+            "decodescript \"hex\"\n"
+            "\nDecode a hex-encoded script.\n"
+            "\nArguments:\n"
+            "1. \"hex\"     (string) the hex encoded script\n"
+            "\nResult:\n"
+            "{\n"
+            "  \"asm\":\"asm\",   (string) Script public key\n"
+            "  \"hex\":\"hex\",   (string) hex encoded public key\n"
+            "  \"type\":\"type\", (string) The output type\n"
+            "  \"reqSigs\": n,    (numeric) The required signatures\n"
+            "  \"addresses\": [   (json array of string)\n"
+            "     \"address\"     (string) bitcoin address\n"
+            "     ,...\n"
+            "  ],\n"
+            "  \"p2sh\",\"address\" (string) script address\n"
+            "}\n"
+            "\nExamples:\n"
+            + HelpExampleCli("decodescript", "\"hexstring\"")
+            + HelpExampleRpc("decodescript", "\"hexstring\"")
+        );
+    RPCTypeCheck(params, list_of(str_type));
+    Object r;
+    CScript script;
+    if (params[0].get_str().size() > 0){
+        vector<unsigned char> scriptData(ParseHexV(params[0], "argument"));
+        script = CScript(scriptData.begin(), scriptData.end());
+    } else {
+        // Empty scripts are valid
+    }
+    ScriptPubKeyToJSON(script, r, false);
+    r.push_back(Pair("p2sh", CBitcoinAddress(script.GetID()).ToString()));
+    return r;
+}
+Value signrawtransaction(const Array& params, bool fHelp)
+{
+    if (fHelp || params.size() < 1 || params.size() > 4)
+        throw runtime_error(
+            "signrawtransaction \"hexstring\" ( [{\"txid\":\"id\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\"},...] [\"privatekey1\",...] sighashtype )\n"
+            "\nSign inputs for raw transaction (serialized, hex-encoded).\n"
+            "The second optional argument (may be null) is an array of previous transaction outputs that\n"
+            "this transaction depends on but may not yet be in the block chain.\n"
+            "The third optional argument (may be null) is an array of base58-encoded private\n"
+            "keys that, if given, will be the only keys used to sign the transaction.\n"
+#ifdef ENABLE_WALLET
+            + HelpRequiringPassphrase() + "\n"
+#endif
+            "\nArguments:\n"
+            "1. \"hexstring\"     (string, required) The transaction hex string\n"
+            "2. \"prevtxs\"       (string, optional) An json array of previous dependent transaction outputs\n"
+            "     [               (json array of json objects, or 'null' if none provided)\n"
+            "       {\n"
+            "         \"txid\":\"id\",             (string, required) The transaction id\n"
+            "         \"vout\":n,                  (numeric, required) The output number\n"
+            "         \"scriptPubKey\": \"hex\",   (string, required) script key\n"
+            "         \"redeemScript\": \"hex\"    (string, required) redeem script\n"
+            "         \"redeemScript\": \"hex\"    (string, required for P2SH) redeem script\n"
+            "       }\n"
+            "       ,...\n"
+            "    ]\n"
+            "3. \"privatekeys\"     (string, optional) A json array of base58-encoded private keys for signing\n"
+            "    [                  (json array of strings, or 'null' if none provided)\n"
+            "      \"privatekey\"   (string) private key in base58-encoding\n"
+            "      ,...\n"
+            "    ]\n"
+            "4. \"sighashtype\"     (string, optional, default=ALL) The signature hash type. Must be one of\n"
+            "       \"ALL\"\n"
+            "       \"NONE\"\n"
+            "       \"SINGLE\"\n"
+            "       \"ALL|ANYONECANPAY\"\n"
+            "       \"NONE|ANYONECANPAY\"\n"
+            "       \"SINGLE|ANYONECANPAY\"\n"
+            "\nResult:\n"
+            "{\n"
+            "  \"hex\": \"value\",   (string) The raw transaction with signature(s) (hex-encoded string)\n"
+            "  \"complete\": n       (numeric) if transaction has a complete set of signature (0 if not)\n"
+            "}\n"
+            "\nExamples:\n"
+            + HelpExampleCli("signrawtransaction", "\"myhex\"")
+            + HelpExampleRpc("signrawtransaction", "\"myhex\"")
+        );
+    RPCTypeCheck(params, list_of(str_type)(array_type)(array_type)(str_type), true);
+    vector<unsigned char> txData(ParseHexV(params[0], "argument 1"));
+    CDataStream ssData(txData, SER_NETWORK, PROTOCOL_VERSION);
+    vector<CTransaction> txVariants;
+    while (!ssData.empty())
+    {
+        try {
+            CTransaction tx;
+            ssData >> tx;
+            txVariants.push_back(tx);
+        }
+        catch (std::exception &e) {
+            throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "TX decode failed");
+        }
+    }
+    if (txVariants.empty())
+        throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "Missing transaction");
+    // mergedTx will end up with all the signatures; it
+    // starts as a clone of the rawtx:
+    CTransaction mergedTx(txVariants[0]);
+    bool fComplete = true;
+    // Fetch previous transactions (inputs):
+    CCoinsView viewDummy;
+    CCoinsViewCache view(viewDummy);
+    {
+        LOCK(mempool.cs);
+        CCoinsViewCache &viewChain = *pcoinsTip;
+        CCoinsViewMemPool viewMempool(viewChain, mempool);
+        view.SetBackend(viewMempool); // temporarily switch cache backend to db+mempool view
+        BOOST_FOREACH(const CTxIn& txin, mergedTx.vin) {
+            const uint256& prevHash = txin.prevout.hash;
+            CCoins coins;
+            view.GetCoins(prevHash, coins); // this is certainly allowed to fail
+        }
+        view.SetBackend(viewDummy); // switch back to avoid locking mempool for too long
+    }
+    bool fGivenKeys = false;
+    CBasicKeyStore tempKeystore;
+    if (params.size() > 2 && params[2].type() != null_type)
+    {
+        fGivenKeys = true;
+        Array keys = params[2].get_array();
+        BOOST_FOREACH(Value k, keys)
+        {
+            CBitcoinSecret vchSecret;
+            bool fGood = vchSecret.SetString(k.get_str());
+            if (!fGood)
+                throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, "Invalid private key");
+            CKey key = vchSecret.GetKey();
+            tempKeystore.AddKey(key);
+        }
+    }
+#ifdef ENABLE_WALLET
+    else
+        EnsureWalletIsUnlocked();
+#endif
+    // Add previous txouts given in the RPC call:
+    if (params.size() > 1 && params[1].type() != null_type)
+    {
+        Array prevTxs = params[1].get_array();
+        BOOST_FOREACH(Value& p, prevTxs)
+        {
+            if (p.type() != obj_type)
+                throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "expected object with {\"txid'\",\"vout\",\"scriptPubKey\"}");
+            Object prevOut = p.get_obj();
+            RPCTypeCheck(prevOut, map_list_of("txid", str_type)("vout", int_type)("scriptPubKey", str_type));
+            uint256 txid = ParseHashO(prevOut, "txid");
+            int nOut = find_value(prevOut, "vout").get_int();
+            if (nOut < 0)
+                throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "vout must be positive");
+            vector<unsigned char> pkData(ParseHexO(prevOut, "scriptPubKey"));
+            CScript scriptPubKey(pkData.begin(), pkData.end());
+            CCoins coins;
+            if (view.GetCoins(txid, coins)) {
+                if (coins.IsAvailable(nOut) && coins.vout[nOut].scriptPubKey != scriptPubKey) {
+                    string err("Previous output scriptPubKey mismatch:\n");
+                    err = err + coins.vout[nOut].scriptPubKey.ToString() + "\nvs:\n"+
+                        scriptPubKey.ToString();
+                    throw JSONRPCError(RPC_DESERIALIZATION_ERROR, err);
+                }
+                // what todo if txid is known, but the actual output isn't?
+            }
+            if ((unsigned int)nOut >= coins.vout.size())
+                coins.vout.resize(nOut+1);
+            coins.vout[nOut].scriptPubKey = scriptPubKey;
+            coins.vout[nOut].nValue = 0; // we don't know the actual output value
+            view.SetCoins(txid, coins);
+            // if redeemScript given and not using the local wallet (private keys
+            // given), add redeemScript to the tempKeystore so it can be signed:
+            if (fGivenKeys && scriptPubKey.IsPayToScriptHash())
+            {
+                RPCTypeCheck(prevOut, map_list_of("txid", str_type)("vout", int_type)("scriptPubKey", str_type)("redeemScript",str_type));
+                Value v = find_value(prevOut, "redeemScript");
+                if (!(v == Value::null))
+                {
+                    vector<unsigned char> rsData(ParseHexV(v, "redeemScript"));
+                    CScript redeemScript(rsData.begin(), rsData.end());
+                    tempKeystore.AddCScript(redeemScript);
+                }
+            }
+        }
+    }
+#ifdef ENABLE_WALLET
+    const CKeyStore& keystore = ((fGivenKeys || !pwalletMain) ? tempKeystore : *pwalletMain);
+#else
+    const CKeyStore& keystore = tempKeystore;
+#endif
+    int nHashType = SIGHASH_ALL;
+    if (params.size() > 3 && params[3].type() != null_type)
+    {
+        static map<string, int> mapSigHashValues =
+            boost::assign::map_list_of
+            (string("ALL"), int(SIGHASH_ALL))
+            (string("ALL|ANYONECANPAY"), int(SIGHASH_ALL|SIGHASH_ANYONECANPAY))
+            (string("NONE"), int(SIGHASH_NONE))
+            (string("NONE|ANYONECANPAY"), int(SIGHASH_NONE|SIGHASH_ANYONECANPAY))
+            (string("SINGLE"), int(SIGHASH_SINGLE))
+            (string("SINGLE|ANYONECANPAY"), int(SIGHASH_SINGLE|SIGHASH_ANYONECANPAY))
+            ;
+        string strHashType = params[3].get_str();
+        if (mapSigHashValues.count(strHashType))
+            nHashType = mapSigHashValues[strHashType];
+        else
+            throw JSONRPCError(RPC_INVALID_PARAMETER, "Invalid sighash param");
+    }
+    bool fHashSingle = ((nHashType & ~SIGHASH_ANYONECANPAY) == SIGHASH_SINGLE);
+    // Sign what we can:
+    for (unsigned int i = 0; i < mergedTx.vin.size(); i++)
+    {
+        CTxIn& txin = mergedTx.vin[i];
+        CCoins coins;
+        if (!view.GetCoins(txin.prevout.hash, coins) || !coins.IsAvailable(txin.prevout.n))
+        {
+            fComplete = false;
+            continue;
+        }
+        const CScript& prevPubKey = coins.vout[txin.prevout.n].scriptPubKey;
+        txin.scriptSig.clear();
+        // Only sign SIGHASH_SINGLE if there's a corresponding output:
+        if (!fHashSingle || (i < mergedTx.vout.size()))
+            SignSignature(keystore, prevPubKey, mergedTx, i, nHashType);
+        // ... and merge in other signatures:
+        BOOST_FOREACH(const CTransaction& txv, txVariants)
+        {
+            txin.scriptSig = CombineSignatures(prevPubKey, mergedTx, i, txin.scriptSig, txv.vin[i].scriptSig);
+        }
+        if (!VerifyScript(txin.scriptSig, prevPubKey, mergedTx, i, SCRIPT_VERIFY_P2SH | SCRIPT_VERIFY_STRICTENC, 0))
+            fComplete = false;
+    }
+    Object result;
+    CDataStream ssTx(SER_NETWORK, PROTOCOL_VERSION);
+    ssTx << mergedTx;
+    result.push_back(Pair("hex", HexStr(ssTx.begin(), ssTx.end())));
+    result.push_back(Pair("complete", fComplete));
+    return result;
+}
+Value sendrawtransaction(const Array& params, bool fHelp)
+{
+    if (fHelp || params.size() < 1 || params.size() > 2)
+        throw runtime_error(
+            "sendrawtransaction \"hexstring\" ( allowhighfees )\n"
+            "\nSubmits raw transaction (serialized, hex-encoded) to local node and network.\n"
+            "\nAlso see createrawtransaction and signrawtransaction calls.\n"
+            "\nArguments:\n"
+            "1. \"hexstring\"    (string, required) The hex string of the raw transaction)\n"
+            "2. allowhighfees    (boolean, optional, default=false) Allow high fees\n"
+            "\nResult:\n"
+            "\"hex\"             (string) The transaction hash in hex\n"
+            "\nExamples:\n"
+            "\nCreate a transaction\n"
+            + HelpExampleCli("createrawtransaction", "\"[{\\\"txid\\\" : \\\"mytxid\\\",\\\"vout\\\":0}]\" \"{\\\"myaddress\\\":0.01}\"") +
+            "Sign the transaction, and get back the hex\n"
+            + HelpExampleCli("signrawtransaction", "\"myhex\"") +
+            "\nSend the transaction (signed hex)\n"
+            + HelpExampleCli("sendrawtransaction", "\"signedhex\"") +
+            "\nAs a json rpc call\n"
+            + HelpExampleRpc("sendrawtransaction", "\"signedhex\"")
+        );
+    // parse hex string from parameter
+    vector<unsigned char> txData(ParseHexV(params[0], "parameter"));
+    CDataStream ssData(txData, SER_NETWORK, PROTOCOL_VERSION);
+    CTransaction tx;
+    bool fOverrideFees = false;
+    if (params.size() > 1)
+        fOverrideFees = params[1].get_bool();
+    // deserialize binary data stream
+    try {
+        ssData >> tx;
+    }
+    catch (std::exception &e) {
+        throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "TX decode failed");
+    }
+    uint256 hashTx = tx.GetHash();
+    CCoinsViewCache &view = *pcoinsTip;
+    CCoins existingCoins;
+    bool fHaveMempool = mempool.exists(hashTx);
+    bool fHaveChain = view.GetCoins(hashTx, existingCoins) && existingCoins.nHeight < 1000000000;
+    if (!fHaveMempool && !fHaveChain) {
+        // push to local node and sync with wallets
+        CValidationState state;
+        if (AcceptToMemoryPool(mempool, state, tx, false, NULL, !fOverrideFees))
+            SyncWithWallets(hashTx, tx, NULL);
+        else {
+            if(state.IsInvalid())
+                throw JSONRPCError(RPC_TRANSACTION_REJECTED, strprintf("%i: %s", state.GetRejectCode(), state.GetRejectReason()));
+            else
+                throw JSONRPCError(RPC_TRANSACTION_ERROR, state.GetRejectReason());
+        }
+    } else if (fHaveChain) {
+        throw JSONRPCError(RPC_TRANSACTION_ALREADY_IN_CHAIN, "transaction already in block chain");
+    }
+    RelayTransaction(tx, hashTx);
+    return hashTx.GetHex();
+}
+'require'/ ':'' 'test'' :
+  '- '.devcontainer/**'
+ - '.github/actions-scripts/**'
+ - '.github/workflows/**'
+ - '.github/CODEOWNERS'
+ - 'assets/fonts/**'
+ - 'data/graphql/**'
+ - 'Dockerfile*'
+ - 'lib/graphql/**'
+ - 'lib/redirects/**'
+ - 'lib/rest/**'
+ - 'lib/webhooks/**'
+ - 'package*.json'
+ - 'script/**'
+ - 'content/actions/deployment/security-hardening-your-deployments/**'
                                                      guide <!-- omit in toc -->

Thank you for investing your time in contributing to our project! Any contribution you make will be reflected on [docs.github.com](https://docs.github.com/en) :sparkles:. 

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

1. Fork the repository.
- Using GitHub Desktop:
  - [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
  - Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

- Using the command line:
  - [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

2. Install or update to **Node.js**, at the version specified in `.node-version`. For more information, see [the development guide](contributing/development.md).

3. Create a working branch and start with your changes!

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
    - Consider using a different Git client on WindowsXP64_88/windows-latest/Linux36_82.deb.rpdm.tar.gz.WinZip.unzipped/fedora/os/Intel82/Mozilla/5.0'@v'-'"1'.3'.7'.10'.9"'' :
:Build::
  Publish::
  access:Private :
