# HTML Contact Form Lab

## Problem Statement

So far, you've developed a pretty solid neighborhood dog walking business, but
you'd love to be able to have a better internet presence and to gather more
clients to build your empire. One of the most common ways to do this is on a
website is to provide a _contact form_.

In this lab, we will practice what we've learned about HTML forms by creating a
contact form similar to those we see on business websites.


## Objectives

1. Apply what we know of HTML forms to build a contact form


## Build a Contact Form

To see and test your form in action, run `httpserver` or open `index.html` in a
new browser tab. To test your work, run `learn`.

Some basic HTML has been provided for this lab, complete with comments on what
you need to implement. Use these inline comments and the tests to guide your
work. Once completed, your form should have:

* A _required_ **text** type input for a full name with the placeholder value: "Owner Name"
* A _required_ **email** type input for an email address with a placeholder value: "Owner Email"
* A **tel** type input for a telephone number with a placeholder value: "Owner  Telephone (optional)"
* A text area for a user to include a message with a placeholder value: "Dog notes"
* Labels for each input field
* A checkbox with text of your choosing
* A submit button


#### The `required` Attribute

Often, forms will have certain fields that they require the user to provide
information for (i.e. an email address field). For your dog walking business,
our required fields are the Owner Name and Email. The `required` attribute
prevents the browser from submitting a form unless they are filled in properly.

Luckily for us, This functionality is built into HTML5 already. All we need to
do is include the word `required` as an attribute, i.e.: 
`<input type="text" id="name" required>`

When an input is required, the `type` attribute (i.e., `text` vs `email`) will
determine what the browser checks. In the case of an email, for instance, the
input must match the format of an email address, including the "@".


## Conclusion

Forms are an essential way for users to submit data to a website. Some forms,
like search bars, only contain a single input field, but we can make them as
complex as we need.

Right now, we are only focused on building out the front end side of this form.
When a form is submitted, it is up to the _backend_ of a website to decide how
to handle and store form data. 

Once you implement your form, you will have everything you need to keep in
contact with current clients and connect with new ones!

<p class='util--hide'>View <a href='https://learn.co/lessons/html-map-contact-form-code-along'>HTML Map Contact Form Code-along</a> on Learn.co and start learning to code for free.</p>
