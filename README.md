# cristinaionas
Craft CMS project powering the website of Cristina Ionas.

## Prerequisites 
Make sure to install the following software on your local machine before proceeding:
1. Composer
1. MySQL Server
1. NodeJS
1. PHP

## Installation
1. Clone the repository onto your local machine
1. Head to admin panel of the production environment and download the database backup: [link](https://cristinaionas.com/admin/utilities/db-backup)
1. Create database:
  - `mysql -u [username] -p`
  - `create database [database name]`
4. Import backup database `mysql -u [username] -p [database name] < backup.sql`
1. Setup the environment file:
  - run `cp .env.example .env` to create the environment file
  - fill in the database credentials
6. Run `composer install`
1. Run `npm install`

## Development
Run `./craft serve` and click the link printed in the console.  
Make sure to run `npm run styles` to have the SCSS files automatically compiled. 
