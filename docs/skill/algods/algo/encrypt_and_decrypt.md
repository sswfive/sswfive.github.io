---
id: algo-encrypt
slug: algo-encrypt
title: 加解密算法 (Encrypt)
tags: [算法与数据结构]
keywords: [算法与数据结构]
last_update:
  date: 2024-12-20T00:35:29
---
## 对称加密
- 对称加密： 加密与解密使用的秘钥相同。
- 常见的加密算法：DES、AES、3DES、TDEA、RC2、RC4、RC5、IDEA、SKIPJACK、Blowfish
- 优点：
   - 算法公开、计算量小、加密速度快、加密效率高
- 缺点：
   - 在数据传输前，发送方和接收方必须商定好秘钥，然后使双方都能保护好秘钥。
   - 如果一方的秘钥被泄露，那么加密信息就不安全了。
   - 每对用户每次使用对称加密算法时，都需要使用其他人不知道的唯一秘钥，这会使得收发双方拥有的钥匙数量巨大，密钥管理成为双方的负担。
## 非对称加密

- 非对称加密：加密和解密使用不同的秘钥。秘钥分为公钥（PK）和私钥（SK），其中公钥是公开的，私钥是保密的。不管使用哪一个加密，只要用另外一个解密就行
- 常见算法：RSA、RSA2
```python
# 以RSA为例：
PK,SK = KeyGen()       # KeyGen:秘钥生成算法
X = Encrypt(PK,M)      # Encrypt:加密算法
M = Decrypt(SK,X)      # Decrypt:解密算法
sign = Sign(SK,M)      # Sign:签名算法 
b = Verify(PK,sign,M)  # Verify:验证算法
# M:明文   X:密文   sign:明文签名
```

- 使用场景：
   - 公钥加密，私钥解密，用于传输数据加密
   - 私钥加密（签名），公钥解密（验签），用于身份认证，以及数据完整性。
- 使用公钥加密：
   - **公钥加密系统的提出是为了解决对称加密中密钥传递的问题**
      - A与B进行保密通信的过程是：
         - A要给B发信息要用B的公钥加密，B用自己的私钥解密。
         - 而B给A发信息要用A的公钥加密，A用自己的私钥解密。
- 使用私钥加密：
   - 主要用于身份认证

## 数字签名
> eg: A 要向 支付宝接口 发送 支付请求。支付宝要 验证A的身份。A要生成私钥和公钥，并且把公钥告诉支付宝。

- A先对原始数据(请求的url的查询参数)进行哈希运算，产生数字摘要(哈希值)，然后使用 私钥 对数字摘要 进行加密，得到的就是 数字签名。(注意：A在发送请求的时候，也要把 数字签名 发送给支付宝。)

验证签名的流程：
1. 支付宝 使用A的公钥对数字签名解密 得到 摘要1.
2. 支付宝 对原始数据进行哈希运算，产生数字摘要2.
3. 对比 摘要1和摘要2 是否相等。

