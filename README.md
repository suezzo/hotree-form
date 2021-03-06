# Hotree-form

This is my implementation of a form for Hotree project.
It uses HTML5, CSS3, React, Redux, Styled-Components & Moment.js.
App based on React Create App boilerplate and was tested on Chromium 65, Google Chrome Mobile 65, Firefox 59.

You can check it [online](https://mydebian.tk/hotree-form/index.html) or run it locally, following the instruction below.

![Screenshot](./public/screenshot.png 'Screenshot')

## Instruction

For first you should have installed:

* Node.js
* NPM
* Patience

Open terminal and clone project from git:

`git clone git@github.com:styfrombrest/hotree-form.git`

Enter hotree-form dir by command:

`cd hotree-form`

Then install all app's dependencies:

`npm install`

To run App locally use:

`npm start`

Enjoy ;)

## Known issues

* Date/Time fields have no UI in IE

## Task

The app is a simple social networking platform called **Hotree**. Your task is to create a
form which covers some of the main functionalities - creation and joining of events. Also, to
ease up the search and grouping, users should be able to assign a category for each event.
Besides, events in our Hotree app:

* can be free or paid
* have a coordinator in charge
* have rewards points which users can collect for attendance

**Specification:**

1.  The form has validation

* Fields `title`, `description`, `date` and `coordinator` are mandatory.
* Description field has 140 character limit.
* There is a character counter below the description field.
* Events can’t be created prior to the actual date.
* It is ok to use HTML5 `date` and `time` input despite lack of support in all browsers.
* Time field should accept 12 hours time format but on the output, date should be formatted as `YYYY-MM-DDTHH:mm` in 24 hours format
* Field `payment` is mandatory in case of paid events, and fee input appears only when payment
  field is filled
* Select options are attached in JSON files.
* Coordinator field has a default selected option with currently logged in user - there is a list of users in JSON files, and you can assume you are logged in user with id 3 and this option should be always on the top of the list. You can use native select input.
* The `email` field should have an appropriate format.

2.  After successful validation, the filled form should be closed and the `Success` information should appear. All the data from the form should be displayed using `console.log`.

The appropriate output data structure:

```js
{
  title: string,
  description: string,
  category_id: number,
  paid_event: boolean,
  event_fee: number,
  reward: number,
  date: string, // YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: number, // in seconds
  coordinator: {
    email: string,
    id: string,
  },
  phone: string,
}
```

---

Thanks for attention.

Taras Semenyuk, 2018
