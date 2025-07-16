# 🌐 Understanding Web

A simple visual and conceptual explanation of how the web works, including the roles of **Client**, **Server**, **IP Address**, **DNS**, and how data flows between devices.

---

## 📍 Client-Server Model

    -----------------------                             -----------------------
    |                     |           Request           |                     |
    |                     | --------------------------->|                     |      
    |        Client       |                             |      Server         |  
    |                     | <---------------------------|                     |
    |                     |          Response           |                     |
    |                     |                             |                     |
    -----------------------                             -----------------------

> 🔄 A **Client** sends a request and the **Server** sends back a response, which may include:
- HTML
- CSS
- JavaScript

---

## 🖥️ What is a Server?

> A **Server** is a computer or system that provides data, resources, or services to clients.

**Examples:**
- Web Hosting Server (serves websites)
- Mail Server (handles email)
- Database Server (stores data)

✅ A typical server response includes:
- **HTML** (Structure)
- **CSS** (Design)
- **JavaScript** (Interactivity)

---

## 🧑‍💻 What is a Client?

> A **Client** is a computer or software that requests resources from a server.

**Examples:**
- Web Browser (Chrome, Firefox)
- Mobile App
- Desktop Software

📱 A client sends HTTP requests to the server and receives data (HTML, CSS, JS) in return.

---

## 🌐 What is an IP Address?

> An **IP address** is a unique numerical label assigned to each device in a network.

- Used to identify and locate devices
- Format: `192.168.1.1` (IPv4), or longer in IPv6

🧭 Think of it like a postal address for your device.

---

## 🧭 What is DNS (Domain Name System)?

> DNS translates human-readable domain names (like `www.google.com`) into IP addresses (`142.250.67.14`).

### 🔗 Example:

You type: www.google.com
DNS resolves: 142.250.67.14
Browser loads: Google homepage


🧠 Without DNS, you'd need to remember complex IP addresses.

---

## 📡 Mobile Internet Journey

### 🔁 DNS Flow

Mobile Browser -> Cell Tower -> Phone Company -> DNS Server

Mobile Browser <- Cell Tower <- Phone Company <- DNS Server


![DNS Diagram](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwv9qazoMnaI1ifSCxREah2aGKCMKx5GcxLw&s)

### 🌍 Website Request Flow

Mobile Browser -> Cell Tower -> Phone Company -> Web Server (Site)
Mobile Browser <- Cell Tower <- Phone Company <- Web Server (Response)

---

## 🔎 Summary Flow Diagram

![Client Server Flow](https://your-image-link.com/client-server-diagram.png)

---

## ✅ Conclusion

- **Client**: Asks for information
- **Server**: Gives back the information
- **IP**: Helps identify devices
- **DNS**: Helps translate names to IPs

This is how the web makes your favorite websites appear when you just type a name into the browser!

---

## 📁 Folder Structure for Reference

