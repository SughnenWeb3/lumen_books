export default function DashboardLoading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <div className="h-8 w-64 bg-stone-200 rounded animate-pulse mb-3" />
          <div className="h-4 w-48 bg-stone-200 rounded animate-pulse" />
        </div>
        
        <div className="flex items-center gap-4">
          <div className="h-10 w-36 bg-stone-200 rounded animate-pulse" />
          <div className="h-10 w-24 bg-stone-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <div className="w-full min-w-[800px]">
            {/* Header Skeleton */}
            <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex gap-4">
              <div className="h-4 w-1/4 bg-stone-200 rounded animate-pulse" />
              <div className="h-4 w-1/4 bg-stone-200 rounded animate-pulse" />
              <div className="h-4 w-1/4 bg-stone-200 rounded animate-pulse" />
              <div className="h-4 w-1/4 bg-stone-200 rounded animate-pulse" />
            </div>
            {/* Rows Skeleton */}
            <div className="divide-y divide-stone-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 w-1/3">
                    <div className="h-16 w-12 bg-stone-200 rounded animate-pulse shrink-0" />
                    <div className="space-y-2 w-full">
                      <div className="h-4 w-3/4 bg-stone-200 rounded animate-pulse" />
                      <div className="h-3 w-1/2 bg-stone-200 rounded animate-pulse" />
                    </div>
                  </div>
                  <div className="h-6 w-24 bg-stone-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-stone-200 rounded animate-pulse" />
                  <div className="h-4 w-24 bg-stone-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-stone-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
