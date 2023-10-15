import { useState, useCallback } from "react";
import { Transition } from "@headlessui/react";

export function MyComponent() {
  const [isShowing, setIsShowing] = useState(false);
  const onToggle = useCallback(() => {
    setIsShowing((prev) => !prev);
  }, []);

  return (
    <>
      <button onClick={onToggle}>押すと</button>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        フェードインする
      </Transition>
    </>
  );
}

interface SidebarProps {
  isShowing?: boolean;
}

export function Sidebar({ isShowing }: SidebarProps) {
  return (
    <Transition show={isShowing}>
      {/* 背景の暗い部分はフェードする */}
      <Transition.Child
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* ... */}
      </Transition.Child>

      {/* サイドバーの本体はスライドする */}
      <Transition.Child
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        {/* ... */}
      </Transition.Child>
    </Transition>
  );
}
