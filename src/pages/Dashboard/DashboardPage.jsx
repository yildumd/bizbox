// src/pages/Dashboard/DashboardPage.jsx
export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dashboard widgets will go here */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">My Ventures</h2>
        </div>
      </div>
    </div>
  );
}