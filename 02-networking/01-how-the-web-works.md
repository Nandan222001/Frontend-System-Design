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


### 🌍 Website Request Flow

Mobile Browser -> Cell Tower -> Phone Company -> Web Server (Site)

Mobile Browser <- Cell Tower <- Phone Company <- Web Server (Response)

---
When you search for a website from your browser or mobile device, your request first travels to a cell tower. The cell tower connects to your phone company, which then forwards the request to a DNS server to resolve the domain name into an IP address. DNS acts like a phonebook, providing the IP address for the website you searched for. Once the IP address is found, your request is sent to the web server hosting the site. The server processes your request and sends the response back along the same path: web server → phone company → cell tower → your device.

---

## 📖 How to Connect One Laptop to Another Laptop

You can use a LAN cable to connect two laptops directly, allowing them to communicate and share files. For connecting more than two laptops, you can use a network switch, which lets multiple devices connect to each other efficiently.

---

# 🔗 Wired and Wireless Connections

Understanding how the internet reaches our devices involves a fascinating blend of wired and wireless technologies.

## 📡 The Basics: Wired vs. Wireless

* **Wired Connections ⚡️**: These rely on physical cables, primarily Ethernet, to connect devices directly or through network switches.
    * **Pros**: Generally offer superior speed, stability, and security. Less susceptible to interference.
    * **Cons**: Less flexible, requires physical cabling, can be unsightly if not managed well.

* **Wireless Connections 📶**: These utilize Wi-Fi to connect devices without physical cables.
    * **Pros**: Provides flexibility and mobility, allowing devices to connect from various locations within range.
    * **Cons**:
        * **Interference**: Susceptible to interference from other wireless devices, electronic signals, and physical obstacles (walls, furniture).
        * **Reduced Speed**: Speed can degrade significantly with distance from the access point and through obstacles.
        * **Environmental Factors**: Performance can be affected by weather, surrounding structures, and even the number of connected devices.
        * **Security Concerns**: Requires proper encryption to prevent unauthorized access.

## 🏢 Internet Connectivity in a Multi-Floor Building

Let's consider a practical scenario: connecting a three-floor building to the internet.

### ❌ Suboptimal Approach: Single Router

Using a single Wi-Fi router on the ground floor to cover all three floors:

```plaintext

[Internet] -- (Wired) -- [Ground Floor Router]
|
+-- (Wireless) -- [1st Floor Devices]
|
+-- (Wireless) -- [2nd Floor Devices]

```

**Issues**:
* **Signal Degradation**: Wi-Fi signals weaken significantly with distance and when passing through floors and walls.
* **Interference**: Increased likelihood of interference, leading to slower speeds and unstable connections.
* **Uneven Coverage**: Devices closer to the router will experience better speeds, while those further away will suffer from poor connectivity.

### ✅ Optimal Approach: Wired Backhaul with Multiple Routers

A more robust solution involves a router on each floor, connected via wired connections to a central point (often the main router or a switch) on the ground floor.

```plaintext

[Internet] -- (Wired) -- [Ground Floor Main Router]
|
+-- (Wired) -- [1st Floor Router] -- (Wireless) -- [1st Floor Devices]
|
+-- (Wired) -- [2nd Floor Router] -- (Wireless) -- [2nd Floor Devices] 

```
**Benefits**:
* **Stable Connection**: Each floor has a dedicated Wi-Fi access point, ensuring strong and stable wireless signals.
* **Consistent Speed**: Devices on each floor receive optimal speeds due to proximity to their respective routers.
* **Reduced Interference**: Distributes the wireless load, minimizing interference and improving overall performance.

## 🌍 The Bigger Picture: ISP to Your Home

How does the internet *actually* get to your building or home from the Internet Service Provider (ISP)?

It's not feasible for ISPs to run individual optical fiber or LAN cables to every single home directly. Imagine the spaghetti of wires!

### 💡 The Role of the Network Switch

Instead, ISPs deploy **Network Switches** (or similar aggregation points) within neighborhoods or societies.
```plaintext

                          [ISP Main Line]
                                 |
                                 |
            (Optical Fiber / High-Capacity Cable)
                                 |
                                 |
           [Society / Neighborhood Network Switch]
                                 |
     -----------------------------------------------------
     |                         |                         |
     |                         |                         |
     |                         |                         |
[Home / Building A]     [Home / Building B]       [Home / Building C]
      [Router]               [Router]                   [Router]
         |                      |                          |
         |                      |                          |
 (Wired / Wireless)      (Wired / Wireless)         (Wired / Wireless)
      Devices                Devices                     Devices

```
**How it works**:
1.  **ISP Backbone**: The ISP's main internet infrastructure connects to these large-capacity switches via high-speed optical fiber or other robust cables.
2.  **Local Distribution**: The network switch acts as a local distribution hub. It takes the single, high-bandwidth connection from the ISP and intelligently distributes it to multiple homes or buildings within its vicinity.
3.  **Home Connection**: Each home or building then connects to this switch using its own LAN cables (often from a central point in the building) or, less commonly directly, through its Wi-Fi router.
4.  **Efficiency**: This method significantly reduces the amount of individual cabling required, making the entire network infrastructure more manageable and cost-effective.

## 🌐 The Internet's Address Book: How DNS Works

So far, we've seen how physical connections bring the internet to our devices. But how do we access websites like `google.com` or `wikipedia.org`? This is where the **Domain Name System (DNS)** comes into play.

### ❓ The Problem: Computers Speak Numbers, Humans Speak Names

Computers communicate using IP addresses (e.g., `172.217.160.142` for Google). Memorizing these numbers for every website we want to visit is impossible for humans.

### ✅ The Solution: DNS - The Internet's Phonebook

DNS acts like a giant phonebook for the internet. When you type a website name (a "domain name") into your browser, DNS translates that name into the corresponding IP address, allowing your computer to find the correct server.

                 +---------------------------------+
                 |         Your Device             |
                 |  (e.g., Web Browser)            |
                 +---------------------------------+
                          |
                          | 1. Request website (e.g., google.com)
                          V
                 +---------------------------------+
                 |         Local DNS Resolver      |
                 |  (Often provided by your ISP    |
                 |   or router, or Google DNS, etc.)|
                 +---------------------------------+
                          |
                          | 2. Check cache; if not found,
                          |    query Root DNS Server
                          V
                 +---------------------------------+
                 |        Root DNS Server          |
                 |    (Knows where .com, .org, etc. |
                 |     TLD servers are)            |
                 +---------------------------------+
                          |
                          | 3. Refer to .com TLD Server
                          V
                 +---------------------------------+
                 |        TLD DNS Server (.com)    |
                 |    (Knows where Google's         |
                 |     Authoritative DNS Server is) |
                 +---------------------------------+
                          |
                          | 4. Refer to Google's Authoritative DNS
                          V
                 +---------------------------------+
                 |        Authoritative DNS Server |
                 |      (For google.com - knows     |
                 |       Google's IP address)      |
                 +---------------------------------+
                          |
                          | 5. Provides IP Address (e.g., 172.217.160.142)
                          V
                 +---------------------------------+
                 |         Local DNS Resolver      |
                 |      (Caches IP, sends to device)|
                 +---------------------------------+
                          |
                          | 6. Sends IP Address
                          V
                 +---------------------------------+
                 |         Your Device             |
                 |  (Connects to IP and loads website)|
                 +---------------------------------+
 

---

## 🤝 DNS and the ISP

### 🌐 What Happens When You Type a URL?

You enter:  
`https://www.google.com`

Your browser needs the **IP address** of the website to connect — but it doesn't know it directly. This is where **DNS (Domain Name System)** comes in.

---

### 🧱 DNS Domain Structure

Root Domain: .

Top Level Domain: .com, .org, .net

Second Level Domain: google.com, wikipedia.org

Third Level Domain: www.google.com, en.wikipedia.org


🧠 DNS translates human-readable names into machine-usable IP addresses.

---

### 🏢 What Happens at the Server End?

How does **Google serve millions of users** every second?

👉 The answer: **Load Balancing** and **Data Centers**

- Google uses **multiple servers** across the globe
- Each **Data Center** contains thousands of CPUs and networking hardware
- Requests are distributed among servers to avoid overload

🖥️ **Diagram - Load Balancing**

        User 1 ─┐
                ├──> [ Load Balancer ] ──> [ Server A ]
        User 2 ─┤                        ├─> [ Server B ]
        User 3 ─┘                        └─> [ Server C ]


![Load Balancing](https://www.veeble.org/kb/wp-content/uploads/2024/01/Untitled-design-2.jpg)

---

### 🌍 How Do You Get a Response From Servers Like Google?

Let’s say Google's server is in **California**, and you are browsing from **India**.

---

### 🛰️ Option 1: Satellite Communication

- Server sends data to a **Satellite**
- Satellite beams data down to your device

🚫 **Drawbacks**:
- Satellites are **far away (~36,000 km)** in geostationary orbit
- **Latency issues** due to distance
- Susceptible to **weather, atmosphere, and signal interference**

---

### 🌐 Option 2: Fiber Optic Cables (More Practical)

The **internet backbone** relies on:
- **Fiber Optic Cables** laid under oceans 🌊
- Data travels at near light speed
- Used to connect countries and continents

---

### 🌊 Submarine Cables: The Real Backbone

> These are **thick, shielded fiber optic cables** laid on the ocean floor to connect continents.

🌍 Example:

      India ───────────────┐
                            ├── Submarine Cable ──> California (USA)
      China ───────────────┘

📶 These cables carry:
- Billions of Gigabytes per second
- Video, voice, cloud data, etc.

![Submarine Cable](https://www2.telegeography.com/hubfs/2021/Blog%20Assets/Interactive%20Map.png)

---

## 🏢 How Does ISP Work and Why Some Countries Can't Access Google?

### 💭 You might wonder...

> Why can't some countries like China or Russia access Google or certain websites?

### 🌐 ISP (Internet Service Provider)

- ISPs connect users to the global internet
- Each country has **regional ISPs**
- These ISPs connect to **International Gateways**

---

### 🌍 Internet Hierarchy

    [ Global Fiber Network ]
                ↓
    [ Tier 1 ISP Providers ]
                ↓
    [ National / Regional ISPs ]
                ↓
    [ Local ISPs / End Users ]
 
 

### 🚫 Internet Restrictions

Governments can control:
- What DNS servers are used
- What websites can be accessed
- Whether to block IPs or domains

**Result**:  
Countries like **China** use **The Great Firewall** — a combination of:
- DNS filtering
- Deep packet inspection
- IP blacklisting

---
## 🌐 How Does the Internet Work?

Whenever you search for something on Google, your request travels at near light speed through fiber optic cables to reach Google's servers. The server processes your request and sends the response back through the same network path.

Here's how the journey works:
- Your request first goes to your **local ISP** (Internet Service Provider).
- It then moves to a **regional ISP**, and from there to your country's **global ISP**, which connects to the global internet backbone.
- If the server is in another country, the request travels through that country's global ISP and regional ISP before reaching the destination server.
- The server processes your request and sends the response back in small packets of data. These packets may take different routes to reach your device.
- Your device reassembles the packets to display the requested content.

**Example: Online Banking Transaction**

Suppose you transfer ₹1000 from your bank account to someone else's account:
- Your request goes to the bank's server, which processes the transaction and sends back a response.
- The response is split into multiple data packets, which may travel via different routes.
- If any packet is lost or corrupted during transmission, the **TCP protocol** ensures reliability by retransmitting lost packets and reassembling them correctly at your device.

> **TCP (Transmission Control Protocol)** guarantees that all packets arrive safely and in order, so you always get the complete and accurate response.

![Distributed ISP](https://www.arelion.com/dam/jcr:30f1d4e7-0b66-44af-ab70-fa25001cc165/what-is-the-internet-backbone.jpg)
 

## 🚀 Advanced Concepts !!!

Whenever you search anything on a browser, **a lot happens behind the scenes**. Here are some key advanced concepts every developer should understand:

---

### 1. 🧠 **Caching**

- **Browser Caching**: 
  - Stores static resources (HTML, CSS, JS) locally.
  - Reduces load time by avoiding unnecessary network requests.
  
- **Service Workers**:
  - JavaScript scripts that run in the background.
  - Intercept network requests and serve cached content or fetch updates.

🔗 Example Service Worker Demo:  
![Service Worker](https://web.dev/static/learn/pwa/service-workers/image/service-worker-developer-5ebe49234dc0f.png)

---

### 🔍 Steps to View Browser-Level Caching (DevTools):

1. Press `F12` or right-click → `Inspect`.
2. Open the **Network** tab.
3. Check ✅ `Disable cache` (active only when DevTools is open).
4. Reload the page.
5. Observe the **Size** and **Status** columns:
   - `200`: Fetched from server
   - `304`: Cached version reused
6. Browser allows **6–8 concurrent requests**. Extra requests are queued.
7. You’ll see **queuing times** and **service worker details** if active.
8. In the **Service Worker section**:
   - `Startup`: Time to boot the service worker
   - `respondWith`: Response sent from service worker
   - `Fetch`: Interception of network request
   - `Cache`: Indicates caching for offline use
   - `Sync`: Shows background sync operations

---

### 2. 💻 **Operating System (OS)**

- Manages hardware, memory, and networking.
- Provides APIs for browsers and software to communicate with hardware.

---

### 3. 📶 **Router**

- Connects multiple devices to the internet.
- Uses **routing tables** to decide how to send data packets efficiently.

---

### 4. 🌐 **ISP (Internet Service Provider)**

- Provides internet access to homes and businesses.
- Manages infrastructure like:
  - Routers
  - Fiber optic cables
  - Regional and global peering points

---

## 🌍 How ISP Routing Works

Let’s say you're in **India** accessing a website hosted in the **USA**:

```plaintext

Your Browser
↓
Local ISP
↓
International Gateway
↓
Undersea Cable
↓
US Server (e.g. Google, Amazon)
↓
Undersea Cable (Back)
↓
Your Device
```

This is **costly** and **slow**. So to improve performance:

---

### 🧠 ISPs Use Regional Servers

- Big companies (Google, Facebook, Amazon) deploy **servers in multiple countries**.
- When you request `google.com`, it may come from a **Google server within India**.
- Reduces latency, increases speed.

---

### 🔁 What is **Peering**?

**Peering** is when two ISPs (or companies and ISPs) agree to exchange traffic directly without involving third parties.

Benefits:
- No extra charges
- Faster routing
- Lower latency

[Google Server - India]
↓
[Regional ISP (e.g. Airtel, Jio)]
↓
[Local ISP (e.g. neighborhood fiber)]
↓
[Your Router]
↓
[Your Device]


✅ This avoids global routing, reduces server costs, and improves delivery time.

---

### 🔌 Network Hubs and Routing Flow

```plaintext

[Google / Facebook / Amazon Servers]
↓ (Peering)
[Regional ISP Hub]
↓
[Local ISP Network]
↓
[Your Router]
↓
[Device]


```

### DOMAIN NAME MAPPING

ICANN (Internet Corporation for Assigned Names and Numbers) manages domain names and IP addresses globally. 

This company ensures that domain names are unique and properly mapped to IP addresses, allowing users to access websites using human-readable names instead of numerical IP addresses.

WHOIS (Whois) is a protocol used to query databases that store registered users or assignees of a domain name or an IP address block. It provides information about the ownership and registration details of a domain.

---

## 📚 Client And Server Things

![Client And Server](https://miro.medium.com/v2/resize:fit:762/0*prUYsFf2NRG0oL7b.png)

- **DNS LOOKUP**: When you type a URL, your browser queries DNS to resolve the domain name to an IP address.
- **TCP HANDSHAKE**: Establishes a connection between your device and the server.
- **SSL HANDSHAKE**: If the site uses HTTPS, this secures the connection.

- **HTTP GET REQUEST**: Your browser sends a request to the server for the webpage.
- **HTTP RESPONSE**: The server sends back the requested HTML, CSS, and JavaScript
- **RENDERING**: Your browser processes the HTML, applies CSS styles, and executes JavaScript to display the webpage.

At this point, you can interact with the webpage, and any further actions (like clicking links or submitting forms) will repeat the process of sending requests and receiving responses.

---

![Web Page Loading Process](https://miro.medium.com/v2/resize:fit:2000/1*M2PbmrQLfnY39hYpp_0z2w.png)

At The high level , from the time you get a html to the time you see the page, it goes through several steps:

1. **Loading HTML**: The browser fetches the HTML file from the server.
2. **Scripting**: The browser executes JavaScript code, which may modify the DOM or fetch additional resources.
3. **Rendering**: The browser renders the page, applying styles and layout.
4. **Painting**: The browser paints the pixels on the screen, displaying the final webpage.

When You request a page you get the response , we get two things basically CSS & JS . Whenever We say CSS it means it is render blocking and JS is parser blocking . Unless your CSS is loaded the browser will not render the page and unless your JS is loaded the browser will not parse the page . So it is important to load CSS first and then JS . It means that the browser will not render the page until the CSS is loaded and will not parse the page until the JS is loaded. 

Once the CSS and JS are loaded, the DOM (Document Object Model) is constructed, which represents the structure of the webpage. The browser then applies styles from the CSS to the DOM elements and executes any JavaScript code that manipulates the DOM.