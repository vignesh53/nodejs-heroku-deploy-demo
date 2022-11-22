const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/* 
    Incase you are using mongodb atlas database uncomment below line
    and replace "mongoAtlasUri" with your mongodb atlas uri.
*/
// mongoose.connect( mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/', (req, res) => {
  //res.send('Hello World!')
  //let message = req.query.message || req.body.message || 'Hello World!';
  let message="Hello World";
 /*  if(req.body.sessionInfo.parameters.confirmation_number){
    //message="Thank you for the confirmation number"+ req.body.sessionInfo.parameters.confirmation_number;
    message="Here is the flight information:"
  } */

  let message2="You have round trip ticket reservation departure from Austin on September 1st, 2022 to Boston and a return trip flying from Boston on September 10th, 2022"
  const responseMsg={
      fulfillment_response: {
        messages: [
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [message]
            }
          },
          {
            text: {
              //fulfillment text response to be sent to the agent
              text: [message2]
            }
          }
        ]
      }
    }
  res.status(200).send(responseMsg);
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})