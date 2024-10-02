
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { TextFade } from "../welcome-page/page"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { InstructionDrawer } from "../drawer-demo/page"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button_v2 } from "../button/page"






export default async function RecipeList({ recipeList }) {
    console.log(recipeList)
    return (
        <div className="p-4 mx-auto lg:mx-w-8xl md:max-w-6xl sm:max-w-full bg-slate-400">
            
            <div>
                <div><Link href="/"><Button_v2 className="font-mono rounded-md p-2">Go back</Button_v2></Link></div>
            <TextFade
                direction="up"
                className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
            >

                <h2 className="text-xl text-center sm:text-4xl font-mono font-bold tracking-tight md:text-6xl md:leading-[0rem] prose-h2:my-0 mt-20 mb-20">
                    Types of Recipes available
                </h2>

            </TextFade>

            </div>
            
           
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {
                    recipeList && recipeList.length > 0
                        ? recipeList.map((recipe) => (
                            // <Link href={`/recipe-list/${recipe.id}`}  >
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <div>
                                        <Card>
                                            <CardContent className="rounded-lg dark:bg-zinc-950 bg-zinc-50 overflow-hidden p-2 border pb-3 shadow-2xl cursor-pointer hover:scale-[1.1] transition-all">
                                                <div className="w-full aspect-w-16 aspect-h-8 lg:h-18">
                                                    <img
                                                        src={recipe.image}
                                                        alt={recipe.name}
                                                        className="w-full h-full object-cover object-top rounded-md shadow-2xl"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-gray-800 font-bold font-mono text:size-lg mt-5">{recipe.name}</h3>
                                                </div>
                                                <div className="flex flex-wrap items-center mt-6 gap-2">
                                                    <p className="text-semi-bold font-serif gap-2 text-gray-800">Rating</p> <h3 className="text-yellow-600 font-sans text:size-md ">{recipe.rating}</h3>
                                                </div>
                                                <div className="mt-5 mb-3 justify-center flex flex-wrap items-center">

                                                    {/* Pass the recipeId to the InstructionDrawer */}
                                                    <InstructionDrawer recipeId={recipe.id}>
                                                        <Drawer>
                                                            <DrawerTrigger><Button_v2>Submit</Button_v2></DrawerTrigger>
                                                            <DrawerContent>
                                                                <DrawerHeader>
                                                                    <DrawerTitle></DrawerTitle>
                                                                    <DrawerDescription></DrawerDescription>
                                                                </DrawerHeader>
                                                                <DrawerFooter>

                                                                    <DrawerClose>
                                                                        <Button_v2>Cancel</Button_v2>
                                                                    </DrawerClose>
                                                                </DrawerFooter>
                                                            </DrawerContent>
                                                        </Drawer>

                                                    </InstructionDrawer>
                                                </div>


                                            </CardContent>
                                        </Card>


                                    </div>

                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <p>Waiting time : {recipe.cookTimeMinutes} min</p>
                                    <p>Cuisine Type : {recipe.cuisine} </p>
                                </HoverCardContent>
                            </HoverCard>


                            // </Link>
                        ))
                        : null
                }

            </div>



        </div>
    )
}