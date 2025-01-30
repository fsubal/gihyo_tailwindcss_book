import { useState, useCallback } from "react";
import classNames from "classnames";
import { Dialog } from "@headlessui/react";

interface Props {
  title: string;
  description: string;
  okLabel?: string;
  cancelLabel?: string;
}

export function MyDialog({
  title,
  description,
  okLabel = "OK",
  cancelLabel = "キャンセル",
}: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const onClose = useCallback(() => setIsOpen(false), []);

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={classNames("relative", "z-50")}
    >
      {/* 背景（バックドロップ） */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* モーダル本体部分 */}
      <div
        className={classNames(
          "fixed",
          "inset-0",
          "flex",
          "items-center",
          "justify-center",
          "p-4",
        )}
      >
        <Dialog.Panel
          className={classNames(
            "w-full",
            "max-w-sm",
            "rounded-sm",
            "bg-white",
            "p-6",
          )}
        >
          <Dialog.Title className="font-bold">{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>

          <div className="space-x-2 mt-3">
            <button
              className="bg-blue-500 text-white py-2 px-3 rounded-md"
              onClick={onClose}
            >
              {okLabel}
            </button>
            <button
              className="bg-gray-200 text-gray-500 py-2 px-3 rounded-md"
              onClick={onClose}
            >
              {cancelLabel}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
