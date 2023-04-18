import { NextApiRequest, NextApiResponse } from "next"

type Test={
    text:string
}

export default function contact(req:NextApiRequest, res:NextApiResponse<Test>){
    const getData:string=req.body.inData;
    res.status(200).json({
        text:getData
    })
}