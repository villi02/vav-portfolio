"use client";

import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "Resume", href: "resume", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Milestones", href: "story", current: false },
  { name: "Academics", href: "academics", current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar: React.FC = () => {
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-3 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <span className="text-white font-bold text-2xl">VAV</span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-4 py-3 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2">
                <a
                  href="https://linkedin.com/in/vilhjalmur-arnar-vilhjalmsson"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-white text-white bg-black hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaLinkedin className="h-8 w-8" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/villi02"
                  className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-white text-white bg-black hover:bg-white hover:text-black transition-all duration-300"
                >
                  <FaGithub className="h-8 w-8" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-4 py-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
