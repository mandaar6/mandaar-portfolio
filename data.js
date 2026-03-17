// ============================================================
//  data.js  —  THE ONLY FILE YOU EVER NEED TO EDIT
//
//  HOW TO UPDATE THE SITE:
//    1. Edit this file
//    2. Go to github.com → your repo → click data.js → pencil icon
//    3. Make your changes → Commit changes
//    Vercel auto-deploys in ~20 seconds. Done.
//
//  HOW TO UPDATE YOUR RESUME PDF:
//    1. Export your latest resume as exactly: resume.pdf
//    2. Go to your repo → Add file → Upload files → drop resume.pdf
//    3. Commit. The /resume.pdf link never needs to change.
// ============================================================

const P = {

  // ── Personal ───────────────────────────────────────────────
  name:      "Mandaar Rao",
  email:     "mandaar.rao1@gmail.com",
  linkedin:  "https://www.linkedin.com/in/mandaarrao/",
  github:    "https://github.com/mandaar6/",
  resumeUrl: "/resume.pdf",

  // ── Experience ─────────────────────────────────────────────
  // To add a new job: copy the TEMPLATE block, paste above the ],
  // fill in the fields, and commit.
  experience: [
    {
      co:     "Tata Elxsi Limited",
      role:   "Cyber Security Engineer",
      dates:  "Feb 2025 – Sep 2025",
      tag:    null,
      bullets: [
        "Applied STRIDE and TARA threat modeling across cloud, web, and mobile platforms for a smart mobility ecosystem, documenting 3,000+ attack paths across northbound, southbound, and east/west interfaces.",
        "Developed a Cyber Resilience Act (CRA) compliance checklist adopted by 3 internal product teams and EU clients, streamlining CE certification readiness.",
        "Identified and remediated critical injection, broken authentication, and API security vulnerabilities during VAPT of web and GenAI applications.",
        "Delivered VAPT and threat modeling workshops to 500+ incoming graduate engineers across multiple hiring batches.",
      ]
    },
    {
      co:     "SecureThings.ai Pvt. Ltd.",
      role:   "Associate Security Engineer",
      dates:  "Jul 2023 – Oct 2024",
      tag:    null,
      bullets: [
        "Conducted full-scope web application penetration testing on an automotive cybersecurity SaaS platform in AWS, uncovering critical OWASP Top 10 vulnerabilities (SQLi, IDOR, broken authentication).",
        "Built Android pen-test environment using Frida and Burp Suite; bypassed SSL pinning and root detection, surfacing data exposure risks before production release.",
        "Developed a dark web OSINT scraper monitoring 20+ threat actor forums, accelerating exploit detection by 70%.",
        "Built Automotive CVE catalog mapping 200+ CVEs to MITRE ATT&CK and CVSS, reducing mean-time-to-triage.",
        "Engineered FastAPI-based Splunk-MongoDB SOC pipeline enabling real-time log ingestion from 50+ vehicle endpoints.",
      ]
    },
    {
      co:     "SecureThings.ai Pvt. Ltd.",
      role:   "Cyber Security Intern",
      dates:  "Feb 2023 – Jun 2023",
      tag:    "INTERNSHIP",
      bullets: [
        "Developed a web application reconnaissance framework for automated discovery of subdomains, open ports, and technology stacks across web-based targets — the foundational research that later evolved into Recon-Guru.",
        "Conducted initial vulnerability surface mapping and documented attack vectors across client-facing web applications, feeding directly into the team's penetration testing methodology.",
        "Gained hands-on exposure to offensive security tooling and OSINT workflows, establishing the technical foundation for subsequent full-time security engineering work.",
      ]
    },
    {
      co:     "AmbiTech Healthcare",
      role:   "Mobile Application Developer Intern",
      dates:  "Sep 2021 – Mar 2022",
      tag:    "INTERNSHIP",
      bullets: [
        "Contributed to the development of an Android application for a smart glucometer device using Flutter, implementing Bluetooth-based data ingestion from the medical hardware and real-time glucose trend visualization.",
        "Worked within a cross-functional team to bridge hardware sensor output with a mobile UI, gaining early exposure to embedded device communication and secure data handling in a healthcare context.",
      ]
    },
    // ── TEMPLATE ─────────────────────────────────────────────
    // {
    //   co:     "Company Name",
    //   role:   "Your Title",
    //   dates:  "Mon YYYY – Mon YYYY",
    //   tag:    null,            // or "INTERNSHIP" to show the amber badge
    //   bullets: [
    //     "What you did and the impact.",
    //     "Another bullet with a metric.",
    //   ]
    // },
  ],

  // ── Projects ───────────────────────────────────────────────
  // To add a project: copy the TEMPLATE, paste above the ],
  // fill in the fields, and commit. Tag filters update automatically.
  projects: [
    {
      title: "Recon-Guru",
      sub:   "Automated Attack Surface Recon Framework",
      desc:  "Modular Python recon framework chaining 8 OSINT sources, async subdomain probing, tech fingerprinting, masscan+Nmap full-port scanning, CVE/ExploitDB lookup, and Shodan enrichment. Self-contained HTML reports with Docker support.",
      tags:  ["Python", "OSINT", "Docker", "Red Team", "Recon"],
      gh:    "https://github.com/mandaar6/recon-guru",
      yr:    "2023–2025",
    },
    {
      title: "Zero Trust Adaptive Security Gateway",
      sub:   "ML-Driven IoT Network Security",
      desc:  "Random Forest classifier on IEEE IoT Network Intrusion Dataset generating per-flow threat/trust scores. Auto-derives Zero Trust policies and translates them into deployable Snort IDS rules for anomaly detection.",
      tags:  ["Python", "Machine Learning", "Zero Trust", "IoT", "IDS"],
      gh:    "https://github.com/mandaar6/Zero-Trust-Adaptive-Security-Gateway",
      yr:    "2024",
    },
    {
      title: "Finmo",
      sub:   "File Integrity Monitor",
      desc:  "Cross-platform Python FIM tool using SHA-256 hashing and SQLite baselines. Real-time detection via watchdog with Telegram/Gmail alerting and YAML config — deployable as a lightweight host-based detection layer.",
      tags:  ["Python", "Blue Team", "Defense", "Monitoring"],
      gh:    "https://github.com/mandaar6/finmo",
      yr:    "2025",
    },
    // ── TEMPLATE ─────────────────────────────────────────────
    // {
    //   title: "Project Name",
    //   sub:   "One-line descriptor",
    //   desc:  "What it does, how it works, what it demonstrates.",
    //   tags:  ["Tag1", "Tag2"],
    //   gh:    "https://github.com/mandaar6/repo-name",
    //   yr:    "2026",
    // },
  ],

  // ── Skills ─────────────────────────────────────────────────
  // To add a skill: append a string to the relevant items array.
  // To add a new category: add a new { cat, items } object.
  skills: [
    {
      cat: "Security",
      items: [
        "Penetration Testing (Web, API, Android)", "Threat Modeling (STRIDE/TARA)",
        "VAPT", "Red Team TTPs", "Application Security", "Cloud Security (AWS)",
        "Zero Trust Architecture", "IDS/IPS", "SIEM Operations", "Incident Response",
        "Secure SDLC", "Vulnerability Management", "Threat Intelligence", "Cryptography",
        "IoT Security Testing", "Firmware Analysis", "Binary Static Analysis",
      ]
    },
    {
      cat: "Programming & Scripting",
      items: ["Python", "Bash", "SQL", "Java", "C++"]
    },
    {
      cat: "Tools",
      items: [
        "Burp Suite", "Metasploit", "Nmap", "Wireshark", "Frida", "Ghidra",
        "Splunk", "Hashcat", "Nessus", "Elastic SIEM", "Sysmon", "MongoDB",
        "FastAPI", "Git", "AWS", "Docker", "Firmwalker", "ZAProxy", "Arachni",
      ]
    },
    {
      cat: "Frameworks & Standards",
      items: [
        "MITRE ATT&CK", "OWASP Top 10", "CVSS", "NIST NVD",
        "ISO/SAE 21434", "EU Cyber Resilience Act (CRA)",
      ]
    },
  ],

  // ── Certifications ─────────────────────────────────────────
  // status: "active" | "prog"
  // link: credential URL, or null if not yet earned
  certs: [
    {
      name:   "CompTIA Security+",
      issuer: "CompTIA",
      status: "active",
      link:   "https://www.credly.com/badges/30799334-de82-4873-a38f-b8c5263ca6bc/public_url",
    },
    {
      name:   "CompTIA CySA+",
      issuer: "CompTIA",
      status: "prog",
      link:   null,   // add Credly link once earned
    },
    {
      name:   "Google Cybersecurity Certificate",
      issuer: "Google",
      status: "active",
      link:   "https://www.credly.com/badges/e1b64122-00a1-4daa-a195-d417dee7367c/linked_in_profile",
    },
    {
      name:   "ISO/IEC 27001:2022 Information Security Associate",
      issuer: "SkillFront",
      status: "active",
      link:   "https://www.skillfront.com/Badges/88304827523816",
    },
    // ── TEMPLATE ─────────────────────────────────────────────
    // {
    //   name:   "Cert Name",
    //   issuer: "Issuing Body",
    //   status: "active",
    //   link:   "https://credly.com/...",
    // },
  ],

  // ── Education ──────────────────────────────────────────────
  edu: [
    {
      school: "University of Washington, Bothell",
      deg:    "M.S. Cyber Security Engineering",
      dates:  "Sep 2025 – May 2027",
      gpa:    "3.85/4.0",
      cw:     "Cryptography, Information Assurance, Network & System Security, Malware Analysis & Reverse Engineering",
    },
    {
      school: "Savitribai Phule Pune University",
      deg:    "B.E. Information Technology",
      dates:  "Aug 2019 – Apr 2023",
      gpa:    "8.27/10",
      cw:     "Computer Networks & Security, Operating Systems, AI/ML, Distributed Systems",
    },
  ],

  // ── Publications ───────────────────────────────────────────
  // featured: true  → blue highlighted card (use for your strongest venue)
  // featured: false → standard card
  pub: [
    {
      venue:    "IEEE Xplore",
      title:    "A Review of the OWASP Top 10 Web Application Security Risks and Best Practices for Mitigating These Risks",
      desc:     "Analyzed real-world breaches (Target, Equifax) using OWASP Top 10 to evaluate security shortcomings and proposed practical mitigation strategies.",
      link:     "https://ieeexplore.ieee.org/document/10392030",
      featured: true,
    },
    {
      venue:    "IJRASET",
      title:    "Harbinger: A Toolkit for Vulnerability Testing of IoT Devices and Web Clients",
      desc:     "Developed a dual-module Python toolkit for web application vulnerability scanning (SQLi, XSS, LFI, Log4Shell, CSRF, NoSQLi) and IoT firmware analysis via static binary extraction — outperforming Arachni and Skipfish with a 10% FPR.",
      link:     "https://www.ijraset.com/research-paper/harbinger-a-toolkit-for-vulnerability-testing-of-iot-devices",
      featured: false,
    },
    // ── TEMPLATE ─────────────────────────────────────────────
    // {
    //   venue:    "Journal / Conference",
    //   title:    "Full paper title",
    //   desc:     "One or two sentences about what it covers.",
    //   link:     "https://...",
    //   featured: false,
    // },
  ],

};
