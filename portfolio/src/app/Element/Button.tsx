import Link from "next/link";
import React from "react";

type ButtonProps ={
    label: string,
    to:string
    icon?:React.ReactNode,
    type:string,
    size?:string
}
export default function Button(props:ButtonProps){
     return (
          <Link 
             className={`btn btn-${props.type} btn-${props.size} text-body`}
             href={props.to}
           >
              {props.label}
              {props.icon}
          </Link>
     )
}