"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5 md:p-10 border-t-2 border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-5 md:mb-0">
          <h2 className="text-2xl font-bold">VOOM</h2>
          <p className="mt-2">
            Supercharge your workflow with the power of AI - all in one place
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>Email: info@voom.com</p>
            <p>Phone: (+94)71 277-0284</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/services">Services</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>&copy; {new Date().getFullYear()} VOOM. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
