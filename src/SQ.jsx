import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Link } from 'lucide-react';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Loader2Icon } from "lucide-react"
import { Clipboard } from 'lucide-react';
import { useState } from "react";






export default function SQ(){

  let [loading,setloading]=useState(false)
  let [short,setShort]=useState("")
  let [textInput,setTextInput]=useState("")


  function handleCopy(){
    
  }

async function handleLink(url){
    console.log(url)

  setloading(true)
  
  let res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`)
  let shorturl =await res.text()

  setShort(shorturl)
  console.log(shorturl)

 
  setloading(false)


}
  return(
<div className="bg-red-600 h-screen w-screen absolute bg-transparent flex justify-center items-center ">
    <Card className="absolute z-4 md:w-[40%]">
  <CardHeader>
    <CardTitle>Short links</CardTitle>
    <CardDescription>Type the link you want to shorten</CardDescription>
    <CardAction>  <Link /> </CardAction>
  </CardHeader>
  <CardContent>
    <p className="mb-2">Write a link</p>

    <div className="flex space-x-4">
    <Input onChange={((e)=>{
      console.log(e.target.value)
      setTextInput(e.target.value)


    })} />

  <Button onClick={(()=>{

    console.log("is clikc")
    handleLink(textInput)
    
  })}><p className="text-white" >Make</p></Button>
  </div>

  </CardContent>
  <CardFooter className="flex flex-col space-y-2">
   
     
     <Button size="sm" disabled variant="outline" className={` ${loading===false? "hidden":null}`}>
      <Loader2Icon className="animate-spin" />
      Please wait
    </Button>


 
   
    <div className="flex p-2 justify-center items-center">
        <Input className=""  placeholder={short} />

        <Button size="icon" className="size-8 mx-3" variant="secondary" onClick={(()=>{
        console.log("is copy")
       })}>

       <Clipboard  />

        </Button>
       </div>

  

  </CardFooter>
</Card>


  </div>


  )
  
}