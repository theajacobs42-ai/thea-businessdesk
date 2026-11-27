const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
}));
const form = document.querySelector("#enquiry-form");
const status = document.querySelector("#form-status");
form?.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  if (!name || !email || !message) {
    status.textContent = "Please complete your name, email address and enquiry.";
    return;
  }
  const subject = encodeURIComponent("Thea BusinessDesk access enquiry");
  const body = encodeURIComponent(
    `Full Name: ${name}\nBusiness Name: ${data.get("business") || ""}\nEmail Address: ${email}\nIndustry: ${data.get("industry") || ""}\n\nEnquiry:\n${message}`
  );
  status.textContent = "Your email app should open with the enquiry prepared. Please press Send in your email app to deliver it.";
  window.location.href = `mailto:theajacobs42@gmail.com?subject=${subject}&body=${body}`;
});
