= Easy-RSA v3 OpenVPN Howto =

This Howto walks through the use of Easy-RSA v3 with OpenVPN.


Skip to the : [https://community.openvpn.net/openvpn/wiki/EasyRSA3-OpenVPN-Howto#PKIprocedure:ProducingyourcompletePKIontheCAmachine Beginners Guide]

== Process Overview ==

The best way to create a PKI for OpenVPN is to separate your CA duty from each server & client. The CA should ideally be on a secure environment (whatever that means to you.) Loss/theft of the CA key destroys the security of the entire PKI.

To use Easy-RSA to set up a new OpenVPN PKI, you will:

1. Set up a CA PKI and build a root CA

2. Configure secondary PKI environments on your server and each client and generate a keypair & request on them

3. Send the certificate requests to the CA, where the CA signs and returns a valid certificate

4. On your OpenVPN server, generate DH parameters (see the DH Generation section of this Howto)

== Easy-RSA and MITM protection with OpenVPN ==

'''Important note:''' some OpenVPN configs rely on the deprecated "Netscape" cert attribute called nsCertType. This is deprecated behavior, and Easy-RSA 3 does '''not''' enable this by default like v2 did. Please use the `--remote-cert-tls` directive in your OpenVPN config files for MITM protection.

If you really need the old, deprecated behavior, enable the Netscape extensions by reading vars.example before signing certs with your CA. This will allow you to use `--ns-cert-type` with OpenVPN.

== PKI procedure: using a separate CA system ==

Pick locations for the CA and each entity that will be assigned certs. All keypair/request generation should occur on the target system that will use them; put another way, generate a server request on the actual server system, and your client requests on each client.

You will end up with the following locations used in the steps below:

 CA:: your secured CA environment; this will be on a separate system, or at least a separate directory from anything else
 server:: each server has a unique directory for its own key & request (on the actual server system)
 entity:: each client has a unique directory for its own key & request (on the actual client system)

1. On the CA, start a new PKI and build a CA keypair/cert:
{{{
./easyrsa init-pki
./easyrsa build-ca
}}}

2. On each server system, generate a keypair and request. Normally these are left unencrypted by using the "nopass" argument since servers usually start up without any password input. This generates an '''unencrypted''' key, so protect its access and file permissions carefully.
{{{
./easyrsa init-pki
./easyrsa gen-req UNIQUE_SERVER_SHORT_NAME nopass
}}}

3. On each client, generate a keypair and request. The name selected must be unique across the PKI and is otherwise arbitrary. Create a new PKI and request on each client as follows:
{{{
./easyrsa init-pki
./easyrsa gen-req UNIQUE_CLIENT_SHORT_NAME
}}}
  A. Optionally, the private key can be left unencrypted on-disk with the additional `nopass` option after the name. This is '''not''' recommended unless automated VPN startup is required. Unencrypted private keys can be used by anyone who obtains a copy of the file. Encrypted keys offer stronger protection, but will require the passphrase on initial use.

4. Send the request files from each entity to the CA system. This is not security sensitive, though it is wise to verify the received file matches the sender's copy if the transport is untrusted.

5. On the CA, import each entity request file, giving it an arbitrary "short name" as follows. This basically just copies the request file into `reqs/` under the PKI dir to prepare it for review and signing.
{{{
./easyrsa import-req /path/to/received.req UNIQUE_SHORT_FILE_NAME
}}}

6. Review each request's details if you wish, then sign it as one of the types: server or client.
  A. (optional) review the request:
{{{
./easyrsa show-req UNIQUE_SHORT_FILE_NAME
}}}
  B. If you are signing as a '''client''':
{{{
./easyrsa sign-req client UNIQUE_SHORT_FILE_NAME
}}}
  C. If you are signing as a '''server''':
{{{
./easyrsa sign-req server UNIQUE_SHORT_FILE_NAME
}}}

7. The CA returns the signed certificate produced in the above step, and includes the CA certificate (ca.crt) unless the client already has it. This can be done over an insecure channel, though the client is encouraged to confirm the received CA cert is valid if the transport is untrusted.

== DH Generation ==

On the PKI for the OpenVPN server, this command will generate DH parameters used during the TLS handshake with connecting clients. The DH params are not security sensitive and are used only by an OpenVPN server.

{{{
./easyrsa gen-dh
}}}

== PKI procedure: Producing your complete PKI on the CA machine ==

It is most common for beginners to produce a complete PKI on one machine and then distribute the files as needed.  If you have followed the steps above and already have a partial PKI then make sure you do not over write it.  The simplest approach is to make a complete copy of Easyrsa3 in a new folder.

Starting with a fresh copy of Easyrsa3 follow these steps:

Copy the file `vars.example` to file named `vars` and open `vars` for editing.
Read through `vars` for instructions on what to edit.
For example, you can chose if your PKI will use RSA or Elliptic Curve cryptography.
Save your changes and close `vars`.

Initialise your PKI:
{{{
./easyrsa init-pki
}}}
Create your CA:
{{{
./easyrsa build-ca
}}}
  Option `nopass` can be used to disable password locking the CA.

Build a server certificate and key:
{{{
./easyrsa build-server-full <SERVER_NAME>
}}}
  Replace `<SERVER_NAME>` with your server name.  eg. `Server-01` [[br]]
  Option `nopass` can be used to disable password locking the key. [[br]]

Build a client certificate and key:
{{{
./easyrsa build-client-full <CLIENT_NAME>
}}}
  Replace `<CLIENT_NAME>` with your client name.  eg. `Client-01` or `alice` [[br]]
  Option `nopass` can be used to disable password locking the key. [[br]]
  Repeat for all clients. [[br]]

Using this method, server and client keys must be distributed over a secure medium, such as using SFTP.

Finally, you can use [https://github.com/TinCanTech/easy-tls Easy-TLS] to add the finishing touches to your PKI.


Download `easytls` to your current EasyRSA-3 working directory and follow these steps:

Initialise Easy-TLS:
{{{
./easytls init-tls
}}}
  This creates a directory called `easytls` in your current PKI directory (Default: `pki/easytls`)

Create a TLS-AUTH key:
{{{
./easytls build-tls-auth
}}}

Create a TLS-CRYPT key:
{{{
./easytls build-tls-crypt
}}}

Create a TLS-CRYPT-V2 server key:
{{{
./easytls build-tls-crypt-v2-server <SERVER_NAME>
}}}
  This key **must** be kept secure.
Create a TLS-CRYPT-V2 client key:
{{{
./easytls build-tls-crypt-v2-client <SERVER_NAME> <CLIENT_NAME>
}}}
  The Server key is used to encrypt the client key which is why the server key must also be specified.

Now Easy-TLS can create `.inline` files for each of your VPN nodes.

Depending on which type of TLS key you are using (TLS auth, crypt or crypt-v2) build an inline file:
{{{
./easytls inline-tls-auth Server-01
}}}
  Repeat for all your VPN nodes. [[br]]

If you used the first method to build your PKI and do not have access to the keys of each of your nodes then you can still use Easy-TLS to build `.inline` files by using the option `nokey`.  This will build `.inline` files which leave the inline `<key></key>` field blank so that the key can be pasted in by the respective user.

-	> by: Edgar Manuel Ruiz Arias @Edgarruiz8585
-	 > e-mail: ruizariasedgarmanuel@gmail.com edgarplasticos3@hotmail.com edgarmanuelruiz664@gmail.com 
