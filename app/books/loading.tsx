export default function BooksLoading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="h-10 w-48 bg-stone-200 rounded animate-pulse mb-8" />
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white border border-stone-200 rounded-xl p-6 mb-6 h-64 animate-pulse" />
          <div className="bg-white border border-stone-200 rounded-xl p-6 h-48 animate-pulse" />
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-stone-200 rounded-xl p-5 h-[380px] animate-pulse flex flex-col">
                <div className="w-full h-[230px] bg-stone-200 rounded mb-4" />
                <div className="h-4 w-3/4 bg-stone-200 rounded mb-2" />
                <div className="h-3 w-1/2 bg-stone-200 rounded mb-4" />
                <div className="mt-auto flex justify-between">
                  <div className="h-5 w-16 bg-stone-200 rounded" />
                  <div className="h-5 w-12 bg-stone-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
