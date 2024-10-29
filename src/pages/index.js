import ArenaOverview from "../components/ArenaOverview";
import ExactArenaSeating from "../components/ExactArenaSeating";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl font-bold my-6">
        Arena Seating Interface
      </h1>
      <ArenaOverview />
      <ExactArenaSeating />
    </div>
  );
}
