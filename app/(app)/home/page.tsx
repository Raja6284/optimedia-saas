"use client"
import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import { Video } from "../../../types/index"

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="relative flex flex-col items-center">
        {/* Main Spinner Container */}
        <div className="relative w-16 h-16">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-16 h-16 border-4 border-gradient-to-r from-cyan-200 to-purple-200 rounded-full opacity-30"></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-1 w-14 h-14 border-4 border-transparent border-t-gradient-to-r border-t-cyan-500 rounded-full animate-spin"></div>
          
          {/* Inner Ring */}
          <div className="absolute inset-2 w-12 h-12 border-3 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Core Dot */}
          <div className="absolute inset-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
        </div>
        
        {/* Pulsing Dots */}
        <div className="flex space-x-2 mt-6">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Loading Text */}
        <div className="mt-6 text-center">
          <p className="text-lg font-medium bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Loading
          </p>
          <p className="text-sm text-gray-500 mt-1 animate-pulse">
            Please wait while we prepare your content...
          </p>
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse -z-10"></div>
      </div>
    </div>
  );
}


function Home() {
    const [videos, setVideos] = useState<Video[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchVideos = useCallback(async () => {
        try {
            const response = await axios.get("/api/videos")
            if(Array.isArray(response.data)) {
                setVideos(response.data)
            } else {
                throw new Error(" Unexpected response format");

            }
        } catch (e) {
            console.log(e);
            setError("Failed to fetch videos")
            console.log(error)

        } finally {
            setLoading(false)
        }
    }, [error])

    useEffect(() => {
        fetchVideos()
    }, [fetchVideos])

    // const handleDownload = useCallback((url: string, title: string) => {
    //     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    //     () => {
    //         const link = document.createElement("a");
    //         link.href = url;
    //         link.setAttribute("download", `${title}.mp4`);
    //         link.setAttribute("target", "_blank");
    //         document.body.appendChild(link);
    //         link.click();
    //         document.body.removeChild(link);

    //     }

    // }, [])


    const handleDownload = useCallback((url: string, title: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${title}.mp4`);
  link.setAttribute("target", "_blank");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}, []);


    if(loading){
        return <LoadingSpinner/>
    }

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Videos</h1>
          {videos.length === 0 ? (
            <div className="text-center text-lg text-red-600">
              No videos available
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        video={video}
                        onDownload={handleDownload}
                    />
                ))
              }
            </div>
          )}
        </div>
      );
}

export default Home