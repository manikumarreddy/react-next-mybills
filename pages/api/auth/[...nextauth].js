import NextAuth from "next-auth";
import  Providers from "next-auth/providers";

const options ={
    providers:[
        Providers.GitHub({
            clientId:process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_SECRET
        }),
        Providers.Okta({
            clientId: process.env.OKTA_ID,
            clientSecret: process.env.OKTA_CLIENT_SECRET,
            domain: process.env.OKTA_DOMAIN
        }),
        /*Providers.Email({
            server:{
                host:"",
                port:"",
                auth: {
                    user:"",
                    pass:""
                },
            },
            form:"",
        }),*/
    ],
}

export default(req,res)=>NextAuth(req,res,options);