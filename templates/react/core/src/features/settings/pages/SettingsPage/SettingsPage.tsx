export default function SettingsPage() {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-h)]">
          Settings
        </h1>
        <p className="text-sm opacity-60 mt-1">
          Manage your application preferences
        </p>
      </div>

      {/* CARD 1 */}
      <div className="p-5 border border-[var(--border)] rounded-xl space-y-3">
        <h2 className="font-semibold">Appearance</h2>

        <div className="flex items-center justify-between text-sm">
          <span>Dark Mode</span>
          <button className="px-3 py-1 rounded bg-purple-500/10 text-purple-500">
            System
          </button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="p-5 border border-[var(--border)] rounded-xl space-y-3">
        <h2 className="font-semibold">API</h2>

        <div className="text-sm opacity-70">
          Base URL:
        </div>

        <input
          className="w-full px-3 py-2 rounded border border-[var(--border)] bg-transparent outline-none focus:border-purple-500"
          placeholder="http://localhost:3000/api"
        />
      </div>

      {/* CARD 3 */}
      <div className="p-5 border border-[var(--border)] rounded-xl space-y-3">
        <h2 className="font-semibold text-red-400">Danger Zone</h2>

        <button className="text-sm px-3 py-2 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20">
          Reset App Data
        </button>
      </div>

    </div>
  );
}