/**
 * ==========================================================================
 * អរុណរះ កាហ្វេ · Arunreah Coffee
 * Main JavaScript (js/main.js)
 * High-Performance Boutique Cafe Engine
 * ==========================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Data: Categories & Comprehensive Menu (40+ Items)
     -------------------------------------------------------------------------- */
  const CATEGORIES = [
    ["all", "ទាំងអស់ (All)"],
    ["coffee", "កាហ្វេ (Coffee)"],
    ["signature", "ភេសជ្ជៈពិសេស (Signature)"],
    ["tea", "តែ និងម៉ាចឆា (Tea & Matcha)"],
    ["smoothie", "ស្មូធី និងទឹកផ្លែឈើ (Smoothies)"],
    ["bake", "នំដុត និងបង្អែម (Bakery)"],
    ["food", "អាហារសម្រន់ (Brunch & Food)"]
  ];

  const MENU = [
    // --- 1. COFFEE ---
    { c: "coffee", n: "អាមេរីកាណូ", en: "Americano", d: "កាហ្វេខ្មៅ ក្តៅ ឬត្រជាក់ រសជាតិដិតក្រអូបជាប់ចិត្ត", p: 2.00 },
    { c: "coffee", n: "ឡាតេ", en: "Caffè Latte", d: "អេស្ព្រេសូ និងទឹកដោះគោក្តៅ មានពពុះម៉ត់រលោង", p: 2.75 },
    { c: "coffee", n: "កាពូជីណូ", en: "Cappuccino", d: "ពពុះទឹកដោះគោក្រាស់ ទន់ល្មើយ ឈ្ងុយឆ្ងាញ់", p: 2.75 },
    { c: "coffee", n: "អេស្ព្រេសូ ២ បាញ់", en: "Double Espresso", d: "ពីរបាច់ (Double Shot) ខ្លាំង ដិត និងក្រអូបឈ្ងុយ", p: 1.75 },
    { c: "coffee", n: "ម៉ូកា", en: "Caffè Mocha", d: "អេស្ព្រេសូផ្សំជាមួយសូកូឡាខ្មៅដិត និងទឹកដោះគោ", p: 3.00 },
    { c: "coffee", n: "ហ្វ្លេតវ៉ាយ", en: "Flat White", d: "ទឹកដោះគោស្តើងម៉ត់រលោង ជាមួយអេស្ព្រេសូកម្រិតពីរជាន់", p: 2.85 },
    { c: "coffee", n: "ការ៉ាមែល ម៉ាគីអាតូ", en: "Caramel Macchiato", d: "ស្រទាប់វ៉ានីឡា ទឹកដោះគោស្រស់ និងទឹកស៊ីរ៉ូការ៉ាមែល", p: 3.25 },
    { c: "coffee", n: "កាហ្វេទឹកដោះគោទឹកកកខ្មែរ", en: "Traditional Khmer Iced Milk Coffee", d: "កាហ្វេអាំងបុរាណ ទឹកដោះគោខាប់ផ្អែមឈ្ងុយដិតបែបខ្មែរពិតៗ", p: 2.25 },
    { c: "coffee", n: "កាហ្វេត្រជាក់ Cold Brew", en: "Arunreah Cold Brew", d: "ត្រាំគ្រាប់កាហ្វេ ១៨ ម៉ោង រសជាតិស្រទន់ ស្រស់ស្រាយមិនជូរ", p: 3.00 },
    { c: "coffee", n: "វ៉ានីឡា ឡាតេ", en: "Vanilla Latte", d: "ស៊ីរ៉ូវ៉ានីឡាធម្មជាតិ ជាមួយទឹកដោះគោស្រស់ និងអេស្ព្រេសូ", p: 3.00 },
    { c: "coffee", n: "កាហ្វេគ្រីមអំបិល", en: "Salted Cream Coffee", d: "កាហ្វេត្រជាក់ស្រោបដោយពពុះគ្រីមអំបិលរសជាតិប្លែកឆ្ងាញ់", p: 3.25 },

    // --- 2. SIGNATURE & SPECIALTIES ---
    { c: "signature", n: "កាហ្វេទឹកដោះគោគ្រឿងទេស", en: "Spiced Milk Coffee", d: "កាហ្វេត្រជាក់ ទឹកដោះគោខាប់ និងស្លឹកគ្រៃក្រអូបប្រចាំហាង", p: 3.00 },
    { c: "signature", n: "កាហ្វេទឹកដូងស្រស់", en: "Coconut Espresso", d: "អេស្ព្រេសូលើទឹកដូងស្រស់សៀមរាប រសជាតិស្រទន់ ស្រស់ស្រាយ", p: 3.25 },
    { c: "signature", n: "កាហ្វេស្ករត្នោតធម្មជាតិ", en: "Palm Sugar Latte", d: "ស្ករត្នោតធម្មជាតិកំពង់ស្ពឺ ឈ្ងុយពិសេសជាមួយទឹកដោះគោក្តៅ", p: 3.00 },
    { c: "signature", n: "អេស្ព្រេសូទឹកក្រូចស្រស់", en: "Orange Espresso Tonic", d: "ទឹកក្រូចស្រស់គៀបលាយជាមួយទឹក Tonic និងអេស្ព្រេសូ", p: 3.25 },
    { c: "signature", n: "ហូជីឆា ឡាតេ", en: "Hojicha Roasted Latte", d: "តែបៃតងអាំងជប៉ុន ក្លិនឈ្ងុយបែប Smoky ជាមួយទឹកដោះគោ", p: 3.25 },
    { c: "signature", n: "កាហ្វេទឹកឃ្មុំព្រៃក្រូចឆ្មារ", en: "Honey Lemon Cold Brew", d: "កាហ្វេត្រជាក់ផ្សំជាមួយទឹកឃ្មុំព្រៃ និងក្រូចឆ្មារស្រស់", p: 3.25 },

    // --- 3. TEA & MATCHA ---
    { c: "tea", n: "អ៊ូជី ម៉ាចឆា ឡាតេ", en: "Uji Matcha Latte", d: "ម្សៅម៉ាចឆាសុទ្ធនាំចូលពីជប៉ុន រសជាតិដិតក្រអូបឈ្ងុយ", p: 3.25 },
    { c: "tea", n: "តែបៃតងម្លិះ", en: "Jasmine Green Tea", d: "តែក្តៅ ក្លិនផ្កាម្លិះស្រស់ពីធម្មជាតិ ជួយសម្រួលអារម្មណ៍", p: 2.00 },
    { c: "tea", n: "តែក្រូចឆ្មារទឹកឃ្មុំព្រៃ", en: "Honey Lemon Black Tea", d: "តែត្រជាក់ ជូរអែមជាមួយទឹកឃ្មុំព្រៃធម្មជាតិ", p: 2.50 },
    { c: "tea", n: "តែទឹកដោះគោថៃ", en: "Thai Milk Tea", d: "តែទឹកដោះគោពណ៌ទឹកក្រូច ក្លិនឈ្ងុយផ្អែមស្រាល", p: 2.50 },
    { c: "tea", n: "តែផ្កាកុលាប និងជីអង្កាម", en: "Rose Mint Tea", d: "តែផ្កាកុលាបធម្មជាតិ ជួយឱ្យគេងលក់ស្រួល និងស្រស់ស្រាយ", p: 2.50 },
    { c: "tea", n: "តែផ្លែប៉ែស និងក្រូចពោធិ៍សាត់", en: "Peach Citrus Tea", d: "ផ្លែប៉ែសស្រស់ ជូរអែមត្រជាក់ចិត្តសម្រាប់ថ្ងៃក្តៅ", p: 2.75 },
    { c: "tea", n: "តែអ៊ូឡុងទឹកដោះគោ", en: "Oolong Milk Tea", d: "តែអ៊ូឡុងគុណភាពខ្ពស់ រសជាតិស្រទន់និងផ្អែមស្រាល", p: 2.75 },

    // --- 4. SMOOTHIES & JUICES ---
    { c: "smoothie", n: "ស្មូធីស្វាយទុំ", en: "Fresh Mango Smoothie", d: "ស្វាយកែវរមៀតទុំធម្មជាតិ ទឹកដោះគោ និងទឹកកក ផ្អែមត្រជាក់", p: 3.50 },
    { c: "smoothie", n: "ស្មូធីផ្លែបឺរមណ្ឌលគិរី", en: "Mondulkiri Avocado Smoothie", d: "ផ្លែបឺរស្រស់សាច់ក្រាស់ ក្រអូបឈ្ងុយ រសជាតិដិតស្រាល", p: 3.50 },
    { c: "smoothie", n: "ស្មូធីផ្លែបឺរ និងចេក", en: "Avocado Banana Boost", d: "ផ្លែបឺរ ចេកណាំវ៉ា និងទឹកដោះគោ ថាមពលពេញលេញពេលព្រឹក", p: 3.75 },
    { c: "smoothie", n: "ស្មូធីផ្លែស្រកានាគ និងប៊ឺរី", en: "Dragon Berry Smoothie", d: "ស្រកានាគក្រហម និងស្ត្រប៊ឺរី ពណ៌ស្រស់ វីតាមីន C ខ្ពស់", p: 3.50 },
    { c: "smoothie", n: "ទឹកផ្លែឈើស្រស់ចម្រុះ", en: "Immunity Booster Juice", d: "ផ្លែប៉ោម ការ៉ុត និងខ្ញីស្រស់គៀប ជំនួយសុខភាព", p: 3.25 },
    { c: "smoothie", n: "ទឹកក្រូចស្រស់គៀប ១០០%", en: "Cold-Pressed Orange Juice", d: "ទឹកក្រូចធម្មជាតិ ១០០% គ្មានបន្ថែមជាតិស្ករ", p: 2.75 },
    { c: "smoothie", n: "ទឹកឪឡឹកក្រឡុកស្រស់", en: "Fresh Watermelon Freeze", d: "ផ្លែឪឡឹកស្រស់ក្រឡុក ផ្អែមត្រជាក់ បំបាត់ការស្រេកទឹក", p: 2.50 },

    // --- 5. BAKERY & DESSERTS ---
    { c: "bake", n: "នំក្រូអាសុងប៊័រ", en: "Classic Butter Croissant", d: "នំប៉័ងប៊័រស្រួយស្រទាប់ អាំងថ្មីៗរាល់ព្រឹក", p: 2.25 },
    { c: "bake", n: "នំក្រូអាសុងសូកូឡា", en: "Pain au Chocolat", d: "ស្រទាប់ប៊័រស្រួយ ស្នូលសូកូឡាអឺរ៉ុបហូរឈ្ងុយឆ្ងាញ់", p: 2.75 },
    { c: "bake", n: "នំក្រូអាសុងអាល់ម៉ុន", en: "Almond Croissant", d: "ស្រោបដោយគ្រាប់អាល់ម៉ុន និងគ្រីមអាល់ម៉ុនផ្អែមល្មម", p: 3.00 },
    { c: "bake", n: "នំខេកចេកណាំវ៉ា", en: "Caramel Banana Cake", d: "ចេកណាំវ៉ាធម្មជាតិ ផ្អែមល្មម ទន់ និងឈ្ងុយឆ្ងាញ់", p: 2.50 },
    { c: "bake", n: "នំប្រោននីសូកូឡាដិត", en: "Fudge Chocolate Brownie", d: "សូកូឡាដិតខ្លាំង រសជាតិផ្អែមល្វីងល្មម ញ៉ាំជាមួយកាហ្វេក្តៅ", p: 2.50 },
    { c: "bake", n: "នំដូងខ្ទិះតាត", en: "Coconut Custard Tart", d: "នំបង្អែមខ្មែរបែបទំនើប រសជាតិខ្ទិះដូងឈ្ងុយឆ្ងាញ់", p: 2.00 },
    { c: "bake", n: "ប្លូប៊ឺរី ឈីសខេក", en: "Blueberry Basque Cheesecake", d: "ឈីសខេកទន់រលោង ស្រោបដោយផ្លែប្លូប៊ឺរីស្រស់", p: 3.50 },
    { c: "bake", n: "នំខូឃីសូកូឡាឈីប", en: "Chocolate Chip Cookie", d: "នំខូឃីស្រួយខាងក្រៅ ទន់ខាងក្នុង ឈ្ងុយប៊័រ", p: 1.75 },

    // --- 6. BRUNCH & FOOD ---
    { c: "food", n: "សាំងវិចអាំងសាច់មាន់", en: "Grilled Chicken Sandwich", d: "ស៊ុត ឈីស បន្លែស្រស់ និងសាច់ទ្រូងមាន់អាំងក្តៅៗ", p: 3.75 },
    { c: "food", n: "សាំងវិចផ្លែបឺរ និងស៊ុត", en: "Avocado Toast & Egg", d: "នំប៉័ង Sourdough អាំង ផ្លែបឺរម៉ត់ និងស៊ុតចៀនពាក់កណ្តាល", p: 3.50 },
    { c: "food", n: "នំប៉័ងប៉ាតេពិសេសអរុណរះ", en: "Signature Khmer Baguette", d: "ប៉ាតេធ្វើដោយដៃ សាច់ក្រក ជ្រក់ល្ហុង និងត្រសក់ស្រស់", p: 2.50 },
    { c: "food", n: "ចានយ៉ាអួរផ្លែឈើ និងគ្រាប់ធញ្ញជាតិ", en: "Granola Fruit Yogurt Bowl", d: "យ៉ាអួរធម្មជាតិ ផ្លែឈើស្រស់ គ្រាប់ធញ្ញជាតិ និងទឹកឃ្មុំព្រៃ", p: 3.25 }
  ];

  const PAGES = ["home", "menu", "offers", "about", "reviews", "contact", "book"];
  let currentCategory = "all";

  /* --------------------------------------------------------------------------
     Helper: Escape HTML Entities (Security)
     -------------------------------------------------------------------------- */
  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* --------------------------------------------------------------------------
     2. Theme Management (Light / Dark Mode)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  function initTheme() {
    try {
      const savedTheme = localStorage.getItem("arunreah-theme");
      if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
        updateThemeIcon(savedTheme);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        updateThemeIcon(prefersDark ? "dark" : "light");
      }
    } catch (e) {
      console.warn("Theme init storage warning:", e);
    }
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    themeToggleBtn.setAttribute("aria-label", theme === "dark" ? "ប្តូរទៅពន្លឺថ្ងៃ" : "ប្តូរទៅពេលយប់");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = root.getAttribute("data-theme");
      const isDark = currentTheme === "dark" || (!currentTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
      const nextTheme = isDark ? "light" : "dark";
      root.setAttribute("data-theme", nextTheme);
      try {
        localStorage.setItem("arunreah-theme", nextTheme);
      } catch (e) {}
      updateThemeIcon(nextTheme);
    });
  }

  /* --------------------------------------------------------------------------
     3. Menu Rendering & Filtering
     -------------------------------------------------------------------------- */
  const tabsContainer = document.getElementById("tabs");
  const itemsContainer = document.getElementById("items");

  function renderMenu() {
    if (!tabsContainer || !itemsContainer) return;

    // Render filter buttons
    tabsContainer.innerHTML = "";
    CATEGORIES.forEach(([catKey, catLabel]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = catLabel;
      btn.setAttribute("aria-pressed", String(currentCategory === catKey));
      btn.addEventListener("click", () => {
        currentCategory = catKey;
        renderMenu();
      });
      tabsContainer.appendChild(btn);
    });

    // Render menu items
    const filteredItems = MENU.filter(item => currentCategory === "all" || item.c === currentCategory);
    itemsContainer.innerHTML = filteredItems.map(item => `
      <div class="item">
        <div>
          <b>${escapeHTML(item.n)} <span style="font-size:12px;font-weight:500;opacity:0.65;font-family:var(--font-khmer);">(${escapeHTML(item.en)})</span></b>
          <small>${escapeHTML(item.d)}</small>
        </div>
        <span class="dots"></span>
        <span class="price">$${item.p.toFixed(2)}</span>
      </div>
    `).join("");
  }

  /* --------------------------------------------------------------------------
     4. Single-Page Navigation & Routing
     -------------------------------------------------------------------------- */
  function route() {
    let hash = (location.hash || "").replace("#", "").trim();
    if (!PAGES.includes(hash)) {
      hash = "home";
    }

    // Switch visible page
    PAGES.forEach(pageId => {
      const pageEl = document.getElementById(pageId);
      if (pageEl) {
        pageEl.classList.toggle("on", pageId === hash);
      }
    });

    // Update navigation active state for desktop nav, drawer nav, and bottom app bar!
    document.querySelectorAll("nav a, .bottom-tab, .drawer-link").forEach(link => {
      if (link.dataset.p === hash) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* --------------------------------------------------------------------------
     5. Mobile Drawer Menu Controller (Slide-Over)
     -------------------------------------------------------------------------- */
  function initMobileDrawer() {
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");
    const drawerClose = document.getElementById("drawerClose");
    const drawerBackdrop = document.getElementById("drawerBackdrop");
    const drawerLinks = document.querySelectorAll(".drawer-link, .drawer-book-btn");

    if (!mobileDrawer) return;

    function openDrawer() {
      mobileDrawer.classList.add("open");
      mobileDrawer.setAttribute("aria-hidden", "false");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden"; // Prevent scrolling behind drawer
    }

    function closeDrawer() {
      mobileDrawer.classList.remove("open");
      mobileDrawer.setAttribute("aria-hidden", "true");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        if (mobileDrawer.classList.contains("open")) {
          closeDrawer();
        } else {
          openDrawer();
        }
      });
    }

    if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener("click", () => {
        closeDrawer();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. Table Booking Message Generator
     -------------------------------------------------------------------------- */
  const bookBtn = document.getElementById("bb");
  const bookOutput = document.getElementById("bo");

  if (bookBtn && bookOutput) {
    // Set default date to today
    const dateInput = document.getElementById("bd");
    if (dateInput && !dateInput.value) {
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
    }

    bookBtn.addEventListener("click", () => {
      const getValue = id => (document.getElementById(id) ? document.getElementById(id).value.trim() : "");
      
      const name = getValue("bn") || "-";
      const date = getValue("bd") || "-";
      const time = getValue("bt") || "09:00";
      const guests = getValue("bg") || "2";
      const note = getValue("bm");

      const rawMessage = 
        `☕ សួស្តី អរុណរះ កាហ្វេ! ខ្ញុំបាទ/នាងខ្ញុំចង់កក់តុមួយកន្លែង៖\n` +
        `👤 ឈ្មោះ: ${name}\n` +
        `📅 កាលបរិច្ឆេទ: ${date}\n` +
        `⏰ ម៉ោង: ${time}\n` +
        `👥 ចំនួនភ្ញៀវ: ${guests} នាក់` +
        (note ? `\n📝 កំណត់ចំណាំ: ${note}` : "");

      const displayMessage = escapeHTML(rawMessage).replace(/\n/g, "<br>");

      bookOutput.innerHTML = `
        <div style="font-weight:600;margin-bottom:8px;color:var(--amber);">✅ សារកក់តុបានបង្កើតជោគជ័យ៖</div>
        <div>${displayMessage}</div>
        <div style="margin-top:16px;padding-top:12px;border-top:1px dashed var(--line);font-size:14px;color:var(--muted);">
          📋 សារនេះត្រូវបានចម្លង (Copied) រួចរាល់។ អ្នកអាចផ្ញើផ្ទាល់តាម៖
        </div>
        <div style="margin-top:10px;display:flex;gap:10px;flex-wrap:wrap;">
          <a class="btn" style="padding:8px 18px;font-size:14px;" href="https://t.me/arunreahcoffee" target="_blank" rel="noopener">ផ្ញើតាម Telegram</a>
          <a class="btn ghost" style="padding:8px 18px;font-size:14px;" href="tel:012345678">ទូរស័ព្ទ: ០១២ ៣៤៥ ៦៧៨</a>
        </div>
      `;

      // Copy text to clipboard safely
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(rawMessage).catch(() => {
          fallbackCopyText(rawMessage);
        });
      } else {
        fallbackCopyText(rawMessage);
      }
    });
  }

  function fallbackCopyText(text) {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    } catch (e) {
      console.warn("Clipboard fallback failed:", e);
    }
  }

  /* --------------------------------------------------------------------------
     7. Scroll Reveal Observer
     -------------------------------------------------------------------------- */
  document.documentElement.classList.add("js");

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".rv").forEach((el, index) => {
      el.style.transitionDelay = `${(index % 4) * 90}ms`;
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll(".rv").forEach(el => el.classList.add("in"));
  }

  /* --------------------------------------------------------------------------
     8. Interactive Floating Cup & Beans (Desktop Only)
     -------------------------------------------------------------------------- */
  function initFloatingElements() {
    // Only run floating 3D cup on screens wider than 768px (Desktop & large tablets)
    if (window.innerWidth <= 768) return;

    const heroCup = document.querySelector(".hero .cup");
    if (!heroCup) return;

    // Create floating cup container
    const floatingCup = document.createElement("div");
    floatingCup.id = "fcup";
    floatingCup.appendChild(heroCup.cloneNode(true));
    document.body.appendChild(floatingCup);

    let isTicking = false;
    const easeInOut = t => t * t * (3 - 2 * t);

    function updateFloatingPositions() {
      isTicking = false;
      if (window.innerWidth <= 768) return;

      const scrollY = window.scrollY || 0;
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      const homePage = document.getElementById("home");
      const isHome = homePage ? homePage.classList.contains("on") : true;

      const targetScale = 0.45;
      const targetX = winW - 90 + Math.sin(scrollY / 260) * 30;
      const targetY = winH * 0.74 + Math.cos(scrollY / 340) * 26;

      let startX = targetX;
      let startY = targetY;
      let startScale = 1;
      let progress = 1;

      if (isHome && heroCup) {
        const rect = heroCup.getBoundingClientRect();
        if (rect.width > 0) {
          startX = rect.left + rect.width / 2;
          startY = rect.top + rect.height / 2;
          startScale = rect.width / 260;
          progress = easeInOut(Math.min(1, scrollY / (winH * 0.55)));
        }
      }

      const currentX = startX + (targetX - startX) * progress;
      const currentY = startY + (targetY - startY) * progress;
      const currentScale = startScale + (targetScale - startScale) * progress;

      const rotX = Math.sin(scrollY / 180) * 16 * progress;
      const rotY = scrollY * 0.45;
      const rotZ = Math.sin(scrollY / 240) * 10 * progress;

      floatingCup.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${currentScale})`;
    }

    function requestTick() {
      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(updateFloatingPositions);
      }
    }

    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        floatingCup.style.display = "none";
      } else {
        floatingCup.style.display = "";
        requestTick();
      }
    });

    window.addEventListener("hashchange", () => {
      floatingCup.classList.add("fly");
      requestTick();
      setTimeout(() => floatingCup.classList.remove("fly"), 950);
    });

    updateFloatingPositions();
  }

  /* --------------------------------------------------------------------------
     9. Special Promotion Pop-up (5-Second Delay)
     -------------------------------------------------------------------------- */
  function initPromoPopup() {
    const promoModal = document.getElementById("promoModal");
    const promoClose = document.getElementById("promoClose");
    const promoBackdrop = document.getElementById("promoBackdrop");
    const promoViewOffers = document.getElementById("promoViewOffers");
    const promoBookNow = document.getElementById("promoBookNow");

    if (!promoModal) return;

    function openModal() {
      promoModal.classList.add("show");
      promoModal.setAttribute("aria-hidden", "false");
    }

    function closeModal() {
      promoModal.classList.remove("show");
      promoModal.setAttribute("aria-hidden", "true");
    }

    // Trigger Popup automatically after 5 seconds (5000ms)
    setTimeout(() => {
      openModal();
    }, 5000);

    // Event listeners to close popup
    if (promoClose) {
      promoClose.addEventListener("click", closeModal);
    }
    if (promoBackdrop) {
      promoBackdrop.addEventListener("click", closeModal);
    }
    if (promoViewOffers) {
      promoViewOffers.addEventListener("click", closeModal);
    }
    if (promoBookNow) {
      promoBookNow.addEventListener("click", closeModal);
    }

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && promoModal.classList.contains("show")) {
        closeModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. Initialization
     -------------------------------------------------------------------------- */
  initTheme();
  renderMenu();
  route();
  window.addEventListener("hashchange", route);
  initMobileDrawer();
  initFloatingElements();
  initPromoPopup();

})();
