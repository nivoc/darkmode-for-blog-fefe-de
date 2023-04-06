import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Dark Mode @ blog.fefe.de </h1>
      <h3>HowTo:</h3>
      <ul>
        <li>
          Gute Nachrichten! Wisst ihr, was die gerade rausgefunden haben? Fefe's
          Blog hat einen Dark-Mode. Achtung: Funktioniert nur, wenn euer System
          auch im Dark-Mode ist, sonst ist es wie immer.
        </li>
        <li>
          <p>
            <b>Anwenden:</b> Link nutzen/bookmarken - that's it.
          </p>
          <p>
            <a href="http://blog.fefe.de/?css=https://fefe-darkmode.vercel.app/darkmode.css">
              http://blog.fefe.de/?css=https://fefe-darkmode.vercel.app/darkmode.css
            </a>
          </p>
        </li>
        <li>
          <b>Info / Code:</b> <a href="/darkmode.css">raw</a>
          <pre>
            {`@media (prefers-color-scheme: dark) {
  body {
    color: #e1e1e1;
    background: #000000;
  }
  a:link {
    color: #91a1ff;
  }
  a:visited {
    color: #627aff;
  }
}          `}
          </pre>
        </li>
        <li>
          <p>
            <b>Vorschau</b> Nacht / Tag
          </p>
          <Image
            src="/dark.png"
            alt="Fefe"
            style={{
              paddingTop: "1rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              background: "#000",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#000",
              borderRadius: "0.2rem",
            }}
            width={1128 / 2}
            height={1528 / 2}
          />
          <Image
            src="/light.png"
            alt="Fefe"
            style={{
              paddingTop: "1rem",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              background: "#FFF",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#000",
              borderRadius: "0.2rem",
            }}
            width={1128 / 2}
            height={1528 / 2}
          />
        </li>
      </ul>
    </main>
  );
}
