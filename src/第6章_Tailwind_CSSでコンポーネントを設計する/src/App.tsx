import React from "react";
import { MyDialog as HeadlessUIDialog } from "./components/headlessui/MyDialog";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Dialog as ReactAriaDialog } from "./components/react-aria/Dialog";
import { DialogWithComponents } from "./components/react-aria/DialogWithComponent";

const Heading = ({ children }: React.PropsWithChildren) => (
  <h1 className="text-2xl font-bold">{children}</h1>
);

function App() {
  return (
    <div className="py-6 px-8 space-y-8">
      <section>
        <Heading>Using shadcn-ui</Heading>
        <Card className="mt-2">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
            <Button>Push me</Button>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>

      <section>
        <Heading>Using Headless UI</Heading>
        <HeadlessUIDialog title="Headless UI" description="is great!" />
      </section>

      <section>
        <Heading>Using React Aria</Heading>
        <ReactAriaDialog title="React Aria">AAAAAA</ReactAriaDialog>
      </section>

      <section>
        <Heading>Using React Aria Components</Heading>
        <DialogWithComponents title="React Aria Components">
          AAAAAA
        </DialogWithComponents>
      </section>
    </div>
  );
}

export default App;
