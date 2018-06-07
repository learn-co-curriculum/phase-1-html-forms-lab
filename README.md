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

## Apply What We Know of HTML Forms to Build a Contact Form

To see and test your form in action, run `httpserver` or open `index.html` in a
new browser tab. To test your work, run `learn`.

Some basic HTML has been provided for this lab, along with HTML comments on what
is needed.  Follow the provided comments and test messages to see what is needed
when creating the form.  At completion, your form should have:

* A _required_ text input for a full name with a placeholder, "Owner Name"
* A _required_ email type input for an email address with a placeholder, "Owner Email"
* A _tel_ type input for a telephone number with a placeholder, "Owner  Telephone (optional)"
* A text area for a user to include a message with a placeholder, "Dog notes"
* Labels for each text input
* A checkbox with text of your choosing
* A submit button

### The `required` Attribute

Generally, there are certain things that each websites determine is their "must
have" data. For your dog walking business, this information is the Owner Name,
and Owner Email. The `required` attribute prevents the browser from submitting a
form.  All required inputs must be filled in properly, preventing an unneeded
page reload. Luckily for us, This functionality is baked into HTML5 for us
automatically. All that is needed is to include the word `required` as an
attribute, without setting it to any value.

When an input is required, the `type` attribute (e.g., `text` vs `email`) will
determine what the browser checks. In the case of an email, for instance, the
input must match the format of an email address, including the "@".

## Conclusion

Forms are an essential way for users to submit data to a website. Some forms,
like search bars, only contain a single input field, but we can make them as
complex as we need.

Right now, we are only focused on building out the front end side of this form.
When a form is submitted, it is up to the _backend_ of a website to decide how
to handle and store form data when submitted. Now you've got everything you need
to keep in contact with current clients, and connect with new ones!

<p class='util--hide'>View <a href='https://learn.co/lessons/html-map-contact-form-code-along'>HTML Map Contact Form Code-along</a> on Learn.co and start learning to code for free.</p>
