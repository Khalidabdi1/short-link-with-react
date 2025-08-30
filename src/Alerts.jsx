import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"



export default function Alerts({children}){
    return(
<div className="absolute z-50  bottom-2 left-1">
<Alert variant="default | destructive" >
 {children[0]}
  <AlertTitle>{children[1]}</AlertTitle>
  <AlertDescription>
    {children[2]}
  </AlertDescription>
</Alert>
</div>
    )
}