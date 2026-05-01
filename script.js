const emailButtons = document.querySelectorAll("[data-copy-email]");

emailButtons.forEach((button) => {
  const defaultText = button.textContent.trim();

  button.addEventListener("click", async () => {
    const email = button.dataset.copyEmail;

    try {
      await navigator.clipboard.writeText(email);
      button.textContent = "Email copied";
    } catch {
      button.textContent = email;
    }

    window.setTimeout(() => {
      button.textContent = defaultText;
    }, 2200);
  });
});
