import styles from "./page.module.css";
import data from "../Data/mock";
import EditableCard from "../components/editableCard/EditableCard";

export default function Page() {
  return (
    <main className={styles.main}>
      <EditableCard
        isProficient={data.isProficient}
        toolsUsed={data.toolsUsed}
      />
    </main>
  );
}
