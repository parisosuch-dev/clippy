export default async function DashboardPage() {
  return (
    <div className="bg-[#313338] rounded-lg w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white/30">select server</h1>
      <p className="text-white/30 font-light mt-2">
        if no servers are listed, clippy is not present in your discord servers
      </p>
    </div>
  );
}
