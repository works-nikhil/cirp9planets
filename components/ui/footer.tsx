import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Bottom area */}
          <div className="flex justify-center">
            {/* Copyrights note */}
            <p className="text-gray-200 text-sm mr-4">
              &copy; 9Planets Products Pvt. Ltd. Plot No- I-20, Khed City DTA,
              Khed (Rajgurunagar), Pune 410 505.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
