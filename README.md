## Shoping Cart


Application that implements a shopping cart with react query. 

View it here: https://user-registration-test.netlify.app
[![Netlify Status](https://api.netlify.com/api/v1/badges/86ee9240-f044-4deb-b4e1-1afa79accfa3/deploy-status)](https://app.netlify.com/sites/user-registration-test/deploys)

Git repository URL: https://github.com/Tueloper/user-registration.git


### Requirements
- All parameters should be required
- Must click on terms and aggreement checkbox
- Passwords must match
- Every step needs to be completed in order to see the next one.
- Confirm button click handler should send data to the API endpoint https://qnfpyomao9.execute-api.us-east-2.amazonaws.com/default/register-users


### Client Side Built with
- [React](https://reactjs.org/) - React Framework
- [Material UI](https://material-ui.com/) - React components for faster and easier web development.
- [Formik](https://formik.org/docs/overview) - Build forms in React
- [Yup](https://github.com/jquense/yup) - JavaScript object schema validator


### Server Side Built with
- [AWS Lambda](https://aws.amazon.com/lambda/?nc2=type_a/) - AWS Serverless Function
- [NodeJs](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Amazon DynamoDB](https://aws.amazon.com/dynamodb/?trk=ps_a134p000006padxAAA&trkCampaign=acq_paid_search_brand&sc_channel=PS&sc_campaign=acquisition_EEM&sc_publisher=Google&sc_category=Database&sc_country=EEM&sc_geo=EMEA&sc_outcome=acq&sc_detail=dynamodb&sc_content=DynamoDB_e&sc_matchtype=e&sc_segment=536452473269&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Database|DynamoDB|EEM|EN|Text|xx|Non-EU&s_kwcid=AL!4422!3!536452473269!e!!g!!dynamodb&ef_id=CjwKCAjwx8iIBhBwEiwA2quaqzTOGJgO-BnGIpwBj4qj7pX0tf6pqQL5T8-J3HNUdq2jzZZCQ2t5ZBoCSXsQAvD_BwE:G:s&s_kwcid=AL!4422!3!536452473269!e!!g!!dynamodb) - Database


### Process
The form process has 2 steps:
1. Input User Details:
    - Name (required)
    - Email (required)
2. Input Password:
    - Password (required)
    - Confirm Password (required)

