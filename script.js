/*
AetherFlow

Copyright © 2026 Dan Racusin.
All Rights Reserved.

This file is part of AetherFlow and is proprietary software.
Unauthorized copying, modification, distribution, or use is prohibited except as permitted under the AetherFlow License Agreement.
*/

const header = document.querySelector("[data-header]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
