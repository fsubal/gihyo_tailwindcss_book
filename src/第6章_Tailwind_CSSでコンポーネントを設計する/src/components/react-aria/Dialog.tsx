import { useRef } from "react";
import { useDialog, AriaDialogProps } from "react-aria";

interface Props extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export function Dialog({ title, children, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref} className="p-8">
      {title && (
        <h3 {...titleProps} className="mt-0">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
