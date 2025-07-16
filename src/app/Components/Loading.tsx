
const ComingSoon = () => 
{
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 text-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-lg w-full animate-fade-in">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Coming Soon 🚧</h1>
        <p className="text-gray-600 text-base mb-6">
          We&apos;re crafting something amazing for you. This page is under construction — check back soon for updates!
        </p>
        <p className="text-sm text-gray-400">Thank you for your patience ❤️</p>
      </div>
    </div>
  );
};

export default ComingSoon;