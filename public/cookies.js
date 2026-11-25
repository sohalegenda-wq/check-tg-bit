const banner = document.querySelector("[data-cookie-banner]");
const settings = document.querySelector("[data-cookie-settings]");
const bannerTitle = document.querySelector("#cookie-title");
const cookieName = "kim_cookie_consent";
const cookieScope = "Path=/; SameSite=Lax";
const secure = location.protocol === "https:" ? "; Secure" : "";
const sixMonths = 60 * 60 * 24 * 180;
let openedFromSettings = false;

function hasSavedChoice() {
  try {
    return document.cookie.split(/;\s*/).includes(cookieName + "=accepted")
      || sessionStorage.getItem(cookieName) === "declined";
  } catch {
    return false;
  }
}

function saveChoice(choice) {
  try {
    if (choice === "accepted") {
      document.cookie = cookieName + "=accepted; Max-Age=" + sixMonths + "; " + cookieScope + secure;
      sessionStorage.removeItem(cookieName);
      return;
    }

    document.cookie = cookieName + "=; Max-Age=0; " + cookieScope + secure;
    sessionStorage.setItem(cookieName, "declined");
  } catch {
    // The banner can still be dismissed when browser storage is blocked.
  }
}

function updateClearance() {
  const style = document.documentElement.style;
  if (banner.hidden) {
    style.removeProperty("--cookie-clearance");
    return;
  }

  style.setProperty("--cookie-clearance", banner.offsetHeight + 32 + "px");
}

banner.addEventListener("click", (event) => {
  const choice = event.target.closest("[data-cookie-choice]");
  if (!choice) return;

  saveChoice(choice.dataset.cookieChoice);
  banner.hidden = true;
  updateClearance();

  if (openedFromSettings) settings.focus();
  openedFromSettings = false;
});

settings.addEventListener("click", () => {
  openedFromSettings = true;
  banner.hidden = false;
  updateClearance();
  bannerTitle.focus();
});

settings.hidden = false;
banner.hidden = hasSavedChoice();
updateClearance();
new ResizeObserver(updateClearance).observe(banner);
