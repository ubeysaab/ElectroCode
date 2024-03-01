let inputs = [
  {
    id:1,
    type:"text",
    name:"firstName",
    placeHolder:"firstName",
    errorMessage: "please enter a valid firstName that doesn't contain any spaces or special characters or numbers",
    pattern:"^[a-zA-z]{3,20}$"
    
  },
  {
    id:2,
    type:"text",
    name:"lastName",
    placeHolder:"lastName",
    errorMessage: "please enter a valid lastName that doesn't contain any spaces or special characters or numbers",
    pattern:"^[a-zA-z]{3,20}$"
  },
  {
    id:3,
    type:"email",
    name:"email",
    placeHolder:"email",
    errorMessage:"Please Enter Valid E-mail"
    
  },
  {
    id:4,
    type:"text",
    name:"subject",
    placeHolder:"subject"
    
  },

]
export default inputs