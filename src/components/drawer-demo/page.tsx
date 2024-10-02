'use client'

import * as React from "react";
import { Button_v2 } from "../button/page";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function InstructionDrawer({ recipeId }: { recipeId: string }) {
  const [instructions, setInstructions] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  // Function to fetch instructions from API , Im using this UI cause [details] page failed to fetch api due whitespace init(api fault)
  async function fetchInstructions() {
    setLoading(true);
    setError(null);

    try {
      const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
      const data = await apiResponse.json();
      setInstructions(data.instructions); // Assuming 'instructions' is the correct key
    // } catch (err) {
    //   throw new Error(err)
      // setError("Failed to fetch instructions.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button_v2 className="font-mono">Get details</Button_v2>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm font-mono bg-red-400 rounded-md p-3">
          <DrawerHeader>
            <DrawerTitle className="font-mono text-xl">Recipe Instructions</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            {loading ? (
              <p>Loading instructions...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <p>{instructions ? instructions : "No instructions available"}</p>
            )}
          </div>
          <DrawerFooter>
            <Button_v2 onClick={fetchInstructions}>Tap to fetch Instructions</Button_v2>
            <DrawerClose asChild>
              <Button_v2 className="bg-red">Close</Button_v2>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
