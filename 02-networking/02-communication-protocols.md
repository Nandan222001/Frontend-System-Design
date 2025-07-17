# 🌐 How the Web Works

In this section, we’ll explore how the web works — covering HTTP, HTTPS, TCP/IP, WebSockets, and more. Understanding these foundational communication protocols is essential for system design and web development.

![How Web Works](https://assets.bytebytego.com/diagrams/0292-explaining-8-popular-network-protocols-in-1-diagram.png)

---

## 📡 HTTP (Hypertext Transfer Protocol)

- Establishes a TCP connection to the server
- Sends an **HTTP Request**
- Server processes the request and returns an **HTTP Response**
- Stateless and plaintext protocol
- **Use Cases:** Fetching web pages, REST APIs

---

## 🚀 HTTP/3 (QUIC)

- Uses **UDP** instead of TCP
- Designed to reduce latency and improve performance
- Supports **header compression** and **multiplexing**
- Improves network reliability in high-latency conditions
- **Use Cases:** Modern web applications with real-time requirements

---

## 🔐 HTTPS (HTTP Secure)

- Secure version of HTTP using **SSL/TLS**
- Encrypts data exchanged between client and server
- Provides **confidentiality**, **integrity**, and **authentication**
- **Use Cases:** Online banking, e-commerce, secure logins

---

## 📶 TCP (Transmission Control Protocol)

- **Connection-oriented** protocol (Three-way handshake)
  - `SYN` → Client initiates connection
  - `SYN-ACK` → Server acknowledges
  - `ACK` → Client confirms
- Ensures reliable, ordered, and error-checked delivery
- **Use Cases:** Web browsing, email (SMTP), file transfer (FTP)

---

## 📨 UDP (User Datagram Protocol)

- **Connectionless** and faster than TCP
- Sends data in **datagrams**
- No guarantee of delivery or order
- Lightweight and low-latency
- **Use Cases:** DNS, VoIP, online gaming, video streaming

---

## 🔄 WebSockets

- Initiated by an **HTTP Upgrade** request
- Enables **full-duplex**, persistent communication
- Operates over a single **TCP** connection
- Reduces overhead and latency
- **Use Cases:** Chat apps, live notifications, real-time dashboards

---

## ✉️ SMTP (Simple Mail Transfer Protocol)

- Protocol for **sending emails**
- Text-based and **push-oriented**
- Transfers emails from:
  - Client → Server
  - Server → Server
- **Use Cases:** Sending transactional emails, email alerts

---

## 📁 FTP (File Transfer Protocol)

- Transfers files between client and server
- Supports **upload** and **download**
- Can run in **active** or **passive** mode
- Supports **authentication** and **binary/ASCII** transfers
- **Use Cases:** File sharing, website deployment, remote backups

---

## 🧠 Summary

| Protocol | Transport | Type         | Reliability | Use Cases |
|----------|-----------|--------------|-------------|-----------|
| HTTP     | TCP       | Stateless    | ✅ Yes      | Web pages, APIs |
| HTTPS    | TCP       | Encrypted    | ✅ Yes      | Secure web communication |
| HTTP/3   | UDP       | Encrypted    | ✅ Yes      | Fast, modern web apps |
| TCP      | -         | Stream-based | ✅ Yes      | Reliable transmission |
| UDP      | -         | Packet-based | ❌ No       | Real-time applications |
| WebSocket| TCP       | Persistent   | ✅ Yes      | Real-time communication |
| SMTP     | TCP       | Text-based   | ✅ Yes      | Email sending |
| FTP      | TCP       | File transfer| ✅ Yes      | File uploads/downloads |

---

> ✅ **Tip:** Understanding these protocols will not only help you build better web systems but also improve your ability to debug, optimize, and secure applications.

## 📝 Additional Resources
- [HTTP Explained](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [WebSockets Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [TCP vs UDP](https://www.cloudflare.com/learning/protocols/tcp-vs-udp/)
- [Understanding HTTPS](https://www.cloudflare.com/learning/how-tls-works/what-is-https/)
- [SMTP Basics](https://www.digitalocean.com/community/tutorials/an-introduction-to-smtp)
- [FTP Overview](https://www.digitalocean.com/community/tutorials/ftp-overview)
- [HTTP/3 and QUIC](https://www.cloudflare.com/learning/protocols/http3/)
- [QUIC Protocol](https://www.cloudflare.com/learning/protocols/quic/)
- [WebSocket Protocol](https://www.rfc-editor.org/rfc/rfc6455)
- [Understanding QUIC](https://developers.google.com/web/fundamentals/performance/http2/)
- [QUIC vs HTTP/2](https://www.cloudflare.com/learning/protocols/quic-vs-http2/)