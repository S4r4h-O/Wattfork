import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="min-h-screen bg-purple-300 p-4 sm:p-6 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 leading-tight">
            Come for the story. Stay for the connection.
          </h1>
          <h3 className="text-base sm:text-lg lg:text-xl mb-6">
            Stories better than streaming and comments sections better than your
            group chat.
          </h3>
          <Button size="sm" className="sm:w-full rounded-4xl h-15">
            Get started
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="https://images.pexels.com/photos/34769799/pexels-photo-34769799.jpeg"
            alt="Reading"
            className="w-full h-48 sm:h-64 lg:h-100 object-cover rounded-lg"
          />
          {/* pequenos cards */}
        </div>
      </div>
    </div>
  );
}
