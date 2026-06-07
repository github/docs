ML-KEM Post-Quantum Key Agreement for TLS 1.3
Internet-Draft	connolly-tls-mlkem-key-agreement	November 2024
Connolly	Expires 10 May 2025	[Page]
Abstract
This memo defines ML-KEM-512, ML-KEM-768, and ML-KEM-1024 as a standalone NamedGroups for use in TLS 1.3 to achieve post-quantum key agreement.¶

About This Document
This note is to be removed before publishing as an RFC.¶

Status information for this document may be found at https://datatracker.ietf.org/doc/draft-connolly-tls-mlkem-key-agreement/.¶

Discussion of this document takes place on the Transport Layer Security Working Group mailing list (mailto:tls@ietf.org), which is archived at https://mailarchive.ietf.org/arch/browse/tls/. Subscribe at https://www.ietf.org/mailman/listinfo/tls/.¶

Source for this draft and an issue tracker can be found at https://github.com/dconnolly/draft-connolly-tls-mlkem-key-agreement.¶

Status of This Memo
This Internet-Draft is submitted in full conformance with the provisions of BCP 78 and BCP 79.¶

Internet-Drafts are working documents of the Internet Engineering Task Force (IETF). Note that other groups may also distribute working documents as Internet-Drafts. The list of current Internet-Drafts is at https://datatracker.ietf.org/drafts/current/.¶

Internet-Drafts are draft documents valid for a maximum of six months and may be updated, replaced, or obsoleted by other documents at any time. It is inappropriate to use Internet-Drafts as reference material or to cite them other than as "work in progress."¶

This Internet-Draft will expire on 10 May 2025.¶

Copyright Notice
Copyright (c) 2024 IETF Trust and the persons identified as the document authors. All rights reserved.¶

This document is subject to BCP 78 and the IETF Trust's Legal Provisions Relating to IETF Documents (https://trustee.ietf.org/license-info) in effect on the date of publication of this document. Please review these documents carefully, as they describe your rights and restrictions with respect to this document. Code Components extracted from this document must include Revised BSD License text as described in Section 4.e of the Trust Legal Provisions and are provided without warranty as described in the Revised BSD License.¶

▲
Table of Contents
1. Introduction
1.1. Motivation
FIPS 203 standard (ML-KEM) is a new FIPS standard for post-quantum key agreement via lattice-based key establishment mechanism (KEM). Having a fully post-quantum (not hybrid) key agreement option for TLS 1.3 is necessary for migrating beyond hybrids and for users that need to be fully post-quantum.¶

2. Conventions and Definitions
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in BCP 14 [RFC2119] [RFC8174] when, and only when, they appear in all capitals, as shown here.¶

3. Key encapsulation mechanisms
This document models key agreement as key encapsulation mechanisms (KEMs), which consist of three algorithms:¶

KeyGen() -> (pk, sk): A probabilistic key generation algorithm, which generates a public encapsulation key pk and a secret decapsulation key sk.¶

Encaps(pk) -> (ct, shared_secret): A probabilistic encapsulation algorithm, which takes as input a public encapsulation key pk and outputs a ciphertext ct and shared secret shared_secret.¶

Decaps(sk, ct) -> shared_secret: A decapsulation algorithm, which takes as input a secret decapsulation key sk and ciphertext ct and outputs a shared secret shared_secret.¶

ML-KEM-512, ML-KEM-768 and ML-KEM-1024 conform to this API:¶

ML-KEM-512 has encapsulation keys of size 800 bytes, expanded decapsulation keys of 1632 bytes, decapsulation key seeds of size 64 bytes, ciphertext size of 768 bytes, and shared secrets of size 32 bytes¶

ML-KEM-768 has encapsulation keys of size 1184 bytes, expanded decapsulation keys of 2400 bytes, decapsulation key seeds of size 64 bytes, ciphertext size of 1088 bytes, and shared secrets of size 32 bytes¶

ML-KEM-1024 has encapsulation keys of size 1568 bytes, expanded decapsulation keys of 3168 bytes, decapsulation key seeds of size 64 bytes, ciphertext size of 1568 bytes, and shared secrets of size 32 bytes¶

4. Construction
We define the KEMs as NamedGroups, sent in the supported_groups extension.¶

4.1. Negotiation
Each method is its own solely post-quantum key agreement method, which are assigned their own identifiers, registered by IANA in the TLS Supported Groups registry:¶

    enum {

         ...,

          /* ML-KEM Key Agreement Methods */
          mlkem512(0x0200),
          mlkem768(0x0201),
          mlkem1024(0x0202)

         ...,

    } NamedGroup;
¶

4.2. Transmitting encapsulation keys and ciphertexts
The encapsulation key and ciphertext values are directly encoded with fixed lengths as in [FIPS203]; the representation and length of elements MUST be fixed once the algorithm is fixed.¶

In TLS 1.3 a KEM encapsulation key or KEM ciphertext is represented as a KeyShareEntry:¶

    struct {
        NamedGroup group;
        opaque key_exchange<1..2^16-1>;
    } KeyShareEntry;
¶

These are transmitted in the extension_data fields of KeyShareClientHello and KeyShareServerHello extensions:¶

    struct {
        KeyShareEntry client_shares<0..2^16-1>;
    } KeyShareClientHello;

    struct {
        KeyShareEntry server_share;
    } KeyShareServerHello;
¶

The client's shares are listed in descending order of client preference; the server selects one algorithm and sends its corresponding share.¶

For the client's share, the key_exchange value contains the pk output of the corresponding KEM NamedGroup's KeyGen algorithm.¶

For the server's share, the key_exchange value contains the ct output of the corresponding KEM NamedGroup's Encaps algorithm.¶

For all parameter sets, the server MUST perform the encapsulation key check described in Section 7.2 of [FIPS203] on the client's encapsulation key, and abort with an illegal_parameter alert if it fails.¶

For all parameter sets, the client MUST check if the ciphertext length matches the selected parameter set, and abort with an illegal_parameter alert if it fails.¶

If ML-KEM decapsulation fails for any other reason, the connection MUST be aborted with an internal_error alert.¶

5. Discussion
5.1. Larger encapsulation keys and/or ciphertexts
The KeyShareEntry struct limits public keys and ciphertexts to 2^16-1 bytes; this is the (2^16-1)-byte limit on the key_exchange field in the KeyShareEntry struct. All defined parameter sets for ML-KEM have encapsulation keys and ciphertexts that fall within the TLS constraints.¶

5.2. Failures
Some post-quantum key exchange algorithms, including ML-KEM, have non-zero probability of failure, meaning two honest parties may derive different shared secrets. This would cause a handshake failure. ML-KEM has a cryptographically small failure rate less than 2^-138; implementers should be aware of the potential of handshake failure. Clients can retry if a failure is encountered.¶

6. Security Considerations
6.1. Fixed lengths
For each NameGroup, the lengths are fixed (that is, constant) for encapsulation keys, the ciphertexts, and the shared secrets.¶

Variable-length secrets are, generally speaking, dangerous. In particular, when using key material of variable length and processing it using hash functions, a timing side channel may arise. In broad terms, when the secret is longer, the hash function may need to process more blocks internally. In some unfortunate circumstances, this has led to timing attacks, e.g. the Lucky Thirteen [LUCKY13] and Raccoon [RACCOON] attacks.¶

[AVIRAM] identified a risk of using variable-length secrets when the hash function used in the key derivation function is no longer collision-resistant.¶

6.2. IND-CCA
The main security property for KEMs is indistinguishability under adaptive chosen ciphertext attack (IND-CCA2), which means that shared secret values should be indistinguishable from random strings even given the ability to have other arbitrary ciphertexts decapsulated. IND-CCA2 corresponds to security against an active attacker, and the public key / secret key pair can be treated as a long-term key or reused. A common design pattern for obtaining security under key reuse is to apply the Fujisaki-Okamoto (FO) transform [FO] or a variant thereof [HHK].¶

Key exchange in TLS 1.3 is phrased in terms of Diffie-Hellman key exchange in a group. DH key exchange can be modeled as a KEM, with KeyGen corresponding to selecting an exponent x as the secret key and computing the public key g^x; encapsulation corresponding to selecting an exponent y, computing the ciphertext g^y and the shared secret g^(xy), and decapsulation as computing the shared secret g^(xy). See [HPKE] for more details of such Diffie-Hellman-based key encapsulation mechanisms. Diffie-Hellman key exchange, when viewed as a KEM, does not formally satisfy IND-CCA2 security, but is still safe to use for ephemeral key exchange in TLS 1.3, see e.g. [DOWLING].¶

TLS 1.3 does not require that ephemeral public keys be used only in a single key exchange session; some implementations may reuse them, at the cost of limited forward secrecy. As a result, any KEM used in the manner described in this document MUST explicitly be designed to be secure in the event that the public key is reused. Finite-field and elliptic-curve Diffie-Hellman key exchange methods used in TLS 1.3 satisfy this criteria. For generic KEMs, this means satisfying IND-CCA2 security or having a transform like the Fujisaki-Okamoto transform [FO] [HHK] applied. While it is recommended that implementations avoid reuse of KEM public keys, implementations that do reuse KEM public keys MUST ensure that the number of reuses of a KEM public key abides by any bounds in the specification of the KEM or subsequent security analyses. Implementations MUST NOT reuse randomness in the generation of KEM ciphertexts.¶

6.3. Binding properties
TLS 1.3's key schedule commits to the the ML-KEM encapsulation key and the ciphertext as the key_exchange field as part of the key_share extension are populated with those values are included as part of the handshake messages, providing resilience against re-encapsulation attacks against KEMs used for key agreement.¶

Because of the inclusion of the ML-KEM ciphertext in the TLS 1.3 key schedule, there is no concern of malicious tampering (MAL) adversaries, nor of just honestly-generated but leaked key pairs (LEAK adversaries). The same is true of KEMs with weaker binding properties, even if they were to have more constraints for secure use in contexts outside of TLS 1.3 handshake key agreement. These computational binding properties for KEMs were formalized in [CDM23].¶

7. IANA Considerations
This document requests/registers three new entries to the TLS Named Group (or Supported Group) registry, according to the procedures in Section 6 of [tlsiana].¶

Value:
0x0200¶

Description:
MLKEM512¶

DTLS-OK:
Y¶

Recommended:
N¶

Reference:
This document¶

Comment:
FIPS 203 version of ML-KEM-512¶

Value:
0x0201¶

Description:
MLKEM768¶

DTLS-OK:
Y¶

Recommended:
N¶

Reference:
This document¶

Comment:
FIPS 203 version of ML-KEM-768¶

Value:
0x0202¶

Description:
MLKEM1024¶

DTLS-OK:
Y¶

Recommended:
N¶

Reference:
This document¶

Comment:
FIPS 203 version of ML-KEM-1024¶

8. References
8.1. Normative References
[FIPS203]
"Module-Lattice-Based Key-Encapsulation Mechanism Standard", National Institute of Standards and Technology, DOI 10.6028/nist.fips.203, August 2024, <https://doi.org/10.6028/nist.fips.203>.
[RFC2119]
Bradner, S., "Key words for use in RFCs to Indicate Requirement Levels", BCP 14, RFC 2119, DOI 10.17487/RFC2119, March 1997, <https://www.rfc-editor.org/rfc/rfc2119>.
[RFC8174]
Leiba, B., "Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words", BCP 14, RFC 8174, DOI 10.17487/RFC8174, May 2017, <https://www.rfc-editor.org/rfc/rfc8174>.
[RFC9180]
Barnes, R., Bhargavan, K., Lipp, B., and C. Wood, "Hybrid Public Key Encryption", RFC 9180, DOI 10.17487/RFC9180, February 2022, <https://www.rfc-editor.org/rfc/rfc9180>.
8.2. Informative References
[AVIRAM]
Nimrod Aviram, Benjamin Dowling, Ilan Komargodski, Kenny Paterson, Eyal Ronen, and Eylon Yogev, "[TLS] Combining Secrets in Hybrid Key Exchange in TLS 1.3", 1 September 2021, <https://mailarchive.ietf.org/arch/msg/tls/F4SVeL2xbGPaPB2GW_GkBbD_a5M/>.
[CDM23]
Cremers, C., Dax, A., and N. Medinger, "Keeping Up with the KEMs: Stronger Security Notions for KEMs and automated analysis of KEM-based protocols", 2023, <https://eprint.iacr.org/2023/1933.pdf>.
[DOWLING]
Dowling, B., Fischlin, M., Günther, F., and D. Stebila, "A Cryptographic Analysis of the TLS 1.3 Handshake Protocol", Springer Science and Business Media LLC, Journal of Cryptology vol. 34, no. 4, DOI 10.1007/s00145-021-09384-1, July 2021, <https://doi.org/10.1007/s00145-021-09384-1>.
[FO]
Fujisaki, E. and T. Okamoto, "Secure Integration of Asymmetric and Symmetric Encryption Schemes", Springer Science and Business Media LLC, Journal of Cryptology vol. 26, no. 1, pp. 80-101, DOI 10.1007/s00145-011-9114-1, December 2011, <https://doi.org/10.1007/s00145-011-9114-1>.
[HHK]
Hofheinz, D., Hövelmanns, K., and E. Kiltz, "A Modular Analysis of the Fujisaki-Okamoto Transformation", Springer International Publishing, Lecture Notes in Computer Science pp. 341-371, DOI 10.1007/978-3-319-70500-2_12, ISBN ["9783319704999", "9783319705002"], 2017, <https://doi.org/10.1007/978-3-319-70500-2_12>.
[HPKE]
Barnes, R., Bhargavan, K., Lipp, B., and C. Wood, "Hybrid Public Key Encryption", RFC 9180, DOI 10.17487/RFC9180, February 2022, <https://www.rfc-editor.org/rfc/rfc9180>.
[hybrid]
Stebila, D., Fluhrer, S., and S. Gueron, "Hybrid key exchange in TLS 1.3", Work in Progress, Internet-Draft, draft-ietf-tls-hybrid-design-11, 7 October 2024, <https://datatracker.ietf.org/doc/html/draft-ietf-tls-hybrid-design-11>.
[LUCKY13]
Al Fardan, N. J. and K. G. Paterson, "Lucky Thirteen: Breaking the TLS and DTLS record protocols", n.d., <https://ieeexplore.ieee.org/iel7/6547086/6547088/06547131.pdf>.
[RACCOON]
Merget, R., Brinkmann, M., Aviram, N., Somorovsky, J., Mittmann, J., and J. Schwenk, "Raccoon Attack: Finding and Exploiting Most-Significant-Bit-Oracles in TLS-DH(E)", September 2020, <https://raccoon-attack.com/>.
[tlsiana]
Salowey, J. A. and S. Turner, "IANA Registry Updates for TLS and DTLS", Work in Progress, Internet-Draft, draft-ietf-tls-rfc8447bis-10, 3 November 2024, <https://datatracker.ietf.org/doc/html/draft-ietf-tls-rfc8447bis-10>.
Acknowledgments
Thanks to Douglas Stebila for consultation on the draft-ietf-tls-hybrid-design design.¶

Author's Address
Deirdre Connolly

SandboxAQ by: Edgarruiz8585 