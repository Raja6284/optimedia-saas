/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useClerk, useUser } from "@clerk/nextjs";
import {
  LogOutIcon,
  MenuIcon,
  LayoutDashboardIcon,
  Share2Icon,
  UploadIcon,
  ImageIcon,
  RemoveFormatting,
} from "lucide-react";


const sidebarItems = [
  { href: "/home", icon: LayoutDashboardIcon, label: "Home Page" },
  { href: "/social-share", icon: Share2Icon, label: "Social Share" },
  { href: "/video-upload", icon: UploadIcon, label: "Video Upload" },
  { href: "/remove-bg", icon: RemoveFormatting, label: "Remove BG" },
];

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();
  const { user } = useUser();

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="drawer lg:drawer-open min-h-screen">
      <input
        id="sidebar-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={() => setSidebarOpen(!sidebarOpen)}
      />
      <div className="drawer-content flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="w-full bg-base-200 sticky top-0 z-50">
          <div className="navbar px-2 sm:px-4 lg:px-8">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="sidebar-drawer"
                className="btn btn-square btn-ghost drawer-button"
              >
                <MenuIcon className="h-5 w-5" />
              </label>
            </div>
            <div className="flex-1 min-w-0">
              <Link href="/" onClick={handleLogoClick}>
                <div className="btn btn-ghost normal-case text-lg sm:text-xl lg:text-2xl font-bold tracking-tight cursor-pointer px-2">
                  <span className="truncate">Media Hub</span>
                </div>
              </Link>
            </div>
            <div className="flex-none">
              {user && (
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <div className="avatar">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full">
                      <img
                        src={user.imageUrl}
                        alt={
                          user.username || user.emailAddresses[0].emailAddress
                        }
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <span className="hidden sm:inline text-xs sm:text-sm truncate max-w-20 sm:max-w-32 lg:max-w-48">
                    {user.username || user.emailAddresses[0].emailAddress}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-ghost btn-circle btn-sm sm:btn-md"
                    title="Sign Out"
                  >
                    <LogOutIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-grow overflow-x-hidden">
          <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
            {children}
          </div>
        </main>
      </div>
      <div className="drawer-side z-40">
        <label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
        <aside className="bg-base-200 w-60 sm:w-64 h-full flex flex-col">
          <div className="flex items-center justify-center py-4 border-b border-base-300">
            <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
          </div>
          <ul className="menu p-2 sm:p-4 w-full text-base-content flex-grow space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-primary text-white"
                      : "hover:bg-base-300"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="text-sm sm:text-base truncate">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          {user && (
            <div className="p-2 sm:p-4 border-t border-base-300">
              <button
                onClick={handleSignOut}
                className="btn btn-outline btn-error w-full btn-sm sm:btn-md"
              >
                <LogOutIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Sign Out</span>
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}