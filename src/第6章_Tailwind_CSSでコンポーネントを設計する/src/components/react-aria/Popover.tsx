import { Popover } from "react-aria-components";

interface Props {}

export function PopoverAnimation({}: Props) {
  return (
    <Popover className="data-[entering]:animate-[fadeIn_300ms_ease]">
      It's popover
    </Popover>
  );
}
