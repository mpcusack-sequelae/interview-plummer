# Setup
## Setup Python dependencies
* `pip install fastapi uvicorn littletable`

## Setup package dependencies
* `npm install --global yarn`
* From root of project `cd admin-frontend; yarn install; cd ..; cd frontend; yarn install; cd ..`

## Running Locally
For python backend, needed for both frontend and admin-frontend: from a terminal of the root of this project run:
`python backend/main.py`

For react quiz frontend: from a terminal of the root of this project run:
`cd frontend && yarn start`

For react admin frontend: from a terminal of the root of this project run:
`cd admin-frontend && yarn start`

## What is working
* Very basic front ends for taking a quiz (frontend) along with state management and loading of pseudo data
* Very basic admin for reporting for quiz participants (admin-frontend) along with state management and loading of pseudo data
 * Reporting for Population and Individual
* Very basic python api for pseudo listing saving of data
* Strong types and api clients from python to both front ends
* Most of the needed relationships for relational sql tables in memory 

## What is not working
* Saving data & listing data from in memory relational database
  * I reasoned with the explanations in DATABASE.md and as well relationships build in backend/app/setup_tables.py the added working wouldn't be needed for a discussion with interview team
  * I chose to invest time remaining time in documentation  
* Login
  * I chose not to implement a login/logout as this seems to be existing functionality already implemented by Lore
* Quiz Creation
* User management
* Split strategy for downloading quiz (vm) and saving quiz (serverless)
I also ran out of time for a fully working solution, which was expected, as indicated from Mike G. at project start
