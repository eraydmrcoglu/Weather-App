import { useContext } from "react";
import AppContext from "../provider/appContext";

function Footer() {
  const {
    app: { isDark },
  } = useContext(AppContext);
  const anchorStyle = {
    color: "#C6C6C6",
  };
  return (
    <>
      <footer className="footer">
        <a
          href="https://github.com/eraydmrcoglu/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-github"></i> <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/eraydemircioglu/"
          target="_blank"
          rel="noreferrer"
          style={isDark ? anchorStyle : null}
        >
          <i class="fa-brands fa-linkedin"></i> <span>Linkedin</span>
        </a>
      </footer>
    </>
  );
}

export default Footer;
