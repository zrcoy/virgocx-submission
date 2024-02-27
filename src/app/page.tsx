import data from '../Data/mock'
import EditableCard from '../components/editableCard/EditableCard'

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-whiteBg">
      <EditableCard
        isProficient={data.isProficient}
        toolsUsed={data.toolsUsed}
      />
    </main>
  )
}
