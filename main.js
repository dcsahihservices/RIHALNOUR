(() => {
  const C = window.CONFIG, D = window.I18N;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  let lang = "fr";
  try { lang = localStorage.getItem("rn_lang") || "fr"; } catch (e) {}
  if (!D[lang]) lang = "fr";
  const t = (k) => (D[lang] && D[lang][k]) || D.fr[k] || k;

  /* ---------- Icônes (SVG en ligne, trait) ---------- */
  const IC = {
    plane: '<path d="M10 14 21 3M21 3l-6.5 18-3.5-8-8-3.5z"/>',
    suitcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 12v3"/>',
    hotel: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"/>',
    palm: '<path d="M12 21V11"/><path d="M12 11C9 11 6 9 5 6c3 0 6 1 7 5zM12 11c3 0 6-2 7-5-3 0-6 1-7 5zM12 11c0-3-1-6-4-8 0 3 1 6 4 8zM12 11c0-3 1-6 4-8 0 3-1 6-4 8z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20c0 1.5-2 2-5 2"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    wa: '<path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/><path d="M9 9.5c.5 3 2.5 5 5.5 5.5l1.5-1.5-2-1-1 .8c-1-.4-1.8-1.2-2.2-2.2l.8-1-1-2z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>'
  };
  const icon = (n) => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${IC[n] || ""}</svg>`;

  /* ---------- Données ---------- */
  const SV = [["air", "plane"], ["grp", "suitcase"], ["hot", "hotel"], ["mar", "palm"], ["int", "globe"], ["ast", "headset"]];
  const DS = [["tr", "turkey"], ["fr", "france"], ["es", "spain"], ["ae", "dubai"], ["sa", "saudi"], ["ma", "morocco"]];
  const OF = [["of1", "turkey"], ["of2", "dubai"], ["of3", "spain"]];
  const GAL = ["turkey", "france", "spain", "dubai", "saudi", "morocco", "makkah", "madinah"];
  const NAV = [["index.html", "home"], ["services.html", "services"], ["omra.html", "omra"], ["destinations.html", "dest"], ["contact.html", "contact"]];

  /* ---------- Blocs réutilisables ---------- */
  const R = {
    svc: () => SV.map(([k, i]) => `<article class="svc"><span class="ico"><i data-icon="${i}"></i></span><h3 data-i18n="s_${k}_t"></h3><p data-i18n="s_${k}_d"></p></article>`).join(""),
    dest: () => DS.map(([k, c]) => `<article class="tile ph i-${c}"><div class="tile-b"><h3 data-i18n="d_${k}"></h3><p data-i18n="d_${k}_d"></p><a class="btn btn-sm btn-gold" data-wa-dest="d_${k}" data-i18n="cta_quote"></a></div></article>`).join(""),
    offers: () => OF.map(([k, c]) => `<article class="offer"><div class="offer-img ph i-${c}"><span class="tag" data-i18n="ex"></span></div><div class="offer-b"><h3 data-i18n="${k}_t"></h3><p data-i18n="of_inc"></p></div><div class="offer-p"><small data-i18n="price_from"></small><strong>0 000 MAD</strong><a class="btn btn-sm btn-wa" data-wa-offer="${k}_t" data-i18n="cta_quote"><i data-icon="wa"></i></a></div></article>`).join(""),
    omraShort: () => [1, 2, 3, 4].map((n) => `<li><i data-icon="check"></i><span data-i18n="om_l${n}"></span></li>`).join(""),
    omraFull: () => [1, 2, 3, 4].map((n) => `<li class="row"><span class="ico"><i data-icon="check"></i></span><div><h3 data-i18n="om_l${n}"></h3><p data-i18n="om_l${n}_d"></p></div></li>`).join(""),
    omraInfo: () => [1, 2, 3, 4].map((n) => `<li><i data-icon="check"></i><span data-i18n="om_i${n}"></span></li>`).join(""),
    why: () => [1, 2, 3, 4].map((n) => `<li><i data-icon="check"></i><div><h3 data-i18n="w${n}_t"></h3><p data-i18n="w${n}_d"></p></div></li>`).join(""),
    reviews: () => [1, 2, 3].map((n) => `<blockquote class="rev"><p data-i18n="rv${n}"></p><footer><span data-i18n="rv_n"></span><span class="tag" data-i18n="ex"></span></footer></blockquote>`).join(""),
    steps: () => [1, 2, 3].map((n) => `<li><h3 data-i18n="st${n}_t"></h3><p data-i18n="st${n}_d"></p></li>`).join(""),
    gallery: () => GAL.map((c) => `<button type="button" class="g-item ph i-${c}" data-cls="i-${c}" data-i18n-aria="gal_open"></button>`).join(""),
    cta: () => `<div class="wrap cta-in"><div><h2 data-i18n="cta_h"></h2><p data-i18n="cta_p"></p></div><a class="btn btn-wa" data-wa="generic" data-i18n="cta_wa"><i data-icon="wa"></i></a></div>`,
    cinfo: () => {
      const li = (ic, l, v) => `<li><span class="ico"><i data-icon="${ic}"></i></span><div><small data-i18n="${l}"></small>${v}</div></li>`;
      return li("pin", "ct_addr_l", `<p data-i18n="ct_addr"></p>`) +
        li("phone", "ct_phone_l", `<p><a href="tel:${C.phoneTel}">${C.phoneDisplay}</a></p>`) +
        li("wa", "ct_wa_l", `<p><a data-wa="generic" data-plain>${C.phoneDisplay}</a></p>`) +
        li("mail", "ct_mail_l", `<p><a href="mailto:${C.email}">${C.email}</a></p>`) +
        li("clock", "ct_hours_l", `<p data-i18n="ct_hours"></p>`);
    },
    map: () => {
      const link = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.mapsQuery)}`;
      const body = C.mapsEmbed
        ? `<iframe src="${C.mapsEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>`
        : `<div class="map-ph"><i data-icon="pin"></i><p data-i18n="map_ph"></p></div>`;
      return body + `<a class="btn btn-sm btn-ink" href="${link}" target="_blank" rel="noopener" data-i18n="map_open"></a>`;
    }
  };
  $$("[data-render]").forEach((el) => { el.innerHTML = R[el.dataset.render](); });

  /* ---------- En-tête et pied de page ---------- */
  const page = document.body.dataset.page;
  const links = NAV.map(([h, k]) => `<a href="${h}" data-i18n="nav_${k}"${k === page ? ' aria-current="page"' : ""}></a>`).join("");
  const hdr = $("#hdr");
  if (hdr) hdr.outerHTML = `<a class="skip" href="#main" data-i18n="skip"></a>
  <header class="hdr"><div class="wrap hdr-in">
    <a class="brand" href="index.html" aria-label="RIHAL NOUR">
      <span class="logo-slot"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="30" fill="#123C46"/><circle cx="32" cy="32" r="26" fill="none" stroke="#E7B85C" stroke-width="2"/><text x="32" y="41" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="26" fill="#E7B85C">RN</text></svg></span>
      <span class="brand-t"><b>RIHAL NOUR</b><i lang="ar">رحال نور</i></span>
    </a>
    <nav class="nav" id="nav">${links}</nav>
    <div class="hdr-act">
      <select id="lang" aria-label="Langue / Language / اللغة"><option value="fr">Français</option><option value="en">English</option><option value="ar">العربية</option></select>
      <button class="burger" id="burger" type="button" aria-expanded="false" aria-controls="nav" data-i18n-aria="nav_menu"><i data-icon="menu"></i></button>
    </div>
  </div></header>`;

  const ftr = $("#ftr");
  if (ftr) ftr.outerHTML = `<footer class="ftr dark"><div class="wrap ftr-g">
    <div><p class="ftr-brand">RIHAL NOUR <span lang="ar">رحال نور</span></p><p data-i18n="ft_p"></p><p class="slogan" data-i18n="slogan"></p></div>
    <div><h3 data-i18n="ft_nav"></h3><ul class="flinks">${NAV.map(([h, k]) => `<li><a href="${h}" data-i18n="nav_${k}"></a></li>`).join("")}</ul></div>
    <div><h3 data-i18n="ft_ct"></h3><ul class="flinks"><li><a href="tel:${C.phoneTel}">${C.phoneDisplay}</a></li><li><a href="mailto:${C.email}">${C.email}</a></li><li data-i18n="ct_addr"></li></ul>
      <h3 data-i18n="ft_soc"></h3><ul class="flinks soc"><li><a href="${C.social.facebook}" target="_blank" rel="noopener">Facebook</a></li><li><a href="${C.social.instagram}" target="_blank" rel="noopener">Instagram</a></li><li><a href="${C.social.tiktok}" target="_blank" rel="noopener">TikTok</a></li></ul></div>
  </div><p class="wrap copy" data-i18n="ft_rights"></p></footer>
  <a class="fab" data-wa="generic" data-plain aria-label="WhatsApp"><i data-icon="wa"></i></a>`;

  /* Logo officiel : s'il existe images/logo.png, il remplace l'emblème provisoire */
  const probe = new Image();
  probe.onload = () => { const s = $(".logo-slot"); if (s) { s.innerHTML = '<img src="images/logo.png" alt="RIHAL NOUR – رحال نور">'; $(".brand").classList.add("has-logo"); } };
  probe.src = "images/logo.png";

  /* ---------- Application des textes, icônes, liens ---------- */
  const setText = (el, v) => {
    const n = [...el.childNodes].find((x) => x.nodeType === 3);
    if (n) n.nodeValue = v; else el.append(v);
  };
  const waUrl = (msg) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;

  function apply() {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    $$("[data-icon]").forEach((el) => { if (!el.firstChild) el.innerHTML = icon(el.dataset.icon); });
    $$("[data-i18n]").forEach((el) => setText(el, t(el.dataset.i18n)));
    $$("[data-i18n-ph]").forEach((el) => el.setAttribute("placeholder", t(el.dataset.i18nPh)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    $$("[data-wa]").forEach((el) => { el.href = waUrl(t("wa_" + el.dataset.wa)); });
    $$("[data-wa-dest]").forEach((el) => { el.href = waUrl(t("wa_dest") + t(el.dataset.waDest)); });
    $$("[data-wa-offer]").forEach((el) => { el.href = waUrl(t("wa_offer") + t(el.dataset.waOffer)); });
    $$("[data-wa],[data-wa-dest],[data-wa-offer]").forEach((el) => { el.target = "_blank"; el.rel = "noopener"; });
    const sel = $("#lang"); if (sel) sel.value = lang;
    const key = document.body.dataset.title;
    document.title = (key ? t(key) + " | " : "") + "RIHAL NOUR – رحال نور";
  }

  /* ---------- Menu mobile et langue ---------- */
  const burger = $("#burger"), nav = $("#nav");
  if (burger) {
    burger.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });
  }
  const sel = $("#lang");
  if (sel) sel.addEventListener("change", () => {
    lang = sel.value;
    try { localStorage.setItem("rn_lang", lang); } catch (e) {}
    apply();
  });

  /* ---------- Galerie (lightbox) ---------- */
  if ($(".g-item")) {
    const dlg = document.createElement("dialog");
    dlg.className = "lb";
    dlg.innerHTML = `<button type="button" class="lb-x" data-i18n-aria="close"><i data-icon="x"></i></button><div class="lb-img ph"></div>`;
    document.body.append(dlg);
    $$(".g-item").forEach((b) => b.addEventListener("click", () => {
      $(".lb-img", dlg).className = "lb-img ph " + b.dataset.cls;
      dlg.showModal();
    }));
    dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.closest(".lb-x")) dlg.close(); });
  }

  /* ---------- Formulaire de contact (sans backend) ---------- */
  const f = $("#cform");
  if (f) {
    const rules = {
      name: (v) => v.trim().length > 1,
      phone: (v) => /^[+\d][\d\s().-]{6,}$/.test(v.trim()),
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      msg: (v) => v.trim().length > 4
    };
    const check = (needEmail) => {
      let ok = true;
      $$("[data-v]", f).forEach((el) => {
        const r = el.dataset.v, v = el.value.trim();
        const optional = r === "email" && !needEmail && !v;
        const good = optional || rules[r](v);
        const key = !v ? "f_err_req" : r === "phone" ? "f_err_phone" : r === "email" ? "f_err_email" : "f_err_req";
        el.setAttribute("aria-invalid", good ? "false" : "true");
        $(".err", el.parentElement).textContent = good ? "" : t(key);
        if (!good) ok = false;
      });
      if (!ok) { const bad = $("[aria-invalid=true]", f); if (bad) bad.focus(); }
      return ok;
    };
    const body = () => {
      const d = f.elements.dest;
      const dest = d.value ? d.options[d.selectedIndex].text : "";
      return [`${t("f_name")} : ${f.elements.name.value.trim()}`, `${t("f_phone")} : ${f.elements.phone.value.trim()}`,
        f.elements.email.value.trim() ? `${t("f_email")} : ${f.elements.email.value.trim()}` : "",
        dest ? `${t("f_dest")} : ${dest}` : "", "", f.elements.msg.value.trim()].filter((x, i) => x || i === 4).join("\n");
    };
    const done = () => { $("#fstatus").textContent = t("f_ok"); };
    $("#send-wa").addEventListener("click", () => { if (!check(false)) return; window.open(waUrl(body()), "_blank", "noopener"); done(); });
    $("#send-mail").addEventListener("click", () => {
      if (!check(true)) return;
      location.href = `mailto:${C.email}?subject=${encodeURIComponent("RIHAL NOUR – " + f.elements.name.value.trim())}&body=${encodeURIComponent(body())}`;
      done();
    });
    f.addEventListener("submit", (e) => e.preventDefault());
  }

  apply();
})();
