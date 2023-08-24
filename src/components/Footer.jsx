import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <footer className="footer">
      <span className="footer-info">
        {t("footer.text")}
        <a
          href="https://github.com/th3alexdev"
          className="contact__build-info-link"
          target="_blank"
        >
          Alexander Pérez
        </a>
      </span>
    </footer>
  );
}