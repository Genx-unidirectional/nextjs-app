function layout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full grid grid-rows-3">
      <div className="bg-purple-500">{children}</div>
      <div className="bg-red-500">{analytics}</div>
      <div className="bg-orange-500">{team}</div>
    </div>
  );
}
export default layout;
