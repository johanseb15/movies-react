import { MoviesGrid } from "./moviesGrid";
import styles from "./app.module.css";

function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>MOVIES</h1>
      </header>
      <main>
        <MoviesGrid/>
      </main>
    </div>
  );
}

export default App;
