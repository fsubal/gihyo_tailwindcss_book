import { Button, Dialog, DialogTrigger, Modal } from "react-aria-components";

interface Props {
  title?: React.ReactNode;
  children: React.ReactNode;
}

export function DialogWithComponents({ title, children }: Props) {
  return (
    <DialogTrigger>
      <Button>開く</Button>
      <Modal>
        <Dialog>
          {({ close }) => (
            <div>
              <h1>{title}</h1>
              {children}
              <Button onPress={close}>閉じる</Button>
            </div>
          )}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
