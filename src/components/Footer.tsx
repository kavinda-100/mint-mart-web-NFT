import React from "react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer
      className={cn(
        "bg-gray-900 py-12 text-gray-300 md:py-16",
        "border-t border-gray-800",
        "px-4 sm:px-6 lg:px-8",
      )}
    >
      <div className="container mx-auto">
        <div
          className={cn(
            "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4",
            "mb-12",
          )}
        >
          {/* Logo Section */}
          <div className="space-y-4">
            <h1
              className={cn(
                "text-2xl font-bold text-emerald-400",
                "tracking-wider",
              )}
            >
              NFT Galaxy
            </h1>
            <p className={cn("text-gray-400", "text-sm")}>
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Blog Section */}
          <div className="space-y-4">
            <h3
              className={cn(
                "text-lg font-semibold text-emerald-400",
                "tracking-wider",
              )}
            >
              Blog
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Latest Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Authors
                </a>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="space-y-4">
            <h3
              className={cn(
                "text-lg font-semibold text-emerald-400",
                "tracking-wider",
              )}
            >
              Information
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4">
            <h3
              className={cn(
                "text-lg font-semibold text-emerald-400",
                "tracking-wider",
              )}
            >
              FAQ
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  General
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Buying
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Selling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={cn(
                    "text-gray-400 transition-colors hover:text-emerald-400",
                    "hover:underline",
                  )}
                >
                  Technical
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div
          className={cn(
            "flex flex-col items-center justify-between md:flex-row",
            "text-center md:text-left",
            "text-sm text-gray-500",
            "mt-8",
          )}
        >
          <p className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} NFT Galaxy. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className={cn(
                "transition-colors hover:text-emerald-400",
                "hover:underline",
              )}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className={cn(
                "transition-colors hover:text-emerald-400",
                "hover:underline",
              )}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
