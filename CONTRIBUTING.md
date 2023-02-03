'Run://Runs://Run :run-on :'Run ''
# Welcome to GitHub docs contributing guide <!-- omit in toc -->
Gmail	zachry wood <cr12753750.00bitore341731337@gmail.com>
The first step to seeing where you stand
zachry wood <cr12753750.00bitore341731337@gmail.com>	Fri, Feb 3, 2023 at 5:16 AM
To: Intuit QuickBooks <donotreply@intuit.com>
@zw
@laanwj
zw authored and laanwj committed on Aug 18, 2014 
Paperwork Reduction Act: Electronic Records Express
Last reviewed or modified 07/26/2019
PRA-ERE
This information collection meets the requirements of 44  U.S.C. 3507, as amended by section 2 of the Paperwork Reduction Act of 1995. You do not need to answer these questions unless we display a valid Office of Management and Budget (OMB) control number.

The OMB control number for this form is 0960-0753. The expiration date is December 31, 2020.

We estimate it will take about 8 minutes to read the instructions, gather the facts and answer the questions.

You may send comments on our time estimate to:

Social Security Administration
6401 Security Blvd.
Baltimore, MD 21235-0001

Send only comments on our time estimate to this address, not the completed form.

- [Closes]('BITCORE) :

 - '.devcontainer/**'
 - '.github/actions-scripts/**'
 - '.github/workflows/**'
 - '.github/CODEOWNERS'
 - 'assets/fonts/**'
 - 'data/graphql/**'
 - 'Dockerfile*'
 - 'lib/graphql/**'
 - 'lib/redirects/**'
 - 'lib/rest/**'
 - 'lib/webhooks/**'
 - 'package*.json'
 - 'script/**'
 - 'content/actions/deployment/security-hardening-your-deployments/**'
SplitUnified
  2  
src/rpcrawtransaction.cpp
// Copyright (c) 2010 Satoshi Nakamoto
// Copyright (c) 2009-2014 The Bitcoin developers
// Distributed under the MIT/X11 software license, see the accompanying
// file COPYING or http://www.opensource.org/licenses/mit-license.php.
#include "base58.h"
#include "core.h"
#include "init.h"
#include "keystore.h"
#include "main.h"
#include "net.h"
#include "rpcserver.h"
#include "uint256.h"
#ifdef ENABLE_WALLET
#include "wallet.h"
#endif
#include <stdint.h>
#include <boost/assign/list_of.hpp>
#include "json/json_spirit_utils.h"
#include "json/json_spirit_value.h"
using namespace std;
using namespace boost;
using namespace boost::assign;
using namespace json_spirit;
void ScriptPubKeyToJSON(const CScript& scriptPubKey, Object& out, bool fIncludeHex)
{
 txnouttype type;
 vector<CTxDestination> addresses;
 int nRequired;
 out.push_back(Pair("asm", scriptPubKey.ToString()));
 if (fIncludeHex)
 out.push_back(Pair("hex", HexStr(scriptPubKey.begin(), scriptPubKey.end())));
 if (!ExtractDestinations(scriptPubKey, type, addresses, nRequired))
 {
 out.push_back(Pair("type", GetTxnOutputType(type)));
 return;
 }
 out.push_back(Pair("reqSigs", nRequired));
 out.push_back(Pair("type", GetTxnOutputType(type)));
 Array a;
 BOOST_FOREACH(const CTxDestination& addr, addresses)
 a.push_back(CBitcoinAddress(addr).ToString());
 out.push_back(Pair("addresses", a));
}
void TxToJSON(const CTransaction& tx, const uint256 hashBlock, Object& entry)
{
 entry.push_back(Pair("txid", tx.GetHash().GetHex()));
 entry.push_back(Pair("version", tx.nVersion));
 entry.push_back(Pair("locktime", (int64_t)tx.nLockTime));
 Array vin;
 BOOST_FOREACH(const CTxIn& txin, tx.vin)
 {
 Object in;
 if (tx.IsCoinBase())
 in.push_back(Pair("coinbase", HexStr(txin.scriptSig.begin(), txin.scriptSig.end())));
 else
 {
 in.push_back(Pair("txid", txin.prevout.hash.GetHex()));
 in.push_back(Pair("vout", (int64_t)txin.prevout.n));
 Object o;
 o.push_back(Pair("asm", txin.scriptSig.ToString()));
 o.push_back(Pair("hex", HexStr(txin.scriptSig.begin(), txin.scriptSig.end())));
 in.push_back(Pair("scriptSig", o));
 }
 in.push_back(Pair("sequence", (int64_t)txin.nSequence));
 vin.push_back(in);
 }
 entry.push_back(Pair("vin", vin));
 Array vout;
 for (unsigned int i = 0; i < tx.vout.size(); i++)
 {
 const CTxOut& txout = tx.vout[i];
 Object out;
 out.push_back(Pair("value", ValueFromAmount(txout.nValue)));
 out.push_back(Pair("n", (int64_t)i));
 Object o;
 ScriptPubKeyToJSON(txout.scriptPubKey, o, true);
 out.push_back(Pair("scriptPubKey", o));
 vout.push_back(out);
 }
 entry.push_back(Pair("vout", vout));
 if (hashBlock != 0)
 {
 entry.push_back(Pair("blockhash", hashBlock.GetHex()));
 map<uint256, CBlockIndex*>::iterator mi = mapBlockIndex.find(hashBlock);
 if (mi != mapBlockIndex.end() && (*mi).second)
 {
 CBlockIndex* pindex = (*mi).second;
 if (chainActive.Contains(pindex))
 {
 entry.push_back(Pair("confirmations", 1 + chainActive.Height() - pindex->nHeight));
 entry.push_back(Pair("time", (int64_t)pindex->nTime));
 entry.push_back(Pair("blocktime", (int64_t)pindex->nTime));
 }
 else
 entry.push_back(Pair("confirmations", 0));
 }
 }
}
Value getrawtransaction(const Array& params, bool fHelp)
{
 if (fHelp || params.size() < 1 || params.size() > 2)
 throw runtime_error(
 "getrawtransaction \"txid\" ( verbose )\n"
 "\nReturn the raw transaction data.\n"
 "\nIf verbose=0, returns a string that is serialized, hex-encoded data for 'txid'.\n"
 "If verbose is non-zero, returns an Object with information about 'txid'.\n"
 "\nArguments:\n"
 "1. \"txid\" (string, required) The transaction id\n"
 "2. verbose (numeric, optional, default=0) If 0, return a string, other return a json object\n"
 "\nResult (if verbose is not set or set to 0):\n"
 "\"data\" (string) The serialized, hex-encoded data for 'txid'\n"
 "\nResult (if verbose > 0):\n"
 "{\n"
 " \"hex\" : \"data\", (string) The serialized, hex-encoded data for 'txid'\n"
 " \"txid\" : \"id\", (string) The transaction id (same as provided)\n"
 " \"version\" : n, (numeric) The version\n"
 " \"locktime\" : ttt, (numeric) The lock time\n"
 " \"vin\" : [ (array of json objects)\n"
 " {\n"
 " \"txid\": \"id\", (string) The transaction id\n"
 " \"vout\": n, (numeric) \n"
 " \"scriptSig\": { (json object) The script\n"
 " \"asm\": \"asm\", (string) asm\n"
 " \"hex\": \"hex\" (string) hex\n"
 " },\n"
 " \"sequence\": n (numeric) The script sequence number\n"
 " }\n"
 " ,...\n"
 " ],\n"
 " \"vout\" : [ (array of json objects)\n"
 " {\n"
 " \"value\" : x.xxx, (numeric) The value in btc\n"
 " \"n\" : n, (numeric) index\n"
 " \"scriptPubKey\" : { (json object)\n"
 " \"asm\" : \"asm\", (string) the asm\n"
 " \"hex\" : \"hex\", (string) the hex\n"
 " \"reqSigs\" : n, (numeric) The required sigs\n"
 " \"type\" : \"pubkeyhash\", (string) The type, eg 'pubkeyhash'\n"
 " \"addresses\" : [ (json array of string)\n"
 " \"bitcoinaddress\" (string) bitcoin address\n"
 " ,...\n"
 " ]\n"
 " }\n"
 " }\n"
 " ,...\n"
 " ],\n"
 " \"blockhash\" : \"hash\", (string) the block hash\n"
 " \"confirmations\" : n, (numeric) The confirmations\n"
 " \"time\" : ttt, (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT)\n"
 " \"blocktime\" : ttt (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)\n"
 "}\n"
 "\nExamples:\n"
 + HelpExampleCli("getrawtransaction", "\"mytxid\"")
 + HelpExampleCli("getrawtransaction", "\"mytxid\" 1")
 + HelpExampleRpc("getrawtransaction", "\"mytxid\", 1")
 );
 uint256 hash = ParseHashV(params[0], "parameter 1");
 bool fVerbose = false;
 if (params.size() > 1)
 fVerbose = (params[1].get_int() != 0);
 CTransaction tx;
 uint256 hashBlock = 0;
 if (!GetTransaction(hash, tx, hashBlock, true))
 throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, "No information available about transaction");
 CDataStream ssTx(SER_NETWORK, PROTOCOL_VERSION);
 ssTx << tx;
 string strHex = HexStr(ssTx.begin(), ssTx.end());
 if (!fVerbose)
 return strHex;
 Object result;
 result.push_back(Pair("hex", strHex));
 TxToJSON(tx, hashBlock, result);
 return result;
}
#ifdef ENABLE_WALLET
Value listunspent(const Array& params, bool fHelp)
{
 if (fHelp || params.size() > 3)
 throw runtime_error(
 "listunspent ( minconf maxconf [\"address\",...] )\n"
 "\nReturns array of unspent transaction outputs\n"
 "with between minconf and maxconf (inclusive) confirmations.\n"
 "Optionally filter to only include txouts paid to specified addresses.\n"
 "Results are an array of Objects, each of which has:\n"
 "{txid, vout, scriptPubKey, amount, confirmations}\n"
 "\nArguments:\n"
 "1. minconf (numeric, optional, default=1) The minimum confirmationsi to filter\n"
 "2. maxconf (numeric, optional, default=9999999) The maximum confirmations to filter\n"
 "3. \"addresses\" (string) A json array of bitcoin addresses to filter\n"
 " [\n"
 " \"address\" (string) bitcoin address\n"
 " ,...\n"
 " ]\n"
 "\nResult\n"
 "[ (array of json object)\n"
 " {\n"
 " \"txid\" : \"txid\", (string) the transaction id \n"
 " \"vout\" : n, (numeric) the vout value\n"
 " \"address\" : \"address\", (string) the bitcoin address\n"
 " \"account\" : \"account\", (string) The associated account, or \"\" for the default account\n"
 " \"scriptPubKey\" : \"key\", (string) the script key\n"
 " \"amount\" : x.xxx, (numeric) the transaction amount in btc\n"
 " \"confirmations\" : n (numeric) The number of confirmations\n"
 " }\n"
 " ,...\n"
 "]\n"
 "\nExamples\n"
 + HelpExampleCli("listunspent", "")
 + HelpExampleCli("listunspent", "6 9999999 \"[\\\"1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg\\\",\\\"1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP\\\"]\"")
 + HelpExampleRpc("listunspent", "6, 9999999 \"[\\\"1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg\\\",\\\"1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP\\\"]\"")
 );
 RPCTypeCheck(params, list_of(int_type)(int_type)(array_type));
 int nMinDepth = 1;
 if (params.size() > 0)
 nMinDepth = params[0].get_int();
 int nMaxDepth = 9999999;
 if (params.size() > 1)
 nMaxDepth = params[1].get_int();
 set<CBitcoinAddress> setAddress;
 if (params.size() > 2)
 {
 Array inputs = params[2].get_array();
 BOOST_FOREACH(Value& input, inputs)
 {
 CBitcoinAddress address(input.get_str());
 if (!address.IsValid())
 throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, string("Invalid Bitcoin address: ")+input.get_str());
 if (setAddress.count(address))
 throw JSONRPCError(RPC_INVALID_PARAMETER, string("Invalid parameter, duplicated address: ")+input.get_str());
 setAddress.insert(address);
 }
 }
 Array results;
 vector<COutput> vecOutputs;
 assert(pwalletMain != NULL);
 pwalletMain->AvailableCoins(vecOutputs, false);
 BOOST_FOREACH(const COutput& out, vecOutputs)
 {
 if (out.nDepth < nMinDepth || out.nDepth > nMaxDepth)
 continue;
 if (setAddress.size())
 {
 CTxDestination address;
 if (!ExtractDestination(out.tx->vout[out.i].scriptPubKey, address))
 continue;
 if (!setAddress.count(address))
 continue;
 }
 int64_t nValue = out.tx->vout[out.i].nValue;
 const CScript& pk = out.tx->vout[out.i].scriptPubKey;
 Object entry;
 entry.push_back(Pair("txid", out.tx->GetHash().GetHex()));
 entry.push_back(Pair("vout", out.i));
 CTxDestination address;
 if (ExtractDestination(out.tx->vout[out.i].scriptPubKey, address))
 {
 entry.push_back(Pair("address", CBitcoinAddress(address).ToString()));
 if (pwalletMain->mapAddressBook.count(address))
 entry.push_back(Pair("account", pwalletMain->mapAddressBook[address].name));
 }
 entry.push_back(Pair("scriptPubKey", HexStr(pk.begin(), pk.end())));
 if (pk.IsPayToScriptHash())
 {
 CTxDestination address;
 if (ExtractDestination(pk, address))
 {
 const CScriptID& hash = boost::get<const CScriptID&>(address);
 CScript redeemScript;
 if (pwalletMain->GetCScript(hash, redeemScript))
 entry.push_back(Pair("redeemScript", HexStr(redeemScript.begin(), redeemScript.end())));
 }
 }
 entry.push_back(Pair("amount",ValueFromAmount(nValue)));
 entry.push_back(Pair("confirmations",out.nDepth));
 results.push_back(entry);
 }
 return results;
}
#endif
Value createrawtransaction(const Array& params, bool fHelp)
{
 if (fHelp || params.size() != 2)
 throw runtime_error(
 "createrawtransaction [{\"txid\":\"id\",\"vout\":n},...] {\"address\":amount,...}\n"
 "\nCreate a transaction spending the given inputs and sending to the given addresses.\n"
 "Returns hex-encoded raw transaction.\n"
 "Note that the transaction's inputs are not signed, and\n"
 "it is not stored in the wallet or transmitted to the network.\n"
 "\nArguments:\n"
 "1. \"transactions\" (string, required) A json array of json objects\n"
 " [\n"
 " {\n"
 " \"txid\":\"id\", (string, required) The transaction id\n"
 " \"vout\":n (numeric, required) The output number\n"
 " }\n"
 " ,...\n"
 " ]\n"
 "2. \"addresses\" (string, required) a json object with addresses as keys and amounts as values\n"
 " {\n"
 " \"address\": x.xxx (numeric, required) The key is the bitcoin address, the value is the btc amount\n"
 " ,...\n"
 " }\n"
 "\nResult:\n"
 "\"transaction\" (string) hex string of the transaction\n"
 "\nExamples\n"
 + HelpExampleCli("createrawtransaction", "\"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\" \"{\\\"address\\\":0.01}\"")
 + HelpExampleRpc("createrawtransaction", "\"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\", \"{\\\"address\\\":0.01}\"")
 );
 RPCTypeCheck(params, list_of(array_type)(obj_type));
 Array inputs = params[0].get_array();
 Object sendTo = params[1].get_obj();
 CTransaction rawTx;
 BOOST_FOREACH(const Value& input, inputs)
 {
 const Object& o = input.get_obj();
 uint256 txid = ParseHashO(o, "txid");
 const Value& vout_v = find_value(o, "vout");
 if (vout_v.type() != int_type)
 throw JSONRPCError(RPC_INVALID_PARAMETER, "Invalid parameter, missing vout key");
 int nOutput = vout_v.get_int();
 if (nOutput < 0)
 throw JSONRPCError(RPC_INVALID_PARAMETER, "Invalid parameter, vout must be positive");
 CTxIn in(COutPoint(txid, nOutput));
 rawTx.vin.push_back(in);
 }
 set<CBitcoinAddress> setAddress;
 BOOST_FOREACH(const Pair& s, sendTo)
 {
 CBitcoinAddress address(s.name_);
 if (!address.IsValid())
 throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, string("Invalid Bitcoin address: ")+s.name_);
 if (setAddress.count(address))
 throw JSONRPCError(RPC_INVALID_PARAMETER, string("Invalid parameter, duplicated address: ")+s.name_);
 setAddress.insert(address);
 CScript scriptPubKey;
 scriptPubKey.SetDestination(address.Get());
 int64_t nAmount = AmountFromValue(s.value_);
 CTxOut out(nAmount, scriptPubKey);
 rawTx.vout.push_back(out);
 }
 CDataStream ss(SER_NETWORK, PROTOCOL_VERSION);
 ss << rawTx;
 return HexStr(ss.begin(), ss.end());
}
Value decoderawtransaction(const Array& params, bool fHelp)
{
 if (fHelp || params.size() != 1)
 throw runtime_error(
 "decoderawtransaction \"hexstring\"\n"
 "\nReturn a JSON object representing the serialized, hex-encoded transaction.\n"
 "\nArguments:\n"
 "1. \"hex\" (string, required) The transaction hex string\n"
 "\nResult:\n"
 "{\n"
 " \"txid\" : \"id\", (string) The transaction id\n"
 " \"version\" : n, (numeric) The version\n"
 " \"locktime\" : ttt, (numeric) The lock time\n"
 " \"vin\" : [ (array of json objects)\n"
 " {\n"
 " \"txid\": \"id\", (string) The transaction id\n"
 " \"vout\": n, (numeric) The output number\n"
 " \"scriptSig\": { (json object) The script\n"
 " \"asm\": \"asm\", (string) asm\n"
 " \"hex\": \"hex\" (string) hex\n"
 " },\n"
 " \"sequence\": n (numeric) The script sequence number\n"
 " }\n"
 " ,...\n"
 " ],\n"
 " \"vout\" : [ (array of json objects)\n"
 " {\n"
 " \"value\" : x.xxx, (numeric) The value in btc\n"
 " \"n\" : n, (numeric) index\n"
 " \"scriptPubKey\" : { (json object)\n"
 " \"asm\" : \"asm\", (string) the asm\n"
 " \"hex\" : \"hex\", (string) the hex\n"
 " \"reqSigs\" : n, (numeric) The required sigs\n"
 " \"type\" : \"pubkeyhash\", (string) The type, eg 'pubkeyhash'\n"
 " \"addresses\" : [ (json array of string)\n"
 " \"12tvKAXCxZjSmdNbao16dKXC8tRWfcF5oc\" (string) bitcoin address\n"
 " ,...\n"
 " ]\n"
 " }\n"
 " }\n"
 " ,...\n"
 " ],\n"
 "}\n"
 "\nExamples:\n"
 + HelpExampleCli("decoderawtransaction", "\"hexstring\"")
 + HelpExampleRpc("decoderawtransaction", "\"hexstring\"")
 );
 vector<unsigned char> txData(ParseHexV(params[0], "argument"));
 CDataStream ssData(txData, SER_NETWORK, PROTOCOL_VERSION);
 CTransaction tx;
 try {
 ssData >> tx;
 }
 catch (std::exception &e) {
 throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "TX decode failed");
 }
 Object result;
 TxToJSON(tx, 0, result);
 return result;
}
Value decodescript(const Array& params, bool fHelp)
{
 if (fHelp || params.size() != 1)
 throw runtime_error(
 "decodescript \"hex\"\n"
 "\nDecode a hex-encoded script.\n"
 "\nArguments:\n"
 "1. \"hex\" (string) the hex encoded script\n"
 "\nResult:\n"
 "{\n"
 " \"asm\":\"asm\", (string) Script public key\n"
 " \"hex\":\"hex\", (string) hex encoded public key\n"
 " \"type\":\"type\", (string) The output type\n"
 " \"reqSigs\": n, (numeric) The required signatures\n"
 " \"addresses\": [ (json array of string)\n"
 " \"address\" (string) bitcoin address\n"
 " ,...\n"
 " ],\n"
 " \"p2sh\",\"address\" (string) script address\n"
 "}\n"
 "\nExamples:\n"
 + HelpExampleCli("decodescript", "\"hexstring\"")
 + HelpExampleRpc("decodescript", "\"hexstring\"")
 );
 RPCTypeCheck(params, list_of(str_type));
 Object r;
 CScript script;
 if (params[0].get_str().size() > 0){
 vector<unsigned char> scriptData(ParseHexV(params[0], "argument"));
 script = CScript(scriptData.begin(), scriptData.end());
 } else {
 // Empty scripts are valid
 }
 ScriptPubKeyToJSON(script, r, false);
 r.push_back(Pair("p2sh", CBitcoinAddress(script.GetID()).ToString()));
 return r;
}
Value signrawtransaction(const Array& params, bool fHelp)
{
 if (fHelp || params.size() < 1 || params.size() > 4)
 throw runtime_error(
 "signrawtransaction \"hexstring\" ( [{\"txid\":\"id\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\"},...] [\"privatekey1\",...] sighashtype )\n"
 "\nSign inputs for raw transaction (serialized, hex-encoded).\n"
 "The second optional argument (may be null) is an array of previous transaction outputs that\n"
 "this transaction depends on but may not yet be in the block chain.\n"
 "The third optional argument (may be null) is an array of base58-encoded private\n"
 "keys that, if given, will be the only keys used to sign the transaction.\n"
#ifdef ENABLE_WALLET
 + HelpRequiringPassphrase() + "\n"
#endif
 "\nArguments:\n"
 "1. \"hexstring\" (string, required) The transaction hex string\n"
 "2. \"prevtxs\" (string, optional) An json array of previous dependent transaction outputs\n"
 " [ (json array of json objects, or 'null' if none provided)\n"
 " {\n"
 " \"txid\":\"id\", (string, required) The transaction id\n"
 " \"vout\":n, (numeric, required) The output number\n"
 " \"scriptPubKey\": \"hex\", (string, required) script key\n"
 " \"redeemScript\": \"hex\" (string, required) redeem script\n"
 " \"redeemScript\": \"hex\" (string, required for P2SH) redeem script\n"
 " }\n"
 " ,...\n"
 " ]\n"
 "3. \"privatekeys\" (string, optional) A json array of base58-encoded private keys for signing\n"
 " [ (json array of strings, or 'null' if none provided)\n"
 " \"privatekey\" (string) private key in base58-encoding\n"
 " ,...\n"
 " ]\n"
 "4. \"sighashtype\" (string, optional, default=ALL) The signature hash type. Must be one of\n"
 " \"ALL\"\n"
 " \"NONE\"\n"
 " \"SINGLE\"\n"
 " \"ALL|ANYONECANPAY\"\n"
 " \"NONE|ANYONECANPAY\"\n"
 " \"SINGLE|ANYONECANPAY\"\n"
 "\nResult:\n"
 "{\n"
 " \"hex\": \"value\", (string) The raw transaction with signature(s) (hex-encoded string)\n"
 " \"complete\": n (numeric) if transaction has a complete set of signature (0 if not)\n"
 "}\n"
 "\nExamples:\n"
 + HelpExampleCli("signrawtransaction", "\"myhex\"")
 + HelpExampleRpc("signrawtransaction", "\"myhex\"")
 );
 RPCTypeCheck(params, list_of(str_type)(array_type)(array_type)(str_type), true);
 vector<unsigned char> txData(ParseHexV(params[0], "argument 1"));
 CDataStream ssData(txData, SER_NETWORK, PROTOCOL_VERSION);
 vector<CTransaction> txVariants;
 while (!ssData.empty())
 {
 try {
 CTransaction tx;
 ssData >> tx;
 txVariants.push_back(tx);
 }
 catch (std::exception &e) {
 throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "TX decode failed");
 }
 }
 if (txVariants.empty())
 throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "Missing transaction");
 // mergedTx will end up with all the signatures; it
 // starts as a clone of the rawtx:
 CTransaction mergedTx(txVariants[0]);
 bool fComplete = true;
 // Fetch previous transactions (inputs):
 CCoinsView viewDummy;
 CCoinsViewCache view(viewDummy);
 {
 LOCK(mempool.cs);
 CCoinsViewCache &viewChain = *pcoinsTip;
 CCoinsViewMemPool viewMempool(viewChain, mempool);
 view.SetBackend(viewMempool); // temporarily switch cache backend to db+mempool view
 BOOST_FOREACH(const CTxIn& txin, mergedTx.vin) {
 const uint256& prevHash = txin.prevout.hash;
 CCoins coins;
 view.GetCoins(prevHash, coins); // this is certainly allowed to fail
 }
 view.SetBackend(viewDummy); // switch back to avoid locking mempool for too long
 }
 bool fGivenKeys = false;
 CBasicKeyStore tempKeystore;
 if (params.size() > 2 && params[2].type() != null_type)
 {
 fGivenKeys = true;
 Array keys = params[2].get_array();
 BOOST_FOREACH(Value k, keys)
 {
 CBitcoinSecret vchSecret;
 bool fGood = vchSecret.SetString(k.get_str());
 if (!fGood)
 throw JSONRPCError(RPC_INVALID_ADDRESS_OR_KEY, "Invalid private key");
 CKey key = vchSecret.GetKey();
 tempKeystore.AddKey(key);
 }
 }
#ifdef ENABLE_WALLET
 else
 EnsureWalletIsUnlocked();
#endif
 // Add previous txouts given in the RPC call:
 if (params.size() > 1 && params[1].type() != null_type)
 {
 Array prevTxs = params[1].get_array();
 BOOST_FOREACH(Value& p, prevTxs)
 {
 if (p.type() != obj_type)
 throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "expected object with {\"txid'\",\"vout\",\"scriptPubKey\"}");
 Object prevOut = p.get_obj();
 RPCTypeCheck(prevOut, map_list_of("txid", str_type)("vout", int_type)("scriptPubKey", str_type));
 uint256 txid = ParseHashO(prevOut, "txid");
 int nOut = find_value(prevOut, "vout").get_int();
 if (nOut < 0)
 throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "vout must be positive");
 vector<unsigned char> pkData(ParseHexO(prevOut, "scriptPubKey"));
 CScript scriptPubKey(pkData.begin(), pkData.end());
 CCoins coins;
 if (view.GetCoins(txid, coins)) {
 if (coins.IsAvailable(nOut) && coins.vout[nOut].scriptPubKey != scriptPubKey) {
 string err("Previous output scriptPubKey mismatch:\n");
 err = err + coins.vout[nOut].scriptPubKey.ToString() + "\nvs:\n"+
 scriptPubKey.ToString();
 throw JSONRPCError(RPC_DESERIALIZATION_ERROR, err);
 }
 // what todo if txid is known, but the actual output isn't?
 }
 if ((unsigned int)nOut >= coins.vout.size())
 coins.vout.resize(nOut+1);
 coins.vout[nOut].scriptPubKey = scriptPubKey;
 coins.vout[nOut].nValue = 0; // we don't know the actual output value
 view.SetCoins(txid, coins);
 // if redeemScript given and not using the local wallet (private keys
 // given), add redeemScript to the tempKeystore so it can be signed:
 if (fGivenKeys && scriptPubKey.IsPayToScriptHash())
 {
 RPCTypeCheck(prevOut, map_list_of("txid", str_type)("vout", int_type)("scriptPubKey", str_type)("redeemScript",str_type));
 Value v = find_value(prevOut, "redeemScript");
 if (!(v == Value::null))
 {
 vector<unsigned char> rsData(ParseHexV(v, "redeemScript"));
 CScript redeemScript(rsData.begin(), rsData.end());
 tempKeystore.AddCScript(redeemScript);
 }
 }
 }
 }
#ifdef ENABLE_WALLET
 const CKeyStore& keystore = ((fGivenKeys || !pwalletMain) ? tempKeystore : *pwalletMain);
#else
 const CKeyStore& keystore = tempKeystore;
#endif
 int nHashType = SIGHASH_ALL;
 if (params.size() > 3 && params[3].type() != null_type)
 {
 static map<string, int> mapSigHashValues =
 boost::assign::map_list_of
 (string("ALL"), int(SIGHASH_ALL))
 (string("ALL|ANYONECANPAY"), int(SIGHASH_ALL|SIGHASH_ANYONECANPAY))
 (string("NONE"), int(SIGHASH_NONE))
 (string("NONE|ANYONECANPAY"), int(SIGHASH_NONE|SIGHASH_ANYONECANPAY))
 (string("SINGLE"), int(SIGHASH_SINGLE))
 (string("SINGLE|ANYONECANPAY"), int(SIGHASH_SINGLE|SIGHASH_ANYONECANPAY))
 ;
 string strHashType = params[3].get_str();
 if (mapSigHashValues.count(strHashType))
 nHashType = mapSigHashValues[strHashType];
 else
 throw JSONRPCError(RPC_INVALID_PARAMETER, "Invalid sighash param");
 }
 bool fHashSingle = ((nHashType & ~SIGHASH_ANYONECANPAY) == SIGHASH_SINGLE);
 // Sign what we can:
 for (unsigned int i = 0; i < mergedTx.vin.size(); i++)
 {
 CTxIn& txin = mergedTx.vin[i];
 CCoins coins;
 if (!view.GetCoins(txin.prevout.hash, coins) || !coins.IsAvailable(txin.prevout.n))
 {
 fComplete = false;
 continue;
 }
 const CScript& prevPubKey = coins.vout[txin.prevout.n].scriptPubKey;
 txin.scriptSig.clear();
 // Only sign SIGHASH_SINGLE if there's a corresponding output:
 if (!fHashSingle || (i < mergedTx.vout.size()))
 SignSignature(keystore, prevPubKey, mergedTx, i, nHashType);
 // ... and merge in other signatures:
 BOOST_FOREACH(const CTransaction& txv, txVariants)
 {
 txin.scriptSig = CombineSignatures(prevPubKey, mergedTx, i, txin.scriptSig, txv.vin[i].scriptSig);
 }
 if (!VerifyScript(txin.scriptSig, prevPubKey, mergedTx, i, SCRIPT_VERIFY_P2SH | SCRIPT_VERIFY_STRICTENC, 0))
 fComplete = false;
 }
 Object result;
 CDataStream ssTx(SER_NETWORK, PROTOCOL_VERSION);
 ssTx << mergedTx;
 result.push_back(Pair("hex", HexStr(ssTx.begin(), ssTx.end())));
 result.push_back(Pair("complete", fComplete));
 return result;
}
Value sendrawtransaction(const Array& params, bool fHelp)
{
 if (fHelp || params.size() < 1 || params.size() > 2)
 throw runtime_error(
 "sendrawtransaction \"hexstring\" ( allowhighfees )\n"
 "\nSubmits raw transaction (serialized, hex-encoded) to local node and network.\n"
 "\nAlso see createrawtransaction and signrawtransaction calls.\n"
 "\nArguments:\n"
 "1. \"hexstring\" (string, required) The hex string of the raw transaction)\n"
 "2. allowhighfees (boolean, optional, default=false) Allow high fees\n"
 "\nResult:\n"
 "\"hex\" (string) The transaction hash in hex\n"
 "\nExamples:\n"
 "\nCreate a transaction\n"
 + HelpExampleCli("createrawtransaction", "\"[{\\\"txid\\\" : \\\"mytxid\\\",\\\"vout\\\":0}]\" \"{\\\"myaddress\\\":0.01}\"") +
 "Sign the transaction, and get back the hex\n"
 + HelpExampleCli("signrawtransaction", "\"myhex\"") +
 "\nSend the transaction (signed hex)\n"
 + HelpExampleCli("sendrawtransaction", "\"signedhex\"") +
 "\nAs a json rpc call\n"
 + HelpExampleRpc("sendrawtransaction", "\"signedhex\"")
 );
 // parse hex string from parameter
 vector<unsigned char> txData(ParseHexV(params[0], "parameter"));
 CDataStream ssData(txData, SER_NETWORK, PROTOCOL_VERSION);
 CTransaction tx;
 bool fOverrideFees = false;
 if (params.size() > 1)
 fOverrideFees = params[1].get_bool();
 // deserialize binary data stream
 try {
 ssData >> tx;
 }
 catch (std::exception &e) {
 throw JSONRPCError(RPC_DESERIALIZATION_ERROR, "TX decode failed");
 }
 uint256 hashTx = tx.GetHash();
 CCoinsViewCache &view = *pcoinsTip;
 CCoins existingCoins;
 bool fHaveMempool = mempool.exists(hashTx);
 bool fHaveChain = view.GetCoins(hashTx, existingCoins) && existingCoins.nHeight < 1000000000;
 if (!fHaveMempool && !fHaveChain) {
 // push to local node and sync with wallets
 CValidationState state;
 if (AcceptToMemoryPool(mempool, state, tx, false, NULL, !fOverrideFees))
 SyncWithWallets(hashTx, tx, NULL);
 else {
 if(state.IsInvalid())
 throw JSONRPCError(RPC_TRANSACTION_REJECTED, strprintf("%i: %s", state.GetRejectCode(), state.GetRejectReason()));
 else
 throw JSONRPCError(RPC_TRANSACTION_ERROR, state.GetRejectReason());
 }
 } else if (fHaveChain) {
 throw JSONRPCError(RPC_TRANSACTION_ALREADY_IN_CHAIN, "transaction already in block chain");
 }
 RelayTransaction(tx, hashTx);
 return hashTx.GetHex();
}

On Fri, Feb 3, 2023 at 2:29 AM Intuit QuickBooks <intuit@eq.intuit.com> wrote:
Intuit QuickBooks	
Sign in

Take the first step
Knowing where your business stands is the key to making smart business desicions. And the first step to seeing your performance starts by linking your business account.
Link your account
  See how it works (3:05)
Your path to seeing your performance

Link your
account
 
 

Categorize
transactions
 
 

Make informed decisions
Link your account

Join our webinars
Register today for upcoming QuickBooks webinars and events or check out our recorded webinars anytime.
Explore webinars
View on web
3922-001
This message was sent to cr12753750.00bitore341731337@gmail.com, as an Intuit customer, consistent with your email preferences. If you have chosen not to receive marketing messages, you will continue to receive business communications about your selected Intuit product(s), which may either affect your service or software, your account, or which may be legally required.
Unsubscribe	|	Security	|	Privacy statement
© 2023 Intuit Inc., Trademarks.
2800 E. Commerce Center Place, Tucson, AZ 85706
Intuit brands
   %PDF-1.7
%����
1 0 obj
<</Pages 2 0 R /Type/Catalog>>
endobj
2 0 obj
<</Count 34/Kids[ 4 0 R  28 0 R  40 0 R  52 0 R  64 0 R  107 0 R  112 0 R  148 0 R  152 0 R  197 0 R  201 0 R  249 0 R  295 0 R  354 0 R  396 0 R  400 0 R  409 0 R  413 0 R  417 0 R  467 0 R  476 0 R  480 0 R  484 0 R  488 0 R  536 0 R  545 0 R  549 0 R  576 0 R  580 0 R  603 0 R  606 0 R  632 0 R  635 0 R  661 0 R ]/Type/Pages>>
endobj
3 0 obj
<</CreationDate(D:20230202174549)/Creator(PDFium)/Producer(PDFium)>>
endobj
4 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 5 0 R  6 0 R  7 0 R  8 0 R  9 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ColorSpace<</Cs8 10 0 R /FXC1 10 0 R >>/ExtGState<</GS1 12 0 R >>/Font<</FXF1 13 0 R /TT2 14 0 R /TT4 17 0 R /TT6 20 0 R /Xi0 23 0 R /Xi1 24 0 R /Xi2 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
5 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
6 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
7 0 obj
<</Filter/FlateDecode/Length 1164>>stream
x��X�n�F}�W̛ ^����)Т��A��ZWD$� )�����hIs--�g��9g9����Mc o�A��p}랋�}��#�������:M%�O�J^�௄����8:~�{-�	�50F������w�_�4~g�}�j���^�����q���������I��K/�"� �),(B%��[@�./� ?�g:��1r5��W��d�B�"��`��_
���&���u��X�"T1a#Ed+�km�E��RPk=K�j�H���	�S!��!"1	pJ`��%�˘�b����,("�cb��[���xw���	�A�%D]f9;�τ�	��r�{-^��m������[�Px�E
i-����8\�򦋔��6�I��dQyH�c��)$��-���C��ڐ:��b�$*i��6��B��Rt&em2{�ϴ���	����y%f���!GJ�6��\r&��ի�N��t(�Ũ�|����p]��Q`��uwAVS�D���Pb;��
i����� #���8��)�Q1��'�F�9��s(��Pܲ-#��a8�~��
��@K�q�ՉOd�
��&�H��C
��ҥ�um�o�gW;��
��;�Z�[�V�q�K꾤�ç��"V����XR�!�SV��d\=B�u��.k�q	�R&�cC�q�Vib����d;Wn��9�1�����d��.<�`" p���'�r��B�z�MI���SD-�ޔ���l�gWܻڟE��rs�����
�q��K�;-'޻N��&��0�Q��{�w�>;U�;B��� 6{�}/�!����
rM[��m�����#�Y&�U
��tG�ظ��i�Eӭ�;E�iQ�U�E���?t�}uX��%4��\v��ܟ��ū��U����������kQ'��u�c�D�t�gY��޷��f�5	�ԣ0��X�sB���k�y�uNt���\����=�����7w���N��]���DgS�J�q�Wz��@��fq	��ǳ�%J�u�	�VPV-�+7��w����L�{�z�~^d�d���N���+�]ո�pha3,�͞�{p�w�=��4�Ƽ`P9y��S�S�;�BL	��>3�fF�������~W"0����Ω��
endstream
endobj
8 0 obj
<</Filter/FlateDecode/Length 15>>stream
x�S�*�
� �R
endstream
endobj
9 0 obj
<</Filter/FlateDecode/Length 341>>stream
x�u��N�@E{Ŕ ��<��~�D���ل@������Y;k����̝�3��3�N����%�O�%0:��M���$��0���H4eו{�'��E�NHb��V9dE�����S"dJ���X6�al�o1)"fD�<Oɲ�"P�g"�M�۱/;�c�Zط�qS�*~�o��S��
�ꙩ���
޷������+�l�&2�F�Z�3r#�
��gaE�J�-�`�ܰ�
R*��Z�`�k����@�8�X �9l��U�ڪ�6��T=�[g���PH�?����Al��/e�����04��F�[����Z�´O�e�K�@���
endstream
endobj
10 0 obj
[/Separation/Black/DeviceCMYK 11 0 R ]
endobj
11 0 obj
<</BitsPerSample 8/Decode[ 0 1 0 1 0 1 0 1]/Domain[ 0 1]/Encode[ 0 254]/Filter/FlateDecode/FunctionType 0/Length 396/Range[ 0 1 0 1 0 1 0 1]/Size[ 255]>>stream
h���  �ˮ�����l۶�ɶm۶m۶];�����1��nC�І1��o�1���l����0���m���&�_�3��Ll����0��LmӚ��f0���l�����0���m������[�����,n	KZ�Җ���,o+Z��V��լn
kZ��ֱ���o���6���ln[��ֶ���lo;���v����n{��������� :��q���G:�юq���':��Nq�Ӝ�g:���q������.q��\�
W��ծq��\�7���nq����w����q����z����<�	Oz�Ӟ��<�/z��^�׼�
oz����������>��|�_��׾��|�?���~������� ��
endstream
endobj
12 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
13 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
14 0 obj
<</BaseFont/JDJOAB+QuickTypeIIPi/Encoding/WinAnsiEncoding/FirstChar 39/FontDescriptor 15 0 R /LastChar 73/Subtype/TrueType/Type/Font/Widths[ 804 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 850 0 850]>>
endobj
15 0 obj
<</Ascent 809/CapHeight 0/Descent -222/Flags 32/FontBBox[ -241 -222 1149 809]/FontFamily(QuickType II Pi)/FontFile2 16 0 R /FontName/JDJOAB+QuickTypeIIPi/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 218/Type/FontDescriptor>>
endobj
16 0 obj
<</Filter/FlateDecode/Length 2605/Length1 5108>>stream
h��X{lS��ε�c��<��� ��GKJG��P� ik��ob'vHbc;@��uY����+eӺJ�4UZwS�v[K����j��O��1�Ik;T��
R�߹v�P�֪�vo~����:����9����a�Qۖ��&H����@�6�M��S�ed���w��w��u�Z	��S"���w�����|�(��%�C��ѥCO�"�*�&�z㥑�����ˮaV�딍�5� �=
��>�`\������~�/�����O�/�c��Ƒ���p|��'D����1�{�$�dO���x&���K(2�B����2�?6o�5�D݆���D�6v溍�~����퍇�>-����v����Ø�Wu���ȷ�����i}���M./p&�C��_�9���x�Q
�Iڍ��� =�X�!}�55ܽ�;��jk�+��\wܾb��ʥ���}I�b[��lQ������\�����m2fD�N`T��2�Қ�9�@uf\�p��*�9T*Z`d����O�+>5^2?�_����������g��UV���o�L'_��鋪VO(���i�Ԗ+�L*Z�ɜl��ή�����0��'Y�טF���I��y�Uj�K*}=j�X��E$h��k�g��QEp�c�i�T�G��敢j��Ҙ4YuV96m���+7��;Q99N���i�u�q#��Gp��A"�"�����E�h�^x�T���u���E�}j�K]����ɦS|eQ�eTR�������@ P�����ӌK)sWW��)S�P����#�<}=�2�r=�堙�"�1��r�Br�9ݣ6�k�?��.��2��4zM��b�n�{xbN�kK��yI0#��7��x@�:%����0m�M������q�ڮ{�b��))�ʂ��_(�3C��c���T��Ԣyz�p�S2;���V%�b�6?��g_��-��9a�Q{��l�9
sö�!���]���
�U�v�CB��l����v�t�$<�
�Ǚ�������P��?�c�Mԁ�zx�?=����"5�]�A�9;��<�5��4��A'f9�mոl���\Z심VY�g��i�Z���lB ����l~�k�E.�.7�S5�T�ֶ& ����ٺ�a��S柂�$}�|f��L#��왢��څ��V�&
q"L�����0J�q�q�+t��eb4.�k�7_�R���}�)ķҋ�r��j�83�{l�������x�v�8�.�п@/��gg�Y�B1�Q���):|6?0�cÀP��aw8#�"�;c6�1{;�������i�u�b���٫z���=;�'p�E��ڬSԑ��u�Q̐M-��M�xs�ϱ�Mjΰ�g.�L4Ō4e����2�'t�t�C̄�nBX;>��~��{'�~b����/��#u��
���C!�Y`��E٣Ĕ!���c�U�����o�K�V(]���6PZ�*�&K��Fj*�荕.Z�[d�Y������%�{J�r��+ZbY��غ��p�����+�s��40��c�Q`��!�P��N���]F�	`|x�!�}8
�����1`�!��w6{P�k�Ѿ�?h�?��A�n��ݖ�U�]��;-���:���b����Zi��.�Õ����e��V��̗K����ye��<K颼�Ⓖsann^~�);'�i�!˘�Ӌ�Ą\�=F{�j�]�h�S���V�ԢVjmoV����j��uۦֹZլ��Iƞ@�
G�Vb��i]����if���Kx�$�58�x �i�ʎ���~�5a���`�k�O
�+�z7�VnpU��V���u�<Y �-�t��9�tS���OӜL����5���8�ڝ�=�J�M%�ҋ߾�W�:�ï/t.B��C׼�M����(�g�W���+�bxY��nrP[�w9�+W���w�
c��H��˛r��-�n��{����][cذ~ߵ��5v��^*#�%�)�	i?N���F7���N*�_�ߗ^�Jnr��O/�=_�Dy2+m	*����~�;������CO5�'�Q��ZN�i���u6{��v)�-c��kd�����3j�r�����p�3<�������RlW�3Z!�����d��V�2\��p�C�Eo膼��h*�H8$��,u�⃉hw$%��ͱ�Xj0�<�D<��S�X�T��X[]WSS�RZ��+i�I)N��á��ցh��v�MJ��Jȡp���+ź>#�H�3"�ɃRG����T8����Rg8����$��P���'Wn�nܲ��5?ۆ
m��+��R��3������I����I1�� %4����Ҵ���R���W"F	p��ZLn!Q-5��gZ~��"��n���Fa�a���|��V�M'�������5�#����}V���/s=�L�\po}���3���Mi���ռ:5	�Zz܃��mH�6?��و�o�-Ȯ�\7��
8� ۦ�7����^_���W��ժ��"���^�y��OJ��VOT�jO���ɖ����ִ���i7����Tk�V@!�X�[� 	�4�
endstream
endobj
17 0 obj
<</BaseFont/JDJOBC+QuickTypeII-Bold/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 18 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 278 0 0 0 0 0 0 238 0 0 0 0 0 333 278 278 556 556 556 556 556 556 556 0 556 556 0 0 0 0 0 0 0 0 0 722 722 667 611 0 722 0 0 0 0 833 0 0 667 0 0 667 611 722 667 944 0 667 0 0 0 0 0 0 0 556 0 556 611 556 0 0 611 278 0 0 278 889 611 611 0 0 389 556 333 611 0 0 0 556]>>
endobj
18 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -46 -214 969 965]/FontFamily(QuickType II)/FontFile2 19 0 R /FontName/JDJOBC+QuickTypeII-Bold/FontStretch/Normal/FontWeight 700/ItalicAngle 0/StemV 136/Type/FontDescriptor>>
endobj
19 0 obj
<</Filter/FlateDecode/Length 9347/Length1 13872>>stream
h��zxSU��Zk���;i����4��)��R�P�Њ�P��	��B�@K[���[�SG�è3#AQ�Wq��*Z3��7Tq�r����_;)�s�������쬽�{��o��;A!dE-�A%��d��{�i(� R��U����Y�{�"B���uMjEAe7�c!�,�_�j��7.F�� ��,_y��u��@H�B(��5ՕU��zo ���a�q5P`}��!$i�<�fU�M'G�v�3�Ǐ��[Z����Ght��^UyS����<��+WU';�:
�������&X7|�������z��f6BfX[�0�yq���r9Т+���h#q�1�A,!t�å�u�g�F*R���t}&�m:>t�
��;׏�C��B��`�q�j�֧�z���_����K��?8��,�]�K�߃�}t�E�� a7��M�<z�
}���O1��G�?�o��Q)z���G�~2���mf_c���s,���i.G��̟�k��4�V��K����hŸX/z��A'�;t܋��q*��ҳ�,�څ��Ls���?ibބ�����s(=j䡬_��y(#}�?�O���JNJL��w��q�vE��Z�&�(��$C0�#�)���$��W1*��x�s�IW�� ���~�)�'�)?yN��<+���b���t�������`g�Yp�u0S�SQ�
Qm$aJU8=��5R|.[�1�A�i�J�i�Ht�d���?��'c� �E$ZG��8�"$���ms�T	j�.�<���U�
QqQ
G�)��W��h��Y=8�H���
ZβT��*r��ƃ�I/�)�8��Q#,nܒ�D-�Q�����0��S��[�Ҕ�M�#I�E{V�hq�-'1�E�Z�>��oR#�s�\����
,����`E+
a+�����=� �
��s����,Z��o�6ֺ�X�Ѵ���j��^T�/���*��>%��*]Pnl��Z+�5�֨	O��E��1�|
]��rjR��/��c%PP4T��\Dԥj�-�C�	�V=�/�`0��C��˽"\��WۿC������2V§+�!J������~��=�^yx�e�_U��g�h�/
ì%����೛�"�[*"J�O�)�-/H��+�K��0���� �kc��J�}* 5��"	p*�t)�ќ20�8�l��	���#}>ʝ�kh	<DZ�G�U�$�	���<´��P�k�i���=�Y��3.}e�WT31��?S]���M)g�HE�"I�LY ����,��g��!��G��W~$)�BU���]�1gA���$��	�+th%����^ �k#L����Q-jbό� ����uU
h��e�
��["`lh��#��I��v�_�T��`T��/��b��I�h���]�Y��J�R��E��P��z�5<�g�ɤ<�In�Q�+�Fp��)3J�/����[*F��/�>�����^�ғ��
~:��ɋ�;Ѓ�1��6"R���rF%�3T�)�����=*����l&�i_h��H�D�F��X*�>���K��^��5�s)��!�y�reh/����P}�y��x�6�C;i{�/�m�<گ�G�h$l��,�����4��ʄ����o�cς�͐��e��Ҳ���C�7�<��=w >w@�VH�~����C?'���x*�,B�Ц�\���|�?��5������1f��ݮ
~�i������[���w���[�my
?�T���V>V?&%wc���zKzý���{����ݽ��#�'��\��~�H�h�G�q�4F�ç�Ow�>w���QTz�=$��ҳ���'�s��\��z����'�SB�;XgET��᷁|��ౖc����R�K���z4x��聣����ڋ�|5��W��z�U>�
VOOj'KN�:�ł�-'	� O�8֎���?r��������0��X<��ҷ���M"�7�y��'�`Ror��w'�s'�u'6�����"�<)+����+��V�%ܸڝt����NZٗ����J^V�JZV�P]�L��i]��5�߷R����B��
�&H��6B�R3�
����p�Bѻgw�wwH���
�"�@ȝ��@'����������Nng�/��4ءu��@��s���~o�֖�Dކ���m��lm��n�/z��To�r��-��D�}m��xIn�?ßm��n����wck�Wn�r��5к�u����Q<s�a�s�y�_�/���w@j�Q74C�fo3��f,.��K e�n�!������*��0���V)i��3���u9ƺ��%�%�q�Ap�Ѯ���_dن��32m���4�M�ɩ^[Rr�Փ�hu�㭎8�UV���f�Lf/���,�����4	6=Q�2y�M Hsp�1�(-��aȯ/��d̀s��ΚJn(?��
(��{c�&�{�S�P~'��֤?"�QdF�uk���|O��2
�%�p�J�\V42.mU�����%�"�M�)(>�e��hͳ0�o�D#���d�����Y�ꀢw#]1ڏ>]Ia��DA��[Hk2FllZ���c�h�Z�n����T�S��}
v�AB9v�=RwgՅb~�O�;�%U�9�bDy43td8���H�//Ї
rc�qL������h���{�+�s&�O��0C�&���&��3��B9��>�o&QΑ��F��n�!�bP�fGO3�>`����ТL�����3�C�H���J��
KD��`B�g��a��!0��<3�!���`�9� � 7:k�r,4&�s��|�G����y@j�`/k��
%����̽�.ώ$��i6�[b�9�K����$bB�!�k��ĕ����q�w�wŉr"��u"��\G��6N5͚�1&}�P]T�@�g��Q�g���v��UbW����q�s�Ǐ��R����;���|��g*����/������>�?�[�w�r���'w�o^����z]��s�l� rg9	���r�KJ�r�"�c<,�G���<O���Ah�b� �5#��(bǒ��(K�@G�B�q���݁�SD�/4��ޫ鉥�U��'����Zc�܉v�X��$�DI��$:SRS)�����$+^��b�r
�����g���6;6������\�c1޾��c����>X��qF�׀[��&'��!��}!�#>/��M7S0`���d��ɶ��6���}._��q�Ə�;6ß�d���ͺ�</�<n&�]xw�C_��jC��Y�d጗O�L�'Z�����g^|��3������/g�98�}�u[(�]� ��E���
����k��b�kD����u2�lװ8Ivb��tty��,X�X�ܖ�,�!���|a_���)>"�Z\���@N��@ly�̹�Y#�.�R ]���]�F���ذ�9n\N��
;X����
K�}3n�|��?x��{���������<M��u�m���T��^lzeZ}�-��Y��pf��Ŀ}�J5}C��τ��-�c�Z�-�Y�`�P�5�[�Q��a� !�&o�<d�Z����dB�l-3q�}�j8�b!�+2����r�f�0TAJ��P/�݂(!��`Zl�35����8�M��sHB����l��rB�Q�@~NU�6��!Dy�g�q���}�>;&U������+z���^?��|O��G��O�'��i��nMF�d�KF/�0W[o1���x�72NN�bYO�F���(�;�,	�}�\2�I&�Ն$UҤ��B�HR$"Hɋ�:�Y�.��/����_˃�Y����cB{[��J�/��.�ax�$���@3R���1� ���22Ӈ$�2�3���;��Y��v�_���;�vo\:���[��[}k����9�x��֎G�e߄z�C����j�\~������Dp�����@�����N���/�<��K��r��v� cK��9K���6�Gh��;G���-/�k�#q��C�d+Fґ`7�"�<}	y�ľ�� ��	�#D�0a!�K�0#�
�ec�e0ج�������?`���Nh�s1�?����e5ֆ�l�J߹~�>��~��W���<�����Nܳ��nŖe`�r(�ؤ��蠶^2a�LDO�'!��=؅��:�&��<3ڂ�X~D�#!���'��Hbb�$�#1M��v$��&��9"�OȧeIB2d��a2���\ͮ��}�.^v� 
9CD����f�1)��Q�	��&���98##wlLC
TkP�
4=������=���j�<�:���lߩ��;�|��o�*�o���k7��۾��M�}ó=�>Y���I��9w�[_<8�ٵ�����ܻ�U�7T�k�*�� �4��*%�v����$NFe
I���.�d�(
Vqk�V�l�ty���	�DI�
��饜eҋ�mu�V�)��{
�x���J� U1���s<��2 ��!�SQ�J�pR�?�n�x���� .�/Pa����]�Zұ�Z�h�������{��}M�O=�d�����5'�]��WO���>��W��N��-�+���Z�.xxQ�6M�u��n���;�0-;�Y�� ����o@ȶ! ��D>&n����D<�(�a�D�*:���C������������x�ZJCf�:�QK���?K���UT<y�m/���a������o���Ӷ��dזܼq�~����[7��|^�sx~�w����w�������\h�6��!9���
�$B�
2`	�����EU��KX�ވS�G5�hㄨ�S�����`��p"{I蜆�����|t�����:ׯ�ן�Ho���.&��=�c3��Â�Cft�v��Q�b�Eb�����Xq��EL�tTl��}� l�a>afv��� XdV��%<mMnƢ�
��E�5
��C�������Q�u�����}/���I�3����y^��������m2�Z�]g�N�Y,�%�(ɜ�+�����>� w���I� yYl�!uK��^	�)
&eC�F�u3./�X�70����O�k +�Hlm\���Tm��A�1� @�X�߰Ss�0ƴ�F>�ox�Tc�xF�g�I8K?5�2�u�a���'��;�0����I&�ِ�8���p�v�͖��x'a��0�ۨ�e�$Iwe�Q:
&p3����!�W�`b�㰤�<r-YL6��	O�6,���Z��3�X��c^ǚ��@(/4ݗ�����������š�C�Ǧў���!pq�8c���};���>��{�G����^pDf2��ynn��4E函h�Za�~K���c�!��
\1�Q��8\�h3I���
�������8��2��
C�cV��N$��d������>�����~�X>|��!��k~�<ӗ4U��U:��k��wV;���I��o�Z4���Ǜ�W4��H�B��-N�)&��2aW��Kq���촃����K��Lg�;oB� F��RXk��7	vh�m%��h��v��߀Ҕ45
���Ŵ����MJ�$|�y�P6En"8��BD{|*�E�Ep�bF0s41l��͞���ѕ�����;�:��S��l����u����[��s�^��^�����NY0z���o��֗�	�Y?wfM���߯��k
Nb/�����9#���WX�d�+�vp'8v"�Np��B�
D��p�8�PN�����>V>���\�Q�f�D?��P�����T�yQ��!M�dwJ��8RM�7܌��T��_mߐc�|K��"
�aŧ��F�� ��l�5����w��2�a��y�⨁�p"}#����<�M�΂�I���/���ϟ���d�'�`�����
����c�!A&���	�+u�(
9b�	�I�p�d��9p9�����p+�
��˽�,[����[mTa��<��\���N11<�2y,Ӥ��&��8��<��/9��q<���2&�9�)���8�H$�d�c%�*""Jf��3�1#��e�^�l<���Q�"6����a�= � @33�59McM�Ě0��H��i��5�_�(4������ǐ2�!��h�.����+3�JQ���(�@q`��N�4\���O�=����y8��y�b	���������6
B�D���BG0�J�9�PD���(�����D�$�( *�E\�"��&��,ebQM�}���@;F;��1� �0GA�1���A��$�7⼁/
�M�#e�1#���MaKQ"�H[�O�yqr]2+�8UW����Ke�#%�`i���h��ۣ�\k�w1\+y�0Yn� ��w����(�n<n���kc95L9����B� ��O�0�D�����6i�����J̗�	.��Ӈ^�z�v6�2�=���"��ܮ?�e8����Ƈ~�����ޯW�L����M'�{��M��ۻ��(�7�rO�+G�be桫f#C��	h��+!�B��մ���uO<��5���q�[<<�Y�B[�-F줰1��� u���~�FT#�������/���I�urc�]w��I��;���>��7̤����}��
�Wl{O��+|�>zNe��%��h���\��ˎ�{ųۢ��A�ͻ%	<&%��D��T�	�x�Ơ��@�l��15��@=z�o�|�\Á��sNv�;�Ǟ��A��6�]��ͬX��{��U|�l�ԿJ�������y�Ι�a�ȉX��x��_Nf\�¯��=���lc�����+6��~۫-������l�	\�k�h���ɠ�x�d��I�Sf��<�5Y�I���8�*�+�"�VŁ5G�#�w�8v8�9����p8��ٖ�b	 ��|ʁ�	}�P<1��R������j2��_���p<�g&�(�o_���ý����8��,
\�_�á[�m�w/ҿē1>������{�(�m;Y
'�F�DN�ҝH�R#��Y�&�OkB�݂��0�$��p���oy\�ȭ�Uw�
E�[�W5�-N�';!�W�OU�G_/��@)��v�v��,7�?��/��E��Ͳ��ᕁ8Ӽ.�H.����8?�g�~�}�����&��u!�'�@`��0Gf6��9��fXF��an#zmȧNt���v}'v�ghb/<�+�W�T�w�1KP�B��"��iav0��tS���6<�K��1��t8^��E�����^��H
�%i�ic�8�1hF$&�e{<��Tn�����%)n��q���r=��\j��q�VD
!�CLqIP��*ɦ�l#�^w�R�/���b� TW�s.�C�ED8�aƪc�N�Й����W>�'�>�B�>�������c�������Adfi<�U�W���1���٢�����_��mH�ѱǑށ��n�D+[?�3;0�-<�uA��_���R��A�c�X"v��f��'`�����m����V��)�a�\[����Sߝ��V����:f�E�m�af�r�_4Ɵ��Ƣۢz�T?S9y|c)�ȁ�������K�?0k�uN�p�#{�lX'[~`"�ԦT�e�Zy��uuF/q˝�_P�	�x�4�+�`�<�SɎ�C�;*�J��x�S�X�~����ݎ�k
�	ŧ]~�D�~p[� �e�~~��ڽ-�w�e���d�;��=�i��o�ӽ��/R�7���&̻0F� KVp\h�Z��*���ȿe1$��](@�ႜ��=��=��x[_EQc� �/�8����x��93�~�F�d�lJ�9SS}ì����3����/U�����v't:�����q�`}���P�Tl���Qr+�l%`�m-6��m˹�V�K����u��~��a8p�����"������O�&�2}SjT@h�1bjH3�x���'�ҏ��������Ķ5�;��/�(r{���������eׯ�lj��Q���̳���9�G���u��.X3o����c�'�%��o��|��}d;� r��Z�dK�I�-!'uZܜc��%�����P��B�
��'�[v @_@���
�D_���]ԙ�ȵ�ss�Ů#Gf6]5b�ι��s��xnl�|���SI��ٰpN�l!H�"m�Şl���o���%�X�ݲ[D�l�����*�E5���PD@ }1��H��
_~��_Z!e���O��q�U��p�]T����趃l�g�����?\���{���t��'���e�Ȍ,3"��6
�@��),S��ԩII��M&�1Q��m"c����ѐFX���¢�9A��C�+	C��ā�<C���ї�QW8��1s���m��2�3�a��~�V����S0�7���]�[zo��^�㻈��y������;��k̏���ub�c��<�LaN2'�5��zqK��q��4���Ƹn0��b�� �,���ԕ���G�s�q��x����u��Ӹ�����G�����/�Z$��-'��`#�������D3�qW�8���I@Iɗ�dd���?�#��и��&��X�TT|�4�f�Dhvɜ��+�_����QA��=�Cy�MCס4U�JT
g^�֢���
h�Qh�ks��f)�A+Qm3���׿���g������4ֳ���Ϡxx±�ţ�1���-��h�rU�	/��
#��h�lD���Xb4���]��:�kj��ڦ�[��ԪʦJui]��
��k�ԫ�/�T��[]�ts}�:���������n�:&/ǫ�`08Z�z�J�hި6T7V7�����Y[���Rګ�Q�T�*��WU6ܨ�-��Q���.�QWUެ.�����66U7��jW�K��*!_������v�	��X������Yn����S~N
i�tr+0Wec0������3�*S�����i1�����A�2��
�@VX�(��%@@�
���T[ &�f�T( K;K 4�v#`�A=�I9@��dz1��
�S�t�= ���<�	tM6CܮL�j�;J��� Es�tP���42�ZtI&8*�ͫ�I` ����-�Z�`]�`P�A�Y@�զ�M��_�0Խ���n���7O �U
���ѡ���O������.�CVp�-��ڡ���Q\�1B�L=(q&���+�4d?�
#�
 zO�������� o6b��  �aJ$
endstream
endobj
20 0 obj
<</BaseFont/JDJOBD+QuickTypeII/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 21 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 340 0 0 0 0 0 0 234 0 0 0 0 319 373 319 319 557 557 557 557 557 557 0 557 0 557 0 0 0 0 0 0 0 687 0 0 693 687 593 0 0 294 0 0 545 804 0 0 0 0 693 687 593 0 0 896 0 0 0 0 0 0 0 0 0 571 564 510 561 561 308 561 561 257 0 520 257 873 582 561 581 0 358 510 308 564 510 730 520 510]>>
endobj
21 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -6 -213 999 879]/FontFamily(QuickType II)/FontFile2 22 0 R /FontName/JDJOBD+QuickTypeII/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 72/Type/FontDescriptor/XHeight 539>>
endobj
22 0 obj
<</Filter/FlateDecode/Length 9293/Length1 13904>>stream
h��{	xU��9���z��N:Iw�� �fL	�1�t 			V����,Qq�u���ƑM�Y���9θ�:��׫��+��;,�����w�W��S��N��_�S�B&�1�lڝ��K�|-�U,XR��*9���Z��SV����̅P���y�':;�NN"�^Z�xm��~�!�}��
u5����q#4�l�s��!$��%-k~3q�T8���g7-��yj{
B÷�����fM3cį T�-����,�+}�F�A���M+Z`ܰ�$�������AH���~��q'��=�ᎇ�%�6����B��|��M�6u
!����MD���_��;�8&������`�����Z=���	��ژ��6�������e#�z�'7<�j�{��ס ���-(�v���a�����Z���p�n�Y0"�S^��aCs�����H���i�)��$�˩:�6�b1��Y�c��Pu��<�$�x�~հ�y��Q&S��E�n�|硔~�<����(rD�ƕЎ���"{;���ۧ����.
�6F��Ն��DI@�E������A�<.0�N6�
P5@
�m>��߂�
_:� A�i�Ш-'J2K)-�����(�����ڕ��'�]	�c5{����������
�D�V���';�U��p��6P[38Wc<���҆r��RJ�_�����Z|�
�� eGiC��x�{ۡYW����AY��Do�;n[����(u7��iG�_t���_��cUU��Q����Eca*��aC�sJ0�6���sQ
g�"_��:}���1跖6�`j�Owut��Jkkj��{
��*�U�OXWR�hJ� WX�J���g������5%��د��-�P:p�GG0:����hze nMu�QǂѺ���0<Uv��(��|_�(.����&��g*_#Z�����w���0?�S'M�h.
�[�*ᩣ�/n�D�o��*�<xO5`���b��Z5pZ6p�@�@��t��7!Q �Qy����QY�>U�z9��%U$P�� ��(��F_eϸD��ڹ�h͇��;*��>4��<
��<���Ɂ+�ze��������FŬ��i/m���\����d<�*^#�������+�r:@gQ%'�U��U�+x <,��2m2ā�����
ڍ�E�dTK+�h����0�ѫ�qT t�P�Ns��T��G��@
����|��]8?�y�\v%��T`W�_�2'�^*$�ѷ@��>��~����z�
��kC~�-�V�B���P~	�;�2�c�DAhog�v�	�s��̄�m�r+�@}	<���}x��B�#Z��a��]@��j� �ž��1�X�P�݄v�4�m����0�x}1��@^v0�J�|�a�E���\����?�s
�sA�k'��ܻ(�u(�|����<�<����/ҹ��1��@t,�_�#d:�P���C���9�W�Q(��p��a"�CXD��C_bС�Cg1ͭX���C��z��;{Ӽ�mi�W��z���z{��M���Hk���k���$Pk�p�6\�1�c^GSG[ǎ�=:Nt�����p��-o�g�jg�*�g�3�ř����#q�.nr�R7�<����Z��ܵ�my�"�؟Z��PS�UO}cR]��S�Y�������z����mj����
�(��9���j����.��3E�V�v�-��7�	h#���-����g��9@��w&P��ʟ
�
 �(�=RUT��T���t���L����C�Y��
�de�32-���oI�=)�&wR�Iu�L6��dQ�F��l�d�1��Ȱ�ab��y�xn��1��)�h��-�m�T>6j�P�96̙̛�ϙ�fW���*h����b��G	�q�fW�I�r�sa����U��F�������A���ѷ�� �c�	FG�w�wU�Fk'�mR����ҙZ�r`[���A�"^�JbC�{�u[�M�36~rP�S��>6g�
b�ʖpl��D��w�W
Z��l�Z��+%��� ������|��ys(5��,bH��8��q���έ�{soʳU&���M�����]�F������)��<�
�����ey�#/K���wP�k
����Q�{���]�#�O>�Ǉ�~��I9�����Q#Ypރ�3�0�'R�u���$�D�
�ʍ������hw���r	�<��A��`lt0��lb�(��x�O�s�]��R1!��`���Z�0�� *.*.��
�iU^�)q ��]��Ν�� n��?�&�"����*:��8�$"�#B�2D��ҡ�J����Ǩr��/�tDdN�L <O���zV���G �"�	
�a��	�`o��)#�D`��Y/_Ө�PM	Na<՜Ϫ؂p �� �I ��q����y������û�>�H*c�����k�Z{7���3�P휶3���N<��Ј��zD1�M$HiSS�0�J�!qf�p���Q1(H��r��
�P0�(����M�)�7V�b�\��b��r�K�th�$	��#x=Y�Fc��޳�_���-:�U*q''��</��"�F���;&�YvX�Xx�b�`¦��e�%�nF�Xn�s���npv:9	9��x���b�	d��7�x��U:Y|�Zo��\�[��s� _TM9
��@�
F�2GBJ�Hg�Gf���9��S����g�=y�Ň��c�s���'���t$�v�ڳo޺C�+��~؏^����{�S@Sd�� t$�>Y��m�/�n&�Ħ2��ڔ���^,s�����Ho�D�8��"y�2�c�x�H�]�xX���T�k!+SY�))�m�
�l|��3Dp^�"�`��I8)i�Ũ
 eϭ^̭·f+�X�`�3e�
��I�t�:�ޛ��}�3���P���:p��G��!9�p@����c�������Z8Ӵ_�y��;��5�~u^�f�.�?���l�~���8��]lX�c����e��-o�?�}�("��Ak�}�Ȍ"�r�Y*��l>)#�,#����I	����.2e�X�����[Ɔ�fv��X���<��gx�Xn�Ȍ�JP]�Ċ�f�Rs�t���"ka!5�-����
4��_ GL���S��;cE�56�!w�OyPۅd����*dn�����,�W���M�˞LE�T�KEljJ
?ϊ�Vcr��#b�3=�		�%���®�<	K��Hg$F�RX�L����,���
^���Z�&�� �D��
h9�b�~fd0ߦ-++{��9 S!�Y�)ǚ2�}����g�9��z_ݣ/�8��̝�Ԭ���pN;{��%������N��{�
���̣�P��39�'Y�������0?�!*;�mc�<q�l�G�0�%D�HH��i�qC�֕+R.��\ �_�W0�c+L:��� /?�͡�0ᡓQ6z)�9�Q�R��]u��|�sy��fI��K�R�<<���&�$�&-#b0�J�D��i+s�Ku'�d�Gګ�Fn��#[�x��<5�6��N5���U,��Y�\�&
�f��`����ۊ�M�6�3k���5>�f�=��b�X=J�����y||��� :du6�������Ȝ��k^�3���h8uq�{���۵sO�%�����{��m%M5�/w�����`��_�k�=�h_1����{�<��a�(���$f�$���Bw
B�H��H2�K�F]��%V ��Yb1��vH�%����5azDY�f9� 
!����A��!��{%��;ˑN0	�r��S�,p��F�� ȼ��b��2�M���� �?��� �1�f��M�Y/|a����G��6�t=�����7�'"
zD�z)I�,��J+��	�x�e
m�!�r	�G��?��(�!���~���3l
ڂ��U�Q�]+�6◴wq�cX��Nq�E�~h_�5\I݅�Wp)���� l��>4N�A�Z궨������=�5�6���q�� �b2 J2@nc��b��CF%VgE�z6��z��M�ma���2(�X�J�n�ݱ�]�Q��:&����QItT���sӸ6nw����a�1I�d���B���������Sdc���;߭)=���{���J�
y�1�
�3_0 Q��t2�z$�|Y5@�b
S��s��:,�~�a���n�C6��AO�t��uA�bԥ����n�}m������O�#�Y�\�E�I��pBT�E@���FIvH��d� n$�����$�7Bl�#��hcQn��s�B�:��m�C&}`0'����Q�禚�U���%a"�V����+b
����@���8��7]�f��	��+7��2����� �)n2�҄�ha薑v,�
˒CxYdC�� Q2�, �R"�W6.r`Gk�*�0�r�bl3r%d�@�
�nL7�X�
��h��*u�րn94�DH�w@{7�X�;�Mv�.�w^{�%�|�յ��u��H4V�5�~ӳmc/�������`�E�dc��A���t^�R:d��7������T�U2�tWͨ�H�fa��qw)6�+�����T���6�<�^#�,Ɛ�̸�ȊF�_ms8���D0�Ã�K���,�g�Z��X?W�0��z�9ਰ@���v�, K�����@+��r:٣�io�~��s8ㇵ�v���c����?����.h8�Oou�6��q.vn^���`��ϭce�O��gϮo{xL�w�<���=��`�ѽzih8gc����!��$aBX@����f�$�	g�	;FHDbQq�+*NX4 "ۭ!���	�uz3�v��AfX �a�̉"�
����US��G	|��԰��)ad4n$�X��9��$�A� �
�A6�QшEd�'`RFH
�'ҭɚ(�VU�*���cʍ���K��I ��x�Ӌ+q�v��Mۭ�n��=F鲃��J ,,����N8�m2�},x0?dPZ�d�b�P.��w��oN�V�U�J�b }.�ף�)N�z)��zo	὘L��#�"�z�`t��!�Pi��L���g�h�h�5�62��h�ri  V��|bDQp 0��d��R�\��W ���ʑ�� ��EN2?3���(���ԪO[�_i�V��=��E�1{��v�&;.?�3��+��V�}e�m�^hj�n��U6�0+�������ɋ���_�d7�.4Ȋ�hih��n#l��WvZմ^VA�]�YN"N���j������l�
!a��$
�ĦD H[}ֳVV�5"X���܀�+��s��4���t�1!��!�����Vv��u
!����S�\��椶�NCW��6sq����v�r�c/��^���֨�Ni;38vΔ<a���^�W��Ƽ
����i��6c���ks�n�T�%d!K�T �J��ɧb�h
����8��P^��]��\TJ�`
��N�m����3��px�/�7�����-���^�)(e�5s??s諿���<B��־␾����(�B����fSy5�kr���)�e�s�smK�Km`y��,J�xI<�Zr���+�a�&�(G3����<ws�2�B��p�Z�Yټ�@�6P.��e�^�S����o�~hƋ����e��aٽx��{��j��Q�#�T5�i�x�-wZ��"�-z���v.>��Y��	�!T!�;��wD�.V���."�\v�u\��9Ƀ=0�
�7!Q�Z�yIq �}(8!�k,ޤX|"�Z�h9��P���>��\�V���5pD0iZVV�;��_�1��{���xٛ?^]���{ϯ���ڶO�����[���1��b����q��'����۸ޟ�A�N��2�ߑ�H!!��%E�Uk/R,���"E oqa���#���g���š8|�<+:t/Q]�;���B]���!��0hSjz�.$5� 
>���~��S�}�}�
>����cf���#}ә�]Z�9��c~ T-q�uCv�;�b^6��^9�
XNey#�JlN	��Y��H2d[i���B���w�GD�:5+�T�.-�j?C����S*X� ��P���U���H��כ���F�, e�"�֓2f���8���'ڻ�o�<��ח_�ro�����5�.^p�ϱ��D��?9��?��`��xt�eq�*o����7����X�ۅ���V��!�Aa���b5�r�lU��X�r.9�$`�t@:)���,	�Z+��.���{�/�l'���nϦk���e�E��LqQ1u��T�UB�8|�5����	�u}�]�������T�=q_�)��qpjS����P6���QP1�D �o`N2LJ w8�c�eT�dG�VP��ݰ��+���G�^q��ѶP�f�E���D#�hT8�s��+���2LZeB" Q	�'x"��9���g M���#ƫ� _]��]�U�D���;G�Q)_�QFK� �5����Oi��׺>�ݗN2���ɤ�Km7��qѬfH($�����ZFs�ZFӃ_����|DJ"��328QJ˖&�����7��ա�E�`�ə�t��>Xp@O�"N0����9N�>@Tt�Ǒ,�9˪��X��H7傢���!
(��$x}%��Eu�/�|mẄ́�m��n+������a[�-=t�sp׽������>"�*��螾K���5���.��}�w^�%�6�ٸ������=�>�^j���A3�Ġ�V�D�z�|����(�<�	�΀E��`�
�3�H(D$v�#��НE<ŤNo�F�wfG'�:�UW|��j�j���Ř�|:��1}����P�I�� ��^�"+���4�^�*�T�ɉX ME}�����z��Q�O����+�&	A�'��20�f�;+�=�G��Œ���c0s4�F�h����z�My\�k�|��.�82�=�߱�������v�|���CG\x�%
h'������/�<���/��5̣G�go�y((�M�����`��)�M�xM�e�e���-�lX�/�w�xvi�E~�Y��"Ȭ�}�f�S��|$�zp�[����C��ć�/�%����ymEg.��%�.��~n~w���;~�ӎ�72��+�~��+ڛ�f��ĝ��Ӟ�u�o��Aq�"�u��rI��C�"�a�����Hg��DF�eD�����s�ZGSH������N�����2�v�Z�`�g��e����_��
������T[�64��2&0β2�>6bك��/=��hv��YL7��4~��ݞ^�Ӈ�@"�`��Rf�f��ޙ�X6�����chO{$��m�Y3myʬ��N��K��7�ߔ�re�� ?W�~�����jB��+�θ����a�u��p�'Ӿ�5z��ʝ�Vk�ӝ�?������i�
/z��/o���O�|�<5�}�����<gQ�b��c���M*.w�Ժ��?�B:�>!��Qj
������u�:� �@�	�(8&�朽�m�,,���D�H���:_�������<��>��VbE��1� ͸��0'HC�U��#G��Qi.8'�^����S݊�h�����g����X���� ��7����N��y6��3��4�%Y0)C�=VlV��'�#2�"�p�f�`�x尼��!�O�g�?��(�<�
�a2�$�݄�l"��Y�w>�56����2��G���hƧV(Ч��kɝ���}��mO���-��eȕ�?{���5�Q�K��քƗ�r��!
86�����x�.9��c��c��Y}y_B��,"�F?��Ő�K�j�Nw*���k�x�ߋ�������l�o/�r��/!n?�ψ΅�I�<B� ���K�f��2g�g�
n%Y�E8��D� ��c�c�!�][�������[��D�+ɼ(p��͐|2� c#b2!�2��6t|�2�.F����G6}�;~JU/1��k�8�wM�r��8���
{|]"{���,����ڳ��Wڷ�1_2�����̰��ƃ���Xh��x��OxZzp ]�4
���ѥJ�(2�cH XB�tLf�S��� ��� r� �:���e|��G�W]�1��f���g�8�ҿ�~�����"�®� �ĕ�!��ه������������>|7�V���������T2��Hi��/`��'T=	�H�J�6��~���
v`3�V���9TK/
�����`���Fv�3��Ae��$��΍O��b�40M3�'��� �>c����ܲ�}F��ى'�;�i%��M7O��YV?6K�A����+[�3F�*��즿�v|����D����x"�-�#o 
1�3�����{��=.������)�uu_%(B����ϻX/��ҥN��
�#�hC�6�7.7�Δoz�w�Kͧ-A�&Ů<`e�����$~���5���~w/dz�(V�ݡ:]n�&�e �=h0BC�ͣ
#G!4�j%��o�}��I���iewL�ͨ�YY5k����Ƣ����Af�X�F�Bt+��4���Q3Z��O�ׇ&�����h:\�Aw���������O�������͈v^��ū�
� ���ll跉:�u-D_Pɳ4�l�3u�2�ou���?u�c�:�2��C�4Q��ƒƅ�-���j}�5-5�M�k�7.lh�ݺ���7�iiS���:߸���M�kZ���n�|`X~^^�p߭����W��׭�[���v���*�O5����Z����-�Y~����z]�и����f�o~t��qEK�rV�R߂��-5P.Z��qEm�z���K&N[�s�m&�WZ����"kD-@�P�իE��*b�d�|P�d(�� �* d:CX�(��%@@�
�@^�
"�f�T(0�%��e0b0 C=�I9@��dz1��
�S�t�= ���@5����+���m)@�\ ]T� �7�L��]�+��W	���:@.K�[v$�2����"�P��..�M�3��/`�{1�38im,~�� �]������R3��Zze��
�WY��� �<hw�Fepm�Q!�/�o�A��h���7��������?���?�d��  ����
endstream
endobj
23 0 obj
<</BaseFont/Helvetica-Bold/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
24 0 obj
<</BaseFont/OCR-A/FirstChar 32/FontDescriptor 25 0 R /LastChar 90/Subtype/Type1/Type/Font/Widths[ 604 0 0 0 0 0 0 0 0 0 0 0 604 604 604 0 604 604 604 604 604 604 604 604 604 604 0 0 0 0 0 0 0 604 604 604 604 604 604 0 604 604 0 0 604 0 604 604 604 0 604 604 604 604 604 604 604 604 604]>>
endobj
25 0 obj
<</Ascent 649/CapHeight 649/Descent 177/Flags 5/FontBBox[ -20 -182 614 936]/FontFile 26 0 R /FontName/OCR-A/ItalicAngle 0/StemV 80/Type/FontDescriptor>>
endobj
26 0 obj
<</Filter/FlateDecode/Length 23424/Length1 5827/Length2 20650/Length3 544>>stream
x���eX���>Lww3t	�C#�ݍ� C�t7ҠtHw#]""H
(� � R��<�w��\ϫ���p�{֎�׺��Ltڜ��.�9gON�0@]Z�S��
���LL��O�����'D ��
	 ,< a>A��*�������-������� �L y�3���5���k[wW;�;������f� ��������J�@BB| UgO_W@����| T<�� �����:{ �!��k.�!Ia������5oYgki''������e��+Ow_��+tpv�v��?`u���uX{�u��n^E������8[�'��W �@� +;�/�:�&���p��wuq�X8z@�6�����c������w���
��Zy,!�Pg쿬+:۸ @�y؄��
  >��{��`�?���v������`
���C���Q��	`�k�����	�����E�{T!�P/��mW��p�ZI:�:B ���P9��Z�ie�ת�i�u���;B�!.�_g���t�V���65O�l������]�	v~�����
vx�:S��XC��~�_���w#�ꯍ��s�)�l�b
u�������ؿ\�
T�U�zy��@@YO�r�U<-<�>���?P������`��� ������/!���*��M��"w�@@;�;k ���/PZ���~����eTd� PFta��
� ���p� �]�!v�6w�/������m�ey�^�w��=��w�?�=���n��/�@Oo������.gK�{� �	��uϪ�����
;5�����}�@@�{���jau�)^^ ,�8Z8�1|@7/X��t�����^N����ݶ��.�����+ �-㯃�/%�p���<vG
�=���0��,r]-�!Ύ�;|��ɿ#�_�T�
�z8�q�@W�{������m�;�h�ӌ�%���������� ���r��~9�.\�����v���q��"~^�
��v>����= ��͐���r~�3��a�t�
�B0N��I07��W�����蝋�<@�_�|ya^�x��U����ws�%� (u��w �w@x�����  �����*�>���*�0�.
 U� P���r7P����w�x��y�wQ$��Ko��@�; �����!��]���,�-� ������~2�x���{l��(�
�n�u�B�@�_��a��~/U�a~��w ��w#$��B@�{Y�h}���=;��/�����C�@�=��C@�{H�x��=M��S�ĸ�C<@�{v��!>��=��{���!��=$||	���7��}�!��=��� �yS��)��z��cL6�r�'������dCF�^) SIk(V�@�
&��ʈ;��J[�*2X:�G�*�߅�?��I������`��Z�-���Ɉ�߇��ro3i�����ߧ���S��YLD ��!�?f����&���
LQ�� B��)���M! �m�4����t��a`J���00�q��a`�����]���sX$�9� ��?�z��00)�����'4 �Yö��l�`z�[���/�w�ͭ09�]Š������S ����!,�*��@�,�`������	�aW�_�A�e8�nY�{Q���	����5����^��)������	������0&o��kY~���i�9�3�	���Z`r�����<�t���9��?Z�GL}�� �:�K{0E�m�'���js/�����Vh���J���X{Y��.�X������V��+��OB ��nm+a~�s@0��N�����{Lϝ ��&��:�D��=�	�?��5�f~�ែ�vOr��ZY8�<v��¼���ǁ�6�.��s��%4W�f����0y��8zޟ9�5^�,qr�������-�B�_���u��x`�l�{��Sb��c�&ǒ�=L�����@u�{����@����������;�.�����4��0��-������3,�C�O��.~g����?���w��`�60���\������v#��?����ׅ����*�[��1���ރ����=��y��M�V�}c���P<����Vei�qoѰ���-��A�9���ϯ
�?R:�N��O��=���J���RX� ����
�~�T��a�@���) T�Ӧ P�O��4�_6�����<�bA�{�RA�{�RA�?��*�?��ݔ=e�{�U
��� ����NV�<x`u��;���6���o��+~��x����e�J��r��p�rr���5�L��]v�Q�����_���~�Ұ����%���_�7�����������E���|�����A0���������t�ϳ�&��\|�9��0!�]v�`�#P�o���={²�?�
�<��G�N�`�������V1O�H�j
����G��*�J��I��l�c6
�CN��s��%E�{�bV�pPt�?��Jo�i�4M��]+� �����[Q��|u��p_�G��ܨQ�kŉ#��ᤴCBmqL���%l�6�^��>�}�.��ph��M��Y��X=�6�bH�����ܨ�xݝq-�6���J�B���T�Wa�"�G9���*;?��"$(�B�;�����mUT���)�����8a�&"���*7¬�S���J�R�r�G9�T�-bt���Xf&6�V�k^aKgs#{����n
���v��Ϟao���"Љ�@V�bl}�ȴڗGoB��;�B�_P��M�K4����s�`/g�m/b��|Tє�*PR}t��U��EjW���t�,����A��!��,`]��>n
��%�GkD��D2�l�P�ny%.���P%�0�4�P�u�
��a��s��h��%>R�R�ys�۠C@�8o��B�t	B��(\��(~�k��[qG�I�S��+޺�����"r�SL�
����3�2ί����LBZ�v�Ϫ��Җ�D���P/B��Ǘ��쯬Y���\d�Nq'�]�
=pg
;��[��g8���ѲY����|�P��R��������u�dᛕE;�q0�X/>�~�3�3�SQ2�Y��xgCdQ/I�P�=?^|>
�Xx��v �#q�zS�9�Md`�;^Z�y�~h�
��}�X�k"�|f�?8��"��uq���l�,A�u����������Dpɏ���h���=�d>����B����3��Qy��g��#}a����9�:�h}�8��/rͯ���\����������ܬw.|�j�ɷ
��#�]���1�N°\~�<��_r	.�!=z���׬�6��N�a��2�����_[Ҋξ}Vp���Ѹ��bɍߖkN�㭅R,��2�m��OvMRZ�'�cg�?�b����C���.Es��s���2)qՓ(sOhM ��з���ݎ������T}Be��[��-V�ɹ�Tl9��6�/��:��\�j�Ry�	���P���IKq�H�p��w�gDu�C|K�y%�����A��(����1����}����^j۷C�A/v��go���L���l֚^���Qk�B��vs�������
�b����Ri�:)���7�����=��u�������~N��t0�'yP�RJ��r�֥}6/��uM�[2o��+@EN��M%�d��Z[�����F�͡$:.��}�K��Ng�d���@P�(�!�z3K���o�c5����Cs�$C�ݡ,�Z�>\k+
���5�T�������'�&�H���N��T	����[o�j?}K�X¨8��_;}w�*��P|�1(�L�Ɔ�y�,R���[#=�d��A�r�*��9A�����ˍ�f�5	/	�c]&��,�iw��E;�&�k�4�����9:G���Ť��cY}����%�����]LBN_�uBL*]mW�>)8W���zw��xN������pƩ0����
��#�ouѥ���:����u���S]�$�Ux�l:�E������¬���=�Ky
.�TuҲ[�"�Z*�$3lԴ>��/��W�z����]�KH���$R�>�(�Ӳ��3��i���\�6@���ɷ�m�tTf ��y�
�`[�iYT��Y�����t�x5�}7h���b%~F�a4X�C��w�����l=��Oe�g�hd�*�r�n?<w���/F#U��C�(�.u�����?ʹ�b�M�U3\iGx�!��U�7ok��9�Q��5�ϱ����p�d����Jğr�Ɗ���%dŬ���"� =T��qI�|�O��~J�2��ty7�Ĝz���u`洖ݻ���d�C6�X�Fx�ylK��r�UaG�X}�ˎ�aUxGv����ɛ�S����#�R
�tIuԐ���EH!
�5�!-{2�:Ei�N�}q�S���U~Ӣ���_���A�Kx+����4���4PLt���}��b>�fm}��l���������e3�#�ϥ�M�k�5�bI6D4v&A�.J���t_P�]<�����7�����kB؀��TB���w�60��D� �:�b1Xz.Q4���E�U�S��F�s�r���~��0:�l��ZW-K��C��9�}�}��^�7	Q��Q��JS����}mI7�2,��
e�ܒ�V���rnl�\j0��	m�v�H��0nޚ�����K���sH�?x�"����9=lm�<�~ZA��ź�1��}$��09|<�
�:G���������*��GJ�-�z-�Pl�o�~h�
$7k�2�@l��}���`v���%,���������]�o/9�K�e�1%��t>R��4���X��}��Zl�~���+U�~#��OA��j������n�gܝ��a]Z���էt�B�2���>oy����ӷ�Fm�q�+W�QE��
7yGOL����
���N͕:�8֎�b�І>�ƙ��G�=��K�ՌT��j��[�}߄~J���Ϸ�PDCN�.�Y��-��It��)�����g|W���%���ܤB�v�o�/�6�Jag9��G��`�V]�Ί�bC�!��ơI
�q�+������Q�ʣ�3�h�n��WWUO�'�:�:����t�:U_����%�ʋ�B˜�zXP�P��bo"�:	ꨤ��{�Fb}dl���&
YT�M�RG3,D��3���>�tJӟ���?��L@���a�ľ8�N�M�nS������V-�;�쿂V�T���AL��K���(�} �k�ϛ�y�+�m�}��EZ�|�e�AS�� �9>��R������]�N���1��B���6���bK�"�)���[���T;�+	��F��yŰ�a�a>J3u�`}������w�����´]��:e��'�������'\�\�~��8zTvq[ʨK$b*��.k	hx���8�u�߽�S��<xz����
j�����|�����cY���%��
�׏�9���8�N"I����@��*"(���f��'�3|��l*�M��
v_�����o궗�>�ß֕��gp$L�0$�x���@U����	FW�Y�^�qy��ex5�Bw;
w��1���h ��S� ��g�z���.��R�
p<�^��l��k�Ĳ�3�z��QAW����r��
�ʪ�!P��ŚO�N�^���%k�*t���v��Bn���6!R��^�M�!(�7X�NN,�]1���t��
e�A\��g�X_ #��ma����Bq֩Kh��y6�Lf¡7c7�~6��m��(�^�]�~�b�*��e�@��ڭH���7ߔ�*�,�˦�!
Hp��["o��*yt[D�Xha�2ۍ��
, ����dP	�xV*��XB�q{�x1�b�9?� ���m�m��-U�K������u��م�a�3|��������ۖ)�4��NV����G�5YoV߄�Ϯ<�Q;�0�����,����w�Iq��b#�	�]�d��K+�����C*�.�I+�ȣ9�l�-�)����%��҈ϻ��;�'L�����p
-�jH�$�������b�iTH&?����f��F�����(ǧ9��hG�Rp�������s6"�0�mJ3���\��8xWJͧ��X����ByM��O��ϭ٢���#�cg^x�+�N}
B�A�sOjz�b��r55C�M_u��*�����X~�ߧ
�q�%�Xʣ��uȀ4���tbp�^����<C�E�&�[)����>bs�j�j/#��-
��W�R�F�[1�(�=+��Z�
.�>�6����uN��gt�*�Px��R�IѨ�sC����w��C��ws�D���� G��r(�7�	��p��ܶv,�����������<���]'F2�۶=�(Q����qu�O�k�
%#h��o����\K�6k�;��`�J��5rK�b���o��%~�9,:���hI�=�j��r%�A�����=yO$�� ՠǑ�/x"c���0�w�!�J]���U�����>�{^:YDi8\���D��ږQ�2)�����������8㳷�(2!���$��'�
�&�+�^�$�N�%U�}���z���j�셙�w5�G2!+�!0�>>�Y�8�P�a��?�^��D�5N\��eq��Hi������>й�g���S���y��^��s���I���w4��Z�+m��4P�L�<�N��	q�
uU�︉���$��۳	�/l}�2n��]80�� {��&b���]�,c)v!����G��h���B��P'G��w␱t��� �Y�$���low$5b�m��&�gp��U[�^�te'�ú���t�UT�ʌ�gv�sTOX�QH#Xۮ��1�~��G��{�7��c��5���Z􎁤U!J.kS���;lz��T�"߄���vX�]�(�"�(�>�a�ٻ�ǔ�X6An��B�~z��<���?��L�T:Y�ױoxT��!>f�Ja��e�Q/�2BBrm���@;�<8�e2�U͖��=T�k��?e��m�����0�d`����ڕJ2�+ �螊R��R�#�� ���ϼ����r���v�ʧ�����x�7L�~v����a�bq�JaxO��hLГ�k����
[�d��;p128�&�BuE�P>�C\G�IT%�ȸE3�V��17�k:��8d���\ï(knT��d�"I�5����4B�S�Ko�>�J��V�1�#l~�|ůw�j�����*�rM� �N���wq������=�]<Ζz���N-%<���h�+|_M3��G�O�E�!ػM�(��J���VӨz��}��8ձQ�6ŝW?֞J�P�T�����XJ�XQ氄3&��
���������&&��o�d\/6�ʋ�f?(�}��=����������z�a>���Fčb7x��Nq��sdSk�cmbXG�5��ڗ�F�b3G�2>����٭����Z�������(�-�8[�0U&�9��Y��a�I��%w9��h�o�I
9`ȟd���q�ZeéYk��/�q�]9�}���yؗ����j��P�$���>HëE\�\S6:,�װl��\í���l&i�qS/��K�@ُ{Yu�L/�=Z��%oZW~�zE�H+��b'l�����:����?�;
�#bӡ���Q:�kCe.o��Ƣ;���f�PSó)�h����T6:�8��%N�1�{�?��a`�E�����PV�?��1������˫�L ݮ��b��,�,�d�8i`�r��kMw�c�s�ψ�I�sڟ.�/��nmԑ.�s��V6D�x�����h��>w��b���r��I6o�)��KB[R�1���ny�䇟���0�8����m�
���ߨ�S����	�-�[�����j;
9_�_�
��nkK��oQ���{����q�g��(>�J���e-�8wlIg�j�7�.�bI|���QCG���������f�[EZ�}����z꓈ki$�%�����gd~a�mh&�O�\��%8�������h��J���V����ZkH:w.�iYn�|p<k�ˀ/�.��="���^[Z�	^:�)��R���'=�쾐>0~ie_�n�&��N�1O���8��c�%����k^���g>
��Q)�IN�ݱ;�b��~Lj�U����y�͖�rM)[�.��
��A�9!g���n�m��g^q/N��l��	ZjH��O�1E�ۖ-2;Qr[K_����1Le6H���9d{6s���U�%`̋AF��>LGb`Y�M��3n����r�k�U�ZR
&M7Y���I�#�����L����x�j-(�R(�V��� ��[�T�哐x*�]3��Z�sr���'��!>m����*��""O
��&���|䖧Z���ɭ�]�7T�����eVCI�C_	�C��,��L'RF�:W�\�0�X�P��uq�сi��ख़�t�\���9�O�'i��E�~x��ks�Ƿ����*�3���������eʷ�����#ʚ���Jf.V�>mͦ�T����s.w�!���m�v�ؘb�fx߿W�Ci'OBa�/ړi�vd�R�(S;"��ʛfb�v�r"����Q�©�G��S��'i��g�<"��7_$.�p
T�r�KvI��M,�M�O�2���k�mgЉ_��$U6?N4zh����e�B��t�_h|��SJY����q�d'�h՝�e��1'��|N��o[)Xu%��
Yc�i����xD�����$����X�,ը�S��Nѥ�t�g~�+"��j"�=�D�4I1�Lc��^��"n�"f�Q"���O9�yr�RH)��
	�"����K
 _�gH%�c���&
����h;<z	)Ǯ�ܵ�yM!���K�������K�����vO��M޾�P����܊��6�7�����%9RR �[>1/���b�赆m�,��v뺌-_V�Y��C�Q	u�Ċ(ZI#�ہ��y;�lr���m�ɟ���
tD+2-9�ᑎ���پ1{Y�?M�s%|���8	6v礗|X�&9��jAw1�}��ύ�Q����$�Z�(�D������g�ᕱjR������si�ј�h:���H��9���w_؛�}�@"1tJ{���c�<ް�h&	-� ����餹���� .��Q�<��sz���Ū皲��Z��\F̒�z
�I���Q�w��g����[�Vo�^{��6,��'��1Ɗl���N�����Y/��ɛv^�U
��B8��{�Ra�W�����-6��/i2:sU�ΰ &�O"q�k��c�CL��o��4��=h"O�n5�N(���ҫ��:��������w]s3��F�#��u��|��`�ȃ8��[�2��u��i���\Y_b��]�s�l�Q�������K����:���'�_�?�Jlw~a���iL�mCV��P�3�\�%~�s5�����d·<�Ep�_b�s�%�+�a�4z��8��M�R`�c�H
��\�\?_#d��:�Es4?Kn��������- 7�E_�q��á���c�~��������"�����N��\�s��dyr�	�ñ^sE�x�(@L��&ެb��SG�;ނ��bU@�o
!��"�h �H�9h�*Ԡ�Q���_�$�0������Y�F�����Eoܻ%�+S�H�OƆ8�v �+���e�bk�ٍ�LMr^���gӢ�1�78���\�v��yZ���$Mٲ�'�Ap���4��	r5\�(����>
KW!�%����B�p?jF�Jy�h�s�c��<�4�4�������7	?	j>wo������T
ӳ*h �[�T��6DJ����܏X�?���#q(iOQ��\z�"n��V3k:ɠg��qLr��ʚ�o��)\��DP��_4*���}q�خ@XrY�{a��ۿ����Ɓ��P;��/}�����q<l.Ms��
�c�LL�;�������Zp Ώ���Ə���K�
~d%#{�ǉ~�>��p:
̱E������p��f��Qɼ��d�C8��8����]�K�a�Z8�~��<3�$O��v6�#���Eb����G��+7kE?�nPE+�>��Ee��h���S��&�s���DCk]��|N��̭�D�B��$%��B�_���T��O���Ч�7�����e��3�~����Q��Ǳ�~$�
=��L̘� ����iq�� ��j�>Ŋ�qT4�M�p ��Oޔ�X@��"�%� �NZأ1�"�X���#��+��iqA����J�2��ܪ%}r�2Y���-<������ò��f�"��^2c��G���Û6Fz�մv<]�Űj�U��;� e�q�r��J	I`�b�0M=������W���KY�`�W@A���f�� �J�~k�e��g������ J�T{a뒀ݗyUr�i����~����Ѫ�y$+���E�����;|��s��a?�[�9��;%�	H5�=�{9@s�.,8��ѿ�*��T;f9��Kߦg���Y�!�xc �r
��eޔ���J�|S���/��$�R �����:��糊�M�0�J�h���liLRщ(F�`�TQ�N2���3}��6N�g�}�ބ\$�������CؤmZח�Q�e:w%m�)�_�(�>v�
�ؖ��*��K>��}�=m�G�M��\ ���2����X��L�
>� `�����W�b��.%��$�9�SӪ%����òㄑ%��"�rÎW������}��d������Ո�Wt��u��哪��^*e
����T|z��f��ӫ�N�����;���R�`�[��!�I?�����5m߂h:�.�v_�0Q�Lx�Ē�%.
놙7x��?�'	S����M2�@j�ڝ����r���tl�p�����6{\��pZ.$�zA���c����kŇ4��J��^�����\ㆮ�2��-4�E��8?��}�2��*w�3W~Nf$�)�vze]-Ӷ�j��jݙ�Ǩ�ܬ�u�1̹�{,��_�t�-��,�LN�w���{�w�:V�ϐ(*�3��1o�i�0��6y|$f��\L�O�_���#6� <'|�:�̨*����~A�0W;����"p\d�?���]�4�lV�ϡ���A��n�]��&o��cj0�[�CR�6)w���H� ������%xQA=f.oѴ�1��m���'·j�ꟛ��F�t�!
����(g�x�T����	��8��������"Ip���Y�_�k)�:���==�^/:�?.�PZk>'3�m�]��L�i�m�����.^wشźSPT_2ԗ�`�
:��/�w��z��x��A�h�0���ep�Q���I(>���3��
r=�Q�~��w!�/hv�����qÐ�&��x��U\_���x��~8��)�;�Wk�C=e
q١J6�|���ר07p͸H�\
o��BU;�)�w@��׏��𸸩hl���Si~D4jڐD^���Ӷ�X�YHj���]y�T�����6��4���b�����U0l�)B潍�e�o0���>�)=�,X�"�l���n�~%�t	1�ɟ�m��l�p���M����#>uj�zf�M�="ܟ��h�z���H��Nm����LT��Ͳ�zj�-�(��	p����m�U�i'�T�ʠ�E�Ͼ�H��\��ݑ �x��X�R&1� �P~����|��J݃DxyY�y������	��U$��dݔ���9ih�=+�`6�T�bh��Ӝ@
�&H�ņX��]�hNoWj_�[��S����֧f-}�-lޚ��պ�6_���Ym��
�-,GivΥ´q�����V:�5%�����9t��w'f��-SJ}^jZn��b���@{.�����y"[O�
=�ex���B�g)͓��Z��)��$FPk�c{�Ɍ�'��S��U�|b��� ��!g�Fu
CШہZ��U�C�w�tŖ1���m��;��]X�p�$�w��3ȉ٥*�����g$�Ƹ��22���ޒ����l��X��E�o�m0�_��i@��Ҿ�v�XIۏ3~��5ɖk�#Ue�U�~Cd� �K~OaI�~�ߋ��!4�֍'����Q#�*��gc�m�]�վ��fW��.Dcu�U҄[�=���>cr�%�]d�{V�|���z��妴�l,͇�2� :))�%"ٸ��u�$���<��:Uv�t���q������#�}��F�o�rI�r�-����}�\�Y����&'_{��L%��\�ϥMֲ�R_�ktm�3뿧�O�#�V���&bS1�#�T�z�J;���<�<@���)�8蘢�RJ�������
��S�c\Oq��jV&�����f�!'�">51�>��I�GM�o@
�%��������b�m�Q�q')�P���F��E�Ή�k� �o~)�
�U�.:ߜ[
�����f�}{~K�S�-��QD�tQn�����`)�a�8w��x��^ѣ��E���"�gOL��L�M4k*���"S�
���&��6H��q��>�$s$C~�N�jr�XQ;�H�ͥ�3N�����T�,/���:�4�`Y1%�g��T����N��� Q>�x��J��1B�+lt=E�J�h�P���n�U��i����=�Nʥ�r|�\*���kj�z�?��`�J�<����*gO��D�G?��/dՑ�`w&&�ᷡ��ϗ��y}J}�1���3k�{r����5�֒�#��yo�mj�RKZ��~�Tgc&/&&͛�V3�@�Ć1-����2�Os{�>���w[��)T{��_�&�'2�(�����������>>W�
1c^D�4.��F>��+g�|]t4p>|i/�N����Ơ"�yntHt�%�ctg՞*�9A�hh���i�2��wɌ�8^���
��l2�7��4s�~��u��*�i�`V]���G�\|�f(f�-_�;����_e)�6VI�t˲i�Et�	��;V=L1z�]�j G�f�?,��p��h����Y�����K����;m�~���ħs'ؘVCۀ[����8pQ�@Z��*�F��Y;�Hۓ��kD
v"C�
��(�<�XlO2�޼s����^Q��	��^iK���W��ٶD�5.�+,%O|�8��;�+��X�@1�)����/$>;�y
Ɠ���H���4�~a�{;꣊�F�|v�ًfH�A�h͞��1i��l��4���������	Ai��kXԱ���*��"��ɤ�4��H$���6,_}�1nѓ9���'�<~l�����1������ƾ��
��%W���[�Q
��䈱�pṉC��S}rm_!	U�a	�ѭM���Ԋ����6�O" ��3,�v�P�B�j[Ȭ��ЉP�>�ՎUAj�;ǯ�*�����;;"�ǋ���S�����R�wP,����/���>*��)�`���'ʠ�fg����1z�o9���m��P;�(
��/9���xp��ܾG������'��w �&}�7�WR~��QN��S�@|.�!n��"��{낣Z/�*���%��v���L�a���c��B�:�/0�x-��n�8�#1�'6?�e�C����<R]
�.I�F�x�E�·9�'����x�]��HT^}'��.��O�6�#�'^��ĩc�x	aZ����Ňyn�le�Y����yQ�i
��	y���m�\}�ZE���?xNКz�U��+�w ׂG�*`�hM��,a������=�8&>�"�՜�]ŤB����1���Y�b�Y���=�Y��x2�|٦�ۭ\���;C�$g+�~sO�p���;�>䏊�t�qN��?��^�)�G�Z�g�W����~�����5Un�=jߛ�9�]nk��"ƍl��Dz^�y�-ݩ�@�GS�^]i��]��LEI���˝wW��mY�� �2��E�z�tV�Sc����X�#�����e%�'Kձ_��I�^����K�y]S��"�?��rJR{�K�y3w�)�0��)���ef�-E�'���#�7h^	O��+��8�K����߉Y���������m���S�*�u]C ���@����u԰���aq���]���'�EʴIR֏GG(97[#��sԫu�/޷�f�P(xs5$:t�M��p0zm�њ��,�PƠWq\YW��t|_u��J�*Ӡ�J~Ru#Σ�{~�r������b3a@Q�u��b��2�:��D:M�ò��4�O���^ᙋϲw��-��$P�`؞���Dٷ*r����p/bN�:�4'l��y[�佹����8����= �!ŭx�bp�[y�φϲԭ��I9;2�p���G[U:��H�>�Ɠ�&>Y&T�>Ig��:ISԷ�=)V��|P�Q��)�� ܁g��7�d��E�6�ǟ���4�:������N\��v�����RϞ�$Љ���Ͼ�������.�,�|�����n��R�x�41�(�T�ªK�6��秛��׭��d�&
z:S��W�|+���PԬ/L<�#�Sqjb@Z�;�r���o,��#�����^}�܇smH�H�o���rfݙ'!Q½i�����j�������'GrN�S�ծ����Q�Vh��mW���S�P��]dD��2}�G�Z�)t|rTV��R5YZȄ@��#�VXz������t�J�4�v<�N�6��kM�7�73o6��� ���#3�n�eIIB�r5�ؾ�Kˇ���:���	^Fi�Kd��+Tw�h	|-'H'σ��7@��|�F�x��'���r�|�)8<A`���E#3��0/�V�N����g񦫣ߠ	,4a�%
'^k#��R*����r���p��ND��Q��5�ְ����pĥ�G�1f��ϐ��l'�x�E%R6[���#C�ma���q@�-x��~��@t�=:E�ve�`\�jL�rk*#��#-S[��HϾ��
i���k�Np��v�������t-KϚ��-�C6�Mq�^Ch������%d�V��
2>
/W��u�U�q��R�����}���T�WC�'�\6�w�:�
���x
��,!�}ӣ�'ř_���W�O鼩�C��I����0B����;�*|LU����g�y�ET�p�kS�Α�sX�]��#G�|SK�a"�'�<�Ʀâ��[���i1�L�����{)��}l��(�7�.DkvCG
{���s`͘2G���ưOg�e#�tG�W�-.F�3�>K�a�v���Sc�Y�z���;nl�b�C|�����~r�O�#Ek>�a���(
;s�Nڗ��]��ݏmu{*�M|���	��L?������NW2S��UIK���(Qpn��n ��5��9�ÊQo����]��x�(6��<zD�����?�)xy�D������|� 韭'�{��GI�M���� k ���~�T̽��L�Q��"#Y#��寢I~5��:�#Y�	�HMw�ϓ�'r�4؆"�ͅ����7�tGW'�SŌm������~T�1���\�O8�h�:70� �C��|�&����<}�?��
���ޛ��E�{sd���k��<1�i�?���Q\�Y��Q�PkE,���'܄��Io55�x=�u\����)6~��L
<~x�ȹ9eH��V't�hL�۬�r&�6{Q6t��nH���$����)�=/te��~YoF.P�o�@��i�^7��s0�eю�tQZ�xb��֌G�wM��}�[/z�֔��%s��V;?�m%b�t�t��?�ńl� ���/,���F�i=����E�b-���0T����{s/��ޏ}�ˉZ5pbK2zi��/���ږ<ĩ�Ma�������f,�m�W!�	1&33�h��al�������@a�
�v��ǧ��$�v�N�/ڣ�%R���A�_#X�t�3���1.ǯ�?}�=�05�SJ�Fcy6����G�ьJ�gJ<��O�v˘�^u���(�%��v5��|��<7�9������S2Iw��Zn`� -����+�N�@u����N���[��ۚ+GIS�U���۟r����d�~�b;�����j}Tf/����Y���g�ҙ�4n
����.��~ZqvQ6�����6��+�"�>Ұ�<�M��SS�&��H�o�< �¼��U�,� ��b�$2��YZ��UQߍ�@.��(�� 6aj�gO#H�ˤ��dܧ1���l�ϧ>���Q`ⷡf��=�����j���s햾ڬ�T�G�$�-v_mc��;I�1���x�!���xW~|�i��Ϯ�t�`8���3�j��Sܣ�W*e��p���cC�}MC�S[�aMd��9���0_��s����]�sLK�0!M���H5X�I�/D�3b�md|�`뮍��<���E��C���7��ߎ�Ui���J㎖�9�j�²��5HJ���=?�t�%v-o��yp��G��bž��.���0%^�4Ϯ�r� }`�-8M��-������r�j�|j�
K��6���#�!$9�VVnf)���Z"�S�ԾI�������F���y<@g����Q~���c'���Q)�I|84v�ψ��:!�ϻ6 ���c�oA��n�Chj�
/uw���UiQ�
�;���P9�
j
<�Pk� �y���rw��A���7�E��`��Ovg����MnG���Jpu��|�/�_���1e�]5A�>�X|Wu�2U�x�a�h�ʡ�du�!"�ψ���w��������C��9�����Y���de:S��r�jq��ȼ2&{Z���������YL��|kd�%�� ���7����xg�P�!����'�J%ٟH+��Ow �fRJ_[a�AC	3����9
ٴ$̈́&�ڣU��_΢Ųȍ��:b��e15���\�Tv�F� ���-�����ms߬�1���`�'/�n��|�JJW�����bpl��9o�-w����^w�����y>��o�¥�ծ9/;��[!G2�(��C��~~�!C������4D�����N~�Cp�&O1Ls�s�9PD�HM������v��%���餼9n�c$#B0��>2�|�	6�V����;��( E�ҩ���5�����-��0��twI30Hw7�
���)쳟�ܝ�X���������\�Jh���7q?�<!/�T�~�
n.|ǭU��詃�;�ඹ.�U[��G�\���Rk����,����3�������ع���0��Њ��!
�s���{b�u�(O饟�:�Ms�v�͒��-n|U
Ezc��[�]��O���k�"\�ѧ,�'�ֲK�\�ю�I_��(���mn��,5J�iٕ��\�)*Y&�N�����J���� �H�'�S �"^kC/�i˜͐5%� z�ⰾ���"�O�����RMB�-A�P6���d�3=� I������̺���$`�'�YG�X���<!��c<s�i�QI�� bk�w��"2��c�|
�!�R��=?�OݡT���\c^��hE7�q�ku���[�����H�VX�/l�.��'uoBݨ�6
��K��b2T���R�pmc��BU�l�$=�c1U8��aT ��~J���%x4x�
۲o0QZ���-(���+/�KR�n����+�xlF���	5��Q"+e���#3x	��#5S�)�{�63�*]�!��t���\�1ǭ�|"���/����W��_���Qrw��ȉ}d�7q=��6���צ����gzF��e�%��f�1���MžvtAN�}�>*;��~���
md2���7�#�ޟ��L���Q閗4������@�	����� SW���������߿�J'�tV)���đܖ���
79�<�Q[�7�'�а��N<�H�^��h( ��:�z���k6u�U2�l�Zg�S����(�C�a������}h	l���>�z�1�(�z�,��oW� �&���x*- ������x��	���֐"r	�Me���r �WZX�ѡcve��������^4��M�?8Shvs�'�[��o��Zp��JL�Q֬5�TeŅ��byp%��E���#4q���P���6���9� ��&��M:�&�I+i��bS]5�F���r��*�.��g1�4Ⱥİ��� 6��T��MSBE���(��*n�ۂ[A "��HL�w�������]�EX���M�?}:Uu��r�a&"�`u�c�C�ǸjcK^42}E8-���ke�c�16��ި����΀����%l3�Ϟҋс���w^��<��	ΰ�� wE��c+�D We�[��sg��2�^����09�T����)��o8�g=��=��eP ��w?������o�����O�*�Fqtu��8F���e�0�̸�Z=�(증i�M!�@&��8�!�v1:�߇�Η&�@�[uF��$+c�
%l 8DS����=��ho1�����O���
�Rd��uZ�`�����R;S"�
6\��4�s����9N�Z��Ϫ�cq������&���m���9���)-NN�X|���+� ��>�I��a}����9��c�y_���u!����Y�U��Q20�s+(!�B���M�޾�A�r�|��D�ʙ:�J���	�^�p��ƣա��F%��Wt��1^�Y4>�}�ǌ�%N��]/���g��%Cp��g�v.�h&$/?�8���0�~ݻ8���W	�ݘž`�5j���K� _>���M�<;�F~������ހt�����آf��|���g����Uto	���8�����o�H	����*�}���foW2:r`yyx���H3?�
&�Ԥ��1�[Ϩ=�y0����\�ƨM��~�-~���z0�v��N%�t\���O.����}�W���:��Lw����g�c�:�� 	�;�i	ζ:���,�yb��a��������{�Ӹ܈,������H&��=���<���)�IC���f���<1��Hb��I�9
��[�<����H��ڮ\EraP����/=���_c�9UQ^��ߥ���'��@Rx.�aFs�p��N|��^��.�N��m����{V����؎�F�+#�j�;��waN�@�ٮ!U�q�J
l�Z�*�'%3���O�/L  �����@���ȶ�'�7s�(�䯭P9e����ԍ�x92��l0��x����VJp]S��Qg7��l1����>=�9��<>ݝ S�,Kwk����E���;2��ۛm�/��] FkyL�}Q�L噖�4.Q��������XAG�nh���n��Y�،�8m���1�J�M|����`
uI���?�"���@h!�t�S����){�;����]b4�4�X��rUS>�Ap���3�:-	}&�z��N�y� Ci�_6��N��=nJ�!eONT�A ��&���uQ8N7RPsm/�+��Dxs'������/�1��0H�4���d�
W��S	��,�JT�ܞ��,�I�ːV�����A�z��ؖ���+ #>.�Y%�k]� vKՕ�{��̙�����.�����j�I��x��B��ੵE�XD�oqS��������jJr�x[٧F��6���''V�ƚ�n��慦�Ϲ���C�����f�38N�E5EG~������(-��C�f��d��m<���(�\�1�6P��F��Nܱ�tN�M׫�P}�RG�0�ǌXLI!pxP�tod%��G	3c����H癧�B���7��7��ϥ��l+�<w�G�g�S�"�'�9�g�Ѯ�����x�r��F��`�0IC=��]_B�
c�,��`�lY�R˻�i-ʁ��뒡��s��J
�xϱ8!=d@�9_@����7/�ȤpkY3�4�9�X�]��qBy��q�!̻9���v�Y�x(a�ID��pz�!N w%J��u�]Tٷy��	�:/҅�[�`�z~��,�+�\�������<���ݜ��_�d�������9����ve������?����L�v�(�֋܁��Y�HX��jFڻ�/3,��+�qz�?Ƈǽ����JD�X��3PfN)ɮ����=����j��E�`������oy�v,��gF����@�g^�ЂM;V� x�(�d�e�'	��2�3���,�"�
�Ĩ�Ĺ7
� R�d������$�T"+�I������p5��a�������B��{���@�)��[�Cy� ��c�"<��\E%�����Ӗ���CgQ�By>��ϧ����o&Ŝ����m���3�n�)	~�i�|�\��/M�r�}��)p'���Ȏ�bǏ躝jHj�<S����\�&�,\�s��lE��("!�\.�i��d���ꋟ;|���u�2�e�	{�l�4s5�]~��&��c��  8�c/��_GLa���R���M}l
��V��!���:���G[����I���u�\��/�{=���<zC\��l�
H8{�Œ�
=*Ti �g���+;)<�g����-�Z;���g�Ԝ�8��y���YU��	�,q�%��]�J��ǵ�d��E4����Re���}�>g�A�V��t����h�'�O5��'`�mBA��CoL��}���p�B?F4n�Š�u@u� �Ռ��s�t��/�\Q�TH�;����� u��P��r0Du+~L�:i)�m��Z
yI�oh�o�d2Y�C|TX��<����>��H�D�.Zՠ,������t���U�!�����n��6L#�xUR�
�ԏ�vwI❼��V=�Xcq� R|��e/���Z '���"7�D����b��J[0�����9&�銥���e�5����gTD����T;�Q\�S�¼��\��G6|�9�_���_�ζ���{#���S��[ײ�h��������Â6�c�Z�lf�4�sr1�EM�G��K.�ud헭�NI
)�x^q"\U1'��o�:�]�6��s�)�SF�����ov���ٍZ�|�bF�gU�*|�!�[޲KV�\�%fA��c�P�qRk-Ͳ3}r��	���X>��(�����Mh�h�v�(�a�|TF/�J��7>]"����~NT��3-S���z���	]�����#�_�N�e��`SVaMp!K7=�ᐹ���x�.k{b����0�ζ*	�[�� ���w��[�u��H��+��x�Vu=��w����>1?�I��&�t�p���#�{6&��F�#8Py�7KTpT�*W˨ �>N���8Δ�x�/���[%['8ĕhؿ�:-���V}#n^_i5	H'��ٛ���%�D�&����5 ����R@I޸�
s8-s�橄���,�^<����J�����`"�����k���Z��n�w��
A���(��W�Gz�Y���
)ŘQ��t�T�3
#�*z[>��\A��[�H���[�r�.�\��R"P���"��-�[�kyz2�C���և	t�[!{��!��9̈́�X�iP�h�����q����,< �K�U�3��adJч0��D��Y���q�|�i��x�����W��sn��pu�3�����[\���JSF�JZ�� �#�݌�o0�U�<����y*���p���SG��6Y3mݔ�[�1���I��i���NԒ����[�
�R@ ����}}")�71�������[��"�ȩ�/�F�T�%���il�e���n'5m�xz�I�6�O�z����7Çd��石�,f�VpR�^����l�tWB�j�[�� t2C�1�C�x�7_�^����i|�x�i��(k�����e�݃�1�O��$�#���ȅ�a�Iݙ�Uư�i|sBo��gѿw���=@ �!�F�g^�e�����7��8�z{�;���,gxZ�'d��U#ĮY��0F�@@����kiMJ��v� 
�&���㵇�]�libS-�ԐM�Y��L�j�X��rb#��+w*�T�-�����Ჸƥ7�Old�$peX0a�l�^e��n8hO$�������b�Eg�h1R�OxeE�4B��F3N�RϤ\�2
�w^�m�5a
��X�0������
z!`uv�T��#a�+�Y[X���UI�h����P"�2P�I��[�ŷ��j̸�\O���͇�!`ޔ�� ��Eں��ᵦ%�Q����'���M�����SL�w���7Ԧ�M�䑩��':q��z�>���������q�E/J�&uL"��Eff���`���j�T�~2w���:o����q�Q]��ˮ<�KT�����z��/w�C%j~��p���y��F�b��C4���8��9|�I�	��G
���K������8e~O��� ˒�ť����1�G��V&���\du��ws��O�V�Bq3�_�����@�
}�ra�5l�A
��..iT�>:&;���\⬁1��f"�I��v�����Z�,Tϧ���И�*~rL��E
�+:�L�!�]����G��!<$�v��
ҳ����}�,��|z���f����1BS8E��v�̊q�r�Wv�y(��}�(V"� dm��*������s��|/�E��2��em�e�z�I�t�*�3ה���v��������lI�b���9��_�����Y�}7R����Uok]�n.��ޣ5��$a�1�u�}�l���JW��6�4VF4�w�qB?�%�s̵S_7~(tŴ��esʕ�m���m��Z��"w�Z���z�(;$GbAAk0պ�Kt����{*��ԫ�n^�y�h8��쳺�

�u�u�h
u2�����3��=du���F
if�Le�m�swL�3��&�iy�C�Q�4F�/��������Ze�)�����%����d�����-&�����-S���ј�4����>��IZ�Q���$D�����Z��?��Yu
3郉�.Ly�?��ZW,�ԥ]o�&S~�LFt�*"��J���43��IVZ��Δ]��a��G�W�t��̋x�sy^������0�I�e�;�(�Z��9+����DLֱ}�o���W���o-����c
��K'+�t�@3F�j�/��d�� }6L��'���$8�ѭ��z���S�	�����7��fn��]��w�t�pv���� Q��
endstream
endobj
27 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
28 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 29 0 R  6 0 R  7 0 R  8 0 R  30 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ColorSpace<</Cs8 31 0 R /FXC1 31 0 R >>/ExtGState<</GS1 32 0 R >>/Font<</FXF1 33 0 R /TT2 34 0 R /TT4 36 0 R /TT6 38 0 R /Xi3 23 0 R /Xi4 24 0 R /Xi5 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
29 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
30 0 obj
<</Filter/FlateDecode/Length 341>>stream
x�u��N�@E{Ŕ ��<��~�D���ل@������Y;k����̝�3��3�N����%�O�%0:��M���$����#��"є]W����j�:!�ES Z��eg\�N]��E(1L33Tc٬���f�Ť��I�<%���@��t�6�oǾ�`l�mhaߎ�M������N��o(��g�^�c7x�B_;FJ���M���L9�k�d�3F�|����R�YrÎ6Hu��oPk��etd8�" )�<c����~T�j���XO�S��oL�	�#C!m�!�������_�z=>���ah.>��"�2ϧ3B��9�i����u�|^���
endstream
endobj
31 0 obj
[/Separation/Black/DeviceCMYK 11 0 R ]
endobj
32 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
33 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
34 0 obj
<</BaseFont/JDJOAB+QuickTypeIIPi/Encoding/WinAnsiEncoding/FirstChar 39/FontDescriptor 35 0 R /LastChar 73/Subtype/TrueType/Type/Font/Widths[ 804 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 850 0 850]>>
endobj
35 0 obj
<</Ascent 809/CapHeight 0/Descent -222/Flags 32/FontBBox[ -241 -222 1149 809]/FontFamily(QuickType II Pi)/FontFile2 16 0 R /FontName/JDJOAB+QuickTypeIIPi/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 218/Type/FontDescriptor>>
endobj
36 0 obj
<</BaseFont/JDJOBC+QuickTypeII-Bold/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 37 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 278 0 0 0 0 0 0 238 0 0 0 0 0 333 278 278 556 556 556 556 556 556 556 0 556 556 0 0 0 0 0 0 0 0 0 722 722 667 611 0 722 0 0 0 0 833 0 0 667 0 0 667 611 722 667 944 0 667 0 0 0 0 0 0 0 556 0 556 611 556 0 0 611 278 0 0 278 889 611 611 0 0 389 556 333 611 0 0 0 556]>>
endobj
37 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -46 -214 969 965]/FontFamily(QuickType II)/FontFile2 19 0 R /FontName/JDJOBC+QuickTypeII-Bold/FontStretch/Normal/FontWeight 700/ItalicAngle 0/StemV 136/Type/FontDescriptor>>
endobj
38 0 obj
<</BaseFont/JDJOBD+QuickTypeII/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 39 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 340 0 0 0 0 0 0 234 0 0 0 0 319 373 319 319 557 557 557 557 557 557 0 557 0 557 0 0 0 0 0 0 0 687 0 0 693 687 593 0 0 294 0 0 545 804 0 0 0 0 693 687 593 0 0 896 0 0 0 0 0 0 0 0 0 571 564 510 561 561 308 561 561 257 0 520 257 873 582 561 581 0 358 510 308 564 510 730 520 510]>>
endobj
39 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -6 -213 999 879]/FontFamily(QuickType II)/FontFile2 22 0 R /FontName/JDJOBD+QuickTypeII/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 72/Type/FontDescriptor/XHeight 539>>
endobj
40 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 41 0 R  6 0 R  7 0 R  8 0 R  42 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ColorSpace<</Cs8 43 0 R /FXC1 43 0 R >>/ExtGState<</GS1 44 0 R >>/Font<</FXF1 45 0 R /TT2 46 0 R /TT4 48 0 R /TT6 50 0 R /Xi6 23 0 R /Xi7 24 0 R /Xi8 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
41 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
42 0 obj
<</Filter/FlateDecode/Length 340>>stream
x�u�;O�@�{��-A��}�.�
�dىs	�!AG˯��I��ofvgv�g���
���T>�F���T�5��{���~�,G, E�)��܃?��,:uB�h2D�\���k|�©�%�if�j,��06Ќ��3"i��dY_��3��Ц��ؗ����-����?���� �p
9�������z]���}}
�)���mb���T#����t��r�/峰"{U�-��,�aG;	Q�ߠ�ʅ������� ���B=��W���W[��F=!N�9oL�	�#C�m�!�������_�z=>���ah.}E n9d�Og�j=s �>�4���]�
����
endstream
endobj
43 0 obj
[/Separation/Black/DeviceCMYK 11 0 R ]
endobj
44 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
45 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
46 0 obj
<</BaseFont/JDJOAB+QuickTypeIIPi/Encoding/WinAnsiEncoding/FirstChar 39/FontDescriptor 47 0 R /LastChar 73/Subtype/TrueType/Type/Font/Widths[ 804 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 850 0 850]>>
endobj
47 0 obj
<</Ascent 809/CapHeight 0/Descent -222/Flags 32/FontBBox[ -241 -222 1149 809]/FontFamily(QuickType II Pi)/FontFile2 16 0 R /FontName/JDJOAB+QuickTypeIIPi/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 218/Type/FontDescriptor>>
endobj
48 0 obj
<</BaseFont/JDJOBC+QuickTypeII-Bold/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 49 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 278 0 0 0 0 0 0 238 0 0 0 0 0 333 278 278 556 556 556 556 556 556 556 0 556 556 0 0 0 0 0 0 0 0 0 722 722 667 611 0 722 0 0 0 0 833 0 0 667 0 0 667 611 722 667 944 0 667 0 0 0 0 0 0 0 556 0 556 611 556 0 0 611 278 0 0 278 889 611 611 0 0 389 556 333 611 0 0 0 556]>>
endobj
49 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -46 -214 969 965]/FontFamily(QuickType II)/FontFile2 19 0 R /FontName/JDJOBC+QuickTypeII-Bold/FontStretch/Normal/FontWeight 700/ItalicAngle 0/StemV 136/Type/FontDescriptor>>
endobj
50 0 obj
<</BaseFont/JDJOBD+QuickTypeII/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 51 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 340 0 0 0 0 0 0 234 0 0 0 0 319 373 319 319 557 557 557 557 557 557 0 557 0 557 0 0 0 0 0 0 0 687 0 0 693 687 593 0 0 294 0 0 545 804 0 0 0 0 693 687 593 0 0 896 0 0 0 0 0 0 0 0 0 571 564 510 561 561 308 561 561 257 0 520 257 873 582 561 581 0 358 510 308 564 510 730 520 510]>>
endobj
51 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -6 -213 999 879]/FontFamily(QuickType II)/FontFile2 22 0 R /FontName/JDJOBD+QuickTypeII/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 72/Type/FontDescriptor/XHeight 539>>
endobj
52 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 53 0 R  6 0 R  7 0 R  8 0 R  54 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ColorSpace<</Cs8 55 0 R /FXC1 55 0 R >>/ExtGState<</GS1 56 0 R >>/Font<</FXF1 57 0 R /TT2 58 0 R /TT4 60 0 R /TT6 62 0 R /Xi10 24 0 R /Xi11 27 0 R /Xi9 23 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
53 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
54 0 obj
<</Filter/FlateDecode/Length 344>>stream
x�u��N�0E���Y�D�y؎�̫�R���[
k�;�|=N����g�̜1��$;�@�[R��XQR �S�kr���G��	#�����4eו{�'�
�I��Ī)s�,P.*?��p�J�,B�a����f5�
4�-&EĬH�uJ9��&<�mzߎ}������¾����S��};@5�B��PXל�z]���}}
�)]��5��<r��"ed3F�7�l���������̃U���&�Q.���gw@�� ��!Xg,�6^Տ�^m�~�	q��4�Gg���R������� ��/e�����04W��V��o��tI��ga�(�j���o���
endstream
endobj
55 0 obj
[/Separation/Black/DeviceCMYK 11 0 R ]
endobj
56 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
57 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
58 0 obj
<</BaseFont/JDJOAB+QuickTypeIIPi/Encoding/WinAnsiEncoding/FirstChar 39/FontDescriptor 59 0 R /LastChar 73/Subtype/TrueType/Type/Font/Widths[ 804 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 850 0 850]>>
endobj
59 0 obj
<</Ascent 809/CapHeight 0/Descent -222/Flags 32/FontBBox[ -241 -222 1149 809]/FontFamily(QuickType II Pi)/FontFile2 16 0 R /FontName/JDJOAB+QuickTypeIIPi/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 218/Type/FontDescriptor>>
endobj
60 0 obj
<</BaseFont/JDJOBC+QuickTypeII-Bold/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 61 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 278 0 0 0 0 0 0 238 0 0 0 0 0 333 278 278 556 556 556 556 556 556 556 0 556 556 0 0 0 0 0 0 0 0 0 722 722 667 611 0 722 0 0 0 0 833 0 0 667 0 0 667 611 722 667 944 0 667 0 0 0 0 0 0 0 556 0 556 611 556 0 0 611 278 0 0 278 889 611 611 0 0 389 556 333 611 0 0 0 556]>>
endobj
61 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -46 -214 969 965]/FontFamily(QuickType II)/FontFile2 19 0 R /FontName/JDJOBC+QuickTypeII-Bold/FontStretch/Normal/FontWeight 700/ItalicAngle 0/StemV 136/Type/FontDescriptor>>
endobj
62 0 obj
<</BaseFont/JDJOBD+QuickTypeII/Encoding/WinAnsiEncoding/FirstChar 32/FontDescriptor 63 0 R /LastChar 121/Subtype/TrueType/Type/Font/Widths[ 340 0 0 0 0 0 0 234 0 0 0 0 319 373 319 319 557 557 557 557 557 557 0 557 0 557 0 0 0 0 0 0 0 687 0 0 693 687 593 0 0 294 0 0 545 804 0 0 0 0 693 687 593 0 0 896 0 0 0 0 0 0 0 0 0 571 564 510 561 561 308 561 561 257 0 520 257 873 582 561 581 0 358 510 308 564 510 730 520 510]>>
endobj
63 0 obj
<</Ascent 789/CapHeight 779/Descent -212/Flags 32/FontBBox[ -6 -213 999 879]/FontFamily(QuickType II)/FontFile2 22 0 R /FontName/JDJOBD+QuickTypeII/FontStretch/Normal/FontWeight 400/ItalicAngle 0/StemV 72/Type/FontDescriptor/XHeight 539>>
endobj
64 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 65 0 R  6 0 R  66 0 R  8 0 R  67 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 68 0 R /GS2 69 0 R >>/Font<</F1 70 0 R /F2 75 0 R /F3 80 0 R /F4 85 0 R /F5 90 0 R /F6 95 0 R /F7 100 0 R /FXF1 105 0 R /Xi12 106 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
65 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
66 0 obj
<</Filter/FlateDecode/Length 6753>>stream
x��=�v�F�w~E� �GB�
	x�d��3�lQ��<�>�U ��Z�*�(�4�|�D�%�%HNۖE������Wo�/�x��o�IVGG�ƌ�~������Վ�j�{s���_J.���/�����HI�8��,#��~�=S���7g�g��o?��򦵝�L�(���(r��0�m�iKh,#��e�%�|z������˿���Og
$�E� $2��(��(�m��g��L(Ax)!���UH6�	��̗F��/�$��P&���L"&�N1�`Im��<@��3n13�c
V(M��5B��	ӁF,A"�w�!K;�g<�H^�1k�`1��K;*3]�(�94Nhĩ�z��F�y�[�_��)������ ���cQ�;bA�R����3�JbA�*�C�-��C�-v�_��F;��tx����*;��c�؝
rYP0���CV�|���a0�I�W�a�rS�%�Z�����}D��"��f
Nj@��C%m��(�B ��,e�Y�Gv�A���΢�iX��$=��n����=��+r(����X�w���;`Gy$ǻ|UD�DGk��bD��x%F��JV�����`%O���T��]�)w7�ʫ�QOi�K�:eQ��$#*�T�J݉xbg,E� ��H��W�tys[��I����T�bK��� W���Cy� �
/A���R��P�]�
?�<�6����R@�qcK/�6�" ,��H
�5�b)`)��6`?�CY�ɵa�?���< �@��#/� UQƺ�rTUx8�mP^ �_������ �9Kꁇ�Kb���w ����h o��cq�߬��?|�Pqҁ�� �#��
���8�_�+����'0�_𧾂�
@���}�ձ,"ehr����X�O�@�Tx�"�q�Qqa���k�?�j>�]
����j��]m���%�p���w⣭�V��f��G3Ri|���R�#)�Y���_�;)3$��Xw����Ĺ�\�*m�5���حa�oH����H5e9�J�U��Z(Z��@/�e�P-��$2ӽa�(�N
�7Ԁ��8����:��f�����iPD�;v�e��(Fn~C*_��ceX���d[���E�U	J��Ӱ:z�UzM��5"],�@�E���!&#I���#��ґR��мv
4�9<����$�Q�G&�F�T��}ܯ���bu����N�+��6���0v����h���:��%���i�h%����:ƛ�����u�ã8����: �q�pnm*��I�
�(G�1�y�X�j��8���hT�����j�S���UqJ�\
�)���1~X��\�%y
��`Ղ�5�k�4�P.�B�48��D{>�p+����q���ׇ�x�hʚ)Ԧcu(����:v�Ϳ@S�s�!2˱@e�v�UU�w�(H��@�+\�\�>�;����mBO�}*�� ]A����� $J6Q_9X^�I�D����o�� �;a���1Q� ��.��='��:D�w�#�o��U����P�7;'��$��d���m��0Ʌ#�*6��0B[Q�gۤ�i���X��o#�ɉ�E�����GA�i�T̽������h��%8��W2�kR~{"�]��U��x�9��%M��F���1u9i-���iW��'�O!�W�6
P'2�|�42As�����{X���WG�W݇' V�|\��̡�DBxv�c h�؁Ձ8��'���sB�aрg{*�l ��D�2M�d6a�D�`5x$�
~�W�:c��6����M����q�{�3>���po]��c��<8L��a�Z����3`޵����&����@�n2���������f�Ĥ��O�uD��;o5�z�	�@c|�/7�Y�滛�7���ʿ"��� �26B+�H9m�2�g���|l9�@Z�P�iB�j4Z��I�\����F�Q�ʬ���
����k���	'�M���MY����ڐ�x,��d6��.I��}*�xHU�
_Ê������5��7�_�����Y�Si��>?�!1a�?�}�k����+`,q?�l;?��7���+�Xl6�-�
��F��My]�q�(�}	Z��G�_��C�q�Q�%�K�.���Q�	��r�7���ߡ���TK$DmL��W������h�`�$6��
½%"�`g���v�>t?�`�MuX�f���A�L�Q���f��1�R%¸1��V
{\[��9�xs�!����bm���*J�	p��|	�E��Z��l�r�M�NRj�Ò����T�A����k:�1n�
h���i�x�0 V�M���l N�}�^�y(�q������1����T��wY��P�=��%f�v�ۓ{�  �S��8�=ZXϕ�@�R� ��R��#�j�xDЮ.��
�8%��y}S��b��V�����v�0� i�f�t�E�d��%)K»P��Խ���
\7���)��	83��4D�|z�>^*�V����	9a]vc�R#\!�ǭ���@s�"�Xڥ9h��H.���å�I�O����j1D���6Q�!b�w
2R� �����s��:�m��&����S�\�x��/���痵�Ĉ�}/� ���y����s�I�E�l&���9;���6��s�r`Zo���PM�ضc�N":v)�cl	��[=ɐU�1��R�9�����(��uQ��^�"��!U1*����ez!]k�)j��n�R�y��pe�.����D~v�=�C��<�4m.�U��}bڠf�p��	�QBi�
�����S�f`?,bE��|���Z[��,qv��3��J�6ɝ�qw;�_#���D��u���LH��E�����,��`��F�E*RK���Z=n˻���)׬;���W�1����݉�����vF�rS���.()\d�L���'U��nO�
2t��&ქ+�j)���eS^�^�5���D*��.FEb����}�����`Xi�
��K)�S�ݥ�`�j�.`a��0��e��䠿��e���A��.�����P��j 8�Jڦ��a
���Ɣ*�P��������  2H�H�^P����:#B�q������b�f�6�Ѡ���5&�WX�!Xm���:�=<}c/E����~@V- �"�h�$���&�/�]��/�g"��'��b����z�s����a�2Yz�ds桼m����[rf�Ƀ~��噑e�j� Y�4"�v�y�G���M�_��gaj�9���a@�-4���l�$�K-z���e۾hɶ}Ғ�$vOjI�=q�ڲm	ВmY��n	7�K�n��N�9&�x�p�<n;`�p�#�	�����!D�}�{�����)��.���<4n��%��IK�E�Խ�Ol��p[�����<�[��q�w���n��:� ��y��^�����ϩ�m�S	��O�>4��Sw����{9�e����0�k�>D�|:Z5�ͱ�|�n�g�f��Wk�?_G3{ǰj���o@?����R#*=�쾸��jm��A��4si�^Ag���#r�ACu�m���&-F��aXGb=�L���mW����TX���q�V���k"�����y��8��?t����Yv�Q�՞��>?�����-6��_�K��y���y�����V7A����5�C �"P�EgO�����L�{�1�,�.3%�K]��
߭�?��������a�m�FC��:�k������1���A��?u�x���C���I��r���3����K�|�V��\R�<��i���^��Rޓ�\�Y O�&�{�6"��`�M��j����'֊��f� ���o����Cq�?T�7;�_��.W��4m���������KA�thB���� p�Ǫ����`���܈�=ǷU��4V[g�͛rW����t9�r�s�}��q�F�Qj�&]-�8�L=�<�;���`���
��Y[�1��b]�r�B�y���k��|ж{��yO����_i<)ȃ'T�6��z�(5d��R�CmF�P[(
	���sU��k~�)�|1Y�X%P���v�xƔ�{���L
*��U�$}��_d�8�o�BC
�k����3��j��!X-d�@�f���Ǹ����]r�]���;]�<��4��|��|6��'tfzһ�c)�Y,�4��K�.E���`5�� ��7�����a\��u\��3�!�\ {e���4��x&�ޢ�Y�cA-����CP[�hZG��c|���������Q]���H�6�pA�r��nȕ�Ђ�.�7�x�c5����:FGe�V9�����zp`�U^a(G
w^%����>P���:Q�m-���}jh�$���vhAˠ����6�(ñ!�l����3�
��T@/
��;1��&�	���x�c�O<��?Xs]B4m�����bAI�Y(��O���cj�z�֞�K����?��z�3�l¤��U'O����.>�%v2�s~�a�$��
00���7�'lt	�TB^I�������ՙD��_7gRFh�J��c������,R6�l��0��$zT�����33=J�i����m�P�_��Z�O�sU6�}���ȷ���6]\^�?��bRǙ�(���	�ǂ���#��z3�e�ok��/U�~��<�t��9?���� x�Z�^_��]՜�zy�%�ڋ���+rmI��@���Vc���F�zMׂ7�<1�TUΜ��@�BG��.�#7���+�v>0#�jx�C��!���Ԛ;J06NJ؀=\�ɩuB��WKN�M��va>Zsq�ZFgS6#�z�>Fo��U6kg>���؊�5������U�]��+"��Y��we�uo!��A-X�-�Ge��͠*#b �`��B{���1i >���۴x�X�j��K�=��m�/��9�;���Iy�Ln�r��AD__�}��_���P^�����d�Y�+�>@:��J��<%��U��e��&�tH�T�GjJ}�P��7���E� n��,�=���Nio �k
~*�kns~�
�q�V�@��mó&���:�%'���bw�ڋ�,�nw*+<���B.�s���t��n� ͕����Li��ֆ��\kB���6�׵�.���ҶX���b������Y��ԕ6�dB_����vh,���2��bS��k�r����!u��~ق�z��³ٵ����)\ �je[@�I]k�`��fÀ���1 �eZ�5��4�JK���U�x>rs��]O�f�d[T����=W�Oչ$��nȦDb�7¸I4��/.G�E`�T�Mdj�����rٖ�� ��f�K�0��*�a���9��ϊ�t�:,���N���7���$�&/w榪��x�K`��p�>�zKڙ`����i��}>!eb@@���J��6�oܜ��C�aK<^R��)t�6O���6��}�r�h���Mu:�|�"M-1I��H�E����M}]�Qˈ�͢����c�`�ņ���pAl�Q!�o4�4��Ԝ�@j1�e�x�����^�㜰�s�Ꮐ?�$�G��_�Ox#����X�����.T�t�~�:���VT�b�edtC��SU���+Nh𺕹� ��5Ljh6X�9�=�C3h�:�p9��c�z���%&� e������)� h�p�d�0d�j8��Z�=CY'��ס�!H�:{X͘� ��j`�8�/OW�!��׹�n�K6i.( Y�&גS����+9#f#֟��t��|�i}���\Xf=��|�GGpb�pLz��
5X :jC:�ُYD��
`EWV�� 3o�/\��b,(���N6?��{ScQ76�v$�[�z��,X`��9?VgѿG���0��[So[�q�oS�^[w'ޛ�g�8����8b���;���7���Q:�df�ĸ$��em0� �������Pv�Ic�.�	x*2�~�D�� ���יF�>P��Cܰx�Yn{t�Y�֧��om��kb�R��A��<���?Jn���C�}Ym���׆g�ٹ�����KH���d
/	D7���[)�����)�_*��OG�v뢶��٦6�C�ǺQ���֒*"������+c���a�Dx�&L6R	'J$o��>*Fo�0�	T�W����#l�ī���~d	���q�$����i7�_�l.w.�s�x���;�^��.�*���ޕ�Y���h�����u�xm������ϗ��M=Cɾ��]>,�I`�~���-���͚G|<nk
h�NG\��������L�i��x��~X?|�_�� y�2~�>ue@������V���Z����b�^�3���������!��-�9-j��8ݧC ���:��aAv�����ô_:��6�Z��H����8�Q�7��L�ۥ�Ew5��~�5�Ð�.ܜX�]؟��R־NW�����#RA��e������}���=P��`�����Ȇ�����>�
su��C��0Ӧ��ԤR�N��Rw�x�&-<���}�
�y[W�=�,`5�������Ue�?�w��~�'�X;KxI~�W0��9��$�;z-��
|��=Q-���P�N~X�-+u��[��*�-#Wu�n5Hޗ�e�7�s�t��J\��6&�ܠ7=Ӂy3���5���@�D��i���u�5�����
endstream
endobj
67 0 obj
<</Filter/FlateDecode/Length 290>>stream
x�u��J1��y�9*�13�I6Gko��z[X
ʊ���$��h�?ߗIf&�W
�K�� �j�7%�9�I�?��&V�^=������kJʉ8���&T�|����h �&*a��cm!v�iҭ��U�Ɠ�9hwF@��T'���0��!��:G����n;S�Q7��֮ѓ,$�#"���v������K�`�K�m߷�3d�y����B�
B�.�O��%/��0ruјj�}S�c�$+j��d�Ծ�;�V��'�)���۲��J�X1��ئ�>_���?A�����`
endstream
endobj
68 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
69 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
70 0 obj
<</BaseFont/FAFOMF+HelveticaNeueLTStd-Roman/Encoding 71 0 R /FirstChar 32/FontDescriptor 72 0 R /LastChar 144/Subtype/Type1/ToUnicode 74 0 R /Type/Font/Widths[ 278 500 500 500 556 500 500 500 259 259 500 500 278 389 278 333 556 556 556 556 556 556 556 556 556 556 278 278 500 500 500 556 500 648 685 722 704 611 574 759 722 259 519 667 556 871 722 760 648 760 685 648 574 722 500 926 500 648 611 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 1000 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
71 0 obj
<</Differences[ 32/space 36/dollar 40/parenleft/parenright 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon/semicolon 63/question 65/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U 87/W 89/Y/Z 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 128/bullet 132/emdash 144/quoteright]/Type/Encoding>>
endobj
72 0 obj
<</Ascent 716/CapHeight 708/CharSet(/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/W/Y/Z/a/asterisk/b/bullet/c/colon/comma/d/dollar/e/eight/emdash/f/five/four/g/h/hyphen/i/j/k/l/m/n/nine/o/one/p/parenleft/parenright/period/q/question/quotedblleft/quotedblright/quoteright/r/s/semicolon/seven/six/slash/space/t/three/two/u/v/w/x/y/z/zero)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 73 0 R /FontName/FAFOMF+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
73 0 obj
<</Filter/FlateDecode/Length 4725/Subtype/Type1C>>stream
H�tT{T��q����";5��;"Ty���Gy( ��`����;���!��z���=I�1��F=VmAT��(�U\�5��Y1Z��^��Yz������o������{?�pC�$���ħ���%��U|�A�]ȯ�3�+���J����ɂ�&:�.���2�p�K�%����v̝�� (1��WV^c4���EFD��kd����M�΍n!1���<�^SQɗTp�Kue��2����r1���b{�
n1_����f�*8-�a������++��|�r�X����պ�m�n���/�b8�]��
C_\�t|i��*W�V���
�e�5�h,7j�5\B��DN[��J�5�H��D�Fd(�t��R+�+W
z���PVZ��aO2����WLQ#� $!����G�E���$�j��F�z�i�Sҙ�#גGȫ��3vL昪1�0��N;8,s�$IJ%h����(���H�Id�	�Y�l�욣�c���NNN�N���::op>�|�%���˱�c��g��G�?���S]7�v��c\ָ�q�b��ݎ��Uhy�#��+Ĕ3[g�w
����zuR�B�p�H
;�<�s`�����Y���n��;j�}Z8��-�{r�,_cN����_��Ʋ�
�n`�L&�B���-=Ы�s���nu7Zپ�s�~�d��.)��T��!����a�Yd���ϟ��W$:��ԩ{%�]zqc��)If�W�4�M2���(�<-�*��&ԸO��ٴ�l��HL���| �@x�^��m��UgK�빧
)��㼪w���)+�c�
`
�RBط�c_u��8��w	'�@_�p �R�"���
�!X	qa��(Ά����İ����犠�g)X6��~�zRk�ҷ|RpG�7������@6W����������h]v�:������&��Q��&3�	mT'lb�͌m�{0�셊g�wV
o�&k	U�����ፒXZ^kzLd�:�T�f1�+�#��|�i�!�h\��8Mmm`� ���='m�D�F���V-�_%��!�
��l6��>	Y�J��]���$�3��8,J�
�������*��9>��%F3%%,u=Β	:�A��yǓ.���W�M	}n�8�
��k�Zd
{`�Iq�2�M�T+�J�۸w_�ת�7r���͊�ͺ��NF��laू��<-ڞ��j��`�7�]��0!���g\ ���-�����]��9�������
�<�2���L	�by	4��J"�*F�!��O���a#��4�+��0`� �'��R������G��JZ�u�Rٮ%�$>#*,��o���;^E��
"�\ ��>*�~�vE�f[c3�K�e4q�	�M�f�[�Y�!h�����!�Y�A�Kn=~r�צa0�������*�M��D���pTo`B���>'�,I'�C�����V1v�=�����I�Q�gb	#y3�>8�X�7�lt��.2h���)�Ӧ*�̤h�&Ya�5����x�a�w=4__4gVjZXH���iK���ִj�䬲ܤp%z�w��{��x��Cj������(��O1H� 9u:j����=��s�����M������Έ�+�8n����G̐ ���q�#������k���jfG��E���ଂ����~�zq�(z��rf_�y���QM�6	.ؒ<Y�&����T�I���{ڀ|Y-����yo��_�n��'�=��L�nK?P���+�Z����>���#/v�fWL��˘A�.;7R�ci������N���vr@	LH���\�z4�E|�H-��[pIl�"3<zT_��<����<�%m�"	t��X$���p�ēf�w���48�#	n��/��Po�\{̊~�lI6�Ā���lZ8;3;R��h��,�����jHÜz��z�>�8n?\?���;�[�s��G�'��K�&/�n���a�G��P�bZ�5f�b&O؄%6j8\�ʂ�jt5��
��I|�u�#��Kk# ~�?���(�,*�Ƅ�4=��n��1�O�"Bp�D7~b@b	Q�Eku
�
����dW��O�D� ��i��2�SH�j�=��ݽ=�ڲ�b��t���>��s?O�g�ܦ�`"��(��d��aZoG�o�l����zZqks���630��D�9�q��.D!��-T��b��8����}����V�W�QP�r��A����}���[��q�
v��s�������ddB���\[m�78��/��x5�_���-b�$�?��"~����d����&� b&2J�K1x��7�Ǭ��C���,�I�~���p���%�.��*;�gꥨ���i�W�qV�┳�8`=�l*O�Z��vaH�{_'��?�Ck�А�z$�ҷC���H&t��gx2��N���sz1�7�P��(Nc���JьN#���TI��v>[1�ջ��w���z�w
E�]�3
͌��L��S{4"wAD��6��s�]���Om5����Tĩ��&�#g�D���Z
8�Sm1��]D����&�{8Lc �>�)	����E��$�a�u:�H���~hAK$="12�&-�+�j(Տ�b��J
��0�ڪ�o��Mk�%���W"{R�844%u�'2&�J�t�PL.H|�3�@���*�����!�_�PZ��g�[��f��R�=��q�����>����d���A��@����
A�U�Z�������&�ؽ}s�w�%��}���G����m6�7�ԅ��(�n��������#a�æ��Y��)U��mj� ?D�F�ьB<�C�[	l��w�/���>���p��3�)Md�m�e�If[�0Y5�#ߊ�d{��t+G�
�vKz�9�T��ɕ|����#�!6��]�7�7��a.y�24��DO4E5�IRSi��y�
	0�b$#�+�1�j0؟���խ�G�B�B-C�F�i�� ��4C/�߄)�UR�d��ƺL\=�1B�C�� �˰WB���A8��d���'=YP��0�WmS_UO�,\
�9�i�q!up��Ti�Fh���V�!FH]��^[T~�����wIv]�䯇<@�E��[�ŵ��V�P����]d�IC�dk�~�@��U]nD|����2����XZ3�7�>��4�❓����T2�ȵ&���av��
�|���|��A����zN> O�I�͂{e��".��%�Am���;L�J�yk�(e���UR�T���
8�72a�h��xB�ۭ`*�C��y)���8�����U=��T�,n���J;4��A�=�
Xݲ��I"�L��}����^=|�B.b��h�,�;�N�R�3���Q~�c)�\x� �iV��1�)�9�
)+�E4$+�m�:�����0�E1�,�S%)nCSD����AY��о��.�f]�K۩�8I]W����Y�^:�^�MM��:�����y��ҙ�����������0}�<-d�mθ�7�0�*�'���
�ÍZ��d�=����a�A2�M�!���[�o�='�WqQ<�_��+
�ꉎ=���]��#|�E�V
�0hi��[o�TW�����v��m��6�aݧ^�^� �CtS��ц�fG�={�T G�57�+��#�F�{#9Z�l�Pi�W1����e�!T�ʒ��/��+,ʕ"��KK������{�s� �٬�=We��	�L��x� mk�2`��<�4�ᡜ��}�4�e�K:��Q������~Yى��?��_#�=r��3���K�ׇ��d�?,��+�)�g�=� �2w��er�;Z¹>�r�L.���g1wU���t���_�v�J�-���<�A�m����?�:�0���_���������&�C(b��
����X_�v�z�j-C�Ay{F�2���(|j�X�Q�'F��,��m���4���+��;��x;qVg�눰CO���%;7~ۼ%K�<�qp#�B��1[�rl1v��Lл�A*x������'W���|�Բ���|�|]r�����t�S��Jd�D��#����̦�d˾����{��c�s�n��V��d�3�����w����m��u)	t�	n<�Z8��d�r�?�5O�k�+6�H7��-��2����7�V��2W��<�^X�TX�����X��9�?��:�������TӨ�pf�a��g&�3`z��~���W`-5�g�����@���|�����5��2��	��}�j|�&|��}`
��>�S6>7`�`g���M�BS~t�"��
؆����;�Cd��}�w��M��l�E{�������M������g�;�Z\���r��?*�7����U!6km�f���gZ�1knuEU�tUդ	������Z���/}}݆��� �����������?DX��Qs ֏����e��m�#�;󛽌g�3_�����qZ4�m�};����e��ȃzU쿽�3c�3��'���?���jܲ~����w�oih��hȁ-����Y����1�غ�89`n��[�~Ђ�����~�!���~V0[1M�?+n��`㫒[9s���qs~gMg��t��I^Ng��������E ���[
endstream
endobj
74 0 obj
<</Filter/FlateDecode/Length 306>>stream
h�TQMo� ��+|���$k#�HS�J9�Ck�;!Ni!������-�x~�#6�5���~2\�l�q��� �x,	�`��-�f�8%.�cc�	�b�����/�z��z/���ߡ�	VG��A�����hȠ��Þ�ݓv�zD��CǋC��.�Ϙ:��6�=!(�ՠ*��v�cl�2��|jϒ2�� \$\����=�r1Lm�^fR\D,��J��jF����W�VrDUr�GC8o�#���2��;�K�@��}PlA8����g�<n�3g侀qh�s�g���\��B��b� ޣ��
endstream
endobj
75 0 obj
<</BaseFont/FAFONG+HelveticaNeueLTStd-BlkCn/Encoding 76 0 R /FirstChar 32/FontDescriptor 77 0 R /LastChar 52/Subtype/Type1/ToUnicode 79 0 R /Type/Font/Widths[ 260 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 520 520 500 500 520]>>
endobj
76 0 obj
<</Differences[ 32/space 48/zero/one 52/four]/Type/Encoding>>
endobj
77 0 obj
<</Ascent 0/CapHeight 0/CharSet(/R/S/four/hyphen/one/space/zero)/Descent 0/Flags 262148/FontBBox[ -165 -230 1099 972]/FontFile3 78 0 R /FontName/FAFONG+HelveticaNeueLTStd-BlkCn/ItalicAngle 0/StemH 134/StemV 180/Type/FontDescriptor>>
endobj
78 0 obj
<</Filter/FlateDecode/Length 877/Subtype/Type1C>>stream
H�tPhe�K���#M�RN�|cf��Sl(5�$�p��ڍ�x�}Mn�/��d����a�4
s�ve]݄m�?:Т��"h��T��n��^�������x��y��}xxy����<Ob�؞���q�)Q�Hj	Z����,}�@f|G���d?�ہ6�1�l?���^�X����V���[k��s;fܯܟ���B���Ezz{�Cd[w�6���M�fM�3�̳B�iջH4�!�Z&�GM�J��q�a�XL�iVc�$?���fF)KQF^`��xV3�i#Gs$:"��d�h%�)����9���J�|1�&��\�*�F���d0;-���V&NJFS���9KF�$)�4�?\d��I���̮�bC�-��D�c�{:��k����=�m�֕vs{�1�2�����~PY��.�Nݼ讴�'W�6O
�~-c?�<����E��bS�C?:\�?�[[̇�>��yXvσ!�2�pY�M�d���� ឃ{26V"���
4�Y�0�#l��f�|�B�1Sآ�1q�т��p_��+�%��u���ӱz�|搅�[J�4K�#�NP��~��>7tÜ�l������S�	й�n;�#ZͰ��G�4|~�ſ� .�D�^�pX�3��L)<$f+�g�
/��W߬�Q�^�W>��������Sb௟޻�tG��q�����W���g/dƁ���[��s��<��y��0
Á�����[c����߇����X�k��FE/f���b�og1�D|������B��x=���^�D
ܼ2�ւ�oR
\���^��:�|8��t�˚8�v<����3�Ӿ7����:P�C|��SS�j�������Co{}��#v^�G� l��
endstream
endobj
79 0 obj
<</Filter/FlateDecode/Length 240>>stream
h�TP�n� ��{L���,U�*�д���	�]���}�i��230=�����5z�a��:q�s�7�.�X����zThw˔pl]�AJB�28���Ó8�=Зh0Z7����?�A7���#������U����Q�B�% ���͆78�1*7 H��ǇЙ�����O��d,Ry�ɺ����\��|e���b屒�ݾ�c�?��U�ųux�5�P,�I� ��z�
endstream
endobj
80 0 obj
<</BaseFont/FAFONH+HelveticaNeueLTStd-BdOu/Encoding 81 0 R /FirstChar 48/FontDescriptor 82 0 R /LastChar 50/Subtype/Type1/ToUnicode 84 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
81 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
82 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 83 0 R /FontName/FAFONH+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
83 0 obj
<</Filter/FlateDecode/Length 779/Subtype/Type1C>>stream
H�tP]LW�v����l(��e�(��1�
5��`�Hgw.�����������@BT� A�a�hlZ�&%>���PM�SMjS�����Ҝ��D�h����;�~�~9��p�G�҆���-M�M4�O�WZh�6kg���Ѵ��3������旜�� �D{���K�g3�my�:��S��y�yV������%���F�*��Hd/�W�%��єE�q��3L�Q���'���X��Z��w����"
a��Ҕb����4�&c�LP�2��ޔbŻ5�ꤾ��Ёx2mi�4�!I-Nu���u�F:�M�5�`�>�A�T�iLŚ*���$�dwi҄�}�\��$NM��ړ65K��L3t�rOC�1w�>�Ү����O��iZ<��gph��oF�l�`��\�2?(�Y�'a�zṈ�J����//v��P����/���e�V����N��;66�� :aY�е��3���jaȪ���� TʂX;]\���Z��͖�ǢX+��^Cx	�Ȑ��%����d.�.�5P�d!	k�&�fene(�"�r�-�Nۧ�TD�����Vi����� ޅ��XM��)EK�2>�M����7����9��1<,����?�V��W?7���q����o���{�����+c�s/��ƺ�#�+qn����8v���KP���������@����#򦓲���ī��I�M��1�/���e����%�� ��,���/ʭ�7\>�0vލI���0_87���Z� �S~
endstream
endobj
84 0 obj
<</Filter/FlateDecode/Length 226>>stream
h�T��n� ��<���z��k�4u��C�i�v��dH ���u����c��y���Q0=&���sX� �pt	֙�e5�IG���9���!@�2���9�
��:���^<%����k���%�o��'�X?�u��	�����d͛�F�8Gm��ڃP9H����;q̗&v�"/�e/��VQn(�|x2Q�[;Q�#��Y1��n��G� ��m�
endstream
endobj
85 0 obj
<</BaseFont/FAFONI+HelveticaNeueLTStd-Blk/Encoding 86 0 R /FirstChar 50/FontDescriptor 87 0 R /LastChar 50/Subtype/Type1/ToUnicode 89 0 R /Type/Font/Widths[ 668]>>
endobj
86 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
87 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 88 0 R /FontName/FAFONI+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
88 0 obj
<</Filter/FlateDecode/Length 531/Subtype/Type1C>>stream
H�tPAhA�M�M�!�%�Ə*k��@��)Ĵi��H`�;M������o��l^[�"�ŠPz���7B��L:��ۃxqo������B�'���f���+9������l�_.Y��Y��M\b�"�����)�����&�b��;����~Gb��t��,��J&c.���x#�x<ը (9��&��A��-��@F�`�3���LDZ^�o0�&�`YE
���Xq{XEZ�*"p��J�!�J
�H��\�SE�M�B�V�n"�1�j
�X7,��\R!2q`�Q��@�Uh��)	�b7'qMXKv�U�`SŊ�
ݜ��--{Kn��V�sD��>Q,l�v��~�E���N���öD_��O���)q�_"��np(��9MsWK�s�c�S�A�C�,D�'�H���/�t����ݽɏ��âQ�/&�O?(��_�Fف���&ѳ{tv�f���<����|��x�M4�,:�ns�hP~�k4ٓ�vo�l�����ҭ�Aw��~�N�����B�? ���
endstream
endobj
89 0 obj
<</Filter/FlateDecode/Length 218>>stream
h�TP�j�0��+tl��I�c��A�F����JfXd�8��}m7�6�$����$�KK6��`�;�[2���Y#\p�e��V9�Qy���-S����A]y��x��s���~WlA��A�4��\~~�F7{��#R���B�ʿ�A�a�B��#T�.W���FV4 �OUsH�?vg\z��X�&�"&g�nb��:��%�별��>�O����  g|k�
endstream
endobj
90 0 obj
<</BaseFont/FAFONJ+ITCFranklinGothicStd-Demi/Encoding 91 0 R /FirstChar 32/FontDescriptor 92 0 R /LastChar 120/Subtype/Type1/ToUnicode 94 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 660 600 540 660 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 500 500 260 820 540 540 500 500 340 500 380 540 480 500 540]>>
endobj
91 0 obj
<</Differences[ 32/space 46/period 73/I 82/R/S/T/U 97/a 99/c/d/e 105/i 108/l/m/n/o 114/r 116/t/u/v 120/x]/Type/Encoding>>
endobj
92 0 obj
<</Ascent 716/CapHeight 719/CharSet(/I/R/S/T/U/a/c/d/e/f/i/l/m/n/o/period/r/s/space/t/u/v/x)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 93 0 R /FontName/FAFONJ+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
93 0 obj
<</Filter/FlateDecode/Length 1917/Subtype/Type1C>>stream
H�tTkPW���(�Cm���N�;
*�pM,��`���"Iqd��q���8@�l���1�Q5Ԕ.�BQwM��L��d�\�ir�ڽM�_[[���=�����|}�%	�$�$��V,[�>fu���6}V�ɘ��žø-Ξ>g��l��ސ8R
VH��WK�JFտ������S�����>���$[;�݌�X�lƌv1��7�8�oEL����bļy��-i1./�n0爫��YlV�Mo7����L�F�p��ѐc�9�M�L|IM���h���͐a�(6C�h���
f�-S�lǘx3Ko7Z��&1>�jخ�f��{ޞ+'�"N��Qb�a��O� � �DADR�� �S�j�XGq
"� ~�u$��m�n�r�Gޘ?�c��(��@��hS�B�ҵ�#&�Id>�蕞��x��KU(�ұ��R�р-�:F$��j���Zv�I�X�b�mF���WH���R��0r�)��0��X�x�1�s�7 ��]c:5����%�q�� ���G�G
��s�a�T�O�n97|O3h���Ol^Wá�	���~�@~�pl��,�Ƽ'3{7���Q����7lr�JJ� �3=,��.�C
��gu!nm�}���f�[�A!��J��޽⍚�1�[�'x��<�i���8�Ɓ�i<�'\>�q}P��K�'�c顸����
��˗���i��1�<␺!���8k�0�z��n���c�����u'y	tP<%=����#����]&��Lqer��֟t�[+�wh�H��dT/�:�O���x���a_��e����5��%����� BTRU�^o��Y.���?��?��vC'"�4�@ ���=��>�ݗ��7�e�����/,ٰ�g�-e�R��'�f��;��]��U��U֚l�=��V�dT��|v�u��K�i9}�Yc��t�d� 
��!RR%������A~���h4���H�S��@`���::���nA��_ݨ���˞ԭ�E�0�9qNaZ�SaИiQ۝i�p#�f�,4YP� ��H�7nt}�E+_Ũ
��`&j+��y{�-������]��I,H�7<ͣ?�^��Ty�ʡ�a��π^ױ�Ch2
A�?��a��
(��NIݙ���s������n���?o��䚗��|�9�0�`�ԏ�	?ȨF�V�>v���(�4��1�Uq�68����j�;�X�\ -�DZ�v�^'�@KA��V#�����*������L��,������@ �{@�oߴ`���#��Q�����;�?m���	[��R~����lij�{�ˬܹe�N�D�M�b��4Ҝt8��e}�pլo]ɭJ��e���=V����؋���p��f������?�����-IP3�d�W\���ϘS���ez�j��t�!X��'x��l�?i1DPpDjR����E3��;��=�	�0B��*C�'<�;�C���m���*a���{���r儢���+��Е�Blf��yU'hY[��9�`ӫ���V9��<�;���+���$��Ɏէ�"��֜N��:�|Z��Rھߨ1ĸ,)�/�x�ʣ��s������p����2�D<�t��k�pʙ��+�.��8������J5j�+���*D����-�3��Ċ�3F��I��.����6(�,?���[�~Ӡ �@b��tg�8Gc�J�A�WN3�:�]����BK�N.��3�[lRir�;�ֶϋ/rC�>��pG�F��[�uR:%��Z���hd��f�����>t;��I6HnJ�+ǩ���_<��00�E���i�?!�9��a	��@3������G_aLW�b��֌o�c����#{vz}���+�|���F�ɕ�J�s����  �&��
endstream
endobj
94 0 obj
<</Filter/FlateDecode/Length 294>>stream
h�TQMO�0��W�q�
���p�#���H"�)p��;mqU��7}o�+��Z�3�7;�gh{�,N�b%��^C���弭�W� 'q�N3�nG(
�ߩ9�v�ݽ�O�>��j�^w�;��"�Ř/P�AY���Y�1 �?���i5�_��o�
'#$Z�;�"�J(�P��=v�K+?�eagQ!�?N�<�<��
���?$Sa~��ǒ���=��F�d�ߙ9U~K8a"�#�@T�7u'Ƀy��;w6�5-�XKA�;�A��z��k4�q���}0 ��

endstream
endobj
95 0 obj
<</BaseFont/FAFOOJ+HelveticaNeueLTStd-Bd/Encoding 96 0 R /FirstChar 32/FontDescriptor 97 0 R /LastChar 144/Subtype/Type1/ToUnicode 99 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 371 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 685 704 741 741 648 593 759 741 295 500 500 500 500 741 778 667 500 722 649 611 741 500 944 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 278 574 258 906 593 611 611 500 389 537 352 593 520 814 537 519 519 500 500 500 500 500 500 500 500 500 1000 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
96 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F/G/H/I 78/N/O/P 82/R/S/T/U 87/W 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y/z 132/emdash 144/quoteright]/Type/Encoding>>
endobj
97 0 obj
<</Ascent 716/CapHeight 719/CharSet(/A/B/C/D/E/F/G/H/I/N/O/P/R/S/T/U/W/Y/a/asterisk/b/c/colon/comma/d/e/eight/emdash/f/five/four/g/h/hyphen/i/j/k/l/m/n/nine/o/one/p/parenleft/parenright/period/quoteright/r/s/seven/six/slash/space/t/three/two/u/v/w/x/y/z/zero)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 98 0 R /FontName/FAFOOJ+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
98 0 obj
<</Filter/FlateDecode/Length 4085/Subtype/Type1C>>stream
H�lT{PS��1�K@�Q�,��+�`���QWD�CWECr�(/ޫ�1vd����Ѫ�v*���¢��7(�ֺ;�n��N�nu4��a�~]�i���<�|����)�a�B�M�&ef�N�+U��N�-C�Ӳ���	�`�dPH�|�N
���4,yu��]%1Z)ldH��@FIC1ϙ*F�.-�q9
��e��(:Z�Fs�/X����U�.��BJ���UV겕���ZT$,�����-�*�÷��[�	�.�C,��V�+��!勮�%$�*쫋mn{��D,��Q�Xm/�p;+Ţ��iKܢC(/t�V
iΒ��2�.�]6W��\�?7J��8�b[�@Q��'��N��.��mt^U�r�N{�������-�$8ĕ�_D���a4J&�e�4L�0Ƭd�2�4�I�2Y��a���L&�f3�E�BTlP�(��R�]��r�U�ϧ*F��Q] z��l"�U����׫ok������M���o���-~7�G�~���
������؀���/�,v;+i��
�~������*=nU�1�U��#�
��#�/q8>Q�#��s o�$�Ck��tO�6N^��cY�"�(z L�#]�I���ŵ��7�;{��k ��,�'W�W�h�v�6PʙQ���8!�Z1�.���X!�	��G�t����L���T���L�qK ��F�#�p�a���`�-D��Q�Y�U
��>���H��Se3A�N��s�������k*�j�Tl��&e���x�V�6kf����F��`�A%�
�U��9e;rpX<G���P�+z0Ɇ���*6T)6H��
��6��ּ|�M��aPKi탗?3A �{p��=�J͌���� ����g%̠j�У���y_�����J�I!�8T��B�3ң q0h
�
�J�(�cE��Vi6w��/�v����L~wE�
,�I[p�F�N�}K���=�ۢ�m�p�E0���]�3�P��>6�U�WWB�����tf!Rw�����3&eI�O,b��:
'׽��BA�
D��w�]����Q�Nv���rw0�Dm/�`xL$���ҿ�x{���s��j�y}��C�a
�Byw�A	]z���G�#YPG��`�
�Т_L#����V>�z��� �E��4����*E�<�����'�Y�jM_~�s3�a#<��B0���a�{^4f�u��z�A0���M�^����N~a�����>0��Y���o�EL��4�)�`���K+O��3
ɋ˳|�Gug[#�Z�ڗ}ʏCw�pJJ�#59����{��6?��.
l�\�#!J���S&�� ���z��4��v
Dd~
� Fi(J/�������;!U�Q0�l ��-�Vv�����s�s�,Z���u�ߨk��׸�#Y=��z�jI���0:�
����qo鵩�ɩ<ӽ�����L��ٗ ���������l=r���e��/X�y�qP�v��u�+���jw=H� ,�
�h�Y �X��#Q�c�w�?���;�Qz��s���xO�꽏��n�)8qf�L\����jSWO_sjj�ʌY�ܬ��m��iX:y94a���=�-3���*��L�f=��9�{�9�ӻ��p2�����<�_�0��Wh��b/L6��F��P&���>f��K���y�A�c,O	�^�	���]��^'u��Hˍ`x'���>&�E�m�3�]�<�	����jR�ҥ,��M\�z�P��ΰf��~I�x�"���L4�����V��v:��ӳ0�<����|�����Ѱ�z� P�e��ȃ)�P>�Zc1�'e��(v
@c!�u@j��A�>���S����s�.��~I--o-�_B�j��O�������������)W���Vz��^�c;�B<ѵDn��=�Hݺ�?c?"0��p�������w�ҦP:(�ƪ!��?��f�2�K�Ԉ��8��?�W9�[��|K��#�"���!�:�R
�D��	���*�����#yR
u\.�ҵ�����]��]�aM�Y��
[�XC����֑Q,� R�Z-���2�
�T[
��L�( "�l:"u�۸�U�A����SE@��(�2VŜKO�̜�,�G���~�w��������%��3��A/|=��k�@ܒp�"ɧ�2�g��(�J��AD�nf��,㭁���_O�N�*��w�Jp�EgT���J�E�-i�'�8�y�ٖ�Y�۫3��p+�Onٚ��#����v�%�n����'֘#����q2/���"x�4��mu��V�n�W^�WE��
C��AU�
dmN;�2��j����>��+�Qf�_Ǳ�C)
G�ޑ��"�X�"�SMis$m�i�q�,$A6S�!��d���$j��D�I8z��j��?���dNt�ŏ\��F�6�鎤����`<���90�`�$@M�s~�P�4��ϣ�sG��cx�Le&��r�cbN��J��lj��)PG�?�y,��a����<	�8	�r�C�s:'D���Z�C*�(Պ��[�-Ջj�z��l�tv�Ŭ�n8�GW�{��V�x:cflXN�&9ps���#�,��Xr�ZҦd��J�Ms�Q������T�q��Q$3<��K���t��.hw@L�Zz�V��Z�����lM\ŵn�OA�q��Q11�ǯ��P@�S���]�p�iY��ono?$Q(:�p@C�4|��t��ǡ'�D�h���'�p������_]{����_9�:6_��XR2�Hb�F�3`����j֡�"�GP�Ȳ���Fҏ��euUR6o�x�����e��-]�'����	�*s�|������
�.���0�Gt�ww��I_��X�"N����mr����C7;�K#d��n�w:Tt^���n��
�Lq�}%;�%�sM���r֋�7#@^b���I8�n��5�Ah�- j)�)�:�S�V�Usu弃�D|9ԣ��t؄��C�r�4~J������j6�8�G�<�|���0�C��{� K�7MGo�<�M6MYb�A+&⁘d��"�Jm�2���LS��%�&�+
x/��q�oZb�Kۡ�j-8}hwa�c������ZHh���hF�|m�[�%-JA��ZTl-��/���I48�4�[�ǵ��f�dH��[���Q}/`ڞ���yf�/א�I�qp
��\��ؔ��39E�.!�/��_�b�At\�b��C�D���i/�5P����}�;��gIx��S��E�-�����#�Ї_�A�s�H
�زhq�����d+��&�5���{�@.���7�����k��FQú{ $��<?��0�]H��z�B � .hB�]0�]�lm�BBB׆�z�ڶ��^�EA8Ě�v #��t���;���G��� ¸ۤF$3��1f��9+Y��(t��&�ji�����m]�������iͤ�t��C1��5�of?h�bL絶��n=+9`�^ i�W���dl��*���ױ�?���n'RS��M1�
�u8|7�'���q�=+�/�ퟔwI����K�7�������w9�ȯD߀�k�~(?�pe�b��yi���}ڰ�����Z��]���~6��~���-��n'w�"kW�j����;6�oo������~T�tpۭ���SB���xC���OwHPM�W�>a�qW��rxmJ$Px8��gU�J�Z�˶U���<�p,Q�B�� �kw��Q�^`kG������S%>����8$�¶�ῇ�4T�cF�����~�d�N�z�+;.�T�(y�
�!2�X��b �y�@+'�����#�Z)e�,����uGJ��'��_���e�e�{�n��n�Ymb��#mDw/�t@�CU�Xԥ>�Ł�x�ru��9}dk��8�x*��MQ��Y��M��^H�|��ٛP�I���NJ��;�
5��d��{���a���������P��B�� ޽��	0 
�U	
endstream
endobj
99 0 obj
<</Filter/FlateDecode/Length 308>>stream
h�T�Mo�0���
;�`P����n�8�Ck�{L�4B�����Y�!�<ym�G��ʶ#�Wߛ#�д��8��7g����֌�iYM�(*>�È]e��"PoF?��ny���mx����[{��)z� �89���B(K��	��I�g�!�?տ������m�5N��^�8,��iA[���T��} �aH[P��´��9�>)�2J�ٔ�t�^]�O�D�9I�I0ķZ�	ID�H1	H�J3�7��J1	;.�$c�%gdbJ,�H��|3�A��{��r}�yz���
����
� �R�j
endstream
endobj
100 0 obj
<</BaseFont/FAFPAJ+HelveticaNeueLTStd-It/Encoding 101 0 R /FirstChar 32/FontDescriptor 102 0 R /LastChar 121/Subtype/Type1/ToUnicode 104 0 R /Type/Font/Widths[ 278 571 571 571 571 571 571 571 571 571 571 571 571 571 278 333 556 556 571 571 556 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 704 571 574 571 571 571 571 571 571 571 571 571 648 571 571 648 571 571 571 571 571 571 571 571 571 571 571 571 571 519 571 537 593 537 571 574 571 222 571 571 571 852 556 574 571 571 333 481 315 556 481 759 571 481]>>
endobj
101 0 obj
<</Differences[ 32/space 46/period/slash/zero/one 52/four 68/D 70/F 80/P 83/S 97/a 99/c/d/e 103/g 105/i 109/m/n/o 114/r/s/t/u/v/w 121/y]/Type/Encoding>>
endobj
102 0 obj
<</Ascent 716/CapHeight 0/CharSet(/C/D/F/P/R/S/a/c/d/e/four/g/h/i/m/n/o/one/period/r/s/slash/space/t/u/v/w/y/zero)/Descent -168/Flags 68/FontBBox[ -166 -214 1106 957]/FontFile3 103 0 R /FontName/FAFPAJ+HelveticaNeueLTStd-It/ItalicAngle -12/StemH 75/StemV 85/Type/FontDescriptor>>
endobj
103 0 obj
<</Filter/FlateDecode/Length 2441/Subtype/Type1C>>stream
H��UiTW���Kkh�Үr_@¢����%�Q0���Vh�i�FP#��"���%hԁ(*�qETl�i��G��8�&��2'S�'�k~�9u^�[�.߽���h�AF�4=8$0dn`�[�6%Sk�iԳ��Șhc�p�]a���� ��^2qP/V���p�>gDy��#�z,s��7�W������&�nI�Q�<i���N��^}�oOOo!01-A+D�ҍ��t!\�I3,O3���D!0%E���Q�t�!����]���u�6UmX&�%Ig�DmJ�ְDk�
�e��tM�N�����6[�����Ԧ���F�O�&
�dCZƒd!R�O3��k�M�Am0	��	a�Z�(��M��Ҡ]��p$#�^�h
F��^�aХ'�4F]�>��Ӑ����B�6��Q�
MQ}�KQ�ijEyQ�MQT��
�Q�eT4C�Q��^�P*�RS9�E�gz$�I�ӏdekd�ˋ��n_3Lcb������8ѱ��㿝*r6�_��︈E��v؄�Y�r:	
x���U��Ew��%���X��[�g��J��. 'U gPNX�9�}~m�)�� p�}>Dyf��Lx����.�5���_��}p����/|��W=�e�\�������O��Ĕ`T�}��6��u�8�},N��#|��P��bie��]u�s")���.���������=�	��u��ԁ�T��q䵘�L']���ʙ��
� ��h����D�M.^�u,�S���/��
^�LX��#x����z`��x\�� G'��o_��:��6XĳZ���e.PC &@ �i���7��SXp'�}l�P�!����D�+ea�@��.��lm�
,<&�->&M�ň=�B�R��*)7Z�R
t�֭|H&�����K�-��Qb��-"-�>��sF�(^I��-Pbq��[l�N��`!��i��^����`p���
�����W��ߠ*��i^�
����k�[��n���T�������
C�4`o�J �K�\i[e����C� n`������80UC��F��
F�y;�Ҋ W7�ot�r�-*w����g�cn�(�7����w�f��,�mw���~ݞ�L�J"��3ӫ�p�*7�޼��Z��z�����N%$oa���D�E�q����U�|d���ިn���E�h
���HV��8�u�]�OO��4שJ���Қ�ʪҲ���hm~�Z.7���j�����#0��R�����;�Q(�:�>"�g��\,��X�U�w;�f���4	��a�|z�$2}^|羴��m�_��<����y�����r�mU6�_�@n� ܓ���
�1�zh�?Q��m�D��bҞ5m$��C0 �����~vϭ�|	Qf��C3�4�[��f�����n��^	
Z�?`7�,��q��a���J
�a�W3��πyyH�ʗ�L_�ȅD4Z*7V�T�RK'���YT��3�j���o���nHӠ糓��������W�zO%�#
��S�Jw�X���uU�� ���n�q��'�k�Ru���~���+�� N�1gW{�T4t��z�;d~=�W��8����}���F�>Vy���\�c�v5�x����&��qc�im|a6�+i�f����c�]_|ybl��e�ǫ�K�A5�K]2���,`�����(q�tJ�e'��a�O�H��V���"��ݮv���-���o�:s�������u�
?����`oũm'j
�?x�h3�x4U���P������Vha���:��$�pPH�6F���*�:��H��_\�(��<`�ş���?���R&��]?2���������*����m0\:OF���a��#�U廞�Oy� �0
T��Q��H�'NSIW�k�s	V����4�ʏm?�푁5
u�5mw*ݻu�>��b��r~��d��������5���֙BB7�5V��Z��k"E��ޣO���}�6�-�}�J�ٖ֖�:72+&8���%r�������7��Ð��Z^�Z������箜K�[(A�^�]��y�q�3�����e��e5a�v`}���W:�;�k�<T��?���ܬ��m���U҅E��M��3]���#���f_cUU���D#4���s~���{�i����td�=s'o�'��!`:�����֔R)�]�o.]\}t�0+T۲�����'ج�?"�~4
����?N�|�ÉՐ�ꟙ�πiо��Y������B[~�
G��(��;�>Py�}Vm��~`N6�c�v��)�p�w�j��lK���*W��i�3˾�m��qFxǏ^�Qzl�s�z��z
؞��nʚU^Z�*]S6qr��pE�����ً��K?�x��Vy�*9��3g��7�w�t��K'�����t�k\���@ � ]k��
endstream
endobj
104 0 obj
<</Filter/FlateDecode/Length 307>>stream
h�T�Mk�0���:v��|��	�v������JX㤇���V�m�D�-�"��~�����O��t�5���5�	��B���r=ů[���y�qo�	����/������^'w _�A?�V����.g�pD�@M;!�O�{nG�'��u�8�,��k��ٵ}k{�%
�z� Z��'҄SN��l���$!#T^D&#T�\D��+���_��9q�F&C\3ׁ7�⚙��Ʈ?�p*C
�Y-{
�JU�L,e�E��������,�ra aG����4���8�0���m�nral�� �2�
endstream
endobj
105 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
106 0 obj
<</BaseFont/Courier/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
107 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 108 0 R  6 0 R  109 0 R  8 0 R  110 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ColorSpace<</Cs8 111 0 R >>/ExtGState<</GS1 68 0 R /GS2 69 0 R >>/Font<</F1 70 0 R /F6 95 0 R /F7 100 0 R /Xi14 106 0 R /Xi17 23 0 R /Xi21 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
108 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
109 0 obj
<</Filter/FlateDecode/Length 5564>>stream
x��][sܸ�~ׯ��]%�č �ej���zR�qFJm��<�ݔ�I_����؟�sp#	�$(i7���@�\����~����Y5����?�Չ��9�$�O��?|<���]���kl�?�\���ސ���
���Dɂ�v���BR��;l/�/�D����]�X;X?�g
�nn����7;"3*X��ˬ���|�뛟�\9���}y��o7�\|��h'$E�U���Ī�w�<K�YEU��%a,>�s��!���~.���w�稀k��Ue��1=�J�LA�hff~S����51w̱����f�9���R߸t�>��$�XY�Y�BwTY���~�<;y�^����˛SӐ��t>>�Λ����mF��5���-L��;����_��p!x0/�<i�f�����0V���8%d��KR�1rl.n/r`��t��D�
g\�z3.K*:yVX��r� ���3��\B��BD��<����a���B�<�<��y��[U�IA��
��4\��FүP#��{���D&¢��ݬB�)q8�n��2�3ˆ�"JfH�E�d;\��$��q"��q��
�啠��=-!�&8f�\�y-s��Z�	^��K�m@�U�G����0��*�'@`Q?�������]�~�6�]��f�n�)�'c�V*�~g���U&�=["��L�W���
���e��#�I�I<"��K;G�6T��^��`O�z��*�p5)`-d%��8��E�H"�kq�@���Ε�S0�T��$����$zɇ$����ʿ,Q�-�U�
��n�]�3,+m���}�����]s$��ٯ�=XJ}X�������L� �7X�*��M�.�e�#�Хjn�'P�X�
�݀�b=�X_��[�%���
�Gؐ&�*�>$mN�)�-��D}6T�$��4փ�.��9�/*��G~�
�Y�(�R$����$�O"q��Ek�26.�뇯�c�:��ͨY��-3���Os< �o��� ��_�W��01�!�zQ��:�q5 �g�ĐI�J�X���Kc�R�иX)Xk�2>�����$�ٯ����95�۫fw�=<�@���7 �l�F�=��S���:�C�Q�i���}!��Ŋ@���Dʾ B�������D��O��c�Y�ƞ�z�*ҿ�W��<�yIn	�ʲ���3�Y=g_y-�Wr������5�Lǐ��4��3�(g�U(Ĭ(��������H(�;Q�'�?�J�\_M����<+t������k
8��XU��;��:�s�n��� k�]�������g�쇾J_Ѭl��u��No}T���U���SLW��~'��I�9S��DkOQ���V���A��ί������IC��RxKz����DFAB��S�HW�Gv�Ϊ
�2�%�MdfD
TXZ��qJ<Nt)��\f�loX!����J�W��Y˗KM`j���i|��!P`&����,{3�u��S��F�d��+�Y���J [�z5��ȼU8�X�+�1��9���1� �c����l	�K�E�4��ۘ\-ѥf��˓���+7$�ɤ��q�'=L��B5�1����+kr�;����U��l&2��B��=�h��P��z��)�r�?i��W�7Їq Y��fX;@��y��ύ�=�;�ݏ�%�����1��1h9?�/�7�R%� N���� �y2'Q���w7T�X�T�C�L�V���*��?~�`�W e���fJ�H�iu!qY���)3�{*�jnb�07Ri�n�p�a�.����^����<	7�p�+r�$?mRڹ�W��H^
�R��x�n�1&w���ԝ�Jm��?����	�)+̰\�:	 S;�s��øJF>~z��(�����	��f��o��Q�iF9�v*FT�1�]^�л�(��YY�^�9�ƫWn��n"3��>��Og�T_� �v���
��,�e�`�z��I���'�w�0�d�IR�d��s*�0�9�e3��KhI���̀�yy�Sc�ԛ��s����8�A�=Z'� F���zkP���&Z��T"��`糢�=�Lk?�ă�=�Ya�e�N,���L���kF�e8�v@ߌ�5K_dY��d�~)@i�6���i�7�zO�����a�9?�TIWo�u9��4�&�EN�rD���R7��ɐ�z"U	ɚӑ9�":��:R�%����ޜ��w4���?�1ݐ�Sn�4�O*������ ^V��uaH��.t�>'	6�G4B��qxm��+�	�X����T1�T�lSI�
����QI�gDe�A/��m�-Y��u��ElG�2�$e�XQ�&.VD���P�'J:�u	�&�W]�8 ����"5 U,	N�rXe2��^�N86��u�u�\��H�#�˳*���*;��%�/��DrAB��٧��ǊP��B���B�É!�܄�g�DI�\�4o�DB�DyB7b�3+�V�9� `���V��2�C��1�o�Yi��eYid�T;�u5��:Q
L�ь�Ƥ��,�C�����������P>q����r��n����tk��9�H����;��MQ��$�~����[�Nq���vb8)89Rd�*�����x_o��m��Ї{
�x<��C�W)��p5QK˙|�S�U3A���B�,[���z��:8�Z�5\@�T�-��`*?`�0� ��u!���`V�`&�� |��3��~	RrO+Vm�B�a�v�\	�h݅P�we�^Q�]q��W�(rw�Uc�U�Gs�p�+����9�q��+�:��3��ʑM�I�����Ps��UjKU�b[���ٝ��H϶��i��V��~���us8m�?vOV�
��U�A�7�<ʨC�R�N]XY`�h(��z�~?<�1��}m�$A0�Z!�mʰ$�9bO)}�6���2��+n���
.���ªm�@���b�z��|�����ŷ��m;���^LMt[���]������]Vv!��J�Gq}����]i����~��]�}x���>ɋ7t��,7!�N�B�_��%3%m���}�C�q�-=Ke�e���u�h�h�9�BJJ�l����è�)�ͥ�������iI�@�i]��aR��Ќ�j{�J�%x1��pH�l�ä�>��p�N��v8�9ܞ��33kL�xe���M	6Aw�O��6X���)���1h2
��k+D���Y8�Bs�é�O��i�n��v���~o�i����,|�V�m�������݃��᮴}<x�>�J�ǃ����>-x�>�J�����]i�����쯴}@h�9�+m����qW�>J�svW�>6�����>"������U�����ۍ���0Vb.���D&,���9�t��G�������r�
��H����U���n����1Z�g�CÔU]�KNJ�w�.O����E��V���b���F[���;`��1�������_@�~{l&� XU�Om �U�&��ce�w�L������{em ;��"�]$3��2���px�9כ������z_?]�o�ho��;�"|����1�Oٷ��w��A�40*�mB<!ְ���>V����O�;"S�aZ8�/MH��H<�"�薸��c��f�|{Ĵ���sI}����~���d)=JO�+�c�d�����SRQs�T��a|�m^�Lqj.a*&�NPcI���ll@�XN��i�>�{��)��h�"W}�~ί���S�Y6�u�`n���`x�k ���*���@J�;�h�-��&��#,��.��9m��f��#^w���1�/}8��`|����{��k�'�
��zsZ=�p�}���A0�'}���Gr�栍d�~qe��s�,��~�DUo�<r���Ԉ�z��0qo�&/F�2As��<�.#�����6�|m��Y
I�:#i��v6��Cj~=6��샙�$��Ј�j���:AL��b��5$)�(ᒛ"����iʂ�	�RtF����þ���%M͹knz���Y��|#ڛ�^kx�_��ݬj\,�����7�?�
{d�9����a�ҡ�%����q��U֢\��lV�
�(w
�Ӌ�[��/�m������Lv�'a�U���S�N�R��êJ���J�_ ��[05����Whc���8|�� ,?�򇦹'5Y�t�Xخ�J����~Z;V�R�x���`���ɺ�$��_k�F�jӜ�����L�O`ۯ��ɰ�᫮�o�U�6X��u}vd�������d�L������M!��	|m����%l_��8i�{�D��?<n���Fm��+ݽj9�in/��O�B��\'��01O^Y@��M�Y0H����1�F�F���`m�7�a� �_��
�a�1��:?��ncΓ�r/��w���~ɤ�'%�W�L�vr{D��������B�!\�C�T	��y̚�A.���}�!�D�~�g(�K2��~���[����]���"1�ץ�O�tH6����������F,�c_����X,I��#�)�%?�Όy;�
�:o�]Οe[l��6Ԋ�j�p�ټ�r���<�l�±���T�p��$�� �N8��\�Jk	�Sc�0 9��^�5���6�����荃�>�^�9wjz�[�8s�q�?�j����10�l�A�v��a.�pH�OF��'�9=�ꍚ����zK��f�vP
��-b`���j�ؼ��I�����0u��xA�W�����W��j�̽*��bZ�b����'@ݐ�9�{���� ��'Ty��ǵ>w`
h� �
�����9&��g���X�CKp6R��5���r07PN�l�0�9*�E�S��G��+��8��./AB �%L��:�!�pX5�-?�ˮ��v�bP����p���lI�^��)܄섨�Ռ)<��P�,�|�Z�n����w�H��ϰ�o�R������d�L��i|�DuFt���_K�:'j�� �:���z�h)�U
]z:�@��*5�;xgpU�w
��Y�͔f�e��E�Kd8��I�)Q�TI?�R&�z].�O�RM
��M�G�ET�g�*���X�]���O�.��?�2I���������%�h_�ݯv��  �x��ă���x8=a���[[�}�g����۰(i,K�p��Bp�����K��P��?k��?o����'Ƙ�jGR�Ϊ
i��j_�b��w)^d�8S�Z�ə���4q�#�'��%UtE쌓Eb��X͌��dO�Yw�����S(cj1���O����8�MC䁟�Y��"�m(V"�T�F*mX��{�V��O���H
mx��XL:�R�:b��v�ӹ��TRHLG�XB�z�%Pfr����X
�g�X%�_��O0�"*�,�`(ɌV�s޳M��]���E��/g�i�?F�Q���{?��d� (
�W�#��ޟJ��R�_�Ei3i����q����tҹ�3���E�����Tj���@�Xw���ox�$���6KHi�$X����4�v�lQw����1��ˈ��ae�_0�\Y2�rf�˝%C,�&�t��o ? �
endstream
endobj
110 0 obj
<</Filter/FlateDecode/Length 506>>stream
x���Ok�0����5E+�F#�)>,�%�ݒC���SR6a�����wd�I��(�bo��{���U�1�W��(�'���|Zë��
�'m��7]���5(���9�Y6�����7͉���t&���[��/j Tk���Ts�B�Fٲ�1VY͇�%�L[�0�0�l��*F�F��^a%rIʑ���(�����(�����(��K��Tð_����0,��%�b�PňP�@�kf�_ ̒�v�;�|��<l7����@L5dr
�4��'r�q�&1H���5<=D�g@ô<
��	R�9�ڝi
�F�TO�h�F�[k5d�����z�꺏��}wy������m��k��f�S�����T�0C��?
.��~�k�NDn����;�J�A����U�cg��~F���PF����?�n���;�<���b7����G�$=�^���r���.� �8p�\��d�$_�lC�M����OB���X�?��}T�j�;����W�_��V�
endstream
endobj
111 0 obj
[/Separation/Black/DeviceCMYK 11 0 R ]
endobj
112 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 113 0 R  6 0 R  114 0 R  8 0 R  115 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 116 0 R >>/Font<</F1 117 0 R /F2 122 0 R /F3 127 0 R /F4 132 0 R /F5 137 0 R /F6 142 0 R /FXF1 147 0 R /Xi25 106 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
113 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
114 0 obj
<</Filter/FlateDecode/Length 3482>>stream
x��[Ys�6~ׯ��Te�`�d��&�^K�Tj�3b�!�$ǲ��Û�׵r�u�@��7�ߪ�Q�~΂��Ay��������Ot}�������#��/�B(�	�a�Q�7ݟ9�2��⳻��7�g�7�eJz��
��o��Z~��#{�o�G�o�}~w��wo��P\����3�<��;�B,)����&���Z�<\�w�g'��a�&H��ü��
-7J��f��c��;�y��̪�1K��q+�0��~ZF��X�+������.�K��/��l�"J� F�$a�W(H6�j��1/�*)rT��'C&]�G����E)0��S�� V�b��>���q��%%
�fd��w(��7��[u2�]�nQ��}������OX$e��%)T�������НʴUOv��&#����!
�fǕ�I�l0��a.E��&Km�*� |҂mT������+�f�Ϸ�p��K��� m���SM\��Uڃ��+Mx~~�Q��]���^B��z�1
�K�zma�(ɋ�j]ȍh1�A��>�'����Rr@��QW�I���V&�����M������J��>Pj���T"���t�bD8㗎#ظu��p���[ڰ�(���B�(_[�@I�ʹ�/G����M�a��&ΰt��9�#��!�m�ZC7箄��K�
���<�@�S���4YP�I����SҢ�;��{���m�;`�w6�gz�P���f��c/(9�UVo|��y��`�D�L�mϦ�@q���������]s�}^y��;�/�İ�r\z9O���9��ZS�B�H`��$��k�q0"x��l|�
�b��5bǼ֩�J�~�
�o�c�@��c��_�0S�Nn�#�nsA�l^�s0�"NC�BT��"�����"�FB�Lk���טUjw�7�s!�
���ρ`f�GwfA��]Gs0�*LǄ�a�;��l�8��.L�ư+y�Ih0
�U���`U�Umz�s 0�c��1�1KB^"�����Jma\̌�n�
1s����b"˔�q$с�=_?��M �^Ǡ`�ˀϔ�e�j�;J�hi�D_���Y�oQ�˔2�ܷR�8�p�S��q'��d��ڣ4� �u�2^t�Y���
�aV��K$ߛ�7�Ct�Sڦ;m9o�y��<�=���<Ns/FU�v>����uϮ@�ӆ5��\�����tq+\�@���g���Ax���M��2����F����h��E$���p��͠Ieǝ,�D�9�LK$+p�q�>S�8q_�:�~>
�'�U�͠ ��2I�+��/A\D
�]�%*˟��v��4;��������:�PE8��w��Rz��3�q����X봖H�xMB5��(RV�Q�:V���M�t���x���1ɑd�ƚ���|����-Q���P���Y�G	�:��(����!N_L XT��yAw��-�v���nk�d���$*�%fD-��u[��:���Rt)
�n��<c�� 	gu�V(=(�͒��*�;��:���[4F�e�
�̗�ziC����c�7;�A�49�� >$�$��겋�ƿ%�-�C��rj�$�"h���w��n?:ڧ����;�e�YS�5)�ɮu�v"�枿*�.����C����M��b��:|�V�4f
?��XB� �yO5c�]c�1f�h,a����V����HI�(^�'뒕�Sg �D�:HB�eЀrs��~�p��&=n�v5b��w3Kx,���L-q�p�>W������L�5��v	RA��M���oae(@���}Y�P�y��t�3q졡��{��
[9	N$'\i3�Cþ�������ӏ����m��udهB��T�jR[�3��RH�ݾ���:���9Sbۂh4d���v�#�5&��mWwk�]����r��Օ�t��
N����� ���єȻI<�� ���*��.�n��F7R��J6��xqn��Mh��݄�%{ڒ��� "��0�S9�4�Ư��}s,^�!x��ޛm�B�ٵ
�m۠Aa���͢%'�4�B�'{$��oM"�1��V�1~�dK��:�1�ҥ�£�������nWV2�A�ϕ=n�Z�k�I�8$}��H%�`g�>3uq��mT�Y�U�mW�#Ç%�2K$v�0�#7��0m��A����IT�4���C9��Ü��9+W�uV+�������<�#At��V�Q
��e�F�p���{�CI����A�g���Jڃ�r3�?��E[����֢�ft`�K�0v	�G���,��X�g�)c��c}Pk�w��F~�N�^\r���_\�.��a2v^�h���R�-�[��[$�-VO��VjJ<�)�u���r����pW-i���e�B�>YP��W� .���w��h�&�:;?!���%�	���s��"�Cg�^G^��r��z����x���y��=Ԟv9f�d�3+��p ������Y�@�}k�rm�\$�O.[�:�T'{��Sj����A��A���y������<�'��Z�`�E����[�cV�̱T�x�;�tX#� d9%� �Ww�IV@��<�@�����xחI���M�A�a2P��	�z��;�az���Ixjj���6��k�v���l��R�����lܙ��4.��l�t§4�h��"�*��g��.�]�f�fd����0�=w&�`
.�`
,+��PaRx��l���_
4u���?bn�t�����҂���H�߫M�=�W��Ty{�ħM�nH:9`9��D$0����h�ᦾ>�p�a�v!\$�r��@�E�xR���2z�����Y��Q�\����Q������Y���Z>���uR�T��:�Q%&�	�䨛;���|9q��ۨ��2��3�s�C8���=�49ٗEk^�u�ż��Y��C����B�5�g�r�®]����a)Y̨A�'k/DO3B����G�Sy}p���:4�Aꉟ����ӆf�|��5��o�ёy���Hb_��d+K�^�L�y�����2�8G����;�v��4t�oJ.c^�)*^�=�2��4܋��V����5@�:�s�s�ƪO��kpêF�:}��G�i�(C>�G��Acl
0����f=��K�J/���H���u`��lL�ΑP�������oJ�:r}��	-j�T��Q69��Hb?@9��\�e��E��T�Q,0T�� �t��?�;�8��t���6Ҡ&������rѓn��,�O��4ٺ�7���[�(�G�%3"#��0��$�&H��⨧o��62�[�:�Va˩�T��f��'�)+Ft�6-�P�B��|�-!��B�8fI���#��]�2��6�p[��%F��?J��\w�v�'��]��qAx]��S�u.��˫����Yt:l
endstream
endobj
115 0 obj
<</Filter/FlateDecode/Length 123>>stream
x��̱�@��O�Q��������4Q���l��"2��	�?}���v��r�����fR�9�?`�����m�l}��L0%[PT-C(9�����Ċ⌬`�B���%	T�����t�E)}
endstream
endobj
116 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
117 0 obj
<</BaseFont/NMDIEM+HelveticaNeueLTStd-Bd/Encoding 118 0 R /FirstChar 32/FontDescriptor 119 0 R /LastChar 122/Subtype/Type1/ToUnicode 121 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 685 500 741 741 648 593 759 741 295 500 500 593 500 741 500 667 500 722 649 500 741 500 500 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 278 574 258 906 593 611 611 611 389 537 352 593 500 814 537 519 519]>>
endobj
118 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A 67/C/D/E/F/G/H/I 76/L 78/N 80/P 82/R/S 85/U 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u 119/w/x/y/z]/Type/Encoding>>
endobj
119 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/S/C/H/E/D/U/L/one/parenleft/F/o/r/m/zero/four/parenright/A/t/a/c/h/comma/hyphen/R/N/period/G/f/i/n/s/u/d/e/l/Y/y/b/P/I/two/three/five/six/seven/eight/g/j/k/p/q/z/nine/w/x)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 120 0 R /FontName/NMDIEM+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
120 0 obj
<</Filter/FlateDecode/Length 3727/Subtype/Type1C>>stream
h�|WyXgҟ����dZ�G$�+r�%1^����}���c��_Va���G�*�/�"
���H��%�ѩ&5ϳ[���o���?f�ߣ��Uկ�V�\[��j�o���I�
0��2�3�SL3M�F/���7K��IԲ������}=�1����L��j+wkw�C;�S�B�T�U�P{��̘m5O�.0��DG�LH�x�1,$$��'˒a2��_`��7&�eZ�3,��SV��ON�1U�7���M�Y�����|c�����e�M�N7Z�К9˔�a�N5Y���33���gf��Ly�>��FSQf��|�,S�lc�9Ӕ�o�2d[-3�f��,�g��%Ún�mL��hL��2��6J�i��pZIȜg�4Y��9m�՜�e�,0[����P�D�LS�'�o�*��Zզ�����O��g��*U�J�R��U�*U�J��K5�E��2E5LU�:�zD.ի��K�7Z�lUҪ�e��
W���Z��Ҍ�|���Z�h�²�g�6N[�}��u%�F� �n߹k�g�r����zh�)�k=��<*ڸ�Il���O\gn��{�������Uj���r)v��5u.c����>��#�F��A8Wk�,��z!��|�W�Pq�V��=f��N��$����f��I8�0�
��`�Y�7C� x�^���$�)�������0� d,�ŀ����
���0̀����"[A�Zu�����r&������b�Ca���E�
��j\�!��ఆ��<G��!T�ʸ��&/7�F��9e#����A#�߇
؊���)'�����}1�t��^�8�C2��)rg�� �a�;4�Q��C�]�:#�w�?-W�<�������G��_������I��Q��c��.	�1R'J����h8�k8~������¸l��D�
���h� 7�
 �;�IO��o@\��;&��40�Twm����^v�P|��]��GoL���zѮ�:�a��z�ö
��A]��vy���K��c桒�f���)��!��CF���{�ّ��-H�A=ï����Zps�A�`�fE���s��\/_y����5���m߾�p�Ȱ�����x��C	�؁�
�Z�����GL��em�����W�K���J0_9�y=m�^�6�GS����D�ο�:��sf�!�pf��!B☂Y�ͮ��rυ�_fNX#��������e%'�O?�ao�5I	�y���/[�� P�(�)�X����ƈ8q.f� ��a�-X���;`N��YP��,?� OP�/�G!!�^>����&m@���Ï]����-��g��"Ѧ��);�r��O$�{���p��џ+Q<V����
�C��*��d���W�_��U�������C&L�:vg����u@��d���.�c�u�C�_�����T��عj�ӈ���N�&���.��|j�d�i�]:a���K� ��k���f���*�����'q�4�D��B���C\>�pvZ	�������4
�`7�?ogp�3����G����y���CL�<�P�Go�!d@Ox�A[J҄u��G&u��(� ڴ��G�F��D���Q���J�%R��
��^Be�"�@��%��P����AHU0�cX��	��[I
�0��RB
�����i�W��_��܆�;7����v������
NҮ�4��v-gh���`q�L�"[e�b��������aL���#�����͈� �_D�A�v�?~i����)2����m�-�W�AS�H��9
CqV�6�Hⳍ���
�Ĭ��5��n��������7���o�@("��Π�iմH8�mO��a�f²�ܢ�DL)��b(�
��:�%�$����cߟ��<����n��
p���u�zcP�����z*}�jK�<MGcˁ�{ˎ,�<�j�/tv�͊���3�*�'����z���r��r�%�͸Us�j� ��a+���-����6��.�	0��h��kt�����GͫOΝ�Xu�vf�U" �A���y�3/-��cA/Cߨ�#D���>{��WL��P]��"{Ts��Ρ���qT����o��PeF���5F�p`����O�����`��m6ȃ4؏Q_�{�
�3X�����7��h򬠬O#��=`��4]&f�V�<������U%[6�0�z՞M5BU��a�+"H��-�f�xcܓo��;"�J欜�j��ق�K�3�&-��om����u&��?"7m�#��s��B�:y����;���vm��o
�	���.��0t��?p`��l��t�m��S⢢����ǽ7���!�)�HŁ�}%���g1�~���qݰ5���؊Jk����AB_6h�)=I���ʵ>�7g��AS���%�z6����؉�C��؋�(I����R�Rf��]���`i��>��vcŭGw�z���h�P�+ B�DB�/`��1#~CW��F�	$lǦ/���*�M:�`�����}��B�NS�R��o��mz�P7��Fo�c�4u���[�o�����KmI��+��R�B����F-7
�4���9���� ��_�e<u��	6�9��͉��94�_=��uu[kvJ�D֧d��8a��
�$���}5��L��;��Q�5?���W��x�ay�>�	��R��(�΁�j%�	/�����]��[z��Gh|I^�F�6j�e�Tql�XsNo�.+|J�<�ZF�,O�peS+L��f˶�h[&��lk贿�$@?�.m���-\T�b�E����o9r[d�S�%�S�t-��P%�\�E�_��&b�F�#5r
2%���R�A�{�b퓮��I�����A\����?X�0D�C4>�=�����RD<J�_�`�;�����H��,ö$F挚"�(:Ѡ}�Ζ^{S俺s�+w2���(h~�NXI����<F�@�qQ/@��*��H?Ta����-������蘼�t˻{���w�#E
�j^g��j��}����}vF� ݮQ[#B@_h���[G�3�(s����oݓ��������]�1��qTnϠ�P�&	˧ް4ɦ�zz�恔9���x+�����ӻ$;SL�^� ���;������npP���19���}���}i���3}��_^�}�F۲RQ_
>Z}���틄�����ܵ�(�3�o�z�>HB��ǣ�G�����a��K��ϥ��{�>a�<�Qŉ�y#V*4�?�5� 3�Oȝ�;��g3�Λl;zn����[N ������I�P�<X��5�G�x��_+�q�Β�[Dp�.�7�<a��Ͼ�`��M������9��_ܐ�T��[�ߴɽ����"��%-z틄n�궟�R\��E��̃^-ɠ����K�qE�3����Y�����шv�i �݇�;{�O5ЙqF����[��X�M�����Vi ��p�N��K4�-���#}Z�4�{�����]�M
� Fݦ��luh���d��usǌ[�e�e��ݴ���m�����خ���M��e��lq�AF-�i��9�v-n��n�轣���i�qZ�[�`��gk��˴�����~��������������hS����^�>�? �Ǉ�
endstream
endobj
121 0 obj
<</Filter/FlateDecode/Length 315>>stream
h�T�Mo�0���>v�!JY%�4u��aZ���`:�� ���91�6$����b�}�X�n��s�	��6�a�጗�B���̴����ځ�ˇ�8a_�v�����_a���s�N�@��}g/�:��O
f羱G;AU
�B�_�{�=��s���xu*�������A���TIe�+@��?�8��K{��IB�(7idZ�
�>02?真��<g��w� ͥ�M��KuOI�3�)T�WA*�3�Ȣ��x�bR�y�j���`+�`�(��� 1�a�ab���{�}k�m�jg�6y7����� �O�d
endstream
endobj
122 0 obj
<</BaseFont/NMDIEN+HelveticaNeueLTStd-BdOu/Encoding 123 0 R /FirstChar 48/FontDescriptor 124 0 R /LastChar 50/Subtype/Type1/ToUnicode 126 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
123 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
124 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 125 0 R /FontName/NMDIEN+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
125 0 obj
<</Filter/FlateDecode/Length 778/Subtype/Type1C>>stream
h�tP]LW�vV���ΆRn�]� .��n(�(�D�Hgw.�����K��CӦ$�!H�1�M$>4!��mj�4QSc��h�b�<k�&�y���s�w�#x
yA(m�W߸��|M�P�ŕf��Mۘ�y��?�>Y�|%8��5~�Y��F��x�0/8�����#�<|��異d�ѝ1�D'#U�hU��l%u���-c1��H�7�n�TU+I]2IZ]�EZ�E�����,�f**M)f1:�LSi2F�5I���w�+ީ�T'u
��'Ӗ�C����T��JX�i���I�
���L�̐�TlOQt����.M�иO��4�ĩ�^��M�R�8�ݪܲ����dQi��N�c�'��4͞���7Ἐx.�(�+tz�{E������LD��$pI~���?`�E�E�O�E�e��sOrN;O�66us�ü�s�ӿ���cC���*k
B�,�5�����I����dyy,�52
A`s��0��Ћ�^����L��<JP
�� A�!���C(aV�V�r/sp5��Lnո����������#�E����C��[����ɖ����oM��/Ɨ��c0�1���?uq
V<����wn^��oɃ�n4�:v�r��l�/����e��a��P�����\�Kk����Ĺ
��q������~����ޕ�OK�x��෕#�e���Ȼ��Q����!������e����)<2���
���_�>63t܍Q��t?�86�_�^� ��~#
endstream
endobj
126 0 obj
<</Filter/FlateDecode/Length 225>>stream
h�T��n� ��<���z��k�4u��C�iiw��dH
 ���u����C��y��R0=&���sX� \pt	֙�e5�IG���9���!@�2���9�
��:�or/���Er~�ݩ9�~�����㇣��zB��_�FY�f�,�Q$�G��Y������䝸�G�W
�V����en�(7�O><��(ۭ��v���Ѭby�Lv` �m�
endstream
endobj
127 0 obj
<</BaseFont/NMDIEO+HelveticaNeueLTStd-Blk/Encoding 128 0 R /FirstChar 50/FontDescriptor 129 0 R /LastChar 50/Subtype/Type1/ToUnicode 131 0 R /Type/Font/Widths[ 668]>>
endobj
128 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
129 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 130 0 R /FontName/NMDIEO+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
130 0 obj
<</Filter/FlateDecode/Length 532/Subtype/Type1C>>stream
h�tPAhA�M�M�!�e+X�)T0�=$���ڦ��MSED��i2�f7��F#^�ER�-xm��x�B�Y�ڋ�����tu���޼������OE1�[����x%�����䐃�+[�:�W��Kl\d�v>$��1����.1���e��~w��[8�;f�Ip�b��d"u1;�Q��bqHkf	A�i٨f�����n�F��u�=���B���l�6Q4TSH�U��5��)#3�Q�5�R+�@�碀���c�қ�c����)W �
�n֑KJD!M���2QP
jJܔ�����&l�������C��a�ƦaM]�-�xKn��V�sD��
>Q�m�V��~�D'z�v���K��D_�=��hw���8��2�ĠH�cNS���${�{*܏�i��h\�H�h���9�����������>țe�b�����-��q�Uf���/�=�O�w��9z����|��p/����F��nm��oxe�&������?���a��9�~n��'�Ñ�P��  Ӌ�'
endstream
endobj
131 0 obj
<</Filter/FlateDecode/Length 217>>stream
h�TP�j�0��+tl��Iz
��2�a�X��][��l琿����*����Г�=�d�v�� �%�8��5�KPV`�k�����2[�Ե���/�yɶ{��-�w6Ȗ؜��Wlt��?8"(�i�`/��M���?�t^<B��r��N^idEB���[@2�؝q���bq�,��D�]���{��3s�����rK�x�w>�J.~ e�k�
endstream
endobj
132 0 obj
<</BaseFont/NMDIFP+ITCFranklinGothicStd-Demi/Encoding 133 0 R /FirstChar 32/FontDescriptor 134 0 R /LastChar 117/Subtype/Type1/ToUnicode 136 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 640 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 260 500 260 820 540 540 500 500 500 500 380 540]>>
endobj
133 0 obj
<</Differences[ 32/space 65/A 73/I 97/a 99/c/d/e 105/i/j 108/l/m/n/o 115/s/t/u]/Type/Encoding>>
endobj
134 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/A/d/i/t/o/n/a/l/I/c/m/e/j/u/s)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 135 0 R /FontName/NMDIFP+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor>>
endobj
135 0 obj
<</Filter/FlateDecode/Length 1500/Subtype/Type1C>>stream
h�tSyPg�%�.F�H\f���ţQP�E����r�D�B`)�V�
�1E�b�gO����N��v�Wg�ڷ��i��v�G���~�����}Kr�$����bƅ�$�_h�ggf��m���m�SLF)h�Ȓb�\|ˏ9�@�����x5S�GB��� jN !'����7�-Vc���Ό��N�����;J�,D��G�K7�5��6�)W��^g�Z�V�͐&���VJɹ�JC��j����4�
6��+��!È�X
�ͪO7���L�����l��h��g		�z�:�0��F�&��0^�	�B�a���'H|��B:�X�C,!��2"���'H�qD%�"CI;9�����l��XvU%/�߁1�=����{d�r��7XF�v�Ǡ�P��G�Y$e���҆d���N�gIB��Z���f;C��G�xI���1(�B��:SG!XV���<jp,|�܂�[�'7۽�<�
D�`���Z����h�Jo�x��a��Ū�O���
8�Kս�]܁��Y�e���<�E��N��=����M�bzy����7�.�����Qw��H���X��.N]X�Se����ruw��d��r6[>4�ks=�_4���*��S '[a>�LtB?�S���E�S����_	a���4�H�S�l�Y��FW<��J��wϺ�Rq���O�����9M��bNE�^ҢB�d�a�JM4�Ih��F�$��+]ϵrU��p�6`��
K���[,��G�/m�{�vD'������'��� �X������>�>��}�""��B��d�{B�<
�W��mL[j��9݊�L_�����g���*��.V�]���y�� M�f�v���w�c�%�����w�psˇԡHJ}|0�^S���x����S�#%�>^��l�.����ot;���
�V{�R�󁠕FD����x ʀnЂ����ۍ[I�`}�������3���=;]�k�������8����/_��
�A���3vp�LI���eq�9�E��u1�$���
���� �zp�ۘ��Z�����6��.~{�D�`�5�D�e��ӔҔ���g-1I��#�V9�������!�f��AS��&"�H��=�1�0B�@����怫hc���*y�&�T;=�	�}}Տ��T0��<���c`>��x�aoXrD�"�ih�Ҏċv�}˽�����%F�!�aNI�u��!u�Q��/�������}�g� �!���������%7r�F(��"�g���S���{?�B�Eh�"
��(��Օ��Fβ������Q�ƃ�.ߜ_^�.��t��4 �07q|��.�I+#n����ɩ�v�8S�9#�X�U'����T�ܺ�Km;��4{����.�������$�?9�fb��գ�z
�5��u�<���g�{PJ��s??�6��p���ãE�  U!��
endstream
endobj
136 0 obj
<</Filter/FlateDecode/Length 276>>stream
h�TQMk�0��W�q��׺,a�<��=G+�����$b[A��ͼ��������͎���^7�q�
�]�!N��ռ��W
� 'q�N3�nG��wjN�]�p���);F�_m���n��'�b�7�g��(�����Y�9 �?���m5�?��c���
���H���T ���eAqo՗�,LF&��c*�/_灧��oS�>�V�)
�0�:�s�e ��rD���s�mI�`���.�=	�XK!��}������Ѹۺ��0 @��
endstream
endobj
137 0 obj
<</BaseFont/NMDIGA+HelveticaNeueLTStd-Roman/Encoding 138 0 R /FirstChar 32/FontDescriptor 139 0 R /LastChar 144/Subtype/Type1/ToUnicode 141 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 648 685 722 704 611 574 759 722 259 519 667 556 871 722 760 648 500 685 648 574 722 500 926 500 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
138 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P 82/R/S/T/U 87/W 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 144/quoteright]/Type/Encoding>>
endobj
139 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/D/e/p/a/r/t/m/n/o/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/zero/seven/A/q/parenleft/parenright/w/F/comma/x/b/d/g/colon/C/nine/E/U/G/two/eight/three/k/P/J/z/six/j/L/W/H/quoteright/K)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 140 0 R /FontName/NMDIGA+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
140 0 obj
<</Filter/FlateDecode/Length 4091/Subtype/Type1C>>stream
h�|W	X�֞�P�qb/�$Հ�����( ��VA-!*�ր h�Z�"bնV�Ž�.�.�J{�.�{-�5���(��r��L<��/�����<�<3s���}�g�1n]�L�KO5ft\`�1��X��mH7.4�N�T�<�0�P���ORˤW�$OA��¡8�������&���{~�D%#�2 s��$��r��+�
D�CB]�� ]Xhh��u��)�m�M*/.1���d��
M�cN�../O7ѹE�n���h*u.�����b�A7�d�1�Lt�s��c�l�i�ѤeZ�� �P�=/��X���3.��[X�[j�+���f��9��y�s��Rs
Kʋ��a��`*׍Ο��3���
�:*��87��i�L��l���@���r�sr�Kr�C&M���$B�c��xR�d�!c�wazz0}FO�`��0�&\�D2L|/&Cθ3��a�1L��	a�P��0�3��u�1dA]B=��ʤ3㙉��C�29�4C]Y�gnS�t��&+����%��Qy�|�\tKv{����l;��go�O	GF�7�5.�[���>�}����AW���]��n�z���[t��n_{��������gw���M��T,U���������]z���ckDU��� �W}���MZc�XC`=�0�c�����$�8�r=C,R�H��:)�S`&��\&��*��8M��9��yC��A�&����d��ޘp��4���U~���|N�p���t���a��ü1r����U�\v���Ӥz��̬%�\��/Θ����S�4X!�఼VpX���l 9ʉb�Yj4�[��*?O��Y`S
̂P�&�B���Y8Hc]'<_����0��k1}�w-$��Q�(�64�`�E�=SH!�E�o�GC�c��ST���Ͳ#�G1�,����Gj�X������9�M�.e��v����	�;'o�������e��:�o�P�ao#T���Z-��:��?��%T��m�?�<*#: ���5�H�~kl��W��@~�Z��k���qbϑ缡w�i�¾	��^�����.��/�Ȏ�M�IX��j�R-U��ep_�KQT���:���CE�/s ��T����؉+\7�@��K�ʥ��4��1��W�u_�rBm�19٤�C#ǟ�y�S�^��/5���	��6TN��x^���� �b�k�KfH2+Z��%��?�CRO������!�5߹{�M�K���ފ��j��i8����a��r�>��{�#�W��M�`A��.� _5/�t�0�=���o�����F��cf��N�Ð��Ÿ��F�Pwq�-����,c^Q
��:k�V[Ӭ|+�`�p�≛��	��ƍ�O=f���S�M[7�t���fXaVJ�7�>>���5�sg���O4����֝:�mwR�
�Z�l]#\��`cS�qTB�!9q��V�g$9R��:�_��K�R�5)!lȄ˭��=�}72B�w�O��lI�njy�@%�@�%|�}���� �7�?x�smu%�cWe��S��'jzG�8K�b��nU�)W������D�,�$���}N�s{ۗ��
��j�������de_ۤ�lr{��Z����%����+�٘FSl�i�2���6�`�	��S�#(HQ�t��-�o�VU���(k�I�\�*�$��9��m�@/�EZ�$�"$�����&��h1�(vW�@�eNv�+��P%q���2���x�(�Ru��~c�Dl�ﻊ�\���
�P
GE�'*�j~�����c`Ꮲjc���1|0���/C ��r{2�Z��"�ь�j,EBsK���{����$�P�)��2���/��ۋ6{V�qx ���v�ڳ�d�m��*���튲����]�B���J��*�`�U����Ѣ�>Oj��$G3�̞5���W+9��t��#.�׋�Չ�:���}׶��
MV�װ�/��N'�}=2r��:-��C�}J�j�lr���a9w����~#J´��Clp
�����'~��I\�I��/$�軭�4�l�8��{5wk��K���D����KEs���u�
���"�J�z�M�F
ci��
�| &-�^�T�{냊#��xj��z8M*�?A�CR�d��oAn/�-w��ſ�g�nָ|ٮ-�]�I��/�س� ���1I�ʄ&Pj�t�É ��THzj�d�"���Y��JS�j�.��da���6u�����s��h~��º/v�������v�����:-�r��oG�K�Y�k��B��{|�e�������l.����&��ַ\>��䷚I���|R������e����|H+S�d�F+T�	~9�=^��#�@��� 
�ġǏu�j.��ղ�jk/��a���QcL���=��TL����*x&�ײ����
�!7�������2|���C���z`{~����)[�p�-T�]�H��$g�#�OQc�pZ����*!���=?��V~I���:��Ixr��������1�%�A�y�5��SFh�b�h!yɴ�D5��u�V�M��I0Ǫ�U_�9���
�H`�ܯ��K���pm���o�M��V�Gh�H7���v����#�EJl�������֏+Wm�6������_�ɜ���y�S,�9��c���/���_�=M��>kt�.�~�
0��M��`�4Y�!�����y������0�B�jv��?;O��%�>3��<)n���:�n ��5D�܂a�7�	��6[�T�'�
MO������h�@nhE���7�
5���Z�!�|5e�>�5Y�MTњHb�L!��������~
!R��H�,/��lyU�2M<�f�ֵ5j�Ѻ�Z�7���=��^�	D�����`\�g�\���ɹ�pf�N{
j�*9q�-s�{��G�z�ɡ�O��������Ǯ�ؖ1�IJ^ܯI_�Ǥϟ<Os�tT��	���J·]��:�ZV�t�ķ�Pq����P���o��f�|?l0�6v�h��
� �"he����A�
����޽��J왐��=i��f��NN�:C���C֡wl�&���h��a��X�v9-FO���"�p��8�RƟDn����R��Z����
�Z����
\?q��hw*��Q�":�g�8+TX����� J�^� w�s����qԾ�Z-�2�v�g�������S�c6Ү�+C�#Q���7�RxsM�E7���NIX6%q��k�<{h.7�:�K��#h2>�^'A_����hΡ���<5�9�L�������r'$XOB2��)�_����Hl�P~x8�\9����~
9��z Ϳв��>�?`/���41l%AF�aCH�N��:j���oz&
d��s�@�JI�X~S��V�)ߗ���﫞��|��|ڮ��C�`}	
8{�e�o�d�d�m�*��,S�'-��4��ͷ��@zr �c�p6�yꊊMk���`e�����_xrH��u�SJ��TI�f�A�I�Şr���zttw΂Ҍ��߇,�p���4#KCg�/�i�#�9��?��(r)@@�t,{�j�V��{���d�R~
�@ ���7B�O���$�vi�a~�\�{g����5t�9z��z7��n�>��Y�U�j��ՎL$כ����F��AF�i��,�;mPN��4W�%Ê2#B����4h&���8:=E|��:�ؙp^6��i[KU،���I�'�+��J,HA�T	)�R�J���"Qe��і��q�m�7�[��g�g��f
,ut�B�����:��6i�M~�N����8�O�)H�XFt�hl*��L{�x��P��xz���x���8[Y���5+i�����
:.;c`=�~x(�:�P����7���ω	�Pǹ�t�0*��`D'��T ���e��?�P��fQ�J+"�n����F�㋤
�a4��UG���WJ`�L���(*4�Okj�c�چ�?$�w��M�r殖n��^�M� �{
endstream
endobj
141 0 obj
<</Filter/FlateDecode/Length 291>>stream
h�TQMo� ��+��P��kbL�&����;��5�HP��`�-	0��7��+�����j���ucq����bM����W5H���:�8T�!���4�v~��}t��6h{���\�c�p@=CE
����Ҽ���a��ΫA�o���Th��r�g��n��X�V}J�Be�����cژ'S2�
F=���7����e�ÉXB9 P��6��@�4�c�� J1�
�AYpp�@�8�A�g���XK��_��8Sz���3�q�ɾ ��G
endstream
endobj
142 0 obj
<</BaseFont/NMDIGB+HelveticaNeueLTStd-BdIt/Encoding 143 0 R /FirstChar 46/FontDescriptor 144 0 R /LastChar 119/Subtype/Type1/ToUnicode 146 0 R /Type/Font/Widths[ 278 389 556 556 574 574 556 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
143 0 obj
<</Differences[ 46/period/slash/zero/one 52/four 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
144 0 obj
<</Ascent 0/CapHeight 0/CharSet(/w/period/i/r/s/g/o/v/slash/F/m/one/zero/four)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 145 0 R /FontName/NMDIGB+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
145 0 obj
<</Filter/FlateDecode/Length 1375/Subtype/Type1C>>stream
h�tTkLTW����E�r7���u} �! �P��(�
�Z��e�ʮ�.�]XQ5�H�>P�[i}TR��>�J��j�6�����������-sq�г�i��=?�̜�����;��BC8���K���͍�W*j��f]��(�Wy�s��`H�f�����m\����4`&�=~d#ZD�;J�1��8rU��$���
��Uu����S2f�J`2#���� �&'��9vw�"�y�J�G.p��j�[�z{��SQ!�=r��Q����?�N�l���ծTZ�rٽ���v��TQ�U�Ukl�V���t).9'/AV6�*j<�Z��N�p��G��^��)sȋ�.���JaJ�jU�������˕�:�U�*eNV�ʒ�.٦�^+��רN��i�:�.OҴE+� i�]Y��d+���9�����RnWĭ�Vq���Ȥ䔴e�J���qQ�a�q%\w��/���!���!�t�u�u߇F�n9�
��o�C�;(��%���Q��A#��%Ot��̦�Y)�a���I�f(�m6@*=IS�� ��6���E��$�x�����^X)��a*z�C?����0��Ѣ�	6����}�}e�jŃ`��Z�N+Z&��
�,ղ�+�@6���,���>�L����$��H+-�C�Z��&H
$V�D�6u`:#=餏�p�D��d@�4�k2@
�=.�~��3<�G!�^���~���`�O��.hYҵ�N/F~rA�K?���~����$GžMY��^u-?�k�����(ޚ	QO��I����LqWg��:�jF�Q0��Ⱦ�%��0	�����φ�=�FL���	�}	���M�1��cA��bgދ�P}㐆q'v������;��';<[����y�]0)�����B����c��w��%��̂�u+�ˍ��Yb�Y�Z���L�k��֧0�0?
�{���"�Ծga,��B���5Zp1��y���C��7:K��AÄ|��K&AfL����>}�V(�{�A����o��x�ۛ��}G��jo�o�Yo̞�䖛�[Y��>�F*n���o��gXQD��6h!�i�҅�������x��;ȱ����]��~�I�+^y���cj��)i{ #A��ϝ�>b{s����?<�����#�/�4	�m$b"$���!�ŧ���	C75��OSq1�32l��'Qq'Np��i���B�O ��i��3.����RA~�vh��o���7J@)t
m!HY�-��Az�;�=b����7u�@(C.�B	N�W���T�h2t���C%����[(���mw���o����v�-��������)h碵��� h��
endstream
endobj
146 0 obj
<</Filter/FlateDecode/Length 284>>stream
h�TQ�n� ��{L�~D�"!KQ�H>��&��ڵTc�����i�;�2�0�c}�M7u���Mg��q��B�a�H3Н��]XU/-p"_�q¾6� B0�F�qrlal��6y ��4�δ��������~a�f��
46���}�=���-]���}��4�V*tҴ"�
DYV�F���"2n�����|G'���"`
Le��#�{�#>y�D|�ݳv���뢔<
'�Gb��ז�aJ�X�(�^���{��9�*|C�»��������[� �,��
endstream
endobj
147 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
148 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 149 0 R  6 0 R  150 0 R  8 0 R  151 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 116 0 R >>/Font<</F1 117 0 R /F5 137 0 R /Xi26 23 0 R /Xi27 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
149 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
150 0 obj
<</Filter/FlateDecode/Length 2917>>stream
x��[�v�8}�W��9'f��K�yg�ݝe,�Üv?�d1M�j���|E�T)�����E!YP�ւ*��{����E�'qI\R�yg.�|�ϯ�f�/%��O𙐿��\���%�p\��x�/o.�+��C����_��?��1?�G� ��Ê����|��P��P�s����_.�Z�R���bw����0��7<�rq�p��O�&H�3�#O�������:t��_�gE��>P3azX�[O�w\!p<'��r���G|��y�0BR���E�v��1�q�p��N(��[Q����H.,��a�&�΀�3ߡ��g�^~ݕ�FeUI���eq�QzZ]q'd��SG��|`s������rGU^�m��R���pLB�u��t9"�P�E��F=�׺9�k���d�D�.���a��!�D�H.�њ�V��3����U������d`F`��r���3�nTQEIF�ve���l��W��R/IY�o�V+0�${&�\s-ʖd���ST&%y�_T�!�0�X�.�XU�Z%q��C��*��D{��(�#F?+� t�0��
�7���x�^V��Lg�F�`��
/t�]�dVx�ּ�������jM��@.I���\����$��a� l��m ,��sL�0ӄGEf��U�������9~��D?Vs�1V0M�Q�'Uhí֊\�D�bղ8���W<���M�4Ѷ�1��Df��Ѧ��M�J�?7���~��z�h�A�)U��R�m�ﵿ��o5Du���m�W�p�}
 %[9�X�YX�H̀��M;V�5M�K8�6^��E����[�����[���Ei�J��6��vJ�a4�`� (a��UW�v�ګ������S�Z���d守�X5���^@~П^���������1�u�g�tA�������Ee Ȟ��UT�{�T�e�F����<����ȡ�o �svܝ��F$f��U�������b�;�h��t�&�<�ChJ�-,��,��Z�0��~jLd�����u`W���tT�q.P���O�:���ݫ8�&��.�b�e��P�e���EϜ��	�
 0�����EJ��[�Z�2`:F�0�wR��ᢄy�b|��'����l��K�1���� gj@�m�2�湄4E6Z�'C1��R�&��Z�y�'<�
�>��żH�p�d��`� ]��1ґ,z.��9��e�F��0Q�||��H�������Xs�����uo�q�p$���YY*}�7��-:�:�Ϊ&�l�Vxp&l����vK$@�G�_�B�U�#Ǌl ��U\�̄gTd8�]	]����3֯�{]��ѫ]�+ٕ��J:���iS�o�k�����~��d���h��qXǵ�ב���S������r�P#Y�@	���xS�eU���������?ȋ
�LD�$f����S�?�떰!��ǰ����
�5͈V,��	Um�Qo��ˮؓ�vo���=�%����.֘�q{��A�c�8h'/�3LG����K�Ԙ��$�8M��h߆p�_���sF�?�-�Q{C�gU��8�^+���8�� ����O�
L�儐'���^[��%6��p�+ۼ�K�^�$S$Hɪ�7��k��`%f+�UE�cθ-r��W�s�?�d:���URM(U�3^�2���Y#���$����wk|�S?�E�?�;�L*��⟳�Sh}���F7Vu��(����s��l�X�@���F-��<���i�<�����|('��ݼ�[贙T �G'� �ۉm�#FE��<���qy��\M�͌l5$zUò������m�$���z:�4���A�4�<q�m�ؓu�茉�0��1�@�����ptӆ �k��o��{�d�n'w�m����Uw�I��Ie
|i	W����?���G�\�um�ױ�U���K gr�A��vk� �Df$C�|4H5 y���t��ŁU�^��G\$O;�b .�I�aU�����K��{��8���;�
�E�<��s'3�sLdX��ޙ&�X
��^�t�\�}��'b��'��J�� ��@����'D͆���@5�$U�d92Ә�7�萉��~(�A�=&���a"Fy˃^WU^`�R�0�����೬���l� -}�S}���.K���.���ˤ��d�d&p� ������i'���}���lf�;&1ͧ�`����f��'@gQ�I�9�q��N��%�M\��� /���4�Ь�,;36�Y�FEݘ�����*��/4Ւ����!��%Y�kUd�ҭ�n���a�܃�� 7�K�����S�LtӸ�\�>�G��i���3=��$<k/i:Ϛ����p�s���O
qvs�PJ�6~��,� &Z�5�[�5"�{�1���: ɬ
m�v����JL�뼳%�������֠�����/���$"Z�����>5�� ��B�+��υ>��������~fͅ�р�(0&1=���i���*�5��is���.�Ix�MA�[?�3�爠5H��ߒ�"�~�t 1%���s�J�=�!�'��]lʾ�.�����)�~{o�c^?�c"��b/���6������(fr��e�r]��x�\�JTI�� ���y
߿�o����XMf�P��
۱��ڰ�<&z�ʣ"�{/�ڠ;�`:K��lJ!��zsW��k
X�6Xqm{�s�a�J��BanU�ޱ��4y�}d���M��E�d�~C�Hr�mn��
c�uN���o�A�������oM��o�b��է�N4�cl���U������"3X%N�,��Ljy���V���rQ�%+/p<�1������S^��/�:�
endstream
endobj
151 0 obj
<</Filter/FlateDecode/Length 119>>stream
x�S�*�ҏ�42S�PI�4�30V��r
�266�3S026�!)\N���!Y\�!\� 5 }�
f }ffz&0m��@M&PMA�a
��F&�F�
�y%��%z��z�iz���r ��!
endstream
endobj
152 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 153 0 R  6 0 R  154 0 R  155 0 R  156 0 R  157 0 R  158 0 R  159 0 R  160 0 R  161 0 R  8 0 R  162 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 163 0 R >>/Font<</F1 164 0 R /F2 169 0 R /F3 173 0 R /F4 177 0 R /F5 182 0 R /F6 187 0 R /F7 191 0 R /FXF1 196 0 R /Xi28 106 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
153 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
154 0 obj
<</Filter/FlateDecode/Length 601>>stream
H�tT�n�0��+� ��"yL��[\�VEۃ`Ӎ[j%9n�>���u
���ޛy���>���)�a��vQ� ^�}���]���|8u���3�p"�d�$a�
���>	��æ7�}���w�1������b<��W��s�\%P��������x����z&��C�@"4GM�Bȏ�I�l]Z�B�BI�_�8GN�C�$�1�:8���+[��C��Ǘ��r�'t'9Q$CGN$1.��ϲ<���k0�R�rώ��MD[�a X쁋KihGCe 	����v�\w�*7P�m{I*��$(���JI+��}EJ�I�G����'2bfm�*NI�F0ngFhwd�M��U�
�GEc�v�<C�����|�W�m<��}�����6^c��G��`��
�G�v��>	id"#0̉QG5�v]�x�����n�ٟ�n�n��t����:�W>����(��C�͐�N��}�dϓ�Pk�����M��꧁�q��b��yr��õ�ڮ�-�2Z(�eh���l�9��ؖކ�N2'�=�oO���������>���De��Q�Q����D|~��i����}Ɣx{mX���  ��$�
endstream
endobj
155 0 obj
<</Filter/FlateDecode/Length 556>>stream
H��TMo�0��+�H�d����&�ڪ�6�%jz��Q�H��l�}m�~���
��f޳M���`ͣ��)��A�Y	�VILU" ��uv��y�Rٺ����׈�����ܾ-m]X�5f���g�dH;.��h��BF�ObRc2��ͅ|�YD�(x�7�d�����PTï*�L���S�^"��!IPs*�Y^�ǳ����潆�����iI��r~M�g�J;.Rj�T���pǅpJ߇Hτ
�
s��л"��<�F��jR�C�l�k�2_@g�e[�P/�?����5h�A�(�
�6z�<ʍ]�������xwE
��r�Jx�Ja�D2 �����qwF��H%]?�J�������.���g�z����4�ĠR�T���V���m�/W��.�e}�F� xC���F@�1dB����1"XF�][��s�t�����yeb6�W�F!���2�D'&��N�j�;
NPS��P��,�'4<:v�ܮ�u�?�rԼ��*�2P���읏_�FM�2�A*�+� �u"�
endstream
endobj
156 0 obj
<</Filter/FlateDecode/Length 465>>stream
H���Mo�0���<&@�ꋲ|���}t�ev0)`;��mݿ-��RG[e�(��C�:���A�"���Nc��|���D`F����u�o�J�`���
�6Q�I��-�+�`�q��I$ �-�&ݫ2�\K�ۑ�����)[0�e�7�*JJBs�i��.FJ x�
�"��s�����嚦�$:K�|��@s��/U�ª|;���w���-Ha�Ex�ŧ����=��
@f�L�Ҙ/p�rK����z^ٹ��TJ�U�I���3��@��Q�t��d��ٯ�ϻڿ~��-ԇ��C݁TS�ȣQgĉL�9)x>V� 77QKh#�79r�a��{'�����y���֝���PV�����RhM>�L�^�o��o�5�߭��{��a����o~4����@�NO#�)>�z�?�zV�3cMי2��s����  0m

endstream
endobj
157 0 obj
<</Filter/FlateDecode/Length 459>>stream
H������0��y�9¡S��q�#Pz �5��^��&K�����n�n�V]�C�d<��o�}��eF"��܃B!����$��r����o�l�f (�A�����\(ڴ��v�{������-��m����P����Ǧ�m7�-�ԍk���El�(��P��o��r?`�v���b,EC9�,�F���ٕjߗ�O���d&`�����}&%��l"9�5���R٧z�\��v<R\�iL&R�2�5
esP��N�@:�+$��X�^B�\�_����|ק"h�d�]��c'b�ր$Ԡ�{�|v�0�&��v|,Tj� ��/4��e6�?�'bޗ��4�U�����Q+=Z��П����w���r��G�}r:F)lX�du��X�g:k$a����h��.�M:�~y;!�٩���%����6�@�B�J;�~N{"�9���m��p�)�z r+�
endstream
endobj
158 0 obj
<</Filter/FlateDecode/Length 448>>stream
H����n�0���g�Jͭm|������J]�au���A��S5o_C&M2�L���Z��|�s�9K�|�>��]0$�
$Y��>ܜea�k�eY
Uh�E5_�]5�!oK|�eU�ǐ�"��u��<���Y� +�HR��4�y�c������V��X]J�YͼѬT\��zu����結`iH�'�Υ%�=�>�"�H1��]���5К�-C�T���H(]�K�M���H(�	tBN)5��~���f �����:�a�i�|���/�Eۡ��
C^lq��(�j��ߎU<FxЯّ�*�Ѥ����G�%r&�SЊ�e;�]mІ�O�(����H��R"~PEK�Dl�|Ul��[�/�y"՞��>��y��xl�x&r�cs��oC]�7?�p��v����q�*���r�)����	��8��!��ӏ��{�  �$
endstream
endobj
159 0 obj
<</Filter/FlateDecode/Length 376>>stream
H���OO�0��|����u��qFwX��ڛ�dM8���mA��@�d����}ڧ�/ի�AG; ��$ 0C� �9CJIȊ�PD	E�l���N�9����Q~ҏaF����;�_I��ⱒ�B�0�����w���K���9P�i�ڋ�L��)T9�޻����MU����Ԑ�fm��si��eU 8`s���`}�0���΀y���FS�d�%E$dBE7��d�yȄ�L�K��/g	�����78m��8��$NZKd�b�تL����dim@��]FR	��Bq����N.CD�+!:�cQ���I��J8�%:���8��ٻ�q�2�
�9��!�$�4ΈIu#,�Ĩ���0 �[
endstream
endobj
160 0 obj
<</Filter/FlateDecode/Length 497>>stream
H����n�0��<�]�Rq�ǌY�jGj�.������xj<J���:�3�d���d}�}��o`@�fPPA��JR�
L7��5'��[����P�@RE�\�Sș�����2=t��U�I8�ǟo�����uv�)pr� %���{�D�ԛʾ�Ʒ�5��0x�k���?P�5|��3U��������=D�ҷ����<��A�;�I�*t�M�Ȥ���>T������cǏ���[� �ύD�nm����Y#y����[*�;D���w����O���%*%=�[P"q���W6�8�;�_��
���G�O%�8���H<#R�&M�	~L��ӴCSư�MC�/Vm��>���n2n-U�5
b�z�vWca���qXP�',h�����Yt����p���Sp
�^N�*�\�
	8���g@X�{	�ԝ��+\O�IPqBe�Y0��66<%��.=�/�%!���]�B5��3�|�� ��:e
endstream
endobj
161 0 obj
<</Filter/FlateDecode/Length 482>>stream
H���?s�@�{}�-(�x���T�$�0��|�5�:#��=���ؑ�B�ܽ����U�� �v@H�`,PB���U�[x#]��V,C/Tk(��/W�y_�A�����Da(z:L@X�U!y�_��}�N��uJJ�"'�.�}�۪��.������G��Qz2 �}ffHhH�;G�$�3��t�]@8`R�m�H������f��������{}�l�m���i7���Vi���Gm���m���&�]��|�ixҢWv�ߟӒ^`Y���b��'f���wXCcΆ5 �WX �p�&�[�Ԩ�u�mzR���6�!5��=F���X��Bf��+O�Œ^l=v�g�F@C�
�Λ2#p��i���.���.η����6t�1uu�װ�~�m��'��'����tm�� -V���׼�)T��i,��8*��\�p���gc(�ٛ��nd�f��*�� M�H���
� �P8
endstream
endobj
162 0 obj
<</Filter/FlateDecode/Length 106>>stream
x�E�9
�0@�~N1���,�K7�e��A;��AH�'x�X/�QI��Zxtމ������6�z���B�f��aސq�.*k����Ïe����/�A0
endstream
endobj
163 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
164 0 obj
<</BaseFont/NBIGDG+HelveticaNeueLTStd-Bd/Encoding 165 0 R /FirstChar 32/FontDescriptor 166 0 R /LastChar 122/Subtype/Type1/ToUnicode 168 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 685 500 741 741 648 593 759 741 295 500 500 593 500 741 778 667 500 722 649 611 741 500 500 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 278 574 258 906 593 611 611 611 389 537 352 593 500 814 537 519 519]>>
endobj
165 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A 67/C/D/E/F/G/H/I 76/L 78/N/O/P 82/R/S/T/U 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u 119/w/x/y/z]/Type/Encoding>>
endobj
166 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/S/C/H/E/D/U/L/two/parenleft/F/o/r/m/one/zero/four/parenright/A/t/a/c/h/comma/hyphen/R/N/period/G/f/i/n/s/u/d/e/l/Y/y/b/P/I/T/x/three/O/five/six/seven/eight/nine/p/w/k/g/j/q/z)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 167 0 R /FontName/NBIGDG+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
167 0 obj
<</Filter/FlateDecode/Length 3799/Subtype/Type1C>>stream
h�|WyXTW�����bm.���,���.�ĸ����������6(�G_Fm����[\F�5n�1��1B"#j�7ct��h����W13o������sOթ�կ��Q*��J��7�_rҀ����Ŧ��T�,㐑��9=���$^)y:K��9������o��VK
�s�����A�"U���*=��g̱�����bc��?.��?2�a�c�2���Ʌ�f��%�ؘb蛟oH���i�"�e�<��aS�!�Pl��1dZ��S�)ǘ�e�L3Z,���de�
����I�civ��"�lc�C�)�XXd�1�Z̳����
��sf�%˒i�cH*�l�,�1d�1���4�i!!S�!�h)Τg�,��(ǔ]l2��&����Dr�S�o	�B�T�sR�wQ�+�L�C�uRD��
E?O�X���b�b��Lq^���+3�˔��F9�tjV�V�r��εjO�(��̍ŲT��>c�5��uZ�6@;Yksqv���5�u����t��nun����/r��]@������tu�u?z�z�x����j�i����Ue�����V�y{��jx�Ѐ5��Z��e��Co�1��p��#��I��a��t.Q�i1s����ð��Uc�=�$�+��&��= ���O���Y�S����8�n>6"��W@Wv
;������\���-�e��꼮2���)�j�k~(�\��B0\��Ő:e
Ԫj ��Z�a-k��@�� \^�t�EZ.�-�sɔ-�ý�	��!����@!s"q� �^ߗ���@[���K�?�"��ۂn�li��%�"]R�����|C���Mk����ѕ�N�#�B'ȗ��+�����A���daEϘ)C3�]\����>%���W�i<�m<u��+�E�{�	a�Qk��{^:f�K�M��+�MOt�߂R��5>��%��<8�Xc��<Þ�_��p|��>��/oM���F�����i�7
>�=�C�b�Rxvuš�+������v��E�kd�!�@�#�/���^�w�p	��P��kG����\�q�dX�^�
<l��	z� cEL�<KttT�';�kצ���#�
���w�c����0��>Љ���*���Q9y~�Q��vA���h/����+�y�ϥ�x����x��>���
��U��
j8;���c����]�����#sD�M}k�N�_�Ȟ�N���������$
ȼx��`�
Q�E��pX�8�C��I��]��741}#��Q=q�<��B0���;���S�[`���sfC��C��82����0��ճ�j3
3!))��UA_E_���_*���q%�Pnt��I�xA'|�Y��Ɇ�_�k��4ܱ�,�P��D�u�r���~�1uڰ��G���S'���ڡ�-����8���h ��a�
C��C1�tE5��8��q�:����mg�6���e3���O;rr��¹~���o_�t�*%%qj����(�&�H�R���e��C/�d���}�j�1?o�PcOvp6�׫q(�=��R)x+Q��
9�+E����L��8�,�	3�?xP�&n1��X4*�;�~���hӾ�~�.����{ZF*G��F*	WHm��1(|
!�A�Q-���ћgaա�Q�a"�n5)��t��R oG��R��
=�v4��tc���heܟ+iϯ��:C��h�
�
y�c6l%��X䫤 R̗�y=���] ��Ou]2|d��p��7Y	�D���(<�.��ƫ;��%�ɔ:2|gI��Uo���*��ڒ���`�\$�Ŗ�-%�,%od�n���l���I��/O�.�z�E�$��A�ân�rY����F��[X%oRw�ܟ��IĎ�,ȥ*G�9$@�W���W����F�ï
A��|\Gp˵Vv���8�����Z�&�E�.Xǁ�}q^XXʼ~"�����0�MǾ�@�pv�2�ϧ��i���Z���|���ҫ����\k��޻��>���	=׶Av�PAbc�@�0ݚ�t�]����;��<��9`���A�_>���Q�Ɣ������i�Y��T_���s�@����ݐCa vA{�k���l_�ۧ_̼���IL߃͢.���mBJ�(!Oh�GĻG�*�-�~)Q6�2��,�%��p�p�7m<�����i�<����#!�?`T+�r�a��z��N��!j�Ϩ�<����2����
\����^�6���;L��E�jRVy͙#돯�\�r�-���έ9�����Z�:"~U�B1rQ�]|�n��m�Ɠ'}�ʹ�箙��@�p�ғ'}`���w��햍�����[`y�0��C-��XάZ:�(�l��=���_��>��T�<�ht�h�r:$�D��Ԅ��������&D	䊝4{阩��x/A��P�cBwtÞ�
���wj���D�eC�3���������o�X'��dP��&}/��R�˭���a;Ry�MqE�)���/5��~n�`cV�E��zDNm�۴�Γǻ{ż���#p�++e�B1��DCW�c�]1�~Cg��&�EGDlϦ/����'L>�h�����m��G|�c�rQ����ٕM������g����c6ڴq�u��Z��h�*�ڴ�01;:�I��ñ͠���'!v�i������WRG݈�n�Us�4f[��{�}п�ژ����{D[�rڨ~ܔM5E�c��&��a�nlq�O\��.�y\�'�ovb�(\)��wp�R��$��B��٫}�n6�-3Z�4��Ocv=�<b���R�u/��(yN�y</;ZAh�8����"'L���v벿ӲRL��7X��p���(A�>M��-^�j� �-�غ����]�-����v`��*�:u�Ԙ�0	SՒ���-�3��Y2=�����}�
�;�Hy���?%���ۥM�-K&�1�\\�p��Gi�~I�_5��p�����(��#����F叞*Z):��G���
��ԟ���N��yy���4��d�!����W���1�( ��A�1�
��[����yZW�����Q�ҽH�L�ڶ,�[Kz_acc�3����7�� �t���閑&ٍ�
dT8���w���v����8A�4��W����O��oY�l�|==u�`ʜ>2Gq"���\i۹}�
�(�Oi�`���?퍊���^hH���t���� W����ң/oo�W�����7n�./����W�Z�ȶ�O��2S���?Âf��ʣ$4��}?�p��\�C�_�w�n�7�Z{ڧ��G{OW��Z��A�A�!T�BfB�{���/f}3�ϸ1�����~y⯔-�����daK�L�О�?�yx���]{V��.�J�|����	�>�J�u�77�s�gRLɿ�!}!��ۙޔ�ɖ�&N���=EC����!�b���@�A��dP~�rL�rJ����"���A0��Fjpbjb����s5ta:�_�k��L�O\�+�X12���0v�uv����p�ÀWc4�+�U����M&+�*�RI[e�u�vڔ�ծ�FRs6d�;~����3lZt�,���V��N�����c�2;��+�Jf�V/�lǣ�Z�sj�c�l܊�Ժ����dlļ
x����u/�9nVh���gZر��Z�?>�K>���?qw����V���o� ���c
endstream
endobj
168 0 obj
<</Filter/FlateDecode/Length 308>>stream
h�TQMo�0��W�ة�@�����m�}h�vO��F����Ĭې�_��^l���k�M _�`8A����8�� ���YH4���[��^;��|����m(K!��9N������ur��7�;{��1}� �0;��=�	�*h�r��ݳ���_���T�������i�^�3B��
�BW����9g�Z���$!#�<��a�xOxs1A����O.[�)�$LD����P&�2��b��p�a"B����
Ć�+"�Ab��6�,��Df�,)�=��:M3{O��;��#�,^��&��` 懗�
endstream
endobj
169 0 obj
<</BaseFont/NBIGDH+HelveticaNeueLTStd-BdOu/Encoding 170 0 R /FirstChar 48/FontDescriptor 171 0 R /LastChar 50/Subtype/Type1/ToUnicode 126 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
170 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
171 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 172 0 R /FontName/NBIGDH+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
172 0 obj
<</Filter/FlateDecode/Length 777/Subtype/Type1C>>stream
h�tP_HTi��Ν����;�n]?v���l�\%KRClӠ�A�3�s�9s����5�C�� ��bb�ǹ�RT��J��C�TO۲���`��!q����nAo��s~�s���~�S��#Bi��Ɔ��&��L�+�4M[�3u�.u_�}���/t6�%g�?�[���m~üଁ�k/����e��W�FO��]�TF���dG$��ԫF�����h�"�z�0{SaT� ��$isi�5{��';D��B���4������3M��5�$
f:ޝR�x��S��7�z<�L[Z/MfHR�Sݢ*a]��Nt�M7X��r33CS��r��*I)�]�4�q�&i:�S�)�M���jq��U�}O�wIQi��N�c�'��4��' ��?��?%�i�����[�>�'�����u0�"�#�K򃾼��Cr.:�%��V/�O����[66wst�����ٟ�ىjaȪ���f TʂX;�����Z��M��ŢX+�� ^Cx�Ȑm�%��ͼ�d.�.�5P�d!	k�&�fen�?�27r����M�?گlPm�cv ��u�K#��`
4����(�ܿio)z�,���e��8�mɟf���O��Q�Û��v����:w�q�8�lg�����5��a��P���o�\���D�W�܀��q��ű_�C��b�O�_��?/���0�;+F��'d���軥�1��Bհ���w�|Y9�qr��,�˃���F�r+�N�
�qc��0 �gO��W�` ��~
endstream
endobj
173 0 obj
<</BaseFont/NBIGDI+HelveticaNeueLTStd-Blk/Encoding 174 0 R /FirstChar 50/FontDescriptor 175 0 R /LastChar 50/Subtype/Type1/ToUnicode 131 0 R /Type/Font/Widths[ 668]>>
endobj
174 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
175 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 176 0 R /FontName/NBIGDI+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
176 0 obj
<</Filter/FlateDecode/Length 531/Subtype/Type1C>>stream
h�tPAhA�MҤ�Ѳ�Ə*k��@bi��i��H`�;M�����hċ�H�B��-x�bP(=^{ћ��e&�@��A�8�7������E��DQҹ�|�Ji-daE. �K�z5��݉KlZd�>v>(��)����c�)�;��ޟ��*�p$Jw�f��j͂�x<�`"z�7"�Fc�R�
�R۴PÄ���i�B��4
�\�	K�D���l��UԐI���U�U�"��V�
�TjXG:�2@O�6qimа�t�`ՈaWk�Ǻa���!"�6d�ld]���'%AU��$�	� b�οjl�X����s�J������y��G[���_������c���㧯��ē�?F�9�/uŨ��ǜ&�����2��0ڥI�1�]�EZ��lV��r{wo��;��hT틱������'���qv�������=�ޡ��e��o�{|�{x�M8�,<�ns�hX~�k4�����H��S_]�[���h��9IM�C �m�
endstream
endobj
177 0 obj
<</BaseFont/NBIGEI+ITCFranklinGothicStd-Demi/Encoding 178 0 R /FirstChar 32/FontDescriptor 179 0 R /LastChar 120/Subtype/Type1/ToUnicode 181 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 640 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 540 500 500 500 500 500 500 500 500 500 500 500 500 540 500 500 540 540 500 500 500 260 500 500 260 500 540 540 500 500 500 500 380 500 500 500 540]>>
endobj
178 0 obj
<</Differences[ 32/space 65/A 84/T 97/a 100/d/e 105/i 108/l 110/n/o 115/s/t 120/x]/Type/Encoding>>
endobj
179 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/A/d/i/t/o/n/a/l/T/x/e/s)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 180 0 R /FontName/NBIGEI+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
180 0 obj
<</Filter/FlateDecode/Length 1252/Subtype/Type1C>>stream
h�tQmLSg��ro�ժ�Kf���
NY��Ĉ�������T�B����bE�Ӣa0��a�� N��t��̌�����e	St�ӝ[O����~-{�������sM��Q4M�e3W��L���Xi7U���+VY���g�+�%�9T4C��rl�����yU�c��g�|1��z;�y1�
��#g�gXmn����)��x�ks�]lxnSĹ�!)ɐ^l�"�9n�S�8�̊"��f���R�<1��\�z�7J��
%	3�_j���D�C4�v��L�إb�i7K��L�n%=I���4[+L�b��&m5Ib�?������+sB��,K[�_>94O�PFj��ZC��6P�T.���R�RY$l�������D�԰Ya���ي�A��4*O��ľ<�h
�����XhE?�K� �,�x��P<����}X�$f��\��P�^���n�A����n�
9)`�0�E�F���ǀ�Br���x���	u7��Qw��a��a$+�C�Y�c��d,c՞��.����at?$�H�T�-1�}
�-x���cyC��-�:�t"�Jpr� B
3z���Ǿ=;;��
�۵���u���o�Xm/شL�I�����]�5Ս�-��ʈw��iFJ�-�2�r��m�n��w���α6A�y�� n<�%U��|0����	Q����2���:�-��$hF0jE�qu���G�VS�D�JIw{����;k�n�θ{���V�sm��7�O@{���G�gC�B> n���]7L���8�\�N�L|sa�W��0��)(�V��<r�o�1��8��w����r[�H&���鋠W@���P�
�'��*
��W\�}HZ���E��=�"zόz؁���>����]=�[{���!�kʳMW�'�S���|]��|�Eh`5�T{��	��([
t�]�OA%�F��E6�p�0R 
�	ܱ�5�:�����"mV�~��f���{ǿ��0��+�����1
9G���kN�uH!]�S��]r	��T�����_g�JYkA��5n��G%Oucc�g�ӟ��/��H�מ8{���ɪ�N^�遨��#3�������!
X���9�#@'�9��)딙����~��@� 
e��
5�u{��	P��L�]P[Ew�^��;�

��|*���0kq	�00��
2�`i,�A���FQ����n*R�1��_[��� �!d�/�(п �*�;U��Uj��4Y��%� u�k�
endstream
endobj
181 0 obj
<</Filter/FlateDecode/Length 287>>stream
h�TQ�n�0��+��*!��,����>Ԥ�;�B-cs���M[$��gƌi�޷Z9��v't�)--N�l�{�!/@*��U�����|Z&�C��#��'g���g�Xn��/V�U���9����l��dP� �#�y����wt^B��z�Q�d�@�u����v����?#�ĸt�[�vf�/��yľ�/#���*��Я�		73�}!�sU��x%kV�j�XQC�K�� �O�'���Ҿ�#fk}n�Jb.!��zkf4!��o .���
endstream
endobj
182 0 obj
<</BaseFont/NBIGEJ+HelveticaNeueLTStd-Roman/Encoding 183 0 R /FirstChar 32/FontDescriptor 184 0 R /LastChar 144/Subtype/Type1/ToUnicode 186 0 R /Type/Font/Widths[ 278 500 500 500 556 500 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 648 685 722 704 611 574 759 722 259 500 500 556 871 722 760 648 500 685 648 574 722 500 926 500 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 500 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
183 0 obj
<</Differences[ 32/space 36/dollar 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F/G/H/I 76/L/M/N/O/P 82/R/S/T/U 87/W 97/a/b/c/d/e/f/g/h/i 107/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 144/quoteright]/Type/Encoding>>
endobj
184 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/D/e/p/a/r/t/m/n/o/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/zero/seven/A/q/parenleft/parenright/w/F/comma/x/six/two/E/d/eight/nine/three/U/g/k/H/b/W/dollar/C/P/colon/L/quoteright/G/z)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 185 0 R /FontName/NBIGEJ+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
185 0 obj
<</Filter/FlateDecode/Length 4100/Subtype/Type1C>>stream
h�|W	TSW~!� 4�;	�D
(�& ���l�Zťh��(�
�V��*"��֥�U�tUd����ՊZ\"ԸD1�˨���?sfn��9�sړ���}�������W¸�1�D��2*1u@�1��X��m�0.4�O�P�4�0�P���O�H���E/^����8����e��[L�&�����򑒑���K|
,6�Ι[�H�1���@]Xhh����S8˨����ؘ_�K)�.4-(4��9����<�x�E���"�����J�r�t�D�!ǘo0��Φs�9ƼYF��I7Ҵ0{~��({nn��@7Jg\����(�Ę�X���m,(2���
Ι�K�-(,^��Hf��źQ���u��]�a��*i2�ɥj��Pn�.�h*6�����ܢ���������	]�D�r����Oʑ�a<$LW7��Ӈa�	b�7&\��˙�.L���1��a4ӗa�&�a&3/�_���$�t&�m�� �ߥTʌpq?�ˬaN0w�<%�K�%'�"ܲݎIH�I-���o��e�,J6YV+�-{NX2�l$�l����})7�/zpg�H��ե�K���gO�B����Fy���u`�]?�zG�[1_����;ͻл���ۼn�#*���:	��뤕���X�����2h#��<�΍��du<�0�c"�]O�)�[1��A���lR؃S�@�
�`�"���T�>q(��1�����Ɂ�&=E��>�`(��!!�萳c�!�C�9�;��U�Tr��[��H���S��ʧ��{�<kV?C)�����"��#�:X��!�)HQJ��b�Yr��6�x�c�V�	&0m��
߂�hB�[8
�u��u������^��苾k!�A��D\� ��V)��)|*�-
3@3
ҝ뭬��,�6K�Z� ��x�#�h��2��g�@�8m�ёc��!r1��d��{m��O�}���5�+�
"u��(P�a����Y���6��=���Wm۱n�����a�FfFd^x�FI�o�=��H�A��a�Nm˵��w��95��	��OBjV	Vrk]��6͕��q��s�/�\�LK��`�Z�b�7��u�Ap���<���*XOeU���+�4C�Y��ۤ�<�h�����ղ�/k?=���������#Ǟ��ʥf���� o
��9xA����&-��������28ܱ�e3$���V8jM�q/�؝o�6><*3>$���{��_�k9r�����C�Ycq4NF��p"��R�Qg@�z~�>���f�=d y�� _
'^:jH��[��E}�Rq���+�	�c�X���v�����@_�#ﰌye	l0+kl�6Xmm�Z@���O޶\7lȘ����ǭw$Z����?	ܷC
�R����r$�@�7�׽Y�"?����9s^m� C�J�����3���OW74�G&L1$'N8���I.��_�FX�;�K1H��&$�Ō��r������׎N<ɣb�5<50��
؍����{
�^�����|��/�U2L[��Wõ��p��]���:�|ܹSY�,w���U�����i�����pd����n_E���pQ���"Z-�o���v�#J\�C�B����`�'�1���&�Xe i�6�`��	��]��(IQ�t0�Ik��.�<*-�I�]��jQA��/A�@z�.�b���A ἞��m��8U�aD����_���b����"kq�P*��8�&�e������l��],�\�jD��P�,p����
��RGw�Y�/��"�CՆp=��`� ��?]� ����Tdvj�b`�&�`	�[r08���۶�ͧ(BM�gK] �^)A���Y�x��gi�k�]��*�ܴKo�\3DQiq(J_A˷8E��
��AR"6Aoj�f��7�Ye#\��TŊ�&�G�@�mw^�`�^�u����^�]\i�V���I�b2��K�5	&!�c)���8I��@�b�����z���[<��ӗz�Ój-�Z�w��}�6[�5�����>^�_�����S���i1�(S�3����]
q"�C�`�WON�;�8L��:y�g`)y�}l�Gڭ�K�}Z ��d{��ݦ���m�*�����w�@���Z��DQ�Vy�6�6[��k[�*���F�Ӡ
�4Zz;�I�ݧW e�j}��A��;^�@BͨJs�
��!tHj���fd�#�rO�f���q��M���
�u�)�rjA-fΆXX�9m��]�A#�Ǒ�:�T�$�*A)���+ǃ$�!���Z�4f�A-��\�����o$���i�N��~�鏄?���˽rp�z�;k�5*w�ha']�vw(�?{��Z���O칢9Y�<.-vC�b-�^aB�������}��&(:����~,(6,7������R�%+4ظc������G9z����G��� �[���6�J���ͨ�^zBa-�
~�7�>2�4�P[�"�+`����T����r%��XT`�F7�
3(wj#��S��h���������j��[��S�
�T�O(�����������J���
TB���~<��"��D+�s�a#���Z	<�
�
��O#�mʣ��a��\:BU3���Ss5(˴��ӊ=	t_?�c�{�R���ַ �
�o����
z�Ɔ��knק~_����:e�Ae~�T�����*f<5��Bj�n���;*V}Lmv����/)~o�&xʌ(���wY�2�� >f�?���)�X����G��mO��ɯ5A�=�k9;�'򱄻���1o�_S58j��nƮ�s���)��3bQ*p�	q{έvUu�zp�i�@T��QQ��h�\��&���
�������5��|n�6������B��S+;%Tnk)�^H��F
tk$��>���(FuN旾��Lb������&`�	�X"c#َ]I�S��E���.�\�PՖ��=|�c.���g�wOK�!���o�ڞ�����I��S2�M�+�/�/]3r\�8���p��c�N��K����?A7.?m�@�joR�e��l0ۤa��'DC�]��Aj4FG�'
6(�4ݿ%��=!1,,�	��У=6dЕ\�:c���cϩwx+�"w�ko��n�Πi?��xR�'a���ĩ3� dp#�,�F9��r����2=�Z��`cC�?kV��jq$�������5�e�dw�s������A�y	l
x?�:�S�5�9�z���p�LI��삲<� �@�̾�����n]t{E�:5a��Ĕ���P}���]j����>�A�BH��{x�~����9�LZ���=7�Yڃ\���޵�
%XK��$�S��v^���Ƣ��P�v��G�XX�|M��j��1�;�XLE�iL9ce1VL�v<� ��`�V�C�5�CdU�3Df#�$Z�-9P+K��k��U�	�a�q�r	N�/ 	V�|	�� E��5Ӫ]!SD`�9��1�T����;ԁ��0�ΝН087�
��/YT6WSV�q�-�`(�*߹�b���ׇ��*t�����{Tb�oh{��8�F@-�?;��e��%�奻K���i6`Oo�&��� >y״=������Q8�6�j��7���/�>gĻ~!�&nGA�e�S7Y�>z�������"��&��������ʭ�M`ӛ��"�6_���"[>0����z�
����nwb�}9=.�����sb��?�7�ef	���e�
����v�)���?W�T��>=c>��-�K������M�
���b~3x��)1Z\Iio��<�/��w��]�!�cڱ����x]�4�����3�+�5���On6��_˵�������i;T	$�D| ^J�M<`�YT6�����d��&>�U9�Y���K���Pl�ёV�W����Ϳ�����\=�P�?p�?���	Ft�tt@ �Y�'��1t%�W�����wR;ba���-˨�Ѹ������� $0����(T�m��/G�v������O7:mf�]����m�� ��s�
endstream
endobj
186 0 obj
<</Filter/FlateDecode/Length 310>>stream
h�TQMk�0��W��у��B`���vw�Q���'=��O��n�~~�{V$�k�� �ܨ�8Cכ��4^�F8�7'��z^n~׃� I��N3��F�*!�)8��
�{����ut�յ�zs��!>~��X���"�kh�r�����o�p����Kc��U�2g�*�j�J�д�c"�S�?�!3�� ���7�!�%�e-�oQn|�m�l9�[v�L` vD�l�*O��^΂�0,�CEK�<��Q����%ŉ�&�K��$�wϭ���5���7�[���َ�;�K|0 ���
endstream
endobj
187 0 obj
<</BaseFont/NBIGFK+HelveticaNeueLTStd-BdIt/Encoding 188 0 R /FirstChar 46/FontDescriptor 189 0 R /LastChar 119/Subtype/Type1/ToUnicode 146 0 R /Type/Font/Widths[ 278 389 556 556 574 574 556 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
188 0 obj
<</Differences[ 46/period/slash/zero/one 52/four 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
189 0 obj
<</Ascent 0/CapHeight 0/CharSet(/w/period/i/r/s/g/o/v/slash/F/m/one/zero/four)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 190 0 R /FontName/NBIGFK+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
190 0 obj
<</Filter/FlateDecode/Length 1375/Subtype/Type1C>>stream
h�tT}PTU��^��x;���sQ�@DR	EACq�H�u�ɮ���]XQu�A��ct�B	&S���$F2iԦ���k���͊��Cw��鏺�{�=���9g~��\h��y����ŹqK��*��Y�+�Jު�}�{�7�y-2�6"D�!i#���G�و>Z���{y���t�{�
��Mժ��ᕓ��̉g2-�/''&&˙v�zE.��x�r��㲹�Mn��U�	rfY��2��W*E�
�S����V٫Z�J�U-����iW��+j���Yj�����9�.�%gf���f[Y��Y��U�eN���(v��Pݕ%9��r{�7)LY�Z�j9�|��x�����j�U�*%NV�ʒ�.٦�^+�7V�N��i�:�.O��� )�]���dk47��s�-�r˹|��[�rc�繈�Ĥ��%�r���q����抹�:?���{��G��G�����C#n5tk��u��g(?���+�+�|�O����=���Z�D���l����-]
��o��v$ӓ�@0�
5��0�,�.Xtu�_��K����:H� �у����t�=h�I���۰
���>��$�Ҋ����p�V:�/�HZ��\ղ�+GA���,R��i>�D���:$8�H#]��x�4	M4��^��[ԁ�����~�
a$�
�H�(�n(FWg�$z���6~���<��E�QF`�]���`�O��.hs��'�,�Y�����?vC�]��g�%�@���sI=��Zњe��x��q(ޜ
�{Ͼ�I����LuW�M2�-:v�ь�c`d��q�KH:ep'��w�
��t�����	�}���M+0��cA��bgߋ�P}퐆�+v�������7���<e;�k뷙��`R�%����B����Nv��%�����
��K���,3f�V�3�S��k��)��O��AF�}�A�pZ��0�0�b�}��C�1����p�c�������)k�0i���E� ��!�!j�O_��?���x���� ���yw]�Y<�&V{㶚�ی���Rs}#�:�O�H���� w�� �V���Z���v 1ƠdE!��7^3�rbg��k�l[g��V��57aT�|
F��(� ��s�3ZMb_Vy�-�����O[+^�k�����!�U0	
>��@����%|��y�G|�Ȱ�LŽ83�1ۧq��?�X*���3̸�&�F�ժ�>�^����"��1�� e6@,F�?�7i��}S'�Br�Jp*�DN�����?<T܄�0��BӁ���#��94������P�`8XF���H�e�/ h��
endstream
endobj
191 0 obj
<</BaseFont/NBIGGL+HelveticaNeueLTStd-It/Encoding 192 0 R /FirstChar 32/FontDescriptor 193 0 R /LastChar 117/Subtype/Type1/ToUnicode 195 0 R /Type/Font/Widths[ 278 571 571 571 571 571 571 571 259 259 571 571 571 571 571 571 571 571 556 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 519 571 537 593 537 571 574 571 222 571 571 571 571 556 574 593 571 571 571 315 556]>>
endobj
192 0 obj
<</Differences[ 32/space 40/parenleft/parenright 50/two 97/a 99/c/d/e 103/g 105/i 110/n/o/p 116/t/u]/Type/Encoding>>
endobj
193 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/parenleft/c/o/n/t/i/u/e/d/p/a/g/two/parenright)/Descent -168/Flags 68/FontBBox[ -166 -214 1106 957]/FontFile3 194 0 R /FontName/NBIGGL+HelveticaNeueLTStd-It/ItalicAngle -12/StemH 75/StemV 85/Type/FontDescriptor>>
endobj
194 0 obj
<</Filter/FlateDecode/Length 1582/Subtype/Type1C>>stream
h�lSkPW/���06q�Mw�6��F�,3+�q'�
>�J9�42���̀nM�%�F|@*�����%
�(1�E�At���Z��TRٸ��z���$��k��{ν�|��ﻇ�"tM�/,�ڲ��ʖJ+%���X"�%{n��5��ĩ�N�NԩS'��cp>?��t��U��L%�є^C�R?ғ���
E>1)u�<���&���6�ɉ�ɢ��)�Ĝ��'�yE[��#Wxd�Or%���Rqy��+.���\>�7���Ov��2�\"z
�;�K*-��
�,.��Β2��Y�.��EK�Y�6:K�^w�TK�N��+�D_���o(��r�/P!iA��bVYA�Yt���2G@�X����S֚��S�}m/��n�����=�ބ_g��A^]R���Qӆ��q4e�(+E-�Q������45)�]���R'�g���:��]���F�HDJD]�p�[��oN��1�'��F`~�b410JP�3,�����1��Si��D��
G��/fT>�SE�Y�C:汅?l�`LP�-����g��,���2a�����
��Z�
�!�� �L0�
�����
dLX=Wb�󆌷B�!��W�����"�ޮ�����'�-΂U.�X\�_�%Q�j�b�����ޏދ�gF �:X�'R���y��6�1R�]��yE�:�����6]��s0���ԭ�֕��mܚ��~a*����.q'�s2�uI�$�_�3MӾp޹{���C���ɯ{��ǵu�j�#�d�m~c�f�o4uv6�y@8Ә��5�2=J�G�̕Y��ft@�AE���c&n�~��8|5p
_̅i0��DR�ݻb��3_��5���z%�`(���Z�W1��ֲ@�����Ӑ��K�&8������;�\����zr�j�A;��i��I=<�\=���i��7,�-�i!���
\������w�}�=8b�nF������M��4c,NB��q<���t�)�w��E.s�[m����*,��!�
VE��b��
ٯ/�K0�^��ӗ����t�7^W���Rcf�5n�.m�K�pA���f�C�0���΁A�bF��8�3�.^�~�N
#w|����ߏ?�Hh�p�'-g�c�<P��V�o����� ��2)��;���3w�!C��STg+ƫ�p�����w���?���N��6�ߺQ�� ��A�g�>���A�����(�d�z��{�o2�İ�g��*pW���+1���翘��qRB�9�O�#��}�S���a!�iCmHa".�
��\�
i��V�(�u
\c�dh3��]wn�뚐�豕s���c-�m2 ����q�?ȁ�1�CD/��S2Wo�^-hG��`^!��%���}����I2�BJp�2�Ig�,��l��n2��;:vv�m7��������rSwKC���"�c��r��a0�kݦ{Խj����2s��Y�k�?}���w�~a4���ϼ������_{��^^�f!�%1T�1�[[|���[t5~�8��%24^� -���? � 
endstream
endobj
195 0 obj
<</Filter/FlateDecode/Length 287>>stream
h�TQMO�0��W�q���nҐ�U~DV��2 �������UIʼ��{���Su_�~�jGU�m��ӸX�p���'��j�v��i��^��J�#���ٮ�������G7�_l�������%�Ř/P�AYB�-�'i�����K�� $~oc�
NF*�Rw"�JEV���e�qiէ�,tF&��c
L��>���7�Ïf8B$�Ԕ�N��J	�Y��.�n�pv�@��ML	�A<ȹ;8�����Z2̿�7�Y�k�>����[�[� ܋��
endstream
endobj
196 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
197 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 198 0 R  6 0 R  199 0 R  8 0 R  200 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 163 0 R >>/Font<</F1 164 0 R /F5 182 0 R /F7 191 0 R /Xi29 106 0 R /Xi30 23 0 R /Xi31 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
198 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
199 0 obj
<</Filter/FlateDecode/Length 2617>>stream
x��Z�v۸}�W��^�f7Λ�I��N�m����	Y�P�BRI<_�O�@J�$e{f-G�I`��}�Ļ�շ4V���3�+�*��;���O��;z� _��1zx�;�L�W�i�	�'�z��Q�3_ﮘO=�닲��������K�}�f��>�6H�/���1S"�>�B�V?���!ު�)D���Ǣ����x��O��W����:�cA��`�=�E7�YH/Ă��e �����2[���-^�<�D,<�R��'$��#��#A��A� ,Q��6W.�X*0�{�v����-����[Y�_mw�5)��D�M�۹���ۦ�=��0�\���V�h�PUkcam{M����:.�:�*y�P�`�'3Q� q�q�]�hnj�F<Jp��E%IZ�Ee��`~��r����?<`ahn��k�+욟U��C�P�A�� .�Py跴�Q��W�h�u�vkUޢ(O���Q6|(@�����q@�����?��O����@<�ס[J��o!�s]/�:-�:�����y�ib�h����h�0́�a���l�z:����yDRz�$fB����P���ogO�Vc9��~:J��z[����3όW� �H��BO�B��5�k( w�|�U��슲~��:��4y�E�=TY�?�h[�x��%}0՞e}�J�.���&*���Z�Hz$l=��7��Q�T�,ֶ����H��n_C;+q�BĤ�D���zB�C�3_��ͷС�=v���^`DE���p�be�>�<t_�Q�E&/K)�iB1c�&h"�[��&0�a�X�
An�t��x��!�9�f�)�ظ���<҇L:��1W��k
�z��q�$M����vQj.PY�����O��&��2͓�[��l�kx�v�^�,��5
��RǄ��b��)����{<7�DG
�H]��e���Os��ts'����b
�l�i -q?��u5AC�
���`bK�����^�	J�8��x�|��Z�C73�LHNNס��a��ǽϤ�I?�0+���a	Bט������s�L�@b=�H&�9�(v"o�2�#5ugҲ�hRM��5�j����˝o�(n���*���(�!y����u_�~fV�(I_��e��Q��腑�B�����	!Ω`�[ O.l]�{z@B�0v8X�A�S�[��<օ�N���U�
�ߔ��ϋ�+��t��w�ڨ�A�n��*2r�ގD���z�h�Y��S
Zȭ���R��*�+-�JY�Q?��@����冷Y�:��dU_�-B�2����၂HD[o�����xnu/l��t$����!�}���2��|"����DU1��	bđk&�_([��}��@	�C��i?�`�-O
K����WkD�������<^�o���
R?bUUPh�j��3�J`P�C���1�\N��K� ��
��c��.�9V��9)	�)4|qS�K�%
�$�t�=Ԑ7�gߠ9��_N ~%
�&�>7_&h肛�a��=
�����4���3��CfW���)�.՘��#CV&�`��y�_�hյ �!�of��	a`vЉ����07}����7�I�Wi�bU�~bSU�lo��u���e��y�&%�p

��J�nd�r��
P���坛��9��1������ ?ӫ�
�ߊ���:j�=�!7|7�s�x�Y�(����>�M���[�P蛤�|@�{�2�����Ԗ_\r����;�ꁷA6�`{�q��%�t3��uQ1�{<�o�.T�wj��Sٳ�Ks����3� qQ���dm"�v4����UT�*�;(���$y���UyG0�U���_>�
�������+%�;y*&���%���=|�if?�뜎�O@���O�HN�-��\��on�4"͟t��CM4�z5�Z��Ujo(`9�8�$�S�{�͡}��yY�V�h<A�P��}����!�����̆����Y��V����]J���0^\f:F���3C�3��#tc�v���aB�'��ax���Ș��s��d臤����%0:	��Μh_c;O�������Q?:9�
��q
�'K_
0�C=��q����a=�`��'�!֣`u3����� �t3Yu����x�>I��V����8<m���8
��`�gݶ=�@�p�۞;�׹-���sV��jN@�o�6����B�6�gU��L����_��D�1Ȯ
����p ��1���>���uN����!6���)���s(n�
G�l�o���!u��O9�[Jk��n�s!g(�cr���4Z�YZ?��%Q���P'Wµwz^N�=���g� ��TntH��?����Q�����8�t�Y*�me�R��|v�in�(�9��Jk쳳��T�P�[B�*�/��p�+�S
��H�r ��7���Ő~�l�P�'�iіs��3�B�@��x��]7�����ޠ�e�exԱ�� ��=|n+��V�m�Y�h"���Z1�	�ch
N�>��4�!>sR����3'e'�9x3�܌��q�?��Q�
endstream
endobj
200 0 obj
<</Filter/FlateDecode/Length 138>>stream
x�Uͱ�P��O�Q�������08bn�;����O�U��;;�C8�Z�0��ETR+1_`c�+h�'h���q�e����I��I�/i�zͅ�W��UJd+26�2�=������9.�_�fz�����X)�
endstream
endobj
201 0 obj
<</ArtBox[ 0.012 0.016 611.988 791.984]/BleedBox[ 0.012 0.016 611.988 791.984]/Contents[ 202 0 R  6 0 R  203 0 R  204 0 R  205 0 R  206 0 R  207 0 R  208 0 R  209 0 R  210 0 R  8 0 R  211 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 212 0 R >>/Font<</F1 213 0 R /F2 218 0 R /F3 223 0 R /F4 228 0 R /F5 233 0 R /F6 238 0 R /F7 243 0 R /FXF1 248 0 R /Xi32 106 0 R /Xi33 23 0 R /Xi34 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0.012 0.016 611.988 791.984]/Type/Page>>
endobj
202 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
203 0 obj
<</Filter/FlateDecode/Length 911>>stream
H��U�n�F}�W�c��_���n	(�����J�Ë�}gw)��0@��2sΙ��׷�����:;@� �&/�:M���
n�8�,o�[�w���9���Q�p!!�Ņ݂��DQ��r��[-�Ac�"��P�ڀ���ځ"LJ�QE�԰����]U� ^���uq}��1�	�4���1'L��["4�1�u�� \�#�!;m8JW6�N�~Y-F�B��55�Y>���`*�s� ��(�8�ɨ�LG-4��\.�b���[����Η-Th=�j�5]}�E�������e��O�ٗ����CI�j���%9ؠ
�DR�@	��!����h�*D���"�j̜��#���v��j���W��6�����u�(������
U��>{�P��u���D��	���˦��<@iH**1(1�V	h�f�c�è�o��j��<qP����
Ɇʫ��Bb��B��ghf*�Z�c��*��5S����.���~O��!ߪ��>N%fX\-��?�]GOlQ���5ܱ���@��N��W�u�1F�S���f�C:��z߹?��i�A�5�;ݽ����CE�)��(5r^�!���Z���M�^��{��P��^��/�r�Ԝ�B�^�Μ_�!��[�"��/~�_�^�#�ѻ�r�����\h�w��+T:sF�a�JK�����a�̩�&�m�����!�S��w��8J��v�˫��kh�}	U	�o��� �ԡ{�!0��#������v�춚�)ry���h��窫���{^��.������@�F����ӡ�k��,^zӣ;��$��0�V�n��=|x�I:f8+I�3L��C<�`�FB���?Tr����o"JC��T*�F��骱�s�� ���
endstream
endobj
204 0 obj
<</Filter/FlateDecode/Length 653>>stream
H���Qo�0������Vj]��
�m][i��0����>�&��f��;;��$$4�Pwg����
B�g���J�����m:�gI��*yLH�9��SYmJ�1u	���~��|���,a�<�P�jI�JO���9�\�92��oJ�U�֔@I�M
0����fY�݀npŐq� ���,�&˺���������C��Z,
%�J������w�}�M�D�$R| ���&��9
�8��!�))��wq#)�znD.p}�K����%�:�\ۄ��.���|�~���
f�K��T��*��p3'��T�@�yu�e[��8����9��d|D�gj��n&�� �q%���9]���N��LŸT�L�"��K�n��\3�n�U�>��Mwڜ�gP�U
zЁ2��AkD_M��oD2�oL$�h���Ln�-�v�І���F��iW�?���m@ a��9d�	g���A#���#h8{����n���t,e*�=�ؓ
�J*�lH� �O���УvQ����!~���$�>�R2B
�}�9�Â�}�":�2�Ѯy���P�T8�_�� �����LQ�U^=vG,ݨ��]C��v�&�����tb��{'H�:����c�-^�k� �׷:���Ң�� ?㜟>� e�
endstream
endobj
205 0 obj
<</Filter/FlateDecode/Length 816>>stream
H��VMo�@��W̡�@��}l��
))�T��,����6���wv
� �E��yo�ͬ�{��H�BB|��3L�23�fy�x��,�2�M�����=F�R���: �|H���3
Iģ���U�R������_M2�b
�bU�Y�OzP��J�l�q�V�K��VKk��E�됮�[�.8�|������%��5���(^E���D��t��=Ή�ɽ�����$CL�f�pLݫ_�Ds�ul
���9�n�$z�S��Ms�� %a�Ws)��)��͢d����M�(bo=§���cD� p�t���5�0�JoE1Z=�e�րb3�`Z�f-	��ה�@n��fQ�|�C[�\\�գ���!o��ؕ�����ڴhy.-2�N\l��Ò��9Ϋ$���k�����8�
�����N5w���R����պU�O�IVg�"�ah&Y�������u�l*�U^g�|�hB����>¸C	�ѸK��D13�,&�\@]�n��ڹI� |H��#]�ϱ��$}�De[��ȱp�]�[.��
�@ЇU@�B#0�)���܎������ּd��2��
��mj�U� �,�7�#$��2�R����tU�GD�Dp�/%�cyi����/�]���s�1�	�-W�82���ϗy������"-�Ƒ��
J�f0�'͠0;�I<x�= B��9�]]p����͈�33Y�F}셻��#II��4%�m;�M�M�:����	�E{�l�?|�#�-G#�b`J���AHU]�R������g.�)��I���[��$��  �V��
endstream
endobj
206 0 obj
<</Filter/FlateDecode/Length 678>>stream
H��U�n�@��+x�!lf8���1M�.�!�/Eу���jI�~}9�]��؀-H��6JR"��b0<�_�ǂ5	Ԥ�P�RI���@�Hj�6�kQI��9-ד�՝�I6�,~'3�I*
F�5�����E�?'_��u�^��t��L���_�����t"jMmB 	#�
AP�A6�"ȥy��K���~A��(��	�'�i�D��ݣҖ�޴����)(�БԠ��K�0�8
�ڠ��-L`�&��|�v޸
�'YY�k>�
�l�
���l+�����i��^L�P)�q�VU�Wu�|�o��P�)pV���Yޏk�>cͲ�4b(��G����F��9���u�����������v5����`:�a��g�>B��S���,��b=�i�goP[��/����\�TLHx9"ƶ�d�bÖ���f�GD+��9��&k+ѯ�v
u�kin�ɖ36Y[�x+v;lց��	|�A#���ub=��?1( "�U�I��j�r�/:�b��#�f�c��c��ۮX)p�k-K�}���ԇ
=ղmh؅��
m�5�c���˰�<;�U�y�j��j�t�,�aH�,����;Y���֎Ĩ�T}χ#K^4���)�W�]Νj9۹E�:�ex�sf������іs�	��  ��
endstream
endobj
207 0 obj
<</Filter/FlateDecode/Length 785>>stream
H��V�n�@}�+桕l)��K��\���ԺHUU���uB�������o8�ؖ`3sfvΙ%���JA�D�P��~���o�;��c���R�ʐ��4 Q� -܋�������v`��$��=�����0a��(z�b!�).�c��F�G��e�9���$�RI���,\��ö��$	��
8�O�pG ��0�%Q�� �8�a���W��I���_��Y��2��^ϳ4�4���j�/&�X�f]貁�LM�	ܯ�&[�kȳRFzXc��#�F�A�٘�u��
�4FK�y�	��k�p	w��_�������pG
�0!���K������;����n�{.'7��HQ��LR��0�e��ҩ��³����,՗�?�@Z���_�%�v��!� !���AuwӉ'�G(�f
����J���^?Ǫ��m2�����7�w�x���$�+��a���Ҏ���E� ���b6�KS,uY'6�ۇ!�P�v=��4è�5�ï��;�� �q�Râ2ܘ���j4�1�g�`^`��A��@3�QquS�R
���I��2���G=F�!Q8a����;6%�N'P�$lϏ],Dx��{*�Hm�"�H��	����l+gEX+ΈoU��$iI�O>I��sszh���vM����`;*l�.�)����I���y��GH
�B�/Lk��`���q�$ͪ���12X ��q�TU��[�?&+<5�4�����2���os��=�����mQEj��I�4:_��W�` )���
endstream
endobj
208 0 obj
<</Filter/FlateDecode/Length 818>>stream
H��U�N�@}�W��)^�f{�H��BbU����K�P_���;�N���@"�{ggΜs&�32��E�
QL���������ނRj_��	.#B�v���^�W�P�`]u�^Wy�����.γ����'�z4{`����z��.8�qJ��=�J��70���U(E<_ C*�¾(Ήٓ;K�(FI� � !�B�(����r8L�>�9r��%FD+�� Qғ �Y��1o����p��.6�_�����#R�"0RI���-�����8	ߨb�ݷu���g�������I�bu]
�i��V��R�?���H�K�6Gr@�؝=���mQ�ELP���QI�i��>n��W!&��H�>��4��z�p����@yT����oPF�
Э6A0��J��䝤i�fU�p��,�k
Q���8��
�\�6�u������&:��CR��lbK����1ٰ����?�~�6���Δg��	3:����
b�1u\��PA[�U\�p�c����F�˖|��mŀIT���I��
�(�<4vn�H�ce��,���+�V���c?�OY��\��IcO5�&)����
s�d�*`x
B��}<8<=�V��`O�ġB���6nS�d�vNQl`���9!Ul���3�zm��q��XXE���I�T��Iޥ�u�@\TZ��L�:�r
^��t'x���q
��/6&�6Fe�F�zñ����;ِ')��m8����VY�k�ȍ��i�.1
nL%#'����~0e�7,���,� �S��
endstream
endobj
209 0 obj
<</Filter/FlateDecode/Length 710>>stream
H���oO�0���SܛI ���؎�v�mBڟhh{BJ#�ɖ����6M�4��Z�w���]8��LbB	&����bp�	ɴ�P?�o�!	.�%E$s�>� v��d	J2!��DLcBr��
��I>WIj�Q�@�bB���qM���2*���ͯ/��\V�Ze����j�,VZ ec�H_�kڴ��Y�`���^h�X��"��^���)nOy��i4���qSp\�a��{n�v��ˇ�z��yVWYQi[ԕS50\2i��t��ހ�k|��"�w,"��;v�?Y��Цϰ�U���M���Y��L����4�Osx�װH�rX�6f�VPW�;�q��*�3d�k�)��
���MK���C���U��]kd\)�IBb�_�u?���4��t�~Wm��5�y��ӎz�v��a�-aN	96 2d�
�H��4�?F
��*R�M��󳣐��y�pDqI�9./4n���9v=R}�;}��L��Bg������~�q����A��P��w�(>��-��u+��C2���GCN�е=M]Æ��
��
�~!	<XH�:XH�-��/�'��� ��ܝ�bA���$�b�K��!��e���.�����G���ZW}�&}�WC�:g`���%A�7V�����`�ۏ�����F�B8)���	|c����W��`� }I�
endstream
endobj
210 0 obj
<</Filter/FlateDecode/Length 767>>stream
H����o�0�����J��g��J�����v;��i�%q����ߋ��rB������L�`�-p1��߮6��K�ʢ6�����L���?�Y�J�4s0uk4 �<
����8X�y��NK�l�"K��$��ߓO3�y���F�w�-��g[�E�����i�#T)H2`��0&��ƇdF��-���Ws�BL0�c	Y����qS�f_���2���p!Fy��s"�>Q�\�KT�%��[�ɺK&��5�@��T( �VT�t9�ev� �k9E�����}Id������/��ܲ!0L��s�tѥE�l��3m�L����j�L�k�l�b�&�����ZW�׀���NQa#*LZi���nZ��:��zB	%��OJ�I�ΠB#,�8���=0�c��Q��$!���������g�s3M�RnТV}O����!ٷjh"a��1��,�-�sI�I4�d���s��!�s����l,R����@�
�����3?��)��������aX�n+�>���ʨ�s��y7����UҺ
�w0��[z�uQ���s��pO+�Of�=u�ַT.�5�`�р�.Rv�PH*��Mnb$	�����#��2� 	��V�	��������������;�������8�6�>�����T���$Jz�m��_��)����@��-D(-��:�B�˭�]��������/�BaWx��k�'�l�M%Ux�mu���a�b-�  ��9
endstream
endobj
211 0 obj
<</Filter/FlateDecode/Length 271>>stream
x�u�;O1�{��-A���iߕ	D�*Jt���~=�%NIh�̷��YX���>텁�]XAS���H0��+���{XE�DQ�D�8դ���e��2���<� �����Ʊ�`Id�:��6�F(&(/��jCj���%��0b�8M��E�D�F����.3���c$%�ie���a_����\�;Vj�Yd9�5k-�4��vTW=Y�'��뉑g��+�b>�`�l�2Gs�g��r˄�����Z֖�?���cܾ����Չ��:�+y�
endstream
endobj
212 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
213 0 obj
<</BaseFont/NKLNOJ+HelveticaNeueLTStd-Roman/Encoding 214 0 R /FirstChar 32/FontDescriptor 215 0 R /LastChar 122/Subtype/Type1/ToUnicode 217 0 R /Type/Font/Widths[ 278 500 500 500 556 1000 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 648 685 722 704 611 574 500 722 259 500 500 500 871 722 760 648 760 685 648 574 722 611 926 611 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 500 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480]>>
endobj
214 0 obj
<</Differences[ 32/space 36/dollar/percent 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F 72/H/I 77/M/N/O/P/Q/R/S/T/U/V/W/X 97/a/b/c/d/e/f/g/h/i/j 108/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z]/Type/Encoding>>
endobj
215 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/F/o/r/m/D/e/p/a/t/n/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/zero/seven/A/q/parenleft/parenright/w/d/g/W/two/comma/b/x/U/three/six/eight/nine/E/colon/j/dollar/H/Q/z/percent/P/V/C/X)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 216 0 R /FontName/NKLNOJ+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
216 0 obj
<</Filter/FlateDecode/Length 4176/Subtype/Type1C>>stream
hޔW	TS��N�ܠ4׋m�7Q
* �3 �$N��P!*��AA�
�R�V��鵶�Vڊ�:+80��<���w��;��V��k�+Y��s�������>�\���I"�J���	�c����3s�3�R���	I���Ϟ����KTK�w�EW^��ꎃpΛso������+n�R"��I@�,��̞�Đ1k�B퀰�P_z
��v
�����m���g��k',�Y������J�6��6�.ԧ�k�33��S�h��s�\���a���Ѧj����y����왴/#]�9Co��7hG�͝���6;#K��
��/N�\�����\���H�g��ӵg�͚�M���^�d��>�0��hG͛�M�J��K]��$
�Y����2��iz��Tz��Ȑ�����0#;+ǿ_�$�$A�t��?�j$�H��E*��$��Aғ�xK%�%.��
I�C�ђ��G�<�!�c''�)�i��V���j����E���|�\"ad-�H��nl0ˮdOȕ��3.=]6�T�<�Эì;;v︸�q�w]
��t��)�ӲN՝~V���m���ƺ}�f���9�sm�u�%3��Vl��ҫ�VV�,�����"���8>a���O��h�7�v���Ð��x�w<�����|��\[Aޮ<�^s��:�-���N��윲����x�ōBZ���Wq�7k��~
���(��n��auwX�6=n^n(�M.�le`5{��pZy��L �Ѐ�r9�ٕ�X��a�I�.S�G���Yn���q'W=�+�u��.�q)�S>6��h�xy�|; :��h�+��z���-��V0��g���4n8vtA��E����B�e����*�e���'�׶eL0Q�m��}30O��E�q2�~3�7QAp%x[�G�#�葄C��
#�a����_(,�:��'x��P诂�D�շ
gE�J�CT<�}�p�KA&�2�]��I��e�R��'�M��:kT�@���Pd���Y-�pĄG�` ʈ��(^5J�X��";/x�_��� �
��a��0
h��� ����b�<�`L��1=�s5��*(v��Ja�Y�mG����GA�}��U���F�Q3��b
o^u��3��|�0��i���=:ẋ8D.����AK��S�u�.@��}���'X���e
��B�Q��9��1�%d�}�l��5����L
829�'���U�`�^����Sû �	=ͩW�Д�\멽GO�WA7���
{F��z�`&w�T_kQ_?�>,!=���t�r
5���$C�y�6�S�0���L0�ƾ,^s�BxΔ�s��p����o�p�"��F����ڝo�d����Jm��LtҠ�u7V8hv]�|��!�.���u�Q9e��ٙ���*���ᶉ�!ڨ�2�Qs��{
��.|���!����kx���5��!z���-�2��1e,�����kL���u�/�۠g�1lLv\]���!<՜x�hj�'������*7P���r���,f/�b����p�C9��6��ra�QYm���J�h��0��s��=��qÆ��p�,pG��6_=����~HvJ\�
=_����t0�|�~���̾�3T�1��Š�O<�h8�e�t���Z���I�1Q5�EF�C!�זf��>�Z�3��	�a�7�Ru����� �kE;��Q�ٜ�0�&t�؅�k�������5����B�ك���W$���ZGM8\���=�����T }x�O@�
��&��4OYl��5�?%&��@iƹ�k�m)LOµ���t��� ���&(5��'&e���8+w����<b2.����0
��<<%����������ˁ���.���Q�0���¾顥	j��X����NÇ}4����Q"�x� u�I4���Y���2[����E�fBo5��t�J�t�`(uv�S��5�;Eb5��^�렅a�n'{��(���$7I��"��fw(!P����8�|
��1
"yAG��V�\�� ���f>�9�+��P*�&;ybO��oD��jk��+��	o��&{�ê�g�\ߎ]�d����Y�+��ul߻rm)y�;V�wGEV������dX��&w����'����Mo�#����bKAw��`����m�uKA�$Wl���M�]7���B�L���]�
�+[� �m�7��vW����v/TY�"��
l<Nc ��X��D���y�G��D����q}P��z����R'��_�	�8$�1Ԧ@
d�pY�d�w��:���r��o�>�<U�F��턦��z��m��Ŷ����\o8����Æ��𕟶�A��4��o�!����,�7�x��-�?� pB�Ʒ�Q<��Ϙ�����V��<eP�>�z?��������V8���mc�6i*��
۟%���[��qCqC��Э�2����k�U@Bo�J��4�VVZFY�b�)�$6�e<�e��Fw��iQ�� 
��^��{�t�����	p� �P�S���9�-�j$��	�}H��ZL7=�:�s���R����Ԕb_
Z��WCQ{��4yқV�+M;[
�k�JP������ N��X�`H��V�hvX�1�\-���6
�C�J�a��)!8]���X��$t�ǥ��'WlB��7*.���c-�'�g
	��#���Җ�x:�3�͆0�4�C쭴��Ӟ/�E�l��o&�=0	d���u���
� ��12H�sF1��6�F�!-�+�\��b��D���Sv�����ӛ��6]\��98�_Y���b�������B'�]�m�I��+4fҸ�����S�
��o�[��Z���5�>�~ao�9G��X��A����p����W�p��g�V�+����'�l=�8����2���f��/c��N�!������G��gkJ`'= �&=D})�������QtC����=t� p�e�MZ8yJ�%ӟX_W��[C�>�\���,p�L	~N��;J�9���0��T���*!���?ДnY��n�vl�_~F����~�>Ӽ��Ӥ'��� 3���#�R�a��,���F&�dY���~�x5���~t^ߌ�� �s�����[N^y��w.n�:Z��B�܍�)�Q�>s7��ύ����=��n�^�b��M�kY�t�ڥj�I�B4ÂF��*��̫�a�	o�∉����<:g�jyv�!H���Cg
g�"1�L�[�ٟ2��=N���`_*q�&����~y�ʑAP>m0��8!|��������[��t���j&;d�^4�f�좻jHKm��K�3|i�d���1:b��l��Q/ۥW��+i�YVO
�&f���2;zq����?��/V����dbᒙ��eB�j˖�j����.緰�dj�іBׁ~Q(�ǿ�w�A�HW��h�5%F�ǴɚN��sw[r��)���E��M��4[��;no�z�y�����n̶[]��l3�k����͋�%P\��[����Ev6������t���D-���W����z�ÇףP�]"�"�M?���t&�a��w���Ϯ���f�YF�"�����q���i?w�O
�.a�"up���ub�
n���[�f��\�9*X>�n���]���֎�1#TNYT���Ծ�}i�@�9��=�Bx���T��_[
n�C��pMCv�tNu������n��,��z�nz�>��{�i�1/�W���,���q峗~FɌ�V_q� �3�� ��o�<.�i�m<���/�:���S����5b�C�!���uqi�^�e0��(;2<n����!��%��LԖ��qm�
1�֗|�pԗ�HGy�#_I�
����O��WZZ��fs��%tt MB�`�X�8��'��.��G`>&\�+�-+���QDӺ�}�\(�S~*��j>uI�1a�p�4!8B41�y���ˠ�pM�R�(�0͘�k����D\�U��K+�g��}��}	��7�d�-]�?[���q�R
7(�U��Y�S��M����]��b�l��cĻ�Ů����a���ܿ���ݖ�
�|F`����O>c��œ]�{�� NH�
endstream
endobj
217 0 obj
<</Filter/FlateDecode/Length 301>>stream
h�T�Mo�0���
;��)k%�4QM�aZ����tH#D����mH��د��~��������#4�5�~�጗�B��i�8��Wwʁ ��:���m�CY&⃒�诰x
��9[� ޼A��,����ar�;�#�PU`�ID��ܫ���o�xuy8g����)�^�B��������87�K�$V�)�����V%e.�(_�JY�0�F�a�`5��]� (NJ�Q,� (&�=d�!��4�7�,)b��%���Š�'�3�Eyw���=�\c�Z����ޱ=�&? ^Ӕy
endstream
endobj
218 0 obj
<</BaseFont/NKLNPK+HelveticaNeueLTStd-BlkCn/Encoding 219 0 R /FirstChar 32/FontDescriptor 220 0 R /LastChar 57/Subtype/Type1/ToUnicode 222 0 R /Type/Font/Widths[ 260 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 520 500 500 520 520]>>
endobj
219 0 obj
<</Differences[ 32/space 53/five 56/eight/nine]/Type/Encoding>>
endobj
220 0 obj
<</Ascent 0/CapHeight 0/CharSet(/space/eight/nine/five)/Descent 0/Flags 262148/FontBBox[ -165 -230 1099 972]/FontFile3 221 0 R /FontName/NKLNPK+HelveticaNeueLTStd-BlkCn/ItalicAngle 0/StemH 134/StemV 180/Type/FontDescriptor>>
endobj
221 0 obj
<</Filter/FlateDecode/Length 838/Subtype/Type1C>>stream
h�tP]lU�i��+]�v�&,8{c�/]`E,[R�� ��V��@p:sٝ��L�3;�۠�'�mem)���hZH4jHh
bh��h���&g��Dg���}���ι�;�=,SSŰ,��x�+����,%p�{�MeuG&ݩ�o��W�6_c������L�����'�.�3Վ�����v�y�&S&z��9B���u�]��0��&��%M�ɀN$+kP{&���
چ
L,7���HB&���H黜���L&IL�&���YɐS��5Ծ%��^9�3Tg�(��X3����s����n����D�hK�/B�����G�K����8M��dLLɉ�9��*���k�n��qE�#����9�e�L���I0]����
V��gY�~z��`����������°~�(����ʐ���x���:���\D]V����F��
��q���X	~q��_��}q�ħ3�z]UL���_O��K�_m�l��W�Cc�:�D~�{�jpj=PTY�=��PE,Ȃϙ�����NH�g��>B?�����ך>
��_Ν,_� O�&��H��z^.'������ޒ��h�/ۡQ�o��'�k�ѩ����s��w�F�[�:��������",KU��y�uB}��^���ʹA�=��{��EX}��� ����8h�[^��H�D>KCMm��n���n�=�<=<L=�N#7Px�ã�|����{�����K�����ώ�p�@R���t���T�{iG��R�`������*�{b�����9�;C��G��2��BU�ȑ�b������G����v���  ۚ��
endstream
endobj
222 0 obj
<</Filter/FlateDecode/Length 243>>stream
h�TPMk� ��+�q�L�-H��Rȡ4��]}I���1������V��sftz�N��蛷�� �6��l/.8j5�e(]^�$�(��9�ԙ�焾Gp~��c�'��z�^�v���3�sW����mA�@��Y�1!�?�_�:���ذ
g'$zaFΪx���#lS\�%<٘U��}��B��0��&�͡\����ܰ�X��f_.�ǟ�в��Y���K�$� ��z�
endstream
endobj
223 0 obj
<</BaseFont/NKLNPL+ITCFranklinGothicStd-Demi/Encoding 224 0 R /FirstChar 32/FontDescriptor 225 0 R /LastChar 120/Subtype/Type1/ToUnicode 227 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 640 500 500 500 500 500 500 500 500 500 500 500 880 500 500 500 500 500 500 540 500 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 500 500 260 500 540 540 500 500 340 500 380 500 500 500 540]>>
endobj
224 0 obj
<</Differences[ 32/space 65/A 77/M 84/T 97/a 99/c/d/e 105/i 108/l 110/n/o 114/r 116/t 120/x]/Type/Encoding>>
endobj
225 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/A/d/i/t/o/n/a/l/M/e/c/r/T/x)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 226 0 R /FontName/NKLNPL+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
226 0 obj
<</Filter/FlateDecode/Length 1315/Subtype/Type1C>>stream
h�tR}Lg�k{wPKe�#�û�E�UʈHq~"2ѡI
�X����u0��@��! �b�(ƹ�(�C؜
�&3u�}��?���=W�.�[����.y��~~��9�P)�$�rW����$�X���a����T-���XJ�]e�HVK(i�̑r�J��ae^�
Q�Ӗ��|>~|�F,�"T$y�����6{��R��%>�p�s�\h����\ј�l�*��Hb~��%Y�⊪R��ns�]RY��UY)�
;ŵ�SrԄ���/4�ol��)�E�Tn�]R��r��$��Q!�6��YevYlU�Jq]�]�l.���awb�X���PLLˤ��O?$O$���XB�D,%V��5D�O�'6�x�D.6[�s�i'O)f(���QE@�L�V����:*?%�|vT٪���{ihGc,Z�)����N�2��� ]<��"�mZ��
i(di�ka��� JN�%;�RN�X�K#�&
��O �=��'��û�Uh���(���W#�AG~
��R�N��A?�L��FQ�$���(��	���hx1�@Akq�0Ē���o��v��0���bZ�8���\{�0�0$�|0��r[�N_�o ��^��dYw'"M9��@��FO���۵�����\�-��Yݔ���ma�E��F.޹���!^�n�n�wV��NV7R��T��;�Y�������;m#D�)P�� ��R��u�4λ��J��(��w	�y�[�����*�]]R�����j���N�o­�$܇+� �sJ#�1��h�+=r3��[k94[BsP��A��H���C~y�o�u�fl�@-��jp��9�Ή3��A��Ŏ�W��s��}҇��A�R�u���W�cacfӑ%2Q2��_�`.,>��b����ū,#�x��j�Ŏy}�ƹooX�.hE|,o�7O���e/��A/��@�
c��Z()`���8
���+��]��Q��s���Q��H�`� �~w� wmWf����"�Y����	kQo!�e�\i�iݍ�H`����� f��J�{Y���4�Aj������
j4_�أ��[��R[aiL���4D��y'���IN�k��bT��bJ!B�
s��]P5�c�gm���|���ĥ{���ԩ52�	��evx w����i4��͡�(�'�u�6�枰���MC���:�
�d�wlo��rv�^�H��k���얽Jygh�::���S(��Y�e�
�ѿA�c�MA&�2a���7��'�G�S����ܴ��O�',��Z
�)@��р�G��h�c�d%��  {���
endstream
endobj
227 0 obj
<</Filter/FlateDecode/Length 296>>stream
h�T�Mo�0���>v�!|���"��n�}ht���0�� ����u���7z�yQ�K�M�_� +��鴲8��Wl;
q���z�_��8��e��/u3���Qq���{�l�mt��*��nas��?(Q��|a�z��6�O�y�{�G�[�,!��x�1(M-�ֺEI��8s@���Xɵ���e�5�(0��=S V�����g
Ld�'s=�)�ɱ\�����Α�c���� ����,��lnK���MH<����~�m�609[K��k�rS�4�6i��^�-� �䑰
endstream
endobj
228 0 obj
<</BaseFont/NKLOAM+HelveticaNeueLTStd-Bd/Encoding 229 0 R /FirstChar 32/FontDescriptor 230 0 R /LastChar 121/Subtype/Type1/ToUnicode 232 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 685 500 741 500 648 593 759 500 295 500 500 500 907 741 500 667 500 722 649 611 500 630 944 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 500 574 258 906 593 611 611 500 389 537 352 593 520 814 537 519]>>
endobj
229 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A 67/C 69/E/F/G 73/I 77/M/N 80/P 82/R/S/T 86/V/W 89/Y 97/a/b/c/d/e/f/g/h/i 107/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y]/Type/Encoding>>
endobj
230 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/I/f/a/n/y/l/i/e/d/o/s/t/p/u/comma/v/b/k/period/S/r/c/A/h/F/m/one/zero/four/hyphen/R/N/P/G/seven/Y/M/T/x/W/g/two/three/five/six/E/eight/nine/parenleft/parenright/C/V/w)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 231 0 R /FontName/NKLOAM+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
231 0 obj
<</Filter/FlateDecode/Length 3661/Subtype/Type1C>>stream
h�|Wy\���f���A��LD��,�TEA���,Q�@4 (n�ϧ,F��-T�Z��������D��.������3x�~��A���>�?2w��s�����(GF�Px����}�1��X`�Lb�iL1� �ǀ,���$($G��+/y�zb$潽�6���m�ȶ��v�:�=��(I��]�c�>�b�2��ѻ�?=#[�!�����`Ct�9�h>;����oH��4[��-�Ƭ CtN�!U�7��B����|C�����e�M�L3�'Ӟ)˘�a�L1Z-33���gN5������̜���Bc�lC�)Ә�o�2L��gN�jH2�fO7�K�%�2���1�ߐ��e�M�m ��ᴐ�)ϐi��Ӛ=�b��2e��y�=㆏���2d'��~$�(�I��90���e�.
�C�	P0A���+�j&ّ�b�2L$�$1�6����!�)��ab	L�b(��0J���q���p����P����y����]1I�Xq�a�C��?�#�VGo��փ���9�Q���Vp��DU�j��E=Q�I�/�d�EN�s��X���W]ڹ�r9�"��u�µ���-��S�s�X�
C�q��q=}�+�����������,<�Ѐ5<Ȅ}��Υ��C_$��N��ʔ�i����\�8	>JHj1�!���)�M���1�vЃ3
�&�`��	Aס��ߒ/dIGL���!H�n:��Gg�:vށ��ÞS1(
$y��!Hy��g��3)}�:F�cŕ�u�A*
����Q�@����P���K�#�s�$�r�y�$-'�:��b����
�C@p~�`#:?$��ܨ�ʡp�.�~��j���m�f]�4�b���.�C�PYn�!��ժ6�@�X�Qi�A#e���rd������?���/
����n]��0L-}I�p'����pL�p����:�F�{�Q��{���V@��Y�0��׀�� @&�誽��
����1a�����%"
����AxC���'j���o�ު��[��l��a�tD߀��i��Zٞ���ɣ����v��CV�6C91���A	u�tv�p
�"P���v=�
�1��X�.ku<������A�e"o�8{{<�=�7�9!46 v|bt���á�4��� K��ૃ��P?b��,��ԺBX8�N{�
�mX��|#U��fN�Utp\?M����)U��,t:U|f�A�P��)B��#��R+{k�&^
�ve�_%v� ��		IY�����v�o�ׁ��^�bo��&�R6ł^��i����`��9+�܁��j�<7�.�Y6�J�Ax�B�>�@��k��6�צ
�=.>~��kz�ڽ���~y��T�=Q4&�j�;��'�{����pܥ�k�(�_��t��r
�� Y�CM"������/���ê!SR�O�:f�y�����a���0��6�
7�5�h���THƩإ+��iDհݓĉ�Λ�	�O|{j�h-e?Z2_a�}G�/ �`����������q���5�(iB(i��ZR��<!�;-���i	��4C�[8��r��k�9
��K�^�=T�-�R���1	8=1��e �0b�
Ui�j��F&t��(p��iWCK�[�G�B��//��@R�@j<���e���oT{�Aɍ譔U�;������wp��N��g�UFm�n]aKZџ-ir���?��If�w��R+1�R�h���V�2�#�������D���Å?�-$~�na[����	)��@Ns���"�r�! V�wpWA9��^
�8`1N���
�Cݜ���9D�Й*R�
a�{%���yq����)~�Z�6MM�y��%�_�y��7j����耉�=�v��	��+{r�b���"��4��.���G���T@O6��<,��A� �^>��������71��i�)ݹ3��8?3t���
"л�!��X�:[�����6��n@��z����͢f9��m��!PD��MQ�GŚ�i�}�㿴�-�-i<�Q����q��X"a��X�%�<zǻ�m_��h�7�C'�'2�F��E?�ڋe���Y� &��p�B4΍v�"�=�9�.@��6��4*�Ò+��s���rBFE��}_Z�?���֩q�k���k�����|1dA��to�}v����a�v�����+�����n�ѣ:X�����[_��\2��5�����.r���?����R���꭪ԭ�����0��}�5U,�
��R�x>trTx���?�������z��i�ڤv{ ��/�F���股��5:Pk��|�׈��%-4�'�y?_o������s���4�)�ehR�Fi��܉i)��ߗB.��cةin�?���v��+�Q|�9�G�䦻M��<y��O�;t���MQ-�<�|]q��Atƞ������D5�O�vܴ���
Q�?Z">r�g�x�а�S!jp�Sd�#����5y������V����{�T��V�ߨ���XfP��(f��7�4���fP��ԓ �;�
>A�T�N���V�ލ+U�3��6^��}Q�:�����k���x.z锑QIkj�ؑC��2� ��o���~�{��^���ʝ���ã3�"E�qI�Tȃ�r�'^
�l�^o?x��o�az<L�Ux����d�)�XO�����,zN�<#ZI�?��x8�{&����#EUrR>�Y7pt�
H|���=&�@
���k6?Z��ǃD�W�}]��g�qz<B�o*�E�@���i���a�A#sFMK�QWP�zgY��
��-Kyg��y
��j�3��=�%��_#C#M�k`�7D� ���F�������>���;"������ߣR�Q�H����	{��fZz/�r�8;�� ��׃� h�a��[F�d3����G�=��y j�>�r��/��"�ڧ�}h��#;�3e����b�V��8��V���ƫ�u�%zmx����.�~*�Ŧ%ΐ՟�U63v^3u�~LfVC�ޟ�S�
�·�ï�[z�#��YyBw��g�N�;b�<���N{�P��	���ݛ-��yv�$ݘ�s2���ۅ2��_)����v~K/93z����g8�Ƣ�6o]�|��������
�|���^5w���nϤ��P�%W�n�|�'�M�h��a����cOt?wa�]�e�vV�y�ZT�BZ����%�,�Fn�
x�b7b�,SFf����堲��ۅ�Ǘ�/Y�s���x���������Z�c|�BNK��B(-R�K;�_�����',Е16���r�B!�֛�/���L���v���f��^>�.
m2V'��4�@�}��9�]���̼|�U�N�����j�ٱ����1�G!��)�D�'
C��$�y>�<��TS�p���c�~6#j�d[X1�a��585\�t��(OrA�J��\)���8X#%��a$��>���XV����V�Bn��� ��3�;UCs��n}̅;4>���a<a%-�?�b�����[Ҫ0�>*�jՋU�������6�|������l���b���|�vu[ꪑj<�W�
0 ��@
endstream
endobj
232 0 obj
<</Filter/FlateDecode/Length 334>>stream
h�TRKo�0��W�ة <�Jik5��=����`:��@���c�mH�/�??bmv۝�&���`�8A����8\�A8ṳ�hh:3ͧ�5}� ���u����v��T�;9��_a���S��� z�
�ΞaqH�D�/�}a�v��
lU�y��K�#D�]��C���m
��6�k{F(u\A�ZW����S�D�Z�Y{%�8&��,	��Tp�x-xM8}��\x2��������+�=��H	a�@!6D��3E�	g+��3�0!!ٖKk�y&�5BX�_���ߨ8�L��⑈���Da��4�c���a.�ӎ���x��������W}0 ��
endstream
endobj
233 0 obj
<</BaseFont/NKLOBM+HelveticaNeueLTStd-BdIt/Encoding 234 0 R /FirstChar 32/FontDescriptor 235 0 R /LastChar 119/Subtype/Type1/ToUnicode 237 0 R /Type/Font/Widths[ 278 574 574 574 574 574 574 574 574 574 574 574 574 574 278 389 574 574 574 574 574 556 574 574 556 556 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
234 0 obj
<</Differences[ 32/space 46/period/slash 53/five 56/eight/nine 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
235 0 obj
<</Ascent 0/CapHeight 0/CharSet(/space/w/period/i/r/s/g/o/v/slash/F/m/eight/nine/five)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 236 0 R /FontName/NKLOBM+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
236 0 obj
<</Filter/FlateDecode/Length 1532/Subtype/Type1C>>stream
h�tT{PTe����!JW���AVvo�W%��\EE�J-��eu�Ż�"��դRj:��&�)�d	�Ԉ�=��i�T�c�s�\:�зN��G�?��;�w�wsYFð,k�=�hN����ew@����r�\4�������)�������uH�����q2z�|�S�T-	j��+CH���В�oL��[U���~)#{Ҥ4*��=��Ӥ�q�2�<��\�Jj}~��'Y=v�R�Ul~ّ.��Ҽ(�'͓}��>�CPr�$��Wl�Ҧ���+h�����i�Rm_Ui��+\�#��I�����
��Z����������Y!�<^m�L�rŦ�J�����$��!U�j%�R��.�S� �G�ˊ�F��j��s��~���K[P2?Zd��W��0��2=3�IfR���f6S̔0�E�b&����I�NW�W�j���@i�r��ʶ�?�,�٨�hfhvh9m��Q{�ˆv�~;{C�n�-�l"�
v���q�MP��Nd[l��=�!�O�b�¨��
��>%����INB:����p���p�Xu �5jGo��$�G�9H$-GN�}�p�\�YE�s
�����	S���c!��q�|Џ�3,e]��l<ދ�C]Om քu5`^ ���V�a�(ܹ��r������e��B���OM¹�%�Y��7c�V�?g�����f�h�=�Y��9;������vp������s8��`�I����������ܥ֦�Ƈ�R°���&��HѨ�U��[j�b-;�����{��YRh���{"��]�ܔx)!{�c��8��Q��;t�.�p���2<O� �1,r��x���?�6�e6$�{S5��A�@��0�^"� ����QH�"[����0\������
�)ⵓ�f�/Ev������v�����p���#B��S� ��{h�'�a�F��D���ƻ�Q^#���d����hB3��W����2Ny�p ��j~���6M���QCR=��T��8�>��X�;�'hu��*Z�"4S��t�1�J�ܝ[�Ӈ}�
���ZS!~EC�����Gp��z|�����5ٚ�ba��r��#�y3=s�1�pm�u���ߧ��&��[�F�t�"��~��C1pT� ���ЌE�a*>e�������ce�����ty�v0�cH�T��W�	�v�����ݾ3��5������&a�Q0R�k�m^kȝ&O]EO�f���@��u= =��!�qJ�n�k�7�8��!E�[���M�Vp�7�_�L^�l�3F��taS�i&b�`������9�{�(ܞ��-}�.Ԕ��j���7���`btY�c��J=��DE�f���#X�j9A�FB<F���c`��
5:u�/BZ�ͿqE���➅#�fa�_�2'�u,D� ��k${������^
���a�j�&X'!p�w=���uF��P���l��
�l�u{�v(�ߑ���𶟷E~�����y8���(�%� �}�
endstream
endobj
237 0 obj
<</Filter/FlateDecode/Length 296>>stream
h�T��n� E�|�,Se�M����*i�,�P�v��8�Tc����ܴ���0O���q4���U���3��8\�B8�3�Н��.�U�X�T\O���h��d����w,�<l�����u��S��A��j��h<dPU��e|����G��C��"����cG�(t�� H�U ˲4�����ܪ�Ʊ��ed�\m"�ar]D&�dQF&C�M�
������s��Ϭ4Z
�$�2�c�xO�J-��,E8�*:��Q�7	�bn�څ��oj��s$d|�(T��3x{F;ؠHX�[� )H�V
endstream
endobj
238 0 obj
<</BaseFont/NKLOBN+HelveticaNeueLTStd-BdOu/Encoding 239 0 R /FirstChar 48/FontDescriptor 240 0 R /LastChar 50/Subtype/Type1/ToUnicode 242 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
239 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
240 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 241 0 R /FontName/NKLOBN+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
241 0 obj
<</Filter/FlateDecode/Length 779/Subtype/Type1C>>stream
h�tP]LW�)�l��� ��F�5�bLt�QS�!P�����;�edw���Ew�д񁄨B	��ƦMJ|hB�C��>iR�CV
B�9�g����7��9�w����rO�GA*Z�5�h�:L���iq���i�v��8����'[�������䗜O�A�D{���K�g5�Z;�<��Sėyy�+=SKt1R��V�]��.Ҩ1J�3�)����c�
�j
iL&I�+�H����6��!�E�LE�)��&F'�i*Mƨ��&9d���)Ŋwi:�IcS5�g�ɴ���d�$�8�-��e�Di�t�ez(1S13�);\M]%)%C�K�&4���"M'qj2��SiS�T-�4C�jv~�~�]�����C���xw��=a���v�N<o�.�/v��?+�p������XD��$pIa�W;�bh@�E�w�E��e�7��9��'�7θ�:`I�Еٹs�ܕ=�����C���~*��05�P����E�^F!l���"z�!��K��x��\�]B	�n	$�B6�a]%���J�Y&s����M�g��6�6��i;����҈��?��� ނp~�D�Ƿ�@K}kl��������@�j�܃��ewn^��w�����<���HK�]���׃ۿ('�лOv����r\��e}��$l����.��4%3e��~Te�b���ȥ_��ϣ���;�06
��E�<�0T�cȗ���&�xj�c�qpq��d�$��^y����wn������#�Uo �;~,
endstream
endobj
242 0 obj
<</Filter/FlateDecode/Length 227>>stream
h�T��n� ��<���z�0i�ij5)�u���N�ɐ@9��4�6$��?����y���Q0=&���sX� \qt	֙�e5�IG���9���!@�2���9�
��:Ϗ��J��v���3�K��8�O @)�80~|��'����.kD�5o6���A�~Dh��A*@o�kLވ�`�4�[�ya({�X涊rC��ݓY���ډj�q�͊!�w�d? ��m�
endstream
endobj
243 0 obj
<</BaseFont/NKLOBO+HelveticaNeueLTStd-Blk/Encoding 244 0 R /FirstChar 50/FontDescriptor 245 0 R /LastChar 50/Subtype/Type1/ToUnicode 247 0 R /Type/Font/Widths[ 668]>>
endobj
244 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
245 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 246 0 R /FontName/NKLOBO+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
246 0 obj
<</Filter/FlateDecode/Length 531/Subtype/Type1C>>stream
h�tPAhA�MӤ�Ѳ�Ə*k��@��c�4UD$�ٝ&�lv��ntŋ�H�B��-x�bP(=^{�[��e&�@��A�8�7������E��DQ����
�¥,�Z��G6�-�,�rF�{ؔ�&��lHb�B�<ɟ�8�7���r��?%�����¡(�2��՚W��D��d��E!��!�%ǴPÄ;�b��Ad����4X��&,"��W��	2XDVQC&u0��V�VA���&�RoȦR�:�!=�T�l��怆��H�F�Z��
�i"�T�L�oT�Q�u�nJ����I\�AAĒ��&�T�baC7g�̕��%�AE��9��&�(�7Y��g�����������v���;O��(�p�_$�a78��8MqW�g�c�S�A�CS,D��'�@��<B_���˭�ݩ���âQ�����<(����_g�ؾ�����wif�Ν�y���|��x�M$�,2�nc�pP~�k�4�Э�PY�S_Y��������1:}�>_
��0 ��0
endstream
endobj
247 0 obj
<</Filter/FlateDecode/Length 219>>stream
h�TP�j�0��+tl��Iv�%F� �n��vwm%3,�Q�C����v�@��CO����%@~���-��ͬ.8X��cuX���<�H�)��R�<Ep
���9��u�+� �� [`s.?�b�����)@M{!G��Ԉ ������\��gp�J#+ꧪ�$��3.��V,n�E���k7��azf���YBZn	�Χ]��U� l>k�
endstream
endobj
248 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
249 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 250 0 R  6 0 R  251 0 R  252 0 R  253 0 R  254 0 R  255 0 R  256 0 R  257 0 R  258 0 R  8 0 R  259 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 260 0 R >>/Font<</F1 261 0 R /F2 266 0 R /F3 271 0 R /F4 276 0 R /F5 281 0 R /F6 286 0 R /F7 290 0 R /FXF1 294 0 R /Xi35 106 0 R /Xi36 23 0 R /Xi37 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
250 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
251 0 obj
<</Filter/FlateDecode/Length 934>>stream
H��UIo�F��W��
�c�>sL�j7�t	�Xz�Ȇ�����f�BRJ�� E9|���\ߺMY�wM�
E�E�q������f��������%|�k\��Z*�$밺�ep����l1�o���/�2q(v�߁�3���5HB3h&����^�����寳�{�1v����2��F�}ƪ,�[��$Z��4���M�Ļ~B�3���펒"ڎY�Z���Tt��֮�~�����qy�7��+��$*0�:�T�
�pW�����D�0�jн(唚�䄧���y�qm,=��z����Ə]e(��?�;ˌ�:Ax*7�S���_�����M^=!��ڄDD$& 0;^=�،�dΛ�ˋ�jx����+4�뛊L-�P�!�koW���]CF�%�ƒ���j_5�)N����nIٴ�s�����1�!=��(���(��k��+�
�x?W^�����?�sˈ��Q���D1�8�%�lR~Ӵ)�-�fs�n��}.z����-<��#�cLO���E�L�aa�̎ʪ�o�������
�0�4TfYY'��4f�4���8�Zy���S���.��Ա�}c���й�;X�c����v�����^)�ɨ��(WQ��&�S�R���C��0Sq�)#DҤÆ93�E�Ǒ����E�x	�K�����={�?rP�Ay��v_|��E%?���UL�#N��0V���Ok[%���}Sv�P��]غw�|�@i���~6n�<;w�œsb� Hճ�D�d���0�s�G��Y8I��:K'�ɞ�/�Uߣ����-Z&*�tJ8F�g,��4:���h����aB�d�~	�0
���3ϭ��й��}��*���<b�%b#B����l0���l^~�
�� RQa
endstream
endobj
252 0 obj
<</Filter/FlateDecode/Length 734>>stream
H��VMs�0��W�1�iU�,��P8�0��ppm�5���r
���d����8$3���Z�{ow
�Y�$�g
�9G�]l���7����ޕ�}���G���GpyIx��2
�`�D����W{��fmYW��� C�x�|��^��n����Ye��fF�z���~X����.��)j���;�L �K�["����Ov��[�������#�N�*&u�o��+��eg�.]�"� �x�:҄ B����qz��_�i��2���0���s
P0I�-�9�� �a
xR�)!b�%��|����""��cD�m�?�2�3a�N
b���MQVYsEyW�*�,�43�LMP$<�b>E�PxG�L�4�8IØ�DZ2:l�N�yU�˶���%�l
D��(���{�8��0�Z1ak���C5�p�����#z�
���Vm���L�gYkO��ﳭ��n���l�n�[z���nn릫�'@l����Y�aw����{ ���j�Qtd�E�P����C�9�zyG-�8�uD������`fX҂���<��'^�X6RL�"2�7�=�]#錾�>hX�N�����ПG�Q�^�A�c2�X�I@���Ʌ`^��:Ƙ<��y���#�æn��-����Y��m��)�lA����ᾇ���q�����:}�r�$�����Ȋ���ޕ�u�꜇~$&į#�ռB��ߋ��l�W� ��>
endstream
endobj
253 0 obj
<</Filter/FlateDecode/Length 696>>stream
H��VMs�0��W�19D�d�X�6i��3���iz0B��M-����+���0����v
@�]Fn� �2x����X8a�)I���\(��	��Yt� �#��y�A��gV��IʒN�����Wbz�#�}Ȣ]B�(a&�P��&�p"�G�� �$	��	#	S2��!��[��'���rZT^�Â�!�f ���R�#"�l\���q��k�=p�:�1N�RG8���2��D�Xvq��ƘL<Βc������&��T�_��E�#�[���yQA��km-̛��Ya��-\Q���M�4��OW�(*뚕���������'�7/Z�{t�Ǣھ�z�#�?�U{'�\�܉�U�3wb��O�������O�m��7F\��U�/�Qj�_��eژhu��Io�l��f�*�ڇ\<�}���ԉ ��x�sz�LJ�8����0�L�n�;(,T�������Pa�����7X�j �*���XW�
]+]�\�g�֙:1�Έ�I�-/|A�O����]r��#yn�俖�L�}�l��(KXW
�f/�
O�"�W��.�%��L��z�<���e���кZ�ܐ���WD���3�c�q|v{�Gӏ�r�^D���ع���}�=;jK�P��
��n���=�s��^=/@�Ë(9�ce;KEJ����1>xs��-�O� #0�
endstream
endobj
254 0 obj
<</Filter/FlateDecode/Length 715>>stream
H��V�n�@��u�%���3�H�Ȋ#s��0ӓ�$�~�aVh<4K-�ޫ�x��_`@�` #N$ū�+H��y�Q����֐{��s�]-%�|����s\���� %H������B�/�_���;�ST�Pٸ�P��r�p��6�O��y*L3R��t�O���5��^�~m�mmY�f�[\�Ua`SՐ��M��EI����
W��1�]�֯i�Ue�|	](F�R�H��D����,�H��h��)��{�Ǖ�]Ele����p�w�d{�sWu��
!�%��xع�����25�:�di�1�&qS<$��)W�(b��`3r�FɩŞ� B"�����i�Ι��nT\�=���f�'����i��M�1[U�r<5�|�>d�Z��]�C�a�
��BN4g,�21��)��um�K֯j�m<��Ƽe�Y�=~����٣IK`�r{�(��P�l��^�O�V+��](�D���GsBI�����l�����FF� �� ���?�lP!�y^��Knl�}��ߊ��xHt觴�C'0��ձn[S�
�]Fs:b$��0QD��DN��
��^�����K��}4�䜪��H�a��ȆxN&�[��H�:��]#
�:�qF�-]�8��P��vVG)p'W��c��e?bЋ^��˩-Z�����6i���~.�?��,w{_��O��  �D�
endstream
endobj
255 0 obj
<</Filter/FlateDecode/Length 729>>stream
H���Mo�0���<�@�J�dKǭ@6t�P_�u�V ��l�-v����I�؈7H ����!��x�R% $j`]�<��9�E7��8�0���F�8H��1I�
O�lr���;{�J����P;s\�4�ȣ�A���y����U�u�n�����H�7��2OǊ����P��*���SX��K�B+��'.��-ߤ�1�z�5���պ��|�M[ز��l��6�x�XK'M[��6����\������5�R��S.s�jXB�L#:�4�@�D��S�>�)�YI(L� 󴀸L�$8G���ZlDhy�b���o����/縜��'��E3��|�� "Qj�9|7��
���1ɺY�s(�4[eI�Fcδpsԇ$F2�FH����p�e����
��Fv�c1)G�:&o�P�\xl7��OË����6�	�y`D��ԝsv���?�q'q)��Ӷ,N�̆q\%������C{�[e��V^�ھd���{�
I�u�&)������5�������=�[X.�0I��鍯�p�*�S�����+r�2�=�^#wKy/�(~���x^��/�����CT��=.`�}YW��uЇ�l�����IUX���S[�I}����VuU����aY��K���Y �x�mk����;q�
��LX@��¥pӐ2�� �XM;B���5+�c�
�rې�lk�`�.�� ��2
endstream
endobj
256 0 obj
<</Filter/FlateDecode/Length 719>>stream
H���Ko�@��|
_*%Rw2/`�1M"�U*U�R5=�T<Z�M�~������"��j����l �P�?A	(�W����u���d]��o`���M%�����p¬��Y6\��ֽ�Rq"WX\��ōD?�#	�k^l�lI����C���&V��"ĵ�=.��y�.'6.��m-h��!R5�1\8���<J��h��C���J?'��x��3�Zs�AILτ�>c�:�q@�M$��bk(����}�3��Z	o�$j+q�E�O�\.�Ś�F$$ʣ�]q�'[���↵9q�*ꮈ�8��ϝ�p�T�@��E����h�LU��*)r�p�n�E���t�^(E�ZRJ�NI*m�a|\�xgN�ڃZaq��� ��橆����\F�j^bď�E.3�6�"��10H��!N�$S�μ�Ů������O�S2��#CA�Tc���N���6u.���$���(�l�n�ev��Ǫ�
��&!.���#���W�%�ژ���J����1?IԈ�!�v8��6G��:�e'MV�J9�f�|Vb��Q;˘�٫��i��"�(�N��GP�3�2�f����US�?X0��S��{����	g��IFkaQ�kX��p�*�����+�v��T�KVU���Ur�. p�K��W��t�������Ľ�z8'��N�>���V��<�=��H��kS��<Ԗp� �'� I�'�
endstream
endobj
257 0 obj
<</Filter/FlateDecode/Length 753>>stream
H���K��0����9�R�z۱{�v�R[�R��������D�����w�h

0��f �e�˦�z�*W7Uq�5{7�~�����0����>L�qꝃu����uY��+��ȸR��$/l��gG_Q�.�� ���K�9�В	i ��?63!) ������U�L^�r�Q.�ͅ� ml?�
��/�!f�Hbܘ�1a�"9���R�=�<!o�yg]3ibf	�Fc�~��y�<̋%dU�k��sw}�׹{���{�=�f8F
>/vic"@ ���P�&�I�4x���v���$/�WE�Lɍ�����H.�8h��"�h�2U�m��CD�R[�>��(|v�޸"<����O��I�����aұ|��P2������l!%�.�xD*�8T	.�%*��	���7L*�ǒ:��pF���ږ��A{�rBc����e[�[�ܮ	X�,״7֋���\Aq��a.�{ͦX��uƃ�Ć�g�D��]�-��4��_���R�,��r�&~
*ЌP�Y_k�jj�=�UZ�q6Ω\����Z�f1�a�Z�#Էk4 �ujC-�����!�UO�s�#�-����Y��<���}��UUn�o�-
{|��>ޮ���J T���/��z3>ۢ�"LW�)������$Iö��k�.�]��;'��³�quVe�U,����7U4���Am.&��
�rekܞ�
����*ߪ���U8���.��t>��H���<}Ni�_ ��6F
endstream
endobj
258 0 obj
<</Filter/FlateDecode/Length 793>>stream
H��VKo�@��W����龽{�
�@@s#wC�:q�J����N�56���ݙ�1�  �N������F��
�3ptc��|J��	���N������������|�v6�g�5j��q�6aa3Ijz�']�^��5�ܠ�څ�p��
o��h�XZx��q���7,�4{�5���]Z�
���宪����������V����b[-�0�Y-Q^�tƙ�t�@1L4<����X�j�
����_�1�w5�(�2"�=�b0��P��8�=g˱l�Ik"B�[��{��\�:-Lȓ�	w�[֤W
�z�ʁUYl��R��+���H��W�%�m�K���39�D�?�A.ew,��ۈnR�h6��RD��S���Q�Nm9�Ɏ��.�O�:��BeC������B	L��8��7�Sm�<��b�	e��O+Z������<V�x��ƈH��G�Q�s4j2�3v��H7�A#D�Ij�D�De���Z�!���gd��S$�'���/��jz̊�#rx4"|����1n��� Ѿ�9IUK���>sG��(M�{_�pj�dMU�f�Z!�j�ww�-<�2U�zWn{��P���#�:2[��v�kC�t�!]��U(Դ4j�S[��k�[v��k�����|v��A���wt"�ڃ}��*iR$�KqC�N}�T���ߵd�kß�z��Kh��)?��dm�F52�r�_�8���@]g�$${H	�6��o�����)PJ�7N��&g/�K�M�X���j�a���wD�tQ����i�����=_���  y�"#
endstream
endobj
259 0 obj
<</Filter/FlateDecode/Length 226>>stream
x�u�;OA���.�t�ym﫼@$��D+^mP�P� Bïgw��A=�x<[�n�Ǔ8��`V٨XT�D(�_�uD���jֹ6U"D���.��8�q�0��G��i-���i*hZ_�1`h��p}�{���̈́*�q�y����v�+�����B�C���%�L�U}���*Xj��0��%�H����}I�q)Yd�~�[�ٞ�g�������#�g�8��m�7�Z�
endstream
endobj
260 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
261 0 obj
<</BaseFont/DMNBBB+HelveticaNeueLTStd-Roman/Encoding 262 0 R /FirstChar 32/FontDescriptor 263 0 R /LastChar 133/Subtype/Type1/ToUnicode 265 0 R /Type/Font/Widths[ 278 500 500 500 500 1000 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 648 685 722 704 611 574 500 722 259 500 500 500 871 722 760 648 500 685 648 574 722 500 500 500 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 500 500]>>
endobj
262 0 obj
<</Differences[ 32/space 37/percent 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A/B/C/D/E/F 72/H/I 77/M/N/O/P 82/R/S/T/U 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 133/endash]/Type/Encoding>>
endobj
263 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/F/o/r/m/D/e/p/a/t/n/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/two/seven/A/q/parenleft/parenright/w/x/six/zero/three/g/b/d/comma/j/C/k/P/nine/eight/endash/E/z/percent/U/H)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 264 0 R /FontName/DMNBBB+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
264 0 obj
<</Filter/FlateDecode/Length 3850/Subtype/Type1C>>stream
hޔWyTS���5��3�[�I�˨EAdr�E�h��(�
��PJDZ�Պu���H��O��RK� 5T����S�}ӝo�w����G�ַ�u�=���9{��t.#p"`F5#)9**�/N�U���L�&����������ͱ����'�Ӎ�G��p2����D�����sx�T ��	�qb<�s��3W��WM��O�I�m��*h�� �����]�S�/���e�f���������@UdV�j�}�<�<]�N_`��2�TZ��6C��կQ宠s����:�J�^5C�.}M�6/}Uf�.G9S�[���./�@�U���L����2T�����V�R%f�����ч�z��H53{y��J��������z��L*���2sT�:}������3�22��3ss����_`�$D��[�dR���.�`��p�h���
�BAԋ�\�`���$�A�"3��c*����!�!�4&	�	�����DRQ��N&�W�F�i��)�]���+��r>���K�А��C��F��~����6�-�툛e،a��]�JR%J�wwuOp��~ֽ%����o`h�nV9��9�
�b#�������m��F���tL���	�#	^��J.��K9�fw�����gϔ�w �C�W`8������7t��S)����=7
;'�I*	�6���F�Qjk�k�/ȉ҃�c\῰ni��1�෉��Y��b�V�X�����c_E<�B�8�{`t���*���Yx���	��`*����d���Y0�$��)�Y�>�ܕ*2w@(�#��T�ٸ(m��"q��/<��P,��Pfdര�88m���0��DRb�[
�i3ԛ���)��kp�A_�`<Lx���o�2��0o��Bx��V����C/��q�($�m�6	��.��j}���h�fK��w�	�S�8>�3U���Xn��ᓼ�"�c�4���)�|��& {����^t�w�n3��|�S��jT�ޡ�R��V(6H?1Ř`�y��}9��U�o�^�ݟR�&�H	�M���B�!�]aрZ/��&�6i['�WV����G�\��#@w��M
����Z�����ȈČ蒒��o*�z0��������$�aӊ&�U�l���0���Jቨ��y��g`�4�y��_mM���es��YT�y���rˏq(�]0Y3�ҍMv1G��d:��a�p7Ш�Q�d�UY���ZX&�S��� � �5�S���S�p�����Д�q�����=͢dyȄ��ߊjA9���$|}���BIQ3A�FN~���s���"`��B�K��?��&�oW��_#�-B~;U��4�w&�A(��
X�l!���8�n���1��v���o���$3�2H�n�\�kl�1e�Mp�y��=�\Bݜ��7Sr��C=�k`x���`Խ�W4���ƣu�����q� �r�(Y�����]mk[�nF�"m\��]ψ�3$��<�_��| �ŅΏ�4�z�ϵ�O-�NQ��hËJv���U�o�(���(��/Pzp�_ �B���m͵�?SVW�0aS��1r���Sm�(%M�)�����PZn�c;�e��ֈ���5���Y�D�	��0��&��="�D$���Pe,/����.X,��D���lb4�8��E��XF��9xD`��ɀ�={oIK�>u�s-����h_�m�q��eaU�r��X��y�v�/+���K3P��yD�b#o22_[�W,Bk(���u�nD9�š4)�c0�2�&��S�Z���8-�Z$|��
"w�xPJ����kd�,<��.T( 9�
��Cp�+��nV���F�+1�H;ԇB;�b�r���x��&�B~�����I�5�w���m�n:?�h˴k5��r�]����nh�X����
.��S��kZ!s�"�-��P��* ��}p���q3��(3���}�l�Eݴ�m���4��l�����=�
�H
�vx����̿hfS;ef�f���b���.znM�@ؽ��J�͍�yS\�j-|�EXV�㠐�Ĕ���i���G��B�E��Qu}Q��(�EaT}�V8ܯ�{�Qr0P9�]�t��4#n�h�8�L~=��F�8U�U���)�����,B��9��T�[�j̘i�AJ���qh�����91;�51#��8�B�Ͻ��N{y{qS�G���õ�z<���@�I�CY�I�L��Ի;�.���	
��(C.�֎� ^
D�d{i���C��v"
ƞ7��Q �J�|��TH�U��(>�d�=�>�ߍ�Z�z�R��*�����RNM-���e�`U27-���4�ߖJP:+�P�R�J_�q0H��g�SH��(7HO�i��lb��ǥ��N�.9�]���n����W�~~����\���r�ڪ}uJ�/�a�¾��#6)M�����/6�D&�o(R�}��!zt�Pwj^o>r�b��3��o�`�B��Đ�Lχ�B�O&h5�������2:��k�����`7���g"칶jqrmG�9u�;x���b��Y�y��J8@o,��1'he�����\�W��p��8��C d� ݯ!SK/�$G������~po����V�A�fh5Q?��jp%i�M;�P�ASii�F�[(��k-G�?��&���b65����zLˇ�7^�K}���E��C���2Bs�qqg��Q�b4���G�m>L�9��E��hr�օ&���� +m��nm��S��nS����<CKZ�d�����M�L|���������ܴ��즘�۶!��
��EKC�!�K����i���ߝⴑ��#m:e>�{|��_���j��d-P�/��	{+r�����������G)~��A����6S:2	:/
G��5̏<te��* �N�r��)�2��N3s��L«2ԓ���g?�-OT�3�A��BϤ�דr�p�Z��P\M!��3m&aU�FCL��ӌ1�gq��:�?���p[YXZ������D%�سgK��p���z���9�gv��{B
1ބ�X�k�6ha�	�R,���C{XӨh�߮��G�Q��?=g��@N��{�qpI�С�x���;{S�C�]�k���Yɫ�R4�=�(�17{�NYI��p� Q%�ROl�_97;a����oSܛ�	0��'`�~?�+�A���
~�B�w���+�+�2�^o����R��i���<$ӝ�
�l����Mm�r&8PM�"\	��N)��΃���l�U<�R�цMĦ�S�$�p�,�L9k2�mM��b#�`��,����Ü�'��4�&�OM�f(6ř��O!������| �u��$��f��휲��&��?�|�]c����b
���'��'���yٔ{w=����wKgy�G�,��u����s�~*
L?u�xkM&ェ�����ˢ{�
�Aw�R��g�����vw����|���'��b���_5+����(<=<o6~r��������T���x���b���D�ėlѢJ�^|�ȟ�[��>��iU��Z��ZW�'�Etu0�[[�}���1�: 0���9?NTMl�Df"��E����PV(���`�?�=#��ՠ����M0>�X(y�p�
f��!l'�T�$!�nH+�.-��ϯgO:ԥe�k�d?z��mת`Q���ū���;�mP�k��ٓ��T�w|y��)�D5��!>NxH����6~����=����m=��Y�W��~��G��X!����_ִ���CGw<�a{���0���_����-� �x�
endstream
endobj
265 0 obj
<</Filter/FlateDecode/Length 306>>stream
h�TQ�n�0��+��*�L����D�8��&�ݱ����!�];M[$`<;3,�r��Z�� ����8C�[�q�Nx�-��^��Sx�A9�d�_���v#Ե��T�f��c��O�:���
�ޞauH?�D��p@;CM;!��ʽ�A�q�����szmc489��+{F�����*@k��D�N*/�2I�E���$�f*�y#(㪮~�1��*=DW�	�	�Ė������EJ���0�QDE��!\ƶ�e�D썰�7�q�A86[����&��i�aoax<���m�nt<%�ŷ  0B� 
endstream
endobj
266 0 obj
<</BaseFont/DMNBBC+HelveticaNeueLTStd-BlkCn/Encoding 267 0 R /FirstChar 48/FontDescriptor 268 0 R /LastChar 57/Subtype/Type1/ToUnicode 270 0 R /Type/Font/Widths[ 520 500 500 500 500 500 520 500 520 520]>>
endobj
267 0 obj
<</Differences[ 48/zero 54/six 56/eight/nine]/Type/Encoding>>
endobj
268 0 obj
<</Ascent 0/CapHeight 0/CharSet(/eight/nine/six/zero)/Descent 0/Flags 262148/FontBBox[ -165 -230 1099 972]/FontFile3 269 0 R /FontName/DMNBBC+HelveticaNeueLTStd-BlkCn/ItalicAngle 0/StemH 134/StemV 180/Type/FontDescriptor>>
endobj
269 0 obj
<</Filter/FlateDecode/Length 911/Subtype/Type1C>>stream
h�t�ole�{����7c��'��2+��\�Xa�*�o���=����rw���)j�!tGi����ዚI��'Y���F�ٌ�%���w۳D���������}�L�fEQhww��l�X�"υp
���l0 =�h��F�k9�aGi#�Յ՗,�r�f޲�ڼ�T�/3-��P�dF#Q=���q���N�!$�1��(*�+h��'�dB�T,4��X4t+XN��� QAReN�qND��zMp��,��r��s
%,��N7¯�"�q,�b"�%H�ʉT$��RB�$���˜�A����q���\�*eu��>$J�ǲ��v %�� 򪘐�������%O"�_t��bz����i�|�M��lfѩYmi���m�u��+ϭ����d�!�0f�߭�/0��Qۚ�к�D�����#�t��ة	�Bup�!՚��ՠ
U_�x���#UV���,���b��%C��\RrSˬ�^��'v�o���m���%-�}��<��B�Id�l&�k�����@K� �O5��s��ޔ�s
������K�X?~l�E/�����b�\eK�>f�?��e�'+G��0tiѵ. �YNC|�~�t@�O�&D_��Gp�:��Z.�N��O�߯\��	��H+i�j'��Jh�ev�F_y�|�I���v���i�1�*���Jn�T�ȑT�;����y�\�|��n}:��tya��`�8�O�7����6��i�����	�j��4l�u�����"N�->&�o{�]t�˙�t�u�X�/*�d��3��d�7�=^:y�NǇ�.�Q��,�Q���ʡy� ��&G]�j̖e�VJd`ܮ�o���� �{ ����g������ü��;�ؤ����00 ։Ġ
endstream
endobj
270 0 obj
<</Filter/FlateDecode/Length 242>>stream
h�TP�j�0��+����lB
FR>�A���HkWKB����մh�i���=uZy�oΈ=JK��Y�@��4�
H%|�R�@��_g�S�mK�{ g�V��ڞ�m� ��ItJ������_����C��ā��3�/|B�Կ�e�M��b�H�-��]�Bxd�Z��H��A|qG2��B
�>�{F��0�~���C�:2����X��ݾX�?KCKΣg��>Wkl�7�` Ѯz�
endstream
endobj
271 0 obj
<</BaseFont/DMNBCC+ITCFranklinGothicStd-Demi/Encoding 272 0 R /FirstChar 32/FontDescriptor 273 0 R /LastChar 132/Subtype/Type1/ToUnicode 275 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 580 500 500 500 300 500 500 500 500 660 500 500 500 500 500 540 500 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 500 500 260 820 540 540 500 500 340 500 380 540 480 500 540 500 500 500 500 500 500 500 500 500 500 500 1000]>>
endobj
272 0 obj
<</Differences[ 32/space 44/comma 69/E 73/I 78/N 84/T 97/a 99/c/d/e 105/i 108/l/m/n/o 114/r/s/t/u/v 120/x 132/emdash]/Type/Encoding>>
endobj
273 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/N/e/t/I/n/v/s/m/c/o/T/a/x/emdash/d/i/u/l/comma/E/r)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 274 0 R /FontName/DMNBCC+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
274 0 obj
<</Filter/FlateDecode/Length 1712/Subtype/Type1C>>stream
h�tT{PT�?w��{����^:pɽ7��
>�FǨ��h��(Hg�WXvY�,7Jx�"% 4-�+�D�$�G�`}`Z'�fL	1i��~�f�s����9sϜ�q~����w��DQ�k���&S��T�kNs~n�5�u�k�5+ŕ�p��fU��*�Di��yE���I͓\x�	U�sw���aHKQ�}�����5g�K^���/ ��9A^ ����%f�wZ䔒B��V(��ϲ;v��e�^$'���[�ͅ�VK���V����;�)=�Z(�e�%�JP��l��4g[lfg�l�E0�3�����yrj�ò˜e�M�=����-~-E���r�e��W Qd���"��b�2"�V�6 �D�-چP5B�����ɩ�l�5ϖow�����ψ�(	mF��]4�&�@����Y���fP3N'�G�i���7�����i��VSd�=L�j���-�*�(�WA�,��yT���3kX���*�xu�UK'��Z���Kh(�X/������xf���$�B, $���@<�)�<D��~4*e�� �V�q+H�N>�6Qc$�Ny���Y4>
\�P8��r_
��
�,.QN$y����~3ϳ��ne�(ج��N��
8
��A�'�5��3���[���XX
��R�>�����	�3�Hڀ����[���gK%�ʘ�S��|���m��{#˹������Ι��H�P�����\��5��Ƃ��@!�ʩ��sł}�_ۄ��]����4J:��Y�Rݰ��V�`��g<'p���b���1� t�6��HXnb2�.ؙ&,����X�_����A��|7��"R�b���,|ڈ
��̵�n���Y�|"�pP?�ᥱ�.t����t%wv��G�Kt�;K������@��C˶�~������||D��a(�����0����}k�Cp4����g�\�h�������=��C��:Ss���Ύ	W�}3�A�a�[ޢ?�E0А�xyl�{��No��/��L��j��p0�e�:e	�;F6��~���w���Ǹ�Uw&<��!�c3�~������㝮�N὎�r�$oq���ș��ܧ�G��⇶��¦-���e��{��~���f�w?��&��/Æɞ�D��Ät�}�=m=�Z:�����$�I�׸3�W�'�S���t!ќ���"ݹ�I�{��{�."�*�������	����8��h�p0� /����;���HG,��Y�ɕ����A��w�Ϣn݌��Ea���K?	����נ��'��9�7zm)��� $Ƨ8ݤ��p���\Y��J���S�7�4a*?��?��[���e��]U��HK�Ǟ��~�#b}	�ٮ�s##�}g����
��<��T�3M�gO���:��܊@t���s�C��'���ų<ex>���.Vb[m�)��8>R1 t}x�p�4W����L��v�5	2�"�= evQ�R�H0��}ኗtN'�?]P��q��2{�!��S�$�������_�;z>���0~����܂�xNwsF<�Iɦ�<�iv�=n��Ȓ7��@�����ʋ��K+�<=��+@d�j��r�w20��'�~�&V�x5t2:�a��j���0�Ś'���t� D�[=��ic3��̂�ѿ����Hk���6� ���`0�������? �rX
endstream
endobj
275 0 obj
<</Filter/FlateDecode/Length 303>>stream
h�T�Mo�0���>v�!(�B��&q؇F�;
�!�8���$��"?�G�b�|(U?3��p��W��i\�D�b�+!4������Pk�T\�ӌC�����w
N�Yaw���)�w�_M��W����A�j��T3���`�x�\�z@��C�U#��,6c���%�ZuY��P5�cL������0�d���8>8&C|�|�����c2,K�c2�>?����1�у��Iئ ����eIDI���VU�z�����i��
��|��_;�[�b5���5϶�Wx����ط  ��
endstream
endobj
276 0 obj
<</BaseFont/DMNBCD+HelveticaNeueLTStd-Bd/Encoding 277 0 R /FirstChar 32/FontDescriptor 278 0 R /LastChar 121/Subtype/Type1/ToUnicode 280 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 500 500 500 500 278 500 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 685 500 741 500 648 593 759 500 295 500 500 500 907 741 500 667 500 722 500 611 500 500 500 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 500 593 258 500 574 258 906 593 611 611 500 389 537 352 593 520 814 537 519]>>
endobj
277 0 obj
<</Differences[ 32/space 44/comma 46/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A 67/C 69/E/F/G 73/I 77/M/N 80/P 82/R 84/T 89/Y 97/a/b/c/d/e/f 104/h/i 107/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y]/Type/Encoding>>
endobj
278 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/A/t/a/c/h/o/y/u/r/x/e/n/period/G/f/i/s/d/l/m/seven/two/Y/b/E/I/N/P/v/one/three/four/five/six/eight/p/M/nine/zero/T/C/colon/F/w/k/R/comma)/Descent 0/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 279 0 R /FontName/DMNBCD+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
279 0 obj
<</Filter/FlateDecode/Length 3276/Subtype/Type1C>>stream
h�|W	Xײ�a�3�	��#1DV��l

*��
ee�EdQ���r��1	D4z�
����\q����gbL\��[�������}���SU�:���sv�T*U��Ĥ��A�M�Ŧ"sfz�i�iljJQ��,�a�,�dg��� �q����ǅd��]~�
yf�+�ݝzrj��=����.�Wf1��.2�����3<���g0�82� �dL)+,2���3,�
,�E�,���\c�"\hL6�,����،�Bc��Ȓ�e�K��5̦=s�)7�d�c�c,2��ff��M�Ƒ���������bSn�1לi�/4e��-�dǚ�����%Òn)3����gL��2楗	��4�L8-$d�7f�,E��,���̙E��B�!q)���a�,���ۏ��u�8w�����p\�����8�qA�qQ<����\��9n �Ep�7������䢹XU<���%s�\:����[4\���Dn<W�-��P��jv�Ҝ.��ԫ����lu>�|��7~?���x��c�iB5՚�ZA��-��Ԟvy�%�e���u��Nׇ���6�[m��n�n#�6�]2V�9��g�c�*g��s���A5�p|��C�Fl@!�5���#�h&��7T(ޡ�*�W��@�y�+�63wV�G�h�5��?�Լb9G,�<!P��t��"/������ /��A` #�ރ��]���f�x^������
ߋ��j�ѧ�݆by��T�.�w�xy��`h�!�1|4�*��9�S�ސK|0R����c��������Y���=|`\%�h��@�����;���m���<��>�|=02 �q�*�b�<)-�y��s��
"dҪ���P
�������Sf�	75_��Pd\�b0��������oG�l���u;ζzCtoCg��?�-3�ȮT�m�,�8j/�oZ��J�Bȉ�dt�jh�C����z��8�x�F
�8�X񰜯�r<������Q�]��Y��lo}�����#�b�'�L�q��#	}��@�>��ot5���^��ѐ:sq��`��C_j��C;]���_�u�/
���E��N����!�
<�;����C��̤�q��R�$����r�O��ݙ��Hoa�pug|�ج�Q1�--m{�_��Ko���d����;�Z�zAӷ�8,g,�L-�1��k�<��r;,|TV������<��|�� [�rj_[�ɴѱ����r�A�v��v�\,5X5���K��ꍃ��(r�'x]�{Ӿ
[����֍�O�y_n��2�%`OI
���c���W�4g�����l;oP���Cͫd(I�F��~ta�u�Lq����"��R�&�%�����x��_N�lV����P�/N����R�w�̭���\�|0!!nv�{��MMB���q�<!��V��Kvi	e�eg����6v��1���{!xɥ��KYܙ(�^�^0P����-h��
qk%�c��L�$b�I�Fqӣ���7.N��T��/���`R�Fj�<�}���㯔{��`�;��(����������p��N����U�tز��3��5Gg�Rh�鏯�r�*;���� �a�;�r5osT�/��g8Ա��2./�$�_�C��?��]g�:
���\�c ӝ#�k�Rg]��K�k ���F�m�'�5��@Ǯ�,
HX%���Ԑ���3^)����!��l�y�3�dk��4-��W�WYve��_jm���w^h�.���ap�Nx�]ڛmʋ��}�[I�s��	%�JH5�9��;�=9L�S�(�6����)"�(1��n0]�]��5M'�qx���'�VlڠŤ���U�6��\�4!�z؇RВ�t��{c���uG���+�\�j���7,;z�6j�
|�/���w��7�ՠ[Yn��vS��$��':y�I�kL��j�$o�Pt]|
껐P}���1���%+�P���Ӆ�ّ���o��㞛��{"��;i���Rt�	���E��������Di���5�N�>l�RSz�84���]��৳{r'���4�)�h�p�F!��5Vv|��I"��@%I߈���7���tz��Ƭ0I)4��v��[l�]���dW5( @� A���@�1Ј�8����
.��%���.���,F�<p�t�y�m��b�6St���-t����U���|�Ǐ����]�w]]����B��p~�EDmr|���סQL��S�R�>�d��>��=�q��ֿ���ї5�a��A�&�1T�F�'�ڒ'T�ΐ���Z� �)���)���JT#��)��ة&���x�Ñ[T�y�d8
�xY�Ա�J���W�5��	����'m@�����F���o���_7΀��>�i����폓��ѿj�;�8:EO�H�34Lؔ ���;i�de�ۗ���?�x������^��鿿��F	�W1+	�^�L����Q�}�A�p�!>�a�2��m���/
aa��a�ʿ{����!�=��w�PB��IL���>�yv^���S�2�o�1)�T�b�/��j����%����w��#$ܠ�%4o��A��dc?p���kYW��k�l,g���v_{V��ZQc�׀�F�P�t��Ob\lZ�|E���3c�Q�P �1dfD
��cpI7\��0��9bk�z)b���ǽ�x��SW*
����^�ET#3�W���;e���.��=e򢌔�m�$��������2�}�9L��!�~?���zɏ��V��d ��bqy�bqڒϿ�`ͳG��
�����rh�^��[�Ulb>9�F�[v�ї5�7�k�?��P����@�
�
Y�*y�Z�\���P�/�<�� �Q��P��̗�wRw6*��>%� xʣ��3"����0S�|�=x���|�� �����U1XKTU�N̩5S��*q�C���1|OM-� ya4�[y]&PS�Y���\��7*��2��
V��ԉ!�Q�6c�S��YPY�r�M�.���k���q��m��1����_���DP��
��a#�yf�h���R����Mt�P����O}�����fD����Y���8��mW�\>%)=TIzX�4��
�-��cy�f��u�]<�2X���<�����3�sj��*uk~_���V�_w>����OV;��s�+�t���>_�u_ᦓ�<�g�0 j�Zb
endstream
endobj
280 0 obj
<</Filter/FlateDecode/Length 329>>stream
h�T�Mo�0���
;��7	!m�&�����i0�Q�����1�6$ȓױ��&��;����Q�q��7��i<;�p�So N������W�BH���4�3�u�o�fw�՝֏�:���ŵ�zs��!~� a��43D�4�b��'e�Հ���
.!��x�1�8Y��)sB������@���q$)�N*��(��Xo�Q��8�=�B�
�̕pE�K����p	g�r����-�?�N�P��ɔ�e9qV�U9-�/ےP����B�&�[�6b���XܓP&K�H ?�{�c�NA������p�{���Î�;�o�-� +'��
endstream
endobj
281 0 obj
<</BaseFont/DMNBEE+HelveticaNeueLTStd-BdIt/Encoding 282 0 R /FirstChar 32/FontDescriptor 283 0 R /LastChar 119/Subtype/Type1/ToUnicode 285 0 R /Type/Font/Widths[ 278 574 574 574 574 574 574 574 574 574 574 574 574 574 278 389 556 574 574 574 574 574 556 574 556 556 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
282 0 obj
<</Differences[ 32/space 46/period/slash/zero 54/six 56/eight/nine 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
283 0 obj
<</Ascent 0/CapHeight 0/CharSet(/space/w/period/i/r/s/g/o/v/slash/F/m/eight/nine/six/zero)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 284 0 R /FontName/DMNBEE+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
284 0 obj
<</Filter/FlateDecode/Length 1622/Subtype/Type1C>>stream
h�tUkt��I2S
�d:�4t2�
�>l���b�g�<TB2��4�I�P�Jl�ǢQ�tYBEDi�����%���׵z+.ܕ=u�UO�\.x��9g���w���734��P4M�
�̝^X�:Cv�e��f�+W˳������%�hH�j��x]m�F'�Iq�E�o�~�1���j�5o���zJK �_���g]��tT����)S�Ș�98NH��33��|�g�,��x}r�W*q�<�:�b���)��D����++���%�W�J>�j����Zɳ���vٵZV�"(ն�UV�����R~q�$o����N�쪑\N����v�W�x���l���Y'��jŪ�H�U�g�IV�]���H��";���B��n�&+>+��V�^���sz�ތ���FA&Jvy��k&yhj85���E%Rc��Lj.UJ�Q�%�Rj5\�Ȝ4%����(^��i1�\I�
�[��@sR�֪m����t;t?0�W���N��A��_����%�4��@/�� jD��D؊�5LCb��)!�¨�q��A?	e�'
����Y�ߛ!V}
b�:0��`����Ϣ&B-P�VA�(�F/R�r�n��w���ZV�f�L���q
��� 	�&x0��><��������̩�(��H���ft#gD�X�A̹�qP�$��ro����z��ld�o}���x�h��9*�j��!��y�0�c��ہ���f��ݟ9,�UL��Y��/����G(=���'c��ߴ�R"9�~R��nA���v��1�ɯ_���Ļ�n�(�?��p�4�7�W�7���v�봻d~�c���� ��04�^�>�ړ���+X�K�J*���fgϭ�,+#�H��/��g!^A�)�8,�t��8����A���Ʃ��� ��~��Ƹ�q���&��>?t�*s �����3@{:�b[�c��=9�ʶBy�� �������0�pF�>?�b�r�,�:��M'��L�u8�K��|�yL��螿����i�0�"m2�j�ö(�1��yYƕ�o�j4���0��`�q���n��WC��HGj�C[k�d4j�A2ρeDg�z�e�6�>Db'��:}m��)�·�3��s�7���x][���M�b�:�u��4�����;J���ܒ�5�+ų�Kߚc̟垿�d��_�̐:�;��n��]�ֶ��Y�q��$r(��3!e�%4�ldp,>J�o��$�߽r��h�J4�?����H�0�B¶��V]�7
V�5�����nmܻ����&��D½q��MFK�\�6*q�g_/�F�k��Ч
!�]ݠj�8�2Ʊ(X��=���g��9�u�G��V�|o���v�L���?`��g���������"���Y���Psb[[�����k��zH���e����u�jH��,߆�":"�����1��H��IDN_�C:�C&�0 ����3�������/r��=�|��pB�"v@�|�=�Ia���#3�4��� �XNz�߿%@�$mp� ,���0Ȳ�F�p �؃��`j={v��3r=�W��!в�����
�8ƫ��0 Ž7�
endstream
endobj
285 0 obj
<</Filter/FlateDecode/Length 294>>stream
h�T�Mo� ���
;�@����4����>�����d��Hrȿ���ې�6���C��	���	'h:�,��l%��NC������*�� ���2N�W�@��)8Nv�ͣ���6��j�N��9Ǘr�fc��G=Ae	
��ϵy�{�'�7t^B���z�A�hj���-�H�DQ��Z���"d\�Y[NF&��3&�����L�xx�X>8nKF=���O��Z$H�ҵ�����$1E�.�z19��%Α��C9�6'�M-9[KB�?�B9�:��o4�q��ɾ \�#
endstream
endobj
286 0 obj
<</BaseFont/DMNBEF+HelveticaNeueLTStd-BdOu/Encoding 287 0 R /FirstChar 48/FontDescriptor 288 0 R /LastChar 50/Subtype/Type1/ToUnicode 242 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
287 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
288 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 289 0 R /FontName/DMNBEF+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
289 0 obj
<</Filter/FlateDecode/Length 778/Subtype/Type1C>>stream
h�tPQLW�vVt��:D;�Xw��t1&�A�(�JH4~gw����y���a4~��B� ڲc46�ؤ��mS�j1C�D���ܡwM��&������{߹��
��%AJ�j޽w_�~��L�+�4M��Z��e��u�}�^p�:���?�����=��
>��\Y�)��<�=�e{�%:��F�+��Hd+�W�%��єE�q��6L�Q���'���X��Z��q���!�E�LE�)��"F�i*Mƨ��&i0��b�;5�ꤾ���S�d��zh2C�Z��U	�4�t��4i��2ݔ����Ҙ���$�����!ܥI�ir���85��뉴�Y�g��[U_�kms�l#*�����X�	|:M��0���M8�&�7M�:����"\�_$��A/���C	\�����1�!��@r�l��l�U�i�I�o�`�)7@;,H�>5sA���C��WW[�*eA���͍OA-�Ʀ**bQ��Q�/�!<�^d��x	c��7��e���j@�,dC a
քP¬̭�����N��ܚq������>ip�sX���VA����މE���MK��В`�sƺ��1�ݜ?#�Oߚ�ϞC�ſ߻��o%O�����SǵcHKP.�����������]2wx�W����Ĺ�8t��ћW�h���������%P\�
#���`D^yZ���{�}c#�mH�����?��r���*�^
7��o��r����.�}�ƨ���/_���G� ��~
endstream
endobj
290 0 obj
<</BaseFont/DMNBEG+HelveticaNeueLTStd-Blk/Encoding 291 0 R /FirstChar 50/FontDescriptor 292 0 R /LastChar 50/Subtype/Type1/ToUnicode 247 0 R /Type/Font/Widths[ 668]>>
endobj
291 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
292 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 293 0 R /FontName/DMNBEG+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
293 0 obj
<</Filter/FlateDecode/Length 531/Subtype/Type1C>>stream
h�tPAhA�m�M�!�e+X�)T0�=$����DHc�T��fw�L��
��шo��l^[�"�ŠPz���7��e&�@��A�8�7������E�?"���[ȧog.e��D6V�<rPn�hk��z͛���D6�gg�2;��	������(O0�����sW	��CQ�e6ZW�6\M���#��X4��f�[����1T�4L��H����Òg�`	Y�4���`�-P�&���
��������2"D`�8j��XjȀT&艪;n"�:V�a!
�*1�Jr�0�V��L҂L����bhPWZ�$��ݜ�5aTDl��W�-
�66
k��|q�[r4��#�oB��kw��W_tq����Y{�8lK�%ߕy��F���,SO���T:�4�]-�O�Ǹ�B�h�&Y��ďt�h�G���ۋ�ݽ��܃�Yq�����/���^e�ؾ���&��{4�C��Ћ<���w�8������������A�
�n�xO�۽������>F�������ct�8}8��` �m�
endstream
endobj
294 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
295 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 296 0 R  6 0 R  297 0 R  298 0 R  299 0 R  300 0 R  301 0 R  302 0 R  303 0 R  304 0 R  8 0 R  305 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ColorSpace<</Cs8 306 0 R >>/ExtGState<</GS2 307 0 R /GS3 308 0 R >>/Font<</F1 309 0 R /F2 314 0 R /F3 319 0 R /F4 324 0 R /F5 329 0 R /F6 334 0 R /F7 339 0 R /F8 344 0 R /F9 349 0 R /Xi38 106 0 R /Xi39 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
296 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
297 0 obj
<</Filter/FlateDecode/Length 668>>stream
H��TMo1�z�_1G�a���>)Qڰ�V(��v# m M�_��z>� �Bbw���f��s6��c���Yg @@y�		H?z(���i˝2�e��=L����2�r���	;��(��J��/ �\���p���%�!���2ʑ5�݇Ay�ߔ�Y�L�1��{W�|NT���	�%Ln�{�u��*�PC���Ơ,h�u0]6K��h�1`����I�l�b�C��� ���sxmT1"-�4�$J��T���4�,�DG9��.�M[�\V��M.�ͣ�n|�N��ҬE�/m��&~�(��-�Iɽ"�ޖ�W-���������+��j���b�����&t7?���jS߯�9���{j�i���Y���=V�u^�Ŧ����:� ��6l̶�^���$)��v`��6����&��N,9��y[�AM�
8�ۜ�+-���R�x��
\:�)��N�bnEħ�p�d�9�~�\��{�{�B_P9JRp�vD9�	���5K��~�I��]q��>�S̱�[�^ζ��L�����vT4�
��D�
U*�1U(I�{9��"Ns��~OT@2�A(��
W_�\���#̵
fN�=�<�t;��O#�XO�u;��T�B{��a;3ځ�8
����z��^Z����f��4Vt���/w�A��� ݼKf
endstream
endobj
298 0 obj
<</Filter/FlateDecode/Length 558>>stream
H���ˎ�0��.�gi|�u:R�u��*���aDpe@)o_�I$iU��������c�!y\�-:��2�L���5��춎����� $��K#�Kp�'a* 9�6��w�'�M(���u}�Q��^骐 ���n�~hU�PT�:�^��|׍nӦPUmRS����.]!�og�@f�g��L9Ї�\`ң�i/�6��5I4؎K�������@i�ȃj���.	q���]L�Ȃ��������Q�odG������`�:Ղ:�@���/�~���1��t}̮�{�J9ǃD�>f���v\���H澈G�ì�ȾA/y�W|s��1�Z
i:\��2O��"�eفQ7$Nȱ@��]rr����.b���,>��Yv��{$�L8[z��8��jf���m�^ډ)��N�Df�q����"������������ŀC�+M��>�e�OUñh^3-��\,ռJA0f	9/w~�F��2&��q���Y�y��<�єZ��5�z�;�M[t8xY�u�,�@(&]�!WF�8�N^�<5���ʱ.��n�GY�o $�k�
endstream
endobj
299 0 obj
<</Filter/FlateDecode/Length 642>>stream
H����n�@�%�~��/<�ŷa�Z(�H�BGH�e1q&�4���$��9cO�:M5YD�s��|���|4w�]Y��NA�YL1���l*[w�5�p,��L���IB9��������w1pг@p+���~�O��!F�o�i-|��P֋����:�xmwk�X����Y�ϦYB����=��5��;�/��T�2�����*HbFs��*��D<��2*�Ԝ����
�d�I�%sF��*�&��
#��ο�g��1�T�Esj껲��5���˦`�{r*~���n�{��=��m�Y�;�?-L|�r���M���BR�ے	�Nڎ �R�	��#d�Y�f*�Ku��)�y9��i�iꑦ���"�B�G<�b�P����H$�	��U�dpN3��Ζ��&�ek�n����o�s��.4H��}�u@0�E�db��z��#&�/�è"ʇ�$v��|�����~�/Ͳs{
qFR/��m�K���t���b,�J"�Ӳ�q�y<)#�Ldϑ�`�^?&c�c��ED6����o��#��v�	/F����m*�n]�%��s���ٔ�6e�_U�3"onm�?��[�V�yF�H�I���3d���4��ɺ&Wf�r�`d���E ����k �0 l|k�
endstream
endobj
300 0 obj
<</Filter/FlateDecode/Length 665>>stream
H��TM��0�z̯�c"m\;���[�m%zj��^�L0��$41e���c'�kYT-H�<ϛ7o�Q|WKb�R��k��;erB�L@Q�3���8Fc�q)Ix�}�>����1����F���PJc�1'��"�+�B^x>���'b����֛�����e?�VW���z	�j���f�/�� ���Dr���E�¼lua`�7MW�>�@.&	˲>f9怷��0�!�A���D�D��{�5��+��V3�:�G2&Ԃ�����q����p��H$!4J^�C"�@C^meH�?m�m���{�GB�z��QxsB��\\�aF��|�&D�,ERk>f͇[���i�\����iփ��G(��%���`�����ZS�N�A:]��"}�Q�x����%8�$��a ��8kl?���X��x�W`n�ųAN8�a�Q���U�A�R��=��TAG�O�[]�U�L���y�"D�zܨ'�>��C0���>z,$���)>�5��-�j�G�i`���Ƭ�T��ߕ�Z�UրD
L&&�@a�>����yq��sGS�Y)����"�KǶUĄ���LG�;jv!�5.������p�wBD�=�{P�V�v�Y��c��=�qe��[|f��/"m!�T
z�5�M]`wf�fު�����  �
{�
endstream
endobj
301 0 obj
<</Filter/FlateDecode/Length 862>>stream
H�dT���8��+�U�5|ͦRE�Tv� �6h"K.I2���Z2�L��Z��^��D����jO%?}�ꜧxaR�m�����r*Y���Te���xE��[r���L[Eʶ����{%��z�/��v�:�����ORM��/T/hU.���UA��	ܦ.V������:mpQM���
��(�u��?9�6�����u �)K�{~v�:�0R��.�t��)n�����hغ^H7 �E�����o�sR�Uu�7�Cǆ5`Ƅ~_�Wu��'p	�x�Fp�42���F�Luj����,�p��� W]u��^]�)�R.o� ��4��g�P��D
�Ar`�4��r�+����v;[���n�1��E�$��p��1�
�=�J���~��6���8�mf�}tʷ������|A�����$ѼPr�w��_d����l	���w<_��2��tSի3�uvfp]�� 3�ڞ�!�z����s�M�5Z
܌^G���)M�Ǐ��@i�j0Q�/�� j��t���/����
/�mU��u}�1���I4���7�Toq	w�'-}����:�g�p��y��E����Q�kù6ɑs��C���*�S�W�V�����]ƞ�f�<K?�����A�)VE�����# Sß�]�3'�'6������GM���g�����S�U/a.
���nL����]��W�r��hÇ(��v����Qn'bs�C�"��˺xOp7�`a�1�{�t���`�:`��L�{�.�m�w�y���0dEUm�ێ�y7a/a�@�W.S�kֻ�{����5^�N-��[
ͅ��p�!���B.H�O �p�^��&��oY���L�� (W
endstream
endobj
302 0 obj
<</Filter/FlateDecode/Length 760>>stream
H��T�n�0z�W�Q,�Q�E�6��/E҃jS�YJE�����.)�u��Et�Rܝ��%0>�S�K
�m&��� ���%�̈́S��1iŶ�ܮ�
�����p��$-T��@	eB��
���C�-��u�����zㆾ��Ǩ��V�)�f5�+(�����	ճ�{p�j�l:k|�505n���7K��=���ݰބ*��k<�TS�f���'JR�Tv�w�6	 �)m�����@�������mL{HBv�kZG}.�-|��E�8p.i^��(���6Pa�!0�hz3�*G[u Р���Rf��������z�U��D�؄�IE/pz�y����%V^�$��؍ىO�B@�Ry��O�?t�5]��#Q,�ӯ7ctޕr��ULI�b��W~U7~��]ݺ�S��X<!��s��:�H40�ΊQ�7�
|Ƴy��!ڦ$ܓ�UCn�;X�>
&�
�`G������H=WH�>����`{p#G"H���o�3=�aZ�M�i#�օ��:�9#I�p����_>,�މ=\w�^�xU"���Ҹp8�*�D��ty��oG�Q��"��>C�9�Ӈt O9,�a��Tʨ�Ǡ��,�[�x%-�Q��g��Ӭ@�*�����Jq*�Ok��*�7�a�18�*���M_ѐ���I<�Bs�MϨ`�@Q/@���,/�y�������Q}/�ǻ�H�S�1�Hɋ�<Û>~W8��F���gρ�ה����$�<�#� �ur2
endstream
endobj
303 0 obj
<</Filter/FlateDecode/Length 566>>stream
H��Ms�0���{����ё��L(�-�q��X��_�Y��(�d&�H��}w��?	��0��2-0�n�n����LH�q)3�86L�E��.yGaB*�����)y�_7�1�ѻ�I�!�:�1���2g�D�Tl&���J��r�p(�NNQS� n�iΜ]��;*�&��)�A�o���a���h~�P�n��Ġ,���:ŜT�*�$�М4�=l�0������PgUY���.|��@g�+����Kg"�F�䰥�����3e�y@O�h��*�%i��]�O�+,`��3�.��j;8*��3�6E�K4�$���s��@�kmN
'?�O;�\��I�8�q �PO��|��GA�U_T�KI|�!�=d�;W�mW��Zȡ������wsEo�����xy�Y�b��؀�	>ټ�]��w�љ���~�i-�a�����|�/�e>�*+��掦������t���,�4$C+��ث>c��4uc!]ʙq8�fz�/F/0H�!�7e�'>��l���Џ�5�4�|�GP�  ��\9
endstream
endobj
304 0 obj
<</Filter/FlateDecode/Length 493>>stream
H���M��0���s���[�zj�H=�z@�6T�,�h�}���f�jE�}�L��^�4g��=t`Jк��A�?u��"L<CW�5�T�j��5���L���:~���"0 �ENe�ۙ�A�������[�|,7p �$|K�Zr�@KɍvP��yK0����ܭRa��0|Y����1<����<�0�ʬJ��zj�܆���q�yM7g¥��R�����7��󜇿�z�_��HÍ�!^l>6��b~~1�Ğ����t��\S]\���t���M�/�}A�\!����� �X���&���p	-��(B�fx�s����������i�����{��e+��v\�B���U��v��\99�������n�L�o�S#ϴ5��m�8
�f�3qv�p�W��z���8��H"m���\Q����S�V�:<��bm�]v�	�K�+;�*B!�4�Ȩ6g}m��n(���2���� Ê�+� a�2�
endstream
endobj
305 0 obj
<</Filter/FlateDecode/Length 237>>stream
x�e��N�0D���=��8���v�i�B������zDHp���c[&A��ff5p_��|�� ��M���`���XY�ƘF;�u�ۘ!r������� vɿ��4��	SQa�q7�ư����������Nq����D�k����O�v9g���_Ǭ9F�Ɠ��a��L�t�QU��u`�t�	r��r��.fQR�}�e�NY��O�t��E��C|�G9��aw��c�k���$~ ��]
endstream
endobj
306 0 obj
[/Separation/Black/DeviceCMYK 11 0 R ]
endobj
307 0 obj
<</OP true/OPM 1/SA false/SM 0.02/Type/ExtGState/op true>>
endobj
308 0 obj
<</OP true/OPM 1/SA true/SM 0.02/Type/ExtGState/op true>>
endobj
309 0 obj
<</BaseFont/CMJLLO+Helvetica-Bold/Encoding 310 0 R /FirstChar 32/FontDescriptor 311 0 R /LastChar 84/Subtype/Type1/ToUnicode 313 0 R /Type/Font/Widths[ 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 722 722 278 722 667 611 278 722 278 278 278 611 833 722 778 278 278 722 667 611]>>
endobj
310 0 obj
<</Differences[ 32/space 65/A/B 68/D/E/F 72/H/I 76/L/M/N/O 82/R/S/T]/Type/Encoding>>
endobj
311 0 obj
<</Ascent 718/CapHeight 718/CharSet(/space/D/O/N/T/M/A/I/L/H/S/F/R/E/B)/Descent -207/Flags 262148/FontBBox[ -170 -228 1003 962]/FontFile3 312 0 R /FontName/CMJLLO+Helvetica-Bold/ItalicAngle 0/StemH 140/StemV 140/Type/FontDescriptor/XHeight 532>>
endobj
312 0 obj
<</Filter/FlateDecode/Length 1083/Subtype/Type1C>>stream
h�\S]lU����Bťe��Y��T�n[��BQ��$
ViZbhb�;t���.�k�E�����J���ZlID� �(�U�BM($���`R�B��
�w��
�Y�1�fN2�|�;��]UIs(����_�RY�����Պw��BM�v�'��bq�X��M������px!�˺�4��"š�',���;�b<oG>_]��BۮM�ۖ<��)Oɺ�-��!��5�h�j���-;B�p(�Y�+9/mj��6g�W[Q+�*���ǃQ�H��jDyh'���b�U$AM��eh�_��$��kF���@$hEW�*��\U�v(��R�T�8�L9š8�M�ieV��f5�PO�p�;b���
�N��k�y��m�W�
N�#����"�iX˨;ajTʨg��P̰E�d�g�)�^e��db��jd.�DN"�t�u1��e��G�ᑳ�ӧ�F/{n�n�9��ű�+��zn�Ux�o���
5>:�,4������4lb��~.^U�f��G�
�d����U9e�1��~C+��&}���i ����C�(ä����
����˯ �M�����3�9���26�fQ ������,�ϧ�~'䯁q	��9�pp΄���8!g1ܦބ�%V�ńA�'L��0�0�m4&�]��	�M�)d�GY�n�g��Z��nJ0�;PH٭b���ų�z{�ۆ53�-N^��2r�k�$!3���3r<bF۟�Ouk������b������S�=2�b�GKu/3~m�.��)��_xdw�AM�Ӽ{�g1�i�<[XH�&M{�w��ҝ;`�T'�]���%�y�
�/%�-%�\�O�ǒ��	�bpv[���;?��~�5�v��H�Q�~�����?<Wwa�x顽�qC�mM���ƪ��/�\�ۥLH�\�W�9�3�m_��_Cx M0V��y��{�����_<�_���ލ�]^)��}UR��%��۴�*F�n��nǵ����5��/�ɑ}^[#bJN��K�S��0��wМ�����}�X_�Ä9@�>�2�"���I�O����y��Pr����������� ��.|�X�� T2W�
endstream
endobj
313 0 obj
<</Filter/FlateDecode/Length 268>>stream
h�T�Mo� ���>��$J�N�"U�&�-����!��C���݆�ǯ�6�i�Z��w;��JK��X�p�Ai�r�J��V1r���uv8������A���v�0��!�{��������n1�#j)�5H�ּp��G�'��u^
B�ٖ�$q6\��z@�򴆪,j@-��n�^|s�De�Җ�v��MC�"#Q�%�
"(<8z����AAC�̷��_���$}�e��Z�Hhv��ת4���LƗ�g�#� �)�
endstream
endobj
314 0 obj
<</BaseFont/CMJLLP+HelveticaLTStd-Cond/Encoding 315 0 R /FirstChar 32/FontDescriptor 316 0 R /LastChar 122/Subtype/Type1/ToUnicode 318 0 R /Type/Font/Widths[ 250 500 500 500 500 500 500 500 333 333 500 500 250 333 250 278 500 500 500 500 500 500 500 500 500 500 250 500 500 500 500 500 500 556 556 556 611 500 444 500 611 278 500 500 500 778 611 611 556 500 611 556 500 611 556 833 500 500 500 500 500 500 500 500 500 444 500 444 500 444 278 500 500 222 222 444 222 778 500 500 500 500 333 444 278 500 444 667 444 444 389]>>
endobj
315 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six 56/eight/nine/colon 63/question 65/A/B/C/D/E/F 72/H/I 76/L/M/N/O/P 82/R/S/T/U/V/W 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y/z]/Type/Encoding>>
endobj
316 0 obj
<</Ascent 716/CapHeight 712/CharSet(/space/F/T/B/eight/four/five/three/hyphen/O/L/two/zero/parenleft/w/h/o/l/e/d/a/r/s/n/y/parenright/C/i/f/j/u/t/g/c/m/period/S/R/A/P/b/slash/one/D/p/E/W/N/H/v/k/question/colon/I/z/comma/x/V/six/nine/U/M)/Descent -172/Flags 4/FontBBox[ -174 -250 1071 990]/FontFile3 317 0 R /FontName/CMJLLP+HelveticaLTStd-Cond/ItalicAngle 0/StemH 67/StemV 79/Type/FontDescriptor/XHeight 536>>
endobj
317 0 obj
<</Filter/FlateDecode/Length 4247/Subtype/Type1C>>stream
hޜW	T׻���-Z�AH�L��7@��
ETԺ! ;�V�
E $�����*�}�"����TEFI*Ԫm�.�~�~���D�}}���w�;p&s���߷ޡDvmDE)�M�t���MS�D������n=�!()���е#|���b��WO�vw�~T�U� [m��Rg�%$.K��\����6r���j}��=�۞�w�lO��aC�S��',V���%���U�����BS��T���*��dU�:Y��f��k
��OHY��V��-�������dU�*%)4\��J��/�q��A�)2���WEūR��U3R��ST��᪐���GDD��m�q��T��S'����"&I���������q��"!IE����j�� 9xbp�u1B����8�(�'jK�:�9��D����~�h��h��hl'Q�T�M�,
M��=	��RQ��&
�D����x��`7�n�]��o�K쿢;�C� z]@��I$�$f�bi��]ۑm���n^���۶k����:Tv���G�a�:~�e^�2Y]���u*��ugYg�κ�'�g�y����	9�@K
�x�A/(���4�����R,��m���dM5��
�+�J�l�L��'��L����r���q�p�؇�N�K�(�� �瞲�Y��;�+�a^��Z����C�;��G���Ot\8����^P��q�͎NMf�֯ݰ^#](�Z���t�ѽ�OkOI�knnS�C˒��D��l1��JƄ�n��dx;��G"�Z�
��/$2�m�a?���w;�e��<u�ֶ��Ip`n��pZǂc���M�=q"vFv'L��,��tc�ӍM�ԣ21ggbq�s�|N�+M8s8�z�I�M�Lz5�
LW�J�a�D���x��-&X�"o��c�m���!~��$9���l����Đ���k��}����q3�9�S�065mi�Ω�ևhfJ�><ޡu_n;x�JJ`�i
x��F?�5P��.�$���muvQx���򷪔�9w��\������A�P}{D9���yP��F��}�v
vA��@7m��i�����:9�%�a:/d�S��FPטE��0z���}8����$!�[b5�̃'O�i�-�3�)�NY
�଄��+8�lH��r���EFs��Ðh�<6Ћ,������GvW+ߖ9(f��QqWpV�?�0�w8c���Z�o)l`��w��3�t/do�0>�y��;������+A���!	S�\�A�"A��wD�qi�L��b%�f�V����2�X��k<��η�@H���58A<s�Н��C~^�>��o)ob��*���s��q��)��!c'�]lԲ�q#=u�GvT`�����u�1�=��%x�\Vu��d����5�����yV�gZ��r#Ak'�b�$��?���w��㋊�,:��Q�pv��"P\�Ry� ��=������G��F�(��j<��[[�
e�,\`�Ix���z,3���{!4ݡ�Z/=6�Ó���=P����\\ZT*�_�����
(�>�(���l+ݬ)�Fٸ�?0(=f�"nU�ꌕ�	c2�{(��{�0�dV,/���J�*q���
���Z���?�1Ҝi�mhp�,bp.����^G�<�x��L��5��g��Q���M�W���^4T�b�s����"q�B���e���4H,���e�V�4O��n��x��_�c��O�Ů�R�~�iո�7w����$��(
|�bw%F%��~%�+j^>���?_���,o��L�F�.�,�].u_�6��� �U��B�����Xۚe4A5�TWa�Q�)EL-�� \�����ٕg{�F�"SJ�A��i�v� Z�j$�v��K8�y�Z8�[ڿ˔�Z���:�JC�7��14���7V
(&$�P�NLp�P�r�?�$�A���I�w�z�J�v��b�#9����f�t�D���7̮�]�=ﲹ�1�I����h&3bC��4�ξ�}h]��N��]�I��U���:z�⢤�0���
C��@q�Ƴ�:Z���X
��V�ߋo2�Y+r`�m�6�ͥ�Y�'���ߝPi��}\sBs����7Fm���3'�J�'1.~�-���oJ�u�p$(!a?,�p->�DX�	JL^�ч�2�I%y�*I�	�i8��T�>V�S*�CýO��<�l'ACb�B��5-'�A�̄Hk��i�'vp�Zr�a������f��n�����Ӌ��P�[B�m�z*l�|m�/s��q:삢�p���>vЋ~~p�Ϝ�A;�q϶��Y���p�n��su���C�7��o�|�_��K����)�ę�ae��%��(2M!MH��V�z?Q�l�h��c��H�dZ}کR�����5H+�~���q�Fk�4ӷEH���>�Q	=���/K��{-'o
+/+��ۑRU����>t4��e�<fW��I\f�7�+)��[b>lr:�l�c&q3LfP�ȟ���n����,G%�ڵЙ�ڟnh9ᨛ���ՙ'���sH��\}����.��5
����eB"�kWGm7��BSz��Jq�TG���4���ȉP��Q#eٹffV��ι��{Yՙ�}��N=il󷃬;�k2/�#D��6Yk�>�O��џT����q�]p5�O�n����7e�ѫ�7�:��=����Ry,8�f�f�fM�tE�n�V4H�l��.hJ
ػ�-ͦ�
ʛ{��u��Wq�Skס]��t�WT�G��w�T�^:u���<��{o�>�HW�-Ғ;�~v����xD��lg���ph��{���)#�6-tifsq.����_qA	�w�7:
z���:'�˅OZ��.�AbL;�5���%���m�4-�H���lE;%z��vŞ{�;x�+t>��|·��^�;R�{0�8�KCQ%a�n�g �>'�: ��;�����}�����y���.���'H��g"��E�\�J̅qJ��� �S�1��9��f-$�O���h�H��G����׽z�|���?�L�ta
�&x+Q�z�!���1{�aORb�X�m1����:x�^}���E��z�멧�SG���U?��ME��,V/�-��vi�4=!oA�b�Ǥf�g�#����w8g�D����}_���b?�0&������kHz�&.��)1!}�&����ъk�	�i�-�+�ŔW������)������؍o�g�J�b���]���0@�2'���;wU�P�,��Y\����̳n�'̋ds���]������צ��j �.�B���Vb0��Or@%�3����b��:���{Z�����թ��y��R�f.y���^jt:u�H��s%u����0���L�17��
s<���j�un���D������Hw�o�����������H���������o�/�j��-9��:�0�/~��rBXlP8W�4�H�rƼ��K��S~񮷥����D�͟�s�_�e�ȉ ��M��g�d��lED]2�*�X�	�#{N}���'S��'�7�#)/k�Y�{�]R�
�����ћͦ/��'+C�4���K
�6ʛ
N1�))l*�7t����R�,F�rR�+����$�%5�ȵ�[��05i6���g_{�� ��	��'���m2�k+n���{Yw��2�[�[���豄�?�?�㛦Ɍ�,���nJ5�Q�L��ҿ:�%��?���`���/t�ߔ���>�:7��"�@h��$9hMc�[ů;=����׫�]����<���h=�B��f�͌A�IM���u_j�V�,zQ�rN��D?�|��c���d����h�'�i���
�e	lL��jep��/9a���W���"��K���'U֚�_`��"��'�D�<�Z{w�t���'��AXI�2��Ͱ�t�rs;�1�q�;=�F��F=,��FZ~�{���?�##
�M\݇z�6
�b����?a%r�$2/��+��䛨��`'���a�U{+���T��&�ULHjn����Ԃ�e�IVyyN����]5�m�{�7w�҉�`,iV	iV)Uy��[��I,�q��[$P*x��B�?�I���k?U"[�v9�u���2T���,�|�:�v�ct�/�BE�%wK[};C{!�c03�` я��
endstream
endobj
318 0 obj
<</Filter/FlateDecode/Length 308>>stream
h�TQ�n�0��+��*�!��,�*U��P���%E*�2䐿�M�	�Όֻr�ܻn�{�	��5��,�	ϝ�\A��i>ů�I��u��߻v ��|��8�+,�ܩev�%4:w��1� �p��{tdP��`+����g�#�?�����T<�sC��7�qg��tej@���	���~� �2��'t�F\�jA�Y���'�V�$R��'����u"�Ê¤,V�9�2)��2e�Q���J�+�D	�B�9�J�5gTj�"�SǩG�4��6F{	�&�'ȳ����ϣ�W|0 �#�{
endstream
endobj
319 0 obj
<</BaseFont/CMJLMA+HelveticaLTStd-Roman/Encoding 320 0 R /FirstChar 32/FontDescriptor 321 0 R /LastChar 144/Subtype/Type1/ToUnicode 323 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 333 333 500 500 278 500 278 278 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 667 667 722 722 667 611 500 500 278 500 500 556 500 722 778 667 500 722 667 611 500 500 500 667 667 611 500 500 500 500 500 500 556 556 500 556 556 278 556 556 222 222 500 222 833 556 556 556 500 333 500 278 556 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 222]>>
endobj
320 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma 46/period/slash 65/A/B/C/D/E/F 73/I 76/L 78/N/O/P 82/R/S/T 88/X/Y/Z 97/a/b/c/d/e/f/g/h/i/j 108/l/m/n/o/p 114/r/s/t/u/v 120/x/y 144/quoteright]/Type/Encoding>>
endobj
321 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/D/a/t/e/A/c/p/d/X/B/L/E/Y/R/o/u/r/s/i/g/n/S/quoteright/slash/P/period/I/f/l/j/y/comma/b/h/m/x/N/T/parenleft/parenright/O/C/Z/F/v)/Descent -168/Flags 4/FontBBox[ -166 -225 1000 931]/FontFile3 322 0 R /FontName/CMJLMA+HelveticaLTStd-Roman/ItalicAngle 0/StemH 76/StemV 88/Type/FontDescriptor/XHeight 536>>
endobj
322 0 obj
<</Filter/FlateDecode/Length 3011/Subtype/Type1C>>stream
hޜV\TU��w �1�7�2��`*%�(� )"jR�$�h������p�v�l34S$A-��Ҵ�$�O���I���8-�6.��{�t��;c?>���3���s���s��{/�i8��'Ϻ?uVR�L�R��$/ۜ��Q�5�0�\�[A�<�����N���U|7A���s�����sX=�ߚ\XTn�{|q�iL|�=�|����c��_��|lL�XSRN��j�(/.���R
�mE�6s�5'ڔ�t��Zl�Y��6�O�)5������j�/�2���ÔWl2�Jl�k�����0��d�b43z<�9m���
L%�����3�M������ ǔ�����ܼl�_�o.7��m�m���ٳ���LK���s�K�
�/0�[ǋB�)�E���[��	r�L�d�)ǚ����x��xn �
⹡7��8nt �M
�fi�-7��9.>�h���Gq�|��¥ris�AK�6m��Y\��;�}�������+�'`|�U��|���)�|���-�R�aa��\R+���1�I|=0$0%��EU	���~-�쀁d�jޥ�wy6{WS��k=�޵��'�s\!h��2�&ލ��<������}o��t����M)�?���S�e2r��CqZ��C�a��!I�1s@�a���7�`��$�i��l8�n��0-f��wB��N��1'P��a�:+r<2����k�ˆ��U�͕�B����6v�N��Eȸ!�~��jힵ��_��x��)�o����;X�p��5����R]V�S�
7n�X ��E�'�*�씥+ �Y�������d�6t�2���>w�����$�4"Q�[g��)�V1����a뱗�bPܾG���>���;aWg80L����d�`j�_��H���b6сX�=N��~�g<��!dE$�8ˈV�c.�=0.&�E���E0a	���F�10	��
�^/A�n���8h���qSS��� �����Q��8[ŷ�;N�w8b0S��B��録'�vB��w�5�딽�a5���":��m�i���n=c��'5x �e����Lg����M���Z�K)�˖�=y�_�U���L�tKH�N/磠��.PX�:���Oj�m��U�v	(޴�i)��)����X��e�-�^�k����p�`Lb�L�c���c�IJ�F�C1�`K<�h�%C�|	�0Z�����u����~�/����
bF�?1NŇH��bN���	N������X۠�kz�~p��g1�ex�W1��3ҋ�oX�m$�iMc��g�p�t����)����~#Fa�aV��3Hkȑ���&|J�4��4�9�e���wf`+l7� wW�`$�7�ԩ�Z���U*D�	\�j�a\>]���?5�̬�ݞ��=�
62�ƾ���L?z�*u��������0�mj��z1j6(��{B�<lvk<!2T�q{B��������}��s��za�Kj�;)'z�����8��9����J����(_9|QؘOҾ���#�+RYv]}����ϮoT?��ZU���|զ*�'B��7�� C+���R���)�O||v��*�7�x�aK �3�Nu��R�.��+U@�Aj;]+< �+#�8	
�AUM��g�fVAC,�*nZD��m�Ԇ��"3� �RIa8�7�<Sՙ*:��n��>
�P������q��&�����Qu����$�"kQ�.�?��z
�󯛧oQ�諽p�%��J���H�V/۳?eD�^$���0f=��Ӄj-�3�!Jm� �降 �`�p�xT��fD>zD�S: ��?�o�jh<��9k<g��w�U�'0+	B0�מ_�߼m���[��׽� ���х���2����N�}7�ti��Ε�Ş�h�~pKCu��[\�b底�{�?~�:&y�g޹.:W�ea�9�������C���%�����{�Ͳ�U�#ROR��{Tt����Nu}�rqV;:F�'�8��Ĳ�6����2u�~����#��iԹ4�I�2�=|��	��-�)U�|�M������]l^8M��D�Wf�ͥ ��gX��i��mv���?6·��ݙvO�OE�W��t.���k�)�D*K�֪����F0�w���״�.����~`_ʙl���}�(�3W�|��K=�
~熺��{�i�"�w�gbG[��;$+���E�ߓ1q��)/U䟈2F=�VX�V��|��#	���\l����1����Z�Ǳ��(u���|qa��Y+:�N���^ͫ�(���Y%tB8��ᘀ	��F����";���
ӧ/C;������J�� ��*�՛=�*�|��n��/}�L��.h�%�;�^������o�E��E��Y��}�{K�].����y�/�}D��+J���׬[eLYhI[��s������|�%XÊ#��/�dG��a�桘|$�\���p�l�
s؃sl�xۓ^��'�u��F��4p�Z!�[��!��T��Ͱ�]�v��>s�:E������/�\o�5��#�M�����\�������٥b���*\}���N-��O\P���
m��ì��܍�9��8����z%��b���Jm��8���M'����2
�s����t�0�@��Y�#�0m"����7�����B�5�!�a:l�#8Sq �
(Hƍl�C 
aY��/������vO~�~�I`��S*�T����ȼf�Bcq����T�(A�T6l��jaS=,v�g �$$�Cb�H_KPz��qTs�R�8ɫ�=�i��g���.���䭖��	�P���|+` ���%�^PG��7{��8�<�G!?�Av���2�I�����t����p���5N����IOi�%vJ#4��
�{�7�{D�HO��2厗~�͍0��q;���t�QiI.7��� ��N���` ���r
endstream
endobj
323 0 obj
<</Filter/FlateDecode/Length 326>>stream
h�T�MO�0���>퐦�IU%4@ځ��{���M��;��c�c@�&o��O\�j�yظ~�F���޵��,����A�������E���4�q�u��wڜ�p��}|�O����kh1�������=y���Rhh�K����3 �?ٿ[��G��Z_�[����;"�Y�@��]�/)$���O�LS�H[�k��*j�H����PJ���B��TΨ�;�i2��N�Gfj�y)`�GRM�E�F
�d0�0b0�dF)FɌ���Qr�3*9�bFŌJ
#-� Es��6�ͷ��^�Ǿs�{�׿��o�-� s���
endstream
endobj
324 0 obj
<</BaseFont/CMJLNA+HelveticaLTStd-Blk/Encoding 325 0 R /FirstChar 2/FontDescriptor 326 0 R /LastChar 122/Subtype/Type1/ToUnicode 328 0 R /Type/Font/Widths[ 667 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 333 500 500 500 500 500 500 500 500 500 500 500 500 333 500 500 667 500 667 667 667 667 500 500 667 500 500 500 500 500 500 500 500 778 500 778 500 500 500 500 500 389 500 500 667 500 500 833 722 500 778 500 500 500 778 500 500 500 500 500 500 500 500 500 500 667 500 500 667 667 389 500 667 333 500 500 333 500 667 667 500 500 444 611 444 667 611 500 500 500 556]>>
endobj
325 0 obj
<</Differences[ 2/f_i 32/space 45/hyphen 48/zero 50/two/three/four/five 56/eight 65/A 67/C 73/I 76/L 79/O/P 82/R 86/V 97/a 100/d/e/f 104/h/i 108/l 110/n/o 114/r/s/t/u/v 122/z]/Type/Encoding>>
endobj
326 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/C/a/l/i/f/o/r/n/O/e/hyphen/f_i/R/t/u/A/h/z/I/d/v/s/eight/four/five/three/L/two/zero/P/V)/Descent 0/Flags 4/FontBBox[ -167 -250 1007 1013]/FontFile3 327 0 R /FontName/CMJLNA+HelveticaLTStd-Blk/ItalicAngle 0/StemH 148/StemV 208/Type/FontDescriptor>>
endobj
327 0 obj
<</Filter/FlateDecode/Length 2445/Subtype/Type1C>>stream
hތU
TTe��a�E��v��ѹ�@��CZ�~q �a�P� �3#?��h)"���+��,h��+�1�,���<�1uWOi�:��{���.�{�S���|���������)_��i}Rfz�ܙ�g[Kʭn�Ŝ��㖦�*�+�A�8Z�|��^6jt�;l�i�Ouj��_��7nT^�0�K����⥶$Ǌ*����S�ӦF(k������bLtt�8SrYŜ*��Z���,�
���J��̒q�%:�.��\����2��j�U|��h�o@=�U��D��v�%k��i���O"E�l�E�Ume��E�8?2'R�G-s��2I�}��U\l�X����*���Km���6����8�嫜6�d��m�2�C�2s��W�p8E���������	2*5'W9Ċ���W�H�CS����P���RԓLQ�5���i�i����Y��C��T&Ee�T�/���7R����TUL�C��k�N��n�K�0�t�"�۪�}�|���W/Rw�o3AL*S����f'����f�Y���}�a}�|��&kp���W�48ϻ��F���Dx]
�������2K������Ƚ��C��"�C:}<*8�<���Ym5D��@4�$X�
n�>����7��o~؈�f�H�S3<e<.��3�*/�,(��Q�qN��p��f����<d�GR
��'��G���w�߭3wN�cz����pQTǡe����ͭ�W�[�G`�b��B�ɞ�5�O�b��yx!�@��u@�I��g`�L�
��/>5�M��3����Ӄ&�i�L�g6aӳ�p[���kuaڌu�[�g�{=W�-�͵�lڵZX���}�A?��B �� _�!<\�ȇ�������5��2,�ю	��$I�DZ~�D�>��!o����G^����������V˞#k����=Z�ը��."
0�����'��aA�+��B�j8��<�@�#_Nl�a2Lx$̄\H�\�CR�.x��ϫ��>�?�y���Gmم����rt�E�^�wsg�IÉ?;/*rh��sUɶe�8=F��J�W��k�N�x�h~ھ�w@jT]�X���8.�p��R����߁p�QA7nR��a��ЬƉ�z~�5�e�G(+6Jj�@��%5Ѭ�d9��P�|I6�Y��@�
bN�5�2�$��l�0�#`�Z��Ԭ��==�]��޲�m��|P��� h��nP�K�� w?�>���$w?���?t�(��a�#����3(L��,OOD��[_�_�H�эS�ʱ&��`#�2Bd�h��&A�,nH <M�����J���x��g{����iY�+�y��
�X���DAh����}�!y��UA���ȇrt@'C���s���9���[$U�"�Ó+��%S�l+��� ��2�ƃ����]��ܽ�G�zMb�'�����Ks+3\9%_{W����ud�(��e0��� ٥�	�F7
Qg׬�����>~�q�	h;qS����&v���-�P��[�-	�2B�u��7
{�}�J"�ꑾ����w�>K�Ք�採��ȹ�}૗	I���g��n 
��tEZE�!2���jyH)��
l��i�j�%p�zGAL�qO_���Na��&=����������=���I�搃�g~�����2K�a=\����q��ز�F�&�݈#@���<��L�dRd-<qt�\�p�%ե��
����
SQ�u�/+����᯿���ư86�3�Ԝ���$�� 
C��<
��(�ėH�vBG6{��7����(\h����Bp��hL)p,0�	�E�멸��9�Z�N������M_���U�b�|��Ni�a�a�~6�]�
���v�lF��U�V��@�;�'��r�~�ۦD}�mY΂�cߞ�|��Oa�σ.�d-t_���i�L$i���F�V�97�\]q���"�����Wq%��΀�X��v�l��a�~�m�R[�Pkx6O�/���G4�Z�^
�M��Mw�����Ȯg%�!Cؓ�餝F�	�O�s��8'4�Š1@�W���5����?׷�66rvjg���f�sQ͵��6���ZԷ#c@	�w�����8}�m���u�TTmkzY F�4����k��C�)k�$Q����i�'��4!$f�KD�Et��v��[�$�S���$k+�R�7a��k̳�K�9[/�09_ 5���)�����F�2�+If�$�TA��H�=j,`��z\W+� �z��A��[T�>D����
5L��`���רQf
!w?!V ���į�dzzx���ÂݗxD��x�0�D�X���A#pw�
����ā;���hoa0��}()ڍ�[ ��Z��u�#A�{4��kFF=.g��` ���	
endstream
endobj
328 0 obj
<</Filter/FlateDecode/Length 357>>stream
h�\�Mo�0���>2q�'���!q؇�eڡ�.���QZ���q��*�y���;�z�ٙf���uz�ԍ����i�#�qU��q���--�伿��;Sw��A�B���.0Y�o�ͦ��O�BטL���gk��E3@E�A�~(�c�"�7޿[��EH�:et����JsBȣ��|^����ĩ�k�Y� O":E4W��T�)�Ӆ��8�=�D�
��K�%�^��4+aE�$��8J�+>Ϫ��" �J��Y4��*����3��m9dF�$1�JD*��B6�b��̾h�B,�Ǣ����˿wvV4��ǭם�Ƶ���5ٿ�Dn_c���lg�[<�o ����
endstream
endobj
329 0 obj
<</BaseFont/CMJLOB+Helvetica/Encoding 330 0 R /FirstChar 32/FontDescriptor 331 0 R /LastChar 84/Subtype/Type1/ToUnicode 333 0 R /Type/Font/Widths[ 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 278 611 278 278 278 278 278 278 833 278 778 278 278 722 278 611]>>
endobj
330 0 obj
<</Differences[ 32/space 70/F 77/M 79/O 82/R 84/T]/Type/Encoding>>
endobj
331 0 obj
<</Ascent 718/CapHeight 718/CharSet(/space/F/O/R/M/T)/Descent -207/Flags 4/FontBBox[ -166 -225 1000 931]/FontFile3 332 0 R /FontName/CMJLOB+Helvetica/ItalicAngle 0/StemH 88/StemV 88/Type/FontDescriptor/XHeight 523>>
endobj
332 0 obj
<</Filter/FlateDecode/Length 615/Subtype/Type1C>>stream
h�D�KhQ��m�ImCB;&�*�+�϶�*�i�ZѪ-J݊:ӌ:�v�L��X�+I�.]����+Wv�Nj[
B08�F�LoJ�d�g��������1n�:5x��9���ʈX9{;����;�az����\��B6�Ʒ�ӄj0~��_M�5���$�;��t
=]mvW)T(�UV��J���TI&��zR��ɱUK����c����d�⩓aY�����;�(:IRc�]'�e2����tBnw����bU#�k��K�SDM���&�-���ģC���P
��(�0��b�`ф��͢N�bJ&-A��e�'7�" �,x:S��7���{�Ɇ�r>v�^*�y3�5/mݐ
v/�ƍ��/-Y.�{�Ͷ�Yf çZʽ���	�^2�+˞�<4D��4HyʷC�-�����Q�
CD ���N#4�Lu0�X"\����_�����"lZl	�`!�ֆ����&�R���

s���T���I7��iKz,��}x��՟h��oh=GT�v��0�|\�M=;�����q���71�/zr�?����i���	Lp��s�MGzB��a���ʙG>��O�7�[�կ6�����+� �|"�
endstream
endobj
333 0 obj
<</Filter/FlateDecode/Length 249>>stream
h�T��n� ��<���z�DIO�ԪR���۝�I��9��$�6$�g��o�c{j�	@��(;��U�q�Ꮍ�P�����O94&w�ph��i���)�v�y����� }�
��=�n��W��f�q@��Pz�w����-��~��NNH���M�84u���#�5��Cx��d,�T���DV+��ϑ�2s4$H\q�l?��i(���}l/O.�O��p��δɏ  j�w�
endstream
endobj
334 0 obj
<</BaseFont/CMJLOC+HelveticaLTStd-BoldCond/Encoding 335 0 R /FirstChar 2/FontDescriptor 336 0 R /LastChar 122/Subtype/Type1/ToUnicode 338 0 R /Type/Font/Widths[ 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 250 500 500 500 500 500 500 500 333 333 500 500 333 333 333 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 556 556 500 611 500 500 500 611 278 500 500 500 778 500 500 556 500 611 556 500 500 500 500 500 556 500 500 500 500 500 500 500 500 500 444 500 500 278 500 500 278 500 444 278 778 500 500 500 500 333 444 278 500 500 667 444 444 389]>>
endobj
335 0 obj
<</Differences[ 2/f_i 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A/B 68/D/E/F 72/H/I 77/M 80/P 82/R/S/T 89/Y 97/a/b/c/d/e/f/g/h/i 107/k/l/m/n/o/p 114/r/s/t/u 119/w/x/y/z]/Type/Encoding>>
endobj
336 0 obj
<</Ascent 716/CapHeight 724/CharSet(/space/T/a/x/R/e/t/u/r/n/I/f/o/m/i/one/two/three/S/l/Y/A/c/E/y/b/zero/four/five/M/k/s/d/P/B/g/eight/nine/D/p/parenleft/parenright/h/comma/z/F/hyphen/f_i/w/period/H/six/seven)/Descent -180/Flags 4/FontBBox[ -169 -250 1091 991]/FontFile3 337 0 R /FontName/CMJLOC+HelveticaLTStd-BoldCond/ItalicAngle 0/StemH 100/StemV 130/Type/FontDescriptor/XHeight 536>>
endobj
337 0 obj
<</Filter/FlateDecode/Length 4070/Subtype/Type1C>>stream
hޜWyXg��23Dd��I��~Z�"n�RD�}CEV�*����,IH�R���-�R�WA�X���Uk/���Z������}���Dk��>��������;���	!��J���^�v���5��tm��/(0=f�ĘE)�1��K�0�^��
���C�_����	'�}.�����6}{���'�b#��RR�tڸ�tՌ�<_u�s��k3l�Y���O��5w����g�ĤDiT�Y�tM�^�"9:E���S�kb<TU6�z�N���2����%?mrJzV�F�,)j�_(΋J�W�U�:u�&I�KP������7�i1h�&F�MV��kT��*=9]�N�Q=߽66V��-&��T����ѥ��5�ѩ6o�i�1��tmJ�����$���"E��b��d�F�?���40H|xE������8��d�T2���&$���d2!�HfH$������O&	������I$^�PBWI&���'��X,]N���K�j:A��˴��S�O�F�+9'��HȈ"��'�Hk�\��#�s�?���d7e��$r>YE~K�P�ԯt!���5/�8�:,q�uT8�8�p,s��i�S��o��k���8�R����^=��ejQ���J���V�"{�0�?d ��.�h>�ɠ�D*�΂�0TJ
��l�0�gR�ȊwH|rV9��3���fa���x46MFh󩱿���=��2�V)�P�W��{�&���(��	ƞ�O�9�*X�y�w��Ad�V)СxD�E�"p#�=�����s�R �ܐ�ǔ58M�z��� )�<���)(c�B�����	;��&n����Th)V�Pف����+l�=�ln��Yȣ�Ԝ��-�ʸ��/�y���Yw��;�0�����\��fq�3���c���:�T���ɔ�^iSL�D�G9a�ǰ�S0
����5r�������H��4~xON�����C�+�^�ȀQ����䁷���G����f,[��o
�-zuz����y����Zt�����0
9cc
xa'�����=�eN<�Wf�5�%�E�g��C�"�y�J4B��q�[��[�
�`Em���[�{���w�E[��2F���-'*��L
�-��d�o$X��4��1�N�%�F$�*Y�SfA��6!�E�C�2$�B�c�~
���T[`�2>0�f���	�~������{����I��N
r*��Jfy���c��{��"�S�<�����Ǚ�*��3����n������`某[���l�A��0���l�.����բ[=��y�\�l���ͳ���h��ˢ��D�\%�n���p9�ܒ�O��S���o{��Lg�Ec�� '�>�b�V$U�IKW�ݼ����6�`��A�3Q��b�V@�Ea�-3wúf�_Q��~��x�C��1؀��-mg;NJ
�d\����e~��&�!;z�}��^/ Ү�Z͉1�����^0���ƅz�[w%��ធ@<��n
:vu�¥��w;����i����A�j�-@��J4{��<ڼ����ȡ:>��d,s�Vͦ�4��ȱ�wH�0�k���p�����B�̒7C�<�f�/SH40W�֑hٓ\{��&�;�M�*K��M�BZ�Y�����Vmi�I�uCN$֊�2��	��n���8��3�A
R2;�������i��]�5Y��Y����fܗ��3���ʥl��h�w�Y��@�����c��FE�u�
�I�N��k݊���	g��h��J��$�(k�(��&�� ��~G}Y�-AI�W��e$e�NZ�y�nᢜ� ��{	��#�Uj��ET&��
밺kb��$��R��_w��R�qOr)����$&������A>���k{��XQ
J���X�5���[/�����z��خp�oE��Dq����D�(���o�U�5��s��*�_EC�
09&s%$L|�#���)�>2��&��`����(_�hWX�����d��ݗ���GnH�$T��ܸ�!&bWD�KDcG����wv�:=*m
�Ky�ÍT�郊sMt��U7�)G�)8t�Y �U�''�u�'x��K���Þ>c�9ɟ�a�3o4o0L�
��� ��-�F�M]��-Ώ�?��
ঽ��q�Z�wH���g��Դc��7.i#�RyȄN��^����x\�J[��	;���i�"����&-Z�FF�����@�н��HI��o�ni�e��!U�W��7��m׽�%�?8�V��ٗ66��q����c5x��=+��x��#1o�y��0g��d$�}$��)G:o��U�Q��MN�\�X�3a��<�Hᑣ
���m��CK�L��2��B���6~�lz�P���ؘ�J���	�鉈U ���ǵK��p��[��j*�p}2a�Lsfy��s#�p`�|e�Ά����5o��ԟ�=^K��`(���z
�>'�d;.�_����.eW~H ���S����JuFS7��h5�1�X����:4Hk�[y��0-��K�9~kZ0m$�G-��
X���߷`[��? ��0Q�g[�/��_�Q�I��h��G�(4������^��"��R��L�Ѧ���oYAJ�h��T�٪���N��~Կ���܍K��]����q����?u�8��d���ȣ_�A,'9
&��ٜ۬�L눯	2�1�E�4ER̅ֺ��k�YOT�ĤbK0 \��ٵ��E^���0E	�/~��"r�eG|�2&��m��C���h����Á|;[G�Z�/Vf��0[�ڇ��@|��~"h�!-�����ש�e�5e�^��0�]�2���N9��S�9�Y�j���9r��H�����_X4��K=2��2��K?I�Z	K�/�Áb�Yg������1��Șa�����dm�:�a1���"vEq��m;,{va}�%�e���#Ata,������J�{��㞸 �fNXF=*^{v�2%4oE,o��]C�+�p n��#�B�uQ8\N,8��9�T�	AT&���R9�RM��lL q�߇q�)C�H4��p2�R�w���M��~1�h��^d�:F>��1�E<3��XM�W�-]fX�A1�&.Q����d�:�%�+��� D�Թ����(}�g���U�MjcHn�j\ζP����G�g��
��w��ld1-O�JZ�{e2oSQ�&1�#��m/���.
�p�.-HZ����A�,x�4�z�M&pA�J�ވ��ě���9�c���w,�J���$\~VH������p{�_>�cE�x���m�~���~��;B���#�����c<�cW��l�V�Ώ�'��,�ޯ���?�V���H3�[�mK�%n~�F\1>{�OB�}
��E�ہM�Q2�`����O�vl�{�MW��|[q�ЁFܦ[��~[�a�uב+�>,���׻�ݛx��'a����,	����Rc�Iц�����y����s�y.`���C4���� ��F�i���C��8��~V�=mG�L�2o+\���-��d�y��7����vԚ�+9^^��;�.�'�C��Ʒn��>,�#R��Z1��4#0I*2=ʋ.�6F�O����U�F藡1$�C]b����Sz����B���ů��~mu�q$�B����̐��S�0��3���N��J�(|�`�a��pF���/�7T4�m!�����K=5�
^"�x8���#24��81?+?�0C2T�WTE�膦�H����,�t-���� ��C����҄LE\`EǤ�D���i����7F���
� t)7</�0�,h-h�m
��n�ǋ� Q�v��������B�0��l��(q�	�z\�Bw����4I��8�m�4ӳM܀�栙4�'������\΂�ux�~4�E� �A���V�
��Z$C�Hy��0�O%������]��9��'�7�Ok�#p������/����W79�k/�0|�^6�����>o�s�_{�s7�؁��V��J��R[97�JT
�\	S*i��2�a �u#a��o �C
endstream
endobj
338 0 obj
<</Filter/FlateDecode/Length 354>>stream
h�\�Mo�0���
;� �!�B�ZM�aZ�]�h0�Q�����	�!%8O�7��x�YoL;B��z��������4����T@��qZ�Yw������a�nc��"�_is�fw��?�yr�ѵ��]�#�=Y���(K�����ce��!����ڝ-���t�F_�`+��2G�"%yU���^$Cġџ��
��g��/*d�m�&;<c�-��,#қ"��G(�▼Dp%��f��,Xs<���l)©)�@ ��!�E3��d�� �XC������{�/F�A�!y>U�A>%����/$Oﬦh,ˏ� .0��K���9�(�[ܧ���-��r[xD� �*�
endstream
endobj
339 0 obj
<</BaseFont/CMJMAC+EuropeanPiStd-3/Encoding 340 0 R /FirstChar 2/FontDescriptor 341 0 R /LastChar 2/Subtype/Type1/ToUnicode 343 0 R /Type/Font/Widths[ 834]>>
endobj
340 0 obj
<</Differences[ 2/uni25A1]/Type/Encoding>>
endobj
341 0 obj
<</Ascent 0/CapHeight 0/CharSet(/uni25A1)/Descent 0/Flags 4/FontBBox[ -5 -295 1161 1000]/FontFile3 342 0 R /FontName/CMJMAC+EuropeanPiStd-3/ItalicAngle 0/StemH 48/StemV 48/Type/FontDescriptor>>
endobj
342 0 obj
<</Filter/FlateDecode/Length 330/Subtype/Type1C>>stream
h�bd`ab`ddw���ut�v--�/HM��.I�5I���a�!��C�G��������a��U��=��{�����X9BJ�2�L
��*�2�3J--
t�����cJ~R�BpeqIjn��g^r~QA~QbIj���cN�X[�BQjqjQHP�-8�� U�D!%5
݅��L��~E?:���x��H��e�f���3�O����GE�}�����o��D��8&��a�������~��~�x|?�u��)��q;�d���N�o�O d���+�W�;_���ʙ3��80�{���w��.��.���s���\�� d���
endstream
endobj
343 0 obj
<</Filter/FlateDecode/Length 219>>stream
h�TP�j�0��+t���I`��e�ö�������(�!_�M�M ���xO���В
 ��t�zK�qr3k�����X�.W=*2��e
8��;�k!?#8^`�˱}}�O ?� [`s*�_q�������������7��Ո ������ܗ�
gp�J#+�jn����K����f��+w�ib��>��-�볅$n	��'���*� n`k�
endstream
endobj
344 0 obj
<</BaseFont/CMJMBD+HelveticaLTStd-Obl/Encoding 345 0 R /FirstChar 32/FontDescriptor 346 0 R /LastChar 144/Subtype/Type1/ToUnicode 348 0 R /Type/Font/Widths[ 278 575 575 575 575 575 575 575 575 575 575 575 575 575 278 278 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 722 575 575 575 575 278 575 575 575 575 575 575 667 575 722 575 575 575 575 575 575 575 575 575 575 575 575 575 575 556 575 575 575 556 278 611 575 222 575 575 222 575 556 556 611 575 333 500 278 556 575 778 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 575 278]>>
endobj
345 0 obj
<</Differences[ 32/space 46/period/slash 68/D 73/I 80/P 82/R 97/a 101/e/f/g 105/i 108/l 110/n/o/p 114/r/s/t/u 119/w 144/quoteright]/Type/Encoding>>
endobj
346 0 obj
<</Ascent 0/CapHeight 0/CharSet(/space/I/t/i/s/u/n/l/a/w/f/o/r/g/e/p/quoteright/slash/R/D/P/period)/Descent -170/Flags 68/FontBBox[ -170 -225 1116 931]/FontFile3 347 0 R /FontName/CMJMBD+HelveticaLTStd-Obl/ItalicAngle -12/StemH 72/StemV 84/Type/FontDescriptor>>
endobj
347 0 obj
<</Filter/FlateDecode/Length 1978/Subtype/Type1C>>stream
hޜT{T��e�T�Ɲ�];3j4U�G��S�@�<Ĩ�ذ,������ O��k���&���J]$�T6*Dm���7x�ig�izړ��3�|s����w�߽�;2�ى��d����#�C=�]�`�&&�]cJZ�N�s|],�e��nN�\7F���;YA��}�, ��3��Ň�n�umURr[��M����kЦ��xߠ@OG��A��3�����(����¯J��|L��$��p}b�!3Ð`���U:?Ej�
�Q0d;��{��Z}�)7S�פk�����k�|o2$$	�	�4>#���!R�^RQ�Vj� $�Z=oJ�X�/>Rj]o��I����%'k�)0=!���gu�`0%H������e����&m���/r}B��]dx��@'�덂�_"�WǬw$~|����Mɤ��)�R���eLQ����)*���9Q1rj#E�R�{y��GF'�)Z�>#�`4e��ْ�5T�6e��Q6�l�n'�S��y�<E�S�{g7g�srC�P+1������s�Aw��d��J��!+��qLxr�G���9~gj+��c��G�P%k�9�w�p+P�PXQ�=��,3��9���phr
Ǌ��wųv����rXx�7�,ï�y�i�� ��8��f59�@��#�	n�
�܃7}k��D�-ٓ���;�'0xNj�V��d�y;�K+\���F8�@.�~�n�|���H1&�� �J5�`��Մ��u)�ΑM����Юk&�&����p\A��oG�����M�*ciAY>���
-'**YT���mlg�����l�U�.8E\Yr����E(t����hE�/�������6e��}@��-=�FM����;�ܭ����]�̜� "WCa�>�h�@���	YGf����Cg:�����o�X��#�=hqA�&2M��T �=��i�dK0����6񪺾��������

�
�����åu��;���>X6,k���..1�Z���Z��8�˗�L������z6x�0�r�#���2i�r�������ƯT�	���*���cm��kV���q�)62���t{>�Ev<!Ƣ���|p���R^�z���舚�F�x�qgI�::���)�"�0�&��fVz9N��;d2@���VO�7q]K�>鷿d�!� ��������i���j�-O�us��?D���_]P�zY?��&>ęx���򨓱�擿3��/u�Y�pdqz�:⪦���r��S<���5�=��~y���،|q�83�-O���$�Wa�������W%��j��eV�K��������	�����Wj���}�� �[M����Љ�c��F�z}JT,KoA˱�D��M&Y���(�c ]op�bM\೉�.@�1���0����'�c���`��o�l���`V�҈l�����#mJ1q�J#I�U8�J�km��
�!���'��x��7��bz���V2��C �^�>��fO�8�ᤋ�rC�(� #�ڰ{��bxFw��t��䏏)<�n�0��(M�1�+ؓ�堊�<EAXA�*K�yvXc�b��M 20k��(�z��
A�u���Z�4��yI��b3���O���������,�ؓ����/w�����ߪz�4v�w���*
D�&�pT�1ș�]E��U�][���J�ٺ�������q�aˑҚ��t���j�ĝ�K�%<
��C�M:�]_lq�B��5}\��?A>A�9+����ں�ʚ+?��a@2�2���R�T~C���KǬ�,�����
p)���l�CzK>�Mo�i��Ў�T+�*��FR�F1��L�Dׄv/��y藘�"�ф��:���~؀�G���n�+1;.~g��s���z�����%��egT[�w��^��o�$��Bq{�K;�x,��kr%�5�֪i����j77{�����I� ]%�;
endstream
endobj
348 0 obj
<</Filter/FlateDecode/Length 310>>stream
h�T�MO�0���>�6���I�����{���M��;����e@��O���+G��}c�䫟L���<����#���n0˺���I��e^pll?AU	�F�y����o�x�Mn@���`O�9��tО����	���a/d��ݳ������Tܧ�����i�^�B��=T;Z�v�s"M��؛O�K�����,2��8gM4�bV�E�1닠/sM\��)��.LIC�Vُ�W)��]=�n9q�m�� (J�TE<�9_����. ��u���=M;>d�f��`���nral��  �\
endstream
endobj
349 0 obj
<</BaseFont/CMJMBE+HelveticaLTStd-Bold/Encoding 350 0 R /FirstChar 32/FontDescriptor 351 0 R /LastChar 121/Subtype/Type1/ToUnicode 353 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 500 500 500 500 278 333 278 500 500 556 500 556 500 500 500 500 500 500 500 500 500 500 500 500 500 500 722 500 500 667 611 500 500 500 500 500 500 500 722 500 667 500 500 667 611 500 500 500 500 500 500 500 500 500 500 500 500 556 500 556 500 556 500 611 500 278 500 500 500 500 500 611 500 500 389 500 333 500 556 500 500 556]>>
endobj
350 0 obj
<</Differences[ 32/space 44/comma/hyphen/period 49/one 51/three 66/B 69/E/F 78/N 80/P 83/S/T 97/a 99/c 101/e 103/g 105/i 111/o 114/r 116/t 118/v 121/y]/Type/Encoding>>
endobj
351 0 obj
<</Ascent 0/CapHeight 717/CharSet(/space/F/o/r/P/i/v/a/c/y/N/t/e/comma/g/T/B/one/three/E/hyphen/S/period)/Descent -174/Flags 4/FontBBox[ -170 -228 1003 962]/FontFile3 352 0 R /FontName/CMJMBE+HelveticaLTStd-Bold/ItalicAngle 0/StemH 118/StemV 140/Type/FontDescriptor>>
endobj
352 0 obj
<</Filter/FlateDecode/Length 1854/Subtype/Type1C>>stream
hޜT{PSg���� J@.��E�C��UK��� ��u�J#$�$b���V�>`�2��RU�b�tYW+�����]�cK�j��]���������;�6wrr��;�w~�s���0,��W�X��$a�ZQ�:L%�܂|GiR����wC,	ג�)"�>%c��/}]ȑ�22u$*��h|@��};�Z鲙ʞw()��}6�o3|6#�o�;����&'�*O�Z�U%�ew�f���j��ڌ�t��DE���+6ծڪ}��w�\���pU��2s����C-�]1*��T5m�u��ٔ�lTf��mj�b�(��Ue����J�nq(FK�R�C��M%��lt)T�O�KT��H�Ʀl�l3�KM%��b��b4�?��jSLTA���U��D�Y�_�[�SJՍ?�g�a�`Fτ0aL8��13�9L
3�Ic��f)��Y��1��Z��Y�<D;άbV3��t0�c�'ؿh�j>���4��k��C�4.���]�'az� `���4iI�D�����qP�����m����w���o��b�k��}o�[��M�¬��q"�c�G�k��.uk`�[�q�P?�D��C(���k�|!�q���?x��x^��W��/ ��B(�R+�"o-(�P�֗-A��I�j@����a]��+AA=�
�`�!Q�w�Ύ������m��n��h��/�b��9DBp�i�^i�N�=���~$���wq^f"�B�����?�{VT�Y��(m���� 
 R 4lb�$Ģ ��W�p���g:{ߒ{N91��ksOH9�:�}/�O  s$���8�y�����Y��,sy�I��@��\yk�;�d�����@�U�� ;
35�ˉb���������g�@�{�@�����j�@��;Ӫҥ#�a��=���}��^=Q�dG@�AZa�,b�=���Tꢐ��<��m� ~�J�B{��2�Aîo�="�kO��+0#�S�e��OA-����}Ʋ���1���]5Jv����]�՜�*1���2T�
Sz9"a�Yμ�Y�{�W��/�4���$����h�+
X��xSA[���u7�:�b~�����4�ho���U�(O2���`��o�V��c�KV{7���Ы�M鬁�B
y�D�0
��D9�� ��?��s����{�y�ʺ��2��p�[�,���1��
7>���qI�yݼ�f[ $��[�����?���%++��_
���El9�r`_ �:�A��=є%�6���
��zxlL�����ȴG�hlE�'݀�313Q�&�z(:Iv�>4-DܢF��z�hy��E��g��W�޻C&l';��h�݌Ƨ�
�l��u��OK�.^k>�w���*�Y���>0���@pX/e�E'�[n.lН�R28ˀ�bR0W}�
��<��ayg��.��,s��]]�%L����!� �{!�3���u^;(����Kߒ�,��DI�o�1,�i��ҩ1�ݢ�v�t�`��N���������][|���D(@qc�#��, q.��G�	c#�9��A�ygx���Ǵ%-���E.��p�ΰ!*���G�Km���omj�H�s�չ������
�p�3�����>||���2��|��͞�>��K;��`� ���vw��u�۶5��4z������y:��Dg�d�ذ��K�$�T+>����Fq�@�8L�!����Lzwqh'�N���

9�s��#��3�����_sY[��>mx����.�V��v���߀g���顣|C�@�����b�@P�����V�om=���IվIR{�+�)� (��p,|"A��  O��5
endstream
endobj
353 0 obj
<</Filter/FlateDecode/Length 326>>stream
h�T�Mo�0���
;�����n�z؇�nwL�4B��~6�
	�獿�6����gP�a�{���]p��"��;H4������k�ƃ"��2�8�\7BUEꍜ�.��_���\�w�^B��w'X����?{���b�kh������̀���]��G��:��1�8��bh�	��q
UQր���#�cg?���8&Ui�0�T8%���d�Q��8m�Z#Z�Z#Z�Z��̅p�\
�̝𖸐X�*2��fђ���k%�O]Rg�-mҒ��p�I&�d�N�i��X�5��G{��=�@CZ����;�]?z�6�ѷ   Ԣ�
endstream
endobj
354 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 355 0 R  6 0 R  356 0 R  8 0 R  357 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 358 0 R /GS2 359 0 R >>/Font<</F1 360 0 R /F2 365 0 R /F3 370 0 R /F4 375 0 R /F5 380 0 R /F6 385 0 R /F7 390 0 R /FXF1 395 0 R /Xi44 106 0 R /Xi45 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
355 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
356 0 obj
<</Filter/FlateDecode/Length 2922>>stream
x��ZY�����|0�n`��[��<��l�;�w��8�nuF��5�c����*^���]�/Q?̈%V���.�zvw��E��Y����d}$�
��!���䯞�Fn�ߐ'�8��nK� 
���v@m��T��&�Zk˒ܽ��BrɅP������p@�D���G��['�W�� �Uв�d�s��7��۫۫� �����JM�A5z�g}5ǾR��+��z����:��t�ڂ�|�����Z�0��zi#��EQ�-ᒚ2�=�W[��c�/k�P���3X�W�/���׉ŕV�2S �jXe�V�Uw����;�\	��	Aܢ?y%���2a,� ��fS��Q�X%%�	 +�Et��EFi{�Q���5�D.r�tA��e�B���%IJ\SJ&;��?�;P2��h9�D�\�$;i�d�3a-'�Lv�[;�;R2���FZN(�+ӻ���e'����儒��t҄�(�A�02'��PXj!�L�%+ˠ1���	m"h��,Bd��rEK�2m��V�1!��b�_�$���BY1�1&D�)JE�������D)e�ڞkJ��M��C���H�4��5�dXDZ#
Jh$�i�I΄r	�d���(%A�R2�P��`kcF`'J�6qM)؉��N�؉��M\SJv�%���v���Mr&��~�v�b;Q��kJ�����U�D ���&
�+qiה��@��ϗ*FʧK�%���R�(d]���%����@x���P)ureO,�+bz"�IE����!��TG�!�`}%�ڡk7����%+K��������5�K�K�M�������Qn���T���y�T������c�$8�ʋ����"�ke�f���B�U�qC�Pv����ͱ��>������n_�u�'�jv�sw&�,�>��;�'�^��˒TGR�M�P�7��tM����?�t_���'r_jJn�4���,�����ǻ57������
�#�}���;��D��	�f�,'�aJ�r����OK�����t�cPM]�\S�!�U6�����#�'J�&ĕ(b�H�fjR\��e�o�I���gξ#o���yh?;�����ڭ���'���.�z�ph��l�����u���la��}uB�NO����jԗV̩,��di�����k� �H�}�ٛ���������c�b��Ջ�ñ�W�wC�4�R��sĹ9��qZ���k�+R��>��a�<�;��^I��0���	�
��AǃF<��_sM�Ѣ�kg#���t)J|,l1�����q��o#��Fp�Q�����D�劑%� ��݇���~�Kud��VE�`�Z`Q����v]|��&�R�B:+�i��R�EnF+�#���c��P���\�� ��j�&Y��HXpؽ
׻�����/�+�!-�
R� �Ǩ/�.x
l+hx��&�v�z����7�a�����c��RP�����zaW�������j$�Xd^r;��j�;��j����=1���(�(�
�3X0���E�?��ȋ��h�nϰ�F`�u�%S��\@��*���,�3@�QNC��|�%�TfD��P����O	�$�c̷��L���Us8��M���{I�
���M5z'|	䊈�J�6��b)�K���0�[���Î%TtÙ��H�
��C�VN�}�p���C�/�jx���j��`��y�*��j5Q�
��xϫ����QP��7����%/��q���C;�V?/�XԐ��Nλ���~
�[r��'�>���\쇰=R��;�R�ğe�
�P0��8��n]'��b~� �Ь���ph�
�<�������5l_�
M"��(���P�j/�X�ѹ�0�BN�R� �K]mH�%��PSl �}l �z�5��C>�����������w*w�S��BD0!��8S(��G�ɦ�n�������|�m
�j��/���5�;���9<, �Aa ]m���"�o�������:���3��<� _˄�f&�"4}�Q3vN�0�e�B3
�̹G��w�r��KBd.���^3J�S�Z�{��5�D.<�P� C<��A��6���q�d����]�?ng`���W�-U)�����%rM)�+��]�*��b�
�X����>W���.����@��@�����/��&e{n[��\��ݥ?�@���U!RV�z.����
<U� �W_���)�ǵ�\SJ��#], ^7 "�@v�d�
�.������吅����H*jU�>�6LkE�p)� �	���ɰ�$���OO��yI~~��]��&UO/�I<�,���
!�/�b���.��Bd���q_>U��\C�E����R��o^��ۻ��O	�{��'`���-���h�K��8�3�=Tp�f�C�n�VX&�֛iL���}�{^_I�v�d���̠�rD�9��8�����qn75�a/;gOjB���a耵��=��n|
ɔ+��^�F���w�%^$��~��y�K\�A�r΂W�7�e~�:�����SB�?;���\X��%�l���+a��8������3�/���K�;C����^�9��7ܱ�	��3/��ы�;c����=&P�
3�3�?�x9bݔ感ԆZ>o��s;�I���K�'�|�7ڟP���d3�/���K��f�>���9�U�� F.�S��᠛o�}�ݥ�}�q[������Q~��e�Z�5v5��tF�؇GBR��~�P�j���������&� �(��
��NU��B�O�;���f|��G߹��{d"^�r�[�((����5ʆ��~"�*)��]@IK������}���P2(��l���>������o������4U�u�)Ù�����_;R���|p��U6�ۭ������[;�4�&��Ib�
endstream
endobj
357 0 obj
<</Filter/FlateDecode/Length 309>>stream
x�e�;O�0�w�a�k��c��P��ýBaFH�20!���I�x����`Ǿ����5HzgsbhGp" ���z���'�I�a�� *�$�bޤA��S!eH���>�*릡Du����b����!���,��[@�z���9���x��5/�#�R���'ϛM;�]�U�Һ��5w��5�9����&������)���0�u����x-��^���$�!�JǑ��[;gP��+��c�,��4�A8��o�"OJ�����W�]�{!g�g�`��Òx���Ŗ��3"{���1|\��w��R��
endstream
endobj
358 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
359 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
360 0 obj
<</BaseFont/DDJBPK+CourierStd/Encoding 361 0 R /FirstChar 49/FontDescriptor 362 0 R /LastChar 53/Subtype/Type1/ToUnicode 364 0 R /Type/Font/Widths[ 600 600 600 600 600]>>
endobj
361 0 obj
<</Differences[ 49/one/two/three/four/five]/Type/Encoding>>
endobj
362 0 obj
<</Ascent 0/CapHeight 0/CharSet(/three/one/two/four/five)/Descent 0/Flags 4/FontBBox[ -56 -250 678 857]/FontFile3 363 0 R /FontName/DDJBPK+CourierStd/ItalicAngle 0/StemH 55/StemV 55/Type/FontDescriptor>>
endobj
363 0 obj
<</Filter/FlateDecode/Length 672/Subtype/Type1C>>stream
h�L�]HSa���<;Q����vN�]j� �ʱ<��-6�Ғt�\̶�V:j)��bh�7Z�fiNH�Q�h;$J�A]D�I7
*����wQg�*x���� �� ��e+����گ�V�7�,����@2:��B�S�&<+�m��-
v���t
B��3Pjw�y��N�[XP�%�P'1Wb��OJ̗X����t���bo����⺜L��v;��\�%�1�l�t����o���e&���1�����c�dB.
Մ�@>��0��p
��j��^9*\GH�.���`"ć������,f9��Jt8�R}��pF���j��$�o6�f
�sd��f*�c���(������:?�������?3�w�o?׮t�j5�jGC�F��o��߿4����h{��b�ucf��^�Ċ*PF�'�\G6���9=m�*wBS���̗�}O�o�us�r��ZO�[����Z���������'r�z0���=ۿ�eά�l�9w��o�zZ�<�s��q��n����+�� ��=j!{wCȆ���y�`p�蝄*���җ�X$ �&����z�F�N�������F�V��x�
���>E|�5����ں#5�����3��˟{V5P��Y�S=Z����_T6����A]@��ax�G	{�}h3�  ��9�
endstream
endobj
364 0 obj
<</Filter/FlateDecode/Length 219>>stream
h�T�M�� ���sl��ز�X�,��6�ޭN�Ќ21������|}�����!@��t���&��-�\��:<T�zPD��ph�sPU����x��g^�o�*� l�-��8��o�h'�8 (���`W��N��ğ��:�a��|`8��WYQ�Pmd�G
H��L\��|�Ve�EL<�N�{��9��!d��`	_s�Χ'�.n 1[m�
endstream
endobj
365 0 obj
<</BaseFont/DDJBPL+HelveticaLTStd-Cond/Encoding 366 0 R /FirstChar 2/FontDescriptor 367 0 R /LastChar 144/Subtype/Type1/ToUnicode 369 0 R /Type/Font/Widths[ 250 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 250 500 500 500 500 500 500 500 333 333 500 500 250 333 250 278 500 500 500 500 500 500 500 500 500 500 250 250 500 500 500 500 500 556 556 556 611 500 444 611 611 278 500 556 500 778 611 611 556 611 611 556 500 611 556 833 556 556 500 500 500 500 500 500 500 444 500 444 500 444 278 500 500 222 222 444 222 778 500 500 500 500 333 444 278 500 444 667 444 444 389 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 222]>>
endobj
366 0 obj
<</Differences[ 2/uni00A0 32/space 36/dollar 40/parenleft/parenright 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon/semicolon 61/equal 65/A/B/C/D/E/F/G/H/I 75/K 77/M/N/O/P/Q/R/S/T/U/V/W/X/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 133/endash 144/quoteright]/Type/Encoding>>
endobj
367 0 obj
<</Ascent 716/CapHeight 712/CharSet(/space/F/o/r/m/five/four/zero/N/R/two/I/f/s/e/n/c/a/l/i/y/u/parenleft/p/slash/D/P/parenright/d/t/comma/h/k/b/x/period/S/seven/eight/nine/one/colon/M/hyphen/three/v/six/X/dollar/equal/semicolon/g/j/H/w/q/C/E/quoteright/T/Q/A/W/G/endash/uni00A0/B/z/V/Y/O/K/U)/Descent -172/Flags 4/FontBBox[ -174 -250 1071 990]/FontFile3 368 0 R /FontName/DDJBPL+HelveticaLTStd-Cond/ItalicAngle 0/StemH 67/StemV 79/Type/FontDescriptor/XHeight 536>>
endobj
368 0 obj
<</Filter/FlateDecode/Length 4851/Subtype/Type1C>>stream
hޜX	TSW��5�&N��ވ���EQ+ ��,jE�J����"Fk����X籊���j�D��Dim�V��k�Mw���ۿ}o����[�u�g��|{����O(�K	EQ�ѣCF�N��K�ԥ�FFL�>-=j���(q��Й:�]ڰ�F�#�����ʄ��	
n�7��:�N]UE�Pg3�b
4*9%;56fa������b�-��^�v��}7��l}�k4X��@������KL�NH�LNMIN�H�Eyj��N�i�T]�.5S��4)6)9=;E���`����?~�Ʀi#��Q�Ĉ�xmr���DO"K@�ꢴ�I��:��i��P=)]�����)�ѱ�:�`bD���_�#u���2Q����H�M���L�MNJ�CyRD��oP$�jc�	D}R�N�ߌ8v�t�3T����3'�t!�D&�(ZHںH:�$�D�M!�/�x����$I�P$8�\$!�O�$InPAT"u���EZ��WZ���4X:U/=�2�e��E6^)�,������Kr����}y��{��
�^q��g�ܖ?�
ku�����[��>��Q�6�m��3�pm��z��u��&�[�n���m�[�ۣ��g��N�TNU�*�)e��&��-���R��Q+-v
���BJ��P)��4j���㨐;�y�o@ҧ�:V�B��%S8~
�,
�ڤ�Te���˰eh��HC��f�Yy������F�
W�ƛ'�A5��<���ҹ؏�̚��k�[�ּx�y�sZ�oV��i<��#���(y��N3WM��P��x�6~�qρ�k����Ԭ<dg��-�'٘g
/YPjS��: *̗c�h��ݫ�}i�\x���@߯~�ݍ�U�Q��|�z��&5Ȃ�v���R�B7���Ķ5|$r��O(���0�,�fQ��!�X]g��F�#�	F6 v�L1����r���f�x3,n��XtϿ��40�t�N�:���Y��1q|�q�Ƞ̌������>�y��Z͛*��<��x�^)��\Qc�e�ǚ�@��<p/��ٱ�B��^[`X؆���繁�[S½K�J��7x?:�����
f��^����-/���x�Tj��U�9�$���6��4�4D(�h��y]�L�-��˙�[B�H��AZ������#�KX����Ԍזgv�)�\�j��@vRzU0�
[7yM�l@�3������|�=/��{_
��ylO>W�k8�{��]��Ѕ�&�����������җϾ����@�F�� /��M�����$x&���U�<�̹��Խ���
�2Ҹ�U+V��+��ח�/_����O��*J�nT�M�M��F��)�jֆ>�?����M�;E$K��t
��d��X��39}�ԩfX�,wA��X�ྒU�r�U�=�p,�!��BZ9�����#��^y���0��S)��^�'f�mV�B΃q��kA�����}�f��ne܍Ϭ�~��ˡ?a�~��B�P��z���I|}�T1�h���q�$���B��q=���g�\1��}��	a��?��g�Ǐ�p��1�Vއ%�df*n89��������'5��f����ػ{o~���q=?
�w���1O��Sִ�TC��YC����x������,�j�r�0l�ƞ��A�y\��F���#D}ڴ���]5����v�p��a{B�r��E�(�7�{ 9V�a);"yĀ~Y?|sw�OO�o��ǡֱH�C��e�����꫻y#�W`�$�y::����0%%_���a=���\��s�<�k$� Lc�EğS�Tg��C��?��w��v��$��
s���k��Ec�w�e��I0ݯPk��Z�#�<$�`}d�h���ɰ
��,~H�,t��T�j̠7+��`�C1n���BM���O�`=�7n���Î�S���4~��6�<4�W�"��#�%R=��衯�Q��>�*�i���UWh+ ����
�{�G6�6�ۚ��f��&���,�K��`7
Ʀ�B��*1
߮�s�0���Tٗ�
��>tQ�>�(G�"sx
�7B��R�g#D@��l�\�8�
e�A-���? �ab9���!�jp�a�{�Љ�v�1������A��N4�L��3�@ �R����̸p��h�6O�%��Et���T������Ռ��W���p����s�p�~�U�a���X~�[/���Y��>�0h5t0���S�1g~,:<�0Pq��їd:
&&Ώ�ћ0�x���ă�$2�ly�lG �f��Y��G�a*�
��o$���u<�}DX����J�Ȓ	*2'����1o�����o��4��L��4nw��"������{��ڄ���<`8��:z�NQD�.ػ�{Vw��6�&8蚢}5j#�fAyj�"�zK��L�� T쮨^s���6�%ī"X�E�y���'�# �M6$R�"z��U��a��;jD�?҇���8#]1oM짱�x���a�xb�]ns����a1ʸ�B��w�\�2�dH�y����E8�x����$�WC��C��?}
��р{
��O�;�v���T�
6�XAB��~al�!���1���+�ӎ..p�V~�A��:����&����K�q�揬���pѡB��,V}Ϟ�^��$�K�d':�?���֚���cu25��)���ء 8�) Ѱ� �4�m%�$y�_vל�1��O��n��f��ľ�w�В��Y#oĎ(ɏ�+�#�=�g{&�Wz~6�����߷��_ya���˞��������O����;��>�^�A���+��F6C�m")�,�����޷��]�G��Ϧ܊�d^�<�X�<��tJOJ�!�yc�̛ -�|hC�~��hE���e6h��Ct�yQ-v����
Q"7(f�^S����.����LP�f
t6�Ѽ�o�	�a�������&�I�`��!������9ẏ�<԰�?v"W/x� ��e�W�c���W
{��E4�����6O���r�$��Oֵ�Bm��
��rv�����F�ܷ<���;�������H96/��?}��NE��;��y�}���=hl��������%d�������&�J�IE5L0M"o
,,(Y_��z�)�	�J��,�I_�����p̗�	B69d	�EH�md��\ӴI�K�E�.���{�Sn���9
G������8qɁ�>=zpwl�M��)�P�jv�~�~y�bq�q�z5ܖ�[��KX8�K�[�5�'�nk�nO��d��Y�3GW�D��yY���B�Lu��� �?{�L�5�^�#�TRn,7�HYo�U'|`�qYJ�b����ئU0Z�(��#�_�{d7tl��C�H��;����m�@t,t'�ALFx_��4��6�\4�(V���܆�f�,#E�y���
|��0�[t�`@�`g��A y��ۑ����A������iz��ϼ�䓭��_ў�����z&���EIP���]cĮ�,t)�OG�n�`�Ȣw9��q	�(����?��ܑw�y�N��|
�Mb�j�@rs{x�^/1�|�yT�#��T%���N*��A�:�a.�ɲm4�
>!����@�JKL7�y-1-/� �jޙ'�%&`L�c����",��4�2������I\1gŢhEVr��8���M$�L5�BX7ˤ<i��ˉ���[6`_l3"�{�l.��<H��ԧ������A"�;#_�=���>b���u�����U��� ����j�����~��岺���Sa	q�i�Kݱ@�E
�{���f7�yK��ݚ�UQSy��E�?�q�gʂ��1\T��ͳ�:�J�변~N�&�*���Q/��9���X�Y1��=��E��X�j�����<�$eY�rq\�2���+߉i�i�ˢn�}T���x�#bc�1��l �a�)ɩ��b
���|�����!�i_n��f�:��4���
��W�Z�ˠ�z�����^��Ưb�q;���i�D&�E������j�Ύ�����̙[��z��%:�ɜ�~B=@f�4�/�Ց��du�
K�Ra�����]&wE\eEb޵��s��,vL<``�C���6�>������˄��c��L�@�Q�-"̦J�_���^��$t�0s��U�$_ $�&�%$_ �
��+���:��%�ӯ����;F������8�,y�C�j���O�:��(��yB�9��"�u�s7�kP�#�QV����s4��v��O�f���b����1�xq�fe���AJ�zVt.|O3_\��2��F�S1'!n$A�ǽs�<�
�'[I�t<��8�[h<ƿ�ѯ6�9�g^L���_=.b����c_�pA��(z�|nwĕ�3$i}��7��m�;�1�3������T��i{B�ם�&a��j&1�c�Ŏ@���n����_�oM3��۫x��#�'y���8V6Z`�����k���4s2~�.;���X���L���/��w����o;wv��]��v���:��	Ø�j��O���/�ұDF�RXB���p+�RV�[1�V�c���^�%��Q/��̍�H�H?!SVx��~�u���Z#Jaf1 ��:A*IK����a���Fd��A7�#��0��/�*|�����Q4=X�qFie6?F�_UUX��tdK�n~c���O���P�NT��Lц�B���_�Q��G��Bu
��a� ���(��ZG�l2�t�M�X(�B��Px�QH���ds��_�/{��m �B��c��9��
�6@�
ض�Q�������P�A8��[� ���
endstream
endobj
369 0 obj
<</Filter/FlateDecode/Length 307>>stream
h�T��n�0E���Y���Ɛ&�RJT�Ej��{H���Y��;�i�"���q���u�ol7��>�mg��q�x�p�sg!�`:=ͧ�սr���p'��P���Qr����,�R��}gϰ8f�8\�����
���O�=�����M�A�s6_c08:��+{F(���܊
К�9�N�V*�R�;Q�R��2r�� �M�|O\�"ě�YN�o+F�����+Y�r��Iy\4q�$e�3�"US x��@��}�X� NnI?�l��m|��=M6.-N.̬�x۫\Qxٷ  b��
endstream
endobj
370 0 obj
<</BaseFont/DDJBPM+HelveticaLTStd-BoldCond/Encoding 371 0 R /FirstChar 2/FontDescriptor 372 0 R /LastChar 122/Subtype/Type1/ToUnicode 374 0 R /Type/Font/Widths[ 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 250 500 500 500 500 500 500 250 500 500 500 500 333 333 333 278 500 500 500 500 500 500 500 500 500 500 278 500 500 500 500 500 500 556 556 556 611 500 500 500 611 278 500 500 500 778 611 611 556 500 611 556 500 611 500 833 556 556 500 500 500 500 500 500 500 500 500 444 500 500 278 500 500 278 500 500 278 778 500 500 500 500 333 444 278 500 444 500 444 444 389]>>
endobj
371 0 obj
<</Differences[ 2/f_i 32/space 39/quotesingle 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon 63/question 65/A/B/C/D/E/F 72/H/I 76/L/M/N/O/P 82/R/S/T/U 87/W/X/Y 97/a/b/c/d/e/f/g/h/i 108/l/m/n/o/p 114/r/s/t/u/v 120/x/y/z]/Type/Encoding>>
endobj
372 0 obj
<</Ascent 716/CapHeight 724/CharSet(/space/S/i/d/e/one/six/W/h/o/l/a/r/s/n/y/seven/P/colon/eight/B/nine/zero/D/p/t/c/u/f/slash/R/period/two/three/F/N/m/L/quotesingle/four/five/E/x/g/z/O/b/C/A/M/U/T/Y/H/I/X/comma/hyphen/v/f_i/question)/Descent -180/Flags 4/FontBBox[ -169 -250 1091 991]/FontFile3 373 0 R /FontName/DDJBPM+HelveticaLTStd-BoldCond/ItalicAngle 0/StemH 100/StemV 130/Type/FontDescriptor/XHeight 536>>
endobj
373 0 obj
<</Filter/FlateDecode/Length 4506/Subtype/Type1C>>stream
hޜWyXW�O�A&bRg�up�KE�7Q�"���IPĭ�,IH�&��ĺ�� T�X�Һ�j���ť��_������	������ߓg�L��{�9��;��e�
�\.&O�1i���bWƦ뢣C��c�&�$���$�HK��o�EwG�ggN�;��xb���Ɱ�W�n
op#���d��
�~y}\��?%53M���������8Z�fG�ǎ�1��mO��C�k'Ƥ,��g��c������)i�)iQ�1�ډ��Z�P�6-V��R����KNI�L��$-��7�_���Q�����ؤ��eڔ�?����޸)^�J���hu���Xm�w��v.�����J�ц��='.Nk�L��Ԣ���;:6-=
�)(&M��4�>F��KI��!<9*)��"%M�CQ|�>6�9djp���-mLl�����戃������L+��V��e^���1
�$F6�Q�([��%���Ȓa��	e)����&�`�����:���2��2e7e��)��:D}M������E�iFͤ2��u:������3뼣s����2���.���pY����MW�kJ�o\U�F�Z�݆v���F�v7W��:�i��>u���}��@��\��(UB+E���鏭��Q���0��J<�IOD��c�X��9�@� :h۳�P)}�.db��xڥ �PȏCwx��U� [is��3��(���|~O
��\'Nf�$Z��g�z%t�͇�m���_�wS��ľ������B��ȡq�a=r�䇙�1.kQN!^s@��<L
o�n�e_�/�x�9q�P�i�MWO��O���K�t���+Ho�����_� ���R�B�O���}Y
΁7H/��1D(�{u�r��ZsjGjP\^\l����2k��A8��8~r�&��p^i!�5b*G2l�J��|�	Z�l�L1���/'��(t�Ғ%�K�f�i٧��pkv��J!���Ģc���oa�=c#C�Sd��v<L���3O�_��%c��;)���M����*[O���E_ �g������~(���}5păx|I[C�G��Ǹ����4d;�q(�&ل���	�T�!m�]|ڳ3�Yp�!ˋ{@AV�}�[�d�X��?��v� �+���W�<�9Z�bL�@~�G&����'���P Zq+qco��<�H��sč���do��a<��p���D�����]*��r3gl��ҀI&�/�r���mG&k��i`T�S����+��ӅӴ�6���b�}z��kNc@E�<�B�:�АSg��z�����c�]���?��pp��-��YͰ-�H���+�g�U�se뮇5�z\�@'�ml���� �|���
*DD�w���!��6�麙�j�=9� ( O�j1��\�>�\P�����Gv�-6Κ#�^ı���É����F ��%��FV�y���:u[
l�"��a��z폿��B�F�+������*�4կ�n㓍_�"7K�>&o�8�l�9�!�
"s�w�Xp��s��]B��X��	2���0DE���A��_4"�d�Z$�u�0Q���2�a{��YB%���v\��}�2'K�R�ϒ�}��:�Z�w�bSY�~�͉��y�3��
��)a�9��tc�9��N�'E���w�ٱw��ԅ]�o�����8��}�M �K��mGT���v��� d��=�&��P� %����
�Ȅ�l%�G���J(˸���C��͕�J��������6�.L��J���L�T�|��W(��2�zaB��>�(Pp��H?x_766/<v����dM�$���Ҭx�j6nN	V���_ŧ����4wm�������B�KM��i��r����[�/���N.�����[8GCV�Ȗ���x�n�B̃<��RV�%c[E�s�M�u�fp޳K���1m*x�YKް�bxʼ͈�
�>��t�0$}-�M�s-Mީ �`5϶��Sϡg�`�j�0oe\�DJ���]�������^q���wUS���q:�&\ 
��1KU� ���m�\��-;��$�B�!���k�⚥�X�%8���q�6�E6-%�V\��D�u�V��U�8W��zI���=�uu�/P���N- O�ꅵ��,�:����`�cbk�VŪ���,j��n�� &H
miw�x#��|�ʯ�V�K��!����
�"
���Uާ`P���Be��2�T�,��i�y�!<oa��F*������gD�"��]y�RDu�&��_l�Y���B��IE��ҁK������z���V�E]4�̿���ʽ�w	)�q:0��p���O2L��-�&d�b�\��^yVW@?x�����ܵЛ�k^���p���@z��I�o��_��^W�D���1��\3u����C�.�-�Q6G���n4}V��a���k���KAF�<9n�rI�V��r�1����� �X�p�;�9�pz�)мȼ�0�2�ﭔng!֨��5�����G[v|���!�.<���s��/�L�׍V��'-��@���9��GLF��­�:qw�T~D�a���S�{����t�y���^b��mO�T�$��6uE�u��1ц�D}��y�G7��嵵�����c��-�f"���<��?�
�Z�.�>�d/<�V�C%bc^�#W�a42:��������� ������̻v�K�ֶ�&c}`�l�
cyq;�"SSK�v��sSڳ9�P6�u~9��#�LU�*cU^sn��@��D��R����L���;ewzX��qE�*|Α3�)Q���m^f��̛�Øi�4f"'7<�y��&cg�Q�b�ѕ�i"�$éP®�L���a�L��W���	dSl	��*�����ڝ��uxr�e˶$�!3=�-�\dF�ے=^����DJC�h�ً�F&��Z�a�a'�;��(��m����6l(T�
\�.�r���ݧ�����V2E��'���f\�zSY�g����ӊ��Ei!�[�7jh"�Ԅ95���%������+�U� cÍ�M�L&f�P��A4�O�����ph��wv(���o�[36	�Q���F�j��;M������(ͥC
�Dk�V�,�šF왋�:�ȚFv+;�~�
��6�����-!�U�C��}��*5L#X��mó�g@�TR2q�j���ߒ���p�@f�dPޕ�@k�;s���DF�/6�E�b��o����t���|�f��D�H�Ռ��f��Y܌�	Q��N6x�K�+�m@�,��#H)VEB���5�ռ�Zޘ�-�4���@�0d	͞f����z둊=�T<	&��k�\:
�Ƒ����0H=���<���lY���I�z�$|[n����N�|I�bTk�]t����ي� 3n������ȿB�_�:Φ�>Ew�q�zK�m��C�[8���W^�I���G^��FT�j�,'�������Α������6�cOx�|��{
L=�3Ђ�1:�=4�Hg��`DD�c�u� ���h��F��c�!2�gO�Yg)ހ�rK7���4��	��*pF[ X%:�Ƌ����3����
��g�sNNԤ��L��` *)�J84e� N���%*���lM4��3N�1�ץ��
ɏDQ/aq�v����{���IR�X��d�m2�ͅQ�6i��Rv���?o-Z�@m�VY�D�_��8x�R}xrcc���(����YHk�����핕����r�?��l7���08i��ɂQ"��Ԓ!3E�k(hl�\:�Ǡ���4'0�@�B"8�1���5����j�#��I0�գ��ʸ��0	��].�p�U(�į��+�Ů��_.f�u0���z{D����U)�kG[��PsB�>D�_� ��
n�0K2��d<Ŷ�m�r�Ӫk9X�U�4K\"�]�fM�����D�V��9bS.��j�����%�h�g0m�?~��5����5��J}�ꃻ��`����<	�X�]!nX&�.|k�Ga�쳯���>�iY�#~���8MR��2�2��]T>�V	q.j���
������B��!a�
67�7�J���w$}�B%��
.����Di�:{�{ś��u;����ENOF�z��+���X���R�xPpW�Ȑ��>�[�00�&%�P��%kA�pc*�㾼�Y�!��!uE�䗗�~0>�a�P	���m�.�.:���0�,us���IQ�|���^%�C-ꟛ��:?e*s+�*���K�����V��e��>lj:
����AY�Q�,C\��gS��8;m���4=ETǃ
"�#r±L������ 8��r��M���w�S�A\Ƶ���0�&��_ʾ�,�]�b�_g�F��3�Mw���4��7��b��A��j�v���;�ąS$���ِf��5!�d��l���=��,��HX	�����,�Fޭ�A�*��tjC�΢�ڹ0 ��!�
endstream
endobj
374 0 obj
<</Filter/FlateDecode/Length 342>>stream
h�\R�n�0��{L��
�G$�T���Cj�^���H�X���ݵi�@��z��]���ng�	ē�'h;�8���G<u��NO��ϺW���q�~g��*�'w�ŭ���t)o@<�]gN�8�/�D���~b�f	u

����+��z�K�:\,B������h�F��	��I
U�j@���EiP[��\T%�vJI?�E���8��y̻c�-^U�iW��lC�ULx�{�0%�@�L�$��X�q�Y�	�DpY�d�KΦy r6�٣9{���؂=�r. �|��t���V<��[Nc]��p
��׮�s�0�|C����s����� ����
endstream
endobj
375 0 obj
<</BaseFont/DDJCAN+EuropeanPiStd-3/Encoding 376 0 R /FirstChar 2/FontDescriptor 377 0 R /LastChar 3/Subtype/Type1/ToUnicode 379 0 R /Type/Font/Widths[ 556 834]>>
endobj
376 0 obj
<</Differences[ 2/uni25CF.alt1/uni25B6]/Type/Encoding>>
endobj
377 0 obj
<</Ascent 0/CapHeight 0/CharSet(/uni25CF.alt1/uni25B6)/Descent 0/Flags 4/FontBBox[ -5 -295 1161 1000]/FontFile3 378 0 R /FontName/DDJCAN+EuropeanPiStd-3/ItalicAngle 0/StemH 48/StemV 48/Type/FontDescriptor>>
endobj
378 0 obj
<</Filter/FlateDecode/Length 370/Subtype/Type1C>>stream
h�bd`ab`ddwq�rv��v--�/HM��.I�5I���e�!��C�G�<�������a��U��=��{���ￅXyErkJ�2�L���sJ�l'3���ʢ��CKK#C0i�������\Y\��[�����_T�_�X�������� �V�P�Z�ZT�w�,HU0QHIMCw.н�̌�~��?:���x��H��e�f���3�O����GE�}�����o��D��8&��a�������~��~�x|?L)c��#�y��"�ߢ_���~��D*}�
QR�-*���Z����~z0����L���ֿ3����WΜ��ǁ��������w�tv�N�3��p����
` �Т�
endstream
endobj
379 0 obj
<</Filter/FlateDecode/Length 230>>stream
h�T�Mo� ���
;�@�>NR��R����N�ɐ@9��h�mHX6�_x0o��������1�`�!��BጣuP0Vǭ*QO* O�~�#N�<4
��I�#��;��?����d��aw�?>�A�����H	��g^Ԅ�����D��
����HʍM%d
�Й��y�_�إSܷGɊ!��%�֑oȟ�2�(�I�b^�|����~ n<
endstream
endobj
380 0 obj
<</BaseFont/DDJCAO+HelveticaLTStd-Bold/Encoding 381 0 R /FirstChar 32/FontDescriptor 382 0 R /LastChar 121/Subtype/Type1/ToUnicode 384 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 333 333 500 500 500 500 278 278 500 500 500 500 500 500 500 500 500 500 333 500 500 500 500 500 500 722 500 722 722 667 611 500 500 278 500 500 500 833 722 778 667 500 722 667 611 500 667 500 500 667 500 500 500 500 500 500 500 556 611 556 611 556 333 611 611 278 500 556 278 889 611 611 611 500 389 556 333 611 556 778 556 556]>>
endobj
381 0 obj
<</Differences[ 32/space 40/parenleft/parenright 46/period/slash 58/colon 65/A 67/C/D/E/F 73/I 77/M/N/O/P 82/R/S/T 86/V 89/Y 97/a/b/c/d/e/f/g/h/i 107/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y]/Type/Encoding>>
endobj
382 0 obj
<</Ascent 716/CapHeight 717/CharSet(/space/F/i/l/n/g/S/t/a/u/s/E/x/e/m/p/o/T/b/I/c/period/C/A/r/d/O/h/P/y/R/v/slash/D/Y/w/f/M/N/colon/parenleft/k/parenright/V)/Descent -174/Flags 4/FontBBox[ -170 -228 1003 962]/FontFile3 383 0 R /FontName/DDJCAO+HelveticaLTStd-Bold/ItalicAngle 0/StemH 118/StemV 140/Type/FontDescriptor/XHeight 536>>
endobj
383 0 obj
<</Filter/FlateDecode/Length 2890/Subtype/Type1C>>stream
hޜV{XT�?����2������(� 	�R�DEKM�����f�SB0�
����'~��o�e��`Zѧy�u�5~�u����s��͞����ڿ��o�=*N�©T*cl�1��GL�,Ϸ䥧$��J�K
��Z������*�K#���A}�1�x�9������|��9�~ON�تUmV���.��/I˓�Ǉ�
P�P�8^Ǐr�Ε�aΑ�CF�
�&�f%[����<KF�453%˚�eMʳ�I��/��Fs%�%�b�W����3��
�-���)����pH�R��gMJ�d$Y�IY��c�b���i�%UJϔ��,�전 iQ�̓�2S�Y����X��I�9����5/���ȌUZ����������{�xfR��oXdY�t�`9��̵X����'f)�1R�e�ߥ�S�ù��GT���p���3s\���r\8�E�rq<���8.���M��b���W��*Aլ�v�ty�e���.g���'�@M�f�fo���X0[Îj'h��6h����:ӵ���[�[�[��?�绯u��c蓄�eG�#*����4r�}����Zl0�y��PP&�uZ[��
�Hs&�_��t:����?�m�]৆3�*D�~!� )�`l��B�0�D&^Šn�+>B!�V�k�G#�0�i4F� �6���!� �c (X���`V�R�Ќ�`f��|{�M�z�pҾB@7����<�1:��M��
���(�Fs�Ec>y�M����&�;� �!�a�=��Ik�&���I�c��u�<>E��W��� ��Q�M����ˌ8
E/��r�$��_A�����F>=?̈���
<w��W����֤����,U��d��N2x�K�R,|�A2�n����� ~�䭕������L��t�e����zňZ�eO��&��@�B�n�o��?�%����q��"�
p�6���������1ߞl�{����e�,� �/����9��1 ��Uʖ�oA/�	����|��,�HrO���20�=|��$g������߄L����<�8�5<���lOFB�� �r)1? f�@� 
x
�&���������k��foX �HG�y��6/<�X �*)��K��7Ceo,j�b0�;�C��d���^C{�ho��||Y�c�Q2� ��f������`Fo0�e��P�	#��,�'U-^�n�����l�o0,�4c����_�{�^4O��� �J��	d-^��v�%֒=���, u�A�P�Q��!�G@�	�n�� ��,b�~>c݂����6~j'.�I-]�3���X�?�!���lS{!�V��	��+cq��mO��HC�������%@�����R�_ٛ����!ZIW���Ǳ^W�ŗA�R<�l��[��I���l#�S8N��8�rG��`�ꤢ�ci��sy:��ղ� pPS������E0�����?��xFF���&�,�C^�:��@�s�nᥟZ����/X�Q�j��F4��UEu'8誠oy2.eZ���p��
Gk�֚���7]u�E�����(��ġ���'�^��I�p�J��?wo��H�/�"�/�6i���Th�w�o5B�i��C��5tNz&}����s��K��	~��Pta�`͝;��������u�����*a�"��qJUyjb ̇������PULQ
�)5(au	۹"�p��|�1�O�!����4U�)N�7r�����?7��6)$���	Qa��hЪ�ȓ����Q���[��W��Yc�U���G�����f�6�?��^�*��޵ﴱ�Ӝ��&��$�؛���U*u�ɱ�7G5���������
ʓ�#��Ŵ(rh�#$�.3� �p�w	�y�!W��9T�&�;"J��V������[!�uy��M���)��%K��_޺�5�U�:\�P����J����&2��v��c�s�D}OX֥�&g=D��Q6�)
��I�5���;1>��B��QRz���C��wWLM�M�N�m�N�'����_	[ަ��J���%��m�j�@��z�:qg�E�TMQcq!/�=J�{�8	�̹�L�1_!�o_j�'���ޏ������}��Rg���/I{7��:3�����
;h'a�6<}�,n��_��W���߻+'�[�θ}�à���/+�b�}��Z}�_C�u'��C���o���
]�K�0g�,F�/=B���{�-9�l?�=��G��1p2�,�����ڝ9N'�@e�sa�p���\��~�"%vh�p�F�ޭ`�o�����5�Y����$�:�J�N�/�N�P}�I�lg_l<�
�e%�"і�ZU��8nY��L%�7��A�fw����w<�S�������2�	`~=��1���L�,t�	1�V��Е0:���Q���I���	�wa$�����/��okk�]�^���z�\���Nс��Ծ_�Я��=�i��a�6��o2�і��J�*����&�w���$�)��T�V���}$R�q�n�i9=��w"t��m-����v��>O�R��e a��
�V}��G�g��w�(�\d�.��6������H!_~e6���2�\�z�����zL��q0�rN�pf� �I����1P�*�-�PgS��Mjp@� 1P��x6G�H征h�é���v�\�1<L",.�]gS�������z��{��:��G���z��U�寙P�-��\�`�;[`�i��@����Oy[�V70̨�sk��Z{���z0��7�b�9�M7�1���Ͼn��R��e!�G� � �
endstream
endobj
384 0 obj
<</Filter/FlateDecode/Length 322>>stream
h�T�Mo�0���>2qHJ�RU��&q؇�=$.���QZ��9IǶJ����?j��~��������#4�5���5�	ϭ�\�i�8��Ww����u��ۦ��b�����0��g���gw�_�A��3̎��	��s_ء!���
��'�U���D���W� �9���
Ni�ʞ*��P��К�>&Sĩџʳt3�Ȱj�"/6�E�q��$^��d��N�Q�)��'*W�5]�&1	�&	!���Hy�I0���X��D�TM� Cw2%��Ey
?�B�=	+1M���`j)�$��6e}�wF�Z����.L2��[� ���f
endstream
endobj
385 0 obj
<</BaseFont/DDJCAP+HelveticaLTStd-Blk/Encoding 386 0 R /FirstChar 32/FontDescriptor 387 0 R /LastChar 120/Subtype/Type1/ToUnicode 389 0 R /Type/Font/Widths[ 333 500 500 500 500 500 500 500 500 500 500 500 500 333 500 500 667 500 667 500 667 667 500 500 500 500 500 500 500 500 500 500 500 500 500 778 500 500 500 500 833 389 500 500 500 500 833 500 722 500 778 722 722 500 500 500 500 778 500 500 500 500 500 500 500 667 500 667 667 667 389 667 500 333 500 500 333 1000 667 667 500 500 444 611 444 667 500 500 667]>>
endobj
386 0 obj
<</Differences[ 32/space 45/hyphen 48/zero 50/two 52/four/five 67/C 72/H/I 78/N 80/P 82/R/S/T 89/Y 97/a 99/c/d/e/f/g 105/i 108/l/m/n/o 114/r/s/t/u 120/x]/Type/Encoding>>
endobj
387 0 obj
<</Ascent 716/CapHeight 711/CharSet(/space/C/a/l/i/f/o/r/n/N/e/s/d/t/P/hyphen/Y/R/I/c/m/T/x/u/two/zero/five/four/S/g/H)/Descent -162/Flags 4/FontBBox[ -167 -250 1007 1013]/FontFile3 388 0 R /FontName/DDJCAP+HelveticaLTStd-Blk/ItalicAngle 0/StemH 148/StemV 208/Type/FontDescriptor/XHeight 536>>
endobj
388 0 obj
<</Filter/FlateDecode/Length 2443/Subtype/Type1C>>stream
hތUTW�!d5��t��hf\QUP*�(��� A	�R�d��G�$��h��Q��
>">XE�vY���ڪ-����Z��im{���Ӟ���Э���=gON���������{i*0��iZ���<=!����B��a��I��p�c��WG+�p��0
���p2V����J��~�rn����ׇ
�
�T~(;��wN/^Uf��X���M��c�c܄�1n�=n\�� /7Kev���.%Ys�m��m9�)%J}v�f��mN����M�X�e��Ҭ�����H%�]ʑ��\�c+����m?��$F+,���,K��Xi��GfDJi���!�Xe)����<K��OY�S&��~m�k�9rȷ��ؤ��6�]��:,�V�/�֜"�o�(�IA!������
2jfF�_� ��ߨ"ESE�4�RZ�LQ!NSQ5���	�&Q�4�J��)*UEe���(J=!��HY�T���IG���Yt-� @0&`Y�� ��~ջ�s������̓L,�ʜa����ABPZPM��omiS�n��Ҧ��l�I�mb����5j��A	/��|;Y��oF$2�����%�0*O�8��#?Y�3\G?f�{���SA.u�a"���q�c1w��1��:>��\��a�"��S��mqAZ�B!��� [uBy��PȆ�������'����X����B�	FZy��x.�Q}��l�I�Z�R����s͹�ξ VUVW���T���Ù)@D]'�#~�	
�_,X*6���+`�e1ZI+A$ӧ�����C2z1�ϧ�{y#��XV�=�ǻ����*��w8,�;�'�x�<.�Ʃ��-��a=j�	����=�
Z���J$҇���Y��xHu�@�q���1G�:\!8<�OA ���X����X0E@�꯾���;]Y6u��U��4�"i�(%�q���:���)p����
�C�ɬ6���K������W�Z?�_}�PN4��<�<���b<0v������wb�'���D; &@<}�x��U�2��	lۇ�٩��3�pQ8` ��Q����̐dl9e
#!>�m�
N,+�@���s�C s�=�9�l����h�,����c�"l8�W��F->0�Q便�p��w� ſ�
���m�O�&)F�D����H�=��׌�>/�ljı"6*� ��Ȯ4�m���tϺ�/B'���0U�.��m�,B�/z6P�c
u�
�
�~�~���m����(�`�I.ݪ�J#+}��&��`z���|��A�y�*�j��� ܄�`��3��-Qc��]�?dw/ue]I/�ߒ�KE]{q0>
$�2����v��o�;��J�?�����*<�pM-�����p�՗̤(��B�����t�U銁s��Psͨ��_n;p�󳵝��������]�� ��!�dX�R~�[<D��зP0�Cp� �x��κ��ŋMg.��(��/:��s��?���vwÁ����{�הmu�@ i�������H")Wz��)c۾tq}���#P��D��>�����j��g�DE���Zw�қ߽q�P�i�c�t�`s�A��>.�$A6��at�o45]mm^�� �ҫ��q����c N�D�=M�ZC�AwF�E�ZX^T�/d.z��?CJh����#�S��ݗ�l�`H4�OM/�Tqjn��@V���L`����!J�;=���o6g�[���p�)Þ9�Z��Z�ڮ�<�~m��}1�qww�
P{ �x�s*�p�5�d/䥝Npj*'��w��Q�?qB\�N����,�^�1pVOMŮz�D�{K�A}�O�A�xQ�yY�~ ���LJ?w���e� .���01�������a\k����0��\|�R]�р��2�k�#}�c�i�)Ko��+LM^�["r��1����kd$�֭��ȇ����\��o�B� r˵@H�m4�gYR�7p�>�t�q�6�-����+#�׫_6�a�e򚿹�}�=^đ<�])q<�>�L�%i�1I�Fc�A���l� ���TiCip;����O%��.�������UT�3p�@f��[=�*�0)K����w�4�Z�R���K����*�=Jfm%G�i�lL&7�`B�r�i��qD-�� ��u-r�n�»��K����+���*<�"g�j=;_�Z&�Pieԋ�97.���X}���wiَ��E�d]�z�^�m��w^C�'�R��3���_!�!hBI>r0ֈ�.,f1���H�cț4Zі>.�K���>9�ۙI�%�5�4�"�$5��|z���v�2���{K�㊢:��5̇хj(g0	aT�����!I0D�kH�j��ezb߾�� ԑ���/��1�"ꂠ��W����y ��h@n�<������S� h�{�
endstream
endobj
389 0 obj
<</Filter/FlateDecode/Length 327>>stream
h�T�Mk�0���:v��ow��=샵�=��.�8�I�������˒�9�f���n���z���5���5�	ϝ�4��i^���15���ζTU���8�+,³|R���Wo�w��Cz�������h'H���`ś�ƽ4=B���w�puYX���������g�*Kj�V�5�5���tn9����&	b#�%�%�s>τ3�"L���K�/��\��U�����1��L�nԏ7�Z�奨��]�CLRl�,D��)��V"�&��D+�
+s�J%y�q��.@_���	�f�S�,��782�ѷ  �}�C
endstream
endobj
390 0 obj
<</BaseFont/DDJCCA+HelveticaLTStd-Roman/Encoding 391 0 R /FirstChar 32/FontDescriptor 392 0 R /LastChar 144/Subtype/Type1/ToUnicode 394 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 333 333 500 500 278 333 278 278 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 556 500 667 667 722 722 667 611 500 500 278 500 500 556 833 722 778 667 500 722 667 611 722 500 500 667 667 500 500 500 500 500 500 500 556 556 500 556 556 278 556 556 222 222 500 222 833 556 556 556 500 333 500 278 556 500 722 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 222]>>
endobj
391 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period/slash 63/question 65/A/B/C/D/E/F 73/I/J 76/L/M/N/O/P 82/R/S/T/U 88/X/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y 144/quoteright]/Type/Encoding>>
endobj
392 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/T/A/X/B/L/E/Y/R/C/I/F/O/N/M/period/t/a/c/h/o/p/y/f/u/r/m/l/e/d/n/U/i/s/j/comma/v/x/g/b/k/w/quoteright/slash/D/P/J/question/S/parenleft/parenright/hyphen)/Descent -168/Flags 4/FontBBox[ -166 -225 1000 931]/FontFile3 393 0 R /FontName/DDJCCA+HelveticaLTStd-Roman/ItalicAngle 0/StemH 76/StemV 88/Type/FontDescriptor/XHeight 536>>
endobj
393 0 obj
<</Filter/FlateDecode/Length 3311/Subtype/Type1C>>stream
hޜV{TSW��5��"�\o�&zo�*#E�
��"��ňO��$*VL`���jD�ZA*���Q;Z���読��٪0�Fc:T�8�V�>��Dۮ����[�:���������9�Si��8��5~�sIIc#S,Km���Ӕ�i���3�rL�������?hh�`����\�C��y��;m|�~z�W�
�J�����N&��[��_\h�l���o�}m|�������[6>$&f�qlf��bL+.(��'�f�Y��BK�@�إK�~���R`��|���/M���+,η'�S��/|��&c�Քi�1Y_0�e�j��\Ȍ��fN[-���\c�b�q�����T�zn�є�i���������0�Tld��:�b-4�g���,�fdfgf����kʱ��yVc6�`)��-�X�+�A�f�:C�����͵�c?U@U7�ʨR��U�*Z��U��9ո�4A�R=�򬚪���S�����rZ.��2��et��.�v�V�C�Gu��@��F�I�Th����
�ѐ!��H8�#`r�G?ʁ���;�F��յg������������vc�i�>ͱ��iu���zR��*�#	G��<�%h�s�:�M��,���hd}B�J�7��BB����Gg��(�Α�u��"�Zw�jl��F��8���;w�]
/{�I�Ӱ����+� c�I�!���g�݆��v�خ���``#��z�>B��9�|���c��q���a���qw���Α��������[ۡ�g���	(S�1�)a�`(#OL ��L�Ra�ڹ��E5��,�&\�Y�_&!s˿��5i?t5��\w�ŇЗ�,��p�N2�X�b�DYt''Ys��]���{v}�p�➃���#�
jf�)Y�!�K+�\:1�!�x
RD?7	�Po��~_n�V{z��tX����?"��c��]�f�����S�_�+�#�ʇ\(w��X���p�?�S�<��]��D��:jI���7P�$�"�'����v3��q��PD�r���������*q{E	�ز��������`	��I[�܉�g]'A��Hp�-��h\��`h� �`�%�`��r�p�t��(���{�����{W�
��M��V!��d³�����
� �8	&���I8)���U0�QV��N�wrN��z��7V��Nooȧ��޺N3�KB60f[~^��E��N|���uz_�43��m��kcө��39<}�\m�յ�4^H9�HpC��0R��޽B�u���ߜ�i����	�sMf�cjrzU�4[9��h׮��NK����
�ǌ� ��_��2�&��G���NGqi}Y�%}�����؃v�T�����ޑ��8�1�F�Af�M�T�.���%����G�!1�\!P����1G3gg��Zʒ(J8*�c�DCw��Q��1�lp�ܡ�A�P��X�8}�P�_A�����F/|����n��ܘ���*8��i�F �<���ħl����'P�к��{H��Th��%�l�&��W"W�H���IN횚uG^]O�����ڀ��~��#=Da�Q����]kȩ��Cuؘ��
.gZ)r�;mC[J;`;�.7�(���Bn0�q�5�h�����!(1��T�,�w��CR��7Δs��̀�
��!ﳍ�$8p�"6��}޴�/u�zྫml�f1�7�>�y��lq��=���v{�a�����r�(v��M��L6�tc��C�Fg[��-P���`����p�f	>�}���	TS#�H�*|�c ���-|��1����n�jx$�g8����gc8̾��c�cy$�x�p�G��n/;�f�.�>�p]��6��O�3T%y�����8�3s��[����y�_���"��+��}{�ԡ��X�QY��Cݶ�6�(�	e/�*{�P�j�N>@�QU&���1t�7q�$�LN�?)���KW�M�z���[�M6��R�ڏ\p�M,�0��p�B�}��ܯ
0�,$@(����2m��ef@T����,P
l���Lz����D���ڄR�b,i�}Z����l���V����;��0���j��3�ج#	%s���rP���;���)y��G�i��.���ei��R��ۖ�q���H0C�bL8sa�燕
�g�C����˛@�^ Vc�a��J�\x�c�ALw�N��i<�I������~
�B����`�����m�-_:��F�ޮ�H���l����L��6:�:h[8�K
5t�t=��p�z�����m�[��+V�_ixv��#��I���v��L�z2�>�ܢ=�\b+��{/�Y�IqDl[&���;ph���b�0����Q���X��Z���O�f=��d,�?ᘻ�J���T����h��\o�v�]p��7�}q�n�x���}�Y��A��.�X�:)�[�"�GMGl�o�Zf�<��%��>�?^s���\3G.&bQ� �,�V��� �
������p;1C�`�.��]0Z%�sx�\��x:tX��6��/�p��'~w|���ŧ����Wbײ��}���֋:<}\�O_���H�]��p��ڍ�;ӓdls�����K����E�[%9�
���)eDl�'<��1p��m���68���ٺ�7�!pX���r�Y#�M���M�o�T}�M��Hhh�0Vu	M0$B&`B"��An�]��|-h��.9y��A�tט���f>��rneW����E��"-Uy�7UrAM���ޒk�U�Q�96_�n_������^b�o�6��F���R��Ͼ�q[� 6V�^�~�a���>�}w|�
�����5܆5LOi4Hڳ����F�A!�T��b�[+�h�
��O3�S�.-���)�5��"�>�An����X����b�潠���d�����^�n�\o���p���Ǐ��Sv��������եB���
����M��ٮ��2�XDW�h],eL\2 �3�s���
0�nV���e�O�!�r7m�^�EjX���z��|?i�:��������������{N�t��.��|�(�����¼��5�� �����=�@$�k����`���J��1� 6�"�
�`7��?X�p���AM�<���a���e�͓c�n�V�l���0��	��d@�5+
�7nX���	�xhm�����o����2$^��FH� !ErϷ���u5QS��`�6�l� �'�~
l
ru������0 �Ց�
endstream
endobj
394 0 obj
<</Filter/FlateDecode/Length 313>>stream
h�TQMo�0��W�ة�@
�Hi�T��}h�zO�aH#D���g']�!��<�=[������A���p�����i�x�pƮ��*hz3�^�4�v I|�N3{ێPUB�Sp����[�e� ��7�{���~��8\����	�54�
�}��E��7t�:�魍���i�^��RI
UI��L���ܚO�E�L�D�j^����iY�e�?�hU�
'��aC*e��6jKD��ց Lgg:%,�cKr�D�Dp�<VɹʚM�(Y�i��"f��y ���H��{�vXd�&ϱ�xߵ���-� آ��
endstream
endobj
395 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
396 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 397 0 R  6 0 R  398 0 R  8 0 R  399 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 358 0 R /GS2 359 0 R >>/Font<</F1 360 0 R /F2 365 0 R /F3 370 0 R /F4 375 0 R /F5 380 0 R /F7 390 0 R /Xi40 106 0 R /Xi46 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
397 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
398 0 obj
<</Filter/FlateDecode/Length 3964>>stream
x��[Ko�|ԯ��H@����9ٲ�P�u6�� �s�ɑ�
I��{��N���{(��E ð9������G��������_V�����Z�(�F��b�ʯ.�FWo��o"��
��]o ]!�:��@�3�h��_�s����鿮�|�zxC�nh��@�"�~td���-���N+�mΈ��q}vu�WDA.��DvL .�Yh��b� v,cñ�c�ZY�"dT'yJ'&(LZ�D'F�b����%$��!�� �:�ÿ����N��W�h'���h�	����6��:��0%0ܸ��­��j�Ì�*��zQ�aͭx��o����;7F�{Y>��GÄ�wxǁ�8!��j@Dǵj@1���pgW�qXZ%�����ڰX'�`�)���B����)X����͙P>$`�Ja$ I���R�!)������3��gI"
D����Q[py��udT.�4 
-%�
Z�+�"�0���$�F� &�f@� I��v�SR{`]�wM
��������Vʊ�x�n��+U�� ��,��$J���:7/�Rp۝�$�"Q���U���\�i�Ra�h،��jOG$oj��o�$�"Q����Hǝ�H����IR-��;�I�wD����*� Q�Л	U���7ر�r�R�޴ћ6z�F������zG�Л4Z6H�*��.rd]�
7L
�Jnnjnnjn)k��B�Ts����L
�
n�u���|�bj�$U�.[e?���Ѵ؅j��������fjNZn�jn�jn�k�!��*+�*)�*��9�3W+�"�t�)�t�*�� D:A\�eZ$�v�p ��BMnu��:�$H��Q 8�f���<Z�@cX'�D+F�P٪������bi Q8XY�R]��� ��	I�%�)TNX�91%���LR-R�m��2Q���()�D�(�߳�ʼ>1R'$%�)��|{�C�}m�s�+�u���jz�$�j4c��7�a�!�I�e����	HI-�;�c:�l����tƕ-(�x����hb�+e�p#��P��A3�a,u���Fg�Q���Ҍ���� �=��6��I�ȡ"<%�Х�θ�2q���v�q�G�4���BΠ5�Rk��6�"�LA�'�?��O��n��������a�%
m$z�\��j�#�������[I�7�
CvE��_T�t�0��U
af���v��3��[kl�R�D�_9����`���b3/�k��� 炐B����Ov���O�)�|�R��Ô�ɺGΔ���b��c̱��A���\2��W�n\��c�k�w�=mp��7��Ks��+������!%%\\P;d�k;��}���n)8a�:`i�$Ur+V��պ���յ]r��+J��+^I9���ce���;�k�������R-�
=!��]D�����LI�E�T�̈́��#��m_2dA�T�M��#��m}?dA�T�MY����ˊ�E�T\Kf+^^�%d���3�i�rl�����H�
ur��"Q��&��&��f�fjҮ%Ѫ�wD
{C5[Y�A�T��\�k�u�-e��"��;����¿I��
��������!)�;�U��� Q����!/�Rp
�L-��x"X��"�(\1� Q*V�.�6O#=
9a��7a��1֮����ɚq2<�(����.3w\ݗ���RU�vX36����!�MO_1�J��
u��5Z��J��S9Y)Bq�l�~��7!�e��P'QkI	ʯp UB%�ڑT<(=K�ӤmT�����!�N��-v����c
z
菴6���r)��ؘ�P�C�!�{x������a��J�%	�?�>t�(�6aJ@�&I�n����|������9�u��?���n������_�{��&�죥����)����Ɍ���ϐ	�>�3��h������K�ʏ�[o��D�r�3���u:��1񻐰�Yb/�z{���^�p���Č`��ݿ��w�h�����g������{�26��i�4(�M�Ҙ��� �cm�%ُ	�H�n���w�����p�ḟ/lkw萟��m�����_�As����'����B{W�i�?��K?�gT���n}�٢��U�.��Tz�J]�G����a!)�����\��Aĸ���U�
ro�:ty���� ��o�o�~w��d�}�[�j�>�� ���L;j�������;�C�#�o0�iK1���
V(-$��>z��MT��t��r��=^�h$��>u1���F�:m.�˞)�JVV� MBCTҞvdt�����,I�fA>LY~$��,�?	��܌t���a ��01DNJR)y$�d¨O��LÍC�brl2:f4���Hm}�� 1��Amń���X�}��`׭�	�w��z��}��tr���b��`7�߭ͷ�8*,X
��~8�,��p��͈���>���*�~=�Í��mj�z�E7�i�@(
C���)t�r7��d�y�t�<��V<j%����X���܂4j��=ď�Ƌ}�V�G���O�/^&Ї��ZIv*��+䆗%!���x���[��6Ü�L���''��l:��Ϡ��Q��m��N9�~�I���-z�_�����E0q��n�z^�[~A��|�v7�vww�ow�e7�ې��7��B?�<*QUk��?��%9$ZX���ÊC
�����
fB)iq�+���Y��-���
�/`�	����n��o�K���yJ@o!�q���p�����z�\�U����m?��B%�{k�0]�	Sa�~q<���X���%�T<ܠ����*��:G���O�ǔ����v��m8V7n�>O9Mb�b�O��~nc����$�"=�
�z�B�V��aŅ��(5��sp��vu��=,�[�̈́>��[k"�fءW�_�ۀ~y2!���n�Χ{I��TӨJm^�S����=BWY�'
�N;۔ĸK܉�0tճ�HA�w����ݐ����0�r�s�{�پ?Xr�GTU;�4,�yw��c*8d!�V�����ձ߬~�]BF/=�h�!��[ܗ�C�l_��z`�P�����?U�B�����jB�� �O�?;3"���|_�nH
mNs{ (Hv���t��tH
~2��%��};�����T�c�ޥ�<Gw�r��*?
,����q6#uEX"��UX�P�;�%�0��?���f��#��IhDL��������9��T�N(}W��M���#Mk�"IĠ)ʷ-N�roT�/�F%��gyb�,/�H"?^-�
Di�x�L�
�B���7�iO�.���~ԯ����v����]ta�SLF�^Gٓ#� <��	ڲ�9�Ŕ�ɋ)�|�s�ҙ�����|��C��<;��d}���Sn1-C����LΠ�,�f
�yE�c��GC��	i8�U�^a��đ�e�`�
�N����B-�7E�fd:����#��/��|��{�����{gG�>p��_��Y�ޮ�+��;�¤8��9&�:=��F��T��M�\�B~�u��=GuĽh������qCÌD�
��yDz�X?�fa�^�'~�c_p��ܓ��9Щ?�5	9J�s��3����t� <�'P��x��)�2�{����:��'��B��0�D%�Rv�{2��}�\��|�?��š����[{�y}��y��8���)l��)d;Lc=�nX���a&|^��&4^AQ&��F�O��@���g�b'y3�����0�Ig!ƺ�l��r`a�'���� ���x~���b�g���Y�e�Y��S�=#��!D�+Knl?�$�g_�?���IZO�7,��6l�N��i?&�S�>�#�'�}?y�ٟ�<Q�Q����{j�c�c��v?;~��c��m�O��Ӵ}�֣�ZO��Ɠ����뽦#����x��d=���z���A
endstream
endobj
399 0 obj
<</Filter/FlateDecode/Length 298>>stream
x��R�RC!��
J-BΓGk�N�(>>�qFG+g�z�K�1�������ڭ�4�W�d��&�
�6?������<��e��$����HJ�F��
�6�$a��#����6ά�8��!I�O�bp��we3G�1����3���F��Ui\����btb�z8�Q2-ϣ0��X�]�1������sb�F��JD���$m���}��	�
��Kj8!�H�C��}��c
$ژ�a��֮t��Γc����!��
R��8'���M�_e��v�����L����D\.�!�]�����J
endstream
endobj
400 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 401 0 R  6 0 R  402 0 R  8 0 R  403 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 358 0 R /GS2 359 0 R >>/Font<</F1 360 0 R /F2 365 0 R /F3 370 0 R /F4 375 0 R /F5 380 0 R /F8 404 0 R /Xi41 106 0 R /Xi47 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
401 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
402 0 obj
<</Filter/FlateDecode/Length 3229>>stream
h��[[s۸��~���~ٷ��l�3ɦ���L��DG�J�W�r��O�9 E��(�^w�]'#Q x����^�0���f��dp��N&7.��%�F3M���;M&��yC>
�L��� �\J!�p����d����#���P����+��gh�
.���~�Q�xD�,u֓�24-�h
�2����x@pC�&� ��C@'<�'�Ɉ�}hSň�ASq4�Q$���p�C(��ދEA� b�j�	�Ը�s�
np^}�w�Q�������"���6BaD)N�W����zI�b�ߒ�Hh�&�<���H�Q&�*��d��2"q�/_�J�TC�������� �_�7 �Ik��i�Q���id�v�v�CW+��7U=��6t�Jm[M��hwFV�`��R�4	��a��o׽ϕ��d�m�|�#�d��D{F�Q&.��6���\���%�,/7dZ��|5���6������DArb�.ʸL�� ��50oZ
���D��D�<z���-	հ԰�(������#�E��[�2V��	JIAю<�Z��5=t��u9��񲏎v�g�]:��WjF�:��{����p�]6�f`�a)%��U:J���T�ƣ�x��5q�'��UI1d	�.�|I��:#�<]��KA�� ������M��N˼Xm��
�s��<PB��k#�D�H%x���_�uv�]�ҏ����Ve���P+j�
�>�Kj�ʻ�� �]�p�����fd��2�IW�k
�^�OsXJ&�l����[�]��(�lT�PM��=�l��mL���$���c�N�e���f],�0v���,��&�̿�uqA�1E��^B���v	����]�P����1��3�vM�cl&���"���%�t��=j�v*�3|y����0K��04��-VNp��w�gGQ�Y�@�pVrɚ+_-:k���jt�&���I
����t2-f�~0�#�]��JiC�w�'��خ��HkPa���9҄t�#`[y'(4Dfd_�AXEq�vqd�o}>]yP=�T\�j-*簄��cI
F�+8�$��M�Cך�C��5l�dw҉c�:ᴵ��uڈ���q��l���`����b���y�X�o�8!eA�Y��uT��CG	i������y� ]]�e�9#��U��.a٭�.I�R�,�霌��l���|HB��a�������AY�I����A{��K��oY�([�� 3��|�mH�����o���޾� 7�H�S�i���L�J���B��iz[n�Y8ro��=�5^�\u�c7�"^X��{_�>���p�0�_�-"-�\
1$�L��+�IM%0��"�b�洫5�ʀ�q�@#*h0-&Fo��&$Eߖ ����vMyK�i
�v���1��E{��hfL{�9�k�f���#M��7SM�����<���)�ÐY��������p�M{�T�Zq�e���	�=��bᢟ���\B�+$$zw6!�NR�lB� !~���gO
 Ԡ3���O��� ����p��r�a�4�RE�����Q��U���S��4�<�e���{���lO@�j�����N�ޫt���U��џ�m&����y���~�^Ӻ�Ӯ7鮞�lS�˴�f2��"8��4Z�^���;�M
�5�v��Df�Y���K�9z1�!_kR���>��@���ìԝ��/�N1�?����o�_��2�9o��N�Ɯ�W �Q��౪Y�<^\O��1�������A."��y=R�ܝ�8^�+�o�S���0�OJK��2��`U��5� �#���,��϶0�x����ls��E^~~^�!�&o�Ŀ߰Bd�>�}x�(1��Lp�>�@n���	�������\�T\"�
V�Rc*:����
C�}�.4z�A�ܢ���C�*ZٴJ:a�K:Q8@��? �?��H��e�;��%��|�.��4�s�{�-�.HÝd�z�,���̂pLK�(1:sRO�
�N�-��y���R���ywu�°X�����tB7�ۓ�_T�w(�� 	k��������q2@d8�R23'���YW�q@���V>�]h�~�5�E�'�
�<+�g]JJ%T�%5�w���n G����o$s�D�~W�s�8UA0�/���8��	#N�wuO �1�;+
<��q�)$x�/MkW�0��^�Q�%�������!Rb�?�_N"�L4�u"Z��.���9[ߦy��I�MV]����i�D�}W ��,ٮ�ъ�8w j��� �T��/)4������"�6n�띥��m�E=P;jD4u��c���,�6bai�վ9K~��Sg��yi�]�A�G
B�����P��nW5�����t�L�k<~M R��\��nW�h�t`�ѫ�slu�D8#2����|H_]O��/����x͠G�
��s�JE$P�,vd����&DE���;����S!� 
�}��Q�ؚ@z�8��@HQ��s
��n������G�A"�MX�����2��4���d���7�Is/�Q�����=y�i�T�'e�ikn�X�S�\��S�x���3��3�x����0.d���$�ݟ����6ɎPF��1��C�?�ȈPG�YF���������)Ct���ﻈ�6 ������ϻg����i��\�S�� ��	����RT r���ɻ��ɽ�C-�ǲ���+^�hN
��
r�Q�)3��^=��x��p�+����
��&
!U����K9\����P'�=�P��M�{�d����v�}�Rh�Ǖ���4->g��SvA��l�/R�3��JcM(l
�j=�J��ne��W�,�ޤ�<��UM�m�nq�n}v�����W��8�Q8��8H�#(���
T�U�:�2���!���W�������bxȇ���Ob_�+����_�-;���Ye��d��Y��P%�8�#��L�x��z��}�Gp^O��-	'}�ݫX<���U6��x��B�:
�%�����L�$��z�uʬ�����wK�o�>8��2�t�e|b����D���Τp�aN�|
��h���&�\��?8�o�=�wQ��%����5m
� YW����GQ����|��x�
u;nyS�>S�Y�P9֓w'
����'�9V�AUAK5�͚��X�HO�E �<H�����Pq�T��^�N�l_����� ���
endstream
endobj
403 0 obj
<</Filter/FlateDecode/Length 173>>stream
x�m�9�@ �}�K(⬏]'-�hH�� �-�'	A�v<�ǆ�=\~�)1���%W2�0*�����j1Mw�L�P�>;K|���E�L5#�0����d`���ü�@a���Z���
b�%MP�<�^�-��)g�Y`�M�M�����o��/��-�w!��ƽ �2C:
endstream
endobj
404 0 obj
<</BaseFont/DDJCFP+Helvetica-Condensed/Encoding 405 0 R /FirstChar 32/FontDescriptor 406 0 R /LastChar 121/Subtype/Type1/ToUnicode 408 0 R /Type/Font/Widths[ 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 278 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 250 500 444 500 444 278 250 500 222 250 444 250 250 500 500 250 250 333 444 278 500 250 250 444 444]>>
endobj
405 0 obj
<</Differences[ 32/space 44/comma 46/period 73/I 98/b/c/d/e/f 104/h/i 107/k 110/n/o 114/r/s/t/u 120/x/y]/Type/Encoding>>
endobj
406 0 obj
<</Ascent 750/CapHeight 750/CharSet(/space/I/f/y/o/u/d/i/n/t/c/h/e/k/b/x/comma/s/r/period)/Descent -189/Flags 4/FontBBox[ -174 -250 1071 990]/FontFile3 407 0 R /FontName/DDJCFP+Helvetica-Condensed/ItalicAngle 0/StemH 67/StemV 79/Type/FontDescriptor/XHeight 556>>
endobj
407 0 obj
<</Filter/FlateDecode/Length 1403/Subtype/Type1C>>stream
hބ�kPW�wI�K[5�
-���1U�`�ڂ� /y(*(Z|�L�@ 6	D�� ��ʣ`)R��k����X�Nk�؊H#��h��j���n�q��3�;s��=���w��_{a8�+"#�"�P�h�YZ�n��?��f��O��8�#�'���pT���Q
���ĦI��2�Ǐ]�0l�6�6o1s37���.���zb�ܱ��X|�8��0�!E˭�6���&.6c����`T��� ���D���KԚ��,a�#�3qj�lTk��jcg��-�e��[���&=ͩ34sFN'�2SL:�Nm�iM�uP�*���0?�c�8�Ö��J��c�pW��`�`QX2֊{�j�;|�+�k�W��5%����9q�� 'F�0~�w�r}aj��ɷ~R`-����)��[Uq���k{�wic�C��o� _�ʇ=���,w��-�X�;/p4���8�\��w@�E�s�.�[���M䝽@=zP���#?� �U2cC��"��7;��W�0LCS�n�Lֳ6(ST�h�uRڟ��e�]��Fd� v�v�g�2;{��x�t�PH&
D���h*�0� L8��Rv]�;l������F�zp��G̿q�oA�S��z�yz�
�q�v��I	�����hߤ;��@�$�f�ɤ�%@���]G�5��;O5��@吵�`�+���a"ܣ�JK(
�Ǖ���2������	���V ~f����䅕�bh�E����'�P����d?�|>��t��N>��1�{����������q���\�.�ݮ�,�b(ސ�>8���
�vϑ�n'$;E0���O���43ꛪ�W�4	��ɇ�CI����mfl�O5��$�H!�wX�Ư�J9ߡ� �n�V	���N��ׄ�L9�%�8�E�%��AXz�?�Q���'��3��l�:~|2���	��д����Y?.��hP�?A����)H�������_ �	2���<�������վ�G� #5	;nZ-�>'u�
��'�k��^qUV٪�_I�nk�U�X���
?~nʶ�pD�ƻ�^~���I-iG�2f���\��4��w�t˪�V�$�t��j�.RW�k�0)M���+>%@����Q����,՛԰����/;l4$0/v��]�V�k���2$�wd*��q�c5�ZXS���w���A��'�
��t����Τh�
LZ��Z�ʜƳ,�	#g������_]:$��y�
>T�p�F!��E�`92
S�N�|h�h<Z�&�za*�G�w�/�E��^�i[�ؖY�/��"�����).������oj�<A|��=�%�h"��Q�f|����ΫE�Z�*{I���W�=����G� ���B
endstream
endobj
408 0 obj
<</Filter/FlateDecode/Length 291>>stream
h�TQMO�0��W�q�
�-lBH5��G��;�I�4���vZ�J}}3�
}�e�P��3����nP��yZ�Dh��	������Xk�N|Yg�c��	��wW��Y�p��Sv�n���͠z8\�OG\��qDe!���;���Z��#���-]W���}�����k��V=B�D�� T��;E�ɯڰ�EnqX\ƀ�={����cq_0罹�aD.�$D�LH�lvً.4#%Iz�DJ�4ێ@D�M�t(�}�I.Ƹ����(�A�~z���G� 5ѐL
endstream
endobj
409 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 410 0 R  6 0 R  411 0 R  8 0 R  412 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 358 0 R /GS2 359 0 R >>/Font<</F1 360 0 R /F2 365 0 R /F3 370 0 R /F4 375 0 R /F5 380 0 R /Xi42 106 0 R /Xi48 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
410 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
411 0 obj
<</Filter/FlateDecode/Length 2695>>stream
h��ZKs�8�ڣ~��V�
07ǉ3�)�YK�3S�902mqF��l����� %R�ة���$����N_�8yX^���p2�pA��?�5�i"5MS��x>�B�Ԑ�#���q�H.��d���ո]��߃�o�
M>E.������	�+'�����4DY�lJ&�04p�)�ed6
�1��!�P��2@�!�@�a�ɐ�����c���8O��9�D�8�.M�~�6�Jf�j�.�q��*��s�R�R�<����_��R�0b �0��o2*�r(�+��BDI�S �$e5'Z�����-<7l�uB�����#W�c���5���4�㈔��X�an���p�z��9�q��l�ţ�ƔU�WŠV��R��Y�����c4u�
�k���Z��fh����Y�n�&�y ��Q�9���.4� 3��Vk���R�#��������rqd�;wdViq�0�C�ڂ�b,�1��Qu�1,�0c��Iʩc��1Z��Ov���Q<ݞm�����Z[*S�a2�2�T��5?̫��Y�Ӑ��06�u�{Sm��]	x�9��=��{��n�l
}M*��4��c=�v�ifJ����.ʒKe�X�3^��3��Ool(���vk�;��m;(�}
�[�>��m-3�d&ݦ�p̏�s_���^;ۅ:ԸJ�K��^�69�f�}Y-���ͳIN���I^��|^VE6#�jq��E� �<�7!)g�E�U'C�Od|bU�������*ޭ��М�:��Z�5Ht��	���T!�M~���䬪��X��dZ��e��vw����ވ���P�(Z�� �k�g亮!�]`��8&�è���}w�5Z�l����b��G�"kT
��Kpy��e�_^�����M�́~�%�i��>Zv��	�O��ֿзIGT�=9[s��w�<�����H��W�|V:h�8�y"�
�����,X��]����lY?Zz�+q���c.DTlXڿ��:�����Y�/	p��FΧ��ʟ�*�sތ�1hU�������Eh�E]�@gw�I6iTi���|YWf��i�w�]U~_<L�>�n|�wD��Q�$�ӻ�vTg5\GV���)�|��ڌfP��U�;
�˖��/�Ki�`t�0�!'9�s�?�����D"�4��>g��qavWy��y��/`@ey��"��
<Um�Q�G{ۈ�Y��^�1r�����Ux�u=ɳ��"�zddZc��.�M�>'?5y�M~���{X�ӂd*�uS�������gbb1)}}���U�z�6�P2�X�$�J��.k��IcU���i����>�A%H��i*���V�}��R�SuǸ��rO��$�N`��;�=��n7U�l�ʽ�i��7�v�V��U�RY.b.�PZ������)���9վ~Cq&Q��(�to���WC�e���@�&S�9�����{l�����݉`I��2��l7����2�M+�q2��u�훂����#
1ߣA`3*�5o�_N4)�p����9J3����ћ��-�*H���AP83N������ ��ɦ}�f�$ٯ�"-�� 5g)���;��j4��FjhR�nY0�۬����,��x���T͵�ݞ���P�E�
�uk��@�o`P8�ԩݝ<�Sp
ڃ;V�^Ka_��p%�YHgm��>R�KE�1Q2;�Ւ���P!�aS��p�˺ZM�5#�>���p�xn0�|��4/��<�4Y��2b�#>���3�2w�e>��}�E��xЉQ/�t7Y��Bżx�+`	B�}f��=�2���b��#�?Tټ),��|�u��:��u,i��3��l�@1���uIo�4�6�N��2Ea8{M���z��v+]�b�
��(�{.m�#����sڨ�6!'Cix���n�S��̊EN�c�C�RO�E��Y���U�L�]v_��v�	�֗k�Q��;�T8�F�(�z�2N]*!G
�ՀB� �LN*�_��y2�Ԉ��nӆ >3��Oa0.�pi���Ņ,P���v!*�I��:U�͒���ix®aoM,尗�
��k�'�G��f�pC<�p��D`��;)���B�ޓ��#3h��������h�\���U�	�m��\|� %E���u�o����B�2�oO�B�k�hv˭±M�,m¹�RA|�\"����<��Sr^�b����S:���@�m�	(��բ�?�\�*/���j��j����
��S{����X�����1��4QJ�S�fc�Hei����k��[��i�mA����s�}V�;�l���'f���rfýI�����z��jͥ'C%oD��ܛ�s��Zc{%d/9G�������������5� Nl 
�jL�]^�x5&�\�H�zE�ߓA� {���]L�����Y0��I����׀�!Dc�˒,ʚ,s��d�iok��^�y
%�(��{��ƚ�2+f�.���v�*��r�������7�W0�P���L^\�ݼ|F�^��g�*�}FFg�7g�������̏;���`�k�(?
7i��!UT
�؎���=�5���5��_y�|��Ӿ����Ψ�Tڔ{�f�Y��2�\����3��+r
 �G�8��X{0\��)��y��>��EP�������xs��~G'}(?��ݖar���"��&��y(�ۚ�� L�v
endstream
endobj
412 0 obj
<</Filter/FlateDecode/Length 149>>stream
x�e���0Dw�G�$v�4+��.�� �+_��@b��ݻ�`�7���
+��Tb&�z�ũ��K�C�Py�	��)y�/D
���Ygm&��ՁI�܎��P�������۝��R��z�ӡ���|eb�8i\����/e
endstream
endobj
413 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 414 0 R  6 0 R  415 0 R  8 0 R  416 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 358 0 R /GS2 359 0 R >>/Font<</F1 360 0 R /F2 365 0 R /F3 370 0 R /F4 375 0 R /F5 380 0 R /F6 385 0 R /F7 390 0 R /Xi43 106 0 R /Xi49 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
414 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
415 0 obj
<</Filter/FlateDecode/Length 3588>>stream
h��Z�r�8��G}�-�@\ȼL9�=㩊�����r���h�I��W�'�i�WI���nm��(4�h��t7�w?��PM>�&��lv?�q�ŗLxd4�,�Q�&��V�HJ��0�l6���I�XK������Y;�'��,���0�>��b`1y�Ӎ�]+�����c�a�F�M�|�Vat�}9[Nn&�H�,��D�f�@��"�qzƚ�"�'`L5�l�Jp�%1oJ�r�}Qt�w�oʢ��b	f*�:e"�L�|n��=��-��[j�ا;�Jo�4�^ΔQ��th���ܬ�V��MC�y ��l���/`{&IĥI�ev2	n�E�tk~�PIM*�NM�0Q�T�	��Q���oP��;Tˀ�� �
hR%o҄Q3-d�jy����m����}��6�p	b��J�X�1�Wù��,�.���@�S����ph�Ƒ�bg-L����U��*��%����Nd
��,Ny$H��:!S��'Ǟm"t�X��|�Ց��j�'5�R	!�wZ��y��qjn����cj�:�X"b u灱�2I: w.�C�!d���MD%uOl��c���,ɜ�R���:t��:
��Ql�Acb�=��-��7T���Ãb*F�sH)�˱���!��]EJ���[n��Pb��~(�p�-��O�h2`G5��"��<���4�j@�!�$���C2�d��8�Ej��	+����
�=��hȼ�" Y &�<�`��
X�#dBH�vyv�+x���xh�\!��
8��m�uPn7l�����P(�y?zss��
;��_�w�ȥ��c�P�SJ
��*<��Q�л���Ʃ�REq�D�Ψ<A���!l�p�G�\��^DS<?��Đ����B���s�'C]j
q��h1�қ
���B�}���.�,,��X<�_��V�f=_��&��#���ڪ��5{��ٲ.��e�'=e��|]�4炒B�y=���?�-ݒ��N��`6�*(�lɲU��F�m��<gź�7�y]��*b������#v��w� �QI�񋒭�z|~�YC�
XUgO˜��ڝ�1֚�.8p,w�IJ�B�d����E�i����-V�߂�ٷ�u�Ǎw}|�翳�1gw��#'�-)	�(JL��{���1fd�P"(��w<ġ2�}`:AA��u6������z�׮�k��#������9T�_��F���$+�Q1��\t5(�o��B�f*y �9�s� W��$I��p5�1�u�A�N9��"�`DH�V� �=єNP��eŮ� �[�A��$Y$�|^����������-u�A����Aj���1� t��ylF�e��bW��p��Ym��H�$1#�
�ށ�B.	�6n��cW�@��OC��Qקg�/N��5��dǟ.?_����ӈ�x �'�6�9h�n�w�&�Q��:�z8�ߔ�����Hb��W�M
�4�
đMQ���
%UC1��h��H�!Z
�8�Y����X��|��!�T��tv}|����S6���M��_ه���#vu��_Y�
^�#vs��������}<�Q�CJ��Xa )�� �;$��%� ӟ�%�� �Xߣ��Hi��e������٢�P,|нRb��h)֘\B�H������U�sxO����k��Y�J,c�%Z��;��Y'F�,��!�3!��Q��L��LF�^�I����sNgb�������ؔۺX?84h�����]��~�OEڥ��U�^�%W.�٦�v��ddx����P&��.�ǰ�[�c]��6��*_��
�4���LYQ��Z`�f�Z�<Ĵ=C�X���]�\=!*t�|8\7����_�ʼAO)�Z�b\�^
3��^�rw`� ���|n����I�G�ʀ^w7�3���UȮ�B�}���گFa�-�@��������z^i��ߜ"C�V�2����嫬X��|�PBE��:���ͼ���ӁeȰԴ}/w%C��$~)��$C���i���եKͳiʃ��T��}�|��e�]� ��k���G������!ؼ\�(�]�g���@A�-��LP"ӕR��A۰�4���g=_�_��Ӧx��q�<g�t
�x����� 5"���wHPQ�%`ӈ�T���:Q�f=\��w�<���w�N#<2Qjy��`��3���▕��e�/��uN%�I�;��$�vw���ފ����v'U���*^�mnRb����3jӥOV썥8A',�z�
�场*n�;�o��B��;�d��clv�t���6v�(���
��#�7wI#�s�)xl�N���5��+C�.�`a�w�9��!;�mwN��@�EL e�Ԃ�Vp�E>�3�y:n&�*�Q��j��|�e�|�E!�nT���C��S�9��b�V�"�)�|%Ǐ�~E@����pH�/�=s�"�1�����)�$�I9�7�Vp�W���o�au�c̗ۅ�9d�Fc@��PE��v	��+y&>`�c+�!��sGG1*m۴���:��Z.2�(-z��
�eޡn���%�xY拇���,r��&��!>�ls/����s�k�E���D��A�&����DL��jD��k�	������T�R=S<���#�)T`s�u�L���[(�x��T$I������2����~�dmf�����EON/�G?�7L���m�N��>*L{�S�O���p��ӌ�o��޿�o�Hu��p��~�p�"i�m�B�[�W����U�u�2P�L�嚫0�|jJ�$:2�	EI������Sp���w�
|�E�/�˯�����]Y?���`�'_�Nz�h*A�GW^Me2��j�%��v��9��IO�e'��.W������W��B��F�Rm;���+��@ǜ=�n{Ei;sn��_т�)�Ӱ�l���6͕����l��5%�\��(͡:(�ʗ�a�0.�
���"�V�l����*^nQ	�Rr�*��],���̧c7�{V;��2j����GSdu7w��� N��
�~��o�V�F��e@s2�+��Y�l��V�<�)��q������
ѕ" ��vP��Q+`�����q%Z���#��ڹ�+�#���m������Ͼ�g�L
��1�wM�������:��{v�5#;$�Q�u��|�BB�{0�,F���7� �W�� �Up�~���9�T\��ۍ�F
u�����9xh���Z� 
.�;-V��w�E5�VU��ɚ���^
�˶���i!%I�
d{a���j�n��/M#:�4���{f�RBsp��ݢ*&�ս�O`8��R��f���ܠ�<��0����gr��I�Rp�_E҅�PJ	<�Тס�*+��}��}�@H�Y8(9>瓰
�ya�8�9��&^�j$�BA����w�������=e�|���
�Ͻ[��@H�� ��A�'Hse��S��-��Ơ�޾����^��\�Z���bC�a���LgH^�%����@z��5WfͻW�h��ݣ�mkW�U���M4n�4!�MW��Js-����k����I� ��	L0���%fˉ�0���y�M�$C�G� ��9
endstream
endobj
416 0 obj
<</Filter/FlateDecode/Length 229>>stream
x�]��N1��y
�^�q��������� 	T��xz��..�&�ɞ1͇�ϯj�ʋ�)&+�P�����p{]�L.�RA�gG}J��GY|�O�1S� �U���UuY�Y�x3y1S��D�K���|��1�1��ú����b��zk;Վ��5��:%p)��IZ�V;�o������Ђ��i������������w��
8
7����E�k�6���h�ObP5
endstream
endobj
417 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 418 0 R  6 0 R  419 0 R  420 0 R  421 0 R  422 0 R  423 0 R  424 0 R  425 0 R  426 0 R  8 0 R  427 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 428 0 R /GS2 429 0 R >>/Font<</F1 430 0 R /F2 433 0 R /F3 438 0 R /F4 443 0 R /F5 448 0 R /F6 453 0 R /F7 458 0 R /F8 463 0 R /Xi50 106 0 R /Xi55 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
418 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
419 0 obj
<</Filter/FlateDecode/Length 1331>>stream
H��WMo�F��W̑��~���q�	\���΁����D�"������.I�R�(E]�� �"߼��7;�=yu��S�H��K�Y�8P����XJE��
�EDۗ�G��_�F�1�q.��s�2�@~��}�|	o��>��N^�p?/��?�ZM�b 
���t/"���)̣�菈#���3�^��F'VB�[v&� |&;����d>t~��]W��Dx�}WQ{ΰ���4'�#�$�Y`����ʣ���{�$���HO��� 3oe�ĶB;��u��o���z�����J�w�w	$�h�)�|H� ��ˆ0�AcE\D�Mq��qr)7 ����)j1��*#�F�v��l^̪U2a���,28�����E^65�f��9?�m��*W	�q^�lP��*��6n&���<[�u�>�c��Ba��R��7$L���.[X��c������^,�ߜ7Yٜ&��$�CNY�����AP�$��������������(��24�{r�IY���AȲ�����2x����'\�>���[���~�����a�u���'F�������h��pXw!9Q�u���JB�j��K��E�UI�Z,�y�C6�ü(�S�5�-��Gh*x�֐a��zY������
����#���W�/[�u)"1fF�'
w�ZXB��z�
~�Նjq8��A,.G�~a���1�i&�����P:ģ1Z㤒l���tEm;C\���؃�\�p�+�oA��&H��;��0�(�8��j\N9��v\����d���Iܪ��~��>-�D�4l�6lPϙ��!�
��G�s]?��8�����/���kB�T��q���)������,|��e�>ѯ�ɑ���9��F� <�jb�W���mdIz���<O�H��DN�C�Ô�k�"�/֫������j[���� <�����l�]�o�<��jU���gw	\�uq���G��!�~����t̝Va��ٞ�GDz�'����4��N�V�@KN��Iqm��Pl֜	x�O#��F�Km\gЎ1�Q;
[���#	�aL[ 
�3��'^	o��^�	֏�
}�DZ�$��*F8}pB�A8~��#~���i4�>�lq���d�8�'i=��*��p���5ncTcb�����]U�Z�H>�ov�`�����(�ƌQ��ֈ#\e�f�>Q*γU����%%B�qe}Dߨ�\"��� ӯ^�$h��������96=�'C��QO��s}�#���fY����B[����`C�r��
�����������jx�Rm�Ȅ� .[�3
endstream
endobj
420 0 obj
<</Filter/FlateDecode/Length 1015>>stream
H�̗]��6������ӻ�ە�W�-7�N/�T��t��c_��&ۑ�N������?����oH��7�SB��
E�ߨF��XD#T�}ME�j�'0�J	Ö���R<�����<b<N�E�ad?f�������fR�!���!@kIC,�+>��!�=�2�y�lWnm}�����l�IB%��G�'���`P.&.0>��s�8Ql����s��N�q����x1�y�~��N���C��Ln��rH�H��
5���ߐa4W�TJ)���ԟh	�3�����>�p(��!*t��۾9vv���G�jH�Y�n��{����xy?_*I�|��G�l!à��V��tW�üo�yφ��a����a��9�`�TeQ>�-�5<��ܶ��sO��E���Ag-����8�M�=DQ�pA�9t\�P�~h�pI� $�|\H���R���HoӚ+��5,�/i��M%��z%���K�(6T��Q��/��Д�U��_��DR�^[`��'p�
*����uV�ǒ�R�VP$��@��o�� ��P�O�!oPCXx���Bw��_��!Z�,��2��f�ȲLS�hb���F�=Vad�S&��*|˗�qi��k������^��G[䕅~��q�8"�8���`ߖM;�/lo[w�!���v�9��ǦU����F�ASq�[#�2M�ͭ�p�}̭��0nA��zk:_��u��^�
�圬�O9g���r��-瓀��j.��n�+�����8_�5q��/z�N�M��[p�<L��[Vj���ⱜ���)��-�X�ޢ��F��"��E���re,���e�Z8ټ���L&3V0ٍ����QE*�mvNf���av�f����U|Va�?U�=b��ێ*2Y�Gu�^��a���#��n�S��;��ڑ��J^�`l�Mg�%|���Hz��1G7���[�K�mvM���%B��]3�y��+�8��o���~�1��&�f�Q�ї��@��k����  �i|w
endstream
endobj
421 0 obj
<</Filter/FlateDecode/Length 912>>stream
H��W]O�0}ϯ�����ڎ���}HLڤi}�`��F)k��~ �{�N��)�ltR"QD�u}��=�8�e8�Yj�e�sZ:f]�a:Ϡ��G������.���f��������޾��������
��=ъ�Z���a���d2)�f*�����%��"Ş��R�Y������G�~���
��0'��̨f�0�8������T@_�5�Y&Y��b�q͆��ɢ���8��8	�C�׆<�<Ͼ�KN'�3*b�Ȕ�����]�Q�\�!s��c>I�{��T�����X����V��p�وpYjϸI�	N�!:�s����kHKP�35p�Af�ˀ2�i�]��ȩ@����Y�癭ws�TѴ�x�`��!]G��aE�� 9��:�!4Nת$����tE�'�/���i<����R�����1�ԈPEʧ
{���lq��F3����ݯ� �5���<iꡎo�� �a{A��8�+}���B�<W�g%����a�*�,��*�"��*	1����#B0m��I['��Dۚ���%�;:�s1y�$삞͙�a24F�C��K?��j4;��@�:�hY8dHok�x�Yy>�O��\ɴJ��_����a!U��m�DI�U�|�ʆ���h*i����5!����!��p�^s�4V��Y��G��k)=��A{Hb��!m�m�Pɺ�ss�s�w�߱N���h��1���~����u�AxR��D�*�BSm�
�?\ڢ�r�;H���Mo�-*�(:�N�}U���O���pA�/�4�v��&:�$[ař�f `�W
r�⠧M�s�ql`6B����� }���^�:z��w�X�Q�M��Q�W=�/�/x_�w�xql����;6��{���>�~�V1Ο�����? �_BG
endstream
endobj
422 0 obj
<</Filter/FlateDecode/Length 771>>stream
H���o�0���+�c"a��8�"��H��,�Bӌ����:_�یH�k�Ա;O[�����ᗃ��ST�]a
�B�6��s=�=)���
 ��Ӗ�2#Q4'Y*轸��lg�����,W�,y:;g�\��y�<���p.X�T/�Yx|,»�{�,i)�<�%���\��y��� �r�,i~�p�&5e>ʛ���9��gE�)z�G����u���iܯR�{�A��r�J�]�v���ZXȋ(�$��C�v޶0�ߢ71�Qq}\maU�O�#��u���c�U��n��m���D�H��A�dn(%!Jkj���p
�e	���*��zwHp{�9k��6J��}�Ѭ��n�R\�|w/�.�~9
Nq���\y�sF-��\��R^���E$i*�;ESc�m''jKMe+��
ҌޔY+dM�5΢���5n��pϦ�>U��bE�@Lۦ��nh0�ZػQ�f�k�S9�ȩ39�H�����nd,˨�9�G-��x��ɔ�4��d*�
2=%U��)���f&��4�A��l#U��9��MD�pH������n �����z� e���#�~�����Gؗ���X>@ӛ�^��wӔ5�q�% &fm6�t������d*�EӱRZĚ�`e��u�/����׳2��V�^����Xpz=+CI�V��P�L��✕��M�������E]�>#��ͮ��	�V��DE�H'�7y@���Y�I�[u�{�e:�y��]����.��w�)=�#� �WM$
endstream
endobj
423 0 obj
<</Filter/FlateDecode/Length 819>>stream
H�̗Ao�0����w4��lc�}��&�0
��v��)	������)YR����z~~�0|����+�'�d��H���$�EΝ��5�h�-̿�M��`K�N7�4/0Yh�\j	c��
#�q�d�l����ٜ1�k|\Ԩs��
r'0�P�X��l��3͆��!w��*�y��+�Q�c��-�	��ps~��D���΋S�D�Q��g�#E�K�X>�
g��B`y��V[�6aMZ�N>_+,�Z'Ct�5a��7��nx��'�þ~����v�z����o B�{��#�k���[�.�U}���\�2: B����8�-[������~{��R�Ie��R����C�{<�i�s�8�a(��{n�,!]��d<�R�,+R�iibE��Ɂ�U��*i���$���)
~�7^���x��U�":E~P���c�r��f�K�]T-avQ���E�fEK��%�L�
9h֟�,J�JK�����C��~נeaU���ί[T����젮׮��ifP�f�KPZ�O�iwT�f�EC�(���r�Q��T�&(R-�/+�Nu�L��%�%sF���M�$�.*�0��Hb�"	���$�.*�0��H�.)2��"�p�,K;i�j��t/�OÊ`پ����u��m��]9i2t>'ʠ҅-���dKw�$F
�ϛ25��Ԓ��ka�\_�d��]6�%�%�j�X�2�ɒ��EKf-I�]�$avђ��EKf-I��%Kʂ+]�|����I�e��?���srR��(�4SF0<I'���8o��|��2�su4��2�	��gk�G?\��i3��&�����  ��T�
endstream
endobj
424 0 obj
<</Filter/FlateDecode/Length 817>>stream
H�̗M��0���sL<��Gp@��
q�f�����ja=c�i�E�VbR�q{<ym��D��M��T�[-hT�ǖ��$��!�{y��3�7	LG~x�F�0�!v>N~Mr�|H��+��$,ICA�{h6��&Q���!Da8\Q���$�z��9��m_%��;�,�$F�m�w�s�9ɱ@o�Lq����d�W��P��r�ճʋR�E�T��
g�����Fmԛ$]f����k���7I�\�L>��[�{h�m{
�m�۴ۖ۷����V��-d�J1˵U�D�Ф�}��pL��$�Q�t8�8�z��&��BZV��jr�,��D,�,�� �h�b�H�z��7M�z��7M�z��7M�z���;����1д�&�1��E���m�ŏ�պ��բ�o��Ю�5�9,����a<Zg��q3�L�(��ҡ��F���P7��q$����:E��S��)�ΰ9z���(s��ޥ�Gk.��O�g�%Y�ѹ�i7��d�Fߒ��%�
�a��ZǮUT~�Z�J����5�W�h�r�����W�{F!�B�#�9r�GǞ;���B];%�XC��K+X煺h�B]�z��7�N�z��7�N�z��7O�z'�3�}% ����<= 
S�H�[��i�HW<���^*,\�t�|짚��(fgs��7"����#`���}{��	K�MY͡�8ƴ(�4=e%EV�RZ'�J� �9�:R��Z��^�Oۇ4���>ZK.��6*��rh�aI�?�
'
��_VܭVM_].ql)l��KK"��G�xc��7��/ �CG>
endstream
endobj
425 0 obj
<</Filter/FlateDecode/Length 787>>stream
H�ԖKo�@���{tv��G ��xԷ�C���5�i����z��]�UP��j�^������πРP`������Z�����C�D���
��bxJ��jW}�~
�Ph��P	e9�b}�߸��X"�(�|$ڐ;��0^W��_Qt��8Eʣ~2��Nz��XfÜ���5DK�X;�q_ءփ�1:��ц�zF;��Y�٫ged�ޫ�
��ү1୤8FF'���֋�[����(+nJ�A�*����tw(��F�����I��"��|�Rjr��x�i���b���-6��v��6;'ۭh����������`�yO�}v<,4	м��UJ��c�i1�s(�I��Q	丄'�H���޴y��z�q�O�@����y>u7%��H���=^��1�J+���u�!*G�j!�K�r�E
���F@�5i ��|4y�e�(��Z��]�����a�[(���-Yl��B �o�"�֩�ةW ��z�ةW ��z�ةW ��z���w$a8�r�8J��q�4���Kb#����:�М����o 	�I��(�# ��U�
�������N�$iYlw g����N�H��+��N�H��+��N�H��+��D�{ 	�)�Wm$DM�C(Ԕ��Ȍ1MH�����.a�Xu��۫v;`R�Nxh	�<�����& eA*G��m��߼��P��L���F!���yA�q��i��ٕ垁��T�L�Iʤ�ړ��&B >*K����$j�@��
�c�� �Yl$s�b-� P���#� 
QIL
endstream
endobj
426 0 obj
<</Filter/FlateDecode/Length 1709>>stream
H��WMo�Fzԯ�SA�fw���Ivl�Ec���6�{�%*V`Q�H�ͽ?�3�E�t��"�(rv�͛�}TL�eB	�L9
�I���b4>���.\*f� �O�)��U<�-F���� �/��	�t�a�	6#c���>�E��]���z1ʘ��_�����xM;ūp3���N��pͣaĸ�a̘�1
���c=R����˞��ɳ�2s��inO�=��I�w69oѷR�j��,g�k��(1����b6bJjx��
�BB��j�a����I ���hwzu�Ɂ٪��Fl���t�X����ݺ��y���U� ̫Kՙňg�G�<>�7	{�m��!ά3 p�6�^(�V]~���_���*F���e,s���5�|�S+��|c�0��bd����F�	��	k�FND���'����ُ��I�U�4'���%�@���ՁY�x��v���|r���_WXw���;�K�ey�2��9������z[��XrNp^i���ǜ>�i1wB�i���8�@��a�DG�� �ϕd�&W��Π���y9�'�^��N��F��{�b;a��vr�5���k�	��0�6����CN�q��zV��s�q�)PQ�%�,��y~ zzLAvb*G:�9�
!]�R��XyĮg$m;X=��؟A+F�����|�j�%\]�����Z�$W�b��a���/�M^T0]<���ctX��"��R�6�Z�M�I�B:����bҐ6i���d=؎�Y�N�L%O�e��oTK��v_Te
�D_cZ���Ҍ��%U*p�_a�=��a�*x�n�'�%z��m�)<��`�f5�N!�ϫ���XRܥ]�\d(Qh�.g�\�	���6��t_��k=�^����IU�'���1���K��U�x�My�+9�U�=Q�y^'�p���8��\
�>��qN�^�e���u9:�(�8Ɲ�=�&����[��Hk�+I����8R$K��]�^r������g��f��Үz�ĸ]��\��'z�`.��Bc��,%z\�t�d��T���&5�濤�n1Hv��	m^��&��%Νg�UΈ~���8"4,��,5�=���H��.�m��
߳&���/���?���=�U�Kh�������z)�:s�0���^fU#�B�4(�4
�H��N�u��9��ȗ�B#���`i���Lq�弄��>����?�(f����Y�3�Pt
�[�e��^��ڪ�'8�\䇾��(�/��am� �t]���
�.�*���Utn���S����4<��՜y�r��;=������. �>��d��]h�/�RFl�ŉ8�����7 �a2��Lo�zf<
�68&2yԷ�_'g������ �bM
䶍7TX"���`Q�K}Ī2�D-`:b�Y�B�܋0Z���I�q�ظ������_(����dTc���|��x�K��ˇ-�B����Š>P80�`P
�"�&h�������������Q��k��Pu�������Mc���j�-`0��l<��h5Ϙ��>�mƬ�����xLmn��`2͜�:�ᒎP��-Q���F�{��'��V�E�O��� �u^���D�u"�$�\\��oC��ޠ�Ψ��eD�
0�����1ԯ�82¼�t��R8�pP����s�r�۠�W�
���ӛ� ���G� ���l
endstream
endobj
427 0 obj
<</Filter/FlateDecode/Length 228>>stream
x�u��N1E�|�Kh<~�I(aX`�`�!���B��IF�-h�D�X��a��0��Ww��T)�@~qgϗ����6�����V�Z>$�N��s��hyvr�L0ƎM�1|���F�tL4�Ry},(� �ѡ�X����M�,�y.gE��b00[ʨ��[����\~�oTEVn��W�@<�Da}���[o�x�.S��	i�ђ�Z��%ܝ���]�
endstream
endobj
428 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
429 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
430 0 obj
<</BaseFont/KDADBI+Courier/Encoding/WinAnsiEncoding/FirstChar 49/FontDescriptor 431 0 R /LastChar 55/Subtype/Type1/Type/Font/Widths[ 600 600 600 600 600 0 600]>>
endobj
431 0 obj
<</Ascent 629/CapHeight 562/CharSet(/seven/four/one/two/three/five)/Descent -157/Flags 35/FontBBox[ -28 -250 628 805]/FontFile3 432 0 R /FontName/KDADBI+Courier/ItalicAngle 0/StemH 51/StemV 51/Type/FontDescriptor/XHeight 426>>
endobj
432 0 obj
<</Filter/FlateDecode/Length 638/Subtype/Type1C>>stream
h�4�oHa��6�ī��R���Y�����6�iH����ֶtRK�Ɛ(!\1��9!
��^x�fQ/���B����س�� ��y��ˏ�P�
 �^&�Ń�9��E���Y��b���x�z#�3B�ҽ�_��%�6���@j)��m��&���a��_XP�Ca�N��*w�ܭr�ʽ*s�t�!k���^��|��qK�S>Gc� �].�j��W�rx�%�?��.�ʤ(F�Oi�l�O- �A�6�@+@�0�6Bb��d��ct���Vf�#�`AF�r
���&�G2!��=���׬�ա+���&Ӡ�5�������|����������� �~n�x�����Y�h�!r)'�p����a�3$9{8}">�~�z������b%lI��Y͇��޾��iv6^m�i��.�4�\4z�� ��s�ٚUz�.��p�����w���>v~iѼ����@?Y��.��\���M��'��ho
��$q�+�@��QDq�B&�|�,�p������h�E2��;��oǃ��E����b�Ra	G�|��n�z�a��Z3�k#-8ABF#oRp�3L$��f�a�=��ҴN?
���$'��Gȡ`긛&c�\��_� .:�
endstream
endobj
433 0 obj
<</BaseFont/KDADBJ+HelveticaLTStd-Cond/Encoding 434 0 R /FirstChar 32/FontDescriptor 435 0 R /LastChar 144/Subtype/Type1/ToUnicode 437 0 R /Type/Font/Widths[ 250 500 500 500 500 833 500 500 333 333 500 500 250 333 250 278 500 500 500 500 500 500 500 500 500 500 250 500 500 500 500 500 500 556 556 556 611 500 444 611 611 278 444 556 500 778 611 611 556 500 611 556 500 611 556 833 500 556 500 500 500 500 500 500 500 444 500 444 500 444 278 500 500 222 222 444 222 778 500 500 500 500 333 444 278 500 444 667 444 444 389 500 500 500 500 500 500 500 500 500 1000 500 500 500 500 500 500 500 500 500 500 500 222]>>
endobj
434 0 obj
<</Differences[ 32/space 36/dollar/percent 40/parenleft/parenright 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P 82/R/S/T/U/V/W 89/Y/Z 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 132/emdash/endash 144/quoteright]/Type/Encoding>>
endobj
435 0 obj
<</Ascent 716/CapHeight 712/CharSet(/space/S/c/h/e/d/u/l/C/A/parenleft/five/four/zero/N/R/parenright/two/M/y/a/i/f/o/r/n/s/k/colon/t/P/hyphen/Y/p/slash/D/I/w/m/comma/period/b/v/T/endash/F/W/x/one/H/g/six/E/eight/three/nine/O/B/U/G/J/z/j/L/q/seven/V/Z/quoteright/percent/dollar/K/emdash)/Descent -172/Flags 4/FontBBox[ -174 -250 1071 990]/FontFile3 436 0 R /FontName/KDADBJ+HelveticaLTStd-Cond/ItalicAngle 0/StemH 67/StemV 79/Type/FontDescriptor/XHeight 536>>
endobj
436 0 obj
<</Filter/FlateDecode/Length 4889/Subtype/Type1C>>stream
hޜW	TSW�N��S������gA&g�qı(���XB�h��8�b�'š>5U�H#DQ�j�\��q������ﭾ��z��=�>{g{�#9:��b�f�Hߑ~��ǆD%�$�/�0}Zbp��1��tg^#��9��[2|��*����5����|u۪���J�D�A�[\1"6nY|xؒD� w�!}��Uh���A��󈛽u�ؿ�@�op���e	�!�	�q1�c��b�C�]��QQZ��m|HBH|�0��>iBxLlⲸ��Ec����B��
�&��D�GjcC�k����N��	ֆ�h��hg�Ls�N!��$j�b�����{rhh���`t�2-1���^�D~c��xmDR|xBp����ؘ����E������pbA��?��7z�t�3X�O�,�?�T,�;�Z)D�Z�IE��"?gQ�H�+��MM}����:89�sX������d��{��q���ߤqR��J��J�?e~�PY��|�<B�E~�Y�f���h��<����-<Z,jq�Ż��Zj%o5��)��1�J�ִh����6�6���y�6�mz�_�����5��h1=�����uy���J1i�TJ���[�x�A/(��3
�X̀б�l��7x!�S|#|��S�E�a�W��d�h�h�S���6�<�K�ݭJ���E���G�z���A*��=l�sTv:�\�����n'e���72p6�h����E�UJ�x�V���-Y'��3�A�J-f�GE���Uzs���Z�/C*{�Rjl���_��������>:��|>��Cy5��PW���k6�(/���-]VḿI̓�']��.�]�sC�6鮜N�T1�2�g*�o�
��9vG���y[=m�Yv�%��uMEY�$��.l6^��=a�|O��̦�ɧ"�EJ��V���%7x=S�c�w7�/��8/�
�2�U`�5#E|���[3��8l&���7��؝�B���K�3LPC�T����|J�b$��U
�j�}@wv*���8A�%��Z�B�\�{-~�UTvDR���zm�N�@��pS��u�wo8�?!/8���Eݿ;Q<�,�Ӑ-�P�X0�M�_R�U��w'�=�&+��\��o��(���T�f��$>���$��+��+ 
�ְ��H���إGcd��h��Bs[Gf��⍝!CqVfgu.���)J��S7�#���H`��b��Va�))�\�?�)�L������K��z��kL����ࠆ6���נ%	�l��+fMWϷ�̹�޼�<�3��=%z�4�~F@c���Ʀ/uN��9]7C�w7��pv����rb�4A�Iy�q��2�KN��/a
�e@����vj�� w���M|�s��}΅�K=��
�G!�o�2�Ճ��W� �����~ZoT�f�~���~��4.�%6�d��".����UVc����g`�`N��d�i,��-�����$>�˛$�`6�NY��ଁ~�=8�b&Ȑ�s��Ep���'�B�Rm*iuf�����q�4hht̓N���sM�S���hL����Z�;�cO�Y�S!{��Ɨ���rgQ�_3@=z����z����1\.��@a@kh�1�#
D9��D�QY�	�s�{tٌ3a�`���I\���TX{0�+��qF�*�ȟQ�a�CXA(1S~���n�e���g�&4��&�ށ�0��y�����_���da�;�c�u��n����)��FE��ӳq C����������P� ]/�#0�����zѰ���}5(F_���:t���4V8|� ��TӘG��H�q�W2�c������w�����N,*a#��Ю8[]E�/^*���3P�zC̋�1���R(��n$H4U�@ \�`&���bx������ةXH\%��w�&^ϗK֫~�.A�VSW1J�3�a�):P�۶��9�+���@)
�LPn�I��+�
w�&��d�~�{踞�Ylǿ`�Q4J÷q.j=ʦ,�V(��@f�eȮ.Y�?蠧�����1����U9�lp���ϖcħr�2���I\��Z$|��u�����x\��qL	&��ڪ��q����~g؜�ŰY�F��RsS����`��-�^ ����{��U\�� q�*IܩQ���0�q0�(p�5,VW�)P�B
��8L,	�

:S$��~�M�:��,�	��~�k½���&[�O2����� ����w�7a>�`�	�+�-3%�m\1)/6�Ň7��>�a0�<(=�X�ѥX�=��`.Pj��@�[K��%��x}?�C
�w�4E���!���Z��v�S��
rQ��J�-p��4T�q��I7���ᖛ��!�"!�%Y2NE��֤���S�;,0�"��]�Z�����jR�h�מ����V#�1��5熑��;� �L$��`�쇷�����PǏ�5`�v�p�����p�y&�k��BP�"�^���������G��-��d�7c2B׆�
��R���)��|�v��a�mTy��r��Z��(�x)�$vzE� �/�W\����@"s�"�6�p�F��,���u���c�ql.��P殌��tB� ����(k������NО�D	�)���&05I���
{p>�j v/̇`=>�8X��LX�Ї���2�KBq5$���ux�ʁܵ��Q�:�Nݻ&8d7Y`+����=��7��T��ȌZ��N>��up����ˏ�vTq
Gv7X�ז_Yp�=�Яx����m�[&�i���/iЌ�y����3`;e��؎�q������}K\��˽�J�dܔí�Y{)�f����*?�p�?������	�������`�k�"�x�o�����%�w����a�o&�
�'�J>�\N?�sFGj�AS�tŶ�w@R��Q�ź�[B�=O=I��@����ji%v����ś�7/�,��Mby�������rr��,{�p5�!�"�,�7�+�4�4�"?_ָq��X$
0�A�S���?�	j���f;,��_��	�W�rU��IqS�wM��z��\cr)������ �S��Q$����:��5�V�q	��1�/]*���"����缶9��#��Ql۞>#kz�T�\*�^VeFe~�S
�m"�NfUƅ�d��6�~���t����D�m�+�#� �_(ik)�\����>��
e�;�ZZk�/e����t�@q�?E^�?ŕ�"��@����H������=~�ᚣN�ʞ�^���N9*\ˤ�V�����K�7��V�q�莎�(+`�R7u_���ؕ0!Ɛ����O�^��AR�^�9��n�AR}���m�Xtb���,c~��H_�'�qV?�cR�&3�5��'le2a4{S����W�r��5��8�1P��,?��^��
�
��$�%Fq�P�I�i�2j��ʊF�_7�D��U��6m�8I��Q��3�����
�c�]�	�H�m���=���d�����{�ƜE�������m&ھ$eƄ�.�(�1��SU�>��7Ks�s��4�b2�Z��1��\�1~��ַB�N�o��k�7��(�XS�בD��2��
o�����?��؛�P�<�[����Ŕˑe;)PeMmc5�=���f�h�^����ⵜ=��+�@��̒g*3��q�U���E7�X�̷x�ꥡ�ؼ��ycH��j�� X5˨<�qf��	�OvvF��z�-�'��M��=�t���gb�G�����w^>H̜�ۈJ�B37r[e&�E�Yk�S�w�w\:��ZX���~�� 05���{f4K�/g����c����ߧ��-x*g�m�}e/gT�M^;7�ͅ�Of�E�W� �Z\K6�V�՞�j���2�=��J#ܳ�/0�%1�q�QPq����(Kȏ[�ĮY��J/��֒�۴��F��o�=T0Gv����Q�|H�՗� �@R]���U�~փ\��Lg�/-Ey����/�\�	F��H��/۷�]�W/�~뒉��n�C��a�=1K6�hF-�
������:7x�RRk���z۪�J��I��^|5�Efx9E��Ȇ����H|�V6J�@»���;L숞�iA|^Q�X�x�%��/�)���7,ߎGOR�z$��_�Tk��F���	{-%��C�z���{SB��b��/(+��!$/#��/Rtsr$��"u����4b�&��d_j�P�O;@1C�E��7�]��Q{�7�\S��q�!��kU���T��(�9\_Ab������H��5�S�_�W���mR6��ۤ֨fp�G�>��ڍ���dn��"��fǝS&�FY?��d�6|o�$2��DMﱓz���i��觗dz��-�x��|և
�
=���t-�<�@JWw��7���Y�~��)�j�W���wE��!���3�Ì�&�cn�Y�p��5��։r=�欞}l�I-,޵��[�lt!�$c����z3L5�_�K�=�Jѧ#׆,�e#����h���>��#=m���Z.^8py/	�
m�q�}�F~(�UMx��Rw�*m+�$]*��� �]���6ks�ߜ �N
���f_�m��F����t
�s2�Hg�˾�/։������c�"g�'i)�|�08F^�;�l��
�N�b���".��$࿒���;�W�URA�2n�,k۶�m�+�K��q[�v7|}��2'"��%6��)84�&�uS�~�����Q�y/�Ml�<���J'J����9(s�s��r(!�0�1M��v�4J��m�Ӧ?��1d3	E��X'�Ȣm�zm�����܍͌��-��/�s�
0 ��(U
endstream
endobj
437 0 obj
<</Filter/FlateDecode/Length 301>>stream
h�TQ�j�0��+����l�n��R��4wE^��Z�s��wWJ�V`y4�V��n�� ��hw8C׻6�4��E8�w�+h{;_Oq��� I��L3��F�Z�w*Ns���!��Zfw _C��w'X�����_8��!���;!�g�_̀ ��K��GP�_�[����;!h�U����k��D���~� ��,��Л�bi^0.^f#��J��U���I�ZEq���Am��&bÄ%�2���(r�ej��Хbb	�D��L�B߳d�©��?��qϞC�\��bn�X��6U?z�?�-� <2��
endstream
endobj
438 0 obj
<</BaseFont/KDADBK+HelveticaLTStd-BlkCond/Encoding 439 0 R /FirstChar 32/FontDescriptor 440 0 R /LastChar 105/Subtype/Type1/ToUnicode 442 0 R /Type/Font/Widths[ 250 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
439 0 obj
<</Differences[ 32/space 49/one/two/three/four/five 83/S 100/d/e 105/i]/Type/Encoding>>
endobj
440 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/S/i/d/e/one/two/three/four/five)/Descent 0/Flags 4/FontBBox[ -168 -250 1113 1000]/FontFile3 441 0 R /FontName/KDADBK+HelveticaLTStd-BlkCond/ItalicAngle 0/StemH 115/StemV 159/Type/FontDescriptor>>
endobj
441 0 obj
<</Filter/FlateDecode/Length 1233/Subtype/Type1C>>stream
hޜRklU�awgV�b;L-;0{�QhiwJk-�Њ�>c��c���ٵecA�#����@�MI
�Z��
�%�"�i$"1F0B��L���;k�h䏹�w�9��;�yДqEӴ��pA�¥3˞:9�8��e�W�BOu�����j�qFm�8^�2.�őG�5���	ډāɦ=I�A�j�����ڠ���
�������1WǼ�8Jq�ӓ7�23mh���Qi��k�������>��]h�ǃ�t~��~Y�ӝ�#G�����2z�Ʊ�	��[�?���jw�5v����q$h�B䪲)^��QyFiZND{��u������n�)ǝ5� "��3�)�;�}�FE��U�Kq�����^#��
��R���{����"g/*-Ӎl��O/E�C%�l�z���P�X2I��z�ZO]�K�����1��\��ڽ~�`Z��٨�F��BD�σ6�a0yЍX+c���0��.���VJ��"��P�J�AQ��	ڞW_n1c�لf�M�H	�C��j~����u�rD<��C�l){�z�S��oʗ�!��E��A������>��z(���cw-`ͻ�<sn.�!�؄ $B5��"��vH���4Ȃ�<=�k=4��߽J�Tn[Y^�����mL�*��6�*L`�����۵?�YN>ut�L������E��(�(3A6�Ix��+}J��-��{Vo�3�4�I ������C4�¸���ȓ֦q�� �Hs�o��i���Ļ $��h�f
&�R�ɕ�݃%p�?�<|Z��\��yvQ�����nn�1c[	���Z� �!����3�ܽ��O���	��Ka6���l��NRu@.N�\9ܝ���3�ɂ90��mH��������%�E}UG]���<�y�'t��iY�3�00�핇8]��s
�ԢC�O�֓�y��|�w�_l��n���)������>�dl#�ɰ�>�,H���5@<�{��>ϴ��xۂS��핕��O�Њ��#[���7��9څi�TɊW���Y]�s�x᳣G�a�kX�'a!+
�hR/HQ��%.
o�?f���9w��]/�� M�!���i}ذC�vdV�4���*�i���[׶B����M	U�^�<b�
o�>n��&�%?X�K}ܾdmK�A¬a�,��"G|�����#[bW�W��Ĕ��q�; /0C��XS�S�>
�X-4F�? a�{)
endstream
endobj
442 0 obj
<</Filter/FlateDecode/Length 258>>stream
h�TPKk� ��+�e��-$�l)��ͶwW'��1��Q�m+輾o�o��}h�	�_��:��=����c��@�(�j�8��u8���@�ߨ8�������7�_�Fo� �s��A�nq�G�
h��3~z��Y����t^B��rc�8;��K; ��h@��7�V���:3.����edQ�a�P'�Kd��0걡�nn%�@�!!�'�m�7'������e]���{��6�dEA��u�nrq�xٷ  {D�N
endstream
endobj
443 0 obj
<</BaseFont/KDADCK+HelveticaLTStd-Blk/Encoding 444 0 R /FirstChar 32/FontDescriptor 445 0 R /LastChar 132/Subtype/Type1/ToUnicode 447 0 R /Type/Font/Widths[ 333 500 500 500 500 500 500 500 389 389 500 500 500 333 500 500 667 500 667 500 667 667 500 500 500 500 500 500 500 500 500 500 500 778 500 778 500 500 500 500 500 389 500 500 500 500 833 500 722 500 778 500 500 500 778 500 500 778 500 500 500 500 500 500 500 667 500 500 667 667 389 500 500 333 333 500 333 1000 667 667 500 500 444 611 444 667 500 500 500 500 500 500 500 500 500 500 500 500 500 500 1000]>>
endobj
444 0 obj
<</Differences[ 32/space 40/parenleft/parenright 45/hyphen 48/zero 50/two 52/four/five 65/A 67/C 73/I 78/N 80/P 82/R 86/V 89/Y 97/a 100/d/e/f 105/i/j 108/l/m/n/o 114/r/s/t/u 132/emdash]/Type/Encoding>>
endobj
445 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/C/a/l/i/f/o/r/n/A/d/j/u/s/t/m/e/emdash/N/P/hyphen/Y/R/I/parenleft/five/four/zero/parenright/two/V)/Descent 0/Flags 4/FontBBox[ -167 -250 1007 1013]/FontFile3 446 0 R /FontName/KDADCK+HelveticaLTStd-Blk/ItalicAngle 0/StemH 148/StemV 208/Type/FontDescriptor>>
endobj
446 0 obj
<</Filter/FlateDecode/Length 2272/Subtype/Type1C>>stream
hތU
PW~ò3���2�5��̨(?
(�C<�?(*�A$E�Y��+�����"��DLt%4b�E"ğ��'�^���Q/Z��JbΊՃ��{��r�����7��u���~o@�1Ϙ<qr��l�^��n͝���Q"&h�CT��� ��4���X�h�*���������+��N�q3̖��2���EyT��1#�1FcGw��#��#�削s�MN+s{lEny���t-v�r=6%R�XX(wA�e��msy5���;��pz���E����i�v��+{\���(�U ;���@��N/�i�.�"��g�M��)�@ux�\�"�?�N�˳[m]ʢ�2���[o���ɥ_'�q��K\v�b�z�N��WpGn��w�p�d;͠��;�6�%����	�eŖ�;%$}Hw�	�KO�����NH!�y��B�2��)$�!�:��#U�ȴ�$���5�(�3�y�9�L��pM'�V����|)�Y�����o�?b-l6�����p-\g�~�U��߷2tn�U�k;^�e�O	[��-�2@�[8?;�k�HeV=*h3�$�l��Q�G��c�����(�A�"#�q���"&���c�f�9��ǆ�O� �:��P�O1�G�H3FXq�,B"{z���0�9����(C,$1���c+@�0�3��H�0�i 悢�[0H�+���6�������g�D	O�C��Wq�B���`9���1��������p!�>��c��&}�;���;��v��O������8�:�cкV��º��k�?7���L���RZjA���nF�B �����!\�Ȃ�����,^�[�pr,����h2�.@<�>O�8'�\�wǡ��Z�5�ε.�e��:�B�PU���6�M��'B��@�y�>h�u�dd�� G������d����{�Ug	S۱V�Z�J�0�2��q��Zx�V�
#�k;=���Ǌ�z��d5&3��BױTM �{��-8�q(.���àfC�Y>	K��ʗ3�[а��O �~q����H�L��C)a��h�C���
gT>Q_/���h�`�c�ʥl%��m�z(��^,c_ñ4�FJ��`4�1'���|�`t��e�d�t)�O�Ɂ���!��*��Ǌ�K�n(�hqAg(Dx�	^�V�E�� ��aw�J�$)����]
�Q1c��K%X��u����{k|���|���_o�A��W��-��6>�_KowG�|&x�@��J�������S3x���n����,=��b\�}`��d�矯�:��Z�G�NrzYq'�o��I��=��/�
�4/��vM۸Ż���7C}���z��%�N��X��y���Yv��F��+�������g;N�y�4=߄��B�[{/�Yz᠔��={�����Ђ���%A�a��;���Z]��͙�c����'I|�^Þ���;�"��S8�b�"L]v�ĩ��xq���Y�Y	�摇�'~|л9UC���.|��x��iA�� f�`w0c��P� ����4�v��m��f�|KayQy�%=�ó]����&�c�jw��O�������a��"L����?5�X�L}|%� �9��ԛT*~�����"�%a�z�˨��SX��KX�:V�P��оu�,���`�T����
[+���5�N�I�eO�0�L7��}f ��l����s�;s��0^�]���V>����1"������O]sGX&$eX�%����������_9�!�b��������抸��m��I_��i����_��������Fj2M��:D8^�^j�9Ծ -#���Ӿ�_�x�8LQ�*q`���,�A���<�D�Fz�oAnyɁ�����4��G�P���I�7����5U�E�5P8~����
��q�J�C�b�=1�3��r`)lb'	N���T����Z�!�*YڝY�D�w/HEz�󞊃#�Zx6H�����W@&�̺l�[_����uk*k%�Mj+����J7HeAZ���Z�AIA��P�9��cγ�Z �V��m޶\��,�]��g6n����``nS�T|6u՛G$�}!��\��GC;:9�~��։��1�V�K��T����M���)/��/��>�/�ax�`��dץ�"_s�.�?4��~T�{T)�����K�g�o��١�Ă:��p�j���:������7�ChPzB�.��C���gԙ�? �gt
endstream
endobj
447 0 obj
<</Filter/FlateDecode/Length 340>>stream
h�T�Mo�0���
;��g�VBHS�I=�Ck�;
�!�z迟w݆y�&~�����no��W?������8�goN�������Y���vS��2�8�m;BYF�-N����><��b��A�����`qL�?H8�����	T4�F���v������]:^B�鵌����}m;�2K*(�Eh��kQZHȩ5���dk��@��s�s��L8#.��4��9�FxÌ��J|�(�Q죴�f�XűZ�5��	����":ȵb�S����ּI��Z�ʕ�\�%Z�� �n]��Z�$��ҕxKzIȿ��~k�9{O�W#�;�[��7:n�ѷ  |��Q
endstream
endobj
448 0 obj
<</BaseFont/KDADCL+HelveticaLTStd-Bold/Encoding 449 0 R /FirstChar 32/FontDescriptor 450 0 R /LastChar 121/Subtype/Type1/ToUnicode 452 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 500 500 500 500 278 333 278 500 500 556 500 556 500 500 500 500 500 500 333 500 500 500 500 500 500 722 722 722 500 667 611 500 500 278 500 500 611 500 722 500 667 500 722 667 611 722 500 944 500 667 500 500 500 500 500 500 500 556 611 556 611 556 333 611 500 278 500 500 278 889 611 611 611 500 389 556 333 611 556 778 500 556]>>
endobj
449 0 obj
<</Differences[ 32/space 44/comma/hyphen/period 49/one 51/three 58/colon 65/A/B/C 69/E/F 73/I 76/L 78/N 80/P 82/R/S/T/U 87/W 89/Y 97/a/b/c/d/e/f/g 105/i 108/l/m/n/o/p 114/r/s/t/u/v/w 121/y]/Type/Encoding>>
endobj
450 0 obj
<</Ascent 716/CapHeight 717/CharSet(/space/I/m/p/o/r/t/a/n/colon/F/e/d/l/A/u/s/S/b/c/i/T/U/g/C/L/w/f/Y/W/R/P/v/y/N/comma/B/one/three/E/hyphen/period)/Descent -174/Flags 4/FontBBox[ -170 -228 1003 962]/FontFile3 451 0 R /FontName/KDADCL+HelveticaLTStd-Bold/ItalicAngle 0/StemH 118/StemV 140/Type/FontDescriptor>>
endobj
451 0 obj
<</Filter/FlateDecode/Length 2914/Subtype/Type1C>>stream
hޜViTW���׀�U�B�[�K!�(*��Dㆊ�K�h�E�iPQCL\h�
��(�K@�q	�G��$�ǁ�G��D����"�=έvə�̟9}���ջ�����w�v�T*�aT��記n��sr�ٖDSL|\vRА�9I�c_٠���r����5o�����>Q#W����;߱�7���T�ڬ����g��JΖ��������α�2����+�Ü#����"
NJO0KqyY���,iDZb�5#�j�6'��ϙ#9A�$�9�l�Q��b,i��yfiXj������%K2I�VS�9�dM��g�E{P�,����$K���l�&��!���lɔ�$ſ�;s�%��\L5�I��G'���&��N0Vi�\�%+ɒ�mIO�z	�fJ5��t�d��|Z����${��L�HI��3���څ��8/�3p\g�_�r\���`���ʅq\8�
a�H����4���F�sc��\6g窸���U���e��ݥ���=W��t�c��X�J�#MgM���j�3m��Nۤ}����{��<����+=n�
�������*����e-��e>�#�DwJ�� �ıZ�`ӝ�!i��#����NW�*�r�f������}��g^�6Ѯ�Yq���uxR�[����W�@���
ۙ3���L'U�����M �������e
j��e����`�}�����0Ԟ[�#�o
����8%��N�[8`�9.���w�v
�0���g��_?�Z��e]-i��{7��_�C �;��Dvǿ���6����ldfψ�&q.�D�2d���A[.U�L���m��6UEK�+�B6��E�W�$hp0�ҧ	a0R�B(b�q�GQp!��xh
��ֳ�`'�!���Fo8� `�潟w��t������?y�������tp�he��� ��͊bJb�&�VC$��suy��f�1���oy	i��\["e���>�S8_G/,F;� ���_A�j��z獛f@~2�� �<9x�V��(3���1����\�_Z��	r����������nU�m���L�� �i�yZ{J%O��V�$�^X��0���Bb��"������)�t$h �k!MX�p��L�!/ɥE8J5ؒ���2*�,h�@B�sJe�
&|a��S�m4��|�W��Vڻ{҆���j#ɷ�I�x�z���M�ɤ^ 쀞\W��^5s���YJY��zЧT�n���n�{��D2t�8���x^ �������持T�\2�J�x�R;~�{ S��nP~26���v�$b�>M��ie_�O��<�����ǚWĒ�2�?;��!���cS��1��8��󢱽�q�
QQHn&u`>�Bn'7�J�\%K�:��n�^�ͦ�A�E1�Q�!ȑ�����:n�CQ�I�mQT��=�E�z0��F �
�:�AG��B��G����to��IfeG�@t+b�P\7�>v#�0]�>�Y�q��E�ܖ��w���E7��9Z/�0�^+8�S�q�>NY#�GJ
�P%�y�#v���Nkp(�#N�� P�������j�*�x��s�%rGڣOu$�P����E0�m�e�.>�rYljF��eF��Մ,1�W�ף˵�W~����v���0���t�d�V�?�G�[_?2&qt���PþuGJņ����k�t��A��4��"m���|ji��7�\��v
I�t����]; T�|y�@���%}����Eڱ;N�4 ���C���l�b�k\N]���
x�vPo��IT�(X��EwZچ3����j�u�$�*#tf��ݡ�m0�0�¤}tl��OTH��D���	K��sM��
���1�%i8Q��cQ�d�p��n�^����$	�>8)*L��}����2�$��:�%�'ڒ�yK��j3�����Θ?M�0�Qx�Ix� T�P���Xf�#up�[��+z����h���^�l�����4̾(מ`�6ք.�M�h���I��8����I��s/��G�ޗC���:`�v�Ć./3�Kx�ع��jc�r�(m�Y�"�o���H�E�*p�
.(_
A?	Ůuh����m��#��
�;$+����K�r�H�O��]�6}��F�dM�F�Tf���^u;W0;���8������/xx��"z����j9+�p�Ʒ_Rlf�x|V�'�����yd��w�WN�&�������1�E��\Ԟ�|���;3���,Ϋ3N��iT�zy�Kt�ı)�"!6�Dl���W֝�]4"�%B>���-K��	��Ќ��zc<ƃ�|�#4C��~��lA�!g�w�\�=R��F=����y�S�t��@Wa2�nV?�8΋d�t�J�Ԩj�m����wN|���)�y}����2)n�T怗m�M)(�t���쫊s�ZW^��L��Z{A����/e҄4��wD��W�)�ߞx�R�m>DRqP��\�m��0|J�@#�
�φ�m���;��z#�Q�*��&hm���@O�
L�����W��il,�eY%���7��)>���)��/*�"6�7��Akq���۫�O�+�}wE�a���mF�����s��y*ٿM�r�:2a|����3��x��k"\��GZ��8��/��.�e΍%�B���c���ϐ�*�]�5��z���5؋A��FdPm!�#����;`MK!?�e����uaO
zC��`'霄)�� ړ|]�)b���N�٠n��Tk�-��g
P��燳�Ov�]3da��ɆEv��FTkWTlZ�� �
[�3F]�ءv��gr�z�^V��aj��U%ڗO*�!��|�f��3׺��Qy��^s�Z�6��n� �ߔj
endstream
endobj
452 0 obj
<</Filter/FlateDecode/Length 336>>stream
h�T�Mo�0���
;� ���B��M�aZ��i0�Q�����q�mH�O>^�'���w��!}
���]�ڀ�xሧ�A����|�ŷ)���i�a��*I�hs����,�2���%�zw��!������/�͐A]C�]�n���������T��Wc��o,�Ɲ*��P�u
���{	}D�;�لD�f��Z�)��W̍���XG�@l���(�@�%���f�j֖�%�����3��S|W��)��bEv[�͂-�JY�\Ok-EeI)�J���Ԉݒ��9A,~��Kn��;�5.މ�nI��vm��<�o :�]
endstream
endobj
453 0 obj
<</BaseFont/KDADCM+HelveticaLTStd-Roman/Encoding 454 0 R /FirstChar 32/FontDescriptor 455 0 R /LastChar 121/Subtype/Type1/ToUnicode 457 0 R /Type/Font/Widths[ 278 500 500 500 500 500 667 500 333 333 500 500 278 500 278 500 556 500 500 500 556 556 500 500 500 500 500 278 500 500 500 500 500 667 667 722 722 667 611 500 722 278 500 500 556 500 722 500 500 500 722 667 611 722 500 500 667 667 500 500 500 500 500 500 500 556 556 500 556 556 278 556 556 222 500 500 222 833 556 556 556 500 333 500 278 556 500 722 500 500]>>
endobj
454 0 obj
<</Differences[ 32/space 38/ampersand 40/parenleft/parenright 44/comma 46/period 48/zero 52/four/five 59/semicolon 65/A/B/C/D/E/F 72/H/I 76/L 78/N 82/R/S/T/U 88/X/Y 97/a/b/c/d/e/f/g/h/i 108/l/m/n/o/p 114/r/s/t/u/v/w/x/y]/Type/Encoding>>
endobj
455 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/A/t/a/c/h/i/s/e/d/u/l/b/n/F/o/r/m/five/four/zero/N/R/comma/S/p/g/C/f/period/parenleft/x/y/parenright/w/ampersand/B/semicolon/v/H/E/D/U/L/T/X/Y/I)/Descent -168/Flags 4/FontBBox[ -166 -225 1000 931]/FontFile3 456 0 R /FontName/KDADCM+HelveticaLTStd-Roman/ItalicAngle 0/StemH 76/StemV 88/Type/FontDescriptor/XHeight 536>>
endobj
456 0 obj
<</Filter/FlateDecode/Length 3244/Subtype/Type1C>>stream
hޜV{\Te�?���c��1x��B��������˪���m@.�Ь54�H�Y�y	/(J���n���!"b��d�)���3־�m}�O������;�}��y��sX�eò�ϼ��ؘ��s�����Y������r��9�s?�e�S.��C"#=�p���컩90�|�y���3<Tè��v�o�gcr�JMY/�(�M���\���5"dp�D�������5uɥ����ܜ�\S^�I_h��E�^�Z�3��"'���R|VNnai�Q7;�0������^Wh�g���U��̟�c(�`��Bm2f�rt�+��烓�uIzN�N���K��;133+�8H�֗�¿�N7�
��7��1�V�1edd�f���[x�>��+(rM�,��j*>��h�%'�JNqn&�2����k����c����0ˌ� ��0&L�Lc����|&Y`��a���c�a��`&���Fss�x&�Y�Z��]W��f"

JIdʙV���ǆ��)v`��!�
�U
S����UU�.�.�\.� 7�;�{���	�U���o]5�ϸ���������;���^��3�wh���=�<�qj�b���u�U��dOrl��,�tx���<��	��v��/���H�<i��_�ܩ�؍	E��(f����e{��'�(����k�� C��|$L\ j���
���$�g>��S��t	n�Q�
���s4��I��8��1�7,
����r���@u��~����ry��P����?Z����Ѿx�����u��}p�OE���K����o� �Bl��7�4�b���~�
���\�~�wW�rX~V���ֽYQf��b���HDI�1d�Lo;p��#��B�0�(R��"��fh� K©Y���Jp��`�T�0s9w�H����;�S���y6��/^QBx�X�_k!�<��E�ϑ��}Qa���J!-p���ŚZ��b���)�k�����#���#w�"�wA��\?��9���n��	�ݚ[6��oB�}���H�i2�	[��`?�*�_xz�c�"��Y�WIgc��s��gu����y�C� �^����/r�"?�y��鲰g�U�)d�kA��Z4��c>�I�0�C��
�O*�y�\�lv�g%�<�}x��?,D�E}����t�]6��Wuy�IַCL�t`&*x���K0���!8�F<��x��6X ��Zl*�H�8�@FZ#!�L�8�^��ڵ���`tJ�Ђ�1ǫ�6��b���b��F�Ra�$Br���1X�P���q���"�����r��i� ���b�(f͔��H��8����nE�d�Rs����d��G$
�}���tT	�utp��
㝌{�l7l��Xm��-��zj>�I�ӓ��g%�U#[����=|v�ƺ�'_����~��z����� toBw{�0��]`#��T��(�Up
5`I7�ӭi���G�F�I��&�[�8s&A�Xyn��Y��+��=�K�d�����Ecz��Ķ9�pk:<���z�>�O�����8���7�y�m}[��+P�Mv���aaa�MUk�����������fW��N�+�P�:��o�t���h��@@�n|���_��/�L��AN��qʦ�S�'��<�>�>���v�&�ue7g������{a�U<�	#�|���_�}2;e��E
�-�Яt��4������Ge�$�zw�gچ�׶�)/�����t��}
|(�7�֣�=�e���$�l\dj�ܜ���^�9��l���kw�R��"��	s�5�^�|�Ė+UB�����¬V�O�xT���M��
�
�ŲG���IlAa����I�����He*�g;Js5N-3�Q��!Z�_�ݰ�Gj1�9�p
�A�����ֽC��G�-JK��5����c��uB�K��c�p�*��r�0��+6p���/iQyy�G�V��Y?���q���������v���Z9�I�Ɂ�� ;�Ìv�dO���^��p)cӒy�Z�EV!�G����G�엯����mW���������1��ٛE$�&h:Y�Uu$U�vE8U�����͛wɝ�붬�N^�³�Ę�7�V�J#�n�j���ujN����O�w�����F
�Ů�
��L��|��-ek�a~5�uAE�*�_�èK�a���E�@�m�نۘ�b�jڈ^"A��#Ӧ�-\i�+���G+���֩_6,����VA�O9�A�g?��N 
R���ʓ�]����;sc���6*�W����ʊ5��<���>b���FY_�R��&��V�!���ߺ�oI���V�^ ߃��V��$M~�,��x���	�%J/��
~T��j+--?)2q	�'�{go�S�p\;߲��,D��T�Z3cfi�]�U�:	�f��yi_Ђ6
|1#���r�W�;��h@�z���mD�|�j�aEH�ѓ����/K���q���<�TG�d��*>�����}A�I�EN
mN
�����WV|�X�a� .I�֏����bM� �Umظe�v�2C�
'��;N}��	9�̶��F��d�.���v��1AQ�9�y�T����]rp����L���KW�6�S���:�t-�u�O�'�=����f���<�}�c�P�NY�EVo0ϛ,�d`�3꧂_������{�����������B��&�:��9���5׬PaK�Z/��M�x6je ���������nfǗg�5�U�X�T��F����l�9���΍�!������;��vD��" �3�<q|G$:�8�^��5Z�j|�
~,���~����;��@*����ц}����H�
.�>	�`;���0�A�`����t��Od1x�b\�pe��"{v�f1���m�BA���8J%�7�[�-(ݶu�"�E
bcy���-p;vÊn����� ʕ�[����e֜�V�����L_i����y��Ѓ�h>�Ѣ�G����]<�燷�/���0Ә/Ë�(5^�����5�%����4|
BF|���7�7~gF:�%N��e�<Yl§g�x�Ƨa��?6��E?��������	��ӁѾ?�˽v7�	^�o9t��7�.���P�ë�-�t�p�F���y<ρ�.�G����4������<�Ր�]��fL��nfw�Px�I{��/ O�P�
endstream
endobj
457 0 obj
<</Filter/FlateDecode/Length 334>>stream
h�T�Mo�0���
;� ���BںM�aZ��i0�Q����٘u�󾎉ow�;׎����q��uu��?�p�S� UP�v�g��v������0b�sME�o�8�����Y>�er�K�1���C��A����/�Ѝ�@YB�Mo�*�\u�������4O�2�_Y�;!*)�XmJ@W�_���86��
�(��b#l�����3�g�ώ�w�Z���Z��������g_)�Pk��d^s6M��Rs��XKM�`��fK��s�S��(rV�a$`8��:W���]���(@,K�|x��k;�9��t	�NpZ��{�{�G�o�-� \��
endstream
endobj
458 0 obj
<</BaseFont/KDADDN+HelveticaLTStd-BoldCond/Encoding 459 0 R /FirstChar 2/FontDescriptor 460 0 R /LastChar 132/Subtype/Type1/ToUnicode 462 0 R /Type/Font/Widths[ 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 250 500 500 500 500 500 500 500 333 333 500 500 333 500 333 278 500 500 500 500 500 500 500 500 500 500 278 500 500 500 500 500 500 556 556 556 611 500 500 611 500 278 444 500 500 778 611 611 556 500 611 556 500 500 500 500 500 556 500 500 500 500 500 500 500 500 500 444 500 500 278 500 500 278 278 444 278 778 500 500 500 500 333 444 278 500 500 667 444 444 389 500 500 500 500 500 500 500 500 500 1000]>>
endobj
459 0 obj
<</Differences[ 2/f_i 32/space 36/dollar 40/parenleft/parenright 44/comma 46/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon 63/question 65/A/B/C/D/E/F/G 73/I/J 76/L/M/N/O/P 82/R/S/T 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u 119/w/x/y/z 132/emdash]/Type/Encoding>>
endobj
460 0 obj
<</Ascent 716/CapHeight 724/CharSet(/space/R/e/s/i/d/n/c/y/I/f/o/r/m/a/t/period/C/p/l/h/u/slash/D/P/x/b/two/zero/g/colon/one/three/four/five/six/seven/eight/B/z/A/j/S/E/emdash/O/k/q/nine/T/F/M/Y/G/L/parenleft/N/comma/parenright/w/f_i/question/dollar/J)/Descent -180/Flags 4/FontBBox[ -169 -250 1091 991]/FontFile3 461 0 R /FontName/KDADDN+HelveticaLTStd-BoldCond/ItalicAngle 0/StemH 100/StemV 130/Type/FontDescriptor/XHeight 536>>
endobj
461 0 obj
<</Filter/FlateDecode/Length 4846/Subtype/Type1C>>stream
hޜWy\SW�O���D���EL�K��.E��JW\pc� Q�P\�Ȓ�$ �F\[ĥ�� (V���Z�Xk�N�CG��G/�sX;���f��}�y�ͽg���=�^���F"�J��gN�9s�[s�qi�T]d�_`@jԘ�qQ3��)o
�Ig;a�'�
2�X���^&(|�(�AM�)���+Ob'-��6F���HL�H��Ħjƿ��x�$���{��{��轿禙0n�ʹ���& C����k�&D&�$%���j��5���4�B���^��&��5��S3�����9�A�+\4:�&\����OY�I��}�4�����m�F��I��j���5���TMxB�&���E�ѺHm�`|x���Ցڔ�p|&��͚�St�(]d�.1A�����x��aEb�F�ġ��V�?�;; P�x[���O1�8J%�D�O* �t��$���1v��6O�d��d���(�h$�|�t�F�*)u��;L��J���m�K�m�%�ibV�IJ�JGHWH?��HK�j�m��v��I;7�;�E�̲T�-=��3�L?f.�4���K��h?��������W8�w�:\0j�����/�ɯ�\4�t���?q|2H;�t���:�;��ubG�����A�w��;�н��@��\��T(�AE4��񣧘�V���T�ߔp�߈�%�ȭiUiݯ�$�Zp 6��p}^�y��X�?��	n���������f~�bny�ySC(�4+�(N��̰�4�R\*���gp���{�^ob �f�%�7�肔�P��{M{
ח��N�_?��7�zLT�k�+��y<��K�N�ߠ���Qm/�w��Kρ�-�t�r�dXE�+ɚ��~!��{�7x���WBU-0����%.R��	;�_ӕ�&����{P���^bG�+IU,aqQ�H���
�O�?=w_	q!._�֠��y��S`�\��h�Wwv�4n�f��P��}_�6%� 6B=�Hπ���ܽ��}GUu5�{����¸��U1	��/T��L��N��n��<�@�D�ĉ��d"/ߛ&�w��҉�t
�tg�R���ɣM��B�P�a�y��8IX� ��67�:[� �r��/�)���&�7�$�b%^s�i0�6����shہ�jՉ�i�3��U!j�����lZˈ�A!^����&rT���:�>o�+w��w@]�a֦*gYfL������^MM1���T�W�����0����}��6%����#�/� �7Qg,G�W�>ۛ����P'}�֚`dpC+Z�G
" NP�-2i��II�I�aV�7�����/$ѽ�_������/^X�$ {!ف
�	^�3w����V��q"q�S�M�(b�gޅ%���L�i��)0U����?4�C�v�H�^�S���2؊�?�����jl�;0��q������<��].��~+�3���&�'�r����6��4�#'����NX������O֧��Ж���w�2lgK�EkNa@A����^
�FEFΞO���n�<�]pe��f88G��x��d��%d�r2&�L`��*�����a
8��U��<����j[�����@P`.+�)�z.Dq���4�׬g����g[�g�P��_����=W߸�T�Ѫ$�U����Wr�o]B�U���{�D`�p<A�|��ݼ��������DM��Ov(��Z���F�K�lᆐ�-(�>ۧ�n�_�\GCn�L�h6s0Ӳ�d����r4YL�=�۾U��Pz����K�o0ԙ�3DA���w���
F^������7E��^�K��Kϫw9�b�#�l�IK�Z[���xPu�)2�;[F�P��y�
�m\q����Zs����!c�,�-����X��8�ѹ`]E�HcH�+aoCg��0d�+������f���:Om^�6S��oMP��Ѭ�F]1�HP��7���_mѩ��p쳮���K[jj���W���x���Ҧl�;��$���p���=��� ��2����������,	�!а�5�ǩ���_VC}1k�
�>n��U
<e�0�o38ϺBY���'�j
MV��7!�g;`�g�`h�ڼ�\f��ȡX�_1�7���j��p�G��ݳ�,�e.��Hl��c��5j���m#���}o�9��0�2��ԋ���k	��"��Ub),ƱM�܄��`��?Ϧ�Jҁ31�����8+Ƕ�a�,(FD�AN-z��j��{�<��~󫱰iߡ?`l��w�	#�Fb�I���̚�������G�E�,ޘ��鰹&��ZPx���ɽ���a�E۴��l��y��t��.-�_����g{�'1K�]Xנ�~��ӓ��3�7�§D�s��0i��6W4�����9]z]�&V�fg�s�d�=T�}Mz
4�TT	Y�2��l�Q0⹷�>���e*��2`?�$YbC")�y�9$oyδ!F*�▋���c���^"���.�Cx�n����9��3��EӋ|#�y�ØX ��7ĥ0��d���Ͽ�{;�2"��?<�n�|��)C��IL\i+h&Q�����2xV������T�+������S��'����1`|ӯa��0ID�g�����]��|��q��>T��\��n6}���Z���W��"@B�<9�K��]p�D"����@P5��
����'�Y��g6���+��
c�Cp�E���_��FJ�G/k���s��S?�2�'�{ѹM��vO�&S��IJ�����qm���g1Yy�d"��j�!l*��M[���U�M2r�,��3�R�n��s�M�hʞ��J�ĸ�<�p��M7�j̤@�(/��>9���axۆ���<{3�ػVV3���kQ6����o�Νc��CΈ6�m9bϝ1W�a�+��EW�pD����l��� �g�����
!���搩����7/3���6��v����I����8�#p�`C?E΁���G�kKV��b��I�>��FӶ��U�{�S����LO	Leز7���NI�ϖ>۷�xG�z��Q^QV)�9ĘnN/�`2�
A�]���B7U�����P�������3M�t�+�+В
X�~�ꍖo[U��Kp���2l�T��ն���,��"��%]pt}������j�
06��$K�9v]r��|в{��V�
]�Kz?�B$�WOo��V��N&��d>MF�]]�
��m`�>G�t�*St�)�h�+�00�n7�4��e�Y�~�����ʍ������T�������&��2y�QM~��4)H�i^o��TrslE�i�1$�@�2$�fώ�V��6�h=Z��AEM0������6A
G<
�3a�
�����"j�ecl�**q��&�w��6
��~"s���7�����n44��+��7�!�X5ݣ?�,�
�~%�(݅GW�%�%�
�m���-<�
u�r7ZN��D���]���m���O��_82��� �zb�y�cO����*�}�G��Xx4��#��S��]����}#�ֺ����<z��Ձ<{b�F���(/�(�d�R����H`=S@�B�x����F�qkL���|�ǅ�NMS%�̍V�@b�qhM��K��)�V��i�1\�c��,���=�w��UC����NU�2Wg=�\)\AavtbF~�����ѯV>��x�A��C�^�K2e�����22�"I���\Y��E���Z�K�����	z1W�g���5��.Z9�zt��.[�[��%s!�O{\�!����|��h�2e�T�՘t��/�5?B��9��i��PS�qiv����7I���]��]���w�zaf����_�e^��(&��C1���#��k*hno+Z�#�g��/��=�η�P���7�2�L&p$A*��H�iR�Ȳ�I�me��+
����"_R��[%�!~�X,����{+��}���&֒�I��s�96](�O&����	��RO'���qV4��
#�?�;HL���Zd�9���_`,Č'�a� ���N�P~,!$BL��p���;��F�:z�)�ǰu�֯O]!��W�jP�����Q
9���v��T���,u����5�n�����>R��U�=�~��πFS0���*q��7{�۞���R���
ٟY�aY;$�49)Zix�
w\9��G��huq�1CO�?
��d0����DI�7�|_�ԧ�J�歃K
p��
��<{a�[wd����W

��I4�r���=��J_t�XZ�[��	�$
D�D�G#����r�Pί�NJ��*r�d����O�-�L!UZ��t�)���S@	�2<���G2C����2��?�s�yI\i��c��$�{��2E�}��z{uё!�0a[Ҏ���psEW�"dĕZ9"7#73?M2��畇�����	����t�"��M*B0د�4Ɋҋצ+c���lқ4��I�~��z�Ўg)ʟ\��	�A�y
y
�
�p�E~��K�tI+��V��r�c,�I���
��"��{0���E��l� ;8���b#npB�S�s�� �9Y�}��(�^f

��:�H�A�|ۇ[�N��.Y���fۂg��S���T�Q��N����=P����b���J�}�"�<{�p�|Ɉ5���g2�XP�}e�:؏�Y�xpY%��*,Tw��X>� {.���	5��R4{�_�<�|x׮�ٻIXE���u�K�HDYS�����c�ٯ������S� U��Y
endstream
endobj
462 0 obj
<</Filter/FlateDecode/Length 343>>stream
h�\RMo�0��W�ة� 
�Ji�V��}h�v�v��tH#D���g'�놔���~~đ���ִ#�g���д�v8�'�xl
�	ԭ���uWY���;#v[��PB���0�3�n�7����䓫ѵ��}��F��d�vhF��,��F��Ce�A^e���!��x���8�J��������*M��Ld!����ʉ"�(2�h!�V�u�k��ņp����@L�TgR\��rE�䠐E�$��qO��	�����h"Rl&
N;J���`��(2��SOd���^4��R�ϡ�,��99��*?���ϗ��s�1�|G����{����!� t��
endstream
endobj
463 0 obj
<</BaseFont/KDADEN+EuropeanPi-Three/Encoding 464 0 R /FirstChar 2/FontDescriptor 465 0 R /LastChar 2/Subtype/Type1/Type/Font/Widths[ 556]>>
endobj
464 0 obj
<</Differences[ 2/L50188]/Type/Encoding>>
endobj
465 0 obj
<</Ascent 0/CapHeight 0/CharSet(/L50188)/Descent 0/Flags 4/FontBBox[ -5 -295 1161 1000]/FontFile3 466 0 R /FontName/KDADEN+EuropeanPi-Three/ItalicAngle 0/StemV 48/Type/FontDescriptor>>
endobj
466 0 obj
<</Filter/FlateDecode/Length 239/Subtype/Type1C>>stream
h�bd`ad`dd��vqtq��v--�/HM���
�(JM�)��a�!��C�GL�����w˰t��a�n���Qp��B!fFFv�hSC���ʢ���dMCKKǔ��T������bϼ������Ē�=ǜ� ��b����Ԣ2�(�;��Y�����80��q����ߋD�~Q�.�]�����7PDI鷨_���ʙ3���������yӿ�u��.�ξ� � |`Z�
endstream
endobj
467 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 468 0 R  6 0 R  469 0 R  8 0 R  470 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 429 0 R >>/Font<</F1 430 0 R /F2 433 0 R /F3 438 0 R /F5 448 0 R /F6 453 0 R /F7 458 0 R /F9 471 0 R /Xi51 106 0 R /Xi56 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
468 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
469 0 obj
<</Filter/FlateDecode/Length 5319>>stream
h��[ߓ�6�~��OW�V�%~�wOc'��\��e&�u���D�Ȗ�	)�v���@���N���*ǮRh| ���	I�?%�}�����
��$� ߒ���/�W��
#�%{r�Ⱥ\��Tgds�_���q*��pus�?W��T`T�\��,�T�vl��aI֔��hZt�u�4�6�&jV.3Г�U��(CguI��WR��3hVĜ���X��Uq�3#��I��V��41����՟_q��vw��)�}fD��*1� �F�ۍ���*��o����
Tf�2�%K���W����c��
���ER$��nEVk&��%���q�5T��*u��K�8M��7Ҡ;T��e�3���-槯n�b�uQ3�Y��0'Ds�f�U(�d~��u�B�)�����Z��W2�0� ��u������~7OA�S0=9	�s+�-�2�oJiW_�jɘ��v�%;4/f{i�zŞ`b��֌�l�-HTy�^Ѫ���P�d�KZ��P��J��~i�_�X�޾��mH�,�-L�P��J�������F�V�S �8��������8�lG��S���>bZe�W����o'�t
�v����v��Y���퍧����[���$lEβn;�خǤ+�)�u�%DWBd�q�>�H�4XA�P��J�����}�ni�W���g}|�)|���!>����v|Ѷ�竕�l;�|	�{�4�~;A�S��e���hǨ};A�S���Ў��ێ/�V}+�)�3�3��7h�Pϑ�`�t�ř���']�����%Ԣ�b`�`q��x8}!��D����P�b�a�7\u�)
ea*�m�aX�Ö��)	� ���X�[���x��K%q�2�L�1�ע_F%����k$��;���$X,�?G��^>BƇ�DL-�Q��L�hcA��������S��F��2L�h���. ��Nf"�
�g�D�>�*��(�<O�l2����@H�&�!�%�S�yI-��$u-���Ȉp�"���}$��؂ =�ŷ��bW�2вg��H�tI�tI��E�Qz,��	]��2zQ=�Β})3�KlA���y{6�C,M�X� 1=A��l�`G]eK���؂ B���s~>����豤�B<3�c,��؂�Ӄa!�?��y��G�����cz�,�{K[�-m-���)j}�%��p��/WKԥ��K-Q��x�D�uL�|&tY�^�f:Fy�pi��z^��
j�W��F�~	��F���p���wI����T����큡=`�d����D���R�y���si0�����?����nb���M�g�`7�C��?���i�7?&�`�V��4<�w�>g�UӬ�}=�	mr���\����#0���U$K�t���&�؁�/��G9�>��%g_H�9'�^��\�v�f��l�)1���+t3G>���_�>U�Ņ�2�]��Ϧ5(�n�"B{	���Sf�s���u}ݮ������� U�������������v��8��I�s~.�Ml5D���Լܒ�i�Ⱦܜ�9���fΦ&5�ɘmTzŃ+��*"M�l��s��F�I��F2V��,V���(���PS{	��y�\qX.�$�n�Tp�0�W��~�;�4����s�[�d<�a��va����,6��D�Z��tm�D�T@m+�$���պ�j�ʭ���ŵ��iW�vݭ�S������)�`7�7!�Ĕ	e6��b�b�1��M2�눰�Y��N�Q�wb��r���ׇ��T~�}�)�?ۘ���\]6������:�]���f��pOQg�&��m�n(��]�^��^29�v/!��r��С'�F���R�d��GOR�
�IO�9ht<�](>�B���֩yq��eQ����.:���n5��LZz�����刬��X����$X���y�z��!F/�;t�s��`�С�b�C�ޔ����Z�K'ߝ��<�`�Z3W��K�t�K��ޞ	�Mܟ͞�(��Y�'!�An��y%��C
^c���f���Ç��z���Vz��I�ح�L^��u�!��Y=��Ջ~(�s~ U
{��N��y_�_���:�EU?d�j�����A���*�!�S�t�r~A 4��y{q���4X��xpـ����T�7�
���7���1z���C/P����`@�(�&
��Kj/���pum�1|,�@fMૼ:N��Z�-ھ9�NMռ����V���I3���I�w���I������z��!F/�?t�������5"�??�S����t8}8B 	���(k�9f��\��d��%I�yc'8zc[�1���	3T���	s���Gor�09�1��5l��77
+�������|z�ׅҩh�1q�`f����$V?X�¥�_����e�������[��&�6�g(�6x�h2�W����BiV}3UQޟ�f�l� T���U~ eq&��-��DU��0�e�&�f
�Q흅�V���P���Jh�`�'U�����ɏ����a����H���8����}/�K���`"��L��9a1���A|腰1z>l��^[���,�
,��& f"?gM6}�B��F�L�E��e^n���+���gG�i�&j!�c���1eof)[��]>���'Ɣ�<O����,f��/�=o�0�:���Ì^0xHЛ3x��t��llB����c��N�^��b�P�"��b�/����å6�U��k]��@hW��d�Dd�Ƒ0)m&F)�g���T&�����T�M��}Jb������$�''<������.��R���_��o�4��	I4{sfS�[�oJ)�oJ�`���6
:�'�����C/xb�����<1�Zk�XS�v�Z+�S�Y`�L��Gջy�	z���f�������vyxޭ�>��ۜ|_TǼ4��.�l�?�E���n�g�m����Ʊ���^a����0#/ft�Ì�`���7�4�5��2���L����H�d{9 O�Kj�[>��6���<�P��9�f�� /�
:�� F/�
�fȆ�?��/E�W�_��������j[�[G1��̵�j��T�3�~
ϰ�5���T�=O5���T��9����̀jTrx�uH]o�7�oS�Τ(�{�Cv��<U����� ?HE�3L%惪)���y�o���M�޵��k���7��|���7HЛ�e]j���Ln4��`oΧ�[�RI��LbU�DR|�P�LF쯈��Γ����(�wR���wR�����@������@�HЛ�l���}��Fc�D��A  U]r��U�R�9?�D٧��O%<���C	"�l�w�����7;
�ʷ��:>���L�Ua��F��R��¼���_G��iüR_6�$�g
�Y���!ͦ!����օi�օ1�������������HЛ�G��[���}zԽ�:�T�����i���u��U���6?�đ����P��M!"S�Ǜ�^I�)��T
O�?���K��0_;�:�SU����T��@U��T��@UHЛ�*�z��Ͱ�˅T�^��bc_i���E��ʜ칤n�;l�Zs�s�$申��2��sX��f���2�ܮѼ�kN�j�\�l�9s=�kF�i~�h�f�il�&l���-���-��O,�O���^(�n"���`�7&t������	~ʷo.����RKo=����Q���֓���D��0��:��A;f��A;>�|t�=��C�Gg�����挦0F�f��O��j��nWZD����P���>W����8u'�yI�_|�Us�46��fs��g�6��>"a�5�tt�j3�i�r�4o99~��Ѳb�{�C/�b�{!Ao���e�ԲW�g/�yC$�q\r�j�)xT����tȫ�q�d��w��pzg�U^��cq�L���А=7�|U�t��Ŗ@��߈s�o�d���c^���j�)V���Wf�G0�&�d���j���/�{�Kp��>�}��܇��}��܇�h����j�LeR��v*ύ����uڑo��~�ﷁ�L��;�w���2��Ӎ�,ng8��f_���rؗ�99U��v�L�c����g9��;�Q�0�3c[u��_Xhd����]t������hr<�b�ϡXfg̡����hmw�4� S�Y��ŷ���\�.���b^Jp�n R�O�軠@����T�t���xt[슪��������:P���|:�w�<���ˣKI3G�DN��&�r���ۡ��ӣ���<	����vG�hb/�$:�I"F/�$��MfMm����54��i�?5)�:{����żZ�$ڀ���s����7C9|L9�y�a�c[�+R�A^�t��A�^�$��Q��Rse)���^�uc[)��Ώ���?c�;>��½�n�ݸ�&�����^��W瘡kn��a�/�c����a�
b�}B��7O����	v�Y�/t�
����+hмϮk��?"�{}/M'qBm}��w�$���~=��z�u��i�IH`����cu�<<6r���捼t91a�^n�d�l��;$�C���!A��wHc�t�y�1v�!A��wHc�$�
�e0��^A'I��Խ
�O�_��3�no
�^�ڿ��]���U,�W�R�f�Xl/�jܵ׹w��}K�N�	���¥�O�v�J'���S0H0�:� +���̊��xe������|���\[���=0mr�]t^Q���V�7õ��I4_���MM��n����KEv+�h@�M���/Ηj�f2*��0>���c�b3�4h���uts�?���9
^�T���)�ak
���k]:��$��`��~�I��J"7�rS���Z�O�̸�½C[���xi�_CM�#��i��,D�ْ*�C�r"m�o�]���;�ԇ�׿#�	#�$��*�c��$FB 4p����]��󉻛)N2:��~���i�Ƹ�q
�8�0�&_����Q���ȊB�a�f?���W\v4r�S"�R�a����[�b�pzE:Zҵ�6�n�9�JL����ޏ���UY`B	]���K�햄�_��M��m�FY�6��/��ܬJ��VIoR���Ti`|fN[��	�\�'9�ED�x��s]s���1���!m���+ =��k������N�:gOc]�M�ĝ*�QĢ����UZ����Y�50��p���~%;��T�n���	�f� KK�a6ˤ;�v�!�q4!ߒ��`A�����k�L�������|�8U͔�ǂ+��C���4��  ����
endstream
endobj
470 0 obj
<</Filter/FlateDecode/Length 207>>stream
x����n�0Ew}�dMQ�kM�Z85��͖�__�PmM
t��s��K8��i޿�K��f����\٣�0_��x���
D�|�=9�:�`���y9S�D(�J[����.TIė鋴���d���p�K�
�7�Rc
mi�A_��S��Tb�5�'_�@�̷�d��t�z��xx�q�o��k៵�T���A6���7�|a
endstream
endobj
471 0 obj
<</BaseFont/KDADGO+CourierStd/Encoding 472 0 R /FirstChar 52/FontDescriptor 473 0 R /LastChar 52/Subtype/Type1/ToUnicode 475 0 R /Type/Font/Widths[ 600]>>
endobj
472 0 obj
<</Differences[ 52/four]/Type/Encoding>>
endobj
473 0 obj
<</Ascent 0/CapHeight 0/CharSet(/four)/Descent 0/Flags 4/FontBBox[ -56 -250 678 857]/FontFile3 474 0 R /FontName/KDADGO+CourierStd/ItalicAngle 0/StemH 55/StemV 55/Type/FontDescriptor>>
endobj
474 0 obj
<</Filter/FlateDecode/Length 347/Subtype/Type1C>>stream
h�bd`ab`dd�vqtq��v�/-�L-
.I�*��f�!��C�G�,�X�ﾟV?߲~O���*���s!fFƂ�v���ʢ��CKK ii &
���4�f`�LZ�(*8��'�*W���+x�%��%����)8��(��.V(J-N-*
��T�*X(���!�D�}j���x��q��*{��������{����Of���������A�?����Ł���~�l?���X�A<��C�}?�����C�?*��~{yH��wk�߽���F}_��)��;ӏ�����d竕^9s��n3������`������>t��:���@� �L�i
endstream
endobj
475 0 obj
<</Filter/FlateDecode/Length 219>>stream
h�TPMk�0��W��҃�n�B��A���vwm%34�Q�C�}m7�6�$����$�͡!@~��-�,��M���[�r��T9�Ay����c����AU	y��x��K���nS�A~�A����T~}�F;y�)@u
;!�oʿ�A�a�B��#ls].2���+���G����[@2��;�����6Y1�8�t+�С'�(1_�%���� �|ڕ\\ r�k�
endstream
endobj
476 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 477 0 R  6 0 R  478 0 R  8 0 R  479 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 428 0 R /GS2 429 0 R >>/Font<</F1 430 0 R /F2 433 0 R /F3 438 0 R /F5 448 0 R /F6 453 0 R /F7 458 0 R /F8 463 0 R /Xi52 106 0 R /Xi57 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
477 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
478 0 obj
<</Filter/FlateDecode/Length 5086>>stream
h��[[��8v����xJQ[#q#��S�mO<;��{�J���-QnN$�������'�  (�"%y��]�I\>|� 8��kJ�U/n.�|M	%7��H��%Q�D�$\�Z'��l."����n���E������͏�n�,��א���L�'"ȷ����by��W�̴KIN.�y]	�BR"T�(M�zsAcB�Y_\_����:��AJ(���R<v%��K2�|�މ�J'`�RAM�٨(�(<�BnJ
E��C'e�19��D�iB(c���.V�_S�MlQ%L���037�I�����Y_.��8�׋�l�[g���RD߽���ٜ�(`cd�כ��>��&�t4��Ep�/3�{
2P���$� i��(N�,2S��9؛��[d��wX�}ۧ{�DSN���r��+�%FIhj|�ݗ�7��(Uwȡ��T��_Y˜Q
��͇6��{����\�P�$�M25�v3E�����e5�f�̙f!�������9:�������_�jZdԒ�l�M�9��� �D��*Q
'��h�t)�"K�6�y�qܦ%�ӆ��F����.3|�6(�%�`���G��Wf�;585�������CYF����� h�Q>F�fv�No���m<���Z���$FX����82[G眛�M�t�����ˈ���sLo����z�S��S$m�+�06��B�Lk��~�{j��֝���
�CR�!���^�UZ�YI�۪"K�u�-Ȫ�n�j[n�e@#�$���7/O"�oB��+�o�p�8f�o�w˚�Z�H6n�<�j��|�.�%!�?��=<A8���t'�������K�`��]v\`�p)��e���Tbk���e�lI�v��å�L3<-z�zj	.�>��Q���P�T@i���W�wq1߿���������']�u� ��`W�����Ha�NFv@[�lźle��=;������Qz�d�Ħ���U���(Vj]KMذk�	/v-5��n��"KMq����Դ'$�=���1jR_�m���ٜ�*�
��#t5ARr���$GI����F�Q����;�Q�����Gم�LxHu�!(�)N�XC�a��� ��f�D���u���B͙'��\m7�y���̹W�_��y�?������= CE
��]�9u�mF���X��_��#�o��)duj��}[ƿ���wAZ���q�/��uv7#yA�t�@��nS�M��X��u�AΪ.�Y��-����W�y�B��|��',G��ݡ�/����b��e_���K?B#b��r!��[.t��:�����_t�v/x��G^k���~$���Fs���+"��+�?�p���5g��T���������Y�kq�D�&�ɧ����Dc��t�.ўm+��S�sv��֝����nJj�?-���`uRީ�<4)��=��}�RtJKє�g��n�������&S�頭&��a ��
K��O>5-��M�˻�szЮ��o�Ң+��R3r_^x��k�󍛓����?�<��m�����c;���{��2��i�y8�c)ywD����k�>_���s4������%/�>_���s�
��< ��s���0'��S���P,QÊ��a�Q�Ϋ���kI�֩�aPUHY�A�b:<��s*�?L��àE*O�46����L�9���(D'e�gȤOʤ���O&�:�ٰE0�'d���LcyN�����2�}�4�*9G�D}p=�LQ?��>��	8��Xc�Nfic��QXٝKD��o,ϩ-��*���
F��d�'ebg��N�Ħ���>������'vR�X�Yɤz�|�j~$��"�@��C
�tM��yK�h��J~�n,��f9C\p��:@���f���H>gO�[���	�<�8c(�	v��L�'�Y���n�4���(�g0S� �P� �Mj
I ,��� ���v�G�0��Bt��%$��Vh��?n�]���7}���>�)�
��/�X2�Ccw��Knb��M��Z�i�-I��cVTYEL^
���	Z6�(�0�y�QF�R��"�n�5�c��_�\���5P&>UP
H��8veԀ�B����Z�Z�v��MΘ��*+�4/���ʋ���Sg�"eVe�ln��󪮚0ܨ��h2�(0!�y�e�2�H�U����*�:�c�ﳲ�dE
���E�����Ar�d����Te�SU$��5T��E�^3A���(���1�(�3����\"E��`GOF	*��L+x�Z'�i�GL�d�~ U��bE��b���^����n�'�LDH������ik+��.�|����s
�A
�|���N:���JY�`��S�?8m���j������Y�c�2��S�n��aH.����_�Ҡ�v�5�������-�&�;{w����i���ʋO��.
b�Zz�����EA�^� F�uQ��7墀"��!y9J�e��Y�ҹ#��<���,��l��g����ٮ�����X��Q묨�L?�ݘ�fC�FNs=����so(z׆�a�}�?K�����[�?A���k�	zV_�9�@H����n<ƻ�FRz�li6[��W?̨��	� �o���Wn�tl��o�t��r(��N�
�I{;7>ÿ��]zȻ�4�F��Fh�D�赴��������&�D�Y��Ը�m��>W=��-��veZ,���֧��$_�?_��w?�C�D�X?���1�'\�?N�����S~"W�9Bh�79r��CV �>�mA��\?���~X��S��uw� t��9J0<)� ~��Kա˃���d�?�Cs?<�?���y{��k�v-� Ʈ��u�G�Z2���磎yt3�e(6�)���%$\$a�;w3�u���m�߯ͣ�����	о��e'S��j=��G��A��	��\�m�Lf
��1͗!9�������.���:���UQg%�sRf��1ϊ�gR�IP���>׮V;���}}�ݡ�u�4L��7F$	�C���O��~�Y�U�IK+�W02���?���3����r��F���ߤUM�t�l:.��E6�{a�Ka1ʹ�7�:5W�������X��;ԧ�W�{K^�N�l��F����������ذk�]�ص�.2�Z1v������M���G�;��������n8����1�c����Oь��*>��}$:g�yC�]kސaך7�s�5o��lk�cך7�M�7�5o�y��wK��ަ�͂>�:��M�93Q�Ʉ����!Z8aBqi��Mߋ��3X�DH� ��kIv-I#Ʈ%idص$����Q`7A�Lw� �.��wl����\� �]�+3��2Ǻ�����jx_��a����Q�Pvs���tY�X,��|{}9� �8u�c&ġhZ�E����������BI�����
;O������)
�[
�
��́V����6\�.�U��^P��ᆆ~��8��$L=�`nۡ�>Ō^K��k�1z-5 Ao*ʟt3s ,}��6h(��9O�,w�3yL���R%ιX:��OD��Kj��`��Or�����s��U��,)�uZ�{Woa��nώv�d�2{ܖ&8W��H�&�r�!@�PCQ��/K�7�������B Ɋw�;� /�#��YnWym�X��9;��å?���mq?M�T�i!#����fz~�3z~�z�����E@�^�" F�u��7Ǣ�x��}�K�Q�����O�1��f�+�}fc?ߧ�]fF�����c����~H˴y�d�t]�Kx�!����W`n�3���39�ٛA���D6��`)���&�44��{K���RbAob�QE��my���673���n+�����_]�O5��ڹ�`=�wD�Gt9=���`z�h�f���B��w�0��])|�yW
3zޕ��K�J)K��y���>��Y{�l����6nb��w��l��gE����eVZ���O��*�wP��L�Pe�����6B�M���S��m��6N6m
�g`
8Z2C�^Kf��k�1z-�!Ao��X��V}2c*��+X�������ن}��j��n��̝nˈ����]@���݌��|{\�E5����������W�I�iN��I)�}R��y��>)f��>)>�Z{���C�����>)�&������;Ƿ���g���:��xH����B�YGc5����Y4��cz��&���$�=N���D���[H��y�;oc��#:�uD��7�H�����cα��u�-���*����b�+k�[Օ����JΔ�����}^�k-�X�O��z��̫E�o��,��n뙘0��ؑ�L��EflB���q�ä	��3c��>b�<����Sb�<�!�n$����<t��w�_��&��en�5y�vI�Y��EFB��'Cyf	��l٧�?	y�4\�o�ʶ�m�=�S-Zn��j`������![����^o�
����f}Y� a4'��Y*r�Χ/]���Ob�
�	- /����~m��!�/riCD�����5w�c� m�(�wA=�P�'[���mcL�.��[��S�m�l?�J���Fj%h*%�|V��V&�b
�#Pd��X��P(����mp���]���v^�D��2�lUmbo��]��<T:t�l�j&��uv�w�"#�Y=�ç'��,+l%�d�_ŕ)~	%�?@�NMmO�i
�
�At5
W*Tf~�K���4�&�#Pp��	L�X�\Ǻ���Q��`F�dbJ����z0��HӑI����F{���t��J�KX���ԎGe
�Y�����~�	EL��>��ɗ:)*�)����UnnH��Ht����y��:��Pˋ������mΙq.���%�r�����@�����׈j㿝��u=5���P�������J@�؂�!�c4Ώ`S5J�Ml{�3Ӡ0�q��!7v��AץE�������p{�h&S�X!7l�=wm6Mp>��D�� dؤ+&�`����з�	��YMU����&[H���p�/� ���	
endstream
endobj
479 0 obj
<</Filter/FlateDecode/Length 162>>stream
x�u��
�0F�<�u�6�/iVK�.�j@�\}z�A�s>��{��|3�n�K��		��-�ظ�e��6�ZP#��L&�"9��"�>R���	��K����V���,B�����
�ߞ�S�Z�@���.c��f�������)�X"6�P��j�;�
endstream
endobj
480 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 481 0 R  6 0 R  482 0 R  8 0 R  483 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 429 0 R >>/Font<</F1 430 0 R /F2 433 0 R /F3 438 0 R /F4 443 0 R /F5 448 0 R /F6 453 0 R /F7 458 0 R /F9 471 0 R /Xi53 106 0 R /Xi58 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
481 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
482 0 obj
<</Filter/FlateDecode/Length 5399>>stream
h��[Y�7�~�����0˸��'�-��syս�1��EV�i�I
�����7(�V�ْlcv%E4QU�D�C^�(��?�(�J?��+rO$�+y�#�X����%'ow#F�d�O�
5�&��82���FL��*(�F���q�Ө��.�"R�5*_�f�Ȕ�� �Ɋc���S2
<Y�$zP��ɎEQ���e�Ż�Ҽ��B0K�(t��-G7�áO�Y_�Hdq��۫�7/�ru3���MG4�)v: �_�dWs�s?_.%���'��CeQ(n���w�����m�8�Jr�\���{u=!�)Wt�)�����,Te�U���R�lwl��P�7�Rc��om,���
��`͑�^�0�ȸ4%�{���K�S�eR�����{�w�o�K�Pڜ§Xjq�:p��67��*t��O�Ԯ%\U
�Z��w�ԮelU
�Z�S,�k9VՂB���K���0A���������ǚP�EU��v{�Y�������!�:�I�;"���XSݠ�A�(x�>-�<PKK�����J��S��n�_j�ĥ�.J8�ʑ�`ͩ\3�m76Ĩ�+����9�L�����2�:l�1(]���5���`�M*�MQ������]Z��q^�?��vt�hP����VjB���o6��W�=��J�� ��c��$}Z �:}�7=�w�>�������5�F��#w�9����X�����j�p_r�/j�D���L�Wy��f�0�ٜ���<�1�����5�q�Zk)>@�A�Y6��%R��Jœ�ѷ��+RT� S��n�bP���X�?_*v�A��"*W�m�#+kd��[����­�����_�x�5D8�����m\J3\-��
ŝ��~m���X�B\Rm.Ƌ�3�m{�
XqG�H�!	�[��H@��O���UB��(���@��R1��}�B�k�5�YO�
@^������d���h�K��)�鉠&.����hZ���tӺ�41��&��;����%S�2���5oi�������"��;j6���d�t�R!��R)T��I�-��������RH��RN�D�
HS��Z�|h���D�*͝��^͝�h�rglR_�t9����#�l�.g�b��
����]�a���k�q�ƥ�-\�t��T'�V�s#�ܙ&�1z�ĳC/y��%#��A3�)J2s3l�B�o��j����<;���g�^2�L���).�K����HqF�s�s�Ԍ�K��	zC�ʜlh��s���2'2�Ԝы��zC�z̲��/�1���)�4WM������7�S�a������j������)�i��3z1���d���,>��Lr�x�-�
��T���d��y��%3��d����<�;w��3:l�"�m8�m�v�1z�γC/�y��%;��A;�~�^;g�vN�_�g4�e���Kv�z��3F/�y&�
ٹ�
3�f��=��ܺL�<c좍g�]4񌱋�	vCnL��Š���w�Ln�p��3�.xv�E��h��`7d���^��l�����R�w
<c좁g�]4�����	vx����$��� 
�l��娐�.3��+~\��qM��Ъ�;cya��$�^�ߓ��WsN��EA7���S�BK�
]}7z=�k�X�g+2[/Ȣ\�X���\����x���=t"�����h\�;rXx��1�?̜l�'Y^��c�\ yS�<�ט�A��L���A��(�
yZ�zo�&ղ��Q��	�?_��-��m�=��n��M�(��`/6�;PR�����嫯�j�.	hJA��H����h`�r֢�X��@����W ��T��=�}�a�_�_=�����\��/��'����{�a͂���ܯ~'�9���G�W�!nz��S��++m��C!O�����~;��.��P��(�˛�z�#w�mI���u��kRzOD��p��"�P�#��q�	�`�j����ٵ�Q`�͔I3�������
��z��g?��{[��K��Vp�e�+�V�T�̙q�Ob���X(ѐ��i�;oK�	v���iuO�L���U�6�?I���v�Yca�����%��h�;������$��TD|�X�T3P������z��� +<S5ϗ����ˉ�VZ�9-�MQ��W�1��oK����VP�T-��_18�?(_Xސ��v�,�f	�oɮ|?��P��m/�d�Y���Y��J�V�l%�(E!��Р�jH�L.*`�����V�˲~LR .�h̓H{�b�>���Z,on�m���M�AM;"=����)ha�9!���xe%�"&�`�`2�9�!�_�����\�R�����������}I�B/>�Pb���^&��h���y$uLhP�[�U9�����A�K!7�Y��5\���}�2D�rlN:��ᕵ�k߀E_'>����;��n���5"��uĄ�]��0Cְ;{[�5�C������B�{��l�!�٬�sg�?(4\
��-���AԻ<��N�M��洸���|95��X��x¡
�Mh秠�!��٘;G���(�mH�8!���rWn�:��F-�j7��R�îك{�Bȹ
�@a��	Ր�<�ɰl'���b&a���;��NI�r�4��臘Hl>��wEtQBӕ$!D�S�^#�pQ��wQ0iv��������#� �g�[L����]�K���X1yTL��8����8��
���v�!�h8Q�p�L���So�� �O��o� �C9ۆ�}�':'!��ML����%-s�N�EZ�O�g�Uָ2G
����1���?�<p��˗/I;_��7\rS?�ء�Q�����n�x����a�_nֻV�m�j�4
�O�qaLR9���f����3
�&�����WdX�]5��'��ժ��b�Z��z��A�lK�T�x#�[��<y�;q�K��Д1�=O��W�ƷZ/jY
��C4f`F�ZB
댯2~����h ��$L_"I�Ө�G%����3?����B��.WzX.pE"N�yc2z=n.iO�_����WH�C�M�������*a���JbI��h����ם��e����d 줆H����ۄFJ���64�Fh�d
�����/KL>w�m˂�T���
��]4�R�P�%I�,����I���-RK�c/�25w¾;a��NXk���*:��n�}+0@<5h�*��	�_���D�1��f˅�� J�%�אCU�=P⬭K��T9�ً��v��|V�@0�wMנ4h7#Z�Bj�t_��L8xp��rd����_�_C��~��hz�k���Rŷ&i<4i�sM�|jRM�@��\a=]�9< �A�DE�;�ϣ���y��ZH�	�P��
�O?�t�$~H�ȻڈI�>�P>5np�GMv�*A�D�<NP���q���L��
(hz��J��	���:-v��������$��1&�:��ʤܼ�v�u1�����<F���[�Ѩ�a�;"] "Ch�nv�S�N=JҐ�|���X��Q��X��J�G�E�2u��Y}�@���R3M(�>��h&	��H��;ĥ�J����2����R�TV¥�e\p?j�(9�i����1bWj�uE�O��
��3z�O�GA�Q���<f%O{(:��T/�2��=�P�D�7~q �����L�k�7~�ҏ�UE�l*V���j��My�(��,;\����n�Y�_��*O��NK3>�h�S�A(C����TS��%�|��zЮ��]O��o�t�[�z��X�1����G�>R�{��*ZL�4nsJa�zBh��h�l̈́ajk�y���(
?�>��7�u�@nJ���z�9l��wST\�{�X��˗�FUX�7�u�'��~����dv?�.�"-.��|u��P���@�5<��|�|���\�^��lOn��{_.c�V�E��f�I���|XnV��Bå&�^W�V'0�n|��)��v?�B���#g~� �`N�~���'��)TS���H:�`��ؔ�iX6�
;����ke?�g��vx�g���g|��wѰ��&WJa`+�WgcB��kjh��u۶�Ӱ�Q\��TI��)�
����^ea��7`a�RH*{׶0<]�ga����]m`;<u�������6��2��n��t��e�i��SV��z��Ef��rgX'��eR��m�|7h�
r��
S��SBR��0so��Q���STg���6+��n���Stk��ݚ�.�'�.��Q�)�Y}:�yNg�`o~���f��.
�����&_�����ǁ=k�b`�=�i��'4�#;�R�����C/Ů��K�+?�xa|̐���
�!�e�����B�P3�T}r���} �
����
����#�3���y��q��#��"L��9�ۧ�`�"�hMU��L��5U� �i�^�i�^�42F/f���2��ы�F~�L��iH�G��=�\EIi!JJ<f�d��n����碾�17πS'>���mu��k�,1x>�*S�j&�'O�V��#y+F��)m��qir��g
^��١cd���z1F�^��١cd���	zC1R�Y���f2��X�z�X�oH�YS��o�T�Q�m�E)FJ1l!�LuΛE˂t�u��x3�w�ٞV�;�4�S�1U�3g�b���13F/E���K3c�R���13F/E�L��FL
�"�����:?��GB.���έ����l_a�Ж��*��W@/6��r}(�3�F6�S��3���x�������*_��{5�I�&�\Y�0�Q����p:��)�;[��>nո��P~����w=���~ �Ͼ���*��c<��/6w��gu�����|ؒ���$`^��)����a;�r5^_O���h�1�s?��c�0"�$���̆\��.�խ�N���-|�M&����Ш8-�ӝ�^�˛�����	�ޭ�%yS�'S�t��.˵g��4�X\`�gP���d�r���10Am�]�B$�����@�X`s�U�F���_#�!�u���F��b$%/�W�M�ʎI]M,
�+Mc*0Y>6���G8k��h�g���,�:����!��2a���&����{"TA��!,Sz�W�x�\��:^i��k�͆y���b�i͘|۶��(׮Zю����%�ł����c������Y�л�a�U��|�=���?�T�+�R�����~	a͚^�ο��C;X��ن
��]���pz@9ۑYT��r��}������f�X~�<��*A<�o6*J�:��am��<8���Ѱ�iW�Xo־�<�Fxe0����D���9��j
׽���ɰa�G�������ki�uau5���e!�*A�Ah�Tm��  P�4�
endstream
endobj
483 0 obj
<</Filter/FlateDecode/Length 272>>stream
x����N1E{�K(��Ï�(�4(�� �-_�8�Ea�Ҹ�sFף�w��
�o�>����:��E3��/�B)e���n]���� � �����K��� ���=$Ϭ�7�4EN!�����%BY
&��sς�1�����[H���M𷥇�Gn��4��'���b�(����ؙ�Q��[�C�0�`
?�� uLh�+�j^km�>��F��"��A�_?y�@�7w�qSau��-<lO�Y�i,?��Z!i�w����
endstream
endobj
484 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 485 0 R  6 0 R  486 0 R  8 0 R  487 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 428 0 R /GS2 429 0 R >>/Font<</F1 430 0 R /F2 433 0 R /F3 438 0 R /F4 443 0 R /F7 458 0 R /F8 463 0 R /Xi54 106 0 R /Xi59 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
485 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
486 0 obj
<</Filter/FlateDecode/Length 4024>>stream
h���r�Ƶ�G~E�*0E������l�8��XJR)���hs�	r���y�� @qFvL�jH���[?<��7������KN8��
� ��K8Fc�HM�w�\-,>$?���-~�d�*-�^�8xqU
�\}W?*4yG��\� 7��'_^
ܗ�9�c�i�Ҝ(K���vn/�h
�3�\�1�Vm����Y��͒&�د�ɘ�� ��Ғ�ڢ�#���4�J��ES���¢��R�b�J��Ԕ��|0C��)��T�p����"��Q�Y�T�������.��9yvA^gZ�o�=$ñ�,L2���+XO�bC9�A"����4'��K[n��~�
��xf���xaG�	:��+'HaanMZ�٤�M�d�!ۻ|�%�uQ����{���>���*ߒ�a�|6ϧd:/&���pLa/ o�Vs�8��� ƜN��҆��b���ޑY>�7�y��,��NQr��d�*����v�^z�A���P�x��d��
��q�K�=3�VP���~'����#�;۬�d1/� _y� �R؏�ZK�f
i��W5h�h����\�Q#bG�3��\��d5%�+��^� �ň<����5�@��i�'�Am9s��� ��\��5�r@���V�F�1�pLk��*c���0a�b ��7���P}hm�`���F�0�nm-x��:���E��"�qK U��=B\!?e ����x�r)T l?�hޞұ��Gg��e*���1P����F/�@���F
� �U
J�R
O8w6O*ҧ��8	Q�RԀϋ�5�r���8��JZ$��Y���YIC�V9�G��^VP�=pVcڇ+�?@���\����@���[����~�x?y�_q\nA, Ě��@��Xѝ'�4s�N;
���4�[ᅬ\h��{���4��yj��Ү��s�]���K�J�σv���������H�FdaڑNk��J�ݺ�9�g�s�@H�z�W��7�5�\�5���/�l�Y-d��p��(Cv��Q��F,�rg�}����-���2��*�|���,�yЮ�2[ƨl�:ّ1�ǎ���i5?��u��V�[�mq:.Vޤ��#d86�eWC���v����D)�zy�^��Wy(�nSi�\�E^寧�~��~U���'U��V*U� �X��D�تju�}7���Q�mɫW�ʲ�-q�^������.�ն �5y��m���r�K>%��i��5�`�H�6�[X
��*��_#�V��j�O�;sy���z+-��S�IŁw nd�@��bYg�q�}QUmT�;�[��r�C<�5�j,�B: aS֦<��^g��X��
��Q��4�}��J,TLWP�"��ʙb������s��qJs��u̕�H!��ܰ����v3��C��:�t�4Ҵ]��Ms��
Ȳgu�� �a`&�x��b:�w$��'ԩ�횋��j�XM�
���Cu�ahD�6:�w((��s# R'�O�;''�U�R� �h�տ�?�`<c(�0�c��ɻ,��&�`��LB�]Y�n�5����\A`P�k�Ei�a���p�8 �K�[����ބ+T
��-�x�d4H�b>[oV�	���ŗ�hK1�)��KT�+<����mHm>L%�B�eG�>�.H�Q�g^�~F0�?��p m�b�q�*OO^�d�ұ- �4���A��R�M�g
���Y�*~��gdFz�!l��4N+����㸽D��9�F�ۯ�|�V6���0`�d��KR�{l$Q�u���F6Ku�lf
ٌ��ld3�C�0A��f�;Ƌ�g����n>ˤ������]��� k�&o�? &�7
Ix>�g�G4��C������?�x�u;_b��{��=�5�ƀ3����6/(y5Kl�b�ؒyA�l�ɶ<�F��؈�Az�0'�a�/�f]�qB�W�+���	Y�A2AMA2�钉!�S�dɬ��}������[s)eH��rQ�dS����Q�|uH�
���~�!	�#��}�rOm�����GەL����4]�ZtF��!|F0��B鋼?I�+��V}���}(���K�&�'7��Zݮ��fJP�˰�:+S��]U�R���Io&�b�X�IH�Bv��Qh�I��k�Z$���P���I%��t��i��m�i��	��#��ѺֶҬ�p+(�5R��7�\;��	x���,em,��"	�H��wY/�41�<�Aa���h�fσ嶢ޙ��?8\�
���:�I<�P�bN?r���F/�%L�\?5���F��5$�����@y�>��^1�-/��2J�Lp�zH��MC
t6ɨw�w+r�/�� nI�g0�
)�����K;�*��  �ɜ�h`�^B�4������lW��'x��}R�YSz �7��R��`b���~�k5������1S�k>����ܭwE~�^L	�M���D��\*5r`���C���������?��b�Rgo!���!N@͐B�q���ĬF��s��ȁ$_	�ن4�vM��`1L�z�ro� ���p��⥧���8���ƞ���?C��� �M,[�֬���|���:JY��C��e��O�]���I��D���-s�BsO9S�!o6P�]*:#�����!oM�3\�k1ټ��������z\��i���P�=(��m?I���Ň�Q��Qy� @oH�	&�Z"@�S�a�وܵ�~�ҟ��P��6VA��R���R�����A5Mdh�`6��l�QS�$��֎cP���d�{��B)�e�}��cE�y�����
y��>_yo��v��ͼ����*"�j��$F���Eྫ8��쟫M>_��6f��� b��}� �����٭P�����������v{�Pg�3����:C�3��?��|�'�26���n��r�tVqU�����RNޓ�M�3�|�W�Ρ���S|IUx
�]<�P�f�:^������)n�"�1F�#f�G����^櫷y<c�b2Â����o���}b�����p����Bh��� Su,��\BhHHY���C���B�H2�u���h���|Or��o%x���:�h&�Q}(� `N�w����]�x<��`�+��)*�6�Iߌ��4���ɚ:Yȣ1ZִAӆ����o�Vǥ���{|YE��K$p0��:�NH�3T�!8@�@�e�"��
�;M��'m��Ŕ�)EuT3Z�D�E�'�P!���SoA�E��ї������ 2��
��G�mֿD� �b�6=���5
�`��m-FU����0�J������vDp�F�9h��J<�a�й�Ldo�\�"4�9d5����_�i4e�̻�N���6+��AR��"C��8�pJ�!�3<�&ه߃#�}s�aLw��[�13�Y����d�b��4�:�>w�	[t��Ɯ���WM�S�O6q��ba����d��:Z�Z�M+�S����\�VB#�1G��N
ޫ��2�?�N�J�q	���	v������,5��%�<�� $��(ݪ�w#�N�[��!ԅ���#((<;:��d��ހ�z	k�	e�IHHy�HȠr�D����lDP#E�eQ��O=y��DL�޻�3��ՕH�tU���1Q�lnF+����cf��C��!h���h@+��;X��!�P�C)�YZ`�# �<�ȷ��<�j
b"cu�7�6Vw�j����7Lp�*]�[�y{��N��\ ���E���P�$ą<����\.(����	d?c��N�;B�e��Q�Ch'th��G$t�M1�%��U�U�Y|� E�@�ˇ(���$��Pu��ˎW4�v2�s���&X��;�͚I��
�{h���ᡄ���	���<�}��Pim�7�<G����5�J���!���H�q������Z���ZP�*(�x�Q x�ť���,.]\��ߩMw ��g�ܑ�� �Vw*���S2���R�(\��(ߖ��	0 .o�
endstream
endobj
487 0 obj
<</Filter/FlateDecode/Length 290>>stream
x�u��N1E{�Kh��vKP��A| B����g�q�e�l�s��<�?�o�y��}�pw�q�@^QB����@��~�]u���Ϥc4ŬCIJ	 �ܬM�t	��/]M�)d��OⳢ�)/�t�8c�5���;@������l+8
�u�#�6��k���8��W<r�Q��\�;5�q�)�h��#�'P�-W�m�c���
Q�p��u�c$�[AK�`�RZ��xm9T�=ZL���<�^}�
����˾��C������z��-�I���I���~J��4
endstream
endobj
488 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 489 0 R  6 0 R  490 0 R  491 0 R  492 0 R  493 0 R  494 0 R  495 0 R  496 0 R  497 0 R  8 0 R  498 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 499 0 R /GS2 500 0 R >>/Font<</F1 501 0 R /F2 506 0 R /F3 511 0 R /F4 516 0 R /F5 521 0 R /F6 526 0 R /F7 531 0 R /Xi60 106 0 R /Xi62 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
489 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
490 0 obj
<</Filter/FlateDecode/Length 1176>>stream
H��WMo�6��W̑".?DJ::����ƛ�:�M���t��l�����}��l�6�M%�(K��{3o�6�%�'�^�c*�(8�T���2��;O��8�s�`�����S #*�V�.=��^�=kͅ��;.��F�ja�D���I�շ�2=+	~ #�	���3B��
�1�_<2�g��b�z�������
�!�+���fV��z9����x���S�p�h�0]��K��&�7�~��.D2���/Ct@��U |��B�&.��ż�8�X�@�G;0w��V]N�)�	�r�(v�1��AؤA�X;�"�L$D�����k_0R�\����fS�3��qY�S�����woj��~���"��pL�}��ik�Z�Sպ��Q"�ĉU�<�'��.�'Se�?�������F�Y���6Y�DN9��uK&������ƬqM~�y��k�Bحcc�gm���cDa����@E{�X���m %V��H1��NA@Yb�閤.���_���ppsT�d����ԄI���Ui+�JT��(�?WI��A�b
˛�T1*^ա0��G:nɅM�������x4 �^Q���=�#�4�ᔩ
5���F��qTa�|�w��U��(�i"�na��d��SKHYu��6��*7ŎR[��*�芅�:�.�.a[n*�Ȋ|^V�<�˲Z2:�ߍo� �j���ڴ�S3�;�ĹJ6IgKsG�w>dkX/J,L���
�lm}:�PTK��bی��S���~@e��zӾqyT�^ʶ3c�LƖ�g��h��~NL��4 q�NNr�ٺ$qs��>a:���w�%�i�I
���#�����1x|,�iv_�Tn�fQ3�2�{S��љ�
ZJ�[_�u
YQ����I[v@\���^��FbUր�[XdO��]/�o��7��x�#*�Q�=IJ[ 6�x0J�+ra�:��~����2�;2�cf�lUcӺ����*��4�c�M
��1���u���.H�z�IZ�׎�yHc)^VR��9�bN�P1���0�����򎻗h�����B�(�Hv�n��I��zR=��TO��!������{�1�&N��d��|R�Iٸ��{=1����?8NM�O#k���d����g�}���g������g��&��` z���
endstream
endobj
491 0 obj
<</Filter/FlateDecode/Length 607>>stream
H��Kk1���)�V�F�cB�h�>�b���
M�߾#ɻ�G�MB�Ke��H;���~kk� ��W����:�"��T�[�R
�8'��>x��]G%-����²����}��8��)�CۀB�'�+#��43��,#��4�{�ŷ�g�,gNJ�1��Y���:L�o�qZGc����Ct��ri��
3�l�UCr�4qB��MIe����.��겺��#��I�	��D���_�iڤ�횢6cX�\k#�֖hb�l%Ukk�w{I��zQ�n�#�Ŷ�1���Ԩpi�puq!.����FWK]@�H�J2�ur��^^wp��7a��E�#���ewJ��������� ]��U���fDٴn֤5.E��lt�j��i���<���~0%��_�]��6�*C�1>oe#�*D����x���꣠0��9z-��eڅ��*��t��/{��n��I���&�
��Q�����v��i���;o&��O
��������#�A��oi�>-wx��u���u=[�g���p9�#
����iѱS��l<A|�����V�5\}��PVM���fJ4�������\��0 D�
endstream
endobj
492 0 obj
<</Filter/FlateDecode/Length 592>>stream
H���Ik�@�>�;&�g_�M�@k(�1�*D
M|��,�h!'��l�5b���=� V)`�j�8�7���}E�V݀vs��S���
,�(M�Ԡ�#�qطq[qBe8RC�I�3ݶ�t�4i����dC�
�M���.w���zt���F�_8�쫿ٛme�� W�X�hN�������n?o�]o��m�d\3b���T�F�N��%�˲�}�bY�Q*wwL�X������� �f��'Bk��P0m=��� 
n� &�H4�h���7�=U.�w��C(�~M56�<:r��j��ԞNE9?ՙ ������3lv�q§d\˔����EY�d��(\	9���՜���4S�E��E�G���~3�(�`G���}��ew>��	n���Ox�j�����_׳y�A��{$:9�G:ߟͩ9��׻��Ǡ��>����W!`|۽���,�Op�v!p�����bP�с�a����=!��8��x�0�b`��l���P��$q�'Tl��@O(����D��㱥�M{�R�ݞ�C�	�@�h/!.���`ǁ0{��o=!���8t��/u>�"�ȱ�P
�+� -%S�
endstream
endobj
493 0 obj
<</Filter/FlateDecode/Length 585>>stream
H��׻n�0��O�1D�~�6.��x�b��(�4�ҷ/)�UBv�I�$Q8�h|�~���7t�ES�5Xqbg~o��J�m�n����x�뎷�t�E?1��}�$�Y_����|�(n�Z`b�
ǎ[��`�8q.��J�k���x����Di��q@�Z�_}�?�X�&Fj��!��q��P���0�vf8�[�/"�V�Xl��aڸߣ�<ݔ��d���G�n��W.@�)���
f�����20���WBk��@0m=��� M�Zr5����`��Vk��=!ןw��!�R�~y?e���b�汴
��\,]�oWE:�x�!Q��K�ˉ�u��S�����}�3%�р8pAAA�h/!7��av c���v�#~=������n�nu8�~����l�C�IyDg��R���=�����a6�!h����"\Z>b\�	�Q��H	n���=!�0rtT�=!��0rFT�=!��f��	%
o�s��=�/��	�uK�K�"��p"q�'��{B 9�K��=!��0�`/��'����Θ���������� �5R1
endstream
endobj
494 0 obj
<</Filter/FlateDecode/Length 592>>stream
H���Mo�0�;��9���׭�*m��r�%"��4V��e�~���"�v�	R��c?�_���V��o���HRZ"���?�'TZ��P�hg.m������"�J�l�wطU]����d��\�N���^���5��]�+�?m���J@�W7_��g����m�o��S�XfArG8���Q��Z �Z���a��}��8�z�X����� ���qx9Q�'.1t�e�piS�?U���+ ������k�F�k��Ah̜����C�C� ��J8���%7g3i$��f�l�?��T�x��ǇPJ�c����G(6[>�
�ܶ{y+Q�^�^J�׌��� !���s��9�n�8pAQA�h/!w���!;�1�K�O���Op׽����M�o���y�]�{:9�q�y_�|}>t��x���c�F�})����&V����898&�kB
):�0��1,ׄRF a�1cX�	10�pX9�rM(c��"��Z
m�{gM(4]�^J�_1ެ&�H�UbpH5!��%ĵ�B
vc���Ub��y�Cg��R�ߚ�
0 6R=
endstream
endobj
495 0 obj
<</Filter/FlateDecode/Length 593>>stream
H��׻n�0�]Oq�dM���i�"@k���,�/���A/}���I�d��tl@%�$�	�q ���o��W@cf��9C����]š�k	�j�Z��Sc[!s.�$�J�gb��.�,^����q�)b������C��l���ƀT�5BkEƛ�d��Q�3�st�*BC1k��
S6��U]^�����Hu9G�&��}���[W�oPȬD��1W�]u�e�z�զ�߮Tg*@�y��=�
�/URp@��:����1B@-�(����n�3��Ajw%R۸+�`hL�-�1�1�p ���a����]*�_��8��5���<A���c�Q�����˵@���R�>g�(��Ds.��=����HAK�%'����x|\M�:���4�\/>m�{x>�]�r�O7]������v:�	�丧�3�}���y���>|~�N}9�ih�Gg��*Btb�� Gk(0��(.�RpQ���Va������B��
�� �3W�,Q�7�8��z��p��A�����R��
b�v�r���V
R`H� ���åb��A�tC��UR��Q��8�W� 5�QT
endstream
endobj
496 0 obj
<</Filter/FlateDecode/Length 605>>stream
H��׻n�0��Oq�d0�C���i�"@k���,�/���A/}������A��؀,ʤL��� (n�͝+@rQ8�\;�|�آx���4���~u���A"�w��`wfS�Ba%wJz�6�Ih�T����<��=|��p����7�/`�aD���q)$��E�,���;�㾗qq�4vLr�sKq�uS7���h��?Q>O���!����;��ן�ᶰa�/���5�/�`	?C'w�o�����a���Y��;��`�T���>:����5��@$� �����=�HA��1�#���
���H����Ù��
m0�[a�Ra��#��WB�{EXk��h�\ɺ�(Mdx��§����Z�H9{��'����4Q�J<�)O���8R�#� � �{��q=��r��@�r���e{:���ʗ�Ox����~��^O��yO@��{:]��u�V�hs��F��tW+B�~�M������C\.	)(�� ��E�9�tMH�!g�.#���B
9f�0Yb�=�ں(ċE!:���BK3w�)�ꜱި(H\+
)8䢐
D��ĥ��BNvm��U�K�0 d�R
endstream
endobj
497 0 obj
<</Filter/FlateDecode/Length 1024>>stream
H�ԗMo�6���+�h�o��n6i]t���e�ۃ"˱Z�Je����I}9n6=���DJ��������2by�dJ�
բ�P(�P
o�y���˄dZu��R�z����	���#
0Édʭ��M8��5�P�U[ӕ�n}��H�IƆ���
�2I��ө}z�)�����h���<1�j@b���8�g���d��Y֫�Z�w�/����U>�4�d[M8��i?�~������,��4$�
�a0`��0~*��)��		�@�g%��r40ic���u �1���`'�f�P�ZĄAh�0�S���:�J`4"�F�� ^�0�p�.�����[\>�R�*�2�kc<�S���Eơ��u���z��zI����
��a"	yLb��u�9�EÁc�1��}
����ue�B��q@�}
�}q��Y���=���l��X./���y���G@g�8茂?�����t?��39�x�PH�ك���8��1�ơ0
�tāa����r(� àq`5�%��
#�0��c 
�0@� G�2C�6c�JR��6�m�T�|��,�LkG���碝�x�d�,0�-�q<�J"�r���hz��U��}W����P7;������q�r$g�c��bg�3�Z���6|�����Z7���-�zA�/�׌�p��C�yjR����|i�h+(],��
(�H�!һ�,�Wg�B����nS����]�l񧴅�����z�Ƕ��	�
V���pX��~����cY��`�S2�,��r]� �����X6%����]�몭�V��nhK�����a".j�!�d���E�<������;��p���%�����Un�Bخ��E�&�6�k�n����'^:'޻/�`8�<���6,��e�89��$Α[s��]� f+��+K�K��d�_��]:6NG�i���Vڧ�i}d��ʥ u�R� �t�y�V�%7N��;��^����`p�}uc �[� ��d/
endstream
endobj
498 0 obj
<</Filter/FlateDecode/Length 254>>stream
x�m��N1E�|�K�f2���I	�۰�,�!���
��'3d�Y�&�s����i�L�Dm��J�\�CU�⨌���L��&�A~5�ٰZ�9{��o�O��a��:��f����P!an�oQ)L�0�ř�$G�3=�$u�s��5g
��?]��Ô|e��Z��q�N[J�I��hL���s�c�ݥ��=�D CLB����(6�al��#���.���7��^���tR
�j�DT�X�3ޤǃ7��<f�
endstream
endobj
499 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
500 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
501 0 obj
<</BaseFont/OPIKKF+CourierStd/Encoding 502 0 R /FirstChar 49/FontDescriptor 503 0 R /LastChar 56/Subtype/Type1/ToUnicode 505 0 R /Type/Font/Widths[ 600 600 600 600 600 600 600 600]>>
endobj
502 0 obj
<</Differences[ 49/one/two 52/four 54/six 56/eight]/Type/Encoding>>
endobj
503 0 obj
<</Ascent 0/CapHeight 0/CharSet(/eight/six/one/two/four)/Descent 0/Flags 4/FontBBox[ -56 -250 678 857]/FontFile3 504 0 R /FontName/OPIKKF+CourierStd/ItalicAngle 0/StemH 55/StemV 55/Type/FontDescriptor>>
endobj
504 0 obj
<</Filter/FlateDecode/Length 744/Subtype/Type1C>>stream
h�L�mHSa��unWJ4w��f�ݰ�ZS�4K�!�M��%���.ԭ��V��P�S%i��|ʠu殖_��(#$�}٬��y�Y��>u>�8�ßs�Ǽ�0ǥ��))I!��JN�r��=��p�
7�Rp��L�ZVv�,�A�?(\ᤘ�
5��z�������P�1J�=��0��(wy�D(��L�V_�2S��-�`����A��Y�6&����`8��媄��$M���2ь�-�/�PR��(,[�I���T̀��"~_2۠ӆ�lp�Md�����AZ�#
Ł61pH��)��V�%9��A�>��r+?3{�qp���2����g@u[�:�T��ۣ��v�mAN�Y*�I�x�/�}#�??P�EO����%��s*;1�r������5k�c{Tǫ��֩��y05����2>l�+@,����!�� /!��Rh
��Z��Aք�i7�e����.jRE�O;��QDk�;�V9��i�i��⫗?�s�kg^[�h���!Z�Y47]j2[��W�͍��=�%��t)[2ro�V�,g�:}�zߝ2w*�M��Q�W;�hB�h���^l'����>�
[h�9�14�V>S�@����}�#M���K*�G=�49���:�3X����D]d���ّ�t�܁����u^ȵO߮�=]��������/L��5W�*A��0�����W�s�? C�\�
endstream
endobj
505 0 obj
<</Filter/FlateDecode/Length 248>>stream
h�TP�n� ��{L�Ʈ",�(U$�P��N`�"�a|��M[$�Yf�IO�Sk���&١�^�p�'�8h�����f�(,�ܭ�Ǳ5�MC�{ g�V���?�}� ��)t��������-��pD� �AaO��Y�1"�?ѿ�e����Ƥp�B�f@h*ƃ�9�Q�9R��k/��#M��E��	"��9	9���ĦT�L��,+���G��sa�m���m�c;��n��[� ً|�
endstream
endobj
506 0 obj
<</BaseFont/OPIKLG+HelveticaLTStd-Cond/Encoding 507 0 R /FirstChar 32/FontDescriptor 508 0 R /LastChar 121/Subtype/Type1/ToUnicode 510 0 R /Type/Font/Widths[ 250 500 500 500 500 500 500 500 333 333 500 500 250 500 250 278 500 500 500 500 500 500 500 500 500 500 500 250 500 500 500 500 500 556 556 556 611 500 444 611 500 278 500 500 500 778 611 500 556 500 611 556 500 500 500 500 500 556 500 500 500 500 500 500 500 444 500 444 500 444 278 500 500 222 500 444 222 778 500 500 500 500 333 444 278 500 444 667 444 444]>>
endobj
507 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma 46/period/slash/zero/one/two/three/four/five 55/seven/eight/nine 59/semicolon 65/A/B/C/D/E/F/G 73/I 76/L/M/N 80/P 82/R/S/T 89/Y/Z 97/a/b/c/d/e/f/g/h/i 107/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y]/Type/Encoding>>
endobj
508 0 obj
<</Ascent 716/CapHeight 712/CharSet(/space/F/T/B/three/eight/five/two/zero/A/t/a/c/h/o/y/u/r/C/l/i/f/n/m/four/comma/N/R/E/Z/period/L/s/e/b/p/d/w/v/x/parenleft/parenright/g/M/k/S/I/D/slash/G/one/Y/P/nine/semicolon/seven)/Descent -172/Flags 4/FontBBox[ -174 -250 1071 990]/FontFile3 509 0 R /FontName/OPIKLG+HelveticaLTStd-Cond/ItalicAngle 0/StemH 67/StemV 79/Type/FontDescriptor/XHeight 536>>
endobj
509 0 obj
<</Filter/FlateDecode/Length 3938/Subtype/Type1C>>stream
hޜW	TSW�����8�6׋��MQpB�� �Xg�u*BP�A!@Q��"��bE�UkUԊ`��ߚ��+���j[�_�7������}��[ﭷ�pϰ��������e<=�e��&���;��f0�FEFL�f��;2)1ڵ�SҲR{O�Sk^���G`���O�K�ߒ~}����Q32����n�jd�Ҍ��E��z���w��F�����7+�1��~���a�I
�i)FCB�~\bTR�Ҥ�H�!��>,>^�V��O6���\���"b��K
����c���C�����#�
	��K�I1�!?�B�G��R�Ɇh}l�޸ؠ��oZ?�d
=Ѩ�L��O�KzRLLl��������W�(C�1��O�j��q�ɱ)ѱQ�ؤĔ)O�L0�
��d},� ��OL1�����L���Gb�.�˨Y�g���O�˴a��<�v��0F�0��+a|����0�<��,3B�Dși
��o�� &���`�k�kv9��f�z�=�x��x��͐��=����Y/G�!�.�!��H2��T0�I��J�4e���E`���[�����z��V��>m�C�ǭ#[W���MX��6
*��Z�:�z����j�a5K��ղBO)�1ٙO�/�erx@P��<�&�R���wC�9�jx��f�OҤ߂.���v���;rƓ����t�I9+T���PTW5�aY3� up�o�^u<4�v�l��8�(�~�5k�f�]a3��\{��i���	S���
�ԴeI��:��\3�`�R��:��޺�p��b�I�����
QE���-�;F�q>>�Iv�d�J��
U�D�է�#�az��f�9t�D���w�����1���v�{Xy�S��;fM�>}��3�f� �����b
��1:C������[}�
��qK嵛P���+vy��!����TzU�#'��y[+9|:9�����bߟ�[�H�����
"4Pf���7"v[����`h-p0[#�C_?���_p�!�
����~���'쭟e�{��ť��kV�]S���ؼnsɆ��wo<n>�,����V� o���P�'��`׍+��˥<�9���%��z��:OB�=���e�AR�ײ :��+'�t�`�u8ۢ��@wZ:����z����r0g�`.�W�b,��:W<��P,�?o
�] �'�#��#��xP�����&$zj����o�*����h��7�������r���[{w_jԀ|��艝����X���M���=�����	��"��fX�,;���!�.:j���A5(�u�b3��L���T�D�#�^�zrjǡ��ڗ�~��[2hА��u���^"[%
�U9z��Ao��?L���d��
Y4�3�ל�,�#�/��Ds�X�Ľ�<�����a}}������~yR�5H@5l�遃��%d@sW��,$(ό���rG%�N7� S��(�i!�6� ��e�L��<qG��������n*��]���2�A��m�O��x9�"�0^~��"G�=�:��>y,u�[+�R�Q}�Y�)���zŝ�>�^��q������N�峥�4fTL��NF@��T�ܦ
�w����^�4�ҏ���������S��^�n�mD��>�ˤBi'�Ⱇ�U��ɸ�ax����������Z��eK�V�e 1-/XnZ�\�6���X �Y��"��?���*(u2��Ք��`�a�Jt0�d	LŕZ\H���<t$�مCKth,�= UZ�Hh)��"�E��"��%�i�{D�f8):[��Q��R�r9�u����X�S��P�!F��5.��s�p���+�ii���X4��[ea�W��^�%0��YhJ�ܙ_MG'��+o�[im�bB<Mˑ8j&C��;m�V��I)�-�Wh5�Ԧ���3�ˑ��P(:��Y;5#��q���^��9���7��t���91kc��&��eށՕ�-5u@��9v�I*M+5�~aIr�2�{�vxL�O�J���]_��B,KL�K4��M{����U.��'��KYuhͮ�
��~�Z��_��G>,�t��؍��|�:Q��
�o�pHd����Fs
Z3yjiXNK���+�(�ggO�Q��p�pg�����F������(����n�n��"T����S� ��#o�Y�=2��JlO�{B�h�����m��{����ܜ�[}~�W��?z�r�g=��ݍ��Q����yC?-Π&�Eq�Y��f(�O��TJ��y�R�;kQ5x(�
�>��"�iWӎ�Pr�n&�*@�4�|;�:Ȋ� b�*��5F��ďi�Z�~�]/�Ʈ�:�!jK���-�9ۍ�5���nB����rW��Y0�e[\��|�O�3E�7.u��l��9�l�	�:ȱ��J��y�����o��^i�LJ��A�����#��#�r>���I�i������Vg3V���I7���;_@ �7Θ0!����7;�M8��j��
%^���.�� �H��̲c���6����9u6*���ۂ��i��J�H��._�㎭Z����ӕ!��Ai���AV{�ؙrJ�X�;�ZTb)1����L��=+���E,j��@o��7��A���:�6}�����оQ0�����?xjŗZ��Ba �X�F�Rg��LPL���9un��buU̫%rO�#�̋['�k�Փ��w�S�!�����.�
!�]m�x��H7���{G�s-��븧�\z�B��h��	6��}�D�"�,���5W_Z�K� �=M�˘�]S��j��_�{ߒ�&��~���g�z�9�#'؍���`��DLnVO���p��Zdyv_{?���"�~�ї�X�6:T��M�]4��
^y���X-z�Ӫ�����n������չꍔe��>��x٤������w%Wr�"�t�e1����yq��Ac*�b}E�W3˪>�Km\#dS��X�
=��7�f�	:����B�l�Dj��������]��������lB5���YR^�FB�l�����;�:�;ri]�wE�@a�]�e���l��HJ�����}O�nا�R=E���Ia�G3�&-L��H0AY��Q���צy��Qa_/�6�Y��9�I��������kt�����l�w5��� ��6ܗ�T�(7I��]�ȥӕ�o�P�)�n����6���k׉:����o�*Q�g���m�'��{*Y�YtP�4q�&�vtT��h]m�C��S�D�]�3�̍Pg��O��ݎ�N��Tˇ�II����EZ�U�l`�6��&�4h���;c�]0��FR�n@���c{������A{>|����T�a���qM\���1}��e����f��ϟ�Ѵ0��d���2�<MֽԻ4Y}�����OM�E[���יԾj��kcDu���F;V-�~"ܑ���<�~P�΍�A����'�M0�ab-�m%_�eB5zh}Ǿ��S�ؼD�ݻ�rkM�&<rل0����`�9�@�yy��HA�՗��:,p
3*&���\����uW��|A\h��Z�f� �,~���mpv%��V�6w�3ɂ�]�:���~�	j�w1L�`�)6�CxD3�6�;�d�!#IX��x�A;-s�i�4*���}v������Ҩ�[h���$
���fAR�<�:��,���Zʢs��
�0]]�h��ZR��A�3=�G���V�D�k?ҩ��B�����|����v�*�p8J��Qס��L2�ġpC���p.�������T�#(�]'�`�J~z�iz������hEnyy~�������mݻ���(��@U��4�
oKi.-B���7���ق�-4�J
�+�1n�lQB��iSkK[+)�8�` �
�i
endstream
endobj
510 0 obj
<</Filter/FlateDecode/Length 331>>stream
h�TRMo�0��+|��C �c���mR�����!�z迟�Y�"�_��g�Fm�[׎��Bow8BӺ:�П�E8�u�h�[;Χ�k;�AQ��<��m]�CYFꝜ�ΰ����^�7�^C��uGX쓏O"v'￱C7BU56��<�b:�/�ϵ?{=����������#B��
�b]���e�qh�	�D�1�V����0��=�t=a2Q�I<���g�$�����(-i��@«L�G�/���T$!�R)a��IQn)ӄ�T�k&8=3Bps9k�"��Fη(�圯R�y0D�;H�<*��e���eZ�4w�x���W�����~ B�E
endstream
endobj
511 0 obj
<</BaseFont/OPIKLH+HelveticaLTStd-BoldCond/Encoding 512 0 R /FirstChar 32/FontDescriptor 513 0 R /LastChar 121/Subtype/Type1/ToUnicode 515 0 R /Type/Font/Widths[ 250 500 500 500 500 500 500 500 333 333 500 500 500 333 333 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 556 500 556 611 500 500 500 611 278 444 500 500 778 611 611 556 500 611 556 500 500 500 500 500 556 500 500 500 500 500 500 500 500 500 444 500 500 278 500 500 278 278 444 278 778 500 500 500 500 333 444 278 500 444 500 444 444]>>
endobj
512 0 obj
<</Differences[ 32/space 40/parenleft/parenright 45/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A 67/C/D/E/F 72/H/I/J 77/M/N/O/P 82/R/S/T 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p 114/r/s/t/u/v 120/x/y]/Type/Encoding>>
endobj
513 0 obj
<</Ascent 716/CapHeight 724/CharSet(/space/S/i/d/e/one/A/p/l/c/a/b/H/o/u/s/h/M/m/r/period/two/three/four/five/six/seven/eight/nine/zero/C/v/g/E/x/t/n/Y/T/R/f/I/y/P/parenleft/parenright/F/hyphen/J/j/k/O/N/D)/Descent -180/Flags 4/FontBBox[ -169 -250 1091 991]/FontFile3 514 0 R /FontName/OPIKLH+HelveticaLTStd-BoldCond/ItalicAngle 0/StemH 100/StemV 130/Type/FontDescriptor/XHeight 536>>
endobj
514 0 obj
<</Filter/FlateDecode/Length 4115/Subtype/Type1C>>stream
hޜWyXW��n�
b��`w�j	q��(!((
.��@\�ie�����(��t7�1��;&�&1�`\B"�<c�2f��NO1�̩��̼��������ֽ��;��;��2g�L.��̚6�Iik���	qa�ى��e�%gf$JS��Z���,��ʉ�]�d2����?�J���c7�-/�3�eN�����s��Y�}Jj�nܛ~o��������	�k߈����(���c��&f�'�"r��I�Fݬ��LCV�!.;)�W75-M�0j���I�5���{�0}FfvnV�.4=~��No���
q�I�q�U����F}qQ��6$%�����$�"�_�t=#[����|�z~r�>!�1���À�suB�!;�hƠ[��AoL�'d�33��m<#.=��"Ӡ�cih>Ø��?�)=��KLJ��t��2w����<e�Aғ�%�L%�
��<d2�L�%�id2o���I6B!�u�MP��e�idβh�L9n���d��
�0Y��S�_^�P)����2�A�oN���<�y��oJ���[��&Ra�����E�2��W̳��_jsy���"��W�q�q��z���￶�J�Z�:=`����>q�v�.i7�����T�,�z��(����J袈��p =��ӽ�2�o�B�/p�/"=�����A�#=�@�]O����z���iU	(�c���Ox'��Ԡ �ik��G�P^���}|_�~���ʓ4���ҬO�Z_|r��̑�*�j�?�&t�Ѹ,F
~clrhAԠ�+��,��F��V�C��;Tq�C��FZ�ubGrz��D�d�`�5P��h�z\���0�)�O���c��l��]-���|����*B�Y������.��sd�����--Ll|�7��7����l�mk����6�}�ZjK�PSh�_i@Qh��9d���w{7D���� 55�u��0����;��M���a%�EB��|�c
��S0q��w��x�@V�2�����R��9P�C�4䵏a��u�A���{x�>��n�ٻ`�n�xG��5�HJ�*^�S{*s���	bz*92dA�i��SC����}*�׀3����z`����[#�EZ��C���4
�L�M�y?���G��
9�J��DZ�����	NA4) 4�2�����dj��~i�4�0�|.���G���6Խ�W,���I�i�$kS2�]*��L��ig����aB�%�N��2�w�]�����$*d�^&��߸S�ִCBU�5)[3�<e���WM<�\NM6WoX��k`�`:�ʬ
FB�s����5�/�6B^��G�
<[�s�;�j���
O.JN��6��g�����n4�����e��]�o:�1�O��Һ�zm�{�ĵH0O-��Wư��V�7_d�'E�Z'�-�?�#�e�l䏟�>~;�`�^��ו�
+���w�T�=nv\�'�����x��J�$%`]�v,$â��|2���auW�:p;���׿�D��2�?�'�%��%�B���]�q�'H����_t�9�n[r�L\:�, �������Cj�Xz��bT�6�dj�d��"���F�B�?�X����w�/��`���G5���Ȕ�%YH��gJ(�s����J�նj۟e[g˳敦���'�ދ�Rh5�b+(�?�7O�.+ɗ�]"
{�XS%q��}���U��H�>�(�M ��֘�<f\#m�^O�ID�����Ud(��l�=�+.���U�݌
�%�;���B������?���3�� �[f���e���O���	@�,A߆k�������+B��Z�����d��w!��&��2IF�ql#�7�x9(z�g�$�]81�w>W�.(�Y�8�g
�fA9���5��?A��HS�8���(�86�&���N��D*ȑwH����[i�;D��y�p�Sp�!�~�Y���6i?�Z��B���f��!��v��h������V�o���������`�	F����a���P0�'Pi�
�j�
�w8h��ȓ�1E�[�2S���\��O���Y�(G�����0J�m���ʹ���e��B3�U����P�y�W��0�j3}^�9_|��N�U�Ի���؆���^0T
_2��S�v��2�o;����`(��?�!�p=x�l�ҀO�G�_Ld�|�D���a��>��ļ�a�$�gH�I���Qw�������� �7�n>�/Z�����i9]}���x�
ONI�A�톫h'��ډ�0��3w��?���m��Y�Z�Mc�c��M���BX�斡�o��7~}�k߷_i�s����:w(�����R�a�&(%})���k�<J��L��0U�K� �p�-� ��l'<�x$슯��A��gN��/ׄg�-��!�t��K$M4m�Q?�
���7���g;ON���(��H��VM���b۬�A�;�
[�Ω1�g����O��J<FT�mo�pd4Q��J"�-bD�=��I��ŭ�ۼPb���N�o@���M�a���s����p�fc�0��CŇk�[��-���в�ɤ� �U 7�ٲ�~o�a��ci�!2�a�^��F8
a�.�u���5<�wguMU-���1�Xs*s�\��E��#�hc7=s�~��O�{GN�?���tsܯ���=Y�"�k4۾l׶.�����^dڰ"A����@�d.����l�ш�.��7����.�
�cb�L�EZS׮^�ea=l۳G3��|}7�%?�G���șk����~E<��'Ǒ�V�̡�Ȣ��w�:��:�.^fIN�$�m�k��KIk��HU^�M��=��a\����5�q	�\4񰀾TZ؂1��Zf�Sg�HMQy�u�<�L���Zi�d�Ya"c��fϏ��ö�l?Qu�Aŝ`J7�u˥}������ڧ�H-��%�!D�tۆ�Xmb����+�u�ߵ��,�Hm�A�����MM�/T�[��6�����3�����z����~��A直���a2m���G�e�*DD��U$��h`�!��L�"'n��џ��rd2�� �Fb�}�c�U�٪o�r�!�ʫ�f�[h�s�Sj �˟�1ξ8Bq��P}���5�^�yy$Ͼ�n�m�f�WPVX�S#��R&P���c��؏6�U�=ofΛ��Djz91�~R:��Tmf��YɂLD-I��C{�_�E~[Z�B-�uo;��r��3�`���oǬ�8���sW��\VS�\;����F��Ɯ����t!=�/V~�0�9x,D�!j��/�#yJx�B���!GI�)2�d+����4�Pr�E{��iTj@�Q��
�٣���2ؗ���=�KSW��V��Z�������O]�����%�^<��ˑtmqm�͉7���[Z�싵ęd��rR9H��Rܟ��~��CN�'̮���>��n��!�%Ku(1X#2Gd�����K-��C�����;H,�#_[`	�,p#��d����"XȒ�� �ΨH���F��@���?�?5������BT�u<���f���ԧ$�MIK'������9�H)~#���s��p��+?P
�b;�.m��ў[[��k-[r�6�]�.{]���O����?g�� �n�Q�Ǒ���eth�'0�����OF]\Y3䖗��X������u���L���owlK!ѯ�����L`�|s0�!׶jPJ��dmz���*`�SQ�M�nn�9�d:����	c�'5��ם�Y��|��s*ѽ�Ц7G(��֐yy�����7�9��8<�;�v����֓u{oJ�]�=1'G�]po5LDAەDKE���%E��Y؎̇��7GB��t
�
y����H(a�����;��d�J3�g��:5O.�aRj���¼�\�i�.�.�^�w/l}��H�oo��)�q/ج2L����eYN��MJĎ5<�5��љ��_��E3XDw��pr� vkLq�,j*j*h
�^�\����ݿ��!+�(UN��#�5de��b�vG�y�K�.��'�<����  (k,�
endstream
endobj
515 0 obj
<</Filter/FlateDecode/Length 321>>stream
h�TQMo�0��W�ة�@BK+EHS�I=�C�{��i�(�C���u�y~~1�|w�\7	�9�m�l�q��p�s�`;3ͧ�5���c��:N�\;�R����8�+,�ӳ|����s�:w��[������/��MP@ӀŖ�ݣ�O�G��KoW� ҹ��,�^ڝ�(P��t����qjͧ,3�"��2�10�ڦ<5fvY�4g-%6�%25��`���/3C�Kd̫u�I@�� iT���sU��Ty �5
Zgƚ���Qgњ�f6����yh���v3�\B����&����m�~�d$��[� uy��
endstream
endobj
516 0 obj
<</BaseFont/OPIKLI+HelveticaLTStd-Bold/Encoding 517 0 R /FirstChar 32/FontDescriptor 518 0 R /LastChar 121/Subtype/Type1/ToUnicode 520 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 500 500 500 500 278 333 278 500 500 556 500 556 500 500 500 500 500 500 500 500 500 500 500 500 500 500 722 500 500 667 611 500 500 500 500 500 500 500 722 500 667 500 500 667 611 500 500 500 500 500 500 500 500 500 500 500 500 556 500 556 500 556 500 611 500 278 500 500 500 500 500 611 500 500 389 500 333 500 556 500 500 556]>>
endobj
517 0 obj
<</Differences[ 32/space 44/comma/hyphen/period 49/one 51/three 66/B 69/E/F 78/N 80/P 83/S/T 97/a 99/c 101/e 103/g 105/i 111/o 114/r 116/t 118/v 121/y]/Type/Encoding>>
endobj
518 0 obj
<</Ascent 0/CapHeight 717/CharSet(/space/F/o/r/P/i/v/a/c/y/N/t/e/comma/g/T/B/one/three/E/hyphen/S/period)/Descent -174/Flags 4/FontBBox[ -170 -228 1003 962]/FontFile3 519 0 R /FontName/OPIKLI+HelveticaLTStd-Bold/ItalicAngle 0/StemH 118/StemV 140/Type/FontDescriptor>>
endobj
519 0 obj
<</Filter/FlateDecode/Length 1859/Subtype/Type1C>>stream
hޜT}T��awfuE�����(>P�5PQ�r%�O�
��+&h$1�eP��p� ~DEĐ�R�{*Z���V�ѐMMM=���������'��;g�λ������}�XF�ð,kX��|e��L��\u�
�Y�9�¸4kI�g;�X�%!SD:%c�WۿZǑ�i�?yo�h��� F��r�]�[���J������2?)�c��6�cS���I��ԟ��<]h�W��J�C5ە����j3:�����%%�Ԯ�T�j+�8��JY&��QY�*�������v(&�bT6c�j6ڊ���)��4��DI��B�dQ/����9��lJ��P��B%���՛6�
T��l�T��g�6���Z)�Mټ�f��
&�����hV��զ���
o������4'׳����~j�����TF�Lc�p&��b�0	�<&�Ic2��L&���fr��L��a���ЙUL9�d~Ŝa~�.b�����$�T�|��5�i�����h��\����O���Aro��6bPS�%5��^�!C3wxT�"x�&����}��H�<9'z�г�+��s��d��(�a��
�������-A�������¬���"Fc��k����6�u
��ڇ`Z�?�bb��.��"� 8�{��!��d���Jh�rV�6�B���PP�=0��(<�rwW���jN܎���

��h�̗� ����aj�)[��['��;00p=�q�;�8/5&A�U�7\+��,�e����K���0�?`"�D� �cAp����]}g��S��_������@��
�<��F��	��C�;R�^���y{V��8M�,�l�B*/�����5�2f���z`�ƀ��A��|1�/���~�at�� b�t^��Qh��`�-�a��R�#���(�ӹK��Nv�C#��"���Kj8L�!
i������'�Q�D(��J/44~�)gX{�_��ɟ�,�-o	"hi�dݝӖ%��O�V�7V�?�C�i�w Bs�������PzJ@L�{����g9s�s�w���t\����%����i�K
X�<�|A[���Jn���K9�O-ܚ�3�c}u��d�v^�<�t2.��ʿEGev�{O����@�N��B�
�*	a�v�"���_���mt��f8�nM���zK��\�����y����:~L*^7�~���1�ֽU���1�cQX�U�L���롳�ϵHC-�-��|i}��M�cߤ��y�,a�h�/˘Y������R���<�^�xX�
��df��4LE�� �,�]�#{дt��I����=ċ���Br���o�L�.v��ðjW�t�}�a?�� Y��|���a�BYR���C�C`�.�[��}�i%(�=�LzD���Z݉�C�8)<�p�����g:�ݵ�J]RQQꂗ��wJ�#�|7��ښ �S��4���@�?�{�/�K���b%��|��YOG�������{�Gt�I�����)�̫��n|�������(�c8}Ĺ��� ΅p���+aD�2g2�8�ߥ����e��i�E��|�0Le��5��}��m��.	�t
��
Ն'���Z�Z^��)�赵�!|t�}�2��|��H���c��C��T� �PC�!���nǎ�jÚ:�Q�?�?O�W��5�#6`?�JIՊ���)��!�_���y�q�pE�.n�������!'=�xd�	�
~��.m���g
۫vʨ�յ�;h ��7�We}��ؑ�֯IO+ĺ��hn!v�5��io�趶��X����$u�W}=e���2�NĈ�` ���
endstream
endobj
520 0 obj
<</Filter/FlateDecode/Length 325>>stream
h�T�Ko�0���>v�wP%�4u���Z��i0i�(�C����6$�/8���h���a���O�t�m=�������$�v0�u�flD$>\�ǽ�&�*��s^�V��Y��u|ыo����1y����s_8�] ���;m��܌����xqiX'�4�g����4��*75�m��T�Er��g�l�c2�ʒ�d�3�8O�!F�G�B�k�h5k�h5ku!\0��%�Fx��	�K�Ur�2Ι��f-E^+�~�:��ЦT�M��9g��19�Sp��� ��D�}���&a��Ӑ��������q��n� �â�
endstream
endobj
521 0 obj
<</BaseFont/OPIKMI+HelveticaLTStd-Blk/Encoding 522 0 R /FirstChar 32/FontDescriptor 523 0 R /LastChar 121/Subtype/Type1/ToUnicode 525 0 R /Type/Font/Widths[ 333 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 667 500 667 667 500 667 500 500 667 500 500 500 500 500 500 500 500 500 500 778 500 722 500 500 833 389 500 500 500 500 500 500 722 500 778 722 500 500 778 500 500 500 500 500 500 500 500 500 500 667 667 500 667 667 500 667 667 333 500 500 333 1000 667 667 667 500 444 611 444 667 611 500 667 611]>>
endobj
522 0 obj
<</Differences[ 32/space 48/zero 50/two/three 53/five 56/eight 67/C 69/E 72/H/I 80/P 82/R/S 86/V 97/a/b 100/d/e 103/g/h/i 108/l/m/n/o/p 114/r/s/t/u/v 120/x/y]/Type/Encoding>>
endobj
523 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/H/e/a/l/t/h/C/o/v/r/g/E/x/m/p/i/n/s/d/I/u/S/R/b/y/P/two/zero/three/eight/five/V)/Descent -162/Flags 4/FontBBox[ -167 -250 1007 1013]/FontFile3 524 0 R /FontName/OPIKMI+HelveticaLTStd-Blk/ItalicAngle 0/StemH 148/StemV 208/Type/FontDescriptor/XHeight 536>>
endobj
524 0 obj
<</Filter/FlateDecode/Length 2724/Subtype/Type1C>>stream
hތVTg�!d�Fe�h�Ċ����,�!��<T`B�D�����F-���U+���V��Z�D��*���Ǫ[�}�מ;��u�`��������?�����}�w����(��U�Iq�	q#g�lz�!7{Vj�U5� �s:\R��-
���~J|�^�s�\z���N_�X��A~�)��B�������
/�hՎ���g
��zֈ紡�G�j'���6��b�Z�q�\�y�ɜmՋ�����֬���6��ĝe0��%K���93��H��6[k5g���ls�֔�_��ġ`�􂁸h֋Z�Qk}Q����M"���l��M�M;1/ϐ��af�hIx���՛���i"0f��f�E4�Z
&��Wpcv��O�0��A�7Z��?���!�iE}ޟT��)����<�~՟��@Q�)jM����4FQSh*��fxQ	�T�75���BégHa������z��+�k��e-(K�����}E"_+��)`���;�]�^��c��|�|+}���5�k[���4YZek����I��T��`��fP�'y��
��Yг�($4#��z(�Z������%H$?Q�=XIo�O�>����ߞ��*��8�Q���5��\\��yC�Α��	��)���u>
!o�� ��0��� �0
R1D��A�'��7^T�;��L�ۆ䬥���4�����W�ж�P�	��L�s̙���\�4â�0��6" �o�3����C4/4�n��9�n�8|��A��jn��4Z�@�l�8��#�oA��*�̓r4{Y�L�,y\p�����Ȃ�PO���c@nY����8�j��i$u�PGB{�<N]
}'@�t���_�;�K��M���P���k��?�bq�J
$1�5v��^��J�:������s�sf�mھLX���X�ϧ��<p�h�o$�Sp�����7�n|C}�i�n^n�l}�΃/U�U*���<�},�a<�t�!��D���U�����p��i��b�&�4��d��%	��h\��,�aX�/A '$���
�]ڙX�s'��o�?��z�V�{��7�uk!�4@����z #��	�"��������X�
�A:��I���H�%aYp�u�X��h�r,��M��[����GJϱ����X��q��i�2����4��q�l�U猄ܥ��7aX�7�_�B ��o1W���$k�Ba(D�H���&0r�J-<����C���b�!����<9�+_�U�\����z�70,k��&�{x���ǷT���Wj��G"�\�(��D)
&�-`�$�ɺ�Hy�_6�G�T���l�B?EZe����-�����6���A�z�2HV���yjݡ3�R56Զ5�ʝ�4ۜ�;֙}<IV}w�\Jx�̉nQ�N�-�/Y<{�W�6=�Ζ=�M~L���L�~��䓜���[���.�_S�W,�s|���9e�d���߮٣�?���d�(t���������ϒ�)E�A�>Ǽ�����S�[���{慚ܥrҡqv���N"[�n�G��$w�,��U��o<.�QäЏ�/t��*!Þ�#��/������u�|�+>%�7]�#�~�E��cO�XŶ-̪�Sc� ���k���B;��:Z4�#��E����gv\�ti�,�l��l9�|��/��� {F�V@�~s�#�24 �!�}A�s��<za4N�HҬ
x��`��G�c�:5��9A���"#�  ���
F����{:g�k���P��K���W)�E-m��;�ί�`�{<���dHP���dD�8�4�Y�9�=�����p0qDu����{�
��h˒D�c�F��3:7��V�R�lRo'y�=5	&縒lv2��w�ݚ5O�{	��B���P�i����Z$���e����<�A)�Pt�X�7Q	$e��4�/�z�̃��#p��%�C����Z�z�oa�o9�a{mA�wzh���y�f|�����Z�y�<��(u�̹�E��uLa���K`ܵ���;�$��4ìL
w�&&���Z�
Z�����8Wʟ�~S�
4,J��w仳�O.k�$�q:(CH�#Ay���H�iL���35
c�0�@@�������+��GɄZ�.l~�zZ
���S�!A@�$�141�o�T0���������O���oom? �k��S_�L%&v��x��}��A�l��p�A~��?�֖Wl�p���r��Ng�S=1M�0
|�O�cZ0����T���c��]d�Z�ɐk��3�0z
tH>#8k�~�q�f�~jH����-.�4���	�S�h�|���ܹY�,�f熗������eT5"�FU�v.���0U��|
w��^R��%�)ݼ�Υ"���Ə�K�!i`��ѭ�v\�����Y��l�B�.4���k=����]6\R�k�b��$�d*�g&/H�on�����B� ��b�����+m�8
搤��8�I�+�T%8��\r�dF���-�4��ݒ$ۭ�e�U�� 9��8h��P%�b&�� 9.g`2V�Zr��v�F�B���D���:��xfii�C��غ���RCB�	��.@�T���U��X3p�֭����_KLU��rrv��Z�������}!���!p���M~Ou������#� E�(.
endstream
endobj
525 0 obj
<</Filter/FlateDecode/Length 334>>stream
h�TRMk�0��W���C>���1�a��t��1Nz迟de�p���$=$�������n�\�L�p�.N#��<����'��ck!���u^pܛ~���7��w�ͽ���j�A��:t�9���q�X��#�"h���Sk��!��{u�Z�ğ�����l[��5g�:����4������S�?[�2�h�Tp����K�Y�1m�E��FI��X�Λ�ꯕ���b�N���0e�*Y%)��b��bE�O&"cB\&�`Br&Bs#�[�#���B��(�V1Q���#7��{��8G���O�g0��;Yn9��[� 
.�{
endstream
endobj
526 0 obj
<</BaseFont/OPIKMJ+HelveticaLTStd-Roman/Encoding 527 0 R /FirstChar 32/FontDescriptor 528 0 R /LastChar 121/Subtype/Type1/ToUnicode 530 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 333 333 500 500 500 500 278 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 667 667 722 500 667 611 500 500 278 500 500 556 833 722 778 500 500 722 667 611 500 500 500 667 667 500 500 500 500 500 500 500 556 500 500 500 556 278 500 556 222 500 500 222 833 556 556 500 500 333 500 278 556 500 722 500 500]>>
endobj
527 0 obj
<</Differences[ 32/space 40/parenleft/parenright 46/period 65/A/B/C 69/E/F 73/I 76/L/M/N/O 82/R/S/T 88/X/Y 97/a 101/e/f 104/h/i 108/l/m/n/o 114/r/s/t/u 119/w/x/y]/Type/Encoding>>
endobj
528 0 obj
<</Ascent 0/CapHeight 708/CharSet(/space/T/A/X/B/L/E/Y/R/C/I/F/O/N/M/a/m/e/parenleft/s/parenright/h/o/w/n/y/u/r/l/i/f/t/x/S/period)/Descent 0/Flags 4/FontBBox[ -166 -225 1000 931]/FontFile3 529 0 R /FontName/OPIKMJ+HelveticaLTStd-Roman/ItalicAngle 0/StemH 76/StemV 88/Type/FontDescriptor/XHeight 536>>
endobj
529 0 obj
<</Filter/FlateDecode/Length 2456/Subtype/Type1C>>stream
hޜU}TTe���ދ�C��N��L� ������b"�����+����W�"h&"Dk���jj�~�qr��0�����J�qJ�y�g�}g<��=�?{f�{��y���|?/���1,ˎO�X�xɓ)�56sya�15+�<?rii���{F�,yȟ���#Aj����YwgG:�I��/����Y*F�kd_g;�J�*-����1�q�O��3|k�w�7�V%>ηR�4�a�~n~�ɬϬ������E%y���R��ܜ���f��j�[�V���%�ߚRKJ�+����Ŧ��~?�B�ި/����F˟���~�O�&FQ�Յ�h�9__X�//0럎ʌ�gP�K��ƒ|}�}��U�
��>b��RO�O�<���H��Ƣ/z�Rh�/�+/,-��
^b,6���}!�`
�/�����d��,��1}�y���a��2�3��	c�)�`b��x���0Xf�,Q0�
&Ǐa��4��&��ʼϜgǱ����w~��B�f����S<�ؤ�������ϭ�^�9�ǯ��x�0^�(��`�D_{��ΰt�xFQ�O���j���ΆW8�ƣ?��{��<���=�Fz���w�ޓR��f�3��^Q��2��p��/`�M4ȟ�	������_��ɿ�A��:�I�@TL��H_!��A�����x
nΉ��T��6{��2oK������l`v@�O�vU��Aq����9���<�u�8����wM�(�f�M�$^z�:�6�p�s�C�s��.��KW�K���`	��"�9%vii���)�i�����W\"8��t"<�r���Ƃ!���û<���m�[{XBNN��x%r���7�pO'�$Z.ѢU�k� <
3>��F�L�cB�ũZ\�j�Oݺ�[���Q���e��R�C�$�f������O�]���;hpe��0(�-ޢ<�-wM.^�fs���0��p��)>ZN��dg�)q�="1:<��V����w�T��+�uj�	eAl��<7���&�����/�i�>����Y���u�!�4�)5���@S2����)f�Q��-�4�EB2��@�(����u�"�1��B��(��Q%���h@C$Ӑ��F(q�<���x�b�ţ�1�k�B�}
V�����
�CP=�r��״Q��%�%�Fo)4.�(�G�)Wc_�[�6o;�����FM��Z����;�50�c��W��t��V���Q:�r���%[1D��N�� �Њu���`���-Λ�~�!��Nn���BK߶��L���dY�z�:�Ҙޕ%�� ���~N;I[�O�8�]'��$glx��K�-]��U������A\�&w�Uw�\� �rx��u�����(���K�~�0��'�
|��P���<����p
��S����UpB��d.�<�&��&��!��~��p	ʜu�/��^�_���)v£������5�:V����%[�'UrV�aR�&�B��><u�,V��7�}�m���fݧB��j^�Vn�ݮ�����F#Jq�1�J�>\,���	��J�=߳�ݗe`��_i�@m�9�0����$�����a9�VGT<,�A�sg�ښ�WQ��9���~��{�/տ�:��}�:<g&�p��d��j�u8�L����n�DӾ�{��m�#
��oؾA����O�b��}��v�l*�;)v��	�N�D��Io͜��L�E���bp���/���֕�e��)(=�l��0�~F5F�V)������������{㻤��E���O�:���+��/^�V�Lp:�ݒ�+��N�B�x�⥾��I2;�g&�̜Y�zy��ƺⳑ��g�J+t5�x�Rܯ���w�ھ�H�r�'S��Kq�B8*�>]�+
2�Qgr��������pvX�64K���PH��~-h!0!CQ+�/��Q��NN^�j:IUkA}���P;2F���UN�������_�o���aA�ۼu�&��������z���u�dR?{�
l�Y�$�ҁ
t>�O��
I�V�V�?X����덚��ZR��W�����f�<-~�
���c�v�b۹�-e
�j�vw��1�h����OBz�+4!
���a�6��xCHݷ����w��{����up��-�i]�dW]pB�S� �դ5�bgbQ8*��t�0�	0�ڪ�o:u��j8�"�ހ�7�H8����b�!�}�<��0SI+K�ꉦ�{����0�~2�G��i�|J=}L޵�.;��X�	�K��8dx��8R}]���詝O��Ը�*�E��l�b�j��G`��;�ud67��l�a
dܺa��Z�s�&�X� �G����j���C�� �$vAb�^Y!?�fS�/���47��l/Y�G�ے*տ��t���<HnJ�` z�r�
endstream
endobj
530 0 obj
<</Filter/FlateDecode/Length 330>>stream
h�T�MO�0���>�Ц4	��Jh��b��K�Q��Q��ﱓ2�R�7o�G��l��۹~��%�v�3t�kN�)X�{�����_;42*ޟ����F�*����4�3�n�~���
���b��Vo�������/�͐C]C��ȶ��j��O�����#q-��[�|c14�Py
��Ԁ���'�Tq��gD��s
�1�{��&j
��2j
�xK��?�ĭ��*RiBpYy�8�
ņN�bò�%cK�*H�2��`�JP�P����3t��1��:A5C
C���a�1Kw�0ˡ�)�_<���)N�{l>��wx�~��e~ŷ  #V�

endstream
endobj
531 0 obj
<</BaseFont/OPIKOK+EuropeanPiStd-3/Encoding 532 0 R /FirstChar 2/FontDescriptor 533 0 R /LastChar 3/Subtype/Type1/ToUnicode 535 0 R /Type/Font/Widths[ 1000 834]>>
endobj
532 0 obj
<</Differences[ 2/uni25A1.alt1/uni25CF.alt2]/Type/Encoding>>
endobj
533 0 obj
<</Ascent 0/CapHeight 0/CharSet(/uni25A1.alt1/uni25CF.alt2)/Descent 0/Flags 4/FontBBox[ -5 -295 1161 1000]/FontFile3 534 0 R /FontName/OPIKOK+EuropeanPiStd-3/ItalicAngle 0/StemH 48/StemV 48/Type/FontDescriptor>>
endobj
534 0 obj
<</Filter/FlateDecode/Length 396/Subtype/Type1C>>stream
h�bd`ab`dd������v--�/HM��.I�5I���e�!��C�G�<�������a��U��=��{����B������E��y�F���z�9%�`���m�_PY���Q�`hii��`d``&�S�R�+�KRs�<��
�KRS�sr�ڊ�R�S��@��n�!��
&
)�i�n:������ѯlُ��?��e�*{��Y~t��������Q��v�'�~��[���� ΟI������v��|��EA�� ߯��>��;θD2���- �w�O d�{��-�_b��������6�����(�3��������p 4�m�;�w�w �=�{�w��F������WΜ��ǁ��������w�tv�N�3��p����
` 0��
endstream
endobj
535 0 obj
<</Filter/FlateDecode/Length 230>>stream
h�T��n� ��<���z a�v���L�rh7-���i�C�~@�nC²��Çy۽t�F�o�u�����W��Z��:nU�zRx2��q���iO�i�ݡ���y_= %�d��K���%�o��E�@J080ޞT8�	��q�J�5 �R��78����J�%�3�5&n�렿�[�x:ԒC�ۣdɷu��'�Lz!J�e'�X��a�y� An<
endstream
endobj
536 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 537 0 R  6 0 R  538 0 R  8 0 R  539 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 499 0 R /GS2 500 0 R >>/Font<</F1 501 0 R /F2 506 0 R /F3 511 0 R /F5 521 0 R /F7 531 0 R /F8 540 0 R /Xi61 106 0 R /Xi63 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
537 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
538 0 obj
<</Filter/FlateDecode/Length 5429>>stream
h���s7�������{5O�Ğrj��X�U3�<�m+���������C�D���L
��Ub�l�F@�i~:�Ι�ԇ�xkՇ�E�Y{gU�*�u��������˳��������:e�?��lt6&*�i�STg�����?/�9%�\89����q���ڨ�阌U>�R��x���b���-��9P�����}����ٗꤋf�s��$�tƹ���}�xu������:�
5�Qi��*�o���7.�w��[u��KG:����P�B�s���������u�x���"&7��A{�_��D�io ��p�H�l���`��G=u�ڿ���{:�v��p����!9��y<��O�U�ӵ�h��M����9)NsaاP;څ����ڧn�F�@�iurJs�.՛�V���\
�+��Sc�����ˋ�Օz�qu��PY?���<\����|�����Y]=~��V?CB�#�M�r���u���n��/zm���K��������9��'��v˿�ĸ�}�WG�6F�Z��y\߫�����Z�ߩ�˛�*����w�7�������ܫ�M��N��)����u�\�C����k��z�N,����yx�:���
�r��"mȅ����F����J��Q����?搳�nDy�V#}]Z5o���4�|.�D����l"w4��Ͼ����7{&��˯nZ߯>����B��e}}7�W_]�.�i���9�8��N:��r�͞ǧ���v{j=��P|'�t��K�y�>�>����ڭ����]?ˆ�鍻����ջ���x����x{u�h���������M�d�ӄ�^�Xr?�<��y�/���'u�������GYoγ?�Ǐk�H��iM����w����j��Vs���i�=A����]َ��t�M]��n�n��4��g��)
�i��H���d{O�����y4�b�X-֯���<6�i��<x��cl�%���������N�R�o�1ۏRg����������B�r,�So�tz�Wl}k}k}k}k}k}��ml�g�H�o����ܼC-D��<��g�Cwo� �揳����F�����f��id[��e���hY��h!௸YQCݠ�c�:��rV�B���B��U��e�F��h!Z�j!Z���Z��e���Z�vʹ,�B���_�|�t6����h9��h!�7�6B-D�R�l�B�,�B�-K�-D�R-K��iY��h!~ÿR�\�_�Z��������f5D��|ٯ�N;Ϯ�iq`����:
%������l��6�#υ�u�����;�����?�`��>�~O[[[[[[�L�������y8A�.��U�e���i�ٻ�9?�������{-����g���|R�x�����
��8���3^6���X�7l�N������7۝�l�M��6mCܴ
yӶ��m�i۟����b7�H��&���5ڔ����ܮ����j{��ڕLvޢ,E��� �&���&����יN��=%��4��6i�Y�!g����:�^,���i}���V�������������b�pr�#�c�n���C��>��Rg�����ꇓ~�S;< ��;u��b�������zu��O�>�a�nj��/�v߬n�����79�&�١��>�䂛8�Ҭͷc���ɬ�Z�c����}��{n�syv�OSB?k��sM�y�Y�m�Ofm>�	�gM����d�M.�0���<}���g'�#7	a~���G>������R����Ɩ��@W���y��n��5��F�Gۍ�^����a�5���8�<=��#�OY;No7����W>��3�n�����ã�nu=�ƫ��u�g��_ֱ۾�P=��t������~9_8]
��u��ی��e��v��q�C���i_3�~�?���VA};{nI��1H��#�-y�M��#������M?�С��HO�A�;w:����|q��������H���8���b<(6Ӹ�A�F��������Ő��t�S�c��נ;��Mo]��l7�ͮTM��N{�k�@���N���(dCD"�?dMw���v��&��#+Yo,Y�@!�
���
��!��������l�8,X�<N)�����BB�`��d�P�2Xt8,:�#N�������W����������B{[�L�j���3I�f��M�w����.����o0Ȳ� +������o0Ȳ�A ���,���o Ȋ� +�����`�o0�&�&��l��`�o Ȋ� +��l��`�o*&;hNu��k�bN�s���_�f�����jԊ�%�Ry=�$}"�$-R]��H�K� Ɓ��j��ui�Г H]ZO6�ԥA���&��kB���&��k"�e��A��&��k����&��k����&��kb�e��@��&Y����k��M8��&ق���kb�e��@��&و���k�LvG]Z�N{3���ui�KtE�Q ����uڀԥ��kS�A��
Y�7 d��@��@��
Y�7d��`�e�@��
Y�7 d��`��8L�
ل����`�-8L�
Y�7 d��`��8L�M�d�֥Q����A���ui1m~E]����ht�K�����4�q����bG]Z?���D�K�{j�+��k"�e��A��&Y��d�k��	AV�&Y��d�k"�e��A��&Y��d�k���A��d0�dN��A��d0�d�k���A6�d0���U��;�M	G֥y��I��e�;���؁�"���oȲ�� �������oȲ�� ���,���oȲ�� +�����'���� �p2���'���� +�����'�����쾺��sn9a]��:���Q�f�.C���m�S��K���ui � uiĎ�4k���K#��W��k"�e��A��&Y��d�k��	AV�&Y��d�k"�e��A��&Y��d�k���A��d0�dN��A��d0�d�k���A6�d0���Q�
u�躴�;:���\Y`��B�ڀԥ����K� ;����A ���,����!;����!;����� ���,��'���!�p2��'���� ���,��'������޺���8���֥�jl��K��<ui!;����H�KC�K�y ^֥�dk_��ui!��ԥA�e��A��&Y��d�k��	AV�&Y��d�k"�e��A��&Y��d�k���A��d0�dN��A��d0�d�k���A6�d0���U��Φ�#�҂��.m��0ui�Z��r�7D���;�
Y�7d�� �AV�
Y�7d�� �e�A��
Y�7d�� ��A��d0�7dN�A��d0�7d�� ��A6�d0�7��[�f��ιA��ui.�'�sD]�3��ԥ�N[����8X�0R�V�@�Ks��u�R�F���(��@��&Y��d�kb�e�	@V�&Y�d�kb�e��@��&Y��d�kB��	@V�&Y����kb�M8L�&ق���kB��	@V�&و���kVLvW]�	ڛ⎫K�%� �/A��4O߉k_Q���S&�uE�KAv�7 d'�@��
Y�7d'Bv�7d'Bv�7d'�A��
Y�7 d=NcB6�d0�7 dNc�A��
Y�7 d#NcS3�}ui>
�� r��ui>S�89��ui�K:`ԥ���T�6�Cui��ui5�˺��l�랹.�w`E�xM��51Ȳ�D �^�,{M ��5!Ȋ�D �^�,{M��51Ȳ�D �^��xM ��51�z�&^�l��`�51��&^��xM ��51�F�&^�b�;��|,:�b��K�WR�
���4[��r�7D���;�
Y�7d�� �AV�
Y�7d�� �e�A��
Y�7d�� ��A��d0�7dN�A��d0�7d�� ��A6�d0�7��[�f�n�uiy]������Q��H]���"եm����4�q����bG]�wկ{��4"[��r�d�kb�e��@��&Y�� d�kB���@��&Y��d�kb�e��@��&Y� d�kb��8L�&ل���kb�-8L�&Y� d�kb��8L�f�dwեY��ץ�BG�P�&�S�fM�+��ߘT����,���o Ȋ�� +��,���oȲ�� ���,���o Ȋ�� �q2���	'���� [p2����o Ȋ�� q2������Ks]�ٹ�㔽ei�xmb9�*�e��cT�9zM@Ui�q�(
a�(��qxY�֓�}�3�9"\�rr��d'�	Bv��d'�	Bv��dYjb�e�	Av�� d'�	Av�� d'�	Av��dYj"�e�	B��d0�� dNc�	B��d0��dYj"�e�	B6�d0��5��Q��ސ��j�\��aԤ��O���l���E��ZW���7dY�`�e}@V�
Y�7dY�`�e}�@��
Y�7dY�@�}@V�
Y���D�`�M8L�
ق��D�@�}@V�
و��D�TLvoM�7�;;�k�W���c�G���R�F��"��m����4�q����bG]Z��/z��4"[�rr�dYlb�e��@��&Y� dElB���@��&Y�dYlb�e��@��&Y� dElb��8L�&ل��Dlb�-8L�&Y� dElb��8L�f�dwե������9CG�P�6�S��l�����خ���;�
Y�7d�� �AV�
Y�7d�� �e�A��
Y�7d�� ��A��d0�7dN�A��d0�7d�� ��A6�d0�7��W�f��&;�=����i&hs|a�-Y��4[�NH�i�#q�0
a�0��xY�֓�}�3�Yz�I9�M���!;�M���!;�M�,61Ȳ؄ ;�M��؄ ;�M��؄ ;�M�,6Ȳ�!�q2�M�	'���![p2�M�,6Ȳ�!q2�͚��(L���lr>�0�vI;��4�9�;(�i=��ה���\�k�w���o0Ȳ� +������o0Ȳ�A ���,���o Ȋ� +�����`�o0�&�&��l��`�o Ȋ� +��l��`�o*&��0���vca��[�fc�1N���4BS@
Ӣ��0m6� �A
�*��i4�k_�,�iD��5�"6Ȳ�� �b�,�M�,6Ȋ؄ +b�,�M�,6Ȳ�� �b�,�M�"6Ȋ�� �q2��M�	'���� [p2��M�"6Ȋ�� q2��͊��*L�t���Y��-CQ�w��S��]�k��߸\����,���o Ȋ�� +��,���oȲ�� ���,���o Ȋ�� �q2���	'���� [p2����o Ȋ�� q2�������  .�t|
endstream
endobj
539 0 obj
<</Filter/FlateDecode/Length 126>>stream
x�-ͱ�Pн_�Q���ڰJа�j� c�+_/���MνgX ��&(��S@�=�R���1~0DAm7���c-��ѝ��o�Y�6I3��x�A����D��	󞭣ZGU����"����:#�
endstream
endobj
540 0 obj
<</BaseFont/OPILBJ+HelveticaLTStd-BlkCond/Encoding 541 0 R /FirstChar 32/FontDescriptor 542 0 R /LastChar 120/Subtype/Type1/ToUnicode 544 0 R /Type/Font/Widths[ 250 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 556 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 278 500 500 500 722 500 500 500 500 333 444 333 500 444 500 444]>>
endobj
541 0 obj
<</Differences[ 32/space 67/C 69/E 97/a 100/d/e 103/g 105/i 109/m/n/o/p 114/r/s/t 118/v 120/x]/Type/Encoding>>
endobj
542 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/C/o/v/e/r/a/g/n/d/E/x/m/p/t/i/s)/Descent -181/Flags 4/FontBBox[ -168 -250 1113 1000]/FontFile3 543 0 R /FontName/OPILBJ+HelveticaLTStd-BlkCond/ItalicAngle 0/StemH 115/StemV 159/Type/FontDescriptor/XHeight 536>>
endobj
543 0 obj
<</Filter/FlateDecode/Length 1744/Subtype/Type1C>>stream
hޜT}Pg�%ɾ��P�.z���C3��B@�ժ�H9�V�@���ޠ�%@�"B X=?�"*x����܍�N{�����:�z�ٙ��}�뽉=��i����g���������ϻ4���h�泲7d��x.]��%��Ԕ���2/Zmݹ�n3�=�����*关9���c�r������Ur0Z��;�P���R���� =��^�qX�w�ĤeϧƇ�Ұ]��ƈ}�,��/NW��%���q��J���VjwT�&�dNWY�b��):$��p���#G��fwy�$q}eI���>l�hq�&��0��J�c�h/{���@��-�\�d-6ѵC7'�&�٤h�K4��b��謲2K�+M�H���R��2����8Ċj��i���,v��?�6S��U���(�z�S��Gd�ܼ�"E4Ke?��M.�@QOQ�j�ZKS��AQTn�
E�S���-�Im�������g����W�R�W��|AY����RyT��'�O��&�J�{?;�e����
8���,�78/Bm(�l�|�
L֌|���J#j��z9 z�H�' 
��4��S��n"X���é/��Ky�G��L�%<����%p�_q�zTt�WYEu�F��&�o6��7�'*^
���`	yx��/C�B6�@�G�*�"x
ą��~/�x`�3��ѷړ���`d�0�\yS��B=�ܧ���;�%�>�>У���8Hd�k<~\C��
N�Y�Ky{�f�lu��U��om�xC?p�ʚ�n�:����u�+Ŭ.���/o�~��yR@V�>�X]��RA=�=���U�BK[N�/@������yh�۸�{�7��DE�Q�>���Q�/#v"��A�[~�J�T��g����JI3��ў�$���3��F:΍��j�<�XR�1�bE���b��"<�^!0-<+����}`P�38��z9�U�ÿ��Y�]��93��<Fļ	f F{�8�*'�\_S�Ԉ�R{�$�Dd9`..k�;˳�x)�
����`��z��;��������O��ձ;(M��t������������+�j�����sA�Y~�-O��=�0*�#Occh��1z�:=��4��L�&ܖO#����'��i.4M\
���{U;_B���<�����T�w�#�v���G^�fr��x��ڿ�[�ͯڵE�c�O��43MDҰ�'%�IƱ0c~Qqq=ado�9��2��]"jsx��E����Ɓ=�C-����A�^R�
<;�s�}�Ý�r����=u��==^A���a%�=�-�ܩ��-�W�߸�775\���h�}�����
���rP��p�պ3-jP<�������X>Ϸ}�57���;H�$�
�Bē컣?*���r���1}0��
�0��
�,�@���i>��Y�'d��h;!�A��,~
�^y��sl<q(�V��W�@E�U`�Ln���-�:�p��u�rW��g����}����w��55�g�.�o�b3h�0��0~���q��pv:��u���:{��a�!��m�o��ת5�}0�iw�[���E�<K���m�nY2��������γP����Gp�n���V���dbD�EƓn�W*���&4����iNd6��|�#�
8E<�q�!IE�Ńx>T�R�*����U��"?2�DϠJ����wu�p�Ql28���"H�k����p�#�������>�o Y��
endstream
endobj
544 0 obj
<</Filter/FlateDecode/Length 293>>stream
h�T�Mo�0���>v�!@)P	!M�&q؇֮�41i�(��?'a�������S��	���'h:�,��l%�
�NC���䴞�.{a�S�y'�k�P���Sp���G��O�6z �j�N����Wr�gc��G=AU
Ə�¼�����
]���s��1(��h�n�$��̋
P��1V��[#?�e�f�ae��L�xxO�Ş��sǇ��<�L��Ǝ��Q����o��R���.��Pn�0Nvre�HC�d���o9��B��Z��?��ȩ�i�����}�[� �G��
endstream
endobj
545 0 obj
<</Contents 546 0 R /MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</Font<</F1 547 0 R /F2 548 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Type/Page>>
endobj
546 0 obj
<</Filter/FlateDecode/Length 742>>stream
x�}V�r�@��s�l����d)$;��/
�1.�,ʮ|}f��BZ�@բ��n��>���`��x=�0��>M0	���.�'��~�X�N�x�}�\|8|E�Ϩ���2Gή)�2!��������Hx��AT \�C�$Ҟ�B�PRK$+@���砖��A�)A�]�U�e�6�t��"^::�k�=pm�R�W�{��v��U�?���l���m`��lw�F��	je�i�+f�'Qs�DVLb�zL��m
��/������g%���!�o�OǗ|���jl[95o�m�)�0�E��f0ݯ��K�2 ��$��fL��aQ�䩓�&`�i@�<Oq�����_�����&��I�N�d�yS�����;ϒ���H2J�%�����e8����N͒�.�W���>�qM�+ZQ���p�ViOkq�T�Rͦ��r>
�n<�Gp�籿\���J~���4���ִ,�&RԄ��Ĩr���5�
Q��^�!:�SU̖k�TU�X�Su����5��fpuM��(���nz
��l:����n�ur)F��7$��0��.���l{H�C�{K�t��b'%��m�R
!�����2ԆX��MD�Z��ꓮ�.�-��$�������\S���
�+}Y��~,�U�N4��R���`h��<�ʰf(k������5�?3T��d�k7��\���N9on�8y�e��z���
endstream
endobj
547 0 obj
<</BaseFont/Helvetica-Bold/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
548 0 obj
<</BaseFont/Courier/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
549 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 550 0 R  6 0 R  66 0 R  8 0 R  551 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS1 552 0 R /GS2 553 0 R >>/Font<</F1 554 0 R /F2 557 0 R /F3 560 0 R /F4 563 0 R /F5 566 0 R /F6 569 0 R /F7 572 0 R /FXF1 575 0 R /Xi64 106 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
550 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
551 0 obj
<</Filter/FlateDecode/Length 289>>stream
x�u��J1��y�9*�13�I6Gko��z[X
ʊ���$��h�?ߗIf&�W
�K�� �j�7%�9�I�?��&V�^=������kJʉ8���&T�|����,��xT��������ة�UH�^�WuO���)�S�,�
��L�,&��[w��L�G�,�c^[�FO���\�6C�߇��/I��/ݶ}�~ΐ-�)N<*A7�T0>�b��K���Ec�9�M9�]�������R�:����⟸���o�>++ib�̻�c��|}sw��߫T�g
endstream
endobj
552 0 obj
<</OP false/OPM 1/SA false/SM 0.02/Type/ExtGState/op false>>
endobj
553 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
554 0 obj
<</BaseFont/FAFOMF+HelveticaNeueLTStd-Roman/Encoding 555 0 R /FirstChar 32/FontDescriptor 556 0 R /LastChar 144/Subtype/Type1/ToUnicode 74 0 R /Type/Font/Widths[ 278 500 500 500 556 500 500 500 259 259 500 500 278 389 278 333 556 556 556 556 556 556 556 556 556 556 278 278 500 500 500 556 500 648 685 722 704 611 574 759 722 259 519 667 556 871 722 760 648 760 685 648 574 722 500 926 500 648 611 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 1000 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
555 0 obj
<</Differences[ 32/space 36/dollar 40/parenleft/parenright 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon/semicolon 63/question 65/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U 87/W 89/Y/Z 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 128/bullet 132/emdash 144/quoteright]/Type/Encoding>>
endobj
556 0 obj
<</Ascent 716/CapHeight 708/CharSet(/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/W/Y/Z/a/asterisk/b/bullet/c/colon/comma/d/dollar/e/eight/emdash/f/five/four/g/h/hyphen/i/j/k/l/m/n/nine/o/one/p/parenleft/parenright/period/q/question/quotedblleft/quotedblright/quoteright/r/s/semicolon/seven/six/slash/space/t/three/two/u/v/w/x/y/z/zero)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 73 0 R /FontName/FAFOMF+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
557 0 obj
<</BaseFont/FAFONG+HelveticaNeueLTStd-BlkCn/Encoding 558 0 R /FirstChar 32/FontDescriptor 559 0 R /LastChar 52/Subtype/Type1/ToUnicode 79 0 R /Type/Font/Widths[ 260 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 520 520 500 500 520]>>
endobj
558 0 obj
<</Differences[ 32/space 48/zero/one 52/four]/Type/Encoding>>
endobj
559 0 obj
<</Ascent 0/CapHeight 0/CharSet(/R/S/four/hyphen/one/space/zero)/Descent 0/Flags 262148/FontBBox[ -165 -230 1099 972]/FontFile3 78 0 R /FontName/FAFONG+HelveticaNeueLTStd-BlkCn/ItalicAngle 0/StemH 134/StemV 180/Type/FontDescriptor>>
endobj
560 0 obj
<</BaseFont/FAFONH+HelveticaNeueLTStd-BdOu/Encoding 561 0 R /FirstChar 48/FontDescriptor 562 0 R /LastChar 50/Subtype/Type1/ToUnicode 84 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
561 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
562 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 83 0 R /FontName/FAFONH+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
563 0 obj
<</BaseFont/FAFONI+HelveticaNeueLTStd-Blk/Encoding 564 0 R /FirstChar 50/FontDescriptor 565 0 R /LastChar 50/Subtype/Type1/ToUnicode 89 0 R /Type/Font/Widths[ 668]>>
endobj
564 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
565 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 88 0 R /FontName/FAFONI+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
566 0 obj
<</BaseFont/FAFONJ+ITCFranklinGothicStd-Demi/Encoding 567 0 R /FirstChar 32/FontDescriptor 568 0 R /LastChar 120/Subtype/Type1/ToUnicode 94 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 660 600 540 660 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 500 500 260 820 540 540 500 500 340 500 380 540 480 500 540]>>
endobj
567 0 obj
<</Differences[ 32/space 46/period 73/I 82/R/S/T/U 97/a 99/c/d/e 105/i 108/l/m/n/o 114/r 116/t/u/v 120/x]/Type/Encoding>>
endobj
568 0 obj
<</Ascent 716/CapHeight 719/CharSet(/I/R/S/T/U/a/c/d/e/f/i/l/m/n/o/period/r/s/space/t/u/v/x)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 93 0 R /FontName/FAFONJ+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
569 0 obj
<</BaseFont/FAFOOJ+HelveticaNeueLTStd-Bd/Encoding 570 0 R /FirstChar 32/FontDescriptor 571 0 R /LastChar 144/Subtype/Type1/ToUnicode 99 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 371 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 685 704 741 741 648 593 759 741 295 500 500 500 500 741 778 667 500 722 649 611 741 500 944 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 278 574 258 906 593 611 611 500 389 537 352 593 520 814 537 519 519 500 500 500 500 500 500 500 500 500 1000 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
570 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period/slash/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F/G/H/I 78/N/O/P 82/R/S/T/U 87/W 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y/z 132/emdash 144/quoteright]/Type/Encoding>>
endobj
571 0 obj
<</Ascent 716/CapHeight 719/CharSet(/A/B/C/D/E/F/G/H/I/N/O/P/R/S/T/U/W/Y/a/asterisk/b/c/colon/comma/d/e/eight/emdash/f/five/four/g/h/hyphen/i/j/k/l/m/n/nine/o/one/p/parenleft/parenright/period/quoteright/r/s/seven/six/slash/space/t/three/two/u/v/w/x/y/z/zero)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 98 0 R /FontName/FAFOOJ+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
572 0 obj
<</BaseFont/FAFPAJ+HelveticaNeueLTStd-It/Encoding 573 0 R /FirstChar 32/FontDescriptor 574 0 R /LastChar 121/Subtype/Type1/ToUnicode 104 0 R /Type/Font/Widths[ 278 571 571 571 571 571 571 571 571 571 571 571 571 571 278 333 556 556 571 571 556 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 704 571 574 571 571 571 571 571 571 571 571 571 648 571 571 648 571 571 571 571 571 571 571 571 571 571 571 571 571 519 571 537 593 537 571 574 571 222 571 571 571 852 556 574 571 571 333 481 315 556 481 759 571 481]>>
endobj
573 0 obj
<</Differences[ 32/space 46/period/slash/zero/one 52/four 68/D 70/F 80/P 83/S 97/a 99/c/d/e 103/g 105/i 109/m/n/o 114/r/s/t/u/v/w 121/y]/Type/Encoding>>
endobj
574 0 obj
<</Ascent 716/CapHeight 0/CharSet(/C/D/F/P/R/S/a/c/d/e/four/g/h/i/m/n/o/one/period/r/s/slash/space/t/u/v/w/y/zero)/Descent -168/Flags 68/FontBBox[ -166 -214 1106 957]/FontFile3 103 0 R /FontName/FAFPAJ+HelveticaNeueLTStd-It/ItalicAngle -12/StemH 75/StemV 85/Type/FontDescriptor>>
endobj
575 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
576 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 577 0 R  6 0 R  109 0 R  8 0 R  578 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ColorSpace<</Cs8 579 0 R >>/ExtGState<</GS1 552 0 R /GS2 553 0 R >>/Font<</F1 554 0 R /F6 569 0 R /F7 572 0 R /Xi66 106 0 R /Xi69 23 0 R /Xi73 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
577 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
578 0 obj
<</Filter/FlateDecode/Length 506>>stream
x���Ok�0����5E+�F#�)>,�%�ݒC���SR6a�����wd�I��(�bo���F��U�1�W��(�'���|Zë��
�'m��7]���%F�~ל�,e�GRN������P:�i��i�5 
�5�7�]�o��~!E�lY��,��M˒E�-Kj@���}#B
#GF���$��Ei�\���Ei�\���Ei�\���%�j�aX��`X�jc
�V1|�bD�a��53�/ fI�n�ߝ]>l_��׿yTT�] �2�QtG�9�8�I���r
���3�a�O��)ޜF��4��u�'4e�����2��M��~�Xu���s߾��X���b��}ߵ�n3��ũ�  &����O���y�"�� ���@��z���$�|���l>�ѩe$���;��O�����D����b7ϋ��[�$=�Q���򠴝�0q��|���d��ɗ�&�0lc�����f� +V��?o���Z���a�����V�
endstream
endobj
579 0 obj
[/Separation/Black/DeviceCMYK 11 0 R ]
endobj
580 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 581 0 R  6 0 R  114 0 R  8 0 R  582 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 583 0 R >>/Font<</F1 584 0 R /F2 587 0 R /F3 590 0 R /F4 593 0 R /F5 596 0 R /F6 599 0 R /FXF1 602 0 R /Xi77 106 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
581 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
582 0 obj
<</Filter/FlateDecode/Length 122>>stream
x��̽
�P@�=O�Q��Mrss;�n�P;�`���buP��L{�`u��#77�h!�\�
�a�=/x��2F���$S�7ʪuJ5���v�Hn(��U,VI�c!G�D�?3�~��u)�
endstream
endobj
583 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
584 0 obj
<</BaseFont/NMDIEM+HelveticaNeueLTStd-Bd/Encoding 585 0 R /FirstChar 32/FontDescriptor 586 0 R /LastChar 122/Subtype/Type1/ToUnicode 121 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 685 500 741 741 648 593 759 741 295 500 500 593 500 741 500 667 500 722 649 500 741 500 500 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 278 574 258 906 593 611 611 611 389 537 352 593 500 814 537 519 519]>>
endobj
585 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A 67/C/D/E/F/G/H/I 76/L 78/N 80/P 82/R/S 85/U 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u 119/w/x/y/z]/Type/Encoding>>
endobj
586 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/S/C/H/E/D/U/L/one/parenleft/F/o/r/m/zero/four/parenright/A/t/a/c/h/comma/hyphen/R/N/period/G/f/i/n/s/u/d/e/l/Y/y/b/P/I/two/three/five/six/seven/eight/g/j/k/p/q/z/nine/w/x)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 120 0 R /FontName/NMDIEM+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
587 0 obj
<</BaseFont/NMDIEN+HelveticaNeueLTStd-BdOu/Encoding 588 0 R /FirstChar 48/FontDescriptor 589 0 R /LastChar 50/Subtype/Type1/ToUnicode 126 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
588 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
589 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 125 0 R /FontName/NMDIEN+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
590 0 obj
<</BaseFont/NMDIEO+HelveticaNeueLTStd-Blk/Encoding 591 0 R /FirstChar 50/FontDescriptor 592 0 R /LastChar 50/Subtype/Type1/ToUnicode 131 0 R /Type/Font/Widths[ 668]>>
endobj
591 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
592 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 130 0 R /FontName/NMDIEO+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
593 0 obj
<</BaseFont/NMDIFP+ITCFranklinGothicStd-Demi/Encoding 594 0 R /FirstChar 32/FontDescriptor 595 0 R /LastChar 117/Subtype/Type1/ToUnicode 136 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 640 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 260 500 260 820 540 540 500 500 500 500 380 540]>>
endobj
594 0 obj
<</Differences[ 32/space 65/A 73/I 97/a 99/c/d/e 105/i/j 108/l/m/n/o 115/s/t/u]/Type/Encoding>>
endobj
595 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/A/d/i/t/o/n/a/l/I/c/m/e/j/u/s)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 135 0 R /FontName/NMDIFP+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor>>
endobj
596 0 obj
<</BaseFont/NMDIGA+HelveticaNeueLTStd-Roman/Encoding 597 0 R /FirstChar 32/FontDescriptor 598 0 R /LastChar 144/Subtype/Type1/ToUnicode 141 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 648 685 722 704 611 574 759 722 259 519 667 556 871 722 760 648 500 685 648 574 722 500 926 500 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
597 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P 82/R/S/T/U 87/W 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 144/quoteright]/Type/Encoding>>
endobj
598 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/D/e/p/a/r/t/m/n/o/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/zero/seven/A/q/parenleft/parenright/w/F/comma/x/b/d/g/colon/C/nine/E/U/G/two/eight/three/k/P/J/z/six/j/L/W/H/quoteright/K)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 140 0 R /FontName/NMDIGA+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
599 0 obj
<</BaseFont/NMDIGB+HelveticaNeueLTStd-BdIt/Encoding 600 0 R /FirstChar 46/FontDescriptor 601 0 R /LastChar 119/Subtype/Type1/ToUnicode 146 0 R /Type/Font/Widths[ 278 389 556 556 574 574 556 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
600 0 obj
<</Differences[ 46/period/slash/zero/one 52/four 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
601 0 obj
<</Ascent 0/CapHeight 0/CharSet(/w/period/i/r/s/g/o/v/slash/F/m/one/zero/four)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 145 0 R /FontName/NMDIGB+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
602 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
603 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 604 0 R  6 0 R  150 0 R  8 0 R  605 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 583 0 R >>/Font<</F1 584 0 R /F5 596 0 R /Xi78 23 0 R /Xi79 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
604 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
605 0 obj
<</Filter/FlateDecode/Length 119>>stream
x�S�*�ҏ�4�P�PI�4�30V��r
�266�3S026�!)\N���!Y\�!\� 5 }�
f }ffz&0m��@M&PMA�a
��F&�F�
�y%��%z��z�iz���r ��!
endstream
endobj
606 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 607 0 R  6 0 R  154 0 R  155 0 R  156 0 R  157 0 R  158 0 R  159 0 R  160 0 R  161 0 R  8 0 R  608 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 609 0 R >>/Font<</F1 610 0 R /F2 613 0 R /F3 616 0 R /F4 619 0 R /F5 622 0 R /F6 625 0 R /F7 628 0 R /FXF1 631 0 R /Xi80 106 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
607 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
608 0 obj
<</Filter/FlateDecode/Length 106>>stream
x�E�9
�@@�>�H���,���
�D	��"h��G����7�$*�|@�@V��.8�wH�19Q���)_��L�o����ahe�%��q�2�L���[.
endstream
endobj
609 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
610 0 obj
<</BaseFont/NBIGDG+HelveticaNeueLTStd-Bd/Encoding 611 0 R /FirstChar 32/FontDescriptor 612 0 R /LastChar 122/Subtype/Type1/ToUnicode 168 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 685 500 741 741 648 593 759 741 295 500 500 593 500 741 778 667 500 722 649 611 741 500 500 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 278 574 258 906 593 611 611 611 389 537 352 593 500 814 537 519 519]>>
endobj
611 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A 67/C/D/E/F/G/H/I 76/L 78/N/O/P 82/R/S/T/U 89/Y 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u 119/w/x/y/z]/Type/Encoding>>
endobj
612 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/S/C/H/E/D/U/L/two/parenleft/F/o/r/m/one/zero/four/parenright/A/t/a/c/h/comma/hyphen/R/N/period/G/f/i/n/s/u/d/e/l/Y/y/b/P/I/T/x/three/O/five/six/seven/eight/nine/p/w/k/g/j/q/z)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 167 0 R /FontName/NBIGDG+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
613 0 obj
<</BaseFont/NBIGDH+HelveticaNeueLTStd-BdOu/Encoding 614 0 R /FirstChar 48/FontDescriptor 615 0 R /LastChar 50/Subtype/Type1/ToUnicode 126 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
614 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
615 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 172 0 R /FontName/NBIGDH+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
616 0 obj
<</BaseFont/NBIGDI+HelveticaNeueLTStd-Blk/Encoding 617 0 R /FirstChar 50/FontDescriptor 618 0 R /LastChar 50/Subtype/Type1/ToUnicode 131 0 R /Type/Font/Widths[ 668]>>
endobj
617 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
618 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 176 0 R /FontName/NBIGDI+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
619 0 obj
<</BaseFont/NBIGEI+ITCFranklinGothicStd-Demi/Encoding 620 0 R /FirstChar 32/FontDescriptor 621 0 R /LastChar 120/Subtype/Type1/ToUnicode 181 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 640 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 540 500 500 500 500 500 500 500 500 500 500 500 500 540 500 500 540 540 500 500 500 260 500 500 260 500 540 540 500 500 500 500 380 500 500 500 540]>>
endobj
620 0 obj
<</Differences[ 32/space 65/A 84/T 97/a 100/d/e 105/i 108/l 110/n/o 115/s/t 120/x]/Type/Encoding>>
endobj
621 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/A/d/i/t/o/n/a/l/T/x/e/s)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 180 0 R /FontName/NBIGEI+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
622 0 obj
<</BaseFont/NBIGEJ+HelveticaNeueLTStd-Roman/Encoding 623 0 R /FirstChar 32/FontDescriptor 624 0 R /LastChar 144/Subtype/Type1/ToUnicode 186 0 R /Type/Font/Widths[ 278 500 500 500 556 500 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 648 685 722 704 611 574 759 722 259 500 500 556 871 722 760 648 500 685 648 574 722 500 926 500 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 500 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 278]>>
endobj
623 0 obj
<</Differences[ 32/space 36/dollar 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F/G/H/I 76/L/M/N/O/P 82/R/S/T/U 87/W 97/a/b/c/d/e/f/g/h/i 107/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 144/quoteright]/Type/Encoding>>
endobj
624 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/D/e/p/a/r/t/m/n/o/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/zero/seven/A/q/parenleft/parenright/w/F/comma/x/six/two/E/d/eight/nine/three/U/g/k/H/b/W/dollar/C/P/colon/L/quoteright/G/z)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 185 0 R /FontName/NBIGEJ+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
625 0 obj
<</BaseFont/NBIGFK+HelveticaNeueLTStd-BdIt/Encoding 626 0 R /FirstChar 46/FontDescriptor 627 0 R /LastChar 119/Subtype/Type1/ToUnicode 146 0 R /Type/Font/Widths[ 278 389 556 556 574 574 556 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
626 0 obj
<</Differences[ 46/period/slash/zero/one 52/four 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
627 0 obj
<</Ascent 0/CapHeight 0/CharSet(/w/period/i/r/s/g/o/v/slash/F/m/one/zero/four)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 190 0 R /FontName/NBIGFK+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
628 0 obj
<</BaseFont/NBIGGL+HelveticaNeueLTStd-It/Encoding 629 0 R /FirstChar 32/FontDescriptor 630 0 R /LastChar 117/Subtype/Type1/ToUnicode 195 0 R /Type/Font/Widths[ 278 571 571 571 571 571 571 571 259 259 571 571 571 571 571 571 571 571 556 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 571 519 571 537 593 537 571 574 571 222 571 571 571 571 556 574 593 571 571 571 315 556]>>
endobj
629 0 obj
<</Differences[ 32/space 40/parenleft/parenright 50/two 97/a 99/c/d/e 103/g 105/i 110/n/o/p 116/t/u]/Type/Encoding>>
endobj
630 0 obj
<</Ascent 716/CapHeight 0/CharSet(/space/parenleft/c/o/n/t/i/u/e/d/p/a/g/two/parenright)/Descent -168/Flags 68/FontBBox[ -166 -214 1106 957]/FontFile3 194 0 R /FontName/NBIGGL+HelveticaNeueLTStd-It/ItalicAngle -12/StemH 75/StemV 85/Type/FontDescriptor>>
endobj
631 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
632 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 633 0 R  6 0 R  199 0 R  8 0 R  634 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 609 0 R >>/Font<</F1 610 0 R /F5 622 0 R /F7 628 0 R /Xi81 106 0 R /Xi82 23 0 R /Xi83 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
633 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
634 0 obj
<</Filter/FlateDecode/Length 138>>stream
x�Uͱ�P��O�Q��ۖ��08b���`0����E��;;x@8�U���4�
	F+�/�1�E+h�7h}I�\�X�ߙ����,���5�̹�J1e�ي����j�{:�'�Ă(��k���R?L���;� ��*
endstream
endobj
635 0 obj
<</ArtBox[ 0.012 0.016 611.988 791.984]/BleedBox[ 0.012 0.016 611.988 791.984]/Contents[ 636 0 R  6 0 R  203 0 R  204 0 R  205 0 R  206 0 R  207 0 R  208 0 R  209 0 R  210 0 R  8 0 R  637 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 638 0 R >>/Font<</F1 639 0 R /F2 642 0 R /F3 645 0 R /F4 648 0 R /F5 651 0 R /F6 654 0 R /F7 657 0 R /FXF1 660 0 R /Xi84 106 0 R /Xi85 23 0 R /Xi86 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0.012 0.016 611.988 791.984]/Type/Page>>
endobj
636 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
637 0 obj
<</Filter/FlateDecode/Length 272>>stream
x�u�KO1���>���ډ��q��T��x]���Q.�z�U$V�r�e>O�cؘO�?!��Y�!����Ws�����U����{%�5�u ��@�^����3x\�o�(g��/��L��d�׍sG,��X%Ѥib�8MÔ,C V�JHG(�A����5�pc��s�;]ݹ�Z�w�Tb"w����ȭ��:���:Y�'�����f���Uz9,@�XtV���]�e@�G~�z ��q�<���'�{����~�!��� y�
endstream
endobj
638 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
639 0 obj
<</BaseFont/NKLNOJ+HelveticaNeueLTStd-Roman/Encoding 640 0 R /FirstChar 32/FontDescriptor 641 0 R /LastChar 122/Subtype/Type1/ToUnicode 217 0 R /Type/Font/Widths[ 278 500 500 500 556 1000 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 648 685 722 704 611 574 500 722 259 500 500 500 871 722 760 648 760 685 648 574 722 611 926 611 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 500 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480]>>
endobj
640 0 obj
<</Differences[ 32/space 36/dollar/percent 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A/B/C/D/E/F 72/H/I 77/M/N/O/P/Q/R/S/T/U/V/W/X 97/a/b/c/d/e/f/g/h/i/j 108/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z]/Type/Encoding>>
endobj
641 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/F/o/r/m/D/e/p/a/t/n/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/zero/seven/A/q/parenleft/parenright/w/d/g/W/two/comma/b/x/U/three/six/eight/nine/E/colon/j/dollar/H/Q/z/percent/P/V/C/X)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 216 0 R /FontName/NKLNOJ+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
642 0 obj
<</BaseFont/NKLNPK+HelveticaNeueLTStd-BlkCn/Encoding 643 0 R /FirstChar 32/FontDescriptor 644 0 R /LastChar 57/Subtype/Type1/ToUnicode 222 0 R /Type/Font/Widths[ 260 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 520 500 500 520 520]>>
endobj
643 0 obj
<</Differences[ 32/space 53/five 56/eight/nine]/Type/Encoding>>
endobj
644 0 obj
<</Ascent 0/CapHeight 0/CharSet(/space/eight/nine/five)/Descent 0/Flags 262148/FontBBox[ -165 -230 1099 972]/FontFile3 221 0 R /FontName/NKLNPK+HelveticaNeueLTStd-BlkCn/ItalicAngle 0/StemH 134/StemV 180/Type/FontDescriptor>>
endobj
645 0 obj
<</BaseFont/NKLNPL+ITCFranklinGothicStd-Demi/Encoding 646 0 R /FirstChar 32/FontDescriptor 647 0 R /LastChar 120/Subtype/Type1/ToUnicode 227 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 640 500 500 500 500 500 500 500 500 500 500 500 880 500 500 500 500 500 500 540 500 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 500 500 260 500 540 540 500 500 340 500 380 500 500 500 540]>>
endobj
646 0 obj
<</Differences[ 32/space 65/A 77/M 84/T 97/a 99/c/d/e 105/i 108/l 110/n/o 114/r 116/t 120/x]/Type/Encoding>>
endobj
647 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/A/d/i/t/o/n/a/l/M/e/c/r/T/x)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 226 0 R /FontName/NKLNPL+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
648 0 obj
<</BaseFont/NKLOAM+HelveticaNeueLTStd-Bd/Encoding 649 0 R /FirstChar 32/FontDescriptor 650 0 R /LastChar 121/Subtype/Type1/ToUnicode 232 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 296 296 500 500 278 407 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 685 500 741 500 648 593 759 500 295 500 500 500 907 741 500 667 500 722 649 611 500 630 944 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 611 593 258 500 574 258 906 593 611 611 500 389 537 352 593 520 814 537 519]>>
endobj
649 0 obj
<</Differences[ 32/space 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A 67/C 69/E/F/G 73/I 77/M/N 80/P 82/R/S/T 86/V/W 89/Y 97/a/b/c/d/e/f/g/h/i 107/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y]/Type/Encoding>>
endobj
650 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/I/f/a/n/y/l/i/e/d/o/s/t/p/u/comma/v/b/k/period/S/r/c/A/h/F/m/one/zero/four/hyphen/R/N/P/G/seven/Y/M/T/x/W/g/two/three/five/six/E/eight/nine/parenleft/parenright/C/V/w)/Descent -180/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 231 0 R /FontName/NKLOAM+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
651 0 obj
<</BaseFont/NKLOBM+HelveticaNeueLTStd-BdIt/Encoding 652 0 R /FirstChar 32/FontDescriptor 653 0 R /LastChar 119/Subtype/Type1/ToUnicode 237 0 R /Type/Font/Widths[ 278 574 574 574 574 574 574 574 574 574 574 574 574 574 278 389 574 574 574 574 574 556 574 574 556 556 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
652 0 obj
<</Differences[ 32/space 46/period/slash 53/five 56/eight/nine 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
653 0 obj
<</Ascent 0/CapHeight 0/CharSet(/space/w/period/i/r/s/g/o/v/slash/F/m/eight/nine/five)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 236 0 R /FontName/NKLOBM+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
654 0 obj
<</BaseFont/NKLOBN+HelveticaNeueLTStd-BdOu/Encoding 655 0 R /FirstChar 48/FontDescriptor 656 0 R /LastChar 50/Subtype/Type1/ToUnicode 242 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
655 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
656 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 241 0 R /FontName/NKLOBN+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
657 0 obj
<</BaseFont/NKLOBO+HelveticaNeueLTStd-Blk/Encoding 658 0 R /FirstChar 50/FontDescriptor 659 0 R /LastChar 50/Subtype/Type1/ToUnicode 247 0 R /Type/Font/Widths[ 668]>>
endobj
658 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
659 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 246 0 R /FontName/NKLOBO+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
660 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
661 0 obj
<</ArtBox[ 0 0 612 792]/BleedBox[ 0 0 612 792]/Contents[ 662 0 R  6 0 R  251 0 R  252 0 R  253 0 R  254 0 R  255 0 R  256 0 R  257 0 R  258 0 R  8 0 R  663 0 R ]/CropBox[ 0 0 612 792]/MediaBox[ 0 0 612 792]/Parent 2 0 R /Resources<</ExtGState<</GS2 664 0 R >>/Font<</F1 665 0 R /F2 668 0 R /F3 671 0 R /F4 674 0 R /F5 677 0 R /F6 680 0 R /F7 683 0 R /FXF1 686 0 R /Xi87 106 0 R /Xi88 23 0 R /Xi89 27 0 R >>/ProcSet[/PDF/Text/ImageB/ImageC/ImageI]>>/Rotate 0/TrimBox[ 0 0 612 792]/Type/Page>>
endobj
662 0 obj
<</Filter/FlateDecode/Length 10>>stream
x�+�  � |
endstream
endobj
663 0 obj
<</Filter/FlateDecode/Length 227>>stream
x�u��N1�{?ŖD����]^ TQ"��6(Q(P����w��fgg`k�M�x�,A>�U6�,
p"t�_�uD���jֹ6U"D���.��8��J����oʹ�����?4�/i��<\�� ��fs3�Jr�`��Rdi�������B%B���%�L�U}NR�U��l�ayKT�jK�զZ~\B���v�{ ۳������y������?��{[�
/Z�
endstream
endobj
664 0 obj
<</OP false/OPM 1/SA true/SM 0.02/Type/ExtGState/op false>>
endobj
665 0 obj
<</BaseFont/DMNBBB+HelveticaNeueLTStd-Roman/Encoding 666 0 R /FirstChar 32/FontDescriptor 667 0 R /LastChar 133/Subtype/Type1/ToUnicode 265 0 R /Type/Font/Widths[ 278 500 500 500 500 1000 500 500 259 259 500 500 278 389 278 500 556 556 556 556 556 556 556 556 556 556 500 500 500 500 500 500 500 648 685 722 704 611 574 500 722 259 500 500 500 871 722 760 648 500 685 648 574 722 500 500 500 500 500 500 500 500 500 500 500 537 593 537 593 537 296 574 556 222 222 519 222 853 556 574 593 593 333 500 315 556 500 758 518 500 480 500 500 500 500 500 500 500 500 500 500 500]>>
endobj
666 0 obj
<</Differences[ 32/space 37/percent 40/parenleft/parenright 44/comma/hyphen/period 48/zero/one/two/three/four/five/six/seven/eight/nine 65/A/B/C/D/E/F 72/H/I 77/M/N/O/P 82/R/S/T/U 97/a/b/c/d/e/f/g/h/i/j/k/l/m/n/o/p/q/r/s/t/u/v/w/x/y/z 133/endash]/Type/Encoding>>
endobj
667 0 obj
<</Ascent 716/CapHeight 708/CharSet(/space/F/o/r/m/D/e/p/a/t/n/f/h/T/s/u/y/I/l/R/v/S/i/c/O/M/B/N/period/one/five/four/hyphen/two/seven/A/q/parenleft/parenright/w/x/six/zero/three/g/b/d/comma/j/C/k/P/nine/eight/endash/E/z/percent/U/H)/Descent -168/Flags 4/FontBBox[ -166 -214 1076 952]/FontFile3 264 0 R /FontName/DMNBBB+HelveticaNeueLTStd-Roman/ItalicAngle 0/StemH 75/StemV 85/Type/FontDescriptor/XHeight 536>>
endobj
668 0 obj
<</BaseFont/DMNBBC+HelveticaNeueLTStd-BlkCn/Encoding 669 0 R /FirstChar 48/FontDescriptor 670 0 R /LastChar 57/Subtype/Type1/ToUnicode 270 0 R /Type/Font/Widths[ 520 500 500 500 500 500 520 500 520 520]>>
endobj
669 0 obj
<</Differences[ 48/zero 54/six 56/eight/nine]/Type/Encoding>>
endobj
670 0 obj
<</Ascent 0/CapHeight 0/CharSet(/eight/nine/six/zero)/Descent 0/Flags 262148/FontBBox[ -165 -230 1099 972]/FontFile3 269 0 R /FontName/DMNBBC+HelveticaNeueLTStd-BlkCn/ItalicAngle 0/StemH 134/StemV 180/Type/FontDescriptor>>
endobj
671 0 obj
<</BaseFont/DMNBCC+ITCFranklinGothicStd-Demi/Encoding 672 0 R /FirstChar 32/FontDescriptor 673 0 R /LastChar 132/Subtype/Type1/ToUnicode 275 0 R /Type/Font/Widths[ 300 500 500 500 500 500 500 500 500 500 500 500 300 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 500 580 500 500 500 300 500 500 500 500 660 500 500 500 500 500 540 500 500 500 500 500 500 500 500 500 500 500 500 540 500 540 540 540 500 500 500 260 500 500 260 820 540 540 500 500 340 500 380 540 480 500 540 500 500 500 500 500 500 500 500 500 500 500 1000]>>
endobj
672 0 obj
<</Differences[ 32/space 44/comma 69/E 73/I 78/N 84/T 97/a 99/c/d/e 105/i 108/l/m/n/o 114/r/s/t/u/v 120/x 132/emdash]/Type/Encoding>>
endobj
673 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/N/e/t/I/n/v/s/m/c/o/T/a/x/emdash/d/i/u/l/comma/E/r)/Descent 0/Flags 262148/FontBBox[ -199 -250 1014 934]/FontFile3 274 0 R /FontName/DMNBCC+ITCFranklinGothicStd-Demi/ItalicAngle 0/StemH 114/StemV 147/Type/FontDescriptor/XHeight 536>>
endobj
674 0 obj
<</BaseFont/DMNBCD+HelveticaNeueLTStd-Bd/Encoding 675 0 R /FirstChar 32/FontDescriptor 676 0 R /LastChar 121/Subtype/Type1/ToUnicode 280 0 R /Type/Font/Widths[ 278 500 500 500 500 500 500 500 500 500 500 500 278 500 278 500 556 556 556 556 556 556 556 556 556 556 278 500 500 500 500 500 500 685 500 741 500 648 593 759 500 295 500 500 500 907 741 500 667 500 722 500 611 500 500 500 500 667 500 500 500 500 500 500 500 574 611 574 611 574 333 500 593 258 500 574 258 906 593 611 611 500 389 537 352 593 520 814 537 519]>>
endobj
675 0 obj
<</Differences[ 32/space 44/comma 46/period 48/zero/one/two/three/four/five/six/seven/eight/nine/colon 65/A 67/C 69/E/F/G 73/I 77/M/N 80/P 82/R 84/T 89/Y 97/a/b/c/d/e/f 104/h/i 107/k/l/m/n/o/p 114/r/s/t/u/v/w/x/y]/Type/Encoding>>
endobj
676 0 obj
<</Ascent 716/CapHeight 719/CharSet(/space/A/t/a/c/h/o/y/u/r/x/e/n/period/G/f/i/s/d/l/m/seven/two/Y/b/E/I/N/P/v/one/three/four/five/six/eight/p/M/nine/zero/T/C/colon/F/w/k/R/comma)/Descent 0/Flags 262148/FontBBox[ -166 -218 1078 975]/FontFile3 279 0 R /FontName/DMNBCD+HelveticaNeueLTStd-Bd/ItalicAngle 0/StemH 107/StemV 142/Type/FontDescriptor/XHeight 536>>
endobj
677 0 obj
<</BaseFont/DMNBEE+HelveticaNeueLTStd-BdIt/Encoding 678 0 R /FirstChar 32/FontDescriptor 679 0 R /LastChar 119/Subtype/Type1/ToUnicode 285 0 R /Type/Font/Widths[ 278 574 574 574 574 574 574 574 574 574 574 574 574 574 278 389 556 574 574 574 574 574 556 574 556 556 574 574 574 574 574 574 574 574 574 574 574 574 593 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 574 611 574 259 574 574 574 907 574 593 574 574 389 519 574 574 519 815]>>
endobj
678 0 obj
<</Differences[ 32/space 46/period/slash/zero 54/six 56/eight/nine 70/F 103/g 105/i 109/m 111/o 114/r/s 118/v/w]/Type/Encoding>>
endobj
679 0 obj
<</Ascent 0/CapHeight 0/CharSet(/space/w/period/i/r/s/g/o/v/slash/F/m/eight/nine/six/zero)/Descent -180/Flags 262212/FontBBox[ -166 -218 1129 975]/FontFile3 284 0 R /FontName/DMNBEE+HelveticaNeueLTStd-BdIt/ItalicAngle -12/StemH 107/StemV 142/Type/FontDescriptor>>
endobj
680 0 obj
<</BaseFont/DMNBEF+HelveticaNeueLTStd-BdOu/Encoding 681 0 R /FirstChar 48/FontDescriptor 682 0 R /LastChar 50/Subtype/Type1/ToUnicode 242 0 R /Type/Font/Widths[ 632 500 632]>>
endobj
681 0 obj
<</Differences[ 48/zero 50/two]/Type/Encoding>>
endobj
682 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two/zero)/Descent 0/Flags 4/FontBBox[ -149 -270 1353 992]/FontFile3 289 0 R /FontName/DMNBEF+HelveticaNeueLTStd-BdOu/ItalicAngle 0/StemH 22/StemV 23/Type/FontDescriptor>>
endobj
683 0 obj
<</BaseFont/DMNBEG+HelveticaNeueLTStd-Blk/Encoding 684 0 R /FirstChar 50/FontDescriptor 685 0 R /LastChar 50/Subtype/Type1/ToUnicode 247 0 R /Type/Font/Widths[ 668]>>
endobj
684 0 obj
<</Differences[ 50/two]/Type/Encoding>>
endobj
685 0 obj
<</Ascent 0/CapHeight 0/CharSet(/two)/Descent 0/Flags 262148/FontBBox[ -165 -232 1101 953]/FontFile3 293 0 R /FontName/DMNBEG+HelveticaNeueLTStd-Blk/ItalicAngle 0/StemH 144/StemV 198/Type/FontDescriptor>>
endobj
686 0 obj
<</BaseFont/Helvetica/Encoding/WinAnsiEncoding/Subtype/Type1/Type/Font>>
endobj
xref
0 687
0000000000 65535 f
0000000017 00000 n
0000000066 00000 n
0000000416 00000 n
0000000503 00000 n
0000000930 00000 n
0000001011 00000 n
0000001092 00000 n
0000002329 00000 n
0000002415 00000 n
0000002828 00000 n
0000002886 00000 n
0000003474 00000 n
0000003554 00000 n
0000003646 00000 n
0000003885 00000 n
0000004138 00000 n
0000006830 00000 n
0000007261 00000 n
0000007514 00000 n
0000016949 00000 n
0000017387 00000 n
0000017645 00000 n
0000027026 00000 n
0000027123 00000 n
0000027431 00000 n
0000027603 00000 n
0000051141 00000 n
0000051233 00000 n
0000051663 00000 n
0000051745 00000 n
0000052159 00000 n
0000052217 00000 n
0000052297 00000 n
0000052389 00000 n
0000052628 00000 n
0000052881 00000 n
0000053312 00000 n
0000053565 00000 n
0000054003 00000 n
0000054261 00000 n
0000054691 00000 n
0000054773 00000 n
0000055186 00000 n
0000055244 00000 n
0000055324 00000 n
0000055416 00000 n
0000055655 00000 n
0000055908 00000 n
0000056339 00000 n
0000056592 00000 n
0000057030 00000 n
0000057288 00000 n
0000057720 00000 n
0000057802 00000 n
0000058219 00000 n
0000058277 00000 n
0000058357 00000 n
0000058449 00000 n
0000058688 00000 n
0000058941 00000 n
0000059372 00000 n
0000059625 00000 n
0000060063 00000 n
0000060321 00000 n
0000060745 00000 n
0000060827 00000 n
0000067654 00000 n
0000068017 00000 n
0000068097 00000 n
0000068176 00000 n
0000068811 00000 n
0000069162 00000 n
0000069691 00000 n
0000074505 00000 n
0000074884 00000 n
0000075149 00000 n
0000075230 00000 n
0000075482 00000 n
0000076447 00000 n
0000076760 00000 n
0000076952 00000 n
0000077019 00000 n
0000077241 00000 n
0000078108 00000 n
0000078407 00000 n
0000078590 00000 n
0000078649 00000 n
0000078872 00000 n
0000079491 00000 n
0000079782 00000 n
0000080321 00000 n
0000080462 00000 n
0000080755 00000 n
0000082761 00000 n
0000083128 00000 n
0000083760 00000 n
0000084064 00000 n
0000084523 00000 n
0000088697 00000 n
0000089078 00000 n
0000089621 00000 n
0000089794 00000 n
0000090094 00000 n
0000092625 00000 n
0000093006 00000 n
0000093099 00000 n
0000093190 00000 n
0000093614 00000 n
0000093697 00000 n
0000099336 00000 n
0000099916 00000 n
0000099975 00000 n
0000100386 00000 n
0000100469 00000 n
0000104026 00000 n
0000104223 00000 n
0000104303 00000 n
0000104850 00000 n
0000105123 00000 n
0000105537 00000 n
0000109354 00000 n
0000109743 00000 n
0000109939 00000 n
0000110007 00000 n
0000110231 00000 n
0000111098 00000 n
0000111397 00000 n
0000111584 00000 n
0000111644 00000 n
0000111869 00000 n
0000112490 00000 n
0000112781 00000 n
0000113312 00000 n
0000113428 00000 n
0000113690 00000 n
0000115280 00000 n
0000115630 00000 n
0000116268 00000 n
0000116557 00000 n
0000117000 00000 n
0000121181 00000 n
0000121546 00000 n
0000122027 00000 n
0000122158 00000 n
0000122430 00000 n
0000123895 00000 n
0000124253 00000 n
0000124346 00000 n
0000124707 00000 n
0000124790 00000 n
0000127782 00000 n
0000127975 00000 n
0000128461 00000 n
0000128544 00000 n
0000129219 00000 n
0000129849 00000 n
0000130388 00000 n
0000130921 00000 n
0000131443 00000 n
0000131893 00000 n
0000132464 00000 n
0000133020 00000 n
0000133200 00000 n
0000133280 00000 n
0000133827 00000 n
0000134098 00000 n
0000134518 00000 n
0000138407 00000 n
0000138789 00000 n
0000138985 00000 n
0000139053 00000 n
0000139277 00000 n
0000140143 00000 n
0000140330 00000 n
0000140390 00000 n
0000140615 00000 n
0000141235 00000 n
0000141778 00000 n
0000141897 00000 n
0000142167 00000 n
0000143509 00000 n
0000143870 00000 n
0000144508 00000 n
0000144808 00000 n
0000145252 00000 n
0000149442 00000 n
0000149826 00000 n
0000150307 00000 n
0000150438 00000 n
0000150710 00000 n
0000152175 00000 n
0000152702 00000 n
0000152839 00000 n
0000153113 00000 n
0000154785 00000 n
0000155146 00000 n
0000155239 00000 n
0000155626 00000 n
0000155709 00000 n
0000158401 00000 n
0000158613 00000 n
0000159173 00000 n
0000159256 00000 n
0000160241 00000 n
0000160968 00000 n
0000161858 00000 n
0000162610 00000 n
0000163469 00000 n
0000164361 00000 n
0000165145 00000 n
0000165986 00000 n
0000166331 00000 n
0000166411 00000 n
0000166962 00000 n
0000167254 00000 n
0000167697 00000 n
0000171963 00000 n
0000172338 00000 n
0000172627 00000 n
0000172711 00000 n
0000172956 00000 n
0000173883 00000 n
0000174200 00000 n
0000174743 00000 n
0000174872 00000 n
0000175146 00000 n
0000176551 00000 n
0000176921 00000 n
0000177464 00000 n
0000177740 00000 n
0000178152 00000 n
0000181903 00000 n
0000182311 00000 n
0000182848 00000 n
0000182993 00000 n
0000183273 00000 n
0000184895 00000 n
0000185265 00000 n
0000185461 00000 n
0000185529 00000 n
0000185753 00000 n
0000186621 00000 n
0000186922 00000 n
0000187109 00000 n
0000187169 00000 n
0000187394 00000 n
0000188014 00000 n
0000188307 00000 n
0000188400 00000 n
0000188912 00000 n
0000188995 00000 n
0000190003 00000 n
0000190811 00000 n
0000191581 00000 n
0000192370 00000 n
0000193173 00000 n
0000193966 00000 n
0000194793 00000 n
0000195660 00000 n
0000195960 00000 n
0000196040 00000 n
0000196635 00000 n
0000196918 00000 n
0000197349 00000 n
0000201289 00000 n
0000201669 00000 n
0000201894 00000 n
0000201976 00000 n
0000202219 00000 n
0000203219 00000 n
0000203535 00000 n
0000204127 00000 n
0000204281 00000 n
0000204578 00000 n
0000206380 00000 n
0000206757 00000 n
0000207300 00000 n
0000207550 00000 n
0000207929 00000 n
0000211295 00000 n
0000211698 00000 n
0000212235 00000 n
0000212384 00000 n
0000212668 00000 n
0000214380 00000 n
0000214748 00000 n
0000214944 00000 n
0000215012 00000 n
0000215236 00000 n
0000216103 00000 n
0000216290 00000 n
0000216350 00000 n
0000216575 00000 n
0000217195 00000 n
0000217288 00000 n
0000217838 00000 n
0000217921 00000 n
0000218663 00000 n
0000219295 00000 n
0000220011 00000 n
0000220750 00000 n
0000221686 00000 n
0000222520 00000 n
0000223160 00000 n
0000223727 00000 n
0000224038 00000 n
0000224097 00000 n
0000224176 00000 n
0000224254 00000 n
0000224641 00000 n
0000224746 00000 n
0000225012 00000 n
0000226185 00000 n
0000226527 00000 n
0000227072 00000 n
0000227359 00000 n
0000227789 00000 n
0000232126 00000 n
0000232508 00000 n
0000233142 00000 n
0000233379 00000 n
0000233745 00000 n
0000236846 00000 n
0000237246 00000 n
0000237909 00000 n
0000238121 00000 n
0000238430 00000 n
0000240965 00000 n
0000241396 00000 n
0000241778 00000 n
0000241865 00000 n
0000242101 00000 n
0000242805 00000 n
0000243128 00000 n
0000243796 00000 n
0000244072 00000 n
0000244481 00000 n
0000248641 00000 n
0000249069 00000 n
0000249247 00000 n
0000249310 00000 n
0000249524 00000 n
0000249943 00000 n
0000250236 00000 n
0000250868 00000 n
0000251036 00000 n
0000251318 00000 n
0000253386 00000 n
0000253770 00000 n
0000254311 00000 n
0000254499 00000 n
0000254787 00000 n
0000256731 00000 n
0000257131 00000 n
0000257580 00000 n
0000257663 00000 n
0000260660 00000 n
0000261043 00000 n
0000261124 00000 n
0000261204 00000 n
0000261395 00000 n
0000261475 00000 n
0000261699 00000 n
0000262460 00000 n
0000262753 00000 n
0000263505 00000 n
0000263851 00000 n
0000264337 00000 n
0000269278 00000 n
0000269659 00000 n
0000270327 00000 n
0000270621 00000 n
0000271054 00000 n
0000275650 00000 n
0000276066 00000 n
0000276248 00000 n
0000276324 00000 n
0000276551 00000 n
0000277010 00000 n
0000277314 00000 n
0000277855 00000 n
0000278074 00000 n
0000278428 00000 n
0000281408 00000 n
0000281804 00000 n
0000282341 00000 n
0000282531 00000 n
0000282845 00000 n
0000285378 00000 n
0000285779 00000 n
0000286413 00000 n
0000286663 00000 n
0000287053 00000 n
0000290454 00000 n
0000290841 00000 n
0000290934 00000 n
0000291357 00000 n
0000291440 00000 n
0000295479 00000 n
0000295851 00000 n
0000296274 00000 n
0000296357 00000 n
0000299661 00000 n
0000299908 00000 n
0000300449 00000 n
0000300590 00000 n
0000300873 00000 n
0000302366 00000 n
0000302731 00000 n
0000303142 00000 n
0000303225 00000 n
0000305995 00000 n
0000306218 00000 n
0000306653 00000 n
0000306736 00000 n
0000310399 00000 n
0000310702 00000 n
0000311212 00000 n
0000311295 00000 n
0000312701 00000 n
0000313791 00000 n
0000314777 00000 n
0000315622 00000 n
0000316515 00000 n
0000317406 00000 n
0000318267 00000 n
0000320051 00000 n
0000320353 00000 n
0000320434 00000 n
0000320514 00000 n
0000320696 00000 n
0000320943 00000 n
0000321670 00000 n
0000322304 00000 n
0000322638 00000 n
0000323117 00000 n
0000328096 00000 n
0000328471 00000 n
0000328951 00000 n
0000329059 00000 n
0000329316 00000 n
0000330639 00000 n
0000330971 00000 n
0000331557 00000 n
0000331779 00000 n
0000332098 00000 n
0000334460 00000 n
0000334874 00000 n
0000335415 00000 n
0000335641 00000 n
0000335973 00000 n
0000338977 00000 n
0000339387 00000 n
0000339929 00000 n
0000340186 00000 n
0000340568 00000 n
0000343902 00000 n
0000344310 00000 n
0000345019 00000 n
0000345333 00000 n
0000345784 00000 n
0000350720 00000 n
0000351137 00000 n
0000351297 00000 n
0000351359 00000 n
0000351564 00000 n
0000351892 00000 n
0000352314 00000 n
0000352397 00000 n
0000357791 00000 n
0000358072 00000 n
0000358247 00000 n
0000358308 00000 n
0000358513 00000 n
0000358949 00000 n
0000359242 00000 n
0000359677 00000 n
0000359760 00000 n
0000364921 00000 n
0000365157 00000 n
0000365591 00000 n
0000365674 00000 n
0000371148 00000 n
0000371494 00000 n
0000371917 00000 n
0000372000 00000 n
0000376099 00000 n
0000376463 00000 n
0000376961 00000 n
0000377044 00000 n
0000378295 00000 n
0000378976 00000 n
0000379642 00000 n
0000380301 00000 n
0000380967 00000 n
0000381634 00000 n
0000382313 00000 n
0000383412 00000 n
0000383740 00000 n
0000383821 00000 n
0000383901 00000 n
0000384104 00000 n
0000384192 00000 n
0000384415 00000 n
0000385248 00000 n
0000385570 00000 n
0000386111 00000 n
0000386393 00000 n
0000386805 00000 n
0000390833 00000 n
0000391238 00000 n
0000391783 00000 n
0000392046 00000 n
0000392451 00000 n
0000396656 00000 n
0000397051 00000 n
0000397592 00000 n
0000397780 00000 n
0000398068 00000 n
0000400017 00000 n
0000400416 00000 n
0000400957 00000 n
0000401152 00000 n
0000401468 00000 n
0000404282 00000 n
0000404690 00000 n
0000405232 00000 n
0000405431 00000 n
0000405753 00000 n
0000408299 00000 n
0000408703 00000 n
0000408886 00000 n
0000408967 00000 n
0000409199 00000 n
0000409684 00000 n
0000409988 00000 n
0000410411 00000 n
0000410494 00000 n
0000415998 00000 n
0000416198 00000 n
0000416738 00000 n
0000416869 00000 n
0000417141 00000 n
0000418975 00000 n
0000419342 00000 n
0000419519 00000 n
0000420335 00000 n
0000420433 00000 n
0000420524 00000 n
0000420959 00000 n
0000421042 00000 n
0000421405 00000 n
0000421486 00000 n
0000421566 00000 n
0000422204 00000 n
0000422556 00000 n
0000423086 00000 n
0000423354 00000 n
0000423436 00000 n
0000423689 00000 n
0000423884 00000 n
0000423952 00000 n
0000424175 00000 n
0000424361 00000 n
0000424421 00000 n
0000424645 00000 n
0000425187 00000 n
0000425329 00000 n
0000425623 00000 n
0000426258 00000 n
0000426563 00000 n
0000427023 00000 n
0000427566 00000 n
0000427739 00000 n
0000428039 00000 n
0000428132 00000 n
0000428560 00000 n
0000428643 00000 n
0000429223 00000 n
0000429282 00000 n
0000429693 00000 n
0000429776 00000 n
0000429972 00000 n
0000430052 00000 n
0000430599 00000 n
0000430872 00000 n
0000431286 00000 n
0000431482 00000 n
0000431550 00000 n
0000431774 00000 n
0000431961 00000 n
0000432021 00000 n
0000432246 00000 n
0000432777 00000 n
0000432893 00000 n
0000433155 00000 n
0000433793 00000 n
0000434082 00000 n
0000434525 00000 n
0000435006 00000 n
0000435137 00000 n
0000435409 00000 n
0000435502 00000 n
0000435863 00000 n
0000435946 00000 n
0000436139 00000 n
0000436625 00000 n
0000436708 00000 n
0000436888 00000 n
0000436968 00000 n
0000437515 00000 n
0000437786 00000 n
0000438206 00000 n
0000438402 00000 n
0000438470 00000 n
0000438694 00000 n
0000438881 00000 n
0000438941 00000 n
0000439166 00000 n
0000439709 00000 n
0000439828 00000 n
0000440098 00000 n
0000440736 00000 n
0000441036 00000 n
0000441480 00000 n
0000441961 00000 n
0000442092 00000 n
0000442364 00000 n
0000442891 00000 n
0000443028 00000 n
0000443302 00000 n
0000443395 00000 n
0000443782 00000 n
0000443865 00000 n
0000444077 00000 n
0000444637 00000 n
0000444720 00000 n
0000445066 00000 n
0000445146 00000 n
0000445697 00000 n
0000445989 00000 n
0000446432 00000 n
0000446721 00000 n
0000446805 00000 n
0000447050 00000 n
0000447593 00000 n
0000447722 00000 n
0000447996 00000 n
0000448539 00000 n
0000448815 00000 n
0000449227 00000 n
0000449764 00000 n
0000449909 00000 n
0000450189 00000 n
0000450385 00000 n
0000450453 00000 n
0000450677 00000 n
0000450864 00000 n
0000450924 00000 n
0000451149 00000 n
0000451242 00000 n
0000451754 00000 n
0000451837 00000 n
0000452138 00000 n
0000452218 00000 n
0000452813 00000 n
0000453096 00000 n
0000453527 00000 n
0000453752 00000 n
0000453834 00000 n
0000454077 00000 n
0000454669 00000 n
0000454823 00000 n
0000455120 00000 n
0000455663 00000 n
0000455913 00000 n
0000456292 00000 n
0000456829 00000 n
0000456978 00000 n
0000457262 00000 n
0000457458 00000 n
0000457526 00000 n
0000457750 00000 n
0000457937 00000 n
0000457997 00000 n
0000458222 00000 n
trailer
<<
/Root 1 0 R
/Info 3 0 R
/Size 687/ID[<A846EAACCAB9DF65623D1FA64DA03571><A846EAACCAB9DF65623D1FA64DA03571>]>>
startxref
458315
%%EOF
:Build::
  Return: 'Run ''

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
