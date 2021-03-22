# react-next-mybills
A Static Application Which Demos Login and Page Routing functionalities using REACT &amp; NEXT JS 

Disclaimer: This Respository provides implimentation of Login mechanisam with GitHub and Okta to show static Bills where a primary user can view number of Lines  and its usage with respect to Data, Calls and Messages.

Application will use Custom REST API which provides mocking data with help of JSON Server which is another repository.
Please checkout  the GITHUB Repository Link for JSON SERVER: https://github.com/manikumarreddy/react-json-server

JSONSERVER runs on 8000 port : http://localhost:8000

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Pages & Flows:
1.Login Page
2.Landing Page (Users)
3.About Page
                              ----------------
      landingPage-> signIn ->| Users <-> User |->signout
                              ----------------

Application Demos Login and Logout functionalities with NEXT.js + REACT.
It Allows to Login either GITHUB or Okta Authentication Mechanisam.

Application will allows to view Home (Bill Information) Page through secured session only.
If User will try to access with out login will be redirect to login Page.

Application Demos, Page Routing, API Routing mechanisam with NEXT js.


