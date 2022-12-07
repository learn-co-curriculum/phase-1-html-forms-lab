require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("index.html", () => {
  describe("the body", () => {
    it("contains a <form>", () => {
      const body = document.querySelector("body");

      const form = body.querySelector("form");
      const hint1 = "No <form> tag found";
      expect(form, hint1).to.exist;
    });
  });

  describe("the form", () => {
    before(() => {
      form = document.querySelector("form");
    });

    it("contains a 'text' type <input> tag with an id of 'fullname' and placeholder equal to 'Enter Name'", () => {
      const input = form.querySelector("input");
      const hint1 = "No <input> tag found";
      expect(input, hint1).to.exist;

      const hint2 = "No 'type' attribute was found on the first 'input' tag";
      expect(input, hint2).to.have.attribute("type");

      const hint3 =
        "The first input's 'type' attribute should be set to 'text'";
      expect(input, hint3).to.have.attribute("type", "text");

      const hint4 = "No 'id' attribute was found on the first 'input' tag";
      expect(input, hint4).to.have.attribute("id");

      const hint5 =
        "The first input's 'id' attribute should be set to 'fullname'";
      expect(input, hint5).to.have.attribute("id", "fullname");

      const hint6 =
        "No 'placeholder' attribute was found on the first 'input' tag";
      expect(input, hint6).to.have.attribute("placeholder");

      const hint7 =
        "The first input's 'placeholder' attribute should be set to 'Enter Name'";
      expect(input, hint7)
        .to.have.attribute("placeholder")
        .match(/enter name/i);
    });

    it("contains an 'email' type <input> tag with an id of 'email' and placeholder equal to 'Enter Email'", () => {
      const input = form.querySelectorAll("input")[1];
      const hint1 = "No <input> tag found";
      expect(input, hint1).to.exist;

      const hint2 = "No 'type' attribute was found on the second 'input' tag";
      expect(input, hint2).to.have.attribute("type");

      const hint3 =
        "The second input's 'type' attribute should be set to 'email'";
      expect(input, hint3).to.have.attribute("type", "email");

      const hint4 = "No 'id' attribute was found on the second 'input' tag";
      expect(input, hint4).to.have.attribute("id");

      const hint5 =
        "The second input's 'id' attribute should be set to 'email'";
      expect(input, hint5).to.have.attribute("id", "email");

      const hint6 =
        "No 'placeholder' attribute was found on the second 'input' tag";
      expect(input, hint6).to.have.attribute("placeholder");

      const hint7 =
        "The second input's 'placeholder' attribute should be set to 'Enter Email'";
      expect(input, hint7)
        .to.have.attribute("placeholder")
        .match(/enter email/i);
    });

    it("includes the 'required' attribute on the 'fullname' and 'email' input tags", () => {
      const inputs = form.querySelectorAll("input");
      for (let i = 0; i <= 1; i++) {
        let hint = `${inputs[i].id} input should have the 'required' attribute`;
        expect(inputs[i], hint).to.have.attribute("required");
      }
    });

    it("contains a 'tel' type <input> tag with an id of 'phone' and placeholder equal to 'Enter Telephone (optional)'", () => {
      const input = form.querySelectorAll("input")[2];
      const hint1 = "No <input> tag found";
      expect(input, hint1).to.exist;

      const hint2 = "No 'type' attribute was found on the third 'input' tag";
      expect(input, hint2).to.have.attribute("type");

      const hint3 = "The third input's 'type' attribute should be set to 'tel'";
      expect(input, hint3).to.have.attribute("type", "tel");

      const hint4 = "No 'id' attribute was found on the third 'input' tag";
      expect(input, hint4).to.have.attribute("id");

      const hint5 = "The third input's 'id' attribute should be set to 'phone'";
      expect(input, hint5).to.have.attribute("id", "phone");

      const hint6 =
        "No 'placeholder' attribute was found on the third 'input' tag";
      expect(input, hint6).to.have.attribute("placeholder");

      const hint7 =
        "The third input's 'placeholder' attribute should be set to 'Enter Telephone (optional)'";
      expect(input, hint7)
        .to.have.attribute("placeholder")
        .match(/enter telephone \(optional\)/i);
    });

    it("contains <label> tags for the fullname, email, phone and message form inputs", () => {
      const labels = form.querySelectorAll("label");
      const inputs = form.querySelectorAll("input");

      const hint1 = "No label tags found";
      expect(labels, hint1).to.exist;

      for (let i = 0; i < 3; i++) {
        const existHint = `No label tag for ${inputs[i].id} input found`;
        expect(labels[i], existHint).to.exist;

        const attrHint = `Include a label with a 'for' attribute set to '${inputs[i].id}'`;
        expect(labels[i], attrHint).to.have.attribute("for", inputs[i].id);
      }
    });

    it("contains a <textarea> tag with an id of 'message' and placeholder equal to 'Enter Message'", () => {
      const textarea = form.querySelector("textarea");
      const hint1 = "No <textarea> tag found";
      expect(textarea, hint1).to.exist;

      const hint2 = "No 'id' attribute was found on the 'textarea' tag";
      expect(textarea, hint2).to.have.attribute("id");

      const hint3 = "The textarea's 'id' attribute should be set to 'message'";
      expect(textarea, hint3).to.have.attribute("id", "message");

      const hint4 =
        "No 'placeholder' attribute was found on the 'textarea' tag";
      expect(textarea, hint4).to.have.attribute("placeholder");

      const hint5 =
        "The textarea's 'placeholder' attribute should be set to 'Enter Message'";
      expect(textarea, hint5)
        .to.have.attribute("placeholder")
        .match(/enter message/i);
    });

    it("contains a checkbox", () => {
      const checkbox = form.querySelectorAll('[type="checkbox"]');
      const hint = "No 'checkbox' input found";
      expect(checkbox, hint).to.exist;
    });

    it("contains a submit type input", () => {
      const submit = form.querySelectorAll('[type="submit"]');
      const hint = "No 'submit' type input found";
      expect(submit, hint).to.exist;
    });
  });
});
