# Shopping Lists

> Lists management


### To get started

```bash
npm install 
npm start 
```

You can find the server running on [http://localhost:3000](http://localhost:3000).


### To deploy

```bash
npm run build 
```
Drag and drop the content of the build folder into the S3 bucket


## User Stories
- [x] As a user, I want to view my lists
- [x] As a user, I want to add new lists that will be saved in the database
- [x] As a user, I want to be able to delete lists
- [x] As a user, I want to be able to make changes to my lists
- [x] As a user, I want to add items to my lists
- [ ] As a user, I want to delete items from my lists


## Things considered but not implemented
### With more time available, I would like to: 
- Delete and update items, or maybe have checkboxes for each item
- Order lists and items
- Write tests
- Automate the deployment


## Tech Stack
**Frontend:** React, TailwindCSS, Axios

**Backend:** AWS Lambda, API Gateway, S3, DynamoDB


## Author
Lory Costa - [LinkedIn Profile](https://www.linkedin.com/in/lory-costa-ab581134/)
