# WEDE5020 - Part 2: CSS Styling & Responsive Web Design

**Student Name:** Rivoningo Floyd Ntsonani  
**Student Number:** ST10510800  
**Module Code:** WEDE5020  
**Project Title:** Big Ben Spaza Shop & Personal Profile Page  

---

## 1. Project Overview & Repository Access

This repository contains the complete responsive web application for **Big Ben Spaza Shop** alongside a personal developer portfolio. Part 2 introduces modular external CSS styling, flexible box and grid layout architectures, interactive pseudo-class states, and custom media queries for complete cross-device responsiveness.

* **GitHub Repository:** `https://github.com/ST10510800/Big-Ben-spaza-shop`

---

## 2. Feedback from Part 1 & Detailed Changelog

In response to Part 1 evaluation feedback regarding sitemap clarity, documentation depth, and structural organization, the following comprehensive changes were implemented across the code base and repository:

### Detailed Changelog Entries

| Description of Change / Fix Implemented |
| **Documentation** | Re-structured the primary README.md to explicitly outline all site pages, directory paths, and technical choices. |
| **Architecture** | Created a visual Draw.io sitemap diagram and placed it prominently within the project architecture documentation to clarify navigation flow. |
| **HTML5 Semantics** | Updated all `.html` files (`index`, `about`, `services`, `enquiry`, `contact`) with strict HTML5 semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). |
| **Forms & Validation** | Enhanced `enquiry.html` form control attributes with regex patterns (`pattern="[0-9]{10}"`), `<label for>` pairings, and `aria-describedby` helper texts. |
| **CSS Integration** | Built a single external stylesheet `styles.css` in `code/css/` and linked it across all HTML pages using step-up relative paths (`../css/styles.css`). |
| **Responsive Design** | Added fluid CSS media queries (`@media (max-width: 768px)` and `@media (max-width: 480px)`) to adapt layouts, fonts, and navigation menus across desktop, tablet, and mobile displays. |

---

## 3. References

1. Chacon, S., & Straub, B. (2014). *Pro Git* (2nd ed.). Apress.
2. Google. (2026). *Gemini AI: Conversational AI Model for Code Formatting, Technical Debugging, and Web Architecture Guidance*. Google AI. https://gemini.google.com/
3. JGraph. (2026). *Draw.io (Diagrams.net) User Documentation and Visual Architecture Design Guidelines*. JGraph Ltd. https://www.draw.io/
4. MDN Web Docs. (2026). *CSS Building Blocks*. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks
5. MDN Web Docs. (2026). *HTML Forms and Data Validation*. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Learn/Forms
6. W3C. (2021). *HTML5 Specification*. World Wide Web Consortium. https://www.w3.org/TR/html52/
7. W3C. (2023). *Web Content Accessibility Guidelines (WCAG) 2.2*. World Wide Web Consortium. https://www.w3.org/TR/WCAG22/