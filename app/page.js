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
          <p>
            <b>Dauerhaft setzen ohne Link</b> <br />
            Alternativ könnt ihr auch einen Cookie setzten, der den Dark-Mode
            dauerhaft aktiviert. (Bis ihr den Cookie löscht.)
          </p>
          <p>
            Dazu einfach auf blog.fefe.de gehen, die Development-Console öffnen
            (Rechte Maustaste - Inspect) und folgenden code ausführen:
            <pre>
              {`function setCookie(name, value, days) {  
  let expires = "";  
  if (days) {  
    const date = new Date();  
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  
    expires = "; expires=" + date.toUTCString();  
  }  
  document.cookie = name + "=" + (value || "") + expires + "; path=/";  
}  
  
setCookie("css", "https://fefe-darkmode.vercel.app/darkmode.css", 365);`}
            </pre>
          </p>
        </li>
        <li>
          <p>
            <b>Deaktivieren</b> <br />
            Cookie löschen oder mit diesem Link{" "}
            <a href="http://blog.fefe.de/?css=">auf leer setzten.</a>
          </p>
        </li>
        <li>
          <b>Info / Code:</b> <a href="/darkmode.css">Raw css</a>
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
        <li>
          <p>
            <a href="https://github.com/nivoc/darkmode-for-blog-fefe-de">
              GitHub
            </a>
          </p>
        </li>
      </ul>
    </main>
  );
}
